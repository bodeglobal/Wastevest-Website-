import { NextResponse } from "next/server";

const mailerLiteUrl = "https://connect.mailerlite.com/api/subscribers";

type SubscribeRequest = {
	email?: unknown;
	emails?: unknown;
};

type SubscriberResult = {
	email: string;
	status: number;
};

function getEmails(body: SubscribeRequest): string[] {
	const submittedEmails = body.emails ?? body.email;
	const emails = Array.isArray(submittedEmails)
		? submittedEmails
		: [submittedEmails];

	return emails.map((email) => (typeof email === "string" ? email.trim() : ""));
}

function getResponseStatus(results: SubscriberResult[]) {
	if (results.every((result) => result.status === 201)) {
		return 201;
	}

	if (results.every((result) => result.status === 200)) {
		return 200;
	}

	return 207;
}

export async function POST(request: Request) {
	const token = process.env.MAILERLITE_API_TOKEN;

	if (!token) {
		return NextResponse.json(
			{ message: "Subscription client is not configured." },
			{ status: 503 },
		);
	}

	let body: SubscribeRequest;

	try {
		body = (await request.json()) as SubscribeRequest;
	} catch {
		return NextResponse.json(
			{ message: "Request body must be valid JSON." },
			{ status: 400 },
		);
	}

	const emails = getEmails(body);
	const invalidEmail = emails.find(
		(email) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
	);

	if (!emails.length || invalidEmail) {
		return NextResponse.json(
			{ message: "Please provide valid email address(es)." },
			{ status: 422 },
		);
	}

	const groups = process.env.MAILERLITE_GROUP_ID
		? [process.env.MAILERLITE_GROUP_ID]
		: undefined;

	const responses = await Promise.all(
		emails.map(async (email): Promise<SubscriberResult> => {
			const response = await fetch(mailerLiteUrl, {
				method: "POST",
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: email.trim(), groups }),
			});

			return { email: email.trim(), status: response.status };
		}),
	);

	const responseStatus = getResponseStatus(responses);

	return NextResponse.json(
		{
			message:
				responseStatus === 207
					? "Some subscribers could not be added."
					: "Subscribers processed.",
			results: responses,
		},
		{ status: responseStatus },
	);
}

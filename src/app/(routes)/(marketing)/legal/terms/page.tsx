import TermsPage from "@/app/features-ui/legal/terms";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
    title: "Terms and Conditions",
    description:
        "Review the terms and conditions governing use of WasteVest services and the RouteBeacon platform.",
    path: "/legal/terms",
});

export default function Page() {
    return <TermsPage />;
}
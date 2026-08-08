import LegalPage from "@/app/features-ui/legal";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
    title: "Legal",
    description:
        "Read WasteVest's legal information, terms and conditions, and privacy policy.",
    path: "/legal",
});

export default function Page(){
    return <LegalPage />
}
import AboutPageEntry from "@/app/features-ui/about/page-entry";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ViewTransition } from "react";

export const metadata: Metadata = createPageMetadata({
  title: "About WasteVest",
  description:
    "Learn how WasteVest builds technology, partnerships and climate literacy for Africa's just transition.",
  path: "/about",
});

export default function Page() {
  return (
    <ViewTransition>
      <AboutPageEntry />
    </ViewTransition>
  );
}

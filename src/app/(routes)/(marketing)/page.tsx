import HomePageEntry from "@/app/features-ui/home/page-entry";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ViewTransition } from "react";

export const metadata: Metadata = createPageMetadata({
  title: "Climate Action and Circular Economy Solutions",
  description:
    "WasteVest helps people, businesses and communities turn climate awareness into practical action through technology, carbon literacy and circular economy solutions.",
  path: "/",
});

export default function Home() {
  return (
    <ViewTransition>
      <HomePageEntry />
    </ViewTransition>
  );
}

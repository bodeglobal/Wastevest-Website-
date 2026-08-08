import RoutebeaonPageEntry from "@/app/features-ui/routebeacon/page-entry";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ViewTransition } from "react";

export const metadata: Metadata = createPageMetadata({
  title: "RouteBeacon Waste Collection and Recycling",
  description:
    "Schedule waste and recycling pickups, manage recyclables and connect with trusted collection partners through RouteBeacon.",
  path: "/routebeacon",
});

export default function Page() {
  return (
    <ViewTransition>
      <RoutebeaonPageEntry />
    </ViewTransition>
  );
}

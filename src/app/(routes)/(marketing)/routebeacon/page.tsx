import RoutebeaonPageEntry from "@/app/features-ui/routebeacon/page-entry";
import { ViewTransition } from "react";

export default function Page() {
  return (
    <ViewTransition>
      <RoutebeaonPageEntry />
    </ViewTransition>
  );
}

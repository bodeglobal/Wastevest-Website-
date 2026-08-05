import AboutPageEntry from "@/app/features/about/page-entry";
import { ViewTransition } from "react";

export default function Page() {
  return (
    <ViewTransition>
      <AboutPageEntry />
    </ViewTransition>
  );
}

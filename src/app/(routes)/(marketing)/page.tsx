import HomePageEntry from "@/app/features/home/page-entry";
import { ViewTransition } from "react";

export default function Home() {
  return (
    <ViewTransition>
      <HomePageEntry />
    </ViewTransition>
  );
}

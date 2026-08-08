import NavigationBar from "@/components/navbar/navbar";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";

const CarbonLiteracyTrainingPageEntry = dynamic(
  () => import("@/app/features-ui/solutions/carbon-literacy-training"),
);
const CircularEconomyPageEntry = dynamic(
  () => import("@/app/features-ui/solutions/circular-economy"),
);
const CommunityEngagementPageEntry = dynamic(
  () => import("@/app/features-ui/solutions/community-engagement"),
);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug == "circular-economy")
    return (
      <ViewTransition enter={"slide-in"} exit={"slide-out"}>
        <CircularEconomyPageEntry />
      </ViewTransition>
    );
  if (slug == "carbon-litracy-training")
    return (
      <ViewTransition enter={"slide-in"} exit={"slide-out"}>
        <CarbonLiteracyTrainingPageEntry />
      </ViewTransition>
    );
  if (slug == "community-engagement")
    return (
      <ViewTransition enter={"slide-in"} exit={"slide-out"}>
        <CommunityEngagementPageEntry />
      </ViewTransition>
    );

  return notFound();
}

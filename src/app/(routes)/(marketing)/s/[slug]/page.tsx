import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";

const CarbonLiteracyTrainingPageEntry = dynamic(
  () => import("@/app/features/solutions/carbon-literacy-training"),
);
const CircularEconomyPageEntry = dynamic(
  () => import("@/app/features/solutions/circular-economy"),
);
const CommunityEngagementPageEntry = dynamic(
  () => import("@/app/features/solutions/community-engagement"),
);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug == "circular-economy")
    return (
      <ViewTransition enter={"auto"} exit={"auto"}>
        <CircularEconomyPageEntry />
      </ViewTransition>
    );
  if (slug == "carbon-litracy-training")
    return (
      <ViewTransition enter={"auto"} exit={"auto"}>
        <CarbonLiteracyTrainingPageEntry />
      </ViewTransition>
    );
  if (slug == "community-engagement")
    return (
      <ViewTransition  enter={"auto"} exit={"auto"}>
        <CommunityEngagementPageEntry />
      </ViewTransition>
    );

  return notFound();
}

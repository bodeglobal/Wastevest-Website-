import NavigationBar from "@/components/navbar/navbar";
import { createPageMetadata } from "@/lib/seo";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
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

const solutionMetadata = {
  "circular-economy": {
    title: "Circular Economy Solutions",
    description:
      "Practical circular economy solutions that help organisations reduce waste and create lasting value.",
  },
  "carbon-litracy-training": {
    title: "Carbon Literacy Training",
    description:
      "Build the knowledge, confidence and practical skills to take meaningful climate action through Carbon Literacy training.",
  },
  "community-engagement": {
    title: "Community Engagement and Climate Action",
    description:
      "Design community-led engagement and climate action programmes that create practical, measurable impact.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = solutionMetadata[slug as keyof typeof solutionMetadata];

  if (!page) return {};

  return createPageMetadata({
    ...page,
    path: `/s/${slug}`,
  });
}

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

import SolutionsPageEntry from "@/app/features/solutions/page-entry";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SolutionsPageEntry slug={slug} />;
}

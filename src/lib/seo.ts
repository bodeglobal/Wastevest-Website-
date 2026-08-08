import type { Metadata } from "next";

export const siteUrl = process.env.SITE_URL ?? "https://wastevest.com";

export const siteMetadata = {
  name: "WasteVest",
  description:
    "WasteVest builds technology, climate literacy and circular economy solutions for a cleaner, more accountable Africa.",
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: siteMetadata.name,
      title,
      description,
      locale: "en_NG",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

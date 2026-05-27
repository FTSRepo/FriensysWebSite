import type { Metadata } from "next";
import { site } from "./site";

interface BuildMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
  noIndex = false,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const url = `${site.url}${path}`;
  const desc = description ?? site.description;
  const ogSlug = path === "/" ? "home" : path.slice(1).replace(/\//g, "-");
  const ogUrl =
    ogImage ??
    `/api/og/${ogSlug}?title=${encodeURIComponent(title)}&description=${encodeURIComponent(desc)}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description: desc,
      url,
      siteName: site.name,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: title }],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description: desc,
      images: [ogUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true },
        },
  };
}

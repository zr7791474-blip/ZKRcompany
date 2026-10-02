import type { Metadata } from "next";
import { site } from "./content";

/**
 * One place for per-page metadata so every page gets: its own canonical, og:url,
 * unique title/description and a share image. (Next replaces — not merges — a page's
 * `openGraph`, so the image must be repeated here.)
 */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const full = `${title} | ZKR`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: full,
      description,
      siteName: "ZKR",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.identity }],
    },
    twitter: {
      card: "summary_large_image",
      site: site.twitterHandle,
      title: full,
      description,
      images: ["/opengraph-image"],
    },
  };
}

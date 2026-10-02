import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/content";

// No fabricated lastModified dates: we only list URLs and let crawlers decide freshness.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/work", priority: 0.9 },
    ...projects.map((p) => ({ path: `/work/${p.slug}`, priority: 0.8 })),
    { path: "/services", priority: 0.8 },
    { path: "/pricing", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];
  return paths.map(({ path, priority }) => ({ url: `${site.url}${path}`, priority }));
}

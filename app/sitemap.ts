import type { MetadataRoute } from "next";

const BASE_URL = "https://zkrcompany.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/work", priority: 0.8, changeFrequency: "weekly" },
    { path: "/process", priority: 0.7, changeFrequency: "yearly" },
    { path: "/technologies", priority: 0.6, changeFrequency: "yearly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/careers", priority: 0.5, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

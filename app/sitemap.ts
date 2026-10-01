import type { MetadataRoute } from "next";
import { SPECIALISTS } from "@/lib/specialists";
import { POSTS } from "@/lib/blog";

const BASE_URL = "https://www.insside.co";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/profesionales-main", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/recursos", priority: 0.6, changeFrequency: "monthly" },
  { path: "/conocenos", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const specialistEntries: MetadataRoute.Sitemap = SPECIALISTS.map((specialist) => ({
    url: `${BASE_URL}/profesionales/${specialist.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...specialistEntries, ...blogEntries];
}

import type { MetadataRoute } from "next";
import { readBlogs } from "../lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await readBlogs();

  return [
    {
      url: "https://khilan.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://khilan.dev/#projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://khilan.dev/#blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `https://khilan.dev/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "never" as const,
      priority: 0.6,
    })),
  ];
}

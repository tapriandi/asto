import type { MetadataRoute } from "next";
import { site } from "@/site.config";

const BASE_URL = "https://astodigi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/works", "/about", "/blog", "/contact"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...site.projects.map((project) => ({
      url: `${BASE_URL}/works/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...site.posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

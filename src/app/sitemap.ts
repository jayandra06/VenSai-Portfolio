import type { MetadataRoute } from "next";
import { SERVICE_CATEGORIES } from "@/data/vensai-data";
import { SITE_URL } from "@/lib/seo";

const LAST_MODIFIED = new Date("2026-10-09T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.95, changeFrequency: "weekly" },
    { path: "/solutions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/solutions/ecommerce", priority: 0.9, changeFrequency: "weekly" },
    { path: "/solutions/consulting", priority: 0.9, changeFrequency: "weekly" },
    { path: "/solutions/support", priority: 0.9, changeFrequency: "weekly" },
    { path: "/industries", priority: 0.85, changeFrequency: "weekly" },
    { path: "/insights", priority: 0.85, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.75, changeFrequency: "weekly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" },
    { path: "/cookies", priority: 0.3, changeFrequency: "monthly" },
  ];

  const staticEntries = coreRoutes.map((route) => ({
    url: `${SITE_URL}${route.path || "/"}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries = SERVICE_CATEGORIES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  return [...staticEntries, ...serviceEntries];
}


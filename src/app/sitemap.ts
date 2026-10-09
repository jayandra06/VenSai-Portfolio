import type { MetadataRoute } from "next";
import { SERVICE_CATEGORIES } from "@/data/vensai-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vensailabs.com";

  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/solutions/ecommerce",
    "/solutions/consulting",
    "/solutions/support",
    "/industries",
    "/about",
    "/insights",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICE_CATEGORIES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Primary Rule: All bots ────────────────────────────────────────────
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/*?*sort=",
          "/*?*filter=",
        ],
      },
      // ── Google (all crawlers) ─────────────────────────────────────────────
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/brand/", "/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Bing / Microsoft ─────────────────────────────────────────────────
      {
        userAgent: "Bingbot",
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "msnbot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Yahoo / Slurp ────────────────────────────────────────────────────
      {
        userAgent: "Slurp",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── DuckDuckGo ───────────────────────────────────────────────────────
      {
        userAgent: "DuckDuckBot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Yandex (Russia / Europe) ─────────────────────────────────────────
      {
        userAgent: "YandexBot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Baidu ────────────────────────────────────────────────────────────
      {
        userAgent: "Baiduspider",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Sogou ────────────────────────────────────────────────────────────
      {
        userAgent: "Sogou",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Exabot ───────────────────────────────────────────────────────────
      {
        userAgent: "Exabot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Facebook / Meta (OG preview) ─────────────────────────────────────
      {
        userAgent: "facebookexternalhit",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── LinkedIn Preview ─────────────────────────────────────────────────
      {
        userAgent: "LinkedInBot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Twitter Card ─────────────────────────────────────────────────────
      {
        userAgent: "Twitterbot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Apple / iMessage link preview ────────────────────────────────────
      {
        userAgent: "Applebot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── WhatsApp link preview ────────────────────────────────────────────
      {
        userAgent: "WhatsApp",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Ahrefs / SEO auditing tools ──────────────────────────────────────
      {
        userAgent: "AhrefsBot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Semrush ──────────────────────────────────────────────────────────
      {
        userAgent: "SemrushBot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Moz ──────────────────────────────────────────────────────────────
      {
        userAgent: "rogerbot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // ── Majestic ─────────────────────────────────────────────────────────
      {
        userAgent: "MJ12bot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
    ],
    host: SITE_URL,
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap-pages.xml`,
    ],
  };
}


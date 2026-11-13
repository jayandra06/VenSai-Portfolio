import type { MetadataRoute } from "next";
import { CASE_STUDY_BLUEPRINTS, SERVICE_CATEGORIES } from "@/data/vensai-data";
import { SITE_URL } from "@/lib/seo";

// ── Dates ─────────────────────────────────────────────────────────────────────
const LAST_MODIFIED_CORE = new Date("2026-10-22T00:00:00.000Z");
const LAST_MODIFIED_SERVICES = new Date("2026-10-22T00:00:00.000Z");

// ── Geo target locales ────────────────────────────────────────────────────────
// Covering: USA, UK, Canada, Australia, Germany, All of Europe, UAE (Dubai /
// Abu Dhabi), Egypt, Italy (Rome), India — plus x-default fallback.
const GEO_ALTERNATES = [
  { hreflang: "x-default", lang: "en" },
  { hreflang: "en", lang: "en" },
  { hreflang: "en-IN", lang: "en" },
  { hreflang: "en-US", lang: "en" },
  { hreflang: "en-GB", lang: "en" },
];

/** Build the hreflang `alternates.languages` map for a given path */
function buildAlternates(path: string) {
  const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");
  const url = `${SITE_URL}${normalizedPath || "/"}`;

  const languages: Record<string, string> = {};
  for (const { hreflang } of GEO_ALTERNATES) {
    languages[hreflang] = url;
  }
  return { canonical: url, languages };
}

// ── Core routes ───────────────────────────────────────────────────────────────
type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

const CORE_ROUTES: {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
  section: string;
}[] = [
  { path: "/",                         priority: 1.0,  changeFrequency: "weekly",  section: "home" },
  { path: "/services",                 priority: 0.95, changeFrequency: "weekly",  section: "services" },
  { path: "/vendorship",               priority: 0.92, changeFrequency: "weekly",  section: "vendorship" },
  { path: "/work",                     priority: 0.9,  changeFrequency: "weekly",  section: "work" },
  { path: "/solutions",                priority: 0.90, changeFrequency: "weekly",  section: "solutions" },
  { path: "/solutions/ecommerce",      priority: 0.90, changeFrequency: "weekly",  section: "solutions" },
  { path: "/solutions/consulting",     priority: 0.90, changeFrequency: "weekly",  section: "solutions" },
  { path: "/solutions/support",        priority: 0.90, changeFrequency: "weekly",  section: "solutions" },
  { path: "/industries",               priority: 0.85, changeFrequency: "weekly",  section: "industries" },
  { path: "/insights",                 priority: 0.85, changeFrequency: "weekly",  section: "insights" },
  { path: "/contact",                  priority: 0.88, changeFrequency: "monthly", section: "contact" },
  { path: "/about",                    priority: 0.80, changeFrequency: "monthly", section: "about" },
  { path: "/careers",                  priority: 0.75, changeFrequency: "weekly",  section: "careers" },
  { path: "/privacy-notice",           priority: 0.20, changeFrequency: "monthly", section: "legal" },
  { path: "/terms-and-conditions",     priority: 0.20, changeFrequency: "monthly", section: "legal" },
  { path: "/cookies",                  priority: 0.20, changeFrequency: "monthly", section: "legal" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static / core pages ───────────────────────────────────────────────────
  const staticEntries = CORE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "/" : route.path}`,
    lastModified: LAST_MODIFIED_CORE,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: buildAlternates(route.path),
  }));

  // ── Service category pages ────────────────────────────────────────────────
  const serviceEntries = SERVICE_CATEGORIES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: LAST_MODIFIED_SERVICES,
    changeFrequency: "weekly" as ChangeFreq,
    priority: 0.88,
    alternates: buildAlternates(`/services/${s.slug}`),
  }));

  const workEntries = CASE_STUDY_BLUEPRINTS.map((study) => ({
    url: `${SITE_URL}/work/${study.slug}`,
    lastModified: LAST_MODIFIED_CORE,
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.82,
    alternates: buildAlternates(`/work/${study.slug}`),
  }));

  return [...staticEntries, ...serviceEntries, ...workEntries];
}

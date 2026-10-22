import type { MetadataRoute } from "next";
import { SERVICE_CATEGORIES } from "@/data/vensai-data";
import { SITE_URL } from "@/lib/seo";

// ── Dates ─────────────────────────────────────────────────────────────────────
const LAST_MODIFIED_CORE = new Date("2026-10-22T00:00:00.000Z");
const LAST_MODIFIED_SERVICES = new Date("2026-10-22T00:00:00.000Z");

// ── Geo target locales ────────────────────────────────────────────────────────
// Covering: USA, UK, Canada, Australia, Germany, All of Europe, UAE (Dubai /
// Abu Dhabi), Egypt, Italy (Rome), India — plus x-default fallback.
const GEO_ALTERNATES = [
  { hreflang: "x-default", lang: "en" },
  { hreflang: "en-US", lang: "en" },   // United States
  { hreflang: "en-GB", lang: "en" },   // United Kingdom
  { hreflang: "en-CA", lang: "en" },   // Canada
  { hreflang: "en-AU", lang: "en" },   // Australia
  { hreflang: "de-DE", lang: "de" },   // Germany
  { hreflang: "en-DE", lang: "en" },   // Germany (English speakers)
  { hreflang: "en-AE", lang: "en" },   // UAE — Dubai & Abu Dhabi
  { hreflang: "ar-AE", lang: "ar" },   // UAE — Arabic speakers
  { hreflang: "en-EG", lang: "en" },   // Egypt
  { hreflang: "ar-EG", lang: "ar" },   // Egypt — Arabic speakers
  { hreflang: "it-IT", lang: "it" },   // Italy (Rome)
  { hreflang: "en-IT", lang: "en" },   // Italy — English speakers
  { hreflang: "en-IN", lang: "en" },   // India
  { hreflang: "hi-IN", lang: "hi" },   // India — Hindi speakers
  // Broader European coverage
  { hreflang: "en-FR", lang: "en" },   // France
  { hreflang: "en-NL", lang: "en" },   // Netherlands
  { hreflang: "en-ES", lang: "en" },   // Spain
  { hreflang: "en-SE", lang: "en" },   // Sweden
  { hreflang: "en-PL", lang: "en" },   // Poland
  { hreflang: "en-CH", lang: "en" },   // Switzerland
  { hreflang: "en-BE", lang: "en" },   // Belgium
  { hreflang: "en-IE", lang: "en" },   // Ireland
  { hreflang: "en-NO", lang: "en" },   // Norway
  { hreflang: "en-DK", lang: "en" },   // Denmark
  { hreflang: "en-FI", lang: "en" },   // Finland
  { hreflang: "en-AT", lang: "en" },   // Austria
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

  return [...staticEntries, ...serviceEntries];
}

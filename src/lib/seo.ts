import type { Metadata } from "next";

// ── Site constants ─────────────────────────────────────────────────────────────
// NOTE: The verified Search Console property is sc-domain:vensailabs.in
// Ensure NEXT_PUBLIC_SITE_URL=https://vensailabs.in in production .env
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://vensailabs.in"
).replace(/\/$/, "");

export const SITE_NAME = "Vensai Labs";
export const DEFAULT_OG_IMAGE = {
  url: "/brand/vensai-logo-original.jpg",
  width: 1024,
  height: 724,
  alt: "Vensai Labs — Freelance Talent. Real Solutions. Build • Design • Automate • Scale.",
};

// ── Geo-targeted hreflang alternates ──────────────────────────────────────────
// Used for every page to signal international targeting to Google.
// Targets: USA, UK, Canada, Australia, Germany, Europe, UAE (Dubai/Abu Dhabi),
//          Egypt, Italy (Rome), India
export const GEO_HREFLANG_ALTERNATES: Record<string, string> = {
  "x-default": SITE_URL,
  "en-US": SITE_URL, // United States
  "en-GB": SITE_URL, // United Kingdom
  "en-CA": SITE_URL, // Canada
  "en-AU": SITE_URL, // Australia
  "de-DE": SITE_URL, // Germany
  "en-DE": SITE_URL, // Germany — English speakers
  "en-AE": SITE_URL, // UAE — Dubai & Abu Dhabi
  "ar-AE": SITE_URL, // UAE — Arabic speakers
  "en-EG": SITE_URL, // Egypt
  "ar-EG": SITE_URL, // Egypt — Arabic speakers
  "it-IT": SITE_URL, // Italy (Rome)
  "en-IT": SITE_URL, // Italy — English speakers
  "en-IN": SITE_URL, // India
  "hi-IN": SITE_URL, // India — Hindi speakers
  // Broader European coverage
  "en-FR": SITE_URL, // France
  "en-NL": SITE_URL, // Netherlands
  "en-ES": SITE_URL, // Spain
  "en-SE": SITE_URL, // Sweden
  "en-PL": SITE_URL, // Poland
  "en-CH": SITE_URL, // Switzerland
  "en-BE": SITE_URL, // Belgium
  "en-IE": SITE_URL, // Ireland
  "en-NO": SITE_URL, // Norway
  "en-DK": SITE_URL, // Denmark
  "en-FI": SITE_URL, // Finland
  "en-AT": SITE_URL, // Austria
};

// ── Geo base keywords ─────────────────────────────────────────────────────────
// Appended to every page's keyword list for broad international discovery.
export const GEO_BASE_KEYWORDS = [
  // Service + geo combos
  "software development company India",
  "software development agency UAE Dubai",
  "IT outsourcing company India",
  "freelancing agency USA UK Canada",
  "tech agency Australia",
  "software company Germany Europe",
  "digital agency Dubai Abu Dhabi",
  "e-commerce agency UK USA India",
  "AI ML development company India",
  "cloud DevOps agency UK Germany",
  "SAP consulting Germany Europe",
  "cybersecurity agency USA UK",
  // City / region intent
  "software company Visakhapatnam India",
  "tech agency London UK",
  "digital agency Dubai",
  "software house Germany",
  "IT agency Rome Italy",
  "software development Egypt",
  "outsourcing company Canada Australia",
  // Core brand
  "Vensai Labs",
  "vensailabs.in",
];

export interface PageSEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
  noIndex = false,
}: PageSEOConfig): Metadata {
  const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");
  const canonicalUrl = `${SITE_URL}${normalizedPath || "/"}`;
  const fullTitle = title.includes("Vensai Labs")
    ? title
    : `${title} | Vensai Labs`;

  const baseKeywords = [
    "Vensai Labs",
    "freelancing agency",
    "business solutions partner",
    "end-to-end delivery",
    "dedicated professional teams",
  ];

  // Build per-page hreflang map (canonical URL for every locale)
  const langAlternates: Record<string, string> = {};
  for (const [lang] of Object.entries(GEO_HREFLANG_ALTERNATES)) {
    langAlternates[lang] = canonicalUrl;
  }

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords: Array.from(new Set([...keywords, ...baseKeywords, ...GEO_BASE_KEYWORDS])),
    alternates: {
      canonical: canonicalUrl,
      languages: langAlternates,
    },
    openGraph: {
      type: ogType,
      locale: "en_US",
      alternateLocale: [
        "en_GB", "en_CA", "en_AU", "de_DE",
        "en_AE", "ar_AE", "en_EG", "ar_EG",
        "it_IT", "en_IN", "hi_IN",
      ],
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

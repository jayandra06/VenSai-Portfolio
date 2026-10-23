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

// ── Comprehensive keyword library ─────────────────────────────────────────────
// Covers all 9 core intent clusters + geo-market combinations.
// Appended to EVERY page's keyword list for broad discovery.

// ── 1. FREELANCE DEVELOPERS / TALENT ─────────────────────────────────────────
export const KEYWORDS_FREELANCE = [
  "hire freelance developers",
  "freelance software developers",
  "freelance developer agency",
  "hire remote developers",
  "dedicated developers for hire",
  "contract software developers",
  "freelance software engineers",
  "hire dedicated developers",
  "remote software development team",
  "dedicated development team",
  "staff augmentation services",
  "IT staff augmentation",
  "tech talent agency",
  "hire full stack developers",
  "contract programmers",
  "offshore development team",
  "nearshore developers",
  "remote engineering team",
  "augment development team",
  "hire dedicated developers India",
  "freelance coding agency",
  "on-demand software developers",
  "managed developer teams",
  "outsource software development",
  "software development outsourcing",
  "hire backend developers",
  "hire frontend developers",
  "hire mobile app developers",
  "hire AI ML engineers",
  "hire cloud engineers",
  "dedicated resource model",
  "talent-as-a-service",
  "build operate transfer",
  "managed tech teams",
];

// ── 2. BPO / KPO ─────────────────────────────────────────────────────────────
export const KEYWORDS_BPO_KPO = [
  "BPO services",
  "KPO services",
  "business process outsourcing",
  "knowledge process outsourcing",
  "BPO company India",
  "KPO company India",
  "outsourcing company",
  "offshore BPO services",
  "back office outsourcing",
  "data entry outsourcing",
  "business process management",
  "call center outsourcing",
  "customer support outsourcing",
  "document processing outsourcing",
  "finance and accounting outsourcing",
  "HR outsourcing services",
  "research process outsourcing",
  "analytics outsourcing",
  "BPO and KPO agency",
  "managed business processes",
  "business operations outsourcing",
  "virtual assistant services",
  "data management outsourcing",
  "BPO agency Dubai",
  "BPO company UK",
  "BPO services USA",
  "outsourcing partner India",
  "offshore BPO India",
  "KPO research services",
  "knowledge services outsourcing",
  "back office operations",
  "business support services",
  "operational outsourcing partner",
];

// ── 3. SOFTWARE COMPANY ───────────────────────────────────────────────────────
export const KEYWORDS_SOFTWARE_COMPANY = [
  "software development company",
  "custom software development",
  "software development agency",
  "IT company",
  "technology company",
  "software house",
  "software firm",
  "app development company",
  "web development company",
  "SaaS development company",
  "enterprise software company",
  "custom software solutions",
  "software development services",
  "IT services company",
  "technology solutions provider",
  "digital transformation company",
  "software outsourcing company",
  "full stack development company",
  "software development partner",
  "technology agency",
  "IT solutions company",
  "software solutions provider",
  "tech company India",
  "software company Visakhapatnam",
  "software company Andhra Pradesh",
  "software company India",
  "software agency Dubai",
  "tech company UK",
  "software house Germany",
  "software development company USA",
  "software agency Australia",
  "web application development company",
  "enterprise technology company",
  "digital product company",
];

// ── 4. PRODUCT DEVELOPMENT COMPANY ───────────────────────────────────────────
export const KEYWORDS_PRODUCT_DEV = [
  "product development company",
  "product engineering company",
  "software product development",
  "MVP development company",
  "startup product development",
  "product design and development",
  "digital product development",
  "end-to-end product development",
  "agile product development",
  "SaaS product development",
  "product strategy company",
  "tech product development agency",
  "innovation consulting firm",
  "product development partner",
  "custom product engineering",
  "product ideation to launch",
  "new product development services",
  "product discovery and development",
  "product development outsourcing",
  "product build company",
  "web product development",
  "mobile product development",
  "AI product development",
  "B2B product development",
  "B2C product development",
  "enterprise product engineering",
  "rapid prototyping company",
  "minimum viable product development",
  "scale up product development",
  "product lifecycle management",
];

// ── 5. STARTUP INCUBATOR / STARTUP SUPPORT ───────────────────────────────────
export const KEYWORDS_STARTUP = [
  "startup incubator",
  "business incubator",
  "startup accelerator",
  "tech startup support",
  "startup technology partner",
  "startup development company",
  "build for startups",
  "startup solutions provider",
  "startup software development",
  "early stage startup support",
  "startup MVP development",
  "tech enabler for startups",
  "startup consultancy",
  "startup infrastructure partner",
  "venture support company",
  "startup ecosystem partner",
  "startup growth partner",
  "startup technology services",
  "incubator for startups India",
  "startup tech company India",
  "startup software agency",
  "startup IT partner",
  "startup product development company",
  "startup studio",
  "startup service provider",
  "build startup from scratch",
  "startup co-builder",
  "startup technology consulting",
  "new venture technology partner",
  "startup launch services",
  "startup engineering partner",
  "support for early stage companies",
];

// ── 6. B2B CONSULTING / INVESTMENT CONSULTING ─────────────────────────────────
export const KEYWORDS_B2B_CONSULTING = [
  "B2B consulting company",
  "B2B consulting services",
  "business consulting firm",
  "management consulting company",
  "strategic consulting services",
  "business advisory services",
  "corporate consulting firm",
  "IT consulting services",
  "technology consulting company",
  "digital transformation consultancy",
  "enterprise consulting services",
  "investment consulting",
  "investment advisory firm",
  "business strategy consulting",
  "technical feasibility consulting",
  "business process consulting",
  "operations consulting",
  "B2B advisory company",
  "technology advisory firm",
  "enterprise advisory services",
  "corporate advisory company",
  "business intelligence consulting",
  "strategic technology advisory",
  "CTO as a service",
  "fractional CTO",
  "technology due diligence",
  "startup investment consulting",
  "venture consulting firm",
  "pre-investment tech consulting",
  "B2B technology partner",
  "enterprise technology advisor",
  "consulting company India",
  "IT consulting India",
  "consulting agency Dubai",
  "consulting firm UK USA",
];

// ── 7. BUSINESS CONSULTANCY ───────────────────────────────────────────────────
export const KEYWORDS_CONSULTANCY = [
  "business consultancy",
  "business consultancy services",
  "business consulting services",
  "corporate consulting services",
  "management consulting",
  "strategy consulting",
  "business transformation consulting",
  "operations management consulting",
  "business process improvement",
  "executive consulting",
  "business development consulting",
  "revenue consulting",
  "growth strategy consultancy",
  "commercial consulting firm",
  "business optimisation consultancy",
  "performance consulting",
  "organizational consulting",
  "SME consulting services",
  "enterprise consulting firm",
  "operations consultancy",
  "business efficiency consulting",
  "process optimization consulting",
  "go-to-market consulting",
  "market entry consulting",
  "scaling strategy consulting",
  "business consultancy India",
  "business consultancy Dubai",
  "management consultancy UK",
  "IT consultancy company",
  "business consultancy firm India",
];

// ── 8. PLACEMENTS & INTERNSHIPS ───────────────────────────────────────────────
export const KEYWORDS_PLACEMENTS = [
  "internship programs",
  "tech internships",
  "software engineering internships",
  "IT placement company",
  "internship agency",
  "fresher placement services",
  "graduate placement programs",
  "campus placement company",
  "job placement company",
  "technology internships India",
  "developer internships",
  "AI ML internships",
  "software internship program",
  "career placement services",
  "IT recruitment company",
  "technical hiring agency",
  "internship for freshers India",
  "engineering internship company",
  "cloud devops internship",
  "cybersecurity internship",
  "data science internship",
  "UI UX design internship",
  "live project internship",
  "remote internship program India",
  "work from home internship",
  "paid internship India",
  "stipend based internship",
  "industry internship program",
  "internship and training company",
  "fresher jobs India",
  "entry level tech jobs",
  "junior developer jobs India",
  "placement company Visakhapatnam",
];

// ── 9. GEO-SPECIFIC CROSS-MARKET KEYWORDS ────────────────────────────────────
export const KEYWORDS_GEO = [
  // Software + geo
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
  // City-level
  "software company Visakhapatnam India",
  "tech agency London UK",
  "digital agency Dubai",
  "software house Germany",
  "IT agency Rome Italy",
  "software development Egypt",
  "outsourcing company Canada Australia",
  // BPO geo
  "BPO company India Dubai",
  "KPO company India UK",
  "outsourcing company UAE",
  "back office outsourcing India",
  // Consulting geo
  "business consulting India",
  "consulting firm Dubai UAE",
  "management consulting UK",
  "B2B consulting Germany",
  "startup consulting India",
  "product development company India",
  "internship company India Andhra Pradesh",
  // Brand
  "Vensai Labs",
  "vensailabs.in",
  "Vijetha Softwares",
];

// ── Combined base keywords (injected into EVERY page) ────────────────────────
export const GEO_BASE_KEYWORDS: string[] = [
  ...KEYWORDS_FREELANCE.slice(0, 8),
  ...KEYWORDS_BPO_KPO.slice(0, 8),
  ...KEYWORDS_SOFTWARE_COMPANY.slice(0, 8),
  ...KEYWORDS_PRODUCT_DEV.slice(0, 6),
  ...KEYWORDS_STARTUP.slice(0, 6),
  ...KEYWORDS_B2B_CONSULTING.slice(0, 6),
  ...KEYWORDS_CONSULTANCY.slice(0, 6),
  ...KEYWORDS_PLACEMENTS.slice(0, 6),
  ...KEYWORDS_GEO,
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

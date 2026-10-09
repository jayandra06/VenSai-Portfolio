import type { Metadata } from "next";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://vensailabs.com"
).replace(/\/$/, "");

export const SITE_NAME = "Vensai Labs";
export const DEFAULT_OG_IMAGE = {
  url: "/brand/vensai-logo-original.jpg",
  width: 1024,
  height: 724,
  alt: "Vensai Labs — Freelance Talent. Real Solutions. Build • Design • Automate • Scale.",
};

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

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords: Array.from(new Set([...keywords, ...baseKeywords])),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: ogType,
      locale: "en_US",
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

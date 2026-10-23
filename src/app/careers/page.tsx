import React from "react";
import type { Metadata } from "next";
import { CareersClient } from "./CareersClient";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";
import { KEYWORDS_PLACEMENTS, KEYWORDS_FREELANCE, KEYWORDS_SOFTWARE_COMPANY } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Careers, Placements & Internships at Vensai Labs | IT Jobs, Fresher Hiring & Tech Internship Programs",
  description:
    "Join Vensai Labs — India's full-service software company. Explore full-time IT careers, fresher placements, paid tech internships, and live-project training programs across software engineering, AI/ML, cloud, cybersecurity, UI/UX, consulting, marketing and support.",
  path: "/careers",
  keywords: [
    // Placements & internships (primary)
    ...KEYWORDS_PLACEMENTS,
    // Talent / hiring (secondary)
    ...KEYWORDS_FREELANCE.slice(0, 12),
    // Software company context
    ...KEYWORDS_SOFTWARE_COMPANY.slice(0, 8),
    // Hand-curated
    "Vensai Labs careers",
    "software engineering jobs India",
    "cloud DevOps cybersecurity careers",
    "SAP BTP BI consultant jobs",
    "UI UX designer jobs India",
    "technology consultancy careers",
    "fresher tech jobs Visakhapatnam",
    "internship Andhra Pradesh",
    "IT jobs India freshers",
    "junior developer jobs India",
    "AI internship India",
    "work from home tech internship India",
  ],
});

export default function CareersPage() {
  const pageSchema = buildWebPageSchema({
    title:
      "Careers at Vensai Labs | Join Our Full-Time Engineering, Design & Consulting Teams",
    description:
      "Full-time career tracks across 10 core disciplines at Vensai Labs.",
    path: "/careers",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <CareersClient />
    </>
  );
}

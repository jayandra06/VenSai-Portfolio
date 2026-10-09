import React from "react";
import type { Metadata } from "next";
import { CareersClient } from "./CareersClient";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Careers at Vensai Labs | Join Our Full-Time Engineering, Design & Consulting Teams",
  description:
    "Build your career at Vensai Labs. Explore full-time opportunities across 10 professional tracks including software engineering, mobile apps, AI/ML, cloud & DevOps, cybersecurity, SAP/BI, UI/UX design, consulting, marketing and support.",
  path: "/careers",
  keywords: [
    "Vensai Labs careers",
    "software engineering jobs",
    "cloud DevOps cybersecurity careers",
    "SAP BTP BI consultant jobs",
    "UI UX designer jobs",
    "technology consultancy careers",
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

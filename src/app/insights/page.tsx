import React from "react";
import type { Metadata } from "next";
import { InsightsClient } from "./InsightsClient";
import { buildPageMetadata } from "@/lib/seo";
import { buildInsightsSchema } from "@/lib/schema";
import { INSIGHTS_ARTICLES } from "@/data/vensai-data";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Insights, Technical Research & Architecture Briefings | Vensai Labs",
  description:
    "Read executive briefings, technical feasibility frameworks, e-commerce architecture guides, and delivery playbooks from Vensai Labs’ engineering, consulting and commerce practices.",
  path: "/insights",
  ogType: "article",
  keywords: [
    "enterprise technology insights",
    "technical feasibility guide",
    "e-commerce architecture comparison",
    "post-deployment support playbook",
    "dedicated agency vs freelancer marketplace",
  ],
});

export default function InsightsPage() {
  const insightsSchema = buildInsightsSchema(INSIGHTS_ARTICLES);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsSchema) }}
      />
      <InsightsClient />
    </>
  );
}

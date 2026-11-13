import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BusinessPillarsSection } from "@/components/sections/BusinessPillarsSection";
import { ProofStripSection } from "@/components/sections/ProofStripSection";
import { CaseStudiesPreviewSection } from "@/components/sections/CaseStudiesPreviewSection";
import { CompactTechBand } from "@/components/sections/CompactTechBand";
import { HomeClosingSection } from "@/components/sections/HomeClosingSection";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema, buildFaqSchema } from "@/lib/schema";
import { HOMEPAGE_FAQS } from "@/data/vensai-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Vensai Labs — Software, vendorship, and BPO",
  description:
    "Custom software, enterprise subcontracting, voice and chat BPO, and non-IT projects—delivered by in-house teams at Vijetha Softwares Pvt. Ltd.",
  path: "/",
  keywords: [
    "Vensai Labs",
    "software company India",
    "enterprise vendorship",
    "offshore delivery pod",
    "BPO voice chat",
    "KPO operations",
  ],
});

export default function HomePage() {
  const webPageSchema = buildWebPageSchema({
    title: "Vensai Labs — Software, vendorship, and BPO",
    description:
      "Custom software, enterprise vendorship, voice and chat BPO, and non-IT digital work from Vijetha Softwares Pvt. Ltd.",
    path: "/",
  });
  const faqSchema = buildFaqSchema(HOMEPAGE_FAQS, "/");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <BusinessPillarsSection />
      <ProofStripSection />
      <CaseStudiesPreviewSection />
      <CompactTechBand />
      <HomeClosingSection />
    </>
  );
}

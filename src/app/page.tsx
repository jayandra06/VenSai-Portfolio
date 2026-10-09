import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyVensaiSection } from "@/components/sections/WhyVensaiSection";
import { EngagementModelsSection } from "@/components/sections/EngagementModelsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TechEcosystemSection } from "@/components/sections/TechEcosystemSection";
import { CaseStudiesAndCTASection } from "@/components/sections/CaseStudiesSection";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema, buildFaqSchema } from "@/lib/schema";
import { HOMEPAGE_FAQS } from "@/data/vensai-data";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Vensai Labs | Freelance Talent. Real Solutions. — Enterprise Technology & Business Partner",
  description:
    "Vensai Labs is a full-service freelancing agency and business solutions partner with in-house full-time teams across software engineering, cloud, AI, cybersecurity, SAP/BI, e-commerce, consulting, brand, marketing and post-deployment support.",
  path: "/",
  keywords: [
    "full-service freelancing agency",
    "enterprise technology consultancy",
    "custom software development agency",
    "managed e-commerce solutions",
    "dedicated engineering teams",
    "SAP BTP and Power BI consulting",
    "technical feasibility consulting",
  ],
});

export default function HomePage() {
  const webPageSchema = buildWebPageSchema({
    title:
      "Vensai Labs | Freelance Talent. Real Solutions. — Enterprise Technology & Business Partner",
    description:
      "Full-service freelancing agency and business solutions consultancy managing project execution, dedicated specialists, consulting and post-deployment support across 13 capabilities.",
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
      <WhatWeDoSection />
      <ProcessSection />
      <WhyVensaiSection />
      <EngagementModelsSection />
      <IndustriesSection />
      <TechEcosystemSection />
      <CaseStudiesAndCTASection />
    </>
  );
}


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
import {
  KEYWORDS_FREELANCE, KEYWORDS_BPO_KPO, KEYWORDS_SOFTWARE_COMPANY,
  KEYWORDS_PRODUCT_DEV, KEYWORDS_STARTUP, KEYWORDS_B2B_CONSULTING,
  KEYWORDS_CONSULTANCY, KEYWORDS_PLACEMENTS,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Vensai Labs | Expert Talent. Real Solutions. — Software Company, BPO/KPO, Startup Incubator & Business Consultancy",
  description:
    "VenSai Labs by Vijetha Softwares Pvt. Ltd. is a software company, BPO/KPO partner, startup incubator and business consultancy with in-house experts across software, cloud, AI, managed IT, e-commerce, consulting and support — serving USA, UK, Canada, Australia, UAE, Germany, India and beyond.",
  path: "/",
  keywords: [
    ...KEYWORDS_FREELANCE,
    ...KEYWORDS_BPO_KPO,
    ...KEYWORDS_SOFTWARE_COMPANY,
    ...KEYWORDS_PRODUCT_DEV,
    ...KEYWORDS_STARTUP,
    ...KEYWORDS_B2B_CONSULTING,
    ...KEYWORDS_CONSULTANCY,
    ...KEYWORDS_PLACEMENTS,
    "software company India",
    "enterprise technology consultancy",
    "managed e-commerce solutions",
    "dedicated engineering teams",
    "SAP BTP and Power BI consulting",
    "technical feasibility consulting",
    "one business partner multiple capabilities",
    "end-to-end technology delivery",
  ],
});

export default function HomePage() {
  const webPageSchema = buildWebPageSchema({
    title:
      "Vensai Labs | Expert Talent. Real Solutions. — Software Company",
    description:
      "VenSai Labs by Vijetha Softwares Pvt. Ltd. is a software company managing IT and non-IT work: software, managed IT, KPO and BPO, internships, consulting and post-deployment support.",
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


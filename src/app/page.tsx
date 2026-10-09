import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyVensaiSection } from "@/components/sections/WhyVensaiSection";
import { EngagementModelsSection } from "@/components/sections/EngagementModelsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TechEcosystemSection } from "@/components/sections/TechEcosystemSection";
import { CaseStudiesAndCTASection } from "@/components/sections/CaseStudiesSection";

export default function HomePage() {
  return (
    <>
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

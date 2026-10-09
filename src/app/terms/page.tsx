import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description: "Vensai Labs Website Terms and Client Engagement Governance.",
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24 bg-white dark:bg-[#0B1118]">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <Breadcrumbs items={[{ label: "Terms of Engagement" }]} />
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
          Terms of Use &amp; Engagement
        </h1>
        <p className="text-sm text-slate-500">
          Last Updated: October 2026 • Vensai Labs
        </p>
        <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            Welcome to the Vensai Labs website. By accessing this website, you agree to comply with these Terms of Use. Specific client engagements—whether Project Based, Dedicated Resource, Dedicated Team, Managed Services, Consulting or Post-Deployment Support—are governed by formal Master Services Agreements (MSAs) and Statements of Work (SOWs) executed between Vensai Labs and the client organization.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            1. Intellectual Property
          </h2>
          <p>
            The Vensai Labs name, geometric V symbol, logo lockups, taglines (&ldquo;FREELANCE TALENT. REAL SOLUTIONS.&rdquo; and &ldquo;BUILD • DESIGN • AUTOMATE • SCALE.&rdquo;) and website content are the property of Vensai Labs.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            2. Client Engagements &amp; Deliverables
          </h2>
          <p>
            Scope, intellectual property assignment, warranties, service level agreements (SLAs) and commercial terms are defined in writing within each engagement’s signed Statement of Work.
          </p>
        </div>
      </div>
    </div>
  );
}

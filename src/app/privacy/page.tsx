import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";
import { BRAND_CONFIG } from "@/data/vensai-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Vensai Labs Privacy Policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24 bg-white dark:bg-[#0B1118]">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500">
          Last Updated: October 2026 • Vensai Labs
        </p>
        <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            Vensai Labs (&ldquo;Vensai&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects the privacy of our clients, partners, website visitors and career applicants. This Privacy Policy outlines how we collect, use and safeguard business and personal information submitted through our website.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you submit a project requirement or career application, we collect the details you provide—such as your name, company name, work email, phone number, country, service interest and project description.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            2. How We Use Information
          </h2>
          <p>
            We use this information exclusively to evaluate your business or technical requirement, communicate with you regarding Vensai Labs services, prepare proposals or NDAs, and manage ongoing client engagements. We do not sell personal or corporate contact data to third parties.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            3. Confidentiality &amp; Security
          </h2>
          <p>
            Project briefs, architecture specifications and commercial discussions shared with Vensai Labs are treated as confidential and restricted to authorized Vensai project managers, architects and leadership.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            4. Contact Us
          </h2>
          <p>
            For privacy inquiries, contact us at{" "}
            <span className="font-mono text-vensai-electric">
              {BRAND_CONFIG.contactPlaceholders.email}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

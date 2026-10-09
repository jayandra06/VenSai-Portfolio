import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { Breadcrumbs, Reveal } from "@/components/ui/EnterpriseUI";
import { INDUSTRIES } from "@/data/vensai-data";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Industries We Serve — Sector-Focused Technology & Business Solutions | Vensai Labs",
  description:
    "Vensai Labs delivers specialized software engineering, enterprise technology, e-commerce, consulting and operational support across 12 key industries including Retail, FinTech, Logistics, Maritime, Healthcare and Manufacturing.",
  path: "/industries",
  keywords: [
    "retail e-commerce technology solutions",
    "financial services software engineering",
    "logistics supply chain software",
    "maritime port operations software",
    "healthcare technology consulting",
    "manufacturing ERP and BI integration",
  ],
});

export default function IndustriesPage() {
  const pageSchema = buildWebPageSchema({
    title:
      "Industries We Serve — Sector-Focused Technology & Business Solutions | Vensai Labs",
    description:
      "Sector-adapted software engineering, enterprise systems, e-commerce and operational support across 12 core industries.",
    path: "/industries",
    type: "CollectionPage",
  });

  return (
    <div className="bg-white dark:bg-[#0B1118]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="py-16 lg:py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
              <Building2 className="w-4 h-4" />
              <span>12 SECTOR PRACTICES • INDUSTRY SOLUTIONS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Capabilities Adapted to the Realities of Your Industry.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              From high-volume retail and omnichannel commerce to financial services, logistics, maritime, healthcare and manufacturing, Vensai configures multi-disciplinary teams around your sector’s operational workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {INDUSTRIES.map((industry, idx) => (
            <Reveal key={industry.id} delay={Math.min(idx * 0.03, 0.2)}>
              <div className="h-full flex flex-col justify-between p-8 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric transition-all">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                    <span className="font-mono text-xs font-bold text-vensai-electric">
                      SECTOR {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      End-to-End Delivery
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">
                    {industry.name}
                  </h2>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {industry.summary}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      Typical Requirements We Address:
                    </h3>
                    {industry.challengesAddressed.map((ch) => (
                      <div
                        key={ch}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Relevant Vensai Capabilities
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {industry.relevantCapabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-2.5 py-1 text-xs bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-sm"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/contact?industry=${encodeURIComponent(industry.name)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric hover:underline"
                  >
                    <span>Discuss a {industry.name} Requirement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

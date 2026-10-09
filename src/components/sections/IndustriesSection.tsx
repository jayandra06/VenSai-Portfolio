"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/EnterpriseUI";
import { INDUSTRIES } from "@/data/vensai-data";

export function IndustriesSection() {
  return (
    <section className="py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800/90">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="INDUSTRIES WE SERVE • DOMAIN ADAPTABILITY"
            title="Tailored Solutions Across Commercial & Industrial Sectors."
            description="Every industry operates under distinct operational, regulatory and customer expectations. Vensai aligns engineering, enterprise systems, commerce, creative and support capabilities to the realities of your sector."
            action={
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 hover:border-vensai-electric text-slate-900 dark:text-white rounded-sm transition-colors"
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, idx) => (
            <Reveal key={ind.id} delay={Math.min(idx * 0.03, 0.25)}>
              <div className="h-full flex flex-col justify-between p-6 bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric rounded-sm transition-all duration-200 group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-vensai-electric">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <Building2 className="w-4 h-4 text-slate-400 group-hover:text-vensai-electric transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-vensai-royal dark:group-hover:text-vensai-electric transition-colors">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ind.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                    Relevant Capabilities
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {ind.relevantCapabilities.slice(0, 3).map((cap) => (
                      <span
                        key={cap}
                        className="px-2 py-0.5 text-[11px] bg-[#F7F9FC] dark:bg-[#111827] text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-800 rounded-sm"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

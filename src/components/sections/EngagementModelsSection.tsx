"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/EnterpriseUI";
import { ENGAGEMENT_MODELS } from "@/data/vensai-data";

export function EngagementModelsSection() {
  const [activeModel, setActiveModel] = useState<string>(ENGAGEMENT_MODELS[0].id);

  return (
    <section className="py-24 bg-white dark:bg-[#0B1118] border-b border-slate-200 dark:border-slate-800/90">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="ENGAGEMENT MODELS • COMMERCIAL FLEXIBILITY"
            title="Structured to Match How Your Business Operates."
            description="Engage Vensai for a fixed-scope project, embed dedicated full-time professionals into your workflow, assemble a complete delivery team, or rely on us for long-term managed services and post-deployment support."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model, idx) => {
            const isSelected = activeModel === model.id;
            return (
              <Reveal key={model.id} delay={idx * 0.04}>
                <div
                  onClick={() => setActiveModel(model.id)}
                  className={`cursor-pointer h-full flex flex-col justify-between p-7 rounded-sm border transition-all duration-200 ${
                    isSelected
                      ? "bg-[#F7F9FC] dark:bg-[#111827] border-vensai-electric shadow-enterprise"
                      : "bg-white dark:bg-[#0B1118] border-slate-200 dark:border-slate-800 hover:border-vensai-electric/70"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-vensai-royal dark:text-vensai-electric">
                        MODEL {model.number}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Vensai Managed
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                      {model.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-vensai-royal dark:text-vensai-electric">
                      {model.summary}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {model.description}
                    </p>

                    <div className="mt-6 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                        What’s Included:
                      </p>
                      {model.included.map((inc) => (
                        <div
                          key={inc}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-vensai-electric shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                    <Link
                      href={`/contact?model=${encodeURIComponent(model.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric hover:underline"
                    >
                      <span>Select {model.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

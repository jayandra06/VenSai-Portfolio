"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/EnterpriseUI";
import { SERVICE_CATEGORIES, ServiceCategory } from "@/data/vensai-data";

export function WhatWeDoSection() {
  const [selectedId, setSelectedId] = useState<string>(SERVICE_CATEGORIES[0].id);

  const activeCategory: ServiceCategory =
    SERVICE_CATEGORIES.find((c) => c.id === selectedId) || SERVICE_CATEGORIES[0];

  return (
    <section
      id="what-we-do"
      className="py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800/90 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="WHAT WE DO • PRACTICE AREAS & CAPABILITIES"
            title="Everything Your Business Needs to Build, Operate and Grow."
            description="Vensai provides end-to-end professional services across technology, digital commerce, enterprise systems, consulting, creative and operational support. Rather than coordinating multiple disconnected vendors or individual contractors, your business works with one accountable partner."
            action={
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-white dark:bg-[#111827] hover:border-vensai-electric border border-slate-200 dark:border-slate-800 rounded-lg transition-all"
              >
                <span>View Full Directory</span>
                <ArrowRight className="w-3.5 h-3.5 text-vensai-electric" />
              </Link>
            }
          />
        </Reveal>

        {/* Interactive Split-Screen Deep-Dive */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector Rail */}
            <div className="lg:col-span-4 bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 rounded-xl divide-y divide-slate-200/70 dark:divide-slate-800/70 overflow-hidden">
              {SERVICE_CATEGORIES.map((cat) => {
                const isSelected = cat.id === selectedId;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedId(cat.id)}
                    className={`w-full text-left px-5 py-3.5 flex items-center justify-between transition-colors ${
                      isSelected
                        ? "bg-vensai-royal text-white"
                        : "hover:bg-slate-50 dark:hover:bg-[#111827] text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isSelected ? "text-white" : "text-vensai-electric"
                        }`}
                      >
                        {cat.number}
                      </span>
                      <span className="text-sm font-semibold">{cat.title}</span>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 ${
                        isSelected ? "text-white" : "text-slate-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Deep-Dive Panel */}
            <div className="lg:col-span-8 bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 rounded-xl p-8 sm:p-10 shadow-enterprise">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-vensai-electric">
                    CATEGORY {activeCategory.number} • {activeCategory.categoryGroup.toUpperCase()}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mt-1">
                    {activeCategory.title}
                  </h3>
                </div>
                <Link
                  href={`/services/${activeCategory.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-lg transition-colors"
                >
                  <span>Explore Practice Page</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="mt-6 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeCategory.overview}
              </p>

              {/* Capabilities List */}
              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white mb-4">
                  Core Capabilities Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {activeCategory.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800/80 text-xs font-medium text-slate-800 dark:text-slate-200"
                    >
                      <Check className="w-3.5 h-3.5 text-vensai-electric shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Sub-Capabilities (E.g. E-Commerce Creative Services) */}
              {activeCategory.subCapabilities && (
                <div className="mt-6 p-5 rounded-lg bg-vensai-royal/5 dark:bg-vensai-electric/10 border border-vensai-electric/30">
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-vensai-royal dark:text-vensai-electric mb-3">
                    {activeCategory.subCapabilities.title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {activeCategory.subCapabilities.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-vensai-electric" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies & Engagement Models */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                    Key Platforms &amp; Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCategory.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-[#111827] text-slate-700 dark:text-slate-300 rounded-sm border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                    Available Engagement Models
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCategory.engagementModels.map((model) => (
                      <span
                        key={model}
                        className="px-2.5 py-1 text-xs font-medium bg-vensai-royal/10 dark:bg-vensai-electric/15 text-vensai-royal dark:text-vensai-electric rounded-sm"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

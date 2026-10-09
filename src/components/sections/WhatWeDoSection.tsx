"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Layers, LayoutGrid } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/EnterpriseUI";
import { SERVICE_CATEGORIES, ServiceCategory } from "@/data/vensai-data";

export function WhatWeDoSection() {
  const [selectedId, setSelectedId] = useState<string>(SERVICE_CATEGORIES[0].id);
  const [viewMode, setViewMode] = useState<"interactive" | "matrix">("matrix");

  const activeCategory: ServiceCategory =
    SERVICE_CATEGORIES.find((c) => c.id === selectedId) || SERVICE_CATEGORIES[0];

  return (
    <section
      id="what-we-do"
      className="py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800/90"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="WHAT WE DO • 13 PRACTICE AREAS"
            title="Everything Your Business Needs to Build, Operate and Grow."
            description="Vensai provides end-to-end professional services across technology, digital commerce, enterprise systems, consulting, creative and operational support. Rather than coordinating multiple disconnected vendors or individual contractors, your business works with one accountable partner."
            action={
              <div className="inline-flex items-center p-1 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setViewMode("matrix")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                    viewMode === "matrix"
                      ? "bg-vensai-royal text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Full 13-Category Architecture</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("interactive")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                    viewMode === "interactive"
                      ? "bg-vensai-royal text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Interactive Deep-Dive</span>
                </button>
              </div>
            }
          />
        </Reveal>

        {/* Interactive Split-Screen Mode */}
        {viewMode === "interactive" && (
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector Rail */}
            <div className="lg:col-span-4 bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 rounded-sm divide-y divide-slate-200/70 dark:divide-slate-800/70">
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
            <div className="lg:col-span-8 bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 rounded-sm p-8 sm:p-10 shadow-enterprise">
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm transition-colors"
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
                      className="flex items-center gap-2 px-3 py-2 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800/80 text-xs font-medium text-slate-800 dark:text-slate-200"
                    >
                      <Check className="w-3.5 h-3.5 text-vensai-electric shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Sub-Capabilities (E.g. E-Commerce Creative Services) */}
              {activeCategory.subCapabilities && (
                <div className="mt-6 p-5 rounded-sm bg-vensai-royal/5 dark:bg-vensai-electric/10 border border-vensai-electric/30">
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
        )}

        {/* Full 13-Category Architectural Ledger View */}
        {viewMode === "matrix" && (
          <div className="mt-14 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_CATEGORIES.map((category, idx) => (
                <Reveal
                  key={category.id}
                  delay={Math.min(idx * 0.03, 0.25)}
                  className={
                    category.number === "07"
                      ? "md:col-span-2 lg:col-span-2"
                      : ""
                  }
                >
                  <div className="h-full flex flex-col justify-between bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric dark:hover:border-vensai-electric rounded-sm p-6 sm:p-7 shadow-enterprise-sm hover:shadow-enterprise transition-all duration-200 group">
                    <div>
                      {/* Card Top Bar */}
                      <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-vensai-royal dark:text-vensai-electric">
                          CATEGORY {category.number}
                        </span>
                        <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {category.categoryGroup}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white group-hover:text-vensai-royal dark:group-hover:text-vensai-electric transition-colors">
                        <Link href={`/services/${category.slug}`} className="focus:outline-none">
                          {category.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {category.tagline}
                      </p>

                      {/* Capabilities Tags */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {category.capabilities.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 text-xs bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Special E-Commerce Creative Services Block inside Category 07 */}
                      {category.subCapabilities && (
                        <div className="mt-4 p-4 rounded-sm bg-[#F7F9FC] dark:bg-[#111827]/90 border-l-2 border-vensai-electric border border-slate-200/80 dark:border-slate-800">
                          <p className="text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric mb-2">
                            {category.subCapabilities.title}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {category.subCapabilities.items.map((sub) => (
                              <span
                                key={sub}
                                className="px-2.5 py-1 text-xs bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-sm"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Footer Link */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      <Link
                        href={`/services/${category.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-vensai-royal dark:group-hover:text-vensai-electric transition-colors"
                      >
                        <span>Explore {category.shortTitle}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.capabilities.length +
                          (category.subCapabilities?.items.length || 0)}{" "}
                        capabilities
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

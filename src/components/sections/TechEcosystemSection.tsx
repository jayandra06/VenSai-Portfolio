"use client";

import React, { useState } from "react";
import { Search, Terminal, X } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/EnterpriseUI";
import { TECH_ECOSYSTEM } from "@/data/vensai-data";

export function TechEcosystemSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...TECH_ECOSYSTEM.map((t) => t.category)];

  const filteredGroups = TECH_ECOSYSTEM.filter((group) => {
    const matchesCategory =
      selectedCategory === "All" || group.category === selectedCategory;
    if (!searchQuery.trim()) return matchesCategory;
    const q = searchQuery.toLowerCase();
    const hasMatchingTech = group.technologies.some(
      (t) =>
        t.name.toLowerCase().includes(q) || t.focus.toLowerCase().includes(q)
    );
    return (
      matchesCategory &&
      (group.category.toLowerCase().includes(q) || hasMatchingTech)
    );
  });

  return (
    <section className="py-24 bg-white dark:bg-[#0B1118] border-b border-slate-200 dark:border-slate-800/90">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="TECHNICAL CAPABILITIES • TECHNOLOGY ECOSYSTEM"
            title="Engineered Across Modern & Enterprise Technology Stacks."
            description="Our full-time engineering, data, cloud and enterprise specialists select the right tools for your architecture, scalability and governance requirements—never forcing a one-size-fits-all stack."
          />
        </Reveal>

        {/* Filter & Search Bar */}
        <Reveal delay={0.08}>
          <div className="mt-10 p-4 rounded-xl bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                      active
                        ? "bg-vensai-royal text-white shadow-blue-glow-sm"
                        : "bg-white dark:bg-[#0B1118] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-vensai-electric"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search SAP, Flutter, AWS, Python..."
                aria-label="Search technologies"
                className="w-full pl-9 pr-8 py-2 text-xs bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-vensai-electric"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* Categorized Technology Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => {
            const q = searchQuery.toLowerCase().trim();
            const visibleTechs = q
              ? group.technologies.filter(
                  (t) =>
                    t.name.toLowerCase().includes(q) ||
                    t.focus.toLowerCase().includes(q) ||
                    group.category.toLowerCase().includes(q)
                )
              : group.technologies;

            return (
              <Reveal key={group.category} delay={Math.min(idx * 0.03, 0.2)}>
                <div className="h-full flex flex-col justify-between p-6 rounded-xl bg-[#F7F9FC] dark:bg-[#111827]/80 border border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-vensai-electric" />
                        <h3 className="text-base font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                          {group.category}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-vensai-royal dark:text-vensai-electric">
                        {visibleTechs.length} platforms
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {group.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {visibleTechs.map((tech) => (
                        <div
                          key={tech.name}
                          className="p-2.5 rounded-lg bg-white dark:bg-[#0B1118] border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-3"
                        >
                          <span className="text-xs font-semibold text-slate-900 dark:text-white">
                            {tech.name}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 text-right">
                            {tech.focus}
                          </span>
                        </div>
                      ))}
                    </div>
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

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  Clapperboard,
  Cloud,
  Code2,
  Compass,
  GraduationCap,
  Headphones,
  Palette,
  Server,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/EnterpriseUI";
import { SERVICE_CATEGORIES, ServiceCategory } from "@/data/vensai-data";

const STUDIO_META: Record<
  ServiceCategory["categoryGroup"],
  { verb: string; note: string }
> = {
  "Technology & Engineering": {
    verb: "BUILD",
    note: "Software, mobile, AI, cloud and security.",
  },
  "Enterprise & Commerce": {
    verb: "CONNECT",
    note: "ERP, commerce and the pipes between them.",
  },
  "Consulting & Operations": {
    verb: "RUN",
    note: "Advice, managed IT, KPO, BPO, talent and support.",
  },
  "Brand, Growth & Creative": {
    verb: "SHAPE",
    note: "Identity, demand and the pictures people remember.",
  },
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "software-development": Code2,
  "mobile-development": Smartphone,
  "ai-ml": Sparkles,
  "cloud-devops": Cloud,
  cybersecurity: Shield,
  enterprise: Building2,
  ecommerce: ShoppingBag,
  integrations: Workflow,
  consulting: Compass,
  support: Headphones,
  branding: Palette,
  marketing: TrendingUp,
  "creative-production": Clapperboard,
  "it-management": Server,
  "kpo-bpo": Briefcase,
  "internship-programs": GraduationCap,
};

const SERVICE_LINES: Record<string, string> = {
  "software-development": "Systems that behave like the business.",
  "mobile-development": "The product, in a pocket.",
  "ai-ml": "Models that answer from your own data.",
  "cloud-devops": "Infrastructure that ships itself.",
  cybersecurity: "Find the crack before someone else does.",
  enterprise: "SAP, BI and the numbers leadership trusts.",
  ecommerce: "A store that knows the warehouse.",
  integrations: "Every system, finally talking.",
  consulting: "Prove it is possible before you build it.",
  support: "Someone still answers after launch.",
  branding: "A face the market can recognize.",
  marketing: "Demand you can actually measure.",
  "creative-production": "Shoots, films and catalog stills.",
  "it-management": "Access, assets and uptime, quietly run.",
  "kpo-bpo": "The desk work that should leave your desk.",
  "internship-programs": "Learn by shipping, with a mentor in the room.",
};

export function WhatWeDoSection() {
  const [activeGroup, setActiveGroup] = useState<ServiceCategory["categoryGroup"] | "All">("All");
  const [selectedId, setSelectedId] = useState<string>("it-management");

  const visible = SERVICE_CATEGORIES.filter(
    (cat) => activeGroup === "All" || cat.categoryGroup === activeGroup
  );

  const activeCategory: ServiceCategory =
    visible.find((c) => c.id === selectedId) || visible[0];

  const Icon = SERVICE_ICONS[activeCategory.slug] || Sparkles;

  return (
    <section
      id="what-we-do"
      className="relative py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800/90 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-vensai-electric/10 blur-[120px]"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow={`THE PRACTICE FLOOR • ${SERVICE_CATEGORIES.length} DISCIPLINES`}
            title="One studio. Every kind of work a serious company asks for."
            description="Software, cybersecurity, managed IT, KPO and BPO, internships, commerce, brand and support live on the same floor. Pick a studio, open a brief, and see the work the way we actually staff it."
            action={
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-white dark:bg-[#111827] hover:border-vensai-electric border border-slate-200 dark:border-slate-800 rounded-lg transition-all"
              >
                <span>Open the full floor</span>
                <ArrowRight className="w-3.5 h-3.5 text-vensai-electric" />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-3">
          <button
            type="button"
            aria-pressed={activeGroup === "All"}
            onClick={() => setActiveGroup("All")}
            className={`text-left rounded-2xl border px-4 py-4 transition-all ${
              activeGroup === "All"
                ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white"
                : "bg-white dark:bg-[#0B1118] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-vensai-electric"
            }`}
          >
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase opacity-70">All</p>
            <p className="mt-1 text-sm font-semibold">Whole floor</p>
            <p className="mt-1 text-[11px] opacity-70">{SERVICE_CATEGORIES.length} practices</p>
          </button>
          {(Object.keys(STUDIO_META) as ServiceCategory["categoryGroup"][]).map((group) => {
            const meta = STUDIO_META[group];
            const selected = activeGroup === group;
            const count = SERVICE_CATEGORIES.filter((c) => c.categoryGroup === group).length;
            return (
              <button
                key={group}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setActiveGroup(group);
                  const first = SERVICE_CATEGORIES.find((c) => c.categoryGroup === group);
                  if (first) setSelectedId(first.id);
                }}
                className={`text-left rounded-2xl border px-4 py-4 transition-all ${
                  selected
                    ? "bg-gradient-to-br from-vensai-royal to-vensai-electric text-white border-transparent shadow-blue-glow-sm"
                    : "bg-white dark:bg-[#0B1118] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-vensai-electric"
                }`}
              >
                <p className={`text-[10px] font-bold tracking-[0.22em] uppercase ${selected ? "text-white/80" : "text-vensai-electric"}`}>
                  {meta.verb}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug">{group.split(" & ")[0]}</p>
                <p className={`mt-1 text-[11px] leading-snug ${selected ? "text-white/80" : "text-slate-500 dark:text-slate-400"}`}>
                  {count} practices
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {visible.map((cat) => {
            const CatIcon = SERVICE_ICONS[cat.slug] || Sparkles;
            const isSelected = cat.id === activeCategory.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(cat.id)}
                className={`group relative overflow-hidden text-left rounded-2xl border p-4 transition-all ${
                  isSelected
                    ? "bg-white dark:bg-[#111827] border-vensai-electric shadow-blue-glow-sm"
                    : "bg-white/80 dark:bg-[#0B1118] border-slate-200 dark:border-slate-800 hover:-translate-y-0.5 hover:border-vensai-electric/70"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1 -top-3 text-6xl font-semibold tracking-tighter text-slate-100 dark:text-white/[0.04]"
                >
                  {cat.number}
                </span>
                <div className="relative flex items-start justify-between gap-3">
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${
                      isSelected
                        ? "bg-vensai-royal text-white"
                        : "bg-[#F7F9FC] dark:bg-[#111827] text-vensai-royal dark:text-vensai-electric"
                    }`}
                  >
                    <CatIcon className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-[10px] font-bold text-vensai-electric">{cat.number}</span>
                </div>
                <p className="relative mt-3 text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                  {cat.shortTitle}
                </p>
                <p className="relative mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {SERVICE_LINES[cat.slug]}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1118] shadow-enterprise">
          <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-vensai-sky via-vensai-electric to-vensai-royal" />
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-8 sm:p-10 relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-4 text-8xl font-semibold tracking-tighter text-slate-100 dark:text-white/[0.04]"
              >
                {activeCategory.number}
              </span>
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-vensai-electric">
                  <Icon className="w-3.5 h-3.5" />
                  <span>
                    {STUDIO_META[activeCategory.categoryGroup].verb} • {activeCategory.categoryGroup}
                  </span>
                </div>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {activeCategory.title}
                </h3>
                <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeCategory.tagline}
                </p>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {activeCategory.overview}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/services/${activeCategory.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-lg transition-colors"
                  >
                    <span>Read the full brief</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(activeCategory.shortTitle)}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-slate-300 dark:border-slate-700 hover:border-vensai-electric text-slate-800 dark:text-slate-200 rounded-lg transition-colors"
                  >
                    Start this work
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 p-8 sm:p-10 bg-[#F7F9FC]/80 dark:bg-[#111827]/50 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                What sits inside this practice
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeCategory.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCategory.useCases.map((useCase) => (
                  <div
                    key={useCase.title}
                    className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#0B1118] p-4"
                  >
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{useCase.title}</p>
                    <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

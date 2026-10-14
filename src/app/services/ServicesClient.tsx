"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Clapperboard,
  Cloud,
  Code2,
  Compass,
  GraduationCap,
  Headphones,
  Palette,
  Search,
  Server,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { Breadcrumbs, Reveal } from "@/components/ui/EnterpriseUI";
import { SERVICE_CATEGORIES } from "@/data/vensai-data";

export function ServicesClient() {
  const [activeGroup, setActiveGroup] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const groups = [
    "All",
    "Technology & Engineering",
    "Enterprise & Commerce",
    "Consulting & Operations",
    "Brand, Growth & Creative",
  ];

  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
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

  const filtered = SERVICE_CATEGORIES.filter((cat) => {
    const matchGroup = activeGroup === "All" || cat.categoryGroup === activeGroup;
    if (!search.trim()) return matchGroup;
    const q = search.toLowerCase();
    return (
      matchGroup &&
      (cat.title.toLowerCase().includes(q) ||
        cat.overview.toLowerCase().includes(q) ||
        cat.capabilities.some((c) => c.toLowerCase().includes(q)) ||
        cat.technologies.some((t) => t.toLowerCase().includes(q)))
    );
  });

  return (
    <div className="bg-white dark:bg-[#0B1118]">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric mb-3">
                <span className="w-2 h-2 bg-vensai-electric inline-block" />
                <span>THE PRACTICE FLOOR • {SERVICE_CATEGORIES.length} DISCIPLINES</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.25] sm:leading-[1.28] lg:leading-[1.3]">
                Build it. Run it. Staff it. Teach it.
              </h1>
              <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Engineering, cybersecurity, managed IT, KPO and BPO, internship cohorts, commerce, brand and support — the full spread of work a technology and operations partner is expected to carry, under one Vensai team.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-all"
              >
                <span>Talk to Vensai</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="mt-12 p-4 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {groups.map((grp) => (
                <button
                  key={grp}
                  type="button"
                  aria-pressed={activeGroup === grp}
                  onClick={() => setActiveGroup(grp)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-sm transition-colors ${
                    activeGroup === grp
                      ? "bg-vensai-royal text-white"
                      : "bg-[#F7F9FC] dark:bg-[#0B1118] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-vensai-electric"
                  }`}
                >
                  {grp}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search capabilities (e.g. SAP BTP, Shopify, RAG)..."
                aria-label="Filter service categories"
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#F7F9FC] dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 rounded-sm text-slate-900 dark:text-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {filtered.map((service) => {
            const Icon = icons[service.slug] || Sparkles;
            return (
            <Reveal key={service.id}>
              <article className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827]/70 shadow-enterprise-sm hover:border-vensai-electric transition-all">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-vensai-sky via-vensai-electric to-vensai-royal" />
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-8 sm:p-10 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-4 -right-2 text-7xl font-semibold tracking-tighter text-slate-100 dark:text-white/[0.05] select-none"
                    >
                      {service.number}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-vensai-royal dark:text-vensai-electric">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-vensai-royal text-white">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span>{service.number}</span>
                      <span>•</span>
                      <span>{service.categoryGroup}</span>
                    </div>
                    <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
                      <Link
                        href={`/services/${service.slug}`}
                        className="hover:text-vensai-royal dark:hover:text-vensai-electric transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl">{service.tagline}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm transition-colors"
                    >
                      <span>View {service.shortTitle} Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.shortTitle)}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-slate-300 dark:border-slate-700 hover:border-vensai-electric text-slate-800 dark:text-slate-200 rounded-sm transition-colors"
                    >
                      <span>Discuss Requirement</span>
                    </Link>
                  </div>
                </div>

                <div className="px-8 sm:px-10 pb-8 sm:pb-10 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.overview}
                    </p>
                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
                        What We Do
                      </h3>
                      <ul className="space-y-2">
                        {service.whatWeDo.map((w) => (
                          <li
                            key={w}
                            className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                          >
                            <Check className="w-3.5 h-3.5 text-vensai-electric shrink-0 mt-0.5" />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                        Key Capabilities
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {service.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="px-3 py-1.5 text-xs font-medium bg-[#F7F9FC] dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-sm"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    {service.subCapabilities && (
                      <div className="p-4 rounded-sm bg-vensai-royal/5 dark:bg-vensai-electric/10 border border-vensai-electric/30">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric mb-2.5">
                          {service.subCapabilities.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.subCapabilities.items.map((sub) => (
                            <span
                              key={sub}
                              className="px-2.5 py-1 text-xs bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-sm"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Technologies &amp; Platforms
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 dark:bg-[#0B1118] text-slate-700 dark:text-slate-300 rounded-sm"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Engagement Models
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.engagementModels.map((m) => (
                            <span
                              key={m}
                              className="px-2 py-0.5 text-[11px] font-medium bg-vensai-royal/10 dark:bg-vensai-electric/15 text-vensai-royal dark:text-vensai-electric rounded-sm"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
            );
          })}
          {filtered.length === 0 && (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Nothing on the floor matches that search. Try a broader word, or clear the filter.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

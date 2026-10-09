"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Shield, Cpu, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/EnterpriseUI";
import { BRAND_CONFIG } from "@/data/vensai-data";

const ECOSYSTEM_NODES = [
  {
    id: "build",
    verb: "BUILD",
    domain: "Technology & Engineering",
    items: ["Custom Software & SaaS", "iOS, Android & Flutter Apps", "Cloud, DevOps & Cybersecurity"],
    metric: "Categories 01 – 05",
  },
  {
    id: "design",
    verb: "DESIGN",
    domain: "Brand, UI/UX & Production",
    items: ["Brand Strategy & Visual Identity", "Enterprise Product UI/UX", "Commercial & Catalog Shoots"],
    metric: "Categories 10 & 12",
  },
  {
    id: "automate",
    verb: "AUTOMATE",
    domain: "Enterprise, AI & Integrations",
    items: ["SAP BTP, Power BI & Tableau", "Applied AI, LLMs & RAG", "ERP, CRM & API Middleware"],
    metric: "Categories 03, 06, 08",
  },
  {
    id: "scale",
    verb: "SCALE",
    domain: "Commerce, Growth & Support",
    items: ["Shopify, WooCommerce, Odoo", "Technical Consulting & R&D", "24/7 Customer & Tech Support"],
    metric: "Categories 07, 09, 11, 13",
  },
];

export function HeroSection() {
  const [activeNode, setActiveNode] = useState<string>("build");

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0B1118] border-b border-slate-200 dark:border-slate-800/90">
      {/* Subtle Architectural Grid & Blue Radial Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[640px] h-[640px] rounded-full bg-vensai-electric/10 dark:bg-vensai-electric/15 blur-[130px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Top Positioning Pill Bar */}
        <Reveal>
          <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-sm border border-slate-200 dark:border-slate-800 bg-[#F7F9FC] dark:bg-[#111827]/90 text-xs font-semibold tracking-[0.16em] uppercase text-slate-700 dark:text-slate-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-vensai-electric animate-pulse" />
            <span>VENSAI LABS</span>
            <span className="text-vensai-electric">•</span>
            <span className="text-vensai-royal dark:text-vensai-electric">
              {BRAND_CONFIG.tagline}
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Primary Enterprise Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0.05}>
              <h1 className="text-4xl sm:text-5xl xl:text-[56px] font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                Technology, Talent &amp; Solutions for Businesses Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vensai-royal via-vensai-electric to-vensai-sky">
                  Build and Scale.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                From software development and cloud engineering to e-commerce, cybersecurity, branding and business consulting, Vensai brings the expertise, people and execution required to move businesses forward.
              </p>
            </Reveal>

            {/* Core Proposition Callout Box */}
            <Reveal delay={0.15}>
              <div className="p-5 rounded-sm border-l-2 border-vensai-electric bg-[#F7F9FC] dark:bg-[#111827]/80 border border-slate-200/80 dark:border-slate-800/80 max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-vensai-royal dark:text-vensai-electric mb-1.5">
                  Full-Service Freelancing Agency &amp; Business Solutions Partner
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {BRAND_CONFIG.coreProposition}
                </p>
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-all duration-200"
                >
                  <span>Talk to Vensai</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-slate-900 dark:text-white bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-[#1F2937] border border-slate-300 dark:border-slate-700 hover:border-vensai-electric rounded-sm transition-all duration-200"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </Reveal>

            {/* Three Pillars Strip */}
            <Reveal delay={0.25}>
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      One Business Partner
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Single accountable governance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      Multiple Capabilities
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      13 in-house practice disciplines
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      End-to-End Delivery
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Strategy through post-launch care
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Sophisticated Enterprise Brand & Ecosystem Console */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative rounded-sm border border-slate-200 dark:border-slate-800 bg-[#F7F9FC] dark:bg-[#080D14] p-6 sm:p-8 shadow-enterprise-lg overflow-hidden">
                {/* Top Blueprint Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800/90 text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  <span>VENSAI DELIVERY ARCHITECTURE</span>
                  <span className="text-vensai-electric font-semibold">ACTIVE SYSTEM</span>
                </div>

                {/* Official Uploaded Vensai Labs Identity Centerpiece */}
                <div className="relative rounded-sm border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#05080D] p-6 flex flex-col items-center justify-center shadow-inner">
                  {/* Light mode uses exact transparent light-mode extraction; Dark mode uses exact uploaded dark-mode lockup */}
                  <img
                    src="/brand/vensai-full-light.png"
                    alt="Vensai Labs — Freelance Talent. Real Solutions. Build | Design | Automate | Scale"
                    width={680}
                    height={480}
                    decoding="async"
                    fetchPriority="high"
                    className="block dark:hidden w-full max-w-[340px] h-auto object-contain select-none"
                  />
                  <img
                    src="/brand/vensai-full-dark.png"
                    alt="Vensai Labs — Freelance Talent. Real Solutions. Build | Design | Automate | Scale"
                    width={680}
                    height={480}
                    decoding="async"
                    fetchPriority="high"
                    className="hidden dark:block w-full max-w-[340px] h-auto object-contain select-none"
                  />
                </div>

                {/* Interactive 4-Pillar Ecosystem Selector: BUILD | DESIGN | AUTOMATE | SCALE */}
                <div className="mt-6">
                  <div className="grid grid-cols-4 gap-1.5 p-1 rounded-sm bg-slate-200/70 dark:bg-[#111827] border border-slate-300/60 dark:border-slate-800">
                    {ECOSYSTEM_NODES.map((node) => {
                      const active = activeNode === node.id;
                      return (
                        <button
                          key={node.id}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setActiveNode(node.id)}
                          className={`py-2 px-2 text-[11px] font-bold tracking-[0.14em] uppercase rounded-sm transition-all ${
                            active
                              ? "bg-vensai-royal text-white shadow-blue-glow-sm"
                              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                          }`}
                        >
                          {node.verb}
                        </button>
                      );
                    })}
                  </div>

                  {/* All 4 Ecosystem Nodes rendered in SSR DOM for full search engine crawlability */}
                  {ECOSYSTEM_NODES.map((node) => {
                    const isActive = node.id === activeNode;
                    return (
                      <div
                        key={node.id}
                        className={`mt-4 p-4 rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827]/90 ${
                          isActive ? "block" : "hidden"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric">
                            {node.verb} — {node.domain}
                          </span>
                          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                            {node.metric}
                          </span>
                        </div>
                        <ul className="space-y-1.5 mt-2.5">
                          {node.items.map((it) => (
                            <li
                              key={it}
                              className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                            >
                              <span className="w-1.5 h-1.5 bg-vensai-electric rounded-full" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Governance Bar */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/90 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Full-Time Vensai Employees</span>
                  <span className="text-vensai-electric">•</span>
                  <span>Central Project Management</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

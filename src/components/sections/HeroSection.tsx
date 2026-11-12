"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/EnterpriseUI";
import { BRAND_CONFIG, SERVICE_CATEGORIES } from "@/data/vensai-data";

const PRACTICE_SUMMARY = [
  {
    label: "Engineering",
    items: ["Applications, APIs, mobile, cloud", "Security reviews and managed IT"],
  },
  {
    label: "Operations & growth",
    items: ["BPO/KPO and customer support", "Brand, catalog, and campaigns"],
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800/90 dark:bg-[#121820]">
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 lg:pb-28 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:col-span-7">
            <Reveal>
              <p className="text-sm text-slate-600 dark:text-slate-400">{BRAND_CONFIG.legalLine}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl xl:text-[52px] xl:leading-[1.15]">
                {BRAND_CONFIG.homepage.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {BRAND_CONFIG.homepage.lead}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-vensai-royal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-vensai-electric"
                >
                  <span>Talk to us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-vensai-royal hover:text-vensai-royal dark:border-slate-600 dark:text-slate-100 dark:hover:border-vensai-electric dark:hover:text-vensai-electric"
                >
                  See what we do
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="grid max-w-xl grid-cols-1 gap-6 border-t border-slate-200 pt-6 dark:border-slate-800 sm:grid-cols-3">
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-white">CIN on record</dt>
                  <dd className="mt-1 font-mono text-sm text-slate-500 dark:text-slate-400">
                    {BRAND_CONFIG.company.cin}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-white">Practice areas</dt>
                  <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {SERVICE_CATEGORIES.length} teams under one company
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900 dark:text-white">After go-live</dt>
                  <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Maintenance and support retained in-house
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-[#F7F9FC] p-6 shadow-enterprise dark:border-slate-800 dark:bg-[#18202a] sm:p-8">
                <img
                  src="/brand/vensai-full-light.jpg"
                  alt={`Vensai Labs — ${BRAND_CONFIG.tagline} ${BRAND_CONFIG.statementPipe}`}
                  width={1024}
                  height={724}
                  decoding="async"
                  fetchPriority="high"
                  className="mx-auto block h-auto w-full max-w-[320px] object-contain dark:hidden"
                />
                <img
                  src="/brand/vensai-full-dark.jpg"
                  alt={`Vensai Labs — ${BRAND_CONFIG.tagline} ${BRAND_CONFIG.statementPipe}`}
                  width={1024}
                  height={724}
                  decoding="async"
                  fetchPriority="high"
                  className="mx-auto hidden h-auto w-full max-w-[320px] object-contain dark:block"
                />

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {PRACTICE_SUMMARY.map((practice) => (
                    <div
                      key={practice.label}
                      className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-[#121820]"
                    >
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{practice.label}</p>
                      <ul className="mt-2 space-y-1.5">
                        {practice.items.map((item) => (
                          <li key={item} className="text-sm leading-snug text-slate-600 dark:text-slate-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-5 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
                  <MapPin className="h-4 w-4 shrink-0 text-vensai-royal dark:text-vensai-electric" />
                  <span>{BRAND_CONFIG.offices.display}</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

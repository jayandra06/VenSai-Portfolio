"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Layers, Check } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/EnterpriseUI";
import { WHY_VENSAI_POINTS } from "@/data/vensai-data";

export function WhyVensaiSection() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-[#121820] lg:py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky / Editorial Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-vensai-royal dark:text-vensai-electric">
                <span>Why Vensai Labs</span>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                A software company, not a marketplace of separate people.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Vensai employs its own full-time experts across technology, engineering, design, consulting, marketing and operations. IT and non-IT sit in the same company, and one team stays accountable from the first brief through support.
              </p>

              <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-[#F7F9FC] p-6 dark:border-slate-700 dark:bg-[#18202a]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-700">
                  <span className="text-xs font-semibold uppercase tracking-widest text-vensai-royal dark:text-vensai-electric">
                    How the company works
                  </span>
                  <img
                    src="/brand/vensai-symbol.png"
                    alt="Vensai V Mark"
                    width={110}
                    height={90}
                    decoding="async"
                    loading="lazy"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-vensai-royal dark:text-vensai-electric" />
                    <p>
                      <strong className="text-slate-900 dark:text-white">In-house experts.</strong> You work with Vensai staff, not a chain of outside contractors.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-vensai-royal dark:text-vensai-electric" />
                    <p>
                      <strong className="text-slate-900 dark:text-white">IT and non-IT together.</strong> Software, cloud, security, commerce, brand and support share one delivery plan.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-vensai-royal dark:text-vensai-electric" />
                    <p>
                      <strong className="text-slate-900 dark:text-white">One accountable team.</strong> One contract, one project lead, and support that continues after launch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-lg shadow-blue-glow-sm transition-colors"
                >
                  <span>Partner With Vensai</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-vensai-royal hover:text-vensai-royal dark:border-slate-600 dark:text-slate-200"
                >
                  <span>About Our Model</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right 10-Point Enterprise Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_VENSAI_POINTS.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.03}>
                <motion.div
                  whileHover={
                    prefersReducedMotion ? {} : { y: -4, boxShadow: "0 8px 32px rgba(0,95,255,0.12)" }
                  }
                  transition={{ duration: 0.22 }}
                  className="h-full cursor-default rounded-2xl border border-slate-200 bg-[#F7F9FC] p-6 transition-colors hover:border-vensai-royal/40 dark:border-slate-700 dark:bg-[#18202a]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-vensai-royal dark:text-vensai-electric">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {point.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

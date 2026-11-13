"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BUSINESS_PILLARS } from "@/data/vensai-data";
import { PillarVisual } from "@/components/visuals/EditorialVisuals";
import { Reveal } from "@/components/ui/EnterpriseUI";
import { easeEditorial } from "@/components/motion/motionPresets";

export function BusinessPillarsSection() {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const pillar = BUSINESS_PILLARS[active];

  return (
    <section className="surface-ink border-y border-white/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow-quiet">How we work with clients</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Four ways teams engage us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 prose-measure">
              Pick the lane that matches your procurement conversation. Each links to the page where we describe scope, staffing, and SLAs in plain language.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col gap-2 lg:col-span-5">
            {BUSINESS_PILLARS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-xl border px-4 py-4 text-left transition-colors ${
                  active === i
                    ? "border-vensai-electric/50 bg-white/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <p className="font-display text-lg font-semibold text-white">{p.title}</p>
                <p className="mt-1 text-sm text-slate-400 line-clamp-2">{p.summary}</p>
              </button>
            ))}
          </div>

          <motion.div layout className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b12] lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={pillar.id}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, x: -12 }}
                transition={{ duration: 0.4, ease: easeEditorial }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                <PillarVisual variant={pillar.visual} className="h-full w-full min-h-[220px] object-cover" />
                <div className="flex flex-col justify-between p-8">
                  <div>
                    <p className="font-mono text-xs text-vensai-copper">{String(active + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.summary}</p>
                  </div>
                  <Link
                    href={pillar.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-vensai-sky hover:text-white"
                  >
                    Open this practice
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

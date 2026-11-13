"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BRAND_CONFIG } from "@/data/vensai-data";
import { HeroOperationsVisual } from "@/components/visuals/EditorialVisuals";
import { easeEditorial } from "@/components/motion/motionPresets";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      <div className="absolute inset-0 bg-vensai-paper bg-paper-grain dark:bg-vensai-obsidian" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20">
        <motion.div
          className="lg:col-span-6"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeEditorial }}
        >
          <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl xl:text-[3.25rem] xl:leading-[1.12]">
            {BRAND_CONFIG.homepage.headline}
          </h1>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {BRAND_CONFIG.homepage.lead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-vensai-royal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-vensai-electric"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-vensai-royal dark:border-slate-600 dark:text-slate-100"
            >
              See the work
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-6"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.08, ease: easeEditorial }}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-enterprise-lg dark:border-slate-700/80">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.45, ease: easeEditorial }}
              className="relative"
            >
              <HeroOperationsVisual className="h-auto w-full" />
              <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-16 text-xs text-slate-200">
                Delivery console — software pipelines, ops desks, and handover in one view.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

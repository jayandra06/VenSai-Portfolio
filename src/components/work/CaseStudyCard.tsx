"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudyBlueprint } from "@/data/vensai-data";
import { CaseStudyScene } from "@/components/visuals/EditorialVisuals";
import { easeEditorial } from "@/components/motion/motionPresets";

export function CaseStudyCard({
  study,
  layout = "grid",
}: {
  study: CaseStudyBlueprint;
  layout?: "grid" | "feature";
}) {
  const prefersReducedMotion = useReducedMotion();
  const isFeature = layout === "feature";

  return (
    <motion.article
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.35, ease: easeEditorial }}
      className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-enterprise dark:border-slate-800 dark:bg-[#0d1420] ${
        isFeature ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.04 }} transition={{ duration: 0.5, ease: easeEditorial }}>
          <CaseStudyScene theme={study.theme} className="h-48 w-full object-cover sm:h-56" />
        </motion.div>
        <span className="pointer-events-none absolute right-4 top-3 font-display text-5xl font-semibold text-white/20 transition-colors duration-500 group-hover:text-vensai-electric/40">
          {study.code}
        </span>
      </div>
      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-vensai-copper/10 px-2.5 py-0.5 text-[11px] font-medium text-vensai-copper dark:text-vensai-copper">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold text-slate-900 dark:text-white">{study.clientName}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{study.summary}</p>
        <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {study.metrics.slice(0, 3).map((m) => (
            <div key={m.label}>
              <dt className="text-[10px] uppercase tracking-wide text-slate-500">{m.label}</dt>
              <dd className="font-mono text-sm font-semibold text-vensai-royal dark:text-vensai-electric">{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link href={`/work/${study.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-vensai-royal dark:text-vensai-electric">
            Read the story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {study.websiteUrl && (
            <a
              href={study.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              Live site ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

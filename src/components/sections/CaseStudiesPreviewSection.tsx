"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CASE_STUDY_BLUEPRINTS, type CaseStudyTag } from "@/data/vensai-data";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { Reveal, StaggerReveal } from "@/components/ui/EnterpriseUI";

const FILTERS: Array<"All" | CaseStudyTag> = ["All", "IT", "Non-IT", "BPO"];

export function CaseStudiesPreviewSection() {
  const [filter, setFilter] = useState<"All" | CaseStudyTag>("All");

  const visible = useMemo(() => {
    if (filter === "All") return CASE_STUDY_BLUEPRINTS;
    return CASE_STUDY_BLUEPRINTS.filter((s) => s.tags.includes(filter));
  }, [filter]);

  return (
    <section className="border-b border-slate-200 bg-vensai-paperWarm py-20 dark:border-slate-800 dark:bg-vensai-obsidian lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow-quiet">Selected delivery</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Work we can show on the record
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Exchange infrastructure, high-volume retail, and multi-module ERP—each with metrics, architecture notes, and a live link where the client publishes it.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-vensai-royal dark:text-vensai-electric"
            >
              Full work index <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                filter === f
                  ? "bg-vensai-royal text-white"
                  : "border border-slate-300 text-slate-700 dark:border-slate-600 dark:text-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-sm text-slate-500 dark:text-slate-400">
            No published case study is tagged for this filter yet. See{" "}
            <Link href="/services/kpo-bpo" className="font-semibold text-vensai-royal dark:text-vensai-electric">
              BPO operations
            </Link>{" "}
            or choose All.
          </p>
        ) : (
          <AnimatePresence mode="popLayout">
            <StaggerReveal key={filter} className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {visible.map((study) => (
                <motion.div key={study.id} layout>
                  <CaseStudyCard study={study} />
                </motion.div>
              ))}
            </StaggerReveal>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

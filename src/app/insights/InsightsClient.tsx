"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Breadcrumbs, EnterpriseModal } from "@/components/ui/EnterpriseUI";
import {
  INSIGHTS_ARTICLES,
  CASE_STUDY_BLUEPRINTS,
  SERVICE_CATEGORIES,
} from "@/data/vensai-data";

export function InsightsClient() {
  const [activeArticle, setActiveArticle] = useState<
    (typeof INSIGHTS_ARTICLES)[0] | null
  >(null);

  return (
    <div className="bg-white dark:bg-[#0B1118]">
      <section className="py-16 lg:py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Insights" }]} />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
              <BookOpen className="w-4 h-4" />
              <span>INSIGHTS, RESEARCH &amp; ARCHITECTURE BRIEFINGS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Practical Perspectives on Technology, Commerce &amp; Execution.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Research notes, architectural frameworks and delivery blueprints from Vensai’s engineering, consulting, commerce and operations practices.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Briefings Cards */}
      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
            Executive Briefings &amp; Practice Perspectives
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSIGHTS_ARTICLES.map((art) => (
              <div
                key={art.id}
                className="flex flex-col justify-between p-8 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-vensai-electric pb-4 border-b border-slate-200 dark:border-slate-800">
                    <span>{art.category.toUpperCase()}</span>
                    <span className="text-slate-500">{art.readTime}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white leading-snug">
                    <a
                      href={`#${art.id}`}
                      className="hover:text-vensai-royal dark:hover:text-vensai-electric transition-colors"
                    >
                      {art.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {art.summary}
                  </p>
                  <div className="mt-5 space-y-2">
                    {art.keyTakeaways.map((kt) => (
                      <div
                        key={kt}
                        className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-vensai-electric shrink-0 mt-0.5" />
                        <span>{kt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveArticle(art)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric hover:underline"
                  >
                    <span>Read Executive Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`#${art.id}`}
                    className="text-xs font-mono text-slate-500 hover:text-vensai-electric"
                  >
                    Jump to Full Briefing ↓
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Crawlable Technical Briefings (Server-Rendered Editorial Content) */}
      <section className="py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1118]">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-vensai-electric">
              IN-DEPTH TECHNICAL &amp; STRATEGY GUIDES
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              Full Practice Briefings &amp; Architectural Notes
            </h2>
          </div>

          {INSIGHTS_ARTICLES.map((art) => {
            const relatedLinks = art.relatedServices || [];
            return (
              <article
                key={art.id}
                id={art.id}
                className="scroll-mt-28 p-8 sm:p-10 rounded-sm bg-[#F7F9FC] dark:bg-[#111827]/80 border border-slate-200 dark:border-slate-800 space-y-6"
              >
                <header className="pb-6 border-b border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-vensai-electric">
                    <span>{art.category.toUpperCase()}</span>
                    <span className="text-slate-500">{art.readTime}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white leading-tight">
                    {art.title}
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {art.summary}
                  </p>
                </header>

                <div className="space-y-6">
                  {art.sections.map((sec) => (
                    <div key={sec.heading} className="space-y-2">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {sec.heading}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {sec.body}
                      </p>
                    </div>
                  ))}
                </div>

                {relatedLinks.length > 0 && (
                  <footer className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Related Vensai Practices:
                      </span>
                      {relatedLinks.map((srv) => (
                        <Link
                          key={srv.href}
                          href={srv.href}
                          className="px-3 py-1 text-xs font-medium bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric text-vensai-royal dark:text-vensai-electric rounded-sm transition-colors"
                        >
                          {srv.label}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric hover:underline shrink-0"
                    >
                      <span>Consult With Practice Lead</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </footer>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Case Study Blueprints Reference */}
      <section className="py-20 bg-[#F7F9FC] dark:bg-[#080D14]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
            Case Study Reporting Framework
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Structured case study templates ready to present client-authorized engagements across software, enterprise systems, e-commerce and cloud infrastructure.
          </p>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDY_BLUEPRINTS.map((cs) => (
              <div
                key={cs.id}
                className="p-7 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-vensai-electric">
                  {cs.code}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {cs.title}
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  {cs.clientIndustry}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cs.challenge}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cs.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnterpriseModal
        isOpen={Boolean(activeArticle)}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.title || ""}
        subtitle={activeArticle?.category}
      >
        {activeArticle && (
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="text-base font-medium text-slate-900 dark:text-white">
              {activeArticle.summary}
            </p>
            <div className="space-y-3">
              {activeArticle.sections.map((sec) => (
                <div key={sec.heading}>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {sec.heading}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-vensai-electric">
                Core Executive Takeaways
              </p>
              {activeArticle.keyTakeaways.map((kt) => (
                <div key={kt} className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                  <span>{kt}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm"
              >
                <span>Discuss With Our Consultants</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </EnterpriseModal>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, FileText, Quote } from "lucide-react";
import { Reveal, SectionHeader, EnterpriseModal } from "@/components/ui/EnterpriseUI";
import { CASE_STUDY_BLUEPRINTS, CaseStudyBlueprint } from "@/data/vensai-data";

export function CaseStudiesAndCTASection() {
  const [selectedBlueprint, setSelectedBlueprint] =
    useState<CaseStudyBlueprint | null>(null);

  return (
    <>
      {/* SECTION 16: CONSULTING / FEASIBILITY CTA */}
      <section className="py-20 bg-[#080D14] text-white border-b border-slate-800 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 rounded-full bg-vensai-electric/15 blur-[110px]"
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="p-8 sm:p-12 lg:p-14 rounded-sm bg-gradient-to-br from-[#111827] via-[#0B1118] to-[#111827] border border-slate-800 shadow-enterprise-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-electric">
                  <Compass className="w-4 h-4" />
                  <span>TECHNICAL CONSULTING • RESEARCH &amp; FEASIBILITY</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                  Have an idea but don&apos;t know where to start?
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Talk to our team about your technology, product, e-commerce or business requirement. We can help evaluate feasibility, define the right approach and build a practical roadmap.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-end gap-3">
                <Link
                  href="/contact?service=Consulting%20%2F%20R%26D"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-all"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions/consulting"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white border border-slate-700 hover:border-vensai-electric rounded-sm transition-colors"
                >
                  <span>Explore Consulting &amp; R&amp;D</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 17: CASE STUDIES FRAMEWORK */}
      <section className="py-24 bg-[#F7F9FC] dark:bg-[#0B1118] border-b border-slate-200 dark:border-slate-800/90">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SectionHeader
              eyebrow="DELIVERY ARCHITECTURE • CASE STUDY FRAMEWORK"
              title="Structured Engagement & Case Study System."
              description="We believe in transparent, verifiable engineering and business reporting. Each engagement blueprint below illustrates how Vensai structures Challenge, Approach, Solution, Technology and Outcome—ready to be populated with client-authorized case studies."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDY_BLUEPRINTS.map((cs, idx) => (
              <Reveal key={cs.id} delay={idx * 0.05}>
                <div className="h-full flex flex-col justify-between bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-sm p-7 shadow-enterprise-sm hover:border-vensai-electric transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                      <span className="font-mono text-xs font-bold text-vensai-royal dark:text-vensai-electric">
                        {cs.code}
                      </span>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-sm bg-slate-100 dark:bg-[#0B1118] text-slate-600 dark:text-slate-300">
                        {cs.engagementModel}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {cs.clientIndustry}
                      </p>
                      <h3 className="mt-1.5 text-xl font-semibold text-slate-900 dark:text-white">
                        {cs.title}
                      </h3>
                    </div>

                    <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                      <div className="p-3 rounded-sm bg-[#F7F9FC] dark:bg-[#0B1118] border border-slate-200/70 dark:border-slate-800">
                        <strong className="text-slate-900 dark:text-white block mb-0.5">
                          Challenge
                        </strong>
                        {cs.challenge.replace(/^Challenge:\s*/i, "")}
                      </div>
                      <div className="p-3 rounded-sm bg-[#F7F9FC] dark:bg-[#0B1118] border border-slate-200/70 dark:border-slate-800">
                        <strong className="text-slate-900 dark:text-white block mb-0.5">
                          Approach
                        </strong>
                        {cs.approach.replace(/^Approach:\s*/i, "")}
                      </div>
                      <div className="p-3 rounded-sm bg-[#F7F9FC] dark:bg-[#0B1118] border border-slate-200/70 dark:border-slate-800">
                        <strong className="text-slate-900 dark:text-white block mb-0.5">
                          Solution
                        </strong>
                        {cs.solution.replace(/^Solution:\s*/i, "")}
                      </div>
                      <div className="p-3 rounded-sm bg-vensai-royal/5 dark:bg-vensai-electric/10 border border-vensai-electric/30">
                        <strong className="text-vensai-royal dark:text-vensai-electric block mb-0.5">
                          Outcome
                        </strong>
                        {cs.outcome.replace(/^Outcome:\s*/i, "")}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Technology Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cs.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 dark:bg-[#0B1118] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedBlueprint(cs)}
                      className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider border border-slate-300 dark:border-slate-700 hover:border-vensai-electric text-slate-800 dark:text-slate-200 rounded-sm inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-vensai-electric" />
                      <span>Inspect Full Case Study Template</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Partner Feedback / Testimonial Placeholder Component (Ready for Real Client Quotes) */}
          <Reveal delay={0.15}>
            <div className="mt-12 p-8 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 pb-6 lg:pb-0 lg:pr-8">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-vensai-electric">
                  <Quote className="w-4 h-4" />
                  <span>Client Endorsement Slot</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Partner Feedback Architecture
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Structured testimonial component ready for verified client executive quotes as engagements are published.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-sm bg-[#F7F9FC] dark:bg-[#0B1118] border border-slate-200/80 dark:border-slate-800">
                  <p className="text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed">
                    &ldquo;[Client Testimonial Placeholder — Reserved for verified executive feedback regarding Vensai’s project management, full-time team responsiveness and end-to-end technical delivery.]&rdquo;
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      [Executive Name &amp; Title Placeholder]
                    </span>
                    <span className="font-mono text-vensai-electric">
                      [Enterprise Partner]
                    </span>
                  </div>
                </div>
                <div className="p-5 rounded-sm bg-[#F7F9FC] dark:bg-[#0B1118] border border-slate-200/80 dark:border-slate-800">
                  <p className="text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed">
                    &ldquo;[Client Testimonial Placeholder — Reserved for verified partner feedback highlighting multi-disciplinary collaboration across e-commerce, integrations, creative production and ongoing support.]&rdquo;
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      [Director / Founder Placeholder]
                    </span>
                    <span className="font-mono text-vensai-electric">
                      [Commerce &amp; Retail Partner]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 36: HOMEPAGE FINAL CTA */}
      <section className="py-24 bg-[#0B1118] text-white relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:48px_48px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-vensai-royal/20 blur-[130px]"
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
          <Reveal>
            <div className="inline-flex flex-col items-center gap-3 mb-2">
              <img
                src="/brand/vensai-symbol.png"
                alt="Vensai Labs Geometric V Symbol"
                className="h-14 w-auto object-contain"
              />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-vensai-electric">
                BUILD • DESIGN • AUTOMATE • SCALE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.12]">
              Whatever You’re Building, Let’s Build It Right.
            </h2>

            <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us what your business needs. Our team will help you understand the requirement, evaluate the right approach and bring together the expertise required to deliver it.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-all duration-200"
              >
                <span>Talk to Vensai</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#111827] hover:bg-[#1F2937] border border-slate-700 hover:border-vensai-electric rounded-sm transition-all duration-200"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case Study Blueprint Modal */}
      <EnterpriseModal
        isOpen={Boolean(selectedBlueprint)}
        onClose={() => setSelectedBlueprint(null)}
        title={selectedBlueprint?.title || ""}
        subtitle={selectedBlueprint?.code}
      >
        {selectedBlueprint && (
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <div className="p-4 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-vensai-electric">
                Client / Industry &amp; Engagement Model
              </p>
              <p className="font-semibold text-slate-900 dark:text-white mt-1">
                {selectedBlueprint.clientIndustry} — ({selectedBlueprint.engagementModel})
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">
                1. Challenge
              </h4>
              <p className="mt-1 leading-relaxed">{selectedBlueprint.challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">
                2. Approach
              </h4>
              <p className="mt-1 leading-relaxed">{selectedBlueprint.approach}</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">
                3. Solution
              </h4>
              <p className="mt-1 leading-relaxed">{selectedBlueprint.solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">
                4. Technology Stack
              </h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {selectedBlueprint.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">
                5. Outcome
              </h4>
              <p className="mt-1 leading-relaxed">{selectedBlueprint.outcome}</p>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm"
              >
                <span>Discuss a Similar Requirement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </EnterpriseModal>
    </>
  );
}

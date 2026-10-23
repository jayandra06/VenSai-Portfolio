"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/EnterpriseUI";
import { PROCESS_STEPS } from "@/data/vensai-data";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 bg-white dark:bg-[#0B1118] border-b border-slate-200 dark:border-slate-800/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="OUR APPROACH • END-TO-END DELIVERY LIFECYCLE"
            title="From Requirement to Reality."
            description="Every Vensai engagement follows a disciplined 8-stage governance framework—ensuring technical feasibility is validated early, project execution is centrally managed, and post-deployment support is built in from day one."
          />
        </Reveal>

        {/* Interactive Stage Inspector Bar */}
        <Reveal delay={0.1}>
          <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#F7F9FC] dark:bg-[#111827]/90 border border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pb-6 border-b border-slate-200 dark:border-slate-800">
              {PROCESS_STEPS.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <motion.button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    whileHover={prefersReducedMotion ? {} : { y: -2, scale: 1.03 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className={`p-3 rounded-lg text-left border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vensai-electric ${
                      isActive
                        ? "bg-vensai-royal text-white border-vensai-royal shadow-blue-glow-sm"
                        : "bg-white dark:bg-[#0B1118] border-slate-200 dark:border-slate-800 hover:border-vensai-electric text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    <p
                      className={`font-mono text-xs font-bold ${
                        isActive ? "text-white" : "text-vensai-electric"
                      }`}
                    >
                      {step.number}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wider mt-1">
                      {step.phase}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            {/* Active Stage Detail — animated swap */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-vensai-royal dark:text-vensai-electric">
                    <span>STAGE {PROCESS_STEPS[activeStep].number}</span>
                    <span>—</span>
                    <span>{PROCESS_STEPS[activeStep].phase}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mt-1.5">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {PROCESS_STEPS[activeStep].details}
                  </p>
                </div>
                <div className="lg:col-span-4 bg-white dark:bg-[#0B1118] p-5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-3">
                    Key Stage Outputs
                  </p>
                  <ul className="space-y-2">
                    {PROCESS_STEPS[activeStep].outputs.map((out, oi) => (
                      <motion.li
                        key={out}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: oi * 0.06 }}
                        className="flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-vensai-electric shrink-0" />
                        <span>{out}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

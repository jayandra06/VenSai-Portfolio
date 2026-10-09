"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Layers, Check } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/EnterpriseUI";
import { WHY_VENSAI_POINTS } from "@/data/vensai-data";

export function WhyVensaiSection() {
  return (
    <section className="py-24 bg-[#0B1118] text-white border-b border-slate-800/90 relative overflow-hidden">
      {/* Subtle Blue Accent Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full bg-vensai-royal/15 blur-[130px]"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky / Editorial Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-electric">
                <span className="w-2 h-2 bg-vensai-electric inline-block" />
                <span>WHY VENSAI LABS</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.12]">
                More Than a Service Provider. A Long-Term Business Partner.
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Vensai combines the flexibility of freelancing with the accountability of a professional agency. We maintain our own full-time professional employees across technology, engineering, design, consulting, marketing and operational support—giving your business direct access to specialized teams while Vensai manages execution from start to finish.
              </p>

              {/* Strategic Positioning Comparison Card */}
              <div className="mt-8 p-6 rounded-sm bg-[#111827] border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-widest text-vensai-electric">
                    The Vensai Agency Advantage
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
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-white">Not a freelancer marketplace:</strong> You never have to vet, coordinate or chase unverified individual contractors.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-white">Not a narrow single-skill shop:</strong> Software, cloud, security, SAP/BI, e-commerce, creative shoots and support work together seamlessly.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-white">Centralized accountability:</strong> One contract, one project management structure, and continuous post-deployment ownership.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow-sm transition-colors"
                >
                  <span>Partner With Vensai</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 border border-slate-700 hover:border-vensai-electric rounded-sm transition-colors"
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
                <div className="h-full p-6 rounded-sm bg-[#111827]/90 border border-slate-800 hover:border-vensai-electric/70 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-vensai-electric">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-vensai-electric/60" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

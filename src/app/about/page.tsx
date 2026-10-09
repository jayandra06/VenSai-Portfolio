import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, SectionHeader } from "@/components/ui/EnterpriseUI";
import { WHY_VENSAI_POINTS, PROCESS_STEPS } from "@/data/vensai-data";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title:
    "About Vensai Labs — Full-Service Freelancing Agency & Business Solutions Partner",
  description:
    "Learn who Vensai Labs is, our philosophy, our full-time multidisciplinary teams across 13 capabilities, how we work, and why businesses partner with Vensai from requirement to post-deployment support.",
  path: "/about",
  keywords: [
    "about Vensai Labs",
    "full-service freelancing agency",
    "business solutions consultancy",
    "managed technology delivery partner",
    "in-house engineering and consulting teams",
  ],
});

export default function AboutPage() {
  const aboutPageSchema = buildWebPageSchema({
    title:
      "About Vensai Labs — Full-Service Freelancing Agency & Business Solutions Partner",
    description:
      "Vensai Labs is a full-service freelancing agency and business solutions consultancy employing full-time professionals across 13 capabilities.",
    path: "/about",
    type: "AboutPage",
  });

  return (
    <div className="bg-white dark:bg-[#0B1118]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {/* Hero & Who Vensai Is */}
      <section className="py-16 lg:py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "About Vensai" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
                <span className="w-2 h-2 bg-vensai-electric inline-block" />
                <span>ABOUT VENSAI LABS • WHO WE ARE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                One Business Partner. Multiple Capabilities. End-to-End Delivery.
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Vensai Labs is a full-service freelancing agency and business solutions consultancy. We maintain our own full-time professional employees across technology, engineering, design, consulting, marketing, creative production and customer support—giving businesses access to specialized talent while Vensai itself manages project execution, delivery and post-deployment care.
              </p>

              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Whatever your business needs—technology, software, e-commerce, cybersecurity, cloud, AI, enterprise systems, branding, marketing, research or operational support—Vensai brings the right expertise together and manages the engagement from requirement to delivery.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-all"
                >
                  <span>Talk to Vensai</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:border-vensai-electric text-slate-800 dark:text-slate-200 rounded-sm transition-colors"
                >
                  <span>Explore Our 13 Practice Areas</span>
                </Link>
              </div>
            </div>

            {/* Official Vensai Labs Brand Identity Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-sm bg-white dark:bg-[#05080D] border border-slate-200 dark:border-slate-800 shadow-enterprise-lg flex flex-col items-center">
                <img
                  src="/brand/vensai-full-light.png"
                  alt="Vensai Labs Official Identity — Freelance Talent. Real Solutions."
                  width={680}
                  height={480}
                  decoding="async"
                  fetchPriority="high"
                  className="block dark:hidden w-full max-w-[340px] h-auto object-contain"
                />
                <img
                  src="/brand/vensai-full-dark.png"
                  alt="Vensai Labs Official Identity — Freelance Talent. Real Solutions."
                  width={680}
                  height={480}
                  decoding="async"
                  fetchPriority="high"
                  className="hidden dark:block w-full max-w-[340px] h-auto object-contain"
                />
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 w-full text-center">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
                    FREELANCE TALENT. REAL SOLUTIONS.
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 mt-1">
                    BUILD • DESIGN • AUTOMATE • SCALE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy & Team Structure */}
      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
            <span className="font-mono text-xs font-bold text-vensai-electric">
              01 • OUR PHILOSOPHY
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              Flexibility Without Fragmentation
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Businesses often face a difficult trade-off: hire unverified individual freelancers with no central accountability, or retain rigid agencies that only understand a single discipline. Vensai was built to bridge that gap—combining the agility of on-demand talent with the structured governance of an enterprise consultancy.
            </p>
          </div>

          <div className="p-8 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
            <span className="font-mono text-xs font-bold text-vensai-electric">
              02 • OUR TEAM
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              Full-Time Multi-Disciplinary Professionals
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Vensai employs its own full-time software engineers, mobile developers, AI/ML specialists, cloud &amp; DevOps architects, cybersecurity analysts, SAP/BI consultants, UI/UX designers, creative producers, marketers and customer support executives—all collaborating under unified project management.
            </p>
          </div>

          <div className="p-8 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
            <span className="font-mono text-xs font-bold text-vensai-electric">
              03 • OUR LONG-TERM VISION
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              Enduring Operational Partnerships
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our vision is to be the single long-term partner businesses rely on across every stage of growth—from initial technical feasibility research and product engineering to digital commerce, brand evolution and 24/7 post-deployment operational care.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work & Capabilities Overview */}
      <section className="py-20 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="HOW WE WORK • GOVERNANCE & EXECUTION"
            title="Accountable Delivery Across Every Engagement."
            description="From requirement discovery and technical feasibility to deployment and ongoing support, Vensai manages the entire lifecycle."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800"
              >
                <span className="font-mono text-xs font-bold text-vensai-electric">
                  {step.number} — {step.phase}
                </span>
                <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                  {step.summary}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="WHY BUSINESSES WORK WITH US"
            title="Ten Reasons Organizations Choose Vensai Labs."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {WHY_VENSAI_POINTS.map((pt, i) => (
              <div
                key={pt.title}
                className="p-6 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800"
              >
                <span className="font-mono text-xs font-bold text-vensai-electric">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                  {pt.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Headphones, CheckCircle2, ShieldCheck, Activity } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";

export const metadata: Metadata = {
  title: "Customer, Technical & Post-Deployment Support Services",
  description:
    "Vensai Labs stays involved before, during and after launch: Pre-deployment, Deployment, Post-deployment, Technical support, Chat support, Voice support, Maintenance, Monitoring and Enhancements.",
};

const SUPPORT_PHASES = [
  {
    phase: "STAGE 01 • PRE-DEPLOYMENT",
    title: "Pre-Deployment Readiness & QA",
    description:
      "Staging validation, operational SOP creation, knowledge-base structuring, load testing, security verification and support team training before launch.",
  },
  {
    phase: "STAGE 02 • DEPLOYMENT",
    title: "Controlled Deployment & Cutover Care",
    description:
      "Production release coordination, hypercare monitoring, live integration verification, real-time issue triage and user onboarding support.",
  },
  {
    phase: "STAGE 03 • POST-DEPLOYMENT",
    title: "Long-Term Post-Deployment Continuity",
    description:
      "Ongoing SLA-backed technical maintenance, customer support desks (chat & voice), order operations, system monitoring and continuous feature enhancements.",
  },
];

const SUPPORT_PILLARS = [
  {
    title: "Pre-deployment",
    desc: "Environment readiness, support playbooks, ticketing setup and operational dry-runs prior to go-live.",
  },
  {
    title: "Deployment",
    desc: "Zero-downtime launch coordination, cutover monitoring and dedicated hypercare engineering coverage.",
  },
  {
    title: "Post-deployment",
    desc: "Structured long-term ownership ensuring your systems and customers are supported every day after launch.",
  },
  {
    title: "Technical support",
    desc: "L1, L2 and L3 application troubleshooting, bug resolution, root-cause analysis and escalation handling.",
  },
  {
    title: "Chat support",
    desc: "Responsive live-chat, WhatsApp and messaging support agents trained on your product and business policies.",
  },
  {
    title: "Voice support",
    desc: "Inbound and outbound voice support executives handling customer inquiries, service requests and escalations.",
  },
  {
    title: "Maintenance",
    desc: "Regular OS/library patching, database optimization, backup verification and preventive upkeep.",
  },
  {
    title: "Monitoring",
    desc: "Proactive uptime, latency, error-rate and security monitoring with automated incident response.",
  },
  {
    title: "Enhancements",
    desc: "Iterative feature additions, UI refinements, workflow adjustments and new integration rollouts as you grow.",
  },
];

export default function SupportSolutionsPage() {
  return (
    <div className="bg-white dark:bg-[#0B1118]">
      <section className="py-16 lg:py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "Support & Post-Deployment Care" },
            ]}
          />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
              <Headphones className="w-4 h-4" />
              <span>LIFECYCLE SUPPORT • TECHNICAL &amp; CUSTOMER OPERATIONS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              A Partner That Stays Accountable Long After Launch.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Many vendors hand over code and walk away. Vensai stays involved across pre-deployment, deployment and post-deployment—providing dedicated technical maintenance, system monitoring, and full-time chat and voice customer support teams.
            </p>
            <div className="pt-3 flex flex-wrap gap-4">
              <Link
                href="/contact?service=Support"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-all"
              >
                <span>Talk to Vensai About Support</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Lifecycle Phases */}
      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUPPORT_PHASES.map((p) => (
            <div
              key={p.phase}
              className="p-8 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800"
            >
              <span className="font-mono text-xs font-bold text-vensai-electric">
                {p.phase}
              </span>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                {p.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 Support Capabilities Grid */}
      <section className="py-20 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Complete Support &amp; Continuity Capabilities
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUPPORT_PILLARS.map((item, idx) => (
              <div
                key={item.title}
                className="p-7 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800"
              >
                <span className="font-mono text-xs font-bold text-vensai-electric">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white capitalize">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

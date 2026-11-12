import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";
import { BRAND_CONFIG } from "@/data/vensai-data";
import { buildPageMetadata } from "@/lib/seo";
import { buildServiceSchema, buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Enterprise Vendorship & Subcontracting Partner",
  description:
    "Partner with Vensai Labs (Vijetha Softwares Pvt. Ltd.) for corporate IT vendorship, white-label software delivery, dedicated offshore pods, payroll-compliant staffing, and BPO voice/chat operations.",
  path: "/vendorship",
  keywords: [
    "IT vendorship India",
    "corporate software subcontracting",
    "white label software delivery India",
    "BPO voice and chat outsourcing partner",
    "dedicated offshore delivery pods",
    "Vijetha Softwares Private Limited",
  ],
});

const ENGAGEMENT_TRACKS = [
  {
    title: "White-Label & Sub-Contract Delivery",
    description:
      "We execute scoped software modules, full-stack builds, ERP customizations, and QA cycles under your prime contract and governance.",
  },
  {
    title: "Dedicated Offshore Pods (T&M / Retainer)",
    description:
      "Pre-vetted full-time engineers, testers, and leads working directly inside your sprint cadence.",
  },
  {
    title: "BPO Voice & Non-Voice Operations",
    description:
      "Dedicated inbound/outbound voice desks, live chat & email ticketing, back-office processing, and payroll/finance operations with clear SLAs.",
  },
  {
    title: "Non-IT & Digital Execution",
    description:
      "In-house creative production, brand, digital marketing, and structured training/internship cohorts when enterprise programs need non-IT capacity.",
  },
];

const COMPLIANCE_ITEMS = [
  { label: "Legal Entity", value: BRAND_CONFIG.company.legalName },
  { label: "CIN", value: BRAND_CONFIG.company.cin },
  { label: "Registrar of Companies", value: BRAND_CONFIG.company.roc },
  { label: "Delivery Model", value: "Dedicated in-house pods and vendorship programs" },
  { label: "Payroll & Statutory", value: "In-house payroll, PF/ESIC & statutory compliance ready" },
  { label: "Security & Confidentiality", value: "Mutual NDA, role-based access & BGV-ready onboarding" },
];

export default function VendorshipPage() {
  const webPageSchema = buildWebPageSchema({
    title: "Enterprise Vendorship & Subcontracting Partner — Vensai Labs",
    description:
      "Corporate IT vendorship, white-label software delivery, dedicated pods, and BPO operations from Vensai Labs.",
    path: "/vendorship",
  });

  const serviceSchema = buildServiceSchema({
    name: "Enterprise IT Vendorship & BPO Subcontracting",
    description:
      "White-label software engineering, dedicated offshore pods, payroll-compliant staffing, and BPO voice/chat operations.",
    path: "/vendorship",
    category: "Enterprise IT Vendorship & Subcontracting",
    capabilities: [
      "White-label software delivery",
      "Dedicated offshore pods",
      "BPO voice and chat operations",
      "Non-IT and digital execution",
    ],
  });

  return (
    <div className="bg-white dark:bg-[#0B1118]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, serviceSchema]),
        }}
      />

      <section className="relative bg-[#0B1118] text-white border-b border-slate-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Vendorship" },
            ]}
          />
          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-vensai-royal/20 border border-vensai-electric/30 text-vensai-electric text-[11px] font-bold uppercase tracking-[0.2em]">
              <Building2 className="w-3.5 h-3.5" />
              <span>Enterprise &amp; Tier-1 Vendorship</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
              Accountable Delivery Partner for Prime Contractors &amp; Corporates.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {BRAND_CONFIG.legalLine} partners with enterprise system integrators, consulting firms, and mid-to-large corporates to deliver IT builds, non-IT projects, and voice &amp; chat BPO operations from one in-house Indian team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?model=Dedicated%20Team"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm transition-all"
              >
                <span>Start Vendor Onboarding</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/kpo-bpo"
                className="inline-flex items-center px-6 py-3.5 text-sm font-semibold border border-slate-700 hover:border-white text-slate-200 hover:text-white rounded-sm transition-colors"
              >
                Explore BPO &amp; KPO
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-vensai-electric">
              HOW WE PARTNER
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
              Four Ways Enterprise Teams Use Vensai Labs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGAGEMENT_TRACKS.map((track, idx) => (
              <div
                key={track.title}
                className="p-7 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800"
              >
                <span className="font-mono text-xs font-bold text-vensai-electric">
                  TRACK {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {track.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F9FC] dark:bg-[#0E1520] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-electric">
                <ShieldCheck className="w-4 h-4" />
                <span>Procurement &amp; Compliance</span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Built to Pass Corporate Vendor Due Diligence
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you are onboarding us through SAP Ariba, Coupa, or direct MSA, our corporate documentation, statutory payroll compliance, and NDA-backed delivery workflows are ready for review.
              </p>
              <div className="pt-2 space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0" />
                  <span>Full-time in-house staff (not a freelance marketplace)</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0" />
                  <span>Single accountable delivery lead per workstream</span>
                </p>
                <p className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-vensai-electric shrink-0" />
                  <span>Fast ramp-up with dedicated pods</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPLIANCE_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-slate-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

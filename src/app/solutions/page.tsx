import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ShoppingBag, Compass, Headphones, Building2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";
import { ENGAGEMENT_MODELS } from "@/data/vensai-data";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Enterprise Business Solutions & Engagement Models | Vensai Labs",
  description:
    "Explore Vensai Labs cross-disciplinary business solutions: Digital Commerce Ecosystems, Technical Consulting & R&D, Enterprise Systems (SAP BTP / BI), and Post-Deployment Support across 6 engagement models.",
  path: "/solutions",
  keywords: [
    "enterprise business solutions",
    "digital commerce ecosystems",
    "technical consulting and R&D",
    "post-deployment managed support",
    "SAP BTP and Power BI solutions",
    "dedicated engineering teams",
  ],
});

const FLAGSHIP_SOLUTIONS = [
  {
    badge: "SOLUTION 01 • DIGITAL COMMERCE",
    title: "Complete E-Commerce Ecosystems",
    description:
      "End-to-end digital commerce combining store engineering (Shopify, WooCommerce, BigCommerce, Odoo, Custom Commerce), payment/shipping/ERP/CRM integrations, studio product photography and post-launch order support.",
    cta: "Build Your Commerce Ecosystem",
    href: "/solutions/ecommerce",
    icon: ShoppingBag,
    highlights: ["Shopify, WooCommerce, BigCommerce, Odoo", "ERP, CRM, Inventory & Shipping Sync", "In-House Product Photography & Video", "Post-Launch Store & Order Support"],
  },
  {
    badge: "SOLUTION 02 • RESEARCH & FEASIBILITY",
    title: "Technical Consulting & R&D",
    description:
      "Independent technical feasibility studies, architecture reviews, codebase/cloud/security audits and digital transformation roadmaps before you commit major capital.",
    cta: "Request a Technical Assessment",
    href: "/solutions/consulting",
    icon: Compass,
    highlights: ["Project & Technical Feasibility", "Architecture, Code & Cloud Audits", "Security & Scalability Reviews", "Digital Transformation Roadmaps"],
  },
  {
    badge: "SOLUTION 03 • LIFECYCLE CONTINUITY",
    title: "Customer, Technical & Post-Deployment Support",
    description:
      "A partner that stays accountable after launch—delivering pre-deployment readiness, deployment management, L1–L3 technical support, omnichannel chat/voice customer service and continuous enhancements.",
    cta: "Explore Support Operations",
    href: "/solutions/support",
    icon: Headphones,
    highlights: ["Pre-Deployment, Deployment & Post-Deployment", "Omnichannel Chat & Voice Support", "Technical Helpdesk & Escalation Management", "Proactive Monitoring & Enhancements"],
  },
  {
    badge: "SOLUTION 04 • ENTERPRISE SYSTEMS",
    title: "Enterprise Technology, SAP BTP & Business Intelligence",
    description:
      "Connecting core ERP backbones with custom SAP BTP extensions, automated cross-department middleware and executive Power BI / Tableau decision dashboards.",
    cta: "Explore Enterprise Technology",
    href: "/services/enterprise",
    icon: Building2,
    highlights: ["SAP BTP Extensions & Integrations", "Power BI & Tableau Executive Analytics", "Enterprise Data Warehousing", "Cross-System Workflow Automation"],
  },
];

export default function SolutionsPage() {
  const pageSchema = buildWebPageSchema({
    title: "Enterprise Business Solutions & Engagement Models | Vensai Labs",
    description:
      "Explore Vensai Labs cross-disciplinary business solutions: Digital Commerce Ecosystems, Technical Consulting & R&D, Enterprise Systems (SAP BTP / BI), and Post-Deployment Support.",
    path: "/solutions",
    type: "CollectionPage",
  });

  return (
    <div className="bg-white dark:bg-[#0B1118]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="py-16 lg:py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Solutions" }]} />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric mb-3">
              <span className="w-2 h-2 bg-vensai-electric inline-block" />
              <span>INTEGRATED BUSINESS SOLUTIONS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              One Business Partner. Multiple Capabilities. End-to-End Delivery.
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Real business problems rarely fit neatly inside a single discipline. Vensai assembles cross-functional teams—combining software engineering, enterprise integration, creative production, consulting and operational support—managed under a single accountable delivery structure.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Solutions Grid */}
      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FLAGSHIP_SOLUTIONS.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.title}
                className="flex flex-col justify-between p-8 sm:p-10 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-vensai-royal dark:text-vensai-electric">
                      {sol.badge}
                    </span>
                    <Icon className="w-5 h-5 text-vensai-electric" />
                  </div>
                  <h2 className="mt-5 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
                    {sol.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {sol.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {sol.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-vensai-electric" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800">
                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm transition-colors"
                  >
                    <span>{sol.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement Models Reference */}
      <section className="py-20 bg-[#F7F9FC] dark:bg-[#080D14]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Six Flexible Engagement Models
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Every Vensai solution can be delivered through the commercial and operational model that best fits your internal structure.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((m) => (
              <div
                key={m.id}
                className="p-6 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800"
              >
                <span className="font-mono text-xs font-bold text-vensai-electric">
                  MODEL {m.number}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {m.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-vensai-royal dark:text-vensai-electric">
                  {m.summary}
                </p>
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

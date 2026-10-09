import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Compass, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";
import { buildPageMetadata } from "@/lib/seo";
import { buildServiceSchema, buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Technical Consulting & R&D — Feasibility Studies, Code Audits & Architecture",
  description:
    "Vensai Labs is your technology research and feasibility partner: Project feasibility, Technical feasibility, Architecture review, Code/Cloud/Security/Performance audits and Digital transformation roadmaps.",
  path: "/solutions/consulting",
  keywords: [
    "technical feasibility consulting",
    "software architecture review",
    "source code audit services",
    "cloud infrastructure audit",
    "security and scalability assessment",
    "digital transformation roadmap",
  ],
});

const CONSULTING_SERVICES = [
  {
    title: "Project Feasibility",
    description:
      "Evaluating commercial, operational and timeline viability for new software products, platforms or business automation initiatives before capital allocation.",
  },
  {
    title: "Technical Feasibility",
    description:
      "Deep engineering validation of complex system requirements, third-party API constraints, hardware/desktop dependencies and proof-of-concept prototypes.",
  },
  {
    title: "Technology Research",
    description:
      "Structured R&D into emerging frameworks, AI/ML models, enterprise platforms and build-versus-buy trade-offs tailored to your business context.",
  },
  {
    title: "Architecture Review",
    description:
      "Evaluating current or proposed system architectures for modularity, fault tolerance, data integrity, security boundaries and long-term maintainability.",
  },
  {
    title: "Technical Audits",
    description:
      "End-to-end diagnostic evaluations of underperforming or stalled software projects to give leadership an objective picture of system health.",
  },
  {
    title: "Code Audits",
    description:
      "Line-by-line and automated static/dynamic analysis of source code quality, technical debt, test coverage, maintainability and dependency risks.",
  },
  {
    title: "Security Reviews",
    description:
      "Assessing authentication flows, API exposure, data encryption, OWASP vulnerabilities and role-based access governance across applications.",
  },
  {
    title: "Cloud Audits",
    description:
      "Reviewing AWS, Azure and Google Cloud architectures for cost optimization, IAM least-privilege compliance, backup resilience and high availability.",
  },
  {
    title: "Performance Audits",
    description:
      "Diagnosing database query bottlenecks, API latency, memory leaks and frontend rendering issues under real-world and peak-load conditions.",
  },
  {
    title: "Scalability Assessment",
    description:
      "Stress-testing and modeling how your application, database and infrastructure will behave as transaction volume and concurrent users grow 10x.",
  },
  {
    title: "Digital Transformation",
    description:
      "Mapping how legacy manual workflows, spreadsheets and siloed ERPs can be modernized systematically without disrupting daily business operations.",
  },
  {
    title: "Technology Roadmap",
    description:
      "Delivering a phased, prioritized execution plan with clear architecture blueprints, team requirements, risk registers and milestone budgets.",
  },
];

export default function ConsultingPage() {
  const webPageSchema = buildWebPageSchema({
    title:
      "Technical Consulting & R&D — Feasibility Studies, Code Audits & Architecture | Vensai Labs",
    description:
      "Technology research, feasibility studies, architecture reviews, and code/cloud/security audits by Vensai Labs.",
    path: "/solutions/consulting",
  });
  const serviceSchema = buildServiceSchema({
    name: "Technical Consulting, Audits & Feasibility R&D",
    description:
      "Independent technical feasibility studies, architecture reviews, code/cloud/security/performance audits and digital transformation roadmaps.",
    path: "/solutions/consulting",
    category: "Consulting & Operations",
    capabilities: CONSULTING_SERVICES.map((s) => s.title),
  });

  return (
    <div className="bg-white dark:bg-[#0B1118]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="py-16 lg:py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "Consulting & R&D" },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
                <Compass className="w-4 h-4" />
                <span>TECHNICAL CONSULTING &amp; R&amp;D PRACTICE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Clarity, Feasibility &amp; Architecture Before You Commit to Build.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                As a technology research and feasibility partner, Vensai helps business leaders, founders and enterprise IT teams evaluate technical viability, audit existing systems, uncover hidden risks and design practical roadmaps.
              </p>
              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  href="/contact?service=Consulting%20%2F%20R%26D"
                  className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-all"
                >
                  <span>Request a Technical Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 p-7 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-enterprise space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-vensai-electric">
                Why Start With Consulting?
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                  <span>Prevent costly architecture mistakes before development begins</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                  <span>Receive objective code, cloud, security and scalability diagnostics</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                  <span>Transition seamlessly into Vensai’s full-time build teams when ready</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Consulting & R&D Services */}
      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Consulting, Audit &amp; Feasibility Capabilities
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONSULTING_SERVICES.map((item, idx) => (
              <div
                key={item.title}
                className="p-7 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric transition-colors"
              >
                <span className="font-mono text-xs font-bold text-vensai-electric">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0B1118] text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Need an Independent Technical Audit or Feasibility Study?
          </h2>
          <p className="text-base text-slate-300">
            Speak directly with Vensai’s consulting and architecture team to scope an assessment or R&D engagement.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?service=Technical%20Audit"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm shadow-blue-glow transition-all"
            >
              <span>Request a Technical Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

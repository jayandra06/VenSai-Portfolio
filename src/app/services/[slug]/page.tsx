import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Users, Building2 } from "lucide-react";
import {
  Breadcrumbs,
  EnterpriseAccordion,
  SectionHeader,
} from "@/components/ui/EnterpriseUI";
import {
  SERVICE_CATEGORIES,
  SERVICE_SEO_ENRICHMENT,
  PROCESS_STEPS,
} from "@/data/vensai-data";
import { buildPageMetadata } from "@/lib/seo";
import {
  buildServiceSchema,
  buildWebPageSchema,
  buildFaqSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_CATEGORIES.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: { absolute: "Service Not Found | Vensai Labs" },
      robots: { index: false, follow: true },
    };
  }
  return buildPageMetadata({
    title: `${service.title} — End-to-End Business Solutions`,
    description: `${service.tagline} ${service.overview}`,
    path: `/services/${service.slug}`,
    keywords: [
      service.title,
      service.shortTitle,
      ...service.capabilities.slice(0, 6),
      ...service.technologies.slice(0, 5),
    ],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICE_CATEGORIES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const enrichment = SERVICE_SEO_ENRICHMENT[service.slug];
  const relatedServices = SERVICE_CATEGORIES.filter((s) =>
    enrichment?.relatedServiceSlugs.includes(s.slug)
  );

  const webPageSchema = buildWebPageSchema({
    title: `${service.title} — End-to-End Business Solutions | Vensai Labs`,
    description: `${service.tagline} ${service.overview}`,
    path: `/services/${service.slug}`,
  });

  const serviceSchema = buildServiceSchema({
    name: service.title,
    description: service.overview,
    path: `/services/${service.slug}`,
    category: service.categoryGroup,
    capabilities: service.capabilities,
    deliverables: service.deliverables,
  });

  const faqSchema = enrichment?.faqs
    ? buildFaqSchema(enrichment.faqs, `/services/${service.slug}`)
    : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-vensai-royal/10 dark:bg-vensai-electric/15 text-vensai-royal dark:text-vensai-electric text-xs font-mono font-bold uppercase tracking-widest">
                <span>CATEGORY {service.number}</span>
                <span>•</span>
                <span>{service.categoryGroup}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.overview}
              </p>

              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.shortTitle)}`}
                  className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-lg shadow-blue-glow transition-all"
                >
                  <span>Discuss Your {service.shortTitle} Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:border-vensai-electric text-slate-800 dark:text-slate-200 rounded-lg transition-colors"
                >
                  <span>All 13 Service Categories</span>
                </Link>
              </div>
            </div>

            {/* Right Deliverables Summary Box */}
            <div className="lg:col-span-4 p-6 sm:p-7 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-enterprise">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-vensai-electric mb-4">
                Standard Engagement Deliverables
              </p>
              <ul className="space-y-3">
                {service.deliverables.map((del) => (
                  <li
                    key={del}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-vensai-electric shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Engagement Models Available
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.engagementModels.map((em) => (
                    <span
                      key={em}
                      className="px-2.5 py-1 text-xs font-medium bg-[#F7F9FC] dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-md"
                    >
                      {em}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do & Key Capabilities */}
      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              What We Do
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our full-time specialists work under central Vensai project management to scope, architect, implement and support your requirement end-to-end.
            </p>
            <div className="space-y-3">
              {service.whatWeDo.map((item, i) => (
                <div
                  key={item}
                  className="p-4 rounded-lg bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex items-start gap-3"
                >
                  <span className="font-mono text-xs font-bold text-vensai-electric mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
                Key Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {service.capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="p-3.5 rounded-lg bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <span className="w-2 h-2 bg-vensai-electric shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {service.subCapabilities && (
              <div className="p-6 rounded-xl bg-vensai-royal/5 dark:bg-vensai-electric/10 border border-vensai-electric/40">
                <h3 className="text-sm font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric mb-4">
                  {service.subCapabilities.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {service.subCapabilities.items.map((sub) => (
                    <div
                      key={sub}
                      className="p-3 rounded-md bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Technologies &amp; Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-mono bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Service Is For & Ideal Client Profiles */}
      {enrichment && (
        <section className="py-20 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
                  <Users className="w-4 h-4" />
                  <span>WHO THIS SERVICE IS FOR</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white leading-tight">
                  Organizations That Partner With Our {service.shortTitle} Practice.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Whether you need a turnkey project delivered end-to-end, dedicated full-time specialists embedded into your workflow, or long-term managed operations, our team structures engagements around your business reality.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 gap-4">
                {enrichment.whoItIsFor.map((profile, idx) => (
                  <div
                    key={profile}
                    className="p-6 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex items-start gap-4"
                  >
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-sm bg-vensai-royal/10 dark:bg-vensai-electric/15 text-vensai-royal dark:text-vensai-electric shrink-0">
                      PROFILE 0{idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                      {profile}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Typical Use Cases */}
      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
            Typical Business Use Cases
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.useCases.map((uc, idx) => (
              <div
                key={uc.title}
                className="p-7 rounded-xl bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800"
              >
                <span className="font-mono text-xs font-bold text-vensai-electric">
                  USE CASE 0{idx + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {uc.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Stage End-to-End Delivery Process */}
      <section className="py-20 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="END-TO-END GOVERNANCE • DELIVERY WORKFLOW"
            title={`How Vensai Delivers ${service.shortTitle} Engagements.`}
            description="Every engagement is managed by Vensai’s project leadership across six structured stages—from initial discovery and technical feasibility through post-deployment continuity."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.slice(0, 6).map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800"
              >
                <span className="font-mono text-xs font-bold text-vensai-electric">
                  STAGE {step.number}
                </span>
                <h3 className="mt-1.5 text-base font-semibold text-slate-900 dark:text-white">
                  {step.phase}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific Frequently Asked Questions */}
      {enrichment && enrichment.faqs.length > 0 && (
        <section className="py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader
              eyebrow={`FAQ • ${service.shortTitle.toUpperCase()}`}
              title={`Frequently Asked Questions About ${service.title}.`}
              description="Answers to common technical, operational and engagement questions."
            />
            <div className="mt-10">
              <EnterpriseAccordion items={enrichment.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Related Services & Relevant Industries Cross-Linking Hub */}
      {enrichment && (
        <section className="py-20 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-vensai-electric">
                  CROSS-DISCIPLINARY EXECUTION
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
                  Related Vensai Practice Areas
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Our {service.shortTitle} specialists frequently collaborate with these adjacent Vensai teams under a single project manager:
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="p-5 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="font-mono text-[11px] font-bold text-vensai-electric">
                        CATEGORY {rel.number}
                      </span>
                      <h3 className="mt-1.5 text-base font-semibold text-slate-900 dark:text-white group-hover:text-vensai-royal dark:group-hover:text-vensai-electric transition-colors">
                        {rel.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3">
                        {rel.tagline}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric">
                      <span>Explore {rel.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-electric">
                  <Building2 className="w-4 h-4" />
                  <span>SECTOR COVERAGE</span>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                  Industries We Serve
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Key sectors utilizing Vensai’s {service.shortTitle} capabilities:
                </p>
              </div>
              <div className="p-6 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 space-y-3">
                {enrichment.relatedIndustries.map((ind) => (
                  <div
                    key={ind}
                    className="flex items-center justify-between py-2 border-b last:border-b-0 border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <span>{ind}</span>
                    <CheckCircle2 className="w-4 h-4 text-vensai-electric" />
                  </div>
                ))}
                <div className="pt-3">
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric hover:underline"
                  >
                    <span>View All 12 Industry Sectors</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0B1118] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-vensai-electric">
            END-TO-END DELIVERY • ONE ACCOUNTABLE PARTNER
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Ready to Move Your {service.shortTitle} Initiative Forward?
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Share your requirement with our team. We will evaluate technical feasibility, recommend the right engagement model, and assemble the exact professionals needed to deliver it.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href={`/contact?service=${encodeURIComponent(service.shortTitle)}`}
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold bg-vensai-royal hover:bg-vensai-electric text-white rounded-lg shadow-blue-glow"
            >
              <span>Talk to Vensai</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold border border-slate-700 hover:border-vensai-electric text-slate-200 rounded-lg"
            >
              <span>Explore Other Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

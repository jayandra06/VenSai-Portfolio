import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";
import { buildPageMetadata } from "@/lib/seo";
import { buildServiceSchema, buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title:
    "E-Commerce Solutions — Shopify, WooCommerce, BigCommerce, Odoo & Custom Commerce",
  description:
    "End-to-end e-commerce ecosystems by Vensai Labs: Strategy, Store Design, Development, ERP/CRM/Payment/Shipping Integrations, Creative Production, Product Photography and Post-Launch Support.",
  path: "/solutions/ecommerce",
  keywords: [
    "Shopify development agency",
    "WooCommerce development services",
    "BigCommerce enterprise solutions",
    "Odoo e-commerce ERP integration",
    "custom headless commerce",
    "e-commerce product photography and support",
  ],
});

const COMMERCE_PLATFORMS = [
  {
    name: "Shopify & Shopify Plus",
    focus: "High-converting D2C & B2B storefronts, custom Liquid/Hydrogen themes, checkout extensions and app integrations.",
  },
  {
    name: "WooCommerce",
    focus: "Flexible, deeply customizable WordPress commerce architectures with custom plugins and payment/ERP connectors.",
  },
  {
    name: "BigCommerce",
    focus: "Multi-storefront, B2B wholesale and catalog-intensive commerce engineered for scale and API extensibility.",
  },
  {
    name: "Odoo Commerce & ERP",
    focus: "Unified commerce natively connected to Odoo Inventory, POS, Warehouse Management, Manufacturing and Accounting.",
  },
  {
    name: "Custom & Headless Commerce",
    focus: "Bespoke multi-vendor marketplaces, custom B2B ordering portals and Next.js headless commerce engines.",
  },
];

const LIFECYCLE_CAPABILITIES = [
  { title: "Strategy", desc: "Commercial architecture, platform selection, catalog structuring and conversion funnel planning." },
  { title: "Store Design", desc: "Brand-aligned UI/UX, mobile-first product discovery and frictionless checkout experiences." },
  { title: "Development", desc: "Custom storefront engineering, theme customization, bespoke business rules and speed optimization." },
  { title: "Integrations", desc: "Two-way API middleware connecting your storefront with every operational back-office system." },
  { title: "Payments", desc: "Multi-currency gateways, split payouts, COD verification and subscription billing." },
  { title: "Inventory", desc: "Real-time multi-warehouse stock synchronization, SKU mapping and low-stock automation." },
  { title: "ERP", desc: "Seamless synchronization with SAP, Odoo, Tally, Zoho, Microsoft Dynamics and custom ERPs." },
  { title: "CRM", desc: "Customer profile unification, loyalty tiers, WhatsApp/email lifecycle triggers and retention flows." },
  { title: "Shipping", desc: "Automated carrier rate calculation, AWB generation, tracking pages and returns management." },
  { title: "Automation", desc: "Order-to-cash workflows, automated invoicing, tax reconciliation and supplier notifications." },
  { title: "Analytics", desc: "GA4 e-commerce attribution, cohort tracking, Power BI / Tableau merchandising dashboards." },
  { title: "Creative Production", desc: "Campaign visuals, brand shoots, promotional videos, A+ marketplace content and ad creatives." },
  { title: "Photography", desc: "Studio product photography, catalog shoots, lifestyle imagery and high-volume retouching." },
  { title: "Post-launch Support", desc: "Dedicated store maintenance, order support, customer chat/voice desks and seasonal scaling." },
];

export default function EcommerceSolutionsPage() {
  const webPageSchema = buildWebPageSchema({
    title:
      "E-Commerce Solutions — Shopify, WooCommerce, BigCommerce, Odoo & Custom Commerce | Vensai Labs",
    description:
      "End-to-end e-commerce ecosystems combining store engineering, ERP/CRM/payment/shipping integrations, studio product photography and post-launch order support.",
    path: "/solutions/ecommerce",
  });
  const serviceSchema = buildServiceSchema({
    name: "End-to-End E-Commerce Solutions & Digital Commerce Ecosystems",
    description:
      "Full-lifecycle e-commerce engineering across Shopify, WooCommerce, BigCommerce, Odoo and custom commerce with ERP/CRM sync, product photography and managed support.",
    path: "/solutions/ecommerce",
    category: "Enterprise & Commerce",
    capabilities: COMMERCE_PLATFORMS.map((p) => p.name),
    deliverables: LIFECYCLE_CAPABILITIES.map((c) => `${c.title}: ${c.desc}`),
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
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "E-Commerce Solutions" },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
                <ShoppingBag className="w-4 h-4" />
                <span>DEDICATED COMMERCE PRACTICE • END-TO-END ECOSYSTEMS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Complete E-Commerce Solutions: From Storefront &amp; ERP Sync to Studio Photography.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Vensai delivers complete digital commerce ecosystems. We don’t just launch templates—our full-time engineers, designers, integration architects, studio photographers and customer support executives build and operate every layer of your commerce business.
              </p>
              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  href="/contact?service=E-commerce"
                  className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-all"
                >
                  <span>Build Your Commerce Ecosystem</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/ecommerce"
                  className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:border-vensai-electric text-slate-800 dark:text-slate-200 rounded-sm"
                >
                  <span>View Technical Specs</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 p-7 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-enterprise space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-vensai-electric">
                Core Commerce Platforms
              </p>
              {["Shopify", "WooCommerce", "BigCommerce", "Odoo", "Custom Commerce"].map((plat) => (
                <div
                  key={plat}
                  className="p-3.5 rounded-sm bg-[#F7F9FC] dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {plat}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-vensai-electric" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Platforms We Architect &amp; Customize
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {COMMERCE_PLATFORMS.map((p, i) => (
              <div
                key={p.name}
                className="p-6 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-vensai-electric">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14-Pillar Commerce Capability Matrix */}
      <section className="py-20 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-vensai-electric">
              END-TO-END COMMERCE CAPABILITIES
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
              Every Layer of Digital Commerce Under One Roof.
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              From initial commercial strategy and store engineering to back-office ERP sync, studio product shoots and post-launch order support.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LIFECYCLE_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.title}
                className="p-6 rounded-sm bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800"
              >
                <span className="font-mono text-xs font-bold text-vensai-electric">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                  {cap.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0B1118] text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Ready to Launch or Scale Your Digital Commerce Operation?
          </h2>
          <p className="text-base text-slate-300">
            Talk to Vensai about store development, ERP/inventory integrations, product photography or managed e-commerce operations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?service=E-commerce"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm shadow-blue-glow transition-all"
            >
              <span>Build Your Commerce Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

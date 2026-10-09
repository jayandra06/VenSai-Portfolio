import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Policy & Preference Management | Vensai Labs",
  description:
    "Learn how Vensai Labs uses essential preference storage and privacy-safe analytics cookies across our website.",
  path: "/cookies",
});

export default function CookiesPage() {
  const pageSchema = buildWebPageSchema({
    title: "Cookie Policy & Preference Management | Vensai Labs",
    description:
      "Vensai Labs Cookie Policy and preference management.",
    path: "/cookies",
  });

  return (
    <div className="py-16 lg:py-24 bg-white dark:bg-[#0B1118]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <Breadcrumbs items={[{ label: "Cookie Policy" }]} />
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
          Cookie Policy
        </h1>
        <p className="text-sm text-slate-500">
          Last Updated: October 2026 • Vensai Labs
        </p>
        <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            Vensai Labs uses minimal, non-intrusive cookies and local storage items to remember your interface theme preference (Dark Mode / Light Mode) and cookie consent status, as well as optional aggregated analytics to improve site performance.
          </p>
        </div>
      </div>
    </div>
  );
}

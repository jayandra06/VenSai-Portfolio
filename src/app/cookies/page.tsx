import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Vensai Labs Cookie Policy and preference management.",
};

export default function CookiesPage() {
  return (
    <div className="py-16 lg:py-24 bg-white dark:bg-[#0B1118]">
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

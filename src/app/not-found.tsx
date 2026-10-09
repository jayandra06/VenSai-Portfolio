import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Layers, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Page Not Found (404) | Vensai Labs",
  },
  description:
    "The page you requested could not be found. Explore Vensai Labs services, flagship enterprise solutions, or contact our team directly.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#0B1118] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-slate-200 dark:border-slate-800 bg-[#F7F9FC] dark:bg-[#111827] text-xs font-mono uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
          <span>ERROR 404 • ROUTE NOT FOUND</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
          The page you are looking for is not available.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The URL may have been moved, updated, or mistyped. Use the recovery links below to explore Vensai Labs&apos; 13 service categories, flagship solutions, or connect with our team.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-colors"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-slate-900 dark:text-white bg-[#F7F9FC] dark:bg-[#111827] border border-slate-300 dark:border-slate-700 hover:border-vensai-electric rounded-sm transition-colors"
          >
            <Layers className="w-4 h-4 text-vensai-electric" />
            <span>Explore All 13 Services</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-slate-900 dark:text-white bg-[#F7F9FC] dark:bg-[#111827] border border-slate-300 dark:border-slate-700 hover:border-vensai-electric rounded-sm transition-colors"
          >
            <Mail className="w-4 h-4 text-vensai-electric" />
            <span>Talk to Vensai</span>
          </Link>
        </div>

        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <Link
            href="/solutions/ecommerce"
            className="p-5 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric transition-colors"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-vensai-electric">
              Flagship Hub 01
            </p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-white">
              E-Commerce Solutions
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Shopify, WooCommerce, BigCommerce, Odoo &amp; custom storefronts.
            </p>
          </Link>
          <Link
            href="/solutions/consulting"
            className="p-5 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric transition-colors"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-vensai-electric">
              Flagship Hub 02
            </p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-white">
              Consulting &amp; R&amp;D
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Feasibility studies, technical audits &amp; implementation roadmaps.
            </p>
          </Link>
          <Link
            href="/solutions/support"
            className="p-5 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric transition-colors"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-vensai-electric">
              Flagship Hub 03
            </p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-white">
              Post-Deployment Support
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Managed maintenance, SLA monitoring &amp; customer service operations.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

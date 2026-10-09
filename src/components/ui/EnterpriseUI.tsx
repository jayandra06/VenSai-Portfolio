"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, ChevronDown, X } from "lucide-react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col ${
        align === "center"
          ? "items-center text-center max-w-3xl mx-auto"
          : "lg:flex-row lg:items-end justify-between gap-6"
      }`}
    >
      <div className={align === "center" ? "" : "max-w-3xl"}>
        <div
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric mb-3`}
        >
          <span className="w-2 h-2 bg-vensai-electric inline-block" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://vensailabs.com";
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: item.label,
        ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
          <li>
            <Link
              href="/"
              className="hover:text-vensai-royal dark:hover:text-vensai-electric transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, idx) => (
            <li key={idx} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-vensai-royal dark:hover:text-vensai-electric transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-slate-900 dark:text-white font-semibold">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function EnterpriseAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} className="py-5">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 text-left"
            >
              <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-vensai-electric shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <p
              className={
                isOpen
                  ? "mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pr-8 block"
                  : "hidden"
              }
            >
              {item.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function EnterpriseModal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 rounded-sm shadow-enterprise-lg p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            {subtitle && (
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-vensai-electric">
                {subtitle}
              </p>
            )}
            <h3
              id="modal-title"
              className="text-xl font-semibold text-slate-900 dark:text-white mt-1"
            >
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-sm border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

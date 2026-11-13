import React from "react";
import { BRAND_CONFIG, CASE_STUDY_BLUEPRINTS } from "@/data/vensai-data";

const PROOF = [
  { label: "Legal entity", value: BRAND_CONFIG.company.shortLegalName },
  { label: "CIN", value: BRAND_CONFIG.company.cin },
  { label: "Delivery", value: "In-house payroll teams" },
  { label: "Presence", value: BRAND_CONFIG.offices.display },
  { label: "Published work", value: `${CASE_STUDY_BLUEPRINTS.length} case studies` },
];

export function ProofStripSection() {
  return (
    <section className="border-b border-slate-200/80 bg-vensai-mist/40 py-10 dark:border-slate-800 dark:bg-vensai-navy/40">
      <div className="mx-auto max-w-7xl px-6">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {PROOF.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.label}</dt>
              <dd className="mt-1 font-mono text-sm font-medium text-slate-900 dark:text-slate-100">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

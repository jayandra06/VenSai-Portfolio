"use client";

import { useMemo, useState } from "react";
import { CASE_STUDY_BLUEPRINTS, type CaseStudyTag } from "@/data/vensai-data";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { StaggerReveal } from "@/components/ui/EnterpriseUI";

const FILTERS: Array<"All" | CaseStudyTag> = ["All", "IT", "Non-IT", "BPO"];

export function WorkIndexClient() {
  const [filter, setFilter] = useState<"All" | CaseStudyTag>("All");
  const visible = useMemo(() => {
    if (filter === "All") return CASE_STUDY_BLUEPRINTS;
    return CASE_STUDY_BLUEPRINTS.filter((s) => s.tags.includes(filter));
  }, [filter]);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter case studies">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              filter === f ? "bg-vensai-royal text-white" : "border border-slate-300 dark:border-slate-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-slate-500">Nothing in this filter yet—try All.</p>
      ) : (
        <StaggerReveal key={filter} className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {visible.map((study) => (
            <CaseStudyCard key={study.id} study={study} layout="feature" />
          ))}
        </StaggerReveal>
      )}
    </>
  );
}

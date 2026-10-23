"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  Clapperboard,
  Cloud,
  Code2,
  Compass,
  GraduationCap,
  Headphones,
  Palette,
  Server,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
  ChevronRight,
} from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/EnterpriseUI";
import { SERVICE_CATEGORIES, ServiceCategory } from "@/data/vensai-data";

const STUDIO_META: Record<
  ServiceCategory["categoryGroup"],
  { verb: string; note: string; color: string }
> = {
  "Technology & Engineering": {
    verb: "BUILD",
    note: "Software, mobile, AI, cloud and security.",
    color: "from-blue-600 to-vensai-electric",
  },
  "Enterprise & Commerce": {
    verb: "CONNECT",
    note: "ERP, commerce and the pipes between them.",
    color: "from-violet-600 to-blue-500",
  },
  "Consulting & Operations": {
    verb: "RUN",
    note: "Advice, managed IT, KPO, BPO, talent and support.",
    color: "from-cyan-600 to-blue-600",
  },
  "Brand, Growth & Creative": {
    verb: "SHAPE",
    note: "Identity, demand and the pictures people remember.",
    color: "from-indigo-600 to-vensai-sky",
  },
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "software-development": Code2,
  "mobile-development": Smartphone,
  "ai-ml": Sparkles,
  "cloud-devops": Cloud,
  cybersecurity: Shield,
  enterprise: Building2,
  ecommerce: ShoppingBag,
  integrations: Workflow,
  consulting: Compass,
  support: Headphones,
  branding: Palette,
  marketing: TrendingUp,
  "creative-production": Clapperboard,
  "it-management": Server,
  "kpo-bpo": Briefcase,
  "internship-programs": GraduationCap,
};

const SERVICE_LINES: Record<string, string> = {
  "software-development": "Systems that behave like the business.",
  "mobile-development": "The product, in a pocket.",
  "ai-ml": "Models that answer from your own data.",
  "cloud-devops": "Infrastructure that ships itself.",
  cybersecurity: "Find the crack before someone else does.",
  enterprise: "SAP, BI and the numbers leadership trusts.",
  ecommerce: "A store that knows the warehouse.",
  integrations: "Every system, finally talking.",
  consulting: "Prove it is possible before you build it.",
  support: "Someone still answers after launch.",
  branding: "A face the market can recognize.",
  marketing: "Demand you can actually measure.",
  "creative-production": "Shoots, films and catalog stills.",
  "it-management": "Access, assets and uptime, quietly run.",
  "kpo-bpo": "The desk work that should leave your desk.",
  "internship-programs": "Learn by shipping, with a mentor in the room.",
};

// Returns the row index each tile belongs to (4 cols on lg, 2 on sm)
function useColumns() {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCols(4);
      else if (window.innerWidth >= 640) setCols(2);
      else setCols(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

export function WhatWeDoSection() {
  const [activeGroup, setActiveGroup] = useState<ServiceCategory["categoryGroup"] | "All">("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const cols = useColumns();

  const visible = SERVICE_CATEGORIES.filter(
    (cat) => activeGroup === "All" || cat.categoryGroup === activeGroup
  );

  const activeCategory = visible.find((c) => c.id === selectedId) ?? null;

  // Compute after which tile index to inject the detail panel
  const selectedIndex = activeCategory ? visible.findIndex((c) => c.id === activeCategory.id) : -1;
  const insertAfterRow = selectedIndex >= 0 ? Math.floor(selectedIndex / cols) : -1;
  // Which tile index is the last one in that row
  const insertAfterIndex = insertAfterRow >= 0 ? Math.min((insertAfterRow + 1) * cols - 1, visible.length - 1) : -1;

  const handleSelect = useCallback(
    (id: string) => {
      if (selectedId === id) {
        setSelectedId(null);
        return;
      }
      setSelectedId(id);
      // Scroll detail panel into view after animation
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 120);
    },
    [selectedId]
  );

  const handleGroupChange = (group: ServiceCategory["categoryGroup"] | "All") => {
    setActiveGroup(group);
    setSelectedId(null);
  };

  // Build interleaved list: tiles + inline detail panel
  const rows: React.ReactNode[] = [];
  visible.forEach((cat, i) => {
    const CatIcon = SERVICE_ICONS[cat.slug] || Sparkles;
    const isSelected = cat.id === selectedId;

    rows.push(
      <motion.button
        key={cat.id}
        type="button"
        aria-pressed={isSelected}
        onClick={() => handleSelect(cat.id)}
        layout="position"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.55,
          delay: prefersReducedMotion ? 0 : Math.min(i * 0.04, 0.22),
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={prefersReducedMotion ? {} : { y: -2 }}
        whileTap={prefersReducedMotion ? {} : { y: 0 }}
        className={`group relative overflow-hidden text-left rounded-2xl border p-4 transition-[border-color,background-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vensai-electric ${
          isSelected
            ? "bg-white dark:bg-[#0d1420] border-vensai-electric/60 shadow-[0_0_0_1px_rgba(0,95,255,0.15),0_4px_24px_rgba(0,95,255,0.08)]"
            : "bg-white/80 dark:bg-[#0B1118] border-slate-200 dark:border-slate-800 hover:border-vensai-electric/40 hover:shadow-[0_2px_16px_rgba(0,95,255,0.06)]"
        }`}
      >
        {/* Ghost number watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-1 -top-3 text-6xl font-semibold tracking-tighter text-slate-100 dark:text-white/[0.04] select-none"
        >
          {cat.number}
        </span>

        <div className="relative flex items-start justify-between gap-3">
          {/* Icon: CSS transition only, no Framer wiggle */}
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-xl transition-[background-color,color] duration-300 ${
              isSelected
                ? "bg-vensai-royal text-white"
                : "bg-[#F7F9FC] dark:bg-[#111827] text-vensai-royal dark:text-vensai-electric group-hover:bg-vensai-royal/8 dark:group-hover:bg-vensai-electric/10"
            }`}
          >
            <CatIcon className="w-4 h-4" />
          </span>
          <span className="font-mono text-[10px] font-bold text-vensai-electric">{cat.number}</span>
        </div>

        <p className="relative mt-3 text-sm font-semibold text-slate-900 dark:text-white leading-snug">
          {cat.shortTitle}
        </p>
        <p className="relative mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {SERVICE_LINES[cat.slug]}
        </p>

        {/* Selected: thin bottom gradient line — pure CSS transition, no framer */}
        <span
          aria-hidden="true"
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-vensai-royal via-vensai-electric to-vensai-sky rounded-b-2xl transition-all duration-500 ${
            isSelected ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transformOrigin: "left" }}
        />

        {/* Chevron — smooth CSS rotate */}
        <span
          className={`absolute top-3 right-3 text-vensai-electric transition-[opacity,transform] duration-300 ${
            isSelected ? "opacity-100 rotate-90" : "opacity-0 rotate-0 group-hover:opacity-60"
          }`}
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </motion.button>
    );

    // After the last tile in the selected row, inject the inline detail panel
    if (i === insertAfterIndex && activeCategory) {
      rows.push(
        <InlineDetailPanel
          key={`detail-${activeCategory.id}`}
          category={activeCategory}
          onClose={() => setSelectedId(null)}
          ref={detailRef}
          prefersReducedMotion={!!prefersReducedMotion}
        />
      );
    }
  });

  return (
    <section
      id="what-we-do"
      className="relative py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800/90 overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-vensai-electric/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-vensai-royal/8 blur-[100px]"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow={`THE PRACTICE FLOOR • ${SERVICE_CATEGORIES.length} DISCIPLINES`}
            title="One studio. Every kind of work a serious company asks for."
            description="Software, cybersecurity, managed IT, KPO and BPO, internships, commerce, brand and support live on the same floor. Pick a studio, open a brief, and see the work the way we actually staff it."
            action={
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-white dark:bg-[#111827] hover:border-vensai-electric border border-slate-200 dark:border-slate-800 rounded-lg transition-all"
              >
                <span>Open the full floor</span>
                <ArrowRight className="w-3.5 h-3.5 text-vensai-electric" />
              </Link>
            }
          />
        </Reveal>

        {/* Group Filter Tabs */}
        <Reveal delay={0.06}>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-3">
            <GroupTabButton
              label="All"
              verb="All"
              subtitle={`${SERVICE_CATEGORIES.length} practices`}
              active={activeGroup === "All"}
              onClick={() => handleGroupChange("All")}
            />
            {(Object.keys(STUDIO_META) as ServiceCategory["categoryGroup"][]).map((group) => {
              const meta = STUDIO_META[group];
              const count = SERVICE_CATEGORIES.filter((c) => c.categoryGroup === group).length;
              return (
                <GroupTabButton
                  key={group}
                  label={group.split(" & ")[0]}
                  verb={meta.verb}
                  subtitle={`${count} practices`}
                  active={activeGroup === group}
                  onClick={() => handleGroupChange(group)}
                />
              );
            })}
          </div>
        </Reveal>

        {/* Tile grid with inline expansion */}
        <div className="mt-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            layout
          >
            <AnimatePresence mode="sync">
              {rows}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Hint text when nothing selected */}
        <AnimatePresence>
          {!selectedId && (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-5 text-center text-xs text-slate-400 dark:text-slate-500"
            >
              Click any tile to explore that practice ↑
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Group Tab Button ──────────────────────────────────────────────────────── */
function GroupTabButton({
  label,
  verb,
  subtitle,
  active,
  onClick,
}: {
  label: string;
  verb: string;
  subtitle: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18 }}
      className={`text-left rounded-2xl border px-4 py-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vensai-electric ${
        active
          ? "bg-gradient-to-br from-vensai-royal to-vensai-electric text-white border-transparent shadow-blue-glow-sm"
          : "bg-white dark:bg-[#0B1118] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-vensai-electric"
      }`}
    >
      <p className={`text-[10px] font-bold tracking-[0.22em] uppercase ${active ? "text-white/80" : "text-vensai-electric"}`}>
        {verb}
      </p>
      <p className="mt-1 text-sm font-semibold leading-snug">{label}</p>
      <p className={`mt-1 text-[11px] leading-snug ${active ? "text-white/80" : "text-slate-500 dark:text-slate-400"}`}>
        {subtitle}
      </p>
    </motion.button>
  );
}

/* ─── Inline Detail Panel ───────────────────────────────────────────────────── */
const InlineDetailPanel = React.forwardRef<
  HTMLDivElement,
  {
    category: ServiceCategory;
    onClose: () => void;
    prefersReducedMotion: boolean;
  }
>(({ category, onClose, prefersReducedMotion }, ref) => {
  const Icon = SERVICE_ICONS[category.slug] || Sparkles;
  const meta = STUDIO_META[category.categoryGroup];

  return (
    <motion.div
      ref={ref}
      // Span all 4 columns on lg, 2 on sm, 1 on mobile
      className="col-span-1 sm:col-span-2 lg:col-span-4"
      key={`panel-${category.id}`}
      initial={prefersReducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0, scaleY: 0.95 }}
      animate={{ opacity: 1, height: "auto", scaleY: 1 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0, scaleY: 0.95 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "top" }}
      layout
    >
      <div className="relative overflow-hidden rounded-3xl border border-vensai-electric/30 bg-white dark:bg-[#0B1118] shadow-enterprise">
        {/* Left accent bar */}
        <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-vensai-sky via-vensai-electric to-vensai-royal" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close detail panel"
          className="absolute top-4 right-4 z-10 p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-vensai-electric transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Title + description + CTAs */}
          <motion.div
            className="lg:col-span-5 p-8 sm:p-10 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-4 text-8xl font-semibold tracking-tighter text-slate-100 dark:text-white/[0.04] select-none"
            >
              {category.number}
            </span>
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-vensai-electric">
                <Icon className="w-3.5 h-3.5" />
                <span>
                  {meta.verb} • {category.categoryGroup}
                </span>
              </div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {category.tagline}
              </p>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {category.overview}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/services/${category.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-lg transition-colors"
                >
                  <span>Read the full brief</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/contact?service=${encodeURIComponent(category.shortTitle)}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-slate-300 dark:border-slate-700 hover:border-vensai-electric text-slate-800 dark:text-slate-200 rounded-lg transition-colors"
                >
                  Start this work
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Capabilities + Use cases */}
          <motion.div
            className="lg:col-span-7 p-8 sm:p-10 bg-[#F7F9FC]/80 dark:bg-[#111827]/50 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              What sits inside this practice
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.capabilities.map((cap, ci) => (
                <motion.span
                  key={cap}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.18 + ci * 0.025, ease: "easeOut" }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                >
                  {cap}
                </motion.span>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.useCases.map((useCase, ui) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.22 + ui * 0.04, ease: "easeOut" }}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#0B1118] p-4 hover:border-vensai-electric/50 transition-colors"
                >
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{useCase.title}</p>
                  <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});

InlineDetailPanel.displayName = "InlineDetailPanel";

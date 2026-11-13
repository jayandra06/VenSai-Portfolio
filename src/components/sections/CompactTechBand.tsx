import Link from "next/link";
import { Reveal } from "@/components/ui/EnterpriseUI";
import { TECH_ECOSYSTEM } from "@/data/vensai-data";

const HIGHLIGHTS = TECH_ECOSYSTEM.slice(0, 5);

export function CompactTechBand() {
  return (
    <section className="border-b border-slate-200 py-16 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow-quiet">Stack & industries</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Tools we actually ship with
              </h2>
            </div>
            <Link href="/industries" className="text-sm font-semibold text-vensai-royal dark:text-vensai-electric">
              Industries we serve →
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {HIGHLIGHTS.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-[#0d1420]"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{group.category}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {group.technologies
                  .slice(0, 3)
                  .map((t) => t.name)
                  .join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

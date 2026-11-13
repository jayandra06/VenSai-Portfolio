import Image from "next/image";
import { BRAND_CONFIG } from "@/data/vensai-data";
import { Reveal } from "@/components/ui/EnterpriseUI";

export function OfficePresenceSection() {
  return (
    <section className="border-b border-slate-200 bg-vensai-paperWarm py-16 dark:border-slate-800 dark:bg-vensai-navy/30 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow-quiet">Where we deliver from</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">
            {BRAND_CONFIG.offices.display}
          </h2>
          <p className="prose-measure mt-3 text-slate-600 dark:text-slate-300">
            Engineering, vendorship pods, and BPO processes are run from our Visakhapatnam head office and Hyderabad business unit—city names only on the site, not street addresses.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <Image
              src="/visuals/placeholder-office-visakhapatnam.svg"
              alt="Placeholder — Visakhapatnam Head Office"
              width={900}
              height={600}
              className="h-auto w-full"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
              {BRAND_CONFIG.offices.registeredLabel}
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <Image
              src="/visuals/placeholder-office-hyderabad.svg"
              alt="Placeholder — Hyderabad Business Unit"
              width={900}
              height={600}
              className="h-auto w-full"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
              {BRAND_CONFIG.offices.businessUnitLabel}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Headphones, MessageSquare, Phone } from "lucide-react";
import { BRAND_CONFIG, SERVICE_CATEGORIES } from "@/data/vensai-data";
import { BpoOperationsVisual } from "@/components/visuals/EditorialVisuals";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

const service = SERVICE_CATEGORIES.find((s) => s.slug === "kpo-bpo")!;

export const metadata: Metadata = buildPageMetadata({
  title: "BPO — voice, chat, and back office",
  description:
    "Inbound and outbound voice, live chat, tickets, and back-office desks including payroll and finance operations—staffed in-house, scoped per process.",
  path: "/services/kpo-bpo",
});

const VOICE = [
  "Inbound customer care and order status",
  "Outbound sales, collections, and verification calls",
  "Escalation paths wired to your CRM or helpdesk",
];

const NON_VOICE = [
  "Live chat and email tickets",
  "CRM updates, data entry, and document handling",
  "Payroll and finance operations support",
];

export default function KpoBpoPage() {
  const schema = buildWebPageSchema({
    title: "BPO voice, chat, and back office — Vensai Labs",
    description: service.overview,
    path: "/services/kpo-bpo",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="bg-vensai-paper dark:bg-vensai-obsidian">
        <section className="border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="eyebrow-quiet">Operations</p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Voice, chat, and desks that run to your SLA
              </h1>
              <p className="prose-measure mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Inbound and outbound voice, live chat and email, and back-office work—including payroll and finance support. Shifts and languages are scoped per process with dedicated in-house teams.
              </p>
              <Link
                href="/contact?service=KPO%20%26%20BPO"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-vensai-royal px-6 py-3.5 text-sm font-semibold text-white hover:bg-vensai-electric"
              >
                Scope a process <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <BpoOperationsVisual className="w-full rounded-2xl border border-slate-200 dark:border-slate-800" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-[#0d1420]">
              <div className="flex items-center gap-3 text-vensai-teal">
                <Phone className="h-5 w-5" />
                <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Voice</h2>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {VOICE.map((item) => (
                  <li key={item} className="border-l-2 border-vensai-teal/40 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-[#0d1420]">
              <div className="flex items-center gap-3 text-vensai-copper">
                <MessageSquare className="h-5 w-5" />
                <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Chat &amp; back office</h2>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {NON_VOICE.map((item) => (
                  <li key={item} className="border-l-2 border-vensai-copper/40 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-vensai-mist/40 p-8 dark:border-slate-800 dark:bg-vensai-navy/40">
            <div className="flex items-start gap-4">
              <Headphones className="mt-1 h-6 w-6 text-vensai-royal" />
              <div>
                <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">How a process ramps</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  We document the script or ticket taxonomy, run a short pilot with recorded QA, then expand shifts once you sign off on accuracy and handle time. Languages we staff routinely: English, Hindi, and Telugu—others only when you confirm demand.
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  Also see{" "}
                  <Link href="/vendorship" className="font-semibold text-vensai-royal dark:text-vensai-electric">
                    enterprise vendorship
                  </Link>{" "}
                  when you need BPO capacity inside a larger subcontract.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

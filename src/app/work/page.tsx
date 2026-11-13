import type { Metadata } from "next";
import { WorkIndexClient } from "./WorkIndexClient";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Work — case studies",
  description:
    "Globiance, Suta, and Euroasiann Group—software, commerce, and ERP delivery with metrics and live references.",
  path: "/work",
});

export default function WorkPage() {
  const schema = buildWebPageSchema({
    title: "Work — Vensai Labs",
    description: "Case studies from digital finance, D2C retail, and enterprise ERP delivery.",
    path: "/work",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="border-b border-slate-200 bg-vensai-paper py-16 dark:border-slate-800 dark:bg-vensai-obsidian lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow-quiet">Case studies</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Proof from live programs
          </h1>
          <p className="prose-measure mt-4 text-lg text-slate-600 dark:text-slate-300">
            Each story links to the client site where they publish it. Filter by the kind of work—IT build, non-IT program, or operations desk.
          </p>
          <WorkIndexClient />
        </div>
      </div>
    </>
  );
}

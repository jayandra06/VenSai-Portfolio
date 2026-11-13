import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import {
  CASE_STUDY_BLUEPRINTS,
  getCaseStudyBySlug,
} from "@/data/vensai-data";
import { CaseStudyScene } from "@/components/visuals/EditorialVisuals";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return CASE_STUDY_BLUEPRINTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: { absolute: "Work | Vensai Labs" }, robots: { index: false } };
  return buildPageMetadata({
    title: `${study.clientName} — ${study.title}`,
    description: study.summary,
    path: `/work/${slug}`,
  });
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const schema = buildWebPageSchema({
    title: `${study.clientName} case study`,
    description: study.summary,
    path: `/work/${slug}`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article>
        <header className="border-b border-slate-200 dark:border-slate-800">
          <CaseStudyScene theme={study.theme} className="h-56 w-full sm:h-72" />
          <div className="mx-auto max-w-7xl px-6 py-12">
            <p className="font-mono text-sm text-vensai-copper">Case study {study.code}</p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-slate-900 dark:text-white">{study.clientName}</h1>
            <p className="mt-3 text-xl text-slate-600 dark:text-slate-300">{study.title}</p>
            <p className="prose-measure mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{study.summary}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              {study.websiteUrl && (
                <a
                  href={study.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-vensai-royal dark:text-vensai-electric"
                >
                  Live site <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {study.secondaryUrl && (
                <a
                  href={study.secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-slate-500"
                >
                  Corporate site <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            {(
              [
                ["Challenge", study.challenge],
                ["Approach", study.approach],
                ["What we built", study.solution],
                ["Outcome", study.outcome],
              ] as const
            ).map(([label, body]) => (
              <section key={label}>
                <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{label}</h2>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{body}</p>
              </section>
            ))}
          </div>
          <aside className="space-y-8 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#0d1420]">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Metrics</h2>
              <dl className="mt-4 space-y-4">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-xs text-slate-500">{m.label}</dt>
                    <dd className="font-mono text-lg font-semibold text-vensai-royal dark:text-vensai-electric">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-vensai-mist/30 p-6 dark:border-slate-800 dark:bg-vensai-navy/50">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Flow</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {study.architectureNotes.map((note) => (
                  <li key={note} className="border-l-2 border-vensai-copper pl-3">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {study.technologies.map((t) => (
                  <span key={t} className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs dark:bg-slate-900">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="border-t border-slate-200 bg-vensai-paperWarm py-10 dark:border-slate-800 dark:bg-vensai-navy">
          <div className="mx-auto max-w-7xl px-6">
            <Link href="/work" className="text-sm font-semibold text-vensai-royal dark:text-vensai-electric">
              ← All case studies
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

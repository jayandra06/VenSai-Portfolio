import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/EnterpriseUI";
import { HOMEPAGE_FAQS } from "@/data/vensai-data";

const FAQ_SLICE = HOMEPAGE_FAQS.slice(0, 3);

export function HomeClosingSection() {
  return (
    <section className="surface-ink py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white">Need a feasibility read before you commit budget?</h2>
            <p className="mt-4 max-w-lg text-slate-300">
              Send a short brief. We will tell you if the work fits our teams, what we would staff, and what a sensible first milestone looks like—without a slide deck.
            </p>
            <Link
              href="/solutions/consulting"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-vensai-navy"
            >
              Book a consulting call <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-4">
              {FAQ_SLICE.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 open:bg-white/10"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-white">{item.question}</summary>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

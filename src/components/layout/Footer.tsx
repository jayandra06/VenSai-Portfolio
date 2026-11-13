import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { BRAND_CONFIG } from "@/data/vensai-data";
import { BrandSocialLinks } from "@/components/ui/BrandSocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-full overflow-hidden border-t border-slate-800 bg-[#101820] text-slate-300">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-7 md:flex-row md:items-center">
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-white">{BRAND_CONFIG.legalLine}</span>
            <span className="mx-2 text-slate-600">·</span>
            {BRAND_CONFIG.tagline}
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-vensai-royal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-vensai-electric"
            >
              <span>Talk to Vensai</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-600 px-4 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-white"
            >
              Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-block">
              <Link href="/" aria-label="Vensai Labs Home" className="inline-flex items-center gap-3.5">
                <img
                  src="/brand/vensai-symbol.png"
                  alt="Vensai Labs Symbol"
                  width={110}
                  height={90}
                  decoding="async"
                  loading="lazy"
                  className="h-11 w-auto object-contain"
                />
                <img
                  src="/brand/vensai-wordmark-dark.png"
                  alt="VENSAI LABS"
                  width={260}
                  height={72}
                  decoding="async"
                  loading="lazy"
                  className="h-9 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-sm font-medium text-white">{BRAND_CONFIG.tagline}</p>

            <p className="pr-4 text-sm leading-relaxed text-slate-400">
              <span className="font-semibold text-white">VenSai</span> — {BRAND_CONFIG.nameMeaning}.{" "}
              {BRAND_CONFIG.mission} Engineering, managed IT, KPO and BPO, internships, commerce, brand and support are delivered by one company.
            </p>

            <div className="space-y-3 text-sm text-slate-400">
              <p className="text-xs text-slate-500">
                {BRAND_CONFIG.company.legalName}
                <span className="mx-1.5">·</span>
                CIN {BRAND_CONFIG.company.cin}
                <span className="mx-1.5">·</span>
                {BRAND_CONFIG.company.roc}
              </p>
              <p className="text-[11px] text-slate-500">
                In collaboration with {BRAND_CONFIG.company.collaboration}
              </p>
            </div>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-vensai-electric shrink-0" />
                <a
                  href={`mailto:${BRAND_CONFIG.contactPlaceholders.email}`}
                  className="hover:text-vensai-electric transition-colors"
                >
                  {BRAND_CONFIG.contactPlaceholders.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-vensai-electric shrink-0" />
                <a
                  href="tel:+918309057182"
                  className="hover:text-vensai-electric transition-colors"
                >
                  {BRAND_CONFIG.contactPlaceholders.phone}
                </a>
              </div>
              <BrandSocialLinks
                className="pt-1"
                whatsappDigits={BRAND_CONFIG.contactPlaceholders.whatsapp.replace(/[^0-9]/g, "")}
              />
            </div>
          </div>

          {/* Navigation Column: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/work" className="text-slate-400 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Vensai
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-slate-400 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/vendorship" className="text-slate-400 hover:text-white transition-colors">
                  Enterprise Vendorship
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-400 hover:text-white transition-colors">
                  Insights &amp; Research
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Services
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              <li>
                <Link
                  href="/services/software-development"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Software &amp; Product Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-development"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="/services/ai-ml" className="text-slate-400 hover:text-white transition-colors">
                  AI &amp; Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-devops"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Cloud, DevOps &amp; Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/enterprise"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Enterprise Technology (SAP / BI)
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/ecommerce"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/integrations"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Integrations &amp; Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/consulting"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Consulting &amp; R&amp;D
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Brand, Digital &amp; Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/creative-production"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Creative Production
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/support"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Customer &amp; Operational Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-management"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  IT Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/kpo-bpo"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  KPO &amp; BPO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/internship-programs"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Internships &amp; Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions, Legal & Social */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Flagship Solutions
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/solutions/ecommerce"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Commerce Ecosystems Hub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/consulting"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Feasibility &amp; Technical Audits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/support"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Post-Deployment Managed Care
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Connect
              </h3>
              <BrandSocialLinks
                whatsappDigits={BRAND_CONFIG.contactPlaceholders.whatsapp.replace(/[^0-9]/g, "")}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Legal
              </h3>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                <Link href="/privacy-notice" className="hover:text-white transition-colors">
                  Privacy Notice
                </Link>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#0c141c]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-5 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {BRAND_CONFIG.legalLine}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy-notice" className="hover:text-white">
              Privacy Notice
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms
            </Link>
            <span className="hidden text-slate-600 sm:inline">·</span>
            <span className="tracking-wide text-slate-300">{BRAND_CONFIG.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

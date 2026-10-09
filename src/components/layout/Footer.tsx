import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, Globe } from "lucide-react";
import { VensaiLogo } from "@/components/brand/VensaiLogo";
import { BRAND_CONFIG } from "@/data/vensai-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080D13] text-slate-300 border-t border-slate-800/90">
      {/* Top Executive Brand Strip */}
      <div className="border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            <span className="text-white">ONE BUSINESS PARTNER.</span>
            <span className="text-vensai-electric">•</span>
            <span className="text-white">MULTIPLE CAPABILITIES.</span>
            <span className="text-vensai-electric">•</span>
            <span className="text-white">END-TO-END DELIVERY.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm transition-colors"
            >
              <span>Talk to Vensai</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-slate-700 hover:border-vensai-electric text-slate-200 rounded-sm transition-colors"
            >
              <span>Explore Services</span>
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

            <div className="space-y-1.5">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white">
                {BRAND_CONFIG.tagline}
              </p>
              <p className="text-[11px] font-medium tracking-[0.24em] uppercase text-vensai-electric">
                BUILD <span className="mx-1 text-slate-600">|</span> DESIGN{" "}
                <span className="mx-1 text-slate-600">|</span> AUTOMATE{" "}
                <span className="mx-1 text-slate-600">|</span> SCALE
              </p>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Vensai Labs is a full-service freelancing agency and business solutions partner. With full-time teams across engineering, cloud, cybersecurity, enterprise technology, e-commerce, brand, marketing and customer support, we manage engagements from requirement to delivery.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-vensai-electric shrink-0" />
                <span>{BRAND_CONFIG.contactPlaceholders.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-vensai-electric shrink-0" />
                <span>{BRAND_CONFIG.contactPlaceholders.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-vensai-electric shrink-0" />
                <span>{BRAND_CONFIG.contactPlaceholders.locations}</span>
              </div>
            </div>
          </div>

          {/* Navigation Column: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
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
                  href="/solutions/support"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Customer &amp; Operational Support
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
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium border border-slate-800 hover:border-vensai-electric text-slate-300 hover:text-white rounded-sm transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium border border-slate-800 hover:border-vensai-electric text-slate-300 hover:text-white rounded-sm transition-colors"
                >
                  X / Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium border border-slate-800 hover:border-vensai-electric text-slate-300 hover:text-white rounded-sm transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium border border-slate-800 hover:border-vensai-electric text-slate-300 hover:text-white rounded-sm transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Legal
              </h3>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Engagement
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
      <div className="border-t border-slate-800/80 bg-[#05080D]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Vensai Labs. All rights reserved.</p>
          <p className="tracking-wider uppercase text-[11px] text-slate-400">
            FREELANCE TALENT. REAL SOLUTIONS. <span className="text-vensai-electric mx-1.5">•</span>{" "}
            BUILD | DESIGN | AUTOMATE | SCALE
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  Layers,
  Cpu,
  ShieldCheck,
  ShoppingBag,
  Compass,
  Headphones,
  Building2,
  Sparkles,
} from "lucide-react";
import { VensaiLogo } from "@/components/brand/VensaiLogo";
import { useTheme } from "@/components/theme/ThemeProvider";
import { SERVICE_CATEGORIES } from "@/data/vensai-data";

const SERVICE_GROUPS: {
  group: "Technology & Engineering" | "Enterprise & Commerce" | "Consulting & Operations" | "Brand, Growth & Creative";
  description: string;
}[] = [
  {
    group: "Technology & Engineering",
    description: "Software, Mobile, AI/ML, Cloud/DevOps & Cybersecurity",
  },
  {
    group: "Enterprise & Commerce",
    description: "SAP BTP, BI, Omnichannel E-Commerce & API Middleware",
  },
  {
    group: "Consulting & Operations",
    description: "Feasibility, Technical Audits, R&D & 24/7 Support",
  },
  {
    group: "Brand, Growth & Creative",
    description: "Brand Strategy, UI/UX, Performance Marketing & Production",
  },
];

const SOLUTIONS_MENU = [
  {
    title: "Digital Commerce Ecosystems",
    subtitle: "Shopify, WooCommerce, BigCommerce, Odoo, ERP Sync & Studio Catalogs",
    href: "/solutions/ecommerce",
    icon: ShoppingBag,
  },
  {
    title: "Technical Consulting & R&D",
    subtitle: "Project Feasibility, Architecture Reviews, Code & Cloud Audits",
    href: "/solutions/consulting",
    icon: Compass,
  },
  {
    title: "Post-Deployment & Customer Support",
    subtitle: "Pre/Post-Launch Maintenance, Technical Helpdesk, Chat & Voice Support",
    href: "/solutions/support",
    icon: Headphones,
  },
  {
    title: "Enterprise Systems & BI",
    subtitle: "SAP BTP Extensions, Power BI, Tableau & Cross-System Automation",
    href: "/services/enterprise",
    icon: Building2,
  },
  {
    title: "Applied AI & Workflow Automation",
    subtitle: "Private RAG Knowledge Systems, LLM Agents & Custom Middleware",
    href: "/services/ai-ml",
    icon: Sparkles,
  },
  {
    title: "Security & Cloud Governance",
    subtitle: "Authorized Penetration Testing, Cloud Migration & DevOps Reliability",
    href: "/services/cybersecurity",
    icon: ShieldCheck,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | "solutions" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<"services" | "solutions" | null>("services");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full max-w-full transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-[#0B1118] border-b border-slate-200/80 dark:border-slate-800/80 shadow-enterprise-sm"
          : "bg-white dark:bg-[#0B1118] border-b border-slate-200/60 dark:border-slate-800/60"
      }`}
    >
      {/* Top Executive Micro-Bar */}
      <div className="relative z-50 hidden lg:block border-b border-slate-200/70 dark:border-slate-800/80 bg-[#F7F9FC] dark:bg-[#070B10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-8 text-[11px] font-medium text-slate-600 dark:text-slate-400">
          {/* Left Side: Brand Tagline */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-vensai-electric shrink-0" />
            <span className="font-semibold tracking-[0.15em] uppercase text-slate-900 dark:text-white">
              FREELANCE TALENT. REAL SOLUTIONS.
            </span>
          </div>

          {/* Right Side: Brand Statement & Consulting Quick-Link */}
          <div className="flex items-center gap-5 shrink-0">
            <span className="tracking-[0.14em] uppercase text-slate-700 dark:text-slate-300 font-semibold">
              BUILD <span className="text-vensai-electric mx-1.5">|</span> DESIGN{" "}
              <span className="text-vensai-electric mx-1.5">|</span> AUTOMATE{" "}
              <span className="text-vensai-electric mx-1.5">|</span> SCALE
            </span>
            <span className="h-3.5 w-px bg-slate-300 dark:bg-slate-700" />
            <Link
              href="/solutions/consulting"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-vensai-royal/10 dark:bg-vensai-electric/15 text-vensai-royal dark:text-vensai-electric hover:bg-vensai-royal hover:text-white dark:hover:bg-vensai-electric dark:hover:text-white font-semibold tracking-[0.08em] uppercase transition-colors"
            >
              <span>Feasibility &amp; R&amp;D</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="relative z-50 w-full bg-white dark:bg-[#0B1118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-2 xl:gap-4">
          <VensaiLogo variant="navbar" />

        {/* Desktop Primary Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 shrink-0 whitespace-nowrap">
          <Link
            href="/"
            className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-sm transition-colors whitespace-nowrap ${
              pathname === "/"
                ? "text-vensai-royal dark:text-vensai-electric"
                : "text-slate-700 dark:text-slate-200 hover:text-vensai-royal dark:hover:text-vensai-electric"
            }`}
          >
            Home
          </Link>

          {/* Services Mega Menu Trigger */}
          <button
            type="button"
            aria-expanded={openMenu === "services"}
            onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
            onMouseEnter={() => setOpenMenu("services")}
            className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-sm inline-flex items-center gap-1 transition-colors whitespace-nowrap ${
              openMenu === "services" || pathname.startsWith("/services")
                ? "text-vensai-royal dark:text-vensai-electric"
                : "text-slate-700 dark:text-slate-200 hover:text-vensai-royal dark:hover:text-vensai-electric"
            }`}
          >
            <span>Services</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                openMenu === "services" ? "rotate-180 text-vensai-electric" : ""
              }`}
            />
          </button>

          {/* Solutions Mega Menu Trigger */}
          <button
            type="button"
            aria-expanded={openMenu === "solutions"}
            onClick={() => setOpenMenu(openMenu === "solutions" ? null : "solutions")}
            onMouseEnter={() => setOpenMenu("solutions")}
            className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-sm inline-flex items-center gap-1 transition-colors whitespace-nowrap ${
              openMenu === "solutions" || pathname.startsWith("/solutions")
                ? "text-vensai-royal dark:text-vensai-electric"
                : "text-slate-700 dark:text-slate-200 hover:text-vensai-royal dark:hover:text-vensai-electric"
            }`}
          >
            <span>Solutions</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                openMenu === "solutions" ? "rotate-180 text-vensai-electric" : ""
              }`}
            />
          </button>

          <Link
            href="/industries"
            onMouseEnter={() => setOpenMenu(null)}
            className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-sm transition-colors whitespace-nowrap ${
              pathname.startsWith("/industries")
                ? "text-vensai-royal dark:text-vensai-electric"
                : "text-slate-700 dark:text-slate-200 hover:text-vensai-royal dark:hover:text-vensai-electric"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/about"
            onMouseEnter={() => setOpenMenu(null)}
            className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-sm transition-colors whitespace-nowrap ${
              pathname.startsWith("/about")
                ? "text-vensai-royal dark:text-vensai-electric"
                : "text-slate-700 dark:text-slate-200 hover:text-vensai-royal dark:hover:text-vensai-electric"
            }`}
          >
            About
          </Link>

          <Link
            href="/insights"
            onMouseEnter={() => setOpenMenu(null)}
            className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-sm transition-colors whitespace-nowrap ${
              pathname.startsWith("/insights")
                ? "text-vensai-royal dark:text-vensai-electric"
                : "text-slate-700 dark:text-slate-200 hover:text-vensai-royal dark:hover:text-vensai-electric"
            }`}
          >
            Insights
          </Link>

          <Link
            href="/careers"
            onMouseEnter={() => setOpenMenu(null)}
            className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-sm transition-colors whitespace-nowrap ${
              pathname.startsWith("/careers")
                ? "text-vensai-royal dark:text-vensai-electric"
                : "text-slate-700 dark:text-slate-200 hover:text-vensai-royal dark:hover:text-vensai-electric"
            }`}
          >
            Careers
          </Link>

          <Link
            href="/contact"
            onMouseEnter={() => setOpenMenu(null)}
            className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-sm transition-colors whitespace-nowrap ${
              pathname.startsWith("/contact")
                ? "text-vensai-royal dark:text-vensai-electric"
                : "text-slate-700 dark:text-slate-200 hover:text-vensai-royal dark:hover:text-vensai-electric"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Actions: Theme Toggle + CTAs with uniform fixed sizes */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-vensai-electric dark:hover:border-vensai-electric hover:text-vensai-electric transition-colors shrink-0"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            href="/services"
            className="hidden min-[1240px]:inline-flex w-[144px] h-10 items-center justify-center text-xs font-bold uppercase tracking-wider border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-vensai-electric dark:hover:border-vensai-electric rounded-lg transition-colors text-center shrink-0 whitespace-nowrap"
          >
            Explore Services
          </Link>

          <Link
            href="/contact"
            className="w-[144px] h-10 inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-vensai-royal hover:bg-vensai-electric rounded-lg shadow-blue-glow-sm transition-all duration-200 text-center shrink-0 whitespace-nowrap"
          >
            <span>Talk to Vensai</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>

      {/* Blurred Background Backdrop when any Dropdown Menu is open */}
      <AnimatePresence>
        {openMenu !== null && (
          <motion.div
            key="nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpenMenu(null)}
            className="fixed inset-x-0 bottom-0 top-[116px] z-40 bg-slate-950/50 dark:bg-black/65 backdrop-blur-md pointer-events-auto cursor-pointer"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Desktop Mega Menu: SERVICES */}
      <AnimatePresence>
        {openMenu === "services" && (
          <motion.div
            key="services-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onMouseLeave={() => setOpenMenu(null)}
            className="hidden lg:block absolute left-0 right-0 top-full bg-white dark:bg-[#0B1118] border-b-2 border-b-vensai-electric border-t border-slate-200 dark:border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] hover:shadow-[0_35px_80px_-12px_rgba(10,132,255,0.28)] transition-shadow duration-300 z-50"
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200 dark:border-slate-800/80">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vensai-electric">
                    13 Specialized Service Practice Areas
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-0.5">
                    Full-Service Freelancing Agency &amp; Business Solutions Partner
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-vensai-royal dark:text-vensai-electric hover:underline"
                  >
                    <span>View Complete Service Directory</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {SERVICE_GROUPS.map((grp) => {
                  const items = SERVICE_CATEGORIES.filter((c) => c.categoryGroup === grp.group);
                  return (
                    <div key={grp.group} className="space-y-3">
                      <div className="pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                          {grp.group}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {grp.description}
                        </p>
                      </div>
                      <ul className="space-y-1.5">
                        {items.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="group block p-2 rounded-sm hover:bg-slate-50 dark:hover:bg-[#111827] transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-vensai-royal dark:group-hover:text-vensai-electric transition-colors">
                                  <span className="font-mono text-[11px] text-vensai-electric mr-1.5">
                                    {service.number}
                                  </span>
                                  {service.title}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 pl-5">
                                {service.capabilities.slice(0, 4).join(" • ")}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Mega-Menu Bar */}
              <div className="mt-7 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-6">
                  <span className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                    Dedicated Flagship Practices:
                  </span>
                  <Link
                    href="/solutions/ecommerce"
                    className="hover:text-vensai-electric font-medium transition-colors"
                  >
                    E-Commerce Ecosystems →
                  </Link>
                  <Link
                    href="/solutions/consulting"
                    className="hover:text-vensai-electric font-medium transition-colors"
                  >
                    Technical Consulting &amp; R&amp;D →
                  </Link>
                  <Link
                    href="/solutions/support"
                    className="hover:text-vensai-electric font-medium transition-colors"
                  >
                    Post-Deployment &amp; Customer Support →
                  </Link>
                </div>
                <Link
                  href="/contact"
                  className="font-semibold text-vensai-royal dark:text-vensai-electric hover:underline"
                >
                  Need a custom multidisciplinary team? Talk to Vensai →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Mega Menu: SOLUTIONS */}
      <AnimatePresence>
        {openMenu === "solutions" && (
          <motion.div
            key="solutions-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onMouseLeave={() => setOpenMenu(null)}
            className="hidden lg:block absolute left-0 right-0 top-full bg-white dark:bg-[#0B1118] border-b-2 border-b-vensai-electric border-t border-slate-200 dark:border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] hover:shadow-[0_35px_80px_-12px_rgba(10,132,255,0.28)] transition-shadow duration-300 z-50"
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-4 pr-6 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vensai-electric">
                      Integrated Business Solutions
                    </p>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-2">
                      One Accountable Partner From Requirement to Delivery
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                      Vensai brings together full-time engineers, architects, designers, marketers and support specialists under centralized project management.
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-vensai-royal dark:text-vensai-electric hover:underline"
                    >
                      <span>Explore All Solutions &amp; Engagement Models</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="col-span-8 grid grid-cols-2 gap-4">
                  {SOLUTIONS_MENU.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group p-4 rounded-sm border border-slate-200/80 dark:border-slate-800/80 hover:border-vensai-electric dark:hover:border-vensai-electric bg-[#F7F9FC] dark:bg-[#111827] transition-all"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="p-2 rounded-sm bg-vensai-royal/10 dark:bg-vensai-electric/15 text-vensai-royal dark:text-vensai-electric">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-vensai-royal dark:group-hover:text-vensai-electric transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Full-Screen / Slide Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white dark:bg-[#0B1118] z-50 overflow-y-auto border-t border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <div className="p-6 space-y-6">
              <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-vensai-electric">
                  FREELANCE TALENT. REAL SOLUTIONS.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  BUILD • DESIGN • AUTOMATE • SCALE
                </p>
              </div>

              <nav className="space-y-2" aria-label="Mobile Navigation">
                <Link
                  href="/"
                  className="block py-2.5 text-base font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/60"
                >
                  Home
                </Link>

                {/* Services Accordion */}
                <div className="border-b border-slate-100 dark:border-slate-800/60 py-2">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileAccordion(mobileAccordion === "services" ? null : "services")
                    }
                    className="w-full flex items-center justify-between py-1.5 text-base font-semibold text-slate-900 dark:text-white"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileAccordion === "services" ? "rotate-180 text-vensai-electric" : ""
                      }`}
                    />
                  </button>
                  {mobileAccordion === "services" && (
                    <div className="mt-2 pl-3 space-y-2 border-l-2 border-vensai-electric/40">
                      <Link
                        href="/services"
                        className="block py-1 text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric"
                      >
                        All Services Directory →
                      </Link>
                      {SERVICE_CATEGORIES.map((s) => (
                        <Link
                          key={s.id}
                          href={`/services/${s.slug}`}
                          className="block py-1 text-sm text-slate-700 dark:text-slate-300 hover:text-vensai-electric"
                        >
                          <span className="font-mono text-xs text-vensai-electric mr-2">
                            {s.number}
                          </span>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Solutions Accordion */}
                <div className="border-b border-slate-100 dark:border-slate-800/60 py-2">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileAccordion(mobileAccordion === "solutions" ? null : "solutions")
                    }
                    className="w-full flex items-center justify-between py-1.5 text-base font-semibold text-slate-900 dark:text-white"
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileAccordion === "solutions" ? "rotate-180 text-vensai-electric" : ""
                      }`}
                    />
                  </button>
                  {mobileAccordion === "solutions" && (
                    <div className="mt-2 pl-3 space-y-2 border-l-2 border-vensai-electric/40">
                      <Link
                        href="/solutions"
                        className="block py-1 text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric"
                      >
                        All Solutions Hub →
                      </Link>
                      {SOLUTIONS_MENU.map((sol) => (
                        <Link
                          key={sol.title}
                          href={sol.href}
                          className="block py-1 text-sm text-slate-700 dark:text-slate-300 hover:text-vensai-electric"
                        >
                          {sol.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/industries"
                  className="block py-2.5 text-base font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/60"
                >
                  Industries
                </Link>
                <Link
                  href="/about"
                  className="block py-2.5 text-base font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/60"
                >
                  About
                </Link>
                <Link
                  href="/insights"
                  className="block py-2.5 text-base font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/60"
                >
                  Insights
                </Link>
                <Link
                  href="/careers"
                  className="block py-2.5 text-base font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/60"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="block py-2.5 text-base font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/60"
                >
                  Contact
                </Link>
              </nav>

              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full h-11 flex items-center justify-center text-xs font-bold uppercase tracking-wider text-white bg-vensai-royal hover:bg-vensai-electric rounded-lg shadow-blue-glow-sm"
                >
                  Talk to Vensai
                </Link>
                <Link
                  href="/services"
                  className="w-full h-11 flex items-center justify-center text-xs font-bold uppercase tracking-wider border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-lg hover:border-vensai-electric"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

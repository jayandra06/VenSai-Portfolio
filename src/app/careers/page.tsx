"use client";

import React, { useState } from "react";
import { ArrowRight, Briefcase, CheckCircle2, Users } from "lucide-react";
import { Breadcrumbs, EnterpriseModal } from "@/components/ui/EnterpriseUI";
import { CAREER_ROLES, BRAND_CONFIG } from "@/data/vensai-data";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const openApply = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-[#0B1118]">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Careers" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
                <Users className="w-4 h-4" />
                <span>CAREERS AT VENSAI LABS • FULL-TIME IN-HOUSE TEAMS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Build Your Career Inside a Multi-Disciplinary Solutions Partner.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Vensai builds internal full-time teams across software engineering, mobile development, AI/ML, cloud &amp; DevOps, cybersecurity, enterprise technology, UI/UX design, consulting, marketing and customer support. Work on diverse, high-impact business engagements backed by structured leadership and continuous learning.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                type="button"
                onClick={() => openApply("General Application — Join Vensai")}
                className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-all"
              >
                <span>Join Vensai</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Vensai */}
      <section className="py-16 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
            <span className="font-mono text-xs font-bold text-vensai-electric">01</span>
            <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
              Full-Time Stability &amp; Growth
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              You are a permanent member of Vensai’s professional staff—collaborating with senior architects, designers and project managers rather than chasing isolated freelance gigs.
            </p>
          </div>
          <div className="p-7 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
            <span className="font-mono text-xs font-bold text-vensai-electric">02</span>
            <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
              Real-World Multi-Industry Exposure
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Solve complex problems across e-commerce, financial services, logistics, healthcare, manufacturing and enterprise technology.
            </p>
          </div>
          <div className="p-7 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
            <span className="font-mono text-xs font-bold text-vensai-electric">03</span>
            <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
              Cross-Disciplinary Collaboration
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Engineers, designers, consultants, marketers and support specialists work side by side under unified engineering and delivery standards.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Core Career Disciplines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-vensai-electric">
                10 PROFESSIONAL DISCIPLINES
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
                Roles Across Vensai Labs
              </h2>
            </div>
            <button
              type="button"
              onClick={() => openApply("General Application — Join Vensai")}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider border border-slate-300 dark:border-slate-700 hover:border-vensai-electric text-slate-800 dark:text-slate-200 rounded-sm"
            >
              <span>Submit Open Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_ROLES.map((role, idx) => (
              <div
                key={role.title}
                className="p-7 rounded-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-vensai-electric transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <span className="font-mono text-xs font-bold text-vensai-electric">
                      TRACK {String(idx + 1).padStart(2, "0")} • {role.department}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-sm bg-white dark:bg-[#0B1118] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                      {role.type}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {role.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => openApply(role.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vensai-royal dark:text-vensai-electric hover:underline"
                  >
                    <span>Apply for {role.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Join Vensai CTA */}
      <section className="py-20 bg-[#0B1118] text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Ready to Join Vensai Labs?
          </h2>
          <p className="text-base text-slate-300">
            Send us your profile and portfolio, or apply directly to one of our 10 practice tracks. You can also reach our talent team at{" "}
            <span className="text-vensai-electric font-mono">
              {BRAND_CONFIG.contactPlaceholders.careersEmail}
            </span>
            .
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openApply("General Application — Join Vensai")}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm shadow-blue-glow transition-all"
            >
              <span>Join Vensai</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <EnterpriseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedRole || "Join Vensai Labs"}
        subtitle="FULL-TIME CAREER APPLICATION"
      >
        {submitted ? (
          <div className="p-6 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-vensai-electric mx-auto" />
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
              Application Received
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Thank you for your interest in joining Vensai Labs ({selectedRole}). Our talent acquisition and practice leads will review your credentials.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-vensai-royal text-white rounded-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-sm text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-sm text-slate-900 dark:text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 / +1 ..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-sm text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Role Track *
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-sm text-slate-900 dark:text-white"
                >
                  <option value="General Application — Join Vensai">
                    General Application — Join Vensai
                  </option>
                  {CAREER_ROLES.map((r) => (
                    <option key={r.title} value={r.title}>
                      {r.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                LinkedIn / Portfolio / GitHub URL
              </label>
              <input
                type="url"
                placeholder="https://..."
                className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-sm text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Experience Summary &amp; Key Skills *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell us about your core technical, creative, consulting or support experience..."
                className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-sm text-slate-900 dark:text-white"
              />
            </div>
            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-slate-300 dark:border-slate-700 rounded-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </EnterpriseModal>
    </div>
  );
}

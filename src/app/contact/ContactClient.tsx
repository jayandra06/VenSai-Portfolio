"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, Mail, MessageSquare, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";
import {
  BRAND_CONFIG,
  CONTACT_BUDGET_RANGES,
  CONTACT_PROJECT_TYPES,
  CONTACT_SERVICE_OPTIONS,
} from "@/data/vensai-data";
import { trackConversionEvent } from "@/lib/analytics";

function matchServiceOption(paramValue: string): string {
  const lower = paramValue.toLowerCase();
  const exactOrPartial = CONTACT_SERVICE_OPTIONS.find(
    (opt) =>
      opt.toLowerCase() === lower ||
      opt.toLowerCase().includes(lower) ||
      lower.includes(opt.toLowerCase().split(" ")[0])
  );
  return exactOrPartial || CONTACT_SERVICE_OPTIONS[0];
}

function matchProjectType(paramValue: string): string {
  const lower = paramValue.toLowerCase();
  const exactOrPartial = CONTACT_PROJECT_TYPES.find(
    (pt) =>
      pt.toLowerCase() === lower ||
      pt.toLowerCase().includes(lower) ||
      lower.includes(pt.toLowerCase().split(" ")[0])
  );
  return exactOrPartial || CONTACT_PROJECT_TYPES[0];
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    serviceRequired: CONTACT_SERVICE_OPTIONS[0],
    projectType: CONTACT_PROJECT_TYPES[0],
    budgetRange: CONTACT_BUDGET_RANGES[0],
    description: "",
  });

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const modelParam = searchParams.get("model");
    const industryParam = searchParams.get("industry");

    if (serviceParam || modelParam || industryParam) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: serviceParam
          ? matchServiceOption(serviceParam)
          : prev.serviceRequired,
        projectType: modelParam
          ? matchProjectType(modelParam)
          : prev.projectType,
        description:
          industryParam && !prev.description
            ? `Industry / Sector: ${industryParam}\n\nRequirement Details: `
            : prev.description,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversionEvent("lead_form_submit", {
      service_required: formData.serviceRequired,
      project_type: formData.projectType,
      budget_range: formData.budgetRange,
    });
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-8 bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-sm p-8 sm:p-10 shadow-enterprise">
      {submitted ? (
        <div className="py-12 text-center space-y-5">
          <CheckCircle2 className="w-12 h-12 text-vensai-electric mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
            Requirement Brief Received
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Thank you,{" "}
            <strong className="text-slate-900 dark:text-white">
              {formData.name}
            </strong>
            . Our project management and technical consulting team has logged your inquiry regarding{" "}
            <strong className="text-vensai-royal dark:text-vensai-electric">
              {formData.serviceRequired}
            </strong>{" "}
            ({formData.projectType}) and will respond promptly to schedule a discovery discussion.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm"
            >
              Submit Another Requirement
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="pb-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Project &amp; Requirement Specification
            </h2>
            <span className="text-xs font-mono text-vensai-electric">
              NDA-Ready Confidentiality
            </span>
          </div>

          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
              >
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 text-sm bg-white dark:bg-[#0B1118] border border-slate-300 dark:border-slate-700 focus:border-vensai-electric rounded-sm text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
              >
                Company *
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Organization or brand name"
                className="w-full px-4 py-3 text-sm bg-white dark:bg-[#0B1118] border border-slate-300 dark:border-slate-700 focus:border-vensai-electric rounded-sm text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Work Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
              >
                Work Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-3 text-sm bg-white dark:bg-[#0B1118] border border-slate-300 dark:border-slate-700 focus:border-vensai-electric rounded-sm text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
              >
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 / +91 / International phone number"
                className="w-full px-4 py-3 text-sm bg-white dark:bg-[#0B1118] border border-slate-300 dark:border-slate-700 focus:border-vensai-electric rounded-sm text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Row 3: Country & Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="country"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
              >
                Country *
              </label>
              <input
                id="country"
                name="country"
                type="text"
                required
                value={formData.country}
                onChange={handleChange}
                placeholder="Country / Region"
                className="w-full px-4 py-3 text-sm bg-white dark:bg-[#0B1118] border border-slate-300 dark:border-slate-700 focus:border-vensai-electric rounded-sm text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="serviceRequired"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
              >
                Service Required *
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm bg-white dark:bg-[#0B1118] border border-slate-300 dark:border-slate-700 focus:border-vensai-electric rounded-sm text-slate-900 dark:text-white focus:outline-none"
              >
                {CONTACT_SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Project Type & Budget Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="projectType"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
              >
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm bg-white dark:bg-[#0B1118] border border-slate-300 dark:border-slate-700 focus:border-vensai-electric rounded-sm text-slate-900 dark:text-white focus:outline-none"
              >
                {CONTACT_PROJECT_TYPES.map((pt) => (
                  <option key={pt} value={pt}>
                    {pt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="budgetRange"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
              >
                Budget Range
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm bg-white dark:bg-[#0B1118] border border-slate-300 dark:border-slate-700 focus:border-vensai-electric rounded-sm text-slate-900 dark:text-white focus:outline-none"
              >
                {CONTACT_BUDGET_RANGES.map((br) => (
                  <option key={br} value={br}>
                    {br}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 5: Project Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
            >
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your business requirement, goals, existing systems, target timeline or questions..."
              className="w-full px-4 py-3 text-sm bg-white dark:bg-[#0B1118] border border-slate-300 dark:border-slate-700 focus:border-vensai-electric rounded-sm text-slate-900 dark:text-white focus:outline-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Your information is kept strictly confidential by Vensai Labs.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-vensai-royal hover:bg-vensai-electric rounded-sm shadow-blue-glow transition-all"
            >
              <span>Submit Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export function ContactClient() {
  return (
    <div className="bg-white dark:bg-[#0B1118]">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-[#F7F9FC] dark:bg-[#080D14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
              <span className="w-2 h-2 bg-vensai-electric inline-block" />
              <span>START A CONVERSATION • REQUIREMENT DISCOVERY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Let&apos;s Build What Your Business Needs.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Share your requirement below. Our consulting and project management team will review your brief, evaluate technical feasibility, and connect you with the right Vensai specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Direct Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 8 Columns: Enterprise Requirement Form */}
          <Suspense
            fallback={
              <div className="lg:col-span-8 bg-[#F7F9FC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-sm p-8 sm:p-10 shadow-enterprise min-h-[540px]" />
            }
          >
            <ContactFormInner />
          </Suspense>

          {/* Right 4 Columns: Prefer a Direct Conversation? */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-sm bg-[#0B1118] text-white border border-slate-800 shadow-enterprise space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-vensai-electric">
                  DIRECT CHANNELS
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Prefer a direct conversation?
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Reach our consulting and client engagement team directly via phone, WhatsApp or email.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800">
                <div
                  onClick={() =>
                    trackConversionEvent("direct_channel_click", {
                      channel: "phone",
                    })
                  }
                  className="p-4 rounded-sm bg-[#111827] border border-slate-800 flex items-start gap-3.5"
                >
                  <Phone className="w-5 h-5 text-vensai-electric shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Phone Consultation
                    </p>
                    <p className="text-sm font-mono font-semibold text-white mt-0.5">
                      {BRAND_CONFIG.contactPlaceholders.phone}
                    </p>
                  </div>
                </div>

                <div
                  onClick={() =>
                    trackConversionEvent("direct_channel_click", {
                      channel: "whatsapp",
                    })
                  }
                  className="p-4 rounded-sm bg-[#111827] border border-slate-800 flex items-start gap-3.5"
                >
                  <MessageSquare className="w-5 h-5 text-vensai-electric shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      WhatsApp Business
                    </p>
                    <p className="text-sm font-mono font-semibold text-white mt-0.5">
                      {BRAND_CONFIG.contactPlaceholders.whatsapp}
                    </p>
                  </div>
                </div>

                <a
                  href={`mailto:${BRAND_CONFIG.contactPlaceholders.email}`}
                  onClick={() =>
                    trackConversionEvent("direct_channel_click", {
                      channel: "email",
                    })
                  }
                  className="p-4 rounded-sm bg-[#111827] border border-slate-800 hover:border-vensai-electric flex items-start gap-3.5 transition-colors block"
                >
                  <Mail className="w-5 h-5 text-vensai-electric shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Direct Email
                    </p>
                    <p className="text-sm font-mono font-semibold text-white mt-0.5">
                      {BRAND_CONFIG.contactPlaceholders.email}
                    </p>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-400">
                <p className="font-semibold text-white uppercase tracking-wider">
                  What Happens Next?
                </p>
                <p>1. We review your requirement and assign a relevant domain lead.</p>
                <p>2. We conduct a discovery &amp; technical feasibility call.</p>
                <p>3. You receive a clear scope, team plan, timeline and commercial proposal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

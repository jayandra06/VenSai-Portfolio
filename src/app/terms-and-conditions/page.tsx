import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";
import { BRAND_CONFIG } from "@/data/vensai-data";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

const TITLE = "Terms and Conditions — Website Use | Vensai Labs";
const DESCRIPTION =
  "Terms and conditions for using the Vensai Labs website, including intellectual property, inquiries, client engagements and limitations of liability.";

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  const pageSchema = buildWebPageSchema({
    title: TITLE,
    description: DESCRIPTION,
    path: "/terms-and-conditions",
  });
  const { email } = BRAND_CONFIG.contactPlaceholders;

  return (
    <div className="py-16 lg:py-24 bg-white dark:bg-[#0B1118]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
          Terms and Conditions
        </h1>
        <p className="text-sm text-slate-500">
          Last Updated: 12 October 2026 • {BRAND_CONFIG.shortName}
        </p>

        <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            These terms govern your use of the {BRAND_CONFIG.shortName} website. By browsing the site, submitting an inquiry or applying for a role, you agree to these terms. If you do not agree, please do not use the site.
          </p>
          <p>
            {BRAND_CONFIG.shortName} is a full-service freelancing agency and business solutions partner. Tagline: &ldquo;{BRAND_CONFIG.tagline}&rdquo; Operating statement: &ldquo;{BRAND_CONFIG.statement}&rdquo;
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            1. The website is not a contract for services
          </h2>
          <p>
            Pages describing services, industries, engagement models, case-study blueprints and process steps are general information. They are not an offer, a quotation or a promise that a particular scope, timeline, team or price is available. A commercial relationship starts only when both sides sign the documents that apply to that work — typically a proposal or statement of work, and where used, a master services agreement or non-disclosure agreement.
          </p>
          <p>
            Engagement models we may offer include project-based delivery, a dedicated resource, a dedicated team, a managed service, consulting, and post-deployment support. Which model applies, and what is included, is defined in the signed documents for that engagement, not on this website.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            2. Acceptable use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>use the site in a way that breaks applicable law;</li>
            <li>attempt to gain unauthorized access to the site, its forms, or related systems;</li>
            <li>probe, scan or test the vulnerability of the site, or bypass a security control;</li>
            <li>upload malware, or send spam or automated submissions through the forms;</li>
            <li>copy the site in bulk, or use its content to train a model or build a competing service, without our written permission;</li>
            <li>misrepresent your identity, your organization, or your authority to request work on its behalf.</li>
          </ul>
          <p>
            We may refuse, ignore or remove an inquiry or application that we reasonably believe breaches these terms.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            3. Inquiries and proposals
          </h2>
          <p>
            When you submit a project inquiry you confirm that the details are accurate to the best of your knowledge and that you are allowed to share them with us. A reply from Vensai, including a call, an email or a draft proposal, is exploratory until a statement of work or equivalent document is signed by both parties.
          </p>
          <p>
            Estimates discussed before signature can change once scope, integrations, data, timelines and assumptions are confirmed. Work does not start, and no delivery date is binding, until the commercial documents say it does.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            4. Client engagements
          </h2>
          <p>
            For signed work, the statement of work and any master agreement control if they conflict with these website terms. Those documents typically cover scope, milestones, fees, invoicing, intellectual-property ownership of deliverables, confidentiality, warranties, service levels, acceptance and how either side may end the engagement.
          </p>
          <p>
            Unless a signed document says otherwise, pre-existing tools, frameworks and know-how that Vensai uses to deliver work remain Vensai&apos;s, and client materials, data and brands remain the client&apos;s. Ownership of newly created deliverables transfers only on the terms and payment conditions written in the statement of work.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            5. Careers
          </h2>
          <p>
            Submitting a career application does not create an employment offer or a contract. Role descriptions on the site are invitations to apply. We may decline an application, close a role, or contact you about a different opening. Please send only information you are comfortable sharing for recruiting. How we handle that information is described in the{" "}
            <Link href="/privacy-notice" className="text-vensai-electric hover:underline">
              Privacy Notice
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            6. Intellectual property
          </h2>
          <p>
            The Vensai Labs name, the geometric V symbol, logo lockups, the taglines &ldquo;{BRAND_CONFIG.tagline}&rdquo; and &ldquo;{BRAND_CONFIG.statement}&rdquo;, page copy, layout, graphics and other site content are owned by Vensai Labs or used with permission. You may view and share links to public pages. You may not copy, modify, republish or use our name or marks in a way that suggests a partnership, endorsement or affiliation, unless we have agreed to that in writing.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            7. Confidentiality of what you send us
          </h2>
          <p>
            We treat project briefs and commercial discussions as confidential, as described in the Privacy Notice, and we limit access to people who need them. Until a non-disclosure agreement or services agreement is signed, do not send trade secrets, credentials, production data or information you are not free to disclose. Information you post in a channel that is plainly public is not confidential.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            8. Third-party sites
          </h2>
          <p>
            The site may link to LinkedIn, X, Instagram, YouTube or other third-party sites, and to tools a client later asks us to use. Those sites have their own terms and privacy practices. We are not responsible for their content or availability.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            9. Disclaimer
          </h2>
          <p>
            The website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We work to keep it accurate and available, but we do not warrant that every page is complete, current or free of errors, or that the site will be uninterrupted. Case-study blueprints illustrate the kind of work we do. They are not a guarantee that another organization will see the same outcome.
          </p>
          <p>
            Nothing on the site is legal, financial, tax or regulated professional advice. Technical and commercial recommendations made during an engagement are given under the signed documents for that engagement.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            10. Limitation of liability
          </h2>
          <p>
            To the extent permitted by law, Vensai Labs is not liable for any indirect, incidental, special, consequential or punitive loss, or for lost profits, revenue, data or goodwill, arising out of your use of this website or your reliance on its general content. Our total liability arising out of or in connection with the website, other than liability that cannot legally be limited, is limited to one hundred US dollars (USD 100).
          </p>
          <p>
            Liability for a signed engagement is governed only by that engagement&apos;s contract. These website terms do not limit liability for fraud, or for death or personal injury caused by negligence, where the law does not allow that limitation.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            11. Indemnity
          </h2>
          <p>
            You will indemnify Vensai Labs against claims, losses and reasonable costs arising from content you submit to the site, from your misuse of the site, or from your infringement of someone else&apos;s rights, except to the extent the claim is caused by our own breach or negligence.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            12. Suspension
          </h2>
          <p>
            We may suspend or discontinue any page, form or feature of the website, or block access that we reasonably believe is abusive, without notice.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            13. Governing law
          </h2>
          <p>
            These website terms are governed by the laws of India, without regard to conflict-of-law rules. Courts in India have exclusive jurisdiction over disputes that arise from use of the website and are not covered by a signed services agreement. If a signed agreement names a different law or venue for the engagement itself, that agreement controls for the engagement.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            14. Changes
          </h2>
          <p>
            We may revise these terms by posting an updated version on this page. The date at the top shows when they were last revised. The version posted at the time you use the site applies to that use. Changes do not alter a services agreement that has already been signed, unless that agreement says they do.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            15. Contact
          </h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${email}`} className="font-mono text-vensai-electric hover:underline">
              {email}
            </a>
            . How we handle personal information is set out in the{" "}
            <Link href="/privacy-notice" className="text-vensai-electric hover:underline">
              Privacy Notice
            </Link>
            , and cookie use is set out in the{" "}
            <Link href="/cookies" className="text-vensai-electric hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

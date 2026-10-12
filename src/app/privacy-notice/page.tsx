import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/EnterpriseUI";
import { BRAND_CONFIG } from "@/data/vensai-data";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

const TITLE = "Privacy Notice — How Vensai Labs Handles Personal Information";
const DESCRIPTION =
  "Read how Vensai Labs collects, uses, stores and protects information submitted through project inquiries, career applications and this website.";

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/privacy-notice",
});

export default function PrivacyNoticePage() {
  const pageSchema = buildWebPageSchema({
    title: TITLE,
    description: DESCRIPTION,
    path: "/privacy-notice",
  });
  const { email, careersEmail } = BRAND_CONFIG.contactPlaceholders;

  return (
    <div className="py-16 lg:py-24 bg-white dark:bg-[#0B1118]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <Breadcrumbs items={[{ label: "Privacy Notice" }]} />
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
          Privacy Notice
        </h1>
        <p className="text-sm text-slate-500">
          Last Updated: 12 October 2026 • {BRAND_CONFIG.shortName}
        </p>

        <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            {BRAND_CONFIG.shortName} (&ldquo;Vensai&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) respects the privacy of clients, prospects, partners, website visitors and people who apply to work with us. This Privacy Notice explains what information we collect through this website, why we collect it, who we share it with, and the choices available to you.
          </p>
          <p>
            This notice covers the public website and the inquiry and career forms on it. Paid client work is also covered by the confidentiality terms in the applicable proposal, non-disclosure agreement, master services agreement or statement of work.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            1. Who this notice applies to
          </h2>
          <p>This notice applies when you:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>browse vensailabs.in or any page of this website;</li>
            <li>submit a project, consulting or support inquiry;</li>
            <li>email, call or message us using the contact details published on the site;</li>
            <li>apply for a role or send a general career application.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            2. Information we collect
          </h2>
          <p>
            <strong className="text-slate-800 dark:text-slate-100">Information you give us.</strong>{" "}
            The contact form asks for your name, company, work email, phone number, country, the service you need, project type, an optional budget range, and a description of the requirement. The careers form asks for your name, email, phone or WhatsApp number, the role you are applying for, an optional LinkedIn, portfolio or GitHub URL, and a summary of your experience.
          </p>
          <p>
            <strong className="text-slate-800 dark:text-slate-100">Information we collect automatically.</strong>{" "}
            Like most websites, our hosting and security providers may record technical data such as IP address, browser type, device type, referring URL and the pages you request. We also store a local preference for your theme (light or dark) and your cookie choice. If you accept analytics cookies, we may record aggregated visit events. Those events are limited to categories such as the service or channel you selected. We do not send your name, email, phone number or free-text project description to analytics tools.
          </p>
          <p>
            <strong className="text-slate-800 dark:text-slate-100">Information we do not ask for.</strong>{" "}
            Please do not send government identity numbers, payment card details, health information or other sensitive personal data through the website forms. If a later engagement requires that kind of information, we will collect it under a separate agreement and only to the extent needed.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            3. How we use information
          </h2>
          <p>We use the information to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>reply to your inquiry and understand the work you are asking about;</li>
            <li>prepare a proposal, estimate, non-disclosure agreement or statement of work;</li>
            <li>deliver, manage and support an engagement once it is agreed in writing;</li>
            <li>review career applications and contact candidates about roles;</li>
            <li>keep records of business communications;</li>
            <li>protect the website against abuse, spam and security incidents;</li>
            <li>remember your cookie and theme preferences;</li>
            <li>measure, in aggregate, which pages and calls to action are useful, when you have allowed analytics cookies.</li>
          </ul>
          <p>
            We do not sell personal information. We do not use inquiry or application details to build advertising profiles, and we do not send them to data brokers.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            4. Why we are allowed to use it
          </h2>
          <p>
            Depending on where you are and the context, we rely on one or more of the following: steps you ask us to take before a contract (such as reviewing a brief or an application); performance of a contract once an engagement or employment discussion is underway; our legitimate interest in answering business inquiries, securing the website and improving it; a legal obligation where a law requires us to keep a record; and your consent, which we ask for before non-essential analytics cookies. You can withdraw cookie consent by clearing site data for this domain and choosing again when the notice reappears.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            5. Who we share information with
          </h2>
          <p>
            Access inside Vensai is limited to people who need it for the purpose you contacted us — for example a practice lead reviewing a brief, or the person handling recruiting for a role. We may also share information with:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>hosting, email and infrastructure providers that run this website and our business mailboxes;</li>
            <li>professional advisers such as lawyers or accountants, when a matter requires it;</li>
            <li>a client, only where you are a candidate or subcontractor being introduced under an agreed engagement, and only with the details needed for that introduction;</li>
            <li>authorities, when we are required to do so by law or to protect our rights, users or the public.</li>
          </ul>
          <p>
            Those providers may process data on our instructions and only for the service they provide to us. If we ever use a different category of provider for a new purpose, we will update this notice.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            6. Where information is processed
          </h2>
          <p>
            Vensai delivers work remotely and on site for clients in more than one country. Inquiry and application information may be accessed by Vensai team members and by infrastructure providers located outside your country. Where a law requires a specific safeguard for that transfer, we will apply it before the transfer is made.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            7. How long we keep it
          </h2>
          <p>
            We keep contact inquiries for as long as needed to respond and, if no engagement follows, for a limited period so we can refer back to the conversation if you write again. We keep records related to an active or completed engagement for the life of that work and for the period our contracts, tax rules and professional obligations require afterwards. Career applications are kept while a role is open and for a reasonable period afterwards in case a matching role opens, unless you ask us to delete them sooner. Technical logs are kept for a shorter security and operations window. Cookie consent and theme preferences stay in your browser until you clear them.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            8. How we protect it
          </h2>
          <p>
            Project briefs, commercial discussions and application materials are treated as confidential. They are restricted to the people working on that conversation. We use access controls and reputable infrastructure providers, and we expect the same care from anyone who handles the information on our behalf. No website transmission is perfectly secure; please avoid sending highly sensitive material until a protected channel has been agreed.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            9. Your choices and requests
          </h2>
          <p>
            Subject to applicable law, you may ask us to confirm whether we hold information about you, to correct it, to delete it, to limit how we use it, or to provide a copy of what you submitted. You may also object to use based on legitimate interests, and you may withdraw consent where consent was the basis. We may need to keep some records where a contract, dispute or legal duty requires it.
          </p>
          <p>
            To make a request, email{" "}
            <a href={`mailto:${email}`} className="font-mono text-vensai-electric hover:underline">
              {email}
            </a>
            . For a career application, you may also write to{" "}
            <a href={`mailto:${careersEmail}`} className="font-mono text-vensai-electric hover:underline">
              {careersEmail}
            </a>
            . Please use the same email address you used with us so we can locate the record. We will respond within the time the applicable law allows.
          </p>
          <p>
            Cookie choices are described in our{" "}
            <Link href="/cookies" className="text-vensai-electric hover:underline">
              Cookie Policy
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            10. Children
          </h2>
          <p>
            This website and our services are directed at businesses and adults seeking professional work. We do not knowingly collect information from children. If you believe a child has submitted information to us, contact us and we will delete it.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            11. Changes to this notice
          </h2>
          <p>
            We will update this page when our practices change. The date at the top shows when it was last revised. Continued use of the website after an update means the revised notice applies to new information collected after that date.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">
            12. Contact
          </h2>
          <p>
            Privacy questions can be sent to{" "}
            <a href={`mailto:${email}`} className="font-mono text-vensai-electric hover:underline">
              {email}
            </a>
            . The way you may use this website is set out in our{" "}
            <Link href="/terms-and-conditions" className="text-vensai-electric hover:underline">
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

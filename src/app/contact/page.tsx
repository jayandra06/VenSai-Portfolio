import React from "react";
import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Contact Vensai Labs | Start a Project, Dedicated Team or Consulting Inquiry",
  description:
    "Talk to Vensai Labs about your software, mobile, AI, cloud, cybersecurity, SAP/BI, e-commerce, branding, marketing or support requirement. NDA-ready consultation and end-to-end delivery.",
  path: "/contact",
  keywords: [
    "contact Vensai Labs",
    "hire dedicated software team",
    "request technology consultation",
    "e-commerce agency inquiry",
    "enterprise solutions partner contact",
  ],
});

export default function ContactPage() {
  const contactPageSchema = buildWebPageSchema({
    title:
      "Contact Vensai Labs | Start a Project, Dedicated Team or Consulting Inquiry",
    description:
      "Submit a project brief, dedicated specialist request, or technical consulting inquiry to Vensai Labs.",
    path: "/contact",
    type: "ContactPage",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactClient />
    </>
  );
}

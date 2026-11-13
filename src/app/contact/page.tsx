import React from "react";
import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";
import { buildPageMetadata } from "@/lib/seo";
import { buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Contact Vensai Labs | Start a Project, Dedicated Team or Consulting Inquiry",
  description:
    "Talk to Vensai Labs about software, vendorship, BPO, or non-IT work. NDA-ready consultation with scope and staffing outlined in plain language.",
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

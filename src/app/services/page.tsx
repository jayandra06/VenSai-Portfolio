import React from "react";
import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { buildWebPageSchema, ORG_ID } from "@/lib/schema";
import { SERVICE_CATEGORIES } from "@/data/vensai-data";

export const metadata: Metadata = buildPageMetadata({
  title:
    `${SERVICE_CATEGORIES.length} Technology, Operations & Creative Services | Vensai Labs`,
  description:
    "Explore Vensai Labs’ full-time practice areas: software, mobile, AI, cloud, cybersecurity, managed IT, KPO and BPO, internships, SAP/BI, e-commerce, consulting, brand, marketing and support.",
  path: "/services",
  keywords: [
    "enterprise technology services",
    "software engineering services",
    "cloud DevOps cybersecurity agency",
    "SAP BTP Power BI Tableau services",
    "e-commerce development agency",
    "full-service business solutions partner",
  ],
});

export default function ServicesDirectoryPage() {
  const pageSchema = buildWebPageSchema({
    title:
      `${SERVICE_CATEGORIES.length} Technology, Operations & Creative Services | Vensai Labs`,
    description:
      "Directory of Vensai Labs’ in-house practices across engineering, managed IT, KPO and BPO, internships, cybersecurity, commerce, consulting, brand and support.",
    path: "/services",
    type: "CollectionPage",
  });

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/services#catalog`,
    name: `Vensai Labs ${SERVICE_CATEGORIES.length} Practice Categories`,
    itemListElement: SERVICE_CATEGORIES.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${s.slug}#service`,
        name: s.title,
        description: s.overview,
        url: `${SITE_URL}/services/${s.slug}`,
        provider: {
          "@id": ORG_ID,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ServicesClient />
    </>
  );
}

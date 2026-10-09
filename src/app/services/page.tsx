import React from "react";
import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { buildWebPageSchema, ORG_ID } from "@/lib/schema";
import { SERVICE_CATEGORIES } from "@/data/vensai-data";

export const metadata: Metadata = buildPageMetadata({
  title:
    "13 Enterprise Technology, Commerce & Business Services | Vensai Labs",
  description:
    "Explore Vensai Labs’ 13 full-time practice areas: custom software engineering, mobile apps, AI/ML, cloud & DevOps, cybersecurity, SAP/BI, e-commerce, API integrations, consulting, branding, marketing, creative shoots and 24/7 support.",
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
      "13 Enterprise Technology, Commerce & Business Services | Vensai Labs",
    description:
      "Comprehensive directory of Vensai Labs’ 13 in-house service categories across engineering, cloud, AI, cybersecurity, enterprise technology, e-commerce, consulting, brand, growth and support.",
    path: "/services",
    type: "CollectionPage",
  });

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/services#catalog`,
    name: "Vensai Labs 13 Practice Categories",
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

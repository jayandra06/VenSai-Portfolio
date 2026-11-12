import { SITE_URL, SITE_NAME } from "./seo";
import { BRAND_CONFIG } from "@/data/vensai-data";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function buildRootGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: SITE_NAME,
        alternateName: BRAND_CONFIG.name,
        slogan: BRAND_CONFIG.tagline,
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/brand/vensai-logo-original.jpg`,
          contentUrl: `${SITE_URL}/brand/vensai-logo-original.jpg`,
          width: 1024,
          height: 724,
          caption: "Vensai Labs — People. Technology. Innovation.",
        },
        image: `${SITE_URL}/brand/vensai-logo-original.jpg`,
        legalName: BRAND_CONFIG.company.legalName,
        description:
          "VenSai Labs by Vijetha Softwares Pvt. Ltd. is a software company employing full-time experts across IT and non-IT: software engineering, mobile apps, AI/ML, cloud and DevOps, cybersecurity, enterprise technology, e-commerce, consulting, branding, marketing, KPO, BPO and support.",
        telephone: BRAND_CONFIG.contactPlaceholders.phone,
        email: BRAND_CONFIG.contactPlaceholders.email,
        areaServed: [
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "Germany" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Egypt" },
          { "@type": "Country", "name": "Italy" },
          { "@type": "Country", "name": "France" },
          { "@type": "Country", "name": "Netherlands" },
          { "@type": "Country", "name": "Spain" },
          { "@type": "Country", "name": "Sweden" },
          { "@type": "Country", "name": "Poland" },
          { "@type": "Country", "name": "Switzerland" },
          { "@type": "Country", "name": "Belgium" },
          { "@type": "Country", "name": "Ireland" },
          { "@type": "Country", "name": "Norway" },
          { "@type": "Country", "name": "Denmark" },
          { "@type": "Country", "name": "Finland" },
          { "@type": "Country", "name": "Austria" },
          { "@type": "City", "name": "Dubai" },
          { "@type": "City", "name": "Abu Dhabi" },
          { "@type": "City", "name": "Rome" },
          { "@type": "City", "name": "London" },
          { "@type": "City", "name": "Visakhapatnam" },
          { "@type": "City", "name": "Hyderabad" },
        ],
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
        ],
        parentOrganization: {
          "@type": "Organization",
          name: BRAND_CONFIG.company.legalName,
          taxID: BRAND_CONFIG.company.cin,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales and client inquiries",
            telephone: BRAND_CONFIG.contactPlaceholders.phone,
            email: BRAND_CONFIG.contactPlaceholders.email,
            url: `${SITE_URL}/contact`,
            availableLanguage: ["English", "Hindi", "Telugu"],
            areaServed: ["IN", "US", "GB", "CA", "AU", "AE", "EG", "IT", "DE"],
          },
          {
            "@type": "ContactPoint",
            contactType: "technical consulting and feasibility",
            email: BRAND_CONFIG.contactPlaceholders.consultingEmail,
            url: `${SITE_URL}/solutions/consulting`,
            availableLanguage: ["English"],
            areaServed: ["US", "GB", "CA", "AU", "AE", "DE", "IT", "EG", "IN"],
          },
          {
            "@type": "ContactPoint",
            contactType: "careers and internships",
            email: BRAND_CONFIG.contactPlaceholders.careersEmail,
            url: `${SITE_URL}/careers`,
            availableLanguage: ["English", "Hindi"],
            areaServed: ["IN", "AE", "GB"],
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/vensailabs",
        ],
        knowsAbout: [
          "Software & Product Engineering",
          "Mobile Application Development",
          "Artificial Intelligence & Machine Learning",
          "Cloud Computing, DevOps & Infrastructure",
          "Cybersecurity & Penetration Testing",
          "Enterprise Technology (SAP BTP, Power BI, Tableau)",
          "E-Commerce Solutions (Shopify, WooCommerce, BigCommerce, Odoo)",
          "API Integrations & Business Workflow Automation",
          "Technical Consulting, Audits & Feasibility Research",
          "Brand Strategy & UI/UX Product Design",
          "SEO & Performance Marketing",
          "Commercial Creative Production & Product Photography",
          "Customer Service, Technical Helpdesk & Post-Deployment Support",
          "IT Management & High Availability",
          "KPO & BPO Operations",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description:
          "Technology, Talent & Solutions for Businesses Ready to Build and Scale. One Business Partner. Multiple Capabilities. End-to-End Delivery.",
        publisher: {
          "@id": ORG_ID,
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export function buildWebPageSchema({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");
  const pageUrl = `${SITE_URL}${normalizedPath || "/"}`;

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORG_ID,
    },
    publisher: {
      "@id": ORG_ID,
    },
    inLanguage: "en-US",
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  category,
  capabilities,
  deliverables,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
  capabilities: string[];
  deliverables?: string[];
}) {
  const normalizedPath = path.replace(/\/$/, "");
  const pageUrl = `${SITE_URL}${normalizedPath}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name,
    url: pageUrl,
    description,
    category,
    provider: {
      "@id": ORG_ID,
    },
    serviceType: capabilities,
    ...(deliverables && deliverables.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${name} Deliverables & Capabilities`,
            itemListElement: deliverables.map((item, idx) => ({
              "@type": "Offer",
              position: idx + 1,
              itemOffered: {
                "@type": "Service",
                name: item,
              },
            })),
          },
        }
      : {}),
  };
}

export function buildInsightsSchema(
  articles: {
    id: string;
    category: string;
    title: string;
    summary: string;
    keyTakeaways: string[];
  }[]
) {
  const pageUrl = `${SITE_URL}/insights`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Insights, Technical Research & Architecture Briefings | Vensai Labs",
        description:
          "Executive briefings, technical feasibility frameworks, e-commerce ecosystem guides and delivery blueprints from Vensai Labs.",
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#articles`,
        itemListElement: articles.map((art, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "TechArticle",
            "@id": `${pageUrl}#${art.id}`,
            headline: art.title,
            description: art.summary,
            articleSection: art.category,
            url: `${pageUrl}#${art.id}`,
            author: {
              "@id": ORG_ID,
            },
            publisher: {
              "@id": ORG_ID,
            },
            about: art.keyTakeaways,
            inLanguage: "en-US",
          },
        })),
      },
    ],
  };
}

export function buildFaqSchema(
  faqs: { question: string; answer: string }[],
  path = "/"
) {
  const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");
  const pageUrl = `${SITE_URL}${normalizedPath || "/"}`;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}


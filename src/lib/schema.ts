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
          caption: "Vensai Labs — Freelance Talent. Real Solutions.",
        },
        image: `${SITE_URL}/brand/vensai-logo-original.jpg`,
        description:
          "Vensai Labs is a full-service freelancing agency and business solutions consultancy employing full-time professional teams across software engineering, mobile apps, AI/ML, cloud & DevOps, cybersecurity, enterprise technology, e-commerce, consulting, branding, marketing and post-deployment support.",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales and client inquiries",
            email: BRAND_CONFIG.contactPlaceholders.email,
            url: `${SITE_URL}/contact`,
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            contactType: "technical consulting and feasibility",
            email: BRAND_CONFIG.contactPlaceholders.consultingEmail,
            url: `${SITE_URL}/solutions/consulting`,
            availableLanguage: ["English"],
          },
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


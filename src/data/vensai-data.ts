export interface ServiceCategory {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  categoryGroup: "Technology & Engineering" | "Enterprise & Commerce" | "Consulting & Operations" | "Brand, Growth & Creative";
  tagline: string;
  overview: string;
  whatWeDo: string[];
  capabilities: string[];
  subCapabilities?: {
    title: string;
    items: string[];
  };
  useCases: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  engagementModels: string[];
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  summary: string;
  details: string;
  outputs: string[];
}

export interface EngagementModel {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  idealFor: string[];
  included: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  summary: string;
  challengesAddressed: string[];
  relevantCapabilities: string[];
}

export interface TechGroup {
  category:
    | "Frontend"
    | "Backend"
    | "Mobile"
    | "Cloud"
    | "DevOps"
    | "AI/ML"
    | "Data"
    | "Enterprise"
    | "E-commerce"
    | "Databases"
    | "Security"
    | "Analytics";
  description: string;
  technologies: {
    name: string;
    focus: string;
  }[];
}

export interface CaseStudyBlueprint {
  id: string;
  code: string;
  title: string;
  clientIndustry: string;
  engagementModel: string;
  challenge: string;
  approach: string;
  solution: string;
  technologies: string[];
  outcome: string;
}

export const BRAND_CONFIG = {
  name: "VENSAI LABS",
  shortName: "Vensai Labs",
  tagline: "FREELANCE TALENT. REAL SOLUTIONS.",
  statement: "BUILD • DESIGN • AUTOMATE • SCALE.",
  statementPipe: "BUILD | DESIGN | AUTOMATE | SCALE",
  pillars: [
    "ONE BUSINESS PARTNER.",
    "MULTIPLE CAPABILITIES.",
    "END-TO-END DELIVERY.",
  ],
  coreProposition:
    "Whatever your business needs — technology, software, e-commerce, cybersecurity, cloud, AI, enterprise systems, branding, marketing, research or operational support — Vensai brings the right expertise together and manages the engagement from requirement to delivery.",
  contactPlaceholders: {
    email: "contact@vensailabs.com",
    consultingEmail: "consulting@vensailabs.com",
    careersEmail: "careers@vensailabs.com",
    phone: "+1 (000) 000-0000 / +91 00000 00000",
    whatsapp: "+91 00000 00000",
    locations: "Global Delivery Operations • Remote & On-Site Client Engagement",
    hours: "Monday – Saturday | 24/7 Managed Support Operations Available",
  },
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "cat-01",
    number: "01",
    slug: "software-development",
    title: "Software & Product Engineering",
    shortTitle: "Software & Product",
    categoryGroup: "Technology & Engineering",
    tagline: "Custom software systems, web applications, SaaS platforms and internal business tools engineered for reliability.",
    overview:
      "Vensai designs, architects and builds production-grade software tailored to how your organization operates. Our full-time engineering teams manage everything from requirement analysis and system architecture to backend engineering, API design, deployment and ongoing maintenance.",
    whatWeDo: [
      "Architect and build scalable web applications and multi-tenant SaaS products",
      "Develop custom CRM, ERP and operational management systems around real business workflows",
      "Engineer Windows/Desktop applications and mission-critical internal enterprise utilities",
      "Build high-throughput backend systems, microservices and secure REST/GraphQL APIs",
    ],
    capabilities: [
      "Web development",
      "Web applications",
      "SaaS",
      "Custom software",
      "Windows/Desktop applications",
      "Enterprise applications",
      "API development",
      "Backend systems",
      "CRM",
      "ERP",
      "Business applications",
      "Internal tools",
      "Automation software",
    ],
    useCases: [
      {
        title: "Custom Operational ERP & CRM Platforms",
        description: "Replacing disconnected spreadsheets and rigid off-the-shelf software with unified business platforms built around your exact operational rules.",
      },
      {
        title: "Commercial SaaS Product Engineering",
        description: "Taking a new software product from technical specification and architecture to full multi-tenant launch and post-deployment evolution.",
      },
      {
        title: "Desktop & Field-Operations Software",
        description: "Building resilient Windows and cross-platform desktop applications for manufacturing, logistics, laboratory or offline-capable environments.",
      },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", ".NET / C#", "Java", "Go", "PostgreSQL", "GraphQL", "Electron / .NET WPF"],
    engagementModels: ["Project Based", "Dedicated Team", "Dedicated Resource", "Post-Deployment Support"],
    deliverables: ["System Architecture Specification", "Production Source Code & Repositories", "Automated Test Suites & API Documentation", "Deployment Runbooks & Support Handover"],
  },
  {
    id: "cat-02",
    number: "02",
    slug: "mobile-development",
    title: "Mobile Applications",
    shortTitle: "Mobile Applications",
    categoryGroup: "Technology & Engineering",
    tagline: "Native and cross-platform mobile applications built for customer engagement, commerce and workforce mobility.",
    overview:
      "Our mobile engineering teams deliver responsive, secure and maintainable applications across Android and iOS. Whether your business needs a consumer-facing commerce app, a field-service workforce platform or an integrated companion app, Vensai handles design, mobile backend engineering, store deployment and lifecycle maintenance.",
    whatWeDo: [
      "Develop native Android and iOS applications as well as unified Flutter and React Native apps",
      "Engineer resilient mobile backends, real-time synchronization and secure API integrations",
      "Manage Apple App Store and Google Play compliance, release pipelines and version rollouts",
      "Provide continuous OS compatibility updates, crash monitoring and feature enhancements",
    ],
    capabilities: [
      "Android",
      "iOS",
      "Flutter",
      "React Native",
      "Cross-platform applications",
      "Mobile backend",
      "API integrations",
      "App deployment",
      "Maintenance",
    ],
    useCases: [
      {
        title: "Customer Commerce & Loyalty Apps",
        description: "High-conversion mobile storefronts synchronized with inventory, payment gateways, push notifications and order tracking.",
      },
      {
        title: "Field Workforce & Logistics Applications",
        description: "Mobile tools for fleet drivers, inspectors and field engineers with geolocation, barcode scanning and offline-first data sync.",
      },
      {
        title: "Enterprise Companion Portals",
        description: "Secure executive approvals, real-time alerts and operational dashboards accessible on iOS and Android devices.",
      },
    ],
    technologies: ["Flutter", "React Native", "Swift / iOS", "Kotlin / Android", "Node.js", "Firebase", "REST / GraphQL APIs", "SQLite / Realm"],
    engagementModels: ["Project Based", "Dedicated Team", "Dedicated Resource", "Post-Deployment Support"],
    deliverables: ["UI/UX Mobile Prototypes", "iOS & Android Production Binaries", "Mobile Backend & API Layer", "App Store & Play Store Publishing & Maintenance"],
  },
  {
    id: "cat-03",
    number: "03",
    slug: "ai-ml",
    title: "AI & Machine Learning",
    shortTitle: "AI & Machine Learning",
    categoryGroup: "Technology & Engineering",
    tagline: "Practical, governed AI systems, LLM integrations, RAG pipelines and predictive analytics built for real business outcomes.",
    overview:
      "We focus on practical AI implementation rather than hype. Vensai helps organizations integrate Large Language Models, retrieval-augmented generation (RAG), computer vision and predictive machine learning directly into existing software, customer workflows and internal knowledge systems with full MLOps governance.",
    whatWeDo: [
      "Design and deploy domain-specific RAG systems over private enterprise documents and databases",
      "Build AI agents and workflow automation tools integrated with CRM, ERP and support desks",
      "Develop computer vision and predictive analytics models for quality control, forecasting and risk",
      "Implement MLOps pipelines for model deployment, latency optimization, guardrails and monitoring",
    ],
    capabilities: [
      "AI applications",
      "LLM integration",
      "AI agents",
      "RAG systems",
      "Machine learning",
      "Computer vision",
      "Predictive analytics",
      "AI automation",
      "MLOps",
      "Model deployment",
      "Model monitoring",
    ],
    useCases: [
      {
        title: "Enterprise Knowledge & Document Intelligence (RAG)",
        description: "Securely querying technical manuals, contracts, SOPs and tickets with source citations and role-based access control.",
      },
      {
        title: "Intelligent Process & Support Automation",
        description: "AI agents that triage incoming inquiries, extract structured data from invoices/documents and trigger operational workflows.",
      },
      {
        title: "Demand Forecasting & Computer Vision",
        description: "Predictive models for inventory planning, anomaly detection and automated visual inspection.",
      },
    ],
    technologies: ["Python", "PyTorch", "OpenAI / Anthropic / Gemini APIs", "LangChain / LlamaIndex", "Vector Databases", "FastAPI", "OpenCV", "Docker / Kubernetes"],
    engagementModels: ["Consulting", "Project Based", "Dedicated Team", "Managed Services"],
    deliverables: ["AI Feasibility & Data Readiness Report", "Trained / Fine-Tuned Models & RAG Pipelines", "API Microservices & Safety Guardrails", "MLOps Monitoring Dashboard"],
  },
  {
    id: "cat-04",
    number: "04",
    slug: "cloud-devops",
    title: "Cloud, DevOps & Infrastructure",
    shortTitle: "Cloud & DevOps",
    categoryGroup: "Technology & Engineering",
    tagline: "Resilient cloud architecture, automated CI/CD pipelines, container orchestration and 24/7 production reliability.",
    overview:
      "Modern applications require dependable, cost-optimized infrastructure. Vensai’s cloud architects and DevOps engineers design, migrate, automate and support cloud environments across AWS, Microsoft Azure and Google Cloud—ensuring high availability, rapid release cycles and proactive observability.",
    whatWeDo: [
      "Architect and execute seamless cloud migrations from on-premise or legacy hosting to AWS, Azure and GCP",
      "Containerize applications using Docker and Kubernetes with automated scaling and zero-downtime deployments",
      "Build Infrastructure-as-Code (IaC) and automated CI/CD release pipelines with embedded security checks",
      "Provide continuous observability, cloud cost optimization, performance tuning and production support",
    ],
    capabilities: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Cloud migration",
      "Infrastructure automation",
      "Monitoring",
      "Deployment",
      "Performance optimization",
      "Production support",
    ],
    useCases: [
      {
        title: "Legacy-to-Cloud Modernization",
        description: "Re-platforming monolithic applications into resilient cloud infrastructure with automated backups and disaster recovery.",
      },
      {
        title: "Automated CI/CD & Release Engineering",
        description: "Eliminating manual deployment bottlenecks with repeatable, auditable build, test and release pipelines.",
      },
      {
        title: "High-Traffic Commerce & SaaS Scaling",
        description: "Configuring auto-scaling Kubernetes clusters, CDN caching and database read-replicas for peak load events.",
      },
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform", "GitHub Actions / GitLab CI", "Prometheus & Grafana", "Linux / Nginx"],
    engagementModels: ["Managed Services", "Project Based", "Dedicated Resource", "Consulting"],
    deliverables: ["Cloud Architecture Blueprints", "Terraform / IaC Repositories", "CI/CD Pipelines & Runbooks", "Observability, Alerting & SLA Support"],
  },
  {
    id: "cat-05",
    number: "05",
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    categoryGroup: "Technology & Engineering",
    tagline: "Defensive security assessments, authorized penetration testing, infrastructure hardening and compliance readiness.",
    overview:
      "Security cannot be an afterthought as businesses digitize operations and connect third-party systems. Vensai’s cybersecurity specialists conduct thorough vulnerability assessments, authorized penetration testing, application and API security reviews, and cloud hardening to protect your critical assets.",
    whatWeDo: [
      "Conduct comprehensive security assessments and authorized penetration testing across web, mobile and API surfaces",
      "Audit cloud configurations (AWS, Azure, GCP) and network infrastructure to eliminate misconfigurations",
      "Perform source-code security reviews, dependency auditing and server/endpoint security hardening",
      "Support enterprise security governance, remediation validation and compliance readiness initiatives",
    ],
    capabilities: [
      "Security assessments",
      "Vulnerability assessments",
      "Authorized penetration testing",
      "Web application security",
      "API security",
      "Cloud security",
      "Infrastructure security",
      "Security hardening",
      "Security audits",
      "Compliance support",
    ],
    useCases: [
      {
        title: "Pre-Launch Application & API Penetration Testing",
        description: "Identifying authentication flaws, injection vectors and business-logic vulnerabilities before critical releases go live.",
      },
      {
        title: "Cloud & Infrastructure Security Hardening",
        description: "Locking down IAM permissions, network segmentation, secrets management and encryption across hybrid environments.",
      },
      {
        title: "Vendor & Compliance Security Readiness",
        description: "Preparing technical controls, audit documentation and remediation verification for enterprise client security reviews.",
      },
    ],
    technologies: ["OWASP Top 10 Methodology", "Burp Suite", "Cloud Security Posture Review", "Static & Dynamic Code Analysis", "IAM & Zero-Trust Controls", "WAF & SIEM Integration"],
    engagementModels: ["Consulting", "Project Based", "Managed Services"],
    deliverables: ["Executive & Technical Vulnerability Report", "Prioritized Remediation Roadmap", "Hardened Configuration Policies", "Re-Testing & Verification Sign-off"],
  },
  {
    id: "cat-06",
    number: "06",
    slug: "enterprise",
    title: "Enterprise Technology",
    shortTitle: "Enterprise Systems",
    categoryGroup: "Enterprise & Commerce",
    tagline: "SAP BTP extensions, enterprise data integration, executive business intelligence and cross-system automation.",
    overview:
      "Large and mid-market organizations rely on complex enterprise backbones. Vensai provides specialized teams for SAP Business Technology Platform (SAP BTP), enterprise data warehousing, and executive analytics across Power BI and Tableau—bridging core ERP data with modern operational agility.",
    whatWeDo: [
      "Develop extensions, integrations and custom workflows on SAP Business Technology Platform (SAP BTP)",
      "Design executive dashboards, financial reporting and operational analytics in Power BI and Tableau",
      "Unify fragmented data sources across ERP, CRM, supply chain and finance into governed data pipelines",
      "Automate multi-department enterprise processes to reduce manual reconciliation and reporting delays",
    ],
    capabilities: [
      "SAP BTP",
      "Enterprise integrations",
      "Power BI",
      "Tableau",
      "Data integration",
      "Business intelligence",
      "Enterprise automation",
      "Custom enterprise solutions",
    ],
    useCases: [
      {
        title: "SAP BTP Extension & Integration Engineering",
        description: "Keeping the core ERP clean while building custom supplier portals, approval workflows and side-by-side extensions on SAP BTP.",
      },
      {
        title: "Executive BI & Unified Data Reporting",
        description: "Consolidating multi-subsidiary financial, inventory and sales metrics into automated Power BI and Tableau decision cockpits.",
      },
      {
        title: "Cross-System Enterprise Automation",
        description: "Connecting procurement, warehouse, finance and HR platforms for real-time data consistency.",
      },
    ],
    technologies: ["SAP BTP", "SAP Integration Suite", "Microsoft Power BI", "Tableau", "SQL Server / Snowflake", "Azure Data Factory", "OData / REST / SOAP"],
    engagementModels: ["Dedicated Resource", "Dedicated Team", "Project Based", "Consulting"],
    deliverables: ["Enterprise Integration Architecture", "SAP BTP Applications & Connectors", "Interactive Power BI / Tableau Models", "Data Governance & Maintenance Support"],
  },
  {
    id: "cat-07",
    number: "07",
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce Solutions",
    categoryGroup: "Enterprise & Commerce",
    tagline: "End-to-end digital commerce ecosystems—from Shopify, WooCommerce, BigCommerce and Odoo to ERP integrations and product photography.",
    overview:
      "Successful digital commerce requires more than a storefront template. Vensai delivers complete commerce ecosystems: store architecture and custom development across Shopify, WooCommerce, BigCommerce, Odoo and custom headless stacks, deeply integrated with payments, shipping, ERP, CRM and inventory—backed by in-house product photography, catalog production and post-launch support.",
    whatWeDo: [
      "Design and build high-converting stores on Shopify, WooCommerce, BigCommerce, Odoo and custom commerce architectures",
      "Integrate payment gateways, multi-carrier shipping, ERP, CRM and multi-warehouse inventory systems",
      "Produce studio-grade product photography, catalog visuals, promotional videos and optimized listing content",
      "Automate order fulfillment, returns, customer notifications and post-launch store operations",
    ],
    capabilities: [
      "Shopify",
      "WooCommerce",
      "BigCommerce",
      "Odoo",
      "Custom e-commerce",
      "Marketplace solutions",
      "Store development",
      "Theme customization",
      "Payment integrations",
      "Shipping integrations",
      "ERP integrations",
      "CRM integrations",
      "Inventory integrations",
      "E-commerce automation",
    ],
    subCapabilities: {
      title: "E-Commerce Creative & Catalog Services",
      items: [
        "Product photography",
        "Catalog photography",
        "Product images",
        "Product videos",
        "Product listing content",
        "Creative production",
      ],
    },
    useCases: [
      {
        title: "D2C & B2B Omnichannel Store Launches",
        description: "End-to-end store design, custom theme engineering, catalog photography and checkout optimization for growing brands.",
      },
      {
        title: "ERP-Connected Commerce & Odoo Retail Systems",
        description: "Two-way synchronization between online storefronts, physical POS, warehouse inventory and accounting systems.",
      },
      {
        title: "Multi-Vendor Marketplaces & Custom Commerce",
        description: "Bespoke marketplace platforms with vendor onboarding, split payouts, custom pricing rules and automated logistics.",
      },
    ],
    technologies: ["Shopify / Shopify Plus", "WooCommerce", "BigCommerce", "Odoo Commerce & ERP", "Next.js Headless Commerce", "Stripe / Razorpay / PayPal", "Shiprocket / FedEx / DHL APIs"],
    engagementModels: ["Project Based", "Managed Services", "Dedicated Team", "Post-Deployment Support"],
    deliverables: ["Production E-Commerce Storefront", "Payment, Shipping & ERP Sync Engine", "Studio Product Catalog & Listing Assets", "Ongoing Conversion & Operations Support"],
  },
  {
    id: "cat-08",
    number: "08",
    slug: "integrations",
    title: "Integrations & Automation",
    shortTitle: "Integrations & Automation",
    categoryGroup: "Enterprise & Commerce",
    tagline: "Custom middleware, API orchestration and business workflow automation connecting every system your company runs on.",
    overview:
      "Disconnected software creates manual work, data errors and operational blind spots. Vensai engineers custom middleware, webhook orchestrations and bi-directional API integrations that connect your ERP, CRM, e-commerce, payment gateways, WhatsApp, email, accounting and logistics platforms into a single synchronized operation.",
    whatWeDo: [
      "Engineer custom API connectors and resilient middleware between legacy systems and modern SaaS platforms",
      "Integrate payment gateways, shipping carriers, accounting suites, ERP and CRM platforms",
      "Automate customer and operational communications across WhatsApp Business API, email and SMS triggers",
      "Eliminate manual data re-entry with real-time data synchronization, error handling and audit logging",
    ],
    capabilities: [
      "API integrations",
      "Payment gateway integrations",
      "ERP integrations",
      "CRM integrations",
      "E-commerce integrations",
      "WhatsApp integrations",
      "Email integrations",
      "Accounting integrations",
      "Shipping integrations",
      "Third-party SaaS integrations",
      "Custom middleware",
      "Data synchronization",
      "Business workflow automation",
    ],
    useCases: [
      {
        title: "Order-to-Cash & Accounting Synchronization",
        description: "Automatically syncing e-commerce and sales orders with inventory, shipping labels, invoicing and accounting ledgers.",
      },
      {
        title: "WhatsApp & Omnichannel Workflow Automation",
        description: "Triggering automated order updates, payment links, service tickets and CRM status changes via WhatsApp and email APIs.",
      },
      {
        title: "Custom Middleware for Legacy & Modern Systems",
        description: "Building secure translation layers that allow on-premise databases and ERPs to communicate with modern web and mobile apps.",
      },
    ],
    technologies: ["REST / GraphQL / Webhooks", "Node.js / Python Middleware", "WhatsApp Business API", "SAP / Odoo / Tally / Zoho / QuickBooks APIs", "Salesforce / HubSpot APIs", "Message Queues (RabbitMQ / Redis)"],
    engagementModels: ["Project Based", "Dedicated Resource", "Managed Services"],
    deliverables: ["Integration Architecture & Data Mapping", "Custom Middleware & Webhook Services", "Automated Retry & Dead-Letter Monitoring", "Documentation & Maintenance Support"],
  },
  {
    id: "cat-09",
    number: "09",
    slug: "consulting",
    title: "Technical Consulting & R&D",
    shortTitle: "Consulting & R&D",
    categoryGroup: "Consulting & Operations",
    tagline: "Independent technical feasibility studies, architecture reviews, code/cloud audits and strategic digital transformation roadmaps.",
    overview:
      "Before committing significant capital to a complex build, migration or transformation, businesses need clear, objective technical answers. Vensai’s consulting and R&D practice conducts deep technical feasibility assessments, architecture reviews, code and infrastructure audits, and proof-of-concept research so leadership can move forward with certainty.",
    whatWeDo: [
      "Evaluate project and technical feasibility for new product concepts, complex integrations and R&D initiatives",
      "Perform comprehensive code audits, architecture reviews, database performance audits and scalability assessments",
      "Audit cloud environments and security postures to identify cost leakage, bottlenecks and operational risks",
      "Guide technology selection, vendor evaluation and phased digital transformation roadmaps",
    ],
    capabilities: [
      "Technical feasibility",
      "Project feasibility",
      "Technology research",
      "Architecture consulting",
      "Technical audits",
      "Code audits",
      "Infrastructure audits",
      "Security reviews",
      "Performance audits",
      "Cloud audits",
      "Scalability assessments",
      "Technology selection",
      "Digital transformation consulting",
    ],
    useCases: [
      {
        title: "Pre-Investment Technical Feasibility & R&D",
        description: "Validating whether an ambitious product or automation concept is technically viable, estimating realistic costs and building working PoCs.",
      },
      {
        title: "Software Rescue, Code & Performance Audits",
        description: "Diagnosing why an existing system is slow, unstable or difficult to scale—and delivering a concrete remediation plan.",
      },
      {
        title: "Enterprise Digital Transformation Roadmapping",
        description: "Auditing current legacy processes and defining a phased, low-risk modernization sequence across teams and systems.",
      },
    ],
    technologies: ["System Architecture Modeling", "Static & Dynamic Code Auditing", "Load & Stress Benchmarking", "Cloud Cost & Well-Architected Reviews", "R&D Proof-of-Concept Engineering"],
    engagementModels: ["Consulting", "Project Based", "Dedicated Resource"],
    deliverables: ["Feasibility & Risk Assessment Dossier", "Target State Architecture Blueprints", "Code, Cloud & Performance Audit Report", "Phased Implementation & Budget Roadmap"],
  },
  {
    id: "cat-10",
    number: "10",
    slug: "branding",
    title: "Brand & Digital",
    shortTitle: "Brand & Digital",
    categoryGroup: "Brand, Growth & Creative",
    tagline: "Strategic brand positioning, visual identity systems, enterprise UI/UX design and high-impact digital experiences.",
    overview:
      "How your business looks and how your digital products feel directly shape market trust. Vensai’s brand strategists and UI/UX designers create cohesive visual identities, design systems, software interfaces and corporate websites that communicate clarity, authority and usability.",
    whatWeDo: [
      "Define brand strategy, market positioning, naming and comprehensive visual identity guidelines",
      "Design intuitive UI/UX for complex web applications, SaaS platforms, mobile apps and enterprise dashboards",
      "Craft modern corporate websites and digital commerce experiences focused on clarity and conversion",
      "Produce cohesive marketing collateral, pitch decks and social media creative systems",
    ],
    capabilities: [
      "Brand strategy",
      "Brand positioning",
      "Brand identity",
      "Naming",
      "Visual identity",
      "UI/UX",
      "Product design",
      "Website design",
      "Marketing creatives",
      "Social media creatives",
    ],
    useCases: [
      {
        title: "Corporate Rebranding & Visual Identity Systems",
        description: "Establishing a mature, cohesive brand language across logos, typography, color systems and executive communications.",
      },
      {
        title: "Product UI/UX & Design System Engineering",
        description: "Transforming complex software workflows into clean, accessible interfaces backed by reusable component libraries.",
      },
      {
        title: "Enterprise Website & Digital Presence",
        description: "Designing authoritative multi-page digital experiences that articulate complex business capabilities clearly.",
      },
    ],
    technologies: ["Figma", "Design Systems & Token Architecture", "Interactive Prototyping", "Information Architecture", "Usability & Accessibility Standards (WCAG)"],
    engagementModels: ["Project Based", "Dedicated Resource", "Dedicated Team"],
    deliverables: ["Brand Identity Guidelines & Asset Kit", "Interactive Figma UI/UX Design Systems", "Responsive Website & Product Interfaces", "Campaign & Social Creative Templates"],
  },
  {
    id: "cat-11",
    number: "11",
    slug: "marketing",
    title: "Marketing & Growth",
    shortTitle: "Marketing & Growth",
    categoryGroup: "Brand, Growth & Creative",
    tagline: "Data-driven search visibility, performance marketing, conversion optimization and measurable pipeline growth.",
    overview:
      "Once your technology, brand and commerce platforms are in place, Vensai helps you acquire and convert customers systematically. Our marketing and growth specialists execute technical SEO, paid digital advertising, content strategy, marketing automation and analytics tracking aligned with real commercial KPIs.",
    whatWeDo: [
      "Execute technical and content SEO strategies that build sustainable organic search visibility",
      "Manage targeted performance marketing and digital advertising across search, social and display channels",
      "Implement marketing automation, lead nurturing workflows and CRM attribution tracking",
      "Conduct conversion rate optimization (CRO) and funnel analytics to maximize return on ad spend",
    ],
    capabilities: [
      "SEO",
      "Social media marketing",
      "Performance marketing",
      "Digital advertising",
      "Content strategy",
      "Lead generation",
      "Marketing automation",
      "Conversion optimization",
      "Analytics",
    ],
    useCases: [
      {
        title: "B2B Lead Generation & Pipeline Automation",
        description: "Combining search intent, authoritative content, targeted campaigns and CRM automation to generate qualified commercial inquiries.",
      },
      {
        title: "E-Commerce Performance & ROAS Scaling",
        description: "Full-funnel paid acquisition, catalog feed optimization, retargeting and checkout conversion improvements.",
      },
      {
        title: "Technical SEO & Analytics Attribution",
        description: "Fixing site architecture, core web vitals, schema markup and multi-touch analytics tracking.",
      },
    ],
    technologies: ["Google Analytics 4 & Tag Manager", "Google Search Console & Technical SEO", "Google Ads & Meta Ads Manager", "LinkedIn B2B Campaigns", "HubSpot / Klaviyo / Marketing Automation"],
    engagementModels: ["Managed Services", "Dedicated Resource", "Project Based"],
    deliverables: ["Technical SEO & Growth Roadmap", "Managed Ad Campaigns & Creative Testing", "Marketing Automation Workflows", "Monthly Attribution & Conversion Reporting"],
  },
  {
    id: "cat-12",
    number: "12",
    slug: "creative-production",
    title: "Creative Production",
    shortTitle: "Creative Production",
    categoryGroup: "Brand, Growth & Creative",
    tagline: "Commercial advertising shoots, brand films, studio e-commerce photography and promotional video production.",
    overview:
      "Authentic, high-production visual assets set serious brands apart from generic stock imagery. Vensai manages end-to-end creative production—including commercial advertising shoots, corporate brand shoots, high-volume e-commerce product photography, promotional videos and campaign creatives.",
    whatWeDo: [
      "Plan, direct and execute commercial advertising shoots, corporate brand films and product shoots",
      "Deliver high-volume studio e-commerce photography, lifestyle imagery and 360/video product assets",
      "Produce promotional videos, explainer videos and high-impact campaign creatives for digital launches",
      "Handle post-production, color grading, retouching and multi-format formatting for web, marketplace and social platforms",
    ],
    capabilities: [
      "Advertising shoots",
      "Brand shoots",
      "Product shoots",
      "E-commerce photography",
      "Promotional videos",
      "Product videos",
      "Campaign creatives",
      "Social media content",
    ],
    useCases: [
      {
        title: "E-Commerce Catalog & Product Studio Production",
        description: "Consistent, high-resolution product photography and short-form product videos compliant with Shopify, Amazon and marketplace standards.",
      },
      {
        title: "Corporate Brand & Facility Shoots",
        description: "Showcasing real teams, manufacturing facilities, offices and leadership for enterprise websites and investor communications.",
      },
      {
        title: "Campaign & Launch Video Production",
        description: "End-to-end scripting, shooting and post-production for product launches and digital advertising campaigns.",
      },
    ],
    technologies: ["Studio Lighting & Cinema Camera Systems", "Adobe Premiere Pro & After Effects", "DaVinci Resolve Color Grading", "Capture One & Photoshop Retouching", "Multi-Platform Marketplace Asset Specs"],
    engagementModels: ["Project Based", "Dedicated Team", "Managed Services"],
    deliverables: ["High-Resolution Retouched Photography", "Master & Social-Cut Promotional Videos", "Marketplace-Ready Product Visuals", "Campaign Creative Asset Library"],
  },
  {
    id: "cat-13",
    number: "13",
    slug: "support",
    title: "Customer & Operational Support",
    shortTitle: "Customer & Ops Support",
    categoryGroup: "Consulting & Operations",
    tagline: "Dedicated technical support, omnichannel customer service, order operations and post-deployment management.",
    overview:
      "Delivery does not end at launch. Vensai provides trained, full-time operational and technical support professionals who manage customer service across chat and voice, handle technical troubleshooting and ticket escalation, oversee e-commerce order support, and maintain your systems post-deployment.",
    whatWeDo: [
      "Provide omnichannel customer service across live chat, voice, email and helpdesk ticketing platforms",
      "Deliver L1/L2/L3 technical support, bug triage, escalation management and post-deployment application maintenance",
      "Manage e-commerce order support, shipment tracking inquiries, returns processing and complaint resolution",
      "Operate under defined SLAs, quality assurance frameworks and escalation workflows integrated with your internal teams",
    ],
    capabilities: [
      "Chat support",
      "Voice support",
      "Customer service",
      "Technical support",
      "Ticket management",
      "Order support",
      "Complaint handling",
      "Escalation management",
      "Post-deployment support",
    ],
    useCases: [
      {
        title: "Post-Deployment Software & Technical Support Desk",
        description: "Continuous application monitoring, user troubleshooting, ticket resolution and minor enhancement releases after software launch.",
      },
      {
        title: "Omnichannel Customer & Order Support Operations",
        description: "Dedicated chat, voice and email support teams handling customer inquiries, order status and issue resolution.",
      },
      {
        title: "Managed Escalation & Back-Office Operations",
        description: "Structured SLA-driven ticket management and operational coordination for growing digital businesses.",
      },
    ],
    technologies: ["Zendesk / Freshdesk / Intercom", "Jira Service Management", "Cloud Telephony & Voice Systems", "CRM & Order Management Portals", "SLA & QA Monitoring Dashboards"],
    engagementModels: ["Managed Services", "Post-Deployment Support", "Dedicated Resource", "Dedicated Team"],
    deliverables: ["SOPs & Escalation Playbooks", "Dedicated Chat, Voice & Technical Support Agents", "Ticket Resolution & SLA Compliance Reports", "Continuous Post-Launch System Maintenance"],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    phase: "DISCOVER",
    title: "Understand the business and requirement.",
    summary: "Understand the business and requirement.",
    details:
      "We begin by listening carefully to your commercial objectives, operational bottlenecks, existing systems and stakeholder expectations—ensuring we solve the right business problem.",
    outputs: ["Requirement Brief", "Stakeholder Alignment", "Success Criteria"],
  },
  {
    number: "02",
    phase: "RESEARCH",
    title: "Study technology, business requirements and available approaches.",
    summary: "Study technology, business requirements and available approaches.",
    details:
      "Our domain consultants and architects analyze industry workflows, platform options, integration touchpoints and regulatory or security considerations.",
    outputs: ["Approach Comparison", "Platform Analysis", "Integration Map"],
  },
  {
    number: "03",
    phase: "ASSESS",
    title: "Evaluate feasibility, risks, dependencies and resources.",
    summary: "Evaluate feasibility, risks, dependencies and resources.",
    details:
      "We validate technical feasibility, identify third-party dependencies, surface potential operational risks early, and determine the exact multidisciplinary skills required.",
    outputs: ["Feasibility Assessment", "Risk Register", "Resource Matrix"],
  },
  {
    number: "04",
    phase: "PLAN",
    title: "Define scope, architecture, team, roadmap and commercials.",
    summary: "Define scope, architecture, team, roadmap and commercials.",
    details:
      "Before execution starts, you receive a transparent blueprint covering system architecture, milestone deliverables, assigned Vensai specialists, timelines and commercial terms.",
    outputs: ["Architecture Blueprint", "Milestone Roadmap", "Commercial Scope"],
  },
  {
    number: "05",
    phase: "BUILD",
    title: "Our professionals design, develop and implement the solution.",
    summary: "Our professionals design, develop and implement the solution.",
    details:
      "Vensai’s full-time engineers, designers and specialists execute the work under central project management, with regular sprint demos, quality assurance and transparent progress tracking.",
    outputs: ["Iterative Builds", "QA & Security Testing", "Sprint Reviews"],
  },
  {
    number: "06",
    phase: "DEPLOY",
    title: "Launch the solution and integrate it into the client's environment.",
    summary: "Launch the solution and integrate it into the client's environment.",
    details:
      "We manage production cutover, cloud provisioning, data migration, third-party integration testing and team onboarding for a controlled, zero-surprise launch.",
    outputs: ["Production Release", "Environment Integration", "Team Training"],
  },
  {
    number: "07",
    phase: "SUPPORT",
    title: "Provide technical, operational and customer support.",
    summary: "Provide technical, operational and customer support.",
    details:
      "Post-launch, Vensai stays accountable—providing technical maintenance, system monitoring, helpdesk ticketing, voice/chat customer support and rapid issue resolution.",
    outputs: ["SLA Technical Support", "Operational Helpdesk", "Proactive Monitoring"],
  },
  {
    number: "08",
    phase: "SCALE",
    title: "Continue improving and scaling the solution as the business grows.",
    summary: "Continue improving and scaling the solution as the business grows.",
    details:
      "As transaction volumes, user bases and business lines expand, we evolve your architecture, automate new workflows and scale dedicated team capacity alongside you.",
    outputs: ["Capacity Scaling", "Feature Evolution", "Continuous Optimization"],
  },
];

export const WHY_VENSAI_POINTS = [
  {
    title: "Full-Time Professional Teams",
    description:
      "Unlike open freelancer marketplaces, Vensai employs dedicated full-time professionals across engineering, design, consulting, marketing and support.",
  },
  {
    title: "Multi-Disciplinary Expertise",
    description:
      "Software, cloud, cybersecurity, SAP/BI, e-commerce, creative production and customer support operate under one roof—eliminating multi-vendor friction.",
  },
  {
    title: "Central Project Management",
    description:
      "Every engagement is led by experienced Vensai project managers who oversee timelines, quality gates, communication and cross-team coordination.",
  },
  {
    title: "End-to-End Execution",
    description:
      "We take ownership from initial feasibility research and UI/UX design through software engineering, deployment and daily operational support.",
  },
  {
    title: "Technical Consulting & R&D",
    description:
      "When requirements are complex or uncharted, our consulting practice evaluates feasibility, conducts audits and designs practical architectures first.",
  },
  {
    title: "Post-Deployment Support",
    description:
      "We do not disappear after launch. Our technical and operational support teams keep your systems secure, updated and responsive over the long term.",
  },
  {
    title: "Dedicated Resources",
    description:
      "Need specific skills integrated directly into your workflow? Access vetted Vensai engineers, designers, analysts or support executives on demand.",
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Work with us on fixed-scope projects, dedicated individual resources, full multidisciplinary pods, managed service SLAs or advisory retainers.",
  },
  {
    title: "One Accountable Partner",
    description:
      "Single commercial accountability, unified security governance and seamless knowledge transfer across every phase of your business growth.",
  },
  {
    title: "Long-Term Technology Support",
    description:
      "We build lasting partnerships—evolving your software, infrastructure and digital operations as markets and technologies change.",
  },
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: "project-based",
    number: "01",
    title: "Project Based",
    summary: "Complete projects from discovery to deployment.",
    description:
      "Ideal for clearly defined initiatives where Vensai takes full responsibility for scoping, architecture, design, engineering, testing and production launch against agreed milestones.",
    idealFor: [
      "New software products, web apps & mobile apps",
      "E-commerce store builds & platform migrations",
      "ERP/CRM implementations & API integration projects",
      "Brand identity systems & commercial creative shoots",
    ],
    included: [
      "Defined scope, deliverables & milestone schedule",
      "Central Vensai project management & QA",
      "Multidisciplinary execution across required teams",
      "Structured deployment & post-launch handover",
    ],
  },
  {
    id: "dedicated-resource",
    number: "02",
    title: "Dedicated Resource",
    summary: "Access dedicated Vensai professionals.",
    description:
      "Extend your internal capability with full-time Vensai specialists—engineers, mobile developers, SAP/BI consultants, UI/UX designers or support executives—working directly with your team.",
    idealFor: [
      "Accelerating internal engineering roadmaps",
      "Adding specialized AI/ML, DevOps or SAP BTP skills",
      "Dedicated UI/UX designers or digital marketing specialists",
      "Dedicated customer service or technical support staff",
    ],
    included: [
      "Full-time Vensai employee assigned to your business",
      "Direct daily collaboration in your tools & workflows",
      "Backed by Vensai’s internal technical leadership",
      "Continuity assurance & flexible scaling",
    ],
  },
  {
    id: "dedicated-team",
    number: "03",
    title: "Dedicated Team",
    summary: "Build a complete project team.",
    description:
      "A cohesive, multi-disciplinary Vensai delivery pod—combining engineering, design, QA, DevOps and project management—dedicated exclusively to your product or business unit.",
    idealFor: [
      "Long-term SaaS & enterprise product development",
      "Multi-stream digital transformation programs",
      "Omnichannel e-commerce engineering + creative + growth",
      "Businesses scaling without internal recruitment overhead",
    ],
    included: [
      "Custom-configured team composition",
      "Dedicated Project Manager & Technical Lead",
      "Agile sprint cadence, velocity reporting & governance",
      "Ability to flex disciplines as project phases shift",
    ],
  },
  {
    id: "managed-services",
    number: "04",
    title: "Managed Services",
    summary: "Long-term technology and operational support.",
    description:
      "Ongoing, SLA-governed management of your cloud infrastructure, applications, cybersecurity posture, e-commerce operations or customer support functions.",
    idealFor: [
      "24/7 cloud, DevOps & infrastructure operations",
      "Continuous e-commerce store management & catalog updates",
      "Managed customer service (chat/voice) & ticket desks",
      "Ongoing SEO, performance marketing & analytics operations",
    ],
    included: [
      "Defined Service Level Agreements (SLAs)",
      "Proactive monitoring, patching & incident response",
      "Monthly operational & performance reviews",
      "Predictable recurring commercial structure",
    ],
  },
  {
    id: "consulting",
    number: "05",
    title: "Consulting",
    summary: "Research, feasibility, audits and strategic technology advice.",
    description:
      "Focused advisory and R&D engagements to evaluate technical feasibility, audit existing codebases or cloud environments, review security, and architect practical roadmaps.",
    idealFor: [
      "Pre-project technical & commercial feasibility studies",
      "Codebase, architecture, cloud & security audits",
      "Technology selection & build-vs-buy evaluations",
      "Digital transformation & legacy modernization strategy",
    ],
    included: [
      "Senior architects & domain specialists",
      "Objective technical assessment & risk analysis",
      "Proof-of-Concept (PoC) validation where required",
      "Actionable executive & engineering roadmap",
    ],
  },
  {
    id: "post-deployment-support",
    number: "06",
    title: "Post-Deployment Support",
    summary: "Maintenance, technical support and customer operations.",
    description:
      "Structured lifecycle care after your solution goes live—covering bug resolution, OS/dependency updates, security patches, user helpdesk support and incremental enhancements.",
    idealFor: [
      "Newly launched web, mobile & enterprise applications",
      "Active e-commerce storefronts & payment/ERP integrations",
      "Production AI/ML pipelines & BI reporting environments",
      "Organizations requiring guaranteed post-launch continuity",
    ],
    included: [
      "L1/L2/L3 technical support & issue triage",
      "Preventive maintenance & security updates",
      "Minor feature enhancements & performance tuning",
      "Optional end-user chat & voice support coverage",
    ],
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "ecommerce-retail",
    name: "E-commerce & Retail",
    summary:
      "Omnichannel storefronts, ERP/inventory synchronization, payment and shipping orchestration, studio catalog production and customer order support.",
    challengesAddressed: [
      "Unifying online stores (Shopify, WooCommerce, BigCommerce, Odoo) with warehouse inventory and ERP",
      "High-volume product photography, video assets and conversion-focused store design",
      "Managing peak-season traffic, checkout reliability and post-purchase customer support",
    ],
    relevantCapabilities: ["E-Commerce Solutions", "Integrations & Automation", "Creative Production", "Marketing & Growth", "Customer & Operational Support"],
  },
  {
    id: "financial-services",
    name: "Financial Services",
    summary:
      "Secure custom software, regulatory-ready infrastructure, authorized security assessments, automated data pipelines and executive BI reporting.",
    challengesAddressed: [
      "Hardening web applications, APIs and cloud infrastructure against security threats",
      "Automating multi-source financial reconciliation and executive Power BI / Tableau reporting",
      "Building secure client portals, onboarding workflows and audit-ready backend systems",
    ],
    relevantCapabilities: ["Software & Product Engineering", "Cybersecurity", "Enterprise Technology", "Cloud, DevOps & Infrastructure", "Technical Consulting & R&D"],
  },
  {
    id: "logistics-transportation",
    name: "Logistics & Transportation",
    summary:
      "Fleet and dispatch software, driver mobile applications, multi-carrier API integrations, route/shipment visibility and operational helpdesks.",
    challengesAddressed: [
      "Real-time shipment tracking, carrier API integrations and automated customer notifications",
      "Cross-platform mobile apps for drivers, warehouse staff and field dispatchers",
      "Integrating order management, billing and customer escalation desks",
    ],
    relevantCapabilities: ["Mobile Applications", "Integrations & Automation", "Software & Product Engineering", "Enterprise Technology", "Customer & Operational Support"],
  },
  {
    id: "maritime",
    name: "Maritime",
    summary:
      "Vessel and port operations software, offline-capable desktop/mobile systems, supply-chain ERP integration and technical support operations.",
    challengesAddressed: [
      "Building resilient desktop and mobile software that operates reliably across low-bandwidth environments",
      "Centralizing maintenance, crew, procurement and compliance data across shore and vessel systems",
      "Providing dependable technical audits, cybersecurity hardening and managed support",
    ],
    relevantCapabilities: ["Software & Product Engineering", "Enterprise Technology", "Cybersecurity", "Technical Consulting & R&D", "Customer & Operational Support"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    summary:
      "Patient-facing mobile and web portals, appointment and operational workflows, security hardening, analytics and responsive patient support desks.",
    challengesAddressed: [
      "Designing accessible, secure digital interfaces for patients, clinicians and administrative teams",
      "Protecting sensitive health data through rigorous application security and infrastructure controls",
      "Streamlining appointment scheduling, billing integrations and patient support communications",
    ],
    relevantCapabilities: ["Software & Product Engineering", "Mobile Applications", "Cybersecurity", "AI & Machine Learning", "Customer & Operational Support"],
  },
  {
    id: "hospitality",
    name: "Hospitality",
    summary:
      "Direct booking platforms, guest mobile experiences, property and CRM integrations, brand visual production and 24/7 guest support.",
    challengesAddressed: [
      "Connecting booking engines, POS, CRM and loyalty workflows into a seamless guest journey",
      "Showcasing properties and experiences through commercial brand shoots, video and UI/UX design",
      "Delivering responsive chat and voice guest support alongside performance marketing",
    ],
    relevantCapabilities: ["Brand & Digital", "Creative Production", "Software & Product Engineering", "Integrations & Automation", "Customer & Operational Support"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    summary:
      "Property discovery platforms, CRM and lead-management automation, architectural/brand creative production and performance marketing.",
    challengesAddressed: [
      "Building fast, searchable property portals and interactive client/broker dashboards",
      "Automating lead capture, WhatsApp/email follow-ups and CRM pipeline tracking",
      "High-impact brand positioning, property video production and targeted digital campaigns",
    ],
    relevantCapabilities: ["Software & Product Engineering", "Brand & Digital", "Marketing & Growth", "Integrations & Automation", "Creative Production"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    summary:
      "ERP and SAP BTP extensions, production and inventory BI dashboards, desktop/industrial software, dealer portals and supply-chain automation.",
    challengesAddressed: [
      "Extending core ERP systems (SAP BTP, Odoo, custom ERP) for shop-floor, vendor and distributor workflows",
      "Consolidating plant, inventory and procurement metrics into Power BI and Tableau dashboards",
      "Building B2B dealer ordering portals and computer-vision quality inspection tools",
    ],
    relevantCapabilities: ["Enterprise Technology", "Software & Product Engineering", "AI & Machine Learning", "Integrations & Automation", "Technical Consulting & R&D"],
  },
  {
    id: "education",
    name: "Education",
    summary:
      "Learning management platforms, student mobile apps, AI-assisted knowledge systems, enrollment automation and technical support.",
    challengesAddressed: [
      "Engineering scalable web and mobile learning platforms with video, assessments and progress tracking",
      "Integrating admissions, fee payments, CRM and student communication workflows",
      "Deploying AI tutoring/search assistants and managing peak examination infrastructure loads",
    ],
    relevantCapabilities: ["Software & Product Engineering", "Mobile Applications", "AI & Machine Learning", "Cloud, DevOps & Infrastructure", "Marketing & Growth"],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    summary:
      "Client portals, document and workflow automation, enterprise knowledge AI (RAG), authoritative brand identity and B2B growth.",
    challengesAddressed: [
      "Automating client onboarding, document processing, time/project tracking and billing integrations",
      "Implementing private RAG systems over internal research, legal or advisory knowledge bases",
      "Elevating corporate positioning with premium web design, brand identity and search visibility",
    ],
    relevantCapabilities: ["AI & Machine Learning", "Software & Product Engineering", "Brand & Digital", "Integrations & Automation", "Marketing & Growth"],
  },
  {
    id: "startups-technology",
    name: "Startups & Technology",
    summary:
      "Feasibility and architecture consulting, full-cycle SaaS and mobile MVP-to-scale engineering, DevOps automation and dedicated product pods.",
    challengesAddressed: [
      "Validating technical feasibility and architecture before committing engineering capital",
      "Assembling complete, full-time product engineering, UI/UX and DevOps teams without hiring delays",
      "Scaling cloud infrastructure, passing enterprise security reviews and launching go-to-market assets",
    ],
    relevantCapabilities: ["Technical Consulting & R&D", "Software & Product Engineering", "Mobile Applications", "Cloud, DevOps & Infrastructure", "Cybersecurity"],
  },
  {
    id: "smes-enterprises",
    name: "SMEs & Enterprises",
    summary:
      "End-to-end digital transformation, legacy modernization, cross-system integrations, managed IT/cloud operations and flexible resource scaling.",
    challengesAddressed: [
      "Replacing fragmented vendors with a single accountable partner across technology, digital and operations",
      "Connecting legacy software with modern cloud, e-commerce, BI and mobile capabilities",
      "Accessing dedicated professionals or managed services with predictable governance",
    ],
    relevantCapabilities: ["Enterprise Technology", "Software & Product Engineering", "Integrations & Automation", "Technical Consulting & R&D", "Customer & Operational Support"],
  },
];

export const TECH_ECOSYSTEM: TechGroup[] = [
  {
    category: "Frontend",
    description: "Modern, accessible and high-performance web interfaces and design systems.",
    technologies: [
      { name: "React", focus: "Component-driven enterprise UIs & SPAs" },
      { name: "Next.js", focus: "SSR, App Router & SEO-critical web platforms" },
      { name: "TypeScript", focus: "Type-safe frontend & full-stack engineering" },
      { name: "Tailwind CSS", focus: "Scalable design-token styling architecture" },
      { name: "Vue.js / Nuxt", focus: "Reactive web interfaces & modular portals" },
      { name: "Angular", focus: "Large-scale structured enterprise frontends" },
      { name: "HTML5 / CSS3 / WCAG", focus: "Semantic, accessible web standards" },
    ],
  },
  {
    category: "Backend",
    description: "High-concurrency APIs, microservices, business logic and desktop/server runtimes.",
    technologies: [
      { name: "Node.js / NestJS", focus: "Event-driven APIs & microservices" },
      { name: "Python (FastAPI / Django)", focus: "Backend services, data pipelines & AI APIs" },
      { name: ".NET Core / C#", focus: "Enterprise backends & Windows desktop apps" },
      { name: "Java / Spring Boot", focus: "Mission-critical enterprise services" },
      { name: "Go (Golang)", focus: "High-throughput concurrent systems & middleware" },
      { name: "PHP / Laravel", focus: "Web backends & custom commerce platforms" },
      { name: "REST / GraphQL / gRPC", focus: "Typed service-to-service & client APIs" },
    ],
  },
  {
    category: "Mobile",
    description: "Native and cross-platform mobile engineering for iOS and Android ecosystems.",
    technologies: [
      { name: "Flutter", focus: "Unified multi-platform iOS & Android applications" },
      { name: "React Native", focus: "Cross-platform mobile apps with native performance" },
      { name: "Kotlin (Android)", focus: "Native Android consumer & enterprise apps" },
      { name: "Swift (iOS)", focus: "Native iOS & iPadOS applications" },
      { name: "Firebase / Push Services", focus: "Real-time sync, auth & notifications" },
      { name: "App Store & Play Console", focus: "Release pipelines & compliance management" },
    ],
  },
  {
    category: "Cloud",
    description: "Multi-cloud architecture, migration, serverless computing and managed hosting.",
    technologies: [
      { name: "Amazon Web Services (AWS)", focus: "EC2, ECS, Lambda, S3, RDS & CloudFront" },
      { name: "Microsoft Azure", focus: "Enterprise cloud, AKS, App Services & AD" },
      { name: "Google Cloud Platform (GCP)", focus: "GKE, Cloud Run, BigQuery & Vertex AI" },
      { name: "Cloudflare Enterprise", focus: "Edge CDN, DNS, Zero-Trust & WAF" },
      { name: "Vercel / Managed Edge", focus: "Global frontend & serverless deployment" },
    ],
  },
  {
    category: "DevOps",
    description: "Container orchestration, Infrastructure-as-Code, CI/CD and production observability.",
    technologies: [
      { name: "Docker", focus: "Standardized application containerization" },
      { name: "Kubernetes (K8s)", focus: "Automated container orchestration & scaling" },
      { name: "Terraform", focus: "Declarative Infrastructure-as-Code (IaC)" },
      { name: "GitHub Actions / GitLab CI", focus: "Automated build, test & deployment pipelines" },
      { name: "Prometheus & Grafana", focus: "Real-time metrics, alerting & observability" },
      { name: "Linux / Nginx", focus: "Server hardening, reverse proxy & load balancing" },
    ],
  },
  {
    category: "AI/ML",
    description: "Applied LLM integrations, retrieval-augmented generation, computer vision and MLOps.",
    technologies: [
      { name: "LLM APIs (OpenAI / Anthropic / Gemini)", focus: "Enterprise reasoning & generative workflows" },
      { name: "RAG Architectures", focus: "Grounded enterprise document & data retrieval" },
      { name: "LangChain / LlamaIndex", focus: "Agentic orchestration & tool-use pipelines" },
      { name: "PyTorch / Scikit-Learn", focus: "Custom ML models & predictive analytics" },
      { name: "OpenCV / Vision Models", focus: "Automated image & video analysis" },
      { name: "MLOps & Model Monitoring", focus: "Deployment pipelines, drift & latency tracking" },
    ],
  },
  {
    category: "Data",
    description: "Data integration, ETL/ELT pipelines, warehousing and real-time synchronization.",
    technologies: [
      { name: "Apache Airflow / Prefect", focus: "Workflow scheduling & data pipeline orchestration" },
      { name: "Snowflake / BigQuery", focus: "Cloud data warehousing & analytics storage" },
      { name: "Azure Data Factory", focus: "Enterprise ETL & hybrid data integration" },
      { name: "Apache Kafka / RabbitMQ", focus: "Event streaming & asynchronous messaging" },
      { name: "Custom Middleware Engines", focus: "Bi-directional ERP/CRM/Commerce data sync" },
    ],
  },
  {
    category: "Enterprise",
    description: "Core enterprise platforms, ERP extensions and cross-department workflow systems.",
    technologies: [
      { name: "SAP BTP", focus: "SAP Business Technology Platform extensions & integrations" },
      { name: "SAP Integration Suite", focus: "Enterprise-grade SAP & non-SAP connectivity" },
      { name: "Odoo ERP", focus: "Modular ERP customization, inventory & accounting" },
      { name: "Salesforce / HubSpot / Zoho", focus: "CRM customization & workflow integration" },
      { name: "Microsoft Power Platform", focus: "Enterprise workflow automation & internal apps" },
    ],
  },
  {
    category: "E-commerce",
    description: "Digital storefronts, B2B/D2C commerce platforms, payment and logistics ecosystems.",
    technologies: [
      { name: "Shopify / Shopify Plus", focus: "High-converting D2C & B2B commerce storefronts" },
      { name: "WooCommerce", focus: "Customizable WordPress commerce ecosystems" },
      { name: "BigCommerce", focus: "Scalable multi-catalog & enterprise commerce" },
      { name: "Odoo Commerce", focus: "Unified e-commerce, POS & inventory ERP" },
      { name: "Custom Headless Commerce", focus: "Bespoke Next.js & API-first marketplaces" },
      { name: "Stripe / Razorpay / PayPal / Shipping APIs", focus: "Global checkout & fulfillment integrations" },
    ],
  },
  {
    category: "Databases",
    description: "Relational, document, in-memory and vector data stores engineered for integrity.",
    technologies: [
      { name: "PostgreSQL", focus: "Primary transactional relational database" },
      { name: "MySQL / MariaDB", focus: "Web & commerce relational workloads" },
      { name: "Microsoft SQL Server", focus: "Enterprise & .NET/BI transactional storage" },
      { name: "MongoDB", focus: "Flexible document & catalog data stores" },
      { name: "Redis", focus: "In-memory caching, queues & session state" },
      { name: "pgvector / Pinecone / Qdrant", focus: "Semantic search & RAG vector embeddings" },
    ],
  },
  {
    category: "Security",
    description: "Application security testing, vulnerability management, cloud posture and compliance.",
    technologies: [
      { name: "OWASP ASVS & Top 10", focus: "Web & API application security verification" },
      { name: "Authorized Penetration Testing", focus: "Controlled offensive security validation" },
      { name: "SAST / DAST / SCA Tooling", focus: "Automated code & dependency vulnerability checks" },
      { name: "Cloud Security Audits", focus: "AWS/Azure/GCP IAM, network & storage hardening" },
      { name: "OAuth 2.0 / OIDC / RBAC", focus: "Enterprise identity & access control architecture" },
    ],
  },
  {
    category: "Analytics",
    description: "Business intelligence, executive reporting, attribution and conversion measurement.",
    technologies: [
      { name: "Microsoft Power BI", focus: "Interactive enterprise dashboards & DAX modeling" },
      { name: "Tableau", focus: "Visual analytics & executive KPI exploration" },
      { name: "Google Analytics 4 & GTM", focus: "Digital product & e-commerce funnel analytics" },
      { name: "Looker Studio", focus: "Automated marketing & growth reporting" },
      { name: "Custom Telemetry Dashboards", focus: "Embedded operational & SLA reporting" },
    ],
  },
];

export const CASE_STUDY_BLUEPRINTS: CaseStudyBlueprint[] = [
  {
    id: "cs-01",
    code: "CASE STUDY FRAMEWORK — 01",
    title: "Case Study: Enterprise System & Workflow Transformation",
    clientIndustry: "Client / Industry: [Enterprise / Manufacturing & Distribution Placeholder]",
    engagementModel: "Project Based + Post-Deployment Support",
    challenge:
      "Challenge: [Placeholder for client challenge — e.g., fragmented operational data across legacy ERP, manual order processing, and lack of real-time executive visibility across regional branches.]",
    approach:
      "Approach: [Placeholder for Vensai's approach — e.g., technical feasibility assessment, architecture blueprint, custom middleware engineering, and phased deployment managed by a central Vensai project team.]",
    solution:
      "Solution: [Placeholder for delivered solution — e.g., unified web application portal integrated with SAP BTP / ERP, automated approval workflows, and executive Power BI analytics.]",
    technologies: ["SAP BTP", "Next.js", "Node.js", "PostgreSQL", "Power BI", "Docker"],
    outcome:
      "Outcome: [Placeholder for verified client outcome — structured to present real operational improvements, deployment stability and post-launch support continuity once published.]",
  },
  {
    id: "cs-02",
    code: "CASE STUDY FRAMEWORK — 02",
    title: "Case Study: End-to-End Omnichannel E-Commerce Ecosystem",
    clientIndustry: "Client / Industry: [D2C & B2B Retail Brand Placeholder]",
    engagementModel: "Dedicated Team + Managed Services",
    challenge:
      "Challenge: [Placeholder for client challenge — e.g., disconnected storefront, manual inventory updates between warehouse and online channels, inconsistent product catalog imagery, and high support ticket volume.]",
    approach:
      "Approach: [Placeholder for Vensai's approach — e.g., combining store engineering, ERP/payment/shipping integrations, in-house studio product photography, and dedicated order support agents.]",
    solution:
      "Solution: [Placeholder for delivered solution — e.g., custom-engineered commerce storefront synchronized with inventory/ERP, studio product catalog assets, WhatsApp order notifications, and managed customer support.]",
    technologies: ["Shopify / Odoo", "Custom API Middleware", "Payment & Shipping APIs", "WhatsApp API", "Studio Production"],
    outcome:
      "Outcome: [Placeholder for verified client outcome — ready to record real store launch milestones, fulfillment automation accuracy and customer support SLA performance.]",
  },
  {
    id: "cs-03",
    code: "CASE STUDY FRAMEWORK — 03",
    title: "Case Study: Cloud Migration, Security Hardening & AI Readiness",
    clientIndustry: "Client / Industry: [Technology / Financial & Professional Services Placeholder]",
    engagementModel: "Consulting & R&D + Managed Cloud Services",
    challenge:
      "Challenge: [Placeholder for client challenge — e.g., scaling bottlenecks on legacy infrastructure, upcoming enterprise security audit requirements, and need for secure internal document search.]",
    approach:
      "Approach: [Placeholder for Vensai's approach — e.g., comprehensive infrastructure and security audit, containerized cloud migration plan, authorized penetration testing, and private RAG architecture design.]",
    solution:
      "Solution: [Placeholder for delivered solution — e.g., hardened AWS/Azure Kubernetes environment with automated CI/CD, remediated application security posture, and governed internal AI knowledge assistant.]",
    technologies: ["AWS / Azure", "Kubernetes", "Terraform", "OWASP Security Hardening", "Python RAG Pipeline"],
    outcome:
      "Outcome: [Placeholder for verified client outcome — structured for real infrastructure availability, audit completion and internal productivity benchmarks.]",
  },
];

export const CAREER_ROLES = [
  {
    title: "Software Engineers",
    department: "Technology & Product Engineering",
    type: "Full-Time • In-House Team",
    focus: "Full-stack web applications, SaaS platforms, backend APIs, custom ERP/CRM and desktop software (React, Next.js, Node.js, Python, .NET, Java).",
  },
  {
    title: "Mobile Developers",
    department: "Mobile Engineering",
    type: "Full-Time • In-House Team",
    focus: "Native Android (Kotlin), native iOS (Swift), Flutter and React Native applications, mobile backend integration and store release management.",
  },
  {
    title: "AI/ML Engineers",
    department: "Applied AI & Data Science",
    type: "Full-Time • In-House Team",
    focus: "LLM integrations, enterprise RAG pipelines, AI agents, computer vision, predictive analytics and production MLOps.",
  },
  {
    title: "DevOps Engineers",
    department: "Cloud & Infrastructure",
    type: "Full-Time • In-House Team",
    focus: "AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform, CI/CD automation, observability and 24/7 production reliability.",
  },
  {
    title: "Cybersecurity Professionals",
    department: "Security & Risk",
    type: "Full-Time • In-House Team",
    focus: "Vulnerability assessments, authorized penetration testing, web/API/cloud security audits, infrastructure hardening and compliance support.",
  },
  {
    title: "UI/UX Designers",
    department: "Brand & Product Design",
    type: "Full-Time • In-House Team",
    focus: "Enterprise design systems, SaaS and mobile product design, user research, interactive prototyping and visual identity systems.",
  },
  {
    title: "Project Managers",
    department: "Delivery & Governance",
    type: "Full-Time • In-House Team",
    focus: "End-to-end delivery management, agile sprint governance, stakeholder communication, scope planning and multidisciplinary team coordination.",
  },
  {
    title: "Business Consultants",
    department: "Consulting, Enterprise & R&D",
    type: "Full-Time • In-House Team",
    focus: "Requirement discovery, project feasibility, SAP BTP / Power BI / Tableau consulting, digital transformation and process automation.",
  },
  {
    title: "Marketing Professionals",
    department: "Growth & Digital Marketing",
    type: "Full-Time • In-House Team",
    focus: "Technical SEO, performance marketing, paid digital campaigns, content strategy, marketing automation and conversion analytics.",
  },
  {
    title: "Customer Support Executives",
    department: "Customer & Operational Support",
    type: "Full-Time • In-House Team",
    focus: "Omnichannel chat and voice customer support, technical helpdesk ticketing, e-commerce order operations and post-deployment escalation care.",
  },
];

export const CONTACT_SERVICE_OPTIONS = [
  "Software Development",
  "Mobile App",
  "Custom Software",
  "AI/ML",
  "Cloud & DevOps",
  "Cybersecurity",
  "Enterprise / SAP",
  "Power BI / Tableau",
  "E-commerce",
  "Integrations",
  "Branding",
  "Marketing",
  "Consulting / R&D",
  "Technical Audit",
  "Support",
  "Other",
];

export const CONTACT_PROJECT_TYPES = [
  "New Project / Build from Scratch",
  "Existing System Modernization / Audit",
  "Dedicated Resource / Team Extension",
  "Managed Services & Ongoing Support",
  "Technical Feasibility & R&D Consulting",
  "E-Commerce Store & Ecosystem Launch",
  "Exploratory Discussion",
];

export const CONTACT_BUDGET_RANGES = [
  "To Be Determined (Need Feasibility / Scoping)",
  "Under $10,000 (Targeted Audit / Module / Sprint)",
  "$10,000 – $25,000",
  "$25,000 – $75,000",
  "$75,000 – $150,000+",
  "Monthly Retainer / Dedicated Resource Model",
];

export const INSIGHTS_ARTICLES = [
  {
    id: "insight-01",
    category: "Architecture & Delivery",
    readTime: "6 min read",
    author: "Vensai Labs Delivery & Architecture Practice",
    title: "Why Businesses Are Moving From Fragmented Freelancers to Managed Agency Teams",
    summary:
      "How combining full-time multidisciplinary specialists with central project management eliminates delivery risk across complex software and digital initiatives.",
    keyTakeaways: [
      "Individual contractors rarely cover architecture, UI/UX, backend, security, deployment and post-launch support simultaneously.",
      "Central project governance reduces handoff failures between engineering, creative and operational workstreams.",
      "Long-term accountability ensures the team that builds the system stays available to maintain and scale it.",
    ],
    sections: [
      {
        heading: "The Hidden Cost of Fragmented Contractor Coordination",
        body: "When organizations hire disconnected individual freelancers across UI/UX design, backend engineering, cloud infrastructure and digital marketing, internal leadership is forced to act as systems integrator and project manager. Scope gaps between contractors frequently surface late in development—leading to rework, security blind spots and post-launch abandonment.",
      },
      {
        heading: "The Managed Full-Time Agency Model",
        body: "Vensai Labs operates on a fundamentally different principle: businesses gain flexible access to specialized talent, but every engineer, designer, consultant and support specialist is a full-time Vensai professional working under central project management. Architecture, code quality, deployment pipelines and post-deployment SLAs remain unified under one accountable partner.",
      },
    ],
    relatedServices: [
      { label: "Software & Product Engineering", href: "/services/software-development" },
      { label: "Technical Consulting & R&D", href: "/solutions/consulting" },
      { label: "Post-Deployment & Customer Support", href: "/solutions/support" },
    ],
  },
  {
    id: "insight-02",
    category: "Consulting & R&D",
    readTime: "7 min read",
    author: "Vensai Labs Technical Consulting & R&D Practice",
    title: "Evaluating Technical Feasibility Before Committing to Custom Software or AI",
    summary:
      "A practical framework for validating architecture choices, integration dependencies, security constraints and commercial ROI prior to full-scale development.",
    keyTakeaways: [
      "Separating discovery and technical feasibility from build execution prevents costly mid-project re-architectures.",
      "Evaluating existing ERP, CRM and API constraints early determines whether custom software, middleware or platform extension is the right path.",
      "Structured proof-of-concept validation gives leadership clear scope and timeline predictability.",
    ],
    sections: [
      {
        heading: "Why Technical Feasibility Comes Before Sprint Zero",
        body: "Ambitious software, enterprise integration and AI initiatives often stall because teams jump straight into coding without validating data readiness, third-party API rate limits, latency budgets or legacy ERP constraints. A focused technical feasibility study surfaces these dependencies before major capital is committed.",
      },
      {
        heading: "What an Executive Feasibility Dossier Should Contain",
        body: "At Vensai Labs, our R&D and architecture assessments deliver a concrete target-state blueprint: build-versus-buy trade-offs, database and cloud sizing, security posture requirements, proof-of-concept validation for high-risk modules, and a phased commercial roadmap.",
      },
    ],
    relatedServices: [
      { label: "Technical Consulting & R&D", href: "/services/consulting" },
      { label: "AI & Machine Learning", href: "/services/ai-ml" },
      { label: "Enterprise Technology (SAP BTP & BI)", href: "/services/enterprise" },
    ],
  },
  {
    id: "insight-03",
    category: "E-Commerce Ecosystems",
    readTime: "5 min read",
    author: "Vensai Labs Digital Commerce & Creative Practice",
    title: "Building Connected Digital Commerce: Storefront, ERP, Catalog Creative & Order Support",
    summary:
      "Why modern e-commerce success depends on synchronizing Shopify, WooCommerce, BigCommerce or Odoo with back-office inventory, studio visuals and live customer support.",
    keyTakeaways: [
      "Storefront design must be paired with automated payment, shipping, inventory and accounting integrations.",
      "Consistent studio product photography and video directly impact conversion and reduce return rates.",
      "Dedicated post-launch order and customer support protects brand reputation as order volume scales.",
    ],
    sections: [
      {
        heading: "Beyond the Storefront Template",
        body: "Launching a visual theme on Shopify, WooCommerce, BigCommerce or Odoo is only the surface layer of digital commerce. Sustainable growth requires real-time synchronization between checkout, multi-warehouse inventory, ERP accounting, carrier shipping APIs and automated WhatsApp/email order notifications.",
      },
      {
        heading: "Integrating Studio Catalog Production & Order Operations",
        body: "Vensai Labs pairs commerce engineering with in-house product photography, catalog video production and dedicated post-deployment order support executives—eliminating the friction of managing separate web agencies, photo studios and support outsourcers.",
      },
    ],
    relatedServices: [
      { label: "E-Commerce Solutions Hub", href: "/solutions/ecommerce" },
      { label: "Integrations & Automation", href: "/services/integrations" },
      { label: "Creative Production", href: "/services/creative-production" },
    ],
  },
  {
    id: "insight-04",
    category: "Cybersecurity & Cloud",
    readTime: "6 min read",
    author: "Vensai Labs Cloud & Security Engineering Practice",
    title: "Continuous Security & Infrastructure Readiness for Growing Digital Businesses",
    summary:
      "Integrating vulnerability assessments, authorized penetration testing and automated cloud observability into the software lifecycle.",
    keyTakeaways: [
      "Application and API security testing should occur before major releases and after significant integration changes.",
      "Cloud misconfigurations remain one of the most common and preventable sources of operational exposure.",
      "Combining DevOps automation with security hardening improves both release velocity and system resilience.",
    ],
    sections: [
      {
        heading: "Embedding Security Into Cloud & Application Delivery",
        body: "As businesses connect web applications, mobile apps, payment gateways and enterprise ERPs, their API and cloud surface area expands. Periodic vulnerability assessments, authorized penetration testing and IAM/network hardening ensure security keeps pace with product velocity.",
      },
      {
        heading: "Observability, CI/CD & Production Continuity",
        body: "By combining Infrastructure-as-Code (Terraform, Docker, Kubernetes) with automated CI/CD checks and 24/7 monitoring across AWS, Azure and Google Cloud, Vensai helps organizations achieve predictable deployments and rapid incident response.",
      },
    ],
    relatedServices: [
      { label: "Cybersecurity Services", href: "/services/cybersecurity" },
      { label: "Cloud, DevOps & Infrastructure", href: "/services/cloud-devops" },
      { label: "Managed Support Operations", href: "/solutions/support" },
    ],
  },
];

export const HOMEPAGE_FAQS = [
  {
    question: "How is Vensai Labs different from a freelancer marketplace or a traditional IT agency?",
    answer:
      "Unlike open freelancer marketplaces where you must vet, hire and coordinate individual contractors yourself, Vensai Labs employs its own full-time professionals across software, mobile, AI, cloud, cybersecurity, enterprise technology, e-commerce, design, marketing and customer support. Unlike narrow single-discipline agencies, Vensai manages the entire engagement end-to-end under central project management.",
  },
  {
    question: "What engagement models does Vensai Labs offer?",
    answer:
      "We offer six flexible engagement models: (1) Project Based for complete end-to-end builds, (2) Dedicated Resource for embedding full-time Vensai specialists into your workflow, (3) Dedicated Team for a complete multidisciplinary delivery pod, (4) Managed Services for SLA-driven ongoing operations, (5) Consulting for technical feasibility, R&D and audits, and (6) Post-Deployment Support for long-term maintenance and customer support.",
  },
  {
    question: "Can Vensai help if we have a business or product idea but need technical feasibility and scoping first?",
    answer:
      "Yes. Our Technical Consulting & R&D practice conducts project feasibility studies, architecture reviews, technology selection, proof-of-concept validation and budget/timeline roadmapping before you commit to full-scale development.",
  },
  {
    question: "Do you handle both technology development and creative/operational work like product shoots or customer support?",
    answer:
      "Yes. Because real business solutions often require multiple disciplines, Vensai provides software and e-commerce engineering alongside brand strategy, UI/UX design, commercial and catalog product photography, performance marketing, and live chat/voice customer and technical support.",
  },
  {
    question: "What happens after our software, mobile app or e-commerce store is deployed?",
    answer:
      "Vensai stays accountable after launch. We provide structured post-deployment support including L1–L3 technical troubleshooting, preventive maintenance, cloud and security monitoring, incremental feature enhancements, and omnichannel customer/order support.",
  },
  {
    question: "How does Vensai protect confidentiality and intellectual property?",
    answer:
      "All requirement discussions, source code, architectures and business data are handled under strict confidentiality by Vensai’s full-time staff, with clear intellectual property ownership and governance defined in our client agreements.",
  },
];

export interface ServiceSEOEnrichment {
  whoItIsFor: string[];
  relatedServiceSlugs: string[];
  relatedIndustries: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICE_SEO_ENRICHMENT: Record<string, ServiceSEOEnrichment> = {
  "software-development": {
    whoItIsFor: [
      "Enterprises and SMEs replacing manual spreadsheets or rigid legacy tools with custom web applications, CRM or ERP systems",
      "Technology companies and founders building commercial multi-tenant SaaS platforms",
      "Industrial, logistics and maritime operations requiring resilient Windows/Desktop or offline-capable software",
    ],
    relatedServiceSlugs: ["mobile-development", "integrations", "cloud-devops", "consulting"],
    relatedIndustries: ["SMEs & Enterprises", "Startups & Technology", "Financial Services", "Manufacturing"],
    faqs: [
      {
        question: "Does Vensai build both web-based SaaS platforms and Windows/Desktop applications?",
        answer:
          "Yes. Our engineering teams build modern web applications and SaaS platforms (React, Next.js, Node.js, Python, Java, Go) as well as native and cross-platform Windows/Desktop business applications (.NET, C#, WPF, Electron).",
      },
      {
        question: "Can you integrate custom software with our existing ERP, CRM or accounting system?",
        answer:
          "Yes. Every custom software system we engineer is designed for clean API connectivity with existing enterprise platforms such as SAP, Odoo, Salesforce, HubSpot, Zoho, Tally, QuickBooks and payment/shipping gateways.",
      },
    ],
  },
  "mobile-development": {
    whoItIsFor: [
      "Retail and D2C brands launching high-conversion Android and iOS customer shopping apps",
      "Logistics, field-service and healthcare organizations equipping mobile teams with real-time operational apps",
      "SaaS and enterprise businesses extending web platforms to iOS and Android devices",
    ],
    relatedServiceSlugs: ["software-development", "ecommerce", "branding", "support"],
    relatedIndustries: ["E-commerce & Retail", "Logistics & Transportation", "Healthcare", "Education"],
    faqs: [
      {
        question: "Should we build our mobile app with Flutter, React Native, or native iOS and Android?",
        answer:
          "During discovery and feasibility, our mobile architects evaluate your performance, hardware integration, timeline and budget goals to recommend either cross-platform (Flutter / React Native) or native (Swift / Kotlin) engineering.",
      },
      {
        question: "Does Vensai handle App Store and Google Play publishing and ongoing OS updates?",
        answer:
          "Yes. We manage the complete release pipeline—including Apple App Store and Google Play compliance, backend API deployment, crash monitoring and post-launch OS compatibility maintenance.",
      },
    ],
  },
  "ai-ml": {
    whoItIsFor: [
      "Organizations seeking secure, private RAG knowledge assistants over internal documents, SOPs and databases",
      "Operations and customer service leaders automating repetitive triage, extraction and workflow tasks with AI agents",
      "Manufacturing, retail and financial firms implementing computer vision or predictive analytics",
    ],
    relatedServiceSlugs: ["software-development", "enterprise", "consulting", "integrations"],
    relatedIndustries: ["Professional Services", "Manufacturing", "Healthcare", "Financial Services"],
    faqs: [
      {
        question: "How does Vensai ensure our private business data stays secure when implementing LLMs or RAG?",
        answer:
          "We architect RAG pipelines and LLM integrations with strict role-based access controls, private vector databases, enterprise API endpoints that do not train public models on your data, and auditable guardrails.",
      },
      {
        question: "Can AI agents be integrated directly into our existing CRM, ERP or helpdesk?",
        answer:
          "Yes. Rather than building isolated AI demos, we connect AI workflows directly to your operational databases, ticketing desks, WhatsApp/email channels and ERP systems.",
      },
    ],
  },
  "cloud-devops": {
    whoItIsFor: [
      "Businesses migrating legacy on-premise servers or monolithic apps to AWS, Microsoft Azure or Google Cloud",
      "Engineering and SaaS teams needing automated CI/CD pipelines, Docker/Kubernetes orchestration and Terraform IaC",
      "High-traffic digital commerce and enterprise platforms requiring 24/7 monitoring, scaling and cost optimization",
    ],
    relatedServiceSlugs: ["cybersecurity", "software-development", "consulting", "support"],
    relatedIndustries: ["Startups & Technology", "Financial Services", "E-commerce & Retail", "SMEs & Enterprises"],
    faqs: [
      {
        question: "Which cloud providers does Vensai support?",
        answer:
          "Our cloud and DevOps engineers architect, migrate and manage workloads across Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) and hybrid/containerized environments.",
      },
      {
        question: "Can Vensai audit our current cloud bill and performance bottlenecks?",
        answer:
          "Yes. We conduct cloud architecture and cost audits to right-size compute/database resources, eliminate idle spend, harden security groups and improve application response times.",
      },
    ],
  },
  "cybersecurity": {
    whoItIsFor: [
      "Organizations preparing web applications, APIs and cloud infrastructure for enterprise client security reviews",
      "Financial, healthcare, commerce and SaaS companies requiring authorized penetration testing and vulnerability assessments",
      "IT leaders seeking proactive cloud/server security hardening and compliance readiness support",
    ],
    relatedServiceSlugs: ["cloud-devops", "consulting", "software-development", "enterprise"],
    relatedIndustries: ["Financial Services", "Healthcare", "Maritime", "Startups & Technology"],
    faqs: [
      {
        question: "What is included in a Vensai security assessment and penetration test?",
        answer:
          "We perform authorized vulnerability assessments and penetration testing across web applications, mobile backends, REST/GraphQL APIs and cloud configurations—delivering an executive summary, technical proof-of-findings, prioritized remediation guidance and re-testing verification.",
      },
      {
        question: "Can Vensai’s engineering team also help fix the vulnerabilities discovered during an audit?",
        answer:
          "Yes. Because Vensai has full-time software, backend and cloud engineers in-house, we can both identify security gaps and implement the code and infrastructure remediations directly.",
      },
    ],
  },
  "enterprise": {
    whoItIsFor: [
      "Enterprises running SAP that need side-by-side extensions, integrations and workflow apps on SAP BTP",
      "Executive teams seeking unified financial, supply-chain and sales analytics in Microsoft Power BI or Tableau",
      "Multi-branch organizations consolidating siloed ERP, CRM and operational databases",
    ],
    relatedServiceSlugs: ["integrations", "software-development", "consulting", "ai-ml"],
    relatedIndustries: ["Manufacturing", "SMEs & Enterprises", "Financial Services", "Logistics & Transportation"],
    faqs: [
      {
        question: "How does Vensai approach SAP BTP and enterprise ERP extensions?",
        answer:
          "We follow clean-core principles—building custom workflows, supplier/dealer portals and cross-system integrations on SAP Business Technology Platform (SAP BTP) and enterprise middleware without destabilizing your core ERP.",
      },
      {
        question: "Can you connect multiple data sources into automated Power BI or Tableau dashboards?",
        answer:
          "Yes. Our data and BI specialists build governed ETL pipelines that unify ERP, CRM, e-commerce, finance and warehouse data into interactive Power BI and Tableau executive dashboards.",
      },
    ],
  },
  "ecommerce": {
    whoItIsFor: [
      "D2C and B2B brands launching or replatforming stores on Shopify, WooCommerce, BigCommerce, Odoo or custom headless stacks",
      "Retailers needing two-way synchronization between online storefronts, payment/shipping carriers, inventory and ERP/CRM",
      "Merchants looking for a single partner to handle store engineering, product photography, catalog videos and order support",
    ],
    relatedServiceSlugs: ["integrations", "creative-production", "marketing", "support"],
    relatedIndustries: ["E-commerce & Retail", "Manufacturing", "Hospitality", "SMEs & Enterprises"],
    faqs: [
      {
        question: "Which e-commerce platforms does Vensai specialize in?",
        answer:
          "We design, build and scale stores on Shopify / Shopify Plus, WooCommerce, BigCommerce, Odoo Commerce & ERP, as well as bespoke custom and headless commerce architectures.",
      },
      {
        question: "Does Vensai also produce product photography, catalog videos and listing content?",
        answer:
          "Yes. Uniquely among technology partners, Vensai includes an in-house E-Commerce Creative Services practice delivering studio product photography, catalog photography, product videos and marketplace-ready listing content.",
      },
    ],
  },
  "integrations": {
    whoItIsFor: [
      "Businesses eliminating manual CSV uploads and duplicate data entry between ERP, CRM, e-commerce and accounting software",
      "Operations teams automating customer notifications and workflows across WhatsApp Business API, email, payment and shipping gateways",
      "Enterprises requiring custom middleware to bridge legacy databases with modern cloud and mobile applications",
    ],
    relatedServiceSlugs: ["enterprise", "ecommerce", "software-development", "ai-ml"],
    relatedIndustries: ["Logistics & Transportation", "E-commerce & Retail", "Manufacturing", "Real Estate"],
    faqs: [
      {
        question: "What types of third-party systems can Vensai integrate?",
        answer:
          "We integrate payment gateways (Stripe, Razorpay, PayPal), shipping/logistics APIs, ERPs (SAP, Odoo, Tally, Zoho), CRMs (Salesforce, HubSpot), WhatsApp Business API, email systems and custom databases.",
      },
      {
        question: "How do you ensure integrations don't silently fail when a third-party API goes down?",
        answer:
          "We engineer custom middleware with webhook signature verification, message queues, automated retry logic, dead-letter logging and real-time alert notifications.",
      },
    ],
  },
  "consulting": {
    whoItIsFor: [
      "Founders and executives validating technical and commercial feasibility before investing in a major software or AI build",
      "Companies experiencing slow performance, instability or delays in an existing codebase that require an independent technical audit",
      "Organizations planning phased digital transformation, legacy modernization or technology vendor selection",
    ],
    relatedServiceSlugs: ["software-development", "cybersecurity", "cloud-devops", "enterprise"],
    relatedIndustries: ["Startups & Technology", "SMEs & Enterprises", "Financial Services", "Maritime"],
    faqs: [
      {
        question: "What deliverables do we receive from a Technical Consulting & Feasibility engagement?",
        answer:
          "You receive a comprehensive Feasibility & Audit Dossier—including architecture blueprints, risk and dependency analysis, code/cloud/security audit findings, technology stack recommendations and a phased implementation roadmap.",
      },
      {
        question: "Can we engage Vensai for a standalone technical audit without committing to a full build contract?",
        answer:
          "Yes. Our Consulting & R&D practice can be engaged independently for objective feasibility studies, code audits, cloud reviews and architecture roadmapping.",
      },
    ],
  },
  "branding": {
    whoItIsFor: [
      "New ventures and established companies defining or refreshing their brand strategy, naming and visual identity system",
      "Software and SaaS teams needing intuitive UI/UX product design, interactive Figma prototypes and reusable design systems",
      "Enterprises upgrading their corporate website and digital presence to reflect their true scale and capabilities",
    ],
    relatedServiceSlugs: ["software-development", "marketing", "creative-production", "ecommerce"],
    relatedIndustries: ["Real Estate", "Hospitality", "Professional Services", "Startups & Technology"],
    faqs: [
      {
        question: "Do your UI/UX designers work directly with Vensai’s frontend and mobile engineers?",
        answer:
          "Yes. Our UI/UX and brand designers collaborate daily with our web and mobile engineering teams—ensuring design systems, component tokens and interactions translate into production code without fidelity loss.",
      },
      {
        question: "What is included in a complete brand identity engagement?",
        answer:
          "We deliver brand strategy and positioning, naming (if required), logo and visual identity guidelines, typography and color systems, digital UI templates and marketing creative kits.",
      },
    ],
  },
  "marketing": {
    whoItIsFor: [
      "B2B and enterprise companies seeking sustainable organic search visibility (SEO) and qualified lead generation pipelines",
      "E-commerce and consumer brands scaling ROAS through performance marketing, paid search/social and conversion rate optimization",
      "Businesses implementing marketing automation, CRM attribution and full-funnel analytics",
    ],
    relatedServiceSlugs: ["branding", "creative-production", "ecommerce", "software-development"],
    relatedIndustries: ["E-commerce & Retail", "Real Estate", "Education", "Professional Services"],
    faqs: [
      {
        question: "How does Vensai align marketing campaigns with technical SEO and website conversion?",
        answer:
          "Because our marketers work alongside our web engineers, UI/UX designers and analytics specialists, we optimize technical site architecture, landing page speed, checkout/form conversion and ad attribution together.",
      },
      {
        question: "Do you provide transparent reporting on lead quality and return on ad spend?",
        answer:
          "Yes. We configure GA4, Tag Manager, search console and CRM attribution dashboards so you can track impressions, rankings, conversion rates and cost per qualified inquiry.",
      },
    ],
  },
  "creative-production": {
    whoItIsFor: [
      "E-commerce and retail brands requiring studio product photography, catalog imagery and short-form product videos at scale",
      "Corporations and hospitality/real-estate brands commissioning commercial advertising shoots, brand films and facility visuals",
      "Marketing teams needing high-production campaign creatives and social media video assets",
    ],
    relatedServiceSlugs: ["ecommerce", "branding", "marketing", "support"],
    relatedIndustries: ["E-commerce & Retail", "Hospitality", "Real Estate", "Manufacturing"],
    faqs: [
      {
        question: "Are creative assets formatted for e-commerce platforms and digital ad channels?",
        answer:
          "Yes. All photography and video deliverables are retouched, color-graded and exported in exact aspect ratios and compression specs for Shopify, Amazon, marketplaces, web storefronts and social ad platforms.",
      },
      {
        question: "Can Vensai handle both the product shoot and the e-commerce store upload/catalog management?",
        answer:
          "Yes. Our creative production team hands assets directly to our e-commerce and catalog specialists to publish listings, optimize product content and launch campaigns.",
      },
    ],
  },
  "support": {
    whoItIsFor: [
      "Businesses needing reliable post-deployment software maintenance, L1–L3 technical troubleshooting and SLA monitoring",
      "E-commerce and service brands requiring dedicated chat and voice customer support, order tracking and complaint resolution",
      "Growing companies looking for managed helpdesk ticketing and escalation operations without internal staffing overhead",
    ],
    relatedServiceSlugs: ["software-development", "ecommerce", "cloud-devops", "integrations"],
    relatedIndustries: ["E-commerce & Retail", "Healthcare", "Logistics & Transportation", "Financial Services"],
    faqs: [
      {
        question: "Does Vensai provide both technical software support and customer service (chat/voice)?",
        answer:
          "Yes. We provide L1/L2/L3 application and infrastructure technical support as well as trained customer support executives handling live chat, voice calls, email tickets, order inquiries and escalations.",
      },
      {
        question: "Can Vensai support systems that are already live in production?",
        answer:
          "Yes. For existing systems, we conduct a structured onboarding and technical audit to document SOPs and architecture before assuming ongoing maintenance and support SLA coverage.",
      },
    ],
  },
};


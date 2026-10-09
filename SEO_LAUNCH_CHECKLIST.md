# VENSAI LABS — PRODUCTION SEO & CONVERSION LAUNCH CHECKLIST (`SEO_LAUNCH_CHECKLIST.md`)

This launch & post-launch governance checklist covers environment configuration, search engine verification, structured data monitoring, analytics setup, and ongoing editorial expansion for **Vensai Labs**.

---

## 1. Pre-Deployment & Environment Configuration

- [x] **Canonical Production Origin (`NEXT_PUBLIC_SITE_URL`)**
  - Default configured in `src/lib/seo.ts`: `https://vensailabs.com`.
  - If deploying to a custom primary domain or staging preview environment, set `NEXT_PUBLIC_SITE_URL=https://your-production-domain.com` in your hosting environment variables (Vercel / AWS Amplify / Docker).
- [x] **Trailing Slash & Header Normalization**
  - `trailingSlash: false`, `poweredByHeader: false`, and `compress: true` configured in `next.config.mjs`.
  - Security headers (`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`) and immutable brand asset caching (`Cache-Control: public, max-age=31536000, immutable` on `/brand/*`) active.
- [ ] **HTTPS & Host Redirect Enforcement (Hosting Layer)**
  - In DNS / CDN / Hosting settings (e.g., Cloudflare, Vercel, AWS CloudFront), enforce a permanent `301` redirect from `http://` to `https://` and from `www.vensailabs.com` to `https://vensailabs.com` (or vice-versa, matching `NEXT_PUBLIC_SITE_URL`).
- [ ] **Replace Placeholder Contact Details Before Public Ad Spend**
  - Update `BRAND_CONFIG.contactPlaceholders` in `src/data/vensai-data.ts` (`phone`, `whatsapp`, and physical `locations`) with verified production phone numbers and office addresses once finalized.

---

## 2. Search Engine & Webmaster Tools Onboarding

- [ ] **Google Search Console (GSC)**
  1. Add `https://vensailabs.com` as a **Domain Property** in Google Search Console via DNS TXT verification.
  2. Submit `https://vensailabs.com/sitemap.xml` under **Indexing → Sitemaps**.
  3. Inspect and request indexing for priority commercial hubs:
     - `/`
     - `/services`
     - `/solutions/ecommerce`
     - `/solutions/consulting`
     - `/solutions/support`
     - `/industries`
     - `/insights`
     - `/about`
     - `/contact`
- [ ] **Bing Webmaster Tools & IndexNow**
  1. Import verified site from Google Search Console into **Bing Webmaster Tools** (which also powers DuckDuckGo, Yahoo, and ChatGPT Search / Copilot discovery).
  2. Submit `https://vensailabs.com/sitemap.xml`.
- [ ] **Rich Results & Schema Validation**
  - Run Google’s **Rich Results Test** (`https://search.google.com/test/rich-results`) and **Schema Markup Validator** (`https://validator.schema.org/`) on:
    - `/` (`Organization`, `ProfessionalService`, `WebSite`, `WebPage`, `FAQPage`)
    - `/services/software-development` (`Service`, `OfferCatalog`, `FAQPage`, `BreadcrumbList`)
    - `/insights` (`CollectionPage`, `ItemList`, `TechArticle`, `BreadcrumbList`)

---

## 3. Analytics, Tag Manager & Conversion Funnel Wiring

- [x] **Frontend Conversion Event Layer (`src/lib/analytics.ts`)**
  - Privacy-safe (zero-PII) `trackConversionEvent()` is wired and automatically pushes events to `window.dataLayer` (GTM), `window.gtag` (GA4), and `window.dispatchEvent(new CustomEvent("vensai:conversion"))`.
- [ ] **Connect Google Analytics 4 (GA4) / Google Tag Manager (GTM)**
  - Add your GTM container snippet or `@next/third-parties/google` GA4 ID in `src/app/layout.tsx` once your production Measurement ID (`G-XXXXXXXXXX`) is created.
  - Mark the following emitted events as **Key Events (Conversions)** in GA4:
    - `lead_form_submit` (includes `service_required`, `project_type`, `budget_range`)
    - `direct_channel_click` (includes `channel: "email" | "phone" | "whatsapp"`)
    - `career_application_submit` (includes `role_track`)
- [ ] **Connect Form Backend Endpoint (CRM / Email Notification)**
  - Wire `handleSubmit` in `src/app/contact/ContactClient.tsx` and `src/app/careers/CareersClient.tsx` to your production API route (`/api/contact`, HubSpot, Odoo CRM, Zoho, or Resend/SendGrid email webhook).

---

## 4. Ongoing Content & Authority Expansion Cadence

- [ ] **Populate Client-Authorized Case Studies**
  - As client NDAs allow, replace the 3 structured blueprints in `CASE_STUDY_BLUEPRINTS` (`src/data/vensai-data.ts`) with named or anonymized production metrics and verified executive quotes in `CaseStudiesSection.tsx`.
- [ ] **Expand `/insights` Technical Briefings**
  - Publish 1–2 deep technical briefings per month in `INSIGHTS_ARTICLES` targeting problem-aware queries (e.g., SAP BTP clean-core patterns, Shopify to Odoo ERP reconciliation, OWASP API security checklists) and link each briefing to 2–3 `/services/[slug]` pages.
- [ ] **Quarterly Technical SEO Health Check**
  - Re-run `npm run build` and `verify_seo.py` before major releases to ensure 100% unique titles, meta descriptions, self-referencing canonicals, single H1s, and valid JSON-LD across all new routes.

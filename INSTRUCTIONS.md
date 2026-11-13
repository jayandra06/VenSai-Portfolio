# Vensai Labs — Design & Content Rebuild Instructions

Use this file as the source of truth for transforming [vensailabs.in](https://vensailabs.in) from a flat, AI-looking white-and-blue template into a mature, high-craft corporate site. Work in this repo. Do not invent headcount, seat counts, certifications, or client logos that are not already in the codebase or confirmed in copy. Do not commit or push unless the user explicitly asks.

**Stack already in `package.json` (use these; do not add a new animation library unless truly necessary):**

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 3.4, `clsx`, `tailwind-merge`
- `framer-motion` `^12.4.7` — installed, but almost unused (only a page-transition wrapper in `src/app/template.tsx`). This is the motion engine. Use it thoroughly.
- `lucide-react` `^0.475.0` — fine for UI chrome (nav, forms, utility). Do **not** let Lucide be the only visual system. Pair it with custom SVG marks, generated/editorial artwork, and case-study imagery.
- Existing helpers: `Reveal` and other primitives in `src/components/ui/EnterpriseUI.tsx`. Upgrade them if they feel generic; do not throw the design system away and start over.

**Do not change:** existing routes (except add `/work` and related case-study routes as specified below), `BRAND_CONFIG` legal facts (legal entity, CIN, RoC, Hyderabad · Visakhapatnam, contact channels), or the App Router + Tailwind + TypeScript architecture. `npx tsc --noEmit` must pass when you are done.

---

## 0. What the reference sites actually do well

The founder also built [euroasianngroup.com](https://euroasianngroup.com) and [tunalismus.com](https://tunalismus.com). Do **not** clone either brand (no marine gold/aqua identity, no language-school warmth, no first-person “About Me” voice). Steal the *craft*, not the costume.

### euroasianngroup.com — editorial corporate craft

- **Typography has roles, not one Inter stack.** Headings sit on Montserrat (Oswald as a condensed companion), subheads on Lato, body on Open Sans. The type is tight, tracked, and confident. Display lines feel designed, not “default Tailwind `font-semibold`.”
- **Color has depth and temperature.** It is not a white page with one blue button. Surfaces move between deep navy (`#0a1628`, `#020a1f`, `#0b1f3b`), ocean teal (`#0077b6`, `#1c83bd`), electric periwinkle (`#4F7CFF` / `#9DB2FF`), cyan highlights (`#00d2ff`), and a restrained gold (`#d4af37`). Light sections exist, but they are interrupted by dark editorial bands and image-led panels.
- **The hero has a product as the centerpiece**, not a paragraph. “Our Flagship Technology — Ship Span ERP” is a named artifact with a real UI/screenshot (`ShipHero.png`) and a supporting Part Finder visual. The company feels like it *makes things*.
- **Photography does the selling.** Verticals are large image-backed cards (IT services, marine software, electromechanical engineering, warehousing, aerial software, marine spares), not equal text tiles. There is a journey timeline with real photographs, a building image, and product UI — not a wall of logo PNGs.
- **Motion is structural, not decorative noise.** A thin aqua-to-blue scroll-progress bar with a soft glow sits at the very top. The nav starts transparent and solidifies on scroll (`duration-500`) with `backdrop-blur`. Mega-menus ease in. Cards and sections use `fadeInUp`. A 30s marquee adds rhythm. Hover states are slow enough to feel expensive.
- **Layout rhythm is magazine-like:** mega-nav with categorized columns, a flagship product hero, a photographic timeline, numbered verticals (01–07), then FAQ. Sections change scale, surface, and media. The page is not one long ice-white column.

### tunalismus.com — human texture, motion, and typographic character

- **A distinctive display face.** Bricolage Grotesque gives the site a voice before a single sentence is read. Vensai should not use this font, but it *must* stop looking like every Inter + Manrope SaaS landing page.
- **A warm, unexpected palette.** Dusty orange (`#fb8500`), soft blue (`#8ecae6`), deep ink (`#023047`), cream paper (`#feffd2`, `#f8f9fa`), and occasional deep plum. Light and dark mode both feel designed. Accent color is used with intent, not as a wash.
- **A visual ritual in the hero.** A “0% Loaded” sequence and canvas-driven motion make the first screen an *experience*, not a headline + two buttons. There is a custom `bg.png`, a real founder portrait (`sama.png`), and glass (`backdrop-blur-3xl`) in a floating pill nav.
- **Micro-motion has personality:** 3s shimmer on gradient text, `bounceIn` entrances, scroll-locked typographic statements, rounded pill controls. It still respects a human pace.
- **Imagery is people and places**, not icons in circles. Course and article cards are photography-led. The founder is present. The site feels inhabited.
- **Copy is written, not generated.** “About Me. My story with you.” / “What I Offer You.” / “Language Learning, Designed for Real Life.” Short, specific, human. Offers are packaged clearly (Individual / Corporate / Education Institute) instead of a 16-item service dump.

### What Vensai should take from both

1. A typographic hierarchy with a real display voice.
2. Alternating dark and light editorial surfaces, plus a second accent so the brand is not “blue on white.”
3. A hero with a crafted visual/motion centerpiece — a made object, not a slogan.
4. Photography, generated art, and product/work imagery instead of logo variants.
5. Motion that changes how sections arrive and how cards are explored.
6. Case studies and offerings presented as visual stories, not uniform text cards.
7. Human, specific sentences. No brochure clichés.

---

## 1. Design & visual direction

### 1.1 Surfaces, color, and depth

Stop treating the site as a flat white (or ice `#F7F9FC`) sheet with `#0066FF` / `#0A84FF` buttons.

Keep the electric blue as *an* accent — it is already in `tailwind.config.ts` (`vensai.electric`, `royal`, `sky`) — but build a richer system around it:

- **Ink / editorial dark:** deepen `vensai.obsidian` / navy usage. Use full-bleed dark sections (hero visual stage, case-study stage, vendorship credibility, final CTA). Dark mode and dark *sections* on a light page are different tools; use both.
- **Paper / warm light:** replace sterile pure white and generic ice with a slightly warm paper (e.g. `#F4F1EA` / `#F7F4EE`) and a cool mist for technical sections. The contrast between paper, mist, and ink is the rhythm.
- **Second accent:** add one non-blue accent for highlights, metrics, and case-study tags — a muted copper, amber, or teal. Use it sparingly so blue stays primary without becoming the entire look.
- **Texture and depth:** subtle grain or paper noise, fine grid or topographic line work, soft gradient meshes, and layered shadows. Cards should lift, not just change border color from slate-200 to electric blue.
- **Hierarchy inside cards:** oversized index numbers, a visual header (image, still, or abstract), a short title, one sentence, and a metric. Not icon + heading + paragraph + “Learn more” on every tile.
- **Light and dark mode** both need this system. Do not leave dark mode as “invert the white page.”

Update `src/app/globals.css` and `tailwind.config.ts` so tokens — not one-off hex classes — carry this system.

### 1.2 Typography

Inter + Manrope, used as almost the same weight and size everywhere, is why the site feels like a template.

- Keep a clean grotesque for UI and body if useful, but give **display headlines a more designed face** (examples in the same professional register: Newsreader or Instrument Serif for editorial headlines, or a sharper sans such as Geist / Plus Jakarta / Outfit for display — pick one pairing and commit). Load via `next/font` in `src/app/layout.tsx`.
- Define roles: **display** (hero and section titles), **sans** (body, nav, UI), **mono** (codes, CIN, metrics). Track display tightly; give body a real measure (max ~36–40em) and a generous line height.
- Section eyebrows should not scream `UPPERCASE TRACKING-[0.16em] ELECTRIC BLUE` on every block. That pattern is a large part of the “AI template” feel. Use it once or twice, not sixteen times.

### 1.3 Motion and micro-interactions

`framer-motion` is already a dependency. Use it as a first-class part of the craft, especially in:

- `src/components/sections/HeroSection.tsx`
- `src/components/sections/CaseStudiesSection.tsx`
- `src/components/sections/WhatWeDoSection.tsx`
- `src/components/layout/Navbar.tsx`
- a shared motion helper (upgrade `Reveal` or add `src/components/motion/`)

**Required motion language:**

- Scroll-triggered reveals (`whileInView`, once, modest `y` / opacity / blur). Stagger children of card grids (`staggerChildren` 0.06–0.1s).
- Smooth tab / pillar transitions (layout animations or `AnimatePresence` with `mode="wait"`) for the four business pillars and the case-study filters.
- Hover states that feel physical: image scale ~1.04, soft shadow lift, underline or ink bar, cursor-follow highlight on case-study previews — never aggressive bounce on corporate surfaces.
- Interactive case-study previews (see §1.4).
- Optional but encouraged: a thin reading-progress bar in the nav style of euroasianngroup.com; a restrained hero canvas, SVG, or mesh animation as the visual centerpiece.
- Navbar: background, blur, and height should respond to scroll, not sit as a static white bar.

**Respect `prefers-reduced-motion`.** The repo already zeros animation/transition durations in `globals.css`. Keep that. Motion components must degrade to static, well-laid-out content. No essential information only in animation. Do not ship heavy looped decorations that fight the reduced-motion CSS.

Keep performance adult: no continuous full-viewport particle storms, no layout thrash, lazy-load below-the-fold visuals.

### 1.4 Creative case studies

`src/components/sections/CaseStudiesSection.tsx` and the `CASE_STUDY_BLUEPRINTS` data in `src/data/vensai-data.ts` currently present Globiance, Suta, and Euroasiann Group as identical text cards with codes (“CASE STUDY — 01”), modal popups, and brochure labels like “DELIVERY ARCHITECTURE · CASE STUDY FRAMEWORK” and “Structured Engagement & Case Study System.” That has to go.

Rebuild them as visual, interactive stories:

- **Filterable** by IT / Non-IT / BPO (and “All”). A study can belong to more than one tag if accurate.
- **A distinctive layout per study**, not one card skin reused three times. Ideas to mix:
  - **Globiance:** dark, high-contrast terminal / trading-floor atmosphere; live-preview link card to [globiance.com](https://globiance.com/); metric callouts (latency, uptime, audit outcome) as large typographic figures; a simple architecture or order-flow diagram (SVG), not a wall of jargon.
  - **Suta:** warmer, commerce-editorial, before/after or “peak sale vs ordinary day” treatment; merchandising / warehouse-sync flow; live link to [suta.in](https://suta.in/); conversion and load-time metrics as the visual hook.
  - **Euroasiann Group:** industrial-editorial, product-in-context (ERP / operations), live link to [erp.euroasianngroup.com](https://erp.euroasianngroup.com/) and/or [euroasianngroup.com](https://euroasianngroup.com); a module map (Fleet, Procurement, Inventory, Crew, Vendors, Compliance) rather than a paragraph about “multi-territory jurisdictions.”
- Homepage: three rich previews (image/visual header, one-line result, tags, CTA). Full narrative lives on **`/work`** and `/work/[slug]`.
- Do not rename these into “blueprints.” They are case studies of real work. If testimonials stay, they need a person’s name and role — never a faceless label like “Global Supply Chain Director” alone. If a real name is not available, do not fake one; use a clearly attributed company-and-role quote or omit it.

### 1.5 Imagery and visual assets

The homepage is currently a logo-variant gallery. That is the single biggest visual failure.

**Plan (create assets under `public/visuals/` or similar; reference them in components):**

| Placement | What to make | Suggested size |
| --- | --- | --- |
| Hero centerpiece | Custom abstract 3D, SVG, canvas mesh, or a crafted illustration of “software + operations” — not a logo, not a generic unDraw. | 1600×1200 (2x for 800×600 slot) or a fluid canvas |
| Open Graph / social | Proper 1200×630 editorial card (headline + still), not a 32px-class logo. | 1200×630 |
| Four pillars | Four distinct marks or stills (software, vendorship, BPO, non-IT). Custom SVG or generated art with a shared style. | 1200×800 |
| Case studies | One key visual each (UI still, editorial collage, or generated scene consistent with the study’s mood). | 1600×1000 |
| `/work` index | The same visuals, richer crops, plus optional architecture diagrams. | 1600×1000 |
| BPO page | Operations imagery that suggests voice + chat + back office (abstract headsets/waves, conversation threads, shift board) — not cloud-provisioning stock. | 1600×900 |
| About / footer band | Office/team **placeholders** for Visakhapatnam Head Office and Hyderabad Business Unit. Use clearly labeled placeholders until real photos are supplied. | 1800×1200, alt text: “Placeholder — Visakhapatnam Head Office” / “Placeholder — Hyderabad Business Unit” |
| Favicon / app icon | A sharper, larger mark than the current tiny logo treatment. | 32, 180, 512 |

Style notes for generated art: restrained, typographic, slightly industrial/editorial. No neon 3D blobs, no glossy robots, no “diverse team pointing at a laptop” stock. Prefer stills that could sit in a printed annual report.

If you generate assets with a tool, commit the files to the repo and use `next/image`. Do not hotlink random Unsplash photos as a permanent art direction (Tunalismus can lean on lifestyle photography; a mid-scale IT/BPO vendor should not look like a stock-photo agency).

---

## 2. Content and brand maturity (human, corporate, not AI-slop)

Vensai Labs is a real Indian software, IT/non-IT, and BPO company run by Vijetha Softwares Pvt. Ltd., with Head Office in Visakhapatnam and a Business Unit in Hyderabad. The site must read like a company that already delivers:

- direct corporate software builds,
- enterprise subcontracting / vendorship for Tier-1 SI and consulting firms (TCS, Deloitte, Wipro, Tech Mahindra and peers),
- BPO voice and chat (and non-voice back office),
- non-IT and digital projects (brand, marketing, creative, campus programs).

It is **not** an MNC and should not pretend to be one. It is **not** a freelance marketplace, startup incubator, or “one partner for everything” slogan shop.

### 2.1 Voice

- Write like a competent delivery head explaining the work to a procurement lead or a founder: plain, specific, calm, slightly proud.
- Short sentences. Concrete nouns (exchange matching engine, flash-sale inventory sync, inbound voice, dedicated offshore pod). Verbs that describe work, not “leverage,” “unlock,” “empower,” or “architect.”
- Headlines should be sharp and professional, not generic taglines. The current homepage headline — **“Software Built to Scale. Operations Built to Last.”** — may stay if the surrounding page finally earns it. The lead must stay specific, not a second slogan.
- Do **not** put Visakhapatnam and Hyderabad in the hero. Cities belong in About, Contact, footer, and vendorship credentials.
- Do **not** lead the hero with CIN or “legal line.” Compliance belongs on `/vendorship`, About, and the footer.

### 2.2 Banned filler (rewrite or delete on sight)

These patterns (and close cousins) are banned:

- “One Business Partner” / “one partner for all your needs”
- “Partner Feedback Architecture”
- “End-to-End Delivery” / “end-to-end technology delivery”
- “DELIVERY ARCHITECTURE · CASE STUDY FRAMEWORK”
- “Structured Engagement & Case Study System”
- “Expert Talent. Real Solutions.”
- “Startup Incubator & Business Consultancy” as a primary identity
- “hire freelance developers” / “freelancing agency” in metadata or body
- “World-class,” “cutting-edge,” “synergy,” “holistic,” “robust ecosystem,” “future-ready,” “digital transformation partner,” “unlock your potential”
- Faceless testimonial labels without a person or a clearly real attribution
- Fake international `hreflang` spam and keyword stuffing (some of this was already cleaned in `src/lib/seo.ts` — do not reintroduce it)

Also clean leftovers that still undermine the new positioning:

- `src/app/page.tsx` metadata still uses “Startup Incubator & Business Consultancy,” `KEYWORDS_FREELANCE`, and phrases like “one business partner multiple capabilities.” Fix page-level metadata and any remaining freelance/incubator framing so it matches the company described above.
- Brand spelling: pick **Vensai** or **VenSai** and use it consistently in UI copy (legal name remains Vijetha Softwares Pvt. Ltd.).

### 2.3 What good copy sounds like (tone examples, not mandatory verbatim)

- Hero lead: “Custom software, enterprise vendorship, non-IT projects, and voice and chat BPO — run by one in-house team.”
- Vendorship: “If you already hold the client relationship, we can take a defined module, a dedicated pod, or a voice/chat process and run it to an agreed SLA.”
- BPO: “Inbound and outbound voice, live chat and email desks, and back-office work including payroll and finance operations. Shifts and languages are scoped per process.”
- Case study card: “Suta’s storefront stayed up through festive sale traffic, and warehouse stock finally matched what the site promised.”

If a sentence could appear on any agency website in the world, rewrite it.

---

## 3. Architecture and page upgrades

### 3.1 Homepage (`src/app/page.tsx` + section components)

The homepage is currently an exhaustive brochure (~process, models, industries, tech-stack wall, FAQs, case cards). Rebuild it as a flagship editorial page:

1. **Hero** — sharp headline, one specific lead, two actions (“Talk to us” / “See the work” or “See what we do”), and a visual/motion centerpiece occupying real space (the way Ship Span occupies Euroasiann’s first screen). No CIN strip. No city name-drop.
2. **Four business pillars** — the primary navigation of the offer, not 16 equal service chips:
   - Software & IT
   - Enterprise Vendorship
   - BPO — Voice & Chat
   - Non-IT & Digital
   Each pillar: a distinct visual, a short human paragraph, and a link to the relevant page (`/services`, `/vendorship`, `/services/kpo-bpo`, and the right non-IT service cluster). Interactive selection / tabs are welcome.
3. **Scale / proof strip** — only facts you can stand behind from existing data (legal entity, in-house delivery, Hyderabad · Visakhapatnam, named case studies, engagement types). Do not invent employee counts, seat counts, ISO badges, or “500+ clients.”
4. **Interactive case studies** — the new visual treatment, with a link to `/work`.
5. **Streamlined industries & tech** — a compact, designed band or logo-less capability strip. Move the long catalogues off the homepage (existing `/industries` and a tighter tech section or subpage). No 3,500-word wall.
6. **A single, quiet close** — consulting/feasibility CTA or contact, plus a short FAQ if it still earns its place (far fewer questions; written in the same human voice).

Rewrite section eyebrows and titles in `WhatWeDoSection`, `ProcessSection`, `WhyVensaiSection`, `EngagementModelsSection`, `IndustriesSection`, `TechEcosystemSection`, and `CaseStudiesSection` so they no longer sound like a pitch deck.

### 3.2 New `/work` in the top nav

- Add `src/app/work/page.tsx` (index) and `src/app/work/[slug]/page.tsx` (Globiance, Suta, Euroasiann).
- Put **Work** in `src/components/layout/Navbar.tsx` as a first-class item (alongside About / Insights / Careers / Contact). Also add it to the footer and `src/app/sitemap.ts`.
- Index: filterable grid, strong visuals, metrics visible at a glance.
- Detail: problem, approach, what was actually built, architecture or flow graphic, outcomes, stack, live preview link. Layout may differ per study (see §1.4).
- Reuse `CASE_STUDY_BLUEPRINTS` (rename in code/UI to case studies if you like, but keep the data accurate). Give each study a stable slug.

### 3.3 `/services/kpo-bpo`

This page must stop reusing a software-delivery template (no “cloud provisioning / data migration” framing). Rebuild it as a real BPO operations page:

- Separate **Voice** (inbound support, outbound sales/collections/verification) from **Non-voice / chat & back office** (live chat, email/tickets, CRM updates, data work, payroll and finance operations).
- Speak in operations language: processes, shifts, languages (only list languages you can honestly support — English, Hindi, Telugu if true; do not invent others), SLAs, and how a process is ramped.
- If exact seat counts or 24×7 coverage are not confirmed in the repo, describe capability qualitatively (“dedicated voice and chat teams in Visakhapatnam and Hyderabad, scoped per process”) rather than fabricating “200 seats, 24×7.”
- Unique visuals and layout — not the generic service template with broken “PROFILE 0 / USE CASE 0” numbering. If that numbering bug still exists on service or `/solutions/support` templates, fix it here as well.

### 3.4 `/vendorship` polish

`src/app/vendorship/page.tsx` already exists for Tier-1 / corporate procurement. It should feel as designed as the homepage, not like a leftover text landing.

Keep the substance:

- Partnership tracks: white-label subcontracting, dedicated offshore pods, staff augmentation, fixed-bid modules, BPO voice and non-voice seats, non-IT execution.
- Legal and compliance: Vijetha Softwares Pvt. Ltd., CIN, RoC, Hyderabad · Visakhapatnam, payroll / PF / ESIC readiness, NDA / BGV, SLA language.
- A direct path for supplier/partner inquiries (not only the generic client form).

Raise the craft: typographic legal block, clearer hierarchy, motion consistent with the rest of the site, no slogan stacking. Do not claim ISO, CMMI, MSME, or GST numbers unless those values already exist in `BRAND_CONFIG`.

### 3.5 Nav, footer, and shared chrome

- Nav: add Work; consider Vendorship under a company or services group so procurement can find it without hunting the footer.
- Footer: keep the real LinkedIn / WhatsApp (or other *actual*) profile URLs — never generic `linkedin.com` / `x.com` homepages. Include Creative Production and Vendorship. Cities, not street addresses, are enough.
- Forms on Contact and Careers should not appear empty before JS. Prefer server-rendered markup.

---

## 4. Execution rules for Cursor

1. **Stay in this repo.** Edit the existing Next.js App Router app. Do not scaffold a new project.
2. **Preserve** current routes, legal facts in `BRAND_CONFIG` / company data, and TypeScript types unless you are extending them.
3. **Add `/work` (and `/work/[slug]`)** and wire nav + sitemap. Other new routes only if they are truly needed (do not create a maze of marketing pages).
4. **Use `framer-motion` and `lucide-react` already in `package.json`.** Add a dependency only if it is essential (e.g. a font via `next/font` does not need an npm package).
5. **Write real UI copy in the components and in `src/data/vensai-data.ts`.** Do not leave “lorem” or “TODO: write later.”
6. **Do not invent proof.** No fake ISO marks, awards, headcount, revenue, or client logos. Named case studies and legal entity facts are enough if presented well.
7. **Accessibility:** keyboardable filters and tabs, real labels, sufficient contrast on both paper and ink surfaces, meaningful `alt` on images, and `prefers-reduced-motion` support.
8. **Quality gate:** run `npx tsc --noEmit` and fix every error you introduce. Follow with a production build if time allows (`npm run build`).
9. **Do not commit or push** unless the user explicitly asks you to. Leave a clear summary of files changed and any placeholder assets that need real photography later.
10. **Local dev on Windows:** If `npm run build` fails with `UNKNOWN: read` under OneDrive, use `npm run dev:local` or `npm run dev:clean:3060` from a non-synced copy.

11. **Work in a coherent pass**, not a single color tweak. Priority order if you must stage the work:
    1. Design tokens, typography, global motion helpers
    2. Homepage hero, pillars, proof strip, case-study previews
    3. `/work` + detail pages
    4. BPO page + vendorship polish
    5. Nav/footer/metadata cleanup and leftover AI copy sweep

When you finish, the site should feel like the same company that could have built euroasianngroup.com and tunalismus.com: deliberate type, photographed or crafted visuals, quiet motion, and copy a real person would send to a client.

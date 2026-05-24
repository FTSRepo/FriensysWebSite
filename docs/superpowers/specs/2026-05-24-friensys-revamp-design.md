---
title: Friensys Website Revamp — Design Spec
date: 2026-05-24
branch: revamp/competitive-rebuild
authors: [Claude (with sacredabhishek)]
status: approved-design
companions:
  - ../../../../instinctbits-lab/Friensys_Aseshar/Competitor-Analysis/Competitor-Analysis-Strategic.md
  - ../../../../instinctbits-lab/Friensys_Aseshar/Competitor-Analysis/Competitor-Analysis-Tactical.md
---

# Friensys Website Revamp — Design Spec

> Audience: implementation engineers + Friensys leadership. Source of truth for the Phase 1 marketing-site revamp. Pairs with the existing competitor analysis docs.

## TL;DR

Refocus `friensys.com` as a pure **School ERP** brand with an AI-native dark-futuristic redesign, migrated to **Next.js 15 + App Router**, instrumented for aggressive SEO + AI-search visibility. Phase 1 ships a complete MVP marketing site (~30 pages) in a fresh `friensys-next/` scaffold alongside the current Vite app. Programmatic SEO (~100-150 city + feature + comparison pages) and live AI features deferred to Phase 2.

The redesign closes the three deal-killers identified in the Tactical competitor analysis: no AI narrative, broken legal pages, no trust signal density.

## Approach (Locked Decisions)

Decisions made during brainstorming on 2026-05-24:

| Decision | Choice | Rationale |
|---|---|---|
| Site focus | **Pure School ERP play** | Friensys.com refocuses 100% on school buyers. Services demoted to `/services` overview. Aligned with Strategic doc §6 Option B (simplified — no domain split). |
| Design aesthetic | **AI-native / dark futuristic** | Signals "ahead in technology" pre-text. Pairs with admin-AI positioning. References: Linear, Vercel, Cursor, Anthropic. |
| Tech stack | **Next.js 15 App Router + TS + Tailwind v4 + shadcn/ui** | SSG/ISR required for SEO + programmatic-SEO scale (Phase 2). RSC for performance. TS for content-schema safety. |
| AI narrative | **Admin-AI positioning** | "AI for school admins" (not Kaksha's "AI for students"). Differentiated, defensible. Roadmap-led; no fake live demos. |
| SEO scope (P1) | **Foundation only**; full programmatic SEO in P2 | P1 ships ~30 high-quality pages + AI-SEO infrastructure (schema, llms.txt, sitemap, OG). P2 layers programmatic city/feature/comparison pages on top. |
| Pricing strategy | **Contact-for-pricing (status quo)** | User chose this; DN pricing reveal deferred. `/pricing` page exists, frames tiers conceptually without numbers. |
| Legal/trust pages | **Ship full set in v1** | Closes procurement deal-killer. Privacy, Terms, Cancellation, Refund, License, DPDPA + Trust Center. |
| Build scope | **MVP marketing site (Phase 1)** | One-shot revamp ship. Programmatic SEO pages, comparison pages, deep service pages, individual AI features = Phase 2. |
| Content authorship | **Claude drafts from competitor analysis + Friensys data, user reviews/edits** | Fastest, voice-consistent. User signoff before final. |
| Existing assets | **Carry over all**: school logos, screenshots, FriensysLogo, EmailJS | No re-shoot needed. EmailJS keys reused via env vars. |
| Deployment | **Deferred to Phase 2** | Build + run locally in P1. Deploy decision (Vercel vs Netlify vs self-host) made after spec approval. No domain swap in P1. |
| Repo strategy | **Approach A — Hard rebuild in subfolder** | `friensys-next/` scaffolded alongside current `src/` Vite app. Side-by-side, zero risk to live site. |

## 1. Architecture & Tech Stack

### Repo layout

Additive, not destructive — current site untouched until cutover.

```
FriensysWebSite/                  (existing repo, branch: revamp/competitive-rebuild)
├── friensys-next/                NEW — Next.js 15 app
│   ├── app/                      App Router pages
│   ├── components/               UI primitives + composed sections + layout + forms + seo
│   ├── lib/                      content loaders, SEO helpers, schema builders, utils
│   ├── content/                  MDX blog posts + JSON data (products, schools, testimonials, etc.)
│   ├── public/                   migrated assets (logos, screenshots, brand, og)
│   ├── styles/                   globals + design tokens
│   ├── tests/                    Vitest unit + Playwright smoke
│   ├── package.json
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── README.md
├── src/                          LEGACY Vite app — untouched, reference only
├── package.json                  LEGACY
├── docs/superpowers/specs/       this spec + future specs
└── (existing files...)
```

Run old site: `npm run dev` from root. Run new site: `cd friensys-next && pnpm dev`.

### Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 15 (App Router, RSC, Server Actions) | SSG by default; ISR for blog. |
| Language | TypeScript (strict) | Current site is JS; new build is TS. |
| Styling | **Tailwind v4** + CSS variables | Tokens in `styles/tokens.css`, mirrored in `tailwind.config.ts`. Locked per user 2026-05-24. |
| UI primitives | shadcn/ui | Copy-paste components, fully owned. Themed via CSS vars. |
| Motion | Framer Motion | Carry over — already known + good for dark-futuristic motion. |
| MDX | `@next/mdx` + **Velite** | Type-safe MDX with zod-validated frontmatter. Actively maintained. |
| SEO | `next-sitemap`, custom `next/og` route, manual JSON-LD via `<JsonLd>` component | No `next-seo` (App Router has native `generateMetadata`). |
| Forms | EmailJS (carry over) | Public keys via env; domain allowlist set in EmailJS dashboard. |
| Icons | Lucide React | Replaces `react-icons` (lighter, tree-shakeable). |
| Theme | `next-themes` | Dark default; light toggle optional. |
| Package manager | pnpm | Faster, disk-efficient. |
| Testing | Vitest (unit) + Playwright (smoke) | Light coverage in P1; expand in P2. |
| CI | GitHub Actions: lint + typecheck + build + Lighthouse | Lighthouse CI fails PRs with regressions >10% LCP or score <90. |

### Server vs Client components

- **Default**: Server Components (RSC).
- **Client (`'use client'`)** only for: forms (state + EmailJS SDK), interactive carousels, scroll-driven motion, theme toggle, demo-request modal.
- Goal: <100KB initial JS payload.

## 2. Information Architecture

Pure School-ERP play. URL structure:

```
/                                  Home — AI-native ERP narrative
/school-erp                        Flagship product page
/products                          Product index
  /products/school-erp             (alias)
  /products/college-erp
  /products/school-app
  /products/escalation
  /products/odsas
  /products/customer-loyalty
  /products/marketplace
  /products/education-crm
/ai                                AI-in-ERP narrative + roadmap
/customers                         Logo wall + 3-5 case studies
/pricing                           Contact-for-pricing, tiers conceptual
/blog                              MDX-driven
  /blog/[slug]                     Individual posts
/about                             Story, founders, 8-year arc, DigitechNomads partnership
/careers                           Carry over (recently fixed — keep)
/contact                           Demo request + general
/security                          Trust center (DPDPA, AWS Mumbai, ISO roadmap)
/services                          Demoted services overview only (P1)
/legal/privacy-policy
/legal/terms-of-service
/legal/cancellation-policy
/legal/refund-policy
/legal/license
/legal/dpdpa-compliance
/robots.txt                        AI crawlers allowed
/sitemap.xml                       Auto-generated
/llms.txt                          AI-SEO structured map
/llms-full.txt                     Full content for LLM ingestion
```

**Header nav**: Product ▾ | Features ▾ | AI | Pricing | Customers | Blog | Contact → [Book Demo]

**Footer**: 6-column — Product / Features / Solutions (CBSE, ICSE, State Board) / Company / Resources / Legal + Connect.

### Phase 1 page list (final)

Home, /school-erp, /products + 7 product subpages, /ai, /pricing, /customers, /blog + 5 seed posts, /about, /careers, /contact, /security, /services (overview only), 6 legal pages. Total: ~30 unique pages.

### Phase 2 (deferred)

- `/features/[slug]` — ~20 feature deep pages (admissions, fees, attendance, report-cards, parent-app, transport, timetable, communications, library, etc.)
- `/school-erp/[city]` — ~50 city pages (programmatic SEO)
- `/compare/friensys-vs-kaksha`, `/compare/friensys-vs-parentsalarm`
- `/partners` — full Partner Program with public partner economics
- `/services/cloud-solutions`, `/services/it-consulting`, `/services/software-development`, `/services/software-products` — deep service pages
- Real AI features (live AI report card / fee reminder) shipped + showcased on `/ai`
- Multi-language (Hindi parent portal)
- Domain cutover + DNS swap

### Redirects (from old → new)

Defined in `next.config.ts`:

| Old path | New path | Status |
|---|---|---|
| `/product/schoolErp` | `/school-erp` | 308 |
| `/product/schoolApp` | `/products/school-app` | 308 |
| `/product/escalation` | `/products/escalation` | 308 |
| `/product/ODSAS` | `/products/odsas` | 308 |
| `/product/customerLoyalty` | `/products/customer-loyalty` | 308 |
| `/product/marketplace` | `/products/marketplace` | 308 |
| `/product/collegeErp` | `/products/college-erp` | 308 |
| `/product` | `/products` | 308 |
| `/privacyPolicy` | `/legal/privacy-policy` | 308 |
| `/cancellationPolicy` | `/legal/cancellation-policy` | 308 |
| `/underDevelopment` | `/` | 308 (only after legal pages live — fixes the broken-link trust killer) |
| `/services/services` | `/services` | 308 |
| `/services/cloudSolutions` | `/services` | 307 (P1; deep page in P2) |
| `/services/itConsulting` | `/services` | 307 (P1) |
| `/services/softwareDevelopment` | `/services` | 307 (P1) |
| `/services/softwareProduct` | `/services` | 307 (P1) |
| `/apply` | `/careers` | 308 (apply form embedded on careers page) |

## 3. Design System

### Tokens

Dark mode default. Light mode optional toggle.

```css
:root[data-theme="dark"] {
  --bg-base: #0A0B0F;
  --bg-elevated: #11131A;
  --bg-overlay: #1A1D27;
  --border-subtle: #1F2230;
  --border-strong: #2A2F40;
  --text-primary: #F4F6FB;
  --text-secondary: #A0A6B8;
  --text-muted: #6B7185;
  --accent-primary: #7C5CFF;   /* electric violet — Friensys signature */
  --accent-glow: #9B7BFF;
  --accent-cyan: #4DD4FF;      /* secondary, AI badges + data viz */
  --accent-lime: #B8FF5C;      /* live / shipping badges */
  --accent-amber: #FFB84D;     /* roadmap / coming-Q3 badges */
  --danger: #FF5C7A;
}
```

### Typography

- Display: **Geist** (or Inter Tight) — geometric, modern, free.
- Body: **Inter**.
- Mono: **Geist Mono** — code blocks, terminal accents, AI-inside stat tickers.
- Weights: 400 (body), 500 (UI), 700 (display). No thin weights (poor Indian-screen rendering).
- Scale: 12 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 64 / 88 px.

### Spacing & layout

- 8-pt base.
- Container max-width: 1280px.
- Grid: 12-col desktop, 8-col tablet, 4-col mobile.
- Section vertical padding: `clamp(80px, 12vw, 160px)`.

### Visual signatures

These are intentional differentiators, not decoration.

1. **Gradient mesh hero** — animated SVG/Canvas noise mesh in violet→cyan, ~5% opacity drift. Home + AI + Pricing only.
2. **Terminal/data accents** — `font-mono` annotations beside stats (`> 300 schools`), typed-reveal on scroll.
3. **Aurora borders on key CTAs** — animated gradient stroke around primary buttons + "Book Demo".
4. **Bento grids** — asymmetric product feature surfaces (Linear/Apple style). Not vanilla card grids.
5. **Soft-glow shadows** — `box-shadow: 0 0 60px -20px hsl(252 100% 70% / 0.3)` on interactive elevated surfaces.
6. **Scroll-driven section transitions** — sticky headers, pinned reveal-as-you-scroll on product feature pages (Framer Motion).
7. **Live counters** — KPIs animate 0→N on enter-view.

### Motion language

- Page transitions: fade + 8px translate-up, 250ms.
- Hover: scale 1.02 + glow intensity bump, 150ms.
- Reveal-on-scroll: opacity 0→1 + 16px translate-y, 400ms, stagger children 60ms.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- `prefers-reduced-motion` respected globally.

### Image style

- Product screenshots framed in browser/phone chrome mockups with subtle ambient-color glow.
- School logos: monochrome filter on idle, full color on hover.
- Hero illustration: abstract isometric (placeholder SVG in P1; custom commission later).

### Anti-patterns (forbidden)

- Emoji icon spam. (Lucide monoline only.)
- Stock photos of people. (Product UI screenshots + custom illustration only.)
- "Abstract blob" decorative SVGs.
- Bouncy / playful motion. (Subtle, fast, intentional.)

### Accessibility

- WCAG AA minimum; AAA for body text.
- Focus rings: 2px `--accent-primary`, 4px offset.
- Color contrast verified on every accent ↔ background combo.
- Forms: labels associated, errors `aria-live`, required marked.

## 4. Content Strategy & SEO

### Positioning

**H1 (Home)**: *"The AI-ready school ERP trusted by 300+ schools across India."*
**Sub**: *"From admissions to graduation — fees, attendance, report cards, parent comms. Now with admin-AI built in."*
**Tagline / footer**: *"Operations-first. AI where it matters. DPDPA-aligned."*

### Page content blueprint (P1)

| Page | Primary H1 framing | Key sections | SEO target keywords |
|---|---|---|---|
| Home | Positioning above | Trust strip → Why Friensys (3 pillars: Ops depth, Admin-AI, DPDPA) → Product bento (7 cards) → AI teaser → Stats counter → Testimonials → Final CTA | "school erp india", "school management software" |
| /school-erp | "School ERP for principals who care about cash flow" | Fees spotlight → Attendance + bus → Report cards (CBSE/ICSE) → Parent app → 40-module accordion → Integrations → Demo CTA | "school erp", "school management system india" |
| /products/[slug] | Per-product tagline | Hero → Feature bento → Screenshots → Use-case → CTA | per-product long-tail |
| /ai | "Admin-AI. Built for the people who run schools." | Hero → Live feature(s) [roadmap only in P1] → Roadmap → "Admin-AI > Student-AI" comparison-without-naming → Demo CTA | "ai school management", "ai school erp india" |
| /pricing | "Two ways to start. One platform." | Conceptual tiers (no numbers) → FAQ → Contact form | "school erp pricing india" |
| /customers | "Schools running on Friensys" | Logo wall (25) → 3-5 case study cards → Testimonials → Stats | "school erp customers", "case studies" |
| /about | "Built for Indian schools. From Greater Noida, since 2017." | Story → Founder bios (user provides) → DN partnership → 8-year timeline → Office + contact | brand searches |
| /security | "Your school's data. Hosted in India. Compliant by design." | DPDPA → AWS Mumbai → Encryption → Backup → ISO 27001 roadmap → Audit log → Contact security | "school erp dpdpa", "school erp security" |
| /careers | Carry-over content | Open roles → Culture → Apply form | careers searches |
| /contact | "Talk to Friensys" | Form (demo/general) → Phone, email, address → Map → Office hours | brand searches |
| /services | Demoted overview | What we do (cloud, IT consulting, software dev) → Contact | brand searches |
| /blog | Index | Post grid → Categories → Newsletter signup | content marketing |
| /blog/[slug] | Per post | MDX body + sidebar related posts + CTA | long-tail |
| /legal/* | Standard legal | Plain prose | required pages |

### Seed blog posts (5 — Phase 1)

Drafted by Claude using competitor analysis + Friensys data, reviewed by user.

1. **"DPDPA for Indian schools: what principals must know by 2026"** — kills compliance objection; un-owned keyword.
2. **"How to switch from spreadsheets to school ERP without losing a year of data"** — bottom-of-funnel evergreen.
3. **"CBSE report card automation: from 3 weeks to 30 minutes"** — direct keyword fight with Parentsalarm.
4. **"Why AI for school admins beats AI for school students (for now)"** — narrative differentiation from Kaksha.
5. **"Fee collection on autopilot: what 300 schools taught us about reminders"** — operational depth + social proof.

Each post: 1200-1800 words, structured H2/H3, internal links to 2-3 product pages, CTA at end.

### SEO architecture

- **Per-page metadata**: `generateMetadata()` exports — title (50-60ch), description (150-160ch), OG image (auto-generated via `next/og`), canonical, robots.
- **JSON-LD schema** (`<JsonLd>` component, server-rendered):
  - Home: `Organization` + `WebSite` + `SoftwareApplication`
  - Product pages: `Product` + `Offer` + `AggregateRating` (when reviews exist)
  - Blog posts: `Article` + `BreadcrumbList` + `Author` + `FAQPage` (where applicable)
  - Customers: `ItemList` + `Organization` for each school
  - About / Contact: `LocalBusiness` with Greater Noida address
- **`sitemap.xml`**: `app/sitemap.ts` auto-generates from app routes.
- **`robots.txt`**: explicit allow for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `Applebot`.
- **`/llms.txt`**: structured site map for LLMs (title, summary, top pages, contact).
- **`/llms-full.txt`**: full concatenated content for ingestion (built at build time).
- **OG image generator**: `app/api/og/[...slug]/route.tsx` using `next/og` — per-page branded OG.
- **Performance budget**: LCP <2s, CLS <0.05, INP <200ms, JS <100KB initial. Lighthouse 95+ on top 5 pages.
- **Internal linking**: every product page links to /ai + /pricing + /customers. Every blog post links to 2-3 product pages. Footer = global SEO hub.

### AI-SEO playbook (key facts blocks, FAQ schema, comparison tables)

- Every key page has a "key facts" block (definitions + stats) in clean prose — citation-bait for LLMs.
- `FAQPage` schema on Home, /school-erp, /pricing, /security.
- Comparison tables (Friensys feature matrix) rendered as semantic HTML tables — LLMs parse them reliably.
- Footer includes brand entity sentence ("Friensys is a school ERP serving 300+ schools across India…") on every page for repeated brand context.

### Trust-signal placements (per Tactical doc)

- **Home**: 25-logo strip + KPI counter (300+/40+/8yr) + 3 named testimonials with school + city + photo.
- **School ERP page**: "Trusted by X CBSE/ICSE/State schools" + named testimonials inline.
- **Footer**: DPDPA badge + "ISO 27001 in progress" pill + AWS Mumbai badge.
- **Security page**: full trust story, end-to-end.
- **About**: founders with real names + photos + LinkedIn (user provides).

## 5. Component Architecture

```
friensys-next/
├── app/
│   ├── (marketing)/                       Route group — shared header/footer
│   │   ├── layout.tsx                     SiteHeader + children + SiteFooter
│   │   ├── page.tsx                       Home
│   │   ├── school-erp/page.tsx
│   │   ├── products/page.tsx
│   │   ├── products/[slug]/page.tsx       generateStaticParams from content/products.json
│   │   ├── ai/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── customers/page.tsx
│   │   ├── about/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── security/page.tsx
│   │   ├── services/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx           MDX
│   │   └── legal/[slug]/page.tsx          privacy / terms / refund / cancellation / license / dpdpa
│   ├── api/
│   │   ├── demo-request/route.ts          Server Action / proxy for EmailJS
│   │   └── og/[...slug]/route.tsx         next/og dynamic OG
│   ├── layout.tsx                         Root: html, theme provider, fonts, analytics
│   ├── not-found.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── llms.txt/route.ts                  /llms.txt endpoint
│
├── components/
│   ├── primitives/                        shadcn/ui base (Button, Card, Dialog, Input, …)
│   ├── ui/                                Friensys-specific atoms
│   │   ├── AuroraButton.tsx
│   │   ├── GradientMesh.tsx
│   │   ├── TerminalStat.tsx
│   │   ├── LiveCounter.tsx
│   │   ├── BentoCard.tsx
│   │   ├── GlowSurface.tsx
│   │   ├── SchoolLogo.tsx
│   │   ├── BrowserFrame.tsx
│   │   ├── Badge.tsx                      live / coming-Q3 / dpdpa / iso-in-progress
│   │   └── SectionHeading.tsx
│   ├── sections/                          Composed page sections
│   │   ├── home/        (Hero, TrustStrip, WhyFriensys, ProductBento, AITeaser, StatsCounter, Testimonials, FinalCTA)
│   │   ├── school-erp/  (ErpHero, FeesSpotlight, ModuleAccordion, …)
│   │   ├── ai/          (AiHero, LiveFeatures, Roadmap, KakshaCounter)
│   │   ├── pricing/     (PricingTwoTier, PricingFAQ)
│   │   └── shared/      (CTASection, FAQ, LogoWall, CaseStudyCard)
│   ├── layout/
│   │   ├── SiteHeader.tsx                 Sticky, blur backdrop, mega-menu
│   │   ├── SiteFooter.tsx                 6-column
│   │   ├── MegaMenu.tsx
│   │   ├── MobileNav.tsx                  Drawer
│   │   └── ThemeProvider.tsx
│   ├── forms/
│   │   ├── DemoRequestForm.tsx            RHF + zod + EmailJS
│   │   ├── ContactForm.tsx
│   │   └── CareersApplyForm.tsx           Port of current ApplyForm
│   └── seo/
│       ├── JsonLd.tsx
│       ├── OrganizationSchema.tsx
│       ├── ProductSchema.tsx
│       ├── ArticleSchema.tsx
│       ├── FAQSchema.tsx
│       └── BreadcrumbSchema.tsx
│
├── content/
│   ├── products.json                      7 products
│   ├── schools.json                       25 client schools
│   ├── testimonials.json                  curated
│   ├── stats.json                         300+ / 40+ / 8 yrs / etc
│   ├── ai-features.json                   live + roadmap
│   ├── modules.json                       40+ ERP modules
│   ├── case-studies.json                  3-5 schools, ~200 words each
│   ├── nav.json                           menu structure
│   ├── faqs.json                          per-page FAQ data
│   └── posts/
│       ├── dpdpa-for-indian-schools.mdx
│       ├── switch-from-spreadsheets.mdx
│       ├── cbse-report-card-automation.mdx
│       ├── admin-ai-vs-student-ai.mdx
│       └── fee-collection-autopilot.mdx
│
├── lib/
│   ├── content.ts                         Type-safe loaders (zod schemas)
│   ├── seo.ts                             buildMetadata helper
│   ├── schema.ts                          JSON-LD builders
│   ├── analytics.ts                       GA4 / Plausible wrapper
│   ├── motion.ts                          Shared Framer Motion variants
│   └── utils.ts                           cn() etc.
│
├── styles/
│   ├── globals.css
│   └── tokens.css
│
└── public/
    ├── logos/                             ← src/assets/schoolImage (migrated, kebab-cased)
    ├── screenshots/                       ← src/assets/websiteImage (migrated)
    ├── brand/                             FriensysLogo + variants
    └── og/                                static OG fallbacks
```

### Boundary contracts

- **`components/sections/*`** consume only: `content/*` (via `lib/content.ts`), `components/ui/*`, `components/primitives/*`. Never reach across sibling sections.
- **`components/ui/*`** consume only: Tailwind tokens, `lib/utils`, `framer-motion`. Pure presentational. No data fetching.
- **`lib/content.ts`** is the single source of truth for loading content. Pages call `getProducts()`, `getSchool(slug)`, `getPost(slug)` — never import JSON/MDX directly.
- **`lib/seo.ts`** owns all metadata. Every page exports `generateMetadata` calling `buildMetadata({...})`.
- **Forms** never embed business logic — they delegate to `lib/forms/*` submission helpers.

### Carry-over wiring

- 25 school logos: `src/assets/schoolImage/*.png` → `friensys-next/public/logos/*.png` (filenames normalized to kebab-case).
- 20+ screenshots: `src/assets/websiteImage/*.png` → `friensys-next/public/screenshots/*.png`.
- `FriensysLogo.png` → `friensys-next/public/brand/friensys-logo.png` (+ SVG version if extractable).
- EmailJS: existing keys reused via `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` in `.env.local`. Consolidate on `@emailjs/browser` (drop legacy `emailjs-com`).
- Careers ApplyForm: ported as-is (recently fixed per git history — `747bf28 fixed careers page`).

### Testing strategy (Phase 1)

- **Vitest** unit tests on: `lib/seo.ts` (metadata builder), `lib/content.ts` (loaders + zod validation), `lib/schema.ts` (JSON-LD shape).
- **Playwright** smoke tests:
  - Each Phase 1 page returns 200 + has H1 + has no console errors.
  - `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt` return 200 + valid format.
  - Demo Request form submits successfully (against EmailJS sandbox).
  - All redirects from old URL list return 308.
- **Lighthouse CI** on GitHub Actions — fails PR if LCP regresses >10% or any of Performance/SEO/Accessibility/Best-Practices drops below 90.
- Visual regression deferred to P2 (Percy/Chromatic).

### Error handling

- Forms: inline error + retry. EmailJS failure → fallback `mailto:` link with prefilled subject.
- 404: branded page, suggests Home + Top Products.
- Build-time content validation via zod — broken JSON fails the build, not production.
- Missing images: explicit alt text + fallback gray box (no broken-image icons).

## 6. Phase 1 Deliverables, Milestones, Risks

### In scope (Phase 1)

1. Next.js 15 + TS + Tailwind v4 + shadcn/ui scaffold in `friensys-next/`.
2. Design system: tokens, fonts loaded, motion primitives, UI atoms.
3. Pages: Home, /school-erp, /products + 7 product subpages, /ai (roadmap-only), /pricing, /customers, /about, /careers, /contact, /security, /services (overview).
4. 6 legal pages: privacy, terms, cancellation, refund, license, dpdpa.
5. Blog shell + 5 seed MDX posts.
6. SEO: per-page metadata, JSON-LD per page type, sitemap, robots, llms.txt, llms-full.txt, OG image generator route.
7. Forms: Demo Request, Contact, Careers Apply (port). EmailJS wired.
8. Asset migration: 25 logos, 20+ screenshots, FriensysLogo.
9. Redirects map (next.config.ts) from old URLs.
10. Lighthouse CI workflow (GitHub Actions).
11. README in `friensys-next/` with dev/build/content workflow.

### Out of scope (Phase 2)

- Programmatic SEO: `/school-erp/[city]` (~50 pages) + `/features/[slug]` (~20 pages).
- Comparison pages: `/compare/friensys-vs-kaksha`, `/compare/friensys-vs-parentsalarm`.
- `/partners` Partner Program deep page with public economics.
- Individual `/services/[slug]` deep pages.
- Real shipped AI features (live AI report card / fee reminder integration).
- Domain swap / DNS cutover.
- Multi-language (Hindi).
- ISO 27001 certification process.
- New logo design / brand refresh.
- E2E Playwright suite (smoke-only in P1).
- Percy/Chromatic visual regression.

### Milestones (ordering — calendar dates set during writing-plans)

- **M1 — Foundation**: Next.js scaffold, design tokens, shadcn/ui, layout (header/footer), routing skeleton, asset migration, redirects config.
- **M2 — Core marketing pages**: Home, /school-erp, /pricing, /about, /contact, /security. With real content + SEO + schema.
- **M3 — Product surface**: /products index + 7 product subpages from `content/products.json`.
- **M4 — AI narrative**: /ai page with hero, roadmap, admin-AI > student-AI framing.
- **M5 — Content layer**: /customers, /blog index, 5 MDX seed posts, /careers port.
- **M6 — Legal + trust**: 6 legal pages, /security final polish, footer trust badges.
- **M7 — SEO + perf hardening**: sitemap, robots, llms.txt, JSON-LD audit, OG generator, Lighthouse CI passing 95+.
- **M8 — QA pass**: Playwright smoke, form e2e, link audit, accessibility sweep, content review by user.

### Definition of done

- All Phase 1 pages render statically (or ISR for blog).
- `pnpm build` produces clean output, zero warnings.
- Lighthouse desktop: Performance ≥95, SEO 100, Accessibility ≥95, Best Practices ≥95 on Home + /school-erp + /pricing.
- Mobile Lighthouse: Performance ≥85 on same pages.
- All forms submit via EmailJS (sandbox in dev, real keys in prod-staging).
- `sitemap.xml` lists every shipped route.
- `/llms.txt` returns valid content; `/llms-full.txt` returns concatenated content.
- All redirects from old route list return 308 (or 307 for temporary).
- README documents dev + build + content-editing workflow.
- User has reviewed each page (preview build) and signed off.

### Risks + mitigations

| Risk | Mitigation |
|---|---|
| Brand voice unclear from current site | Claude drafts in operations-first voice (per Tactical doc). User reviews each page before final. |
| AI page over-promises | Frame as roadmap with explicit quarters. P1 ships zero "live" AI features. Roadmap-only. |
| DigitechNomads pricing reveal awkward | User chose contact-for-pricing. `/pricing` shows conceptual tiers only; numbers deferred. |
| EmailJS public key exposure | Public key is designed to be client-side. Use domain allowlist + rate limiting in EmailJS dashboard. |
| 40+ modules content gap | Seed `modules.json` from current-site modules + screenshot inference. User corrects before launch. |
| Founder bios missing | Placeholder block on `/about`. User provides names, photos, LinkedIn before launch. Build doesn't block. |
| 25 testimonials & case studies are stale/weak | List in `content/testimonials.json` + `content/case-studies.json`. User selects 3-5 strongest for prominent placement; rest pruned. |
| Cutover risk (legacy → new) | Phase 1 doesn't cut over. Side-by-side. Zero risk to live site during build. |
| Lighthouse 95+ aspiration | Achievable via SSG + RSC + critical CSS + `next/image`. Document waivers if a page can't hit. |
| Phase 1 scope creep | Hard "out of scope" list. Additions = explicit decision logged; default = push to P2. |
| Tailwind v4 still maturing | Acceptable risk per user decision (locked v4). If blockers appear during impl, fallback to Tailwind v3.4 (no design-level changes). |

### Success criteria (post-launch)

- Lighthouse 95+ on top 5 pages.
- Crawlable by Googlebot, GPTBot, ClaudeBot, PerplexityBot (verified via robots tester + manual crawl).
- All trust signals shippable; zero `/underDevelopment` links anywhere.
- Sales team can point any prospect at `/pricing`, `/security`, `/ai` without disclaiming.
- Net-new pages indexed in Google Search Console within 30 days post-launch.

### Open items (assumptions until user says otherwise)

- **Analytics**: GA4 (most common). Switch to Plausible / PostHog if user prefers.
- **Live AI features in P1**: NONE. `/ai` is roadmap-only.
- **Domain**: stays `friensys.com`, cutover deferred per user.
- **Light mode**: built but toggle defaults to dark.
- **Founder bios + 3-5 case studies + final testimonials**: user provides before launch.
- **MDX tooling**: **Velite** (locked by user 2026-05-24).
- **Tailwind**: **v4** (locked by user 2026-05-24); fallback to v3.4 only if implementation blockers.

## 7. Companions

- `Competitor-Analysis-Strategic.md` — strategic frame, SWOT, positioning (informed §1 + §4)
- `Competitor-Analysis-Tactical.md` — feature gaps, trust signals, demo positioning (informed §4 + §6)
- `Leadgen-Kaksha.md` — Kaksha lead-gen behavior
- `Leadgen-Parentsalarm.md` — Parentsalarm lead-gen behavior

## 8. Next step

After user reviews + approves this spec, transition to the **writing-plans** skill to produce a detailed implementation plan (file-by-file, task-by-task) for Phase 1 execution.

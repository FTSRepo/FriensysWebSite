---
title: Friensys Repositioning — AI-first Software & Consulting Partner
date: 2026-11-11
branch: revamp/competitive-rebuild
status: approved-design
supersedes: "2026-05-24-friensys-revamp-design.md — decision 'Pure School ERP play' and 'AI-native / dark futuristic' aesthetic"
---

# Friensys Repositioning — Design Spec

## TL;DR

Reposition `friensys-next` from a school-ERP product site to an **AI-first software and consulting partner** for startups, SMEs and mid-size organisations. Services lead; the EdTech products become a secondary "Our products" pillar that proves we ship and run software at scale. Visual system moves from dark/neon to **light enterprise-premium**. Work happens inside the existing `friensys-next` app (Approach A); existing product URLs stay live.

## Locked decisions (2026-11-11)

| Decision | Choice |
|---|---|
| Brand shape | Services lead, products secondary |
| Experience claim | **Leadership** has 20+ years of enterprise technology experience. Company claim stays "8+ years in production". Never phrase it as "Friensys, 20+ years". |
| Install base | **300+ institutions** everywhere (fix all "500+" copies) |
| Service lines | AI & GenAI · Custom Software & MVP · Modernisation & Support · Technology Consulting |
| Industries | Education · Retail & e-commerce · Healthcare · Finance, Logistics & Manufacturing |
| Visual direction | Light enterprise-premium; no theme toggle |
| Build approach | Rework existing `friensys-next` (no new scaffold) |
| Primary CTA | "Book a free consultation" → `/contact` |

## Audiences and what each must find within one scroll

| Audience | Need | Where answered |
|---|---|---|
| Startup founder | Can they take my idea to MVP fast and scale it? | Home "Who we help" → `/services/custom-software` |
| SME owner | Can they automate my operations / add AI without a big IT team? | Home → `/services/ai-solutions`, industries |
| Mid-size CIO / existing business | Will they safely take over, modernise and support my systems? | Home → `/services/modernisation-support`, `/security` |
| Anyone | Are they credible? | Proof row, leadership, case studies, products, security |

## 1. Information architecture

```
/                                  Home (rebuilt)
/services                          Hub (rebuilt)
/services/ai-solutions             NEW
/services/custom-software          NEW
/services/modernisation-support    NEW
/services/consulting               NEW
/industries/education              NEW
/industries/retail                 NEW
/industries/healthcare             NEW
/industries/finance-logistics-manufacturing  NEW
/products                          Hub (restyled, secondary)
/products/[slug], /school-erp      Kept, restyled
/ai                                Kept; reframed as "Our AI approach" (no longer school-only)
/about                             Rewritten: leadership + 20+ yrs story
/case-studies                      Renamed from /customers (301 redirect /customers → /case-studies)
/careers, /contact, /blog, /security, /legal/*   Kept, restyled
/pricing                           Removed from nav; page kept, linked from School ERP pages only
```

**Header nav:** Services (mega menu: 4 services + "Who we help" column) · Industries (dropdown) · Products (dropdown) · Case studies · About · [Book a free consultation] button.

**Footer columns:** Services · Industries · Products · Company · Legal. Contact block with phone `+91 96433 14016`, email, address.

## 2. Home page (top to bottom)

1. **Hero.** Eyebrow "AI-first software & consulting partner". H1 "Build what's next. Modernise what works." Sub: "Friensys designs, builds and runs AI-powered software for startups, SMEs and growing mid-size businesses — led by engineers with 20+ years of enterprise technology experience." CTAs: Book a free consultation / See our work. Right: static SVG flow diagram Idea → Build → AI → Scale.
2. **Proof row.** 20+ yrs leadership experience · 8+ yrs shipping in production · 300+ institutions run our software · 12 states. Values from `content/stats.json`.
3. **Who we help.** Three cards: Startups (MVP in weeks, product team on demand, path to scale) · SMEs (automate operations, custom ERP/CRM, AI on your data) · Mid-size & existing businesses (legacy modernisation, cloud migration, AMC, dedicated team). Each links to its matching service page.
4. **Services.** Four tiles, three concrete deliverables each, link to detail page.
5. **How we work.** Discover → Design → Build → Run & Improve. Engagement models: Fixed-scope project · Dedicated team · CTO-as-a-service.
6. **Industries.** Four cards, one proof point each.
7. **Our products.** "We don't just build for clients — we run our own software at scale." School ERP lead card plus compact tiles for the other products.
8. **Leadership.** Cards from `content/team.json` (name, role, years, photo, short bio). The section renders only when `team.json` has at least one entry; no invented people.
9. **Case studies.** 2–3 cards from `content/case-studies.json` in Problem → What we built → Result format.
10. **Final CTA.** Short consultation form (existing `ContactForm`) plus phone and email.

## 3. Detail page template (services and industries)

One shared layout component, content-driven from `content/services.json` and `content/industries.json`:

Hero (title, one-line promise, CTA) → Problems we solve (3–4) → What we deliver (deliverables grid) → How we work (reuses process component) → Tech stack (logo/text chips) → Related case studies / products → FAQ (existing `accordion` + `FAQSchema`) → CTA.

Industry pages without a verified client project show capabilities and relevant products only. **No fabricated client names, logos, metrics or testimonials** on any page.

## 4. Visual system

- **Tokens** (rewrite `styles/tokens.css`): background `#FAFAF7`, surface `#FFFFFF`, ink `#0F172A`, muted `#475569`, border `#E2E8F0`, accent indigo `#3B3BD6`, AI highlight teal `#0D9488`, dark band `#0B1020`. Every text/background pair must pass WCAG AA (4.5:1 body, 3:1 large text).
- **Type:** Geist for headings (already loaded), Inter for body. Scale 14/16/18/22/28/36/48/60.
- **Surfaces:** white cards, 1px border, soft shadow, radius 12px. One dark band per page at most.
- **Removed:** `GradientMesh`, `GlowSurface`, `AuroraButton`, `TerminalStat`, `LiveCounter` usage on marketing pages. Delete the components once unused.
- **Motion:** fade-up on scroll only, disabled under `prefers-reduced-motion`.
- **Layout:** max width 1200px, 16px mobile gutter, no horizontal scroll at 360px.

## 5. Content and SEO

- New JSON content files: `services.json`, `industries.json`, `team.json`. Products, case studies, FAQs, stats reuse existing files (stats updated).
- `lib/site.ts`: new tagline and description matching the hero; `HomeSchemas` switches the primary entity from SoftwareApplication to `Organization` + `ProfessionalService`, products keep `SoftwareApplication` schema.
- Metadata rewritten for home, services, industries, about. `sitemap.ts` and `llms.txt` include the new routes.
- Claude drafts all copy; the user reviews before merge.

## 6. Inputs required from the user

These are factual and cannot be invented:

1. Leadership names, roles, photos and 2–3 line bios (`team.json`).
2. Any non-education client projects that may be named (for retail / healthcare / finance case studies).

Until supplied: leadership section hidden; non-education industry pages run without case studies.

## 7. Testing and verification

- Existing Vitest suites (`tests/lib/*`) stay green; add a content test that every `services.json` / `industries.json` entry has the fields the template needs and that `stats.json` contains no "500".
- `npm run typecheck` and `npm run build` pass.
- Manual browser check of home, one service, one industry, one product page at 360px and 1440px; no console errors.
- Grep check: no remaining "Pure School ERP" copy in home/hero/metadata, no "500+ schools".

## 8. Out of scope

Theme toggle, live AI demos, programmatic SEO pages, pricing for services, deployment/domain cutover, changes to the legacy Vite site in `src/`.

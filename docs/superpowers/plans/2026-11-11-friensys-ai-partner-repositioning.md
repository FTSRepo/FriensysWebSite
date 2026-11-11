# Friensys AI-Partner Repositioning — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn `friensys-next` from a school-ERP product site into an AI-first software & consulting partner site (services lead, products secondary), folding in the website-relevant parts of `docs/Friensys_LinkedIn_and_AI_Strategy_v2.pdf`.

**Architecture:** Content-driven. New JSON content (`services.json`, `industries.json`, `team.json`, `engagements.json`) validated by zod in `lib/content.ts`; one shared detail-page template renders services and industries via `[slug]` routes. The light theme is a token swap in `styles/tokens.css`, so every page that uses token classes flips at once; dark-neon-only components are removed.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind v4, zod, framer-motion, lucide-react, Vitest.

**Spec:** `docs/superpowers/specs/2026-11-11-friensys-ai-partner-repositioning-design.md`. PDF mapping: `docs/superpowers/specs/2026-11-11-linkedin-strategy-pdf-mapping.md`.

## Global Constraints

- Leadership, not company, holds the 20+ years: "led by engineers with 20+ years of enterprise technology experience". Company = "8+ years in production", founded 2017.
- Install base: **300+** everywhere. No "500+" anywhere in `app/`, `components/`, `content/`, `lib/`.
- Phone `+91 96433 14016`. Address `J-804, Sector-1, Techzone-IV, Greater Noida West, UP 201305`. LinkedIn `https://www.linkedin.com/company/friensysil`.
- Primary CTA label "Book a free consultation", href `/contact?intent=consultation`.
- Industries: education, retail, healthcare, finance-logistics-manufacturing.
- AI copy rule (from PDF): planned AI upgrades are labelled "On our roadmap", never presented as live.
- No invented client names, metrics, people. Industry pages without a delivered project show no case study.
- Light theme only; colours via tokens; WCAG AA contrast.
- Existing URLs keep working; `/customers` 301 → `/case-studies`.

---

### Task 1: Light design tokens and de-neon shared components

**Files:** Modify `styles/tokens.css`, `app/layout.tsx` (drop `data-theme="dark"`), `components/ui/AuroraButton.tsx`, `components/ui/BentoCard.tsx`, `components/ui/GlowSurface.tsx`, `components/ui/Badge.tsx`, `components/ui/SectionHeading.tsx`, `components/layout/MobileNav.tsx`. Delete `components/ui/GradientMesh.tsx` and remove every import/usage (`Hero`, `CTASection`, `ai/page.tsx`, `about`, `blog/[slug]`, `error.tsx`, `not-found.tsx`, `ErpHero`, others found by grep).

- [ ] Rewrite `:root` tokens: `--bg-base #FAFAF7`, `--bg-elevated #FFFFFF`, `--bg-overlay #F1F3F7`, `--border-subtle #E2E8F0`, `--border-strong #CBD5E1`, `--text-primary #0F172A`, `--text-secondary #475569`, `--text-muted #64748B`, `--accent-primary #3B3BD6`, `--accent-glow #2E2EB0` (hover), `--accent-cyan #0F766E`, `--accent-lime #15803D`, `--accent-amber #B45309`, `--danger #B91C1C`, `--success #15803D`, plus `--bg-dark #0B1020`. Remove the dark/light `data-theme` blocks.
- [ ] Replace glow shadows with `hover:shadow-md hover:border-border-strong`.
- [ ] `grep -rn "GradientMesh" app components` returns nothing.
- [ ] `npx tsc --noEmit` passes. Commit `feat(theme): light enterprise tokens, remove neon effects`.

### Task 2: Site facts, content files and loaders

**Files:** Modify `lib/site.ts`, `lib/content.ts`, `content/stats.json`, `content/products.json`, `content/nav.json`. Create `content/services.json`, `content/industries.json`, `content/team.json`, `content/engagements.json`. Test `tests/lib/content.test.ts`.

**Interfaces produced:**
- `getServices(): Service[]`, `getService(slug)`, `getIndustries(): Industry[]`, `getIndustry(slug)`, `getTeam(): TeamMember[]`, `getEngagements(): Engagement[]`.
- `Service`/`Industry` share `DetailPage = { slug, name, short, icon, hero: { title, promise }, problems: string[], deliverables: {title, body}[], tech: string[], relatedProducts: string[], faqs: {q,a}[], proof?: string }`.
- `TeamMember = { name, role, years, bio, photo?: string, linkedin?: string }`.
- `Engagement = { name, buyer, deliverable, icon }`.

- [ ] Write failing tests: 4 services with expected slugs; 4 industries with expected slugs; every `relatedProducts` slug resolves via `getProduct`; team has ≥1 member; no "500+" in stats/products JSON; OD-SAS and Marketplace describe manufacturing (contain "test" / "procurement").
- [ ] Run `npx vitest run` → FAIL.
- [ ] Add zod schemas + loaders; write JSON content (copy drafted from spec §2 and PDF §3, §6, Packages table).
- [ ] Run → PASS. Commit `feat(content): services, industries, team, engagements`.

### Task 3: Header, mega menus, mobile nav, footer

**Files:** Modify `components/layout/SiteHeader.tsx` (per-dropdown open state: `openMenu: string | null`), `MegaMenu.tsx`, `MobileNav.tsx`, `SiteFooter.tsx`.

- [ ] Nav: Services · Industries · Products (dropdowns) · Case studies · About · CTA "Book a free consultation".
- [ ] Footer brand copy repositioned; phone, email, full address; badges unchanged.
- [ ] Typecheck. Commit `feat(nav): services-led navigation`.

### Task 4: Home page

**Files:** Rewrite `components/sections/home/Hero.tsx`. Create `WhoWeHelp.tsx`, `ServicesGrid.tsx`, `HowWeWork.tsx`, `IndustriesGrid.tsx`, `Leadership.tsx`. Rework `WhyFriensys.tsx` (PDF "Why Friensys" four points + operating facts), `ProductBento.tsx` (secondary framing), `TrustStrip.tsx` (300+). Delete `StatsCounter.tsx`, `AITeaser.tsx` (content moves to Services/AI), `TerminalStat.tsx`, `LiveCounter.tsx` once unused. Modify `app/(marketing)/page.tsx`, `components/seo/HomeSchemas.tsx`, `lib/schema.ts` (add `buildProfessionalServiceSchema`), `components/sections/shared/CTASection.tsx` defaults.

- [ ] Section order per spec §2. Hero eyebrow "AI that works inside your business" (PDF positioning).
- [ ] Typecheck + visual check at 360px and 1440px. Commit `feat(home): AI-first partner home page`.

### Task 5: Services and industries pages

**Files:** Create `components/sections/detail/DetailPage.tsx`, `app/(marketing)/services/[slug]/page.tsx`, `app/(marketing)/industries/[slug]/page.tsx`, `app/(marketing)/industries/page.tsx`. Rewrite `app/(marketing)/services/page.tsx` (hub: 4 services + engagement models + product-customer services kept as a compact list).

- [ ] `generateStaticParams` from loaders; `notFound()` on unknown slug; breadcrumb + FAQ schema.
- [ ] Build passes for all 8 detail routes. Commit `feat(pages): service and industry pages`.

### Task 6: Company pages, AI page, credibility fixes

**Files:** `app/(marketing)/about/page.tsx` (founder card from `team.json`, story reframed, timeline corrected for OD-SAS/Marketplace), move `customers/` → `case-studies/`, `next.config.ts` redirect, `app/(marketing)/ai/page.tsx` (add "Responsible AI" principles and product AI roadmap table from PDF §6), `products/[slug]` (pricing button only for school products), fix all "500+" copies, home/products metadata, `sitemap.ts`, `llms.txt/route.ts`, `app/api/llms-full/route.ts`.

- [ ] `grep -rn "500+" app components content lib` → nothing.
- [ ] `grep -rn "/customers\"" app components content` → nothing.
- [ ] Commit `feat(company): about, case studies, AI principles, claim fixes`.

### Task 7: Verification

- [ ] `npx vitest run`, `npx tsc --noEmit`, `npm run build` all pass.
- [ ] Browser: home, `/services/ai-solutions`, `/industries/education`, `/products/odsas`, `/about` at 360px and 1440px; no console errors, no horizontal scroll.
- [ ] Write PDF mapping doc; commit.

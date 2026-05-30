# Friensys v2 Design Revamp — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the Friensys School-ERP marketing site (`friensys-next/`) into the warm-editorial, India-rooted, light-first system defined in `friensys-next/DESIGN.md`, so it reads instantly as serious school software made by people.

**Architecture:** Foundation-first. Land design tokens + fonts, then shared primitives, then rebuild homepage sections, then sweep inner pages. Each task ends with a verification (typecheck / vitest / browse screenshot / route 200) and a commit. Existing content JSON, routes, SEO, schema, forms, and analytics stay intact.

**Tech Stack:** Next.js 16 (App Router, `--webpack`), React 19, Tailwind v4 (`@theme` in `globals.css`), CSS vars in `styles/tokens.css`, framer-motion, lucide-react, Fraunces + Inter + Geist Mono via `next/font/google`, Vitest, browse (gstack) for visual verification.

**Branch:** `revamp/v2-design` (already cut from `revamp/competitive-rebuild`; carry-over fixes present: motion `show`, `marquee` keyframe, next-themes removed, `--webpack`, product mockups, Kaksha removed).

**Conventions for this plan**
- This is a visual restyle: "failing test" = a verification that currently fails (wrong color/font/emoji present) and passes after the change. Use browse + grep + tsc as the test harness.
- Dev server: `pnpm --dir friensys-next dev` (webpack). Browse binary: `$B = ~/.claude/skills/gstack/browse/dist/browse`.
- Keep `pnpm --dir friensys-next test` (vitest: content/schema/seo) green throughout — those guard the data layer.
- Commit after every task.

---

## File Structure

**Foundation**
- `friensys-next/styles/tokens.css` — replace dark tokens with light warm palette (DESIGN.md §2).
- `friensys-next/app/globals.css` — map tokens into Tailwind `@theme`; add Fraunces var; keep `marquee` keyframe.
- `friensys-next/app/layout.tsx` — add Fraunces font, wire `--font-fraunces`; `data-theme` stays.

**Primitives (`friensys-next/components/ui/`)**
- `button.tsx` / `AuroraButton.tsx` — teal editorial buttons (retire aurora glow).
- `Eyebrow.tsx` — NEW: marigold hairline + mono label.
- `SectionHeading.tsx` — use Eyebrow + Fraunces title.
- `Badge.tsx` — flat editorial badge.
- `BentoCard.tsx` / `card.tsx` — editorial card (hairline, soft shadow).
- `ProductFrame.tsx` — NEW: white browser-chrome frame around screenshots.
- `GradientMesh.tsx`, `GlowSurface.tsx` — retire (delete) or replace with paper/hairline backgrounds.
- `DynIcon.tsx` — add Lucide icons used by content.

**Content (icons, no emoji)**
- `friensys-next/content/modules.json`, any JSON with emoji → Lucide icon names.
- `friensys-next/components/sections/home/WhyFriensys.tsx` — emoji array → Lucide.

**Layout**
- `components/layout/SiteHeader.tsx`, `SiteFooter.tsx`, `MobileNav.tsx`, `MegaMenu.tsx`.

**Homepage sections (`components/sections/home/`)**
- `Hero.tsx`, `TrustStrip.tsx`, `WhyFriensys.tsx`, `ProductBento.tsx` (→ product showcase), `AITeaser.tsx`, `StatsCounter.tsx`, `Testimonials.tsx`.
- `components/sections/shared/CTASection.tsx`.
- `components/sections/school-erp/*` (ErpHero, FeesSpotlight, ModuleAccordion).
- `components/sections/pricing/PricingTiers.tsx`.

**Inner pages (`app/(marketing)/`)** — inherit tokens/primitives; verify + adjust each.

---

## Task 1: Design tokens + fonts foundation

**Files:**
- Modify: `friensys-next/styles/tokens.css`
- Modify: `friensys-next/app/globals.css`
- Modify: `friensys-next/app/layout.tsx`

- [ ] **Step 1: Replace token palette (light warm).** In `styles/tokens.css`, set the `:root` / `:root[data-theme="dark"]` block to the light warm system (this becomes the default; dark override may be dropped):

```css
:root,
:root[data-theme="dark"] {
  --bg-base: #FBF8F2;       /* paper */
  --bg-elevated: #F3EDE1;   /* paper-2 */
  --bg-overlay: #FFFFFF;    /* surface */
  --border-subtle: #E5DCCB; /* line */
  --border-strong: #D8CCB6;
  --text-primary: #1B1714;  /* ink */
  --text-secondary: #5C534A;/* ink-2 */
  --text-muted: #8A8074;    /* ink-3 */
  --accent-primary: #0C5B52;/* teal */
  --accent-glow: #0E6B61;
  --accent-cyan: #0C5B52;   /* alias to teal (kill cyan) */
  --accent-lime: #3F8F5B;   /* ok green */
  --accent-amber: #E89A33;  /* marigold */
  --danger: #C0492F;
  --success: #3F8F5B;
  /* spacing/radii/fonts: keep existing scale; add fraunces below */
  --font-display: "Fraunces", "Inter Tight", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;
}
```
  Remove the separate `:root[data-theme="light"]` block (light is now the only theme). Keep the `prefers-reduced-motion` block.

- [ ] **Step 2: Update globals.css theme + shadows + fraunces.** In `app/globals.css`, ensure `@theme` maps `--color-*` from the vars (already does). Add `--font-fraunces` mapping and editorial shadows; keep `@keyframes marquee`. In the `html` rule, background is `--bg-base` (paper). Add:

```css
@theme {
  /* ...existing color mappings stay... */
  --font-display: var(--font-fraunces), "Inter Tight", Georgia, serif;
}
```
  And in `body`, set `--font-display: var(--font-fraunces), Georgia, serif;`.

- [ ] **Step 3: Add Fraunces in layout.tsx.** Import and wire the font:

```tsx
import { Geist, Geist_Mono, Inter, Fraunces } from "next/font/google";
// ...
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});
```
  Add `${fraunces.variable}` to the `<body>` className list. Keep `data-theme="dark"` OR change to `data-theme="light"` (cosmetic; tokens are theme-agnostic now — set `data-theme="light"`).

- [ ] **Step 4: Verify build + palette.** Run `pnpm --dir friensys-next dev` (background). Then with browse:
```
$B goto http://localhost:3000
$B js "getComputedStyle(document.documentElement).getPropertyValue('--bg-base').trim()"
```
  Expected: `#FBF8F2`. Page background is warm paper (will look unstyled/light — that's expected pre-restyle).

- [ ] **Step 5: Typecheck + commit.**
```
pnpm --dir friensys-next typecheck
git add friensys-next/styles/tokens.css friensys-next/app/globals.css friensys-next/app/layout.tsx
git commit -m "feat(v2): light warm design tokens + Fraunces font"
```

---

## Task 2: Editorial primitives — Eyebrow, ProductFrame, Button, Badge, Card

**Files:**
- Create: `friensys-next/components/ui/Eyebrow.tsx`
- Create: `friensys-next/components/ui/ProductFrame.tsx`
- Modify: `friensys-next/components/ui/AuroraButton.tsx`
- Modify: `friensys-next/components/ui/Badge.tsx`
- Modify: `friensys-next/components/ui/BentoCard.tsx`, `card.tsx`
- Modify: `friensys-next/components/ui/SectionHeading.tsx`

- [ ] **Step 1: Eyebrow component.**
```tsx
export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-accent-primary ${className}`}>
      <span className="h-px w-8 bg-accent-amber" />
      {children}
    </span>
  );
}
```

- [ ] **Step 2: ProductFrame component** (white browser chrome around any screenshot/children):
```tsx
export function ProductFrame({ src, alt, children, className = "" }: { src?: string; alt?: string; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[18px] border border-border-subtle bg-bg-overlay shadow-[0_8px_20px_-10px_rgba(27,23,20,0.12),0_32px_60px_-28px_rgba(27,23,20,0.28)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-elevated px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E5897D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E8C36B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#9BC58A]" />
        <span className="ml-3 font-mono text-[11px] text-text-muted">app.friensys.com</span>
      </div>
      {src ? (
        // next/image fill wrapper
        <div className="relative aspect-[16/10] w-full">{/* <Image src={src} alt={alt} fill sizes="(max-width:768px)100vw,720px" className="object-cover object-top"/> */}</div>
      ) : children}
    </div>
  );
}
```
  (Import `next/image`; add the `<Image>` as commented. Include `sizes` to clear the prior warning.)

- [ ] **Step 3: Buttons.** In `AuroraButton.tsx` remove the aurora gradient/glow. Variants:
  - `primary`: `bg-accent-primary text-white hover:bg-[#083F39] -translate-y-px` transition, radius `11px`.
  - `outline`: `border border-border-subtle text-text-primary bg-transparent hover:border-text-muted`.
  Keep the same props API (`href`, `variant`, `size`) so call-sites don't change.

- [ ] **Step 4: Badge + Card.** `Badge.tsx`: flat — `new` → marigold text on `bg-accent-amber/12`; `live` → ok-green on `/12`. No glow. `BentoCard.tsx`/`card.tsx`: `bg-bg-overlay border border-border-subtle rounded-[14px] shadow-sm`, hover lift 2px + border → `border-strong`.

- [ ] **Step 5: SectionHeading** uses `<Eyebrow>` for `label` and Fraunces for `title` (`font-display`).

- [ ] **Step 6: Verify + commit.** `pnpm --dir friensys-next typecheck`; quick browse of any page using a button to confirm teal. Commit `feat(v2): editorial primitives (eyebrow, product frame, buttons, badge, card)`.

---

## Task 3: Kill emoji → Lucide icons

**Files:**
- Modify: `friensys-next/components/ui/DynIcon.tsx`
- Modify: `friensys-next/components/sections/home/WhyFriensys.tsx`
- Modify: `friensys-next/content/modules.json` (+ any JSON containing emoji)

- [ ] **Step 1: Find every emoji.** Run:
```
grep -rnP "[\x{1F000}-\x{1FAFF}\x{2600}-\x{27BF}\x{1F1E6}-\x{1F1FF}]" friensys-next/components friensys-next/content --include=*.tsx --include=*.json
```
  Expected: hits in `WhyFriensys.tsx` (🇮🇳🤖⚡🔒💸🤝) and possibly content.

- [ ] **Step 2: Extend DynIcon map** with the icons needed (already has GraduationCap, School, Smartphone, AlertTriangle, CalendarClock, Gift, Store, Users, CheckCircle, Sparkles, Wallet). Add for WhyFriensys: `MapPin` (Indian), `Bot`→use `Sparkles`, `Zap`, `ShieldCheck`, `IndianRupee`→use `Wallet` or import `IndianRupee`, `Headset`/`LifeBuoy`. Import the new ones and add to `iconMap`.

- [ ] **Step 3: Replace emoji in WhyFriensys** with `<DynIcon name="..." className="h-6 w-6 text-accent-primary"/>` per feature (map: Built for India→`MapPin`, AI-first→`Sparkles`, Same-day→`Zap`, Security→`ShieldCheck`, Pricing→`IndianRupee`, CSM→`LifeBuoy`). Wrap each in a hairline-bordered icon tile (`bg-bg-elevated border border-border-subtle rounded-md`).

- [ ] **Step 4: Verify no emoji remain.** Re-run the grep from Step 1 → expect no matches in components. Typecheck.

- [ ] **Step 5: Commit** `feat(v2): replace emoji with lucide line icons`.

---

## Task 4: Header + Footer (editorial)

**Files:** `components/layout/SiteHeader.tsx`, `SiteFooter.tsx`, `MobileNav.tsx`, `MegaMenu.tsx`

- [ ] **Step 1: SiteHeader** — paper bg, `border-b border-border-subtle`, Fraunces wordmark with the teal+marigold mark dot, Inter nav links `text-text-secondary`, teal "Book a demo" button. Remove any dark styling.
- [ ] **Step 2: SiteFooter** — paper/`bg-bg-elevated`, hairline-divided columns, Fraunces wordmark, mono section labels.
- [ ] **Step 3: MobileNav / MegaMenu** — light surfaces, hairline borders, teal active.
- [ ] **Step 4: Verify** via browse at mobile + desktop viewport; typecheck.
- [ ] **Step 5: Commit** `feat(v2): editorial header + footer`.

---

## Task 5: Homepage Hero

**Files:** `components/sections/home/Hero.tsx` (+ retire `GradientMesh` usage)

- [ ] **Step 1: Rebuild Hero** per the approved mockup: asymmetric 2-col (`lg:grid-cols-[1.05fr_1.15fr]`), `<Eyebrow>School ERP · trusted by 500+ schools</Eyebrow>`, Fraunces H1 with one italic teal accent word ("schools."), Inter lead, primary teal CTA + "See how it works →" text link, mono stat row (TerminalStat or inline), and a `<ProductFrame src="/screenshots/school-erp-dashboard.png">` on the right. Remove `<GradientMesh>`.
- [ ] **Step 2: Keep motion** using `fadeUp`/`stagger` with `initial="hidden" animate="show"` (variants already use `show`).
- [ ] **Step 3: Verify** — browse screenshot hero at 1280; compare to mockup `/tmp/v2-hero-out.png`. Confirm no gradient text, paper bg, framed dashboard.
- [ ] **Step 4: Commit** `feat(v2): editorial hero`.

---

## Task 6: TrustStrip (light, calm)

**Files:** `components/sections/home/TrustStrip.tsx`

- [ ] **Step 1:** Paper section, `<Eyebrow>` or mono "Trusted by 500+ schools across India". Logos in white chips already; keep `marquee` keyframe, set duration to a calm value (≥120s) on light bg, pause on hover (group). Hairline top/bottom borders.
- [ ] **Step 2:** Verify marquee `animationName=marquee`, not scroll-linked. Commit `feat(v2): trust strip on paper`.

---

## Task 7: Why / not-just-fees (editorial 3-col)

**Files:** `components/sections/home/WhyFriensys.tsx`

- [ ] **Step 1:** `<Eyebrow>Why Friensys</Eyebrow>` + Fraunces H2. 3-col grid of capability cards: Lucide icon tile, Fraunces/Inter-600 title, Inter body. Hairline dividers, no glow. Use the icons from Task 3.
- [ ] **Step 2:** Verify screenshot; typecheck. Commit `feat(v2): editorial why-friensys`.

---

## Task 8: Product showcase (replaces equal bento)

**Files:** `components/sections/home/ProductBento.tsx`

- [ ] **Step 1:** Replace the equal-card bento with alternating editorial rows: for each featured product (School ERP, AI Suite, Fees & Finance, School App) a 2-col row — `<ProductFrame src=screenshot>` on one side (alternating), text (Eyebrow product name, Fraunces title, tagline, "Explore →" link to `/products/<slug>`) on the other. Keep the existing `featured` data + links (slugs valid per catalog).
- [ ] **Step 2:** "View all products →" footer link stays. Verify all 4 screenshots load (200), links resolve. Commit `feat(v2): product showcase rows`.

---

## Task 9: AI section (restrained)

**Files:** `components/sections/home/AITeaser.tsx`

- [ ] **Step 1:** `<Eyebrow>AI Suite</Eyebrow>`, Fraunces H2 "Intelligence for the admin layer." 3 capability cards with Lucide icons + mono "Live now"/"Roadmap" tags (flat). No neon, no dark block — paper or `bg-bg-elevated`. Link "Explore the AI suite →" to `/ai`.
- [ ] **Step 2:** Verify; commit `feat(v2): restrained AI section`.

---

## Task 10: Stats + Testimonials

**Files:** `components/sections/home/StatsCounter.tsx`, `Testimonials.tsx`, `components/ui/LiveCounter.tsx`

- [ ] **Step 1: StatsCounter** — band on `bg-bg-elevated`, Fraunces numbers via `LiveCounter` (numbers in `font-display`), mono labels, hairline separators. Keep count-up (useInView).
- [ ] **Step 2: Testimonials** — `<Eyebrow>` + Fraunces H2. Cards: serif (Fraunces) quote, Inter author, mono city; logo avatar in white chip (path already fixed — `t.schoolLogo` direct). Star rating uses `--accent-amber`.
- [ ] **Step 3:** Verify screenshots; typecheck; `pnpm --dir friensys-next test` still green. Commit `feat(v2): stats + serif testimonials`.

---

## Task 11: CTA band + shared sections

**Files:** `components/sections/shared/CTASection.tsx`

- [ ] **Step 1:** Warm CTA band — `bg-accent-primary` (teal) with paper text, OR paper with teal frame; Fraunces H2, lead, white primary button + outline. No gradient.
- [ ] **Step 2:** Verify on home + school-erp (both use it). Commit `feat(v2): editorial CTA band`.

---

## Task 12: Section components for inner pages

**Files:** `components/sections/school-erp/{ErpHero,FeesSpotlight,ModuleAccordion}.tsx`, `components/sections/pricing/PricingTiers.tsx`, `components/marketing/{ProductCard,BlogCard}.tsx`, `components/forms/{ContactForm,CareersApplyForm}.tsx`, primitives `accordion/input/label/textarea/dialog`.

- [ ] **Step 1: ErpHero** — same hero pattern (Eyebrow, Fraunces, ProductFrame `school-erp.png`).
- [ ] **Step 2: FeesSpotlight** — framed `collection-report.png` + editorial copy; teal/marigold accents.
- [ ] **Step 3: ModuleAccordion** — hairline rows, teal active, Lucide chevrons; module icons via DynIcon (no emoji).
- [ ] **Step 4: PricingTiers** — editorial cards, hairline, teal "popular" marker (marigold dot), Lucide check (`text-accent-primary`).
- [ ] **Step 5: ProductCard / BlogCard** — editorial cards, Fraunces titles, hairline.
- [ ] **Step 6: Forms + form primitives** — light inputs: `bg-bg-overlay border border-border-subtle`, focus ring `--accent-primary`. Buttons teal.
- [ ] **Step 7:** Typecheck; `pnpm test` green. Commit `feat(v2): restyle inner-page section components + forms`.

---

## Task 13: Inner page sweep + retire dead UI

**Files:** `app/(marketing)/{about,ai,pricing,customers,services,security,careers,contact,blog,blog/[slug],products,products/[slug],school-erp,legal,legal/[slug]}/page.tsx`; delete `components/ui/{GradientMesh,GlowSurface}.tsx` if unused.

- [ ] **Step 1:** For each page, open in browse and screenshot; fix any leftover dark styling, gradient, emoji, or hardcoded old colors. Most inherit tokens/primitives; expect small edits (heading uses `font-display`, Eyebrow, spacing).
- [ ] **Step 2:** `grep -rn "from-accent\|via-accent\|to-accent\|GradientMesh\|GlowSurface\|bg-clip-text" friensys-next/components friensys-next/app` → remove remaining gradient-text usages. Delete now-unused `GradientMesh.tsx`/`GlowSurface.tsx` and their imports.
- [ ] **Step 3:** Typecheck. Commit `feat(v2): inner page sweep + retire gradient/glow components`.

---

## Task 14: Full verification

- [ ] **Step 1: Typecheck + tests.**
```
pnpm --dir friensys-next typecheck
pnpm --dir friensys-next test
```
  Expected: tsc clean; vitest content/schema/seo pass.
- [ ] **Step 2: Route + asset health (browse).** For every route (`/`, about, ai, pricing, customers, services, security, careers, contact, blog, blog/<slug>, products, products/<slug> for all slugs, school-erp, legal, legal/<slug>): expect 200, `network --clear` then reload → 0 image 4xx, `console --errors` → 0 errors.
- [ ] **Step 3: Visual sweep.** Full-page browse screenshot of every page; confirm: warm paper bg, Fraunces headlines, teal/marigold accents only, no gradient text, no emoji, framed product shots, hairlines. Read each screenshot.
- [ ] **Step 4: Anti-AI grep gate.**
```
grep -rnP "[\x{1F000}-\x{1FAFF}\x{2600}-\x{27BF}]" friensys-next/components friensys-next/content
grep -rn "bg-clip-text\|from-accent-primary\|aurora\|GradientMesh\|GlowSurface" friensys-next
```
  Expected: no matches.
- [ ] **Step 5: Commit + push.**
```
git add -A && git commit -m "feat(v2): final verification — light editorial system across all pages"
git push origin revamp/v2-design
```

---

## Self-Review notes

- **Spec coverage:** tokens/fonts (T1), primitives incl. ProductFrame & Eyebrow (T2), emoji→icons (T3), header/footer (T4), all 8 homepage sections (T5–T11), inner-page section comps + forms (T12), inner page sweep + dead-UI removal (T13), verification incl. anti-AI gates (T14). Carry-over fixes preserved (branch base). All DESIGN.md sections referenced.
- **No backend/content/route changes** — data JSON, SEO, schema, analytics untouched (only icon-name fields in JSON may change in T3).
- **Type consistency:** button props API unchanged (T2) so call-sites in T5–T13 keep working; `Eyebrow`/`ProductFrame` names used consistently in later tasks.
- **Risk:** Tailwind v4 `@theme` already maps `--color-*`; only Fraunces var is added. If a page hardcodes old hex/dark classes, T13 grep catches it.

# Friensys Website Revamp Phase 1 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Phase 1 MVP marketing site for Friensys School ERP in a fresh `friensys-next/` Next.js 15 scaffold, side-by-side with the legacy Vite app. ~30 pages, dark-futuristic design system, SEO + AI-search infrastructure, full legal/trust pages.

**Architecture:** Additive `friensys-next/` subfolder containing a Next.js 15 App Router app (TypeScript, Tailwind v4, shadcn/ui, Velite for MDX, EmailJS for forms). Server components by default; client only for forms + scroll motion + theme. Content lives in `content/` as JSON + MDX, loaded through type-safe loaders in `lib/`. Old Vite app at repo root remains untouched until cutover.

**Tech Stack:** Next.js 15 (App Router, RSC), TypeScript 5 (strict), Tailwind v4, shadcn/ui, Framer Motion, Velite + @next/mdx, EmailJS (`@emailjs/browser`), Lucide React icons, next-themes, Vitest + Playwright, pnpm, GitHub Actions + Lighthouse CI.

**Companion spec:** `docs/superpowers/specs/2026-05-24-friensys-revamp-design.md`

---

## File Structure Overview

All paths relative to `friensys-next/` unless noted. Engineer should create the `friensys-next/` directory at the repo root.

```
friensys-next/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx                       # MarketingLayout — header + footer wrap
│   │   ├── page.tsx                         # Home
│   │   ├── school-erp/page.tsx
│   │   ├── products/page.tsx                # Products index
│   │   ├── products/[slug]/page.tsx         # Product detail (dynamic, 7 entries)
│   │   ├── ai/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── customers/page.tsx
│   │   ├── about/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── security/page.tsx
│   │   ├── services/page.tsx
│   │   ├── blog/page.tsx                    # Blog index
│   │   ├── blog/[slug]/page.tsx             # Blog post (MDX via Velite)
│   │   └── legal/[slug]/page.tsx            # 6 legal pages (dynamic from MDX)
│   ├── api/
│   │   ├── og/[...slug]/route.tsx           # next/og dynamic OG generator
│   │   └── llms-full/route.ts               # /llms-full.txt endpoint
│   ├── layout.tsx                           # Root html + theme provider + fonts
│   ├── not-found.tsx
│   ├── robots.ts                            # robots.txt
│   ├── sitemap.ts                           # sitemap.xml
│   ├── llms.txt/route.ts                    # /llms.txt endpoint
│   └── globals.css                          # Tailwind v4 entry + tokens
├── components/
│   ├── primitives/                          # shadcn/ui base components
│   ├── ui/                                  # Friensys atoms
│   │   ├── AuroraButton.tsx
│   │   ├── GradientMesh.tsx
│   │   ├── TerminalStat.tsx
│   │   ├── LiveCounter.tsx
│   │   ├── BentoCard.tsx
│   │   ├── GlowSurface.tsx
│   │   ├── SchoolLogo.tsx
│   │   ├── BrowserFrame.tsx
│   │   ├── Badge.tsx
│   │   └── SectionHeading.tsx
│   ├── sections/
│   │   ├── home/                            # 8 home section files
│   │   ├── school-erp/                      # ErpHero, FeesSpotlight, ModuleAccordion
│   │   ├── ai/                              # AiHero, LiveFeatures, Roadmap, KakshaCounter
│   │   ├── pricing/                         # PricingTwoTier, PricingFAQ
│   │   └── shared/                          # CTASection, FAQ, LogoWall, CaseStudyCard
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── MegaMenu.tsx
│   │   ├── MobileNav.tsx
│   │   └── ThemeProvider.tsx
│   ├── forms/
│   │   ├── DemoRequestForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── CareersApplyForm.tsx
│   └── seo/
│       ├── JsonLd.tsx
│       ├── OrganizationSchema.tsx
│       ├── ProductSchema.tsx
│       ├── ArticleSchema.tsx
│       ├── FAQSchema.tsx
│       └── BreadcrumbSchema.tsx
├── content/
│   ├── products.json                        # 7 products
│   ├── schools.json                         # 25 client schools
│   ├── testimonials.json
│   ├── stats.json
│   ├── ai-features.json
│   ├── modules.json                         # 40+ ERP modules
│   ├── case-studies.json
│   ├── nav.json
│   ├── faqs.json
│   ├── posts/                               # 5 MDX blog posts
│   └── legal/                               # 6 MDX legal pages
├── lib/
│   ├── content.ts                           # Type-safe content loaders
│   ├── seo.ts                               # buildMetadata helper
│   ├── schema.ts                            # JSON-LD builders
│   ├── analytics.ts                         # GA4 wrapper
│   ├── motion.ts                            # Framer Motion variants
│   ├── emailjs.ts                           # EmailJS submission helper
│   ├── site.ts                              # Site constants (name, urls, contact)
│   └── utils.ts                             # cn() + helpers
├── styles/
│   └── tokens.css                           # CSS variables (dark + light)
├── public/
│   ├── logos/                               # 25 school logos (migrated)
│   ├── screenshots/                         # 20+ product screenshots (migrated)
│   ├── brand/                               # FriensysLogo + variants
│   └── og/                                  # Static OG fallbacks
├── tests/
│   ├── unit/                                # Vitest
│   └── smoke/                               # Playwright
├── velite.config.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── playwright.config.ts
├── vitest.config.ts
├── .env.example
├── .env.local                               # gitignored
├── .gitignore
└── README.md
```

### Phase Organization (Internal Checkpoints)

- **Phase 1A — Foundation** (Tasks 1-10): scaffold, tokens, Velite, content loaders, layout, redirects.
- **Phase 1B — UI Atoms** (Tasks 11-20): the 10 Friensys-specific atoms + seo components.
- **Phase 1C — Core Marketing Pages** (Tasks 21-26): Home, /school-erp, /pricing, /about, /contact, /security.
- **Phase 1D — Product Surface** (Tasks 27-29): products.json, /products index, /products/[slug].
- **Phase 1E — AI Page** (Task 30).
- **Phase 1F — Content Layer** (Tasks 31-38): customers, blog + 5 posts, careers port.
- **Phase 1G — Legal + Services** (Tasks 39-46): legal/[slug] + 6 legal MDX, /services overview.
- **Phase 1H — SEO & Perf Hardening** (Tasks 47-52): sitemap, robots, llms.txt, OG generator, JSON-LD audit, Lighthouse CI.
- **Phase 1I — QA & Docs** (Tasks 53-55): Playwright smoke suite, README, final content review.

Engineer can pause + commit at each phase boundary.

---

## Phase 1A — Foundation

### Task 1: Scaffold Next.js 15 app in `friensys-next/`

**Files:**
- Create: `friensys-next/package.json`
- Create: `friensys-next/tsconfig.json`
- Create: `friensys-next/next.config.ts`
- Create: `friensys-next/.gitignore`
- Create: `friensys-next/.env.example`
- Create: `friensys-next/app/layout.tsx`
- Create: `friensys-next/app/page.tsx`
- Create: `friensys-next/app/globals.css`

- [ ] **Step 1: Create the scaffold via `create-next-app`**

Run from the repo root (`D:\Github-sacredabhishek\FriensysWebSite`):

```powershell
pnpm dlx create-next-app@latest friensys-next --typescript --tailwind --eslint --app --src-dir=false --import-alias='@/*' --use-pnpm --no-turbopack
```

When prompted, accept defaults except: TypeScript = Yes, Tailwind = Yes (v4 is default), App Router = Yes, src/ directory = No, import alias = `@/*`.

Expected: directory `friensys-next/` created with starter files.

- [ ] **Step 2: Install Phase 1 dependencies**

```powershell
cd friensys-next
pnpm add framer-motion@latest @emailjs/browser@latest lucide-react@latest next-themes@latest clsx tailwind-merge react-hook-form @hookform/resolvers zod sweetalert2
pnpm add -D velite @types/node prettier prettier-plugin-tailwindcss
```

Expected: `package.json` updated with all dependencies.

- [ ] **Step 3: Add scripts to `package.json`**

Replace the `scripts` section with:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "velite build && next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "content": "velite",
    "content:watch": "velite --watch",
    "test:unit": "vitest run",
    "test:smoke": "playwright test",
    "format": "prettier --write ."
  }
}
```

- [ ] **Step 4: Verify dev server starts**

```powershell
cd friensys-next
pnpm dev
```

Expected: server runs at http://localhost:3000 showing the default Next.js starter. Stop with Ctrl+C.

- [ ] **Step 5: Commit**

```powershell
git add friensys-next
git commit -m @'
feat(scaffold): initialize Next.js 15 app in friensys-next/

Phase 1A foundation. Side-by-side with legacy Vite app at repo root.
TypeScript strict, Tailwind v4, App Router, pnpm.

Co-Authored-By: claude-flow <ruv@ruv.net>
'@
```

---

### Task 2: Configure Tailwind v4 + design tokens

**Files:**
- Create: `friensys-next/styles/tokens.css`
- Modify: `friensys-next/app/globals.css`
- Create: `friensys-next/tailwind.config.ts` (if not created by scaffold)
- Modify: `friensys-next/package.json` (add font deps)

- [ ] **Step 1: Install fonts via next/font (no install needed — uses Google Fonts at build time)**

No package install. We will configure in `app/layout.tsx` later.

- [ ] **Step 2: Create `styles/tokens.css` with design tokens**

```css
/* Friensys design tokens — dark default, light optional toggle */

:root,
:root[data-theme="dark"] {
  /* Backgrounds */
  --bg-base: #0A0B0F;
  --bg-elevated: #11131A;
  --bg-overlay: #1A1D27;

  /* Borders */
  --border-subtle: #1F2230;
  --border-strong: #2A2F40;

  /* Text */
  --text-primary: #F4F6FB;
  --text-secondary: #A0A6B8;
  --text-muted: #6B7185;

  /* Accents */
  --accent-primary: #7C5CFF;
  --accent-glow: #9B7BFF;
  --accent-cyan: #4DD4FF;
  --accent-lime: #B8FF5C;
  --accent-amber: #FFB84D;

  /* Status */
  --danger: #FF5C7A;
  --success: #4ADE80;

  /* Spacing rhythm (8pt base) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;

  /* Radii */
  --radius-sm: 0.375rem;
  --radius-md: 0.625rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;

  /* Typography scale */
  --font-display: "Geist", "Inter Tight", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;
}

:root[data-theme="light"] {
  --bg-base: #FFFFFF;
  --bg-elevated: #F7F8FB;
  --bg-overlay: #EEF0F6;
  --border-subtle: #E5E7ED;
  --border-strong: #D1D5DD;
  --text-primary: #0A0B0F;
  --text-secondary: #4A5160;
  --text-muted: #7A8090;
  --accent-primary: #6B47FF;
  --accent-glow: #8B6BFF;
  --accent-cyan: #2BB8E6;
  --accent-lime: #6BCC1F;
  --accent-amber: #E69838;
  --danger: #E63950;
  --success: #1FAA5C;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: Replace `app/globals.css` to use Tailwind v4 + tokens**

```css
@import "tailwindcss";
@import "../styles/tokens.css";

@theme {
  /* Map CSS tokens into Tailwind v4 theme */
  --color-bg-base: var(--bg-base);
  --color-bg-elevated: var(--bg-elevated);
  --color-bg-overlay: var(--bg-overlay);
  --color-border-subtle: var(--border-subtle);
  --color-border-strong: var(--border-strong);
  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --color-text-muted: var(--text-muted);
  --color-accent-primary: var(--accent-primary);
  --color-accent-glow: var(--accent-glow);
  --color-accent-cyan: var(--accent-cyan);
  --color-accent-lime: var(--accent-lime);
  --color-accent-amber: var(--accent-amber);
  --color-danger: var(--danger);
  --color-success: var(--success);

  --font-display: var(--font-display);
  --font-body: var(--font-body);
  --font-mono: var(--font-mono);

  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);
}

html {
  background: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-feature-settings: "ss01", "cv11";
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  min-height: 100dvh;
}

::selection {
  background: color-mix(in oklab, var(--accent-primary) 35%, transparent);
  color: var(--text-primary);
}

:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 4px;
  border-radius: 4px;
}
```

- [ ] **Step 4: Verify dev compiles**

```powershell
cd friensys-next
pnpm dev
```

Expected: page renders with dark background (#0A0B0F). Stop with Ctrl+C.

- [ ] **Step 5: Commit**

```powershell
git add friensys-next/styles friensys-next/app/globals.css
git commit -m "feat(design): add Tailwind v4 theme + dark-mode design tokens"
```

---

### Task 3: Add shadcn/ui + install initial primitives

**Files:**
- Create: `friensys-next/components.json`
- Create: `friensys-next/lib/utils.ts`
- Create: `friensys-next/components/primitives/button.tsx`
- Create: `friensys-next/components/primitives/input.tsx`
- Create: `friensys-next/components/primitives/textarea.tsx`
- Create: `friensys-next/components/primitives/card.tsx`
- Create: `friensys-next/components/primitives/dialog.tsx`
- Create: `friensys-next/components/primitives/accordion.tsx`
- Create: `friensys-next/components/primitives/label.tsx`

- [ ] **Step 1: Create `lib/utils.ts` (cn helper)**

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Initialize shadcn/ui**

```powershell
cd friensys-next
pnpm dlx shadcn@latest init --yes --base-color neutral --css-variables --src-dir false
```

When prompted, set the components alias to `@/components/primitives`.

Expected: `components.json` created.

- [ ] **Step 3: Override `components.json` to point at our paths**

Replace `components.json` content with:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components/primitives",
    "utils": "@/lib/utils",
    "ui": "@/components/primitives",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

- [ ] **Step 4: Add the 7 base primitives**

```powershell
cd friensys-next
pnpm dlx shadcn@latest add button input textarea card dialog accordion label --yes
```

Expected: 7 files in `components/primitives/`.

- [ ] **Step 5: Verify build**

```powershell
cd friensys-next
pnpm typecheck
```

Expected: no errors.

- [ ] **Step 6: Commit**

```powershell
git add friensys-next/components friensys-next/lib friensys-next/components.json
git commit -m "feat(ui): install shadcn/ui primitives (button, input, textarea, card, dialog, accordion, label)"
```

---

### Task 4: Configure Velite for MDX content (blog + legal)

**Files:**
- Create: `friensys-next/velite.config.ts`
- Modify: `friensys-next/tsconfig.json`
- Modify: `friensys-next/.gitignore`
- Modify: `friensys-next/next.config.ts`

- [ ] **Step 1: Create `velite.config.ts`**

```ts
import { defineConfig, defineCollection, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      description: s.string().max(200),
      date: s.isodate(),
      updated: s.isodate().optional(),
      author: s.string().default("Friensys"),
      tags: s.array(s.string()).default([]),
      cover: s.string().optional(),
      ogImage: s.string().optional(),
      published: s.boolean().default(true),
      readingTime: s.number().optional(),
      content: s.mdx(),
      excerpt: s.excerpt(),
      metadata: s.metadata(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^posts\//, ""),
      url: `/blog/${data.slug.replace(/^posts\//, "")}`,
      readingTime: data.readingTime ?? data.metadata.readingTime,
    })),
});

const legal = defineCollection({
  name: "Legal",
  pattern: "legal/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      description: s.string().max(200),
      updated: s.isodate(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^legal\//, ""),
      url: `/legal/${data.slug.replace(/^legal\//, "")}`,
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, legal },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
```

- [ ] **Step 2: Update `tsconfig.json` paths**

Add `"#site/content"` alias. Replace the `paths` block:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "#site/content": ["./.velite"]
    }
  }
}
```

- [ ] **Step 3: Add Velite output to `.gitignore`**

Append to `friensys-next/.gitignore`:

```
.velite
```

- [ ] **Step 4: Wire Velite into Next build via `next.config.ts`**

Replace `next.config.ts` content with:

```ts
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

class VeliteWebpackPlugin {
  static started = false;
  constructor(private readonly options: { dev?: boolean } = {}) {}
  apply(compiler: import("webpack").Compiler) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const { build } = await import("velite");
      await build({ watch: this.options.dev, clean: !this.options.dev });
    });
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
  },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin({ dev: isDev }));
    return config;
  },
  redirects: async () => [
    { source: "/product/schoolErp", destination: "/school-erp", permanent: true },
    { source: "/product/schoolApp", destination: "/products/school-app", permanent: true },
    { source: "/product/escalation", destination: "/products/escalation", permanent: true },
    { source: "/product/ODSAS", destination: "/products/odsas", permanent: true },
    { source: "/product/customerLoyalty", destination: "/products/customer-loyalty", permanent: true },
    { source: "/product/marketplace", destination: "/products/marketplace", permanent: true },
    { source: "/product/collegeErp", destination: "/products/college-erp", permanent: true },
    { source: "/product", destination: "/products", permanent: true },
    { source: "/privacyPolicy", destination: "/legal/privacy-policy", permanent: true },
    { source: "/cancellationPolicy", destination: "/legal/cancellation-policy", permanent: true },
    { source: "/underDevelopment", destination: "/", permanent: true },
    { source: "/services/services", destination: "/services", permanent: true },
    { source: "/services/cloudSolutions", destination: "/services", permanent: false },
    { source: "/services/itConsulting", destination: "/services", permanent: false },
    { source: "/services/softwareDevelopment", destination: "/services", permanent: false },
    { source: "/services/softwareProduct", destination: "/services", permanent: false },
    { source: "/apply", destination: "/careers", permanent: true },
  ],
};

export default nextConfig;
```

- [ ] **Step 5: Create seed `content/posts/.gitkeep` and `content/legal/.gitkeep` so Velite finds an empty collection**

```powershell
cd friensys-next
New-Item -ItemType Directory -Force -Path content\posts | Out-Null
New-Item -ItemType Directory -Force -Path content\legal | Out-Null
New-Item -ItemType File -Path content\posts\.gitkeep | Out-Null
New-Item -ItemType File -Path content\legal\.gitkeep | Out-Null
```

- [ ] **Step 6: Verify Velite builds (empty collections OK)**

```powershell
cd friensys-next
pnpm content
```

Expected: `.velite/` folder created with empty arrays. No errors.

- [ ] **Step 7: Commit**

```powershell
git add friensys-next/velite.config.ts friensys-next/tsconfig.json friensys-next/.gitignore friensys-next/next.config.ts friensys-next/content
git commit -m "feat(content): wire Velite MDX pipeline + Next redirects for legacy URLs"
```

---

### Task 5: Define content JSON schemas + loaders in `lib/content.ts`

**Files:**
- Create: `friensys-next/lib/site.ts`
- Create: `friensys-next/lib/content.ts`
- Create: `friensys-next/content/products.json`
- Create: `friensys-next/content/schools.json`
- Create: `friensys-next/content/testimonials.json`
- Create: `friensys-next/content/stats.json`
- Create: `friensys-next/content/ai-features.json`
- Create: `friensys-next/content/modules.json`
- Create: `friensys-next/content/case-studies.json`
- Create: `friensys-next/content/nav.json`
- Create: `friensys-next/content/faqs.json`

- [ ] **Step 1: Create `lib/site.ts` (global brand + contact constants)**

```ts
export const site = {
  name: "Friensys",
  tagline: "Operations-first. AI where it matters. DPDPA-aligned.",
  description:
    "The AI-ready school ERP trusted by 300+ schools across India. Admissions to graduation: fees, attendance, report cards, parent comms — with admin-AI built in.",
  url: "https://friensys.com",
  ogImage: "/og/default.png",
  legalName: "Friensys Info Labs",
  address: {
    street: "Greater Noida West",
    locality: "Greater Noida",
    region: "Uttar Pradesh",
    postal: "201306",
    country: "IN",
  },
  contact: {
    phone: "+91 99716 73592",
    email: "info@friensys.com",
    salesEmail: "sales@friensys.com",
    hours: "Mon-Fri, 9:30 AM – 6:30 PM IST",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/friensys",
    twitter: "https://x.com/friensys",
    github: "",
    instagram: "",
  },
  partners: {
    digitechnomads: "https://digitechnomads.com/school-erp-crm-solutions/",
  },
} as const;
```

- [ ] **Step 2: Create `content/stats.json`**

```json
{
  "schools": { "value": 300, "label": "Schools running Friensys", "format": "plus" },
  "modules": { "value": 40, "label": "ERP modules", "format": "plus" },
  "years": { "value": 8, "label": "Years in production", "format": "plus" },
  "reports": { "value": 2000, "label": "Daily reports generated", "format": "plus" },
  "states": { "value": 12, "label": "States covered", "format": "plus" }
}
```

- [ ] **Step 3: Create `content/products.json`**

```json
{
  "products": [
    {
      "slug": "school-erp",
      "name": "School ERP",
      "tagline": "School operations on autopilot.",
      "summary": "End-to-end school management — admissions, fees, attendance, exams, report cards, parent communication. 40+ modules, 300+ schools live.",
      "hero": "/screenshots/school-erp.png",
      "icon": "GraduationCap",
      "features": ["Admissions", "Fees & Accounts", "Attendance", "Exams + Report Cards", "Parent App", "Transport", "Library", "HR + Payroll"],
      "primaryCta": { "label": "Book a demo", "href": "/contact?intent=school-erp" }
    },
    {
      "slug": "college-erp",
      "name": "College ERP",
      "tagline": "Built for higher-ed complexity.",
      "summary": "Department-level academic planning, credit-based grading, hostel + transport, alumni — designed for colleges and institutions.",
      "hero": "/screenshots/college-erp.png",
      "icon": "School",
      "features": ["Academic Departments", "Credit-Based Grading", "Hostel Management", "Alumni Network", "Library + Labs", "Examination Cells"],
      "primaryCta": { "label": "Book a demo", "href": "/contact?intent=college-erp" }
    },
    {
      "slug": "school-app",
      "name": "School App",
      "tagline": "Your school, in every parent's pocket.",
      "summary": "Branded white-label mobile app for parents and students. Notices, fee payments, attendance, homework, report cards — under your school's name.",
      "hero": "/screenshots/school-app.png",
      "icon": "Smartphone",
      "features": ["White-label branding", "Push notifications", "Fee payments", "Attendance + homework", "News & events", "Report card delivery"],
      "primaryCta": { "label": "Book a demo", "href": "/contact?intent=school-app" }
    },
    {
      "slug": "escalation",
      "name": "Escalation Management",
      "tagline": "No parent complaint goes silent.",
      "summary": "Route, track, and resolve parent + staff escalations with SLA timers, ownership, and audit trail. Built for schools that take service seriously.",
      "hero": "/screenshots/escalation.png",
      "icon": "AlertTriangle",
      "features": ["SLA timers", "Ownership routing", "Audit trail", "Parent feedback loop", "Dashboards", "Resolution reports"],
      "primaryCta": { "label": "Book a demo", "href": "/contact?intent=escalation" }
    },
    {
      "slug": "odsas",
      "name": "OD-SAS",
      "tagline": "On-demand sub-allocation for staff.",
      "summary": "Faculty substitution + leave + period swap, automated. Reduces the principal's time on substitution by 80%.",
      "hero": "/screenshots/odsas.png",
      "icon": "CalendarClock",
      "features": ["Substitution engine", "Leave management", "Period-swap automation", "Workload balancing", "Audit logs"],
      "primaryCta": { "label": "Book a demo", "href": "/contact?intent=odsas" }
    },
    {
      "slug": "customer-loyalty",
      "name": "Customer Loyalty",
      "tagline": "Reward the parents who refer.",
      "summary": "A loyalty engine for schools — referral tracking, sibling discounts, alumni perks. Improves enrollment + retention.",
      "hero": "/screenshots/customer-loyalty.png",
      "icon": "Gift",
      "features": ["Referral tracking", "Sibling discounts", "Alumni perks", "Wallet + points", "Campaign tools"],
      "primaryCta": { "label": "Book a demo", "href": "/contact?intent=customer-loyalty" }
    },
    {
      "slug": "marketplace",
      "name": "Marketplace",
      "tagline": "Books, uniforms, transport — one storefront.",
      "summary": "A school-branded marketplace for textbooks, uniforms, stationery, and transport top-ups. Parents pay you, you keep the margin.",
      "hero": "/screenshots/marketplace.png",
      "icon": "Store",
      "features": ["Storefront", "Inventory", "Order management", "Vendor onboarding", "Settlement reports"],
      "primaryCta": { "label": "Book a demo", "href": "/contact?intent=marketplace" }
    },
    {
      "slug": "education-crm",
      "name": "Education CRM",
      "tagline": "Capture every admission lead.",
      "summary": "Lead capture from website + walk-in + ads, nurture sequences, counsellor assignment, conversion analytics — built for school admissions teams.",
      "hero": "/screenshots/education-crm.png",
      "icon": "Users",
      "features": ["Lead capture", "Counsellor routing", "Email + SMS nurture", "Pipeline analytics", "Source attribution"],
      "primaryCta": { "label": "Book a demo", "href": "/contact?intent=education-crm" }
    }
  ]
}
```

- [ ] **Step 4: Create `content/schools.json` (24 logos from current assets — engineer to populate filenames after Task 6 migration)**

```json
{
  "schools": [
    { "name": "Delhi Public School", "city": "Delhi", "board": "CBSE", "logo": "/logos/delhi-public.png" },
    { "name": "Genius Public", "city": "Lucknow", "board": "CBSE", "logo": "/logos/genius-public.png" },
    { "name": "GM Public", "city": "Patna", "board": "CBSE", "logo": "/logos/gm-public.png" },
    { "name": "GRM Public", "city": "Bareilly", "board": "CBSE", "logo": "/logos/grm-public.png" },
    { "name": "MKD Public", "city": "Noida", "board": "CBSE", "logo": "/logos/mkd-public.png" },
    { "name": "Residential GP", "city": "Greater Noida", "board": "CBSE", "logo": "/logos/residential-gp.png" },
    { "name": "Richmond Hill", "city": "Bangalore", "board": "ICSE", "logo": "/logos/richmond-hill.png" },
    { "name": "St George", "city": "Hyderabad", "board": "ICSE", "logo": "/logos/st-george.png" },
    { "name": "S Memorial", "city": "Patna", "board": "CBSE", "logo": "/logos/s-memorial.png" },
    { "name": "St Francis", "city": "Bangalore", "board": "ICSE", "logo": "/logos/st-francis.png" },
    { "name": "ABC School", "city": "Indore", "board": "CBSE", "logo": "/logos/abc.png" },
    { "name": "Adhyayan Residential", "city": "Bhopal", "board": "CBSE", "logo": "/logos/adhyayan-residential.png" },
    { "name": "Champaran International", "city": "Motihari", "board": "CBSE", "logo": "/logos/champaran-international.png" },
    { "name": "Chela Mary", "city": "Kolkata", "board": "ICSE", "logo": "/logos/chela-mary.png" },
    { "name": "Dawn Public", "city": "Patna", "board": "CBSE", "logo": "/logos/dawn-public.png" },
    { "name": "Holy Mission", "city": "Patna", "board": "CBSE", "logo": "/logos/holy-mission.png" },
    { "name": "Holy Mission High", "city": "Patna", "board": "CBSE", "logo": "/logos/holy-mission-high.png" },
    { "name": "Laxmi Narayan", "city": "Varanasi", "board": "CBSE", "logo": "/logos/laxmi-narayan.png" },
    { "name": "Muskan Academy", "city": "Lucknow", "board": "CBSE", "logo": "/logos/muskan-academy.png" },
    { "name": "Naya Savera", "city": "Patna", "board": "State", "logo": "/logos/naya-savera.png" },
    { "name": "Sanskar Bharti", "city": "Indore", "board": "CBSE", "logo": "/logos/sanskar-bharti.png" },
    { "name": "St Mary", "city": "Pune", "board": "ICSE", "logo": "/logos/st-mary.png" },
    { "name": "Study Park", "city": "Bareilly", "board": "CBSE", "logo": "/logos/study-park.png" },
    { "name": "Unique", "city": "Bangalore", "board": "CBSE", "logo": "/logos/unique.png" },
    { "name": "Vivekanand International", "city": "Lucknow", "board": "CBSE", "logo": "/logos/vivekanand-international.png" },
    { "name": "Vivraj", "city": "Patna", "board": "CBSE", "logo": "/logos/vivraj.png" },
    { "name": "VK Reta", "city": "Patna", "board": "CBSE", "logo": "/logos/vk-reta.png" }
  ]
}
```

- [ ] **Step 5: Create `content/testimonials.json` (placeholders; user replaces with real)**

```json
{
  "testimonials": [
    {
      "quote": "Friensys made our fee collection completely paperless. Daily collection reports now take 30 seconds instead of 3 hours.",
      "author": "Principal, Delhi Public School",
      "city": "Delhi",
      "schoolLogo": "/logos/delhi-public.png",
      "rating": 5
    },
    {
      "quote": "The parent app is so smooth our parents stopped calling the office for routine queries. That alone paid for the system.",
      "author": "Director, Genius Public School",
      "city": "Lucknow",
      "schoolLogo": "/logos/genius-public.png",
      "rating": 5
    },
    {
      "quote": "We evaluated five vendors. Friensys was the only one with a modular approach — we paid for what we needed, added more later.",
      "author": "Trustee, Adhyayan Residential",
      "city": "Bhopal",
      "schoolLogo": "/logos/adhyayan-residential.png",
      "rating": 5
    }
  ]
}
```

- [ ] **Step 6: Create `content/ai-features.json`**

```json
{
  "live": [],
  "roadmap": [
    {
      "title": "AI Report Card Comments",
      "summary": "Generate teacher-style remarks per student using grade history + attendance. Editable, never auto-published.",
      "quarter": "Q3 2026",
      "icon": "FileText"
    },
    {
      "title": "AI Fee Reminder Writer",
      "summary": "Drafts fee-reminder messages in your school's tone — Hindi or English — based on the parent's history.",
      "quarter": "Q3 2026",
      "icon": "Wallet"
    },
    {
      "title": "WhatsApp Parent-Comms Summarizer",
      "summary": "Long parent chat threads summarized into a one-paragraph briefing for the principal each morning.",
      "quarter": "Q4 2026",
      "icon": "MessageSquare"
    },
    {
      "title": "Dropout Risk Scoring",
      "summary": "Flags students at risk based on attendance + fee delay + grade drop. Counsellor can intervene early.",
      "quarter": "Q4 2026",
      "icon": "TrendingDown"
    },
    {
      "title": "AI Admission Funnel Triage",
      "summary": "Auto-classifies inbound admission inquiries by intent + fit + urgency. Counsellor opens the hottest leads first.",
      "quarter": "Q1 2027",
      "icon": "Filter"
    }
  ],
  "manifesto": {
    "headline": "Admin-AI. Built for the people who run schools.",
    "body": "We don't believe AI replaces a teacher. We believe AI removes the busywork that keeps a principal away from teachers. Every Friensys AI feature is admin-facing, optional, and always editable before it leaves the school."
  }
}
```

- [ ] **Step 7: Create `content/modules.json`**

```json
{
  "groups": [
    {
      "name": "Admissions & Records",
      "modules": ["Online Admission Form", "Admission Number Generator", "Document Upload", "Student Information System", "Multi-Academic-Year"]
    },
    {
      "name": "Fees & Accounts",
      "modules": ["Fee Structure Designer", "Bill Generation", "Payment Gateway", "Daily Collection Report", "Receipts + GST", "Deletion Audit"]
    },
    {
      "name": "Attendance & Comms",
      "modules": ["Student Attendance", "Staff Attendance", "Bulk SMS", "WhatsApp (roadmap)", "Push Notifications", "Notice Board"]
    },
    {
      "name": "Academics",
      "modules": ["Timetable", "Subject Allocation", "Marks Entry", "Exam Scheduling", "Report Card (CBSE/ICSE/State)", "Online Class", "Homework"]
    },
    {
      "name": "Operations",
      "modules": ["Transport + GPS", "Library", "Hostel", "HR + Payroll", "Vendor Management", "Inventory"]
    },
    {
      "name": "Engagement",
      "modules": ["Parent App", "News & Events", "Photo Gallery", "Loyalty", "Marketplace"]
    },
    {
      "name": "Insights",
      "modules": ["Principal Dashboard", "Daily Reports", "MIS", "Custom Report Builder", "Audit Logs"]
    }
  ]
}
```

- [ ] **Step 8: Create `content/case-studies.json` (placeholders)**

```json
{
  "studies": [
    {
      "slug": "delhi-public-fee-automation",
      "school": "Delhi Public School",
      "city": "Delhi",
      "title": "From 3 hours to 30 seconds: how DPS automated daily fee reconciliation",
      "summary": "Daily collection reports across 1,400 students used to take 3 hours of clerical work. After Friensys, the principal sees them at her desk by 9:30 AM, end of day.",
      "stats": [
        { "label": "Time saved per day", "value": "2h 30m" },
        { "label": "Fee defaults resolved", "value": "32%" },
        { "label": "Manual entries", "value": "0" }
      ],
      "logo": "/logos/delhi-public.png"
    },
    {
      "slug": "genius-parent-app-adoption",
      "school": "Genius Public School",
      "city": "Lucknow",
      "title": "1,800 parents, one app: how Genius Public cut office calls by 70%",
      "summary": "Parents had been calling the front desk for every attendance and fee query. After rolling out the Friensys School App, daily call volume fell from ~120 to ~35.",
      "stats": [
        { "label": "Active parent users", "value": "1,800+" },
        { "label": "Office calls/day", "value": "120 → 35" },
        { "label": "Parent NPS", "value": "+48" }
      ],
      "logo": "/logos/genius-public.png"
    },
    {
      "slug": "adhyayan-modular-rollout",
      "school": "Adhyayan Residential",
      "city": "Bhopal",
      "title": "Why a CBSE residential school evaluated 5 vendors and chose modular",
      "summary": "Adhyayan needed hostel + transport on day one but didn't want a full ERP rewrite. With Friensys's modular pricing, they bought what they needed and added later.",
      "stats": [
        { "label": "Modules at launch", "value": "6" },
        { "label": "Modules today", "value": "18" },
        { "label": "Implementation time", "value": "11 days" }
      ],
      "logo": "/logos/adhyayan-residential.png"
    }
  ]
}
```

- [ ] **Step 9: Create `content/nav.json`**

```json
{
  "header": [
    {
      "label": "Product",
      "items": [
        { "label": "School ERP", "href": "/school-erp", "description": "Flagship product — admissions to graduation" },
        { "label": "College ERP", "href": "/products/college-erp", "description": "Higher-ed academics + hostel + alumni" },
        { "label": "School App", "href": "/products/school-app", "description": "White-label parent + student mobile app" },
        { "label": "OD-SAS", "href": "/products/odsas", "description": "Faculty substitution + leave" },
        { "label": "Escalation", "href": "/products/escalation", "description": "Parent complaint routing + SLA" },
        { "label": "Customer Loyalty", "href": "/products/customer-loyalty", "description": "Referrals + alumni perks" },
        { "label": "Marketplace", "href": "/products/marketplace", "description": "School-branded storefront" },
        { "label": "Education CRM", "href": "/products/education-crm", "description": "Admission lead nurture" }
      ]
    },
    { "label": "AI", "href": "/ai" },
    { "label": "Pricing", "href": "/pricing" },
    { "label": "Customers", "href": "/customers" },
    { "label": "Blog", "href": "/blog" },
    { "label": "Contact", "href": "/contact" }
  ],
  "footer": {
    "Product": [
      { "label": "School ERP", "href": "/school-erp" },
      { "label": "College ERP", "href": "/products/college-erp" },
      { "label": "School App", "href": "/products/school-app" },
      { "label": "AI Roadmap", "href": "/ai" }
    ],
    "Solutions": [
      { "label": "CBSE Schools", "href": "/school-erp#cbse" },
      { "label": "ICSE Schools", "href": "/school-erp#icse" },
      { "label": "State Board", "href": "/school-erp#state" },
      { "label": "Multi-branch", "href": "/school-erp#multi-branch" }
    ],
    "Company": [
      { "label": "About", "href": "/about" },
      { "label": "Customers", "href": "/customers" },
      { "label": "Careers", "href": "/careers" },
      { "label": "Contact", "href": "/contact" }
    ],
    "Resources": [
      { "label": "Blog", "href": "/blog" },
      { "label": "Security", "href": "/security" },
      { "label": "DPDPA Compliance", "href": "/legal/dpdpa-compliance" },
      { "label": "Pricing", "href": "/pricing" }
    ],
    "Legal": [
      { "label": "Privacy Policy", "href": "/legal/privacy-policy" },
      { "label": "Terms of Service", "href": "/legal/terms-of-service" },
      { "label": "Cancellation Policy", "href": "/legal/cancellation-policy" },
      { "label": "Refund Policy", "href": "/legal/refund-policy" },
      { "label": "License", "href": "/legal/license" }
    ]
  }
}
```

- [ ] **Step 10: Create `content/faqs.json`**

```json
{
  "home": [
    {
      "q": "What is Friensys?",
      "a": "Friensys is a school ERP platform used by 300+ K-12 schools across India. It covers admissions, fees, attendance, exams, report cards, parent communications, transport, library, and HR — under one branded mobile app per school."
    },
    {
      "q": "Where is my school's data hosted?",
      "a": "All Friensys customer data is hosted on AWS infrastructure in the Mumbai (ap-south-1) region — within India. Encryption at rest (AES-256) and in transit (TLS 1.2+) are enabled by default."
    },
    {
      "q": "Is Friensys DPDPA compliant?",
      "a": "Friensys is aligned with India's Digital Personal Data Protection Act, 2023. We publish a DPDPA compliance statement and offer a Data Processing Agreement on request."
    },
    {
      "q": "How is Friensys different from Kaksha or Parentsalarm?",
      "a": "Friensys is operations-first — fees, attendance, report cards, parent comms. We focus on admin-AI (AI for principals + accountants) rather than student-facing AI tutoring. We've been live with 300+ schools for 8 years."
    }
  ],
  "pricing": [
    {
      "q": "Why don't you publish pricing?",
      "a": "School ERP pricing depends on student count, modules selected, and onboarding requirements. We share a tailored quote within 48 hours of a discovery call — no haggling, no surprises."
    },
    {
      "q": "Is there a free trial?",
      "a": "We run a full guided pilot for qualifying schools, with sample data, for two weeks. Book a demo to request a pilot."
    },
    {
      "q": "Can I buy specific modules only?",
      "a": "Yes. Friensys is modular. Most schools start with Admissions, Fees, Attendance, and the Parent App, and add Transport, Library, Hostel, and HR over time."
    }
  ],
  "security": [
    {
      "q": "Where is data hosted?",
      "a": "AWS Mumbai region (ap-south-1)."
    },
    {
      "q": "How often is data backed up?",
      "a": "Automated daily backups with 30-day retention. Point-in-time recovery available on Enterprise plans."
    },
    {
      "q": "Is there an audit log?",
      "a": "Yes. Every user action that modifies records (fee deletion, marks edit, admission edit) is logged with timestamp, user, and reason."
    }
  ]
}
```

- [ ] **Step 11: Create `lib/content.ts` — type-safe loaders**

```ts
import productsJson from "@/content/products.json";
import schoolsJson from "@/content/schools.json";
import testimonialsJson from "@/content/testimonials.json";
import statsJson from "@/content/stats.json";
import aiFeaturesJson from "@/content/ai-features.json";
import modulesJson from "@/content/modules.json";
import caseStudiesJson from "@/content/case-studies.json";
import navJson from "@/content/nav.json";
import faqsJson from "@/content/faqs.json";
import { z } from "zod";

const productSchema = z.object({
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  summary: z.string(),
  hero: z.string(),
  icon: z.string(),
  features: z.array(z.string()),
  primaryCta: z.object({ label: z.string(), href: z.string() }),
});

const schoolSchema = z.object({
  name: z.string(),
  city: z.string(),
  board: z.string(),
  logo: z.string(),
});

const testimonialSchema = z.object({
  quote: z.string(),
  author: z.string(),
  city: z.string(),
  schoolLogo: z.string(),
  rating: z.number().min(1).max(5),
});

const statSchema = z.object({
  value: z.number(),
  label: z.string(),
  format: z.enum(["plus", "exact", "percent"]),
});

const aiFeatureSchema = z.object({
  title: z.string(),
  summary: z.string(),
  quarter: z.string(),
  icon: z.string(),
});

const moduleGroupSchema = z.object({
  name: z.string(),
  modules: z.array(z.string()),
});

const caseStudySchema = z.object({
  slug: z.string(),
  school: z.string(),
  city: z.string(),
  title: z.string(),
  summary: z.string(),
  stats: z.array(z.object({ label: z.string(), value: z.string() })),
  logo: z.string(),
});

const faqSchema = z.object({ q: z.string(), a: z.string() });

const products = z.object({ products: z.array(productSchema) }).parse(productsJson).products;
const schools = z.object({ schools: z.array(schoolSchema) }).parse(schoolsJson).schools;
const testimonials = z.object({ testimonials: z.array(testimonialSchema) }).parse(testimonialsJson).testimonials;
const stats = z.record(z.string(), statSchema).parse(statsJson);
const aiFeatures = z
  .object({
    live: z.array(aiFeatureSchema),
    roadmap: z.array(aiFeatureSchema),
    manifesto: z.object({ headline: z.string(), body: z.string() }),
  })
  .parse(aiFeaturesJson);
const modules = z.object({ groups: z.array(moduleGroupSchema) }).parse(modulesJson).groups;
const caseStudies = z.object({ studies: z.array(caseStudySchema) }).parse(caseStudiesJson).studies;
const faqs = z.record(z.string(), z.array(faqSchema)).parse(faqsJson);

export function getProducts() {
  return products;
}
export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
export function getSchools() {
  return schools;
}
export function getTestimonials() {
  return testimonials;
}
export function getStats() {
  return stats;
}
export function getAiFeatures() {
  return aiFeatures;
}
export function getModules() {
  return modules;
}
export function getCaseStudies() {
  return caseStudies;
}
export function getCaseStudy(slug: string) {
  return caseStudies.find((s) => s.slug === slug);
}
export function getNav() {
  return navJson as typeof navJson;
}
export function getFaqs(key: keyof typeof faqs) {
  return faqs[key] ?? [];
}

export type Product = (typeof products)[number];
export type School = (typeof schools)[number];
export type Testimonial = (typeof testimonials)[number];
export type CaseStudy = (typeof caseStudies)[number];
```

- [ ] **Step 12: Verify `pnpm typecheck` passes**

```powershell
cd friensys-next
pnpm typecheck
```

Expected: no errors. (Velite types resolve only after a content build; that's fine — we use direct JSON imports here.)

- [ ] **Step 13: Commit**

```powershell
git add friensys-next/lib friensys-next/content
git commit -m "feat(content): add JSON content seeds + type-safe zod loaders"
```

---

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

### Task 6: Migrate legacy assets to `friensys-next/public/`

**Files:**
- Create: `friensys-next/public/logos/` (28 school logos, renamed to kebab-case)
- Create: `friensys-next/public/screenshots/` (39 product screenshots, renamed to kebab-case)
- Create: `friensys-next/public/brand/friensys-logo.png`
- Create: `friensys-next/public/og/` (empty — static OG fallbacks added later)
- Modify: `friensys-next/content/schools.json` (fix VKReta extension: `.jpg` not `.png`)

- [ ] **Step 1: Create destination directories**

Run from repo root:

```powershell
New-Item -ItemType Directory -Force -Path friensys-next\public\logos | Out-Null
New-Item -ItemType Directory -Force -Path friensys-next\public\screenshots | Out-Null
New-Item -ItemType Directory -Force -Path friensys-next\public\brand | Out-Null
New-Item -ItemType Directory -Force -Path friensys-next\public\og | Out-Null
```

- [ ] **Step 2: Copy + rename school logos**

```powershell
$logoMap = @{
    'ABC.png'                     = 'abc.png'
    'DelhiPublic.png'             = 'delhi-public.png'
    'GMpublic.png'                = 'gm-public.png'
    'GRMpublic.png'               = 'grm-public.png'
    'MKDpublic.png'               = 'mkd-public.png'
    'ResidentialGp.png'           = 'residential-gp.png'
    'RichmondHill.png'            = 'richmond-hill.png'
    'STgeorge.png'                = 'st-george.png'
    'Smemorial.png'               = 's-memorial.png'
    'StFrancis.png'               = 'st-francis.png'
    'VKReta.jpg'                  = 'vk-reta.jpg'
    'VkLogo.jpg'                  = 'vk-logo.jpg'
    'adhyayanResidental.png'      = 'adhyayan-residential.png'
    'champaranInternational.png'  = 'champaran-international.png'
    'chelaMary.png'               = 'chela-mary.png'
    'dawnPublic.png'              = 'dawn-public.png'
    'geniusPublic.png'            = 'genius-public.png'
    'holyMission.png'             = 'holy-mission.png'
    'holyMissionHigh.png'         = 'holy-mission-high.png'
    'laxmiNarayan.png'            = 'laxmi-narayan.png'
    'muskanAcademy.png'           = 'muskan-academy.png'
    'nayaSavera.png'              = 'naya-savera.png'
    'sanskarBharti.png'           = 'sanskar-bharti.png'
    'stMary.png'                  = 'st-mary.png'
    'studyPark.png'               = 'study-park.png'
    'uniqueLogo.png'              = 'unique.png'
    'vivekanandInternational.png' = 'vivekanand-international.png'
    'vivraj.png'                  = 'vivraj.png'
}
$logoMap.GetEnumerator() | ForEach-Object {
    $src = "src\assets\schoolImage\$($_.Key)"
    $dst = "friensys-next\public\logos\$($_.Value)"
    if (Test-Path $src) { Copy-Item $src $dst }
    else { Write-Warning "Missing: $src" }
}
```

- [ ] **Step 3: Copy + rename product screenshots**

```powershell
$ssMap = @{
    'ProductSchoolErp.png'                  = 'school-erp.png'
    'SchoolERP.png'                         = 'school-erp-dashboard.png'
    'SchoolErpLogin.png'                    = 'school-erp-login.png'
    'AdminDashboardApp.png'                 = 'admin-dashboard.png'
    'SchoolAppProfile.png'                  = 'school-app.png'
    'CollectionReport.png'                  = 'collection-report.png'
    'FeePayment.png'                        = 'fee-payment.png'
    'EscalationDashboard.png'               = 'escalation.png'
    'EscalationDashboardImage.png'          = 'escalation-detail.png'
    'ODSASDashboard.png'                    = 'odsas.png'
    'ODSASOrganization.png'                 = 'odsas-org.png'
    'LoyaltyAdminDashboard.png'             = 'customer-loyalty.png'
    'LoyaltyDashboard.png'                  = 'customer-loyalty-dashboard.png'
    'LoyaltyMobile.png'                     = 'loyalty-mobile.png'
    'LoyaltyMobile.jpg'                     = 'loyalty-mobile.jpg'
    'LoyaltyWebsite.png'                    = 'loyalty-website.png'
    'LoyaltyWebsite.jpg'                    = 'loyalty-website.jpg'
    'MarketplaceDashboard.png'              = 'marketplace.png'
    'MarketplaceBusinessModel.png'          = 'marketplace-business-model.png'
    'ParentDashboard.png'                   = 'parent-dashboard.png'
    'AddStudent.png'                        = 'add-student.png'
    'MarksEntryTeacher.png'                 = 'marks-entry.png'
    'OnlineClass.png'                       = 'online-class.png'
    'OnlineClassStudent.png'                = 'online-class-student.png'
    'HomeworkStudent.png'                   = 'homework-student.png'
    'EventSection.png'                      = 'events.png'
    'NewsAndEvent.png'                      = 'news-events.png'
    'Message.png'                           = 'messaging.png'
    'dashboardImage.png'                    = 'dashboard.png'
    'educationalCRMAdmissionCordinator.png' = 'education-crm.png'
    'educationalCRMCounsellor.png'          = 'education-crm-counsellor.png'
    'educationalCRMReception.png'           = 'education-crm-reception.png'
    'educationalCRMServices.png'            = 'education-crm-services.png'
    'ConsultingPage.png'                    = 'consulting.png'
    'ServicePage.png'                       = 'services-page.png'
    'backgroundImage.png'                   = 'background.png'
    'contactImage.avif'                     = 'contact.avif'
    'generated-image (4).png'               = 'hero-illustration.png'
    '16_1698480571284.png'                  = 'misc-1.png'
}
$ssMap.GetEnumerator() | ForEach-Object {
    $src = "src\assets\websiteImage\$($_.Key)"
    $dst = "friensys-next\public\screenshots\$($_.Value)"
    if (Test-Path $src) { Copy-Item $src $dst }
    else { Write-Warning "Missing: $src" }
}
```

- [ ] **Step 4: Copy FriensysLogo to brand directory**

```powershell
Copy-Item "src\assets\websiteImage\FriensysLogo.png" "friensys-next\public\brand\friensys-logo.png"
```

- [ ] **Step 5: Fix VK Reta extension in `content/schools.json`**

In `friensys-next/content/schools.json`, find the VK Reta entry and change `.png` → `.jpg`:

```json
{ "name": "VK Reta", "city": "Patna", "board": "CBSE", "logo": "/logos/vk-reta.jpg" }
```

Also note: there is no `college-erp.png` in the legacy screenshots. Add a fallback in `content/products.json` for the College ERP product:

```json
"hero": "/screenshots/school-erp-dashboard.png"
```

(Change the `college-erp` product entry's `"hero"` field to this value.)

- [ ] **Step 6: Verify files landed**

```powershell
(Get-ChildItem friensys-next\public\logos).Count
# Expected: 28

(Get-ChildItem friensys-next\public\screenshots).Count
# Expected: 39

Test-Path friensys-next\public\brand\friensys-logo.png
# Expected: True
```

- [ ] **Step 7: Commit**

```powershell
git add friensys-next/public
git commit -m "feat(assets): migrate school logos + screenshots + brand to friensys-next/public"
```

---

### Task 7: Root layout — fonts, ThemeProvider, `not-found.tsx`

**Files:**
- Create: `friensys-next/components/layout/ThemeProvider.tsx`
- Modify: `friensys-next/app/layout.tsx`
- Modify: `friensys-next/app/globals.css` (wire next/font CSS vars)
- Create: `friensys-next/app/not-found.tsx`

- [ ] **Step 1: Create `components/layout/ThemeProvider.tsx`**

```tsx
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
```

- [ ] **Step 2: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/brand/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Update `app/globals.css` — wire next/font vars into CSS tokens**

Add this block inside the existing `globals.css`, after the `@import` lines and the `@theme {}` block (before or after `html {}`):

```css
/* Override font tokens with next/font CSS variables once they're available on body */
body {
  --font-display: var(--font-geist), "Inter Tight", system-ui, sans-serif;
  --font-body: var(--font-inter), system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;
  font-family: var(--font-body);
  min-height: 100dvh;
}
```

Also remove `font-family: var(--font-body);` from the existing `html {}` block (it's now on `body`), so the `html` block only has `background`, `color`, font-feature-settings, and `-webkit-font-smoothing`.

- [ ] **Step 4: Create `app/not-found.tsx`**

```tsx
import Link from "next/link";
import { AuroraButton } from "@/components/ui/AuroraButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
        404
      </p>
      <h1 className="text-4xl font-bold text-text-primary">Page not found</h1>
      <p className="max-w-md text-text-secondary">
        The page you're looking for doesn't exist. It may have moved — check
        the navigation or go back home.
      </p>
      <div className="flex flex-wrap gap-3">
        <AuroraButton href="/">Go home</AuroraButton>
        <AuroraButton href="/school-erp" variant="outline">
          See School ERP
        </AuroraButton>
      </div>
    </div>
  );
}
```

Note: `AuroraButton` is defined in Task 11. This file will fail typecheck until then — leave it staged and only commit after Task 11.

- [ ] **Step 5: Verify dev still starts**

```powershell
cd friensys-next
pnpm dev
```

Expected: page renders with dark background, no console errors about fonts. Stop with Ctrl+C.

- [ ] **Step 6: Commit**

```powershell
git add friensys-next/app/layout.tsx friensys-next/app/globals.css friensys-next/app/not-found.tsx friensys-next/components
git commit -m "feat(layout): root layout with Geist+Inter fonts, ThemeProvider, 404 page"
```

---

### Task 8: `SiteHeader` + `MegaMenu` + `MobileNav`

**Files:**
- Create: `friensys-next/components/layout/SiteHeader.tsx`
- Create: `friensys-next/components/layout/MegaMenu.tsx`
- Create: `friensys-next/components/layout/MobileNav.tsx`

Note: These components depend on `AuroraButton` (Task 11). Until Task 11, replace `<AuroraButton>` with a plain `<a>` or `<button>` with inline classes, then update after Task 11.

- [ ] **Step 1: Create `components/layout/MegaMenu.tsx`**

```tsx
import Link from "next/link";

interface MegaMenuProps {
  items: Array<{ label: string; href: string; description: string }>;
  onClose: () => void;
}

export function MegaMenu({ items, onClose }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[520px] rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated shadow-2xl p-3 grid grid-cols-2 gap-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="group flex flex-col gap-0.5 rounded-[var(--radius-md)] px-3 py-2.5 hover:bg-bg-overlay transition-colors"
        >
          <span className="text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">
            {item.label}
          </span>
          <span className="text-xs text-text-muted leading-snug">
            {item.description}
          </span>
        </Link>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create `components/layout/MobileNav.tsx`**

```tsx
"use client";
import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import type { getNav } from "@/lib/content";

type NavData = ReturnType<typeof getNav>;

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  nav: NavData;
}

export function MobileNav({ open, onClose, nav }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className="fixed inset-y-0 right-0 z-50 flex w-[min(320px,100vw)] flex-col bg-bg-elevated border-l border-border-subtle"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
          <span className="text-sm font-medium text-text-primary">Menu</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-overlay"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {nav.header.map((item) =>
            "items" in item ? (
              <div key={item.label}>
                <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest text-text-muted">
                  {item.label}
                </p>
                {item.items.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={onClose}
                    className="block px-3 py-2 rounded-md text-sm text-text-secondary hover:text-text-primary hover:bg-bg-overlay transition-colors"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                href={(item as { href: string }).href}
                onClick={onClose}
                className="block px-3 py-2 rounded-md text-sm text-text-secondary hover:text-text-primary hover:bg-bg-overlay transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="p-4 border-t border-border-subtle">
          <a
            href="/contact?intent=demo"
            className="flex w-full items-center justify-center rounded-[var(--radius-md)] bg-accent-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-glow transition-colors"
          >
            Book Demo
          </a>
        </div>
      </nav>
    </>
  );
}
```

- [ ] **Step 3: Create `components/layout/SiteHeader.tsx`**

```tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNav } from "@/lib/content";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = getNav();

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-base/80 backdrop-blur-md border-b border-border-subtle">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/brand/friensys-logo.png"
              alt="Friensys"
              width={28}
              height={28}
              priority
            />
            <span className="font-semibold text-text-primary tracking-tight">
              Friensys
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {nav.header.map((item) =>
              "items" in item ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors",
                      megaOpen
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 opacity-60 transition-transform duration-150",
                        megaOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {megaOpen && (
                    <MegaMenu
                      items={item.items}
                      onClose={() => setMegaOpen(false)}
                    />
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={(item as { href: string }).href}
                  className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="/contact?intent=demo"
              className="hidden md:inline-flex items-center rounded-[var(--radius-md)] bg-accent-primary px-4 py-2 text-sm font-medium text-white hover:bg-accent-glow transition-colors"
            >
              Book Demo
            </a>
            <button
              className="md:hidden p-2 text-text-secondary hover:text-text-primary"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        nav={nav}
      />
    </header>
  );
}
```

Note: After Task 11 (AuroraButton), replace the plain `<a>` Book Demo links in both SiteHeader and MobileNav with `<AuroraButton href="/contact?intent=demo">`.

- [ ] **Step 4: Verify typecheck**

```powershell
cd friensys-next
pnpm typecheck
```

Expected: no errors.

- [ ] **Step 5: Commit**

```powershell
git add friensys-next/components/layout/SiteHeader.tsx friensys-next/components/layout/MegaMenu.tsx friensys-next/components/layout/MobileNav.tsx
git commit -m "feat(layout): SiteHeader with mega-menu dropdown + mobile nav drawer"
```

---

### Task 9: `SiteFooter`

**Files:**
- Create: `friensys-next/components/layout/SiteFooter.tsx`

- [ ] **Step 1: Create `components/layout/SiteFooter.tsx`**

```tsx
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getNav } from "@/lib/content";

export function SiteFooter() {
  const nav = getNav();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-elevated">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand row */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Brand block */}
          <div className="flex-shrink-0 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <Image
                src="/brand/friensys-logo.png"
                alt="Friensys"
                width={28}
                height={28}
              />
              <span className="font-semibold text-text-primary">Friensys</span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {site.tagline}
            </p>
            <p className="text-xs text-text-muted leading-relaxed mb-5">
              Friensys is a school ERP platform serving 300+ schools across
              India, built by Friensys Info Labs, Greater Noida, since 2017.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-2.5 py-0.5 text-xs font-medium text-accent-cyan">
                DPDPA aligned
              </span>
              <span className="inline-flex items-center rounded-full border border-accent-primary/20 bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-glow">
                ISO 27001 in progress
              </span>
              <span className="inline-flex items-center rounded-full border border-border-subtle bg-bg-overlay px-2.5 py-0.5 text-xs font-medium text-text-secondary">
                AWS Mumbai
              </span>
            </div>
          </div>

          {/* Nav columns grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 flex-1">
            {(
              Object.entries(nav.footer) as [
                string,
                Array<{ label: string; href: string }>
              ][]
            ).map(([section, items]) => (
              <div key={section}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-muted">
                  {section}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect column */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-muted">
                Connect
              </h3>
              <ul className="space-y-2 text-sm">
                {site.social.linkedin && (
                  <li>
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {site.contact.phone}
                  </a>
                </li>
                <li className="text-xs text-text-muted leading-snug">
                  {site.address.locality}, {site.address.region}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle">
          <p className="text-xs text-text-muted">
            © {year} Friensys Info Labs. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link
              href="/legal/privacy-policy"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/legal/cancellation-policy"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/components/layout/SiteFooter.tsx
git commit -m "feat(layout): 6-column SiteFooter with nav, trust badges, contact"
```

---

### Task 10: `MarketingLayout` + `lib/seo.ts` + `lib/motion.ts`

**Files:**
- Create: `friensys-next/app/(marketing)/layout.tsx`
- Create: `friensys-next/lib/seo.ts`
- Create: `friensys-next/lib/motion.ts`

- [ ] **Step 1: Create `app/(marketing)/layout.tsx`**

```tsx
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-base">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
```

- [ ] **Step 2: Create `lib/seo.ts`**

```ts
import type { Metadata } from "next";
import { site } from "./site";

interface BuildMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
  noIndex = false,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const url = `${site.url}${path}`;
  const desc = description ?? site.description;
  const ogSlug = path === "/" ? "home" : path.slice(1).replace(/\//g, "-");
  const ogUrl = ogImage ?? `/api/og/${ogSlug}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description: desc,
      url,
      siteName: site.name,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: title }],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description: desc,
      images: [ogUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true },
        },
  };
}
```

- [ ] **Step 3: Create `lib/motion.ts`**

```ts
import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};
```

- [ ] **Step 4: Create placeholder `app/(marketing)/page.tsx` to unblock dev server**

The file needs to exist so Next.js doesn't throw on startup. Replace the default `app/page.tsx` (if it exists from scaffold) and create the marketing group version:

```tsx
export default function HomePage() {
  return <div className="p-8 text-text-primary">Home — Phase 1C</div>;
}
```

This will be replaced in full in Task 21.

- [ ] **Step 5: Verify layout renders**

```powershell
cd friensys-next
pnpm dev
```

Open http://localhost:3000. Expected: sticky dark header + "Home — Phase 1C" text + footer. Stop with Ctrl+C.

- [ ] **Step 6: Commit**

```powershell
git add friensys-next/app/"(marketing)" friensys-next/lib/seo.ts friensys-next/lib/motion.ts
git commit -m "feat(layout): MarketingLayout + buildMetadata helper + Framer Motion variants"
```

---

## Phase 1B — UI Atoms

### Task 11: `AuroraButton`

**Files:**
- Create: `friensys-next/components/ui/AuroraButton.tsx`
- Update: `friensys-next/components/layout/SiteHeader.tsx` (swap plain `<a>` CTA)
- Update: `friensys-next/components/layout/MobileNav.tsx` (swap plain `<a>` CTA)

- [ ] **Step 1: Create `components/ui/AuroraButton.tsx`**

```tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}
interface AsLink extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}
interface AsButton extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

export type AuroraButtonProps = AsLink | AsButton;

export function AuroraButton({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...rest
}: AuroraButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center font-medium rounded-[var(--radius-md)]",
    "transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4",
    "disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" && [
      "bg-accent-primary text-white",
      "hover:bg-accent-glow hover:shadow-[0_0_28px_-4px_hsl(252_100%_70%_/_0.55)]",
    ],
    variant === "outline" && [
      "border border-border-strong bg-transparent text-text-primary",
      "hover:border-accent-primary hover:text-accent-primary hover:shadow-[0_0_18px_-4px_hsl(252_100%_70%_/_0.3)]",
    ],
    size === "sm" && "px-3 py-1.5 text-sm",
    size === "md" && "px-5 py-2.5 text-base",
    size === "lg" && "px-7 py-3.5 text-lg",
    className
  );

  if (href !== undefined) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Update `SiteHeader.tsx` — swap plain `<a>` Book Demo with `AuroraButton`**

Add import:
```tsx
import { AuroraButton } from "@/components/ui/AuroraButton";
```

Replace `<a href="/contact?intent=demo" className="hidden md:inline-flex ...">Book Demo</a>` with:
```tsx
<AuroraButton href="/contact?intent=demo" size="sm" className="hidden md:inline-flex">
  Book Demo
</AuroraButton>
```

- [ ] **Step 3: Update `MobileNav.tsx` — swap plain `<a>` with `AuroraButton`**

Add import, then replace the bottom CTA `<a>` with:
```tsx
import { AuroraButton } from "@/components/ui/AuroraButton";
// ...
<AuroraButton href="/contact?intent=demo" className="w-full justify-center">
  Book Demo
</AuroraButton>
```

- [ ] **Step 4: Verify typecheck**

```powershell
cd friensys-next && pnpm typecheck
```

Expected: no errors.

- [ ] **Step 5: Commit**

```powershell
git add friensys-next/components/ui/AuroraButton.tsx friensys-next/components/layout/SiteHeader.tsx friensys-next/components/layout/MobileNav.tsx friensys-next/app/not-found.tsx
git commit -m "feat(ui): AuroraButton with primary/outline/glow variants"
```

---

### Task 12: `GradientMesh`

**Files:**
- Create: `friensys-next/components/ui/GradientMesh.tsx`

- [ ] **Step 1: Create `components/ui/GradientMesh.tsx`**

```tsx
"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GradientMeshProps {
  className?: string;
  intensity?: number;
}

export function GradientMesh({ className, intensity = 0.05 }: GradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const blobs = [
        { x: 0.3 + 0.12 * Math.sin(t * 0.4), y: 0.4 + 0.1 * Math.cos(t * 0.3), r: 0.55, color: `rgba(124,92,255,${intensity})` },
        { x: 0.72 + 0.1 * Math.cos(t * 0.35), y: 0.3 + 0.08 * Math.sin(t * 0.45), r: 0.45, color: `rgba(77,212,255,${intensity * 0.7})` },
        { x: 0.5 + 0.08 * Math.sin(t * 0.25), y: 0.72 + 0.1 * Math.cos(t * 0.5), r: 0.4, color: `rgba(124,92,255,${intensity * 0.5})` },
      ];
      blobs.forEach(({ x, y, r, color }) => {
        const grad = ctx.createRadialGradient(x * w, y * h, 0, x * w, y * h, r * Math.max(w, h));
        grad.addColorStop(0, color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });
      t += 0.005;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, [intensity]);

  return <canvas ref={canvasRef} className={cn("pointer-events-none", className)} aria-hidden="true" />;
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/components/ui/GradientMesh.tsx
git commit -m "feat(ui): GradientMesh animated canvas hero background"
```

---

### Task 13: `TerminalStat`

**Files:**
- Create: `friensys-next/components/ui/TerminalStat.tsx`

- [ ] **Step 1: Create `components/ui/TerminalStat.tsx`**

```tsx
import { cn } from "@/lib/utils";

interface TerminalStatProps {
  value: string;
  label?: string;
  className?: string;
}

export function TerminalStat({ value, label, className }: TerminalStatProps) {
  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span className="select-none font-mono text-xs text-accent-cyan opacity-70" aria-hidden="true">
        &gt;
      </span>
      <span className="font-mono font-semibold text-text-primary">{value}</span>
      {label && <span className="font-mono text-xs text-text-muted">{label}</span>}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/components/ui/TerminalStat.tsx
git commit -m "feat(ui): TerminalStat monospace accent component"
```

---

### Task 14: `LiveCounter`

**Files:**
- Create: `friensys-next/components/ui/LiveCounter.tsx`

- [ ] **Step 1: Create `components/ui/LiveCounter.tsx`**

```tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiveCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function LiveCounter({ value, suffix = "+", label, className }: LiveCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className={cn("flex flex-col gap-1", className)}>
      <span className="tabular-nums text-4xl font-bold text-text-primary sm:text-5xl">
        {count}<span className="text-accent-primary">{suffix}</span>
      </span>
      <span className="text-sm text-text-secondary">{label}</span>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/components/ui/LiveCounter.tsx
git commit -m "feat(ui): LiveCounter animates 0 to N on scroll-into-view"
```

---

### Task 15: `BentoCard`

**Files:**
- Create: `friensys-next/components/ui/BentoCard.tsx`

- [ ] **Step 1: Create `components/ui/BentoCard.tsx`**

```tsx
import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  glow?: boolean;
}

export function BentoCard({ children, className, as: Tag = "div", glow = false }: BentoCardProps) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated p-6",
        "transition-all duration-300",
        glow && ["hover:border-accent-primary/30", "hover:shadow-[0_0_60px_-20px_hsl(252_100%_70%_/_0.25)]"],
        className
      )}
    >
      {children}
    </Tag>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/components/ui/BentoCard.tsx
git commit -m "feat(ui): BentoCard asymmetric grid card primitive"
```

---

### Task 16: `GlowSurface`

**Files:**
- Create: `friensys-next/components/ui/GlowSurface.tsx`

- [ ] **Step 1: Create `components/ui/GlowSurface.tsx`**

```tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlowColor = "violet" | "cyan" | "lime";

const glowClasses: Record<GlowColor, string> = {
  violet: "hover:border-accent-primary/30 hover:shadow-[0_0_60px_-20px_hsl(252_100%_70%_/_0.3)]",
  cyan:   "hover:border-accent-cyan/30 hover:shadow-[0_0_60px_-20px_hsl(197_100%_64%_/_0.3)]",
  lime:   "hover:border-accent-lime/30 hover:shadow-[0_0_60px_-20px_hsl(84_100%_67%_/_0.3)]",
};

export function GlowSurface({ children, className, color = "violet" }: { children: ReactNode; className?: string; color?: GlowColor }) {
  return (
    <div className={cn("rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated transition-all duration-300", glowClasses[color], className)}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/components/ui/GlowSurface.tsx
git commit -m "feat(ui): GlowSurface elevated card with colored hover glow"
```

---

### Task 17: `SchoolLogo`

**Files:**
- Create: `friensys-next/components/ui/SchoolLogo.tsx`

- [ ] **Step 1: Create `components/ui/SchoolLogo.tsx`**

```tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SchoolLogoProps {
  src: string;
  name: string;
  className?: string;
}

export function SchoolLogo({ src, name, className }: SchoolLogoProps) {
  return (
    <div className={cn("flex items-center justify-center rounded-[var(--radius-md)] p-3 transition-colors hover:bg-bg-overlay", className)}>
      <Image
        src={src}
        alt={`${name} logo`}
        width={100}
        height={48}
        className="h-8 w-auto object-contain grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
      />
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/components/ui/SchoolLogo.tsx
git commit -m "feat(ui): SchoolLogo greyscale-to-color on hover"
```

---

### Task 18: `BrowserFrame`

**Files:**
- Create: `friensys-next/components/ui/BrowserFrame.tsx`

- [ ] **Step 1: Create `components/ui/BrowserFrame.tsx`**

```tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function BrowserFrame({ src, alt, width = 1200, height = 800, className }: BrowserFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated shadow-[0_0_80px_-20px_hsl(252_100%_70%_/_0.2)]", className)}>
      <div className="flex items-center gap-1.5 border-b border-border-subtle bg-bg-overlay px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/50" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-amber/50" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-lime/50" aria-hidden="true" />
        <div className="ml-4 max-w-52 flex-1 rounded bg-bg-base/80 px-3 py-0.5 text-xs text-text-muted">
          app.friensys.com
        </div>
      </div>
      <Image src={src} alt={alt} width={width} height={height} className="w-full object-cover object-top" />
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/components/ui/BrowserFrame.tsx
git commit -m "feat(ui): BrowserFrame screenshot mockup with chrome decoration"
```

---

### Task 19: `Badge`

**Files:**
- Create: `friensys-next/components/ui/Badge.tsx`
- Modify: `friensys-next/components/layout/SiteFooter.tsx` (use Badge)

- [ ] **Step 1: Create `components/ui/Badge.tsx`**

```tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "live" | "roadmap" | "dpdpa" | "iso" | "aws" | "new" | "default";

const variants: Record<BadgeVariant, string> = {
  live:    "border-accent-lime/25 bg-accent-lime/10 text-accent-lime",
  roadmap: "border-accent-amber/25 bg-accent-amber/10 text-accent-amber",
  dpdpa:   "border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan",
  iso:     "border-accent-primary/25 bg-accent-primary/10 text-accent-glow",
  aws:     "border-border-subtle bg-bg-overlay text-text-secondary",
  new:     "border-accent-primary/25 bg-accent-primary/10 text-accent-primary",
  default: "border-border-subtle bg-bg-overlay text-text-secondary",
};

export function Badge({ variant = "default", children, className }: { variant?: BadgeVariant; children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Update `SiteFooter.tsx` to use `Badge`**

Add import: `import { Badge } from "@/components/ui/Badge";`

Replace the three inline badge `<span>` elements with:
```tsx
<div className="flex flex-wrap gap-2">
  <Badge variant="dpdpa">DPDPA aligned</Badge>
  <Badge variant="iso">ISO 27001 in progress</Badge>
  <Badge variant="aws">AWS Mumbai</Badge>
</div>
```

- [ ] **Step 3: Commit**

```powershell
git add friensys-next/components/ui/Badge.tsx friensys-next/components/layout/SiteFooter.tsx
git commit -m "feat(ui): Badge component with live/roadmap/dpdpa/iso/aws variants"
```

---

### Task 20: `SectionHeading` + SEO components + `lib/schema.ts`

**Files:**
- Create: `friensys-next/components/ui/SectionHeading.tsx`
- Create: `friensys-next/components/seo/JsonLd.tsx`
- Create: `friensys-next/lib/schema.ts`
- Create: `friensys-next/components/seo/HomeSchemas.tsx`
- Create: `friensys-next/components/seo/ProductSchema.tsx`
- Create: `friensys-next/components/seo/ArticleSchema.tsx`
- Create: `friensys-next/components/seo/FAQSchema.tsx`
- Create: `friensys-next/components/seo/BreadcrumbSchema.tsx`

- [ ] **Step 1: Create `components/ui/SectionHeading.tsx`**

```tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ label, title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)}>
      {label && (
        <span className="inline-flex rounded-full border border-accent-primary/20 bg-accent-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-glow">
          {label}
        </span>
      )}
      <h2 className="max-w-3xl text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Create `components/seo/JsonLd.tsx`**

All data originates from internal schema builders (no user input). Use HTML-safe stringify to prevent script injection via `<` or `>` in string values:

```tsx
function safeStringify(data: Record<string, unknown>): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data from internal builders, HTML-safe serialized
      dangerouslySetInnerHTML={{ __html: safeStringify(data) }}
    />
  );
}
```

- [ ] **Step 3: Create `lib/schema.ts`**

```ts
import { site } from "./site";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    logo: `${site.url}/brand/friensys-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    sameAs: [site.social.linkedin].filter(Boolean),
    foundingDate: "2017",
    areaServed: "IN",
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${site.url}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Friensys School ERP",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Contact for pricing" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "86" },
    url: site.url,
  };
}

export function buildProductSchema(args: { name: string; description: string; url: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: args.name,
    description: args.description,
    url: `${site.url}${args.url}`,
    image: args.image,
    brand: { "@type": "Brand", name: site.name },
    offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "INR" },
  };
}

export function buildArticleSchema(args: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    url: `${site.url}${args.url}`,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: { "@type": "Person", name: args.author ?? "Friensys" },
    publisher: { "@type": "Organization", name: site.name, logo: `${site.url}/brand/friensys-logo.png` },
    image: args.image,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${args.url}` },
  };
}

export function buildFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    openingHours: "Mo-Fr 09:30-18:30",
    image: `${site.url}/brand/friensys-logo.png`,
  };
}
```

- [ ] **Step 4: Create `components/seo/HomeSchemas.tsx`**

```tsx
import { JsonLd } from "./JsonLd";
import { buildOrganizationSchema, buildWebSiteSchema, buildSoftwareApplicationSchema } from "@/lib/schema";

export function HomeSchemas() {
  return (
    <>
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildWebSiteSchema()} />
      <JsonLd data={buildSoftwareApplicationSchema()} />
    </>
  );
}
```

- [ ] **Step 5: Create `components/seo/ProductSchema.tsx`**

```tsx
import { JsonLd } from "./JsonLd";
import { buildProductSchema } from "@/lib/schema";

export function ProductSchema(props: { name: string; description: string; url: string; image?: string }) {
  return <JsonLd data={buildProductSchema(props)} />;
}
```

- [ ] **Step 6: Create `components/seo/ArticleSchema.tsx`**

```tsx
import { JsonLd } from "./JsonLd";
import { buildArticleSchema } from "@/lib/schema";

export function ArticleSchema(props: { title: string; description: string; url: string; datePublished: string; dateModified?: string; author?: string; image?: string }) {
  return <JsonLd data={buildArticleSchema(props)} />;
}
```

- [ ] **Step 7: Create `components/seo/FAQSchema.tsx`**

```tsx
import { JsonLd } from "./JsonLd";
import { buildFAQSchema } from "@/lib/schema";

export function FAQSchema({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  return <JsonLd data={buildFAQSchema(faqs)} />;
}
```

- [ ] **Step 8: Create `components/seo/BreadcrumbSchema.tsx`**

```tsx
import { JsonLd } from "./JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  return <JsonLd data={buildBreadcrumbSchema(items)} />;
}
```

- [ ] **Step 9: Verify typecheck**

```powershell
cd friensys-next && pnpm typecheck
```

Expected: no errors.

- [ ] **Step 10: Commit**

```powershell
git add friensys-next/components/ui/SectionHeading.tsx friensys-next/components/seo friensys-next/lib/schema.ts
git commit -m "feat(ui): SectionHeading + SEO JSON-LD component suite + lib/schema builders"
```

---

## Phase 1C — Core Marketing Pages

### Task 21: Home page

**Files:**
- Modify: `friensys-next/app/globals.css` (add `@keyframes scroll` for marquee)
- Create: `friensys-next/components/sections/home/Hero.tsx`
- Create: `friensys-next/components/sections/home/TrustStrip.tsx`
- Create: `friensys-next/components/sections/home/WhyFriensys.tsx`
- Create: `friensys-next/components/sections/home/ProductBento.tsx`
- Create: `friensys-next/components/sections/home/AITeaser.tsx`
- Create: `friensys-next/components/sections/home/StatsCounter.tsx`
- Create: `friensys-next/components/sections/home/Testimonials.tsx`
- Create: `friensys-next/components/sections/shared/CTASection.tsx`
- Replace: `friensys-next/app/(marketing)/page.tsx`

- [ ] **Step 1: Add scroll keyframe to `globals.css`**

Append to `friensys-next/app/globals.css`:

```css
@keyframes scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

- [ ] **Step 2: Create `components/sections/home/Hero.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { TerminalStat } from "@/components/ui/TerminalStat";
import { fadeUp, stagger } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      <GradientMesh className="absolute inset-0 h-full w-full" intensity={0.06} />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp}>
            <TerminalStat
              value="> 300 schools"
              label="running Friensys"
              className="mb-6 justify-center"
            />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold leading-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            The AI-ready school ERP{" "}
            <span className="text-accent-primary">trusted by 300+ schools</span>{" "}
            across India.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary"
          >
            From admissions to graduation — fees, attendance, report cards,
            parent comms. Now with admin-AI built in.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <AuroraButton href="/contact?intent=demo" size="lg">
              Book a free demo
            </AuroraButton>
            <AuroraButton href="/school-erp" variant="outline" size="lg">
              See School ERP
            </AuroraButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/sections/home/TrustStrip.tsx`**

```tsx
import { getSchools } from "@/lib/content";

export function TrustStrip() {
  const schools = getSchools();
  const doubled = [...schools, ...schools];

  return (
    <section className="border-y border-border-subtle py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-text-muted">
        Trusted by schools across India
      </p>
      <div className="overflow-hidden">
        <div
          className="flex w-max gap-2 animate-[scroll_35s_linear_infinite]"
          style={{ willChange: "transform" }}
        >
          {doubled.map((school, i) => (
            <div
              key={`${school.name}-${i}`}
              className="flex h-14 w-28 flex-shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border-subtle bg-bg-elevated px-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={school.logo}
                alt={`${school.name} logo`}
                className="h-7 w-auto object-contain grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create `components/sections/home/WhyFriensys.tsx`**

```tsx
import { BentoCard } from "@/components/ui/BentoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Database, BrainCircuit, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Operations-first ERP",
    body: "40+ modules covering every school workflow: admissions, fees, attendance, exams, report cards, transport, library, HR, and payroll. Built for Indian schools — CBSE, ICSE, and State Board.",
    color: "text-accent-cyan",
  },
  {
    icon: BrainCircuit,
    title: "Admin-AI, not student-AI",
    body: "AI that removes busywork for principals and accountants — not homework helpers for students. AI report card comments, fee reminder drafts, and dropout risk scoring. Always editable, never auto-published.",
    color: "text-accent-primary",
  },
  {
    icon: ShieldCheck,
    title: "DPDPA-aligned by default",
    body: "Your student data stays in India — hosted on AWS Mumbai (ap-south-1). AES-256 at rest, TLS 1.2+ in transit, daily backups, audit logs on every sensitive action. ISO 27001 in progress.",
    color: "text-accent-lime",
  },
];

export function WhyFriensys() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Friensys"
          title="Built for the people who run schools."
          subtitle="Operations depth, AI where it matters, and compliance you can actually show a procurement committee."
          className="mb-16"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body, color }) => (
            <BentoCard key={title} glow className="flex flex-col gap-4">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-bg-overlay ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{body}</p>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create `components/sections/home/ProductBento.tsx`**

```tsx
import Link from "next/link";
import { BentoCard } from "@/components/ui/BentoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProducts } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

function DynIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}

export function ProductBento() {
  const products = getProducts();
  const [flagship, ...rest] = products;

  return (
    <section className="py-24 sm:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Products"
          title="One platform. Eight products."
          subtitle="Start with School ERP. Add the rest as you grow — modular pricing, no lock-in."
          className="mb-16"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Flagship — spans 2 rows */}
          <BentoCard glow className="lg:row-span-2 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-accent-primary/10 text-accent-primary">
                <DynIcon name={flagship.icon} className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-primary">Flagship</span>
                <h3 className="mt-1 text-2xl font-bold text-text-primary">{flagship.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{flagship.summary}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {flagship.features.slice(0, 6).map((f) => (
                  <li key={f} className="rounded-full border border-border-subtle px-2.5 py-0.5 text-xs text-text-muted">{f}</li>
                ))}
              </ul>
            </div>
            <Link
              href="/school-erp"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:text-accent-glow transition-colors"
            >
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </BentoCard>

          {/* Other products */}
          {rest.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              <BentoCard glow as="article" className="h-full group cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-bg-overlay text-text-secondary group-hover:bg-accent-primary/10 group-hover:text-accent-primary transition-colors">
                    <DynIcon name={product.icon} className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{product.name}</h3>
                    <p className="mt-1 text-sm text-text-muted line-clamp-2">{product.tagline}</p>
                  </div>
                </div>
              </BentoCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create `components/sections/home/AITeaser.tsx`**

```tsx
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { BentoCard } from "@/components/ui/BentoCard";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { getAiFeatures } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function AITeaser() {
  const { roadmap, manifesto } = getAiFeatures();
  const preview = roadmap.slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="new" className="mb-4">Admin-AI</Badge>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl leading-tight">
              {manifesto.headline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">{manifesto.body}</p>
            <AuroraButton href="/ai" variant="outline" className="mt-8 group">
              See the AI roadmap
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </AuroraButton>
          </div>

          <div className="flex flex-col gap-3">
            {preview.map((feat) => (
              <BentoCard key={feat.title} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Badge variant="roadmap">{feat.quarter}</Badge>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{feat.title}</p>
                  <p className="mt-1 text-sm text-text-secondary">{feat.summary}</p>
                </div>
              </BentoCard>
            ))}
            <Link href="/ai" className="mt-2 inline-flex items-center gap-1 text-sm text-text-muted hover:text-text-primary transition-colors">
              + {roadmap.length - 3} more features on the roadmap <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Create `components/sections/home/StatsCounter.tsx`**

```tsx
import { LiveCounter } from "@/components/ui/LiveCounter";
import { getStats } from "@/lib/content";

export function StatsCounter() {
  const stats = getStats();
  const items = [
    { key: "schools",  suffix: "+" },
    { key: "modules",  suffix: "+" },
    { key: "years",    suffix: "+" },
    { key: "reports",  suffix: "+" },
    { key: "states",   suffix: "+" },
  ] as const;

  return (
    <section className="border-y border-border-subtle bg-bg-elevated py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ key, suffix }) => {
            const stat = stats[key];
            if (!stat) return null;
            return (
              <LiveCounter
                key={key}
                value={stat.value}
                suffix={stat.format === "plus" ? suffix : ""}
                label={stat.label}
                className="items-center text-center"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 8: Create `components/sections/home/Testimonials.tsx`**

```tsx
import { getTestimonials } from "@/lib/content";
import { GlowSurface } from "@/components/ui/GlowSurface";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What schools say"
          title="Proof from the schools that run it."
          className="mb-16"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <GlowSurface key={t.author} className="flex flex-col gap-5 p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-accent-amber text-sm">★</span>
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.schoolLogo}
                  alt=""
                  className="h-7 w-auto object-contain grayscale opacity-60"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-text-primary">{t.author}</p>
                  <p className="text-xs text-text-muted">{t.city}</p>
                </div>
              </footer>
            </GlowSurface>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 9: Create `components/sections/shared/CTASection.tsx`**

```tsx
import { AuroraButton } from "@/components/ui/AuroraButton";
import { GradientMesh } from "@/components/ui/GradientMesh";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "See Friensys in action.",
  subtitle = "Book a 30-minute guided demo. We'll walk through the features that matter most for your school.",
  primaryLabel = "Book a free demo",
  primaryHref = "/contact?intent=demo",
  secondaryLabel = "Talk to sales",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <GradientMesh className="absolute inset-0 h-full w-full" intensity={0.04} />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-text-primary sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">{subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <AuroraButton href={primaryHref} size="lg">{primaryLabel}</AuroraButton>
          <AuroraButton href={secondaryHref} variant="outline" size="lg">{secondaryLabel}</AuroraButton>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 10: Replace `app/(marketing)/page.tsx` with the full Home page**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getFaqs } from "@/lib/content";
import { Hero } from "@/components/sections/home/Hero";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { WhyFriensys } from "@/components/sections/home/WhyFriensys";
import { ProductBento } from "@/components/sections/home/ProductBento";
import { AITeaser } from "@/components/sections/home/AITeaser";
import { StatsCounter } from "@/components/sections/home/StatsCounter";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/sections/shared/CTASection";
import { HomeSchemas } from "@/components/seo/HomeSchemas";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = buildMetadata({
  title: "School ERP for 300+ Schools Across India",
  description:
    "The AI-ready school ERP trusted by 300+ schools across India. Fees, attendance, report cards, parent comms — with admin-AI built in. DPDPA aligned.",
  path: "/",
});

export default function HomePage() {
  const faqs = getFaqs("home");
  return (
    <>
      <HomeSchemas />
      <FAQSchema faqs={faqs} />
      <Hero />
      <TrustStrip />
      <WhyFriensys />
      <ProductBento />
      <AITeaser />
      <StatsCounter />
      <Testimonials />
      <CTASection />
    </>
  );
}
```

- [ ] **Step 11: Verify dev renders home page**

```powershell
cd friensys-next && pnpm dev
```

Open http://localhost:3000. Expected: full home page with hero, logo strip, bento product grid, AI teaser, counters, testimonials, CTA. Stop with Ctrl+C.

- [ ] **Step 12: Commit**

```powershell
git add friensys-next/app/globals.css friensys-next/app/"(marketing)"/page.tsx friensys-next/components/sections
git commit -m "feat(home): complete home page — hero, trust strip, bento grid, AI teaser, stats, testimonials, CTA"
```

---

### Task 22: `/school-erp` page

**Files:**
- Create: `friensys-next/components/sections/school-erp/ErpHero.tsx`
- Create: `friensys-next/components/sections/school-erp/FeesSpotlight.tsx`
- Create: `friensys-next/components/sections/school-erp/ModuleAccordion.tsx`
- Create: `friensys-next/app/(marketing)/school-erp/page.tsx`

- [ ] **Step 1: Create `components/sections/school-erp/ErpHero.tsx`**

```tsx
import { AuroraButton } from "@/components/ui/AuroraButton";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { TerminalStat } from "@/components/ui/TerminalStat";
import { Badge } from "@/components/ui/Badge";

export function ErpHero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="dpdpa" className="mb-4">School ERP</Badge>
            <h1 className="text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
              School ERP for principals who care about{" "}
              <span className="text-accent-primary">cash flow.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              40+ modules. 300+ schools live. CBSE, ICSE, and State Board.
              From admission to graduation — fees, attendance, report cards,
              parent communication, transport, library, and HR under one roof.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <TerminalStat value="> 300" label="schools" />
              <TerminalStat value="> 40" label="modules" />
              <TerminalStat value="> 8 years" label="in production" />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <AuroraButton href="/contact?intent=school-erp" size="lg">
                Book a demo
              </AuroraButton>
              <AuroraButton href="/pricing" variant="outline" size="lg">
                See pricing
              </AuroraButton>
            </div>
          </div>
          <BrowserFrame
            src="/screenshots/school-erp.png"
            alt="Friensys School ERP dashboard showing fee collection overview"
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/sections/school-erp/FeesSpotlight.tsx`**

```tsx
import { BentoCard } from "@/components/ui/BentoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { CheckCircle2 } from "lucide-react";

const feeFeatures = [
  "Multi-head fee structures with custom due dates",
  "Partial payments, waivers, and sibling discounts",
  "Daily collection report at 9 AM — auto-generated",
  "Online payment gateway + UPI + cash receipt",
  "Late-fee automation with configurable rules",
  "Audit trail on every deletion and adjustment",
];

export function FeesSpotlight() {
  return (
    <section id="fees" className="bg-bg-elevated py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <BrowserFrame
            src="/screenshots/collection-report.png"
            alt="Daily fee collection report in Friensys"
          />
          <div>
            <SectionHeading
              label="Fees & Accounts"
              title="Your daily collection report, ready before you sit down."
              align="left"
              className="mb-8"
            />
            <ul className="space-y-3">
              {feeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-lime" />
                  <span className="text-sm text-text-secondary">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/sections/school-erp/ModuleAccordion.tsx`**

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/primitives/accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getModules } from "@/lib/content";

export function ModuleAccordion() {
  const groups = getModules();
  return (
    <section id="modules" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="40+ Modules"
          title="Everything a school runs. One platform."
          subtitle="Start with what you need. Activate more as you grow."
          className="mb-12"
        />
        <Accordion type="multiple" className="mx-auto max-w-3xl space-y-2">
          {groups.map((group) => (
            <AccordionItem
              key={group.name}
              value={group.name}
              className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated px-4"
            >
              <AccordionTrigger className="text-left font-semibold text-text-primary hover:no-underline">
                {group.name}
                <span className="ml-2 text-xs font-normal text-text-muted">
                  {group.modules.length} modules
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-wrap gap-2 pb-2">
                  {group.modules.map((m) => (
                    <li
                      key={m}
                      className="rounded-full border border-border-subtle bg-bg-overlay px-3 py-1 text-xs text-text-secondary"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create `app/(marketing)/school-erp/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getFaqs } from "@/lib/content";
import { ErpHero } from "@/components/sections/school-erp/ErpHero";
import { FeesSpotlight } from "@/components/sections/school-erp/FeesSpotlight";
import { ModuleAccordion } from "@/components/sections/school-erp/ModuleAccordion";
import { CTASection } from "@/components/sections/shared/CTASection";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = buildMetadata({
  title: "School ERP — Admissions to Graduation",
  description:
    "Friensys School ERP: 40+ modules, 300+ schools. Fees, attendance, report cards, parent app, transport, HR. CBSE, ICSE, State Board. DPDPA-aligned.",
  path: "/school-erp",
});

export default function SchoolErpPage() {
  const faqs = getFaqs("home");
  return (
    <>
      <ProductSchema
        name="Friensys School ERP"
        description="End-to-end school management software — admissions, fees, attendance, exams, report cards, parent comms. 40+ modules, 300+ schools live."
        url="/school-erp"
        image="/screenshots/school-erp.png"
      />
      <FAQSchema faqs={faqs} />
      <ErpHero />
      <FeesSpotlight />
      <ModuleAccordion />
      <CTASection
        title="Ready to see it with your school's data?"
        subtitle="We'll set up a guided demo using a school profile similar to yours — CBSE, ICSE, or State Board."
        primaryHref="/contact?intent=school-erp"
      />
    </>
  );
}
```

- [ ] **Step 5: Commit**

```powershell
git add friensys-next/app/"(marketing)"/school-erp friensys-next/components/sections/school-erp
git commit -m "feat(pages): /school-erp page with hero, fees spotlight, module accordion"
```

---

### Task 23: `/pricing` page

**Files:**
- Create: `friensys-next/components/sections/pricing/PricingTiers.tsx`
- Create: `friensys-next/app/(marketing)/pricing/page.tsx`

- [ ] **Step 1: Create `components/sections/pricing/PricingTiers.tsx`**

```tsx
import { AuroraButton } from "@/components/ui/AuroraButton";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";

const tiers = [
  {
    name: "Core",
    tagline: "For schools starting their ERP journey.",
    description: "Admissions, fees, attendance, and the parent app. The essential four — runs most schools end-to-end.",
    features: ["Admissions & student records", "Fee collection + daily reports", "Attendance (students + staff)", "Parent app (branded)", "Bulk SMS / notifications", "Principal dashboard"],
    cta: "Get a Core quote",
    href: "/contact?intent=pricing-core",
  },
  {
    name: "Growth",
    tagline: "For schools that need the full stack.",
    description: "Every Core module plus Exams, Report Cards, Transport, Library, HR & Payroll, and admin-AI features as they ship.",
    features: ["Everything in Core", "Exams + Report Cards (CBSE/ICSE/State)", "Transport + GPS", "Library management", "HR + Payroll", "OD-SAS (faculty substitution)", "Admin-AI features (as they ship)"],
    cta: "Get a Growth quote",
    href: "/contact?intent=pricing-growth",
    highlight: true,
  },
];

export function PricingTiers() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex rounded-full border border-accent-primary/20 bg-accent-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-glow mb-4">
            Pricing
          </span>
          <h1 className="text-4xl font-bold text-text-primary sm:text-5xl">
            Two ways to start. One platform.
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Pricing depends on student count, modules, and onboarding requirements.
            We share a tailored quote within 48 hours of a call — no haggling, no surprises.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <BentoCard
              key={tier.name}
              glow
              className={`flex flex-col justify-between ${tier.highlight ? "border-accent-primary/30" : ""}`}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">{tier.name}</h2>
                    <p className="mt-1 text-sm text-text-muted">{tier.tagline}</p>
                  </div>
                  {tier.highlight && <Badge variant="new">Popular</Badge>}
                </div>
                <p className="text-sm text-text-secondary mb-6">{tier.description}</p>
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-lime" />
                      <span className="text-sm text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <AuroraButton
                href={tier.href}
                variant={tier.highlight ? "primary" : "outline"}
                className="mt-8 w-full justify-center"
              >
                {tier.cta}
              </AuroraButton>
            </BentoCard>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          Need a customised module set?{" "}
          <a href="/contact" className="text-accent-primary hover:text-accent-glow transition-colors">
            Talk to us
          </a>{" "}
          — Friensys is fully modular.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `app/(marketing)/pricing/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getFaqs } from "@/lib/content";
import { PricingTiers } from "@/components/sections/pricing/PricingTiers";
import { CTASection } from "@/components/sections/shared/CTASection";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — School ERP",
  description:
    "Friensys School ERP pricing depends on student count and modules selected. We share a tailored quote within 48 hours. Modular — pay for what you need.",
  path: "/pricing",
});

export default function PricingPage() {
  const faqs = getFaqs("pricing");
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PricingTiers />
      <section className="py-16 bg-bg-elevated">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">Frequently asked questions</h2>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold text-text-primary">{q}</dt>
                <dd className="mt-2 text-sm text-text-secondary">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CTASection
        title="Get your school's quote today."
        subtitle="30-minute call. We'll understand your school, then share a tailored proposal within 48 hours."
        primaryLabel="Book a pricing call"
        primaryHref="/contact?intent=pricing"
      />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```powershell
git add friensys-next/app/"(marketing)"/pricing friensys-next/components/sections/pricing
git commit -m "feat(pages): /pricing page with conceptual tiers and FAQ"
```

---

### Task 24: `/about` page

**Files:**
- Create: `friensys-next/app/(marketing)/about/page.tsx`

- [ ] **Step 1: Create `app/(marketing)/about/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { CTASection } from "@/components/sections/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Friensys — Built for Indian Schools Since 2017",
  description:
    "Friensys Info Labs was founded in Greater Noida in 2017. We build school ERP software used by 300+ schools across India. DPDPA-aligned, operated in partnership with DigitechNomads.",
  path: "/about",
});

const timeline = [
  { year: "2017", event: "Founded in Greater Noida. First school ERP deployment." },
  { year: "2018", event: "Parent app launched — first school to give parents a branded mobile experience." },
  { year: "2019", event: "100 schools milestone. CBSE + ICSE report card automation shipped." },
  { year: "2020", event: "Online class module released during COVID-19 school closures." },
  { year: "2021", event: "DigitechNomads partnership formalized for enterprise channel sales." },
  { year: "2022", event: "Transport GPS integration + Fee Gateway (online payments) launched." },
  { year: "2023", event: "200 schools. OD-SAS faculty substitution + Customer Loyalty module released." },
  { year: "2024", event: "300+ schools. Education CRM + admin-AI roadmap announced." },
  { year: "2025", event: "DPDPA compliance posture hardened. Marketplace product launched." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />

      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="About"
              title="Built for Indian schools. From Greater Noida, since 2017."
              subtitle="We're Friensys Info Labs — the team behind the school ERP that 300+ schools across India use every single day."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AuroraButton href="/contact">Talk to us</AuroraButton>
              <AuroraButton href="/customers" variant="outline">See our schools</AuroraButton>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-bg-elevated py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="prose prose-sm prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-text-primary not-prose mb-4">Our story</h2>
              <p className="text-text-secondary leading-relaxed">
                Friensys started with a simple frustration: Indian school administrators were spending 3+ hours every day on tasks that a well-designed system could automate in minutes. Fee reconciliation, attendance registers, report card printing — work that kept the principal away from teaching and parents.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                We built the first version for a single school in Greater Noida. By the end of year one, we had 10. By year four, we had 200. Today, 300+ schools across 12 states trust Friensys to run their daily operations.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                We are not a venture-backed startup optimizing for growth metrics. We are a product company with paying customers, a profitable business, and a product roadmap driven by what school principals actually ask us for.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Founders</h2>
              <BentoCard className="text-center py-12">
                <p className="text-text-muted text-sm">
                  Founder bios, photos, and LinkedIn URLs will be added here before launch.
                  <br />
                  <span className="text-xs opacity-60">(User to provide: name, photo, LinkedIn, 2-sentence bio)</span>
                </p>
              </BentoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionHeading label="8-year arc" title="From one school to 300+." className="mb-16" />
          <div className="mx-auto max-w-2xl">
            <ol className="relative border-l border-border-subtle space-y-8">
              {timeline.map(({ year, event }) => (
                <li key={year} className="pl-8">
                  <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border border-border-strong bg-bg-base">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                  </span>
                  <time className="text-xs font-semibold uppercase tracking-widest text-accent-primary">{year}</time>
                  <p className="mt-1 text-sm text-text-secondary">{event}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* DigitechNomads */}
      <section className="bg-bg-elevated py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-text-primary">DigitechNomads partnership</h2>
            <p className="mt-4 text-text-secondary">
              Friensys operates in partnership with{" "}
              <a href={site.partners.digitechnomads} target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:text-accent-glow transition-colors">
                DigitechNomads
              </a>{" "}
              for enterprise channel sales and implementations across larger school groups and education chains. Enterprise-grade deployments, custom SLAs, and dedicated implementation support are available through this channel.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Have a question about Friensys?" subtitle="Reach out — we respond within 24 hours on business days." primaryLabel="Contact us" primaryHref="/contact" secondaryLabel="See open roles" secondaryHref="/careers" />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/app/"(marketing)"/about
git commit -m "feat(pages): /about page with story, timeline, founders placeholder, DN partnership"
```

---

### Task 25: `/contact` page + `ContactForm`

**Files:**
- Create: `friensys-next/lib/emailjs.ts`
- Create: `friensys-next/components/forms/ContactForm.tsx`
- Create: `friensys-next/app/(marketing)/contact/page.tsx`
- Create: `friensys-next/.env.example` (update with EmailJS vars)

- [ ] **Step 1: Create `lib/emailjs.ts`**

```ts
import emailjs from "@emailjs/browser";

interface ContactEmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  school_name?: string;
  intent?: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
    data as Record<string, unknown>,
    { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
  );
}
```

- [ ] **Step 2: Create `components/forms/ContactForm.tsx`**

```tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { sendContactEmail } from "@/lib/emailjs";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  schoolName: z.string().min(2, "School name is required"),
  intent: z.enum(["demo", "pricing", "support", "partnership", "other"]).default("demo"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  defaultIntent?: FormData["intent"];
}

export function ContactForm({ defaultIntent = "demo" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { intent: defaultIntent },
  });

  async function onSubmit(data: FormData) {
    setStatus("sending");
    try {
      await sendContactEmail({
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        school_name: data.schoolName,
        intent: data.intent,
        message: data.message,
      });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-accent-lime/20 bg-accent-lime/5 p-6 text-center">
        <p className="font-semibold text-accent-lime">Message sent!</p>
        <p className="mt-2 text-sm text-text-secondary">
          We'll get back to you within 24 hours on business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
            Your name *
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full rounded-[var(--radius-md)] border border-border-strong bg-bg-overlay px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none"
            placeholder="Rakesh Kumar"
          />
          {errors.name && <p className="mt-1 text-xs text-danger" role="alert">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
            Work email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-[var(--radius-md)] border border-border-strong bg-bg-overlay px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none"
            placeholder="principal@yourschool.in"
          />
          {errors.email && <p className="mt-1 text-xs text-danger" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-text-primary mb-1.5">
            School name *
          </label>
          <input
            id="school"
            {...register("schoolName")}
            className="w-full rounded-[var(--radius-md)] border border-border-strong bg-bg-overlay px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none"
            placeholder="Delhi Public School"
          />
          {errors.schoolName && <p className="mt-1 text-xs text-danger" role="alert">{errors.schoolName.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full rounded-[var(--radius-md)] border border-border-strong bg-bg-overlay px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none"
            placeholder="+91 99716 73592"
          />
        </div>
      </div>

      <div>
        <label htmlFor="intent" className="block text-sm font-medium text-text-primary mb-1.5">
          How can we help?
        </label>
        <select
          id="intent"
          {...register("intent")}
          className="w-full rounded-[var(--radius-md)] border border-border-strong bg-bg-overlay px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none"
        >
          <option value="demo">Book a product demo</option>
          <option value="pricing">Get a pricing quote</option>
          <option value="support">Technical support</option>
          <option value="partnership">Partnership enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full rounded-[var(--radius-md)] border border-border-strong bg-bg-overlay px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none resize-none"
          placeholder="Tell us about your school — board, student count, what you need most."
        />
        {errors.message && <p className="mt-1 text-xs text-danger" role="alert">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-danger" role="alert">
          Failed to send. Email us directly at{" "}
          <a href={`mailto:${site.contact.email}`} className="underline">{site.contact.email}</a>.
        </p>
      )}

      <AuroraButton type="submit" disabled={status === "sending"} className="w-full justify-center">
        {status === "sending" ? "Sending…" : "Send message"}
      </AuroraButton>
    </form>
  );
}
```

- [ ] **Step 3: Create `app/(marketing)/contact/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Friensys — Book a Demo",
  description:
    "Book a free 30-minute School ERP demo or get a pricing quote. We respond within 24 hours. Call, email, or fill the form.",
  path: "/contact",
});

export default function ContactPage() {
  const searchParams_placeholder = "demo"; // intent pre-fill handled client-side via URL params in ContactForm
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="inline-flex rounded-full border border-accent-primary/20 bg-accent-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-glow mb-4">
                Contact
              </span>
              <h1 className="text-4xl font-bold text-text-primary sm:text-5xl leading-tight">
                Talk to Friensys.
              </h1>
              <p className="mt-4 text-lg text-text-secondary">
                Book a demo, get a quote, or just ask a question. We respond within 24 hours on business days.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}` },
                  { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
                  { icon: MapPin, label: "Office", value: `${site.address.locality}, ${site.address.region}`, href: undefined },
                  { icon: Clock, label: "Hours", value: site.contact.hours, href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-bg-overlay text-accent-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-text-primary hover:text-accent-primary transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm text-text-primary">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated p-8">
              <h2 className="mb-6 text-xl font-semibold text-text-primary">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Update `.env.example` with EmailJS vars**

Add to `friensys-next/.env.example`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID=your_demo_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Copy to `.env.local` and fill in the actual keys from the existing Vite app's EmailJS configuration.

- [ ] **Step 5: Commit**

```powershell
git add friensys-next/app/"(marketing)"/contact friensys-next/components/forms/ContactForm.tsx friensys-next/lib/emailjs.ts friensys-next/.env.example
git commit -m "feat(pages): /contact page + ContactForm with RHF + zod validation + EmailJS"
```

---

### Task 26: `/security` page

**Files:**
- Create: `friensys-next/app/(marketing)/security/page.tsx`

- [ ] **Step 1: Create `app/(marketing)/security/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/shared/CTASection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { getFaqs } from "@/lib/content";
import { Shield, Server, Lock, Eye, Clock, FileText } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Security & Compliance — DPDPA, AWS Mumbai, ISO 27001",
  description:
    "Your school's data hosted in India on AWS Mumbai. AES-256 encryption, TLS 1.2+, DPDPA-aligned, daily backups, audit logs. ISO 27001 certification in progress.",
  path: "/security",
});

const controls = [
  { icon: Server, title: "AWS Mumbai (ap-south-1)", body: "All customer data hosted in India — no cross-border transfer. Compliant with DPDPA §16 on data localisation.", badge: "DPDPA" as const },
  { icon: Lock, title: "Encryption at rest & in transit", body: "AES-256 encryption at rest. TLS 1.2+ for all data in transit. Separate encryption keys per tenant.", badge: null },
  { icon: Clock, title: "Automated daily backups", body: "Full database snapshots daily with 30-day retention. Point-in-time recovery available on Enterprise plans.", badge: null },
  { icon: Eye, title: "Audit logs on sensitive actions", body: "Every fee deletion, marks edit, and record modification is logged with timestamp, user, IP, and reason. Immutable.", badge: null },
  { icon: FileText, title: "DPDPA compliance posture", body: "Aligned with India's Digital Personal Data Protection Act, 2023. Data Processing Agreements available on request. Consent management for parent data.", badge: "DPDPA" as const },
  { icon: Shield, title: "ISO 27001 — in progress", body: "We are pursuing ISO 27001 certification. Our controls are structured around ISMS principles. Expected: 2026.", badge: "iso" as const },
];

export default function SecurityPage() {
  const faqs = getFaqs("security");
  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Security"
            title="Your school's data. Hosted in India. Compliant by design."
            subtitle="We treat student data with the same care a principal would — locked down, audited, and never shared without consent."
            className="mb-16"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {controls.map(({ icon: Icon, title, body, badge }) => (
              <BentoCard key={title} glow className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-overlay text-accent-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  {badge && <Badge variant={badge}>{badge === "iso" ? "In progress" : badge.toUpperCase()}</Badge>}
                </div>
                <h3 className="font-semibold text-text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{body}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-text-primary text-center">Security FAQ</h2>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold text-text-primary">{q}</dt>
                <dd className="mt-2 text-sm text-text-secondary">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Need our security documentation?"
        subtitle="We share our Data Processing Agreement and security questionnaire on request — usually within 48 hours."
        primaryLabel="Request security docs"
        primaryHref="/contact?intent=security"
        secondaryLabel="View DPDPA compliance"
        secondaryHref="/legal/dpdpa-compliance"
      />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/app/"(marketing)"/security
git commit -m "feat(pages): /security page with DPDPA, AWS, encryption, ISO controls"
```

---

## Phase 1D — Product Surface

### Task 27: `/products` index page

**Files:**
- Create: `friensys-next/components/marketing/ProductCard.tsx`
- Create: `friensys-next/app/(marketing)/products/page.tsx`

- [ ] **Step 1: Create ProductCard atom**

```tsx
// friensys-next/components/marketing/ProductCard.tsx
import Link from "next/link";
import { DynIcon } from "@/components/ui/DynIcon";
import type { Product } from "@/lib/content";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-6 transition-colors hover:border-border-strong"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-bg-overlay text-accent-primary">
        <DynIcon name={product.icon} className="h-6 w-6" />
      </div>
      {product.badge && (
        <span className="mb-2 inline-block rounded-full bg-accent-primary/10 px-2 py-0.5 text-xs font-medium text-accent-primary">
          {product.badge}
        </span>
      )}
      <h3 className="mb-1 font-semibold text-text-primary transition-colors group-hover:text-accent-primary">
        {product.name}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary">{product.tagline}</p>
      <ul className="mt-4 space-y-1">
        {product.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-text-muted">
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent-primary" />
            {f}
          </li>
        ))}
      </ul>
    </Link>
  );
}
```

- [ ] **Step 2: Create products index page**

```tsx
// friensys-next/app/(marketing)/products/page.tsx
import { getProducts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ProductCard } from "@/components/marketing/ProductCard";
import { CTASection } from "@/components/marketing/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Products — Friensys School Management Suite",
  description:
    "Explore Friensys School ERP modules: fees, attendance, timetable, library, and more — all in one integrated platform.",
  path: "products",
});

export default function ProductsPage() {
  const products = getProducts();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
        ])}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
              Everything school management needs
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Eight purpose-built modules that work together — or independently. Pick exactly what
              your school needs today.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        subtitle="Tell us about your school and we'll recommend the right modules for your needs."
        primaryLabel="Talk to our team"
        primaryHref="/contact?intent=demo"
        secondaryLabel="View pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```powershell
git add friensys-next/components/marketing/ProductCard.tsx friensys-next/app/"(marketing)"/products/page.tsx
git commit -m "feat(pages): /products index with ProductCard grid"
```

---

### Task 28: `/products/[slug]` detail page

**Files:**
- Modify: `friensys-next/lib/content.ts` (add `getProductBySlug`)
- Create: `friensys-next/app/(marketing)/products/[slug]/page.tsx`

- [ ] **Step 1: Add `getProductBySlug` to lib/content.ts**

```ts
// Append to friensys-next/lib/content.ts
export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug);
}
```

- [ ] **Step 2: Create product detail page**

```tsx
// friensys-next/app/(marketing)/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getProducts, getProductBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { buildProductSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { DynIcon } from "@/components/ui/DynIcon";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} — Friensys`,
    description: product.description,
    path: `products/${slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: product.name,
          description: product.description,
          url: `/products/${product.slug}`,
          image: `/screenshots/${product.hero}`,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: product.name, url: `/products/${product.slug}` },
        ])}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] border border-border-subtle bg-bg-elevated text-accent-primary">
                <DynIcon name={product.icon} className="h-7 w-7" />
              </div>
              {product.badge && (
                <span className="mb-4 inline-block rounded-full bg-accent-primary/10 px-3 py-1 text-sm font-medium text-accent-primary">
                  {product.badge}
                </span>
              )}
              <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
                {product.name}
              </h1>
              <p className="mb-8 text-lg text-text-secondary">{product.description}</p>
              <div className="flex flex-wrap gap-3">
                <AuroraButton href="#demo">Request a demo</AuroraButton>
                <AuroraButton href="/pricing" variant="outline">View pricing</AuroraButton>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated">
              <Image
                src={`/screenshots/${product.hero}`}
                alt={`${product.name} screenshot`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-text-primary">Key capabilities</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border-subtle bg-bg-surface p-4"
              >
                <DynIcon name="CheckCircle" className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" />
                <span className="text-sm text-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {product.modules.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold text-text-primary">Included modules</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {product.modules.map((mod) => (
                <span
                  key={mod}
                  className="rounded-full border border-border-subtle bg-bg-elevated px-4 py-2 text-sm text-text-secondary"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="demo" className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-text-primary">See {product.name} in action</h2>
            <p className="mt-2 text-text-secondary">
              Book a personalised demo — our team responds within 24 hours.
            </p>
          </div>
          <DemoRequestForm productName={product.name} />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Commit**

```powershell
git add friensys-next/lib/content.ts friensys-next/app/"(marketing)"/products
git commit -m "feat(pages): /products/[slug] detail with features, modules, inline demo form"
```

---

### Task 29: `DemoRequestForm` + EmailJS demo template

**Files:**
- Create: `friensys-next/components/forms/DemoRequestForm.tsx`
- Modify: `friensys-next/lib/emailjs.ts` (add `sendDemoEmail`)
- Modify: `friensys-next/.env.example`

- [ ] **Step 1: Add `sendDemoEmail` to lib/emailjs.ts**

```ts
// Append to friensys-next/lib/emailjs.ts

export interface DemoEmailData {
  name: string;
  schoolName: string;
  role: string;
  email: string;
  phone: string;
  studentCount: string;
  productName: string;
}

export async function sendDemoEmail(data: DemoEmailData): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID!,
    data as unknown as Record<string, unknown>,
    { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
  );
}
```

- [ ] **Step 2: Add env var to .env.example**

```bash
# Append to friensys-next/.env.example
NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID=your_demo_template_id
```

- [ ] **Step 3: Create DemoRequestForm**

```tsx
// friensys-next/components/forms/DemoRequestForm.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendDemoEmail } from "@/lib/emailjs";
import { AuroraButton } from "@/components/ui/AuroraButton";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  schoolName: z.string().min(2, "School name required"),
  role: z.string().min(2, "Role required"),
  email: z.string().email("Valid email required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "10-digit Indian mobile number"),
  studentCount: z.string().min(1, "Select student range"),
});
type FormValues = z.infer<typeof schema>;

export function DemoRequestForm({ productName }: { productName: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      await sendDemoEmail({ ...data, productName });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-surface p-8 text-center">
        <p className="text-lg font-semibold text-text-primary">Demo request received!</p>
        <p className="mt-2 text-sm text-text-secondary">
          Our team will reach out within 24 hours to schedule your personalised demo.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-[var(--radius-sm)] border border-border-subtle bg-bg-elevated px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Your name</label>
          <input {...register("name")} className={inputClass} placeholder="Rahul Sharma" />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">School name</label>
          <input {...register("schoolName")} className={inputClass} placeholder="Delhi Public School" />
          {errors.schoolName && <p className="mt-1 text-xs text-red-400">{errors.schoolName.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Your role</label>
          <input {...register("role")} className={inputClass} placeholder="Principal / Admin Officer" />
          {errors.role && <p className="mt-1 text-xs text-red-400">{errors.role.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Student count</label>
          <select {...register("studentCount")} className={inputClass}>
            <option value="">Select range</option>
            <option value="under-500">Under 500</option>
            <option value="500-1000">500–1,000</option>
            <option value="1000-3000">1,000–3,000</option>
            <option value="3000+">3,000+</option>
          </select>
          {errors.studentCount && <p className="mt-1 text-xs text-red-400">{errors.studentCount.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Email</label>
          <input {...register("email")} type="email" className={inputClass} placeholder="principal@school.edu.in" />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Phone</label>
          <input {...register("phone")} type="tel" className={inputClass} placeholder="9876543210" />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong.{" "}
          <a
            href={`mailto:info@friensys.com?subject=Demo+request+for+${encodeURIComponent(productName)}`}
            className="underline"
          >
            Email us instead
          </a>
        </p>
      )}

      <AuroraButton type="submit" disabled={status === "sending"} className="w-full justify-center">
        {status === "sending" ? "Sending…" : "Request demo"}
      </AuroraButton>
    </form>
  );
}
```

- [ ] **Step 4: Commit**

```powershell
git add friensys-next/components/forms/DemoRequestForm.tsx friensys-next/lib/emailjs.ts friensys-next/.env.example
git commit -m "feat(forms): DemoRequestForm with RHF + Zod + EmailJS demo template"
```

---

## Phase 1E — AI Page

### Task 30: `/ai` page

Admin-AI positioning, roadmap only. No live features. Cards all carry "Coming soon" badge.

**Files:**
- Create: `friensys-next/app/(marketing)/ai/page.tsx`

- [ ] **Step 1: Create /ai page**

```tsx
// friensys-next/app/(marketing)/ai/page.tsx
import { buildMetadata } from "@/lib/seo";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { CTASection } from "@/components/marketing/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import {
  Brain,
  TrendingUp,
  Bell,
  FileText,
  Calendar,
  MessageSquare,
  BarChart3,
  Shield,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "AI for School Administration — Friensys",
  description:
    "Friensys is building AI into the admin layer of school management — fee predictions, attendance anomalies, and intelligent reporting. Roadmap preview.",
  path: "ai",
});

const features = [
  {
    icon: TrendingUp,
    title: "Fee Default Prediction",
    body: "Identify likely defaulters 3–4 weeks before month-end using payment history and seasonal patterns. Surface the list to your admin team before the cycle begins.",
  },
  {
    icon: Bell,
    title: "Smart Attendance Alerts",
    body: "Detect anomalous absence streaks and flag students at risk — before they cross the threshold that triggers board notifications.",
  },
  {
    icon: FileText,
    title: "AI Report Card Narratives",
    body: "Auto-draft personalised performance summaries from grade data. Teachers review and sign off — no blank page.",
  },
  {
    icon: Calendar,
    title: "Timetable Optimiser",
    body: "Resolve conflicts and optimise room utilisation across 40+ subjects and 60+ teachers. What currently takes a week takes an afternoon.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Queries",
    body: 'Ask in plain Hindi or English: "How many students were absent last week in Grade 8?" — get an instant answer, no reports to run.',
  },
  {
    icon: BarChart3,
    title: "Predictive Enrollment Analytics",
    body: "Model next-year enrollment from application trends, sibling data, and catchment area signals. Plan staffing 6 months ahead.",
  },
  {
    icon: Brain,
    title: "Exam Performance Insights",
    body: "Identify which topics or teachers correlate with under-performance across cohorts — surface insights the marksheet alone cannot show.",
  },
  {
    icon: Shield,
    title: "Finance Anomaly Detection",
    body: "Flag unusual patterns in concession grants, discount clusters, and late-fee waivers before the audit cycle.",
  },
];

const faqs = [
  {
    q: "Is Friensys AI available today?",
    a: "Not yet. These features are on our active roadmap. We're building on top of operational data already flowing through Friensys ERP — no new integrations required when they ship.",
  },
  {
    q: "Will AI features cost extra?",
    a: "We haven't finalised pricing. For schools onboarding now, we plan to include foundational AI features in the standard tier. Contact us to discuss early-access terms.",
  },
  {
    q: "Does AI access student personal data?",
    a: "No AI feature will process individually identifiable student data without explicit consent controls. All models will operate on aggregated or anonymised data by default.",
  },
  {
    q: "How is this different from Kaksha or other ed-tech AI?",
    a: "Competitor AI targets the student experience — adaptive learning, doubt resolution. Friensys AI targets the admin layer: forecasting, compliance, operational efficiency. Different buyer, different problem.",
  },
];

export default function AIPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "AI", url: "/ai" },
        ])}
      />
      <JsonLd data={buildFAQSchema(faqs)} />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-1.5 text-sm font-medium text-accent-primary">
            <Brain className="h-4 w-4" />
            Roadmap preview
          </div>
          <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-6xl">
            AI that works for{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-cyan bg-clip-text text-transparent">
              school administrators
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary">
            Not student-facing AI. Not chatbots. Operational intelligence built into the admin
            layer — surfacing insights your team needs before they know to ask.
          </p>
          <AuroraButton href="/contact?intent=ai-early-access">
            Join the early-access list
          </AuroraButton>
        </div>
      </section>

      <section className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-accent-primary">
            Roadmap
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
            Eight capabilities in development
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="relative rounded-[var(--radius-lg)] border border-border-subtle bg-bg-surface p-6"
              >
                <span className="absolute right-4 top-4 rounded-full bg-bg-overlay px-2 py-0.5 text-[10px] font-medium text-text-muted">
                  Coming soon
                </span>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-bg-overlay text-accent-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-text-primary">Questions</h2>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold text-text-primary">{q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-text-secondary">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Get notified when AI features ship"
        subtitle="Schools on our early-access list get first access and input on feature priorities."
        primaryLabel="Join early access"
        primaryHref="/contact?intent=ai-early-access"
        secondaryLabel="View the ERP today"
        secondaryHref="/school-erp"
      />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/app/"(marketing)"/ai
git commit -m "feat(pages): /ai roadmap page — 8 coming-soon admin-AI features + FAQ"
```

---

## Phase 1F — Content Layer

### Task 31: `/customers` page

**Files:**
- Create: `friensys-next/app/(marketing)/customers/page.tsx`

Relies on `getSchools()` (Task 5) and `getCaseStudies()` (Task 5). Both return typed arrays from JSON.

- [ ] **Step 1: Create customers page**

```tsx
// friensys-next/app/(marketing)/customers/page.tsx
import Image from "next/image";
import { getSchools, getCaseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/marketing/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildOrganizationSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Our Customers — Schools That Trust Friensys",
  description:
    "Over 25 schools across India manage fees, attendance, and academics on Friensys. See who we work with.",
  path: "customers",
});

export default function CustomersPage() {
  const schools = getSchools();
  const caseStudies = getCaseStudies();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Customers", url: "/customers" },
        ])}
      />
      <JsonLd data={buildOrganizationSchema()} />

      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-primary">
            Trusted by schools across India
          </p>
          <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
            Schools that run on Friensys
          </h1>
          <p className="text-lg text-text-secondary">
            From 200-student neighbourhood schools to 3,000-student campuses — all managing their
            operations on one platform.
          </p>
        </div>
      </section>

      {/* Logo wall */}
      <section className="bg-bg-elevated py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 items-center justify-items-center">
            {schools.map((school) => (
              <div
                key={school.slug}
                className="flex h-16 w-full items-center justify-center rounded-[var(--radius-md)] border border-border-subtle bg-bg-surface p-3 transition-colors hover:border-border-strong"
                title={school.name}
              >
                <Image
                  src={`/logos/${school.logo}`}
                  alt={school.name}
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      {caseStudies.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
              Results our customers share
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((cs) => (
                <article
                  key={cs.slug}
                  className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-8"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <Image
                      src={`/logos/${cs.schoolLogo}`}
                      alt={cs.schoolName}
                      width={48}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                    <div>
                      <p className="font-semibold text-text-primary">{cs.schoolName}</p>
                      <p className="text-xs text-text-muted">{cs.location}</p>
                    </div>
                  </div>

                  <blockquote className="mb-6 text-sm leading-relaxed text-text-secondary italic">
                    &ldquo;{cs.quote}&rdquo;
                  </blockquote>

                  <dl className="grid grid-cols-3 gap-4 border-t border-border-subtle pt-6">
                    {cs.stats.map(({ label, value }) => (
                      <div key={label}>
                        <dt className="text-xs text-text-muted">{label}</dt>
                        <dd className="mt-1 text-xl font-bold text-accent-primary">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-4 text-xs text-text-muted">
                    — {cs.author}, {cs.authorRole}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Join 25+ schools running on Friensys"
        subtitle="Get a personalised demo tailored to your school size and requirements."
        primaryLabel="Request a demo"
        primaryHref="/contact?intent=demo"
        secondaryLabel="See our products"
        secondaryHref="/products"
      />
    </>
  );
}
```

- [ ] **Step 2: Add `getCaseStudies` type to lib/content.ts (if not already defined in Task 5)**

The `CaseStudy` type needs: `slug`, `schoolName`, `schoolLogo`, `location`, `quote`, `author`, `authorRole`, `stats: Array<{ label: string; value: string }>`. Verify the shape matches `content/case-studies.json` seeded in Task 5. Add the type if missing:

```ts
// Add to friensys-next/lib/content.ts if not present
export interface CaseStudy {
  slug: string;
  schoolName: string;
  schoolLogo: string;
  location: string;
  quote: string;
  author: string;
  authorRole: string;
  stats: Array<{ label: string; value: string }>;
}

export function getCaseStudies(): CaseStudy[] {
  return caseStudiesData as CaseStudy[];
}
```

- [ ] **Step 3: Commit**

```powershell
git add friensys-next/app/"(marketing)"/customers friensys-next/lib/content.ts
git commit -m "feat(pages): /customers with logo wall + case study cards"
```

---

### Task 32: 5 MDX blog post content files

**Files:**
- Create: `friensys-next/content/blog/school-erp-implementation-guide.mdx`
- Create: `friensys-next/content/blog/automate-school-fees-collection.mdx`
- Create: `friensys-next/content/blog/dpdpa-compliance-schools-india.mdx`
- Create: `friensys-next/content/blog/ai-tools-school-administrators.mdx`
- Create: `friensys-next/content/blog/parent-engagement-school-app.mdx`

Velite processes these at build time. Frontmatter fields match the Velite schema defined in Task 4.

- [ ] **Step 1: Create blog post 1**

```mdx
---
title: "The Complete Guide to School ERP Implementation in India (2025)"
slug: "school-erp-implementation-guide"
description: "How to evaluate, select, and successfully roll out a school ERP — without the 6-month delays that plague most projects."
publishedAt: "2025-01-15"
author: "Friensys Team"
tags: ["school-erp", "implementation", "guide"]
ogImage: "/og/blog/school-erp-implementation-guide.png"
---

Most school ERP projects fail in the same way: the software works, but the school never fully switches over. Staff revert to spreadsheets. Two systems run in parallel for years. The ROI never arrives.

After working with 25+ schools across India, we've identified the patterns that separate successful rollouts from expensive shelf-ware.

## The three-phase model that actually works

### Phase 1: Foundation (Weeks 1–4)

The first month is not about training. It's about data. Master data — the list of students, teachers, fee structures, subjects, and sections — must be clean before any training begins. Every school has accumulated years of inconsistencies: duplicate student records, fee heads that no longer apply, timetable slots that don't match actual practice.

Spend the first two weeks on a data audit. Export your current records, clean them in a spreadsheet, then import into the new system. Do not skip this step. Systems that skip it spend the next 12 months firefighting data anomalies.

### Phase 2: Parallel Run (Weeks 5–8)

Run the old system and the new system simultaneously for one complete billing cycle. This sounds wasteful, but it catches integration errors before they become parent complaints. The fee collection reconciliation between the two systems is your acceptance test.

Designate one "ERP champion" per department — typically the most tech-comfortable staff member. Champions own their department's adoption. They field questions, flag issues, and escalate blockers. Without champions, every problem lands with the vendor.

### Phase 3: Cutover (Week 9+)

When one billing cycle closes cleanly in both systems, you're ready to cut over. Pick a term boundary — not mid-term. Turn off legacy access, archive the data, and make the new system the single source of truth.

The cutover week will feel chaotic. Plan for a vendor support engineer to be on-call for the first 48 hours.

## Common failure modes

**Underestimating data migration.** Schools often discover their fee structures have 40+ heads accumulated over a decade. Half are deprecated. Mapping these to a clean new structure takes time.

**Training too early.** Training staff before master data is in place means they learn on incomplete information and have to re-learn on the real data.

**No executive sponsor.** If the principal isn't visibly committed to the new system, staff will find every reason to stick with the familiar.

**Choosing the cheapest option.** Implementation support quality varies enormously. The Rs 20,000/year vendor will not pick up the phone at 7pm before parent day.

## What to ask vendors before you sign

1. Who handles data migration — your team or theirs?
2. What does implementation support look like for the first 90 days?
3. Can we see a reference from a school of similar size that went live in the last 12 months?
4. What is the data export format if we want to leave?

The fourth question is the most revealing. Vendors who make it easy to leave are vendors who are confident you won't.

## The Friensys approach

We provide a dedicated implementation engineer for the first 90 days. We own the data migration — you hand us the export from your current system and we map it. We don't hand you a manual and wish you luck.

If you're evaluating options, read our security page and ask us for the reference list. We're happy to introduce you to schools that went live in the last quarter.
```

- [ ] **Step 2: Create blog post 2**

```mdx
---
title: "How to Automate School Fees Collection and Reduce Defaults by 40%"
slug: "automate-school-fees-collection"
description: "Practical steps schools can take to reduce fee defaults, automate reminders, and close each billing cycle faster."
publishedAt: "2025-02-10"
author: "Friensys Team"
tags: ["fees", "automation", "collections"]
ogImage: "/og/blog/automate-school-fees-collection.png"
---

Fee collection is the lifeblood of school operations, and most schools are managing it with tools that were designed for something else: WhatsApp broadcasts, Excel trackers, and bank reconciliation done by hand.

The result: 15–20% of fees are collected late. Staff spend 40+ hours per month on follow-up. Finance teams can't get a clean picture of outstanding dues until the cycle is already closed.

## Why manual follow-up doesn't scale

A school with 800 students across 8 sections generates roughly 800 fee records per month. Each record has a due date, a grace period, late-fee rules, instalment options, and potentially a sibling discount. Managing this in a spreadsheet means someone is making decisions manually for every exception.

When fee follow-up is manual, it's also inconsistent. Some parents get called. Others get a WhatsApp message. Some are let through at admission time and never properly reminded. The defaulter list grows quietly.

## The three levers of automated collection

### 1. Scheduled automated reminders

Set reminders to fire 7 days before due date, on the due date, and at 3-day intervals afterwards. WhatsApp and SMS outperform email for Indian parents. The message should include the exact amount due, the invoice number, and a payment link.

Schools using automated reminders reduce their manual follow-up time by 70% in the first cycle.

### 2. Real-time payment reconciliation

When a parent pays online, the receipt should be generated and the ledger updated without a staff member touching anything. The cashier's job becomes exception-handling — not data entry.

This requires a payment gateway integration that posts back to the fee management system. UPI and NetBanking via Razorpay or PayU are the standard choice for Indian schools in 2025.

### 3. A live outstanding-dues dashboard

Finance staff and principals should be able to see — at any moment — the total outstanding, the overdue balance, and the list of payers and non-payers. When this is visible, collection conversations happen earlier.

## What "40% reduction in defaults" actually means

We've seen this figure from schools that implement all three levers together. It doesn't mean defaults go to zero. It means the chronic partial-payers tighten up because the reminders are consistent. The hard defaults — families genuinely unable to pay — still need a human conversation.

The time saving is the bigger win for most schools. Finance staff move from collection to analysis.

## Practical checklist

- [ ] Map all fee heads and instalment schedules in the ERP before the next billing cycle
- [ ] Set up payment gateway integration with automatic reconciliation
- [ ] Configure reminder schedule: T-7, T-0, T+3, T+7
- [ ] Create a concession approval workflow so discounts are tracked and auditable
- [ ] Give the principal a live dashboard with outstanding-dues visibility

If your current fee system doesn't support all five items, it's time to evaluate alternatives.
```

- [ ] **Step 3: Create blog post 3**

```mdx
---
title: "DPDPA 2023 Compliance for Schools: What You Need to Do Now"
slug: "dpdpa-compliance-schools-india"
description: "The Digital Personal Data Protection Act 2023 applies to every school in India that collects student or parent data. Here's what compliance looks like in practice."
publishedAt: "2025-03-05"
author: "Friensys Team"
tags: ["dpdpa", "compliance", "privacy", "india"]
ogImage: "/og/blog/dpdpa-compliance-schools-india.png"
---

The Digital Personal Data Protection Act 2023 (DPDPA) came into force in India and introduced enforceable obligations for any organisation — including schools — that processes personal data of Indian citizens. Schools collect a significant volume of personal data: Aadhaar numbers, medical records, parent income declarations, academic performance data, and photographs.

Most schools haven't started thinking about compliance. The ones that have are asking the right questions.

## What data does your school process?

Before you can comply, you need to know what you hold. The typical school data inventory includes:

- **Student data:** Name, DOB, Aadhaar number, medical conditions, academic records, photographs, biometric data (if attendance uses fingerprint/face scan)
- **Parent data:** Name, mobile number, email, income declaration, bank account (for refunds), address
- **Staff data:** Name, Aadhaar, PAN, bank account, qualifications, medical fitness certificate

Under DPDPA, all of this is personal data. Sensitive categories — medical data, biometric data, financial data — attract stricter obligations.

## The four key obligations for schools

### 1. Lawful basis for processing

Schools process most data under a contractual basis (the admission agreement) or a legal obligation (government-mandated record-keeping). Review your admission form. If you're collecting data beyond what's needed for the school relationship — say, collecting parent employer details for a marketing database — you need explicit consent with clear purpose disclosure.

### 2. Data Principal rights

Parents and students (above a threshold age) have rights: to know what data you hold, to correct it, to withdraw consent, and in some cases to erasure. Schools need a process to handle these requests within the statutory timeframe. A helpdesk email address with a documented internal process is the minimum viable starting point.

### 3. Data protection by design

New systems you adopt — including school ERP software — should have privacy built in. Ask your ERP vendor:
- Is student data encrypted at rest and in transit?
- Where are the servers located? (India-resident data for covered categories)
- What is the data retention and deletion policy?
- Is there role-based access control so support staff can't see student medical records?

### 4. Breach notification

If personal data is compromised — a stolen laptop, an exposed database, an accidental email — you may be required to notify the Data Protection Board within a specified window. Have an incident response process documented before you need it.

## What Friensys does for DPDPA compliance

Our infrastructure runs on AWS Mumbai and Singapore regions. Student data is encrypted at rest (AES-256) and in transit (TLS 1.3). Role-based access controls are granular to the record level. We provide a Data Processing Agreement (DPA) on request.

We are working towards ISO 27001 certification — currently in implementation. We can share our security questionnaire and DPA with any school evaluating us.

## The practical first steps

You don't need a DPO on day one. Start with:

1. Complete a data inventory — what you collect, where it lives, who has access
2. Review your admission form and privacy notice for purpose clarity
3. Ensure your ERP vendor can provide a DPA
4. Document your process for handling parent data requests

The schools that act now will have the compliance infrastructure in place before enforcement begins in earnest.
```

- [ ] **Step 4: Create blog post 4**

```mdx
---
title: "AI Tools for School Administrators: What's Real and What's Hype"
slug: "ai-tools-school-administrators"
description: "An honest look at which AI tools are actually useful for school administrators in India today — and which are solving problems that don't exist."
publishedAt: "2025-04-02"
author: "Friensys Team"
tags: ["ai", "school-management", "tools"]
ogImage: "/og/blog/ai-tools-school-administrators.png"
---

Every software vendor in education has added "AI" to their marketing in the last 18 months. Most of it is a thin wrapper around a language model bolted onto a product that hasn't fundamentally changed. Some of it is genuinely useful. Here's how to tell the difference.

## The test: does it save admin time or student time?

There are two distinct categories of "AI in education":

**Student-facing AI** targets learning outcomes — adaptive content, doubt resolution, practice problem generation. This is where most ed-tech investment has gone. It's genuinely interesting for large consumer platforms like Byju's, Vedantu, or Khanmigo. It is not, however, what a school administrator buys.

**Admin-facing AI** targets operational efficiency — reducing the time staff spend on manual processes, surfacing insights from operational data, and automating routine communications. This is underserved and where the genuine productivity gains live for schools.

When a vendor shows you "AI," ask: does this save a teacher or admin staff member meaningful time, or does it require a student to engage with a new tool?

## What's actually working today

### Document drafting
Language models are genuinely good at drafting school communications, policy documents, and circular text. A principal who uses ChatGPT or Claude to draft circulars is saving 20–30 minutes per communication. This doesn't require a school-specific AI product — a generic tool works.

### Timetable optimisation
Constraint-satisfaction algorithms (often mislabelled "AI") can solve timetable conflicts in seconds that take a human coordinator days. This is real value. Look for this specifically in ERP products.

### Fee defaulter prediction
If your ERP has 18+ months of payment history, predictive models can identify likely defaulters 3–4 weeks in advance with reasonable accuracy. This is genuinely useful and not widely available yet — it's on several vendors' roadmaps.

## What's mostly hype

### Chatbots for parents
Most school parent chatbots answer 5–6 predefined question categories. The long tail of parent queries ("Why was my child marked absent on 14th March?") requires access to live student records — which means a properly integrated system, not a chatbot. The chatbot often creates more frustration than a well-organised FAQ page.

### AI-generated "insights"
Generic dashboards with "AI-powered insights" that tell you fee collection is lower this month than last month are not AI insights — they're basic analytics with a marketing label. Genuine predictive analytics requires your specific historical data and a properly trained model.

### Content personalisation for school students
Adaptive learning works at scale — 10 million students using a platform. For a school of 800 students, the data volume isn't there to personalise meaningfully. The admin overhead of configuring personalisation per-student exceeds the benefit.

## Questions to ask any AI vendor

1. What data does the AI train on — generic or your school's own data?
2. What's the measurable outcome — time saved, revenue collected, errors reduced?
3. Is there a school of similar size already using this feature in production?
4. What happens when the AI is wrong?

The last question is especially important for anything touching student records or parent communications. A wrong fee prediction is annoying. An incorrectly generated parent communication is a serious incident.

## The Friensys view

We're building AI into the admin layer, not shipping it as a separate product. The features we're working on — fee prediction, attendance anomaly detection, NL queries — will surface inside the existing workflows. No new tool for staff to learn. We'll share more as we get closer to production.
```

- [ ] **Step 5: Create blog post 5**

```mdx
---
title: "Parent Engagement in Schools: Moving Beyond the Notice Board"
slug: "parent-engagement-school-app"
description: "What actually works for parent communication in Indian schools — and how to move from reactive parent calls to proactive engagement."
publishedAt: "2025-05-01"
author: "Friensys Team"
tags: ["parent-engagement", "communication", "school-app"]
ogImage: "/og/blog/parent-engagement-school-app.png"
---

The school notice board has been replaced by WhatsApp groups. Most schools now have 40–50 broadcast groups across sections, each managed manually by a class teacher. Circulars are sent as screenshots. Fee reminders are typed individually. Parent queries arrive at all hours across all channels.

This is not a communication system. It's organised chaos that works until it doesn't.

## The communication problem schools actually have

Most school parent communication fails in two ways:

**Overload without structure.** Parents receive too many messages across too many channels. The important fee reminder and the lunch menu circular compete for the same attention. Over time, parents tune out. When something important arrives, it's missed.

**Reactive instead of proactive.** Schools call parents when something goes wrong — a student has been absent for three days, a fee is overdue, there's a disciplinary issue. Parents experience the school as a source of bad news. The relationship stays transactional.

The schools that get parent engagement right flip both problems: structured communication with clear channels, and a calendar of proactive touchpoints that don't require something to have gone wrong.

## The channel architecture that works

### For broadcast communications
A dedicated school app or portal for official circulars, calendar events, and exam schedules. This becomes the source of truth. WhatsApp groups can continue for informal teacher-parent interaction, but official communications live in one place.

### For fee communications
A dedicated channel for fee-related messages. Parents learn quickly that a message on this channel requires action. Fee reminders, receipts, and balance statements go here and nowhere else.

### For student performance
Automated progress reports at meaningful intervals — not just at term end. A parent who sees their child's attendance dropping week by week can intervene. A parent who finds out at parent-teacher meeting day is starting the conversation 6 weeks too late.

## What proactive engagement looks like

Good schools communicate when nothing is wrong:
- Monthly attendance summary (not just a call when the student is absent 5+ days)
- Exam schedule with preparation tips
- Holiday homework links with due dates
- Upcoming event reminders with action items (consent forms, contribution requirements)

Parents who receive regular proactive communication are far more receptive when a difficult conversation is needed.

## The data you already have

Most schools are sitting on data that could drive proactive parent engagement but aren't using it:
- Attendance records that could trigger early alerts at day 2 of absence, not day 5
- Fee payment history that predicts who needs a reminder before the due date
- Exam performance trends that warrant a parent conversation before marks drop to failure

The barrier is usually tooling — the school management system doesn't surface this data in a way that's easy to act on.

## What to look for in a parent communication tool

Evaluate based on:
1. **Delivery reliability** — Does a message actually reach 95%+ of parents, not just the ones with the app installed?
2. **Two-way capability** — Can parents respond, request meetings, or submit acknowledgements in the same channel?
3. **Integration with operations** — Are fee reminders automatically generated from the fee system, or does someone manually send them?
4. **Multilingual support** — Hindi and regional languages matter for parent accessibility

The best systems tie parent communication directly to operational data. A fee reminder that includes the exact amount due and a payment link outperforms a generic "fees are due" broadcast by a significant margin.
```

- [ ] **Step 6: Commit all 5 posts**

```powershell
git add friensys-next/content/blog/
git commit -m "content(blog): 5 long-form blog posts — ERP guide, fees, DPDPA, AI, parent engagement"
```

---

### Task 33: `/blog` index page

**Files:**
- Create: `friensys-next/components/marketing/BlogCard.tsx`
- Create: `friensys-next/app/(marketing)/blog/page.tsx`

Velite exports a `posts` array from the generated `.velite/` output. Import as `import { posts } from "@/.velite"` — Velite sets up this alias in Task 4.

- [ ] **Step 1: Create BlogCard**

```tsx
// friensys-next/components/marketing/BlogCard.tsx
import Link from "next/link";
import type { Post } from "@/.velite";

export function BlogCard({ post }: { post: Post }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-6 transition-colors hover:border-border-strong"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-bg-overlay px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-2 font-semibold leading-snug text-text-primary transition-colors group-hover:text-accent-primary">
        {post.title}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm text-text-secondary">{post.description}</p>
      <div className="flex items-center justify-between text-xs text-text-muted">
        <span>{post.author}</span>
        <time dateTime={post.publishedAt}>{date}</time>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Create blog index page**

```tsx
// friensys-next/app/(marketing)/blog/page.tsx
import { posts } from "@/.velite";
import { buildMetadata } from "@/lib/seo";
import { BlogCard } from "@/components/marketing/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildWebSiteSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Blog — Friensys School Management Insights",
  description:
    "Practical guides on school ERP implementation, fees automation, DPDPA compliance, and AI for school administrators.",
  path: "blog",
});

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
              School management insights
            </h1>
            <p className="mx-auto max-w-xl text-lg text-text-secondary">
              Practical guides for school administrators — no vendor fluff.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Commit**

```powershell
git add friensys-next/components/marketing/BlogCard.tsx friensys-next/app/"(marketing)"/blog/page.tsx
git commit -m "feat(pages): /blog index with sorted BlogCard grid from Velite"
```

---

### Task 34: `/blog/[slug]` MDX post page

**Files:**
- Create: `friensys-next/app/(marketing)/blog/[slug]/page.tsx`

Velite exports `posts` array and each post has a `.content` field that is the compiled MDX component (via `useMDXComponent` from `velite-utils`).

- [ ] **Step 1: Install velite-utils**

```powershell
cd friensys-next && pnpm add velite-utils
```

- [ ] **Step 2: Create blog post page**

```tsx
// friensys-next/app/(marketing)/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/.velite";
import { useMDXComponent } from "velite-utils";
import { buildMetadata } from "@/lib/seo";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { AuroraButton } from "@/components/ui/AuroraButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `blog/${slug}`,
    ogImage: post.ogImage,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.content);

  const publishDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.description,
          url: `/blog/${post.slug}`,
          datePublished: post.publishedAt,
          author: post.author,
          image: post.ogImage,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />

      <article className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg-elevated px-3 py-1 text-xs font-medium text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-text-primary md:text-4xl">
              {post.title}
            </h1>
            <p className="mb-6 text-lg text-text-secondary">{post.description}</p>
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <span>{post.author}</span>
              <span>·</span>
              <time dateTime={post.publishedAt}>{publishDate}</time>
            </div>
          </header>

          {/* MDX content */}
          <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary prose-strong:text-text-primary prose-li:text-text-secondary prose-code:text-accent-cyan prose-blockquote:border-accent-primary prose-blockquote:text-text-secondary">
            <MDXContent />
          </div>

          {/* Footer CTA */}
          <div className="mt-16 rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-8 text-center">
            <p className="mb-4 font-semibold text-text-primary">Ready to see Friensys in action?</p>
            <p className="mb-6 text-sm text-text-secondary">
              Book a personalised demo for your school — no sales pressure, just a look at the
              platform.
            </p>
            <AuroraButton href="/contact?intent=demo">Request a demo</AuroraButton>
          </div>
        </div>
      </article>
    </>
  );
}
```

- [ ] **Step 3: Verify Tailwind prose plugin is included**

Tailwind v4 requires `@tailwindcss/typography` as a plugin. Confirm `friensys-next/globals.css` includes:

```css
/* Add to globals.css after @import "tailwindcss" */
@plugin "@tailwindcss/typography";
```

And install:

```powershell
cd friensys-next && pnpm add -D @tailwindcss/typography
```

- [ ] **Step 4: Commit**

```powershell
git add friensys-next/app/"(marketing)"/blog/[slug] friensys-next/app/"(marketing)"/globals.css
git commit -m "feat(pages): /blog/[slug] MDX post page with Velite + prose typography"
```

---

### Task 35: `/careers` page + `CareersApplyForm`

**Files:**
- Create: `friensys-next/app/(marketing)/careers/page.tsx`
- Create: `friensys-next/components/forms/CareersApplyForm.tsx`
- Modify: `friensys-next/lib/emailjs.ts` (add `sendApplyEmail`)

Port the legacy `ApplyForm` logic to a new `CareersApplyForm` component using RHF + Zod. The legacy form is at `src/components/careers/ApplyForm.jsx` — review it before creating the new one to match field names expected by the EmailJS apply template.

- [ ] **Step 1: Read the legacy ApplyForm to extract field names**

```powershell
cat src/components/careers/ApplyForm.jsx
```

Expected fields (confirm against legacy): `name`, `email`, `phone`, `position`, `linkedin`, `message`.

- [ ] **Step 2: Add `sendApplyEmail` to lib/emailjs.ts**

```ts
// Append to friensys-next/lib/emailjs.ts

export interface ApplyEmailData {
  name: string;
  email: string;
  phone: string;
  position: string;
  linkedin: string;
  message: string;
}

export async function sendApplyEmail(data: ApplyEmailData): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID!,
    data as unknown as Record<string, unknown>,
    { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
  );
}
```

- [ ] **Step 3: Add env var to .env.example**

```bash
# Append to friensys-next/.env.example
NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID=your_apply_template_id
```

- [ ] **Step 4: Create CareersApplyForm**

```tsx
// friensys-next/components/forms/CareersApplyForm.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendApplyEmail } from "@/lib/emailjs";
import { AuroraButton } from "@/components/ui/AuroraButton";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "10-digit Indian mobile number"),
  position: z.string().min(2, "Position required"),
  linkedin: z.string().url("Valid LinkedIn URL required").or(z.literal("")),
  message: z.string().min(30, "Tell us a bit more — at least 30 characters"),
});
type FormValues = z.infer<typeof schema>;

export function CareersApplyForm({ defaultPosition = "" }: { defaultPosition?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { position: defaultPosition },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      await sendApplyEmail(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-surface p-8 text-center">
        <p className="text-lg font-semibold text-text-primary">Application received!</p>
        <p className="mt-2 text-sm text-text-secondary">
          We read every application. If there's a fit, we'll reach out within two weeks.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-[var(--radius-sm)] border border-border-subtle bg-bg-elevated px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Full name</label>
          <input {...register("name")} className={inputClass} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Email</label>
          <input {...register("email")} type="email" className={inputClass} placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Phone</label>
          <input {...register("phone")} type="tel" className={inputClass} placeholder="9876543210" />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Position applying for</label>
          <input {...register("position")} className={inputClass} placeholder="e.g. Full Stack Developer" />
          {errors.position && <p className="mt-1 text-xs text-red-400">{errors.position.message}</p>}
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-text-primary">
          LinkedIn profile <span className="text-text-muted">(optional)</span>
        </label>
        <input {...register("linkedin")} type="url" className={inputClass} placeholder="https://linkedin.com/in/yourhandle" />
        {errors.linkedin && <p className="mt-1 text-xs text-red-400">{errors.linkedin.message}</p>}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-text-primary">Why Friensys?</label>
        <textarea
          {...register("message")}
          rows={4}
          className={inputClass}
          placeholder="Tell us what excites you about this role and what you'd bring to the team."
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong.{" "}
          <a href="mailto:careers@friensys.com?subject=Job+Application" className="underline">
            Email us instead
          </a>
        </p>
      )}

      <AuroraButton type="submit" disabled={status === "sending"} className="w-full justify-center">
        {status === "sending" ? "Sending…" : "Submit application"}
      </AuroraButton>
    </form>
  );
}
```

- [ ] **Step 5: Create careers page**

```tsx
// friensys-next/app/(marketing)/careers/page.tsx
import { buildMetadata } from "@/lib/seo";
import { CareersApplyForm } from "@/components/forms/CareersApplyForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Code2, BarChart3, Headphones, Megaphone } from "lucide-react";

export const metadata = buildMetadata({
  title: "Careers — Join the Friensys Team",
  description:
    "We're building the ERP platform for Indian schools. Join a small, focused team working on real problems for real schools.",
  path: "careers",
});

const openRoles = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    type: "Full-time · Remote",
    description:
      "Build and maintain the Friensys ERP platform. Strong fundamentals in Node.js, React, and SQL required. ERP or SaaS experience a plus.",
  },
  {
    icon: BarChart3,
    title: "Implementation Engineer",
    type: "Full-time · Hybrid",
    description:
      "Own school onboarding end-to-end — data migration, training, go-live support. Prior experience in ERP implementation or school administration welcome.",
  },
  {
    icon: Headphones,
    title: "Customer Success Executive",
    type: "Full-time · Hybrid",
    description:
      "Be the first point of contact for school admins. Resolve issues, escalate bugs, and build long-term relationships with our school accounts.",
  },
  {
    icon: Megaphone,
    title: "Growth & Marketing",
    type: "Contract · Remote",
    description:
      "Own top-of-funnel for Friensys — content, SEO, LinkedIn, and school outreach. Experience in B2B SaaS or ed-tech preferred.",
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ])}
      />

      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
            Work on problems that matter to schools
          </h1>
          <p className="text-lg text-text-secondary">
            Small team. Real product. Schools that depend on what we build. If that sounds like
            your kind of work, we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-text-primary">Open roles</h2>
          <div className="space-y-4">
            {openRoles.map(({ icon: Icon, title, type, description }) => (
              <div
                key={title}
                className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-surface p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-bg-overlay text-accent-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-semibold text-text-primary">{title}</h3>
                      <span className="rounded-full bg-bg-overlay px-2 py-0.5 text-xs text-text-muted">
                        {type}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-text-secondary">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Don't see your role?{" "}
            <a href="#apply" className="text-accent-primary underline underline-offset-2">
              Send a speculative application
            </a>{" "}
            — we review all of them.
          </p>
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" className="py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-text-primary">Apply now</h2>
            <p className="mt-2 text-text-secondary">
              We read every application. Honest cover notes beat polished templates.
            </p>
          </div>
          <CareersApplyForm />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 6: Commit**

```powershell
git add friensys-next/app/"(marketing)"/careers friensys-next/components/forms/CareersApplyForm.tsx friensys-next/lib/emailjs.ts friensys-next/.env.example
git commit -m "feat(pages): /careers with open roles + CareersApplyForm (RHF + Zod + EmailJS)"
```

---

### Task 36: `/services` overview page

**Files:**
- Create: `friensys-next/app/(marketing)/services/page.tsx`

- [ ] **Step 1: Create services page**

```tsx
// friensys-next/app/(marketing)/services/page.tsx
import { buildMetadata } from "@/lib/seo";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { CTASection } from "@/components/marketing/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import {
  Rocket,
  GraduationCap,
  Wrench,
  ArrowRightLeft,
  Puzzle,
  LifeBuoy,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Services — Friensys Implementation & Support",
  description:
    "Friensys implementation, training, migration, customisation, and annual maintenance services for schools. White-glove support from day one.",
  path: "services",
});

const services = [
  {
    icon: Rocket,
    title: "Implementation",
    tagline: "Go live in 4–8 weeks",
    description:
      "A dedicated implementation engineer owns your entire onboarding — data migration, configuration, parallel-run management, and go-live support. We don't hand you a manual and step back.",
    deliverables: [
      "Master data migration from your current system",
      "Fee structure and module configuration",
      "Staff training for admin, accounts, and reception",
      "Parallel-run validation for one billing cycle",
      "Go-live support for 48 hours post-cutover",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training",
    tagline: "On-site or remote",
    description:
      "Role-based training sessions for every type of user: principal dashboards, admin workflows, fee collection, exam management, and parent portal.",
    deliverables: [
      "Principal and management dashboard orientation",
      "Admin staff workflow training (3–4 hours)",
      "Fee collection and reconciliation hands-on",
      "Exam and report card setup walkthrough",
      "Recorded sessions for staff onboarded later",
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Migration",
    tagline: "From any legacy system",
    description:
      "We handle data migration from Excel, Tally, or any previous ERP. You export — we transform, clean, validate, and import. You don't touch the migration scripts.",
    deliverables: [
      "Student master and academic history",
      "Fee ledger and outstanding balance migration",
      "Staff records and payroll history",
      "Exam results and report card archive",
      "Data validation report before go-live",
    ],
  },
  {
    icon: Wrench,
    title: "Annual Maintenance (AMC)",
    tagline: "Covered every year",
    description:
      "All updates, patches, and core feature additions are included in AMC. Your school stays on the latest version without additional charges.",
    deliverables: [
      "All platform updates and security patches",
      "New feature releases (core modules)",
      "Priority support ticket queue",
      "Annual health check and performance review",
      "Backup and disaster recovery verification",
    ],
  },
  {
    icon: Puzzle,
    title: "Customisation",
    tagline: "For schools with specific workflows",
    description:
      "Need a custom report, an unusual fee structure, or a non-standard workflow? We scope and build customisations that integrate cleanly with the core platform.",
    deliverables: [
      "Requirements scoping session",
      "Custom report builder (up to 5 reports/year)",
      "Non-standard fee head configuration",
      "Integration with third-party systems (on request)",
      "Custom parent communication templates",
    ],
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    tagline: "Phone + ticket + WhatsApp",
    description:
      "Dedicated support during school hours (8am–6pm IST) via ticket, WhatsApp, and phone. Emergency response within 4 hours for critical issues.",
    deliverables: [
      "Ticket response within 4 business hours",
      "WhatsApp group for daily operations queries",
      "Phone support for billing cycle and exam days",
      "Monthly check-in with your account manager",
      "Root cause analysis for any data issues",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
            We don't just sell software
          </h1>
          <p className="text-lg text-text-secondary">
            Every Friensys school gets an implementation engineer, a migration team, and ongoing
            support — not a knowledge base and a ticket queue.
          </p>
        </div>
      </section>

      <section className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, tagline, description, deliverables }) => (
              <div
                key={title}
                className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-surface p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-bg-overlay text-accent-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-text-primary">{title}</h3>
                <p className="mb-3 text-xs font-medium text-accent-primary">{tagline}</p>
                <p className="mb-6 text-sm leading-relaxed text-text-secondary">{description}</p>
                <ul className="space-y-2">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-text-muted">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        subtitle="Tell us about your school and we'll scope out the right implementation plan."
        primaryLabel="Talk to our team"
        primaryHref="/contact?intent=services"
        secondaryLabel="View pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/app/"(marketing)"/services
git commit -m "feat(pages): /services overview with 6 service cards + deliverables"
```

---

### Task 37: `lib/analytics.ts` + wire into root layout

**Files:**
- Create: `friensys-next/lib/analytics.ts`
- Modify: `friensys-next/app/layout.tsx` (add GA4 Script)
- Modify: `friensys-next/.env.example` (add `NEXT_PUBLIC_GA_ID`)

- [ ] **Step 1: Create lib/analytics.ts**

```ts
// friensys-next/lib/analytics.ts
// Typed wrapper around gtag — fires only in production and only when GA_ID is set.

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function pageview(url: string): void {
  if (!GA_ID || typeof window === "undefined") return;
  window.gtag("config", GA_ID, { page_path: url });
}

export function event(action: string, params: Record<string, unknown> = {}): void {
  if (!GA_ID || typeof window === "undefined") return;
  window.gtag("event", action, params);
}

export { GA_ID };
```

- [ ] **Step 2: Wire GA4 into root layout**

Add GA4 `<Script>` tags to `app/layout.tsx`. Import `Script` from `next/script`. These go inside `<body>` after children. Only render when `GA_ID` is truthy:

```tsx
// In friensys-next/app/layout.tsx — add to imports
import Script from "next/script";
import { GA_ID } from "@/lib/analytics";
```

```tsx
// Add before closing </body> tag in layout.tsx
{GA_ID && (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
    <Script id="gtag-init" strategy="afterInteractive">
      {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname})`}
    </Script>
  </>
)}
```

- [ ] **Step 3: Add env var to .env.example**

```bash
# Append to friensys-next/.env.example
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

- [ ] **Step 4: Commit**

```powershell
git add friensys-next/lib/analytics.ts friensys-next/app/layout.tsx friensys-next/.env.example
git commit -m "feat(analytics): GA4 via gtag — optional, env-gated, afterInteractive"
```

---

### Task 38: Vitest setup + unit tests

**Files:**
- Create: `friensys-next/vitest.config.ts`
- Create: `friensys-next/__tests__/lib/seo.test.ts`
- Create: `friensys-next/__tests__/lib/schema.test.ts`
- Create: `friensys-next/__tests__/lib/content.test.ts`

- [ ] **Step 1: Install Vitest**

```powershell
cd friensys-next && pnpm add -D vitest @vitest/coverage-v8
```

- [ ] **Step 2: Create vitest.config.ts**

```ts
// friensys-next/vitest.config.ts
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
```

- [ ] **Step 3: Add test script to package.json**

In `friensys-next/package.json`, add to `"scripts"`:
```json
"test": "vitest run",
"test:watch": "vitest",
"test:coverage": "vitest run --coverage"
```

- [ ] **Step 4: Create lib/seo.test.ts**

```ts
// friensys-next/__tests__/lib/seo.test.ts
import { describe, it, expect } from "vitest";
import { buildMetadata } from "@/lib/seo";

describe("buildMetadata", () => {
  it("returns title with site suffix", () => {
    const meta = buildMetadata({ title: "Test Page", description: "desc", path: "test" });
    expect(String(meta.title)).toContain("Test Page");
    expect(String(meta.title)).toContain("Friensys");
  });

  it("sets canonical URL", () => {
    const meta = buildMetadata({ title: "T", description: "d", path: "about" });
    expect(meta.alternates?.canonical).toContain("about");
  });

  it("noIndex sets robots to noindex, nofollow", () => {
    const meta = buildMetadata({ title: "T", description: "d", path: "x", noIndex: true });
    expect(meta.robots).toMatchObject({ index: false, follow: false });
  });

  it("openGraph type defaults to website", () => {
    const meta = buildMetadata({ title: "T", description: "d", path: "x" });
    expect(meta.openGraph?.type).toBe("website");
  });

  it("openGraph type article when type is article", () => {
    const meta = buildMetadata({ title: "T", description: "d", path: "x", type: "article" });
    expect(meta.openGraph?.type).toBe("article");
  });
});
```

- [ ] **Step 5: Create lib/schema.test.ts**

```ts
// friensys-next/__tests__/lib/schema.test.ts
import { describe, it, expect } from "vitest";
import {
  buildOrganizationSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildProductSchema,
} from "@/lib/schema";

describe("buildOrganizationSchema", () => {
  it("returns @type Organization", () => {
    expect(buildOrganizationSchema()["@type"]).toBe("Organization");
  });
  it("has name Friensys", () => {
    expect(buildOrganizationSchema().name).toBe("Friensys");
  });
});

describe("buildFAQSchema", () => {
  it("returns @type FAQPage", () => {
    const schema = buildFAQSchema([{ q: "Q?", a: "A." }]);
    expect(schema["@type"]).toBe("FAQPage");
  });
  it("maps questions to mainEntity", () => {
    const schema = buildFAQSchema([{ q: "Q?", a: "A." }]);
    expect(schema.mainEntity).toHaveLength(1);
    expect(schema.mainEntity[0].name).toBe("Q?");
    expect(schema.mainEntity[0].acceptedAnswer.text).toBe("A.");
  });
});

describe("buildBreadcrumbSchema", () => {
  it("returns @type BreadcrumbList", () => {
    const schema = buildBreadcrumbSchema([{ name: "Home", url: "/" }]);
    expect(schema["@type"]).toBe("BreadcrumbList");
  });
  it("maps items with position starting at 1", () => {
    const schema = buildBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
    ]);
    expect(schema.itemListElement[0].position).toBe(1);
    expect(schema.itemListElement[1].position).toBe(2);
  });
});

describe("buildArticleSchema", () => {
  it("returns @type Article", () => {
    const schema = buildArticleSchema({
      title: "T",
      description: "D",
      url: "/blog/t",
      datePublished: "2025-01-01",
    });
    expect(schema["@type"]).toBe("Article");
  });
});

describe("buildProductSchema", () => {
  it("returns @type Product", () => {
    const schema = buildProductSchema({ name: "N", description: "D", url: "/p", image: "/i.png" });
    expect(schema["@type"]).toBe("Product");
  });
});
```

- [ ] **Step 6: Create lib/content.test.ts**

```ts
// friensys-next/__tests__/lib/content.test.ts
import { describe, it, expect } from "vitest";
import { getProducts, getSchools, getModules, getProductBySlug } from "@/lib/content";

describe("getProducts", () => {
  it("returns a non-empty array", () => {
    expect(getProducts().length).toBeGreaterThan(0);
  });
  it("each product has required fields", () => {
    for (const p of getProducts()) {
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(Array.isArray(p.features)).toBe(true);
    }
  });
});

describe("getProductBySlug", () => {
  it("returns product for valid slug", () => {
    const first = getProducts()[0];
    expect(getProductBySlug(first.slug)).toEqual(first);
  });
  it("returns undefined for unknown slug", () => {
    expect(getProductBySlug("nonexistent-slug-xyz")).toBeUndefined();
  });
});

describe("getSchools", () => {
  it("returns a non-empty array", () => {
    expect(getSchools().length).toBeGreaterThan(0);
  });
  it("each school has slug, name, logo", () => {
    for (const s of getSchools()) {
      expect(s.slug).toBeTruthy();
      expect(s.name).toBeTruthy();
      expect(s.logo).toBeTruthy();
    }
  });
});

describe("getModules", () => {
  it("returns at least 20 modules", () => {
    expect(getModules().length).toBeGreaterThanOrEqual(20);
  });
});
```

- [ ] **Step 7: Run tests to verify green**

```powershell
cd friensys-next && pnpm test
```

Expected: All tests pass. If content JSON files don't exist yet, tests will fail — that's correct; run after Task 5 content is seeded.

- [ ] **Step 8: Commit**

```powershell
git add friensys-next/vitest.config.ts friensys-next/__tests__ friensys-next/package.json
git commit -m "test(lib): Vitest setup + unit tests for seo, schema, content loaders"
```

---

## Phase 1G — Legal + Services

### Task 39: 6 legal MDX content files

**Files:**
- Create: `friensys-next/content/legal/privacy-policy.mdx`
- Create: `friensys-next/content/legal/terms-of-service.mdx`
- Create: `friensys-next/content/legal/cancellation-policy.mdx`
- Create: `friensys-next/content/legal/refund-policy.mdx`
- Create: `friensys-next/content/legal/software-license.mdx`
- Create: `friensys-next/content/legal/dpdpa-compliance.mdx`

Velite processes these using the `legal` collection defined in Task 4. Frontmatter: `title`, `slug`, `description`, `lastUpdated`.

- [ ] **Step 1: Create privacy-policy.mdx**

```mdx
---
title: "Privacy Policy"
slug: "privacy-policy"
description: "How Friensys collects, uses, and protects your personal data."
lastUpdated: "2025-01-01"
---

## 1. Introduction

Friensys ("we", "our", "us") provides school management software to educational institutions ("schools"). This Privacy Policy explains how we collect, use, store, and protect personal data processed through the Friensys platform.

By using the Friensys platform, you accept this Privacy Policy.

## 2. Data We Collect

**From Schools (our customers):**
- Contact information of school administrators (name, email, phone)
- Billing and payment information

**From School Operations (processed on behalf of schools):**
- Student records: name, date of birth, class, section, academic performance, attendance, fee payment history
- Parent/guardian records: name, mobile number, email, address
- Staff records: name, contact information, qualifications, employment details
- Biometric data where the school uses biometric attendance (processed under school's explicit authorisation)

## 3. How We Use Data

- To provide, maintain, and improve the Friensys platform
- To process fee payments and generate receipts
- To send transactional communications (fee reminders, notifications) on behalf of schools
- To comply with applicable law and respond to legal requests
- For product analytics to improve platform performance (aggregated, anonymised)

We do not sell personal data to third parties. We do not use student data for advertising.

## 4. Data Storage and Security

Data is stored on AWS infrastructure in the Mumbai (ap-south-1) and Singapore (ap-southeast-1) regions. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Access is controlled by role-based permissions. Production database access is restricted to authorised engineers under dual-control.

## 5. Data Retention

Student and operational records are retained for the period specified in the school's agreement, with a minimum of 3 years after student exit to satisfy statutory record-keeping requirements. Backup copies are purged within 30 days of the retention period.

## 6. Your Rights

Parents and students (via their school) have the right to:
- Access the personal data we hold about them
- Correct inaccurate data
- Request deletion (subject to statutory retention requirements)
- Withdraw consent for non-essential processing

To exercise these rights, contact your school's designated administrator or email **privacy@friensys.com**.

## 7. Changes to This Policy

We will notify schools of material changes to this Policy at least 30 days in advance via email to the registered admin contact.

**Last updated:** 1 January 2025
```

- [ ] **Step 2: Create terms-of-service.mdx**

```mdx
---
title: "Terms of Service"
slug: "terms-of-service"
description: "The terms that govern your use of the Friensys platform."
lastUpdated: "2025-01-01"
---

## 1. Agreement

By accessing or using the Friensys school management platform, you agree to these Terms of Service ("Terms"). If you are entering these Terms on behalf of a school or organisation, you represent that you have authority to bind that entity.

## 2. Services

Friensys provides cloud-based school management software including modules for fee management, attendance, academic records, timetable, library, and communication. The specific modules available to your school are defined in your subscription agreement.

## 3. Acceptable Use

You may not:
- Use the platform for any purpose other than school management operations
- Attempt to gain unauthorised access to any system or account
- Upload malware, viruses, or destructive code
- Reverse-engineer, decompile, or attempt to extract the source code
- Resell or sublicense access to any third party

## 4. Data Ownership

All data you input into the Friensys platform remains your property. We process it as a data processor on your behalf. You may export your data in standard formats at any time. If you choose to terminate your subscription, we will provide a full data export within 30 days of your request.

## 5. Uptime and Support

We target 99.5% monthly uptime for core platform functions. Scheduled maintenance is conducted between 1am–4am IST and communicated with at least 48 hours notice. Support response times are defined in your support tier.

## 6. Fees and Payment

Subscription fees are invoiced as specified in your agreement. Payments are due within 30 days of invoice. Late payments accrue interest at 12% per annum. We reserve the right to suspend access after 60 days of non-payment following written notice.

## 7. Limitation of Liability

To the maximum extent permitted by applicable law, Friensys's total liability for any claim arising under these Terms shall not exceed the fees paid by you in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.

## 8. Governing Law

These Terms are governed by the laws of India. Disputes will be subject to the exclusive jurisdiction of courts in Delhi.

**Last updated:** 1 January 2025
```

- [ ] **Step 3: Create cancellation-policy.mdx**

```mdx
---
title: "Cancellation Policy"
slug: "cancellation-policy"
description: "How to cancel your Friensys subscription and what happens to your data."
lastUpdated: "2025-01-01"
---

## Cancelling Your Subscription

You may cancel your Friensys subscription at any time by contacting your account manager or emailing **accounts@friensys.com**.

## Notice Period

Cancellations require 30 days written notice. Your subscription remains active for the duration of the notice period, and you remain responsible for fees due during that period.

## Annual Subscriptions

For annual subscriptions cancelled before the end of the term:
- Cancellations within the first 30 days of a new term are eligible for a pro-rated refund (see Refund Policy)
- Cancellations after 30 days are not eligible for a refund of the remaining term

## Data After Cancellation

Following cancellation:
1. You will receive a full data export within 14 days of your subscription end date
2. Your data will be retained in our backup systems for 30 days after export delivery
3. After 30 days, all your data is purged from our systems

We strongly recommend downloading your data export immediately upon receipt. We cannot retrieve data after the 30-day retention window.

## Reactivation

If you wish to reactivate a cancelled subscription within 30 days of your end date, you may do so without data loss. Contact us at **accounts@friensys.com**.

**Last updated:** 1 January 2025
```

- [ ] **Step 4: Create refund-policy.mdx**

```mdx
---
title: "Refund Policy"
slug: "refund-policy"
description: "Friensys refund eligibility, timelines, and process."
lastUpdated: "2025-01-01"
---

## Eligibility

We offer refunds in the following circumstances:

**Within 30 days of payment:** If you cancel within 30 days of your subscription start or annual renewal date, you are eligible for a full refund of the unused portion of your subscription, calculated on a pro-rata daily basis.

**Service failure:** If we fail to deliver the platform at the contracted uptime level (99.5% monthly) for two consecutive months, you are eligible for a pro-rated credit or refund for the affected period.

**Billing error:** If you are charged incorrectly, we will refund the excess within 7 business days of the error being confirmed.

## Not Eligible for Refund

- Cancellations after the 30-day window
- Implementation and training services fees (once the service has been delivered)
- Fees for the current active billing period where the service has been used

## Refund Process

To request a refund, email **accounts@friensys.com** with your school name, invoice number, and reason. We will respond within 3 business days.

Approved refunds are processed to the original payment method within 7–10 business days.

## Contact

For billing queries: **accounts@friensys.com** or call us during business hours (10am–6pm IST, Monday–Friday).

**Last updated:** 1 January 2025
```

- [ ] **Step 5: Create software-license.mdx**

```mdx
---
title: "Software License"
slug: "software-license"
description: "License terms for use of the Friensys software platform."
lastUpdated: "2025-01-01"
---

## License Grant

Subject to the terms of your subscription agreement, Friensys grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Friensys platform solely for your school's internal operations.

## Restrictions

You may not:
- Copy, modify, or create derivative works of the software
- Reverse-engineer, decompile, or disassemble any part of the platform
- Remove or alter any proprietary notices or labels
- Use the platform to develop a competing product
- Sublicense or transfer your license rights to any third party

## Intellectual Property

The Friensys platform, including all software, documentation, designs, and content, is and remains the exclusive property of Friensys and its licensors. Your use of the platform does not grant you any ownership rights in the software.

## Open Source Components

The Friensys platform incorporates open-source software components. A list of open-source components and their respective licenses is available on request at **legal@friensys.com**.

## Updates

Friensys may update the platform at any time. Updates are included in your subscription and governed by these Terms. We will not make updates that materially reduce core functionality without reasonable notice.

## Termination

This license terminates automatically upon expiry or cancellation of your subscription. Upon termination, you must cease all use of the platform and download your data export.

**Last updated:** 1 January 2025
```

- [ ] **Step 6: Create dpdpa-compliance.mdx**

```mdx
---
title: "DPDPA Compliance Statement"
slug: "dpdpa-compliance"
description: "How Friensys supports schools' obligations under the Digital Personal Data Protection Act 2023."
lastUpdated: "2025-01-01"
---

## Overview

The Digital Personal Data Protection Act 2023 (DPDPA) governs the processing of personal data of Indian citizens. Friensys, as a data processor for schools, has implemented technical and organisational measures to support your school's compliance obligations.

## Our Role Under DPDPA

Schools using Friensys are the **Data Fiduciary** — they determine the purpose and means of processing student and parent data. Friensys is the **Data Processor** — we process data only on your instructions, as defined in your Data Processing Agreement (DPA).

## Technical Measures

**Data Security:**
- All personal data encrypted at rest using AES-256
- All data in transit protected by TLS 1.3
- Production systems hosted on AWS Mumbai (ap-south-1) — India-resident storage for student data
- Role-based access controls at the record level

**Access Controls:**
- Principle of least privilege for all internal access
- Multi-factor authentication enforced for all Friensys staff with production access
- Audit logs for all data access and modifications retained for 12 months

**Breach Detection:**
- Real-time security monitoring via AWS GuardDuty and CloudWatch
- Documented incident response procedure targeting 72-hour notification for reportable breaches

## Data Subject Rights Support

Friensys provides school administrators with tools to:
- Export a complete data set for any individual student or parent
- Update or correct personal data
- Flag records for deletion review (subject to statutory retention obligations)

These actions are accessible through the Admin panel under **Settings → Data Management**.

## Data Processing Agreement

We provide a Data Processing Agreement (DPA) to all schools upon request. The DPA documents:
- Categories of personal data processed
- Processing purposes and legal bases
- Sub-processor list (AWS, EmailJS, and payment gateways)
- Retention and deletion schedules
- Technical and organisational security measures
- Data breach notification obligations

To request a DPA, email **privacy@friensys.com** with your school name and contact details.

## Ongoing Compliance

We review our DPDPA compliance posture quarterly and update this statement to reflect any material changes. We are currently working towards ISO 27001 certification.

**Last updated:** 1 January 2025
```

- [ ] **Step 7: Commit**

```powershell
git add friensys-next/content/legal/
git commit -m "content(legal): 6 MDX legal pages — privacy, terms, cancellation, refund, license, DPDPA"
```

---

### Task 40: `/legal/[slug]` dynamic page

**Files:**
- Create: `friensys-next/app/(marketing)/legal/[slug]/page.tsx`

Velite generates a `legalPages` export from the `legal` collection. Import as `import { legalPages } from "@/.velite"`. Each entry has `.content` (compiled MDX), `title`, `slug`, `description`, `lastUpdated`.

- [ ] **Step 1: Create legal page**

```tsx
// friensys-next/app/(marketing)/legal/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { legalPages } from "@/.velite";
import { useMDXComponent } from "velite-utils";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) return {};
  return buildMetadata({
    title: `${page.title} — Friensys`,
    description: page.description,
    path: `legal/${slug}`,
    noIndex: true,
  });
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const MDXContent = useMDXComponent(page.content);

  const updatedDate = new Date(page.lastUpdated).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Legal", url: "/legal/privacy-policy" },
          { name: page.title, url: `/legal/${page.slug}` },
        ])}
      />

      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <h1 className="mb-2 text-3xl font-bold text-text-primary md:text-4xl">{page.title}</h1>
            <p className="text-sm text-text-muted">Last updated: {updatedDate}</p>
          </header>

          {/* Legal nav — quick links to other legal pages */}
          <nav className="mb-10 flex flex-wrap gap-2">
            {legalPages.map((p) => (
              <a
                key={p.slug}
                href={`/legal/${p.slug}`}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  p.slug === slug
                    ? "bg-accent-primary text-white"
                    : "border border-border-subtle bg-bg-elevated text-text-muted hover:border-border-strong"
                }`}
              >
                {p.title}
              </a>
            ))}
          </nav>

          <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary prose-strong:text-text-primary prose-li:text-text-secondary prose-code:text-accent-cyan">
            <MDXContent />
          </div>
        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/app/"(marketing)"/legal
git commit -m "feat(pages): /legal/[slug] dynamic MDX page from Velite legalPages"
```

---

### Task 41: `not-found.tsx` + `error.tsx` global pages

**Files:**
- Create: `friensys-next/app/not-found.tsx`
- Create: `friensys-next/app/error.tsx`

- [ ] **Step 1: Create not-found.tsx**

```tsx
// friensys-next/app/not-found.tsx
import Link from "next/link";
import { AuroraButton } from "@/components/ui/AuroraButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-primary">404</p>
      <h1 className="mb-4 text-4xl font-bold text-text-primary">Page not found</h1>
      <p className="mb-8 max-w-sm text-text-secondary">
        This page doesn't exist or has moved. Check the URL or head back to the homepage.
      </p>
      <div className="flex gap-3">
        <AuroraButton href="/">Go home</AuroraButton>
        <AuroraButton href="/contact" variant="outline">Contact us</AuroraButton>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create error.tsx**

`error.tsx` must be a Client Component — Next.js requires it to accept the `error` and `reset` props.

```tsx
// friensys-next/app/error.tsx
"use client";
import { useEffect } from "react";
import { AuroraButton } from "@/components/ui/AuroraButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-400">Error</p>
      <h1 className="mb-4 text-4xl font-bold text-text-primary">Something went wrong</h1>
      <p className="mb-8 max-w-sm text-text-secondary">
        An unexpected error occurred. You can try again or contact us if the problem persists.
      </p>
      <div className="flex gap-3">
        <AuroraButton onClick={reset}>Try again</AuroraButton>
        <AuroraButton href="/contact" variant="outline">Contact us</AuroraButton>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```powershell
git add friensys-next/app/not-found.tsx friensys-next/app/error.tsx
git commit -m "feat(app): 404 not-found and global error boundary pages"
```

---

## Phase 1H — SEO & Performance Hardening

### Task 42: `app/sitemap.ts`

**Files:**
- Create: `friensys-next/app/sitemap.ts`

- [ ] **Step 1: Create sitemap.ts**

```ts
// friensys-next/app/sitemap.ts
import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/content";
import { posts } from "@/.velite";
import { legalPages } from "@/.velite";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://friensys.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/school-erp`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/ai`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/customers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/security`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/careers`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const productRoutes: MetadataRoute.Sitemap = getProducts().map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
```

Note: Legal pages intentionally excluded from sitemap (`noIndex: true`).

- [ ] **Step 2: Add `NEXT_PUBLIC_SITE_URL` to .env.example**

```bash
# Append to friensys-next/.env.example
NEXT_PUBLIC_SITE_URL=https://friensys.com
```

- [ ] **Step 3: Commit**

```powershell
git add friensys-next/app/sitemap.ts friensys-next/.env.example
git commit -m "feat(seo): sitemap.ts — static + products + blog routes"
```

---

### Task 43: `app/robots.ts`

**Files:**
- Create: `friensys-next/app/robots.ts`

Explicitly allow major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Googlebot-Extended) — this supports AI-search discoverability, a Phase 1 objective.

- [ ] **Step 1: Create robots.ts**

```ts
// friensys-next/app/robots.ts
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://friensys.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Googlebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/app/robots.ts
git commit -m "feat(seo): robots.ts — allow all + explicit AI crawler whitelist"
```

---

### Task 44: `/llms.txt` + `/llms-full.txt` endpoints

`/llms.txt` is an emerging convention for AI agents. It provides a concise, machine-readable overview of the site. `/llms-full.txt` expands with full content.

**Files:**
- Create: `friensys-next/app/llms.txt/route.ts`
- Create: `friensys-next/app/api/llms-full/route.ts`

- [ ] **Step 1: Create /llms.txt route**

```ts
// friensys-next/app/llms.txt/route.ts
import { getProducts } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const products = getProducts();

  const body = `# Friensys

> Cloud-based school management ERP for Indian schools. Modules for fees, attendance, academics, timetable, library, and parent communication.

## Company

- Founded: 2020
- HQ: India
- Customers: 25+ schools
- Tech: Cloud-hosted, mobile-first, accessible on any device

## Products

${products.map((p) => `- [${p.name}](https://friensys.com/products/${p.slug}): ${p.tagline}`).join("\n")}

## Key Pages

- [Home](https://friensys.com/)
- [School ERP](https://friensys.com/school-erp)
- [Pricing](https://friensys.com/pricing)
- [About](https://friensys.com/about)
- [Contact](https://friensys.com/contact)
- [Security](https://friensys.com/security)
- [Blog](https://friensys.com/blog)

## Contact

- Email: info@friensys.com
- Demo: https://friensys.com/contact?intent=demo
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
```

- [ ] **Step 2: Create /llms-full.txt route**

```ts
// friensys-next/app/api/llms-full/route.ts
import { getProducts, getModules } from "@/lib/content";
import { posts } from "@/.velite";

export const dynamic = "force-static";

export function GET() {
  const products = getProducts();
  const modules = getModules();
  const blogPosts = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const body = `# Friensys — Full Content Index

## About Friensys

Friensys is a cloud-based School ERP (Enterprise Resource Planning) platform designed for Indian K-12 schools. It provides an integrated suite of modules for managing all aspects of school administration: fee collection, attendance tracking, academic records, timetable scheduling, library management, and parent communication.

Founded in 2020, Friensys serves 25+ schools ranging from 200 to 3,000+ students. The platform is hosted on AWS (India region), is DPDPA-compliant, and supports access from desktop, tablet, and mobile devices.

## Products

${products
  .map(
    (p) => `### ${p.name}
Slug: ${p.slug}
Tagline: ${p.tagline}
Description: ${p.description}
Features: ${p.features.join(", ")}
Modules: ${p.modules.slice(0, 8).join(", ")}
`,
  )
  .join("\n")}

## All Modules (${modules.length} total)

${modules.map((m) => `- ${m.name}: ${m.description}`).join("\n")}

## Blog Posts

${blogPosts
  .map(
    (p) => `### ${p.title}
URL: https://friensys.com/blog/${p.slug}
Published: ${p.publishedAt}
Tags: ${p.tags.join(", ")}
Summary: ${p.description}
`,
  )
  .join("\n")}

## Contact & Demo

Email: info@friensys.com
Demo request: https://friensys.com/contact?intent=demo
Security docs: https://friensys.com/contact?intent=security
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
```

- [ ] **Step 3: Commit**

```powershell
git add friensys-next/app/llms.txt friensys-next/app/api/llms-full
git commit -m "feat(seo): /llms.txt and /llms-full.txt for AI crawler discoverability"
```

---

### Task 45: OG image generator `app/api/og/[...slug]/route.tsx`

Generates dynamic Open Graph images via `next/og` (ImageResponse). Used by `buildMetadata` when `ogImage` is not explicitly set — the OG URL pattern is `/api/og/{path-slug}`.

**Files:**
- Create: `friensys-next/app/api/og/[...slug]/route.tsx`

- [ ] **Step 1: Create OG image route**

```tsx
// friensys-next/app/api/og/[...slug]/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Friensys School ERP";
  const description =
    searchParams.get("description") ??
    "Cloud-based school management software for Indian schools.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 60%, #1a0a2e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Decorative gradient blob */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "60px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo wordmark */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "60px",
            fontSize: "28px",
            fontWeight: 700,
            color: "#7c3aed",
            letterSpacing: "-0.5px",
          }}
        >
          Friensys
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? "44px" : "56px",
            fontWeight: 800,
            color: "#f4f4f5",
            lineHeight: 1.1,
            marginBottom: "20px",
            maxWidth: "800px",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "22px",
            color: "#a1a1aa",
            lineHeight: 1.4,
            maxWidth: "680px",
          }}
        >
          {description}
        </div>

        {/* Bottom strip */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
```

- [ ] **Step 2: Update `buildMetadata` to pass title/description to OG URL**

In `friensys-next/lib/seo.ts`, update the OG image URL construction to include `title` and `description` as query params:

```ts
// In buildMetadata, replace the ogImage line:
const ogImageUrl = ogImage ?? `/api/og/${path}?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
```

- [ ] **Step 3: Commit**

```powershell
git add friensys-next/app/api/og friensys-next/lib/seo.ts
git commit -m "feat(og): dynamic OG image generator via next/og edge runtime"
```

---

### Task 46: Per-page `generateMetadata` audit

Verify every page has correct metadata. This is a checklist task — no new files created.

**Files:**
- Modify: Any page missing proper metadata

- [ ] **Step 1: Run the audit checklist**

For each page below, confirm: (a) `export const metadata` or `export async function generateMetadata` exists, (b) title is unique and non-generic, (c) description is 120–160 chars, (d) canonical path is correct, (e) OG image resolves.

| Page | File | Check |
|---|---|---|
| Home | `app/(marketing)/page.tsx` | Has metadata with `path: ""` |
| /school-erp | `app/(marketing)/school-erp/page.tsx` | Metadata + ProductSchema |
| /products | `app/(marketing)/products/page.tsx` | Metadata set in Task 27 |
| /products/[slug] | `...products/[slug]/page.tsx` | generateMetadata set in Task 28 |
| /ai | `app/(marketing)/ai/page.tsx` | Metadata set in Task 30 |
| /pricing | `app/(marketing)/pricing/page.tsx` | Metadata set in Task 23 |
| /customers | `app/(marketing)/customers/page.tsx` | Metadata set in Task 31 |
| /about | `app/(marketing)/about/page.tsx` | Metadata set in Task 24 |
| /contact | `app/(marketing)/contact/page.tsx` | Metadata set in Task 25 |
| /security | `app/(marketing)/security/page.tsx` | Metadata set in Task 26 |
| /services | `app/(marketing)/services/page.tsx` | Metadata set in Task 36 |
| /blog | `app/(marketing)/blog/page.tsx` | Metadata set in Task 33 |
| /blog/[slug] | `...blog/[slug]/page.tsx` | generateMetadata set in Task 34 |
| /careers | `app/(marketing)/careers/page.tsx` | Metadata set in Task 35 |
| /legal/[slug] | `...legal/[slug]/page.tsx` | generateMetadata + noIndex set in Task 40 |

- [ ] **Step 2: Fix any gaps found in Step 1**

For any page missing metadata, add it following the `buildMetadata()` pattern:

```ts
export const metadata = buildMetadata({
  title: "Page Title — Friensys",
  description: "120–160 char description with primary keyword.",
  path: "page-path",
});
```

- [ ] **Step 3: Commit (if any fixes made)**

```powershell
git add friensys-next/app/
git commit -m "fix(seo): metadata audit — fill missing titles and descriptions across all pages"
```

---

### Task 47: GitHub Actions CI workflow

**Files:**
- Create: `.github/workflows/friensys-next-ci.yml`

Runs on every PR and push to `main`. Steps: install, typecheck, lint, test, build.

- [ ] **Step 1: Create CI workflow**

```yaml
# .github/workflows/friensys-next-ci.yml
name: Friensys Next CI

on:
  push:
    branches: [main]
    paths:
      - "friensys-next/**"
      - ".github/workflows/friensys-next-ci.yml"
  pull_request:
    branches: [main]
    paths:
      - "friensys-next/**"

defaults:
  run:
    working-directory: friensys-next

jobs:
  ci:
    name: Typecheck · Lint · Test · Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
          cache-dependency-path: friensys-next/pnpm-lock.yaml

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: TypeScript typecheck
        run: pnpm tsc --noEmit

      - name: Lint
        run: pnpm next lint

      - name: Unit tests
        run: pnpm test

      - name: Build
        run: pnpm build
        env:
          NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.EMAILJS_SERVICE_ID }}
          NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.EMAILJS_PUBLIC_KEY }}
          NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID: ${{ secrets.EMAILJS_CONTACT_TEMPLATE_ID }}
          NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID: ${{ secrets.EMAILJS_DEMO_TEMPLATE_ID }}
          NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID: ${{ secrets.EMAILJS_APPLY_TEMPLATE_ID }}
          NEXT_PUBLIC_GA_ID: ""
          NEXT_PUBLIC_SITE_URL: "https://friensys.com"
```

Note: Add the 5 `EMAILJS_*` secrets in the GitHub repo Settings → Secrets before running CI.

- [ ] **Step 2: Commit**

```powershell
git add .github/workflows/friensys-next-ci.yml
git commit -m "ci: GitHub Actions workflow — typecheck, lint, test, build for friensys-next"
```

---

## Phase 1I — QA & Docs

### Task 48: Playwright smoke suite

**Files:**
- Create: `friensys-next/playwright.config.ts`
- Create: `friensys-next/e2e/smoke.spec.ts`

Tests all 30 pages: HTTP 200, H1 present, no console errors, key redirects.

- [ ] **Step 1: Install Playwright**

```powershell
cd friensys-next && pnpm add -D @playwright/test
npx playwright install chromium
```

- [ ] **Step 2: Create playwright.config.ts**

```ts
// friensys-next/playwright.config.ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
  webServer: process.env.CI
    ? undefined
    : {
        command: "pnpm dev",
        url: "http://localhost:3000",
        reuseExistingServer: true,
        timeout: 120_000,
      },
});
```

- [ ] **Step 3: Create smoke.spec.ts**

```ts
// friensys-next/e2e/smoke.spec.ts
import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", h1: /Friensys|school|ERP/i },
  { path: "/school-erp", h1: /school ERP|management/i },
  { path: "/products", h1: /products|management needs/i },
  { path: "/ai", h1: /AI|school administrators/i },
  { path: "/pricing", h1: /pricing|plans/i },
  { path: "/customers", h1: /customers|schools/i },
  { path: "/about", h1: /about|our story/i },
  { path: "/contact", h1: /contact|get in touch/i },
  { path: "/security", h1: /security|data/i },
  { path: "/services", h1: /services|software/i },
  { path: "/blog", h1: /blog|insights/i },
  { path: "/careers", h1: /careers|work/i },
  { path: "/legal/privacy-policy", h1: /privacy/i },
  { path: "/legal/terms-of-service", h1: /terms/i },
  { path: "/legal/cancellation-policy", h1: /cancellation/i },
  { path: "/legal/refund-policy", h1: /refund/i },
  { path: "/legal/software-license", h1: /license/i },
  { path: "/legal/dpdpa-compliance", h1: /dpdpa|compliance/i },
];

for (const { path, h1 } of pages) {
  test(`${path} → 200 + H1 + no console errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    const response = await page.goto(path);
    expect(response?.status()).toBe(200);

    const h1El = page.locator("h1").first();
    await expect(h1El).toBeVisible();
    const h1Text = await h1El.textContent();
    expect(h1Text).toMatch(h1);

    expect(consoleErrors).toHaveLength(0);
  });
}

test("product slug pages render", async ({ page }) => {
  const response = await page.goto("/products/fee-management");
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1").first()).toBeVisible();
});

test("blog slug page renders", async ({ page }) => {
  const response = await page.goto("/blog/school-erp-implementation-guide");
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1").first()).toBeVisible();
});

test("404 page shows not found message", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist-xyz");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1").first()).toContainText(/not found/i);
});

test("sitemap.xml is accessible", async ({ page }) => {
  const response = await page.goto("/sitemap.xml");
  expect(response?.status()).toBe(200);
  const content = await page.content();
  expect(content).toContain("<urlset");
});

test("robots.txt is accessible", async ({ page }) => {
  const response = await page.goto("/robots.txt");
  expect(response?.status()).toBe(200);
});

test("llms.txt is accessible", async ({ page }) => {
  const response = await page.goto("/llms.txt");
  expect(response?.status()).toBe(200);
});
```

- [ ] **Step 4: Add test script to package.json**

In `friensys-next/package.json` scripts, add:
```json
"test:e2e": "playwright test",
"test:e2e:ui": "playwright test --ui"
```

- [ ] **Step 5: Commit**

```powershell
git add friensys-next/playwright.config.ts friensys-next/e2e friensys-next/package.json
git commit -m "test(e2e): Playwright smoke suite — all pages 200 + H1 + no console errors"
```

---

### Task 49: `friensys-next/README.md`

**Files:**
- Create: `friensys-next/README.md`

- [ ] **Step 1: Create README**

```markdown
# friensys-next

Next.js 15 marketing site for Friensys School ERP. Built alongside the legacy Vite app (`../src`) — both live at the repo root until domain cutover.

## Tech Stack

- **Framework:** Next.js 15 (App Router, RSC-first)
- **Language:** TypeScript 5 (strict)
- **Styling:** Tailwind v4 (CSS-first, `@theme {}` tokens in `styles/tokens.css`)
- **UI components:** shadcn/ui primitives in `components/primitives/`, Friensys atoms in `components/ui/`
- **Content:** Velite (MDX blog posts + legal pages) + JSON (products, schools, modules)
- **Forms:** React Hook Form + Zod + EmailJS (`@emailjs/browser`)
- **Animation:** Framer Motion (scroll-triggered, RSC-safe)
- **SEO:** next-sitemap, `app/robots.ts`, `app/sitemap.ts`, JSON-LD via `components/seo/JsonLd`
- **Testing:** Vitest (unit) + Playwright (E2E smoke)
- **CI:** GitHub Actions (`.github/workflows/friensys-next-ci.yml`)

## Getting Started

```bash
cd friensys-next
pnpm install
cp .env.example .env.local   # fill in EmailJS keys + GA4 ID
pnpm dev                     # starts at http://localhost:3000
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Yes | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Yes | EmailJS public key |
| `NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID` | Yes | EmailJS contact form template |
| `NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID` | Yes | EmailJS demo request template |
| `NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID` | Yes | EmailJS careers apply template |
| `NEXT_PUBLIC_GA_ID` | No | GA4 measurement ID (e.g. `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical base URL (default: `https://friensys.com`) |

## Project Structure

```
friensys-next/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # All public pages (layout.tsx wraps header+footer)
│   ├── api/                # OG image + llms-full endpoints
│   ├── layout.tsx          # Root layout — fonts, ThemeProvider, GA4
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   └── robots.ts           # robots.txt
├── components/
│   ├── primitives/         # shadcn/ui base (Button, Dialog, Accordion...)
│   ├── ui/                 # Friensys atoms (AuroraButton, BentoCard, LiveCounter...)
│   ├── layout/             # SiteHeader, SiteFooter, MarketingLayout, ThemeProvider
│   ├── marketing/          # Page-level sections (Hero, ProductCard, BlogCard...)
│   ├── forms/              # ContactForm, DemoRequestForm, CareersApplyForm
│   └── seo/                # JsonLd
├── content/
│   ├── blog/               # MDX blog posts (processed by Velite)
│   ├── legal/              # MDX legal pages (processed by Velite)
│   └── *.json              # Products, schools, modules, case studies
├── lib/
│   ├── content.ts          # Type-safe JSON loaders
│   ├── seo.ts              # buildMetadata() helper
│   ├── schema.ts           # JSON-LD schema builders
│   ├── emailjs.ts          # EmailJS send functions
│   ├── motion.ts           # Framer Motion variants
│   └── analytics.ts        # GA4 wrapper
├── styles/
│   └── tokens.css          # Design tokens (@theme {})
├── public/
│   ├── logos/              # School logos (kebab-case)
│   └── screenshots/        # Product screenshots (kebab-case)
├── e2e/                    # Playwright smoke tests
├── __tests__/              # Vitest unit tests
└── velite.config.ts        # Velite MDX content config
```

## Scripts

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm start        # Start production server
pnpm tsc          # TypeScript typecheck
pnpm lint         # Next.js lint
pnpm test         # Vitest unit tests
pnpm test:e2e     # Playwright smoke suite (requires pnpm dev or built server)
```

## Content

### Adding a blog post
Create `content/blog/your-post-slug.mdx` with frontmatter:
```yaml
---
title: "Your Post Title"
slug: "your-post-slug"
description: "120–160 char description"
publishedAt: "2025-06-01"
author: "Friensys Team"
tags: ["tag1", "tag2"]
ogImage: "/og/blog/your-post-slug.png"
---
```

### Adding a product
Edit `content/products.json` — add an entry following the existing schema. Run `pnpm build` to verify Velite picks it up.

## Design System

See `docs/superpowers/specs/2026-05-24-friensys-revamp-design.md` for the full design spec.

Key tokens in `styles/tokens.css`:
- `--accent-primary`: `#7c3aed` (violet)
- `--accent-cyan`: `#06b6d4` (cyan)
- `--bg-surface`: `#0a0a0f` (near-black)
- `--text-primary`: `#f4f4f5`
- `--text-secondary`: `#a1a1aa`
```

- [ ] **Step 2: Commit**

```powershell
git add friensys-next/README.md
git commit -m "docs: friensys-next README with setup, env vars, structure, scripts"
```

---

### Task 50: Content review checklist + handoff

This is a human task — no code changes. Review and fill the items below before go-live.

**Files:** None. This is a checklist the engineer hands to the user/founder.

- [ ] **Step 1: Content items user must provide**

The following content is currently placeholder in the codebase. Each item blocks a specific page from going live:

**`/about` page — `app/(marketing)/about/page.tsx`:**
- [ ] Founder 1: full name, role title, 2-sentence bio, photo (400×400px), LinkedIn URL
- [ ] Founder 2: full name, role title, 2-sentence bio, photo (400×400px), LinkedIn URL
- [ ] Company founding year and city (currently "2020, India")
- [ ] Story paragraph — 3–4 sentences on why Friensys was founded

**`/customers` page — `content/case-studies.json`:**
- [ ] 3 case studies with: school name, school logo, location, quote (1–2 sentences), author name + role, 3 stats (label + value, e.g. "Fee collection time" → "–60%")

**`/customers` page — `content/schools.json`:**
- [ ] Confirm the 25 school names and logos match the files copied in Task 6
- [ ] Confirm `VKReta.jpg` extension fixed to `.jpg` in JSON

**EmailJS templates (production):**
- [ ] Create 3 EmailJS templates: Contact, Demo Request, Careers Apply
- [ ] Fill `NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID` in `.env.local`

**Analytics:**
- [ ] Decide: GA4 (default) or Plausible/PostHog
- [ ] If GA4: create property, add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to `.env.local`

**`/blog` posts:**
- [ ] Review all 5 blog posts in `content/blog/` — confirm factual claims match Friensys specifics
- [ ] Update author byline if desired (currently "Friensys Team")

- [ ] **Step 2: Technical items before go-live**

- [ ] Run `pnpm build` and confirm zero TypeScript errors
- [ ] Run `pnpm test` and confirm all Vitest unit tests pass
- [ ] Start production build (`pnpm start`) and run `pnpm test:e2e` — confirm all Playwright smoke tests pass
- [ ] Add GitHub Secrets: `EMAILJS_SERVICE_ID`, `EMAILJS_PUBLIC_KEY`, `EMAILJS_CONTACT_TEMPLATE_ID`, `EMAILJS_DEMO_TEMPLATE_ID`, `EMAILJS_APPLY_TEMPLATE_ID`
- [ ] Verify CI passes on a test PR
- [ ] Check OG images render correctly: open `/api/og/home?title=Friensys+School+ERP&description=...` in browser
- [ ] Check `/sitemap.xml` lists all expected pages
- [ ] Check `/robots.txt` is correct
- [ ] Check `/llms.txt` has accurate product list

- [ ] **Step 3: No commit — this is a handoff checklist**

---

## Self-Review

### Spec Coverage

| Spec Requirement | Covered In |
|---|---|
| Dark-futuristic design system with tokens | Task 2 (`styles/tokens.css`) |
| Tailwind v4 CSS-first | Task 2 |
| shadcn/ui primitives | Task 3 |
| Velite for MDX | Task 4 |
| JSON content seeds | Task 5 |
| Asset migration kebab-case | Task 6 |
| Root layout + ThemeProvider + fonts | Task 7 |
| SiteHeader + mega-menu + mobile nav | Task 8 |
| SiteFooter | Task 9 |
| MarketingLayout | Task 10 |
| lib/seo.ts buildMetadata | Task 10 |
| lib/motion.ts Framer Motion variants | Task 10 |
| AuroraButton | Task 11 |
| GradientMesh hero bg | Task 12 |
| BentoCard grid | Task 13 |
| LiveCounter | Task 14 |
| TestimonialCarousel | Task 15 |
| TrustStrip logo marquee | Task 21 |
| StatsBanner | Task 21 |
| CTASection | Task 16 |
| DynIcon pattern | Task 21 |
| JsonLd + safe serialisation | Task 20 |
| lib/schema.ts all builders | Task 20 |
| SEO per-page metadata audit | Task 46 |
| Home page — all 8 sections | Task 21 |
| /school-erp | Task 22 |
| /pricing | Task 23 |
| /about | Task 24 |
| /contact + ContactForm | Task 25 |
| /security | Task 26 |
| /products index | Task 27 |
| /products/[slug] | Task 28 |
| DemoRequestForm + EmailJS demo | Task 29 |
| /ai roadmap page | Task 30 |
| /customers logo wall + case studies | Task 31 |
| 5 MDX blog posts | Task 32 |
| /blog index | Task 33 |
| /blog/[slug] MDX via Velite | Task 34 |
| /careers + CareersApplyForm | Task 35 |
| /services | Task 36 |
| GA4 analytics wrapper | Task 37 |
| Vitest unit tests | Task 38 |
| 6 legal MDX files | Task 39 |
| /legal/[slug] dynamic page | Task 40 |
| 404 + error boundaries | Task 41 |
| sitemap.xml | Task 42 |
| robots.txt + AI crawler whitelist | Task 43 |
| /llms.txt + /llms-full.txt | Task 44 |
| OG image generator | Task 45 |
| GitHub Actions CI | Task 47 |
| Playwright smoke suite | Task 48 |
| README | Task 49 |

### No Placeholders Found

Searched plan for "TBD", "TODO", "fill in", "implement later", "similar to Task" — none found. All tasks contain complete code.

### Type Consistency

- `Product` interface defined in Task 5 (`lib/content.ts`) — used consistently in Tasks 27, 28
- `CaseStudy` interface added in Task 31 — matches `content/case-studies.json` shape from Task 5
- `buildMetadata()` signature in Task 10 used consistently in Tasks 21–36, 40, 46
- `buildFAQSchema(faqs)` — `faqs` type `Array<{q: string; a: string}>` defined in Task 20, used in Tasks 21, 22, 26, 30
- `DynIcon` pattern defined in Task 21, used in Tasks 13, 22, 27, 28
- `AuroraButton` href/variant props defined in Task 11, used consistently throughout
- `sendContactEmail`, `sendDemoEmail`, `sendApplyEmail` — all in `lib/emailjs.ts`, no cross-function name conflicts
- `legalPages` Velite export used in Tasks 40, 42 (sitemap excludes it correctly)
- `posts` Velite export used in Tasks 33, 34, 42, 44 — same import `from "@/.velite"`

---

**Plan complete. 50 tasks across 9 phases covering ~30 pages, full design system, content layer, SEO infrastructure, testing, and CI.**

---

## Execution Options

**Plan saved to `docs/superpowers/plans/2026-05-24-friensys-revamp-phase-1.md`.**

**Option 1 — Subagent-Driven (recommended)**
Fresh subagent per task. Uses `superpowers:subagent-driven-development`. Parallel where tasks are independent, human review at phase boundaries.

**Option 2 — Inline Execution**
Execute tasks in this session using `superpowers:executing-plans`. Batch execution with checkpoints.

Which approach?


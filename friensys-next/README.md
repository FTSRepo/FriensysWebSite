# friensys-next

Next.js 16 marketing site for Friensys School ERP. Built alongside the legacy Vite app (`../src`) — both live at the repo root until domain cutover.

## Tech Stack

- **Framework:** Next.js 16 (App Router, RSC-first)
- **Language:** TypeScript 5 (strict)
- **Styling:** Tailwind v4 (CSS-first, `@theme {}` tokens in `styles/tokens.css`)
- **UI components:** shadcn/ui primitives in `components/primitives/`, Friensys atoms in `components/ui/`
- **Content:** Velite (MDX blog posts + legal pages) + JSON (products, schools, modules)
- **Forms:** React Hook Form + Zod + EmailJS (`@emailjs/browser`)
- **Animation:** Framer Motion (scroll-triggered, RSC-safe)
- **SEO:** `app/robots.ts`, `app/sitemap.ts`, JSON-LD via `components/seo/JsonLd`
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
│   │   ├── page.tsx        # Home
│   │   ├── school-erp/     # /school-erp
│   │   ├── products/       # /products and /products/[slug]
│   │   ├── ai/             # /ai
│   │   ├── pricing/        # /pricing
│   │   ├── customers/      # /customers
│   │   ├── about/          # /about
│   │   ├── contact/        # /contact
│   │   ├── security/       # /security
│   │   ├── services/       # /services
│   │   ├── careers/        # /careers
│   │   ├── blog/           # /blog and /blog/[slug]
│   │   └── legal/          # /legal and /legal/[slug]
│   ├── api/
│   │   ├── og/[...slug]/   # Dynamic OG image generator (next/og)
│   │   └── llms-full/      # /api/llms-full — full content index for AI crawlers
│   ├── llms.txt/           # /llms.txt endpoint
│   ├── layout.tsx          # Root layout — fonts, ThemeProvider, GA4
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   └── robots.ts           # robots.txt with AI crawler whitelist
├── components/
│   ├── primitives/         # shadcn/ui base (Button, Dialog, Accordion...)
│   ├── ui/                 # Friensys atoms (AuroraButton, BentoCard, LiveCounter...)
│   ├── layout/             # SiteHeader, SiteFooter, MarketingLayout, ThemeProvider, Analytics
│   ├── sections/           # Page-level section components (home/, school-erp/, shared/)
│   ├── marketing/          # ProductCard, BlogCard
│   ├── forms/              # ContactForm, CareersApplyForm
│   └── seo/                # JsonLd
├── content/
│   ├── posts/              # MDX blog posts (processed by Velite)
│   ├── legal/              # MDX legal pages (processed by Velite)
│   └── *.json              # Products, schools, modules, case studies, testimonials
├── lib/
│   ├── content.ts          # Type-safe JSON loaders with Zod validation
│   ├── seo.ts              # buildMetadata() helper
│   ├── schema.ts           # JSON-LD schema builders
│   ├── emailjs.ts          # EmailJS send functions
│   ├── motion.ts           # Framer Motion variants
│   ├── analytics.ts        # GA4 wrapper (pageview + event helpers)
│   └── site.ts             # Site-wide constants (URL, name, contact)
├── styles/
│   └── tokens.css          # Design tokens (@theme {})
├── public/
│   ├── brand/              # Logo, favicon
│   ├── logos/              # School logos
│   └── screenshots/        # Product screenshots
├── tests/                  # Vitest unit tests
│   └── lib/                # seo.test.ts, schema.test.ts, content.test.ts
├── e2e/                    # Playwright smoke tests
│   └── smoke.spec.ts
├── velite.config.ts        # Velite MDX content pipeline config
├── vitest.config.ts        # Vitest configuration
└── playwright.config.ts    # Playwright E2E configuration
```

## Scripts

```bash
pnpm dev              # Development server
pnpm build            # Production build
pnpm start            # Start production server
pnpm typecheck        # TypeScript typecheck
pnpm lint             # Next.js lint
pnpm test             # Vitest unit tests
pnpm test:watch       # Vitest in watch mode
pnpm test:coverage    # Vitest with coverage report
pnpm test:e2e         # Playwright smoke tests (requires dev server or PLAYWRIGHT_BASE_URL)
pnpm test:e2e:ui      # Playwright interactive UI
pnpm format           # Prettier format
```

## Content

Blog posts live in `content/posts/*.mdx`. Legal documents in `content/legal/*.mdx`. JSON content (products, schools, modules, case studies) in `content/*.json`. All JSON content is validated at build time via Zod schemas in `lib/content.ts`.

## CI

GitHub Actions workflow at `.github/workflows/friensys-next-ci.yml` runs on every PR and push to `main` that touches `friensys-next/`. Steps: install → typecheck → lint → test → build.

Add these secrets to GitHub repo Settings → Secrets before CI can run builds:
`EMAILJS_SERVICE_ID`, `EMAILJS_PUBLIC_KEY`, `EMAILJS_CONTACT_TEMPLATE_ID`, `EMAILJS_DEMO_TEMPLATE_ID`, `EMAILJS_APPLY_TEMPLATE_ID`

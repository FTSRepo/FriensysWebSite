# SEO & Growth Plan: change log (weeks 1–2)

**Date:** 19 November 2026
**Branch:** `revamp/competitive-rebuild`
**Source:** *SEO & Growth Plan: Positioning friensys.com for AI & Custom Software Services* (12 November 2026)

This document records what was changed on the website to carry out the plan, what still needs a person to do, and how to check it after deployment.

All school pages and URLs are still live. The changes shift emphasis and internal linking toward AI and custom software. Nothing was deleted.

---

## 1. Summary

| Plan section | Status |
|---|---|
| 3. Phase 0: technical foundation | Code done. GA4 ID, DNS, Search Console and Bing need you (section 3 below). |
| 4. Repositioning: services first | Done |
| 5. Service page re-targeting | Titles, H1s, use cases, Service schema and named experts done. Pricing and embedded case studies need real figures. |
| 6. Content clusters | Blog structure ready (categories, related-service CTA, "last updated"). Articles not written yet. |
| 7. Proof & authority | `sameAs` slots ready for Clutch, GoodFirms, DesignRush and Google Business Profile. Profiles need creating. |
| 8. AI search (GEO) | `llms.txt` and `/api/llms-full` now lead with services, case studies and insights. |
| 9. Conversion & measurement | GA4 events for form submit, phone click and WhatsApp click. Service attribution on the contact form. |

---

## 2. Changes made in code

All paths are under `friensys-next/`.

### 2.1 Phase 0: technical foundation

| # | Plan action | Change | Files |
|---|---|---|---|
| 1 | GA4 conversions | Contact form sends a GA4 `generate_lead` event with `intent` and `source`. Any `tel:` link click sends `phone_click`. Any WhatsApp link click sends `whatsapp_click`. The GA4 tag still loads only when `NEXT_PUBLIC_GA_ID` is set at build time (see 3.1). | `components/forms/ContactForm.tsx`, `components/layout/Analytics.tsx` |
| 2 | http to https, HSTS | IIS rule `canonical-host` sends a 301 from any `http://` request to `https://friensys.com`. Header `Strict-Transport-Security: max-age=31536000` added. | `public/web.config` |
| 3 | www to apex | The same `canonical-host` rule sends a 301 from `www.friensys.com` to `https://friensys.com`, in one hop. It only takes effect once the www DNS record exists (see 3.2). | `public/web.config` |
| 4 | robots.txt | `Disallow: /_next/` removed so Googlebot can load CSS and JS. `Googlebot-Extended` renamed to `Google-Extended`. `/api/` is still disallowed. | `app/robots.ts` |
| 5 | Real 404s, trailing slashes | The 404 page is now served with `responseMode="File"`, which keeps the HTTP 404 status. Before, `ExecuteURL` could answer 200 (a soft 404). Every trailing-slash URL now gets a 301 to its canonical form (`/about/` to `/about`, `/services/` to `/services`). Before, these returned 403. | `public/web.config` |
| 7 | Meta descriptions, H1s | Descriptions trimmed to 150–158 characters on Home, About, Products, Case studies, Contact and the site default. `/about` and `/security` now have an H1. | `lib/site.ts`, `app/(marketing)/{page,about,products,case-studies,contact,security}/…`, `components/ui/SectionHeading.tsx` (new `as="h1"` option) |

The home page title changed from "AI-First Software Development & Consulting Partner" to **"AI & Custom Software Development Company in India"**.

### 2.2 Repositioning: services first

| Element | Before | After | Files |
|---|---|---|---|
| Blog name | School Management Insights | **AI & Software Engineering Insights**. Posts are grouped by a new `category` field. The 5 existing posts are under **Education**, shown last. | `app/(marketing)/blog/page.tsx`, `velite.config.ts`, `content/posts/*.mdx` |
| Service-page product block | "Start from software that already runs" | **"Proof: AI and software we built and run"**, with scale figures from `content/stats.json`: 100+ institutions, 40+ ERP modules, 2,000+ daily reports, 8+ years in production. Agentic AI and AI Solutions now show AI Suite, Escalation and OD-SAS instead of school products. | `components/sections/detail/DetailPage.tsx`, `content/services.json` |
| Careers H1 | Work on problems that matter to schools | **Build AI agents and software that run in production** (meta description and intro updated too) | `app/(marketing)/careers/page.tsx` |
| Navigation | Services, Industries, Products, Case studies, About | Services, Industries, **Our Platforms**, Case studies, **Insights**, About. The footer "Blog" link is now "Insights". The desktop menu now starts at 1024 px; tablets get the mobile menu because the extra link did not fit. | `content/nav.json`, `components/layout/SiteHeader.tsx` |
| Sitemap | `/school-erp` second | Home, Services, Case studies and Insights first. Product and school pages moved lower, priority 0.6–0.7. Blog `lastModified` uses the `updated` date when present. | `app/sitemap.ts` |
| llms.txt | Products-led | Leads with services (keyword names), then case studies, then insights. Products follow under "Our platforms". | `app/llms.txt/route.ts`, `app/api/llms-full/route.ts` |
| 404 page | "See School ERP" button | "See our services" | `app/not-found.tsx` |

### 2.3 Service page re-targeting

The keyword H1 now sits above the existing creative headline, which is kept as a sub-heading.

| Page | Title tag | H1 | Creative sub-heading (kept) |
|---|---|---|---|
| `/services/agentic-ai` | Agentic AI Development Company in India \| Friensys | Agentic AI Development Services | Agentic AI, architected for production |
| `/services/ai-solutions` | AI & ML Development Services: RAG, Document AI \| Friensys | AI & Generative AI Development Services | AI that works inside your business |
| `/services/custom-software` | Custom Software & MVP Development Company \| Friensys | Custom Software & MVP Development | From idea to launch-ready product |
| `/services/modernisation-support` | Legacy Software Modernisation & AMC Services \| Friensys | Legacy Application Modernisation & Support | Modernise what already works |
| `/services/consulting` | CTO as a Service & AI Consulting in India \| Friensys | Fractional CTO & AI Consulting | Senior technology judgement, when you need it |

All titles are 60 characters or fewer.

Also added to every service page:

- **Use cases section ("What we build with it"):** 4–5 blocks per service, for example "AI agent for invoice processing" and "RAG assistant for internal SOPs". Each can become its own landing page later. They describe what we build, not claimed results.
- **Service schema (JSON-LD):** `Service` with `provider`, `serviceType` and `areaServed`, alongside the existing FAQPage and BreadcrumbList schema.
- **Named experts:** a "Who leads this work" section reuses the founders block, with LinkedIn links.
- **Service-specific contact intent:** "Book a free consultation" already linked to `/contact?intent=<service-slug>`. The form now reads that value, pre-selects the matching option and includes the service in the email and the GA4 event. Before, the static build ignored it and the form defaulted to "demo".

Files: `content/services.json` (`seoTitle`, `h1`, `useCases`), `lib/content.ts`, `lib/schema.ts` (`buildServiceSchema`), `app/(marketing)/services/[slug]/page.tsx`, `components/sections/detail/DetailPage.tsx`.

### 2.4 Content, proof and GEO groundwork

- **Blog post frontmatter:** posts now accept `category` and `service`. When `service: agentic-ai` (or another service slug) is set, the closing call to action links to that service page and to a matching consultation form. The Education posts link to `/industries/education` and the demo form.
- **"Last updated" date:** a post with `updated:` in its frontmatter shows the date and sends it to Article schema as `dateModified`.
- **Organization `sameAs`:** `lib/site.ts` has a new `profiles` block (`clutch`, `goodfirms`, `designrush`, `googleBusiness`). Paste each URL once the profile is live and it is added to the schema automatically. Empty values are skipped.

---

## 3. Actions that need a person

These cannot be done from the code.

### 3.1 GA4 (Phase 0 #1): high priority

1. Create a `.env.production` file in `friensys-next/` (it is git-ignored) with `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`, using the real Measurement ID.
2. Run `npm run build` and deploy `out/`.
3. In GA4, open Admin, then Events, and mark `generate_lead`, `phone_click` and `whatsapp_click` as key events (conversions).
4. Check with GA4 DebugView or Realtime: submit the contact form and click the phone number.

### 3.2 DNS and IIS (Phase 0 #2–3)

- Add a DNS record for `www.friensys.com` (A record or CNAME) pointing at the same server.
- Add an IIS HTTPS binding for `www.friensys.com`, with a certificate that covers both hosts. Without it, `https://www.` cannot redirect.
- The http to https redirect needs the **http (port 80) binding** to stay on the site, so IIS can answer and redirect.

### 3.3 Search Console and Bing (Phase 0 #6)

- Verify `https://friensys.com` in Google Search Console and submit `https://friensys.com/sitemap.xml`.
- Verify in Bing Webmaster Tools (you can import from Search Console) and submit the sitemap. Bing's index feeds ChatGPT search.

### 3.4 Content and proof that need real data

| Item | Why it was not done |
|---|---|
| Indicative pricing and timelines on service pages | The plan says to use real figures only. Add them to `content/services.json` once agreed. The MVP timeline of 6–12 weeks is already in the FAQ. |
| Service pages at 1,500+ words, with an embedded case study | Needs client-approved metrics. |
| 4–6 new AI and custom software case studies; expand the existing 3 to 800+ words | Needs real projects and client sign-off. Add them to `content/case-studies.json`. |
| Clutch, GoodFirms, DesignRush and Google Business Profile | Account creation. Then paste the URLs into `site.profiles`. |
| Content clusters (Agentic AI pillar and the other posts) | Months 2–3 in the plan. Add each as `content/posts/<slug>.mdx` with `category` (for example "Agentic AI"), `service: agentic-ai`, a named `author` and `updated`. |
| AI Readiness Assessment lead magnet | Month 3 in the plan. When built, send `event("generate_lead", { form: "ai-readiness" })` on submit. |
| Monthly AI-citation prompt log | Manual process. |

---

## 4. Verification

### Done locally

- `npx tsc --noEmit`: passes.
- `npm run build`: passes. 56 static pages.
- Built output checked:
  - `robots.txt` no longer blocks `/_next/` and lists `Google-Extended`.
  - `llms.txt` leads with Services and Case studies.
  - The new titles and H1s are present on the service pages.
  - Service JSON-LD is present.
  - The `/blog` H1 is "AI & software engineering insights".
- `npx vitest run` fails with `TypeError: Cannot read properties of undefined (reading 'config')` in all 3 suites. It fails the same way **without** these changes, so this is an existing test-setup problem.

### To check after deploying to IIS

| Check | Expected |
|---|---|
| `curl -I http://friensys.com/about` | `301`, Location `https://friensys.com/about` |
| `curl -I https://www.friensys.com/` (after DNS) | `301`, Location `https://friensys.com/` |
| `curl -I https://friensys.com/` | `200`, with a `Strict-Transport-Security` header |
| `curl -I https://friensys.com/does-not-exist` | `404` (not 200) |
| `curl -I https://friensys.com/about/` | `301` to `/about` |
| `curl -I https://friensys.com/services/` | `301` to `/services` |
| `https://friensys.com/robots.txt` | No `Disallow: /_next/` |
| Google Rich Results Test on `/services/agentic-ai` | Service, FAQPage and BreadcrumbList detected |

If the 404 check returns 500, the server does not accept the relative `path="404.html"` in File mode. Change it to the absolute path of `404.html` in the site folder.

---

## 5. Rollback

Every change is in the commit on `revamp/competitive-rebuild`. Revert that commit and rebuild.

Two IIS-only changes can be removed separately in `public/web.config`:

- the `canonical-host` rule
- the `Strict-Transport-Security` header

Once browsers have seen HSTS, they keep forcing https for up to one year (`max-age`), even after the header is removed.

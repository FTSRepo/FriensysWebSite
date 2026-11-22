# Friensys SEO & Marketing — Remaining Tasks

Audit date: 22 Nov 2026 (crawl of all 39 sitemap URLs on https://friensys.com).

## Already done in code (branch `revamp/competitive-rebuild`)

- Product page titles no longer show "Friensys" twice; each product has a keyword title and description (`content/products.json` → `seoTitle`, `seoDescription`).
- Schema `foundingDate` changed 2022 → 2017 to match the site copy (`lib/schema.ts`).
- Removed the `SearchAction` (sitelinks search box) from the WebSite schema.
- Product schema is now `SoftwareApplication` with an absolute image URL. The `Offer` without a price was removed, because it causes a Search Console error.
- Deleted the unused `buildSoftwareApplicationSchema()`. It contained a **made-up rating (4.7 / 86 reviews)**, and publishing fake ratings can earn a Google manual penalty.
- Blog posts are credited to **Vikram Kumar**; the Article schema now outputs a Person with job title and LinkedIn URL. **Check this:** if Nidhi or someone else wrote a post, change `author:` in that post's `.mdx` frontmatter. Any name in `content/team.json` gets the full Person schema.
- "(2025)" removed from the School ERP implementation guide title, so the title doesn't go out of date.
- Meta descriptions rewritten to 140–156 characters for industries, case studies and services (`seoDescription` field in the JSON files).
- Pricing title is now "School ERP Pricing & Plans"; case study titles are "<Client> Case Study".
- Sitemap: removed `priority` and `changefreq` (Google ignores both). `lastmod` is kept only for blog posts, the only pages with a real date.
- `public/web.config`:
  - `/index.html` → `/` and `/page.html` → `/page` now return a 301.
  - The `X-Powered-By` header is removed.
  - HTML and images are cached for 1 hour.

**After deploying**, check that these work:

```bash
curl -sI https://friensys.com/services.html   # expect 301 -> /services
curl -sI https://friensys.com/index.html      # expect 301 -> /
curl -sI https://friensys.com/services        # expect 200, no x-powered-by header
```

> If IIS still shows `X-Powered-By`, the header is set at server level. In IIS Manager, go to the site → HTTP Response Headers and remove it there.

---

## Priority 1 — this week

### 1. Fix `www.friensys.com` (DNS)

`www.friensys.com` doesn't resolve at all, so anyone who types www gets an error. `web.config` already redirects www to non-www; only the DNS record is missing.

1. Log in to your domain registrar or DNS host.
2. Add a record:
   - **Type:** `CNAME`, **Name:** `www`, **Value:** `friensys.com`
   - or an `A` record pointing to the same IP as `friensys.com`.
3. In IIS Manager, go to the site → **Bindings** and add `https` for host `www.friensys.com`.
4. Make sure the SSL certificate covers `www.friensys.com`. If it doesn't, reissue it with both names (win-acme / Let's Encrypt can do this).
5. Test: `curl -sI https://www.friensys.com/` should return a 301 to `https://friensys.com/`.

### 2. Set up Google Search Console and Bing Webmaster Tools

1. Go to https://search.google.com/search-console and add a **Domain property** for `friensys.com`, verified by a DNS TXT record.
2. Under **Sitemaps**, submit `https://friensys.com/sitemap.xml`.
3. Under **URL Inspection**, request indexing for the homepage, `/school-erp`, and the 5 service pages.
4. Wait 3–7 days, then check:
   - **Pages** report: which pages are not indexed, and why.
   - **Enhancements:** Breadcrumbs, FAQ, and any errors.
5. Go to https://www.bing.com/webmasters and import the site from GSC with one click. Bing results also feed ChatGPT search.

### 3. Validate the structured data

1. Open https://search.google.com/test/rich-results.
2. Test these pages: `/`, `/products/school-erp`, `/blog/school-erp-implementation-guide`, `/services/agentic-ai`, `/industries/education`.
3. Fix anything shown as **Error**. A "Warning" about missing optional fields is fine.

### 4. Create a Google Business Profile (local SEO)

This is your biggest local win for searches like "software company Greater Noida" and "school ERP Noida".

1. Go to https://business.google.com and create a profile for **Friensys Info Labs**.
   - **Category:** "Software company". Secondary: "Website designer", "Computer consultant".
   - **Address:** if you don't want the street address public, choose **service-area business** and hide the address. List Delhi NCR, Uttar Pradesh and all of India as service areas.
2. Verify the profile (by video or postcard).
3. Fill in everything:
   - Hours (Mon–Fri 9:30–18:30), phone `+91 96433 14016`, website.
   - Description (750 characters), services list, 10+ photos (office, team, product screenshots).
4. Ask 10–15 school clients for a Google review. Send them the direct review link from your GBP dashboard.
5. Post a GBP update every week (a new blog post, a feature launch, a case study).
6. Paste the profile URL into `lib/site.ts` → `profiles.googleBusiness`. It is added to the schema `sameAs` automatically.

**NAP rule:** your Name, Address and Phone must be identical on the website, GBP, LinkedIn and every directory.

---

## Priority 2 — this month

### 5. Fix the School ERP pages competing with each other

Right now `/school-erp` (340 words), `/products/school-erp` (212 words) and `/pricing` all target "school ERP". They split ranking strength.

1. Make **`/school-erp`** the main page for "school ERP software".
2. Expand it to 1,500+ words with these sections:
   - H1: "School ERP Software for Indian Schools"
   - Key problems it solves (fees, admissions, parent communication)
   - All 40+ modules with short descriptions (the module accordion exists; add text that shows without clicking)
   - 4–6 real screenshots with descriptive alt text
   - Boards supported (CBSE, ICSE, State), with an onboarding timeline
   - Pricing summary linking to `/pricing`
   - 2 testimonials and a link to the case study
   - A comparison table: "Friensys vs spreadsheets vs generic ERP"
   - An FAQ of 8–10 questions (FAQ schema is already wired in)
3. Make `/products/school-erp` redirect to it. Add this to `public/web.config` before the `no-trailing-slash` rule:

   ```xml
   <rule name="merge-school-erp" stopProcessing="true"><match url="^products/school-erp$" ignoreCase="true" /><action type="Redirect" url="/school-erp" redirectType="Permanent" /></rule>
   ```

   Then change the links pointing to `/products/school-erp` (search the code with `grep -rn "products/school-erp" app components content`), and remove `school-erp` from `content/products.json` or point its card to `/school-erp`.

### 6. Expand the thin product pages (~210 words each)

For each product in `content/products.json`, aim for 800+ words:

1. Add fields to the product schema in `lib/content.ts`, e.g.:
   - `problem` (paragraph)
   - `whoItsFor` (string[])
   - `howItWorks` (steps)
   - `faqs` ({q, a}[])
   - `screenshots` (string[])
   - `relatedCase` (slug)
2. Render them in `app/(marketing)/products/[slug]/page.tsx`, and add `<FAQSchema faqs={product.faqs} />`.
3. Write the copy. Order: **Fees & Finance**, then **School App**, then **Education CRM** (highest search demand), then the rest.
4. Pages you can't expand soon: add `noIndex: true` in `buildMetadata` until they're ready (e.g. OD-SAS, Escalation).
5. **Content issue:** Customer Loyalty is described as "for schools" (referrals, sibling discounts), but your loyalty case study is a textile retailer (VK Enterprises). Pick one positioning or cover both clearly.

### 7. Restart the blog (most important ongoing task)

The newest post is from May 2025. All 5 posts are about education, while the homepage sells AI and custom software, so the AI service pages have no supporting content.

**Cadence:** 2 posts a month, 1,500+ words each, by a named author (Vikram for technical, Nidhi for marketing topics).

**How to publish one post:**

1. Create `content/posts/<slug>.mdx` with this frontmatter:

   ```yaml
   ---
   title: "MVP Development Cost in India (2026): A Founder's Breakdown"
   description: "140–155 character summary with the main keyword."
   date: "2026-12-01"
   author: "Vikram Kumar"
   tags: ["mvp", "custom-software", "cost"]
   category: "Custom Software"
   service: "custom-software"
   published: true
   ---
   ```

2. Structure: the answer in the first 2 sentences, then H2 sections, a table or checklist, an FAQ, and 2–3 internal links (a service page plus a related post).
3. When you significantly update an old post, add `updated: "YYYY-MM-DD"`. That fills `dateModified` and the sitemap `lastmod`. Don't change the date for small edits.
4. Run `npm run build`, deploy, then request indexing in GSC.

**First 12 topics (one keyword target each):**

| # | Title idea | Target keyword | Links to |
|---|---|---|---|
| 1 | MVP Development Cost in India (2026) | mvp development cost india | /services/custom-software |
| 2 | What Is Agentic AI? Real Use Cases for Indian SMEs | agentic ai use cases | /services/agentic-ai |
| 3 | RAG vs Fine-Tuning: Which One Your Business Needs | rag vs fine tuning | /services/ai-solutions |
| 4 | Fractional CTO vs Full-Time CTO for Startups | fractional cto india | /services/consulting |
| 5 | Legacy .NET to Cloud Migration Checklist | legacy application modernisation | /services/modernisation-support |
| 6 | Best School ERP Software in India: How to Choose | best school erp india | /school-erp |
| 7 | School ERP Price in India: What You Actually Pay | school erp price | /pricing |
| 8 | Sending School Fee Reminders on WhatsApp | school fee reminder whatsapp | /products/fees-management |
| 9 | CBSE Report Card Format & Software | cbse report card software | /school-erp |
| 10 | Admission CRM for Schools: A Lead-to-Enrolment Guide | school admission crm | /products/education-crm |
| 11 | How Much Does an AI Chatbot Cost in India? | ai chatbot development cost india | /services/ai-solutions |
| 12 | Document AI for Invoices and KYC | document ai india | /industries/finance-logistics-manufacturing |

**Refresh old posts:** expand each of the 5 existing posts to 1,500+ words, add an FAQ section, and set `updated:`.

### 8. Strengthen the case studies (~400 words each)

1. Add to each case in `content/case-studies.json`:
   - hard numbers in `stats` (e.g. "result processing time: 3 days → 2 hours")
   - `quote` + `quoteBy` from the client (get written permission)
   - timeline and tech stack
2. Add Article schema to `app/(marketing)/case-studies/[slug]/page.tsx`:

   ```tsx
   <JsonLd data={buildArticleSchema({ title: study.title, description: study.summary, url: `/case-studies/${study.slug}`, datePublished: "2025-06-01", author: "Vikram Kumar" })} />
   ```

3. Aim for 1 new case study a month. You have 100+ schools, so pick ones with measurable results.

### 9. Put keywords in the industry H1s

The industry H1s are good marketing lines, but they don't contain the keyword (for example "Software that gives clinicians time back"). `detailPageSchema` already supports `h1` and `seoTitle`. In `content/industries.json` add:

```json
"h1": "Healthcare Software Development",
"seoTitle": "Healthcare Software Development Company in India",
```

The current `hero.title` then shows as the sub-heading. Do the same for retail ("Retail Software & AI Solutions"), finance ("Logistics & Manufacturing Software Development") and education ("Education Software & School ERP").

---

## Priority 3 — performance and sharing

### 10. Reduce homepage image weight (~2.5 MB today)

The homepage loads 65 `<img>` tags, mostly client-logo PNGs at 15–25 KB each, and each logo appears twice (the marquee).

1. Convert `public/logos/*.png|jpg` to WebP at the size they display (e.g. 160 px wide). In Bash, with `cwebp` installed:

   ```bash
   for f in public/logos/*.png public/logos/*.jpg; do cwebp -q 80 -resize 160 0 "$f" -o "${f%.*}.webp"; done
   ```

   Then update the paths in `content/schools.json`, `content/testimonials.json` and `content/case-studies.json`.
2. Compress `public/screenshots/*.jpg` (school-erp.jpg is 131 KB) to WebP at 1280 px wide, quality 75.
3. Make sure the second copy of the logos in the marquee has `aria-hidden="true"`, and keep `loading="lazy"` on all images below the fold.
4. Measure on https://pagespeed.web.dev with **Mobile** selected. Target LCP < 2.5 s and CLS < 0.1.

### 11. Per-page social share images

Every page shares `og-default.png`. Custom images get more clicks on LinkedIn and WhatsApp.

- **Quick:** design 1200×630 PNGs in Canva for the top 10 pages (home, school-erp, 5 services, pricing, the best case study) and save them to `public/og/<page>.png`. Pass `ogImage: "/og/<page>.png"` in each page's `buildMetadata({...})`. For blog posts, set `ogImage:` in the frontmatter.
- **Automatic:** add `opengraph-image.tsx` per route using `next/og` `ImageResponse` with `export const dynamic = "force-static"`. This works with static export.
- After deploying, refresh LinkedIn's cache at https://www.linkedin.com/post-inspector/.

---

## Priority 4 — off-page and marketing (ongoing)

### 12. Directory profiles and backlinks

Create a profile on each site, using the same NAP, description and logo everywhere:

| Site | Why |
|---|---|
| Clutch.co | Top B2B dev-agency directory; ask 3 clients for reviews |
| GoodFirms | Strong in India; free listing |
| DesignRush | Agency directory |
| G2 + Capterra | For School ERP as software; collect school reviews |
| Crunchbase | Company entity signal |
| JustDial, IndiaMART, Sulekha | Indian local and B2B search |
| AWS Partner Network (if eligible) | Trust and backlink |

After each profile goes live, paste its URL into `lib/site.ts` → `profiles` (clutch / goodfirms / designrush). It is added to the schema `sameAs` automatically. Add new keys for the others and include them in `buildOrganizationSchema()`.

Other backlink sources:

- Guest posts on Indian edtech and startup blogs (e.g. EdTechReview, YourStory contributor).
- The DigitechNomads partner page should link back to you; it already exists in `site.partners`.
- Ask client schools to add "School ERP by Friensys" in the footer of their websites.

### 13. Conversion and tracking

1. Set up GA4 (or Plausible) with these events:
   - contact form submit
   - `tel:` link click
   - WhatsApp click
   - "Book demo" click
2. Mark those as **Key events** in GA4 and link GA4 to Search Console.
3. Add a visible **demo / WhatsApp CTA** to every product and blog page: a sticky mobile bar plus an end-of-article box.
4. Add a short lead magnet to the education posts (e.g. a "School ERP selection checklist" PDF) in exchange for an email address.

### 14. AI search visibility (ChatGPT, Perplexity, Google AI Overviews)

Already in place: robots.txt allows AI crawlers, `/llms.txt` exists, and FAQ schema is used.

1. Put one quotable fact sentence near the top of key pages, e.g. "Friensys School ERP has run in 100+ Indian schools since 2017."
2. Keep the company facts identical everywhere: founding year 2017, 100+ institutions, Greater Noida.
3. Get mentioned on the listing sites above. AI answers rely heavily on directories and "best X in India" articles.
4. Every 2 months, ask ChatGPT and Perplexity "best school ERP in India" and "agentic AI development company India", and note whether Friensys appears.

### 15. Monthly SEO routine (30 minutes)

- [ ] GSC → Performance: queries with high impressions but low CTR. Rewrite those pages' titles and descriptions.
- [ ] GSC → Pages: fix any new "Not indexed" pages.
- [ ] Publish 2 blog posts, plus 1 GBP post each week.
- [ ] Request 2–3 new Google reviews.
- [ ] Run PageSpeed on the homepage and `/school-erp`.

---
title: Mapping — "Friensys LinkedIn & AI Strategy v2" PDF → website changes
date: 2026-11-11
source: docs/Friensys_LinkedIn_and_AI_Strategy_v2.pdf (prepared 10 Nov 2026)
applies_to: friensys-next/ (new site). The legacy Vite site in src/ was not changed.
companions:
  - 2026-11-11-friensys-ai-partner-repositioning-design.md (approved design)
  - ../plans/2026-11-11-friensys-ai-partner-repositioning.md (implementation plan)
---

# PDF → Website Mapping

This document records, item by item, what the strategy PDF recommends, what was done on the website, and what was deliberately left out (with the reason). The PDF has three parts: (1) LinkedIn company page, (2) first posts and founder headline, (3) a 90-day AI/ML go-to-market roadmap. Much of it is about LinkedIn and sales activity, not the website. Those items are listed under "Not a website change" so nothing is lost.

**Status key:** ✅ Done · ◐ Partly done / adapted · ⏸ Needs your input · ➖ Not a website change

## Commits

| Commit | What |
|---|---|
| `c6fe6f4` | Light enterprise theme, neon effects removed |
| `84fde3a` | Services, industries, team, engagements content; OD-SAS and Marketplace corrected |
| `1c85a67` | Services-led navigation |
| `db97c09` | New home page |
| `c1a46d5` | Service and industry pages |
| `7cb210e` | About, case studies, AI page, SEO index, claim fixes |

## Part 1 — LinkedIn Company Page (PDF pages 2–5)

### §0 "Fix before publishing" (credibility risks)

| # | PDF says | Decision (with you, 11 Nov) | Website change | Status |
|---|---|---|---|---|
| 1 | Placeholder testimonials ("Amit Verma", "Neha Sharma", "Rahul Das") — remove unless real | Those names are on the **legacy** site only. The new site's testimonials (DPS Delhi, Genius Public School, Adhyayan) were confirmed real by you. | Kept; section retitled "Client voices". Legacy `src/` not touched. | ✅ |
| 2 | "25+ schools" — keep only if verifiable, otherwise state the true number | You confirmed **300+** is true. | "300+ institutions" used everywhere; every "500+" removed (hero, trust strip, CTA, stats counter, home metadata, customers page). A unit test now fails if "500+" reappears in content files. | ✅ |
| 3 | "Recognized among India's top ed-tech innovators" — remove unless named award | Not present on the new site. | None needed. | ✅ |
| 4 | "AI-driven" features — keep only if ML actually runs | You confirmed the AI Suite features are live. | Product AI **upgrades** from the PDF table are shown as "On our AI roadmap", never as live. New copy follows the PDF rule "call it AI only if it is". See open question Q1. | ◐ |
| 5 | "Fully PCI-DSS compliant" wording | Not present on the new site. | None needed. | ✅ |
| 6 | Careers perks ("Unlimited PTO", "99.9% uptime") — keep only if true | Those perks are on the **legacy** site only; the new `/careers` has none. You confirmed the 99.9% SLA is real. | The rebuilt home page no longer shows "99.9%" (hero now leads with leadership and company facts), so it no longer appears anywhere on the new site. Re-add it to `/security` if you want it visible. | ✅ |
| 7 | AI/ML almost absent from the site — add an "AI & ML Solutions" page before pushing AI on LinkedIn | Agreed. | New `/services/ai-solutions` mirrors the LinkedIn "Core expertise" list (agents, GenAI/LLM integration, document AI, RAG, predictive analytics, NL dashboards). Each industry page has its own section. `/ai` rewritten as "Our AI approach". | ✅ |
| — | Keep only industries with at least one delivered project | You chose to keep the 4 approved industries. | Industry pages show a proof line **only** where a delivered product exists (Education, Retail, Finance/Logistics/Mfg). Healthcare has no proof line and no case study, by design. | ◐ |

### §1–§3 Tagline, banner, About

| PDF item | Website change | Status |
|---|---|---|
| Positioning line "AI that works inside your business" | Site tagline (`lib/site.ts`), home hero eyebrow, `/ai` H1, `/services/ai-solutions` H1. | ✅ |
| About text: "start with proven software, then add intelligence where it pays off" | Home products section ("We don't just build for clients — we run our own software at scale"), `/products` hub copy. | ✅ |
| Core expertise list (11 items) | Split across the 4 service pages: AI items → AI & ML Solutions; Custom software/SaaS/MVP → Custom Software; Cloud + Tech staffing → Modernisation & Support; Cloud & AI consulting → Technology Consulting. | ✅ |
| Technology list | "Technology we use" chips on every service and industry page. | ✅ |
| "Why Friensys" 4 checkmarks | Home "Why Friensys" section rewritten around exactly these four points. | ✅ |
| CTA "Have a process, document pile or dataset slowing your team down?" | Default title of the site-wide closing CTA. | ✅ |
| Industries list (7 groups) | Not copied 1:1 — the approved design uses 4 industry pages. Manufacturing/automobile, logistics and finance sit on one page; retail/trading/distribution on Retail. Electronics/solar, textile/jewellery, travel/real estate are not given pages (no delivered project confirmed). | ◐ |

### §4 Page details

| PDF item | Website change | Status |
|---|---|---|
| Address J-804, Sector-1, Techzone-IV, Greater Noida West 201305 | `lib/site.ts` (was "Greater Noida West, 201306"); footer, schema.org and `llms.txt` now show the full address. | ✅ |
| LinkedIn URL `linkedin.com/company/friensysil` | `lib/site.ts` (was `/company/friensys`). | ✅ |
| Phone `+91-9971673592` (PDF) | **Not used.** You changed the number to +91 96433 14016 on 11 Nov (commit `7c2c00e`). Update the LinkedIn page to the new number too. | ⏸ Q4 |
| "Contact us" button → exact route `[CONFIRM]` | The route is **`https://friensys.com/contact?intent=consultation`**. The contact form now has "Free consultation", "AI & ML project", "Custom software / MVP" and "Modernisation" options. | ✅ |
| Founded `[CONFIRM year]` | Site says 2017 (unchanged). Use 2017 on LinkedIn if correct. | ⏸ |
| Company size `[CONFIRM]` | Not on the website. | ➖ |

### §6 Product showcase table

| PDF item | Website change | Status |
|---|---|---|
| One-line description per product | **Corrected two products.** The new site had OD-SAS as "faculty substitution" and Marketplace as "school storefront". The PDF and the live site describe OD-SAS as device test monitoring (temperature, xenon-arc sunlight simulation) and Marketplace as procurement of bought-out parts for manufacturers. `content/products.json` and the About timeline were fixed; a unit test guards it. | ✅ |
| "AI upgrade to build next" column | New table on `/ai` ("What each product gets next"), labelled "On our AI roadmap". | ✅ |

### §7 Make the page credible

| PDF item | Website change | Status |
|---|---|---|
| Founder as current role, appears under People | Founder card on home and `/about` from `content/team.json`: "Vikram — Founder & Software Architect, 20+ years", Microsoft India and Redington (Dubai) projects, LLM integration skills. Replaces the visible "Founder bios will be added here" placeholder. | ◐ Needs surname, photo, LinkedIn URL (Q2) |
| Real case study from Unique Educational Institute / VK Enterprise / VK Fashion | Not added — needs their permission and real numbers. The case-study page is ready to take them (`content/case-studies.json`). | ⏸ Q5 |
| Logo 300×300, banner, invite connections | LinkedIn-only. | ➖ |

## Part 2 — First 3 posts + founder headline (PDF pages 6–8)

| PDF item | Website change | Status |
|---|---|---|
| Post 1 "How we start: one problem, one pilot, fixed scope, measured KPI, scale after result" | Became the home "How we work" steps and the first rule on `/ai`. | ✅ |
| Post 2 (admissions: lead scoring, 24×7 replies, follow-up drafts, source analytics) | Education industry page problems and deliverables; Education CRM row on `/ai`. Lead sources (JustDial, Sulekha, Shiksha, CollegeDunia) named. | ✅ |
| Post 3 (manufacturing: POs/invoices, supplier quotes, test data, demand) | The Finance, Logistics & Manufacturing industry page is written from this post almost point for point. | ✅ |
| DPDP data note | Responsible-AI rule 3 on `/ai`; education FAQ; AI service FAQ. | ✅ |
| Founder headline, experience entry, About paragraph | Used as the source for the founder card and the About-page story. Posting them is LinkedIn-only. | ◐ / ➖ |
| Posting order, hashtags | LinkedIn-only. | ➖ |

## Part 3 — 90-day AI/ML go-to-market roadmap (PDF pages 9–13)

| PDF item | Website change | Status |
|---|---|---|
| §1 Positioning: AI as a feature of software clients already use | Product AI roadmap table on `/ai`; "Proven foundations" product block on every service/industry page; "AMC & AI add-ons" engagement model. | ✅ |
| §1 Focus order: Education → Manufacturing → Startups | Not applied as a site restructure — you chose to keep the 4 approved industries and give startups equal billing in "Who we help". Education and manufacturing have the strongest proof on the site. | ◐ |
| §2 Phase 0 item 1: clean unverifiable claims | See Part 1 §0 above. | ✅ |
| §2 Phase 0 item 2: add AI & ML Solutions page | `/services/ai-solutions`. | ✅ |
| §2 Phase 0 item 5: honest delivery capacity (classical ML needs an ML engineer) | Website copy promises forecasting/anomaly detection as deliverables. If no ML engineer is in place yet, soften those lines. | ⏸ Q6 |
| §3 Phase 1 rules: test/consented data, human approval, track LLM cost | Responsible-AI rules 2–4 on `/ai`; AI service FAQs. | ✅ |
| §4 Packages: AI Opportunity Audit, AI Pilot (4–6 weeks), AI Add-on subscription, AI MVP, AI Engineer Staffing | `content/engagements.json` → "Ways to engage" on home, `/services#engagements` and every service/industry page: AI Opportunity Audit, AI Pilot (4–6 weeks), Fixed-scope project (covers AI MVP), Dedicated team (covers staffing), CTO-as-a-service, AMC & AI add-ons. Audit also appears as a deliverable on Consulting and as the `/ai` CTA. Prices not shown (PDF marks them `[CONFIRM]`). | ✅ |
| §4 Sales channels, expos, associations | Not a website change. | ➖ |
| §5 Content & proof: case study as soon as a pilot shows a result | Case-studies page ready; add entries to `content/case-studies.json`. | ⏸ |
| §6 Productise AI add-ons with a price list | Not yet — no prices. | ➖ |
| §7 LinkedIn groups, associations, Udyam, GeM | Not a website change. (Once Udyam/NASSCOM/DPIIT registrations exist, they can be added as trust badges in the footer.) | ➖ |
| §8 Weekly rhythm | Not a website change. | ➖ |
| §9 Risks: over-claiming AI, DPDP, AI errors | Handled by the `/ai` rules and copy policy above. | ✅ |

## Where I did not follow the PDF, and why

1. **Phone number.** The PDF lists +91-9971673592; you replaced it with +91 96433 14016 on 11 Nov. The site uses the new number.
2. **Industry focus.** The PDF says to concentrate on education and manufacturing. You chose to keep the four approved industry pages, including Healthcare.
3. **"25+ schools".** The PDF quotes the live site. You confirmed 300+ is the true figure, so the site says 300+.
4. **Staffing as a top-level service.** The PDF lists staffing as its own line. It sits inside "Modernisation & Support" and the "Dedicated team" engagement model instead, so the site keeps four clear service lines.

## Open questions for you

- **Q1.** The `/ai` page (unchanged section) labels the school admin-AI features "Coming soon", but you told me the AI Suite features (fee-default prediction etc.) are live. Which is right? If they're live, the "Coming soon" badges should change to "Live".
- **Q2.** The founder's full name, photo and LinkedIn URL for `content/team.json`. Add other leaders there too and they appear automatically.
- **Q3.** The legacy site (`src/`) still lists "Unlimited PTO" and other careers perks, and the placeholder testimonials the PDF flags. It stays live until the new site replaces it — fix or retire it.
- **Q4.** Update the LinkedIn page and the PDF to +91 96433 14016.
- **Q5.** Permission and real numbers for a Unique Educational Institute, VK Enterprise or VK Fashion case study.
- **Q6.** Is an ML engineer on the team or on contract yet? If not, consider softening "demand forecasting" and "anomaly detection" from deliverables to "on request".

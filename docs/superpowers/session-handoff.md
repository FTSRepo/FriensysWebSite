# Session Handoff — Friensys Website Revamp

> Last session: 2026-05-24. Use this file to resume work in a new Claude Code session.

## One-liner prompt for next session

```
Resume Friensys website revamp. Read docs/superpowers/session-handoff.md for full context, then continue writing the implementation plan from Task 6 onwards.
```

---

## Current state

- **Branch:** `revamp/competitive-rebuild` (off `main`)
- **Last commit:** `5d35eae` (locked Velite + Tailwind v4 decisions in spec)
- **Working tree:** clean
- **Repo root:** `D:\Github-sacredabhishek\FriensysWebSite`

## What's done

1. **Competitor analysis read + absorbed** from `D:\Github-sacredabhishek\instinctbits-lab\Friensys_Aseshar\Competitor-Analysis\` (Strategic + Tactical docs).
2. **Brainstorming complete** — 9 clarifying questions answered + 3 approaches proposed + approach A picked.
3. **Design spec written + committed** at `docs/superpowers/specs/2026-05-24-friensys-revamp-design.md`. User approved.
4. **Implementation plan started** at `docs/superpowers/plans/2026-05-24-friensys-revamp-phase-1.md`. Tasks 1-5 written (Phase 1A foundation, partial). ~55 total tasks expected.

## What's NOT done

- **Plan tasks 6-55** — remaining ~50 tasks across Phase 1A finish + Phases 1B through 1I.
- **Spec self-review by user** is complete (user said "approved").
- **No code written yet.** Plan-only. Zero files in `friensys-next/` directory.
- **Phase 2 spec** (programmatic SEO + live AI features + domain cutover) — not started, separate spec later.

## Locked decisions (don't re-litigate)

| Decision | Choice |
|---|---|
| Site focus | Pure School ERP play |
| Design aesthetic | AI-native dark-futuristic |
| Tech stack | Next.js 15 App Router + TypeScript + Tailwind v4 + shadcn/ui |
| AI narrative | Admin-AI positioning (not student-AI like Kaksha) |
| SEO scope | Foundation only in P1; programmatic SEO in P2 |
| Pricing | Contact-for-pricing (status quo) |
| Legal pages | Ship full set in v1 |
| Build scope | Phase 1 = MVP marketing site only (~30 pages) |
| Content authorship | Claude drafts, user reviews |
| Existing assets | All carry over (logos, screenshots, FriensysLogo, EmailJS) |
| Deployment | Deferred to Phase 2 |
| Repo strategy | Approach A — fresh `friensys-next/` subfolder, side-by-side with legacy Vite app |
| MDX tooling | Velite |
| Tailwind version | v4 |

## Phase plan (internal checkpoints)

- **Phase 1A — Foundation** (Tasks 1-10): scaffold, tokens, Velite, content loaders, layout, redirects. *5/10 written.*
- **Phase 1B — UI Atoms** (Tasks 11-20): 10 Friensys atoms + seo components. *Not written.*
- **Phase 1C — Core Marketing Pages** (Tasks 21-26): Home, /school-erp, /pricing, /about, /contact, /security. *Not written.*
- **Phase 1D — Product Surface** (Tasks 27-29): products.json (already in plan), /products index, /products/[slug]. *Not written.*
- **Phase 1E — AI Page** (Task 30). *Not written.*
- **Phase 1F — Content Layer** (Tasks 31-38): customers, blog + 5 posts, careers port. *Not written.*
- **Phase 1G — Legal + Services** (Tasks 39-46): legal/[slug] + 6 legal MDX, /services overview. *Not written.*
- **Phase 1H — SEO & Perf Hardening** (Tasks 47-52). *Not written.*
- **Phase 1I — QA & Docs** (Tasks 53-55). *Not written.*

## Time estimates (recap)

- Human engineer full-time: **3.5-5 weeks** + content cycles → **~6-7 weeks calendar**.
- Claude executing via subagent-driven-development: **~2-4 active session-days** → **1-2 weeks calendar** including user reviews.

## File map (current — what exists)

```
docs/superpowers/
├── specs/
│   └── 2026-05-24-friensys-revamp-design.md      ← approved spec (562 lines)
├── plans/
│   └── 2026-05-24-friensys-revamp-phase-1.md     ← partial plan (Tasks 1-5 only)
└── session-handoff.md                             ← this file
```

## Companion (external) docs

- `D:\Github-sacredabhishek\instinctbits-lab\Friensys_Aseshar\Competitor-Analysis\Competitor-Analysis-Strategic.md`
- `D:\Github-sacredabhishek\instinctbits-lab\Friensys_Aseshar\Competitor-Analysis\Competitor-Analysis-Tactical.md`
- `D:\Github-sacredabhishek\instinctbits-lab\Friensys_Aseshar\Competitor-Analysis\Leadgen-Kaksha.md`
- `D:\Github-sacredabhishek\instinctbits-lab\Friensys_Aseshar\Competitor-Analysis\Leadgen-Parentsalarm.md`

## Open items user owes (before execution)

- Founder bios + photos + LinkedIn URLs for `/about`.
- Final selection of 3-5 case studies + real stats (placeholders in `content/case-studies.json` for now).
- Final selection of 3 testimonials with real attribution + school logos.
- EmailJS production keys (or confirmation existing dev keys are used).
- Analytics decision: GA4 (assumed) vs Plausible / PostHog.
- Final list of 25 school logos (currently in `src/assets/schoolImage/` — engineer migrates in Task 6).
- 40-module list confirmation (current list in `modules.json` inferred from current site + screenshots).

## Next session — exact steps

1. Claude reads this file + the spec + the partial plan.
2. Claude resumes plan-writing from **Task 6** (continues Phase 1A: asset migration + SiteHeader + SiteFooter + MarketingLayout + remaining foundation tasks).
3. Continues through Tasks 7-55 across Phases 1B-1I.
4. Self-review pass on the completed plan.
5. Offers execution choice: subagent-driven-development (recommended) or executing-plans.

## Useful commands for next session

```powershell
# Verify branch
git branch --show-current
# Expected: revamp/competitive-rebuild

# See plan progress
git log --oneline --all -10

# Confirm partial plan
ls docs\superpowers\plans
```

## Recovery if branch lost

```powershell
git checkout revamp/competitive-rebuild
# If branch missing locally but on remote:
git fetch && git checkout -b revamp/competitive-rebuild origin/revamp/competitive-rebuild
```

## Recovery if Claude doesn't follow handoff

Paste this verbatim:

> Read `docs/superpowers/session-handoff.md` first. Then read the spec at `docs/superpowers/specs/2026-05-24-friensys-revamp-design.md` and the partial plan at `docs/superpowers/plans/2026-05-24-friensys-revamp-phase-1.md`. Resume the writing-plans skill from Task 6 onwards.

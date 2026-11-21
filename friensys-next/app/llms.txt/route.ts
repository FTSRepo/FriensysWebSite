import { getProducts, getServices, getIndustries, getFeaturedCases } from "@/lib/content";
import { posts } from "@/.velite";

export const dynamic = "force-static";

export function GET() {
  const products = getProducts();
  const services = getServices();
  const industries = getIndustries();
  const cases = getFeaturedCases();
  const insights = posts.filter((p) => p.published && p.category !== "Education");

  const body = `# Friensys

> Agentic AI, generative AI and custom software development company in India. We design, build and run AI agents, RAG and document AI systems, and MVPs and SaaS products for startups, SMEs and mid-size businesses.

## Services

${services.map((s) => `- [${s.h1 ?? s.name}](https://friensys.com/services/${s.slug}): ${s.short}`).join("\n")}

## Case studies

${cases.map((c) => `- [${c.title}](https://friensys.com/case-studies/${c.slug}): ${c.summary}`).join("\n")}
${insights.length ? `\n## Insights\n\n${insights.map((p) => `- [${p.title}](https://friensys.com${p.url}): ${p.description}`).join("\n")}\n` : ""}
## Company

- Building products since: 2017
- Company incorporated: 2022
- HQ: Greater Noida West, Uttar Pradesh 201305, India
- Leadership: 20+ years of enterprise technology experience
- Products used by: 100+ institutions
- Tech: Cloud-hosted, mobile-first, accessible on any device

## Industries

${industries.map((i) => `- [${i.name}](https://friensys.com/industries/${i.slug}): ${i.short}`).join("\n")}

## Our platforms (built and run by Friensys)

${products.map((p) => `- [${p.name}](https://friensys.com/products/${p.slug}): ${p.tagline}`).join("\n")}

## Key Pages

- [Home](https://friensys.com/)
- [Services](https://friensys.com/services)
- [Case studies](https://friensys.com/case-studies)
- [AI & software engineering insights](https://friensys.com/blog)
- [Our AI approach](https://friensys.com/ai)
- [School ERP](https://friensys.com/school-erp)
- [About](https://friensys.com/about)
- [Contact](https://friensys.com/contact)
- [Security](https://friensys.com/security)
- [Full content index](https://friensys.com/api/llms-full)

## Contact

- Email: info@friensys.com
- Phone: +91 96433 14016
- Free consultation: https://friensys.com/contact?intent=consultation
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

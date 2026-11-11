import { getProducts, getModules, getServices, getIndustries } from "@/lib/content";
import { posts } from "@/.velite";

export const dynamic = "force-static";

export function GET() {
  const products = getProducts();
  const moduleGroups = getModules();
  const services = getServices();
  const industries = getIndustries();
  const blogPosts = [...posts]
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const body = `# Friensys — Full Content Index

## About Friensys

Friensys Info Labs is an AI-first software and consulting partner based in Greater Noida, India. We build AI agents, document AI, knowledge assistants and predictive analytics; develop custom software and MVPs; modernise and support existing systems; and provide technology consulting. Clients are startups, SMEs and mid-size businesses.

Building and deploying products since 2017, incorporated in 2022, and led by founders with 20+ years of enterprise technology experience. Our own products are used by 100+ institutions, ranging from 200 to 3,000+ students.

## Services

${services.map((s) => `### ${s.name}\nURL: https://friensys.com/services/${s.slug}\n${s.short}\nDeliverables: ${s.deliverables.map((d) => d.title).join(", ")}\n`).join("\n")}

## Industries

${industries.map((i) => `- [${i.name}](https://friensys.com/industries/${i.slug}): ${i.short}`).join("\n")}

## Products

${products
  .map(
    (p) => `### ${p.name}
Slug: ${p.slug}
Tagline: ${p.tagline}
Summary: ${p.summary}
Features: ${p.features.join(", ")}
`
  )
  .join("\n")}

## Module Groups

${moduleGroups.map((g) => `### ${g.name}\n${g.modules.map((m) => `- ${m}`).join("\n")}`).join("\n\n")}

## Blog Posts

${blogPosts
  .map(
    (p) => `### ${p.title}
URL: https://friensys.com/blog/${p.slug}
Published: ${p.date}
Tags: ${p.tags.join(", ")}
Summary: ${p.description}
`
  )
  .join("\n")}

## Contact & Demo

Email: info@friensys.com
Free consultation: https://friensys.com/contact?intent=consultation
Phone: +91 96433 14016
Security docs: https://friensys.com/security
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

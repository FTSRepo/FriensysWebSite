import { getProducts, getServices, getIndustries } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const products = getProducts();
  const services = getServices();
  const industries = getIndustries();

  const body = `# Friensys

> AI-first software and consulting partner for startups, SMEs and mid-size businesses: AI & ML solutions, custom software and MVPs, modernisation and support, technology consulting — plus our own products used by 100+ institutions.

## Company

- Building products since: 2017
- Company incorporated: 2022
- HQ: J-804, Sector-1, Techzone-IV, Greater Noida West, Uttar Pradesh 201305, India
- Leadership: 20+ years of enterprise technology experience
- Products used by: 100+ institutions
- Tech: Cloud-hosted, mobile-first, accessible on any device

## Services

${services.map((s) => `- [${s.name}](https://friensys.com/services/${s.slug}): ${s.short}`).join("\n")}

## Industries

${industries.map((i) => `- [${i.name}](https://friensys.com/industries/${i.slug}): ${i.short}`).join("\n")}

## Products

${products.map((p) => `- [${p.name}](https://friensys.com/products/${p.slug}): ${p.tagline}`).join("\n")}

## Key Pages

- [Home](https://friensys.com/)
- [School ERP](https://friensys.com/school-erp)
- [Case studies](https://friensys.com/case-studies)
- [Our AI approach](https://friensys.com/ai)
- [About](https://friensys.com/about)
- [Contact](https://friensys.com/contact)
- [Security](https://friensys.com/security)
- [Blog](https://friensys.com/blog)
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

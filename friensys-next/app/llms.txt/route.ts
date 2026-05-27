import { getProducts } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const products = getProducts();

  const body = `# Friensys

> Cloud-based school management ERP for Indian schools. Modules for fees, attendance, academics, timetable, library, and parent communication. DPDPA-aligned. AI-ready.

## Company

- Founded: 2017
- HQ: Greater Noida, Uttar Pradesh, India
- Customers: 300+ schools
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
- [Full content index](https://friensys.com/api/llms-full)

## Contact

- Email: info@friensys.com
- Demo: https://friensys.com/contact?intent=demo
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

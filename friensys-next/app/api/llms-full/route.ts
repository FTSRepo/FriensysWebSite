import { getProducts, getModules } from "@/lib/content";
import { posts } from "@/.velite";

export const dynamic = "force-static";

export function GET() {
  const products = getProducts();
  const moduleGroups = getModules();
  const blogPosts = [...posts]
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const body = `# Friensys — Full Content Index

## About Friensys

Friensys is a cloud-based School ERP (Enterprise Resource Planning) platform designed for Indian K-12 schools. It provides an integrated suite of modules for managing all aspects of school administration: fee collection, attendance tracking, academic records, timetable scheduling, library management, and parent communication.

Founded in 2017, Friensys serves 300+ schools ranging from 200 to 3,000+ students. The platform is DPDPA-compliant and supports access from desktop, tablet, and mobile devices.

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
Demo request: https://friensys.com/contact?intent=demo
Security docs: https://friensys.com/security
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

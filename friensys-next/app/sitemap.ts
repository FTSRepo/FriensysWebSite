import type { MetadataRoute } from "next";
import { getProducts, getServices, getIndustries, getFeaturedCases } from "@/lib/content";
import { posts } from "@/.velite";

export const dynamic = "force-static";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://friensys.com";

// Google ignores changefreq/priority. lastModified only where a real date exists (blog posts):
// a build-time date on every page teaches Google to distrust lastmod.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/` },
    { url: `${BASE_URL}/services` },
    { url: `${BASE_URL}/case-studies` },
    { url: `${BASE_URL}/blog` },
    { url: `${BASE_URL}/ai` },
    { url: `${BASE_URL}/industries` },
    { url: `${BASE_URL}/about` },
    { url: `${BASE_URL}/contact` },
    { url: `${BASE_URL}/products` },
    { url: `${BASE_URL}/school-erp` },
    { url: `${BASE_URL}/pricing` },
    { url: `${BASE_URL}/security` },
    { url: `${BASE_URL}/careers` },
  ];

  const productRoutes: MetadataRoute.Sitemap = getProducts().map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
  }));

  const detailRoutes: MetadataRoute.Sitemap = [
    ...getServices().map((s) => `/services/${s.slug}`),
    ...getIndustries().map((i) => `/industries/${i.slug}`),
    ...getFeaturedCases().map((c) => `/case-studies/${c.slug}`),
  ].map((path) => ({ url: `${BASE_URL}${path}` }));

  const blogRoutes: MetadataRoute.Sitemap = posts
    .filter((p) => p.published)
    .map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.updated ?? p.date),
    }));

  return [...staticRoutes, ...detailRoutes, ...blogRoutes, ...productRoutes];
}

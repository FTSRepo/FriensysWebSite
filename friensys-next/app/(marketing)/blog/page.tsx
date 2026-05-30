import { posts } from "@/.velite";
import { buildMetadata } from "@/lib/seo";
import { BlogCard } from "@/components/marketing/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Blog — Friensys School Management Insights",
  description:
    "Practical guides on school ERP implementation, fees automation, DPDPA compliance, and AI for school administrators.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...posts]
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-display text-4xl font-semibold text-text-primary md:text-5xl">
              School management insights
            </h1>
            <p className="mx-auto max-w-xl text-lg text-text-secondary">
              Practical guides for school administrators — no vendor fluff.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { posts } from "@/.velite";
import { buildMetadata } from "@/lib/seo";
import { BlogCard } from "@/components/marketing/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "AI & Software Engineering Insights",
  description:
    "Practical guides on agentic AI, generative AI, custom software and MVP development from the Friensys engineering team, plus our education archive.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...posts]
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  // AI and software first; the school archive sits last under "Education".
  const categories = [...new Set(sorted.map((p) => p.category))].sort(
    (a, b) => Number(a === "Education") - Number(b === "Education"),
  );

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
            <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
              AI &amp; software engineering insights
            </h1>
            <p className="mx-auto max-w-xl text-lg text-text-secondary">
              How we design, build and run AI agents and custom software in production.
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="mb-6 text-2xl font-bold text-text-primary">{category}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sorted
                  .filter((p) => p.category === category)
                  .map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

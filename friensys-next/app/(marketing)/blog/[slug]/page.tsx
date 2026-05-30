import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/.velite";
import { MDXRemote } from "next-mdx-remote/rsc";
import { buildMetadata } from "@/lib/seo";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { AuroraButton } from "@/components/ui/AuroraButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.filter((p) => p.published).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    ogImage: post.ogImage,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug && p.published);
  if (!post) notFound();

  const publishDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.description,
          url: `/blog/${post.slug}`,
          datePublished: post.date,
          author: post.author,
          image: post.ogImage,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />

      <article className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg-elevated px-3 py-1 text-xs font-medium text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mb-4 font-display text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
              {post.title}
            </h1>
            <p className="mb-6 text-lg text-text-secondary">{post.description}</p>
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <span>{post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{publishDate}</time>
            </div>
          </header>

          <div className="prose prose-sm sm:prose-base max-w-none prose-headings:font-display prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary prose-strong:text-text-primary prose-li:text-text-secondary prose-code:text-text-primary prose-blockquote:border-accent-primary prose-blockquote:text-text-secondary">
            <MDXRemote source={post.content} />
          </div>

          <div className="mt-16 rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-8 text-center">
            <p className="mb-4 font-semibold text-text-primary">Ready to see Friensys in action?</p>
            <p className="mb-6 text-sm text-text-secondary">
              Book a personalised demo for your school — no sales pressure, just a look at the platform.
            </p>
            <AuroraButton href="/contact?intent=demo">Request a demo</AuroraButton>
          </div>
        </div>
      </article>
    </>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/.velite";
import { MDXRemote } from "next-mdx-remote/rsc";
import { buildMetadata } from "@/lib/seo";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { getService } from "@/lib/content";

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

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const publishDate = fmt(post.date);
  // End-of-article CTA: the related service page, else the education industry page.
  const service = post.service ? getService(post.service) : undefined;

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.description,
          url: `/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.updated,
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
            <h1 className="mb-4 text-3xl font-bold leading-tight text-text-primary md:text-4xl">
              {post.title}
            </h1>
            <p className="mb-6 text-lg text-text-secondary">{post.description}</p>
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <span>{post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{publishDate}</time>
              {post.updated && (
                <>
                  <span>·</span>
                  <span>
                    Last updated <time dateTime={post.updated}>{fmt(post.updated)}</time>
                  </span>
                </>
              )}
            </div>
          </header>

          <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary prose-strong:text-text-primary prose-li:text-text-secondary prose-code:text-accent-cyan prose-blockquote:border-accent-primary prose-blockquote:text-text-secondary">
            <MDXRemote source={post.content} />
          </div>

          <div className="mt-16 rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-8 text-center">
            {service ? (
              <>
                <p className="mb-4 font-semibold text-text-primary">Planning something similar?</p>
                <p className="mb-6 text-sm text-text-secondary">{service.short}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <AuroraButton href={`/services/${service.slug}`}>
                    {service.h1 ?? service.name}
                  </AuroraButton>
                  <AuroraButton href={`/contact?intent=${service.slug}`} variant="outline">
                    Book a free consultation
                  </AuroraButton>
                </div>
              </>
            ) : (
              <>
                <p className="mb-4 font-semibold text-text-primary">Running a school or college?</p>
                <p className="mb-6 text-sm text-text-secondary">
                  See how we build software and AI for education, or book a demo of the platform.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <AuroraButton href="/industries/education">Software for education</AuroraButton>
                  <AuroraButton href="/contact?intent=demo" variant="outline">
                    Request a demo
                  </AuroraButton>
                </div>
              </>
            )}
          </div>
        </div>
      </article>
    </>
  );
}

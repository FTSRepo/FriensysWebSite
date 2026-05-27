import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { legal } from "@/.velite";
import { MDXRemote } from "next-mdx-remote/rsc";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legal.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = legal.find((d) => d.slug === slug);
  if (!doc) return {};
  return buildMetadata({
    title: doc.title,
    description: doc.description,
    path: `/legal/${slug}`,
    noIndex: true,
  });
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const doc = legal.find((d) => d.slug === slug);
  if (!doc) notFound();

  const updatedDate = new Date(doc.updated).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Legal", url: "/legal" },
          { name: doc.title, url: `/legal/${doc.slug}` },
        ])}
      />

      <article className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">
              Legal
            </p>
            <h1 className="mb-3 text-3xl font-bold text-text-primary md:text-4xl">{doc.title}</h1>
            <p className="text-sm text-text-muted">Last updated: {updatedDate}</p>
          </header>

          <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary prose-strong:text-text-primary prose-li:text-text-secondary prose-code:text-accent-cyan prose-blockquote:border-accent-primary prose-blockquote:text-text-secondary prose-table:text-text-secondary prose-th:text-text-primary">
            <MDXRemote source={doc.content} />
          </div>
        </div>
      </article>
    </>
  );
}

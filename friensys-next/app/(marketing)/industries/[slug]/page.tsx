import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getIndustries, getIndustry } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { DetailPage } from "@/components/sections/detail/DetailPage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getIndustries().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: `Software & AI for ${industry.name}`,
    description: industry.short,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <DetailPage page={industry} section={{ label: "Industries", href: "/industries" }} />;
}

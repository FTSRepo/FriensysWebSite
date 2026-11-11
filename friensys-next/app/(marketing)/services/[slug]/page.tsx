import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServices, getService } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { DetailPage } from "@/components/sections/detail/DetailPage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.name,
    description: service.short,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <DetailPage page={service} section={{ label: "Services", href: "/services" }} />;
}

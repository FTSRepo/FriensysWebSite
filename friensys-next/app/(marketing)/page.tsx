import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeSchemas } from "@/components/seo/HomeSchemas";
import { Hero } from "@/components/sections/home/Hero";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { WhyFriensys } from "@/components/sections/home/WhyFriensys";
import { ProductBento } from "@/components/sections/home/ProductBento";
import { AITeaser } from "@/components/sections/home/AITeaser";
import { StatsCounter } from "@/components/sections/home/StatsCounter";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/sections/shared/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "School ERP & Management Software for Indian Schools",
  description:
    "Friensys School ERP unifies admissions, academics, fees, payroll, and AI-powered insights on one platform. Trusted by 500+ schools across India.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeSchemas />
      <Hero />
      <TrustStrip />
      <WhyFriensys />
      <ProductBento />
      <AITeaser />
      <StatsCounter />
      <Testimonials />
      <CTASection />
    </>
  );
}

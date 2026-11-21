import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeSchemas } from "@/components/seo/HomeSchemas";
import { Hero } from "@/components/sections/home/Hero";
import { WhoWeHelp } from "@/components/sections/home/WhoWeHelp";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { HowWeWork } from "@/components/sections/home/HowWeWork";
import { IndustriesGrid } from "@/components/sections/home/IndustriesGrid";
import { ProductBento } from "@/components/sections/home/ProductBento";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { WhyFriensys } from "@/components/sections/home/WhyFriensys";
import { Leadership } from "@/components/sections/home/Leadership";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/sections/shared/CTASection";
import { AgenticShowcase } from "@/components/sections/home/AgenticShowcase";
import { CaseStudies } from "@/components/sections/home/CaseStudies";

export const metadata: Metadata = buildMetadata({
  title: "AI & Custom Software Development Company in India",
  description:
    "Agentic AI, generative AI and custom software development company in India. We build AI agents and MVPs that run in production. Book a free consultation.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeSchemas />
      <Hero />
      <WhoWeHelp />
      <ServicesGrid />
      <AgenticShowcase />
      <HowWeWork />
      <IndustriesGrid />
      <ProductBento />
      <TrustStrip />
      <WhyFriensys />
      <CaseStudies />
      <Leadership />
      <Testimonials />
      <CTASection />
    </>
  );
}

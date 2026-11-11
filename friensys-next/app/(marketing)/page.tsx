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
  title: "AI-First Software Development & Consulting Partner",
  description:
    "Friensys architects and builds agentic AI, custom software and MVPs, modernises existing systems and runs its own products used by 300+ institutions. For startups, SMEs and mid-size businesses — led by founders with 20+ years of experience.",
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

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

export const metadata: Metadata = buildMetadata({
  title: "AI-First Software Development & Consulting Partner",
  description:
    "Friensys builds AI agents, custom software and MVPs, modernises existing systems and runs its own products used by 300+ institutions. For startups, SMEs and mid-size businesses — led by engineers with 20+ years of experience.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeSchemas />
      <Hero />
      <WhoWeHelp />
      <ServicesGrid />
      <HowWeWork />
      <IndustriesGrid />
      <ProductBento />
      <TrustStrip />
      <WhyFriensys />
      <Leadership />
      <Testimonials />
      <CTASection />
    </>
  );
}

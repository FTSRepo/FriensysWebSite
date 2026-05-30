import { AuroraButton } from "@/components/ui/AuroraButton";
import { ProductFrame } from "@/components/ui/ProductFrame";
import { TerminalStat } from "@/components/ui/TerminalStat";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ErpHero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1.15fr] lg:items-center">
          <div>
            <Eyebrow className="mb-5">School ERP</Eyebrow>
            <h1 className="font-display text-[clamp(40px,5.2vw,64px)] font-semibold leading-[1.02] tracking-[-0.02em] text-text-primary">
              School ERP for principals who care about{" "}
              <em className="not-italic text-accent-primary">cash flow.</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              40+ modules. 300+ schools live. CBSE, ICSE, and State Board.
              From admission to graduation — fees, attendance, report cards,
              parent communication, transport, library, and HR under one roof.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <TerminalStat value="> 300" label="schools" />
              <TerminalStat value="> 40" label="modules" />
              <TerminalStat value="> 8 years" label="in production" />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <AuroraButton href="/contact?intent=school-erp" size="lg">
                Book a demo
              </AuroraButton>
              <AuroraButton href="/pricing" variant="outline" size="lg">
                See pricing
              </AuroraButton>
            </div>
          </div>
          <ProductFrame
            src="/screenshots/school-erp.png"
            alt="Friensys School ERP dashboard showing fee collection overview"
          />
        </div>
      </div>
    </section>
  );
}

import { AuroraButton } from "@/components/ui/AuroraButton";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { TerminalStat } from "@/components/ui/TerminalStat";
import { Badge } from "@/components/ui/Badge";

export function ErpHero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="dpdpa" className="mb-4">School ERP</Badge>
            <h1 className="text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
              School ERP for principals who care about{" "}
              <span className="text-accent-primary">cash flow.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              40+ modules. 300+ schools live. CBSE, ICSE, and State Board.
              From admission to graduation — fees, attendance, report cards,
              parent communication, transport, library, and HR under one roof.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
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
          <BrowserFrame
            src="/screenshots/school-erp.png"
            alt="Friensys School ERP dashboard showing fee collection overview"
          />
        </div>
      </div>
    </section>
  );
}

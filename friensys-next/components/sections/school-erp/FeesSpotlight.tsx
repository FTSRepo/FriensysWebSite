import { ProductFrame } from "@/components/ui/ProductFrame";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DynIcon } from "@/components/ui/DynIcon";

const feeFeatures = [
  "Multi-head fee structures with custom due dates",
  "Partial payments, waivers, and sibling discounts",
  "Daily collection report at 9 AM — auto-generated",
  "Online payment gateway + UPI + cash receipt",
  "Late-fee automation with configurable rules",
  "Audit trail on every deletion and adjustment",
];

export function FeesSpotlight() {
  return (
    <section id="fees" className="bg-bg-elevated py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1.05fr] lg:items-center">
          <ProductFrame
            src="/screenshots/collection-report.png"
            alt="Daily fee collection report in Friensys"
          />
          <div>
            <Eyebrow className="mb-5">Fees &amp; Accounts</Eyebrow>
            <h2 className="font-display text-[34px] font-semibold leading-[1.08] tracking-[-0.015em] text-text-primary md:text-[40px]">
              Your daily collection report, ready before you{" "}
              <em className="not-italic text-accent-primary">sit down.</em>
            </h2>
            <ul className="mt-8 space-y-3">
              {feeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <DynIcon name="CheckCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-primary" />
                  <span className="text-sm text-text-secondary">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

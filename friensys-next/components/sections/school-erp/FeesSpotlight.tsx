import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

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
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <BrowserFrame
            src="/screenshots/collection-report.png"
            alt="Daily fee collection report in Friensys"
          />
          <div>
            <SectionHeading
              label="Fees & Accounts"
              title="Your daily collection report, ready before you sit down."
              align="left"
              className="mb-8"
            />
            <ul className="space-y-3">
              {feeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-lime" />
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

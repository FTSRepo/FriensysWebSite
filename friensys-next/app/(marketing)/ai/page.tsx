import { buildMetadata } from "@/lib/seo";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { CTASection } from "@/components/sections/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import {
  Brain,
  TrendingUp,
  Bell,
  FileText,
  Calendar,
  MessageSquare,
  BarChart3,
  Shield,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Our AI Approach — Practical, Measured, Responsible",
  description:
    "How Friensys builds AI: one measured pilot at a time, human review on what matters, your data stays yours. Plus the AI roadmap for each of our products.",
  path: "/ai",
});

const features = [
  {
    icon: TrendingUp,
    title: "Fee Default Prediction",
    body: "Identify likely defaulters 3–4 weeks before month-end using payment history and seasonal patterns. Surface the list to your admin team before the cycle begins.",
  },
  {
    icon: Bell,
    title: "Smart Attendance Alerts",
    body: "Detect anomalous absence streaks and flag students at risk — before they cross the threshold that triggers board notifications.",
  },
  {
    icon: FileText,
    title: "AI Report Card Narratives",
    body: "Auto-draft personalised performance summaries from grade data. Teachers review and sign off — no blank page.",
  },
  {
    icon: Calendar,
    title: "Timetable Optimiser",
    body: "Resolve conflicts and optimise room utilisation across 40+ subjects and 60+ teachers. What currently takes a week takes an afternoon.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Queries",
    body: 'Ask in plain Hindi or English: "How many students were absent last week in Grade 8?" — get an instant answer, no reports to run.',
  },
  {
    icon: BarChart3,
    title: "Predictive Enrollment Analytics",
    body: "Model next-year enrollment from application trends, sibling data, and catchment area signals. Plan staffing 6 months ahead.",
  },
  {
    icon: Brain,
    title: "Exam Performance Insights",
    body: "Identify which topics or teachers correlate with under-performance across cohorts — surface insights the marksheet alone cannot show.",
  },
  {
    icon: Shield,
    title: "Finance Anomaly Detection",
    body: "Flag unusual patterns in concession grants, discount clusters, and late-fee waivers before the audit cycle.",
  },
];

const principles = [
  { title: "One problem, one pilot", body: "Fixed scope, measured against a real KPI. We scale only after you see the result." },
  { title: "A human approves what matters", body: "Anything sent to customers, or that affects money or admissions, is reviewed by a person." },
  { title: "Your data stays yours", body: "Demos use test or consented data. Student and personal data is handled under India's DPDP Act." },
  { title: "Cost tracked from day one", body: "We measure LLM cost per transaction in every pilot, so the feature stays profitable to run." },
  { title: "We call it AI only if it is", body: "Rule-based logic is labelled as automation. We publish only measured results." },
];

const productAi = [
  { product: "School ERP + Mobile App", today: "Admissions, fees, exams, attendance, homework and parent communication in one platform.", next: "AI report-card remarks; fee-default early warning; parent query assistant." },
  { product: "Education CRM", today: "Admission leads from JustDial, Sulekha, Shiksha, CollegeDunia and your website.", next: "ML lead scoring; AI counsellor follow-up drafts." },
  { product: "Escalation System", today: "Multi-level ticket routing with SLA tracking.", next: "AI ticket classification, priority prediction, suggested replies." },
  { product: "Customer Loyalty", today: "Points, tiers, coupons and campaigns with analytics.", next: "Churn prediction; personalised offers from purchase behaviour." },
  { product: "Procurement Marketplace", today: "Procurement of bought-out parts for manufacturers.", next: "AI quote comparison; PO and invoice extraction; demand forecasting." },
  { product: "OD-SAS", today: "Monitoring of device behaviour under controlled environmental test conditions.", next: "Anomaly detection on test runs; automated test-report summaries." },
];

const faqs = [
  {
    q: "Is Friensys AI available today?",
    a: "Not yet. These features are on our active roadmap. We're building on top of operational data already flowing through Friensys ERP — no new integrations required when they ship.",
  },
  {
    q: "Will AI features cost extra?",
    a: "We haven't finalised pricing. For schools onboarding now, we plan to include foundational AI features in the standard tier. Contact us to discuss early-access terms.",
  },
  {
    q: "Does AI access student personal data?",
    a: "No AI feature will process individually identifiable student data without explicit consent controls. All models will operate on aggregated or anonymised data by default.",
  },
  {
    q: "How is this different from Kaksha or other ed-tech AI?",
    a: "Competitor AI targets the student experience — adaptive learning, doubt resolution. Friensys AI targets the admin layer: forecasting, compliance, operational efficiency. Different buyer, different problem.",
  },
];

export default function AIPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "AI", url: "/ai" },
        ])}
      />
      <JsonLd data={buildFAQSchema(faqs)} />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-1.5 text-sm font-medium text-accent-primary">
            <Brain className="h-4 w-4" />
            Our AI approach
          </div>
          <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-6xl">
            AI that works inside your business
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary">
            Non-technical buyers don&apos;t buy &ldquo;LLMs&rdquo;. They buy more admissions, fewer
            late fees, faster procurement and fewer failed batches. We add AI to the software you
            already depend on — one measured pilot at a time.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <AuroraButton href="/contact?intent=consultation">
              Book an AI Opportunity Audit
            </AuroraButton>
            <AuroraButton href="/services/ai-solutions" variant="outline">
              AI &amp; ML services
            </AuroraButton>
          </div>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-bg-elevated py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-accent-primary">
            Responsible AI
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
            Five rules every AI project follows
          </h2>
          <ol className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <li key={p.title} className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-base p-6">
                <span className="text-sm font-semibold text-accent-primary">0{i + 1}</span>
                <h3 className="mt-1 font-semibold text-text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-primary">
            AI in our products
          </p>
          <h2 className="text-3xl font-bold text-text-primary">What each product gets next</h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            Upgrades on our roadmap, built on the data our products already handle. We label a
            feature as live only when it runs in a real build.
          </p>
          <div className="mt-10 overflow-x-auto rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-border-subtle bg-bg-overlay text-text-primary">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Product</th>
                  <th scope="col" className="px-5 py-3 font-semibold">What it does today</th>
                  <th scope="col" className="px-5 py-3 font-semibold">On our AI roadmap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {productAi.map((r) => (
                  <tr key={r.product}>
                    <th scope="row" className="px-5 py-4 font-semibold text-text-primary">{r.product}</th>
                    <td className="px-5 py-4 text-text-secondary">{r.today}</td>
                    <td className="px-5 py-4 text-text-secondary">{r.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-bg-elevated py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-accent-primary">
            For schools
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
            Admin-AI for School ERP: eight capabilities in development
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="relative rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-6"
              >
                <span className="absolute right-4 top-4 rounded-full bg-bg-overlay px-2 py-0.5 text-[10px] font-medium text-text-muted">
                  Coming soon
                </span>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-bg-overlay text-accent-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-text-primary">Questions</h2>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold text-text-primary">{q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-text-secondary">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Not sure where AI fits yet?"
        subtitle="The AI Opportunity Audit names your top three use cases, their expected impact, cost and the data each needs — in writing."
        primaryLabel="Book an AI Opportunity Audit"
      />
    </>
  );
}

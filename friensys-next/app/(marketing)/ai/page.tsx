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
  title: "AI for School Administration — Friensys",
  description:
    "Friensys is building AI into the admin layer of school management — fee predictions, attendance anomalies, and intelligent reporting. Roadmap preview.",
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
            Roadmap preview
          </div>
          <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-6xl">
            AI that works for{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-cyan bg-clip-text text-transparent">
              school administrators
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary">
            Not student-facing AI. Not chatbots. Operational intelligence built into the admin
            layer — surfacing insights your team needs before they know to ask.
          </p>
          <AuroraButton href="/contact?intent=ai-early-access">
            Join the early-access list
          </AuroraButton>
        </div>
      </section>

      <section className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-accent-primary">
            Roadmap
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
            Eight capabilities in development
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
        title="Get notified when AI features ship"
        subtitle="Schools on our early-access list get first access and input on feature priorities."
        primaryLabel="Join early access"
        primaryHref="/contact?intent=ai-early-access"
        secondaryLabel="View the ERP today"
        secondaryHref="/school-erp"
      />
    </>
  );
}

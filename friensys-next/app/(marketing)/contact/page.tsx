import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Friensys — Book a Demo",
  description:
    "Book a free 30-minute School ERP demo or get a pricing quote. We respond within 24 hours. Call, email, or fill the form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="inline-flex rounded-full border border-accent-primary/20 bg-accent-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-glow mb-4">
                Contact
              </span>
              <h1 className="text-4xl font-bold text-text-primary sm:text-5xl leading-tight">
                Talk to Friensys.
              </h1>
              <p className="mt-4 text-lg text-text-secondary">
                Book a demo, get a quote, or just ask a question. We respond within 24 hours on business days.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: site.contact.phone,
                    href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: site.contact.email,
                    href: `mailto:${site.contact.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: `${site.address.locality}, ${site.address.region}`,
                    href: undefined,
                  },
                  { icon: Clock, label: "Hours", value: site.contact.hours, href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-bg-overlay text-accent-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-text-primary hover:text-accent-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-text-primary">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated p-8">
              <h2 className="mb-6 text-xl font-semibold text-text-primary">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { sendContactEmail } from "@/lib/emailjs";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  schoolName: z.string().min(2, "School name is required"),
  intent: z.enum(["demo", "pricing", "support", "partnership", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  defaultIntent?: FormData["intent"];
}

export function ContactForm({ defaultIntent = "demo" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { intent: defaultIntent },
  });

  async function onSubmit(data: FormData) {
    setStatus("sending");
    try {
      await sendContactEmail({
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        school_name: data.schoolName,
        intent: data.intent,
        message: data.message,
      });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-6 text-center">
        <p className="font-semibold text-text-primary">Message sent!</p>
        <p className="mt-2 text-sm text-text-secondary">
          We&apos;ll get back to you within 24 hours on business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">
            Your name *
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full rounded-[var(--radius-md)] border border-border-subtle bg-bg-overlay px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus-visible:border-accent-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary"
            placeholder="Rakesh Kumar"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-danger" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
            Work email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-[var(--radius-md)] border border-border-subtle bg-bg-overlay px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus-visible:border-accent-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary"
            placeholder="principal@yourschool.in"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-danger" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-text-secondary mb-1.5">
            School name *
          </label>
          <input
            id="school"
            {...register("schoolName")}
            className="w-full rounded-[var(--radius-md)] border border-border-subtle bg-bg-overlay px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus-visible:border-accent-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary"
            placeholder="Delhi Public School"
          />
          {errors.schoolName && (
            <p className="mt-1 text-xs text-danger" role="alert">
              {errors.schoolName.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full rounded-[var(--radius-md)] border border-border-subtle bg-bg-overlay px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus-visible:border-accent-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary"
            placeholder="+91 99716 73592"
          />
        </div>
      </div>

      <div>
        <label htmlFor="intent" className="block text-sm font-medium text-text-secondary mb-1.5">
          How can we help?
        </label>
        <select
          id="intent"
          {...register("intent")}
          className="w-full rounded-[var(--radius-md)] border border-border-subtle bg-bg-overlay px-4 py-2.5 text-sm text-text-primary focus-visible:border-accent-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary"
        >
          <option value="demo">Book a product demo</option>
          <option value="pricing">Get a pricing quote</option>
          <option value="support">Technical support</option>
          <option value="partnership">Partnership enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full rounded-[var(--radius-md)] border border-border-subtle bg-bg-overlay px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus-visible:border-accent-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary resize-none"
          placeholder="Tell us about your school — board, student count, what you need most."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-danger" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-danger" role="alert">
          Failed to send. Email us directly at{" "}
          <a href={`mailto:${site.contact.email}`} className="underline">
            {site.contact.email}
          </a>
          .
        </p>
      )}

      <AuroraButton
        type="submit"
        disabled={status === "sending"}
        className="w-full justify-center"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </AuroraButton>
    </form>
  );
}

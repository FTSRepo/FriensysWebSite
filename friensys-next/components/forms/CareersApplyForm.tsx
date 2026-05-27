"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendApplyEmail } from "@/lib/emailjs";
import { AuroraButton } from "@/components/ui/AuroraButton";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "10-digit Indian mobile number"),
  position: z.string().min(2, "Position required"),
  linkedin: z.string().url("Valid LinkedIn URL required").or(z.literal("")),
  message: z.string().min(30, "Tell us a bit more — at least 30 characters"),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-[var(--radius-sm)] border border-border-subtle bg-bg-elevated px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none";

export function CareersApplyForm({ defaultPosition = "" }: { defaultPosition?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { position: defaultPosition },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      await sendApplyEmail(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-8 text-center">
        <p className="text-lg font-semibold text-text-primary">Application received!</p>
        <p className="mt-2 text-sm text-text-secondary">
          We read every application. If there&apos;s a fit, we&apos;ll reach out within two weeks.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Full name</label>
          <input {...register("name")} className={inputClass} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-xs text-danger">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Email</label>
          <input
            {...register("email")}
            type="email"
            className={inputClass}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-danger">{errors.email.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">Phone</label>
          <input
            {...register("phone")}
            type="tel"
            className={inputClass}
            placeholder="9876543210"
          />
          {errors.phone && <p className="mt-1 text-xs text-danger">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">
            Position applying for
          </label>
          <input
            {...register("position")}
            className={inputClass}
            placeholder="e.g. Full Stack Developer"
          />
          {errors.position && (
            <p className="mt-1 text-xs text-danger">{errors.position.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-text-primary">
          LinkedIn profile <span className="text-text-muted">(optional)</span>
        </label>
        <input
          {...register("linkedin")}
          type="url"
          className={inputClass}
          placeholder="https://linkedin.com/in/yourhandle"
        />
        {errors.linkedin && (
          <p className="mt-1 text-xs text-danger">{errors.linkedin.message}</p>
        )}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-text-primary">Why Friensys?</label>
        <textarea
          {...register("message")}
          rows={4}
          className={inputClass}
          placeholder="Tell us what excites you about this role and what you'd bring to the team."
        />
        {errors.message && <p className="mt-1 text-xs text-danger">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-danger">
          Something went wrong.{" "}
          <a
            href="mailto:careers@friensys.com?subject=Job+Application"
            className="underline"
          >
            Email us instead
          </a>
        </p>
      )}

      <AuroraButton
        type="submit"
        disabled={status === "sending"}
        className="w-full justify-center"
      >
        {status === "sending" ? "Sending…" : "Submit application"}
      </AuroraButton>
    </form>
  );
}

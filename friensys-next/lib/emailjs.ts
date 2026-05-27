import emailjs from "@emailjs/browser";

interface ContactEmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  school_name?: string;
  intent?: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
    data as unknown as Record<string, unknown>,
    { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
  );
}

interface DemoEmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  school_name?: string;
  student_count?: string;
  board?: string;
  preferred_date?: string;
}

export async function sendDemoEmail(data: DemoEmailData): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID!,
    data as unknown as Record<string, unknown>,
    { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
  );
}

export interface ApplyEmailData {
  name: string;
  email: string;
  phone: string;
  position: string;
  linkedin: string;
  message: string;
}

export async function sendApplyEmail(data: ApplyEmailData): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID!,
    data as unknown as Record<string, unknown>,
    { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
  );
}

import emailjs from "@emailjs/browser";

// EmailJS IDs are public by design (they ship in the browser bundle).
// Defaults are the account the legacy site uses; env vars override them.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_w2g3hac";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "nYysKLXX916tXkFee";
const CONTACT_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "template_oo2wo5f";
const DEMO_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID || CONTACT_TEMPLATE;
const APPLY_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID || CONTACT_TEMPLATE;

interface ContactEmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  school_name?: string;
  intent?: string;
  location?: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  await emailjs.send(
    SERVICE_ID,
    CONTACT_TEMPLATE,
    data as unknown as Record<string, unknown>,
    { publicKey: PUBLIC_KEY }
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
    SERVICE_ID,
    DEMO_TEMPLATE,
    data as unknown as Record<string, unknown>,
    { publicKey: PUBLIC_KEY }
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
    SERVICE_ID,
    APPLY_TEMPLATE,
    data as unknown as Record<string, unknown>,
    { publicKey: PUBLIC_KEY }
  );
}

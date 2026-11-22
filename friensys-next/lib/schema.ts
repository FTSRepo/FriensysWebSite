import { site } from "./site";
import teamJson from "@/content/team.json";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    logo: `${site.url}/brand/friensys-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    sameAs: [
      site.social.linkedin,
      site.profiles.clutch,
      site.profiles.goodfirms,
      site.profiles.designrush,
      site.profiles.googleBusiness,
    ].filter(Boolean),
    foundingDate: "2017",
    founder: teamJson.team.map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role })),
    areaServed: "IN",
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    url: site.url,
    description: site.description,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    areaServed: "IN",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Custom Software Development",
      "MVP Development",
      "Legacy Modernisation",
      "Cloud Migration",
      "IT Consulting",
    ],
  };
}

export function buildServiceSchema(args: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    serviceType: args.name,
    description: args.description,
    url: `${site.url}${args.url}`,
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: site.legalName,
    url: site.url,
  };
}

const abs = (path?: string) => (path && path.startsWith("/") ? `${site.url}${path}` : path);

/** No public price, so no Offer: an Offer without a price is a Search Console error. */
export function buildProductSchema(args: { name: string; description: string; url: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: args.name,
    description: args.description,
    url: `${site.url}${args.url}`,
    image: abs(args.image),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
  };
}

/** Team members become a Person with their LinkedIn; anything else is credited to the company. */
function buildAuthor(name?: string) {
  const member = teamJson.team.find((m) => m.name === name);
  if (member) return { "@type": "Person", name: member.name, jobTitle: member.role, url: member.linkedin };
  return { "@type": "Organization", name: site.legalName, url: site.url };
}

export function buildArticleSchema(args: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    url: `${site.url}${args.url}`,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: buildAuthor(args.author),
    publisher: { "@type": "Organization", name: site.name, logo: `${site.url}/brand/friensys-logo.png` },
    image: abs(args.image ?? "/og-default.png"),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${args.url}` },
  };
}

export function buildFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    openingHours: "Mo-Fr 09:30-18:30",
    priceRange: "$$",
  };
}

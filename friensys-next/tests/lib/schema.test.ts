import { describe, it, expect } from "vitest";
import {
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildFAQSchema,
  buildOrganizationSchema,
  buildProductSchema,
} from "@/lib/schema";
import { site } from "@/lib/site";

describe("buildBreadcrumbSchema", () => {
  it("produces correct @type", () => {
    const schema = buildBreadcrumbSchema([{ name: "Home", url: "/" }]);
    expect(schema["@type"]).toBe("BreadcrumbList");
  });

  it("maps items with position and absolute URL", () => {
    const schema = buildBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
    ]);
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0].position).toBe(1);
    expect(schema.itemListElement[1].item).toBe(`${site.url}/blog`);
  });
});

describe("buildArticleSchema", () => {
  it("sets headline and datePublished", () => {
    const schema = buildArticleSchema({
      title: "Test Article",
      description: "desc",
      url: "/blog/test",
      datePublished: "2025-01-15",
    });
    expect(schema["@type"]).toBe("Article");
    expect(schema.headline).toBe("Test Article");
    expect(schema.datePublished).toBe("2025-01-15");
  });

  it("defaults dateModified to datePublished", () => {
    const schema = buildArticleSchema({
      title: "T",
      description: "d",
      url: "/blog/x",
      datePublished: "2025-06-01",
    });
    expect(schema.dateModified).toBe("2025-06-01");
  });

  it("uses provided dateModified", () => {
    const schema = buildArticleSchema({
      title: "T",
      description: "d",
      url: "/blog/x",
      datePublished: "2025-06-01",
      dateModified: "2025-06-15",
    });
    expect(schema.dateModified).toBe("2025-06-15");
  });
});

describe("buildFAQSchema", () => {
  it("wraps questions correctly", () => {
    const schema = buildFAQSchema([
      { q: "What is it?", a: "A school ERP." },
      { q: "How much?", a: "Contact us." },
    ]);
    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(2);
    expect(schema.mainEntity[0].name).toBe("What is it?");
    expect(schema.mainEntity[0].acceptedAnswer.text).toBe("A school ERP.");
  });
});

describe("buildOrganizationSchema", () => {
  it("uses site legalName and url", () => {
    const schema = buildOrganizationSchema();
    expect(schema["@type"]).toBe("Organization");
    expect(schema.name).toBe(site.legalName);
    expect(schema.url).toBe(site.url);
  });
});

describe("buildProductSchema", () => {
  it("builds product with brand", () => {
    const schema = buildProductSchema({
      name: "Fees Module",
      description: "Automate fees",
      url: "/products/fees",
    });
    expect(schema["@type"]).toBe("Product");
    expect(schema.brand).toMatchObject({ "@type": "Brand", name: site.name });
    expect(schema.url).toBe(`${site.url}/products/fees`);
  });
});

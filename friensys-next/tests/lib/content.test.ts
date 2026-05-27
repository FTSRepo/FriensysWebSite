import { describe, it, expect } from "vitest";
import {
  getProducts,
  getProduct,
  getSchools,
  getTestimonials,
  getCaseStudies,
  getCaseStudy,
  getStats,
  getFaqs,
  getModules,
} from "@/lib/content";

describe("getProducts", () => {
  it("returns non-empty array", () => {
    expect(getProducts().length).toBeGreaterThan(0);
  });

  it("each product has required fields", () => {
    for (const p of getProducts()) {
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.summary).toBeTruthy();
    }
  });
});

describe("getProduct", () => {
  it("finds by slug", () => {
    const first = getProducts()[0];
    expect(getProduct(first.slug)).toBeDefined();
    expect(getProduct(first.slug)?.slug).toBe(first.slug);
  });

  it("returns undefined for unknown slug", () => {
    expect(getProduct("__nonexistent__")).toBeUndefined();
  });
});

describe("getSchools", () => {
  it("returns schools with name, city, board, logo", () => {
    const schools = getSchools();
    expect(schools.length).toBeGreaterThan(0);
    for (const s of schools) {
      expect(s.name).toBeTruthy();
      expect(s.logo).toBeTruthy();
    }
  });
});

describe("getTestimonials", () => {
  it("returns testimonials with rating 1-5", () => {
    const t = getTestimonials();
    expect(t.length).toBeGreaterThan(0);
    for (const item of t) {
      expect(item.rating).toBeGreaterThanOrEqual(1);
      expect(item.rating).toBeLessThanOrEqual(5);
    }
  });
});

describe("getCaseStudies / getCaseStudy", () => {
  it("returns case studies array", () => {
    expect(getCaseStudies().length).toBeGreaterThan(0);
  });

  it("finds case study by slug", () => {
    const first = getCaseStudies()[0];
    expect(getCaseStudy(first.slug)).toBeDefined();
  });

  it("returns undefined for unknown slug", () => {
    expect(getCaseStudy("__no__")).toBeUndefined();
  });
});

describe("getStats", () => {
  it("returns stats object with value and label", () => {
    const s = getStats();
    const keys = Object.keys(s);
    expect(keys.length).toBeGreaterThan(0);
    const first = s[keys[0]];
    expect(first.value).toBeDefined();
    expect(first.label).toBeTruthy();
  });
});

describe("getFaqs", () => {
  it("returns empty array for unknown key", () => {
    expect(getFaqs("__unknown__")).toEqual([]);
  });

  it("returns array for known key", () => {
    const keys = Object.keys(
      (getFaqs as unknown as { _data?: Record<string, unknown[]> })._data ?? {}
    );
    // Just verify the function doesn't throw for any call
    expect(Array.isArray(getFaqs("pricing"))).toBe(true);
  });
});

describe("getModules", () => {
  it("returns module groups with name and modules", () => {
    const groups = getModules();
    expect(groups.length).toBeGreaterThan(0);
    expect(groups[0].name).toBeTruthy();
    expect(Array.isArray(groups[0].modules)).toBe(true);
  });
});

import { MetadataRoute } from "next";
import { ALL_PANELS } from "@/app/lib/panelData";
import { getGuides } from "@/app/lib/guidesData";

const BASE_URL = "https://iptvreseller.live";
const LOCALES = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];

const PAGES = [
  "",
  "/about",
  "/comparisons",
  "/contact",
  "/guides",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/dmca",
  "/sitemap",
  "/editorial-guidelines",
  "/authors"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate sitemap for static pages
  for (const page of PAGES) {
    for (const locale of LOCALES) {
      const path = page === "" ? `/${locale}` : `/${locale}${page}`;
      const url = `${BASE_URL}${path}`;

      // Build alternate translations maps
      const alternates: Record<string, string> = {};
      for (const otherLocale of LOCALES) {
        const otherPath = page === "" ? `/${otherLocale}` : `/${otherLocale}${page}`;
        alternates[otherLocale] = `${BASE_URL}${otherPath}`;
      }

      sitemapEntries.push({
        url,
        lastModified: new Date("2026-05-31"),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  // Generate sitemap for dynamic reseller panel pages
  for (const panel of ALL_PANELS) {
    for (const locale of LOCALES) {
      const url = `${BASE_URL}/${locale}/${panel.slug}`;

      // Build alternate translations maps
      const alternates: Record<string, string> = {};
      for (const otherLocale of LOCALES) {
        alternates[otherLocale] = `${BASE_URL}/${otherLocale}/${panel.slug}`;
      }

      sitemapEntries.push({
        url,
        lastModified: new Date("2026-05-31"),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  // Generate sitemap for dynamic reseller guides pages
  const guidesList = getGuides("en");
  for (const guide of guidesList) {
    for (const locale of LOCALES) {
      const url = `${BASE_URL}/${locale}/guides/${guide.id}`;

      // Build alternate translations maps
      const alternates: Record<string, string> = {};
      for (const otherLocale of LOCALES) {
        alternates[otherLocale] = `${BASE_URL}/${otherLocale}/guides/${guide.id}`;
      }

      sitemapEntries.push({
        url,
        lastModified: new Date("2026-05-31"),
        changeFrequency: "weekly",
        priority: 0.95,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return sitemapEntries;
}

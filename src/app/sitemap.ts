import { MetadataRoute } from "next";
import { ALL_PANELS } from "@/app/lib/panelData";
import { getGuides } from "@/app/lib/guidesData";

const BASE_URL = "https://www.iptvreseller.live";
const LOCALES = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];

interface PageConfig {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
}

// Structured hierarchy of static pages to optimize crawl budget
const STATIC_PAGES: PageConfig[] = [
  { path: "", priority: 1.0, changeFrequency: "daily" },
  { path: "/comparisons", priority: 0.9, changeFrequency: "daily" },
  { path: "/guides", priority: 0.85, changeFrequency: "daily" },
  { path: "/about", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "weekly" },
  { path: "/authors", priority: 0.6, changeFrequency: "weekly" },
  { path: "/editorial-guidelines", priority: 0.6, changeFrequency: "weekly" },
  { path: "/sitemap", priority: 0.5, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.3, changeFrequency: "monthly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "monthly" },
  { path: "/dmca", priority: 0.3, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const buildDate = new Date(); // Dynamic build-time modification date

  // Generate sitemap for static pages
  for (const page of STATIC_PAGES) {
    for (const locale of LOCALES) {
      const path = page.path === "" ? `/${locale}` : `/${locale}${page.path}`;
      const url = `${BASE_URL}${path}`;

      // Build alternate translations maps for hreflang in sitemap
      const alternates: Record<string, string> = {};
      for (const otherLocale of LOCALES) {
        const otherPath = page.path === "" ? `/${otherLocale}` : `/${otherLocale}${page.path}`;
        alternates[otherLocale] = `${BASE_URL}${otherPath}`;
      }

      sitemapEntries.push({
        url,
        lastModified: buildDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
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

      // Build alternate translations maps for hreflang in sitemap
      const alternates: Record<string, string> = {};
      for (const otherLocale of LOCALES) {
        alternates[otherLocale] = `${BASE_URL}/${otherLocale}/${panel.slug}`;
      }

      sitemapEntries.push({
        url,
        lastModified: buildDate,
        changeFrequency: "weekly",
        priority: 0.8, // High priority transactional landing pages
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

      // Build alternate translations maps for hreflang in sitemap
      const alternates: Record<string, string> = {};
      for (const otherLocale of LOCALES) {
        alternates[otherLocale] = `${BASE_URL}/${otherLocale}/guides/${guide.id}`;
      }

      sitemapEntries.push({
        url,
        lastModified: buildDate,
        changeFrequency: "weekly",
        priority: 0.8, // Content pages
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return sitemapEntries;
}


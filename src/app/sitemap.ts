
import type { MetadataRoute } from "next";
import { ALL_PANELS } from "@/app/lib/panelData";
import { getGuides } from "@/app/lib/guidesData";

const BASE_URL = "https://www.iptvreseller.live";

const LOCALES = [
  "en",
  "en-gb",
  "en-au",
  "es",
  "fr",
  "sv",
  "pt",
  "no",
] as const;

// Revalidate cached sitemap every hour.
// Supported when using Next.js route revalidation.
export const revalidate = 3600;

interface PageConfig {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
}

const STATIC_PAGES: PageConfig[] = [
  { path: "", priority: 1.0, changeFrequency: "daily" },
  { path: "/comparisons", priority: 0.9, changeFrequency: "daily" },
  { path: "/guides", priority: 0.85, changeFrequency: "daily" },
  { path: "/about", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "weekly" },
  { path: "/authors", priority: 0.6, changeFrequency: "weekly" },
  {
    path: "/editorial-guidelines",
    priority: 0.6,
    changeFrequency: "weekly",
  },
  { path: "/sitemap", priority: 0.5, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.3, changeFrequency: "monthly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "monthly" },
  { path: "/dmca", priority: 0.3, changeFrequency: "monthly" },
];

// Create a URL using the existing language structure.
function createUrl(locale: string, path: string): string {
  return `${BASE_URL}/${locale}${path}`;
}

// Generate hreflang alternate URLs.
function createAlternates(path: string) {
  const languages: Record<string, string> = {};

  for (const locale of LOCALES) {
    languages[locale] = createUrl(locale, path);
  }

  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();

  function addPage(
    path: string,
    priority: number,
    changeFrequency: PageConfig["changeFrequency"]
  ) {
    const alternates = createAlternates(path);

    for (const locale of LOCALES) {
      const url = createUrl(locale, path);

      if (seenUrls.has(url)) continue;

      seenUrls.add(url);

      entries.push({
        url,
        changeFrequency,
        priority,
        alternates,
      });
    }
  }

  // 1. Static website pages
  for (const page of STATIC_PAGES) {
    addPage(page.path, page.priority, page.changeFrequency);
  }

  // 2. IPTV reseller panel pages
  for (const panel of ALL_PANELS) {
    if (!panel.slug) continue;

    addPage(`/${panel.slug}`, 0.8, "weekly");
  }

  // 3. Published guides from existing data source
  const guides = getGuides("en");

  for (const guide of guides) {
    if (!guide.id) continue;

    addPage(`/guides/${guide.id}`, 0.8, "weekly");
  }

  return entries;
}

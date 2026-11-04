
import type { MetadataRoute } from "next";
import { ALL_PANELS } from "@/app/lib/panelData";
import { getGuides } from "@/app/lib/guidesData";
import { listPosts } from "@/app/lib/blogStore";

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

type Locale = (typeof LOCALES)[number];

// Regenerate the sitemap every hour.
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

// Create localized URLs.
function createUrl(locale: string, path: string): string {
  return `${BASE_URL}/${locale}${path}`;
}

// Generate hreflang alternatives only for available locales.
function createAlternates(
  path: string,
  locales: readonly string[] = LOCALES
) {
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[locale] = createUrl(locale, path);
  }

  return { languages };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();

  function addPage(
    path: string,
    priority: number,
    changeFrequency: PageConfig["changeFrequency"],
    locales: readonly string[] = LOCALES,
    lastModified?: Date
  ) {
    const alternates = createAlternates(path, locales);

    for (const locale of locales) {
      const url = createUrl(locale, path);

      if (seenUrls.has(url)) {
        continue;
      }

      seenUrls.add(url);

      entries.push({
        url,
        changeFrequency,
        priority,
        ...(lastModified ? { lastModified } : {}),
        alternates,
      });
    }
  }

  // 1. Static website pages.
  // Only /en is the indexable global Homepage.
  // Other page types retain their supported locale URLs.
  for (const page of STATIC_PAGES) {
    const pageLocales = page.path === ""
      ? (["en"] as const)
      : LOCALES;

    addPage(
      page.path,
      page.priority,
      page.changeFrequency,
      pageLocales
    );
  }

  // 2. IPTV reseller panel pages.
  for (const panel of ALL_PANELS) {
    if (!panel.slug) {
      continue;
    }

    addPage(
      `/${panel.slug}`,
      0.8,
      "weekly"
    );
  }

  // 3. Existing static guides.
  const guides = getGuides("en");

  for (const guide of guides) {
    if (!guide.id) {
      continue;
    }

    addPage(
      `/guides/${guide.id}`,
      0.8,
      "weekly"
    );
  }

  // 4. Admin-published blogs stored in Redis.
  try {
    const posts = await listPosts();

    const publishedBlogs = new Map<
      string,
      {
        locales: Set<Locale>;
        updatedAt?: Date;
      }
    >();

    const staticGuideSlugs = new Set(
      guides.map((guide) => guide.id)
    );

    for (const post of posts) {
      // Never include drafts.
      if (post.status !== "published") {
        continue;
      }

      const slug = post.slug?.trim();
      const locale = post.locale as Locale;

      if (!slug) {
        continue;
      }

      // Only use supported locales.
      if (!LOCALES.includes(locale)) {
        continue;
      }

      // Prevent admin posts from conflicting
      // with existing static guide URLs.
      if (staticGuideSlugs.has(slug)) {
        continue;
      }

      const existing = publishedBlogs.get(slug);

      // Validate modification dates before
      // writing them into XML.
      const parsedDate = post.updatedAt
        ? new Date(post.updatedAt)
        : undefined;

      const validDate =
        parsedDate &&
        !Number.isNaN(parsedDate.getTime())
          ? parsedDate
          : undefined;

      if (existing) {
        existing.locales.add(locale);

        if (
          validDate &&
          (!existing.updatedAt ||
            validDate > existing.updatedAt)
        ) {
          existing.updatedAt = validDate;
        }
      } else {
        publishedBlogs.set(slug, {
          locales: new Set([locale]),
          updatedAt: validDate,
        });
      }
    }

    // Generate sitemap URLs for published blogs.
    for (const [slug, blog] of publishedBlogs) {
      const availableLocales = LOCALES.filter(
        (locale) => blog.locales.has(locale)
      );

      if (availableLocales.length === 0) {
        continue;
      }

      addPage(
        `/guides/${slug}`,
        0.8,
        "weekly",
        availableLocales,
        blog.updatedAt
      );
    }
  } catch (error) {
    // Preserve the static sitemap if Redis
    // temporarily becomes unavailable.
    console.error(
      "Failed to load published blog posts for sitemap:",
      error
    );
  }

  return entries;
}


import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const locales = "en|en-gb|en-au|es|fr|sv|pt|no";

const nextConfig: NextConfig = {
  reactCompiler: false,

  productionBrowserSourceMaps: false,

  trailingSlash: false,

  experimental: {
    optimizePackageImports: ["next-intl"],
  },

  compiler: {
    removeConsole: true,
  },

  async redirects() {
    const comparisonSlugs = [
      "strong-4k-vs-lion-ott",
      "crystal-vs-nexon",
      "best-iptv-reseller-panels-2026",
      "cheapest-iptv-reseller-panel",
    ];

    // Missing guides without an exact destination
    const guideSlugs = [
      "iptv-reseller-profit-guide",
      "iptv-reseller-vs-subscription",
    ];

    return [
      // Redirect to existing relevant guide articles
      {
        source: `/:locale(${locales})/guides/how-to-start-iptv-reseller-business`,
        destination: "/:locale/guides/start-iptv-reseller-business",
        permanent: false,
      },
      {
        source: `/:locale(${locales})/guides/iptv-credit-system-explained`,
        destination: "/:locale/guides/credit-system-explained",
        permanent: false,
      },

      // Missing comparison pages
      ...comparisonSlugs.map((slug) => ({
        source: `/:locale(${locales})/comparisons/${slug}`,
        destination: "/:locale/comparisons",
        permanent: false,
      })),

      // Remaining missing guide pages
      ...guideSlugs.map((slug) => ({
        source: `/:locale(${locales})/guides/${slug}`,
        destination: "/:locale/guides",
        permanent: false,
      })),

      // Missing IPTV servers page
      {
        source: `/:locale(${locales})/servers`,
        destination: "/:locale",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

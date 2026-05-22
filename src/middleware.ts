import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Supported locales mapping to targets
  locales: ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"],
  
  // Default fallback locale
  defaultLocale: "en",
  
  // Disabled to ensure search engines crawl specific geo-paths accurately without redirecting
  localeDetection: false,
});

export const config = {
  // Match standard paths for internationalized routing
  matcher: [
    // Root path
    "/",
    // All language-specific roots and sub-routes
    "/(en|en-gb|en-au|es|fr|sv|pt|no)/:path*",
    // Exclude Next.js internals, API routes, and standard public files
    "/((?!_next|api|favicon.ico|icon.svg|vercel.svg|globe.svg|file.svg|window.svg|next.svg).*)",
  ],
};

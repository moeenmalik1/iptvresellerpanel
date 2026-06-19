import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Supported locales mapping to targets
  locales: ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"],
  
  // Default fallback locale
  defaultLocale: "en",
  
  // Enabled to automatically redirect users based on their browser language / location
  localeDetection: true,
});

export const config = {
  // Match standard paths for internationalized routing
  matcher: [
    // Root path
    "/",
    // All language-specific roots and sub-routes
    "/(en|en-gb|en-au|es|fr|sv|pt|no)/:path*",
    // Exclude Next.js internals, API routes, and standard public files
    "/((?!_next|api|favicon.ico|icon.png|logo.png|icon.svg|placeholder-icon.svg|vercel.svg|globe.svg|file.svg|window.svg|next.svg).*)",
  ],
};

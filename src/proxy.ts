import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/app/lib/adminAuth";

const intlMiddleware = createMiddleware({
    // Supported locales mapping to targets
                                          locales: ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"],

    // Default fallback locale
    defaultLocale: "en",

    // Enabled to automatically redirect users based on their browser language / location
    localeDetection: true,
});

// The Guides Admin panel (/admin, /api/admin) is a self-contained auth area
// outside the localized site, so it's handled here before falling through
// to the next-intl locale middleware.
async function handleAdminAuth(req: NextRequest): Promise<NextResponse> {
    const { pathname } = req.nextUrl;
    const isPublic = pathname === "/admin/login" || pathname === "/api/admin/login";

  if (isPublic) {
        return NextResponse.next();
  }

  const token = req.cookies.get(SESSION_COOKIE)?.value;
    const session = token ? await verifySessionToken(token) : null;

  if (!session) {
        if (pathname.startsWith("/api/")) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const loginUrl = new URL("/admin/login", req.url);
        loginUrl.searchParams.set("next", pathname);
        return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export default async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
        return handleAdminAuth(req);
  }

  return intlMiddleware(req);
}

export const config = {
    // Match standard paths for internationalized routing
    matcher: [
          // Root path
      "/",
          // All language-specific roots and sub-routes
          "/(en|en-gb|en-au|es|fr|sv|pt|no)/:path*",
          // Exclude Next.js internals, API routes, and standard public files
          "/((?!_next|api|favicon.ico|icon.png|logo.png|icon.svg|placeholder-icon.svg|vercel.svg|globe.svg|file.svg|window.svg|next.svg|robots.txt|sitemap.xml|googlef7be08f959455b7f.html).*)",
          // Guides Admin panel — handled with its own auth, not locale routing
          "/admin/:path*",
          "/api/admin/:path*",
        ],
};

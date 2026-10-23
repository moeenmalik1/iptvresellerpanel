import "../globals.css";
import { createElement } from "react";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata = {
    title: "Guides Admin | Fox IPTV Panels",
    robots: { index: false, follow: false },
};

// Written with createElement (not JSX) because this file sits outside
// the [locale] segment and needs its own <html>/<body>, which some
// editors mangle when typed as literal JSX tags.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return createElement(
          "html",
      { lang: "en", className: "h-full" },
          createElement(
                  "body",
            { className: `${inter.variable} ${outfit.variable} min-h-full antialiased` },
                  children
                )
        );
}

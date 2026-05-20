import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best IPTV Reseller Panel Provider 2025 — Buy Credits & Start Your IPTV Business | Fox IPTV Panels",
  description:
    "Fox IPTV Panels is the #1 IPTV reseller panel provider for 2025. Buy IPTV reseller credits, access 20+ white label IPTV panels with Xtream Codes & M3U support, 4K streaming, no buffering, 99.9% uptime, and 24/7 WhatsApp support. Start your IPTV reseller business today — no investment needed. Compare the best IPTV panels for resellers, manage subscriptions from a professional IPTV dashboard, and earn high profit margins. Available in UK, USA, Pakistan & worldwide.",
  keywords: [
    "iptv reseller panel",
    "best iptv reseller",
    "iptv reseller panel provider",
    "buy iptv reseller credits",
    "iptv reseller business",
    "iptv panel reseller",
    "become iptv reseller",
    "iptv reseller program",
    "iptv subscription reseller",
    "iptv wholesale panel",
    "iptv credits bulk",
    "iptv reselling business",
    "iptv panel management",
    "iptv sub reseller",
    "iptv dashboard",
    "white label iptv panel",
    "xtream codes reseller",
    "m3u reseller panel",
    "mag box reseller",
    "how to start iptv reseller business",
    "iptv credit system explained",
    "iptv panel features comparison",
    "iptv reseller profit margin",
    "iptv server uptime reliability",
    "iptv reseller panel no buffering",
    "4k iptv reseller panel",
    "iptv reseller panel free trial",
    "iptv reseller without investment",
    "cheapest iptv reseller panel",
    "iptv reseller panel with 24/7 support",
    "best iptv panels for resellers 2025",
    "top iptv servers list 2025",
    "best iptv reseller 2025",
    "start iptv reseller business",
    "iptv reseller panel cheap",
  ],
  alternates: {
    canonical: "https://foxiptvpanels.com",
  },
  openGraph: {
    title: "Best IPTV Reseller Panel Provider 2025 | Fox IPTV Panels",
    description:
      "Start your IPTV reseller business with Fox IPTV Panels — premium IPTV reseller panels, instant credit activation, 4K no-buffering servers, white label IPTV dashboard, Xtream Codes & M3U support, and 24/7 WhatsApp support. Compare the best IPTV panels for resellers 2025.",
    type: "website",
    locale: "en_US",
    url: "https://foxiptvpanels.com",
    siteName: "Fox IPTV Panels",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Reseller Panel Provider 2025 | Fox IPTV Panels",
    description:
      "Launch your IPTV reselling business with premium panels, instant credits, 4K servers, no buffering, and 24/7 WhatsApp support. Best IPTV reseller panels for 2025.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "GB",
    "geo.placename": "United Kingdom",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "3 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Google Fonts — loaded via link tag to avoid next/font workAsyncStorage dependency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

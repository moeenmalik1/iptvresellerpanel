import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Outfit } from "next/font/google";
import SEOAlternates from "@/app/components/SEOAlternates";

// Optimize fonts to avoid render-blocking requests
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

// Static routes pre-generation for all 8 supported locales
export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "en-gb" },
    { locale: "en-au" },
    { locale: "es" },
    { locale: "fr" },
    { locale: "sv" },
    { locale: "pt" },
    { locale: "no" },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale parameter
  const supportedLocales = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  // Set the request locale for Server Components
  setRequestLocale(locale);

  // Load language-specific translation dictionary
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="theme-color" content="#090d16" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="alternate icon" href="/favicon.ico" />
        
        {/* Dynamic Multi-locale Hreflang alternate tag list injected per page */}
        <SEOAlternates locale={locale} />
      </head>
      <body className={`${inter.variable} ${outfit.variable} min-h-full flex flex-col antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

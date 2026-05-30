import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import TrustBar from "@/app/components/TrustBar";
import AboutSection from "@/app/components/AboutSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import BusinessSection from "@/app/components/BusinessSection";
import PanelsGrid from "@/app/components/PanelsGrid";
import ComparisonTable from "@/app/components/ComparisonTable";
import DashboardSection from "@/app/components/DashboardSection";
import PricingSection from "@/app/components/PricingSection";
import BenefitsSection from "@/app/components/BenefitsSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import FAQSection from "@/app/components/FAQSection";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });
  const c = await getTranslations({ locale, namespace: "common" });

  const WHATSAPP_URL = c("whatsappUrl");

  /* ─── Dynamically Localized JSON-LD Structured Data ─── */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fox IPTV Panels",
    url: `https://foxiptvpanels.com/${c("currency").toLowerCase()}`,
    logo: "https://foxiptvpanels.com/logo.png",
    description: t("description"),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Spanish", "French", "Portuguese", "Swedish", "Norwegian"],
      contactOption: "TollFree",
    },
    areaServed: [
      { "@type": "Country", name: c("regionName") },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "EU" },
    ],
    knowsAbout: [
      "IPTV Reseller Panel",
      "IPTV Reseller Business",
      "IPTV Credits",
      "White Label IPTV",
      "Xtream Codes Reseller",
      "M3U Reseller Panel",
      "IPTV Dashboard",
      "IPTV Wholesale Panel",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fox IPTV Panels",
    url: "https://foxiptvpanels.com",
    description: t("description"),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://foxiptvpanels.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an IPTV reseller panel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An IPTV reseller panel is a white label dashboard that allows users to create and manage IPTV subscriptions using reseller credits. It supports Xtream Codes, M3U, and MAG box connections, and gives resellers full control over subscription creation, credit allocation, trial generation, and customer management.",
        },
      },
      {
        "@type": "Question",
        name: "How do IPTV reseller credits work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IPTV reseller credits are the currency of the IPTV credit system. Each credit corresponds to one month of IPTV subscription for one customer. You buy credits in bulk from a wholesale IPTV panel provider like Fox IPTV Panels, then use them to activate subscriptions for your end customers at your own pricing — keeping the profit margin.",
        },
      },
    ],
  };

  return (
    <>
      {/* React 19 native metadata hoisting — fully internationalized */}
      <title>{t("title")}</title>
      <meta name="description" content={t("description")} />
      <meta name="keywords" content={t("keywords")} />
      
      <meta property="og:title" content={t("title")} />
      <meta property="og:description" content={t("description")} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://foxiptvpanels.com/og-image.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t("title")} />
      <meta name="twitter:description" content={t("description")} />

      {/* Localized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Sticky Header */}
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Signals */}
        <TrustBar />

        {/* About Fox IPTV Panels */}
        <AboutSection />

        {/* Pricing & Investment Profit Calculator */}
        <PricingSection />

        {/* Technical Features */}
        <FeaturesSection />

        {/* Reselling Business Model */}
        <BusinessSection />

        {/* IPTV Server Panels Catalog Grid */}
        <PanelsGrid />

        {/* Comprehensive Reseller Matrix */}
        <ComparisonTable />

        {/* Dashboard Management Demonstration */}
        <DashboardSection />

        {/* Key Partner Benefits */}
        <BenefitsSection />

        {/* Global Testimonials Reviews */}
        <TestimonialsSection />

        {/* Reseller FAQs */}
        <FAQSection />

        {/* Closing Conversion Block */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating FAB Contact Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-fab"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp to start your IPTV reseller business"
        title="Start IPTV Reselling on WhatsApp — Fox IPTV Panels"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import TrustBar from "@/app/components/TrustBar";
import AboutSection from "@/app/components/AboutSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import BusinessSection from "@/app/components/BusinessSection";
import PanelsGrid from "@/app/components/PanelsGrid";
import PopularPanelsSection from "@/app/components/PopularPanelsSection";
import ComparisonTable from "@/app/components/ComparisonTable";
import DashboardSection from "@/app/components/DashboardSection";
import BenefitsSection from "@/app/components/BenefitsSection";
import PreferredSupplierSection from "@/app/components/PreferredSupplierSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import FAQSection from "@/app/components/FAQSection";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

const PricingSection = dynamic(() => import("@/app/components/PricingSection"), {
  ssr: true,
});

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

  /* ─── Dynamically Localized JSON-LD Structured Data (Crawl Budget & Knowledge Graph Optimized) ─── */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://foxiptvpanels.com/#organization",
    name: "Fox IPTV Panels",
    url: "https://foxiptvpanels.com",
    logo: "https://foxiptvpanels.com/logo.png",
    description: t("description"),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Spanish", "French", "Portuguese", "Swedish", "Norwegian"],
      contactOption: "TollFree",
    },
    sameAs: [
      "https://twitter.com/foxiptvpanels",
      "https://youtube.com/c/foxiptvpanels",
    ],
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://foxiptvpanels.com/#localbusiness",
    "name": "Fox IPTV Panels",
    "image": "https://foxiptvpanels.com/logo.png",
    "url": "https://foxiptvpanels.com",
    "telephone": "+442079460192",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "124 City Road",
      "addressLocality": "London",
      "postalCode": "EC1V 2NX",
      "addressCountry": "GB"
    },
    "parentOrganization": {
      "@id": "https://foxiptvpanels.com/#organization"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://foxiptvpanels.com/#website",
    name: "Fox IPTV Panels",
    url: "https://foxiptvpanels.com",
    description: t("description"),
    publisher: {
      "@id": "https://foxiptvpanels.com/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://foxiptvpanels.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Localized FAQ schema content matching page body language precisely
  const getLocalizedFaqs = () => {
    switch (locale.toLowerCase()) {
      case "es":
        return [
          {
            q: "¿Qué es un panel de revendedor de IPTV?",
            a: "Un panel de revendedor de IPTV es una plataforma de marca blanca que permite a los usuarios crear y gestionar suscripciones mediante créditos de distribuidor. Admite conexiones Xtream Codes, M3U y decodificadores MAG, lo que otorga control total de renovaciones, cuentas de prueba y balance de saldo.",
          },
          {
            q: "¿Cómo funcionan los créditos de revendedor de IPTV?",
            a: "Los créditos son la moneda operativa del panel. 1 crédito equivale a 1 mes de servicio por cliente. Compra créditos al por mayor y los debita de su balance a medida que activa cuentas en tiempo real. La diferencia entre su precio mayorista y su precio de venta minorista es su beneficio directo.",
          },
        ];
      case "fr":
        return [
          {
            q: "Qu'est-ce qu'un panneau revendeur IPTV ?",
            a: "Un panneau revendeur IPTV est un tableau de bord en marque blanche permettant de créer et gérer des abonnements IPTV à l'aide de crédits. Il prend en charge les applications compatibles avec Xtream Codes, M3U et boîtiers MAG.",
          },
          {
            q: "Comment fonctionnent les crédits de revendeur IPTV ?",
            a: "Les crédits agissent comme une monnaie de gros. Chaque crédit correspond généralement à 1 mois d'abonnement pour un client. Vous achetez ces crédits en gros, puis les utilisez pour activer les lignes de vos clients au tarif de votre choix, conservant ainsi la marge.",
          },
        ];
      case "pt":
        return [
          {
            q: "O que é um painel de revendedor IPTV?",
            a: "Um painel de revendedor IPTV é um dashboard de marca branca que permite criar e gerir subscrições de IPTV através de créditos. Suporta ligações Xtream Codes, listas M3U e caixas MAG.",
          },
          {
            q: "Como funcionam os créditos de revenda IPTV?",
            a: "Os créditos são a moeda de faturamento. Tipicamente, 1 crédito equivale a 1 mês de serviço. Adquire os créditos por grosso e utiliza-os para ativar as contas dos seus utilizadores de acordo com as suas próprias tarifas, retendo o lucro.",
          },
        ];
      case "sv":
        return [
          {
            q: "Vad är en IPTV-återförsäljarpanel?",
            a: "En IPTV-återförsäljarpanel är en white label-kontrollpanel som gör det möjligt att skapa och administrera IPTV-abonnemang med återförsäljarkrediter. Den stöder Xtream Codes, M3U och MAG-boxar.",
          },
          {
            q: "Hur fungerar IPTV-återförsäljarkrediter?",
            a: "Krediter är valutan i återförsäljarsystemet. 1 kredit motsvarar 1 månads abonnemang för en kund. Du köper krediter i bulk till grossistpris och debiterar dem när du aktiverar kunder, vilket ger en hög vinstmarginal.",
          },
        ];
      case "no":
        return [
          {
            q: "Et IPTV-forhandlerpanel er et hva?",
            a: "Et IPTV-forhandlerpanel er et white label-dashboard som lar deg opprette og administrere IPTV-abonnementer med kreditter. Det støtter Xtream Codes, M3U og MAG-bokser.",
          },
          {
            q: "Hvordan fungerer IPTV-forhandlerkreditter?",
            a: "Kreditter fungerer som engrosvaluta. 1 kreditt tilsvarer 1 måned med abonnement for én kunde. Du kjøper kreditter i bulk og bruker dem til å aktivere kundeabonnementer til dine egne priser.",
          },
        ];
      default:
        return [
          {
            q: "What is an IPTV reseller panel?",
            a: "An IPTV reseller panel is a white label dashboard that allows users to create and manage IPTV subscriptions using reseller credits. It supports Xtream Codes, M3U, and MAG box connections, and gives resellers full control over subscription creation, credit allocation, trial generation, and customer management.",
          },
          {
            q: "How do IPTV reseller credits work?",
            a: "IPTV reseller credits are the currency of the IPTV credit system. Each credit corresponds to one month of IPTV subscription for one customer. You buy credits in bulk from a wholesale IPTV panel provider like Fox IPTV Panels, then use them to activate subscriptions for your end customers at your own pricing — keeping the profit margin.",
          },
        ];
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getLocalizedFaqs().map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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

        {/* Popular IPTV Reseller Panels with Descriptions */}
        <PopularPanelsSection />

        {/* Comprehensive Reseller Matrix */}
        <ComparisonTable />

        {/* Dashboard Management Demonstration */}
        <DashboardSection />

        {/* Key Partner Benefits */}
        <BenefitsSection />

        {/* Preferred IPTV Supplier Section */}
        <PreferredSupplierSection />

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

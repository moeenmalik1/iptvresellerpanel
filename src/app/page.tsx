import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import BusinessSection from "./components/BusinessSection";
import PanelsGrid from "./components/PanelsGrid";
import ComparisonTable from "./components/ComparisonTable";
import DashboardSection from "./components/DashboardSection";
import PricingSection from "./components/PricingSection";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

/* ─── JSON-LD Structured Data ─── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fox IPTV Panels",
  url: "https://foxiptvpanels.com",
  logo: "https://foxiptvpanels.com/logo.png",
  description:
    "Fox IPTV Panels is the best IPTV reseller panel provider offering white label IPTV panels, bulk reseller credits, Xtream Codes & M3U support, 4K streaming, and 24/7 WhatsApp support for IPTV resellers worldwide.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English"],
    contactOption: "TollFree",
  },
  sameAs: [],
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Pakistan" },
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
  description:
    "Best IPTV reseller panel provider 2025 — buy IPTV reseller credits, compare IPTV panels, and start your IPTV reseller business.",
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
    {
      "@type": "Question",
      name: "How to start an IPTV reseller business without investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start an IPTV reseller business with minimal investment by purchasing a small starter credit package from Fox IPTV Panels. There is no need for servers, technical infrastructure, or prior experience. Get your IPTV reseller panel login, buy credits, and start selling subscriptions to customers immediately via WhatsApp or social media.",
      },
    },
    {
      "@type": "Question",
      name: "Which IPTV reseller panel is best for beginners in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For beginners in 2025, Lion OTT and Crystal are the most beginner-friendly IPTV reseller panels — offering easy dashboard management, fast activation, and stable 4K streaming. Fox IPTV Panels provides access to 20+ IPTV panels so you can compare and choose the best fit for your IPTV reselling business.",
      },
    },
    {
      "@type": "Question",
      name: "What is the profit margin for an IPTV reseller?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV reseller profit margins typically range from 30% to over 200% depending on your bulk credit pricing and customer subscription rates. The more credits you buy wholesale, the lower your cost per subscription — and the higher your reseller profit margin per customer.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer 4K IPTV reseller panels with no buffering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fox IPTV Panels provides access to multiple 4K IPTV reseller panels including Strong 4K, Ultra 8K OTT, and others — all optimized for no-buffering streaming with 99.9% server uptime reliability. Supported on MAG boxes, M3U players, and Xtream Codes-compatible apps.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial for IPTV reseller panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fox IPTV Panels offers IPTV reseller panel free trial access so you can test the dashboard, streaming quality, and server uptime before committing to a full credit purchase. Contact us on WhatsApp to request your trial.",
      },
    },
    {
      "@type": "Question",
      name: "Are your IPTV reseller panels available in the UK, USA, and Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fox IPTV Panels supports IPTV resellers globally including the UK, USA, Pakistan, UAE, Spain, and beyond. Our IPTV servers are geo-distributed for low latency and stable streaming regardless of your customers' location.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://foxiptvpanels.com" },
    { "@type": "ListItem", position: 2, name: "IPTV Reseller Panels", item: "https://foxiptvpanels.com/#panels" },
    { "@type": "ListItem", position: 3, name: "Compare IPTV Panels", item: "https://foxiptvpanels.com/#comparison" },
  ],
};

const panelListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best IPTV Reseller Panels 2025 — Fox IPTV Panels",
  description: "Complete list of the best IPTV reseller panels available through Fox IPTV Panels — including B1G, Strong 4K, Lion OTT, Nexon, Crystal OTT, Mega OTT, and 16 more.",
  url: "https://foxiptvpanels.com",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "B1G IPTV Reseller Panel", url: "https://foxiptvpanels.com/b1g-iptv-reseller-panel" },
    { "@type": "ListItem", position: 2, name: "Strong 4K IPTV Reseller Panel", url: "https://foxiptvpanels.com/strong-4k-iptv-reseller-panel" },
    { "@type": "ListItem", position: 3, name: "Strong 8K IPTV Reseller Panel", url: "https://foxiptvpanels.com/strong-8k-iptv-reseller-panel" },
    { "@type": "ListItem", position: 4, name: "4K OTT IPTV Reseller Panel", url: "https://foxiptvpanels.com/4k-ott-iptv-reseller-panel" },
    { "@type": "ListItem", position: 5, name: "Lion OTT IPTV Reseller Panel", url: "https://foxiptvpanels.com/lion-ott-iptv-reseller-panel" },
    { "@type": "ListItem", position: 6, name: "Ultra 8K OTT IPTV Reseller Panel", url: "https://foxiptvpanels.com/ultra-8k-ott-iptv-reseller-panel" },
    { "@type": "ListItem", position: 7, name: "Dino IPTV Reseller Panel", url: "https://foxiptvpanels.com/dino-iptv-reseller-panel" },
    { "@type": "ListItem", position: 8, name: "T-Rex OTT IPTV Reseller Panel", url: "https://foxiptvpanels.com/trex-ott-iptv-reseller-panel" },
    { "@type": "ListItem", position: 9, name: "Mega OTT IPTV Reseller Panel", url: "https://foxiptvpanels.com/mega-ott-iptv-reseller-panel" },
    { "@type": "ListItem", position: 10, name: "Extra OTT IPTV Reseller Panel", url: "https://foxiptvpanels.com/extra-ott-iptv-reseller-panel" },
    { "@type": "ListItem", position: 11, name: "Max OTT IPTV Reseller Panel", url: "https://foxiptvpanels.com/max-ott-iptv-reseller-panel" },
    { "@type": "ListItem", position: 12, name: "Zen 4K IPTV Reseller Panel", url: "https://foxiptvpanels.com/zen-4k-iptv-reseller-panel" },
    { "@type": "ListItem", position: 13, name: "Nexon IPTV Reseller Panel", url: "https://foxiptvpanels.com/nexon-iptv-reseller-panel" },
    { "@type": "ListItem", position: 14, name: "Infinity Premium IPTV Reseller Panel", url: "https://foxiptvpanels.com/infinity-premium-iptv-reseller-panel" },
    { "@type": "ListItem", position: 15, name: "GTV IPTV Reseller Panel", url: "https://foxiptvpanels.com/gtv-iptv-reseller-panel" },
    { "@type": "ListItem", position: 16, name: "Crystal OTT IPTV Reseller Panel", url: "https://foxiptvpanels.com/crystal-ott-iptv-reseller-panel" },
    { "@type": "ListItem", position: 17, name: "Star Share IPTV Reseller Panel", url: "https://foxiptvpanels.com/starshare-iptv-reseller-panel" },
    { "@type": "ListItem", position: 18, name: "Tiger OTT IPTV Reseller Panel", url: "https://foxiptvpanels.com/tiger-ott-iptv-reseller-panel" },
    { "@type": "ListItem", position: 19, name: "Opplex IPTV Reseller Panel", url: "https://foxiptvpanels.com/opplex-iptv-reseller-panel" },
    { "@type": "ListItem", position: 20, name: "GEO IPTV Reseller Panel", url: "https://foxiptvpanels.com/geo-iptv-reseller-panel" },
    { "@type": "ListItem", position: 21, name: "5G Live IPTV Reseller Panel", url: "https://foxiptvpanels.com/5g-live-iptv-reseller-panel" },
    { "@type": "ListItem", position: 22, name: "Magnum Golden OTT IPTV Reseller Panel", url: "https://foxiptvpanels.com/magnum-golden-ott-iptv-reseller-panel" },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(panelListSchema) }}
      />

      {/* Sticky Header */}
      <Header />

      <main id="main-content">
        {/* 1. Hero — Primary keyword H1 zone */}
        <HeroSection />

        {/* 2. Trust Bar — Trust signals & LSI keyword zone */}
        <TrustBar />

        {/* 3. What Is Fox IPTV Panels — NLP entity zone */}
        <AboutSection />

        {/* 4. Why Choose Us — LSI & feature keyword zone */}
        <FeaturesSection />

        {/* 5. Business Model — "how to start" & credit system zone */}
        <BusinessSection />

        {/* 6. Panels Grid — panel name entity signals */}
        <PanelsGrid />

        {/* 7. Comparison Table — "comparison 2025" long-tail zone */}
        <ComparisonTable />

        {/* 8. Dashboard Overview — "iptv dashboard" & management zone */}
        <DashboardSection />

        {/* 9. Pricing — "buy credits" & "cheapest" keyword zone */}
        <PricingSection />

        {/* 10. Benefits — "iptv reseller program" keyword zone */}
        <BenefitsSection />

        {/* 11. Testimonials — geo + social proof signals */}
        <TestimonialsSection />

        {/* 12. FAQ — FAQPage schema, NLP question targets */}
        <FAQSection />

        {/* 13. Final CTA — conversion zone */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp FAB (mobile) */}
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

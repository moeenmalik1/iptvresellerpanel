import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GuidesClient from "./GuidesClient";
import { getTranslations } from "next-intl/server";

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

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const c = await getTranslations({ locale, namespace: "common" });

  const regionName = c("regionName");

  const titleText = locale === "es"
    ? `Academia de Revendedores IPTV 2026 en ${regionName} | Fox IPTV Panels`
    : `IPTV Reseller Academy & Guides 2026 in ${regionName} | Fox IPTV Panels`;

  const descText = locale === "es"
    ? `Aprenda cómo iniciar su negocio de reventa de IPTV de marca blanca en ${regionName}. Guías detalladas sobre créditos, API Xtream Codes y enrutamiento DNS.`
    : `Learn how to start a white label IPTV reseller business in ${regionName}, understand the credit system, compare Xtream Codes vs M3U playlists, and white-label your panels.`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "es" ? "Inicio" : "Home", item: `https://foxiptvpanels.com/${locale}` },
      { "@type": "ListItem", position: 2, name: locale === "es" ? "Guías" : "Guides", item: `https://foxiptvpanels.com/${locale}/guides` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: locale === "es" ? "¿Cómo funciona el sistema de créditos de IPTV?" : "How do IPTV reseller credits work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "es"
            ? "El sistema de créditos actúa como una moneda mayorista. Compra créditos al por mayor y los utiliza para crear suscripciones. Generalmente, 1 crédito equivale a 1 mes de servicio por cliente. Usted compra al por mayor y cobra al por menor, conservando la ganancia."
            : "The credit system acts as a wholesale currency. Resellers buy credits in bulk. Typically, 1 credit = 1 month of premium IPTV subscription for a single customer connection. The reseller buys credits wholesale and charges the end user retail pricing, keeping 100% of the profit margin.",
        },
      },
      {
        "@type": "Question",
        name: locale === "es" ? "¿Qué es un panel IPTV de marca blanca?" : "Can I brand my own IPTV reseller panel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "es"
            ? "Sí. Al comprar una configuración de marca blanca, puede vincular un dominio personalizado para que sus clientes utilicen sus portales de transmisión únicos con su propio logotipo y marca."
            : "Yes. By purchasing a white label IPTV reseller panel, you can link a custom domain so that your customers use your unique streaming portals under your own independent brand.",
        },
      },
    ],
  };

  return (
    <>
      <title>{titleText}</title>
      <meta name="description" content={descText} />
      <meta
        name="keywords"
        content="how to start iptv reseller business, iptv reseller academy, white label iptv panels, xtream codes api, m3u links, cheap reseller credits"
      />
      <link rel="canonical" href={`https://foxiptvpanels.com/${locale}/guides`} />

      {/* Structured SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <GuidesClient />
      <Footer />
    </>
  );
}

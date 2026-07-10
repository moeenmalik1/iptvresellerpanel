import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GuidesClient from "./GuidesClient";
import { getTranslations, setRequestLocale } from "next-intl/server";

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
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });
  const c = await getTranslations({ locale, namespace: "common" });

  const regionName = c("regionName");

  const getHighCtrGuidesMetadata = () => {
    switch (locale) {
      case "en-gb":
        return {
          titleText: "How to Start a UK IPTV Reseller Business: Avoid ISP Blocks Guide | Fox IPTV Panels",
          descText: "Step-by-step guide to starting a successful white-label IPTV reseller business in the UK. Learn how to configure custom DNS routing to bypass BT & Virgin Media filters.",
        };
      case "en-au":
        return {
          titleText: "How to Start an Australian IPTV Reseller Business: NBN Peering Guide | Fox IPTV Panels",
          descText: "Start your own white-label IPTV brand in Australia. A complete guide to wholesale IPTV credits, low-latency NBN streaming setup, and customer activations.",
        };
      case "es":
        return {
          titleText: "Cómo Empezar un Negocio Reseller IPTV: Guía Completa de Marca Blanca | Fox IPTV Panels",
          descText: "Guía paso a paso para crear una marca de IPTV exitosa en España. Aprenda cómo funciona el sistema de créditos, enrutamiento DNS personalizado y Xtream Codes.",
        };
      case "fr":
        return {
          titleText: "Comment Devenir Revendeur IPTV : Le Guide Étape par Étape Grossiste | Fox IPTV Panels",
          descText: "Apprenez à lancer votre marque d'IPTV en marque blanche en France. Guide complet sur les crédits de gros, l'API Xtream Codes et la configuration de portails DNS.",
        };
      case "pt":
        return {
          titleText: "Como Iniciar um Negócio de Revenda IPTV: Guia Completo Passo a Passo | Fox IPTV Panels",
          descText: "Crie a sua marca de IPTV de sucesso em Portugal. Guia definitivo sobre créditos por atacado, configuração de DNS próprio, Xtream Codes e atração de clientes.",
        };
      case "sv":
        return {
          titleText: "Hur du Startar ett IPTV Återförsäljarföretag: Steg-för-steg-guide | Fox IPTV Panels",
          descText: "Starta din egen IPTV-verksamhet i Sverige under eget varumärke. Lär dig hur kreditsystemet fungerar, anpassad DNS-routing och M3U-spellistor.",
        };
      case "no":
        return {
          titleText: "Slik Starter du som IPTV Forhandler: Den Komplette Guiden | Fox IPTV Panels",
          descText: "Start din egen strømmebedrift i Norge. Lær alt om engroskreditter, oppsett av egen DNS-portal, Xtream Codes API, og hvordan du unngår buffering.",
        };
      default:
        return {
          titleText: "How to Start an IPTV Reseller Business: 2026 Strategy Guide | Fox IPTV Panels",
          descText: "Tired of researching with zero clear answers? Read our step-by-step masterclass guide. Understand IPTV credits, Xtream Codes, M3U playlists, and custom DNS setup.",
        };
    }
  };

  const { titleText, descText } = getHighCtrGuidesMetadata();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "es" ? "Inicio" : "Home", item: `https://www.iptvreseller.live/${locale}` },
      { "@type": "ListItem", position: 2, name: locale === "es" ? "Guías" : "Guides", item: `https://www.iptvreseller.live/${locale}/guides` },
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
      <link rel="canonical" href={`https://www.iptvreseller.live/${locale}/guides`} />

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

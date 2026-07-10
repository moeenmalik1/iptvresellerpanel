import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ComparisonsClient from "./ComparisonsClient";
import { ALL_PANELS } from "@/app/lib/panelData";
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

export default async function ComparisonsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });
  const c = await getTranslations({ locale, namespace: "common" });

  const regionName = c("regionName");

  const getHighCtrComparisonsMetadata = () => {
    switch (locale) {
      case "en-gb":
        return {
          titleText: "Compare UK IPTV Reseller Panels: BT & Virgin Media Tested | Fox IPTV Panels",
          descText: "Frustrated with UK ISP blocks? Compare the best 22 white-label IPTV panels in the UK. Uptime reviews, credit pricing, and buffer-free performance analysis.",
        };
      case "en-au":
        return {
          titleText: "Compare AU IPTV Reseller Panels: NBN Speed & Peering Results | Fox IPTV Panels",
          descText: "Buffer-free Australia IPTV? Compare 22 wholesale reseller dashboards side-by-side. See credit prices, NBN latency reviews, and instant activations.",
        };
      case "es":
        return {
          titleText: "Comparativa de los 22 Mejores Paneles IPTV: Sin Cortes y Mayor Margen | Fox IPTV Panels",
          descText: "¿Harto de paneles lentos y cortes? Compare los 22 principales paneles de marca blanca en España lado a lado. Filtre por estabilidad, soporte y costo.",
        };
      case "fr":
        return {
          titleText: "Comparatif 22 Meilleurs Panneaux Revendeur IPTV : Finis les Blocages | Fox IPTV Panels",
          descText: "Assez des serveurs instables ? Comparez les 22 meilleurs panneaux IPTV en marque blanche côte à côte. Prix des crédits, stabilité et essais gratuits.",
        };
      case "pt":
        return {
          titleText: "Comparar 22 Painéis de Revendedor IPTV: Sem Travamento e Mais Lucro | Fox IPTV Panels",
          descText: "Cansado de perder clientes? Compare os 22 melhores painéis IPTV em Portugal lado a lado. Preço dos créditos, tempo de ativação, estabilidade e suporte.",
        };
      case "sv":
        return {
          titleText: "Jämför 22 IPTV Återförsäljarpaneler: Ingen Buffring & Bäst Pris | Fox IPTV Panels",
          descText: "Trött på missnöjda kunder? Jämför de 22 bästa IPTV-återförsäljarpanelerna på den svenska marknaden. Pris per kredit, drifttid och testkonton.",
        };
      case "no":
        return {
          titleText: "Sammenlign 22 IPTV Forhandlerpaneler: Stabil Strømming Uten Bufring | Fox IPTV Panels",
          descText: "Søk etter stabilt forhandlerpanel? Sammenlign de 22 beste IPTV-forhandlerpanelene i Norge. Se kredittpriser, driftstidsgarantier og supportvurdering.",
        };
      default:
        return {
          titleText: "Compare 22 Best IPTV Reseller Panels 2026: Stop Buffering | Fox IPTV Panels",
          descText: "Tired of laggy panels & angry clients? Compare the top 22 premium white-label IPTV dashboards side-by-side. Filter by 4K stability, uptime SLA & credits costs.",
        };
    }
  };

  const { titleText, descText } = getHighCtrComparisonsMetadata();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "es" ? "Inicio" : "Home", item: `https://www.iptvreseller.live/${locale}` },
      { "@type": "ListItem", position: 2, name: locale === "es" ? "Comparativas" : "Compare Panels", item: `https://www.iptvreseller.live/${locale}/comparisons` },
    ],
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "es" ? `Comparativa de Paneles IPTV 2026 — ${regionName}` : `IPTV Reseller Panel Comparisons 2026 — ${regionName}`,
    description: descText,
    url: `https://www.iptvreseller.live/${locale}/comparisons`,
    itemListElement: ALL_PANELS.map((panel, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${panel.name} IPTV Reseller Panel`,
      url: `https://www.iptvreseller.live/${locale}/${panel.slug}`,
    })),
  };

  return (
    <>
      <title>{titleText}</title>
      <meta name="description" content={descText} />
      <meta
        name="keywords"
        content="iptv reseller panel comparison, buy wholesale iptv credits, best iptv dashboard 2026, white label iptv panels, cheap iptv credits, xtream codes reseller"
      />
      <link rel="canonical" href={`https://www.iptvreseller.live/${locale}/comparisons`} />

      {/* Structured SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />

      <Header />
      <ComparisonsClient />
      <Footer />
    </>
  );
}

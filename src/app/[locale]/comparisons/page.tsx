import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ComparisonsClient from "./ComparisonsClient";
import { ALL_PANELS } from "@/app/lib/panelData";
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

export default async function ComparisonsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const c = await getTranslations({ locale, namespace: "common" });

  const regionName = c("regionName");

  const titleText = locale === "es"
    ? `Comparar los Mejores Paneles de Revendedor IPTV 2026 en ${regionName} | Fox IPTV Panels`
    : `Compare the Best IPTV Reseller Panels 2026 in ${regionName} | Fox IPTV Panels`;

  const descText = locale === "es"
    ? `Compare los 22 principales paneles de control IPTV de marca blanca en ${regionName} lado a lado. Filtre por calidad 4K/8K, soporte, conexiones y estabilidad.`
    : `Compare the top 22 premium white-label IPTV reseller panels side-by-side in ${regionName}. Filter by 4K/8K quality, device connections, uptime and dashboard features.`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "es" ? "Inicio" : "Home", item: `https://foxiptvpanels.com/${locale}` },
      { "@type": "ListItem", position: 2, name: locale === "es" ? "Comparativas" : "Compare Panels", item: `https://foxiptvpanels.com/${locale}/comparisons` },
    ],
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "es" ? `Comparativa de Paneles IPTV 2026 — ${regionName}` : `IPTV Reseller Panel Comparisons 2026 — ${regionName}`,
    description: descText,
    url: `https://foxiptvpanels.com/${locale}/comparisons`,
    itemListElement: ALL_PANELS.map((panel, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${panel.name} IPTV Reseller Panel`,
      url: `https://foxiptvpanels.com/${locale}/${panel.slug}`,
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
      <link rel="canonical" href={`https://foxiptvpanels.com/${locale}/comparisons`} />

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

import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContactClient from "./ContactClient";
import { getLocalizedPricing } from "@/app/lib/pricing";
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });
  const c = await getTranslations({ locale, namespace: "common" });

  const regionName = c("regionName");
  const pricing = getLocalizedPricing(locale);

  const titleText = locale === "es"
    ? `Comprar Créditos IPTV Reseller — Lista de Precios en ${regionName} | Fox IPTV Panels`
    : `Buy IPTV Reseller Credits — Price List & Direct Order in ${regionName} | Fox IPTV Panels`;

  const descText = locale === "es"
    ? `Consulte las tarifas de créditos IPTV más baratas para ${regionName}. Genere su pedido de panel de control por WhatsApp al instante. Aceptamos PayPal, Crypto, Tarjetas.`
    : `Check the cheapest bulk IPTV reseller credits price tiers for ${regionName}. Use our interactive WhatsApp builder to generate your dashboard order instantly. PayPal, Crypto, Cards accepted.`;

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": titleText,
    "description": descText,
    "url": `https://iptvreseller.live/${locale}/contact`
  };

  const pricingProductsSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": `Wholesale IPTV Reseller Credits Price Catalog — ${regionName}`,
    "itemListElement": [
      {
        "@type": "Offer",
        "name": pricing.starter.name,
        "price": pricing.starter.cost.toString(),
        "priceCurrency": pricing.currency,
        "description": pricing.starter.description
      },
      {
        "@type": "Offer",
        "name": pricing.growth.name,
        "price": pricing.growth.cost.toString(),
        "priceCurrency": pricing.currency,
        "description": pricing.growth.description
      },
      {
        "@type": "Offer",
        "name": pricing.enterprise.name,
        "price": pricing.enterprise.cost.toString(),
        "priceCurrency": pricing.currency,
        "description": pricing.enterprise.description
      }
    ]
  };

  return (
    <>
      <title>{titleText}</title>
      <meta name="description" content={descText} />
      <meta
        name="keywords"
        content="buy iptv credits, reseller panel cost, best iptv wholesale panels, become iptv reseller, cheap credits list, dynamic pricing calculator"
      />
      <link rel="canonical" href={`https://iptvreseller.live/${locale}/contact`} />

      {/* Structured SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingProductsSchema) }}
      />

      <Header />
      <ContactClient />
      <Footer />
    </>
  );
}

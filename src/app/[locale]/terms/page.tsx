import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useTranslations } from "next-intl";
import { getLocalizedPricing } from "@/app/lib/pricing";

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

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = useTranslations("common");
  const n = useTranslations("nav");
  const pricing = getLocalizedPricing(locale);

  const WHATSAPP_URL = c("whatsappUrl");
  const regionName = c("regionName");

  const titleText = locale === "es"
    ? `Términos de Servicio — Fox IPTV Panels | Créditos Mayoristas en ${regionName}`
    : `Terms of Service — Fox IPTV Panels | Wholesale IPTV Reseller Terms in ${regionName}`;

  const descText = locale === "es"
    ? `Entienda los Términos de Servicio de Fox IPTV Panels. Conozca el acuerdo de créditos mayoristas en ${regionName}.`
    : `Understand the Terms of Service for using Fox IPTV Panels. Learn about wholesale credit purchases and reseller dashboard rules in ${regionName}.`;

  const TERMS_PAGE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": titleText,
    "description": descText,
    "publisher": {
      "@type": "Organization",
      "name": "Fox IPTV Panels",
      "url": `https://foxiptvpanels.com/${locale}`
    }
  };

  // Helper to format values
  const fmt = (val: number) => {
    if (pricing.symbolAfter) {
      return `${val.toLocaleString()}${pricing.symbol}`;
    }
    return `${pricing.symbol}${val.toLocaleString()}`;
  };

  const starterRate = (pricing.starter.cost / 120).toFixed(2);
  const growthRate = (pricing.growth.cost / 200).toFixed(2);
  const enterpriseRate = (pricing.enterprise.cost / 500).toFixed(2);

  const starterRateFormatted = pricing.symbolAfter ? `${starterRate}${pricing.symbol}` : `${pricing.symbol}${starterRate}`;
  const growthRateFormatted = pricing.symbolAfter ? `${growthRate}${pricing.symbol}` : `${pricing.symbol}${growthRate}`;
  const enterpriseRateFormatted = pricing.symbolAfter ? `${enterpriseRate}${pricing.symbol}` : `${pricing.symbol}${enterpriseRate}`;

  return (
    <>
      <title>{titleText}</title>
      <meta name="description" content={descText} />
      <meta
        name="keywords"
        content="terms of service, wholesale credits agreement, reseller dashboard terms, fox iptv panels refund policy"
      />
      <link rel="canonical" href={`https://foxiptvpanels.com/${locale}/terms`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TERMS_PAGE_SCHEMA) }}
      />

      <Header />

      <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "110px", position: "relative" }}>
        {/* Background Orbs */}
        <div className="mesh-orb mesh-orb-1" style={{ top: "0px", right: "0px" }} />
        <div className="mesh-orb mesh-orb-2" style={{ bottom: "20%", left: "0px" }} />

        {/* Hero Section */}
        <section style={{ padding: "4rem 0 3rem", position: "relative", zIndex: 1 }}>
          <div className="section-container">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">{n("home")}</Link>
              <span aria-hidden="true">›</span>
              <span style={{ color: "var(--text-secondary)" }}>{locale === "es" ? "Términos de Servicio" : "Terms of Service"}</span>
            </nav>

            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div className="tag" style={{ marginBottom: "1rem" }}>{locale === "es" ? "Acuerdo y Directrices" : "Agreement & Guidelines"}</div>
              <h1 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "1rem"
              }}>
                {locale === "es" ? (
                  <>Términos de <span className="gradient-text">Servicio</span></>
                ) : (
                  <>Terms of <span className="gradient-text">Service</span></>
                )}
              </h1>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
                {locale === "es"
                  ? `Última actualización: 22 de mayo de 2026. Bienvenido a Fox IPTV Panels. Al comprar créditos mayoristas o utilizar nuestros paneles de marca blanca en ${regionName}, usted acepta estos términos.`
                  : `Last Updated: May 22, 2026. Welcome to Fox IPTV Panels. By accessing our platform, purchasing wholesale credits, or utilizing our white-label dashboards in ${regionName}, you agree to comply with the following terms.`}
              </p>

              {/* Glassmorphic Document Card */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    1. Wholesale Account Provisioning & Setup
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Fox IPTV Panels provides wholesale reseller account setups, white-label DNS configurations, and digital credit allocations. Resellers must provide accurate and verifiable registry information (including email and WhatsApp contact details) during sign-up. You are strictly responsible for preserving the confidentiality of your master dashboard passwords and credentials in {regionName}.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    2. Credits Purchasing, Tier Pricing & Digital Delivery
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Our wholesale credits are priced dynamically based on quantity tiers, providing high profit margins for resellers in {regionName}:
                  </p>
                  <ul style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
                    <li><strong>{pricing.starter.name} (120 Credits minimum):</strong> Priced at {starterRateFormatted}/credit ({fmt(pricing.starter.cost)} total).</li>
                    <li><strong>{pricing.growth.name} (200 Credits minimum):</strong> Priced at {growthRateFormatted}/credit ({fmt(pricing.growth.cost)} total).</li>
                    <li><strong>{pricing.enterprise.name} (500 Credits minimum):</strong> Priced at {enterpriseRateFormatted}/credit ({fmt(pricing.enterprise.cost)} total).</li>
                    <li><strong>Digital Delivery:</strong> Upon checkout and payment verification, reseller credits are instantly added to your dashboard panel. Standard setup time is under 5 minutes.</li>
                  </ul>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    3. Strict No-Refund Policy
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Due to the nature of digital inventory, software licensing, and immediate server resource provisioning, **all wholesale purchases of reseller panel credits are strictly final and non-refundable**. Once credits have been credited to your active reseller panel or a sub-reseller dashboard, they cannot be exchanged, reversed, or returned. We highly recommend testing our panels via our trial credits before committing to large-scale wholesale acquisitions.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    4. Platform Limitations & Intermediary Role
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    **Fox IPTV Panels does not host, compile, transmit, or stream any direct media broadcasts or video channels.** Our platform acts exclusively as a technical wholesale broker providing reseller database dashboards, credit provisioning engines, and API integrations for panels. All content stream paths and channel structures are operated independently by third-party providers. We offer no guarantees regarding the permanence, composition, or uptime of specific channels.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    5. Reseller Acceptable Use Guidelines
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    As an active reseller partner, you agree that you and your downstream customers will not:
                  </p>
                  <ul style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
                    <li>Abuse or overload server dashboards with automated scraper bots or API floods.</li>
                    <li>Restream, re-encode, or redistribute dashboard feeds for public rebroadcasting without prior wholesale authorization.</li>
                    <li>Utilize panel access details for malicious, unlawful, or hacking efforts targeting the network core.</li>
                  </ul>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginTop: "0.75rem", margin: 0 }}>
                    Violation of these acceptable use rules may result in the immediate lock of your reseller dashboard and forfeiture of any remaining credits, without liability to Fox IPTV Panels.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    6. Limitation of Liability
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Fox IPTV Panels, its directors, and technical affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from dashboard downtime, third-party server failures, connection speed fluctuations, or loss of profits arising out of your retail reselling business operations. Resellers operate their businesses independently, at their sole risk.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    7. Account Inactivity & Credit Longevity
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Reseller panels that remain fully inactive with zero logins or credit refreshes for a consecutive period exceeding 365 calendar days may be archived. To preserve active dashboard pipelines, ensure periodic dashboard logins.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    {locale === "es" ? "8. Consultas y Solicitudes de Soporte" : "8. Questions & Support Requests"}
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {locale === "es"
                      ? "Si tiene preguntas sobre estos términos, el uso de créditos o la facturación, comuníquese directamente con nuestro equipo."
                      : "If you have questions regarding these terms, digital credit usage thresholds, or billing configurations, please reach out directly to our global onboarding desk."}
                  </p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.75rem 1.5rem", borderRadius: "10px", textDecoration: "none", display: "inline-flex", gap: "8px", alignItems: "center", fontSize: "0.875rem" }}>
                    {locale === "es" ? "Discutir Términos por WhatsApp" : "Discuss Terms via WhatsApp"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

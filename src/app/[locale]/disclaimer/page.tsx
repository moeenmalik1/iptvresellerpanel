import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useTranslations } from "next-intl";

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

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = useTranslations("common");
  const n = useTranslations("nav");

  const WHATSAPP_URL = c("whatsappUrl");
  const regionName = c("regionName");

  const titleText = locale === "es"
    ? `Descargo de Responsabilidad Legal — Fox IPTV Panels | Intermediario en ${regionName}`
    : `Legal Disclaimer — Fox IPTV Panels | Wholesale Intermediary Statement in ${regionName}`;

  const descText = locale === "es"
    ? `Lea el descargo de responsabilidad legal de Fox IPTV Panels. Conozca nuestros límites de responsabilidad en ${regionName}.`
    : `Read the formal legal Disclaimer for Fox IPTV Panels. Understand that we do not host or stream digital media feeds directly in ${regionName}.`;

  const DISCLAIMER_PAGE_SCHEMA = {
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

  return (
    <>
      <title>{titleText}</title>
      <meta name="description" content={descText} />
      <meta
        name="keywords"
        content="legal disclaimer, fox iptv panels disclaimer, stream hosting exclusion, third party panels limitation"
      />
      <link rel="canonical" href={`https://foxiptvpanels.com/${locale}/disclaimer`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DISCLAIMER_PAGE_SCHEMA) }}
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
              <span style={{ color: "var(--text-secondary)" }}>{locale === "es" ? "Descargo de Responsabilidad" : "Disclaimer"}</span>
            </nav>

            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div className="tag" style={{ marginBottom: "1rem" }}>{locale === "es" ? "Límites de Responsabilidad" : "Liability Boundaries"}</div>
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
                  <>Descargo de <span className="gradient-text">Responsabilidad</span></>
                ) : (
                  <>Legal <span className="gradient-text">Disclaimer</span></>
                )}
              </h1>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
                {locale === "es"
                  ? `Última actualización: 22 de mayo de 2026. Lea atentamente este descargo de responsabilidad antes de utilizar Fox IPTV Panels en ${regionName}.`
                  : `Last Updated: May 22, 2026. Please read this disclaimer carefully before using Fox IPTV Panels, purchasing credits, or setting up reseller portals in ${regionName}.`}
              </p>

              {/* Glassmorphic Document Card */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    1. Intermediary Service and Hosting Exclusion
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    **Fox IPTV Panels is not a streaming service, nor do we host, store, stream, compile, or transmit any audio/visual broadcasts, live television channels, or digital media feeds on our servers.**
                    Our business is strictly confined to providing wholesale database credits, reseller panel activation tools (e.g., Xtream Codes, M3U portals), and technical brokerage configurations in {regionName}. All digital media streams, layouts, and channels are controlled, hosted, and operated entirely by independent, third-party backend server networks. Fox IPTV Panels has no physical influence or access rights to their streaming cores.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    2. Third-Party Streams and Network Composition
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Any mentions of channels, server lists (e.g. 15,000+ Channels or 4K/8K content), panel specifications, or visual guides are based on technical details provided by their respective panel operations. Fox IPTV Panels does not endorse, verify, or own these feeds. Under no circumstances shall Fox IPTV Panels be held liable for channel deletions, feed buffering, audio-video latency, or the total termination of a third-party server network.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    3. Reseller Independence and Legal Risks
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Resellers operate as completely independent businesses and technical entities. Fox IPTV Panels does not advise on, manage, or assume liability for the legal requirements or regulatory guidelines within your specific retail markets (including the UK, USA, EU, or global territories). Resellers are solely responsible for ensuring that their downstream sales, clients, and configurations comply with all local intellectual property, copyright, and digital broadcast laws.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    4. "As Is" and "As Available" Warranties
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    The website, reseller dashboard integrations, calculations generated by our interactive reseller calculator, and server access pipelines are provided on an **"as is"** and **"as available"** basis, without representations or warranties of any kind. We disclaim all warranties, including but not limited to the implied warranties of merchantability, uptime SLAs, or fitness for a specific reseller marketing strategy.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    5. Dynamic Profit Calculator Disclaimers
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Our interactive profit calculator is designed solely for theoretical educational and illustrative reselling projections. It models profit margins based on custom credits prices ($1.00, $0.90, $0.70) and user-supplied retail customer rates. **It does not represent a guarantee of actual commercial profit, active customer signups, or business success**. The actual margin depends wholly on your marketing, customer acquisition costs, and server administration efforts.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    6. External Web Links
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    This platform may contain hyperlinks to external sites, dashboards, or reseller DNS records not controlled by Fox IPTV Panels. We do not inspect, audit, or assume liability for the privacy policies, terms, or copyright compliance of these external resources.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    {locale === "es" ? "7. Límites del Soporte Técnico" : "7. Technical Support Boundaries"}
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {locale === "es"
                      ? "Nuestro soporte de WhatsApp está dedicado a brindar instrucciones de ayuda para la asignación de créditos, el enrutamiento de DNS y la incorporación."
                      : "Our WhatsApp support is dedicated to helper instructions for panel credit balance allocations, DNS setup routing, and portal onboarding."}
                  </p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.75rem 1.5rem", borderRadius: "10px", textDecoration: "none", display: "inline-flex", gap: "8px", alignItems: "center", fontSize: "0.875rem" }}>
                    {locale === "es" ? "Hablar con Soporte Técnico" : "Speak with Technical Support"}
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

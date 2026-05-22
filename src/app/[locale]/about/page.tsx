import { useTranslations } from "next-intl";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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

const ABOUT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Fox IPTV Panels",
  "description": "Fox IPTV Panels is the world's leading wholesale IPTV reseller panel provider. Supporting 5,000+ resellers across the UK, USA, and EU with 22 premium IPTV servers, low latency, and 99.9% uptime guarantees.",
  "publisher": {
    "@type": "Organization",
    "name": "Fox IPTV Panels",
    "url": "https://foxiptvpanels.com"
  }
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = useTranslations("about");
  const c = useTranslations("common");
  const n = useTranslations("nav");
  const m = useTranslations("meta");

  const WHATSAPP_URL = c("whatsappUrl");

  return (
    <>
      <title>{`About Us — Fox IPTV Panels | ${c("regionName")} Wholesale IPTV`}</title>
      <meta
        name="description"
        content={`${t("desc1").substring(0, 160)}...`}
      />
      <meta name="keywords" content={m("keywords")} />
      <link rel="canonical" href={`https://foxiptvpanels.com/${locale}/about`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_PAGE_SCHEMA) }}
      />

      <Header />

      <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "110px", position: "relative" }}>
        {/* Background Orbs */}
        <div className="mesh-orb mesh-orb-1" style={{ top: "0px", right: "0px" }} />
        <div className="mesh-orb mesh-orb-2" style={{ bottom: "20%", left: "0px" }} />

        {/* Hero Section */}
        <section style={{ padding: "3rem 0 3rem", position: "relative", zIndex: 1 }}>
          <div className="section-container">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">{n("home")}</Link>
              <span aria-hidden="true">›</span>
              <span style={{ color: "var(--text-secondary)" }}>{n("about")}</span>
            </nav>

            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "center" }} className="panel-hero-grid">
              {/* Left Column */}
              <div>
                <div className="tag" style={{ marginBottom: "1rem" }}>{locale === "es" ? "Proveedor Mayorista Establecido" : "Established Wholesale Supplier"}</div>
                <h1 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem"
                }}>
                  {locale === "es" ? (
                    <>Empoderando a Emprendedores para Crear su <span className="gradient-text">Imperio de Streaming</span></>
                  ) : (
                    <>Empowering Entrepreneurs to Build Their Own <span className="gradient-text">Streaming Empire</span></>
                  )}
                </h1>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  {t("desc1")}
                </p>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  {t("desc2")}
                </p>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.8rem 1.75rem", borderRadius: "10px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    {locale === "es" ? "Asóciese con Nosotros Hoy" : "Partner With Us Today"}
                  </a>
                  <Link href={`/${locale}/comparisons`} className="btn-secondary" style={{ padding: "0.8rem 1.75rem", borderRadius: "10px", textDecoration: "none", display: "inline-block" }}>
                    {locale === "es" ? "Comparar Paneles" : "Compare Our Panels"}
                  </Link>
                </div>
              </div>

              {/* Right Column — Premium Statistics Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--accent-purple)", fontFamily: "'Outfit', sans-serif" }}>22+</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.5rem" }}>
                    {locale === "es" ? "Servidores IPTV Premium" : "Premium IPTV Servers"}
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "0.5rem 0 0" }}>
                    {locale === "es" ? "Paneles diversos adaptados a principiantes y expertos." : "Diverse panels suited for beginners and elites."}
                  </p>
                </div>
                <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--accent-blue)", fontFamily: "'Outfit', sans-serif" }}>5k+</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.5rem" }}>
                    {locale === "es" ? "Socios Globales Activos" : "Active Global Partners"}
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "0.5rem 0 0" }}>
                    {locale === "es" ? "Revendedores escalando su negocio en euros y dólares." : "Resellers scaling high-margin businesses worldwide."}
                  </p>
                </div>
                <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#22c55e", fontFamily: "'Outfit', sans-serif" }}>99.9%</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.5rem" }}>
                    {locale === "es" ? "Garantía de Tiempo de Actividad" : "Uptime SLA Guarantee"}
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "0.5rem 0 0" }}>
                    {locale === "es" ? "Sistemas de respaldo de hardware redundantes a nivel mundial." : "Redundant hardware backup systems globally."}
                  </p>
                </div>
                <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#eab308", fontFamily: "'Outfit', sans-serif" }}>&lt; 5m</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.5rem" }}>
                    {locale === "es" ? "Tiempo Promedio de Activación" : "Average Activation Time"}
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "0.5rem 0 0" }}>
                    {locale === "es" ? "Entrega automatizada para créditos mayoristas." : "Automated script delivery for wholesale credits."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Values / Key Pillars */}
        <section style={{ padding: "5rem 0", background: "rgba(255,255,255,0.01)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="section-container">
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 4rem" }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "2.25rem", color: "var(--text-primary)", marginBottom: "1rem" }}>
                {locale === "es" ? "Lo que diferencia a Fox IPTV Panels" : "What Sets Fox IPTV Panels Apart"}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                {locale === "es" ? "Nos enfocamos en la estabilidad, flexibilidad y soporte total del socio." : "We focus on stability, flexibility, and absolute customer onboarding support."}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="panel-hero-grid">
              <div className="glass-card" style={{ padding: "2rem", borderRadius: "16px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(139,92,246,0.15)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "var(--accent-purple)", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                  ⚡
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {locale === "es" ? "Poder Mayorista" : "Wholesale Credits Power"}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {locale === "es" ? (
                    "Al comprar su inventario de revendedor al por mayor, usted controla los precios minoristas de sus clientes. Conserve el 100% de sus ganancias sin tarifas de renovación obligatorias."
                  ) : (
                    "By purchasing your reseller inventory in bulk, you control retail end-user rates. Keep 100% of your earnings with zero licensing overhead fees or mandatory renewals."
                  )}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderRadius: "16px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "var(--accent-blue)", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                  🌍
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {locale === "es" ? "Servidores Geo-Distribuidos" : "Global Geo-Distributed Servers"}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {locale === "es" ? (
                    "Nuestros servidores de red están ubicados en ubicaciones óptimas para España, el Reino Unido y los EE. UU. Disfrute de transmisiones fluidas en 4K y 8K."
                  ) : (
                    "Our network servers are strategically placed across the UK, USA, EU, and Middle East. Enjoy crystal clear 4K & 8K streaming with zero local ISP buffering."
                  )}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderRadius: "16px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(34,197,94,0.15)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "#22c55e", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                  🛠
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {locale === "es" ? "Portal de Marca Blanca" : "White-Label DNS Portal Support"}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {locale === "es" ? (
                    "Personalice su panel de control bajo su propio dominio. Proteja las cuentas de sus clientes, configure los diseños y reclute fácilmente sub-revendedores."
                  ) : (
                    "Brand your dashboard under your custom domains. Protect client accounts, customize layouts, and easily create sub-reseller setups underneath your primary account."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global reach map / WhatsApp card */}
        <section style={{ padding: "5rem 0" }}>
          <div className="section-container">
            <div className="glass-card" style={{ padding: "3rem", borderRadius: "24px", textAlign: "center", background: "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(6,182,212,0.04) 100%)", border: "1px solid var(--border-color)" }}>
              <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.25rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem" }}>
                  {locale === "es" ? "Únase a más de 5,000 revendedores exitosos" : "Join 5,000+ Successful Resellers Globally"}
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  {locale === "es" ? (
                    "Ya sea que se encuentre en Madrid, Barcelona, Sevilla o en el extranjero, nuestro equipo de soporte experto lo guiará en la configuración. Solicite hoy mismo una prueba gratuita."
                  ) : (
                    "Whether you are based in London, New York, or Paris — our expert onboarding team guides you through the setup process. Request your panel free trials today and experience true IPTV performance."
                  )}
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.9rem 2.25rem", borderRadius: "10px", fontSize: "1rem", textDecoration: "none", display: "inline-flex", gap: "8px", alignItems: "center" }}>
                  {locale === "es" ? "Comience su Prueba Gratuita Ahora" : "Start Your Free Trial Now"}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

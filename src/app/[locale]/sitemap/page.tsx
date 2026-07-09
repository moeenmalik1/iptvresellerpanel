import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ALL_PANELS } from "@/app/lib/panelData";
import { getGuides } from "@/app/lib/guidesData";
import { setRequestLocale } from "next-intl/server";

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

export default async function SitemapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const guidesList = getGuides(locale);
  const lc = (map: Record<string, string>) => map[locale] ?? map["en"] ?? "";

  const SITEMAP_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://foxiptvpanels.com/${locale}/sitemap/#webpage`,
    "url": `https://foxiptvpanels.com/${locale}/sitemap`,
    "name": lc({
      en: "HTML Sitemap — Fox IPTV Panels",
      es: "Mapa del Sitio HTML — Fox IPTV Panels",
      fr: "Plan du Site HTML — Fox IPTV Panels",
      pt: "Mapa do Site HTML — Fox IPTV Panels",
      sv: "Sajtkarta HTML — Fox IPTV Panels",
      no: "Nettstedskart HTML — Fox IPTV Panels"
    }),
    "description": lc({
      en: "Navigate all reseller panels, technical guides, comparisons, and policy sections on Fox IPTV Panels.",
      es: "Navegue por todos los paneles de revendedor, guías técnicas, comparaciones y secciones de políticas en Fox IPTV Panels.",
      fr: "Accédez à tous nos panneaux revendeurs, guides techniques, comparatifs et politiques de Fox IPTV Panels.",
      pt: "Navegue por todos os painéis, guias técnicos, comparativos e secções de políticas da Fox IPTV Panels."
    })
  };

  const coreLinks = [
    { label: lc({ en: "Home", es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem" }), href: `/${locale}` },
    { label: lc({ en: "Panel Comparisons", es: "Comparativas de Paneles", fr: "Comparatifs de Panneaux", pt: "Comparativas de Painéis", sv: "Paneljämförelser", no: "Panelsammenligninger" }), href: `/${locale}/comparisons` },
    { label: lc({ en: "Reseller Academy Guides", es: "Guías Académicas Reseller", fr: "Guides Académie Revendeur", pt: "Guias Académicos de Revenda", sv: "Återförsäljuryrken", no: "Forhandlerguider" }), href: `/${locale}/guides` },
    { label: lc({ en: "About Us", es: "Sobre Nosotros", fr: "À Propos", pt: "Sobre Nós", sv: "Om Oss", no: "Om Oss" }), href: `/${locale}/about` },
    { label: lc({ en: "Contact Sales", es: "Contacto Ventas", fr: "Contact Commercial", pt: "Contacto Comercial", sv: "Kontakt", no: "Kontakt" }), href: `/${locale}/contact` }
  ];

  const legalLinks = [
    { label: lc({ en: "Privacy Policy", es: "Política de Privacidad", fr: "Politique de Confidentialité", pt: "Política de Privacidade", sv: "Integritetspolicy", no: "Personvernserklæring" }), href: `/${locale}/privacy` },
    { label: lc({ en: "Terms of Service", es: "Términos de Servicio", fr: "Conditions d'Utilisation", pt: "Termos de Serviço", sv: "Användarvillkor", no: "Brukervilkår" }), href: `/${locale}/terms` },
    { label: lc({ en: "Disclaimer", es: "Descargo de Responsabilidad", fr: "Clause de Non-responsabilité", pt: "Aviso de Responsabilidade", sv: "Ansvarsfriskrivning", no: "Ansvarsfraskrivelse" }), href: `/${locale}/disclaimer` },
    { label: "DMCA Policy", href: `/${locale}/dmca` },
    { label: lc({ en: "Editorial Guidelines", es: "Directrices Editoriales", fr: "Charte Éditoriale", pt: "Diretrizes Editoriais", sv: "Redaktionella Riktlinjer", no: "Redaksjonelle Retningslinjer" }), href: `/${locale}/editorial-guidelines` },
    { label: lc({ en: "Our Team & Authors", es: "Nuestro Equipo", fr: "Notre Équipe", pt: "Nossa Equipa", sv: "Vårt Team", no: "Vårt Team" }), href: `/${locale}/authors` }
  ];

  return (
    <>
      <title>
        {lc({
          en: "HTML Sitemap — Discover All Pages & Guides | Fox IPTV Panels",
          es: "Mapa del Sitio HTML — Navegue por todas las Páginas | Fox IPTV Panels",
          fr: "Plan du Site HTML — Accéder à toutes nos pages | Fox IPTV Panels",
          pt: "Mapa do Site HTML — Navegar por todas as Páginas | Fox IPTV Panels",
          sv: "Sajtkarta HTML — Hitta alla sidor och guider | Fox IPTV Panels",
          no: "Nettstedskart HTML — Finn alle sider og guider | Fox IPTV Panels"
        })}
      </title>
      <meta 
        name="description" 
        content={lc({
          en: "Comprehensive HTML Sitemap listing all wholesale IPTV reseller panel pages, comparison tables, dynamic setup guides, and compliance assets.",
          es: "Mapa del sitio HTML completo que enumera todos los paneles de revendedor de IPTV, tablas de comparación, guías de configuración y políticas.",
          fr: "Plan du site complet listant tous les panneaux de revente, tableaux de comparaison, guides d'installation et documents réglementaires.",
          pt: "Mapa do site detalhado que lista todos os painéis de revendedor, tabelas de comparação, guias de configuração e ativos de conformidade."
        })} 
      />
      <link rel="canonical" href={`https://foxiptvpanels.com/${locale}/sitemap`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SITEMAP_SCHEMA) }}
      />

      <Header />

      <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "110px", position: "relative" }}>
        {/* Orbs */}
        <div className="mesh-orb mesh-orb-1" style={{ top: "0px", right: "0px" }} />
        <div className="mesh-orb mesh-orb-2" style={{ bottom: "10%", left: "0px" }} />

        <div className="section-container" style={{ padding: "4rem 1.5rem" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
            <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
              {lc({ en: "Home", es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem" })}
            </Link>
            <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text-secondary)" }}>
              {lc({ en: "Sitemap", es: "Mapa del Sitio", fr: "Plan du Site", pt: "Mapa do Site", sv: "Sajtkarta", no: "Nettstedskart" })}
            </span>
          </nav>

          <header style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1rem"
            }}>
              {lc({
                en: "HTML Sitemap",
                es: "Mapa del Sitio",
                fr: "Plan du Site",
                pt: "Mapa do Site",
                sv: "HTML Sajtkarta",
                no: "HTML Nettstedskart"
              })}
              <span className="gradient-text"> {lc({ en: "Directory", es: "General", fr: "Général", pt: "Geral", sv: "Karta", no: "Kart" })}</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {lc({
                en: "Explore the complete architectural layout of Fox IPTV Panels. Find commercial comparison reports, tech walkthroughs, legal entities, and premium white-label resellers assets.",
                es: "Explore la arquitectura completa de Fox IPTV Panels. Encuentre informes comerciales, guías técnicas, datos legales y recursos mayoristas de marca blanca.",
                fr: "Découvrez l'organisation complète de notre plateforme. Trouvez vos comparatifs de panneaux, tutoriels d'intégration, informations légales et guides.",
                pt: "Explore a estrutura completa da Fox IPTV Panels. Aceda a relatórios comparativos, tutoriais técnicos, informações legais e recursos grossistas de marca branca."
              })}
            </p>
          </header>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "3rem", marginBottom: "4rem" }} className="panel-hero-grid">
            
            {/* Left Column — Panels & Academy */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              
              {/* IPTV Reseller Panels catalog */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px" }}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>🦊</span>
                  {lc({
                    en: "Wholesale IPTV Panels",
                    es: "Catálogo de Paneles IPTV",
                    fr: "Catalogue des Panneaux IPTV",
                    pt: "Catálogo de Painéis IPTV",
                    sv: "IPTV-Återförsäljarpaneler",
                    no: "IPTV-Forhandlerpaneler"
                  })}
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }} className="reviewer-border-fix">
                  {ALL_PANELS.map((panel) => (
                    <Link
                      key={panel.slug}
                      href={`/${locale}/${panel.slug}`}
                      className="sitemap-panel-link"
                      style={{
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        padding: "8px 12px",
                        background: "rgba(255,255,255,0.02)",
                        borderRadius: "8px",
                        border: "1px solid var(--border-color)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}
                    >
                      <span style={{ color: panel.accentColor || "#ea580c" }}>●</span>
                      {panel.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Academy Guides catalog */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px" }}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>📚</span>
                  {lc({
                    en: "Reseller Academy & Guides",
                    es: "Academia y Guías Técnicas",
                    fr: "Académie & Guides Reseller",
                    pt: "Academia e Guias Técnicos",
                    sv: "Utbildning & Tekniska Guider",
                    no: "Opplæring & Tekniske Guider"
                  })}
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {guidesList.map((guide) => (
                    <li key={guide.id}>
                      <Link
                        href={`/${locale}/guides/${guide.id}`}
                        className="sitemap-guide-link"
                        style={{
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          lineHeight: 1.4
                        }}
                      >
                        <span style={{ color: "var(--accent-cyan)", marginTop: "2px" }}>➔</span>
                        <div>
                          <div style={{ fontWeight: 650, color: "var(--text-primary)", transition: "color 0.2s" }} className="sitemap-guide-title">{guide.title}</div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{guide.category} • {guide.readTime}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column — Core & Legal Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              
              {/* Core Corporate Routes */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px" }}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>⚡</span>
                  {lc({
                    en: "Core Sections",
                    es: "Secciones Principales",
                    fr: "Sections Principales",
                    pt: "Secções Principais",
                    sv: "Huvudsidor",
                    no: "Hovedsider"
                  })}
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {coreLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="sitemap-core-link"
                        style={{
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        <span style={{ color: "var(--accent-purple)" }}>✦</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal & Editorial compliance */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px" }}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>🛡️</span>
                  {lc({
                    en: "Compliance & Legal",
                    es: "Cumplimiento y Legal",
                    fr: "Réglementation et Légal",
                    pt: "Conformidade e Legal",
                    sv: "Policy & Regler",
                    no: "Retningslinjer & Vilkår"
                  })}
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="sitemap-legal-link"
                        style={{
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        <span style={{ color: "var(--accent-cyan)" }}>✦</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* Pure, high-performance visual hover rules to prevent link prop rendering errors */}
      <style>{`
        .sitemap-panel-link {
          transition: all 0.2s ease !important;
        }
        .sitemap-panel-link:hover {
          border-color: var(--accent-purple) !important;
          color: var(--text-primary) !important;
          background: rgba(139,92,246,0.05) !important;
          transform: translateY(-1px);
        }
        .sitemap-guide-link {
          transition: all 0.2s ease !important;
        }
        .sitemap-guide-link:hover .sitemap-guide-title {
          color: var(--accent-cyan) !important;
        }
        .sitemap-core-link {
          transition: all 0.2s ease !important;
        }
        .sitemap-core-link:hover {
          color: var(--text-primary) !important;
          transform: translateX(2px);
        }
        .sitemap-legal-link {
          transition: all 0.2s ease !important;
        }
        .sitemap-legal-link:hover {
          color: var(--text-primary) !important;
          transform: translateX(2px);
        }
      `}</style>
    </>
  );
}

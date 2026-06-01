import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

export default function Footer() {
  const locale = useLocale();
  const c = useTranslations("common");
  const t = getSectionTranslations(locale).footer;

  const getLocalizedHref = (href: string) => {
    if (href === "/") return `/${locale}`;
    if (href.startsWith("/#")) return `/${locale}${href.substring(1)}`;
    return `/${locale}${href}`;
  };

  const whatsappUrl = c("whatsappUrl");
  const whatsappLabel = c("whatsappSupport");

  // Localized Link Arrays
  const footerNav = [
    { label: locale === "es" ? "Inicio" : locale === "fr" ? "Accueil" : locale === "pt" ? "Início" : locale === "sv" ? "Hem" : locale === "no" ? "Hjem" : "Home", href: "/" },
    { label: locale === "es" ? "Servidores IPTV" : locale === "fr" ? "Serveurs IPTV" : locale === "pt" ? "Servidores IPTV" : locale === "sv" ? "IPTV Servrar" : locale === "no" ? "IPTV Servere" : "IPTV Servers", href: "/servers" },
    { label: locale === "es" ? "Comparativas de Paneles" : locale === "fr" ? "Comparatifs de Panneaux" : locale === "pt" ? "Comparativas de Painéis" : locale === "sv" ? "Paneljämförelser" : locale === "no" ? "Panelsammenligninger" : "Panel Comparisons", href: "/comparisons" },
    { label: locale === "es" ? "Guías Reseller" : locale === "fr" ? "Guides Revendeur" : locale === "pt" ? "Guias de Revenda" : locale === "sv" ? "Återförsäljuryrken" : locale === "no" ? "Forhandlerguider" : "Reseller Guides", href: "/guides" },
    { label: locale === "es" ? "Nosotros" : locale === "fr" ? "À Propos" : locale === "pt" ? "Sobre Nós" : locale === "sv" ? "Om Oss" : locale === "no" ? "Om Oss" : "About Us", href: "/about" },
    { label: locale === "es" ? "Contacto" : locale === "fr" ? "Contact" : locale === "pt" ? "Contacto" : locale === "sv" ? "Kontakt" : locale === "no" ? "Kontakt" : "Contact", href: "/contact" },
    { label: locale === "es" ? "Política de Privacidad" : locale === "fr" ? "Politique de Confidentialité" : locale === "pt" ? "Política de Privacidade" : locale === "sv" ? "Integritetspolicy" : locale === "no" ? "Personvernserklæring" : "Privacy Policy", href: "/privacy" },
    { label: locale === "es" ? "Términos de Servicio" : locale === "fr" ? "Conditions d'Utilisation" : locale === "pt" ? "Termos de Serviço" : locale === "sv" ? "Användarvillkor" : locale === "no" ? "Brukervilkår" : "Terms of Service", href: "/terms" },
    { label: locale === "es" ? "Descargo de Responsabilidad" : locale === "fr" ? "Clause de Non-responsabilité" : locale === "pt" ? "Aviso de Responsabilidade" : locale === "sv" ? "Ansvarsfriskrivning" : locale === "no" ? "Ansvarsfraskrivelse" : "Disclaimer", href: "/disclaimer" },
    { label: "DMCA Policy", href: "/dmca" },
    { label: locale === "es" ? "Mapa del Sitio" : locale === "fr" ? "Plan du Site" : locale === "pt" ? "Mapa do Site" : locale === "sv" ? "Sajtkarta" : locale === "no" ? "Nettstedskart" : "HTML Sitemap", href: "/sitemap" },
    { label: locale === "es" ? "Directrices Editoriales" : locale === "fr" ? "Charte Éditoriale" : locale === "pt" ? "Diretrizes Editoriais" : locale === "sv" ? "Redaktionella Riktlinjer" : locale === "no" ? "Redaksjonelle Retningslinjer" : "Editorial Guidelines", href: "/editorial-guidelines" },
    { label: locale === "es" ? "Nuestro Equipo" : locale === "fr" ? "Notre Équipe" : locale === "pt" ? "Nossa Equipa" : locale === "sv" ? "Vårt Team" : locale === "no" ? "Vårt Team" : "Our Editorial Team", href: "/authors" },
  ];

  const serverPages = [
    { label: "B1G IPTV Reseller Panel", href: "/b1g-iptv-reseller-panel" },
    { label: "Strong 4K IPTV Reseller Panel", href: "/strong-4k-iptv-reseller-panel" },
    { label: "Strong 8K IPTV Reseller Panel", href: "/strong-8k-iptv-reseller-panel" },
    { label: "Lion OTT IPTV Reseller Panel", href: "/lion-ott-iptv-reseller-panel" },
    { label: "Ultra 8K OTT Reseller Panel", href: "/ultra-8k-ott-iptv-reseller-panel" },
    { label: "Nexon IPTV Reseller Panel", href: "/nexon-iptv-reseller-panel" },
    { label: "Crystal OTT Reseller Panel", href: "/crystal-ott-iptv-reseller-panel" },
    { label: "Mega OTT Wholesale Panel", href: "/mega-ott-iptv-reseller-panel" },
    { label: "Infinity Premium IPTV Panel", href: "/infinity-premium-iptv-reseller-panel" },
    { label: "Magnum Golden OTT Panel", href: "/magnum-golden-ott-iptv-reseller-panel" },
    { label: "Opplex IPTV Reseller Panel", href: "/opplex-iptv-reseller-panel" },
    { label: locale === "es" ? "Ver los 22 Paneles ↗" : locale === "fr" ? "Voir les 22 Panneaux ↗" : locale === "pt" ? "Ver todos os 22 Painéis ↗" : locale === "sv" ? "Visa alla 22 Paneler ↗" : locale === "no" ? "Se alle 22 Paneler ↗" : "View All 22 IPTV Panels ↗", href: "/#panels" },
  ];

  const comparePages = [
    { label: "Strong 4K vs Lion OTT", href: "/comparisons/strong-4k-vs-lion-ott" },
    { label: locale === "es" ? "Crystal vs Nexon — Comparativa" : locale === "fr" ? "Crystal vs Nexon — Comparatif" : locale === "pt" ? "Crystal vs Nexon — Comparação" : locale === "sv" ? "Crystal vs Nexon — Jämförelse" : locale === "no" ? "Crystal vs Nexon — Sammenligning" : "Crystal vs Nexon — Panel Comparison", href: "/comparisons/crystal-vs-nexon" },
    { label: locale === "es" ? "El Mejor Panel IPTV Reseller 2026" : locale === "fr" ? "Meilleur Panneau Revendeur 2026" : locale === "pt" ? "Melhores Painéis IPTV Reseller 2026" : locale === "sv" ? "Bästa IPTV-Återförsäljarpaneler 2026" : locale === "no" ? "Beste IPTV-Forhandlerpaneler 2026" : "Best IPTV Reseller Panels 2026", href: "/comparisons/best-iptv-reseller-panels-2026" },
    { label: locale === "es" ? "El Panel IPTV Reseller Más Barato" : locale === "fr" ? "Panneau IPTV le Moins Cher" : locale === "pt" ? "Painel IPTV Reseller Mais Barato" : locale === "sv" ? "Billigaste IPTV-Återförsäljarpanelen 2026" : locale === "no" ? "Billigste IPTV-Forhandlerpanelet 2026" : "Cheapest IPTV Reseller Panel 2026", href: "/comparisons/cheapest-iptv-reseller-panel" },
  ];

  const guides = [
    { label: locale === "es" ? "Cómo Iniciar un Negocio IPTV Reseller" : locale === "fr" ? "Comment Démarrer l'Activité IPTV" : locale === "pt" ? "Como Iniciar um Negócio de Revendedor IPTV" : locale === "sv" ? "Hur man Startar IPTV-Återförsäljning" : locale === "no" ? "Slik Starter du IPTV-Forhandling" : "How To Start IPTV Reseller Business", href: "/guides/how-to-start-iptv-reseller-business" },
    { label: locale === "es" ? "Sistema de Créditos IPTV Explicado" : locale === "fr" ? "Le Système de Crédits IPTV Expliqué" : locale === "pt" ? "Sistema de Créditos IPTV Explicado" : locale === "sv" ? "IPTV-Kreditsystemet Förklarat" : locale === "no" ? "IPTV-Kredittsystemet Forklart" : "IPTV Credit System Explained", href: "/guides/iptv-credit-system-explained" },
    { label: locale === "es" ? "Guía de Ganancias de Reventa IPTV" : locale === "fr" ? "Guide des Profits de Revente IPTV" : locale === "pt" ? "Guia de Lucros de Revenda IPTV" : locale === "sv" ? "IPTV-Återförsäljarvinstguide" : locale === "no" ? "IPTV-Forhandlergevinst-guide" : "IPTV Reseller Profit Guide", href: "/guides/iptv-reseller-profit-guide" },
    { label: locale === "es" ? "Reseller de IPTV vs Suscripción Común" : locale === "fr" ? "Revendeur IPTV vs Abonnement Simple" : locale === "pt" ? "Revendedor IPTV vs Subscrição Comum" : locale === "sv" ? "IPTV-Återförsäljare vs Prenumeration" : locale === "no" ? "IPTV-Forhandler vs Abonnement" : "IPTV Reseller vs Subscription", href: "/guides/iptv-reseller-vs-subscription" },
  ];

  return (
    <footer
      aria-label="Fox IPTV Panels — IPTV Reseller Panel Provider"
      style={{
        borderTop: "1px solid var(--border-color)",
        background: "rgba(0,0,0,0.3)",
        padding: "4rem 0 2rem",
      }}
    >
      <div className="section-container">
        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "linear-gradient(135deg, #1e293b, #0f172a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 15px rgba(234, 88, 12, 0.25)",
                border: "1px solid rgba(234, 88, 12, 0.4)",
              }} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {/* Back of Head / Ears (Charcoal) */}
                  <path d="M12 8L4 2L8 12Z" fill="#0f172a" />
                  <path d="M12 8L20 2L16 12Z" fill="#0f172a" />
                  
                  {/* Outer Ears (Rust) */}
                  <path d="M4 2L8 12L3 10Z" fill="#c2410c" />
                  <path d="M20 2L16 12L21 10Z" fill="#c2410c" />

                  {/* Cheeks / Sides (Bright Orange) */}
                  <path d="M8 12L2 12L12 20Z" fill="#f97316" />
                  <path d="M16 12L22 12L12 20Z" fill="#f97316" />

                  {/* Face / Snout (Vibrant Orange) */}
                  <path d="M12 8L8 12L12 20Z" fill="#ea580c" />
                  <path d="M12 8L16 12L12 20Z" fill="#ea580c" />

                  {/* Inner Ears & Under-eyes (White) */}
                  <path d="M6 5.5L8 12L7 11.5Z" fill="#ffffff" />
                  <path d="M18 5.5L16 12L17 11.5Z" fill="#ffffff" />
                  <path d="M12 14.5L10 12L12 11L14 12Z" fill="#ffffff" />

                  {/* Nose (Charcoal) */}
                  <path d="M12 18.5L10 20L12 21L14 20Z" fill="#0f172a" />
                </svg>
              </div>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "1.1rem",
                background: "linear-gradient(135deg, #ffffff 0%, #ea580c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                FOX IPTV PANELS
              </span>
            </div>

            <p style={{
              fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7,
              marginBottom: "0.875rem", maxWidth: 290,
            }}>
              {t.brandDesc1}
            </p>

            <p style={{
              fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6,
              marginBottom: "1.5rem", maxWidth: 290,
            }}>
              {t.brandDesc2}
            </p>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-cta"
              aria-label="WhatsApp support for IPTV resellers — Fox IPTV Panels"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "0.6rem 1.25rem",
                borderRadius: 8,
                textDecoration: "none",
                background: "rgba(37,211,102,0.15)",
                border: "1px solid rgba(37,211,102,0.3)",
                color: "#22c55e",
                fontSize: "0.85rem", fontWeight: 700,
                transition: "all 0.3s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              {whatsappLabel}
            </a>
          </div>

          {/* IPTV Panels */}
          <div>
            <h3 style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.875rem", marginBottom: "1rem" }}>
              {t.cols.panels}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {serverPages.map(p => (
                <li key={p.label}>
                  <Link href={getLocalizedHref(p.href)} className="footer-link">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparisons & Guides */}
          <div>
            <h3 style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.875rem", marginBottom: "1rem" }}>
              {t.cols.comparisons}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {comparePages.map(p => (
                <li key={p.label}>
                  <Link href={getLocalizedHref(p.href)} className="footer-link">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.875rem", marginBottom: "1rem", marginTop: "1.5rem" }}>
              {t.cols.guides}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {guides.map(p => (
                <li key={p.label}>
                  <Link href={getLocalizedHref(p.href)} className="footer-link">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.875rem", marginBottom: "1rem" }}>
              {t.cols.quickLinks}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerNav.map(p => (
                <li key={p.label}>
                  <Link href={getLocalizedHref(p.href)} className="footer-link">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border-color)",
          paddingTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            {t.copyright}
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            {t.disclaimer}
          </p>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: var(--text-muted) !important;
          text-decoration: none;
          font-size: 0.825rem;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--text-secondary) !important;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}

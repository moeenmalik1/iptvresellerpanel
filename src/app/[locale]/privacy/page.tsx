import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
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

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });
  const c = await getTranslations({ locale, namespace: "common" });
  const n = await getTranslations({ locale, namespace: "nav" });

  const WHATSAPP_URL = c("whatsappUrl");
  const regionName = c("regionName");

  const L = locale as string;
  const lc = (map: Record<string, string>) => map[L] ?? map["en"] ?? "";

  const titleText = lc({
    en: `Privacy Policy — Fox IPTV Panels | Premium IPTV Reseller Panel Supplier in ${regionName}`,
    "en-gb": `Privacy Policy — Fox IPTV Panels | Premium IPTV Reseller Panel Supplier in ${regionName}`,
    "en-au": `Privacy Policy — Fox IPTV Panels | Premium IPTV Reseller Panel Supplier in ${regionName}`,
    es: `Política de Privacidad — Fox IPTV Panels | Proveedor de Créditos IPTV en ${regionName}`,
    fr: `Politique de Confidentialité — Fox IPTV Panels | Fournisseur de Panneaux IPTV Revendeur en ${regionName}`,
    pt: `Política de Privacidade — Fox IPTV Panels | Fornecedor de Painéis IPTV Revendedor em ${regionName}`,
    sv: `Integritetspolicy — Fox IPTV Panels | Leverantör av IPTV-Återförsäljarpaneler i ${regionName}`,
    no: `Personvernpolicy — Fox IPTV Panels | Leverandør av IPTV-Forhandlerpaneler i ${regionName}`,
  });

  const descText = lc({
    en: `Read the Privacy Policy for Fox IPTV Panels. Learn how we handle your registration details, cookies, and panel credit purchases in ${regionName}.`,
    "en-gb": `Read the Privacy Policy for Fox IPTV Panels. Learn how we handle your registration details, cookies, and panel credit purchases in ${regionName}.`,
    "en-au": `Read the Privacy Policy for Fox IPTV Panels. Learn how we handle your registration details, cookies, and panel credit purchases in ${regionName}.`,
    es: `Lea la Política de Privacidad de Fox IPTV Panels. Conozca cómo protegemos sus datos de revendedor mayorista en ${regionName}.`,
    fr: `Lisez la Politique de Confidentialité de Fox IPTV Panels. Découvrez comment nous gérons vos données en ${regionName}.`,
    pt: `Leia a Política de Privacidade da Fox IPTV Panels. Saiba como tratamos os seus dados de revendedor em ${regionName}.`,
    sv: `Läs integritetspolicyn för Fox IPTV Panels. Erfahren Sie, wie wir Ihre Händlerdaten in ${regionName} handhaben.`,
    no: `Les personvernpolicyen for Fox IPTV Panels. Finn ut hvordan vi håndterer dine forhandlerdata i ${regionName}.`,
  });

  const PRIVACY_PAGE_SCHEMA = {
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
        content="privacy policy, fox iptv panels, secure iptv panels, wholesale credentials privacy, gdpr reseller compliance"
      />
      <link rel="canonical" href={`https://foxiptvpanels.com/${locale}/privacy`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRIVACY_PAGE_SCHEMA) }}
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
              <span style={{ color: "var(--text-secondary)" }}>{lc({ en: "Privacy Policy", "en-gb": "Privacy Policy", "en-au": "Privacy Policy", es: "Política de Privacidad", fr: "Politique de Confidentialité", pt: "Política de Privacidade", sv: "Integritetspolicy", no: "Personvernpolicy" })}</span>
            </nav>

            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div className="tag" style={{ marginBottom: "1rem" }}>{lc({ en: "Compliance & Protection", "en-gb": "Compliance & Protection", "en-au": "Compliance & Protection", es: "Cumplimiento y Protección", fr: "Conformité et Protection", pt: "Conformidade e Proteção", sv: "Regelefterlevnad och Skydd", no: "Samsvar og Beskyttelse" })}</div>
              <h1 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "1rem"
              }}>
                {lc({ en: "Privacy", "en-gb": "Privacy", "en-au": "Privacy", es: "Privacidad", fr: "Confidentialité", pt: "Privacidade", sv: "Integritet", no: "Personvern" })}{" "}
                <span className="gradient-text">{lc({ en: "Policy", "en-gb": "Policy", "en-au": "Policy", es: "de", fr: "de", pt: "de", sv: "policy", no: "policy" })}</span>
              </h1>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
                {lc({
                  en: `Last Updated: May 22, 2026. Your privacy and the confidentiality of your wholesale reseller operations in ${regionName} are paramount to our partnership.`,
                  "en-gb": `Last Updated: May 22, 2026. Your privacy and the confidentiality of your wholesale reseller operations in ${regionName} are paramount to our partnership.`,
                  "en-au": `Last Updated: May 22, 2026. Your privacy and the confidentiality of your wholesale reseller operations in ${regionName} are paramount to our partnership.`,
                  es: `Última actualización: 22 de mayo de 2026. Su privacidad y la confidencialidad de sus operaciones como revendedor de IPTV en ${regionName} son de suma importancia para nuestra asociación.`,
                  fr: `Dernière mise à jour : 22 mai 2026. Votre vie privée et la confidentialité de vos activités de revente en gros en ${regionName} sont primordiales pour notre partenariat.`,
                  pt: `Última atualização: 22 de maio de 2026. A sua privacidade e a confidencialidade das suas operações de revenda em ${regionName} são fundamentais para a nossa parceria.`,
                  sv: `Senast uppdaterad: 22 maj 2026. Din integritet och sekretessen kring dina grossiståterförsäljarverksamheter i ${regionName} är avgörande för vårt partnerskap.`,
                  no: `Sist oppdatert: 22. mai 2026. Ditt personvern og konfidensialiteten til din engrosforhandlervirksomhet i ${regionName} er avhengig av vårt partnerskap.`,
                })}
              </p>

              {/* Glassmorphic Document Card */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    1. Information We Collect
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    We collect information necessary to establish your wholesale reseller account, issue dashboard portal access, and handle panel credits securely in {regionName}. This includes:
                  </p>
                  <ul style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
                    <li><strong>Account Credentials:</strong> Username, email address, and billing contact information to provision Xtream Codes, M3U, or MAG dashboards.</li>
                    <li><strong>Transactional Data:</strong> Record of credit purchases, reseller tier volume (Starter, Growth, Enterprise), and transaction timelines.</li>
                    <li><strong>Usage Data:</strong> Technical analytics including IP addresses, cookie preferences, and logs to verify portal security and prevent concurrent credential hijacking.</li>
                  </ul>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    2. How We Use Your Data
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Your data is solely used to empower your reselling ecosystem in {regionName}. We do not sell, rent, or distribute reseller database logs to third parties. Specifically, we use your data to:
                  </p>
                  <ul style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
                    <li>Deploy your white-label IPTV reseller dashboard configurations.</li>
                    <li>Process manual or automated bulk credit requests.</li>
                    <li>Communicate operational status updates (e.g. server maintenance schedules or active API extensions).</li>
                    <li>Offer real-time premium customer care and WhatsApp business consultancy.</li>
                  </ul>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    3. Wholesale Data Confidentiality & Encryption
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    As a white-label intermediary distributor, we respect the absolute privacy of your branding. Your client databases, custom DNS configurations, and billing systems are kept strictly within your isolated sub-reseller database tier. All communication pathways utilize advanced SSL/TLS encryption, and core database nodes are securely protected by commercial-grade firewalls.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    4. Cookies and Web Analytics
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    We utilize technical cookies to sustain your logged-in states, store your visual preferences (such as dark mode constants), and record interactions with our interactive Reseller Profit Calculator. These cookies help analyze site performance and guarantee optimal page speed delivery.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    5. GDPR and International Reseller Rights
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    We extend high-grade privacy protections to resellers across the UK, USA, EU, and worldwide:
                  </p>
                  <ul style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
                    <li><strong>Right to Access:</strong> You can request a copy of your panel credentials and logged transactional history at any time.</li>
                    <li><strong>Right to Rectification:</strong> You can update your registry, contact email, and active WhatsApp delivery details.</li>
                    <li><strong>Right to Erasure (Be Forgotten):</strong> Upon termination of resale activities, you can request the absolute scrubbing of your account data, subject to local financial reporting constraints.</li>
                  </ul>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    {lc({ en: "6. Contacting Our Data Officer", "en-gb": "6. Contacting Our Data Officer", "en-au": "6. Contacting Our Data Officer", es: "6. Contacto con nuestro Oficial de Datos", fr: "6. Contacter notre Responsable des Données", pt: "6. Contactar o nosso Encarregado de Dados", sv: "6. Kontakta vår dataskyddsansvarig", no: "6. Kontakt vår personvernansvarlig" })}
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {lc({ en: "For any inquiries regarding data protection, active cookies, or wholesale logs deletion, please initiate a direct connection with our dedicated data compliance team.", "en-gb": "For any inquiries regarding data protection, active cookies, or wholesale logs deletion, please initiate a direct connection with our dedicated data compliance team.", "en-au": "For any inquiries regarding data protection, active cookies, or wholesale logs deletion, please initiate a direct connection with our dedicated data compliance team.", es: "Para cualquier consulta sobre la protección de datos o la eliminación de registros, inicie una conexión directa con nuestro equipo de cumplimiento.", fr: "Pour toute demande concernant la protection des données ou la suppression des journaux, contactez directement notre équipe de conformité.", pt: "Para qualquer consulta sobre proteção de dados ou eliminação de registos, contacte diretamente a nossa equipa de conformidade.", sv: "För frågor om dataskydd eller borttagning av loggar, kontakta vårt dataskyddsteam direkt.", no: "For spørsmål om databeskyttelse eller sletting av logger, ta kontakt direkte med vårt samsvarssteam." })}
                  </p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.75rem 1.5rem", borderRadius: "10px", textDecoration: "none", display: "inline-flex", gap: "8px", alignItems: "center", fontSize: "0.875rem" }}>
                    {lc({ en: "Contact Privacy Officer via WhatsApp", "en-gb": "Contact Privacy Officer via WhatsApp", "en-au": "Contact Privacy Officer via WhatsApp", es: "Contactar Oficial de Privacidad por WhatsApp", fr: "Contacter le DPO via WhatsApp", pt: "Contactar o DPO via WhatsApp", sv: "Kontakta dataskyddsansvarig via WhatsApp", no: "Kontakt personvernansvarlig via WhatsApp" })}
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

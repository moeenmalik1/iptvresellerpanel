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

export default async function DMCACompliancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const c = await getTranslations({ locale, namespace: "common" });
  const n = await getTranslations({ locale, namespace: "nav" });

  const WHATSAPP_URL = c("whatsappUrl");
  const regionName = c("regionName");

  const titleText = locale === "es"
    ? `Política DMCA — Fox IPTV Panels | Cumplimiento de Derechos de Autor en ${regionName}`
    : `DMCA Policy — Fox IPTV Panels | Copyright Infringement Intake Guidelines in ${regionName}`;

  const descText = locale === "es"
    ? `Lea la política DMCA de Fox IPTV Panels. Conozca nuestros procedimientos de derechos de autor en ${regionName}.`
    : `Read the DMCA Policy for Fox IPTV Panels. Discover our copyright compliance procedures and dedicated intake lines in ${regionName}.`;

  const DMCA_PAGE_SCHEMA = {
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
        content="dmca policy, copyright infringement, fox iptv panels copyright agent, content takedown intake"
      />
      <link rel="canonical" href={`https://foxiptvpanels.com/${locale}/dmca`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DMCA_PAGE_SCHEMA) }}
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
              <span style={{ color: "var(--text-secondary)" }}>{locale === "es" ? "Política DMCA" : "DMCA Policy"}</span>
            </nav>

            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div className="tag" style={{ marginBottom: "1rem" }}>{locale === "es" ? "Propiedad Intelectual" : "Intellectual Property"}</div>
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
                  <>Política <span className="gradient-text">DMCA</span></>
                ) : (
                  <>DMCA <span className="gradient-text">Policy</span></>
                )}
              </h1>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
                {locale === "es"
                  ? `Última actualización: 22 de mayo de 2026. Fox IPTV Panels respeta los derechos de propiedad intelectual y actúa rápidamente bajo los estándares DMCA en ${regionName}.`
                  : `Last Updated: May 22, 2026. Fox IPTV Panels respects intellectual property rights and acts promptly under the Digital Millennium Copyright Act ("DMCA") standards in ${regionName}.`}
              </p>

              {/* Glassmorphic Document Card */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    1. Statement of Intermediary Operations
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    **Fox IPTV Panels does not host, stream, publish, or store any physical media files, IPTV playlists, live broadcasts, or video streams on our servers.**
                    Our platform functions solely as a wholesale technical broker, providing panel credits, billing dashboards, and API access tokens for independent, third-party backend servers. Because our servers do not transmit or store any actual audio/visual streams, we do not have direct physical access to remove media files or take down active feeds from the internet.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    2. Copyright Infringement Notice Requirements
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    If you are a copyright owner or an authorized representative, and you believe that content made accessible through an independent panel utilizing our credits violates your intellectual property rights, you must file a formal written notice with our compliance team. To be legally valid under 17 U.S.C. § 512(c)(3), your notice must include:
                  </p>
                  <ul style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
                    <li><strong>Authorized Signature:</strong> A physical or electronic signature of the person authorized to act on behalf of the owner of the copyright interest.</li>
                    <li><strong>Work Identification:</strong> A clear description of the copyrighted work that you claim has been infringed.</li>
                    <li><strong>Material Location:</strong> Specific identification of the backend stream location, server host details, or playlist URL containing the material. *(Please note that submitting the general URL 'foxiptvpanels.com' is insufficient, as we do not host media feeds).*</li>
                    <li><strong>Contact Credentials:</strong> Your mailing address, phone number, and a valid email address.</li>
                    <li><strong>Statement of Good Faith:</strong> A statement that you have a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                    <li><strong>Perjury Declaration:</strong> A statement that the information in the notification is accurate and, under penalty of perjury, that you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed.</li>
                  </ul>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    3. Notice Processing & Forwarding Policy
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Upon receipt of a valid and complete DMCA notification, Fox IPTV Panels will immediately execute the following procedures:
                  </p>
                  <ul style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
                    <li>We will forward the complete notice and all details to the corresponding independent reseller partner or backend server panel administrator.</li>
                    <li>We will instruct the independent panel operator to investigate and remove the infringing streams, playlist references, or access pathways immediately.</li>
                    <li>If an independent reseller partner is found to repeatedly and intentionally disregard valid copyright notices, we will terminate their wholesale dashboard access tier and archive their panel credits.</li>
                  </ul>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    4. Abuse of DMCA Claims
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    Please be aware that under Section 512(f) of the DMCA, any person who knowingly and materially misrepresents that material or activity is infringing may be subject to severe civil liability and financial damages (including legal fees and costs) incurred by us or the accused reseller panel partner.
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    {locale === "es" ? "5. Información del Agente DMCA" : "5. Contact Information for DMCA Agent"}
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {locale === "es"
                      ? "Para tiempos de respuesta rápidos, compile su solicitud formal y envíela a nuestro oficial de cumplimiento."
                      : "For rapid compliance response times, please compile your formal takedown notices and direct them to our intellectual property compliance officer."}
                  </p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.75rem 1.5rem", borderRadius: "10px", textDecoration: "none", display: "inline-flex", gap: "8px", alignItems: "center", fontSize: "0.875rem" }}>
                    {locale === "es" ? "Enviar Solicitud por WhatsApp" : "File Takedown Request via WhatsApp"}
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

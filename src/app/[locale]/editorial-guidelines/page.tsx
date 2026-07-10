import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
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

export default async function EditorialGuidelinesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const lc = (map: Record<string, string>) => map[locale] ?? map["en"] ?? "";

  const EDITORIAL_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://iptvreseller.live/${locale}/editorial-guidelines/#webpage`,
    "url": `https://iptvreseller.live/${locale}/editorial-guidelines`,
    "name": lc({
      en: "Editorial Guidelines — Fox IPTV Panels",
      es: "Directrices Editoriales — Fox IPTV Panels",
      fr: "Charte Éditoriale — Fox IPTV Panels",
      pt: "Diretrizes Editoriais — Fox IPTV Panels"
    }),
    "description": lc({
      en: "Learn about the strict editorial standards, factual accuracy reviews, and network telemetry audits governing Fox IPTV Panels content.",
      es: "Conozca los estrictos estándares editoriales, revisiones de precisión fáctica y auditorías de telemetría que rigen en Fox IPTV Panels.",
      fr: "Découvrez nos exigences éditoriales, nos protocoles de vérification et nos audits de performance réseau pour Fox IPTV Panels.",
      pt: "Saiba mais sobre os nossos rigorosos padrões editoriais, revisões de fatos e auditorias técnicas na Fox IPTV Panels."
    })
  };

  return (
    <>
      <title>
        {lc({
          en: "Editorial Guidelines — Transparency & Factual Standards | Fox IPTV Panels",
          es: "Directrices Editoriales — Transparencia y Rigor Técnico | Fox IPTV Panels",
          fr: "Charte Éditoriale — Transparence et Rigueur Technique | Fox IPTV Panels",
          pt: "Diretrizes Editoriais — Transparência e Rigor Técnico | Fox IPTV Panels",
          sv: "Redaktionella Riktlinjer — Transparens och Tillförlitlighet | Fox IPTV Panels",
          no: "Redaksjonelle Retningslinjer — Transparens og Sannferdighet | Fox IPTV Panels"
        })}
      </title>
      <meta 
        name="description" 
        content={lc({
          en: "Our editorial process ensures that all alternate broadband networking guides, XTream API integrations, and reseller materials undergo dual auditing for technical accuracy.",
          es: "Nuestro proceso editorial garantiza que todas las guías de red de banda ancha alternativa, integraciones API y manuales se sometan a auditorías de precisión técnica.",
          fr: "Notre processus garantit que tous les guides sur le haut débit alternatif, les intégrations d'API et tutoriels subissent une double vérification de précision technique.",
          pt: "O nosso processo editorial garante que todos os guias de redes alternativas, integrações de APIs e manuais de revenda passem por avaliações técnicas rigorosas."
        })} 
      />
      <link rel="canonical" href={`https://iptvreseller.live/${locale}/editorial-guidelines`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EDITORIAL_SCHEMA) }}
      />

      <Header />

      <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "110px", position: "relative" }}>
        {/* Orbs */}
        <div className="mesh-orb mesh-orb-3" style={{ bottom: "10%", left: "5%" }} />
        <div className="mesh-orb mesh-orb-1" style={{ top: "15%", right: "10%" }} />

        <div className="section-container" style={{ padding: "4rem 1.5rem" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2.5rem" }}>
            <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
              {lc({ en: "Home", es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem" })}
            </Link>
            <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text-secondary)" }}>
              {lc({ en: "Editorial Guidelines", es: "Directrices Editoriales", fr: "Charte Éditoriale", pt: "Diretrizes Editoriais", sv: "Redaktionella Riktlinjer", no: "Redaksjonelle Retningslinjer" })}
            </span>
          </nav>

          <article className="glass-card" style={{ padding: "3.5rem 3rem", borderRadius: "24px", position: "relative", zIndex: 10 }}>
            
            <header style={{ marginBottom: "2.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "2rem" }}>
              <div className="tag" style={{ marginBottom: "1rem" }}>
                {lc({ en: "Editorial Governance", es: "Gobernanza Editorial", fr: "Gouvernance Éditoriale", pt: "Governação Editorial" })}
              </div>
              <h1 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
                fontWeight: 900,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1rem"
              }}>
                {lc({
                  en: "Editorial Integrity & Accuracy Standards",
                  es: "Integridad Editorial y Normas de Precisión",
                  fr: "Charte d'Intégrité et de Rigueur Éditoriale",
                  pt: "Integridade Editorial e Padrões de Rigor",
                  sv: "Redaktionell Integritet och Standarder",
                  no: "Redaksjonell Integritet og Standarder"
                })}
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>
                {lc({
                  en: "Operational under the corporate oversight of Fox Broadband Technologies Ltd. — Last Modified: May 31, 2026",
                  es: "Operativo bajo la supervisión de Fox Broadband Technologies Ltd. — Última modificación: 31 de mayo de 2026",
                  fr: "Sous la supervision de Fox Broadband Technologies Ltd. — Dernière mise à jour : 31 mai 2026",
                  pt: "Operacional sob a supervisão de Fox Broadband Technologies Ltd. — Última modificação: 31 de maio de 2026"
                })}
              </p>
            </header>

            <section style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }} className="guide-rich-content">
              <h2>
                {lc({
                  en: "1. Our Core Mission",
                  es: "1. Nuestra Misión",
                  fr: "1. Notre Mission",
                  pt: "1. Nossa Missão"
                })}
              </h2>
              <p>
                {lc({
                  en: "At Fox IPTV Panels, we are dedicated to helping digital entrepreneurs launch, scale, and secure their own white-label IPTV reseller businesses. Because the alternative telecom and broadband streaming industry can be complex, we aim to provide accurate, reliable, and fact-checked guides that demystify technical configurations.",
                  es: "En Fox IPTV Panels, nos dedicamos a ayudar a emprendedores digitales a lanzar, escalar y asegurar sus propios negocios de revendedor de IPTV de marca blanca. Ofrecemos guías precisas, confiables y verificadas para simplificar las configuraciones técnicas.",
                  fr: "Chez Fox IPTV Panels, nous aidons les entrepreneurs à lancer et sécuriser leur propre marque de revente IPTV. Pour éclairer ce secteur complexe, nous publions des guides précis, fiables et vérifiés qui démystifient les configurations réseaux."
                })}
              </p>

              <h2>
                {lc({
                  en: "2. Strictly Expert-Authored Content",
                  es: "2. Autores Expertos",
                  fr: "2. Rédacteurs Experts",
                  pt: "2. Autores Especializados"
                })}
              </h2>
              <p>
                {lc({
                  en: "Every guide, software tutorial, and comparison report published on our platform is authored by experienced professionals who possess first-hand expertise in alt-telecom systems. Our Lead Architect, Marcus Vane, has over 15 years of network virtualization experience. We do not use automated generators; all our guides are written based on practical deployments.",
                  es: "Todas las guías, tutoriales de software e informes publicados en nuestra plataforma son elaborados por profesionales con experiencia directa en sistemas de telecomunicaciones. Nuestro arquitecto jefe, Marcus Vane, cuenta con más de 15 años de experiencia.",
                  fr: "Tous les guides et tutoriels publiés sur notre plateforme sont rédigés par des professionnels qualifiés. Notre architecte en chef, Marcus Vane, possède plus de 15 ans d'expérience. Nous proscrivons la génération automatique de contenu."
                })}
              </p>

              <h2>
                {lc({
                  en: "3. The Double-Review & Telemetry Auditing Process",
                  es: "3. Proceso de Doble Revisión y Auditoría",
                  fr: "3. Protocole de Double Validation et Audits",
                  pt: "3. Processo de Dupla Avaliação e Auditoria"
                })}
              </h2>
              <p>
                {lc({
                  en: "To eliminate errors and ensure maximum security for our resellers, we employ a rigorous double-editorial workflow:",
                  es: "Para eliminar errores y garantizar la seguridad de nuestros distribuidores, empleamos un flujo doble:",
                  fr: "Pour éliminer les erreurs techniques et garantir la sécurité de nos partenaires, nous appliquons un protocole rigoureux :"
                })}
              </p>
              <ul>
                <li>
                  <strong>{lc({ en: "Drafting: ", es: "Redacción: ", fr: "Rédaction : " })}</strong>
                  {lc({
                    en: "Marcus Vane drafts the blueprints, integrating real-world network statistics, server latency benchmarks, and Xtream API examples.",
                    es: "Marcus Vane redacta las guías, integrando estadísticas de red reales, latencias y códigos API.",
                    fr: "Marcus Vane rédige les documents, en y intégrant des métriques réseau réelles, des tests de latence et des codes d'API."
                  })}
                </li>
                <li>
                  <strong>{lc({ en: "Technical Audit: ", es: "Auditoría Técnica: ", fr: "Audit Technique : " })}</strong>
                  {lc({
                    en: "Carlos M., our Certified Broadband Specialist and Alt-Telecom Auditor, tests every code snippet, checks the database queries, and reviews domain mapping guidelines (CNAME) to ensure safety.",
                    es: "Carlos M., nuestro especialista certificado en banda ancha, comprueba cada fragmento de código, consulta de base de datos y directriz DNS (CNAME) para garantizar la seguridad de los revendedores.",
                    fr: "Carlos M., notre spécialiste réseau certifié, teste chaque extrait de code, vérifie les requêtes SQL et valide le paramétrage DNS (CNAME) pour s'assurer qu'aucun risque n'est présent."
                  })}
                </li>
                <li>
                  <strong>{lc({ en: "Localization Check: ", es: "Localización: ", fr: "Localisation : " })}</strong>
                  {lc({
                    en: "Our regional translators review the localized guidelines (UK BT broadband references, Australian NBN requirements, Spanish ISP Movistar filters, etc.) to ensure regional relevance.",
                    es: "Nuestros traductores revisan las guías localizadas (filtrados de Movistar en España, etc.) para asegurar la relevancia regional.",
                    fr: "Nos traducteurs valident les spécificités locales (équipements FAI français Orange/SFR/Free, restrictions de trafic, etc.) pour garantir la cohérence régionale."
                  })}
                </li>
              </ul>

              <h2>
                {lc({
                  en: "4. Commitment to Transparency & Corrections",
                  es: "4. Compromiso con la Transparencia y Corrección",
                  fr: "4. Transparence et Politique de Correction",
                  pt: "4. Compromisso com a Transparência e Correções"
                })}
              </h2>
              <p>
                {lc({
                  en: "Technology and telecom guidelines evolve continuously. We monitor the alt-broadband landscape daily. If a software hook changes, or Cloudflare alters its dynamic routing policies, we proactively update our active masterclasses. We encourage resellers to report any inconsistencies to our technical support team for immediate review and correction.",
                  es: "La tecnología evoluciona continuamente. Monitoreamos el panorama de telecomunicaciones diariamente. Si cambian las políticas de Cloudflare o las APIs, actualizamos proactivamente nuestras guías. Animamos a los distribuidores a reportar cualquier inconsistencia.",
                  fr: "Les télécommunications et les infrastructures réseaux évoluent continuellement. Nous surveillons l'actualité de l'hébergement quotidiennement. Si une API ou les règles Cloudflare changent, nous mettons à jour nos guides sous 48h."
                })}
              </p>
            </section>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

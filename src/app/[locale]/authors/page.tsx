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

export default async function AuthorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const lc = (map: Record<string, string>) => map[locale] ?? map["en"] ?? "";

  const AUTHORS_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.iptvreseller.live/${locale}/authors/#webpage`,
    "url": `https://www.iptvreseller.live/${locale}/authors`,
    "name": lc({
      en: "Meet Our Team & Alt-Broadband Experts — Fox IPTV Panels",
      es: "Conozca a Nuestro Equipo de Expertos — Fox IPTV Panels",
      fr: "Rencontrez Notre Équipe de Spécialistes — Fox IPTV Panels",
      pt: "Conheça o Nosso Equipo de Especialistas — Fox IPTV Panels"
    }),
    "description": lc({
      en: "Meet the engineers, systems architects, and telecom auditors behind the high-quality guides at Fox IPTV Panels.",
      es: "Conozca a los ingenieros, arquitectos de sistemas y auditores de telecomunicaciones detrás de las guías de Fox IPTV Panels.",
      fr: "Présentation des ingénieurs, architectes de réseaux et auditeurs de télécommunications de Fox IPTV Panels."
    })
  };

  return (
    <>
      <title>
        {lc({
          en: "Meet Our Editorial Team & Alt-Broadband Experts | Fox IPTV Panels",
          es: "Conozca a Nuestro Equipo e Ingenieros de Banda Ancha | Fox IPTV Panels",
          fr: "Présentation de Notre Équipe Rédacteurs & Experts Réseau | Fox IPTV Panels",
          pt: "Conheça a Nossa Equipa e Especialistas de Banda Larga | Fox IPTV Panels",
          sv: "Möt Vårt Team och Återförsäljarexperter | Fox IPTV Panels",
          no: "Møt Vårt Team og Engros-Eksperter | Fox IPTV Panels"
        })}
      </title>
      <meta 
        name="description" 
        content={lc({
          en: "Meet our primary authors and telecom network auditors. Read their backgrounds in network systems virtualization, Xtream API, and secure DNS portal routing.",
          es: "Conozca a nuestros autores y auditores. Lea sobre sus trayectorias en sistemas de red virtualizados, Xtream API y seguridad en enrutamiento DNS.",
          fr: "Découvrez le profil de nos experts et rédacteurs en chef. Leurs compétences couvrent la virtualisation de réseaux, l'API Xtream Codes et la sécurité DNS.",
          pt: "Conheça os nossos autores principais e auditores. Leia os perfis profissionais em virtualização de redes, Xtream API e segurança DNS."
        })} 
      />
      <link rel="canonical" href={`https://www.iptvreseller.live/${locale}/authors`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AUTHORS_SCHEMA) }}
      />

      <Header />

      <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "110px", position: "relative" }}>
        {/* Orbs */}
        <div className="mesh-orb mesh-orb-1" style={{ top: "0px", right: "0px" }} />
        <div className="mesh-orb mesh-orb-2" style={{ bottom: "10%", left: "0px" }} />

        <div className="section-container" style={{ padding: "4rem 1.5rem" }}>
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2.5rem" }}>
            <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
              {lc({ en: "Home", es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem" })}
            </Link>
            <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text-secondary)" }}>
              {lc({ en: "Editorial Team", es: "Equipo Editorial", fr: "Équipe Éditoriale", pt: "Equipa Editorial", sv: "Redaktionellt Team", no: "Redaksjonelt Team" })}
            </span>
          </nav>

          <header style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
            <div className="tag" style={{ marginBottom: "1rem" }}>
              {lc({ en: "Expertise & Experience", es: "Experiencia y Especialización", fr: "Savoir-faire et Expérience", pt: "Experiência e Especialização" })}
            </div>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1rem"
            }}>
              {lc({
                en: "Meet Our <span class='gradient-text'>Alt-Broadband</span> Experts",
                es: "Conozca a Nuestros Expertos en <span class='gradient-text'>Banda Ancha</span>",
                fr: "Découvrez Nos Spécialistes <span class='gradient-text'>Réseaux</span>",
                pt: "Conheça os Nossos Especialistas de <span class='gradient-text'>Banda Larga</span>"
              }).replace("<span class='gradient-text'>", "").replace("</span>", "")}
              <span className="gradient-text"> {lc({ en: "Team", es: "Equipo", fr: "Équipe", pt: "Equipa", sv: "Experter", no: "Eksperter" })}</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {lc({
                en: "Behind every technical masterclass, setup blueprint, and comparison review at Fox IPTV Panels is a dedicated team of engineers and systems architects committed to technical accuracy.",
                es: "Detrás de cada guía técnica, plano de configuración y análisis en Fox IPTV Panels hay un equipo de ingenieros y arquitectos de sistemas comprometidos con el rigor.",
                fr: "Chaque article d'intégration de notre académie est validé par un groupe d'architectes serveurs et d'experts en sécurité.",
                pt: "Por trás de cada guia técnico e análise comparativa da Fox IPTV Panels está uma equipa dedicada de engenheiros e arquitetos focados no rigor técnico."
              })}
            </p>
          </header>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "4rem" }} className="panel-hero-grid">
            
            {/* Marcus Vane profile card */}
            <div className="glass-card" style={{ padding: "3rem", borderRadius: "24px", display: "flex", flexDirection: "column", gap: "1.5rem" }} id="marcusvane">
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                <img 
                  src="/placeholder-icon.svg" 
                  alt="Marcus Vane Profile" 
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "3px solid var(--accent-purple)",
                    background: "var(--bg-secondary)",
                    padding: "6px"
                  }}
                />
                <div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--text-primary)", margin: "0 0 4px" }}>
                    Marcus Vane
                  </h2>
                  <div style={{ fontSize: "0.9rem", color: "var(--accent-purple)", fontWeight: 700 }}>
                    {lc({
                      en: "Lead Alt-Broadband Architect & Author",
                      es: "Arquitecto Jefe de Banda Ancha y Autor",
                      fr: "Architecte Réseau Principal & Auteur",
                      pt: "Arquiteto Principal de Banda Larga e Autor"
                    })}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                  {lc({ en: "Core Areas of Expertise", es: "Áreas Clave de Especialización", fr: "Spécialités Techniques", pt: "Principais Áreas de Especialidade" })}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span className="tag" style={{ fontSize: "0.7rem" }}>Alternative Broadband Peerings</span>
                  <span className="tag" style={{ fontSize: "0.7rem" }}>Xtream Codes API</span>
                  <span className="tag" style={{ fontSize: "0.7rem" }}>DNS Routing CNAME</span>
                  <span className="tag" style={{ fontSize: "0.7rem" }}>Server Virtualization</span>
                  <span className="tag" style={{ fontSize: "0.7rem" }}>Reseller Panel Security</span>
                </div>
              </div>

              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                {lc({
                  en: "Marcus Vane has spent more than 15 years developing high-availability alt-telecom systems and streaming delivery networks across the UK and the EU. He specialized in designing DNS enrouting algorithms and customized white-label admin panels that mitigate local ISP video throttling. Marcus is dedicated to authoring clean, step-by-step masterclasses that give startups first-rate technical guidance.",
                  es: "Marcus Vane lleva más de 15 años desarrollando sistemas de telecomunicaciones alternativos de alta disponibilidad y redes de distribución en el Reino Unido y la UE. Se especializó en el diseño de algoritmos de enrutamiento DNS y paneles de administración de marca blanca. Marcus se dedica a redactar guías limpias que brindan orientación técnica de primer nivel.",
                  fr: "Marcus conçoit des architectures de diffusion vidéo et des infrastructures réseaux depuis 2009. Spécialiste de la virtualisation sous Unix et des modules API Xtream Codes, il s'assure que nos guides fournissent un protocole d'installation infaillible pour nos partenaires.",
                  pt: "Marcus Vane passou mais de 15 anos a desenvolver sistemas de telecomunicações alternativos e redes de streaming de alta disponibilidade na Europa. Especializou-se na conceção de algoritmos de DNS e painéis de administração em marca branca. Marcus dedica-se a escrever manuais práticos e detalhados."
                })}
              </p>

              <div style={{ display: "flex", gap: "1rem", alignItems: "center", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{lc({ en: "Connect: ", es: "Contacto: ", fr: "Suivre : " })}</span>
                <a href="https://twitter.com/marcusvane_iptv" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", textDecoration: "none" }} className="animated-underline">
                  Twitter/X ↗
                </a>
              </div>
            </div>

            {/* Carlos M. profile card */}
            <div className="glass-card" style={{ padding: "3rem", borderRadius: "24px", display: "flex", flexDirection: "column", gap: "1.5rem" }} id="carlosm">
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  border: "3px solid var(--accent-cyan)",
                  background: "linear-gradient(135deg, #1e293b, #0f172a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "var(--accent-cyan)"
                }}>
                  CM
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--text-primary)", margin: "0 0 4px" }}>
                    Carlos M.
                  </h2>
                  <div style={{ fontSize: "0.9rem", color: "var(--accent-cyan)", fontWeight: 700 }}>
                    {lc({
                      en: "Certified Broadband Specialist & Auditor",
                      es: "Especialista en Banda Ancha e Auditor Técnico",
                      fr: "Spécialiste Haut Débit Certifié & Validateur",
                      pt: "Especialista em Banda Larga e Auditor Técnico"
                    })}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                  {lc({ en: "Core Auditing Fields", es: "Campos Clave de Auditoría", fr: "Domaines de Validation", pt: "Principais Áreas de Auditoria" })}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span className="tag" style={{ fontSize: "0.7rem" }}>Factual & Code Validation</span>
                  <span className="tag" style={{ fontSize: "0.7rem" }}>WHMCS Security Hooks</span>
                  <span className="tag" style={{ fontSize: "0.7rem" }}>Cloudflare Rule Sets</span>
                  <span className="tag" style={{ fontSize: "0.7rem" }}>Network Telemetry Accuracy</span>
                </div>
              </div>

              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                {lc({
                  en: "Carlos M. acts as the chief technical reviewer and fact-checking auditor for Fox IPTV Panels. Certified by alternate telecom groups, Carlos tests every WHMCS billing server code hook, validates database integrations, and reviews all server proxy setups featured in our guides. He ensures that all materials published are factually accurate, secure, and 100% compliant with standard network protocols.",
                  es: "Carlos M. actúa como el principal revisor técnico y auditor de Fox IPTV Panels. Certificado en infraestructuras de red, Carlos prueba cada código de facturación de WHMCS, valida las integraciones de bases de datos y revisa los servidores proxy que figuran en nuestras guías para garantizar que sean seguros.",
                  fr: "Carlos M. est le responsable de la conformité et le validateur technique en chef de Fox IPTV Panels. Il teste minutieusement chaque script d'automatisation WHMCS, vérifie la sécurité des hooks de paiement et s'assure que chaque guide publié respecte scrupuleusement les exigences de Cloudflare.",
                  pt: "Carlos M. atua como o principal revisor técnico e auditor de fatos da Fox IPTV Panels. Certificado em sistemas de telecomunicações, Carlos testa cada script de faturação WHMCS, valida integrações de bases de dados e avalia os servidores proxy configurados nos guias."
                })}
              </p>

              <div style={{ display: "flex", gap: "1rem", alignItems: "center", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{lc({ en: "Status: ", es: "Estado: ", fr: "Statut : " })}</span>
                <span style={{ fontSize: "0.85rem", color: "#22c55e", fontWeight: 700 }}>
                  ✔ {lc({ en: "Active Editorial Auditor", es: "Auditor Editorial Activo", fr: "Auditeur Actif" })}
                </span>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

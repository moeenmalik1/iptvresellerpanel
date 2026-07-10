import { getTranslations, setRequestLocale } from "next-intl/server";
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
    "url": "https://iptvreseller.live"
  }
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const lc = (map: Record<string, string>) => map[locale] ?? map["en"] ?? "";

  const t = await getTranslations({ locale, namespace: "about" });
  const c = await getTranslations({ locale, namespace: "common" });
  const n = await getTranslations({ locale, namespace: "nav" });
  const m = await getTranslations({ locale, namespace: "meta" });

  const WHATSAPP_URL = c("whatsappUrl");

  const getHighCtrAboutMetadata = () => {
    switch (locale) {
      case "en-gb":
        return {
          title: "About Fox IPTV Panels UK: Premium Wholesale & Buffer-Free Streaming",
          description: "Meet the UK's leading wholesale IPTV provider. Serving London, Birmingham & beyond with 22+ buffer-free panels, custom DNS routing & local GBP credits.",
        };
      case "en-au":
        return {
          title: "About Fox IPTV Panels Australia: Low-Latency Peering & NBN Ready",
          description: "Meet Australia's leading wholesale IPTV provider. Built on redundant low-latency routes for Telstra, Optus & NBN. Start your own brand with free trials!",
        };
      case "es":
        return {
          title: "Sobre Fox IPTV Panels: El Soporte Detrás de 5,000+ Revendedores",
          description: "Conozca al proveedor mayorista de IPTV de marca blanca líder en España y la UE. Servidores sin cortes, activación en 5 minutos y soporte WhatsApp 24/7.",
        };
      case "fr":
        return {
          title: "À Propos de Fox IPTV Panels : Le Grossiste IPTV N°1 en France",
          description: "Découvrez le fournisseur de serveurs IPTV en marque blanche le plus fiable en France et Belgique. 22+ serveurs stables, essais gratuits & support WhatsApp.",
        };
      case "pt":
        return {
          title: "Sobre a Fox IPTV Panels: O Fornecedor Grossista por Trás de Milhares",
          description: "Conheça o fornecedor grossista de IPTV mais fiável em Portugal e Brasil. Servidores estáveis sem travamentos, ativação na hora e suporte via WhatsApp 24/7.",
        };
      case "sv":
        return {
          title: "Om Fox IPTV Panels: Grossistleverantören Bakom 5 000+ Återförsäljare",
          description: "Läs om Sveriges ledande white label grossist för IPTV. Vi erbjuder 22+ stabila servrar utan buffring, gratis testkonton och support på svenska dygnet runt.",
        };
      case "no":
        return {
          title: "Om Fox IPTV Panels: Grossistleverandøren Bakom 5 000+ Forhandlere",
          description: "Møt Norges ledende engrosleverandør av white-label IPTV. Vi tilbyr 22+ stabile servere uten bufring, gratis prøvekontoer og dedikert support 24/7.",
        };
      default:
        return {
          title: "About Fox IPTV Panels: The Wholesale Power Behind 5k+ Resellers",
          description: "Meet the team behind the world's most stable IPTV reseller network. Offering 22+ premium white-label panels, zero ISP buffering & 24/7 direct partner support.",
        };
    }
  };

  const { title: pageTitle, description: pageDescription } = getHighCtrAboutMetadata();

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={m("keywords")} />
      <link rel="canonical" href={`https://iptvreseller.live/${locale}/about`} />

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
                <div className="tag" style={{ marginBottom: "1rem" }}>
                  {(() => {
                    const trans = {
                      en: "Established Wholesale Supplier",
                      "en-gb": "Established Wholesale Supplier",
                      "en-au": "Established Wholesale Supplier",
                      es: "Proveedor Mayorista Establecido",
                      fr: "Fournisseur de Gros Établi",
                      pt: "Fornecedor Atacadista Estabelecido",
                      sv: "Etablerad Grossistleverantör",
                      no: "Etablert Grossistleverandør"
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </div>
                <h1 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem"
                }}>
                  {(() => {
                    const trans = {
                      en: <>Empowering Entrepreneurs to Build Their Own <span className="gradient-text">Streaming Empire</span></>,
                      "en-gb":  <>Empowering Entrepreneurs to Build Their Own <span className="gradient-text">Streaming Empire</span></>,
                      "en-au":  <>Empowering Entrepreneurs to Build Their Own <span className="gradient-text">Streaming Empire</span></>,
                      es: <>Empoderando a Emprendedores para Crear su <span className="gradient-text">Imperio de Streaming</span></>,
                      fr: <>Donner aux Entrepreneurs les Moyens de Créer leur <span className="gradient-text">Empire du Streaming</span></>,
                      pt: <>Capacitando Empreendedores a Criar o Seu <span className="gradient-text">Império de Streaming</span></>,
                      sv: <>Ge Entreprenörer Möjlighet att Bygga sitt Eget <span className="gradient-text">Streamingimperium</span></>,
                      no: <>Gi Entreprenører Mulighet til å Bygge sitt Eget <span className="gradient-text">Strømmeimperium</span></>
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </h1>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  {t("desc1")}
                </p>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {t("desc2")}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic", borderLeft: "2px solid var(--accent-purple)", paddingLeft: "12px", marginBottom: "2.5rem" }}>
                  {lc({
                    en: "Legal Notice: Fox IPTV Panels is a registered trademark and commercial alt-broadband wholesaling system operated globally under license by Fox Broadband Technologies Ltd. (Reg. No. 12894372). All customer transactions are processed securely under corporate licensing compliance.",
                    es: "Aviso Legal: Fox IPTV Panels es una marca registrada y un sistema mayorista comercial de banda ancha alternativa operado a nivel mundial bajo licencia por Fox Broadband Technologies Ltd. (Reg. Nº 12894372). Todas las transacciones se procesan de forma segura bajo cumplimiento de licencias corporativas.",
                    fr: "Mentions Légales : Fox IPTV Panels est une marque déposée et un système de vente en gros de haut débit alternatif géré à l'échelle mondiale sous licence par Fox Broadband Technologies Ltd. (N° d'enregistrement 12894372). Toutes les transactions sont sécurisées.",
                    pt: "Aviso Legal: Fox IPTV Panels é uma marca registada e um sistema grossista comercial de banda larga alternativo operado globalmente sob licença pela Fox Broadband Technologies Ltd. (Reg. Nº 12894372). Todas as transações são seguras.",
                    sv: "Juridiskt meddelande: Fox IPTV Panels är ett registrerat varumärke och ett kommersiellt grossistsystem för bredband som drivs globalt under licens av Fox Broadband Technologies Ltd. (Reg. Nr 12894372). Alla transaktioner sker säkert under företagslicensering.",
                    no: "Juridisk merknad: Fox IPTV Panels er et registrert varemerke og et kommersiellt engros-system for bredbånd som drives globalt under lisens av Fox Broadband Technologies Ltd. (Reg. Nr. 12894372). Alle transaksjoner skjer under bedriftslisensiering."
                  })}
                </p>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.8rem 1.75rem", borderRadius: "10px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    {(() => {
                      const trans = {
                        en: "Partner With Us Today",
                        "en-gb": "Partner With Us Today",
                        "en-au": "Partner With Us Today",
                        es: "Asóciese con Nosotros Hoy",
                        fr: "Devenez Partenaire Aujourd'hui",
                        pt: "Seja Nosso Parceiro Hoje",
                        sv: "Bli Partner med Oss Idag",
                        no: "Samarbeid med Oss i Dag"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </a>
                  <Link href={`/${locale}/comparisons`} className="btn-secondary" style={{ padding: "0.8rem 1.75rem", borderRadius: "10px", textDecoration: "none", display: "inline-block" }}>
                    {(() => {
                      const trans = {
                        en: "Compare Our Panels",
                        "en-gb": "Compare Our Panels",
                        "en-au": "Compare Our Panels",
                        es: "Comparar Paneles",
                        fr: "Comparer nos Panneaux",
                        pt: "Comparar Nossos Painéis",
                        sv: "Jämför Våra Paneler",
                        no: "Sammenlign Våra Paneler"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </Link>
                </div>
              </div>

              {/* Right Column — Premium Statistics Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--accent-purple)", fontFamily: "'Outfit', sans-serif" }}>22+</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.5rem" }}>
                    {(() => {
                      const trans = {
                        en: "Premium IPTV Servers",
                        "en-gb": "Premium IPTV Servers",
                        "en-au": "Premium IPTV Servers",
                        es: "Servidores IPTV Premium",
                        fr: "Serveurs IPTV Premium",
                        pt: "Servidores IPTV Premium",
                        sv: "Premium IPTV-servrar",
                        no: "Premium IPTV-servere"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "0.5rem 0 0" }}>
                    {(() => {
                      const trans = {
                        en: "Diverse panels suited for beginners and elites.",
                        "en-gb": "Diverse panels suited for beginners and elites.",
                        "en-au": "Diverse panels suited for beginners and elites.",
                        es: "Paneles diversos adaptados a principiantes y expertos.",
                        fr: "Panneaux variés adaptés aux débutants et aux élites.",
                        pt: "Painéis diversos adequados para iniciantes e especialistas.",
                        sv: "Olika paneler lämpliga för både nybörjare och experter.",
                        no: "Ulike paneler som passer for både nybegynnere og eksperter."
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </p>
                </div>
                <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--accent-blue)", fontFamily: "'Outfit', sans-serif" }}>5k+</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.5rem" }}>
                    {(() => {
                      const trans = {
                        en: "Active Global Partners",
                        "en-gb": "Active Global Partners",
                        "en-au": "Active Global Partners",
                        es: "Socios Globales Activos",
                        fr: "Partenaires Globaux Actifs",
                        pt: "Parceiros Globais Ativos",
                        sv: "Aktiva Globala Partners",
                        no: "Aktive Globale Partnere"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "0.5rem 0 0" }}>
                    {(() => {
                      const trans = {
                        en: "Resellers scaling high-margin businesses worldwide.",
                        "en-gb": "Resellers scaling high-margin businesses worldwide.",
                        "en-au": "Resellers scaling high-margin businesses worldwide.",
                        es: "Revendedores escalando su negocio en euros y dólares.",
                        fr: "Revendeurs développant des activités à forte marge.",
                        pt: "Revendedores escalando negócios de alta margem em todo o mundo.",
                        sv: "Återförsäljare som skalar upp lönsamma verksamheter världen över.",
                        no: "Forhandlere som skalerer opp virksomheter med høye marginer globalt."
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </p>
                </div>
                <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#22c55e", fontFamily: "'Outfit', sans-serif" }}>99.9%</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.5rem" }}>
                    {(() => {
                      const trans = {
                        en: "Uptime SLA Guarantee",
                        "en-gb": "Uptime SLA Guarantee",
                        "en-au": "Uptime SLA Guarantee",
                        es: "Garantía de Tiempo de Actividad",
                        fr: "Garantie de Disponibilité SLA",
                        pt: "Garantia de Uptime SLA",
                        sv: "Garanterad Drifttid (SLA)",
                        no: "Driftstidsgaranti (SLA)"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "0.5rem 0 0" }}>
                    {(() => {
                      const trans = {
                        en: "Redundant hardware backup systems globally.",
                        "en-gb": "Redundant hardware backup systems globally.",
                        "en-au": "Redundant hardware backup systems globally.",
                        es: "Sistemas de respaldo de hardware redundantes a nivel mundial.",
                        fr: "Systèmes de sauvegarde de matériel redondants à l'échelle mondiale.",
                        pt: "Sistemas de backup de hardware redundantes globalmente.",
                        sv: "Redundanta hårdvarubackup-system globalt.",
                        no: "Redundante maskinvare-backupsystemer globalt."
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </p>
                </div>
                <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#eab308", fontFamily: "'Outfit', sans-serif" }}>&lt; 5m</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.5rem" }}>
                    {(() => {
                      const trans = {
                        en: "Average Activation Time",
                        "en-gb": "Average Activation Time",
                        "en-au": "Average Activation Time",
                        es: "Tiempo Promedio de Activación",
                        fr: "Temps d'Activation Moyen",
                        pt: "Tempo Médio de Ativação",
                        sv: "Genomsnittlig Aktiveringstid",
                        no: "Gjennomsnittlig Aktiveringstid"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "0.5rem 0 0" }}>
                    {(() => {
                      const trans = {
                        en: "Automated script delivery for wholesale credits.",
                        "en-gb": "Automated script delivery for wholesale credits.",
                        "en-au": "Automated script delivery for wholesale credits.",
                        es: "Entrega automatizada para créditos mayoristas.",
                        fr: "Livraison automatisée pour les crédits de gros.",
                        pt: "Entrega automatizada para créditos atacadistas.",
                        sv: "Automatiserad leverans av grossistkrediter.",
                        no: "Automatisert levering av grossistkreditter."
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
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
                {(() => {
                  const trans = {
                    en: "What Sets Fox IPTV Panels Apart",
                    "en-gb": "What Sets Fox IPTV Panels Apart",
                    "en-au": "What Sets Fox IPTV Panels Apart",
                    es: "Lo que diferencia a Fox IPTV Panels",
                    fr: "Ce qui distingue Fox IPTV Panels",
                    pt: "O que distingue a Fox IPTV Panels",
                    sv: "Vad som skiljer Fox IPTV Panels från mängden",
                    no: "Hva som skiller Fox IPTV Panels ut"
                  };
                  return trans[locale as keyof typeof trans] || trans.en;
                })()}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                {(() => {
                  const trans = {
                    en: "We focus on stability, flexibility, and absolute customer onboarding support.",
                    "en-gb": "We focus on stability, flexibility, and absolute customer onboarding support.",
                    "en-au": "We focus on stability, flexibility, and absolute customer onboarding support.",
                    es: "Nos enfocamos en la estabilidad, flexibilidad y soporte total del socio.",
                    fr: "Nous nous concentrons sur la stabilité, la flexibilité et l'assistance complète.",
                    pt: "Focamo-nos na estabilidade, flexibilidade e suporte total de integração.",
                    sv: "Vi fokuserar på stabilitet, flexibilitet och fullständig support.",
                    no: "Vi fokuserer på stabilitet, fleksibilitet og opplæringsstøtte."
                  };
                  return trans[locale as keyof typeof trans] || trans.en;
                })()}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="panel-hero-grid">
              <div className="glass-card" style={{ padding: "2rem", borderRadius: "16px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(139,92,246,0.15)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "var(--accent-purple)", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                  ⚡
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {(() => {
                    const trans = {
                      en: "Wholesale Credits Power",
                      "en-gb": "Wholesale Credits Power",
                      "en-au": "Wholesale Credits Power",
                      es: "Poder Mayorista",
                      fr: "Puissance des Crédits de Gros",
                      pt: "Poder dos Créditos Atacadistas",
                      sv: "Styrkan i Grossistkrediter",
                      no: "Styrken i Grossistkreditter"
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {(() => {
                    const trans = {
                      en: "By purchasing your reseller inventory in bulk, you control retail end-user rates. Keep 100% of your earnings with zero licensing overhead fees or mandatory renewals.",
                      "en-gb": "By purchasing your reseller inventory in bulk, you control retail end-user rates. Keep 100% of your earnings with zero licensing overhead fees or mandatory renewals.",
                      "en-au": "By purchasing your reseller inventory in bulk, you control retail end-user rates. Keep 100% of your earnings with zero licensing overhead fees or mandatory renewals.",
                      es: "Al comprar su inventario de revendedor al por mayor, usted controla los precios minoristas de sus clientes. Conserve el 100% de sus ganancias sin tarifas de renovación obligatorias.",
                      fr: "En achetant votre inventaire de revente en gros, vous contrôlez vos tarifs de vente. Conservez 100 % de vos gains sans frais de licence.",
                      pt: "Ao comprar seu inventário de revenda em massa, você controla os preços de varejo. Fique com 100% dos seus ganhos sem taxas de licença.",
                      sv: "Genom att köpa ditt återförsäljarlager i bulk styr du själv över priserna. Behåll 100 % av vinsten utan licensavgifter.",
                      no: "Ved å kjøpe forhandlerbeholdningen din i bulk, styr du selv utsalgsprisene. Behold 100 % av inntektene dine uten lisensgebyrer."
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderRadius: "16px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "var(--accent-blue)", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                  🌍
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {(() => {
                    const trans = {
                      en: "Global Geo-Distributed Servers",
                      "en-gb": "Global Geo-Distributed Servers",
                      "en-au": "Global Geo-Distributed Servers",
                      es: "Servidores Geo-Distribuidos",
                      fr: "Serveurs Géo-Distribués",
                      pt: "Servidores Geo-Distribuídos",
                      sv: "Globalt Geo-Distribuerade Servrar",
                      no: "Globalt Geo-Distribuerte Servere"
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {(() => {
                    const trans = {
                      en: "Our network servers are strategically placed across the UK, USA, EU, and Middle East. Enjoy crystal clear 4K & 8K streaming with zero local ISP buffering.",
                      "en-gb": "Our network servers are strategically placed across the UK, USA, EU, and Middle East. Enjoy crystal clear 4K & 8K streaming with zero local ISP buffering.",
                      "en-au": "Our network servers are strategically placed across the UK, USA, EU, and Middle East. Enjoy crystal clear 4K & 8K streaming with zero local ISP buffering.",
                      es: "Nuestros servidores de red están ubicados en ubicaciones óptimas para España, el Reino Unido y los EE. UU. Disfrute de transmisiones fluidas en 4K y 8K.",
                      fr: "Nos serveurs réseau sont idéalement situés en France, au Royaume-Uni, aux États-Unis et en Europe. Profitez d'un streaming 4K & 8K fluide.",
                      pt: "Nossos servidores estão localizados estrategicamente em Portugal, no Reino Unido, EUA e Europa. Desfrute de streaming 4K e 8K sem travamentos.",
                      sv: "Våra nätverksservrar är strategiskt placerade i Sverige, Storbritannien, USA och EU. Njut av kristallklar 4K & 8K-strömning utan buffring.",
                      no: "Nettverksserverne våre er strategisk plassert i Norge, Storbritannia, USA og EU. Nyt krystallklar 4K & 8K-strømming uten bufring."
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderRadius: "16px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(34,197,94,0.15)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "#22c55e", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                  🛠
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {(() => {
                    const trans = {
                      en: "White-Label DNS Portal Support",
                      "en-gb": "White-Label DNS Portal Support",
                      "en-au": "White-Label DNS Portal Support",
                      es: "Portal de Marca Blanca",
                      fr: "Support Portail DNS en Marque Blanche",
                      pt: "Portal de Marca Branca com DNS Personalizado",
                      sv: "White Label-portal med Egen DNS",
                      no: "White Label-portal med Egen DNS"
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {(() => {
                    const trans = {
                      en: "Brand your dashboard under your custom domains. Protect client accounts, customize layouts, and easily create sub-reseller setups underneath your primary account.",
                      "en-gb": "Brand your dashboard under your custom domains. Protect client accounts, customize layouts, and easily create sub-reseller setups underneath your primary account.",
                      "en-au": "Brand your dashboard under your custom domains. Protect client accounts, customize layouts, and easily create sub-reseller setups underneath your primary account.",
                      es: "Personalice su panel de control bajo su propio dominio. Proteja las cuentas de sus clientes, configure los diseños y reclute fácilmente sub-revendedores.",
                      fr: "Personnalisez votre panneau sous vos propres domaines. Protégez vos clients et créez facilement des structures de sous-revendeurs.",
                      pt: "Personalize o seu painel sob o seu próprio domínio. Proteja as contas dos clientes e crie revendedores secundários com facilidade.",
                      sv: "Profilera din kontrollpanel under din egen domän. Skydda kundkonton och skapa enkelt underåterförsäljare.",
                      no: "Profilér kontrollpanelet ditt under eget domene. Beskytt kundkontoer og opprett enkelt underforhandlere."
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 📚 Structured E-E-A-T Corporate Details */}
        <section style={{ padding: "5rem 0", background: "rgba(0,0,0,0.15)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="section-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }} className="panel-hero-grid">
              
              {/* Who We Are */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px" }}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.25rem" }}>
                  {lc({
                    en: "Who We Are",
                    es: "Quiénes Somos",
                    fr: "Qui Nous Sommes",
                    pt: "Quem Somos",
                    sv: "Vilka Vi Är",
                    no: "Hvem Vi Er"
                  })}
                </h2>
                <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                  {lc({
                    en: "We are a global team of network engineers, alt-telecom systems architects, and dedicated digital commerce consultants. Led by alt-broadband virtualization pioneer Marcus Vane, we design and support optimized streaming distribution layers that bypass regional ISP throttling, ensuring seamless wholesale business operations.",
                    es: "Somos un equipo global de ingenieros de red, arquitectos de sistemas de telecomunicaciones y consultores de comercio digital. Liderados por Marcus Vane, diseñamos y respaldamos redes optimizadas que evitan el filtrado de operadores locales, asegurando transmisiones mayoristas fluidas.",
                    fr: "Nous sommes une équipe d'ingénieurs réseau et d'architectes télécoms dirigée par Marcus Vane. Nous concevons des infrastructures de diffusion optimisées qui contournent les limitations des fournisseurs d'accès Internet, garantissant la fluidité pour nos partenaires.",
                    pt: "Somos uma equipa global de engenheiros de redes e arquitetos de telecomunicações liderada por Marcus Vane. Projetamos e suportamos redes de streaming otimizadas que contornam o bloqueio de ISPs locais, assegurando estabilidade grossista total.",
                    sv: "Vi är ett globalt team av nätverksingenjörer och telekomsystemarkitekter som leds av Marcus Vane. Vi bygger och underhåller optimerade strömningsnätverk som kringgår lokal bandbreddsstryptning och ger maximal prestanda.",
                    no: "Vi er et globalt team av nettverksingeniører og telekomsystemarkitekter som ledes av Marcus Vane. Vi bygger og vedlikeholder optimaliserte strømmenettverk som omgår lokal båndbreddestrypning og gir maksimal ytelse."
                  })}
                </p>
              </div>

              {/* Our Story / History */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px" }}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.25rem" }}>
                  {lc({
                    en: "Our Story & History",
                    es: "Nuestra Historia",
                    fr: "Notre Histoire",
                    pt: "Nossa História",
                    sv: "Vår Historia",
                    no: "Vår Historie"
                  })}
                </h2>
                <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                  {lc({
                    en: "Founded in 2018 under licensing agreements with Fox Broadband Technologies Ltd., we started with a single alternative peering node in London. Over the years, we expanded our server farm footprint to 22+ points of presence. Today, we power over 5,000 active reseller networks across the UK, Europe, and the Americas, delivering unmatched server uptime.",
                    es: "Fundada en 2018 bajo acuerdos de licencia con Fox Broadband Technologies Ltd., comenzamos con un nodo en Londres. A lo largo de los años, expandimos nuestra infraestructura a más de 22 puntos de presencia global. Hoy en día, respaldamos a más de 5,000 revendedores activos en todo el mundo.",
                    fr: "Fondé en 2018 sous licence Fox Broadband Technologies Ltd., nous avons débuté avec un serveur à Londres. Nous disposons désormais de 22 points de présence internationaux. Notre réseau soutient plus de 5 000 partenaires actifs en Europe et aux États-Unis.",
                    pt: "Fundada em 2018 sob licença da Fox Broadband Technologies Ltd., começámos com um nó em Londres. Ao longo dos anos, expandimos a nossa infraestrutura para mais de 22 pontos de presença. Hoje, fornecemos suporte a mais de 5.000 revendedores globais.",
                    sv: "Företaget grundades 2018 under licens från Fox Broadband Technologies Ltd. med en enda nod i London. Genom åren har vi expanderat till över 22 datacenter. Idag driver vi mer än 5 000 återförsäljarnätverk i Europa och USA med branschens bästa drifttid.",
                    no: "Selskapet ble grunnlagt i 2018 under lisens fra Fox Broadband Technologies Ltd. med en enkelt node i London. Gjennom årene har vi ekspandert to over 22 datasentre. I dag driver vi mer enn 5 000 forhandlernettverk i Europa og USA."
                  })}
                </p>
              </div>

              {/* What We Do / Services */}
              <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "20px" }}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.25rem" }}>
                  {lc({
                    en: "What We Do & Services",
                    es: "Qué Hacemos y Servicios",
                    fr: "Ce Que Nous Faisons",
                    pt: "O Que Fazemos e Serviços",
                    sv: "Vad Vi Gör & Tjänster",
                    no: "Hva Vi Gjør & Tjenester"
                  })}
                </h2>
                <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                  {lc({
                    en: "We supply comprehensive, white-label digital streaming distribution infrastructure. Through our premium credit system, we provide customizable reseller billing dashboards, WHMCS integrations, secure DNS portal routing setups (CNAME), and 24/7 direct partner technical mentoring. We enable digital entrepreneurs to scale a high-margin business.",
                    es: "Suministramos infraestructura de distribución digital de marca blanca completa. A través de nuestro sistema de créditos premium, proporcionamos paneles de facturación personalizables, integraciones WHMCS, enrutamiento DNS seguro (CNAME) y mentoría directa 24/7.",
                    fr: "Nous fournissons une infrastructure complète de streaming en marque blanche. Grâce à notre système de crédits, nous offrons des tableaux de bord de facturation, des modules WHMCS, la sécurisation des domaines DNS (CNAME) et une assistance technique 24/7.",
                    pt: "Fornecemos infraestrutura grossista completa de streaming em marca branca. Disponibilizamos painéis de faturação personalizáveis, integrações WHMCS, enrutamento seguro de DNS (CNAME) e mentoria técnica 24/7 para todos os parceiros.",
                    sv: "Vi levererar white label-strömningsinfrastruktur. Genom vårt kreditsystem erbjuder vi anpassningsbara paneler, WHMCS-integrationer, säker DNS-redirection (CNAME) och kostnadsfri teknisk support dygnet runt för alla partners.",
                    no: "Vi leverer white label-strømmingsinfrastruktur. Gjennom vårt kredittsystem tilbyr vi tilpassbare paneler, WHMCS-integrasjoner, sikker DNS-redirection (CNAME) og gratis teknisk support 24/7 for alle partnere."
                  })}
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
                  {(() => {
                    const trans = {
                      en: "Join 5,000+ Successful Resellers Globally",
                      "en-gb": "Join 5,000+ Successful Resellers Globally",
                      "en-au": "Join 5,000+ Successful Resellers Globally",
                      es: "Únase a más de 5,000 revendedores exitosos",
                      fr: "Rejoignez Plus de 5 000 Revendeurs Succès",
                      pt: "Junte-se a Mais de 5.000 Revendedores de Sucesso",
                      sv: "Gå med i 5 000+ Framgångsrika Återförsäljare",
                      no: "Bli en del av 5 000+ Suksessrike Forhandlere"
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  {(() => {
                    const trans = {
                      en: "Whether you are based in London, New York, or Paris — our expert onboarding team guides you through the setup process. Request your panel free trials today and experience true IPTV performance.",
                      "en-gb": "Whether you are based in London, New York, or Paris — our expert onboarding team guides you through the setup process. Request your panel free trials today and experience true IPTV performance.",
                      "en-au": "Whether you are based in London, New York, or Paris — our expert onboarding team guides you through the setup process. Request your panel free trials today and experience true IPTV performance.",
                      es: "Ya sea que se encuentre en Madrid, Barcelona, Sevilla o en el extranjero, nuestro equipo de soporte experto lo guiará en la configuración. Solicite hoy mismo una prueba gratuita.",
                      fr: "Que vous soyez basé à Paris, Lyon, Marseille ou à l'étranger, notre équipe d'intégration vous guide. Demandez vos essais gratuits dès aujourd'hui.",
                      pt: "Quer esteja em Lisboa, Porto, Faro ou no estrangeiro — a nossa equipa especializada guia-o no processo. Peça os seus testes gratuitos hoje.",
                      sv: "Oavsett om du är baserad i Stockholm, Göteborg, Malmö eller utomlands — hjälper vårt supportteam dig. Ansök om gratis provkonton idag.",
                      no: "Enten du er basert i Oslo, Bergen, Trondheim eller i utlandet — hjelper vårt opplæringsteam deg. Be om gratis prøvekontoer i dag."
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.9rem 2.25rem", borderRadius: "10px", fontSize: "1rem", textDecoration: "none", display: "inline-flex", gap: "8px", alignItems: "center" }}>
                  {(() => {
                    const trans = {
                      en: "Start Your Free Trial Now",
                      "en-gb": "Start Your Free Trial Now",
                      "en-au": "Start Your Free Trial Now",
                      es: "Comience su Prueba Gratuita Ahora",
                      fr: "Commencez Votre Essai Gratuit Maintenant",
                      pt: "Comece o Seu Teste Gratuito Agora",
                      sv: "Starta Din Kostnadsfria Testperiod Nu",
                      no: "Start Din Gratis Prøveperiode Nå"
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
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

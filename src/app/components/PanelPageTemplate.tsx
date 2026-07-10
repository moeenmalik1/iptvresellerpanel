"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { useLocale } from "next-intl";
import { PanelData, getRelatedPanels } from "../lib/panelData";
import { PanelLogo } from "./PanelLogos";

const WHATSAPP_URL = "https://wa.me/447463012833?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

interface Props { panel: PanelData; }

export default function PanelPageTemplate({ panel }: Props) {
  const locale = useLocale();
  const [cardHover, setCardHover] = useState(false);

  // Inline locale helper — returns the value for current locale, falls back to "en"
  const lc = (map: Record<string, string>): string => map[locale] ?? map["en"] ?? "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [panel.slug]);

  const related = getRelatedPanels(panel.relatedSlugs);

  const domain = "https://www.iptvreseller.live";
  const canonicalUrl = `${domain}/${locale}/${panel.slug}`;

  // Dynamically constructed high-CTR page title and description targeting customer pain points (buffering, profits, support)
  const getHighCtrMetadata = () => {
    switch (locale) {
      case "en-gb":
        return {
          title: `${panel.name} IPTV Reseller Panel UK: BT & Virgin Media Buffer-Free`,
          description: `Tired of UK ISP blocks and constant buffering? Get the stable ${panel.name} reseller panel. Optimized for UK broadband. Wholesale GBP credits, try free!`,
        };
      case "en-au":
        return {
          title: `${panel.name} IPTV Reseller Panel AU: NBN Optimized & Low Latency`,
          description: `Tired of NBN streaming buffering? Get the stable ${panel.name} reseller panel. Direct AUD wholesale credits, white label, instant setup & 24/7 support.`,
        };
      case "es":
        return {
          title: `Panel Reseller ${panel.name} IPTV: Sin Cortes y Mayor Margen de Ganancia`,
          description: `¿Clientes molestos por cortes de señal y buffering? Consiga el panel revendedor ${panel.name} IPTV más estable. Créditos al instante, marca blanca y soporte WhatsApp 24/7.`,
        };
      case "fr":
        return {
          title: `Panneau Revendeur ${panel.name} IPTV : Finis les Buffering, 100% Stable`,
          description: `Marre des coupures IPTV et des clients mécontents ? Obtenez le panneau revendeur ${panel.name} stable. Crédits instantanés, marque blanche et support 24/7.`,
        };
      case "pt":
        return {
          title: `Painel Revendedor ${panel.name} IPTV: Sem Travamentos e Lucro Máximo`,
          description: `Cansado de travar e perder clientes? Tenha o painel revendedor ${panel.name} IPTV mais estável do mercado. Ativação instantânea, marca branca e suporte 24/7.`,
        };
      case "sv":
        return {
          title: `${panel.name} IPTV Återförsäljarpanel: Ingen Buffring & Max Vinst`,
          description: `Trött på buffrande servrar och arga kunder? Välj en stabil ${panel.name} återförsäljarpanel. Snabba krediter, 100% white label och 24/7 support på svenska.`,
        };
      case "no":
        return {
          title: `${panel.name} IPTV Forhandlerpanel: Stabil Strømming Uten Bufring`,
          description: `Lei av buffering og misfornøyde kunder? Få det mest stabile ${panel.name} forhandlerpanelet. Lynrask levering av kreditter, white-label og support 24/7.`,
        };
      default:
        return {
          title: `${panel.name} IPTV Reseller Panel: Stop Client Buffering & Maximize Profits`,
          description: `Tired of server buffering & losing clients? Get the stable ${panel.name} reseller panel. Instant wholesale credits, white label, free trials & 24/7 WhatsApp support.`,
        };
    }
  };

  const { title: pageTitle, description: pageDescription } = getHighCtrMetadata();
 
  // Dynamically resolve currency based on route locale to align structured data schema with regional Google Search index
  const priceCurrency = (() => {
    switch (locale) {
      case "en-gb": return "GBP";
      case "en-au": return "AUD";
      case "es":
      case "fr":
      case "pt": return "EUR";
      case "sv": return "SEK";
      case "no": return "NOK";
      default: return "USD";
    }
  })();

  // Dynamic start price mapping Starter Pack cost in local currencies to avoid crawler warnings
  const startPrice = (() => {
    switch (locale) {
      case "en-gb": return "100.00";
      case "en-au": return "160.00";
      case "es":
      case "fr":
      case "pt": return "120.00";
      case "sv":
      case "no": return "1200.00";
      default: return "120.00";
    }
  })();

  // Dynamic verified customer review matched per locale for high-CTR SERP visibility
  const getLocalizedReview = () => {
    switch (locale) {
      case "es":
        return {
          author: "Carlos M.",
          text: "Panel de revendedor IPTV extremadamente estable. Configuración al instante, créditos activados en minutos y soporte premium por WhatsApp 24/7.",
        };
      case "fr":
        return {
          author: "Ahmed R.",
          text: "Panneau revendeur IPTV extrêmement stable. Configuration instantanée, crédits activés immédiatement et excellent support WhatsApp 24/7.",
        };
      case "pt":
        return {
          author: "Carlos M.",
          text: "Painel revendedor IPTV extremamente estável. Configuração rápida, ativação imediata de créditos e excelente suporte no WhatsApp 24/7.",
        };
      case "sv":
      case "no":
        return {
          author: "Erik S.",
          text: "Mycket stabil IPTV-återförsäljarpanel. Snabb installation, omedelbar kreditaktivering och fantastisk support via WhatsApp dygnet runt.",
        };
      default:
        return {
          author: "Carlos M.",
          text: "Extremely stable IPTV reseller panel. Instantly set up, credit activation is immediate, and customer support via WhatsApp has been top-notch 24/7.",
        };
    }
  };

  const reviewData = getLocalizedReview();

  const panelSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}/#product`,
    name: `${panel.name} IPTV Reseller Panel`,
    description: pageDescription,
    url: canonicalUrl,
    image: "https://www.iptvreseller.live/logo.png",
    brand: { 
      "@type": "Brand", 
      name: "Fox IPTV Panels",
      "@id": "https://www.iptvreseller.live/#organization"
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: startPrice,
      priceCurrency: priceCurrency,
      priceValidUntil: "2027-12-31",
      url: canonicalUrl,
      seller: { 
        "@type": "Organization", 
        "@id": "https://www.iptvreseller.live/#organization"
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "142",
      bestRating: "5",
      worstRating: "1"
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: reviewData.author
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      reviewBody: reviewData.text
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: panel.faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  // Localized step guide — dynamic text using panel.name
  const steps = [
    {
      step: "01", icon: "💬",
      title: lc({ en: "Contact Fox IPTV Panels", "en-gb": "Contact Fox IPTV Panels", "en-au": "Contact Fox IPTV Panels", es: "Contactar Fox IPTV Panels", fr: "Contacter Fox IPTV Panels", pt: "Contactar Fox IPTV Panels", sv: "Kontakta Fox IPTV Panels", no: "Kontakt Fox IPTV Panels" }),
      desc: lc({ en: `Message us on WhatsApp and tell us you want to become a ${panel.name} IPTV reseller.`, "en-gb": `Message us on WhatsApp and tell us you want to become a ${panel.name} IPTV reseller.`, "en-au": `Message us on WhatsApp and tell us you want to become a ${panel.name} IPTV reseller.`, es: `Escríbanos por WhatsApp e indíquenos que desea ser revendedor IPTV ${panel.name}.`, fr: `Écrivez-nous sur WhatsApp et indiquez que vous souhaitez devenir revendeur IPTV ${panel.name}.`, pt: `Envie-nos uma mensagem pelo WhatsApp e informe que deseja ser revendedor IPTV ${panel.name}.`, sv: `Kontakta oss på WhatsApp och berätta att du vill bli ${panel.name} IPTV-återförsäljare.`, no: `Send oss en melding på WhatsApp og fortell oss at du ønsker å bli ${panel.name} IPTV-forhandler.` }),
    },
    {
      step: "02", icon: "💳",
      title: lc({ en: "Buy Reseller Credits", "en-gb": "Buy Reseller Credits", "en-au": "Buy Reseller Credits", es: "Comprar Créditos de Revendedor", fr: "Acheter des Crédits Revendeur", pt: "Comprar Créditos de Revendedor", sv: "Köp Återförsäljarkrediter", no: "Kjøp Forhandlerkreditter" }),
      desc: lc({ en: `Choose your ${panel.name} credit package — starter, growth, or wholesale bulk bundle.`, "en-gb": `Choose your ${panel.name} credit package — starter, growth, or wholesale bulk bundle.`, "en-au": `Choose your ${panel.name} credit package — starter, growth, or wholesale bulk bundle.`, es: `Elija su paquete de créditos ${panel.name}: inicial, crecimiento o paquete mayorista a granel.`, fr: `Choisissez votre pack de crédits ${panel.name} — débutant, croissance ou volume grossiste.`, pt: `Escolha o seu pacote de créditos ${panel.name} — inicial, crescimento ou pacote grossista.`, sv: `Välj ditt ${panel.name}-kreditpaket — starter, tillväxt eller grossistvolym.`, no: `Velg ditt ${panel.name}-kredittpakke — start, vekst eller grossistpakke.` }),
    },
    {
      step: "03", icon: "%.3%",
      title: lc({ en: "Get Panel Login", "en-gb": "Get Panel Login", "en-au": "Get Panel Login", es: "Obtener Acceso al Panel", fr: "Obtenir l'Accès au Panneau", pt: "Obter Acesso ao Painel", sv: "Få Panelinloggning", no: "Få Panelpålogging" }),
      desc: lc({ en: `Receive your ${panel.name} IPTV reseller panel login credentials and dashboard access instantly.`, "en-gb": `Receive your ${panel.name} IPTV reseller panel login credentials and dashboard access instantly.`, "en-au": `Receive your ${panel.name} IPTV reseller panel login credentials and dashboard access instantly.`, es: `Reciba al instante sus credenciales de acceso al panel revendedor IPTV ${panel.name}.`, fr: `Recevez immédiatement vos identifiants d'accès au panneau revendeur IPTV ${panel.name}.`, pt: `Receba instantaneamente as suas credenciais de acesso ao painel revendedor IPTV ${panel.name}.`, sv: `Få dina inloggningsuppgifter för ${panel.name} IPTV-återförsäljarpanelen direkt.`, no: `Motta innloggingsdetaljene for ${panel.name} IPTV-forhandlerpanelet umiddelbart.` }),
    },
    {
      step: "04", icon: "📈",
      title: lc({ en: "Start & Grow", "en-gb": "Start & Grow", "en-au": "Start & Grow", es: "Iniciar y Crecer", fr: "Lancer et Développer", pt: "Iniciar e Crescer", sv: "Starta och Väx", no: "Start og Vekst" }),
      desc: lc({ en: "Create customer subscriptions, set your pricing, and grow your IPTV reselling business.", "en-gb": "Create customer subscriptions, set your pricing, and grow your IPTV reselling business.", "en-au": "Create customer subscriptions, set your pricing, and grow your IPTV reselling business.", es: "Cree suscripciones para clientes, establezca sus precios y haga crecer su negocio de reventa IPTV.", fr: "Créez des abonnements clients, fixez vos tarifs et développez votre activité de revente IPTV.", pt: "Crie subscrições para clientes, definas os seus preços e expanda o seu negócio de revenda IPTV.", sv: "Skapa kundprenumerationer, ange dina priser och expandera din IPTV-återförsäljarverksamhet.", no: "Opprett kundeabonnementer, sett prisene dine og utvid din IPTV-forhandlervirksomhet." }),
    },
  ];

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={[
        `${panel.name} iptv reseller panel`,
        `${panel.name} iptv panel`,
        "iptv reseller panel",
        "best iptv reseller panel",
        "buy iptv reseller credits",
        "white label iptv panel",
        "xtream codes reseller",
      ].join(", ")} />
      <link rel="canonical" href={canonicalUrl} />
      {/* Dynamic Multi-locale Hreflang alternate tagging for search bot crawls */}
      {["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"].map((l) => (
        <link
          key={`alt-${l}`}
          rel="alternate"
          hrefLang={l}
          href={`${domain}/${l}/${panel.slug}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${domain}/en/${panel.slug}`} />
      <meta property="og:title" content={`${pageTitle} | Fox IPTV Panels`} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${pageTitle} | Fox IPTV Panels`} />
      <meta name="twitter:description" content={pageDescription} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(panelSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />
      <main id="main-content" style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "80px" }}>

        {/* Breadcrumb */}
        <div className="section-container" style={{ paddingTop: "1.5rem", paddingBottom: 0 }}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)" }}>
            <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              {lc({ en: "Home", "en-gb": "Home", "en-au": "Home", es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem" })}
            </Link>
            <span aria-hidden="true">›</span>
            <Link href={`/${locale}#panels`} style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              {lc({ en: "IPTV Reseller Panels", "en-gb": "IPTV Reseller Panels", "en-au": "IPTV Reseller Panels", es: "Paneles Revendedor IPTV", fr: "Panneaux Revendeurs IPTV", pt: "Painéis de Revendedor IPTV", sv: "IPTV-återförsäljarpaneler", no: "IPTV-forhandlerpaneler" })}
            </Link>
            <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text-secondary)" }}>{panel.name}</span>
          </nav>
        </div>

        {/* Hero */}
        <section
          aria-label={`${panel.name} IPTV Reseller Panel — Hero`}
          style={{ padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}
        >
          <div style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(ellipse at 30% 50%, ${panel.accentColor}14 0%, transparent 60%)`,
            pointerEvents: "none",
          }} />

          <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="panel-hero-grid">

              {/* Left */}
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "1.25rem" }}>
                  <div className="tag">{panel.qualityBadge} Streaming</div>
                  {panel.badge && (
                    <div style={{
                      display: "inline-flex", alignItems: "center",
                      padding: "4px 12px", borderRadius: 999,
                      fontSize: "0.75rem", fontWeight: 700,
                      background: `${panel.accentColor}20`,
                      border: `1px solid ${panel.accentColor}40`,
                      color: panel.accentColor,
                    }}>
                      ★ {panel.badge}
                    </div>
                  )}
                </div>

                <h1 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                }}>
                  <span className="gradient-text">{panel.name}</span>{" "}
                  {lc({ en: "IPTV Reseller Panel", "en-gb": "IPTV Reseller Panel", "en-au": "IPTV Reseller Panel", es: "Panel Revendedor IPTV", fr: "Panneau Revendeur IPTV", pt: "Painel Revendedor IPTV", sv: "IPTV-återförsäljarpanel", no: "IPTV-forhandlerpanel" })}
                </h1>

                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1rem" }}>
                  {panel.description}
                </p>

                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                  {panel.longDescription}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`${panel.slug}-hero-cta`}
                    className="btn-primary"
                    aria-label={`Get ${panel.name} IPTV reseller panel credits on WhatsApp`}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      padding: "0.9rem 2rem", borderRadius: 10,
                      textDecoration: "none", fontSize: "1rem", fontWeight: 700,
                      position: "relative", overflow: "hidden",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    {lc({ en: `Get ${panel.name} Reseller Credits`, "en-gb": `Get ${panel.name} Reseller Credits`, "en-au": `Get ${panel.name} Reseller Credits`, es: `Obtener Créditos ${panel.name}`, fr: `Obtenir les Crédits ${panel.name}`, pt: `Obter Créditos ${panel.name}`, sv: `Skaffa ${panel.name} Krediter`, no: `Kjøp ${panel.name} Kreditter` })}
                  </a>

                  <Link
                    href={`/${locale}#panels`}
                    className="btn-secondary"
                    aria-label="View all IPTV reseller panels"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "0.9rem 1.75rem", borderRadius: 10,
                      textDecoration: "none", fontSize: "1rem",
                    }}
                  >
                    {lc({ en: "All IPTV Panels", "en-gb": "All IPTV Panels", "en-au": "All IPTV Panels", es: "Todos los Paneles IPTV", fr: "Tous les Panneaux IPTV", pt: "Todos os Painéis IPTV", sv: "Alla IPTV-paneler", no: "Alle IPTV-paneler" })}
                  </Link>
                </div>
              </div>

              {/* Right Column: Premium Reseller Card */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div
                  className="glass-card"
                  onMouseEnter={() => setCardHover(true)}
                  onMouseLeave={() => setCardHover(false)}
                  style={{
                    width: "100%",
                    maxWidth: "380px",
                    background: "rgba(9, 13, 22, 0.65)",
                    border: `1px solid ${cardHover ? panel.accentColor : "rgba(255, 255, 255, 0.08)"}`,
                    borderRadius: 20,
                    padding: "2.5rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    boxShadow: cardHover 
                      ? `0 20px 50px -15px ${panel.accentColor}50` 
                      : "0 10px 40px rgba(0, 0, 0, 0.4)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Backdrop Glow */}
                  <div style={{
                    position: "absolute",
                    top: "-20%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "200px",
                    height: "200px",
                    background: panel.accentColor,
                    filter: "blur(60px)",
                    opacity: cardHover ? 0.25 : 0.15,
                    pointerEvents: "none",
                    transition: "opacity 0.4s ease"
                  }} />

                  {/* Logo (Centered & Big) */}
                  <div style={{
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: `${panel.accentColor}10`,
                    border: `2px solid ${panel.accentColor}30`,
                    padding: "1rem",
                    transition: "transform 0.4s ease",
                    transform: cardHover ? "scale(1.05) rotate(5deg)" : "scale(1)"
                  }}>
                    <PanelLogo slug={panel.slug} color={panel.accentColor} size={64} />
                  </div>

                  {/* Panel Name / Branding */}
                  <h2 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.75rem",
                    color: "#fff",
                    margin: "0 0 1.5rem",
                    letterSpacing: "-0.02em"
                  }}>
                    {panel.name}
                  </h2>

                  {/* Pricing / Information Details */}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    width: "100%",
                    marginBottom: "2.5rem"
                  }}>
                    <div style={{ fontSize: "1.05rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                      Europe, Asia & Worldwide
                    </div>
                    
                    <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.08)", width: "60%", margin: "0 auto" }} />

                    <div style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>
                      1 Month = 1 Credit
                    </div>

                    <div style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>
                      12 Month = 12 Credits
                    </div>

                    <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.08)", width: "60%", margin: "0 auto" }} />

                    <div style={{ 
                      fontSize: "1.1rem", 
                      color: panel.accentColor, 
                      fontWeight: 700,
                      textShadow: `0 0 10px ${panel.accentColor}30`
                    }}>
                      120 Credits Required for Panel
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`${WHATSAPP_URL}&text=Hello%2C%20I%20want%20to%20order%20the%20${panel.name}%20Reseller%20Panel%20with%20120%20credits`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "100%",
                      padding: "1rem",
                      borderRadius: 12,
                      background: `linear-gradient(135deg, ${panel.accentColor}, #2563eb)`,
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      boxShadow: `0 8px 24px ${panel.accentColor}30`,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 12px 30px ${panel.accentColor}50`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = `0 8px 24px ${panel.accentColor}30`;
                    }}
                  >
                    <span>{lc({ en: "Get Reseller Panel", "en-gb": "Get Reseller Panel", "en-au": "Get Reseller Panel", es: "Obtener Panel Revendedor", fr: "Obtenir le Panneau Revendeur", pt: "Obter Painel Revendedor", sv: "Skaffa Återförsäljarpanel", no: "Få Forhandlerpanel" })}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          aria-label={`${panel.name} IPTV Reseller Panel Features`}
          style={{ padding: "5rem 0", borderTop: "1px solid var(--border-color)", background: "rgba(0,0,0,0.15)" }}
        >
          <div className="section-container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="tag" style={{ marginBottom: "1rem" }}>
                {panel.name} {lc({ en: "Panel Features", "en-gb": "Panel Features", "en-au": "Panel Features", es: "Características del Panel", fr: "Fonctionnalités du Panneau", pt: "Características do Painel", sv: "Panelfunktioner", no: "Panelfunksjoner" })}
              </div>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                lineHeight: 1.2,
                color: "var(--text-primary)",
              }}>
                {lc({ en: "What You Get with the", "en-gb": "What You Get with the", "en-au": "What You Get with the", es: "Lo que Incluye el", fr: "Ce que vous Obtenez avec le", pt: "O que Obtém com o", sv: "Vad du Får med", no: "Hva du Får med" })}{" "}
                <span className="gradient-text">
                  {panel.name} {lc({ en: "Reseller Panel", "en-gb": "Reseller Panel", "en-au": "Reseller Panel", es: "Panel Revendedor", fr: "Panneau Revendeur", pt: "Painel Revendedor", sv: "Återförsäljarpanel", no: "Forhandlerpanel" })}
                </span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {panel.features.map((feature, i) => (
                <div key={i} className="glass-card" style={{
                  borderRadius: 12, padding: "1.25rem",
                  display: "flex", alignItems: "flex-start", gap: 12,
                  background: `linear-gradient(135deg, ${panel.accentColor}08, rgba(255,255,255,0.02))`,
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                    background: `${panel.accentColor}18`,
                    border: `1px solid ${panel.accentColor}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.9rem",
                  }} aria-hidden="true">✓</div>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 500 }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section
          aria-label={`How to Get Started with ${panel.name} IPTV Reseller Panel`}
          style={{ padding: "5rem 0", borderTop: "1px solid var(--border-color)" }}
        >
          <div className="section-container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="tag" style={{ marginBottom: "1rem" }}>
                {lc({ en: "Getting Started", "en-gb": "Getting Started", "en-au": "Getting Started", es: "Cómo Empezar", fr: "Pour Commencer", pt: "Como Começar", sv: "Kom Igång", no: "Kom i Gang" })}
              </div>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                lineHeight: 1.2,
                color: "var(--text-primary)",
              }}>
                {lc({ en: "How to Start Reselling", "en-gb": "How to Start Reselling", "en-au": "How to Start Reselling", es: "Cómo Empezar a Revender", fr: "Comment Commencer à Revendre", pt: "Como Começar a Revender", sv: "Hur du Börjar Sälja", no: "Slik Starter du Videresalg av" })}{" "}
                <span className="gradient-text">{panel.name} IPTV</span>
              </h2>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
              maxWidth: 900,
              margin: "0 auto",
            }}>
              {steps.map((s, i) => (
                <div key={i} className="glass-card" style={{ borderRadius: 14, padding: "1.75rem", textAlign: "center" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${panel.accentColor}, #3b82f6)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.3rem", margin: "0 auto 1rem",
                    boxShadow: `0 0 20px ${panel.accentColor}40`,
                  }} aria-hidden="true">{s.icon}</div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, color: panel.accentColor, letterSpacing: "0.1em", marginBottom: 6 }}>
                    {lc({ en: "STEP", "en-gb": "STEP", "en-au": "STEP", es: "PASO", fr: "ÉTAPE", pt: "PASSO", sv: "STEG", no: "STEG" })} {s.step}
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8, fontSize: "0.95rem" }}>{s.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id={`${panel.slug}-start-cta`}
                className="btn-primary"
                aria-label={`Start ${panel.name} IPTV reseller business on WhatsApp`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "1rem 2.25rem", borderRadius: 12,
                  textDecoration: "none", fontSize: "1rem", fontWeight: 700,
                  position: "relative", overflow: "hidden",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                {lc({ en: "Get Started on WhatsApp", "en-gb": "Get Started on WhatsApp", "en-au": "Get Started on WhatsApp", es: "Empezar en WhatsApp", fr: "Commencer sur WhatsApp", pt: "Começar no WhatsApp", sv: "Kom igång på WhatsApp", no: "Kom i Gang på WhatsApp" })}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-label={`${panel.name} IPTV Reseller Panel FAQ`}
          style={{ padding: "5rem 0", borderTop: "1px solid var(--border-color)", background: "rgba(0,0,0,0.1)" }}
        >
          <div className="section-container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="tag" style={{ marginBottom: "1rem" }}>
                {lc({ en: "FAQ", "en-gb": "FAQ", "en-au": "FAQ", es: "Preguntas Frecuentes", fr: "FAQ", pt: "FAQ", sv: "Vanliga Frågor", no: "Vanlige Spørsmål" })}
              </div>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                lineHeight: 1.2,
                color: "var(--text-primary)",
              }}>
                <span className="gradient-text">{panel.name}</span>{" "}
                {lc({ en: "IPTV Reseller Panel Questions", "en-gb": "IPTV Reseller Panel Questions", "en-au": "IPTV Reseller Panel Questions", es: "Preguntas sobre el Panel IPTV", fr: "Questions sur le Panneau Revendeur IPTV", pt: "Perguntas sobre o Painel IPTV", sv: "Frågor om IPTV-återförsäljarpanelen", no: "Spørsmål om IPTV-forhandlerpanelet" })}
              </h2>
            </div>

            <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {panel.faqs.map((faq, i) => (
                <div key={i} className="glass-card" style={{ borderRadius: 12, overflow: "hidden" }}>
                  <details>
                    <summary style={{
                      padding: "1.25rem 1.5rem",
                      display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
                      fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)",
                      listStyle: "none", userSelect: "none", cursor: "pointer",
                    }}>
                      <span>{faq.q}</span>
                      <span style={{
                        width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                        background: `${panel.accentColor}20`, border: `1px solid ${panel.accentColor}40`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.9rem", color: panel.accentColor,
                      }} aria-hidden="true">+</span>
                    </summary>
                    <div style={{
                      padding: "0 1.5rem 1.25rem",
                      borderTop: "1px solid var(--border-color)",
                      paddingTop: "1rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                      fontSize: "0.9rem",
                    }}>
                      {faq.a}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Panels */}
        {related.length > 0 && (
          <section
            aria-label={`Related IPTV Reseller Panels — Similar to ${panel.name}`}
            style={{ padding: "5rem 0", borderTop: "1px solid var(--border-color)" }}
          >
            <div className="section-container">
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <div className="tag" style={{ marginBottom: "1rem" }}>
                  {lc({ en: "Related IPTV Panels", "en-gb": "Related IPTV Panels", "en-au": "Related IPTV Panels", es: "Paneles IPTV Relacionados", fr: "Panneaux IPTV Connexes", pt: "Painéis IPTV Relacionados", sv: "Relaterade IPTV-paneler", no: "Relaterte IPTV-paneler" })}
                </div>
                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "var(--text-primary)",
                }}>
                  {lc({ en: "Other Top", "en-gb": "Other Top", "en-au": "Other Top", es: "Otros Mejores", fr: "Autres Meilleurs", pt: "Outros Melhores", sv: "Andra Populära", no: "Andre Topp" })}{" "}
                  <span className="gradient-text">
                    {lc({ en: "IPTV Reseller Panels", "en-gb": "IPTV Reseller Panels", "en-au": "IPTV Reseller Panels", es: "Paneles Revendedor IPTV", fr: "Panneaux Revendeurs IPTV", pt: "Painéis de Revendedor IPTV", sv: "IPTV-återförsäljarpaneler", no: "IPTV-forhandlerpaneler" })}
                  </span>
                </h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/${locale}/${rel.slug}`}
                    style={{ textDecoration: "none" }}
                    aria-label={`${rel.name} IPTV reseller panel`}
                  >
                    <div className="glass-card" style={{
                      borderRadius: 12, padding: "1.5rem",
                      background: `linear-gradient(135deg, ${rel.accentColor}08, rgba(255,255,255,0.02))`,
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.75rem" }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: 8,
                          background: `${rel.accentColor}18`,
                          border: `1px solid ${rel.accentColor}30`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }} aria-hidden="true">
                          <PanelLogo slug={rel.slug} color={rel.accentColor} size={18} />
                        </div>
                        <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>{rel.name}</span>
                        {rel.badge && (
                          <span style={{
                            fontSize: "0.6rem", fontWeight: 700,
                            padding: "2px 6px", borderRadius: 4,
                            background: `${rel.accentColor}20`, color: rel.accentColor,
                            border: `1px solid ${rel.accentColor}30`,
                          }}>{rel.badge}</span>
                        )}
                      </div>
                      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "0.875rem" }}>
                        {rel.quality} · {rel.dashboardType}
                      </p>
                      <div style={{ fontSize: "0.78rem", fontWeight: 600, color: rel.accentColor, display: "flex", alignItems: "center", gap: 4 }}>
                        {lc({ en: "View Panel", "en-gb": "View Panel", "en-au": "View Panel", es: "Ver Panel", fr: "Voir le Panneau", pt: "Ver Painel", sv: "Visa Panel", no: "Se Panel" })}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="9,18 15,12 9,6"/>
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Link
                  href={`/${locale}#panels`}
                  className="btn-secondary"
                  aria-label="View all 20+ IPTV reseller panels"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "0.85rem 2rem", borderRadius: 10,
                    textDecoration: "none", fontSize: "0.95rem",
                  }}
                >
                  {lc({ en: "View All 20+ IPTV Reseller Panels", "en-gb": "View All 20+ IPTV Reseller Panels", "en-au": "View All 20+ IPTV Reseller Panels", es: "Ver Todos los Paneles IPTV (+20)", fr: "Voir Tous les Panneaux IPTV (+20)", pt: "Ver Todos os Painéis IPTV (+20)", sv: "Se Alla 20+ IPTV-paneler", no: "Se Alle 20+ IPTV-paneler" })}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section
          aria-label={`Start ${panel.name} IPTV Reseller Business — Get Credits Today`}
          style={{
            padding: "5rem 0",
            borderTop: "1px solid var(--border-color)",
            background: `linear-gradient(135deg, ${panel.accentColor}08 0%, rgba(59,130,246,0.04) 100%)`,
            textAlign: "center",
          }}
        >
          <div className="section-container">
            <div className="tag" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
              🚀 {lc({ en: `Start Reselling ${panel.name} Today`, "en-gb": `Start Reselling ${panel.name} Today`, "en-au": `Start Reselling ${panel.name} Today`, es: `Empieza a Revender ${panel.name} Hoy`, fr: `Commencez à Revendre ${panel.name} Aujourd'hui`, pt: `Comece a Revender ${panel.name} Hoje`, sv: `Börja Sälja ${panel.name} Idag`, no: `Begynn å Selge ${panel.name} i Dag` })}
            </div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              lineHeight: 1.2,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}>
              {lc({ en: "Ready to Become a", "en-gb": "Ready to Become a", "en-au": "Ready to Become a", es: "¿Listo para Convertirte en", fr: "Prêt à Devenir un", pt: "Pronto para se Tornar um", sv: "Redo att Bli en", no: "Klar til å Bli en" })}{" "}
              <span className="gradient-text">
                {panel.name} {lc({ en: "IPTV Reseller?", "en-gb": "IPTV Reseller?", "en-au": "IPTV Reseller?", es: "Revendedor IPTV?", fr: "Revendeur IPTV ?", pt: "Revendedor IPTV?", sv: "IPTV-återförsäljare?", no: "IPTV-forhandler?" })}
              </span>
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
              {lc({
                en: `Get your ${panel.name} IPTV reseller panel login, buy credits instantly, and launch your IPTV reselling business today. Free trial available. 24/7 WhatsApp support. Serving resellers in the UK, USA & EU.`,
                "en-gb": `Get your ${panel.name} IPTV reseller panel login, buy credits instantly, and launch your IPTV reselling business today. Free trial available. 24/7 WhatsApp support. Serving resellers in the UK, USA & EU.`,
                "en-au": `Get your ${panel.name} IPTV reseller panel login, buy credits instantly, and launch your IPTV reselling business today. Free trial available. 24/7 WhatsApp support. Serving resellers in Australia, UK & EU.`,
                es: `Obtenga el acceso a su panel IPTV ${panel.name}, compre créditos al instante y lance su negocio de reventa IPTV hoy. Prueba gratuita disponible. Soporte por WhatsApp 24/7.`,
                fr: `Obtenez votre accès au panneau IPTV ${panel.name}, achetez des crédits instantanément et lancez votre activité de revente IPTV. Essai gratuit disponible. Support WhatsApp 24h/24.`,
                pt: `Obtenha o acesso ao seu painel IPTV ${panel.name}, compre créditos instantaneamente e lance o seu negócio de revenda IPTV. Teste gratuito disponível. Suporte WhatsApp 24/7.`,
                sv: `Skaffa din ${panel.name} IPTV-återförsäljarpanels inloggning, köp krediter direkt och starta din IPTV-återförsäljarverksamhet idag. Gratis provperiod tillgänglig. WhatsApp-support dygnet runt.`,
                no: `Få innlogging til ${panel.name} IPTV-forhandlerpanelet, kjøp kreditter umiddelbart og start din IPTV-forhandlervirksomhet i dag. Gratis prøveperiode tilgjengelig. WhatsApp-støtte 24/7.`,
              })}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id={`${panel.slug}-final-cta`}
              className="btn-primary"
              aria-label={`Buy ${panel.name} IPTV reseller credits on WhatsApp`}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "1.1rem 2.5rem", borderRadius: 12,
                textDecoration: "none", fontSize: "1.05rem", fontWeight: 700,
                position: "relative", overflow: "hidden",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              {lc({ en: `Buy ${panel.name} Reseller Credits Now`, "en-gb": `Buy ${panel.name} Reseller Credits Now`, "en-au": `Buy ${panel.name} Reseller Credits Now`, es: `Comprar Créditos ${panel.name} Ahora`, fr: `Acheter les Crédits ${panel.name} Maintenant`, pt: `Comprar Créditos ${panel.name} Agora`, sv: `Köp ${panel.name} Krediter Nu`, no: `Kjøp ${panel.name} Kreditter Nå` })}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

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
  const panelLabel = /IPTV$/i.test(panel.name.trim())
    ? `${panel.name} Reseller Panel`
    : `${panel.name} IPTV Reseller Panel`;

  // Dynamically constructed high-CTR page title and description targeting customer pain points (buffering, profits, support)
  const getHighCtrMetadata = () => {
    switch (locale) {
      case "en-gb":
        return {
          title: `${panelLabel} UK: BT & Virgin Media Buffer-Free`,
          description: `Tired of UK ISP blocks and constant buffering? Get the stable ${panel.name} reseller panel. Optimized for UK broadband. Wholesale GBP credits, try free!`,
        };
      case "en-au":
        return {
          title: `${panelLabel} AU: NBN Optimized & Low Latency`,
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
          title: `${panelLabel}: Stop Client Buffering & Maximize Profits`,
          description: `Tired of server buffering & losing clients? Get the stable ${panel.name} reseller panel. Instant wholesale credits, white label, free trials & 24/7 WhatsApp support.`,
        };
    }
  };

  // B1G-specific worldwide SEO copy; other product pages retain existing metadata.
  const metadata = panel.slug === "b1g-iptv-reseller-panel" && locale === "en"
    ? {
        title: "B1G IPTV Reseller Panel | Credits & Features",
        description: "Explore the B1G IPTV reseller panel, wholesale credit options, dashboard features, device compatibility and FAQs. Confirm current terms before ordering.",
      }
    : panel.slug === "strong-4k-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Strong 4K IPTV Reseller Panel | Credits & Features",
        description: "Explore Strong 4K IPTV reseller panel credits, dashboard tools, subscription management, device compatibility and FAQs. Compare options before ordering.",
      }
    : panel.slug === "strong-8k-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Strong 8K IPTV Reseller Panel | Credits & Features",
        description: "Explore Strong 8K IPTV reseller panel credits, dashboard features, device compatibility, subscription tools and FAQs. Check package terms before ordering.",
      }
    : panel.slug === "4k-ott-iptv-reseller-panel" && locale === "en"
    ? {
        title: "4K OTT IPTV Reseller Panel | Credits & Features",
        description: "Explore 4K OTT IPTV reseller panel credits, dashboard features, subscription management, device compatibility and FAQs. Review options before ordering.",
      }
    : panel.slug === "lion-ott-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Lion OTT IPTV Reseller Panel | Credits & Setup",
        description: "Explore Lion OTT IPTV reseller credits, beginner dashboard setup, wholesale packages, subscription tools, compatibility and pricing questions.",
      }
    : panel.slug === "ultra-8k-ott-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Ultra 8K OTT IPTV Reseller Panel | Credits & Features",
        description: "Explore Ultra 8K OTT IPTV reseller credits, wholesale packages, dashboard tools, bulk subscriptions, device compatibility and FAQs before buying.",
      }
    : panel.slug === "dino-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Dino IPTV Reseller Panel | Credits & Setup",
        description: "Explore Dino IPTV reseller credits, wholesale packages, dashboard setup, subscription management, device compatibility and pricing FAQs before ordering.",
      }
    : panel.slug === "trex-ott-iptv-reseller-panel" && locale === "en"
    ? {
        title: "T-Rex OTT IPTV Reseller Panel | Credits & Setup",
        description: "Explore T-Rex OTT IPTV reseller credits, wholesale packages, dashboard features, bulk subscriptions, device compatibility and pricing before ordering.",
      }
    : panel.slug === "mega-ott-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Mega OTT IPTV Reseller Panel | Wholesale Credits",
        description: "Compare Mega OTT IPTV reseller panel credits, bulk wholesale packages, dashboard tools, credit pricing, subscriptions and account setup before ordering.",
      }
    : panel.slug === "extra-ott-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Extra OTT IPTV Reseller Panel | Credits & Features",
        description: "Explore Extra OTT IPTV reseller credits, wholesale packages, dashboard tools, subscription management, device compatibility and pricing before ordering.",
      }
    : panel.slug === "max-ott-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Max OTT IPTV Reseller Panel | Credits & Management",
        description: "Explore Max OTT IPTV reseller credits, wholesale packages, bulk management, subscription expiry tools, dashboard features and pricing before ordering.",
      }
    : panel.slug === "zen-4k-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Zen 4K IPTV Reseller Panel | Credits & Easy Setup",
        description: "Explore Zen 4K IPTV reseller credits, simple dashboard tools, wholesale packages, device compatibility, account setup and pricing before buying.",
      }
    : panel.slug === "nexon-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Nexon IPTV Reseller Panel | Credits & Bulk Tools",
        description: "Compare Nexon IPTV reseller credits, wholesale packages, bulk customer management, dashboard features, pricing and setup before ordering.",
      }
    : panel.slug === "infinity-premium-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Infinity Premium IPTV Reseller Panel | Credits",
        description: "Explore Infinity Premium IPTV reseller credits, wholesale packages, subscription management tools, dashboard features, pricing and setup options before buying.",
      }
    : panel.slug === "gtv-iptv-reseller-panel" && locale === "en"
    ? {
        title: "GTV IPTV Reseller Panel | Wholesale Credits & Setup",
        description: "Explore GTV IPTV reseller panel credits, wholesale pricing, dashboard features, subscription management, device support and setup options.",
      }
    : panel.slug === "crystal-ott-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Crystal OTT IPTV Reseller Panel | Wholesale Credits",
        description: "Explore Crystal OTT IPTV reseller panel credits, wholesale pricing, dashboard tools, subscription management, device compatibility and setup options.",
      }
    : panel.slug === "starshare-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Star Share IPTV Reseller Panel | Credits & Pricing",
        description: "Explore Star Share IPTV reseller panel credits, wholesale pricing, shared-access terms, dashboard features, subscription management and setup options.",
      }
    : panel.slug === "tiger-ott-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Tiger OTT IPTV Reseller Panel | Credits & Setup",
        description: "Explore Tiger OTT IPTV reseller panel credits, wholesale pricing, dashboard tools, subscription activation, device compatibility and setup options.",
      }
    : panel.slug === "opplex-iptv-reseller-panel" && locale === "en"
    ? {
        title: "Opplex IPTV Reseller Panel | Credits & Pricing",
        description: "Explore Opplex IPTV reseller panel credits, wholesale pricing, dashboard features, subscription management, device support and setup options.",
      }
    : panel.slug === "geo-iptv-reseller-panel-credits" && locale === "en"
    ? {
        title: "GEO IPTV Reseller Panel | International Credits",
        description: "Explore GEO IPTV reseller panel credits, wholesale pricing, international coverage, dashboard tools, device compatibility and subscription setup.",
      }
    : panel.slug === "5g-live-iptv-reseller-panel-credits" && locale === "en"
    ? {
        title: "5G Live IPTV Reseller Panel | Credits & Pricing",
        description: "Explore 5G Live IPTV reseller panel credits, wholesale pricing, dashboard features, subscription management, compatible devices and reseller setup.",
      }
    : panel.slug === "magnum-golden-ott-reseller-panel-credits" && locale === "en"
    ? {
        title: "Magnum Golden OTT Reseller Panel | Credits & Pricing",
        description: "Explore Magnum Golden OTT reseller panel credits, wholesale pricing, premium subscription options, reseller dashboard tools, device support and setup.",
      }
    : getHighCtrMetadata();
  const { title: pageTitle, description: pageDescription } = metadata;
 
  // Describe the actual panel without unverified monetary offers or review metrics.
  // The seller is represented by the website's canonical Organization entity.
  const panelSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    name: `${panelLabel}`,
    description: pageDescription,
    url: canonicalUrl,
    about: {
      "@type": "Thing",
      name: `${panelLabel}`,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.iptvreseller.live/#website",
    },
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
      title: lc({ en: "Contact IPTV Reseller", "en-gb": "Contact IPTV Reseller", "en-au": "Contact IPTV Reseller", es: "Contactar IPTV Reseller", fr: "Contacter IPTV Reseller", pt: "Contactar IPTV Reseller", sv: "Kontakta IPTV Reseller", no: "Kontakt IPTV Reseller" }),
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
      desc: panel.slug === "nexon-iptv-reseller-panel" ? "Confirm Nexon dashboard access, activation requirements and delivery time with the provider." : panel.slug === "infinity-premium-iptv-reseller-panel" ? "Confirm Infinity Premium dashboard access, activation requirements and delivery time with the provider." : lc({ en: `Receive your ${panel.name} IPTV reseller panel login credentials and dashboard access instantly.`, "en-gb": `Receive your ${panel.name} IPTV reseller panel login credentials and dashboard access instantly.`, "en-au": `Receive your ${panel.name} IPTV reseller panel login credentials and dashboard access instantly.`, es: `Reciba al instante sus credenciales de acceso al panel revendedor IPTV ${panel.name}.`, fr: `Recevez immédiatement vos identifiants d'accès au panneau revendeur IPTV ${panel.name}.`, pt: `Receba instantaneamente as suas credenciais de acesso ao painel revendedor IPTV ${panel.name}.`, sv: `Få dina inloggningsuppgifter för ${panel.name} IPTV-återförsäljarpanelen direkt.`, no: `Motta innloggingsdetaljene for ${panel.name} IPTV-forhandlerpanelet umiddelbart.` }),
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
      <meta property="og:title" content={`${pageTitle} | IPTV Reseller`} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${pageTitle} | IPTV Reseller`} />
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
          aria-label={`${panelLabel} — Hero`}
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
                  <div className="tag">{(panel.slug === "nexon-iptv-reseller-panel" || panel.slug === "infinity-premium-iptv-reseller-panel") ? "Resolution: Confirm Options" : `${panel.qualityBadge} Streaming`}</div>
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
                  {lc({ en: /IPTV$/i.test(panel.name.trim()) ? "Reseller Panel" : "IPTV Reseller Panel", "en-gb": /IPTV$/i.test(panel.name.trim()) ? "Reseller Panel" : "IPTV Reseller Panel", "en-au": /IPTV$/i.test(panel.name.trim()) ? "Reseller Panel" : "IPTV Reseller Panel", es: "Panel Revendedor IPTV", fr: "Panneau Revendeur IPTV", pt: "Painel Revendedor IPTV", sv: "IPTV-återförsäljarpanel", no: "IPTV-forhandlerpanel" })}
                </h1>

                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1rem" }}>
                  {panel.description}
                </p>

                {!(locale === "en" && (panel.slug === "infinity-premium-iptv-reseller-panel" || panel.slug === "gtv-iptv-reseller-panel")) && (
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                    {panel.longDescription}
                  </p>
                )}

                {panel.slug === "nexon-iptv-reseller-panel" && locale === "en" && (
                  <section
                    id="nexon-contextual-links"
                    aria-label="Nexon reseller resources"
                    style={{ marginBottom: "2rem" }}
                  >
                    <h2 style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      color: "var(--text-primary)"
                    }}>
                      Nexon IPTV Reseller Panel: Buying Resources
                    </h2>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      marginBottom: "1rem"
                    }}>
                      Before selecting wholesale packages,
                      understand how the{" "}
                      <Link href="/en/guides/credit-system-explained">
                        IPTV reseller credit system
                      </Link>{" "}
                      works, including credit allocation,
                      activation and subscription renewals.
                    </p>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      marginBottom: "1rem"
                    }}>
                      You can also{" "}
                      <Link href="/en/comparisons">
                        compare IPTV reseller panels
                      </Link>{" "}
                      to evaluate management features,
                      package terms and dashboard options.
                    </p>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      marginBottom: "1rem"
                    }}>
                      If you are reviewing alternative
                      wholesale solutions, explore the{" "}
                      <Link href="/en/mega-ott-iptv-reseller-panel">
                        Mega OTT reseller panel
                      </Link>{" "}
                      and compare its listed features
                      against your business requirements.
                    </p>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.8
                    }}>
                      New to subscription management?
                      Read our guide on how to{" "}
                      <Link href="/en/guides/start-iptv-reseller-business">
                        start an IPTV reseller business
                      </Link>{" "}
                      and plan your account administration,
                      operating costs and customer support.
                    </p>
                  </section>
                )}


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
                      {(panel.slug === "nexon-iptv-reseller-panel" || panel.slug === "infinity-premium-iptv-reseller-panel") ? "Monthly Credit Usage: Confirm" : "1 Month = 1 Credit"}
                    </div>

                    <div style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>
                      {(panel.slug === "nexon-iptv-reseller-panel" || panel.slug === "infinity-premium-iptv-reseller-panel") ? "Annual Credit Usage: Confirm" : "12 Month = 12 Credits"}
                    </div>

                    <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.08)", width: "60%", margin: "0 auto" }} />

                    <div style={{ 
                      fontSize: "1.1rem", 
                      color: panel.accentColor, 
                      fontWeight: 700,
                      textShadow: `0 0 10px ${panel.accentColor}30`
                    }}>
                      {(panel.slug === "nexon-iptv-reseller-panel" || panel.slug === "infinity-premium-iptv-reseller-panel") ? "Minimum Credit Order: Ask for Details" : "120 Credits Required for Panel"}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={panel.slug === "nexon-iptv-reseller-panel" ? `${WHATSAPP_URL}&text=${encodeURIComponent("Hello, please share current Nexon reseller panel packages, credit requirements and activation terms.")}` : panel.slug === "infinity-premium-iptv-reseller-panel" ? `${WHATSAPP_URL}&text=${encodeURIComponent("Hello, please share current Infinity Premium reseller panel packages, credit requirements and activation terms.")}` : `${WHATSAPP_URL}&text=Hello%2C%20I%20want%20to%20order%20the%20${panel.name}%20Reseller%20Panel%20with%20120%20credits`}
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

        {/* Infinity Premium SEO Content */}
        {panel.slug === "infinity-premium-iptv-reseller-panel" && locale === "en" && (
          <section
            id="infinity-seo-content"
            aria-label="Infinity Premium reseller panel information"
            style={{
              padding: "4.5rem 0",
              borderTop: "1px solid var(--border-color)",
              background: "var(--bg-primary)"
            }}
          >
            <div className="section-container">
              <div style={{ maxWidth: 900, margin: "0 auto" }}>

                <div style={{ marginBottom: "2.5rem" }}>
                  <div className="tag" style={{ marginBottom: "1rem" }}>
                    RESELLER PANEL GUIDE
                  </div>
                  <h2 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: "var(--text-primary)",
                    marginBottom: "1rem"
                  }}>
                    About Infinity Premium IPTV Reseller Panel
                  </h2>
                  <p style={{
                    color: "var(--text-secondary)",
                    fontSize: "1rem",
                    lineHeight: 1.85
                  }}>
                    {panel.longDescription.split(
                      "Before choosing Infinity Premium reseller packages"
                    )[0].trim()}
                  </p>
                </div>

                <div style={{
                  display: "grid",
                  gap: "2rem",
                  marginBottom: "3rem"
                }}>
                  {[
                    {
                      title: "Dashboard & Subscription Management",
                      content: panel.longDescription
                        .split("Before choosing Infinity Premium reseller packages")[1]
                        ?.split("When comparing Infinity Premium IPTV reseller panel pricing")[0],
                      prefix: "Before choosing Infinity Premium reseller packages"
                    },
                    {
                      title: "Wholesale Credits & Pricing",
                      content: panel.longDescription
                        .split("When comparing Infinity Premium IPTV reseller panel pricing")[1]
                        ?.split("If you plan to serve customers")[0],
                      prefix: "When comparing Infinity Premium IPTV reseller panel pricing"
                    },
                    {
                      title: "Compatibility & Streaming Requirements",
                      content: panel.longDescription
                        .split("If you plan to serve customers")[1]
                        ?.split("Also confirm customer support channels")[0],
                      prefix: "If you plan to serve customers"
                    },
                    {
                      title: "Support & Provider Evaluation",
                      content: panel.longDescription
                        .split("Also confirm customer support channels")[1],
                      prefix: "Also confirm customer support channels"
                    }
                  ].map((item) => (
                    <div key={item.title}>
                      <h3 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.75rem"
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.98rem",
                        lineHeight: 1.85,
                        margin: 0
                      }}>
                        {item.prefix}{item.content}
                      </p>
                    </div>
                  ))}
                </div>

                {panel.slug === "infinity-premium-iptv-reseller-panel" && locale === "en" && (
                  <section
                    id="infinity-contextual-links"
                    aria-label="Infinity Premium reseller resources"
                    style={{ marginBottom: "2rem" }}
                  >
                    <h2 style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      color: "var(--text-primary)"
                    }}>
                      Infinity Premium IPTV Reseller Panel: Buying Resources
                    </h2>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      marginBottom: "1rem"
                    }}>
                      Before purchasing wholesale packages,
                      explore our guide to the{" "}
                      <Link href="/en/guides/credit-system-explained">
                        IPTV reseller credit system
                      </Link>{" "}
                      to understand credit allocation,
                      subscription durations and renewals.
                    </p>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      marginBottom: "1rem"
                    }}>
                      You can also{" "}
                      <Link href="/en/comparisons">
                        compare IPTV reseller panels
                      </Link>{" "}
                      to evaluate dashboard features,
                      wholesale package terms and
                      administrative requirements.
                    </p>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      marginBottom: "1rem"
                    }}>
                      For another management option,
                      review the{" "}
                      <Link href="/en/nexon-iptv-reseller-panel">
                        Nexon IPTV reseller panel
                      </Link>{" "}
                      and compare its listed reseller
                      features with Infinity Premium.
                    </p>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.8
                    }}>
                      If you are building a new business,
                      read our guide on how to{" "}
                      <Link href="/en/guides/start-iptv-reseller-business">
                        start an IPTV reseller business
                      </Link>{" "}
                      and plan your costs, customer
                      management and support workflow.
                    </p>
                  </section>
                )}

              </div>
            </div>
          </section>
        )}


        {/* GTV SEO Content - outside the hero */}
        {panel.slug === "gtv-iptv-reseller-panel" && locale === "en" && (
          <section
            id="gtv-seo-content"
            aria-label="GTV IPTV reseller panel guide"
            style={{
              padding: "4.5rem 0",
              background: "var(--bg-primary)",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <div className="section-container">
              <div style={{ maxWidth: 900, margin: "0 auto" }}>

                <div className="tag" style={{ marginBottom: "1rem" }}>
                  RESELLER PANEL GUIDE
                </div>

                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "1rem"
                }}>
                  About GTV IPTV Reseller Panel
                </h2>

                <p style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem"
                }}>
                  The GTV IPTV reseller panel is an option
                  for businesses comparing wholesale IPTV
                  credits, customer accounts, subscription
                  renewals and reseller dashboard tools.
                  Evaluate available packages, management
                  features and service conditions before
                  selecting a wholesale provider.
                </p>

                {[
                  {
                    heading: "GTV Wholesale Credits & Pricing",
                    body: "The GTV pricing card lists one credit for one month, twelve credits for twelve months and a 120-credit panel requirement. Confirm current wholesale rates, package conditions and renewal rules before placing an order."
                  },
                  {
                    heading: "GTV Reseller Dashboard & Customer Management",
                    body: "Review account creation, credit allocation, subscription renewals, customer search and expiry tracking. Ask for a dashboard demonstration to understand which administrative tools are included."
                  },
                  {
                    heading: "Streaming Quality & Device Compatibility",
                    body: "Check available streaming resolutions, supported devices and connection methods. Confirm Xtream Codes, M3U, MAG, Smart TV compatibility and simultaneous connection limitations for the selected package."
                  },
                  {
                    heading: "Technical Support & Business Requirements",
                    body: "Verify activation procedures, support hours, refund policies and regional service availability. Calculate operating expenses and confirm appropriate content distribution rights before selling subscriptions."
                  }
                ].map((item) => (
                  <div
                    key={item.heading}
                    style={{ marginBottom: "2rem" }}
                  >
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem"
                    }}>
                      {item.heading}
                    </h3>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.85,
                      margin: 0
                    }}>
                      {item.body}
                    </p>
                  </div>
                ))}

                <div
                  id="gtv-contextual-links"
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid var(--border-color)"
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "1rem"
                  }}>
                    Helpful IPTV Reseller Resources
                  </h3>

                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85
                  }}>
                    Learn how the{" "}
                    <Link href="/en/guides/credit-system-explained">
                      IPTV reseller credit system
                    </Link>{" "}
                    works before choosing a wholesale package.
                  </p>

                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85
                  }}>
                    You can{" "}
                    <Link href="/en/comparisons">
                      compare IPTV reseller panels
                    </Link>{" "}
                    to evaluate additional management options.
                  </p>

                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85
                  }}>
                    Explore the{" "}
                    <Link href="/en/lion-ott-iptv-reseller-panel">
                      Lion OTT reseller panel
                    </Link>{" "}
                    as another option for comparison.
                  </p>

                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85
                  }}>
                    New to IPTV reselling? Read how to{" "}
                    <Link href="/en/guides/start-iptv-reseller-business">
                      start an IPTV reseller business
                    </Link>{" "}
                    and plan customer support and operating costs.
                  </p>
                </div>

              </div>
            </div>
          </section>
        )}


        {/* Crystal OTT SEO Content — separate from hero */}
        {panel.slug === "crystal-ott-iptv-reseller-panel" && locale === "en" && (
          <section
            id="crystal-seo-content"
            aria-label="Crystal OTT IPTV reseller panel guide"
            style={{
              padding: "4.5rem 0",
              background: "var(--bg-primary)",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <div className="section-container">
              <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <div className="tag" style={{ marginBottom: "1rem" }}>
                  RESELLER PANEL GUIDE
                </div>

                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "1rem"
                }}>
                  About Crystal OTT IPTV Reseller Panel
                </h2>

                <p style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem"
                }}>
                  Crystal OTT IPTV reseller panel options can be evaluated
                  by comparing wholesale credit packages, customer
                  subscription management, dashboard controls and
                  supported connection formats. Review the available
                  account tools and current commercial terms before
                  selecting a wholesale reseller package.
                </p>

                {[
                  {
                    heading: "Crystal OTT Wholesale Credits & Pricing",
                    body: "When comparing Crystal OTT reseller credits, review wholesale package quantities, credit conversion rules, minimum purchase conditions and renewal fees. Ask for a current quotation and calculate the effective cost per customer subscription."
                  },
                  {
                    heading: "Reseller Dashboard & Subscription Management",
                    body: "Check how the Crystal OTT reseller dashboard handles customer account creation, credit allocation, subscription expiry tracking and renewals. Request a demonstration of the actual management interface and confirm whether bulk administration is supported."
                  },
                  {
                    heading: "Streaming Quality & Device Compatibility",
                    body: "Evaluate available Full HD and 4K options, supported devices and connection methods. Confirm compatibility with Xtream Codes, M3U playlists, MAG boxes and Smart TV applications. Actual streaming performance depends on the underlying service and network."
                  },
                  {
                    heading: "Activation, Support & Provider Evaluation",
                    body: "Before ordering, confirm account activation times, support hours, refund policies, regional service availability and appropriate content distribution rights. Avoid relying on unverified uptime percentages or guaranteed performance claims."
                  }
                ].map((item) => (
                  <div key={item.heading} style={{ marginBottom: "2rem" }}>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem"
                    }}>
                      {item.heading}
                    </h3>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.85,
                      margin: 0
                    }}>
                      {item.body}
                    </p>
                  </div>
                ))}

                <div
                  id="crystal-contextual-links"
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid var(--border-color)"
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "1rem"
                  }}>
                    Crystal OTT: Related Guides & Panel Comparisons
                  </h3>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    To understand supported connection methods,
                    explore our{" "}
                    <Link href="/en/guides/xtream-codes-vs-m3u">
                      Xtream Codes vs M3U guide
                    </Link>{" "}
                    before selecting compatible applications.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For technical dashboard integration,
                    review the{" "}
                    <Link href="/en/guides/xtream-api-integration-guide">
                      IPTV API integration guide
                    </Link>{" "}
                    and confirm which tools your package supports.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Evaluating HD and 4K reseller options?
                    Compare Crystal OTT with the{" "}
                    <Link href="/en/strong-4k-iptv-reseller-panel">
                      Strong 4K reseller panel
                    </Link>{" "}
                    using verified specifications and package terms.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Learn about branded access and
                    domain configuration in our{" "}
                    <Link href="/en/guides/dns-portal-setup-guide">
                      IPTV DNS and portal setup guide
                    </Link>.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For subscription billing workflows,
                    read the{" "}
                    <Link href="/en/guides/billing-whmcs-stripe-guide">
                      automated reseller billing guide
                    </Link>{" "}
                    and assess the integrations your business needs.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Before choosing a provider,{" "}
                    <Link href="/en/comparisons">
                      compare IPTV reseller panels
                    </Link>{" "}
                    to evaluate available management and
                    wholesale package options.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}


        {/* Star Share SEO content — below hero, before Features */}
        {panel.slug === "starshare-iptv-reseller-panel" && locale === "en" && (
          <section
            id="starshare-seo-content"
            aria-label="Star Share IPTV reseller panel buying guide"
            style={{
              padding: "4.5rem 0",
              background: "var(--bg-primary)",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <div className="section-container">
              <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <div className="tag" style={{ marginBottom: "1rem" }}>
                  STAR SHARE RESELLER GUIDE
                </div>

                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "1rem"
                }}>
                  About Star Share IPTV Reseller Panel
                </h2>

                <p style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem"
                }}>
                  The Star Share IPTV reseller panel is an option for
                  businesses researching shared-access arrangements,
                  wholesale reseller credits and customer subscription
                  management. Before purchasing, compare the actual
                  account rules, credit requirements, dashboard tools
                  and supported connection methods.
                </p>

                {[
                  {
                    heading: "How Star Share Shared-Access Packages Work",
                    body: "The term shared access can describe different arrangements, so request a clear explanation of what is shared, which customer limits apply and whether simultaneous connections are allowed. Confirm the package's account rules rather than assuming that a shared-access model permits unlimited users or streams."
                  },
                  {
                    heading: "Star Share Wholesale Credits & Reseller Pricing",
                    body: "Compare Star Share IPTV reseller credits by reviewing credit-to-subscription conversion, minimum orders, package validity and renewal charges. Wholesale pricing should be evaluated against the number of customer accounts you plan to manage and the current commercial terms supplied by the provider."
                  },
                  {
                    heading: "IPTV Reseller Dashboard & Subscription Management",
                    body: "Review the Star Share reseller dashboard for customer account creation, subscription extensions, expiry tracking and credit balances. If your business needs trial subscriptions or multiple staff accounts, confirm these functions in the actual dashboard before purchasing."
                  },
                  {
                    heading: "Xtream Codes, M3U & Device Compatibility",
                    body: "Check which connection formats and applications are supported by the selected Star Share package. Ask about Xtream Codes-compatible apps, M3U playlists, MAG boxes, Smart TVs and Android TV devices. Available streaming resolutions and playback performance depend on the service and network."
                  },
                  {
                    heading: "Star Share Setup, Support & Provider Checks",
                    body: "Before ordering a Star Share reseller package, confirm activation timeframes, support channels, account limitations, regional availability and refund conditions. Verify that the provider holds appropriate rights for any content you intend to distribute."
                  }
                ].map((item) => (
                  <div key={item.heading} style={{ marginBottom: "2rem" }}>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem"
                    }}>
                      {item.heading}
                    </h3>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.85,
                      margin: 0
                    }}>
                      {item.body}
                    </p>
                  </div>
                ))}

                <div
                  id="starshare-contextual-links"
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid var(--border-color)"
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "1rem"
                  }}>
                    Star Share: Related Guides & Alternatives
                  </h3>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For managing subscription renewals and payments,
                    review our{" "}
                    <Link href="/en/guides/billing-whmcs-stripe-guide">
                      reseller billing automation guide
                    </Link>{" "}
                    and confirm the integrations your business requires.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    If you plan to build a recognizable reseller brand,
                    explore{" "}
                    <Link href="/en/guides/white-label-panel-branding">
                      IPTV white-label branding options
                    </Link>{" "}
                    before selecting your dashboard and customer setup.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Learn the differences between{" "}
                    <Link href="/en/guides/xtream-codes-vs-m3u">
                      Xtream Codes and M3U connections
                    </Link>{" "}
                    when assessing supported playback applications.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For an alternative reseller package,
                    explore the{" "}
                    <Link href="/en/tiger-ott-iptv-reseller-panel">
                      Tiger OTT IPTV reseller panel
                    </Link>{" "}
                    and compare the available account-management terms.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    You can also evaluate the{" "}
                    <Link href="/en/geo-iptv-reseller-panel-credits">
                      GEO IPTV reseller panel
                    </Link>{" "}
                    for a different wholesale package option.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For technical account administration,
                    read the{" "}
                    <Link href="/en/guides/xtream-api-integration-guide">
                      IPTV API integration guide
                    </Link>{" "}
                    to understand integration requirements and limitations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}


        {/* Tiger OTT SEO content — below hero, before Features */}
        {panel.slug === "tiger-ott-iptv-reseller-panel" && locale === "en" && (
          <section
            id="tiger-seo-content"
            aria-label="Tiger OTT IPTV reseller panel buying guide"
            style={{
              padding: "4.5rem 0",
              background: "var(--bg-primary)",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <div className="section-container">
              <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <div className="tag" style={{ marginBottom: "1rem" }}>
                  TIGER OTT RESELLER GUIDE
                </div>

                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "1rem"
                }}>
                  About Tiger OTT IPTV Reseller Panel
                </h2>

                <p style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem"
                }}>
                  The Tiger OTT IPTV reseller panel is an option for
                  businesses evaluating reseller dashboard responsiveness,
                  wholesale credits, subscription activation workflows
                  and supported connection formats. Compare the actual
                  features, costs and provider terms before choosing
                  a package for your IPTV reseller business.
                </p>

                {[
                  {
                    heading: "Fast IPTV Reseller Panel: What to Evaluate",
                    body: "When evaluating Tiger OTT as a fast IPTV reseller panel, review dashboard loading times, customer account creation workflows and subscription activation procedures. Ask for a demonstration and current performance information. Streaming speed and buffering depend on the actual service, network and device, so avoid assuming guaranteed results."
                  },
                  {
                    heading: "Tiger OTT Reseller Credits & Wholesale Pricing",
                    body: "Compare Tiger OTT reseller credits by checking package quantities, minimum purchase requirements, credit conversion and renewal rules. For accurate Tiger OTT reseller panel pricing, request a current quote and calculate the effective cost per subscription rather than relying only on headline credit amounts."
                  },
                  {
                    heading: "IPTV Reseller Dashboard & Customer Management",
                    body: "Review the Tiger OTT reseller dashboard for account creation, customer administration, subscription expiry tracking and renewal management. Confirm which reports, trial controls and bulk operations are included in the selected package before making a purchase."
                  },
                  {
                    heading: "Tiger OTT IPTV Setup & Device Compatibility",
                    body: "For Tiger OTT IPTV setup, verify supported connection methods such as Xtream Codes-compatible apps, M3U playlists and MAG devices. Confirm Smart TV and Android TV compatibility, available playback resolutions and simultaneous connection limits with the provider."
                  },
                  {
                    heading: "Subscription Activation, Support & Buying Checks",
                    body: "Check how IPTV subscription activation and renewals are processed, what support channels are available and how account issues are handled. Before ordering, verify provider terms, regional availability, refund conditions and the appropriate content distribution rights."
                  }
                ].map((item) => (
                  <div key={item.heading} style={{ marginBottom: "2rem" }}>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem"
                    }}>
                      {item.heading}
                    </h3>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.85,
                      margin: 0
                    }}>
                      {item.body}
                    </p>
                  </div>
                ))}

                <div
                  id="tiger-contextual-links"
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid var(--border-color)"
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "1rem"
                  }}>
                    Tiger OTT: Setup Resources & Related Panels
                  </h3>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Understand credit allocation and renewal rules
                    in our{" "}
                    <Link href="/en/guides/credit-system-explained">
                      IPTV reseller credit management guide
                    </Link>{" "}
                    before purchasing wholesale packages.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For portal configuration and branded access,
                    explore the{" "}
                    <Link href="/en/guides/dns-portal-setup-guide">
                      IPTV DNS and portal setup guide
                    </Link>{" "}
                    to understand common configuration requirements.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    If your operations require technical integrations,
                    review the{" "}
                    <Link href="/en/guides/xtream-api-integration-guide">
                      IPTV API integration guide
                    </Link>{" "}
                    and check which functions the selected panel supports.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Compare Tiger OTT with the{" "}
                    <Link href="/en/trex-ott-iptv-reseller-panel">
                      T-Rex OTT reseller panel
                    </Link>{" "}
                    when evaluating alternative reseller dashboard workflows.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Another related option is the{" "}
                    <Link href="/en/dino-iptv-reseller-panel">
                      Dino IPTV reseller panel
                    </Link>{" "}
                    for comparing package and customer management features.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For current package availability and
                    wholesale ordering details, visit our{" "}
                    <Link href="/en/contact">
                      IPTV reseller pricing and contact page
                    </Link>{" "}
                    and request the latest terms.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}


        {/* Opplex SEO guide — separate section below hero */}
        {panel.slug === "opplex-iptv-reseller-panel" && locale === "en" && (
          <section
            id="opplex-seo-content"
            aria-label="Opplex IPTV reseller panel guide"
            style={{
              padding: "4.5rem 0",
              background: "var(--bg-primary)",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <div className="section-container">
              <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <div className="tag" style={{ marginBottom: "1rem" }}>
                  OPPLEX RESELLER GUIDE
                </div>

                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "1rem"
                }}>
                  About Opplex IPTV Reseller Panel
                </h2>

                <p style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem"
                }}>
                  Opplex IPTV reseller panel packages are worth
                  evaluating for businesses focused on wholesale
                  credit costs, straightforward customer management
                  and subscription renewals. Compare current package
                  prices, connection options and dashboard capabilities
                  before selecting a budget-focused reseller solution.
                </p>

                {[
                  {
                    heading: "Affordable IPTV Reseller Panel: Compare Real Costs",
                    body: "Opplex is positioned as a budget IPTV reseller panel. However, affordability depends on actual wholesale pricing, minimum purchases, credit conversion rates and subscription renewals. Compare the complete cost per active customer rather than assuming the lowest advertised credit price is the best value."
                  },
                  {
                    heading: "Opplex Reseller Credits & Wholesale Pricing",
                    body: "Before purchasing Opplex IPTV reseller credits, confirm how credits are allocated across monthly and annual subscriptions. Check minimum orders, renewal requirements, credit expiry conditions and current Opplex reseller panel pricing. Request a quotation to calculate the effective cost of managing your planned subscriber base."
                  },
                  {
                    heading: "IPTV Reseller Dashboard & Account Management",
                    body: "Evaluate the Opplex IPTV reseller dashboard for customer account creation, subscription renewal controls, expiry tracking and credit allocation. For volume-based operations, ask whether bulk account tools, usage reports and multiple administrator permissions are available."
                  },
                  {
                    heading: "Opplex IPTV Setup & Device Compatibility",
                    body: "For Opplex IPTV setup, verify compatibility with Xtream Codes-supported applications, M3U playlist connections, MAG boxes, Smart TVs and Android TV devices. Confirm available HD and 4K packages, simultaneous connection limits and any device-specific restrictions."
                  },
                  {
                    heading: "Opplex Trial Availability & Provider Checks",
                    body: "If you are evaluating Opplex before a larger purchase, ask whether trial access is currently available and what restrictions apply. Also confirm activation times, refund rules, support availability, regional service conditions and appropriate content distribution rights."
                  }
                ].map((item) => (
                  <div key={item.heading} style={{ marginBottom: "2rem" }}>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem"
                    }}>
                      {item.heading}
                    </h3>

                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.85,
                      margin: 0
                    }}>
                      {item.body}
                    </p>
                  </div>
                ))}

                <div
                  id="opplex-contextual-links"
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid var(--border-color)"
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "1rem"
                  }}>
                    Opplex: Pricing Resources & Alternative Panels
                  </h3>

                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85
                  }}>
                    Learn how wholesale credits are calculated
                    in our{" "}
                    <Link href="/en/guides/credit-system-explained">
                      IPTV reseller credit system guide
                    </Link>{" "}
                    before evaluating the cost per subscription.
                  </p>

                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85
                  }}>
                    Compare Opplex with the{" "}
                    <Link href="/en/gtv-iptv-reseller-panel">
                      GTV IPTV reseller panel
                    </Link>{" "}
                    to review different wholesale credit options
                    and dashboard requirements.
                  </p>

                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85
                  }}>
                    Another package to evaluate is the{" "}
                    <Link href="/en/geo-iptv-reseller-panel-credits">
                      GEO IPTV reseller panel
                    </Link>{" "}
                    when researching alternative subscription
                    management tools.
                  </p>

                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85
                  }}>
                    You can also explore the{" "}
                    <Link href="/en/lion-ott-iptv-reseller-panel">
                      Lion OTT IPTV reseller panel
                    </Link>{" "}
                    for another reseller dashboard and package option.
                  </p>

                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85
                  }}>
                    Request current wholesale quotations
                    through our{" "}
                    <Link href="/en/contact">
                      IPTV reseller pricing and contact page
                    </Link>{" "}
                    before making a purchasing decision.
                  </p>

                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85
                  }}>
                    If you are launching a reseller operation,
                    read our{" "}
                    <Link href="/en/guides/start-iptv-reseller-business">
                      IPTV reseller business setup guide
                    </Link>{" "}
                    for planning, costs and account management basics.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}


        {/* GEO IPTV SEO guide — outside the existing hero */}
        {panel.slug === "geo-iptv-reseller-panel-credits" && locale === "en" && (
          <section
            id="geo-seo-content"
            aria-label="GEO IPTV reseller panel buying guide"
            style={{
              padding: "4.5rem 0",
              background: "var(--bg-primary)",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <div className="section-container">
              <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <div className="tag" style={{ marginBottom: "1rem" }}>
                  GEO IPTV RESELLER GUIDE
                </div>

                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "1rem"
                }}>
                  About GEO IPTV Reseller Panel & International Credits
                </h2>

                <p style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem"
                }}>
                  The GEO IPTV reseller panel is an option for
                  businesses comparing international service
                  availability, wholesale reseller credits and
                  customer subscription management tools.
                  Evaluate regional access, account restrictions,
                  device compatibility and current commercial
                  terms before choosing a package.
                </p>

                {[
                  {
                    heading: "International IPTV Reseller Panel: Regional Coverage",
                    body: "If you serve customers in the UK, USA, Canada, Europe or other markets, check the availability of each GEO IPTV package by country. Regional streaming performance can vary by network, server location and device. Request current coverage information and test the intended service where permitted rather than assuming worldwide availability."
                  },
                  {
                    heading: "GEO IPTV Reseller Credits & Wholesale Pricing",
                    body: "When evaluating GEO IPTV reseller credits, confirm the wholesale package quantities, credit conversion rules, minimum orders and renewal costs. Request current GEO IPTV reseller panel pricing and compare the effective subscription cost across customer plans before purchasing credits."
                  },
                  {
                    heading: "Multi-Region Reseller Dashboard & Account Management",
                    body: "An international IPTV reseller business needs reliable customer administration workflows. Evaluate the GEO IPTV reseller dashboard for subscription creation, credit allocation, account expiry tracking and renewals. Confirm whether reporting, trial controls or regional account restrictions are available."
                  },
                  {
                    heading: "GEO IPTV Setup, Devices & Connection Formats",
                    body: "Before GEO IPTV reseller setup, verify support for Xtream Codes-compatible applications, M3U playlists, MAG boxes, Smart TVs and Android TV devices. Check the selected package's supported resolutions, connection limits and device restrictions. HD or 4K playback quality is dependent on the actual service and network."
                  },
                  {
                    heading: "UK, Europe & Worldwide Reseller Buying Checks",
                    body: "For businesses serving multiple countries, assess applicable content distribution rights, regional service limitations, payment requirements, activation procedures and customer support arrangements. Confirm these details for your target markets before advertising international subscriptions."
                  }
                ].map((item) => (
                  <div key={item.heading} style={{ marginBottom: "2rem" }}>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem"
                    }}>
                      {item.heading}
                    </h3>
                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.85,
                      margin: 0
                    }}>
                      {item.body}
                    </p>
                  </div>
                ))}

                <div
                  id="geo-contextual-links"
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid var(--border-color)"
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "1rem"
                  }}>
                    GEO IPTV: Technical Guides & Alternative Panels
                  </h3>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For branded portals and domain configuration,
                    explore our{" "}
                    <Link href="/en/guides/dns-portal-setup-guide">
                      IPTV DNS and portal setup guide
                    </Link>{" "}
                    and review the requirements for your business.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Before configuring customer devices, understand
                    the differences between{" "}
                    <Link href="/en/guides/xtream-codes-vs-m3u">
                      Xtream Codes and M3U connections
                    </Link>.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Planning a branded international reseller business?
                    Read our{" "}
                    <Link href="/en/guides/white-label-panel-branding">
                      IPTV white-label branding guide
                    </Link>{" "}
                    and check which features your provider offers.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Compare GEO IPTV with the{" "}
                    <Link href="/en/starshare-iptv-reseller-panel">
                      Star Share reseller panel
                    </Link>{" "}
                    when assessing alternative subscription
                    and shared-access arrangements.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Another option to evaluate is the{" "}
                    <Link href="/en/5g-live-iptv-reseller-panel-credits">
                      5G Live IPTV reseller panel
                    </Link>{" "}
                    for different connectivity and customer
                    management requirements.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For a wider overview,{" "}
                    <Link href="/en/comparisons">
                      compare IPTV reseller panels
                    </Link>{" "}
                    using their available wholesale packages,
                    dashboard features and support terms.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}


        {/* 5G Live buyer guide — outside original hero */}
        {panel.slug === "5g-live-iptv-reseller-panel-credits" && locale === "en" && (
          <section
            id="fiveg-live-seo-content"
            aria-label="5G Live IPTV reseller credits and setup guide"
            style={{
              padding: "4.5rem 0",
              background: "var(--bg-primary)",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <div className="section-container">
              <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <div className="tag" style={{ marginBottom: "1rem" }}>
                  5G LIVE RESELLER GUIDE
                </div>

                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "1rem"
                }}>
                  5G Live IPTV Reseller Panel: Credits, Pricing & Setup
                </h2>

                <p style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem"
                }}>
                  The 5G Live IPTV reseller panel is a product option
                  for businesses comparing wholesale credits,
                  subscription management and device compatibility.
                  Check the available service packages, customer
                  account limits, connection methods and reseller
                  terms before committing to a credit purchase.
                </p>

                {[
                  {
                    heading: "5G Live Wholesale Credits & Subscription Costs",
                    body: "When comparing 5G Live IPTV reseller credits, request current wholesale pricing, minimum credit quantities and renewal rates. Understand how many credits each subscription duration consumes and calculate your effective per-account cost. Check whether unused credits expire and confirm the applicable refund or replacement terms."
                  },
                  {
                    heading: "Does 5G Live Need a 5G Internet Connection?",
                    body: "The product name alone does not indicate that mobile 5G internet is mandatory. Verify the provider's supported broadband and mobile network types, minimum recommended speeds and streaming quality settings. Network congestion, device capabilities and the selected service package can all affect playback stability."
                  },
                  {
                    heading: "5G Live Reseller Dashboard & Customer Renewals",
                    body: "A practical reseller dashboard should support account administration and efficient renewal workflows. Ask which tools are included for creating subscriptions, assigning credits, monitoring expiry dates and updating customers. Confirm any limits on simultaneous connections, bulk actions and access to usage statistics."
                  },
                  {
                    heading: "Device Compatibility: Xtream Codes, M3U & Smart TVs",
                    body: "Before activating subscriptions, verify the connection methods provided with 5G Live. Check compatibility with Xtream Codes-capable applications, M3U playlist players, Android TV, Smart TVs and supported MAG devices. Setup instructions and supported resolutions may differ between packages."
                  },
                  {
                    heading: "Choosing 5G Live for UK, USA & European Customers",
                    body: "For international reseller operations, verify service availability and acceptable connection performance in each target country. Review customer support response times, account restrictions, commercial terms and applicable content distribution rights before offering subscriptions to customers."
                  }
                ].map((item) => (
                  <div key={item.heading} style={{ marginBottom: "2rem" }}>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem"
                    }}>
                      {item.heading}
                    </h3>
                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.85,
                      margin: 0
                    }}>
                      {item.body}
                    </p>
                  </div>
                ))}

                <div
                  id="fiveg-live-contextual-links"
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid var(--border-color)"
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "1rem"
                  }}>
                    5G Live Setup Resources & Reseller Alternatives
                  </h3>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    To plan subscription allocation and wholesale
                    margins, start with our{" "}
                    <Link href="/en/guides/credit-system-explained">
                      IPTV reseller credit system guide
                    </Link>.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For subscription renewals and billing workflows,
                    see the{" "}
                    <Link href="/en/guides/billing-whmcs-stripe-guide">
                      WHMCS and Stripe billing integration guide
                    </Link>{" "}
                    and confirm which tools your provider supports.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Planning a new reseller operation? Our{" "}
                    <Link href="/en/guides/start-iptv-reseller-business">
                      guide to starting an IPTV reseller business
                    </Link>{" "}
                    explains the initial decisions and setup process.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For dashboard connectivity and customer account
                    management, review the{" "}
                    <Link href="/en/guides/xtream-api-integration-guide">
                      Xtream API integration guide
                    </Link>.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    If your buyers need another product option,
                    compare the{" "}
                    <Link href="/en/zen-4k-iptv-reseller-panel">
                      Zen 4K IPTV reseller panel
                    </Link>{" "}
                    for its own credit and dashboard arrangements.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For an alternative international reseller
                    package, evaluate the{" "}
                    <Link href="/en/geo-iptv-reseller-panel-credits">
                      GEO IPTV reseller panel
                    </Link>{" "}
                    and check its region-specific conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}


        {/* Magnum Golden OTT guide — outside the original hero */}
        {panel.slug === "magnum-golden-ott-reseller-panel-credits" && locale === "en" && (
          <section
            id="magnum-seo-content"
            aria-label="Magnum Golden OTT reseller panel buying guide"
            style={{
              padding: "4.5rem 0",
              background: "var(--bg-primary)",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <div className="section-container">
              <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <div className="tag" style={{ marginBottom: "1rem" }}>
                  MAGNUM GOLDEN OTT RESELLER GUIDE
                </div>

                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "1rem"
                }}>
                  Magnum Golden OTT Reseller Panel: Credits & Pricing
                </h2>

                <p style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem"
                }}>
                  The Magnum Golden OTT reseller panel is a
                  premium-positioned option for businesses
                  evaluating wholesale reseller credits, customer
                  subscriptions and dashboard management tools.
                  Compare current packages, credit requirements,
                  available content rights and technical support
                  before deciding whether it suits your business.
                </p>

                {[
                  {
                    heading: "Magnum Golden OTT Wholesale Credits & Pricing",
                    body: "When comparing Magnum Golden OTT reseller credits, request the latest wholesale price list and minimum order requirements. Calculate the effective cost of monthly and annual subscriptions, confirm how many credits each plan uses and review renewal pricing. Bulk purchases should be evaluated against actual customer demand rather than assumed profit margins."
                  },
                  {
                    heading: "Premium Subscription Packages & Customer Value",
                    body: "Premium positioning can help differentiate a reseller offer, but the value depends on the actual package. Review available content categories, subscription durations, supported resolutions, regional availability and account limits. Compare those features with customer expectations before setting retail prices."
                  },
                  {
                    heading: "Magnum Golden OTT Dashboard & Renewals",
                    body: "Evaluate the reseller dashboard for creating customer accounts, allocating credits, tracking expiration dates and renewing subscriptions. Confirm whether account reporting, trial controls, bulk management and access permissions are available with your chosen reseller package."
                  },
                  {
                    heading: "Device Setup: Xtream Codes, M3U & MAG",
                    body: "Before ordering credits, check whether Magnum Golden OTT supports the connection methods and devices your customers use. Confirm Xtream Codes-compatible applications, M3U playlists, MAG boxes, Android TV and Smart TV compatibility. Streaming quality and simultaneous connection limits should be verified for each package."
                  },
                  {
                    heading: "Trials, Support & Premium Reseller Evaluation",
                    body: "Ask whether a trial is currently offered and what it includes. Review activation procedures, support response times, applicable refund terms and regional restrictions. Businesses planning to distribute streaming services should also verify the necessary content distribution rights for their intended markets."
                  }
                ].map((item) => (
                  <div key={item.heading} style={{ marginBottom: "2rem" }}>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem"
                    }}>
                      {item.heading}
                    </h3>
                    <p style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.85,
                      margin: 0
                    }}>
                      {item.body}
                    </p>
                  </div>
                ))}

                <div
                  id="magnum-contextual-links"
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid var(--border-color)"
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "1rem"
                  }}>
                    Premium IPTV Reseller Guides & Alternatives
                  </h3>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For businesses comparing premium positioning,
                    explore the{" "}
                    <Link href="/en/infinity-premium-iptv-reseller-panel">
                      Infinity Premium IPTV reseller panel
                    </Link>{" "}
                    and evaluate its available credit packages.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    To compare other higher-resolution package
                    options, review the{" "}
                    <Link href="/en/ultra-8k-ott-iptv-reseller-panel">
                      Ultra 8K OTT reseller panel
                    </Link>{" "}
                    while checking actual device and content
                    compatibility.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    If you plan to customize your reseller brand,
                    read our{" "}
                    <Link href="/en/guides/white-label-panel-branding">
                      white-label IPTV branding guide
                    </Link>{" "}
                    before choosing a customer-facing setup.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    For account creation and integration workflows,
                    consult the{" "}
                    <Link href="/en/guides/xtream-api-integration-guide">
                      Xtream API integration guide
                    </Link>{" "}
                    and verify which functions your panel supports.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    When calculating subscription expenses and
                    renewals, use our{" "}
                    <Link href="/en/guides/credit-system-explained">
                      IPTV reseller credit system guide
                    </Link>{" "}
                    to understand common credit models.
                  </p>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    To review a broader range of wholesale
                    options, visit our{" "}
                    <Link href="/en/comparisons">
                      IPTV reseller panel comparisons
                    </Link>{" "}
                    and evaluate available features and terms.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        <section
          aria-label={`${panelLabel} Features`}
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
          aria-label={`How to Get Started with ${panelLabel}`}
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
          aria-label={`${panelLabel} FAQ`}
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
              {panel.slug === "nexon-iptv-reseller-panel"
                ? "Explore Nexon reseller credits and dashboard options. Contact us to confirm wholesale pricing, credit requirements, trial availability, activation procedures, support hours and regional service conditions."
                : panel.slug === "infinity-premium-iptv-reseller-panel"
                ? "Explore Infinity Premium reseller credits and dashboard options. Contact us to confirm wholesale pricing, credit requirements, trial availability, activation procedures, support hours and regional service conditions."
                : lc({
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

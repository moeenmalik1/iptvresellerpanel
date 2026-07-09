"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ALL_PANELS } from "@/app/lib/panelData";
import { getLocalizedPricing } from "@/app/lib/pricing";
import { useLocale } from "next-intl";

export default function ContactClient() {
  const locale = useLocale();

  // Load localized pricing rules dynamically
  const pricing = useMemo(() => getLocalizedPricing(locale), [locale]);

  // States
  const [selectedPanel, setSelectedPanel] = useState(ALL_PANELS[0].name);
  const [selectedCredits, setSelectedCredits] = useState("120 Credits Starter");

  const WHATSAPP_NUMBER = "447463012833"; // WhatsApp Administrator Contact

  const whatsappLink = useMemo(() => {
    const text = (() => {
      const trans = {
        en: `Hello Fox IPTV Panels! I would like to order a reseller panel setup for *${selectedPanel}* with *${selectedCredits}*. Please provide the payment details and setup instructions.`,
        "en-gb": `Hello Fox IPTV Panels! I would like to order a reseller panel setup for *${selectedPanel}* with *${selectedCredits}*. Please provide the payment details and setup instructions.`,
        "en-au": `Hello Fox IPTV Panels! I would like to order a reseller panel setup for *${selectedPanel}* with *${selectedCredits}*. Please provide the payment details and setup instructions.`,
        es: `¡Hola Fox IPTV Panels! Me gustaría ordenar una configuración de panel para *${selectedPanel}* con *${selectedCredits}*. Por favor, envíeme los detalles de pago y las instrucciones de configuración.`,
        fr: `Bonjour Fox IPTV Panels ! Je souhaite commander une configuration de panneau pour *${selectedPanel}* avec *${selectedCredits}*. Veuillez m'envoyer les détails de paiement et les instructions.`,
        pt: `Olá Fox IPTV Panels! Gostaria de encomendar uma configuração de painel para *${selectedPanel}* com *${selectedCredits}*. Por favor, envie-me os detalhes de pagamento e instruções.`,
        sv: `Hej Fox IPTV Panels! Jag skulle vilja beställa en kontrollpanel för *${selectedPanel}* med *${selectedCredits}*. Vänligen skicka betalningsinformation och instruktioner.`,
        no: `Hei Fox IPTV Panels! Jeg vil gjerne bestille et forhandlerpanel for *${selectedPanel}* med *${selectedCredits}*. Vennligst send betalingsinformasjon og instruksjoner.`
      };
      return trans[locale as keyof typeof trans] || trans.en;
    })();
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [selectedPanel, selectedCredits, locale]);

  // Calculator States
  const [credits, setCredits] = useState<number | "">(120);
  const [sellPrice, setSellPrice] = useState<number | "">(pricing.sellPriceDefault);

  const creditsNum = Number(credits) || 0;
  const sellPriceNum = Number(sellPrice) || 0;

  // Dynamic calculations via central pricing structure
  const costPerCredit = pricing.calculateCostPerCredit(creditsNum);
  const totalCost = creditsNum * costPerCredit;
  const grossRevenue = creditsNum * sellPriceNum;
  const netProfit = grossRevenue - totalCost;

  // Format currency dynamically according to HSL standards
  const formatValue = (val: number) => {
    if (pricing.symbolAfter) {
      return val.toLocaleString() + pricing.symbol;
    }
    return pricing.symbol + val.toLocaleString();
  };

  const getWhatsAppCalcLink = () => {
    const text = (() => {
      const trans = {
        en: `Hello Fox IPTV Panels! I checked the reseller calculator and would like to order a custom setup with *${creditsNum} Credits* (estimated cost: ${formatValue(totalCost)}). Please provide payment details and panel setup instructions.`,
        "en-gb": `Hello Fox IPTV Panels! I checked the reseller calculator and would like to order a custom setup with *${creditsNum} Credits* (estimated cost: ${formatValue(totalCost)}). Please provide payment details and panel setup instructions.`,
        "en-au": `Hello Fox IPTV Panels! I checked the reseller calculator and would like to order a custom setup with *${creditsNum} Credits* (estimated cost: ${formatValue(totalCost)}). Please provide payment details and panel setup instructions.`,
        es: `¡Hola Fox IPTV Panels! Revisé la calculadora y me gustaría ordenar una configuración personalizada con *${creditsNum} créditos* (costo estimado: ${formatValue(totalCost)}). Por favor envíeme los detalles.`,
        fr: `Bonjour Fox IPTV Panels ! J'ai utilisé le calculateur de marge et je souhaite commander une configuration personnalisée avec *${creditsNum} crédits* (coût estimé : ${formatValue(totalCost)}). Merci de m'envoyer les détails.`,
        pt: `Olá Fox IPTV Panels! Verifiquei a calculadora e gostaria de encomendar uma configuração personalizada com *${creditsNum} créditos* (custo estimado: ${formatValue(totalCost)}). Por favor, envie-me os detalhes.`,
        sv: `Hej Fox IPTV Panels! Jag kollade vinstkalkylatorn och skulle vilja beställa en skräddarsydd kontrollpanel med *${creditsNum} krediter* (beräknad kostnad: ${formatValue(totalCost)}). Vänligen skicka detaljer.`,
        no: `Hei Fox IPTV Panels! Jeg sjekket priskalkulatoren og vil gjerne bestille et tilpasset oppsett med *${creditsNum} kreditter* (estimert kostnad: ${formatValue(totalCost)}). Vennligst send detaljer.`
      };
      return trans[locale as keyof typeof trans] || trans.en;
    })();
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const plans = [pricing.starter, pricing.growth, pricing.enterprise];

  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "110px", position: "relative" }}>
      {/* Background Mesh Orbs */}
      <div className="mesh-orb mesh-orb-1" style={{ top: "0px", left: "0px" }} />
      <div className="mesh-orb mesh-orb-2" style={{ bottom: "0px", right: "0px" }} />

      <div className="section-container" style={{ padding: "4rem 1.5rem" }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
          <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
            {(() => {
              const trans = {
                en: "Home", "en-gb": "Home", "en-au": "Home",
                es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem"
              };
              return trans[locale as keyof typeof trans] || trans.en;
            })()}
          </Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: "var(--text-secondary)" }}>
            {(() => {
              const trans = {
                en: "Contact & Pricing", "en-gb": "Contact & Pricing", "en-au": "Contact & Pricing",
                es: "Precios y Contacto", fr: "Tarifs & Contact", pt: "Preços & Contacto", sv: "Priser & Kontakt", no: "Priser & Kontakt"
              };
              return trans[locale as keyof typeof trans] || trans.en;
            })()}
          </span>
        </nav>

        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>
            {(() => {
              const trans = {
                en: "High-Conversion Wholesale Plans", "en-gb": "High-Conversion Wholesale Plans", "en-au": "High-Conversion Wholesale Plans",
                es: "Planes Mayoristas de Alta Conversión", fr: "Plans de Gros à Haute Conversion", pt: "Planos Atacadistas de Alta Conversão", sv: "Grossistplaner med Hög Konvertering", no: "Grossistplaner med Høy Konvertering"
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
                en: <>Wholesale <span className="gradient-text">Credit Prices</span> & Active Ordering</>,
                "en-gb": <>Wholesale <span className="gradient-text">Credit Prices</span> & Active Ordering</>,
                "en-au": <>Wholesale <span className="gradient-text">Credit Prices</span> & Active Ordering</>,
                es: <>Precios de <span className="gradient-text">Créditos Mayoristas</span> y Pedido Directo</>,
                fr: <>Tarifs des <span className="gradient-text">Crédits de Gros</span> & Commande Directe</>,
                pt: <>Preços de <span className="gradient-text">Créditos Atacadistas</span> & Encomenda Direta</>,
                sv: <>Grossistpriser på <span className="gradient-text">Reseller-krediter</span> & Direktbeställning</>,
                no: <>Grossistpriser på <span className="gradient-text">Forhandlerkreditter</span> & Direkttebestilling</>
              };
              return trans[locale as keyof typeof trans] || trans.en;
            })()}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {(() => {
              const trans = {
                en: "Choose your starter pack or leverage high-volume enterprise savings. Purchase bulk iptv reseller credits and start generating subscriptions under your own private brand in minutes.",
                "en-gb": "Choose your starter pack or leverage high-volume enterprise savings. Purchase bulk iptv reseller credits and start generating subscriptions under your own private brand in minutes.",
                "en-au": "Choose your starter pack or leverage high-volume enterprise savings. Purchase bulk iptv reseller credits and start generating subscriptions under your own private brand in minutes.",
                es: "Elija su paquete de inicio o aproveche los grandes ahorros empresariales. Compre créditos IPTV al por mayor y comience a vender bajo su propia marca en minutos.",
                fr: "Choisissez votre pack de démarrage ou profitez des économies d'échelle pour les entreprises. Achetez des crédits IPTV en gros et vendez sous votre marque en quelques minutes.",
                pt: "Escolha o seu pacote inicial ou aproveite as poupanças corporativas de grande volume. Compre créditos IPTV atacadistas e comece a vender sob a sua própria marca em minutos.",
                sv: "Välj ditt startpaket eller dra nytta av grossistrabatter för företag. Köp IPTV-krediter i bulk och börja sälja abonnemang under ditt eget varumärke på några minuter.",
                no: "Velg ditt startsett eller dra nytte av volumrabatter for bedrifter. Kjøp IPTV-kreditter i bulk og begynn å selge abonnementer under ditt eget merke på få minutter."
              };
              return trans[locale as keyof typeof trans] || trans.en;
            })()}
          </p>
        </div>
 
        {/* Email & WhatsApp Quick Badges */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
          marginTop: "1.5rem"
        }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "0.75rem 1.5rem",
            borderRadius: "99px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
          }}>
            <span style={{ fontSize: "1.2rem", color: "#a855f7" }}>✉</span>
            <strong>Email:</strong>
            <a href="mailto:Iptvreseller77@gmail.com" style={{ color: "#a855f7", textDecoration: "none", fontWeight: 600 }} className="animated-underline">
              Iptvreseller77@gmail.com
            </a>
          </div>
          <div style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "0.75rem 1.5rem",
            borderRadius: "99px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
          }}>
            <span style={{ color: "#22c55e", fontSize: "1.2rem" }}>●</span>
            <strong>WhatsApp:</strong>
            <a href={`https://wa.me/447463012833`} target="_blank" rel="noopener noreferrer" style={{ color: "#22c55e", textDecoration: "none", fontWeight: 600 }} className="animated-underline">
              +44 7463 012833
            </a>
          </div>
        </div>

        {/* Pricing Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          alignItems: "start",
          marginBottom: "5rem",
        }} className="panel-hero-grid">
          {plans.map((plan) => {
            const isPopular = plan.id === "growth";
            const planColor = plan.id === "starter" ? "#3b82f6" : plan.id === "growth" ? "#8b5cf6" : "#06b6d4";
            const planGradient = plan.id === "starter"
              ? "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.03))"
              : plan.id === "growth"
              ? "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.06))"
              : "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(6,182,212,0.03))";
            const planBorder = plan.id === "starter" ? "rgba(59,130,246,0.2)" : plan.id === "growth" ? "rgba(139,92,246,0.35)" : "rgba(6,182,212,0.2)";

            return (
              <article
                key={plan.id}
                className="glass-card"
                style={{
                  borderRadius: 20,
                  padding: "2.5rem 2rem",
                  background: planGradient,
                  border: `1px solid ${planBorder}`,
                  position: "relative",
                  overflow: "hidden",
                  transform: isPopular ? "scale(1.03)" : "scale(1)",
                  boxShadow: isPopular ? "0 0 60px rgba(139,92,246,0.25)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "100%"
                }}
              >
                {isPopular && (
                  <div style={{
                    position: "absolute", top: 0, right: 0,
                    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                    padding: "0.4rem 1.25rem",
                    borderRadius: "0 20px 0 12px",
                    fontSize: "0.7rem", fontWeight: 700, color: "white",
                    letterSpacing: "0.05em",
                  }}>
                    {(() => {
                      const trans = {
                        en: "★ BEST SELLER", "en-gb": "★ BEST SELLER", "en-au": "★ BEST SELLER",
                        es: "★ MÁS VENDIDO", fr: "★ MEILLEURE VENTE", pt: "★ MAIS VENDIDO", sv: "★ BÄST SÄLJARE", no: "★ BESTSELGER"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </div>
                )}

                {/* Plan header */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{
                    fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: planColor, marginBottom: 12,
                  }}>
                    {plan.badge}
                  </div>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800, fontSize: "1.6rem",
                    color: "var(--text-primary)", marginBottom: 8,
                  }}>
                    {plan.name}
                  </h3>

                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                    {plan.description}
                  </p>

                  {/* Wholesale Price (To Buy) */}
                  <div style={{ margin: "1.25rem 0 1rem" }}>
                    <div style={{ fontSize: "0.72rem", color: planColor, textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.05em", marginBottom: "4px" }}>
                      {(() => {
                        const trans = {
                          en: "Wholesale Price (To Buy)", "en-gb": "Wholesale Price (To Buy)", "en-au": "Wholesale Price (To Buy)",
                          es: "Precio Mayorista (Compra)", fr: "Prix de Gros (Achat)", pt: "Preço de Gros (Compra)", sv: "Grossistpris (Inköp)", no: "Grossistpris (Innkjøp)"
                        };
                        return trans[locale as keyof typeof trans] || trans.en;
                      })()}
                    </div>
                    <div style={{
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      fontFamily: "'Outfit', sans-serif",
                      color: "white",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "4px",
                      lineHeight: 1
                    }}>
                      {formatValue(plan.cost)}
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
                        {(() => {
                          const trans = {
                            en: `total (${plan.rate}/credit)`, "en-gb": `total (${plan.rate}/credit)`, "en-au": `total (${plan.rate}/credit)`,
                            es: `total (${plan.rate}/crédito)`, fr: `total (${plan.rate}/crédit)`, pt: `total (${plan.rate}/crédito)`, sv: `totalt (${plan.rate}/kredit)`, no: `totalt (${plan.rate}/kreditt)`
                          };
                          return trans[locale as keyof typeof trans] || trans.en;
                        })()}
                      </span>
                    </div>
                  </div>

                  {/* Potential Earnings - Green Container */}
                  <div style={{
                    background: "rgba(34,197,94,0.06)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    borderRadius: "12px",
                    padding: "0.75rem 1rem",
                    margin: "1rem 0 1.25rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.5rem",
                    textAlign: "left"
                  }}>
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "rgba(34,197,94,0.8)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.03em" }}>
                        {(() => {
                          const trans = {
                            en: "Potential Revenue", "en-gb": "Potential Revenue", "en-au": "Potential Revenue",
                            es: "Ingresos Potenciales", fr: "Revenus Potentiels", pt: "Receitas Potenciais", sv: "Potentiell Omsättning", no: "Potensiell Omsetning"
                          };
                          return trans[locale as keyof typeof trans] || trans.en;
                        })()}
                      </div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#4ade80", marginTop: "2px" }}>
                        {pricing.symbolAfter ? `${plan.revenue}${pricing.symbol}` : `${pricing.symbol}${plan.revenue}`}
                      </div>
                    </div>
                    <div style={{ borderLeft: "1px solid rgba(34,197,94,0.15)", paddingLeft: "0.5rem" }}>
                      <div style={{ fontSize: "0.68rem", color: "rgba(34,197,94,0.8)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.03em" }}>
                        {(() => {
                          const trans = {
                            en: "Net Earnings", "en-gb": "Net Earnings", "en-au": "Net Earnings",
                            es: "Beneficio Neto", fr: "Bénéfice Net", pt: "Lucro Líquido", sv: "Nettovinst", no: "Nettogevinst"
                          };
                          return trans[locale as keyof typeof trans] || trans.en;
                        })()}
                      </div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#4ade80", marginTop: "2px" }}>
                        +{pricing.symbolAfter ? `${plan.profit}${pricing.symbol}` : `${pricing.symbol}${plan.profit}`}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: `${planColor}22`, marginBottom: "1.5rem" }} />

                {/* Features */}
                <ul className="check-list" style={{ marginBottom: "2rem", listStyle: "none", padding: 0 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.5rem", display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ color: planColor, fontWeight: "bold" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${(() => {
                    const trans = {
                      en: `Hello Fox IPTV Panels! I want to order the ${plan.name}.`,
                      "en-gb": `Hello Fox IPTV Panels! I want to order the ${plan.name}.`,
                      "en-au": `Hello Fox IPTV Panels! I want to order the ${plan.name}.`,
                      es: `Hola Fox IPTV Panels! Me gustaría ordenar el ${plan.name}.`,
                      fr: `Bonjour Fox IPTV Panels ! Je souhaite commander le ${plan.name}.`,
                      pt: `Olá Fox IPTV Panels! Gostaria de encomendar o ${plan.name}.`,
                      sv: `Hej Fox IPTV Panels! Jag skulle vilja beställa ${plan.name}.`,
                      no: `Hei Fox IPTV Panels! Jeg vil gjerne bestille ${plan.name}.`
                    };
                    return encodeURIComponent(trans[locale as keyof typeof trans] || trans.en);
                  })()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isPopular ? "btn-primary" : undefined}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "0.85rem",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontSize: "0.95rem", fontWeight: 700,
                    background: isPopular ? "linear-gradient(135deg, #8b5cf6, #3b82f6)" : "transparent",
                    color: isPopular ? "white" : planColor,
                    border: isPopular ? "none" : `1px solid ${planColor}`,
                    transition: "all 0.3s ease",
                    boxShadow: isPopular ? "0 4px 15px rgba(139,92,246,0.3)" : "none",
                    textAlign: "center"
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  {plan.cta}
                </a>
              </article>
            );
          })}
        </div>

        {/* Pre-filled WhatsApp Builder */}
        <div className="glass-card" style={{ padding: "3rem", borderRadius: "24px", background: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.06) 100%)", border: "1px solid var(--border-accent)", marginBottom: "5rem", position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3.5rem", alignItems: "center" }} className="panel-hero-grid">
            <div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem" }}>
                {(() => {
                  const trans = {
                    en: "Build Your Custom Order Message",
                    "en-gb": "Build Your Custom Order Message",
                    "en-au": "Build Your Custom Order Message",
                    es: "Genere su Mensaje de Pedido Personalizado",
                    fr: "Générez votre Message de Commande Personnalisé",
                    pt: "Gere a sua Mensagem de Encomenda Personalizada",
                    sv: "Skapa Ditt Skräddarsydda Beställningsmeddelande",
                    no: "Lag Ditt Egendefinerte Bestillingsmeddelelse"
                  };
                  return trans[locale as keyof typeof trans] || trans.en;
                })()}
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                {(() => {
                  const trans = {
                    en: "Select your desired IPTV Reseller Panel dashboard server and credit package below. Our pre-filled builder will instantly draft the professional inquiry message. Click to send it directly to our administration desk on WhatsApp!",
                    "en-gb": "Select your desired IPTV Reseller Panel dashboard server and credit package below. Our pre-filled builder will instantly draft the professional inquiry message. Click to send it directly to our administration desk on WhatsApp!",
                    "en-au": "Select your desired IPTV Reseller Panel dashboard server and credit package below. Our pre-filled builder will instantly draft the professional inquiry message. Click to send it directly to our administration desk on WhatsApp!",
                    es: "Seleccione su panel IPTV deseado y el paquete de créditos a continuación. Nuestro generador redactará instantáneamente la consulta profesional. ¡Haga clic para enviarla directamente por WhatsApp!",
                    fr: "Sélectionnez le serveur de panneau IPTV souhaité et le pack de crédits ci-dessous. Notre outil rédigera instantanément le message de demande. Cliquez pour l'envoyer directement sur WhatsApp !",
                    pt: "Selecione o painel IPTV pretendido e o pacote de créditos abaixo. O nosso gerador irá redigir instantaneamente a mensagem profissional. Clique para enviar diretamente por WhatsApp!",
                    sv: "Välj önskad IPTV-kontrollpanel och kreditpaket nedan. Vår generator skriver direkt ett professionellt meddelande. Klicka för att skicka det direkt via WhatsApp!",
                    no: "Velg ønsket forhandlerpanel og kredittpakke nedenfor. Vår generator skriver umiddelbart en profesjonell melding. Klikk for å sende den direkte via WhatsApp!"
                  };
                  return trans[locale as keyof typeof trans] || trans.en;
                })()}
              </p>

              {/* Form Controls */}
              <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }} className="panel-hero-grid">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                  <label htmlFor="panel-select" style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                    {(() => {
                      const trans = {
                        en: "Choose Panel", "en-gb": "Choose Panel", "en-au": "Choose Panel",
                        es: "Elegir Panel", fr: "Choisir le Panneau", pt: "Escolher Painel", sv: "Välj Panel", no: "Velg Panel"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </label>
                  <select
                    id="panel-select"
                    value={selectedPanel}
                    onChange={(e) => setSelectedPanel(e.target.value)}
                    style={{
                      background: "rgba(9, 13, 22, 0.98)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "8px",
                      padding: "0.7rem 1rem",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      outline: "none",
                      cursor: "pointer"
                    }}
                  >
                    {ALL_PANELS.map(p => (
                      <option key={p.slug} value={p.name}>{p.name} IPTV Panel</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                  <label htmlFor="credits-select" style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                    {(() => {
                      const trans = {
                        en: "Choose Credits", "en-gb": "Choose Credits", "en-au": "Choose Credits",
                        es: "Elegir Créditos", fr: "Choisir les Crédits", pt: "Escolher Créditos", sv: "Välj Krediter", no: "Velg Kreditter"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </label>
                  <select
                    id="credits-select"
                    value={selectedCredits}
                    onChange={(e) => setSelectedCredits(e.target.value)}
                    style={{
                      background: "rgba(9, 13, 22, 0.98)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "8px",
                      padding: "0.7rem 1rem",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      outline: "none",
                      cursor: "pointer"
                    }}
                  >
                    <option value="120 Credits Starter">
                      {(() => {
                        const trans = {
                          en: `120 Credits Pack (${formatValue(pricing.starter.cost)})`,
                          "en-gb": `120 Credits Pack (${formatValue(pricing.starter.cost)})`,
                          "en-au": `120 Credits Pack (${formatValue(pricing.starter.cost)})`,
                          es: `Paquete 120 Créditos (${formatValue(pricing.starter.cost)})`,
                          fr: `Pack 120 Crédits (${formatValue(pricing.starter.cost)})`,
                          pt: `Pacote 120 Créditos (${formatValue(pricing.starter.cost)})`,
                          sv: `120 Krediters Paket (${formatValue(pricing.starter.cost)})`,
                          no: `120 Kreditter Pakke (${formatValue(pricing.starter.cost)})`
                        };
                        return trans[locale as keyof typeof trans] || trans.en;
                      })()}
                    </option>
                    <option value="200 Credits Growth">
                      {(() => {
                        const trans = {
                          en: `200 Credits Pack (${formatValue(pricing.growth.cost)})`,
                          "en-gb": `200 Credits Pack (${formatValue(pricing.growth.cost)})`,
                          "en-au": `200 Credits Pack (${formatValue(pricing.growth.cost)})`,
                          es: `Paquete 200 Créditos (${formatValue(pricing.growth.cost)})`,
                          fr: `Pack 200 Crédits (${formatValue(pricing.growth.cost)})`,
                          pt: `Pacote 200 Créditos (${formatValue(pricing.growth.cost)})`,
                          sv: `200 Krediters Paket (${formatValue(pricing.growth.cost)})`,
                          no: `200 Kreditter Pakke (${formatValue(pricing.growth.cost)})`
                        };
                        return trans[locale as keyof typeof trans] || trans.en;
                      })()}
                    </option>
                    <option value="500 Credits Enterprise">
                      {(() => {
                        const trans = {
                          en: `500 Credits Pack (${formatValue(pricing.enterprise.cost)})`,
                          "en-gb": `500 Credits Pack (${formatValue(pricing.enterprise.cost)})`,
                          "en-au": `500 Credits Pack (${formatValue(pricing.enterprise.cost)})`,
                          es: `Paquete 500 Créditos (${formatValue(pricing.enterprise.cost)})`,
                          fr: `Pack 500 Crédits (${formatValue(pricing.enterprise.cost)})`,
                          pt: `Pacote 500 Créditos (${formatValue(pricing.enterprise.cost)})`,
                          sv: `500 Krediters Paket (${formatValue(pricing.enterprise.cost)})`,
                          no: `500 Kreditter Pakke (${formatValue(pricing.enterprise.cost)})`
                        };
                        return trans[locale as keyof typeof trans] || trans.en;
                      })()}
                    </option>
                  </select>
                </div>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.9rem 2rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem", fontWeight: 700, display: "inline-flex", gap: "8px", alignItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                {(() => {
                  const trans = {
                    en: "Send Automated Order Message",
                    "en-gb": "Send Automated Order Message",
                    "en-au": "Send Automated Order Message",
                    es: "Enviar Mensaje de Pedido Generado",
                    fr: "Envoyer le Message de Commande Généré",
                    pt: "Enviar Mensagem de Encomenda Gerada",
                    sv: "Skicka Skapat Beställningsmeddelande",
                    no: "Send Generert Bestillingsmelding"
                  };
                  return trans[locale as keyof typeof trans] || trans.en;
                })()}
              </a>
            </div>

            {/* Message preview block */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", fontWeight: 700 }}>
                {(() => {
                  const trans = {
                    en: "Order Message Draft Preview:",
                    "en-gb": "Order Message Draft Preview:",
                    "en-au": "Order Message Draft Preview:",
                    es: "Vista Previa del Mensaje:",
                    fr: "Aperçu du Message de Commande :",
                    pt: "Vista Prévia da Mensagem de Encomenda:",
                    sv: "Förhandsgranskning av Meddelande:",
                    no: "Forhåndsvisning av Melding:"
                  };
                  return trans[locale as keyof typeof trans] || trans.en;
                })()}
              </span>
              <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, border: "1px solid var(--border-color)" }}>
                {(() => {
                  const trans = {
                    en: <>"Hello Fox IPTV Panels! I would like to order a reseller panel setup for <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>{selectedPanel}</span> with <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{selectedCredits}</span>. Please provide the payment details and setup instructions."</>,
                    "en-gb":  <>"Hello Fox IPTV Panels! I would like to order a reseller panel setup for <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>{selectedPanel}</span> with <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{selectedCredits}</span>. Please provide the payment details and setup instructions."</>,
                    "en-au":  <>"Hello Fox IPTV Panels! I would like to order a reseller panel setup for <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>{selectedPanel}</span> with <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{selectedCredits}</span>. Please provide the payment details and setup instructions."</>,
                    es: <>"¡Hola Fox IPTV Panels! Me gustaría ordenar una configuración de panel para <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>{selectedPanel}</span> con <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{selectedCredits}</span>. Por favor, envíeme los detalles de pago y las instrucciones de configuración."</>,
                    fr: <>"Bonjour Fox IPTV Panels ! Je souhaite commander une configuration de panneau pour <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>{selectedPanel}</span> avec <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{selectedCredits}</span>. Merci de m'envoyer les détails de paiement et les instructions."</>,
                    pt: <>"Olá Fox IPTV Panels! Gostaria de encomendar uma configuração de painel para <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>{selectedPanel}</span> com <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{selectedCredits}</span>. Por favor, envie-me os detalhes de pagamento e as instruções."</>,
                    sv: <>"Hej Fox IPTV Panels! Jag vill beställa en kontrollpanel för <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>{selectedPanel}</span> med <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{selectedCredits}</span>. Vänligen skicka betalningsinformation och installationsinstruktioner."</>,
                    no: <>"Hei Fox IPTV Panels! Jeg vil gjerne bestille et forhandlerpanel for <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>{selectedPanel}</span> med <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{selectedCredits}</span>. Vennligst send betalingsinformasjon og oppsettsinstruksjoner."</>
                  };
                  return trans[locale as keyof typeof trans] || trans.en;
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* CALCULATOR */}
        <div 
          className="glass-card" 
          style={{ 
            padding: "3rem", 
            borderRadius: "24px", 
            background: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.06) 100%)", 
            border: "1px solid rgba(139, 92, 246, 0.25)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            marginBottom: "5rem"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#a855f7", fontWeight: 800, background: "rgba(168,85,247,0.1)", padding: "4px 12px", borderRadius: "999px" }}>
              {(() => { const t = { en: "Interactive Business Builder", "en-gb": "Interactive Business Builder", "en-au": "Interactive Business Builder", es: "Generador de Negocio Interactivo", fr: "Générateur d'Activité Interactif", pt: "Gerador de Negócio Interativo", sv: "Interaktiv Affärsgenerator", no: "Interaktiv Forretningsgenerator" }; return t[locale as keyof typeof t] || t.en; })()}
            </span>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 900, color: "var(--text-primary)", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
              {(() => { const t = { en: "IPTV Reseller Profit Calculator", "en-gb": "IPTV Reseller Profit Calculator", "en-au": "IPTV Reseller Profit Calculator", es: "Calculadora de Ganancias IPTV Reseller", fr: "Calculateur de Profit Revendeur IPTV", pt: "Calculadora de Lucro Revendedor IPTV", sv: "IPTV-återförsäljarvinstberäknare", no: "IPTV-forhandlerfortjenestekalkulator" }; return t[locale as keyof typeof t] || t.en; })()}
            </h3>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem" }}>
              {(() => { const t = { en: "Drag the sliders below to calculate your setup investment, wholesale credit discount rate, and potential margins when selling subscriptions to clients.", "en-gb": "Drag the sliders below to calculate your setup investment, wholesale credit discount rate, and potential margins when selling subscriptions to clients.", "en-au": "Drag the sliders below to calculate your setup investment, wholesale credit discount rate, and potential margins when selling subscriptions to clients.", es: "Arrastre los controles a continuación para calcular su inversión inicial, la tarifa de descuento por volumen y las ganancias potenciales al vender suscripciones.", fr: "Faites glisser les curseurs ci-dessous pour calculer votre investissement de départ, le taux de remise grossiste et vos marges potentielles.", pt: "Arraste os controlos abaixo para calcular o seu investimento inicial, a taxa de desconto grossista e as suas margens potenciais.", sv: "Dra reglagen nedan för att beräkna din startkostnad, grossistrabatt och potentiella marginaler.", no: "Dra glidebrytere nedenfor for å beregne oppstartsinvesteringen, grossistrabattsatsen og potensielle marginer." }; return t[locale as keyof typeof t] || t.en; })()}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "3.5rem", alignItems: "center" }} className="panel-hero-grid">
            {/* Left Column: Synced Inputs & Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Input 1: Credits Quantity */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                  <label htmlFor="calc-credits-contact-input" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-secondary)" }}>
                    {(() => { const t = { en: "Credits to Purchase", "en-gb": "Credits to Purchase", "en-au": "Credits to Purchase", es: "Créditos a Comprar", fr: "Crédits à Acheter", pt: "Créditos a Comprar", sv: "Krediter att Köpa", no: "Kreditter å Kjøpe" }; return t[locale as keyof typeof t] || t.en; })()}
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <input
                      id="calc-credits-contact-input"
                      type="number"
                      min="120"
                      max="10000"
                      value={credits}
                      onChange={(e) => {
                        const val = e.target.value === "" ? "" : Math.max(0, Number(e.target.value));
                        setCredits(val);
                      }}
                      style={{
                        background: "rgba(139,92,246,0.15)",
                        border: "1px solid rgba(139,92,246,0.4)",
                        borderRadius: "6px",
                        color: "#c4b5fd",
                        padding: "0.3rem 0.5rem",
                        width: "85px",
                        textAlign: "center",
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        outline: "none",
                        fontFamily: "inherit"
                      }}
                    />
                    <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 600 }}>
                      {(() => { const t = { en: "Credits", "en-gb": "Credits", "en-au": "Credits", es: "Créditos", fr: "Crédits", pt: "Créditos", sv: "Krediter", no: "Kreditter" }; return t[locale as keyof typeof t] || t.en; })()}
                    </span>
                  </div>
                </div>
                <input
                  id="calc-credits-contact"
                  type="range"
                  min="120"
                  max="1000"
                  step="10"
                  value={creditsNum}
                  onChange={(e) => setCredits(Number(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    background: "rgba(255,255,255,0.1)",
                    outline: "none",
                    cursor: "pointer",
                    accentColor: "#8b5cf6"
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
                  <span>120 ({(() => { const t = { en: "Starter", "en-gb": "Starter", "en-au": "Starter", es: "Inicio", fr: "Débutant", pt: "Inicial", sv: "Start", no: "Start" }; return t[locale as keyof typeof t] || t.en; })()})</span>
                  <span>200 ({(() => { const t = { en: "Growth", "en-gb": "Growth", "en-au": "Growth", es: "Desarrollo", fr: "Croissance", pt: "Crescimento", sv: "Tillväxt", no: "Vekst" }; return t[locale as keyof typeof t] || t.en; })()})</span>
                  <span>500 ({(() => { const t = { en: "Enterprise", "en-gb": "Enterprise", "en-au": "Enterprise", es: "Empresa", fr: "Entreprise", pt: "Empresarial", sv: "Företag", no: "Bedrift" }; return t[locale as keyof typeof t] || t.en; })()})</span>
                  <span>1,000+</span>
                </div>
              </div>

              {/* Input 2: Sell Price */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                  <label htmlFor="calc-sell-price-contact-input" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-secondary)" }}>
                    {(() => { const t = { en: "Your Monthly Resell Price", "en-gb": "Your Monthly Resell Price", "en-au": "Your Monthly Resell Price", es: "Su Precio Mensual de Venta", fr: "Votre Prix de Revente Mensuel", pt: "O Seu Preço de Revenda Mensal", sv: "Ditt Månadsliga Återförsäljningspris", no: "Din Månedlige Videresalgspris" }; return t[locale as keyof typeof t] || t.en; })()}
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {!pricing.symbolAfter && <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 600 }}>{pricing.symbol}</span>}
                    <input
                      id="calc-sell-price-contact-input"
                      type="number"
                      min="1"
                      max="1000"
                      value={sellPrice}
                      onChange={(e) => {
                        const val = e.target.value === "" ? "" : Math.max(0, Number(e.target.value));
                        setSellPrice(val);
                      }}
                      style={{
                        background: "rgba(6,182,212,0.15)",
                        border: "1px solid rgba(6,182,212,0.4)",
                        borderRadius: "6px",
                        color: "#22d3ee",
                        padding: "0.3rem 0.5rem",
                        width: "75px",
                        textAlign: "center",
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        outline: "none",
                        fontFamily: "inherit"
                      }}
                    />
                    <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 600 }}>
                      {pricing.symbolAfter ? `${pricing.symbol}/${(() => { const t = { en: "mo", "en-gb": "mo", "en-au": "mo", es: "mes", fr: "mois", pt: "mês", sv: "mån", no: "mnd" }; return t[locale as keyof typeof t] || t.en; })()}` : `/${(() => { const t = { en: "mo", "en-gb": "mo", "en-au": "mo", es: "mes", fr: "mois", pt: "mês", sv: "mån", no: "mnd" }; return t[locale as keyof typeof t] || t.en; })()}`}
                    </span>
                  </div>
                </div>
                <input
                  id="calc-sell-price-contact"
                  type="range"
                  min={pricing.sellPriceMin}
                  max={pricing.sellPriceMax}
                  step={pricing.sellPriceStep}
                  value={sellPriceNum}
                  onChange={(e) => setSellPrice(Number(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    background: "rgba(255,255,255,0.1)",
                    outline: "none",
                    cursor: "pointer",
                    accentColor: "#06b6d4"
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
                  <span>{formatValue(pricing.sellPriceMin)}</span>
                  <span>{formatValue(pricing.sellPriceDefault)} ({(() => { const t = { en: "Typical", "en-gb": "Typical", "en-au": "Typical", es: "Común", fr: "Typique", pt: "Típico", sv: "Typiskt", no: "Typisk" }; return t[locale as keyof typeof t] || t.en; })()})</span>
                  <span>{formatValue(pricing.sellPriceMax)}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Results */}
            <div 
              className="glass-card" 
              style={{ 
                padding: "2rem", 
                borderRadius: "18px", 
                background: "rgba(0,0,0,0.25)", 
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem"
              }}
            >
              {/* Package Cost */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {(() => { const t = { en: "Package Cost (To Buy):", "en-gb": "Package Cost (To Buy):", "en-au": "Package Cost (To Buy):", es: "Costo del Paquete (Inversión):", fr: "Coût du Pack (À Acheter) :", pt: "Custo do Pacote (A Comprar):", sv: "Paketets Kostnad (Att Köpa):", no: "Pakkekostnad (Å Kjøpe):" }; return t[locale as keyof typeof t] || t.en; })()}
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "white" }}>
                  {formatValue(totalCost)}
                </span>
              </div>

              {/* Retail Value */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {(() => { const t = { en: "Retail Value (To Sell):", "en-gb": "Retail Value (To Sell):", "en-au": "Retail Value (To Sell):", es: "Valor de Venta (Ingresos):", fr: "Valeur de Revente (À Vendre) :", pt: "Valor de Revenda (A Vender):", sv: "Återförsäljningsvärde (Att Sälja):", no: "Videresalgsverdi (Å Selge):" }; return t[locale as keyof typeof t] || t.en; })()}
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  {formatValue(grossRevenue)}
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "0.25rem 0" }} />

              {/* Net Reseller Profit */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {(() => { const t = { en: "Your Net Profit:", "en-gb": "Your Net Profit:", "en-au": "Your Net Profit:", es: "Su Beneficio Neto:", fr: "Votre Bénéfice Net :", pt: "O Seu Lucro Líquido:", sv: "Din Nettovinst:", no: "Din Nettogevinst:" }; return t[locale as keyof typeof t] || t.en; })()}
                </span>
                <span style={{ 
                  fontSize: "1.8rem", 
                  fontWeight: 900, 
                  color: "#22c55e", 
                  textShadow: "0 0 15px rgba(34,197,94,0.2)" 
                }}>
                  +{formatValue(netProfit)}
                </span>
              </div>

              {/* Order Setup Button */}
              <a
                href={getWhatsAppCalcLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  padding: "0.9rem",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontSize: "1rem", fontWeight: 800,
                  background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                  color: "white",
                  border: "none",
                  marginTop: "0.5rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(139,92,246,0.3)",
                  textAlign: "center"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                {(() => { const t = { en: "Secure Calculator Order Setup", "en-gb": "Secure Calculator Order Setup", "en-au": "Secure Calculator Order Setup", es: "Ordenar esta Configuración por WhatsApp", fr: "Passer Commande via le Calculateur", pt: "Encomendar via Calculadora", sv: "Säker Kalkylatorbeställning", no: "Sikker Kalkulator-bestilling" }; return t[locale as keyof typeof t] || t.en; })()}
              </a>
            </div>
          </div>
        </div>

        {/* Quick billing stats / trusted indicators */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "5rem" }} className="panel-hero-grid">
          <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>💳</div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
              {(() => { const t = { en: "Flexible Payments", "en-gb": "Flexible Payments", "en-au": "Flexible Payments", es: "Pagos Flexibles", fr: "Paiements Flexibles", pt: "Pagamentos Flexíveis", sv: "Flexibla Betalningar", no: "Fleksible Betalinger" }; return t[locale as keyof typeof t] || t.en; })()}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "4px 0 0" }}>
              {(() => { const t = { en: "PayPal, Cards, Bank, Crypto", "en-gb": "PayPal, Cards, Bank, Crypto", "en-au": "PayPal, Cards, Bank, Crypto", es: "PayPal, Tarjetas, Bancos, Crypto", fr: "PayPal, Cartes, Virement, Crypto", pt: "PayPal, Cartões, Banco, Crypto", sv: "PayPal, Kort, Bank, Crypto", no: "PayPal, Kort, Bank, Krypto" }; return t[locale as keyof typeof t] || t.en; })()}
            </p>
          </div>
          <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>⚡</div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
              {(() => { const t = { en: "Activation Speed", "en-gb": "Activation Speed", "en-au": "Activation Speed", es: "Activación Inmediata", fr: "Vitesse d'Activation", pt: "Velocidade de Ativação", sv: "Aktiveringssnabbhet", no: "Aktiveringstid" }; return t[locale as keyof typeof t] || t.en; })()}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "4px 0 0" }}>
              {(() => { const t = { en: "Reseller credentials in < 10 mins", "en-gb": "Reseller credentials in < 10 mins", "en-au": "Reseller credentials in < 10 mins", es: "Credenciales en menos de 10 min", fr: "Identifiants revendeur en moins de 10 min", pt: "Credenciais de revendedor em menos de 10 min", sv: "Återförsäljaruppgifter på under 10 min", no: "Forhandlerdetaljer på under 10 min" }; return t[locale as keyof typeof t] || t.en; })()}
            </p>
          </div>
          <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>💼</div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
              {(() => { const t = { en: "Private Label Domain", "en-gb": "Private Label Domain", "en-au": "Private Label Domain", es: "Dominio de Marca Propia", fr: "Domaine en Marque Blanche", pt: "Domínio de Marca Própria", sv: "Privat Märkesdomän", no: "Privat Merkedomene" }; return t[locale as keyof typeof t] || t.en; })()}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "4px 0 0" }}>
              {(() => { const t = { en: "Free setup on Business packages", "en-gb": "Free setup on Business packages", "en-au": "Free setup on Business packages", es: "Gratis en paquetes corporativos", fr: "Configuration gratuite sur les packs Business", pt: "Configuração gratuita nos pacotes Empresariais", sv: "Gratis installation på Företagspaket", no: "Gratis oppsett på Bedriftspakker" }; return t[locale as keyof typeof t] || t.en; })()}
            </p>
          </div>
          <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>🛡</div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
              {(() => { const t = { en: "Uptime SLA", "en-gb": "Uptime SLA", "en-au": "Uptime SLA", es: "Tiempo de Actividad SLA", fr: "SLA de Disponibilité", pt: "SLA de Disponibilidade", sv: "Drifttids-SLA", no: "Oppetids-SLA" }; return t[locale as keyof typeof t] || t.en; })()}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "4px 0 0" }}>
              {(() => { const t = { en: "Dedicated server maintenance", "en-gb": "Dedicated server maintenance", "en-au": "Dedicated server maintenance", es: "Soporte y mantenimiento dedicados", fr: "Maintenance serveur dédiée", pt: "Manutenção de servidor dedicado", sv: "Dedikerat serverunderhåll", no: "Dedikert servervedlikehold" }; return t[locale as keyof typeof t] || t.en; })()}
            </p>
          </div>
        </div>

        {/* Quick FAQ */}
        <section style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
              {(() => { const t = { en: "Billing FAQs", "en-gb": "Billing FAQs", "en-au": "Billing FAQs", es: "Preguntas sobre Facturación", fr: "FAQ Facturation", pt: "Perguntas de Faturação", sv: "Faktureringsvanliga Frågor", no: "Fakturerings-FAQ" }; return t[locale as keyof typeof t] || t.en; })()}
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "4px" }}>
              {(() => { const t = { en: "Quick responses regarding wholesale balances and dashboard setup.", "en-gb": "Quick responses regarding wholesale balances and dashboard setup.", "en-au": "Quick responses regarding wholesale balances and dashboard setup.", es: "Respuestas rápidas sobre los saldos de créditos.", fr: "Réponses rapides sur les soldes grossistes et la configuration du tableau de bord.", pt: "Respostas rápidas sobre saldos grossistas e configuração do painel.", sv: "Snabba svar om grossistsaldon och panelinställningar.", no: "Raske svar om grossistsaldoer og panelkonfigurasjon." }; return t[locale as keyof typeof t] || t.en; })()}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div className="glass-card" style={{ padding: "1.5rem 2rem", borderRadius: "12px" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 8px", color: "var(--text-primary)" }}>
                {(() => { const t = { en: "Do credits ever expire?", "en-gb": "Do credits ever expire?", "en-au": "Do credits ever expire?", es: "¿Caducan los créditos?", fr: "Les crédits expirent-ils ?", pt: "Os créditos expiram alguma vez?", sv: "Löper krediter ut?", no: "Utløper kreditter noensinne?" }; return t[locale as keyof typeof t] || t.en; })()}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {(() => { const t = { en: "No. Once you purchase reseller credits from Fox IPTV Panels, they remain active on your dashboard indefinitely. You can allocate them to clients today, or months down the line.", "en-gb": "No. Once you purchase reseller credits from Fox IPTV Panels, they remain active on your dashboard indefinitely. You can allocate them to clients today, or months down the line.", "en-au": "No. Once you purchase reseller credits from Fox IPTV Panels, they remain active on your dashboard indefinitely. You can allocate them to clients today, or months down the line.", es: "No. Una vez que compra créditos de revendedor en Fox IPTV Panels, permanecen activos en su panel indefinidamente. Puede asignarlos hoy o meses después.", fr: "Non. Une fois achetés, vos crédits restent actifs indéfiniment sur votre tableau de bord. Vous pouvez les attribuer à vos clients aujourd'hui ou des mois plus tard.", pt: "Não. Depois de comprar créditos de revendedor na Fox IPTV Panels, eles permanecem activos no seu painel indefinidamente. Pode atribuí-los a clientes hoje ou meses depois.", sv: "Nej. När du har köpt återförsäljarkrediter från Fox IPTV Panels förblir de aktiva på din panel på obestämd tid. Du kan tilldela dem till kunder idag eller månader senare.", no: "Nei. Når du har kjøpt forhandlerkreditter fra Fox IPTV Panels, forblir de aktive på dashbordet ditt på ubestemt tid. Du kan tildele dem til kunder i dag eller måneder senere." }; return t[locale as keyof typeof t] || t.en; })()}
              </p>
            </div>

            <div className="glass-card" style={{ padding: "1.5rem 2rem", borderRadius: "12px" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 8px", color: "var(--text-primary)" }}>
                {(() => { const t = { en: "Can I upgrade my package to a higher wholesale tier later?", "en-gb": "Can I upgrade my package to a higher wholesale tier later?", "en-au": "Can I upgrade my package to a higher wholesale tier later?", es: "¿Puedo subir de nivel de descuento más tarde?", fr: "Puis-je passer à un niveau grossiste supérieur plus tard ?", pt: "Posso fazer upgrade para um nível grossista superior mais tarde?", sv: "Kan jag uppgradera till en högre grossistnivå senare?", no: "Kan jeg oppgradere til et høyere grossistnivå senere?" }; return t[locale as keyof typeof t] || t.en; })()}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {(() => { const t = { en: "Yes. You can start with a 120 Credits Starter package today, and when you require refilling, buy a 200 or 500 Credits package. The wholesale discount rate of that tier will be applied to your new credit purchase.", "en-gb": "Yes. You can start with a 120 Credits Starter package today, and when you require refilling, buy a 200 or 500 Credits package. The wholesale discount rate of that tier will be applied to your new credit purchase.", "en-au": "Yes. You can start with a 120 Credits Starter package today, and when you require refilling, buy a 200 or 500 Credits package. The wholesale discount rate of that tier will be applied to your new credit purchase.", es: "Sí. Puede comenzar con un paquete Starter hoy y cuando requiera recargar, comprar un paquete Growth o Enterprise. La tasa de descuento correspondiente se aplicará automáticamente.", fr: "Oui. Commencez avec un pack Starter de 120 crédits et, lors de votre prochain rechargement, achetez un pack de 200 ou 500 crédits. Le taux de remise grossiste du nouveau niveau s'appliquera automatiquement.", pt: "Sim. Pode começar com um pacote Inicial de 120 créditos e, quando precisar de recarregar, comprar um pacote de 200 ou 500 créditos. A taxa de desconto grossista desse nível será aplicada automaticamente.", sv: "Ja. Du kan börja med ett Starter-paket på 120 krediter idag och när du behöver fylla på, köpa ett Growth- eller Enterprise-paket. Den grossistrabattsatsen för den nivån tillämpas automatiskt.", no: "Ja. Du kan starte med en Starter-pakke på 120 kreditter i dag, og når du trenger å fylle på, kjøp en Growth- eller Enterprise-pakke. Grossistrabattsatsen for det nivået vil da gjelde." }; return t[locale as keyof typeof t] || t.en; })()}
              </p>
            </div>

            <div className="glass-card" style={{ padding: "1.5rem 2rem", borderRadius: "12px" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 8px", color: "var(--text-primary)" }}>
                {(() => { const t = { en: "Can I get custom server credentials to test?", "en-gb": "Can I get custom server credentials to test?", "en-au": "Can I get custom server credentials to test?", es: "¿Puedo obtener credenciales de prueba?", fr: "Puis-je obtenir des identifiants de test ?", pt: "Posso obter credenciais de teste?", sv: "Kan jag få testuppgifter?", no: "Kan jeg få testdetaljer?" }; return t[locale as keyof typeof t] || t.en; })()}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {(() => { const t = { en: "Yes. We offer free reseller panel trials to help you evaluate the performance of our 22 different dashboards. Simply request a trial using the pre-filled builder above.", "en-gb": "Yes. We offer free reseller panel trials to help you evaluate the performance of our 22 different dashboards. Simply request a trial using the pre-filled builder above.", "en-au": "Yes. We offer free reseller panel trials to help you evaluate the performance of our 22 different dashboards. Simply request a trial using the pre-filled builder above.", es: "Sí. Ofrecemos pruebas gratuitas de paneles de revendedor para ayudarle a evaluar el rendimiento de nuestros 22 paneles diferentes. Solicite su prueba a través del formulario.", fr: "Oui. Nous proposons des essais gratuits de panneaux revendeur pour vous aider à évaluer nos 22 tableaux de bord. Demandez simplement un essai via le générateur ci-dessus.", pt: "Sim. Oferecemos testes gratuitos de painéis de revendedor para o ajudar a avaliar os nossos 22 dashboards. Basta solicitar um teste através do gerador acima.", sv: "Ja. Vi erbjuder gratis testperioder för återförsäljarpaneler för att hjälpa dig utvärdera våra 22 olika dashboards. Begär bara ett test via formulärgeneratorn ovan.", no: "Ja. Vi tilbyr gratis prøveperioder for forhandlerpaneler for å hjelpe deg å vurdere våre 22 dashbords. Be om en prøveperiode ved hjelp av generatoren ovenfor." }; return t[locale as keyof typeof t] || t.en; })()}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

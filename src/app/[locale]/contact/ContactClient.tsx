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

  const WHATSAPP_NUMBER = "1234567890"; // WhatsApp Administrator Contact

  const whatsappLink = useMemo(() => {
    const text = locale === "es"
      ? `¡Hola Fox IPTV Panels! Me gustaría ordenar una configuración de panel para *${selectedPanel}* con *${selectedCredits}*. Por favor, envíeme los detalles de pago y las instrucciones de configuración.`
      : `Hello Fox IPTV Panels! I would like to order a reseller panel setup for *${selectedPanel}* with *${selectedCredits}*. Please provide the payment details and setup instructions.`;
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
    const text = locale === "es"
      ? `¡Hola Fox IPTV Panels! Revisé la calculadora y me gustaría ordenar una configuración personalizada con *${creditsNum} créditos* (costo estimado: ${formatValue(totalCost)}). Por favor envíeme los detalles.`
      : `Hello Fox IPTV Panels! I checked the reseller calculator and would like to order a custom setup with *${creditsNum} Credits* (estimated cost: ${formatValue(totalCost)}). Please provide payment details and panel setup instructions.`;
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
            {locale === "es" ? "Inicio" : "Home"}
          </Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: "var(--text-secondary)" }}>
            {locale === "es" ? "Precios y Contacto" : "Contact & Pricing"}
          </span>
        </nav>

        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>
            {locale === "es" ? "Planes Mayoristas de Alta Conversión" : "High-Conversion Wholesale Plans"}
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
            {locale === "es" ? (
              <>Precios de <span className="gradient-text">Créditos Mayoristas</span> y Pedido Directo</>
            ) : (
              <>Wholesale <span className="gradient-text">Credit Prices</span> & Active Ordering</>
            )}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {locale === "es"
              ? "Elija su paquete de inicio o aproveche los grandes ahorros empresariales. Compre créditos IPTV al por mayor y comience a vender bajo su propia marca en minutos."
              : "Choose your starter pack or leverage high-volume enterprise savings. Purchase bulk iptv reseller credits and start generating subscriptions under your own private brand in minutes."}
          </p>
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
                    {locale === "es" ? "★ MÁS VENDIDO" : "★ BEST SELLER"}
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
                      {locale === "es" ? "Precio Mayorista (Compra)" : "Wholesale Price (To Buy)"}
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
                        {locale === "es" ? `total (${plan.rate}/crédito)` : `total (${plan.rate}/credit)`}
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
                        {locale === "es" ? "Ingresos Potenciales" : "Potential Revenue"}
                      </div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#4ade80", marginTop: "2px" }}>
                        {pricing.symbolAfter ? `${plan.revenue}${pricing.symbol}` : `${pricing.symbol}${plan.revenue}`}
                      </div>
                    </div>
                    <div style={{ borderLeft: "1px solid rgba(34,197,94,0.15)", paddingLeft: "0.5rem" }}>
                      <div style={{ fontSize: "0.68rem", color: "rgba(34,197,94,0.8)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.03em" }}>
                        {locale === "es" ? "Beneficio Neto" : "Net Earnings"}
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
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${locale === "es" ? `Hola Fox IPTV Panels! Me gustaría ordenar el ${encodeURIComponent(plan.name)}.` : `Hello Fox IPTV Panels! I want to order the ${encodeURIComponent(plan.name)}.`}`}
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
                {locale === "es" ? "Genere su Mensaje de Pedido Personalizado" : "Build Your Custom Order Message"}
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                {locale === "es"
                  ? "Seleccione su panel IPTV deseado y el paquete de créditos a continuación. Nuestro generador redactará instantáneamente la consulta profesional. ¡Haga clic para enviarla directamente por WhatsApp!"
                  : "Select your desired IPTV Reseller Panel dashboard server and credit package below. Our pre-filled builder will instantly draft the professional inquiry message. Click to send it directly to our administration desk on WhatsApp!"}
              </p>

              {/* Form Controls */}
              <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }} className="panel-hero-grid">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                  <label htmlFor="panel-select" style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                    {locale === "es" ? "Elegir Panel" : "Choose Panel"}
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
                    {locale === "es" ? "Elegir Créditos" : "Choose Credits"}
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
                      {locale === "es" ? `Paquete 120 Créditos (${formatValue(pricing.starter.cost)})` : `120 Credits Pack (${formatValue(pricing.starter.cost)})`}
                    </option>
                    <option value="200 Credits Growth">
                      {locale === "es" ? `Paquete 200 Créditos (${formatValue(pricing.growth.cost)})` : `200 Credits Pack (${formatValue(pricing.growth.cost)})`}
                    </option>
                    <option value="500 Credits Enterprise">
                      {locale === "es" ? `Paquete 500 Créditos (${formatValue(pricing.enterprise.cost)})` : `500 Credits Pack (${formatValue(pricing.enterprise.cost)})`}
                    </option>
                  </select>
                </div>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.9rem 2rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem", fontWeight: 700, display: "inline-flex", gap: "8px", alignItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                {locale === "es" ? "Enviar Mensaje de Pedido Generado" : "Send Automated Order Message"}
              </a>
            </div>

            {/* Message preview block */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", fontWeight: 700 }}>
                {locale === "es" ? "Vista Previa del Mensaje:" : "Order Message Draft Preview:"}
              </span>
              <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, border: "1px solid var(--border-color)" }}>
                {locale === "es" ? (
                  <>
                    "¡Hola Fox IPTV Panels! Me gustaría ordenar una configuración de panel para <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>{selectedPanel}</span> con <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{selectedCredits}</span>. Por favor, envíeme los detalles de pago y las instrucciones de configuración."
                  </>
                ) : (
                  <>
                    "Hello Fox IPTV Panels! I would like to order a reseller panel setup for <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>{selectedPanel}</span> with <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{selectedCredits}</span>. Please provide the payment details and setup instructions."
                  </>
                )}
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
              {locale === "es" ? "Generador de Negocio Interactivo" : "Interactive Business Builder"}
            </span>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 900, color: "var(--text-primary)", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
              {locale === "es" ? "Calculadora de Ganancias IPTV Reseller" : "IPTV Reseller Profit Calculator"}
            </h3>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem" }}>
              {locale === "es"
                ? "Arrastre los controles a continuación para calcular su inversión inicial, la tarifa de descuento por volumen y las ganancias potenciales al vender suscripciones."
                : "Drag the sliders below to calculate your setup investment, wholesale credit discount rate, and potential margins when selling subscriptions to clients."}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "3.5rem", alignItems: "center" }} className="panel-hero-grid">
            {/* Left Column: Synced Inputs & Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Input 1: Credits Quantity */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                  <label htmlFor="calc-credits-contact-input" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-secondary)" }}>
                    {locale === "es" ? "Créditos a Comprar" : "Credits to Purchase"}
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
                      {locale === "es" ? "Créditos" : "Credits"}
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
                  <span>120 {locale === "es" ? "(Inicio)" : "(Starter)"}</span>
                  <span>200 {locale === "es" ? "(Desarrollo)" : "(Growth)"}</span>
                  <span>500 {locale === "es" ? "(Empresa)" : "(Enterprise)"}</span>
                  <span>1,000+</span>
                </div>
              </div>

              {/* Input 2: Sell Price */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                  <label htmlFor="calc-sell-price-contact-input" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-secondary)" }}>
                    {locale === "es" ? "Su Precio Mensual de Venta" : "Your Monthly Resell Price"}
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
                      {pricing.symbolAfter ? `${pricing.symbol}/mes` : "/mo"}
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
                  <span>{formatValue(pricing.sellPriceDefault)} ({locale === "es" ? "Común" : "Typical"})</span>
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
                  {locale === "es" ? "Costo del Paquete (Inversión):" : "Package Cost (To Buy):"}
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "white" }}>
                  {formatValue(totalCost)}
                </span>
              </div>

              {/* Retail Value */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {locale === "es" ? "Valor de Venta (Ingresos):" : "Retail Value (To Sell):"}
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
                  {locale === "es" ? "Su Beneficio Neto:" : "Your Net Profit:"}
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
                {locale === "es" ? "Ordenar esta Configuración por WhatsApp" : "Secure Calculator Order Setup"}
              </a>
            </div>
          </div>
        </div>

        {/* Quick billing stats / trusted indicators */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "5rem" }} className="panel-hero-grid">
          <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>💳</div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
              {locale === "es" ? "Pagos Flexibles" : "Flexible Payments"}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "4px 0 0" }}>
              {locale === "es" ? "PayPal, Tarjetas, Bancos, Crypto" : "PayPal, Cards, Bank, Crypto"}
            </p>
          </div>
          <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>⚡</div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
              {locale === "es" ? "Activación Inmediata" : "Activation Speed"}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "4px 0 0" }}>
              {locale === "es" ? "Credenciales en menos de 10 min" : "Reseller credentials in < 10 mins"}
            </p>
          </div>
          <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>💼</div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
              {locale === "es" ? "Dominio de Marca Propia" : "Private Label Domain"}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "4px 0 0" }}>
              {locale === "es" ? "Gratis en paquetes corporativos" : "Free setup on Business packages"}
            </p>
          </div>
          <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>🛡</div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
              {locale === "es" ? "Tiempo de Actividad SLA" : "Uptime SLA"}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: "4px 0 0" }}>
              {locale === "es" ? "Soporte y mantenimiento dedicados" : "Dedicated server maintenance"}
            </p>
          </div>
        </div>

        {/* Quick FAQ */}
        <section style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
              {locale === "es" ? "Preguntas sobre Facturación" : "Billing FAQs"}
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "4px" }}>
              {locale === "es" ? "Respuestas rápidas sobre los saldos de créditos." : "Quick responses regarding wholesale balances and dashboard setup."}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div className="glass-card" style={{ padding: "1.5rem 2rem", borderRadius: "12px" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 8px", color: "var(--text-primary)" }}>
                {locale === "es" ? "¿Caducan los créditos?" : "Do credits ever expire?"}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {locale === "es"
                  ? "No. Una vez que compra créditos de revendedor en Fox IPTV Panels, permanecen activos en su panel indefinidamente. Puede asignarlos hoy o meses después."
                  : "No. Once you purchase reseller credits from Fox IPTV Panels, they remain active on your dashboard indefinitely. You can allocate them to clients today, or months down the line."}
              </p>
            </div>

            <div className="glass-card" style={{ padding: "1.5rem 2rem", borderRadius: "12px" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 8px", color: "var(--text-primary)" }}>
                {locale === "es" ? "¿Puedo subir de nivel de descuento más tarde?" : "Can I upgrade my package to a higher wholesale tier later?"}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {locale === "es"
                  ? "Sí. Puede comenzar con un paquete Starter hoy y cuando requiera recargar, comprar un paquete Growth o Enterprise. La tasa de descuento correspondiente se aplicará automáticamente."
                  : "Yes. You can start with a 120 Credits Starter package today, and when you require refilling, buy a 200 or 500 Credits package. The wholesale discount rate of that tier will be applied to your new credit purchase."}
              </p>
            </div>

            <div className="glass-card" style={{ padding: "1.5rem 2rem", borderRadius: "12px" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 8px", color: "var(--text-primary)" }}>
                {locale === "es" ? "¿Puedo obtener credenciales de prueba?" : "Can I get custom server credentials to test?"}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {locale === "es"
                  ? "Sí. Ofrecemos pruebas gratuitas de paneles de revendedor para ayudarle a evaluar el rendimiento de nuestros 22 paneles diferentes. Solicite su prueba a través del formulario."
                  : "Yes. We offer free reseller panel trials to help you evaluate the performance of our 22 different dashboards. Simply request a trial using the pre-filled builder above."}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

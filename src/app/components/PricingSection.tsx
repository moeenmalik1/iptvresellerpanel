"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

export default function PricingSection() {
  const locale = useLocale();
  const c = useTranslations("common");
  const t = getSectionTranslations(locale).pricingSection;

  const symbol = c("symbol") || "$";

  // Calculator States
  const [credits, setCredits] = useState<number | "">(120);
  const [sellPrice, setSellPrice] = useState<number | "">(10);

  const creditsNum = Number(credits) || 0;
  const sellPriceNum = Number(sellPrice) || 0;

  // Dynamic cost calculation based on tier thresholds
  const calculateCostPerCredit = (qty: number) => {
    if (qty < 200) return 1.0; // Starter rate
    if (qty < 500) return 0.9; // Growth rate
    return 0.7; // Enterprise rate
  };

  const costPerCredit = calculateCostPerCredit(creditsNum);
  const totalCost = creditsNum * costPerCredit;
  const grossRevenue = creditsNum * sellPriceNum;
  const netProfit = grossRevenue - totalCost;

  // Prefilled WhatsApp order link based on calculator values
  const getWhatsAppCalcLink = () => {
    const text = `Hello Fox IPTV Panels! I checked the reseller calculator and would like to order a custom setup with *${creditsNum} Credits* (estimated cost: ${symbol}${totalCost}). Please provide payment details and panel setup instructions.`;
    return `https://wa.me/1234567890?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="pricing"
      aria-label="Buy IPTV Reseller Credits — Cheapest IPTV Reseller Panel Pricing"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>{t.tag}</div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}>
            {t.titleMain}
            <span className="gradient-text">{t.titleSpan}</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: 580, margin: "0 auto" }}>
            {t.desc}
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          alignItems: "stretch",
          marginBottom: "6rem",
        }}>
          {t.plans.map((plan) => (
            <article
              key={plan.id}
              className="glass-card"
              style={{
                borderRadius: 20,
                padding: "2.5rem 2rem",
                background: plan.gradient,
                border: `1px solid ${plan.border}`,
                position: "relative",
                overflow: "hidden",
                transform: plan.popular ? "scale(1.03)" : "scale(1)",
                boxShadow: plan.popular ? "0 0 60px rgba(139,92,246,0.25)" : "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              {plan.popular && (
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                  padding: "0.4rem 1.25rem",
                  borderRadius: "0 20px 0 12px",
                  fontSize: "0.7rem", fontWeight: 700, color: "white",
                  letterSpacing: "0.05em",
                }}>
                  {t.bestValue}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{
                    fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: plan.color, marginBottom: 8,
                  }}>
                    {plan.badge}
                  </div>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900, fontSize: "1.8rem",
                    color: "var(--text-primary)", marginBottom: 8,
                  }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {plan.description}
                  </p>
                </div>

                {/* Clear Package Price Container (To Buy) */}
                <div style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "1.25rem",
                  marginBottom: "1rem",
                  position: "relative"
                }}>
                  <div style={{
                    fontSize: "0.68rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    marginBottom: "4px"
                  }}>
                    {t.pkgCostLabel}
                  </div>
                  <div style={{
                    fontSize: "2.6rem",
                    fontWeight: 900,
                    fontFamily: "'Outfit', sans-serif",
                    color: "white",
                    lineHeight: 1,
                    display: "flex",
                    alignItems: "baseline",
                    gap: "6px"
                  }}>
                    {symbol}{plan.cost}
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
                      {t.totalLabel} ({symbol}{plan.cost / Number(plan.badge.split(" ")[0])}/{t.creditLabel})
                    </span>
                  </div>
                </div>

                {/* Earning Potential Container (To Sell) - High Contrast Green */}
                <div style={{
                  background: "rgba(34,197,94,0.05)",
                  border: "1px solid rgba(34,197,94,0.15)",
                  borderRadius: "14px",
                  padding: "1rem 1.25rem",
                  marginBottom: "1.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem"
                }}>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "rgba(34,197,94,0.75)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.03em" }}>
                      {t.resellRevenueLabel}
                    </div>
                    <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#4ade80", marginTop: "2px" }}>
                      {symbol}{(Number(plan.badge.split(" ")[0]) * 10).toLocaleString()}
                    </div>
                  </div>
                  <div style={{ borderLeft: "1px solid rgba(34,197,94,0.1)", paddingLeft: "0.75rem" }}>
                    <div style={{ fontSize: "0.65rem", color: "rgba(34,197,94,0.75)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.03em" }}>
                      {t.netProfitLabel}
                    </div>
                    <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#4ade80", marginTop: "2px" }}>
                      +{symbol}{((Number(plan.badge.split(" ")[0]) * 10) - plan.cost).toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Minimal Features List */}
                <ul style={{ marginBottom: "2rem", listStyle: "none", padding: 0 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.6rem", display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ color: plan.color, fontWeight: "bold" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Button */}
              <a
                href={`https://wa.me/1234567890?text=Hello%20Fox%20IPTV%20Panels!%20I%20want%20to%20order%20the%20${encodeURIComponent(plan.name)}%20(${symbol}${plan.cost}).`}
                target="_blank"
                rel="noopener noreferrer"
                id={`pricing-${plan.id}-cta`}
                aria-label={`${plan.cta} — Fox IPTV Panels`}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "0.9rem",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontSize: "0.95rem", fontWeight: 700,
                  background: plan.popular ? "linear-gradient(135deg, #8b5cf6, #3b82f6)" : "rgba(255,255,255,0.03)",
                  color: "white",
                  border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                  boxShadow: plan.popular ? "0 4px 15px rgba(139,92,246,0.3)" : "none",
                  textAlign: "center"
                }}
                onMouseEnter={e => {
                  if (!plan.popular) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = plan.color;
                  }
                }}
                onMouseLeave={e => {
                  if (!plan.popular) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        {/* ─── INTERACTIVE REVENUE & PROFIT CALCULATOR ─── */}
        <div 
          className="glass-card" 
          style={{ 
            padding: "2.5rem 3rem", 
            borderRadius: "24px", 
            background: "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.04) 100%)", 
            border: "1px solid rgba(139, 92, 246, 0.2)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.8rem", fontWeight: 900, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
              {t.calculator.title}
            </h3>
            <p style={{ color: "var(--text-secondary)", maxWidth: "540px", margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.5 }}>
              {t.calculator.desc}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "3rem", alignItems: "center" }} className="panel-hero-grid">
            {/* Left Column: Synced Inputs & Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {/* Input 1: Credits Quantity */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                  <label htmlFor="calc-credits-input" style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-secondary)" }}>{t.calculator.purchaseLabel}</label>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <input
                      id="calc-credits-input"
                      type="number"
                      min="120"
                      max="10000"
                      value={credits}
                      onChange={(e) => {
                        const val = e.target.value === "" ? "" : Math.max(0, Number(e.target.value));
                        setCredits(val);
                      }}
                      style={{
                        background: "rgba(139,92,246,0.12)",
                        border: "1px solid rgba(139,92,246,0.3)",
                        borderRadius: "6px",
                        color: "#c4b5fd",
                        padding: "0.25rem 0.5rem",
                        width: "85px",
                        textAlign: "center",
                        fontSize: "0.9rem",
                        fontWeight: 800,
                        outline: "none",
                        fontFamily: "inherit"
                      }}
                    />
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>{t.calculator.creditsSuffix}</span>
                  </div>
                </div>
                <input
                  id="calc-credits"
                  type="range"
                  min="120"
                  max="1000"
                  step="10"
                  value={creditsNum}
                  onChange={(e) => setCredits(Number(e.target.value))}
                  aria-label="IPTV reseller credits slider"
                  style={{
                    width: "100%",
                    height: "5px",
                    borderRadius: "3px",
                    background: "rgba(255,255,255,0.08)",
                    outline: "none",
                    cursor: "pointer",
                    accentColor: "#8b5cf6"
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
                  <span>120 {t.calculator.creditsSuffix}</span>
                  <span>200 (Growth)</span>
                  <span>500 (Enterprise)</span>
                  <span>1,000</span>
                </div>
              </div>

              {/* Input 2: Sell Price */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                  <label htmlFor="calc-sell-price-input" style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-secondary)" }}>{t.calculator.resellPriceLabel}</label>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>{symbol}</span>
                    <input
                      id="calc-sell-price-input"
                      type="number"
                      min="1"
                      max="1000"
                      value={sellPrice}
                      onChange={(e) => {
                        const val = e.target.value === "" ? "" : Math.max(0, Number(e.target.value));
                        setSellPrice(val);
                      }}
                      style={{
                        background: "rgba(6,182,212,0.12)",
                        border: "1px solid rgba(6,182,212,0.3)",
                        borderRadius: "6px",
                        color: "#22d3ee",
                        padding: "0.25rem 0.5rem",
                        width: "65px",
                        textAlign: "center",
                        fontSize: "0.9rem",
                        fontWeight: 800,
                        outline: "none",
                        fontFamily: "inherit"
                      }}
                    />
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>{t.calculator.sellSuffix}</span>
                  </div>
                </div>
                <input
                  id="calc-sell-price"
                  type="range"
                  min="5"
                  max="25"
                  step="1"
                  value={sellPriceNum}
                  onChange={(e) => setSellPrice(Number(e.target.value))}
                  aria-label="Resell price per credit slider"
                  style={{
                    width: "100%",
                    height: "5px",
                    borderRadius: "3px",
                    background: "rgba(255,255,255,0.08)",
                    outline: "none",
                    cursor: "pointer",
                    accentColor: "#06b6d4"
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
                  <span>{symbol}5</span>
                  <span>{symbol}10 ({t.calculator.typicalLabel})</span>
                  <span>{symbol}15</span>
                  <span>{symbol}20</span>
                  <span>{symbol}25</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Results Board */}
            <div 
              className="glass-card" 
              style={{ 
                padding: "1.75rem 2rem", 
                borderRadius: "16px", 
                background: "rgba(0,0,0,0.2)", 
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
              }}
            >
              {/* Cost to Buy */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{t.calculator.costToBuy}</span>
                <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "white" }}>
                  {symbol}{totalCost.toLocaleString()}
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500, marginLeft: 6 }}>
                    ({symbol}{costPerCredit.toFixed(2)}/{t.creditLabel})
                  </span>
                </span>
              </div>

              {/* Revenue Potential */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{t.calculator.grossRevenue}</span>
                <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "white" }}>{symbol}{grossRevenue.toLocaleString()}</span>
              </div>

              {/* Clean divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

              {/* Net Profit Highlight */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>{t.calculator.netProfit}</span>
                <span style={{ 
                  fontSize: "1.6rem", 
                  fontWeight: 900, 
                  color: "#22c55e", 
                  textShadow: "0 0 15px rgba(34,197,94,0.15)" 
                }}>
                  +{symbol}{netProfit.toLocaleString()}
                </span>
              </div>

              {/* Direct Order Link */}
              <a
                href={getWhatsAppCalcLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "0.85rem",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontSize: "0.95rem", fontWeight: 800,
                  background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                  color: "white",
                  border: "none",
                  marginTop: "0.25rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(139,92,246,0.35)",
                  textAlign: "center"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                {t.calculator.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

const plans = [
  {
    id: "starter",
    name: "Starter",
    badge: "Best For New Resellers",
    description: "Perfect for beginners learning how to start an IPTV reseller business — test the market with a small credit package.",
    price: "Get Quote",
    features: [
      "Small IPTV credit package",
      "Reseller dashboard access",
      "Basic WhatsApp support",
      "Instant panel activation",
      "IPTV reseller panel free trial available",
    ],
    cta: "Start Reselling",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05))",
    border: "rgba(59,130,246,0.25)",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most Popular",
    description: "Ideal for IPTV resellers scaling their subscriber base — better bulk credit pricing and higher profit margins.",
    price: "Get Quote",
    features: [
      "Larger bulk credit volume",
      "Priority WhatsApp support",
      "Faster credit activation",
      "Better reseller profit margins",
      "Access to all IPTV panels",
    ],
    cta: "Buy IPTV Reseller Credits",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.1))",
    border: "rgba(139,92,246,0.4)",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Wholesale IPTV Panel",
    description: "Maximum wholesale IPTV credits, dedicated support, and the cheapest cost-per-credit for high-volume resellers.",
    price: "Contact Us",
    features: [
      "Wholesale IPTV credit packages",
      "Dedicated reseller support",
      "All white label IPTV panels",
      "Cheapest bulk credit pricing",
      "IPTV reseller program benefits",
    ],
    cta: "Get Wholesale Pricing",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(6,182,212,0.05))",
    border: "rgba(6,182,212,0.25)",
    popular: false,
  },
];

export default function PricingSection() {
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
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>Buy IPTV Reseller Credits</div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}>
            Flexible IPTV Reseller{" "}
            <span className="gradient-text">Credit Packages</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: 580, margin: "0 auto" }}>
            Choose a reseller package based on your business stage and customer volume.
            From the <strong style={{ color: "var(--text-primary)" }}>cheapest IPTV reseller panel</strong> starter
            bundle to full <strong style={{ color: "var(--text-primary)" }}>wholesale IPTV panel</strong> pricing —
            with IPTV reseller panel free trial available on request.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          alignItems: "start",
        }}>
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="glass-card"
              style={{
                borderRadius: 16,
                padding: "2rem",
                background: plan.gradient,
                border: `1px solid ${plan.border}`,
                position: "relative",
                overflow: "hidden",
                transform: plan.popular ? "scale(1.03)" : "scale(1)",
                boxShadow: plan.popular ? "0 0 60px rgba(139,92,246,0.2)" : "none",
              }}
            >
              {plan.popular && (
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                  padding: "0.4rem 1.25rem",
                  borderRadius: "0 16px 0 12px",
                  fontSize: "0.7rem", fontWeight: 700, color: "white",
                  letterSpacing: "0.05em",
                }}>
                  ★ MOST POPULAR
                </div>
              )}

              {/* Plan header */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{
                  fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: plan.color, marginBottom: 6,
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
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: `${plan.color}22`, marginBottom: "1.5rem" }} />

              {/* Features */}
              <ul className="check-list" style={{ marginBottom: "2rem" }}>
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>

              {/* CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id={`pricing-${plan.id}-cta`}
                aria-label={`${plan.cta} — Fox IPTV Panels`}
                className={plan.popular ? "btn-primary" : undefined}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "0.85rem",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontSize: "0.95rem", fontWeight: 700,
                  background: plan.popular ? "linear-gradient(135deg, #8b5cf6, #3b82f6)" : "transparent",
                  color: plan.popular ? "white" : plan.color,
                  border: plan.popular ? "none" : `1px solid ${plan.color}`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  if (!plan.popular) {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${plan.color}18`;
                  }
                }}
                onMouseLeave={e => {
                  if (!plan.popular) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

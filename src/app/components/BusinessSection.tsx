const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

const controls = [
  "Your own subscription pricing",
  "Customer & trial management",
  "Device & MAG box support",
  "Xtream Codes & M3U output",
  "Monthly profit margins",
  "Bulk credit allocation",
];

const steps = [
  {
    step: "01",
    title: "Buy IPTV Reseller Credits in Bulk",
    desc: "Purchase a wholesale IPTV credit package. Start small with a starter bundle or go big for maximum reseller profit margins. No large upfront investment required.",
    icon: "💳",
  },
  {
    step: "02",
    title: "Create Customer Subscriptions",
    desc: "Use your IPTV credits to activate subscriptions for end customers via your reseller dashboard. Set your own pricing per subscription period.",
    icon: "👥",
  },
  {
    step: "03",
    title: "Manage Users From Your IPTV Dashboard",
    desc: "Track active users, trial subscriptions, expiring credits, and revenue in real time from your white label IPTV reseller panel login.",
    icon: "📊",
  },
  {
    step: "04",
    title: "Grow Recurring Monthly Income",
    desc: "As customers renew, your IPTV reselling business grows passively with compounding monthly revenue — the most scalable IPTV business model.",
    icon: "📈",
  },
];

export default function BusinessSection() {
  return (
    <section
      id="business-model"
      aria-label="How IPTV Reseller Business Works — Credit System Explained"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }} className="business-grid">

          {/* Left */}
          <div>
            <div className="tag" style={{ marginBottom: "1.25rem" }}>IPTV Credit System Explained</div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: "var(--text-primary)",
            }}>
              How the IPTV Reseller{" "}
              <span className="gradient-text">Business Credit System Works</span>
            </h2>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              The <strong style={{ color: "var(--text-primary)" }}>IPTV reseller business</strong> runs on a
              credit-based system. You purchase{" "}
              <strong style={{ color: "var(--text-primary)" }}>IPTV reseller credits</strong> in bulk from
              a wholesale IPTV panel provider — then convert each credit into an IPTV subscription
              for your customers at your chosen price point.
            </p>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Fox IPTV Panels is the easiest way to{" "}
              <strong style={{ color: "var(--text-primary)" }}>become an IPTV reseller</strong> without investment
              in servers or infrastructure. We handle the technical side — you focus on sales and growing
              your customer base in the UK, USA, Pakistan, or anywhere globally.
            </p>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Unlike a standard IPTV subscription (end-user), an{" "}
              <strong style={{ color: "var(--text-primary)" }}>IPTV reseller panel</strong> gives you
              full control over pricing, packages, and customer accounts — turning you into the provider.
            </p>

            <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "1rem" }}>
              As an IPTV reseller, you control:
            </p>
            <ul className="check-list" style={{ marginBottom: "2rem" }}>
              {controls.map(c => <li key={c}>{c}</li>)}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="business-start-cta"
              className="btn-primary"
              aria-label="Start your IPTV reseller business on WhatsApp"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "0.85rem 1.75rem", borderRadius: 10,
                textDecoration: "none", fontSize: "0.95rem", fontWeight: 700,
                position: "relative", overflow: "hidden",
              }}
            >
              Start IPTV Reseller Business
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </a>
          </div>

          {/* Right: Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {steps.map((step, i) => (
              <div key={step.step} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem",
                    boxShadow: "0 0 20px rgba(139,92,246,0.3)",
                  }} aria-hidden="true">
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{
                      width: 2, height: 40, marginTop: 8,
                      background: "linear-gradient(180deg, rgba(139,92,246,0.4), transparent)",
                    }} />
                  )}
                </div>

                <div className="glass-card" style={{
                  flex: 1, borderRadius: 12, padding: "1rem 1.25rem",
                }}>
                  <div style={{
                    fontSize: "0.7rem", fontWeight: 700, color: "var(--accent-purple)",
                    letterSpacing: "0.08em", marginBottom: 4,
                  }}>
                    STEP {step.step}
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 4, fontSize: "0.95rem" }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .business-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}

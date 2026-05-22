const features = [
  {
    icon: "⚡",
    title: "Instant IPTV Reseller Credits",
    desc: "Buy IPTV reseller credits instantly after approval. Bulk credit packages available for all business sizes — from starter to wholesale volume.",
    color: "#f59e0b",
  },
  {
    icon: "📡",
    title: "4K IPTV Servers — No Buffering",
    desc: "Access stable IPTV servers with 99.9% uptime, engineered for 4K and 8K no-buffering streaming. Best-in-class IPTV server uptime reliability.",
    color: "#8b5cf6",
  },
  {
    icon: "📺",
    title: "20+ White Label IPTV Panels",
    desc: "Choose from leading IPTV reseller dashboards — Strong 4K, Lion OTT, Mega OTT, Crystal, Nexon, and more. Xtream Codes, M3U & MAG box supported.",
    color: "#3b82f6",
  },
  {
    icon: "💰",
    title: "High IPTV Reseller Profit Margin",
    desc: "Control your own pricing, customer packages, and subscription plans. The IPTV credit system ensures predictable costs and maximized margins.",
    color: "#22c55e",
  },
  {
    icon: "🖥️",
    title: "Professional IPTV Dashboard Management",
    desc: "Manage users, credits, subscriptions, trials, and devices from a modern IPTV reseller panel — with real-time analytics and bulk import tools.",
    color: "#06b6d4",
  },
  {
    icon: "💬",
    title: "24/7 WhatsApp Reseller Support",
    desc: "Fast reseller assistance, technical panel guidance, and personalized IPTV reseller onboarding support — available around the clock via WhatsApp.",
    color: "#ec4899",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-label="Why Choose Fox IPTV Panels — IPTV Reseller Panel Features"
      style={{
        padding: "6rem 0",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>Why Fox IPTV Panels</div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}>
            Why IPTV Resellers Choose{" "}
            <span className="gradient-text">Fox IPTV Panels</span> in 2026
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: 580, margin: "0 auto" }}>
            Everything you need to launch and scale a profitable IPTV reselling business —
            from cheapest IPTV reseller panel access to enterprise-grade wholesale panel management.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.25rem",
        }}>
          {features.map((feature) => (
            <article
              key={feature.title}
              className="glass-card"
              style={{
                borderRadius: 14,
                padding: "1.75rem",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                background: `linear-gradient(135deg, ${feature.color}0a 0%, rgba(255,255,255,0.02) 100%)`,
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                background: `${feature.color}18`,
                border: `1px solid ${feature.color}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem",
              }} aria-hidden="true">
                {feature.icon}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {feature.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: "💡", text: "Low startup — no large investment" },
  { icon: "⚡", text: "Fast IPTV reseller panel setup" },
  { icon: "🔄", text: "Recurring monthly income stream" },
  { icon: "📡", text: "Stable 4K IPTV servers" },
  { icon: "📺", text: "20+ IPTV panel options" },
  { icon: "🎓", text: "IPTV reseller onboarding support" },
  { icon: "📈", text: "Scalable IPTV reselling business" },
  { icon: "🌍", text: "Global — UK, USA, EU & more" },
  { icon: "🎬", text: "4K & 8K no-buffering streaming" },
  { icon: "🖥️", text: "White label reseller dashboards" },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-label="Benefits of Fox IPTV Reseller Program"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      <div className="section-container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="benefits-grid">

          {/* Left */}
          <div>
            <div className="tag" style={{ marginBottom: "1.25rem" }}>IPTV Reseller Program</div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
              color: "var(--text-primary)",
            }}>
              Benefits of Joining Our{" "}
              <span className="gradient-text">IPTV Reseller Program</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Fox IPTV Panels gives every level of{" "}
              <strong style={{ color: "var(--text-primary)" }}>IPTV reseller</strong> — from first-time
              starters to large wholesale panel operators — a competitive edge.
              Our <strong style={{ color: "var(--text-primary)" }}>IPTV reseller program</strong> is
              designed for maximum profit and minimum friction. No servers to manage.
              No technical infrastructure needed.
              Start as a beginner <strong style={{ color: "var(--text-primary)" }}>IPTV sub reseller</strong> and
              scale to a full IPTV reselling business.
            </p>

            {/* Large stat */}
            <div style={{
              display: "flex",
              gap: "2rem",
              padding: "1.5rem",
              background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.05))",
              borderRadius: 14,
              border: "1px solid rgba(139,92,246,0.2)",
            }}>
              {[
                { label: "IPTV Reseller Panels", value: "20+" },
                { label: "Server Uptime", value: "99.9%" },
                { label: "WhatsApp Support", value: "24/7" },
              ].map(stat => (
                <div key={stat.label} style={{ flex: 1, textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900, fontSize: "1.8rem",
                    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Benefits grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}>
            {benefits.map((b) => (
              <div
                key={b.text}
                className="glass-card"
                style={{
                  borderRadius: 10,
                  padding: "0.875rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }} aria-hidden="true">{b.icon}</span>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .benefits-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}

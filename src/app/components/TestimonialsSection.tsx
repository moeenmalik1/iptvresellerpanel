const testimonials = [
  {
    quote: "Best IPTV reseller panel I've used. Fast support, stable servers, and no buffering at all. My customers in the UK love it.",
    name: "Ahmed R.",
    role: "IPTV Reseller — UK",
    stars: 5,
    initials: "AR",
    color: "#8b5cf6",
  },
  {
    quote: "Easy to start even without previous experience. The IPTV credit system is simple — buy credits, create subscriptions, earn profit. Brilliant.",
    name: "Carlos M.",
    role: "IPTV Reseller — Spain",
    stars: 5,
    initials: "CM",
    color: "#3b82f6",
  },
  {
    quote: "Strong uptime, reliable IPTV credits delivery, and a clean white label dashboard. My customers across Pakistan are fully satisfied.",
    name: "Liam K.",
    role: "IPTV Reseller — UK & Pakistan",
    stars: 5,
    initials: "LK",
    color: "#06b6d4",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="IPTV Reseller Reviews — What Resellers Say About Fox IPTV Panels"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>IPTV Reseller Reviews</div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}>
            What IPTV Resellers Say About{" "}
            <span className="gradient-text">Fox IPTV Panels</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="glass-card"
              style={{
                borderRadius: 16,
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                background: `linear-gradient(135deg, ${t.color}0a, rgba(255,255,255,0.02))`,
                borderColor: `${t.color}22`,
              }}
            >
              {/* Stars */}
              <div className="stars" style={{ fontSize: "1rem" }} aria-label={`${t.stars} out of 5 stars`}>
                {"★".repeat(t.stars)}
              </div>

              {/* Quote */}
              <blockquote style={{
                fontSize: "1.05rem",
                color: "var(--text-primary)",
                lineHeight: 1.7,
                fontStyle: "italic",
                flex: 1,
                margin: 0,
              }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: "0.85rem", color: "white",
                  flexShrink: 0,
                }} aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

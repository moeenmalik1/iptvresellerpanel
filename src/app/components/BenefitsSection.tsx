import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

export default function BenefitsSection() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).benefitsSection;

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
            <div className="tag" style={{ marginBottom: "1.25rem" }}>{t.tag}</div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
              color: "var(--text-primary)",
            }}>
              {t.titleMain}
              <span className="gradient-text">{t.titleSpan}</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              {t.desc}
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
              {t.stats.map(stat => (
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
            {t.items.map((b) => (
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

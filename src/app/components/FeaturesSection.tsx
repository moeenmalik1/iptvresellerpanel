import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

export default function FeaturesSection() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).featuresSection;

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
            {t.titleEnd}
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: 580, margin: "0 auto" }}>
            {t.desc}
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.25rem",
        }}>
          {t.items.map((feature) => (
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

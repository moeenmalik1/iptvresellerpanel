import Link from "next/link";
import { useTranslations } from "next-intl";

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

export default function AboutSection() {
  const t = useTranslations("about");

  const features = [
    t("feature1"),
    t("feature2"),
    t("feature3"),
    t("feature4"),
    t("feature5"),
    t("feature6"),
    t("feature7"),
  ];

  return (
    <section
      id="about"
      aria-label="What Is Fox IPTV Panels — IPTV Reseller Panel Provider"
      style={{ padding: "6rem 0", position: "relative", overflow: "hidden" }}
    >
      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="about-grid">

          {/* Left: Text */}
          <div>
            <div className="tag" style={{ marginBottom: "1.25rem" }}>
              {t("tag")}
            </div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: "var(--text-primary)",
            }}>
              {t("title1")}{" "}
              <span className="gradient-text">{t("title2")}</span> {t("title3")}
            </h2>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              {t("desc1")}
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
              {t("desc2")}
            </p>

            <p style={{ color: "var(--text-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
              {t("listHeader")}
            </p>

            <ul className="check-list" style={{ marginBottom: "2rem" }}>
              {features.map(f => <li key={f}>{f}</li>)}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="about-become-reseller-cta"
              className="btn-primary"
              aria-label="Become an IPTV reseller with Fox IPTV Panels"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "0.85rem 1.75rem", borderRadius: 10,
                textDecoration: "none", fontSize: "0.95rem", fontWeight: 700,
                position: "relative", overflow: "hidden",
              }}
            >
              {t("cta")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </a>
          </div>

          {/* Right: Visual cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                icon: "🚀",
                title: t("card1Title"),
                desc: t("card1Desc"),
                color: "#8b5cf6",
              },
              {
                icon: "💰",
                title: t("card2Title"),
                desc: t("card2Desc"),
                color: "#3b82f6",
              },
              {
                icon: "📊",
                title: t("card3Title"),
                desc: t("card3Desc"),
                color: "#06b6d4",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="glass-card"
                style={{
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  background: "var(--gradient-card)",
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: `${card.color}22`,
                  border: `1px solid ${card.color}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.25rem",
                }} aria-hidden="true">
                  {card.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 4, fontSize: "0.9rem" }}>{card.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}

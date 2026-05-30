import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

export default function BusinessSection() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).businessSection;

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
            <div className="tag" style={{ marginBottom: "1.25rem" }}>{t.tag}</div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: "var(--text-primary)",
            }}>
              {t.titleMain}
              <span className="gradient-text">{t.titleSpan}</span>
            </h2>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              {t.desc1}
            </p>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
              {t.desc2}
            </p>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              {t.desc3}
            </p>

            <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "1rem" }}>
              {t.controlLabel}
            </p>
            <ul className="check-list" style={{ marginBottom: "2rem" }}>
              {t.controls.map(c => <li key={c}>{c}</li>)}
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
              {t.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </a>
          </div>

          {/* Right: Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {t.steps.map((step, i) => (
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
                  {i < t.steps.length - 1 && (
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

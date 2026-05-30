import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

export default function TrustBar() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).trustBar;

  return (
    <section
      id="trust-bar"
      aria-label="Fox IPTV Panels — Key Stats & Trust Signals"
      style={{
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
        background: "rgba(255,255,255,0.02)",
        padding: "1.5rem 0",
        overflow: "hidden",
      }}
    >
      <div className="section-container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
        }}>
          {t.stats.map((stat) => (
            <div key={stat.label} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              padding: "0.5rem",
            }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "1.25rem" }} aria-hidden="true">{stat.icon}</span>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.2rem",
                    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    {stat.value}
                  </span>
                </div>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500, textAlign: "center" }}>
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

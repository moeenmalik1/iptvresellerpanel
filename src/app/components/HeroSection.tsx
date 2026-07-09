import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const WHATSAPP_URL = "https://wa.me/447463012833?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section
      id="hero"
      aria-label="IPTV Reseller Panel Provider"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--gradient-hero)",
        paddingTop: "72px",
      }}
    >
      <div className="mesh-orb mesh-orb-1" />
      <div className="mesh-orb mesh-orb-2" />
      <div className="mesh-orb mesh-orb-3" />
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1, width: "100%", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 800 }}>

          <div className="tag" style={{ marginBottom: "1.5rem" }}>
            <span>🦊</span>
            {t("tag")}
          </div>

          {/* H1 — Primary keyword first, NLP enriched */}
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h1>

          {/* Body — LSI + NLP + long-tail keywords naturally embedded */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: "0.875rem",
              maxWidth: 660,
            }}
          >
            {t("desc")}
          </p>
          <p
            style={{
              fontSize: "0.975rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: 600,
            }}
          >
            {t("trustTag")}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3.5rem" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-primary-cta"
              className="btn-primary"
              aria-label="Get your IPTV reseller panel — chat on WhatsApp"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "0.85rem 2rem", borderRadius: 10,
                textDecoration: "none", fontSize: "1rem", fontWeight: 700,
                position: "relative", overflow: "hidden",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              {t("ctaStart")}
            </a>
            <Link
              href={`/${locale}/comparisons`}
              id="hero-secondary-cta"
              className="btn-secondary"
              aria-label="Compare best IPTV reseller panels for 2026"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "0.85rem 2rem", borderRadius: 10,
                textDecoration: "none", fontSize: "1rem",
              }}
            >
              {t("ctaPanels")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div
          style={{
            position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)",
            width: "45%", maxWidth: 580, opacity: 0.85,
            display: "flex", flexDirection: "column", gap: 12, padding: "1rem", pointerEvents: "none",
          }}
          className="hero-mockup"
          aria-hidden="true"
        >
          <DashboardMockup />
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .hero-mockup { display: none !important; } }
      `}</style>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="glass-card" style={{
      borderRadius: 16, overflow: "hidden",
      border: "1px solid rgba(139,92,246,0.25)",
      boxShadow: "0 0 60px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
    }}>
      <div style={{
        background: "rgba(0,0,0,0.4)", padding: "0.75rem 1rem",
        display: "flex", alignItems: "center", gap: 8,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ef4444","#f59e0b","#22c55e"].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.8 }} />
          ))}
        </div>
        <div style={{
          flex: 1, marginLeft: 8, background: "rgba(255,255,255,0.05)",
          borderRadius: 4, padding: "3px 10px", fontSize: "0.7rem", color: "var(--text-muted)",
        }}>
          panel.foxiptvpanels.com/dashboard
        </div>
      </div>
      <div style={{ padding: "1.25rem", background: "rgba(8,10,18,0.6)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
          {[
            { label: "Active Users", value: "2,847", color: "#8b5cf6" },
            { label: "Credits", value: "15,430", color: "#3b82f6" },
            { label: "Revenue", value: "$8,920", color: "#22c55e" },
          ].map(stat => (
            <div key={stat.label} style={{
              background: "rgba(255,255,255,0.04)", borderRadius: 8,
              padding: "0.75rem", border: `1px solid ${stat.color}22`,
            }}>
              <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", marginBottom: 4 }}>{stat.label}</div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: stat.color }}>{stat.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, overflow: "hidden" }}>
          {[
            { user: "user_4821", plan: "1 Month", status: "Active", exp: "30d" },
            { user: "user_3392", plan: "3 Months", status: "Active", exp: "87d" },
            { user: "user_7711", plan: "6 Months", status: "Active", exp: "164d" },
            { user: "user_5519", plan: "1 Month", status: "Trial", exp: "3d" },
          ].map((row, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "0.6rem 0.8rem", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}>
              <span style={{ fontSize: "0.65rem", color: "var(--text-secondary)", fontFamily: "monospace" }}>{row.user}</span>
              <span style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>{row.plan}</span>
              <span style={{
                fontSize: "0.6rem", fontWeight: 600, padding: "2px 8px", borderRadius: 4,
                background: row.status === "Active" ? "rgba(34,197,94,0.15)" : "rgba(245,158,11,0.15)",
                color: row.status === "Active" ? "#22c55e" : "#f59e0b",
              }}>{row.status}</span>
              <span style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>{row.exp}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          {["Create User", "Add Credits", "Bulk Import"].map(btn => (
            <div key={btn} style={{
              flex: 1, textAlign: "center", padding: "0.4rem",
              background: "rgba(139,92,246,0.12)", borderRadius: 6,
              fontSize: "0.58rem", color: "#c4b5fd", fontWeight: 600,
              border: "1px solid rgba(139,92,246,0.2)",
            }}>{btn}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

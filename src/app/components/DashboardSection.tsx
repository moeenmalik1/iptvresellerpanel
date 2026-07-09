import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

export default function DashboardSection() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).dashboardSection;

  return (
    <section
      id="dashboard"
      aria-label="Professional IPTV Reseller Dashboard — Panel Management"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
        background: "rgba(0,0,0,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.06) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="dashboard-grid">

          {/* Left: Dashboard mockup */}
          <div aria-hidden="true">
            <DashboardFullMockup mockup={t.mockup} />
          </div>

          {/* Right: Features */}
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
              {t.titleEnd}
            </h2>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
              {t.desc1}
            </p>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
              {t.desc2}
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}>
              {t.features.map((f) => (
                <div key={f.label} className="glass-card" style={{
                  borderRadius: 10,
                  padding: "0.75rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}>
                  <span style={{ fontSize: "1.1rem" }} aria-hidden="true">{f.icon}</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)" }}>{f.label}</span>
                </div>
              ))}
            </div>

            {/* Uptime indicator */}
            <div className="glass-card" style={{
              borderRadius: 12, padding: "1rem 1.25rem",
              display: "flex", alignItems: "center", gap: "1rem",
              background: "rgba(34,197,94,0.06)",
              borderColor: "rgba(34,197,94,0.2)",
            }}>
              <div className="pulse-dot" />
              <div>
                <div style={{ fontWeight: 700, color: "#22c55e", fontSize: "0.9rem" }}>
                  {t.uptimeTitle}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  {t.uptimeDesc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dashboard-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function DashboardFullMockup({ mockup }: { mockup: any }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        position: "absolute", inset: -20,
        background: "radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 70%)",
        filter: "blur(20px)",
      }} />

      <div className="glass-card" style={{
        borderRadius: 16, overflow: "hidden",
        border: "1px solid rgba(139,92,246,0.2)",
        boxShadow: "0 0 80px rgba(139,92,246,0.15)",
        position: "relative",
      }}>
        <div style={{ display: "flex", height: 380 }}>
          {/* Sidebar */}
          <div style={{
            width: 56, background: "rgba(0,0,0,0.4)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: 16, padding: "16px 0",
          }}>
            {["🏠","👥","💳","📊","⚙️"].map((icon, i) => (
              <div key={i} style={{
                width: 32, height: 32, borderRadius: 8,
                background: i === 0 ? "rgba(139,92,246,0.3)" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.9rem", cursor: "pointer",
              }}>
                {icon}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div style={{ flex: 1, padding: "1rem", background: "rgba(8,10,18,0.7)", overflowY: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)" }}>{mockup.title}</span>
              <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: "0.65rem", color: "#22c55e", fontWeight: 600 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                {mockup.live}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
              {[
                { label: mockup.users, value: "2,847", delta: "+12%", color: "#8b5cf6" },
                { label: mockup.credits, value: "15.4K", delta: "+5%", color: "#3b82f6" },
                { label: mockup.revenue, value: "$8.9K", delta: "+18%", color: "#22c55e" },
              ].map(s => (
                <div key={s.label} style={{
                  background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "0.6rem",
                  border: `1px solid ${s.color}22`,
                }}>
                  <div style={{ fontSize: "0.55rem", color: "var(--text-muted)", marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: "0.5rem", color: "#22c55e", marginTop: 2 }}>{s.delta}</div>
                </div>
              ))}
            </div>

            <div style={{
              background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "0.75rem",
              marginBottom: 12, height: 80, position: "relative", overflow: "hidden",
            }}>
              <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", marginBottom: 8 }}>{mockup.chartLabel}</div>
              <svg viewBox="0 0 200 40" style={{ width: "100%", height: 40 }}>
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,35 L28,28 L56,22 L84,18 L112,24 L140,12 L168,8 L200,5" stroke="#8b5cf6" strokeWidth="1.5" fill="none"/>
                <path d="M0,35 L28,28 L56,22 L84,18 L112,24 L140,12 L168,8 L200,5 L200,40 L0,40 Z" fill="url(#chartGrad)"/>
              </svg>
            </div>

            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, overflow: "hidden" }}>
              {[
                { user: "user_4821", status: "Active", days: "30d", color: "#22c55e" },
                { user: "user_3392", status: "Active", days: "87d", color: "#22c55e" },
                { user: "user_5519", status: "Trial", days: "3d", color: "#f59e0b" },
              ].map((row, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "0.45rem 0.75rem",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}>
                  <span style={{ fontSize: "0.65rem", color: "var(--text-secondary)", fontFamily: "monospace" }}>{row.user}</span>
                  <span style={{
                    fontSize: "0.55rem", fontWeight: 700, padding: "1px 6px", borderRadius: 3,
                    background: `${row.color}18`, color: row.color,
                  }}>{row.status}</span>
                  <span style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>{row.days}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              {[mockup.btn1, mockup.btn2, mockup.btn3].map(btn => (
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
      </div>
    </div>
  );
}

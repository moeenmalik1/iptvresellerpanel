import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

const features = [
  "White label IPTV reseller dashboard",
  "Instant credit activation",
  "Stable 4K & 8K no-buffering servers",
  "Flexible IPTV credit system",
  "Dedicated WhatsApp support 24/7",
  "20+ IPTV panel choices (Xtream Codes & M3U)",
];

export default function AboutSection() {
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
              About Fox IPTV Panels
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
              What Is an{" "}
              <span className="gradient-text">IPTV Reseller Panel</span> &mdash; And How Fox IPTV Panels Works
            </h2>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Fox IPTV Panels is a leading <strong style={{ color: "var(--text-primary)" }}>IPTV reseller panel provider</strong> that
              helps entrepreneurs start and scale their IPTV reselling business. We offer access to 20+ premium
              IPTV panels — all with white label reseller dashboards, bulk credit packages,
              and high-uptime IPTV servers optimized for 4K streaming.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Whether you are a beginner learning{" "}
              <strong style={{ color: "var(--text-primary)" }}>how to start an IPTV reseller business</strong> or
              an experienced <strong style={{ color: "var(--text-primary)" }}>IPTV sub reseller</strong> looking
              for a better wholesale panel — our platform gives you instant access to Xtream Codes and
              M3U-compatible IPTV dashboards, instant credits, customer management tools, and MAG box support.
            </p>

            <p style={{ color: "var(--text-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
              We simplify IPTV reselling with:
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
              Become an IPTV Reseller
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
                title: "Launch Fast — IPTV Reseller Panel Login in Minutes",
                desc: "Get instant access to your IPTV reseller panel. Create subscriptions for customers within minutes of joining — no technical setup needed.",
                color: "#8b5cf6",
              },
              {
                icon: "💰",
                title: "High IPTV Reseller Profit Margins",
                desc: "Buy wholesale IPTV credits in bulk, sell subscriptions at your own pricing, and keep all the profit margin. The more credits you buy, the better your margins.",
                color: "#3b82f6",
              },
              {
                icon: "📊",
                title: "Full IPTV Dashboard Management",
                desc: "Manage all customers, credits, trial subscriptions, and packages from one centralized IPTV reseller dashboard with real-time analytics.",
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

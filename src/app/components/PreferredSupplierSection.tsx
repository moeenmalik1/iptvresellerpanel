import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

export default function PreferredSupplierSection() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).preferredSupplierSection;

  // Emojis for each of the 9 items
  const itemIcons = ["🛡️", "🖥️", "⚡", "📦", "🚀", "👥", "💬", "🌍", "📈"];

  return (
    <section
      id="preferred-supplier"
      aria-label={t.tag}
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
        background: "rgba(255, 255, 255, 0.02)",
        position: "relative",
      }}
    >
      {/* Decorative Background Mesh Orb */}
      <div 
        className="mesh-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%)",
          bottom: "10%",
          right: "10%",
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="tag" style={{ marginBottom: "1.25rem" }}>
            {t.tag}
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
            color: "var(--text-primary)",
          }}>
            {t.titleMain}
            <span className="gradient-text">{t.titleSpan}</span>
          </h2>
          <p style={{ 
            color: "var(--text-secondary)", 
            lineHeight: 1.8, 
            fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" 
          }}>
            {t.desc}
          </p>
        </div>

        {/* 3x3 Grid of Glass Cards */}
        <div className="supplier-grid">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="glass-card supplier-card"
              style={{
                borderRadius: 16,
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card Hover Glow Backer */}
              <div 
                className="card-glow"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at top left, rgba(139, 92, 246, 0.15), transparent 50%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  pointerEvents: "none",
                }}
              />

              {/* Icon Container */}
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)",
                border: "1px solid rgba(139, 92, 246, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                position: "relative",
                zIndex: 1,
              }}>
                {itemIcons[index] || "✨"}
              </div>

              {/* Content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  fontSize: "0.9rem",
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive styles */}
      <style>{`
        .supplier-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        
        .supplier-card:hover .card-glow {
          opacity: 1 !important;
        }

        @media (max-width: 1024px) {
          .supplier-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .supplier-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .supplier-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";
import { PanelLogo } from "./PanelLogos";
import Link from "next/link";

export default function PopularPanelsSection() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).popularPanelsSection;

  // Slugs corresponding to each item to render their respective logos
  const slugs = [
    "geo-iptv-reseller-panel",
    "dino-iptv-reseller-panel",
    "trex-ott-iptv-reseller-panel", // Fallback for Falcon logo
    "strong-4k-iptv-reseller-panel",
    "lion-ott-iptv-reseller-panel"
  ];

  // Links corresponding to each panel page
  const links = [
    `/${locale}/geo-iptv-reseller-panel`,
    `/${locale}/dino-iptv-reseller-panel`,
    `/${locale}#pricing`, // Falcon doesn't have a detail page, fallback to pricing section
    `/${locale}/strong-4k-iptv-reseller-panel`,
    `/${locale}/lion-ott-iptv-reseller-panel`
  ];

  // Specific accent colors for each card
  const colors = ["#3b82f6", "#06b6d4", "#ef4444", "#3b82f6", "#22c55e"];

  return (
    <section
      id="popular-panels"
      aria-label={t.tag}
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
        background: "rgba(0, 0, 0, 0.15)",
        position: "relative",
      }}
    >
      <div className="section-container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
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

        {/* Grid of 5 Cards */}
        <div className="popular-grid">
          {t.items.map((item, index) => {
            const color = colors[index] || "#8b5cf6";
            const slug = slugs[index];
            const link = links[index];
            return (
              <Link
                key={index}
                href={link}
                className="glass-card popular-card"
                style={{
                  borderRadius: 16,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  background: `linear-gradient(135deg, ${color}05 0%, rgba(255, 255, 255, 0.01) 100%)`,
                  position: "relative",
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                {/* Subtle Hover Glow */}
                <div 
                  className="popular-card-glow"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at top left, ${color}12, transparent 50%)`,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* Logo Container */}
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: `${color}18`,
                  border: `1px solid ${color}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                }}>
                  {/* Custom SVG logo based on slug */}
                  <PanelLogo slug={slug} color={color} size={24} />
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
              </Link>
            );
          })}
        </div>

      </div>

      {/* Grid Layout Styling */}
      <style>{`
        .popular-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.5rem;
        }

        .popular-card {
          grid-column: span 2;
          cursor: pointer;
        }

        .popular-card:hover .popular-card-glow {
          opacity: 1 !important;
        }

        /* Center the last two cards on desktop */
        @media (min-width: 1025px) {
          .popular-grid > a:nth-child(4),
          .popular-grid > div:nth-child(4) {
            grid-column: 2 / span 2;
          }
          .popular-grid > a:nth-child(5),
          .popular-grid > div:nth-child(5) {
            grid-column: 4 / span 2;
          }
        }

        @media (max-width: 1024px) {
          .popular-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .popular-card {
            grid-column: span 1 !important;
          }
        }

        @media (max-width: 640px) {
          .popular-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .popular-card {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

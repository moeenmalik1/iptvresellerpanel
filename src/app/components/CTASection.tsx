import Link from "next/link";
import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

export default function CTASection() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).ctaSection;

  return (
    <section
      id="final-cta"
      aria-label="Start Your IPTV Reseller Business — Get Your Panel Today"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.15) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Glow orb */}
        <div style={{
          width: 200, height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)",
          margin: "0 auto -80px",
          filter: "blur(40px)",
          pointerEvents: "none",
        }} aria-hidden="true" />

        <div style={{ position: "relative" }}>
          <div className="tag" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
            {t.tag}
          </div>

          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            marginBottom: "1.25rem",
          }}>
            {t.titleMain}
            <span className="gradient-text">{t.titleSpan}</span>
          </h2>

          <p style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            maxWidth: 660,
            margin: "0 auto 1rem",
          }}>
            {t.desc1}
          </p>

          <p style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto 3rem",
          }}>
            {t.desc2}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="final-whatsapp-cta"
              className="btn-primary"
              aria-label="Start your IPTV reseller business on WhatsApp — Fox IPTV Panels"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "1rem 2.25rem", borderRadius: 12,
                textDecoration: "none", fontSize: "1.05rem", fontWeight: 700,
                position: "relative", overflow: "hidden",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              {t.btnPrimary}
            </a>

            <Link
              href={`/${locale}/comparisons`}
              id="final-compare-cta"
              className="btn-secondary"
              aria-label="Compare IPTV reseller panels — find the best IPTV panel for 2026"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "1rem 2.25rem", borderRadius: 12,
                textDecoration: "none", fontSize: "1.05rem",
              }}
            >
              {t.btnSecondary}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </Link>
          </div>

          {/* Trust mini badges */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center",
            marginTop: "3rem",
          }}>
            {t.badges.map(b => (
              <div key={b.text} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "0.5rem 1rem",
                background: "rgba(255,255,255,0.04)",
                borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)",
                fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 500,
              }}>
                <span aria-hidden="true">{b.icon}</span> {b.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

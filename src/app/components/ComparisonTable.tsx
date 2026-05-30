import Link from "next/link";
import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

export default function ComparisonTable() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).comparisonTable;

  return (
    <section
      id="comparison"
      aria-label="IPTV Reseller Panel Comparison 2026 — Best IPTV Panels for Resellers"
      style={{
        padding: "6rem 0",
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
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: 620, margin: "0 auto" }}>
            {t.desc}
          </p>
        </div>

        {/* Table */}
        <div className="glass-card" style={{ borderRadius: 14, overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table className="compare-table" style={{ minWidth: 600 }}>
              <caption style={{ display: "none" }}>
                IPTV Reseller Panel Comparison — Best IPTV Panels for Resellers 2026
              </caption>
              <thead>
                <tr style={{ background: "rgba(139,92,246,0.08)" }}>
                  <th scope="col">{t.cols.panel}</th>
                  <th scope="col">{t.cols.quality}</th>
                  <th scope="col">{t.cols.support}</th>
                  <th scope="col">{t.cols.dashboard}</th>
                  <th scope="col">{t.cols.bestFor}</th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row) => (
                  <tr key={row.panel}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 8, height: 8, borderRadius: "50%",
                          background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                        }} />
                        <Link
                          href={`/${locale}/${row.slug}`}
                          style={{
                            fontWeight: 700, color: "var(--text-primary)",
                            textDecoration: "none", transition: "color 0.2s",
                          }}
                          aria-label={`${row.panel} IPTV reseller panel — view details`}
                        >
                          {row.panel}
                        </Link>
                        {row.badge && (
                          <span style={{
                            fontSize: "0.65rem", fontWeight: 700,
                            padding: "2px 8px", borderRadius: 4,
                            background: "rgba(139,92,246,0.2)",
                            color: "#c4b5fd",
                            border: "1px solid rgba(139,92,246,0.3)",
                          }}>
                            {row.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <span style={{
                        fontWeight: 600,
                        background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}>
                        {row.quality}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{row.support}</span>
                      </div>
                    </td>
                    <td style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{row.dashboard}</td>
                    <td style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link
            href={`/${locale}/comparisons`}
            id="comparison-view-all-cta"
            className="btn-primary"
            aria-label="Compare all IPTV reseller panels — full comparison 2026"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "0.85rem 2rem", borderRadius: 10,
              textDecoration: "none", fontSize: "0.95rem", fontWeight: 700,
              position: "relative", overflow: "hidden",
            }}
          >
            {t.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { PanelLogo } from "./PanelLogos";

const panels = [
  { name: "B1G", slug: "b1g-iptv-reseller-panel", color: "#8b5cf6" },
  { name: "Strong 4K", slug: "strong-4k-iptv-reseller-panel", color: "#3b82f6" },
  { name: "Strong 8K", slug: "strong-8k-iptv-reseller-panel", color: "#a855f7" },
  { name: "4K OTT", slug: "4k-ott-iptv-reseller-panel", color: "#06b6d4" },
  { name: "Lion OTT", slug: "lion-ott-iptv-reseller-panel", color: "#22c55e" },
  { name: "Ultra 8K OTT", slug: "ultra-8k-ott-iptv-reseller-panel", color: "#f59e0b" },
  { name: "Dino IPTV", slug: "dino-iptv-reseller-panel", color: "#06b6d4" },
  { name: "T-Rex OTT", slug: "trex-ott-iptv-reseller-panel", color: "#ef4444" },
  { name: "Mega OTT", slug: "mega-ott-iptv-reseller-panel", color: "#3b82f6" },
  { name: "Extra OTT", slug: "extra-ott-iptv-reseller-panel", color: "#06b6d4" },
  { name: "Max OTT", slug: "max-ott-iptv-reseller-panel", color: "#ec4899" },
  { name: "Zen 4K", slug: "zen-4k-iptv-reseller-panel", color: "#06b6d4" },
  { name: "Nexon", slug: "nexon-iptv-reseller-panel", color: "#8b5cf6" },
  { name: "Infinity Premium", slug: "infinity-premium-iptv-reseller-panel", color: "#f59e0b" },
  { name: "GTV", slug: "gtv-iptv-reseller-panel", color: "#22c55e" },
  { name: "Crystal OTT", slug: "crystal-ott-iptv-reseller-panel", color: "#06b6d4" },
  { name: "Star Share", slug: "starshare-iptv-reseller-panel", color: "#f59e0b" },
  { name: "Tiger OTT", slug: "tiger-ott-iptv-reseller-panel", color: "#f59e0b" },
  { name: "Opplex", slug: "opplex-iptv-reseller-panel", color: "#ec4899" },
  { name: "GEO IPTV", slug: "geo-iptv-reseller-panel", color: "#3b82f6" },
  { name: "5G Live", slug: "5g-live-iptv-reseller-panel", color: "#06b6d4" },
  { name: "Magnum Golden OTT", slug: "magnum-golden-ott-iptv-reseller-panel", color: "#f59e0b" },
];

export default function PanelsGrid() {
  const locale = useLocale();

  return (
    <section
      id="panels"
      aria-label="Top IPTV Reseller Panels — Best IPTV Panels for Resellers 2026"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>Top IPTV Servers List 2026</div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}>
            Best IPTV Reseller Panels &amp;{" "}
            <span className="gradient-text">Top IPTV Servers 2026</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: 640, margin: "0 auto" }}>
            Browse our curated list of the best IPTV panels for resellers — each supporting Xtream Codes,
            M3U reseller panel access, and MAG box compatibility. Click any panel to view full reseller details,
            features, and credit pricing.
          </p>
        </div>

        {/* Panel Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "0.875rem",
          marginBottom: "3rem",
        }}>
          {panels.map((panel) => (
            <Link
              key={panel.slug}
              href={`/${locale}/${panel.slug}`}
              style={{ textDecoration: "none" }}
              aria-label={`${panel.name} IPTV reseller panel — view features and credits`}
              title={`${panel.name} IPTV Reseller Panel — Get credits & reseller dashboard`}
            >
              <div className="glass-card" style={{
                borderRadius: 10,
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                textAlign: "center",
                background: `linear-gradient(135deg, ${panel.color}08, rgba(255,255,255,0.02))`,
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 8,
                  background: `${panel.color}18`,
                  border: `1px solid ${panel.color}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }} aria-hidden="true">
                  <PanelLogo slug={panel.slug} color={panel.color} size={20} />
                </div>
                <span style={{
                  fontSize: "0.78rem", fontWeight: 700,
                  color: "var(--text-secondary)",
                  lineHeight: 1.3,
                }}>
                  {panel.name}
                </span>
                <span style={{
                  fontSize: "0.65rem", fontWeight: 600,
                  color: panel.color,
                  display: "flex", alignItems: "center", gap: 3,
                }}>
                  View Panel
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>
            All panels include Xtream Codes, M3U & MAG box support. Free trial available.
          </p>
          <Link
            href={`/${locale}#pricing`}
            id="panels-view-pricing-cta"
            className="btn-primary"
            aria-label="Buy IPTV reseller credits — view pricing for all panels"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "0.85rem 2rem", borderRadius: 10,
              textDecoration: "none", fontSize: "0.95rem", fontWeight: 700,
              position: "relative", overflow: "hidden",
            }}
          >
            Buy IPTV Reseller Credits
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

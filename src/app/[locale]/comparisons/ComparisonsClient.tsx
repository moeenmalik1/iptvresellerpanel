"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ALL_PANELS } from "@/app/lib/panelData";
import { useLocale } from "next-intl";

export default function ComparisonsClient() {
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
  const [qualityFilter, setQualityFilter] = useState("All");

  const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

  // Get unique filter values
  const qualities = useMemo(() => {
    const set = new Set<string>();
    ALL_PANELS.forEach(p => {
      if (p.qualityBadge) set.add(p.qualityBadge);
    });
    return ["All", ...Array.from(set)];
  }, []);

  // Filter panels
  const filteredPanels = useMemo(() => {
    return ALL_PANELS.filter(panel => {
      const matchesSearch = panel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        panel.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        panel.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesQuality = qualityFilter === "All" || panel.qualityBadge === qualityFilter;

      return matchesSearch && matchesQuality;
    });
  }, [searchQuery, qualityFilter]);

  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "110px", position: "relative" }}>
      {/* Background Mesh Orbs */}
      <div className="mesh-orb mesh-orb-1" style={{ top: "0px", left: "0px" }} />
      <div className="mesh-orb mesh-orb-2" style={{ top: "400px", right: "0px" }} />

      {/* Hero Section */}
      <section style={{ padding: "4rem 0 2rem", position: "relative", zIndex: 1 }}>
        <div className="section-container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
            <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
              {locale === "es" ? "Inicio" : "Home"}
            </Link>
            <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text-secondary)" }}>
              {locale === "es" ? "Comparar Paneles IPTV" : "Compare IPTV Panels"}
            </span>
          </nav>

          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
            <div className="tag" style={{ marginBottom: "1rem" }}>
              {locale === "es" ? "Comparativa y Gestión de Paneles IPTV" : "IPTV Panel Management & Comparison"}
            </div>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem"
            }}>
              {locale === "es" ? (
                <>Compare los Mejores <span className="gradient-text">Paneles IPTV</span> Lado a Lado</>
              ) : (
                <>Compare the Best <span className="gradient-text">IPTV Reseller Panels</span> Side-by-Side</>
              )}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
              {locale === "es"
                ? "Maximice los márgenes de beneficio de su negocio de revendedor de IPTV eligiendo el panel de control perfecto para su público objetivo. Filtre y compare nuestros 22 servidores mayoristas."
                : "Maximize your iptv reseller business profit margins by choosing the perfect dashboard for your target audience. Filter and compare our 22 wholesale servers based on streaming quality, uptime guarantees, MAG box compatibility, and device versatility."}
            </p>
          </div>

          {/* Filter Dashboard Card */}
          <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", marginBottom: "3rem", position: "relative", zIndex: 10 }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.25rem", alignItems: "center" }} className="panel-hero-grid">
              {/* Search */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="search" style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  {locale === "es" ? "Buscar Paneles" : "Search Panels"}
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder={locale === "es" ? "Buscar por nombre de panel o característica..." : "Search by panel name or feature..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    padding: "0.6rem 1rem",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                />
              </div>

              {/* Quality Filter */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="quality" style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  {locale === "es" ? "Clasificación de Calidad" : "Quality Rating"}
                </label>
                <select
                  id="quality"
                  value={qualityFilter}
                  onChange={(e) => setQualityFilter(e.target.value)}
                  style={{
                    background: "rgba(9, 13, 22, 0.98)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    padding: "0.6rem 1rem",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  {qualities.map(q => (
                    <option key={q} value={q}>{q === "All" ? (locale === "es" ? "Todas las Calidades" : "All Qualities") : q}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Status Bar */}
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <span>
                {locale === "es" 
                  ? `Mostrando ${filteredPanels.length} de ${ALL_PANELS.length} paneles premium`
                  : `Showing ${filteredPanels.length} of ${ALL_PANELS.length} premium panels`}
              </span>
              {(searchQuery || qualityFilter !== "All") && (
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setQualityFilter("All");
                  }}
                  style={{ background: "none", border: "none", color: "var(--accent-purple)", cursor: "pointer", fontWeight: 600 }}
                >
                  {locale === "es" ? "Limpiar Filtros" : "Clear Filters"}
                </button>
              )}
            </div>
          </div>

          {/* Comparison Table Section */}
          <div style={{ overflowX: "auto", width: "100%", borderRadius: "12px", border: "1px solid var(--border-color)", background: "rgba(255,255,255,0.01)", backdropFilter: "blur(10px)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)", background: "rgba(255,255,255,0.02)" }}>
                  <th style={{ padding: "1.25rem", textAlign: "left", color: "var(--text-primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>Panel Name</th>
                  <th style={{ padding: "1.25rem", textAlign: "left", color: "var(--text-primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>Quality</th>
                  <th style={{ padding: "1.25rem", textAlign: "left", color: "var(--text-primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>Connections</th>
                  <th style={{ padding: "1.25rem", textAlign: "left", color: "var(--text-primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>Uptime</th>
                  <th style={{ padding: "1.25rem", textAlign: "left", color: "var(--text-primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>Support</th>
                  <th style={{ padding: "1.25rem", textAlign: "left", color: "var(--text-primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>Dashboard</th>
                  <th style={{ padding: "1.25rem", textAlign: "left", color: "var(--text-primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>Best For</th>
                  <th style={{ padding: "1.25rem", textAlign: "center", color: "var(--text-primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPanels.map((panel) => {
                  const uptime = panel.specs.find(s => s.label === "Server Uptime")?.value || "99.9%";
                  const connections = panel.specs.find(s => s.label === "Connection Types")?.value || "Xtream, M3U";
                  const support = panel.specs.find(s => s.label === "Support")?.value || "24/7";
                  
                  return (
                    <tr key={panel.slug} style={{ borderBottom: "1px solid var(--border-color)", transition: "background 0.2s" }} className="hover-row">
                      {/* Name */}
                      <td style={{ padding: "1.25rem", fontWeight: 700 }}>
                        <Link href={`/${locale}/${panel.slug}`} style={{ color: "var(--text-primary)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: panel.accentColor || "var(--accent-purple)" }}></span>
                          {panel.name}
                          {panel.badge && (
                            <span style={{ fontSize: "0.65rem", padding: "2px 8px", borderRadius: 4, background: `${panel.accentColor}20`, border: `1px solid ${panel.accentColor}40`, color: panel.accentColor }}>
                              {panel.badge}
                            </span>
                          )}
                        </Link>
                      </td>

                      {/* Quality */}
                      <td style={{ padding: "1.25rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                        <span className="tag" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                          {panel.qualityBadge}
                        </span>
                      </td>

                      {/* Connections */}
                      <td style={{ padding: "1.25rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                        {connections}
                      </td>

                      {/* Uptime */}
                      <td style={{ padding: "1.25rem", fontSize: "0.875rem", fontWeight: 600, color: "#22c55e" }}>
                        {uptime}
                      </td>

                      {/* Support */}
                      <td style={{ padding: "1.25rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                        {support}
                      </td>

                      {/* Dashboard Type */}
                      <td style={{ padding: "1.25rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                        {panel.dashboardType}
                      </td>

                      {/* Best For */}
                      <td style={{ padding: "1.25rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                        {panel.bestFor}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: "1.25rem", textAlign: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                          <Link href={`/${locale}/${panel.slug}`} className="btn-secondary" style={{ padding: "4px 12px", borderRadius: "6px", fontSize: "0.8rem", textDecoration: "none", display: "inline-block" }}>
                            {locale === "es" ? "Detalles" : "Details"}
                          </Link>
                          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "5px 12px", borderRadius: "6px", fontSize: "0.8rem", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                            {locale === "es" ? "Obtener Panel" : "Get Dashboard"}
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {filteredPanels.length === 0 && (
                  <tr>
                    <td colSpan={8} style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
                      {locale === "es"
                        ? "No se encontraron paneles de revendedor que coincidan con sus criterios. ¡Intente ajustar los filtros!"
                        : "No reseller panels found matching your criteria. Try adjusting your search query or filters!"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wholesale pricing banner / trust builder */}
      <section style={{ padding: "4rem 0", position: "relative", zIndex: 1 }}>
        <div className="section-container">
          <div className="glass-card" style={{ padding: "3rem", borderRadius: "24px", background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(59,130,246,0.08) 100%)", border: "1px solid var(--border-accent)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "3rem", alignItems: "center" }} className="panel-hero-grid">
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "2rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                  {locale === "es" ? "¿Listo para comprar créditos IPTV al por mayor?" : "Ready to Buy IPTV Reseller Credits in Bulk?"}
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  {locale === "es"
                    ? "Fox IPTV Panels es el proveedor líder mundial de paneles de transmisión de alta velocidad. Obtenga descuentos mayoristas en los 22 paneles con activaciones automáticas e instantáneas. Chatee con nosotros por WhatsApp para consultar las tarifas."
                    : "Fox IPTV Panels is the leading global provider of high-speed streaming dashboards. Get wholesale discounts on all 22 panels with instant automated activations. WhatsApp us to check the lowest prices on bulk credits and starter packages."}
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.8rem 1.75rem", borderRadius: "10px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    {locale === "es" ? "Comprar Créditos Ahora" : "Buy Reseller Credits Now"}
                  </a>
                  <Link href={`/${locale}/contact`} className="btn-secondary" style={{ padding: "0.8rem 1.75rem", borderRadius: "10px", textDecoration: "none", display: "inline-block" }}>
                    {locale === "es" ? "Ver Lista de Precios" : "View Price List"}
                  </Link>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "12px", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "8px", background: "rgba(34,197,94,0.15)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "#22c55e" }}>✓</div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
                      {locale === "es" ? "Activación Instantánea" : "Instant Automated Setup"}
                    </h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>
                      {locale === "es" ? "Paneles de revendedor activos en menos de 5 minutos." : "Reseller dashboards activated in under 5 minutes."}
                    </p>
                  </div>
                </div>
                <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "12px", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "8px", background: "rgba(139,92,246,0.15)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "var(--accent-purple)" }}>✓</div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
                      {locale === "es" ? "Soporte de Marca Blanca" : "White Label Portal Setup"}
                    </h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>
                      {locale === "es" ? "Venda suscripciones bajo su propia marca independiente." : "Sell subscriptions under your own independent brand."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

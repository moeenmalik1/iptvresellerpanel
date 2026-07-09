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
              {(() => {
                const trans = {
                  en: "Home", "en-gb": "Home", "en-au": "Home",
                  es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem"
                };
                return trans[locale as keyof typeof trans] || trans.en;
              })()}
            </Link>
            <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text-secondary)" }}>
              {(() => {
                const trans = {
                  en: "Compare IPTV Panels", "en-gb": "Compare IPTV Panels", "en-au": "Compare IPTV Panels",
                  es: "Comparar Paneles IPTV", fr: "Comparer les Panneaux IPTV", pt: "Comparar Painéis IPTV", sv: "Jämför IPTV-paneler", no: "Sammenlign IPTV-paneler"
                };
                return trans[locale as keyof typeof trans] || trans.en;
              })()}
            </span>
          </nav>

          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
            <div className="tag" style={{ marginBottom: "1rem" }}>
              {(() => {
                const trans = {
                  en: "IPTV Panel Management & Comparison", "en-gb": "IPTV Panel Management & Comparison", "en-au": "IPTV Panel Management & Comparison",
                  es: "Comparativa y Gestión de Paneles IPTV", fr: "Comparaison & Gestion des Panneaux IPTV", pt: "Comparação & Gestão de Painéis IPTV", sv: "Hantering & Jämförelse av IPTV-paneler", no: "Håndtering & Sammenligning av IPTV-paneler"
                };
                return trans[locale as keyof typeof trans] || trans.en;
              })()}
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
              {(() => {
                const trans = {
                  en: <>Compare the Best <span className="gradient-text">IPTV Reseller Panels</span> Side-by-Side</>,
                  "en-gb": <>Compare the Best <span className="gradient-text">IPTV Reseller Panels</span> Side-by-Side</>,
                  "en-au": <>Compare the Best <span className="gradient-text">IPTV Reseller Panels</span> Side-by-Side</>,
                  es: <>Compare los Mejores <span className="gradient-text">Paneles IPTV</span> Lado a Lado</>,
                  fr: <>Comparez les Meilleurs <span className="gradient-text">Panneaux Revendeur</span> Côte à Côte</>,
                  pt: <>Compare os Melhores <span className="gradient-text">Painéis de Revendedor</span> Lado a Lado</>,
                  sv: <>Jämför de Bästa <span className="gradient-text">IPTV-paneler</span> Sida vid Sida</>,
                  no: <>Sammenlign de Beste <span className="gradient-text">IPTV Forhandlerpaneler</span> Side om Side</>
                };
                return trans[locale as keyof typeof trans] || trans.en;
              })()}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
              {(() => {
                const trans = {
                  en: "Maximize your iptv reseller business profit margins by choosing the perfect dashboard for your target audience. Filter and compare our 22 wholesale servers based on streaming quality, uptime guarantees, MAG box compatibility, and device versatility.",
                  "en-gb": "Maximize your iptv reseller business profit margins by choosing the perfect dashboard for your target audience. Filter and compare our 22 wholesale servers based on streaming quality, uptime guarantees, MAG box compatibility, and device versatility.",
                  "en-au": "Maximize your iptv reseller business profit margins by choosing the perfect dashboard for your target audience. Filter and compare our 22 wholesale servers based on streaming quality, uptime guarantees, MAG box compatibility, and device versatility.",
                  es: "Maximice los márgenes de beneficio de su negocio de revendedor de IPTV eligiendo el panel de control perfecto para su público objetivo. Filtre y compare nuestros 22 servidores mayoristas.",
                  fr: "Maximisez les marges de profit de votre activité IPTV en choisissant le tableau de bord parfait pour vos clients. Filtrez et comparez nos 22 serveurs de gros.",
                  pt: "Maximize as margens de lucro do seu negócio de revenda IPTV escolhendo o painel de controlo ideal. Filtre e compare os nossos 22 servidores atacadistas.",
                  sv: "Maximera vinstmarginalerna i din återförsäljarverksamhet genom att välja rätt kontrollpanel. Filtrera och jämför våra 22 grossistservrar.",
                  no: "Maksimer vinstmarginene i din forhandlervirksomhet ved å velge den perfekte kontrollpanelet. Filtrer og sammenlign våre 22 grossistservere."
                };
                return trans[locale as keyof typeof trans] || trans.en;
              })()}
            </p>
          </div>

          {/* Filter Dashboard Card */}
          <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "16px", marginBottom: "3rem", position: "relative", zIndex: 10 }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.25rem", alignItems: "center" }} className="panel-hero-grid">
              {/* Search */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="search" style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  {(() => {
                    const trans = {
                      en: "Search Panels", "en-gb": "Search Panels", "en-au": "Search Panels",
                      es: "Buscar Paneles", fr: "Rechercher des Panneaux", pt: "Pesquisar Painéis", sv: "Sök Paneler", no: "Søk Paneler"
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder={(() => {
                    const trans = {
                      en: "Search by panel name or feature...", "en-gb": "Search by panel name or feature...", "en-au": "Search by panel name or feature...",
                      es: "Buscar por nombre de panel o característica...", fr: "Rechercher par nom de panneau ou fonction...", pt: "Pesquise por nome do painel ou funcionalidade...", sv: "Sök efter panelnamn eller funktion...", no: "Søk etter panelnavn eller funksjon..."
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
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
                  {(() => {
                    const trans = {
                      en: "Quality Rating", "en-gb": "Quality Rating", "en-au": "Quality Rating",
                      es: "Clasificación de Calidad", fr: "Évaluation de la Qualité", pt: "Classificação de Qualidade", sv: "Kvalitetsbetyg", no: "Kvalitetsvurdering"
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
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
                    <option key={q} value={q}>
                      {q === "All" ? (
                        (() => {
                          const trans = {
                            en: "All Qualities", "en-gb": "All Qualities", "en-au": "All Qualities",
                            es: "Todas las Calidades", fr: "Toutes les Qualités", pt: "Todas as Qualidades", sv: "Alla Kvaliteter", no: "Alle Kvaliteter"
                          };
                          return trans[locale as keyof typeof trans] || trans.en;
                        })()
                      ) : q}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Status Bar */}
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <span>
                {(() => {
                  const trans = {
                    en: `Showing ${filteredPanels.length} of ${ALL_PANELS.length} premium panels`,
                    "en-gb": `Showing ${filteredPanels.length} of ${ALL_PANELS.length} premium panels`,
                    "en-au": `Showing ${filteredPanels.length} of ${ALL_PANELS.length} premium panels`,
                    es: `Mostrando ${filteredPanels.length} de ${ALL_PANELS.length} paneles premium`,
                    fr: `Affichage de ${filteredPanels.length} sur ${ALL_PANELS.length} panneaux premium`,
                    pt: `A mostrar ${filteredPanels.length} de ${ALL_PANELS.length} painéis premium`,
                    sv: `Visar ${filteredPanels.length} av ${ALL_PANELS.length} premium-paneler`,
                    no: `Viser ${filteredPanels.length} av ${ALL_PANELS.length} premium-paneler`
                  };
                  return trans[locale as keyof typeof trans] || trans.en;
                })()}
              </span>
              {(searchQuery || qualityFilter !== "All") && (
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setQualityFilter("All");
                  }}
                  style={{ background: "none", border: "none", color: "var(--accent-purple)", cursor: "pointer", fontWeight: 600 }}
                >
                  {(() => {
                    const trans = {
                      en: "Clear Filters", "en-gb": "Clear Filters", "en-au": "Clear Filters",
                      es: "Limpiar Filtros", fr: "Effacer les Filtres", pt: "Limpar Filtros", sv: "Rensa Filter", no: "Nullstill Filter"
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </button>
              )}
            </div>
          </div>

          {/* Comparison Table Section */}
          <div style={{ overflowX: "auto", width: "100%", borderRadius: "12px", border: "1px solid var(--border-color)", background: "rgba(255,255,255,0.01)", backdropFilter: "blur(10px)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)", background: "rgba(255,255,255,0.02)" }}>
                  {(() => {
                    const trans = {
                      en: ["Panel Name", "Quality", "Connections", "Uptime", "Support", "Dashboard", "Best For", "Action"],
                      es: ["Nombre del Panel", "Calidad", "Conexiones", "Tiempo Activo", "Soporte", "Panel de Control", "Ideal Para", "Acción"],
                      fr: ["Nom du Panneau", "Qualité", "Connexions", "Disponibilité", "Support", "Type de Panneau", "Idéal Pour", "Action"],
                      pt: ["Nome do Painel", "Qualidade", "Ligações", "Uptime", "Suporte", "Tipo de Painel", "Melhor Para", "Ação"],
                      sv: ["Panelnamn", "Kvalitet", "Anslutningar", "Drifttid", "Support", "Kontrollpanel", "Bäst För", "Åtgärd"],
                      no: ["Panelnavn", "Kvalitet", "Tilkoblinger", "Oppetid", "Støtte", "Paneltype", "Best For", "Handling"]
                    };
                    const activeCols = trans[locale.split("-")[0] as keyof typeof trans] || trans.en;
                    return activeCols.map((col, i) => (
                      <th 
                        key={i} 
                        style={{ 
                          padding: "1.25rem", 
                          textAlign: col === "Action" || col === "Acción" || col === "Åtgärd" || col === "Handling" ? "center" : "left", 
                          color: "var(--text-primary)", 
                          fontSize: "0.85rem", 
                          textTransform: "uppercase", 
                          letterSpacing: "0.05em", 
                          fontWeight: 700 
                        }}
                      >
                        {col}
                      </th>
                    ));
                  })()}
                </tr>
              </thead>
              <tbody>
                {filteredPanels.map((panel) => {
                  const uptime = panel.specs.find(s => s.label === "Server Uptime" || s.label === "Tiempo de actividad" || s.label === "Uptime du serveur" || s.label === "Disponibilidade de servidor" || s.label === "Drifttid" || s.label === "Oppetid")?.value || "99.9%";
                  const connections = panel.specs.find(s => s.label === "Connection Types" || s.label === "Tipos de conexão" || s.label === "Types de connexion" || s.label === "Tipos de ligação" || s.label === "Anslutningstyper" || s.label === "Tilkoblingstyper")?.value || "Xtream, M3U";
                  const support = panel.specs.find(s => s.label === "Support" || s.label === "Soporte" || s.label === "Support technique" || s.label === "Støtte")?.value || "24/7";
                  
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
                            {(() => {
                              const trans = {
                                en: "Details", "en-gb": "Details", "en-au": "Details",
                                es: "Detalles", fr: "Détails", pt: "Detalhes", sv: "Detaljer", no: "Detaljer"
                              };
                              return trans[locale as keyof typeof trans] || trans.en;
                            })()}
                          </Link>
                          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "5px 12px", borderRadius: "6px", fontSize: "0.8rem", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                            {(() => {
                              const trans = {
                                en: "Get Dashboard", "en-gb": "Get Dashboard", "en-au": "Get Dashboard",
                                es: "Obtener Panel", fr: "Obtenir le Panneau", pt: "Obter Painel", sv: "Skaffa Panel", no: "Få Panel"
                              };
                              return trans[locale as keyof typeof trans] || trans.en;
                            })()}
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {filteredPanels.length === 0 && (
                  <tr>
                    <td colSpan={8} style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
                      {(() => {
                        const trans = {
                          en: "No reseller panels found matching your criteria. Try adjusting your search query or filters!",
                          "en-gb": "No reseller panels found matching your criteria. Try adjusting your search query or filters!",
                          "en-au": "No reseller panels found matching your criteria. Try adjusting your search query or filters!",
                          es: "No se encontraron paneles de revendedor que coincidan con sus criterios. ¡Intente ajustar los filtros!",
                          fr: "Aucun panneau revendeur ne correspond à vos critères. Essayez d'ajuster les filtres !",
                          pt: "Nenhum painel de revendedor encontrado para os seus critérios. Tente ajustar os filtros!",
                          sv: "Inga återförsäljarpaneler hittades som matchar dina kriterier. Prova att ändra filtren!",
                          no: "Ingen forhandlerpaneler funnet som matcher dine kriterier. Prøv å justere søket eller filtrene!"
                        };
                        return trans[locale as keyof typeof trans] || trans.en;
                      })()}
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
                  {(() => {
                    const trans = {
                      en: "Ready to Buy IPTV Reseller Credits in Bulk?",
                      "en-gb": "Ready to Buy IPTV Reseller Credits in Bulk?",
                      "en-au": "Ready to Buy IPTV Reseller Credits in Bulk?",
                      es: "¿Listo para comprar créditos IPTV al por mayor?",
                      fr: "Prêt à Acheter des Crédits IPTV en Gros ?",
                      pt: "Pronto para Comprar Créditos IPTV em Massa?",
                      sv: "Redo att Köpa IPTV-krediter i Grossistvolym?",
                      no: "Klar til å Kjøpe IPTV-kreditter i Bulk?"
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  {(() => {
                    const trans = {
                      en: "Fox IPTV Panels is the leading global provider of high-speed streaming dashboards. Get wholesale discounts on all 22 panels with instant automated activations. WhatsApp us to check the lowest prices on bulk credits and starter packages.",
                      "en-gb": "Fox IPTV Panels is the leading global provider of high-speed streaming dashboards. Get wholesale discounts on all 22 panels with instant automated activations. WhatsApp us to check the lowest prices on bulk credits and starter packages.",
                      "en-au": "Fox IPTV Panels is the leading global provider of high-speed streaming dashboards. Get wholesale discounts on all 22 panels with instant automated activations. WhatsApp us to check the lowest prices on bulk credits and starter packages.",
                      es: "Fox IPTV Panels es el proveedor líder mundial de paneles de transmisión de alta velocidad. Obtenga descuentos mayoristas en los 22 paneles con activaciones automáticas e instantáneas. Chatee con nosotros por WhatsApp para consultar las tarifas.",
                      fr: "Fox IPTV Panels est le premier fournisseur mondial de tableaux de bord de streaming. Profitez de remises de gros sur nos 22 panneaux avec activations instantanées.",
                      pt: "Fox IPTV Panels é o fornecedor líder global de painéis de streaming rápidos. Obtenha descontos por atacado em todos os 22 painéis com ativação automatizada.",
                      sv: "Fox IPTV Panels är den ledande globala leverantören av snabba strömningspaneler. Få rabatter på alla 22 paneler med omedelbar aktivering.",
                      no: "Fox IPTV Panels er den ledende globale leverandøren av raske strømmepaneler. Få grossistrabatter på alle 22 paneler med øyeblikkelig aktivering."
                    };
                    return trans[locale as keyof typeof trans] || trans.en;
                  })()}
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.8rem 1.75rem", borderRadius: "10px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    {(() => {
                      const trans = {
                        en: "Buy Reseller Credits Now", "en-gb": "Buy Reseller Credits Now", "en-au": "Buy Reseller Credits Now",
                        es: "Comprar Créditos Ahora", fr: "Acheter des Crédits Maintenant", pt: "Comprar Créditos Agora", sv: "Köp Reseller-krediter Nu", no: "Kjøp Forhandlerkreditter Nå"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </a>
                  <Link href={`/${locale}/contact`} className="btn-secondary" style={{ padding: "0.8rem 1.75rem", borderRadius: "10px", textDecoration: "none", display: "inline-block" }}>
                    {(() => {
                      const trans = {
                        en: "View Price List", "en-gb": "View Price List", "en-au": "View Price List",
                        es: "Ver Lista de Precios", fr: "Voir la Liste des Tarifs", pt: "Ver Tabela de Preços", sv: "Visa Prislista", no: "Vis Prisliste"
                      };
                      return trans[locale as keyof typeof trans] || trans.en;
                    })()}
                  </Link>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "12px", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "8px", background: "rgba(34,197,94,0.15)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "#22c55e" }}>✓</div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
                      {(() => {
                        const trans = {
                          en: "Instant Automated Setup", "en-gb": "Instant Automated Setup", "en-au": "Instant Automated Setup",
                          es: "Activación Instantánea", fr: "Configuration Automatisée", pt: "Ativação Instantânea", sv: "Omedelbar Automatisk Konfiguration", no: "Øyeblikkelig Automatisk Oppsett"
                        };
                        return trans[locale as keyof typeof trans] || trans.en;
                      })()}
                    </h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>
                      {(() => {
                        const trans = {
                          en: "Reseller dashboards activated in under 5 minutes.",
                          "en-gb": "Reseller dashboards activated in under 5 minutes.",
                          "en-au": "Reseller dashboards activated in under 5 minutes.",
                          es: "Paneles de revendedor activos en menos de 5 minutos.",
                          fr: "Tableaux de bord activés en moins de 5 minutes.",
                          pt: "Painéis de revendedor ativados em menos de 5 minutos.",
                          sv: "Reseller-paneler aktiveras på mindre än 5 minuter.",
                          no: "Forhandlerpaneler aktiveres på under 5 minutter."
                        };
                        return trans[locale as keyof typeof trans] || trans.en;
                      })()}
                    </p>
                  </div>
                </div>
                <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "12px", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "8px", background: "rgba(139,92,246,0.15)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "var(--accent-purple)" }}>✓</div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
                      {(() => {
                        const trans = {
                          en: "White Label Portal Setup", "en-gb": "White Label Portal Setup", "en-au": "White Label Portal Setup",
                          es: "Soporte de Marca Blanca", fr: "Solution Marque Blanche", pt: "Configuração de Marca Branca", sv: "White Label-konfiguration", no: "White Label-konfigurasjon"
                        };
                        return trans[locale as keyof typeof trans] || trans.en;
                      })()}
                    </h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>
                      {(() => {
                        const trans = {
                          en: "Sell subscriptions under your own independent brand.",
                          "en-gb": "Sell subscriptions under your own independent brand.",
                          "en-au": "Sell subscriptions under your own independent brand.",
                          es: "Venda suscripciones bajo su propia marca independiente.",
                          fr: "Vendez sous votre propre marque indépendante.",
                          pt: "Venda subscrições com a sua própria marca independente.",
                          sv: "Sälj abonnemang under ditt eget oberoende varumärke.",
                          no: "Selg abonnementer under ditt eget uavhengige varemerke."
                        };
                        return trans[locale as keyof typeof trans] || trans.en;
                      })()}
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

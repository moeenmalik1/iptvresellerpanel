"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { getGuides } from "@/app/lib/guidesData";

export default function GuidesClient() {
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const ALL_GUIDES = useMemo(() => getGuides(locale), [locale]);

  const categories = useMemo(() => {
    const L = locale as string;
    if (L === "es") return ["Todos", "Negocios", "Técnico", "Marca"];
    if (L === "fr") return ["Tout", "Affaires", "Technique", "Marque"];
    if (L === "pt") return ["Todos", "Negócio", "Técnico", "Marca"];
    if (L === "sv") return ["Alla", "Affärer", "Tekniskt", "Varumärke"];
    if (L === "no") return ["Alle", "Bedrift", "Teknisk", "Merke"];
    return ["All", "Business", "Technical", "Branding"];
  }, [locale]);

  // All-locale helper
  const lc = (map: Record<string, string>) => map[locale] ?? map["en"] ?? "";

  const filteredGuides = useMemo(() => {
    return ALL_GUIDES.filter(guide => {
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesCategory = true;
      const allWords = ["All", "Todos", "Tout", "Alla", "Alle"];
      if (!allWords.includes(activeCategory)) {
        matchesCategory = guide.category.toLowerCase() === activeCategory.toLowerCase();
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, ALL_GUIDES]);

  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "110px", position: "relative" }}>
      {/* Orbs */}
      <div className="mesh-orb mesh-orb-3" style={{ bottom: "10%", left: "5%" }} />
      <div className="mesh-orb mesh-orb-1" style={{ top: "15%", right: "10%" }} />

      <div className="section-container" style={{ padding: "4rem 1.5rem" }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
          <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
            {lc({ en: "Home", "en-gb": "Home", "en-au": "Home", es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem" })}
          </Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: "var(--text-secondary)" }}>
            {lc({ en: "Guides & Tutorials", "en-gb": "Guides & Tutorials", "en-au": "Guides & Tutorials", es: "Guías y Tutoriales", fr: "Guides et Tutoriels", pt: "Guias e Tutoriais", sv: "Guider och Handledningar", no: "Guider og Opplæringer" })}
          </span>
        </nav>

        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>
            {lc({ en: "IPTV Training Academy & Documentation", "en-gb": "IPTV Training Academy & Documentation", "en-au": "IPTV Training Academy & Documentation", es: "Academia y Documentación de IPTV", fr: "Académie de Formation IPTV et Documentation", pt: "Academia de Formação IPTV e Documentação", sv: "IPTV-utbildningsakademi och Dokumentation", no: "IPTV-opplæringsakademi og Dokumentasjon" })}
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
            {lc({ en: "Master the", "en-gb": "Master the", "en-au": "Master the", es: "Domine el", fr: "Maîtrisez le", pt: "Domine o", sv: "Behärska", no: "Mestre" })}{" "}
            <span className="gradient-text">
              {lc({ en: "IPTV Reseller Business", "en-gb": "IPTV Reseller Business", "en-au": "IPTV Reseller Business", es: "Negocio Reseller de IPTV", fr: "Métier de Revendeur IPTV", pt: "Negócio de Revendedor IPTV", sv: "IPTV-återförsäljarbranschen", no: "IPTV-forhandlerbransjen" })}
            </span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {lc({ en: "Expert insights, server tutorials, and marketing strategies to help you launch, brand, and scale your wholesale streaming franchise successfully in 2026.", "en-gb": "Expert insights, server tutorials, and marketing strategies to help you launch, brand, and scale your wholesale streaming franchise successfully in 2026.", "en-au": "Expert insights, server tutorials, and marketing strategies to help you launch, brand, and scale your wholesale streaming franchise successfully in 2026.", es: "Información de expertos, tutoriales de servidores y estrategias de marketing para ayudarle a lanzar y escalar su franquicia de IPTV en 2026.", fr: "Conseils d'experts, tutoriels serveur et stratégies marketing pour lancer et développer votre franchise de streaming en 2026.", pt: "Insights de especialistas, tutoriais de servidor e estratégias de marketing para lançar e escalar a sua franquia de streaming em 2026.", sv: "Expertinsikter, serverhandledningar och marknadsföringsstrategier för att framgångsrikt lansera och skala din streamingfranschis 2026.", no: "Ekspertinnsikt, serveropplæringer og markedsføringsstrategier for å hjelpe deg med å lansere og skalere din streamingfranchise i 2026." })}
          </p>
        </div>

        {/* Filters Row */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "3rem"
        }}>
          {/* Category tabs */}
          <div style={{ display: "flex", gap: "6px", background: "rgba(255,255,255,0.02)", padding: "4px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? "var(--gradient-primary)" : "transparent",
                  color: "var(--text-primary)",
                  border: "none",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  transition: "all 0.2s"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder={lc({ en: "Search academy articles...", "en-gb": "Search academy articles...", "en-au": "Search academy articles...", es: "Buscar artículos...", fr: "Rechercher des articles...", pt: "Pesquisar artigos...", sv: "Sök artiklar...", no: "Søk artikler..." })}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              padding: "0.6rem 1.25rem",
              color: "var(--text-primary)",
              fontSize: "0.9rem",
              outline: "none",
              width: "100%",
              maxWidth: "320px"
            }}
          />
        </div>

        {/* Grid View */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="panel-hero-grid">
          {filteredGuides.map(guide => (
            <Link
              key={guide.id}
              href={`/${locale}/guides/${guide.id}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="glass-card"
                style={{
                  padding: "2rem",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  cursor: "pointer"
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: "1rem" }}>
                    <span className="tag" style={{ fontSize: "0.65rem", padding: "2px 8px" }}>{guide.category}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{guide.readTime}</span>
                  </div>

                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", lineHeight: 1.3 }}>
                    {guide.title}
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {guide.excerpt}
                  </p>
                </div>

                <span
                  style={{
                    color: "var(--accent-purple)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4
                  }}
                >
                  {lc({ en: "Read Guide →", es: "Leer Guía →", fr: "Lire le guide →", pt: "Ler Guia →", sv: "Läs Guide →", no: "Les Guide →" })}
                </span>
              </article>
            </Link>
          ))}

          {filteredGuides.length === 0 && (
            <div style={{ gridColumn: "1 / -1", padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
              {lc({ en: "No guides found matching your search. Clear filters or search something else!", es: "No se encontraron guías que coincidan con su búsqueda." })}
            </div>
          )}
        </div>

        {/* Quick FAQ summary */}
        <section style={{ marginTop: "6rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)" }}>
              {lc({ en: "Common Reseller Questions", es: "Preguntas Frecuentes de Revendedores" })}
            </h2>
            <p style={{ color: "var(--text-muted)" }}>
              {lc({ en: "Crucial details to help clarify billing and technical portals.", es: "Detalles cruciales sobre facturación y portales técnicos." })}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="panel-hero-grid">
            <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ fontWeight: 700, margin: "0 0 10px", color: "var(--text-primary)" }}>
                {lc({ en: "How much investment is required?", es: "¿Cuánta inversión se requiere?" })}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {lc({
                  en: "You can start with our Starter Pack of 120 wholesale credits. This lets you test the market and build a client list before making larger bulk commitments.",
                  es: "Puede comenzar con nuestro Paquete de Inicio de 120 créditos. Esto le permite probar el mercado y crear una lista de clientes antes de realizar compromisos mayores."
                })}
              </p>
            </div>
            <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ fontWeight: 700, margin: "0 0 10px", color: "var(--text-primary)" }}>
                {lc({ en: "What if a server buffers or goes down?", es: "¿Qué pasa si un servidor se corta o se cae?" })}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {lc({
                  en: "Our top servers (like Strong 4K, Nexon, Crystal) have redundant geo-distributed backups and 99.9% uptime. By offering multiple panels to clients, you can ensure they always have backup streams.",
                  es: "Nuestros servidores principales (como Strong 4K, Nexon, Crystal) tienen copias de seguridad distribuidas geográficamente y un 99,9% de tiempo de actividad."
                })}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

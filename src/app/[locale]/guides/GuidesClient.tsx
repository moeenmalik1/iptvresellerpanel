"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

interface Guide {
  id: string;
  title: string;
  category: "Business" | "Technical" | "Branding" | "Negocios" | "Técnico" | "Marca";
  readTime: string;
  excerpt: string;
  content: string;
}

export default function GuidesClient() {
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

  // Localized guides list
  const ALL_GUIDES: Guide[] = useMemo(() => {
    if (locale === "es") {
      return [
        {
          id: "start-iptv-reseller-business",
          title: "Cómo iniciar un negocio de revendedor de IPTV en 2026 (con una inversión mínima)",
          category: "Negocios",
          readTime: "6 min de lectura",
          excerpt: "Aprenda a establecer un negocio de reventa de IPTV de marca blanca altamente rentable. Descubra estrategias de captación de clientes y cómo escalar vía WhatsApp.",
          content: "Iniciar un negocio de suscripción digital es una de las mejores formas de generar ingresos pasivos en 2026. Con un panel de revendedor de IPTV premium, no necesita comprar costosos servidores de transmisión ni administrar una infraestructura de base de datos compleja. Como revendedor, compra créditos al por mayor a un distribuidor principal como Fox IPTV Panels, obtiene acceso a un panel de control elegante y vende cuentas a sus clientes minoristas. Para comenzar: 1) Asegure un paquete de créditos pequeño (inversión mínima), 2) Reciba capacitación sobre la asignación de créditos, 3) Promociónese en mercados locales en España o la UE a través de redes sociales, y 4) Use WhatsApp como su portal principal de atención al cliente y ventas. Puede cobrar tarifas mensuales o anuales recurrentes, y dado que los costos de créditos al por mayor son muy bajos, mantendrá márgenes de ganancia masivos."
        },
        {
          id: "credit-system-explained",
          title: "Explicación del sistema de créditos de IPTV para revendedores: Guía completa",
          category: "Negocios",
          readTime: "5 min de lectura",
          excerpt: "¿Tiene dudas sobre cómo los créditos se convierten en cuentas activas de clientes? Lea nuestro desglose detallado del modelo de facturación y calcule sus beneficios.",
          content: "El sistema de créditos de IPTV es el modelo de reventa mayorista fundamental. En lugar de pagar tarifas mensuales fijas por el servidor, compra créditos en bloque. Piense en los créditos como su inventario mayorista. Por lo general, el cálculo estándar es: 1 crédito = 1 mes de suscripción de cliente (lo que significa que un cliente de 12 meses consume 12 créditos). Por ejemplo: si compra un Growth Pack de 200 créditos por $180 (o equivalente local), su costo mayorista es de solo $0.90 por crédito. Si vende a $10/mes por cliente, su ingreso bruto potencial es de $2,000, ¡lo que genera una ganancia neta masiva de $1,820! El sistema de créditos le brinda libertad absoluta de precios y cero costos fijos."
        },
        {
          id: "xtream-codes-vs-m3u",
          title: "Xtream Codes API frente a enlaces de listas de reproducción M3U: lo que debe saber",
          category: "Técnico",
          readTime: "7 min de lectura",
          excerpt: "Ayude a sus clientes a conectar sus dispositivos fácilmente. Compare el rendimiento, la seguridad y la compatibilidad de Xtream Codes y archivos M3U sin procesar.",
          content: "Al configurar clientes, se encontrará con dos formatos principales: Xtream Codes API y listas de reproducción M3U. Las listas de reproducción M3U consisten en una cadena de URL larga que contiene un archivo de texto con las ubicaciones de los canales. Aunque M3U es compatible con casi todas las aplicaciones antiguas, expone los enlaces de transmisión directa y puede ser lento de descargar. Xtream Codes API, por otro lado, divide las credenciales en tres entradas limpias: URL del portal, usuario y contraseña. Se recomienda encarecidamente utilizar Xtream Codes porque carga los canales en fracciones de segundo, protege sus transmisiones contra copias y actualiza las listas de canales de manera dinámica. Indique siempre a sus clientes que utilicen reproductores modernos como IPTV Smarters, Tivimate o XCIPTV con su inicio de sesión de Xtream Codes."
        },
        {
          id: "white-label-panel-branding",
          title: "Paneles IPTV de marca blanca: cree su propio imperio de transmisión",
          category: "Marca",
          readTime: "5 min de lectura",
          excerpt: "¿Listo para escalar más allá de los clientes minoristas? Conozca cómo el enrutamiento DNS personalizado y la marca blanca le permiten vender paneles a sub-revendedores.",
          content: "La marca blanca (White Label) es el paso definitivo para escalar su negocio de IPTV. Un panel de revendedor estándar muestra las credenciales del servidor predeterminado. Un panel de marca blanca le permite enmascarar estos servidores bajo su propia marca privada. Para hacer esto, compra una configuración dedicada de marca blanca en Fox IPTV Panels, registra su propio dominio (por ejemplo, miportal.com) y apunta sus configuraciones DNS a las IP del servidor. Cuando sus clientes inicien sesión, verán su dominio y su logotipo de marca. Más importante aún, la marca blanca le permite reclutar sub-revendedores. Puede vender paquetes de créditos más pequeños a otros revendedores que gestionarán sus propios clientes bajo su panel, creando una red de distribución masiva."
        }
      ];
    }

    return [
      {
        id: "start-iptv-reseller-business",
        title: "How to Start an IPTV Reseller Business in 2026 (With Minimal Investment)",
        category: "Business",
        readTime: "6 min read",
        excerpt: "Learn how to establish a highly profitable white label IPTV reseller business. Discover panel onboarding, customer acquisition, and WhatsApp scaling strategies.",
        content: "Starting a digital subscription business is one of the best ways to earn passive income in 2026. With a premium IPTV reseller panel, you don't need to purchase expensive streaming servers or manage complex database infrastructure. As a reseller, you purchase wholesale 'credits' from a major distributor like Fox IPTV Panels, get access to a sleek dashboard, and sell accounts to your retail customers. To get started: 1) Secure a small credit package (minimum investment), 2) Get trained on credit allocation, 3) Market to local audiences in the UK, USA, or the EU via social media, and 4) Use WhatsApp as your primary customer relationship and sales portal. You can charge monthly or yearly recurring rates, and since wholesale credit prices are low, you easily retain massive margins."
      },
      {
        id: "credit-system-explained",
        title: "IPTV Reseller Credit System Explained: A Complete Guide",
        category: "Business",
        readTime: "5 min read",
        excerpt: "Confused about how credits translate to client active accounts? Read our detailed breakdown of the IPTV panel billing model and calculate your profit margins.",
        content: "The IPTV credit system is the fundamental wholesale model for reselling. Instead of paying fixed monthly server fees, you buy credits in bulk. Think of credits as your wholesale inventory. Generally, the standard calculation is: 1 credit = 1 month of customer subscription (meaning a 12-month client uses 12 credits). For example: if you buy a Growth Pack of 200 credits for $180, your wholesale cost is only $0.90 per credit. If you sell at $10/month per customer, your potential gross revenue is $2,000, yielding a massive net profit of $1,820! The credit system gives you absolute pricing freedom and zero overhead costs."
      },
      {
        id: "xtream-codes-vs-m3u",
        title: "Xtream Codes API vs M3U Playlist Links: What Resellers Must Know",
        category: "Technical",
        readTime: "7 min read",
        excerpt: "Help your customers connect their devices easily. Compare the performance, security, and device compatibility of Xtream Codes logins and raw M3U files.",
        content: "When setting up clients, you'll encounter two primary formats: Xtream Codes API and M3U playlists. M3U playlists consist of a long URL string containing a text file with channel locations. While M3U is compatible with almost every older application, it exposes the raw stream links and can be slow to download on client apps. Xtream Codes API, on the other hand, breaks down credentials into three clean inputs: Portal URL, Username, and Password. Xtream Codes is highly recommended because it loads channels in fractions of a second, protects your streams from copying, and updates channel lists dynamically without requiring the customer to reload their app. Always instruct customers to use modern players like IPTV Smarters, Tivimate, or XCIPTV with their Xtream Codes login."
      },
      {
        id: "white-label-panel-branding",
        title: "White Label IPTV Panels: Branding Your Streaming Empire",
        category: "Branding",
        readTime: "5 min read",
        excerpt: "Ready to scale beyond retail clients? Learn how custom DNS routing and white labeling allow you to sell reseller panels to sub-resellers under your own brand.",
        content: "White labeling is the ultimate step to scaling your IPTV business. A standard reseller panel shows the default server credentials. A white-label panel allows you to mask these servers under your own private brand. To do this, you buy a dedicated white-label setup from Fox IPTV Panels, register your own domain (e.g. mystreamportal.com), and point its DNS settings to the server IPs. When your customers log in, they see your domain and your brand logo. More importantly, white labeling enables you to recruit sub-resellers. You can sell smaller credit packs to other aspiring resellers who manage their own clients underneath your panel, creating a massive wholesale distribution network."
      }
    ];
  }, [locale]);

  const categories = useMemo(() => {
    if (locale === "es") {
      return ["Todos", "Negocios", "Técnico", "Marca"];
    }
    return ["All", "Business", "Technical", "Branding"];
  }, [locale]);

  const filteredGuides = useMemo(() => {
    return ALL_GUIDES.filter(guide => {
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesCategory = true;
      if (activeCategory !== "All" && activeCategory !== "Todos") {
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
            {locale === "es" ? "Inicio" : "Home"}
          </Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: "var(--text-secondary)" }}>
            {locale === "es" ? "Guías y Tutoriales" : "Guides & Tutorials"}
          </span>
        </nav>

        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>
            {locale === "es" ? "Academia y Documentación de IPTV" : "IPTV Training Academy & Documentation"}
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
              <>Domine el <span className="gradient-text">Negocio Reseller</span> de IPTV</>
            ) : (
              <>Master the <span className="gradient-text">IPTV Reseller Business</span></>
            )}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {locale === "es"
              ? "Información de expertos, tutoriales de servidores y estrategias de marketing para ayudarle a lanzar y escalar su franquicia de IPTV en 2026."
              : "Expert insights, server tutorials, and marketing strategies to help you launch, brand, and scale your wholesale streaming franchise successfully in 2026."}
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
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedGuide(null);
                }}
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
            placeholder={locale === "es" ? "Buscar artículos..." : "Search academy articles..."}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedGuide(null);
            }}
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

        {/* Article / Reader Layout */}
        {selectedGuide ? (
          /* Detailed Article View */
          <div className="glass-card" style={{ padding: "3rem", borderRadius: "24px", position: "relative", zIndex: 10 }}>
            <button
              onClick={() => setSelectedGuide(null)}
              style={{
                background: "none",
                border: "none",
                color: "var(--accent-purple)",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: "2rem"
              }}
            >
              {locale === "es" ? "← Volver a la Academia de Guías" : "← Back to Guides Academy"}
            </button>

            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: "1rem" }}>
              <span className="tag" style={{ fontSize: "0.7rem" }}>{selectedGuide.category}</span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{selectedGuide.readTime}</span>
            </div>

            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.25rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              {selectedGuide.title}
            </h2>

            <div style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              whiteSpace: "pre-wrap",
              marginBottom: "3rem"
            }}>
              {selectedGuide.content}
            </div>

            {/* Action card */}
            <div style={{
              padding: "2rem",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border-color)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem"
            }}>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: "0 0 6px" }}>
                  {locale === "es" ? "Ponga en práctica este conocimiento" : "Put This Knowledge into Practice"}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0 }}>
                  {locale === "es" ? "Comience su negocio de reventa hoy con tutoría directa." : "Start your reseller business today with a direct mentorship."}
                </p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.7rem 1.5rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.9rem" }}>
                {locale === "es" ? "Comenzar en WhatsApp" : "Get Started on WhatsApp"}
              </a>
            </div>
          </div>
        ) : (
          /* Grid View */
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="panel-hero-grid">
            {filteredGuides.map(guide => (
              <article
                key={guide.id}
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
                onClick={() => setSelectedGuide(guide)}
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
                  {locale === "es" ? "Leer Guía →" : "Read Guide →"}
                </span>
              </article>
            ))}

            {filteredGuides.length === 0 && (
              <div style={{ gridColumn: "1 / -1", padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
                {locale === "es" ? "No se encontraron guías que coincidan con su búsqueda." : "No guides found matching your search. Clear filters or search something else!"}
              </div>
            )}
          </div>
        )}

        {/* Quick FAQ summary */}
        <section style={{ marginTop: "6rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)" }}>
              {locale === "es" ? "Preguntas Frecuentes de Revendedores" : "Common Reseller Questions"}
            </h2>
            <p style={{ color: "var(--text-muted)" }}>
              {locale === "es" ? "Detalles cruciales sobre facturación y portales técnicos." : "Crucial details to help clarify billing and technical portals."}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="panel-hero-grid">
            <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ fontWeight: 700, margin: "0 0 10px", color: "var(--text-primary)" }}>
                {locale === "es" ? "¿Cuánta inversión se requiere?" : "How much investment is required?"}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {locale === "es"
                  ? "Puede comenzar con nuestro Paquete de Inicio de 120 créditos. Esto le permite probar el mercado y crear una lista de clientes antes de realizar compromisos mayores."
                  : "You can start with our Starter Pack of 120 wholesale credits. This lets you test the market and build a client list before making larger bulk commitments."}
              </p>
            </div>
            <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ fontWeight: 700, margin: "0 0 10px", color: "var(--text-primary)" }}>
                {locale === "es" ? "¿Qué pasa si un servidor se corta o se cae?" : "What if a server buffers or goes down?"}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {locale === "es"
                  ? "Nuestros servidores principales (como Strong 4K, Nexon, Crystal) tienen copias de seguridad distribuidas geográficamente y un 99,9% de tiempo de actividad."
                  : "Our top servers (like Strong 4K, Nexon, Crystal) have redundant geo-distributed backups and 99.9% uptime. By offering multiple panels to clients, you can ensure they always have backup streams."}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

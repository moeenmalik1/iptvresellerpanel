import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getGuides, type GuideData } from "@/app/lib/guidesData";
import { getPost, type BlogPostImage } from "@/app/lib/blogStore";
import { formatRichText } from "@/app/lib/richText";
import { setRequestLocale } from "next-intl/server";

// Admin-published posts are stored in Vercel KV and aren't known at build time,
// so this route re-checks for fresh content periodically instead of staying fully static.
export const revalidate = 60;

type DisplayGuide = GuideData & { featuredImage?: BlogPostImage | null };

// Static pre-generation of all 56 guide paths (8 locales x 7 guides)
export function generateStaticParams() {
    const locales = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];
    const paths: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
        const guides = getGuides(locale);
        for (const guide of guides) {
                paths.push({
                          locale,
                          slug: guide.id,
                });
        }
  }

  return paths;
}

export default async function GuideDetailPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

  // Load target guide — first check the static (build-time) guides, then
  // fall back to a post published through the admin panel (stored in KV).
  const guides = getGuides(locale);
    let guide: DisplayGuide | undefined = guides.find((g) => g.id === slug);

  if (!guide) {
        const dynamicPost = await getPost(locale, slug).catch(() => null);
        if (dynamicPost && dynamicPost.status === "published") {
                guide = {
                          id: dynamicPost.slug,
                          title: dynamicPost.title,
                          category: dynamicPost.category as GuideData["category"],
                          readTime: dynamicPost.readTime,
                          excerpt: dynamicPost.excerpt,
                          content: dynamicPost.content,
                          seoTitle: dynamicPost.seoTitle,
                          seoDescription: dynamicPost.seoDescription,
                          faqs: dynamicPost.faqs,
                          featuredImage: dynamicPost.featuredImage,
                };
        }
  }

  if (!guide) {
        notFound();
  }

  const WHATSAPP_URL = "https://wa.me/447463012833?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

  // Dynamic local translation strings
  const lc = (map: Record<string, string>) => map[locale] ?? map["en"] ?? "";

  // 📝 Comprehensive JSON-LD Graph for dynamic schemas (WebPage, BreadcrumbList, TechArticle, Person, FAQPage)
  const graphSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
                    "@type": "WebPage",
                    "@id": `https://www.iptvreseller.live/${locale}/guides/${guide.id}/#webpage`,
                    "url": `https://www.iptvreseller.live/${locale}/guides/${guide.id}`,
                    "name": guide.seoTitle,
                    "description": guide.seoDescription,
                    "isPartOf": {
                                "@type": "WebSite",
                                "@id": "https://www.iptvreseller.live/#website",
                                "name": "Fox IPTV Panels",
                                "url": "https://www.iptvreseller.live"
                    },
                    "breadcrumb": {
                                "@id": `https://www.iptvreseller.live/${locale}/guides/${guide.id}/#breadcrumb`
                    }
          },
          {
                    "@type": "BreadcrumbList",
                    "@id": `https://www.iptvreseller.live/${locale}/guides/${guide.id}/#breadcrumb`,
                    "itemListElement": [
                      {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": lc({ en: "Home", es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem" }),
                                    "item": `https://www.iptvreseller.live/${locale}`
                      },
                      {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": lc({ en: "Guides", es: "Guías", fr: "Guides", pt: "Guias", sv: "Guider", no: "Guider" }),
                                    "item": `https://www.iptvreseller.live/${locale}/guides`
                      },
                      {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": guide.title,
                                    "item": `https://www.iptvreseller.live/${locale}/guides/${guide.id}`
                      }
                              ]
          },
          {
                    "@type": ["TechArticle", "Article", "NewsArticle", "BlogPosting"],
                    "@id": `https://www.iptvreseller.live/${locale}/guides/${guide.id}/#article`,
                    "mainEntityOfPage": `https://www.iptvreseller.live/${locale}/guides/${guide.id}`,
                    "headline": guide.title,
                    "description": guide.seoDescription,
                    "image": "https://www.iptvreseller.live/og-image.png",
                    "datePublished": "2026-05-24T08:00:00+00:00",
                    "dateModified": "2026-05-31T08:00:00+00:00",
                    "author": {
                                "@type": "Person",
                                "@id": "https://www.iptvreseller.live/authors/#marcusvane",
                                "name": "Marcus Vane",
                                "jobTitle": "Lead Alt-Broadband Network Architect",
                                "image": "https://www.iptvreseller.live/placeholder-icon.svg",
                                "description": "Marcus Vane is a leading expert in alternative broadband networks and IPTV customization protocols with over 15 years of network systems virtualization experience.",
                                "sameAs": [
                                              "https://twitter.com/marcusvane_iptv",
                                              `https://www.iptvreseller.live/${locale}/authors`
                                            ]
                    },
                    "reviewedBy": {
                                "@type": "Person",
                                "@id": "https://www.iptvreseller.live/authors/#carlosm",
                                "name": "Carlos M.",
                                "jobTitle": "Certified Broadband Specialist & Alt-Telecom Auditor",
                                "image": "https://www.iptvreseller.live/placeholder-icon.svg",
                                "sameAs": [
                                              `https://www.iptvreseller.live/${locale}/authors`
                                            ]
                    },
                    "publisher": {
                                "@type": "Organization",
                                "@id": "https://www.iptvreseller.live/#organization",
                                "name": "Fox IPTV Panels",
                                "logo": {
                                              "@type": "ImageObject",
                                              "url": "https://www.iptvreseller.live/logo.png"
                                }
                    }
          },
          {
                    "@type": "FAQPage",
                    "@id": `https://www.iptvreseller.live/${locale}/guides/${guide.id}/#faq`,
                    "mainEntity": guide.faqs.map((faq) => ({
                                "@type": "Question",
                                "name": faq.q,
                                "acceptedAnswer": {
                                              "@type": "Answer",
                                              "text": faq.a
                                }
                    }))
          }
              ]
  };

  return (
        <>
          {/* Dynamic SEO Title and Metadata tags */}
              <title>{guide.seoTitle}</title>
              <meta name="description" content={guide.seoDescription} />
              <link rel="canonical" href={`https://www.iptvreseller.live/${locale}/guides/${guide.id}`} />
        
          {/* Structured dynamic schemas */}
              <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
                      />
        
              <Header />
        
              <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "110px", position: "relative" }}>
                {/* Orbs */}
                      <div className="mesh-orb mesh-orb-3" style={{ bottom: "10%", left: "5%" }} />
                      <div className="mesh-orb mesh-orb-1" style={{ top: "15%", right: "10%" }} />
              
                      <div className="section-container" style={{ padding: "4rem 1.5rem" }}>
                        {/* Back button and breadcrumb */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: "2.5rem" }}>
                                            <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)" }}>
                                                          <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
                                                            {lc({ en: "Home", es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem" })}
                                                          </Link>
                                                          <span aria-hidden="true">›</span>
                                                          <Link href={`/${locale}/guides`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
                                                            {lc({ en: "Guides", es: "Guías", fr: "Guides", pt: "Guias", sv: "Guider", no: "Guider" })}
                                                          </Link>
                                                          <span aria-hidden="true">›</span>
                                                          <span style={{ color: "var(--text-secondary)" }}>{guide.title.substring(0, 30)}...</span>
                                            </nav>
                                
                                            <Link
                                                            href={`/${locale}/guides`}
                                                            style={{
                                                                              textDecoration: "none",
                                                                              color: "var(--accent-cyan)",
                                                                              fontSize: "0.85rem",
                                                                              fontWeight: 700,
                                                                              display: "inline-flex",
                                                                              alignItems: "center",
                                                                              gap: 6
                                                            }}
                                                          >
                                              {lc({ en: "← Back to Academy", es: "← Volver a la Academia", fr: "← Retour à l'Académie" })}
                                            </Link>
                                </div>
                      
                        {/* Article Layout */}
                                <article className="glass-card" style={{ padding: "3.5rem 3rem", borderRadius: "24px", position: "relative", zIndex: 10, overflow: "hidden" }}>
                                  {/* Header info with Visible E-E-A-T Dates */}
                                            <header style={{ marginBottom: "2.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "2rem" }}>
                                                          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: "1rem" }}>
                                                                          <span className="tag">{guide.category}</span>
                                                                          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{guide.readTime}</span>
                                                                          <span style={{ color: "var(--border-accent)", fontSize: "0.75rem" }}>•</span>
                                                                          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                                                                            {lc({
                              en: "Published: May 24, 2026",
                              es: "Publicado: 24 de mayo de 2026",
                              fr: "Publié le : 24 mai 2026",
                              pt: "Publicado em: 24 de maio de 2026",
                              sv: "Publicerad: 24 maj 2026",
                              no: "Publisert: 24. mai 2026"
        })}
                                                                          </span>
                                                                          <span style={{ color: "var(--border-accent)", fontSize: "0.75rem" }}>•</span>
                                                                          <span style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontWeight: 500 }}>
                                                                            {lc({
                              en: "Last Updated: May 31, 2026",
                              es: "Última actualización: 31 de mayo de 2026",
                              fr: "Mis à jour le : 31 mai 2026",
                              pt: "Última actualización: 31 de maio de 2026",
                              sv: "Senast uppdaterad: 31 maj 2026",
                              no: "Sist oppdatert: 31. mai 2026"
        })}
                                                                          </span>
                                                          </div>
                                            
                                                          <h1 style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
                          fontWeight: 900,
                          color: "var(--text-primary)",
                          lineHeight: 1.15,
                          letterSpacing: "-0.02em",
                          marginBottom: "1.5rem"
        }}>
                                                            {guide.title}
                                                          </h1>
                                            
                                              {/* Author profile & E-E-A-T builder */}
                                                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "1rem" }}>
                                                                          <div style={{
                            width: 42, height: 42, borderRadius: "50%",
                            background: "var(--gradient-primary)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "1.1rem", fontWeight: "bold", color: "white",
                            border: "1px solid rgba(255,255,255,0.15)"
        }}>
                                                                                            MV
                                                                          </div>
                                                                          <div>
                                                                                            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)" }}>Marcus Vane</div>
                                                                                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                                                                                              {lc({
                                en: "Lead Alt-Broadband Network Architect • Certified IPTV Specialist",
                                es: "Arquitecto de Redes de Banda Ancha Alternativas • Especialista Certificado en IPTV",
                                fr: "Architecte Réseau Alt-Broadband • Spécialiste IPTV Certifié",
                                pt: "Arquiteto de Redes de Banda Larga Alternativas • Especialista IPTV Certificado",
                                sv: "Ledande Alt-Bredbandsarkitekt • Certifierad IPTV-Specialist",
                                no: "Ledende Alt-Bredbåndsarkitekt • Sertifisert IPTV-Spesialist"
        })}
                                                                                              </div>
                                                                          </div>
                                                          </div>
                                            </header>
                                
                                  {/* Featured image (admin-published posts) */}
                                  {guide.featuredImage?.url && (
                        <figure style={{ margin: "0 0 2.5rem", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border-color)" }}>
                                        <img
                                                            src={guide.featuredImage.url}
                                                            alt={guide.featuredImage.alt || guide.title}
                                                            title={guide.featuredImage.title || guide.title}
                                                            style={{ width: "100%", height: "auto", display: "block" }}
                                                          />
                          {guide.featuredImage.caption && (
                                            <figcaption style={{ padding: "0.75rem 1rem", fontSize: "0.85rem", color: "var(--text-muted)", background: "rgba(255,255,255,0.02)" }}>
                                              {guide.featuredImage.caption}
                                            </figcaption>
                                        )}
                        </figure>
                                            )}
                                
                                  {/* Markdown rendered body styles */}
                                            <section
                                                            style={{
                                                                              fontSize: "1.05rem",
                                                                              color: "var(--text-secondary)",
                                                                              lineHeight: 1.8,
                                                                              whiteSpace: "pre-wrap",
                                                                              marginBottom: "3.5rem"
                                                            }}
                                                            className="guide-rich-content"
                                                          >
                                                          <div dangerouslySetInnerHTML={{ __html: formatRichText(guide.content) }} />
                                            </section>
                                
                                    {/* 👤 Premium E-E-A-T Author & Reviewer Box */}
                                    <section style={{ 
                                                    padding: "2.5rem", 
                        borderRadius: "20px", 
                        background: "rgba(255, 255, 255, 0.02)", 
                        border: "1px solid var(--border-color)",
                        marginTop: "3rem",
                        marginBottom: "4rem",
                        position: "relative"
        }}>
                                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }} className="panel-hero-grid">
                                                                    
                                                      {/* Author Block */}
                                                                    <div style={{ display: "flex", gap: "1.25rem", flexDirection: "column" }}>
                                                                                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                                                                                          <img 
                                                                                                                                  src="/placeholder-icon.svg" 
                                                                                                            alt="Marcus Vane" 
                                                                                                            style={{ 
                                                                                                                                      width: "60px", 
                                                                                                                                      height: "60px", 
                                                                                                                                      borderRadius: "50%", 
                                                                                                                                      border: "2px solid var(--accent-purple)",
                                                                                                                                      background: "var(--bg-secondary)",
                                                                                                                                      padding: "4px"
                                                                                                              }} 
                                                                                                          />
                                                                                                          <div>
                                                                                                                                <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)" }}>
                                                                                                                                                        Marcus Vane
                                                                                                                                  </div>
                                                                                                                                <div style={{ fontSize: "0.8rem", color: "var(--accent-purple)", fontWeight: 600 }}>
                                                                                                                                  {lc({
                                    en: "Lead Alt-Broadband Architect",
                                    es: "Arquitecto Jefe de Redes de Banda Ancha",
                                    fr: "Architecte Réseau Alt-Broadband",
                                    pt: "Arquiteto Principal de Banda Larga",
                                    sv: "Ledande Alt-Bredbandsarkitekt",
                                    no: "Ledende Alt-Bredbåndsarkitekt"
        })}
                                                                                                                                  </div>
                                                                                                            </div>
                                                                                        </div>
                                                                                      
                                                                                      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                                                                        {lc({
                                en: "Marcus Vane has spent 15+ years engineering alternative telecom networks and virtualized IPTV delivery architectures. A strong advocate for data security, he counsels startup digital entrepreneurs globally.",
                                es: "Marcus Vane lleva más de 15 años diseñando redes de telecomunicaciones alternativas y arquitecturas de IPTV virtualizadas. Defensor de la seguridad, asesora a emprendedores de todo el mundo.",
                                fr: "Marcus Vane conçoit des réseaux télécoms alternatifs et des architectures IPTV depuis plus de 15 ans. Expert en sécurité, il conseille les entrepreneurs du numérique.",
                                pt: "Marcus Vane tem mais de 15 anos de experiência na projeção de redes alternativas e IPTV. Especialista em segurança, ajuda empreendedores de todo o mundo.",
                                sv: "Marcus Vane har över 15 års erfarenhet av att bygga alternativa nätverk och IPTV-strukturer. Han brinner för datasäkerhet och guidar nya digitala entreprenörer.",
                                no: "Marcus Vane har over 15 års erfarenhet med å bygge alternative nettverk og IPTV-strukturer. Han brenner for datasikkerhet og veileder nye digitale entreprenører."
        })}
                                                                                        </p>
                                                                                      
                                                                      {/* Social Handles */}
                                                                                      <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "4px" }}>
                                                                                                          <Link href={`/${locale}/authors`} style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", textDecoration: "none", fontWeight: 700 }} className="animated-underline">
                                                                                                            {lc({ en: "View Portfolio ↗", es: "Ver Portafolio ↗", fr: "Voir le Portfolio ↗", pt: "Ver Portfólio ↗", sv: "Visa Portfölj ↗", no: "Se Portefølje ↗" })}
                                                                                                            </Link>
                                                                                                          <span style={{ color: "var(--border-color)" }}>|</span>
                                                                                                          <a href="https://twitter.com/marcusvane_iptv" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
                                                                                                                                Twitter/X
                                                                                                            </a>
                                                                                        </div>
                                                                    </div>
                                                    
                                                      {/* Reviewer / Verification Block */}
                                                                    <div style={{ display: "flex", gap: "1.25rem", flexDirection: "column", borderLeft: "1px solid var(--border-color)", paddingLeft: "2.5rem" }} className="reviewer-border-fix">
                                                                                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                                                                                          <div style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                border: "2px solid var(--accent-cyan)",
                                background: "linear-gradient(135deg, #1e293b, #0f172a)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.2rem",
                                fontWeight: 800,
                                color: "var(--accent-cyan)"
        }}>
                                                                                                                                CM
                                                                                                            </div>
                                                                                                          <div>
                                                                                                                                <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)" }}>
                                                                                                                                                        Carlos M.
                                                                                                                                  </div>
                                                                                                                                <div style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
                                                                                                                                  {lc({
                                    en: "Certified Broadband Specialist & Auditor",
                                    es: "Especialista Certificado en Banda Ancha",
                                    fr: "Spécialiste Certifié en Haut Débit",
                                    pt: "Especialista em Banda Larga Certificado",
                                    sv: "Certifierad Bredbandsspecialist",
                                    no: "Sertifisert Bredbåndsspesialist"
        })}
                                                                                                                                  </div>
                                                                                                            </div>
                                                                                        </div>
                                                                                      
                                                                                      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                                                                                          <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                                                                                                            {lc({
                                  en: "Double-Editorial Audit: ",
                                  es: "Auditoría Editorial Doble: ",
                                  fr: "Audit Double-Éditorial : ",
                                  pt: "Auditoria Editorial Dupla: ",
                                  sv: "Dubbel Redaktionell Granskning: ",
                                  no: "Dobbel Redaksjonell Revisjon: "
        })}
                                                                                                            </strong>
                                                                                        {lc({
                                en: "This masterclass has been audited for networking telemetry accuracy, WHMCS database hook security, and Cloudflare proxy guidelines.",
                                es: "Esta guía ha sido auditada para garantizar la precisión de la telemetría de red, la seguridad de las conexiones WHMCS y las directrices de Cloudflare.",
                                fr: "Ce guide a été audité pour valider la précision des données réseau, la sécurité WHMCS et la conformité aux exigences Cloudflare.",
                                pt: "Este guia foi auditado para garantir a precisão técnica das ligações de rede, segurança do WHMCS e diretrizes do Cloudflare.",
                                sv: "Denna guide har granskats för teknisk exakthet gällande nätverkstelemetri, WHMCS-säkerhet och Cloudflares riktlinjer.",
                                no: "Denne guiden har blitt revidert for teknisk nøyaktighet angående nettverkstelemetri, WHMCS-sikkerhet og Cloudflares retningslinjer."
        })}
                                                                                        </p>
                                                                                      
                                                                                      <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "4px" }}>
                                                                                                          <span style={{ fontSize: "0.8rem", color: "#22c55e", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                                                                                                                ✔ {lc({ en: "Verified Accurate", es: "Verificado Preciso", fr: "Vérifié Conforme", pt: "Verificado Exato", sv: "Verifierad Korrekt", no: "Verifisert Nøyaktig" })}
                                                                                                            </span>
                                                                                                          <span style={{ color: "var(--border-color)" }}>|</span>
                                                                                                          <Link href={`/${locale}/editorial-guidelines`} style={{ fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
                                                                                                            {lc({ en: "Editorial Guidelines", es: "Pautas Editoriales", fr: "Charte Éditoriale", pt: "Diretrizes Editoriais", sv: "Redaktionella Riktlinjer", no: "Redaksjonelle Retningslinjer" })}
                                                                                                            </Link>
                                                                                        </div>
                                                                    </div>
                                                    
                                                    </div>
                                    </section>
                      
                                  </div>{/* Quick FAQ Accordion */}
                            <section style={{ borderTop: "1px solid var(--border-color)", paddingTop: "3rem", marginBottom: "3rem" }}>
                                            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem" }}>
                                              {lc({ en: "Article Frequently Asked Questions", es: "Preguntas Frecuentes del Artículo" })}
                                            </h2>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                              {guide.faqs.map((faq, i) => (
                            <div key={i} className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px", background: "rgba(0,0,0,0.15)" }}>
                                                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, margin: "0 0 8px", color: "var(--text-primary)" }}>{faq.q}</h3>
                                                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>{faq.a}</p>
                            </div>
                          ))}
                                            </div>
                            </section>

                {/* Practical Action Box (CRO optimized) */}
                            <footer style={{
                        padding: "2.5rem",
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.06) 100%)",
                        border: "1px solid rgba(139, 92, 246, 0.25)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "2rem"
        }}>
                                            <div>
                                                            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", margin: "0 0 8px" }}>
                                                              {lc({ en: "Put This Masterclass into Action", es: "Ponga en Práctica esta Clase Magistral" })}
                                                            </h3>
                                                            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: 0, maxWidth: "550px" }}>
                                                              {lc({
                              en: "Start your own fully branded, white-label IPTV reseller franchise today. Direct mentor chat and panel trials are open.",
                              es: "Comience su propia franquicia de revendedor de IPTV de marca blanca hoy mismo. Soporte directo y pruebas abiertas."
        })}
                                                            </p>
                                            </div>
                                          <a
                                                            href={WHATSAPP_URL}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn-primary"
                                                            style={{
                                                                                display: "inline-flex", alignItems: "center", gap: 8,
                                                                                padding: "0.85rem 1.75rem", borderRadius: "10px",
                                                                                textDecoration: "none", fontSize: "0.95rem", fontWeight: 700
                                                            }}
                                                          >
                                                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                                                          </svg>
                                            {lc({ en: "Get Started on WhatsApp", es: "Comenzar en WhatsApp" })}
                                          </a>
                            </footer>
              </article>
        </div>
    </main>
    
          <Footer />
    
      {/* Styled inline components to style tables and rich markdown elements dynamically.
                Written as a self-closing style tag with dangerouslySetInnerHTML, instead of
                          a style open and close tag wrapping JSX children, because some editors
                                    mishandle that pairing around a large CSS template string. */}
          <style
                    dangerouslySetInnerHTML={{
                                __html: GUIDE_RICH_CONTENT_CSS,
                    }}
                  />
                      </>
      );
}

const GUIDE_RICH_CONTENT_CSS = `
  .guide-rich-content h2 {
      font-family: 'Outfit', sans-serif;
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--text-primary);
    margin: 2.25rem 0 1.25rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.5rem;
  }
  .guide-rich-content h3 {
      font-family: 'Outfit', sans-serif;
    font-size: 1.45rem;
    font-weight: 800;
    color: var(--text-primary);
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .guide-rich-content h4 {
      font-family: 'Outfit', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
  .guide-rich-content p {
      margin-bottom: 1.25rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }
  .guide-rich-content ul, .guide-rich-content ol {
      margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
  }
  .guide-rich-content li {
      margin-bottom: 0.5rem;
    line-height: 1.6;
  }
  .guide-rich-content table {
      width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0 2rem;
    font-size: 0.95rem;
  }
  .guide-rich-content th, .guide-rich-content td {
      padding: 1rem 1.25rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }
  .guide-rich-content th {
      background: rgba(255, 255, 255, 0.03);
    font-weight: 700;
    color: var(--text-primary);
  }
  .guide-rich-content tr:hover td {
      background: rgba(255, 255, 255, 0.015);
  }
  .guide-rich-content pre {
      background: rgba(0, 0, 0, 0.45);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.25rem;
    overflow-x: auto;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.875rem;
    margin: 1.5rem 0;
  }
  .guide-rich-content code {
      background: rgba(255, 255, 255, 0.06);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
    color: var(--accent-cyan);
  }
  .guide-rich-content pre code {
      background: transparent;
    padding: 0;
    border-radius: 0;
    color: inherit;
    font-size: inherit;
  }
  @media (max-width: 768px) {
      .reviewer-border-fix {
            border-left: none !important;
      padding-left: 0 !important;
      border-top: 1px solid var(--border-color) !important;
      padding-top: 2rem !important;
  }
  }
  `;
  

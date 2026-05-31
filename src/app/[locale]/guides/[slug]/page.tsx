import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getGuides } from "@/app/lib/guidesData";
import { setRequestLocale } from "next-intl/server";

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

  // Load target guide
  const guides = getGuides(locale);
  const guide = guides.find((g) => g.id === slug);

  if (!guide) {
    notFound();
  }

  const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

  // Dynamic local translation strings
  const lc = (map: Record<string, string>) => map[locale] ?? map["en"] ?? "";

  // 📝 Dynamic Article Schema (Strict E-E-A-T & Helpful Content Compliant)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `https://foxiptvpanels.com/${locale}/guides/${guide.id}/#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://foxiptvpanels.com/${locale}/guides/${guide.id}`
    },
    "headline": guide.title,
    "description": guide.seoDescription,
    "image": "https://foxiptvpanels.com/og-image.png",
    "datePublished": "2026-05-24T08:00:00+00:00",
    "dateModified": "2026-05-31T08:00:00+00:00",
    "author": {
      "@type": "Person",
      "@id": "https://foxiptvpanels.com/#author-marcusvane",
      "name": "Marcus Vane",
      "jobTitle": "Lead Alt-Broadband Network Architect",
      "knowsAbout": ["IPTV portal customization", "reseller panel setups", "Xtream Codes API integration", "network peerings"],
      "sameAs": ["https://twitter.com/marcusvane_iptv"]
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://foxiptvpanels.com/#organization",
      "name": "Fox IPTV Panels",
      "logo": {
        "@type": "ImageObject",
        "url": "https://foxiptvpanels.com/logo.png"
      }
    }
  };

  // 📝 Dynamic FAQ Schema for zero-click Featured Snippet capture
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guide.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      {/* Dynamic SEO Title and Metadata tags */}
      <title>{guide.seoTitle}</title>
      <meta name="description" content={guide.seoDescription} />
      <link rel="canonical" href={`https://foxiptvpanels.com/${locale}/guides/${guide.id}`} />

      {/* Structured dynamic schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            {/* Header info */}
            <header style={{ marginBottom: "2.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "2rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: "1rem" }}>
                <span className="tag">{guide.category}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{guide.readTime}</span>
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
                      es: "Arquitecto de Redes de Banda Ancha Alternativas • Especialista Certificado en IPTV"
                    })}
                  </div>
                </div>
              </div>
            </header>

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

            {/* Quick FAQ Accordion */}
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

      {/* Styled inline components to style tables and rich markdown elements dynamically */}
      <style>{`
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
      `}</style>
    </>
  );
}

// Full, custom, zero-dependency Markdown-to-HTML parser matching SEO entities and layout tokens
function formatRichText(text: string): string {
  const lines = text.split(/\r?\n/);
  let html = "";
  
  let inList = false;
  let listType: "ul" | "ol" | null = null;
  let inTable = false;
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];
  
  let inCodeBlock = false;
  let codeBlockLang = "";
  let codeBlockLines: string[] = [];
  
  let inAlert = false;
  let alertType = "";
  let alertLines: string[] = [];

  const flushList = () => {
    if (inList && listType) {
      html += `</${listType}>\n`;
      inList = false;
      listType = null;
    }
  };

  const flushTable = () => {
    if (inTable) {
      html += `<div style="overflow-x: auto; width: 100%; margin: 1.5rem 0 2rem; border-radius: 12px; border: 1px solid var(--border-color); background: rgba(255, 255, 255, 0.02);">\n`;
      html += `<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">\n`;
      
      if (tableHeaders.length > 0) {
        html += `<thead>\n<tr style="border-bottom: 2px solid var(--border-color); background: rgba(255,255,255,0.03);">\n`;
        tableHeaders.forEach(h => {
          html += `<th style="padding: 1rem 1.25rem; font-weight: 700; color: var(--text-primary);">${inlineMarkdown(h)}</th>\n`;
        });
        html += `</tr>\n</thead>\n`;
      }
      
      html += `<tbody>\n`;
      tableRows.forEach(row => {
        html += `<tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;">\n`;
        row.forEach(cell => {
          html += `<td style="padding: 1rem 1.25rem; color: var(--text-secondary);">${inlineMarkdown(cell)}</td>\n`;
        });
        html += `</tr>\n`;
      });
      html += `</tbody>\n</table>\n</div>\n`;
      
      inTable = false;
      tableHeaders = [];
      tableRows = [];
    }
  };

  const flushCodeBlock = () => {
    if (inCodeBlock) {
      const codeContent = codeBlockLines.join("\n");
      let color = "var(--text-secondary)";
      if (codeBlockLang === "http") color = "#38bdf8";
      else if (codeBlockLang === "json") color = "#a78bfa";
      else if (codeBlockLang === "bash" || codeBlockLang === "sh") color = "#34d399";
      
      html += `<pre style="background: rgba(0,0,0,0.45); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem; overflow-x: auto; font-family: monospace; font-size: 0.875rem; color: ${color}; margin: 1.5rem 0;">`;
      html += `<code style="font-family: inherit;">${escapeHtml(codeContent)}</code>`;
      html += `</pre>\n`;
      
      inCodeBlock = false;
      codeBlockLines = [];
    }
  };

  const flushAlert = () => {
    if (inAlert) {
      const alertContent = alertLines.join(" ");
      let borderCol = "var(--accent-purple)";
      let bg = "rgba(139,92,246,0.04)";
      let icon = "📝";
      let title = "Note";
      
      if (alertType === "TIP") {
        borderCol = "var(--accent-cyan)";
        bg = "rgba(6,182,212,0.04)";
        icon = "💡";
        title = "Tip";
      } else if (alertType === "WARNING") {
        borderCol = "#ef4444";
        bg = "rgba(239,68,68,0.04)";
        icon = "⚠️";
        title = "Warning";
      } else if (alertType === "IMPORTANT") {
        borderCol = "var(--accent-cyan)";
        bg = "rgba(6,182,212,0.05)";
        icon = "⚡";
        title = "Important";
      }

      // If the first words are bolded, e.g. **Title:** or **Title**, extract them
      let displayTitle = title;
      let cleanContent = alertContent;
      const boldMatch = alertContent.match(/^\*\*([^*]+)\*\*:(.*)$/) || alertContent.match(/^\*\*([^*]+)\*\*(.*)$/);
      if (boldMatch) {
        displayTitle = boldMatch[1];
        cleanContent = boldMatch[2];
      }

      html += `<div class="glass-card" style="padding: 1.25rem 1.5rem; border-left: 4px solid ${borderCol}; border-radius: 8px; margin: 1.5rem 0; background: ${bg}">`;
      html += `<strong style="color: ${borderCol}; display: inline-flex; align-items: center; gap: 6px;">${icon} ${displayTitle}</strong>`;
      html += `<p style="margin: 0.5rem 0 0; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${inlineMarkdown(cleanContent.trim())}</p>`;
      html += `</div>\n`;
      
      inAlert = false;
      alertLines = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Parse Code Blocks
    if (trimmed.startsWith("[CODE_START_HTTP]") || trimmed.startsWith("[CODE_START_JSON]") || trimmed.startsWith("```")) {
      if (inCodeBlock) {
        flushCodeBlock();
      } else {
        flushList();
        flushTable();
        flushAlert();
        inCodeBlock = true;
        if (trimmed.startsWith("[CODE_START_HTTP]")) codeBlockLang = "http";
        else if (trimmed.startsWith("[CODE_START_JSON]")) codeBlockLang = "json";
        else codeBlockLang = trimmed.slice(3).toLowerCase();
      }
      continue;
    }
    if (trimmed.startsWith("[CODE_END]") || (trimmed === "```" && inCodeBlock)) {
      flushCodeBlock();
      continue;
    }
    if (inCodeBlock) {
      codeBlockLines.push(line);
      continue;
    }

    // 2. Parse Alerts / Blockquotes
    if (trimmed.startsWith("> [!")) {
      flushList();
      flushTable();
      flushAlert();
      inAlert = true;
      const typeMatch = trimmed.match(/>\s*\[!([A-Z]+)\]/);
      alertType = typeMatch ? typeMatch[1] : "NOTE";
      
      const rest = trimmed.replace(/>\s*\[![A-Z]+\]/, "").trim();
      if (rest) alertLines.push(rest);
      continue;
    }
    if (inAlert && line.startsWith(">")) {
      const rest = line.substring(1).trim();
      alertLines.push(rest);
      continue;
    } else if (inAlert && !line.startsWith(">") && trimmed !== "") {
      flushAlert();
    }

    // 3. Parse Tables
    if (trimmed.startsWith("|")) {
      flushList();
      flushAlert();
      
      const cells = trimmed.split("|").map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
      const isSeparator = cells.every(c => c.startsWith(":") || c.endsWith(":") || c.startsWith("-") || c.includes("---"));
      
      if (isSeparator) {
        continue;
      }
      
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable && !trimmed.startsWith("|")) {
      flushTable();
    }

    // 4. Parse Lists
    const bulletMatch = trimmed.match(/^[\*\-\+]\s+(.*)$/);
    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);

    if (bulletMatch) {
      flushTable();
      flushAlert();
      if (!inList || listType !== "ul") {
        flushList();
        inList = true;
        listType = "ul";
        html += `<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; list-style-type: disc; color: var(--text-secondary);">\n`;
      }
      html += `<li style="margin-bottom: 0.5rem; line-height: 1.6;">${inlineMarkdown(bulletMatch[1])}</li>\n`;
      continue;
    }

    if (numMatch) {
      flushTable();
      flushAlert();
      if (!inList || listType !== "ol") {
        flushList();
        inList = true;
        listType = "ol";
        html += `<ol style="margin-left: 1.5rem; margin-bottom: 1.5rem; list-style-type: decimal; color: var(--text-secondary);">\n`;
      }
      html += `<li style="margin-bottom: 0.5rem; line-height: 1.6;">${inlineMarkdown(numMatch[2])}</li>\n`;
      continue;
    }

    if (trimmed === "") {
      flushList();
      flushTable();
      flushAlert();
      continue;
    }

    // 5. Parse Headings
    const h3Match = trimmed.match(/^###\s+(.*)$/);
    const h4Match = trimmed.match(/^####\s+(.*)$/);
    const h2Match = trimmed.match(/^##\s+(.*)$/);

    if (h3Match) {
      flushList();
      flushTable();
      flushAlert();
      html += `<h3 style="font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin: 2rem 0 1rem;">${inlineMarkdown(h3Match[1])}</h3>\n`;
      continue;
    }
    if (h4Match) {
      flushList();
      flushTable();
      flushAlert();
      html += `<h4 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 1.75rem 0 1rem;">${inlineMarkdown(h4Match[1])}</h4>\n`;
      continue;
    }
    if (h2Match) {
      flushList();
      flushTable();
      flushAlert();
      html += `<h2 style="font-family: 'Outfit', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin: 2.25rem 0 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">${inlineMarkdown(h2Match[1])}</h2>\n`;
      continue;
    }

    // Default Paragraph line
    flushList();
    flushTable();
    flushAlert();
    html += `<p style="margin-bottom: 1.25rem; line-height: 1.8; color: var(--text-secondary);">${inlineMarkdown(trimmed)}</p>\n`;
  }

  // Final flush of remaining elements
  flushList();
  flushTable();
  flushAlert();
  flushCodeBlock();

  return html;
}

function inlineMarkdown(text: string): string {
  let html = text;

  // Bold text: **text** -> <strong>
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong style="color: var(--text-primary); font-weight: 700;">$1</strong>');

  // Italic text: *text* -> <em>
  html = html.replace(/\*([^*]+)\*/g, '<em style="color: var(--text-secondary); font-style: italic;">$1</em>');

  // Inline code: `code`
  html = html.replace(/`([^`]+)`/g, '<code style="background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; color: var(--accent-cyan);">$1</code>');

  // Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="animated-underline" style="color: var(--accent-cyan); text-decoration: none; font-weight: 600;">$1</a>');

  return html;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

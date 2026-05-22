"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { useLocale } from "next-intl";
import { PanelData, getRelatedPanels } from "../lib/panelData";
import { PanelLogo } from "./PanelLogos";

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

interface Props { panel: PanelData; }

export default function PanelPageTemplate({ panel }: Props) {
  const locale = useLocale();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
    }
  }, [panel.slug]);

  const related = getRelatedPanels(panel.relatedSlugs);

  const pageTitle = `${panel.name} IPTV Reseller Panel — Get Credits & Dashboard | Fox IPTV Panels`;
  const canonicalUrl = `https://foxiptvpanels.com/${panel.slug}`;
  const panelSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${panel.name} IPTV Reseller Panel`,
    description: panel.description,
    url: canonicalUrl,
    brand: { "@type": "Brand", name: "Fox IPTV Panels" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "GBP",
      seller: { "@type": "Organization", name: "Fox IPTV Panels" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: panel.faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      {/* React 19 native metadata hoisting — bypasses Next.js metadata API */}
      <title>{pageTitle}</title>
      <meta name="description" content={panel.description} />
      <meta name="keywords" content={[
        `${panel.name} iptv reseller panel`,
        `${panel.name} iptv panel`,
        "iptv reseller panel",
        "best iptv reseller panel",
        "buy iptv reseller credits",
        "white label iptv panel",
        "xtream codes reseller",
      ].join(", ")} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={`${panel.name} IPTV Reseller Panel | Fox IPTV Panels`} />
      <meta property="og:description" content={panel.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${panel.name} IPTV Reseller Panel | Fox IPTV Panels`} />
      <meta name="twitter:description" content={panel.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(panelSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />
      <main id="main-content" style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "80px" }}>
      {/* Breadcrumb */}
      <div className="section-container" style={{ paddingTop: "1.5rem", paddingBottom: 0 }}>
        <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)" }}>
          <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
          <span aria-hidden="true">›</span>
          <Link href={`/${locale}#panels`} style={{ color: "var(--text-muted)", textDecoration: "none" }}>IPTV Reseller Panels</Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: "var(--text-secondary)" }}>{panel.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section
        aria-label={`${panel.name} IPTV Reseller Panel — Hero`}
        style={{
          padding: "5rem 0 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at 30% 50%, ${panel.accentColor}14 0%, transparent 60%)`,
          pointerEvents: "none",
        }} />

        <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }} className="panel-hero-grid">

            {/* Left */}
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "1.25rem" }}>
                <div className="tag">{panel.qualityBadge} Streaming</div>
                {panel.badge && (
                  <div style={{
                    display: "inline-flex", alignItems: "center",
                    padding: "4px 12px", borderRadius: 999,
                    fontSize: "0.75rem", fontWeight: 700,
                    background: `${panel.accentColor}20`,
                    border: `1px solid ${panel.accentColor}40`,
                    color: panel.accentColor,
                  }}>
                    ★ {panel.badge}
                  </div>
                )}
              </div>

              <h1 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
              }}>
                <span className="gradient-text">{panel.name}</span>{" "}
                IPTV Reseller Panel
              </h1>

              <p style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "1rem",
              }}>
                {panel.description}
              </p>

              <p style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}>
                {panel.longDescription}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`${panel.slug}-hero-cta`}
                  className="btn-primary"
                  aria-label={`Get ${panel.name} IPTV reseller panel credits on WhatsApp`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "0.9rem 2rem", borderRadius: 10,
                    textDecoration: "none", fontSize: "1rem", fontWeight: 700,
                    position: "relative", overflow: "hidden",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  Get {panel.name} Reseller Credits
                </a>

                <Link
                  href={`/${locale}#panels`}
                  className="btn-secondary"
                  aria-label="View all IPTV reseller panels"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "0.9rem 1.75rem", borderRadius: 10,
                    textDecoration: "none", fontSize: "1rem",
                  }}
                >
                  All IPTV Panels
                </Link>
              </div>
            </div>

            {/* Right: Spec cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {panel.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="glass-card"
                  style={{
                    borderRadius: 10,
                    padding: "0.875rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600 }}>{spec.label}</span>
                  <span style={{
                    fontSize: "0.88rem", fontWeight: 700,
                    background: `linear-gradient(135deg, ${panel.accentColor}, #3b82f6)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Features */}
      <section
        aria-label={`${panel.name} IPTV Reseller Panel Features`}
        style={{ padding: "5rem 0", borderTop: "1px solid var(--border-color)", background: "rgba(0,0,0,0.15)" }}
      >
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="tag" style={{ marginBottom: "1rem" }}>{panel.name} Panel Features</div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              lineHeight: 1.2,
              color: "var(--text-primary)",
            }}>
              What You Get with the{" "}
              <span className="gradient-text">{panel.name} Reseller Panel</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}>
            {panel.features.map((feature, i) => (
              <div key={i} className="glass-card" style={{
                borderRadius: 12, padding: "1.25rem",
                display: "flex", alignItems: "flex-start", gap: 12,
                background: `linear-gradient(135deg, ${panel.accentColor}08, rgba(255,255,255,0.02))`,
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: `${panel.accentColor}18`,
                  border: `1px solid ${panel.accentColor}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.9rem",
                }} aria-hidden="true">✓</div>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 500 }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section
        aria-label={`How to Get Started with ${panel.name} IPTV Reseller Panel`}
        style={{ padding: "5rem 0", borderTop: "1px solid var(--border-color)" }}
      >
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="tag" style={{ marginBottom: "1rem" }}>Getting Started</div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              lineHeight: 1.2,
              color: "var(--text-primary)",
            }}>
              How to Start Reselling{" "}
              <span className="gradient-text">{panel.name} IPTV</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
            maxWidth: 900,
            margin: "0 auto",
          }}>
            {[
              { step: "01", icon: "💬", title: "Contact Fox IPTV Panels", desc: `Message us on WhatsApp and tell us you want to become a ${panel.name} IPTV reseller.` },
              { step: "02", icon: "💳", title: "Buy Reseller Credits", desc: `Choose your ${panel.name} credit package — starter, growth, or wholesale bulk bundle.` },
              { step: "03", icon: "🔐", title: "Get Panel Login", desc: `Receive your ${panel.name} IPTV reseller panel login credentials and dashboard access instantly.` },
              { step: "04", icon: "📈", title: "Start & Grow", desc: `Create customer subscriptions, set your pricing, and grow your IPTV reselling business.` },
            ].map((s, i) => (
              <div key={i} className="glass-card" style={{ borderRadius: 14, padding: "1.75rem", textAlign: "center" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${panel.accentColor}, #3b82f6)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.3rem", margin: "0 auto 1rem",
                  boxShadow: `0 0 20px ${panel.accentColor}40`,
                }} aria-hidden="true">{s.icon}</div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, color: panel.accentColor, letterSpacing: "0.1em", marginBottom: 6 }}>STEP {s.step}</div>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8, fontSize: "0.95rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id={`${panel.slug}-start-cta`}
              className="btn-primary"
              aria-label={`Start ${panel.name} IPTV reseller business on WhatsApp`}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "1rem 2.25rem", borderRadius: 12,
                textDecoration: "none", fontSize: "1rem", fontWeight: 700,
                position: "relative", overflow: "hidden",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Get Started on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-label={`${panel.name} IPTV Reseller Panel FAQ`}
        style={{ padding: "5rem 0", borderTop: "1px solid var(--border-color)", background: "rgba(0,0,0,0.1)" }}
      >
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="tag" style={{ marginBottom: "1rem" }}>FAQ</div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              lineHeight: 1.2,
              color: "var(--text-primary)",
            }}>
              <span className="gradient-text">{panel.name}</span> IPTV Reseller Panel Questions
            </h2>
          </div>

          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {panel.faqs.map((faq, i) => (
              <div key={i} className="glass-card" style={{ borderRadius: 12, overflow: "hidden" }}>
                <details>
                  <summary style={{
                    padding: "1.25rem 1.5rem",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
                    fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)",
                    listStyle: "none", userSelect: "none", cursor: "pointer",
                  }}>
                    <span>{faq.q}</span>
                    <span style={{
                      width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                      background: `${panel.accentColor}20`, border: `1px solid ${panel.accentColor}40`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.9rem", color: panel.accentColor,
                    }} aria-hidden="true">+</span>
                  </summary>
                  <div style={{
                    padding: "0 1.5rem 1.25rem",
                    borderTop: "1px solid var(--border-color)",
                    paddingTop: "1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    fontSize: "0.9rem",
                  }}>
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Panels — internal linking */}
      {related.length > 0 && (
        <section
          aria-label={`Related IPTV Reseller Panels — Similar to ${panel.name}`}
          style={{ padding: "5rem 0", borderTop: "1px solid var(--border-color)" }}
        >
          <div className="section-container">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div className="tag" style={{ marginBottom: "1rem" }}>Related IPTV Panels</div>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "var(--text-primary)",
              }}>
                Other Top{" "}
                <span className="gradient-text">IPTV Reseller Panels</span>
              </h2>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}>
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${locale}/${rel.slug}`}
                  style={{ textDecoration: "none" }}
                  aria-label={`${rel.name} IPTV reseller panel`}
                >
                  <div className="glass-card" style={{
                    borderRadius: 12, padding: "1.5rem",
                    background: `linear-gradient(135deg, ${rel.accentColor}08, rgba(255,255,255,0.02))`,
                  }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 10, marginBottom: "0.75rem",
                    }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: `${rel.accentColor}18`,
                        border: `1px solid ${rel.accentColor}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }} aria-hidden="true">
                        <PanelLogo slug={rel.slug} color={rel.accentColor} size={18} />
                      </div>
                      <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>{rel.name}</span>
                      {rel.badge && (
                        <span style={{
                          fontSize: "0.6rem", fontWeight: 700,
                          padding: "2px 6px", borderRadius: 4,
                          background: `${rel.accentColor}20`, color: rel.accentColor,
                          border: `1px solid ${rel.accentColor}30`,
                        }}>{rel.badge}</span>
                      )}
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "0.875rem" }}>
                      {rel.quality} · {rel.dashboardType}
                    </p>
                    <div style={{
                      fontSize: "0.78rem", fontWeight: 600, color: rel.accentColor,
                      display: "flex", alignItems: "center", gap: 4,
                    }}>
                      View Panel
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="9,18 15,12 9,6"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link
                href={`/${locale}#panels`}
                className="btn-secondary"
                aria-label="View all 20+ IPTV reseller panels"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "0.85rem 2rem", borderRadius: 10,
                  textDecoration: "none", fontSize: "0.95rem",
                }}
              >
                View All 20+ IPTV Reseller Panels
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9,18 15,12 9,6"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section
        aria-label={`Start ${panel.name} IPTV Reseller Business — Get Credits Today`}
        style={{
          padding: "5rem 0",
          borderTop: "1px solid var(--border-color)",
          background: `linear-gradient(135deg, ${panel.accentColor}08 0%, rgba(59,130,246,0.04) 100%)`,
          textAlign: "center",
        }}
      >
        <div className="section-container">
          <div className="tag" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
            🚀 Start Reselling {panel.name} Today
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            lineHeight: 1.2,
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}>
            Ready to Become a{" "}
            <span className="gradient-text">{panel.name} IPTV Reseller?</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Get your {panel.name} IPTV reseller panel login, buy credits instantly, and launch your IPTV reselling business today.
            Free trial available. 24/7 WhatsApp support. Serving resellers in the UK, USA &amp; EU.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id={`${panel.slug}-final-cta`}
            className="btn-primary"
            aria-label={`Buy ${panel.name} IPTV reseller credits on WhatsApp`}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "1.1rem 2.5rem", borderRadius: 12,
              textDecoration: "none", fontSize: "1.05rem", fontWeight: 700,
              position: "relative", overflow: "hidden",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            Buy {panel.name} Reseller Credits Now
          </a>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

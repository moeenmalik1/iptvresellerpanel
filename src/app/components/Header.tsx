"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ALL_PANELS } from "@/app/lib/panelData";

const WHATSAPP_URL = "https://wa.me/447463012833?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

interface CountryOption {
  code: string;
  name: string;
  flag: string;
}

const countries: CountryOption[] = [
  { code: "en", name: "US", flag: "🇺🇸" },
  { code: "en-gb", name: "UK", flag: "🇬🇧" },
  { code: "en-au", name: "AU", flag: "🇦🇺" },
  { code: "es", name: "ES", flag: "🇪🇸" },
  { code: "fr", name: "FR", flag: "🇫🇷" },
  { code: "sv", name: "SE", flag: "🇸🇪" },
  { code: "pt", name: "PT", flag: "🇵🇹" },
  { code: "no", name: "NO", flag: "🇳🇴" },
];

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const n = useTranslations("nav");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (!href) return;

      const isHomepage = pathname === `/${locale}` || pathname === `/${locale}/`;

      if (href.startsWith("#")) {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      } else if (href.startsWith("/#") && isHomepage) {
        const id = href.substring(2);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Close language selector when clicking outside
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".lang-selector-container")) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [pathname, locale]);

  // Prepend active locale to static links
  const navLinks = useMemo(() => [
    { label: n("home"), href: `/${locale}` },
    { label: n("panels"), href: `/${locale}#panels`, isDropdown: true },
    { label: n("comparisons"), href: `/${locale}/comparisons` },
    { label: n("guides"), href: `/${locale}/guides` },
    { label: n("about"), href: `/${locale}/about` },
    { label: n("contact"), href: `/${locale}/contact` },
  ], [locale, n]);

  // Find active country details
  const activeCountry = useMemo(() => {
    return countries.find(c => c.code === locale) || countries[0];
  }, [locale]);

  // Handle switching languages preserving sub-paths
  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split("/");
    const supportedLocales = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];
    
    if (supportedLocales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    
    const newPath = segments.join("/");
    setLangDropdownOpen(false);
    router.push(newPath);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(8,10,18,0.95)" : "rgba(8,10,18,0.4)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="section-container" style={{ padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo with Organization Schema */}
          <Link 
            href={`/${locale}`} 
            style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
            itemScope 
            itemType="http://schema.org/Organization"
          >
            <meta itemProp="name" content="Fox IPTV Panels" />
            <meta itemProp="url" content="https://foxiptvpanels.com" />
            <img 
              src="/logo.png" 
              alt="Fox IPTV Panels Logo" 
              itemProp="logo" 
              style={{ height: "36px", width: "auto" }} 
            />
          </Link>

          {/* Desktop Nav with SiteNavigationElement Schema */}
          <nav 
            style={{ display: "flex", alignItems: "center", gap: "1.75rem" }} 
            className="hidden-mobile"
            itemScope 
            itemType="http://schema.org/SiteNavigationElement"
          >
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.label} className="dropdown">
                    <button
                      className="dropdown-trigger animated-underline"
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "0.5rem 0",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <span itemProp="name">{link.label}</span>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    <div className="dropdown-menu">
                      {ALL_PANELS.map((panel) => (
                        <Link
                          key={panel.slug}
                          href={`/${locale}/${panel.slug}`}
                          className="dropdown-item"
                          itemProp="url"
                          style={{
                            color: "var(--text-muted)",
                            textDecoration: "none",
                            fontSize: "0.76rem",
                            fontWeight: 600,
                            padding: "8px 12px",
                            borderRadius: 6,
                            transition: "all 0.2s",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <span style={{ color: panel.accentColor || "#ea580c", fontSize: "0.6rem" }}>●</span>
                          <span itemProp="name">{panel.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className="animated-underline" 
                  itemProp="url"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <span itemProp="name">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Interactive Actions Group */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Visual Country Language Selector */}
            <div className="lang-selector-container" style={{ position: "relative" }}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "0.4rem 0.6rem",
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.border = "1px solid rgba(234, 88, 12, 0.4)")}
                onMouseLeave={e => (e.currentTarget.style.border = scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.08)")}
              >
                <span>{activeCountry.flag}</span>
                <span className="hidden-mobile">{activeCountry.name}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: langDropdownOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {langDropdownOpen && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  marginTop: "8px",
                  width: "180px",
                  background: "rgba(9, 13, 22, 0.98)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "10px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                  padding: "6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  zIndex: 200,
                }}>
                  {countries.map(c => (
                    <button
                      key={c.code}
                      onClick={() => handleLocaleChange(c.code)}
                      style={{
                        background: locale === c.code ? "rgba(234, 88, 12, 0.15)" : "transparent",
                        border: "none",
                        borderRadius: "6px",
                        padding: "8px 10px",
                        color: locale === c.code ? "#ea580c" : "var(--text-secondary)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "all 0.2s",
                        width: "100%",
                      }}
                      onMouseEnter={e => {
                        if (locale !== c.code) {
                          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                          e.currentTarget.style.color = "var(--text-primary)";
                        }
                      }}
                      onMouseLeave={e => {
                        if (locale !== c.code) {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "var(--text-secondary)";
                        }
                      }}
                    >
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="btn-primary hidden-mobile"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "0.55rem 1.25rem", borderRadius: 8,
                textDecoration: "none", fontSize: "0.875rem",
                fontWeight: 700, position: "relative", overflow: "hidden",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              {(() => { const t: Record<string, string> = { en: "Start Reselling", "en-gb": "Start Reselling", "en-au": "Start Reselling", es: "Iniciar Reventa", fr: "Commencer la Revente", pt: "Iniciar Revenda", sv: "Börja Återförsälja", no: "Start Videresalg" }; return t[locale] || t.en; })()}
            </a>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <div style={{ width: 22, height: 2, background: "var(--text-primary)", marginBottom: 5, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
              <div style={{ width: 22, height: 2, background: "var(--text-primary)", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
              <div style={{ width: 22, height: 2, background: "var(--text-primary)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            borderTop: "1px solid var(--border-color)",
            padding: "1rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            background: "rgba(8,10,18,0.98)",
          }}>
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.label} style={{ display: "flex", flexDirection: "column" }}>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--text-secondary)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        padding: "0.5rem 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      <span>{link.label}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform: mobileDropdownOpen ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s",
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {mobileDropdownOpen && (
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "6px",
                        padding: "0.5rem 0.75rem",
                        background: "rgba(255,255,255,0.02)",
                        borderRadius: 8,
                        marginTop: 4,
                      }}>
                        {ALL_PANELS.map((panel) => (
                          <Link
                            key={panel.slug}
                            href={`/${locale}/${panel.slug}`}
                            style={{
                              color: "var(--text-muted)",
                              textDecoration: "none",
                              fontSize: "0.82rem",
                              padding: "4px 8px",
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                            onClick={() => setMenuOpen(false)}
                          >
                            <span style={{ color: panel.accentColor || "#ea580c", fontSize: "0.6rem" }}>●</span>
                            {panel.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={link.label} href={link.href} style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "0.5rem 0",
                }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        .dropdown {
          position: relative;
          display: inline-block;
        }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 580px;
          background: rgba(9, 13, 22, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.6);
          padding: 1rem;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          z-index: 1000;
          margin-top: 10px;
        }
        .dropdown:hover .dropdown-menu {
          display: grid;
        }
        .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-primary) !important;
        }
        .dropdown-trigger:hover {
          color: var(--text-primary) !important;
        }
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </header>
  );
}

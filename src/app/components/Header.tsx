"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Servers", href: "/servers" },
  { label: "Comparisons", href: "/comparisons" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(8,10,18,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="section-container" style={{ padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 20px rgba(139,92,246,0.4)",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 012 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
              </svg>
            </div>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "1.15rem",
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #f0f0ff 0%, #c4b5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              FOX IPTV PANELS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="animated-underline" style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="btn-primary"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "0.55rem 1.25rem", borderRadius: 8,
                textDecoration: "none", fontSize: "0.875rem",
                fontWeight: 600, position: "relative", overflow: "hidden",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Start Reselling
            </a>

            {/* Mobile burger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }}
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
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "0.5rem 0",
              }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </header>
  );
}

import React from "react";

interface PanelLogoProps {
  slug: string;
  color: string;
  size?: number;
}

export function PanelLogo({ slug, color, size = 22 }: PanelLogoProps) {
  switch (slug) {
    case "b1g-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 15 10-15-10-5z" />
          <path d="M12 22V12" />
          <path d="M12 12H7" />
          <path d="M17 12h-5" />
        </svg>
      );
    case "strong-4k-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M13 6l-4 6h5l-3 6" />
        </svg>
      );
    case "strong-8k-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 10a2 2 0 100 4 2 2 0 000-4z" />
          <path d="M8 12h8" />
        </svg>
      );
    case "4k-ott-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" />
          <polygon points="10 7 15 10 10 13" fill={`${color}22`} />
          <path d="M12 17v4M8 21h8" />
        </svg>
      );
    case "lion-ott-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4l3 12h14l3-12-6 6-4-6-4 6-6-6z" fill={`${color}11`} />
          <path d="M3 20h18" />
          <circle cx="12" cy="13" r="2" />
        </svg>
      );
    case "ultra-8k-ott-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" fill={`${color}11`} />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "dino-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20h18M6 20V8l6 12M12 20V5l6 15" />
          <circle cx="18" cy="8" r="2" />
        </svg>
      );
    case "trex-ott-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 4L12 20M14 4L6 20M24 4l-8 16M4 4l8 16" />
        </svg>
      );
    case "mega-ott-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20V4l9 9 9-9v16" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "extra-ott-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="6" />
        </svg>
      );
    case "max-ott-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
      );
    case "zen-4k-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 010 18z" fill={`${color}22`} />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "nexon-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
          <path d="M5.5 5.5l4.5 4.5m4 4l4.5 4.5" />
        </svg>
      );
    case "infinity-premium-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 100 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 100-8c-2 0-4 1.33-6 4z" />
        </svg>
      );
    case "gtv-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="15" rx="3" />
          <circle cx="12" cy="10.5" r="4.5" />
          <path d="M2 18h20" />
        </svg>
      );
    case "crystal-ott-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8 12 22 2 8" fill={`${color}11`} />
          <line x1="12" y1="2" x2="12" y2="22" />
          <polyline points="2 8 12 11 22 8" />
        </svg>
      );
    case "starshare-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <circle cx="12" cy="11.5" r="2.5" />
        </svg>
      );
    case "tiger-ott-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3c2 4 1 12 3 18M11 3c2 4 1 12 3 18M16 3c2 4 1 12 3 18" />
        </svg>
      );
    case "opplex-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="12" r="5" />
          <circle cx="16" cy="12" r="5" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    case "geo-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      );
    case "5g-live-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 18h.01M8 14c2.5-3 5.5-3 8 0M5 10c4.5-5 9.5-5 14 0M2 6c6.5-7 13.5-7 20 0" />
        </svg>
      );
    case "magnum-golden-ott-iptv-reseller-panel":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4l3 12h14l3-12-6 6-4-6-4 6-6-6z" fill={`${color}22`} />
          <path d="M5 20h14" />
          <line x1="12" y1="12" x2="12" y2="20" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
  }
}

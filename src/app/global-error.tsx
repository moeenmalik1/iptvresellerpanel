"use client";

/**
 * Custom global error boundary — overrides Next.js 16 built-in /_global-error
 * to avoid a workStore prerender bug in Next.js 16.2.6 that causes the built-in
 * global-error page to fail during parallel static generation.
 *
 * Must be a Client Component and must include <html> and <body> tags per Next.js spec.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Something went wrong | Fox IPTV Panels</title>
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "'Inter', system-ui, sans-serif",
          background: "#080a12",
          color: "#f0f0ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚡</div>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "1.75rem",
              marginBottom: "0.75rem",
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Something went wrong
          </h1>
          <p style={{ color: "#a0a8c0", marginBottom: "2rem", lineHeight: 1.6 }}>
            An unexpected error occurred. Our team has been notified.
            <br />
            Please try again or contact us on WhatsApp.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={reset}
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: 10,
                border: "none",
                background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "#f0f0ff",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

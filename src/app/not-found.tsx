import Link from "next/link";

/**
 * Custom 404 page — overrides Next.js 16 built-in /_not-found to avoid
 * a workStore prerender bug that affects parallel static generation workers.
 */
export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 — Page Not Found | Fox IPTV Panels</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Visit Fox IPTV Panels to find the best IPTV reseller panels."
        />
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
          <div
            style={{
              fontSize: "5rem",
              fontWeight: 900,
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "0.5rem",
              lineHeight: 1,
            }}
          >
            404
          </div>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "1.5rem",
              color: "#f0f0ff",
              marginBottom: "0.75rem",
            }}
          >
            Page Not Found
          </h1>
          <p
            style={{
              color: "#a0a8c0",
              marginBottom: "2rem",
              lineHeight: 1.7,
              maxWidth: 400,
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist. Explore our IPTV
            reseller panels or get in touch via WhatsApp.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: 10,
                background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Go to Homepage
            </Link>
            <Link
              href="/#panels"
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
              View IPTV Panels
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

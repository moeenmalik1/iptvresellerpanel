"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
                const res = await fetch("/api/admin/login", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ username, password }),
                });
                const data = await res.json();

          if (!res.ok) {
                    setError(data.error || "Login failed.");
                    setLoading(false);
                    return;
          }

          const next = searchParams.get("next") || "/admin";
                router.push(next);
                router.refresh();
        } catch {
                setError("Something went wrong. Please try again.");
                setLoading(false);
        }
  };

  return (
        <div
                style={{
                          minHeight: "100vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "var(--bg-primary)",
                          padding: "1.5rem",
                }}
              >
              <form
                        onSubmit={handleSubmit}
                        className="glass-card"
                        style={{
                                    width: "100%",
                                    maxWidth: 400,
                                    padding: "2.5rem",
                                    borderRadius: 20,
                        }}
                      >
                      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                                <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>🦊</div>
                                <h1
                                              style={{
                                                              fontFamily: "'Outfit', sans-serif",
                                                              fontSize: "1.5rem",
                                                              fontWeight: 800,
                                                              color: "var(--text-primary)",
                                                              margin: 0,
                                              }}
                                            >
                                            Fox IPTV Panels
                                </h1>
                                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: 6 }}>
                                            Guides Admin — Sign in
                                </p>
                      </div>
              
                      <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: 6 }}>
                                Username
                      </label>
                      <input
                                  type="text"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  autoComplete="username"
                                  required
                                  style={inputStyle}
                                />
              
                      <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", margin: "1rem 0 6px" }}>
                                Password
                      </label>
                      <input
                                  type="password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  autoComplete="current-password"
                                  required
                                  style={inputStyle}
                                />
              
                {error && (
                                  <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: 12, marginBottom: 0 }}>{error}</p>
                      )}
              
                      <button
                                  type="submit"
                                  disabled={loading}
                                  style={{
                                                width: "100%",
                                                marginTop: "1.75rem",
                                                padding: "0.9rem",
                                                borderRadius: 12,
                                                border: "none",
                                                background: "var(--gradient-primary)",
                                                color: "white",
                                                fontWeight: 700,
                                                fontSize: "0.95rem",
                                                cursor: loading ? "not-allowed" : "pointer",
                                                opacity: loading ? 0.7 : 1,
                                  }}
                                >
                        {loading ? "Signing in…" : "Sign In"}
                      </button>
              </form>
        </div>
      );
}

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: 10,
    border: "1px solid var(--border-color)",
    background: "rgba(255,255,255,0.03)",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
};

export default function AdminLoginPage() {
    return (
          <Suspense fallback={null}>
                <LoginForm />
          </Suspense>
        );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/app/lib/blogStore";

export default function AdminDashboard() {
    const router = useRouter();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [busySlug, setBusySlug] = useState<string | null>(null);

  const loadPosts = async () => {
        setLoading(true);
        const res = await fetch("/api/admin/posts");
        const data = await res.json();
        setPosts(data.posts || []);
        setLoading(false);
  };

  useEffect(() => {
        let cancelled = false;
        (async () => {
                const res = await fetch("/api/admin/posts");
                const data = await res.json();
                if (!cancelled) {
                          setPosts(data.posts || []);
                          setLoading(false);
                }
        })();
        return () => {
                cancelled = true;
        };
  }, []);

  const handleDelete = async (post: BlogPost) => {
        if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
        setBusySlug(post.slug);
        await fetch(`/api/admin/posts/${encodeURIComponent(post.slug)}?locale=${post.locale}`, {
                method: "DELETE",
        });
        setBusySlug(null);
        loadPosts();
  };

  const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
  };

  return (
        <main style={{ minHeight: "100vh", background: "var(--bg-primary)", padding: "3rem 1.5rem" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                          <div
                                      style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    flexWrap: "wrap",
                                                    gap: 12,
                                                    marginBottom: "2rem",
                                      }}
                                    >
                                    <div>
                                                <h1
                                                                style={{
                                                                                  fontFamily: "'Outfit', sans-serif",
                                                                                  fontSize: "1.8rem",
                                                                                  fontWeight: 800,
                                                                                  color: "var(--text-primary)",
                                                                                  margin: 0,
                                                                }}
                                                              >
                                                              Guides Admin
                                                </h1>
                                                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "4px 0 0" }}>
                                                              Write, preview and publish SEO blogs to /guides
                                                </p>
                                    </div>
                                    <div style={{ display: "flex", gap: 10 }}>
                                                <Link href="/admin/posts/new" style={primaryBtn}>
                                                              + New Post
                                                </Link>
                                                <button onClick={handleLogout} style={ghostBtn}>
                                                              Log out
                                                </button>
                                    </div>
                          </div>
                
                  {loading ? (
                    <p style={{ color: "var(--text-muted)" }}>Loading posts…</p>
                  ) : posts.length === 0 ? (
                    <div className="glass-card" style={{ padding: "3rem", borderRadius: 16, textAlign: "center" }}>
                                <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                                              No posts yet. Your first SEO blog is one click away.
                                </p>
                                <Link href="/admin/posts/new" style={primaryBtn}>
                                              + Write Your First Post
                                </Link>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {posts.map((post) => (
                                    <div
                                                      key={`${post.locale}:${post.slug}`}
                                                      className="glass-card"
                                                      style={{
                                                                          padding: "1.25rem 1.5rem",
                                                                          borderRadius: 14,
                                                                          display: "flex",
                                                                          justifyContent: "space-between",
                                                                          alignItems: "center",
                                                                          flexWrap: "wrap",
                                                                          gap: 12,
                                                      }}
                                                    >
                                                    <div style={{ minWidth: 0 }}>
                                                                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                                                                                          <span
                                                                                                                  style={{
                                                                                                                                            fontSize: "0.7rem",
                                                                                                                                            fontWeight: 700,
                                                                                                                                            padding: "2px 10px",
                                                                                                                                            borderRadius: 999,
                                                                                                                                            background:
                                                                                                                                                                        post.status === "published" ? "rgba(52,211,153,0.15)" : "rgba(250,204,21,0.15)",
                                                                                                                                            color: post.status === "published" ? "#34d399" : "#facc15",
                                                                                                                    }}
                                                                                                                >
                                                                                            {post.status === "published" ? "Published" : "Draft"}
                                                                                            </span>
                                                                                          <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                                                                                            {post.locale.toUpperCase()} · {post.category}
                                                                                            </span>
                                                                      </div>
                                                                      <div
                                                                                            style={{
                                                                                                                    fontWeight: 700,
                                                                                                                    color: "var(--text-primary)",
                                                                                                                    fontSize: "1rem",
                                                                                                                    whiteSpace: "nowrap",
                                                                                                                    overflow: "hidden",
                                                                                                                    textOverflow: "ellipsis",
                                                                                                                    maxWidth: 480,
                                                                                              }}
                                                                                          >
                                                                        {post.title}
                                                                      </div>
                                                                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: 2 }}>
                                                                                          /{post.locale}/guides/{post.slug} · updated {new Date(post.updatedAt).toLocaleDateString()}
                                                                      </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 8 }}>
                                                      {post.status === "published" && (
                                                                          <a
                                                                                                  href={`/${post.locale}/guides/${post.slug}`}
                                                                                                  target="_blank"
                                                                                                  rel="noopener noreferrer"
                                                                                                  style={ghostBtnSmall}
                                                                                                >
                                                                                                View
                                                                          </a>
                                                                      )}
                                                                      <Link href={`/admin/posts/${post.slug}?locale=${post.locale}`} style={ghostBtnSmall}>
                                                                                          Edit
                                                                      </Link>
                                                                      <button
                                                                                            onClick={() => handleDelete(post)}
                                                                                            disabled={busySlug === post.slug}
                                                                                            style={{ ...ghostBtnSmall, color: "#ef4444", borderColor: "rgba(239,68,68,0.3)" }}
                                                                                          >
                                                                        {busySlug === post.slug ? "…" : "Delete"}
                                                                      </button>
                                                    </div>
                                    </div>
                                  ))}
                    </div>
                        )}
                </div>
        </main>
      );
}

const primaryBtn: React.CSSProperties = {
    padding: "0.65rem 1.2rem",
    borderRadius: 10,
    background: "var(--gradient-primary)",
    color: "white",
    fontWeight: 700,
    fontSize: "0.85rem",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
};

const ghostBtn: React.CSSProperties = {
    padding: "0.65rem 1.2rem",
    borderRadius: 10,
    background: "transparent",
    color: "var(--text-secondary)",
    fontWeight: 600,
    fontSize: "0.85rem",
    border: "1px solid var(--border-color)",
    cursor: "pointer",
};

const ghostBtnSmall: React.CSSProperties = {
    padding: "0.45rem 0.9rem",
    borderRadius: 8,
    background: "transparent",
    color: "var(--text-secondary)",
    fontWeight: 600,
    fontSize: "0.8rem",
    border: "1px solid var(--border-color)",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
};
</div>

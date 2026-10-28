"use client";

import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { formatRichText } from "@/app/lib/richText";
import type { BlogPost, BlogPostImage, BlogFaq } from "@/app/lib/blogStore";

const CATEGORIES = ["Business", "Technical", "Branding"];
const LOCALES = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];

function slugify(input: string): string {
    return input
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
}

function countWords(text: string): number {
    return (text.trim().match(/\S+/g) || []).length;
}

function countSyllables(word: string): number {
    const w = word.toLowerCase().replace(/[^a-z]/g, "");
    if (!w) return 0;
    const groups = w.match(/[aeiouy]+/g);
    let count = groups ? groups.length : 1;
    if (w.endsWith("e") && count > 1) count -= 1;
    return Math.max(count, 1);
}

function fleschReadingEase(text: string): number {
    const sentences = (text.match(/[.!?]+/g) || []).length || 1;
    const words = text.trim().match(/\S+/g) || [];
    const wordCount = words.length || 1;
    const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
    return 206.835 - 1.015 * (wordCount / sentences) - 84.6 * (syllables / wordCount);
}

interface SeoCheck {
    id: string;
    label: string;
    weight: number;
    passed: boolean;
}

function analyzeSeo(input: {
    title: string;
    slug: string;
    seoTitle: string;
    seoDescription: string;
    focusKeyword: string;
    content: string;
    hasFeaturedImageAlt: boolean;
}): { score: number; checks: SeoCheck[] } {
    const kw = input.focusKeyword.trim().toLowerCase();
    const seoTitle = input.seoTitle || input.title;
    const words = countWords(input.content);
    const lower = input.content.toLowerCase();

  const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const kwCount = kw ? (lower.match(new RegExp(escaped, "g")) || []).length : 0;
    const density = kw && words > 0 ? (kwCount / words) * 100 : 0;

  const firstChunk = input.content.slice(0, Math.max(150, Math.floor(input.content.length * 0.1))).toLowerCase();

  const hasSubheadingWithKw = kw
      ? input.content.split("\n").some((l) => /^#{2,4}\s/.test(l.trim()) && l.toLowerCase().includes(kw))
        : false;

  const hasLink = /\[[^\]]+\]\([^)]+\)/.test(input.content);
    const hasImage = /!\[[^\]]*\]\([^)]+\)/.test(input.content) || input.hasFeaturedImageAlt;

  const reading = fleschReadingEase(input.content || "This is a filler sentence.");

  const checks: SeoCheck[] = [
    { id: "kwTitle", label: "Focus keyword in SEO title", weight: 10, passed: !!kw && seoTitle.toLowerCase().includes(kw) },
    { id: "titleLen", label: "SEO title is 50–60 characters", weight: 8, passed: seoTitle.length >= 40 && seoTitle.length <= 65 },
    { id: "kwMeta", label: "Focus keyword in meta description", weight: 8, passed: !!kw && input.seoDescription.toLowerCase().includes(kw) },
    { id: "metaLen", label: "Meta description is 120–160 characters", weight: 8, passed: input.seoDescription.length >= 110 && input.seoDescription.length <= 165 },
    { id: "kwSlug", label: "Focus keyword in the URL slug", weight: 8, passed: !!kw && input.slug.includes(slugify(kw)) },
    { id: "kwIntro", label: "Focus keyword in the first 10% of content", weight: 8, passed: !!kw && firstChunk.includes(kw) },
    { id: "kwDensity", label: "Focus keyword density is 0.5%–2.5%", weight: 10, passed: !!kw && density >= 0.5 && density <= 2.5 },
    { id: "contentLen", label: "Content is at least 600 words", weight: 10, passed: words >= 600 },
    { id: "kwSubhead", label: "Focus keyword appears in a subheading", weight: 8, passed: hasSubheadingWithKw },
    { id: "hasImage", label: "At least one image with alt text", weight: 8, passed: hasImage },
    { id: "hasLink", label: "At least one link in the content", weight: 8, passed: hasLink },
    { id: "readability", label: "Readability — sentences are easy to follow", weight: 6, passed: reading >= 40 },
      ];

  const totalWeight = checks.reduce((s, c) => s + c.weight, 0);
    const passedWeight = checks.filter((c) => c.passed).reduce((s, c) => s + c.weight, 0);
    const score = kw ? Math.round((passedWeight / totalWeight) * 100) : 0;

  return { score, checks };
}

function scoreColor(score: number): string {
    if (score >= 80) return "#34d399";
    if (score >= 50) return "#facc15";
    return "#ef4444";
}

const emptyImage: BlogPostImage = { url: "", alt: "", title: "", caption: "", description: "" };

function PostEditor() {
    const router = useRouter();
    const params = useParams<{ slug: string }>();
    const searchParams = useSearchParams();
    const isNew = params.slug === "new";
    const editLocale = searchParams.get("locale") || "en";

  const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState<"draft" | "published" | null>(null);
    const [error, setError] = useState("");
    const [showPreview, setShowPreview] = useState(false);
    const [slugTouched, setSlugTouched] = useState(false);

  const [locale, setLocale] = useState("en");
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [category, setCategory] = useState("Business");
    const [focusKeyword, setFocusKeyword] = useState("");
    const [seoTitle, setSeoTitle] = useState("");
    const [seoDescription, setSeoDescription] = useState("");
    const [content, setContent] = useState("");
    const [featuredImage, setFeaturedImage] = useState<BlogPostImage>(emptyImage);
    const [faqs, setFaqs] = useState<BlogFaq[]>([]);
    const [uploadingFeatured, setUploadingFeatured] = useState(false);
    const [uploadingInline, setUploadingInline] = useState(false);

  const contentRef = useRef<HTMLTextAreaElement>(null);
    const featuredFileRef = useRef<HTMLInputElement>(null);
    const inlineFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
        if (isNew) return;
        (async () => {
                const res = await fetch(`/api/admin/posts/${encodeURIComponent(params.slug)}?locale=${editLocale}`);
                if (!res.ok) {
                          setError("Could not load this post.");
                          setLoading(false);
                          return;
                }
                const data = await res.json();
                const p: BlogPost = data.post;
                setLocale(p.locale);
                setTitle(p.title);
                setSlug(p.slug);
                setSlugTouched(true);
                setExcerpt(p.excerpt);
                setCategory(p.category);
                setFocusKeyword(p.focusKeyword);
                setSeoTitle(p.seoTitle);
                setSeoDescription(p.seoDescription);
                setContent(p.content);
                setFeaturedImage(p.featuredImage || emptyImage);
                setFaqs(p.faqs || []);
                setLoading(false);
        })();
  }, [isNew, params.slug, editLocale]);

  const displaySlug = slugTouched ? slug : slugify(title);
    const displayReadTime = useMemo(() => `${Math.max(1, Math.round(countWords(content) / 200))} min read`, [content]);

  const seo = useMemo(
        () =>
                analyzeSeo({
                          title,
                          slug: displaySlug,
                          seoTitle: seoTitle || title,
                          seoDescription: seoDescription || excerpt,
                          focusKeyword,
                          content,
                          hasFeaturedImageAlt: Boolean(featuredImage.url && featuredImage.alt),
                }),
        [title, displaySlug, seoTitle, seoDescription, excerpt, focusKeyword, content, featuredImage]
      );

  const uploadFile = async (file: File): Promise<string> => {
        const form = new FormData();
        form.append("file", file);
        const res = await fetch("/api/admin/upload", { method: "POST", body: form });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Upload failed.");
        return data.url as string;
  };

  const handleFeaturedUpload = async (file: File) => {
        setUploadingFeatured(true);
        setError("");
        try {
                const url = await uploadFile(file);
                setFeaturedImage((prev) => ({ ...prev, url }));
        } catch (e) {
                setError(e instanceof Error ? e.message : "Upload failed.");
        } finally {
                setUploadingFeatured(false);
        }
  };

  const handleInlineUpload = async (file: File) => {
        setUploadingInline(true);
        setError("");
        try {
                const url = await uploadFile(file);
                const textarea = contentRef.current;
                const insertion = `\n![Describe this image](${url})\n`;
                if (textarea) {
                          const start = textarea.selectionStart ?? content.length;
                          const end = textarea.selectionEnd ?? content.length;
                          const next = content.slice(0, start) + insertion + content.slice(end);
                          setContent(next);
                          requestAnimationFrame(() => {
                                      textarea.focus();
                                      const pos = start + insertion.length;
                                      textarea.setSelectionRange(pos, pos);
                          });
                } else {
                          setContent((prev) => prev + insertion);
                }
        } catch (e) {
                setError(e instanceof Error ? e.message : "Upload failed.");
        } finally {
                setUploadingInline(false);
        }
  };

    const handleInsertLink = () => { const textarea = contentRef.current; const start = textarea?.selectionStart ?? content.length; const end = textarea?.selectionEnd ?? content.length; const selected = content.slice(start, end); const url = window.prompt(selected ? `Link URL for "${selected}":` : "Link URL:"); if (!url) return; const linkText = selected || "link text"; const insertion = `[${linkText}](${url})`; if (textarea) { const next = content.slice(0, start) + insertion + content.slice(end); setContent(next); requestAnimationFrame(() => { textarea.focus(); const pos = start + insertion.length; textarea.setSelectionRange(pos, pos); }); } else { setContent((prev) => prev + insertion); } };
      const handleBold = () => { const textarea = contentRef.current; const start = textarea?.selectionStart ?? content.length; const end = textarea?.selectionEnd ?? content.length; const selected = content.slice(start, end) || "bold text"; const insertion = `**${selected}**`; if (textarea) { const next = content.slice(0, start) + insertion + content.slice(end); setContent(next); requestAnimationFrame(() => { textarea.focus(); const pos = start + insertion.length; textarea.setSelectionRange(pos, pos); }); } else { setContent((prev) => prev + insertion); } };
        const handleHeading = (level: number) => { const textarea = contentRef.current; const start = textarea?.selectionStart ?? content.length; const NL = String.fromCharCode(10); const lineStart = content.lastIndexOf(NL, start - 1) + 1; const lineEndIdx = content.indexOf(NL, start); const lineEnd = lineEndIdx === -1 ? content.length : lineEndIdx; const lineText = content.slice(lineStart, lineEnd); const cleanLine = lineText.replace(/^#{1,4}\s*/, ""); const prefix = "#".repeat(level) + " "; const newLine = cleanLine ? prefix + cleanLine : prefix + "Heading text"; const next = content.slice(0, lineStart) + newLine + content.slice(lineEnd); setContent(next); if (textarea) { requestAnimationFrame(() => { textarea.focus(); const pos = lineStart + newLine.length; textarea.setSelectionRange(pos, pos); }); } };
      const buildPayload = (status: "draft" | "published") => ({
        locale,
        title,
        slug: displaySlug,
        excerpt,
        category,
        readTime: displayReadTime,
        focusKeyword,
        seoTitle: seoTitle || title,
        seoDescription: seoDescription || excerpt,
        content,
        featuredImage: featuredImage.url ? featuredImage : null,
        faqs,
        status,
  });

  const handleSave = async (status: "draft" | "published") => {
        setError("");
        if (!title.trim() || !displaySlug.trim()) {
                setError("Title and slug are required.");
                return;
        }
        setSaving(status);
        try {
                const payload = buildPayload(status);
                const res = isNew
                  ? await fetch("/api/admin/posts", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(payload),
                  })
                          : await fetch(`/api/admin/posts/${encodeURIComponent(params.slug)}`, {
                                        method: "PUT",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(payload),
                          });
                const data = await res.json();
                if (!res.ok) {
                          setError(data.error || "Could not save this post.");
                          setSaving(null);
                          return;
                }
                router.push("/admin");
        } catch {
                setError("Something went wrong while saving.");
                setSaving(null);
        }
  };

  const updateFaq = (idx: number, field: "q" | "a", value: string) => {
        setFaqs((prev) => prev.map((f, i) => (i === idx ? { ...f, [field]: value } : f)));
  };

  if (loading) {
        return (
                <main style={{ minHeight: "100vh", background: "var(--bg-primary)", padding: "3rem", color: "var(--text-muted)" }}>
                          Loading…
                </main>
              );
  }

  return (
        <main style={{ minHeight: "100vh", background: "var(--bg-primary)", padding: "2rem 1.5rem 5rem" }}>
                <div style={{ maxWidth: 1180, margin: "0 auto" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: 12 }}>
                                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                                    <Link href="/admin" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem" }}>
                                                                    ← Back
                                                    </Link>
                                                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
                                                      {isNew ? "New Guide Post" : "Edit Guide Post"}
                                                    </h1>
                                      </div>
                                      <div style={{ display: "flex", gap: 10 }}>
                                                    <button onClick={() => setShowPreview(true)} style={ghostBtn}>
                                                                    Preview
                                                    </button>
                                                    <button onClick={() => handleSave("draft")} disabled={saving !== null} style={ghostBtn}>
                                                      {saving === "draft" ? "Saving…" : "Save Draft"}
                                                    </button>
                                                    <button onClick={() => handleSave("published")} disabled={saving !== null} style={primaryBtn}>
                                                      {saving === "published" ? "Publishing…" : "Publish"}
                                                    </button>
                                      </div>
                          </div>

                  {error && (
                    <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#ef4444", padding: "0.85rem 1.1rem", borderRadius: 10, marginBottom: "1.25rem", fontSize: "0.88rem" }}>
                      {error}
                    </div>
                  )}

                          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "1.5rem", alignItems: "start" }} className="admin-editor-grid">
                            {/* LEFT: Content form */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                                <div className="glass-card" style={{ padding: "1.5rem", borderRadius: 16 }}>
                                                              <Field label="Title">
                                                                              <input value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle} placeholder="How to Start an IPTV Reseller Business in 2026" />
                                                              </Field>
                                                
                                                              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                                                                              <Field label="Slug">
                                                                                                <input
                                                                                                                      value={displaySlug}
                                                                                                                      onChange={(e) => {
                                                                                                                                              setSlugTouched(true);
                                                                                                                                              setSlug(slugify(e.target.value));
                                                                                                                        }}
                                                                                                                      disabled={!isNew}
                                                                                                                      style={{ ...inputStyle, opacity: isNew ? 1 : 0.6 }}
                                                                                                                    />
                                                                              </Field>
                                                                              <Field label="Locale">
                                                                                                <select value={locale} onChange={(e) => setLocale(e.target.value)} disabled={!isNew} style={{ ...inputStyle, opacity: isNew ? 1 : 0.6 }}>
                                                                                                  {LOCALES.map((l) => (
                                <option key={l} value={l}>
                                  {l}
                                </option>
                              ))}
                                                                                                  </select>
                                                                              </Field>
                                                                              <Field label="Category">
                                                                                                <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
                                                                                                  {CATEGORIES.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                                                                                                  </select>
                                                                              </Field>
                                                              </div>
                                                
                                                              <Field label="Excerpt (shown on the Guides listing page)">
                                                                              <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} style={{ ...inputStyle, minHeight: 70, resize: "vertical" }} />
                                                              </Field>
                                                
                                                              <Field label={`Focus Keyword — the term you want this post to rank for`}>
                                                                              <input value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} style={inputStyle} placeholder="e.g. iptv reseller uk" />
                                                              </Field>
                                                </div>
                                    
                                      {/* Featured Image */}
                                                <div className="glass-card" style={{ padding: "1.5rem", borderRadius: 16 }}>
                                                              <h3 style={sectionTitle}>Featured Image</h3>
                                                              <input
                                                                                ref={featuredFileRef}
                                                                                type="file"
                                                                                accept="image/*"
                                                                                hidden
                                                                                onChange={(e) => e.target.files?.[0] && handleFeaturedUpload(e.target.files[0])}
                                                                              />
                                                  {featuredImage.url ? (
                          <div style={{ marginBottom: 14 }}>
                                            <img src={featuredImage.url} alt={featuredImage.alt} style={{ width: "100%", maxHeight: 220, objectFit: "cover", borderRadius: 12, border: "1px solid var(--border-color)" }} />
                                            <button onClick={() => featuredFileRef.current?.click()} style={{ ...ghostBtn, marginTop: 10 }} disabled={uploadingFeatured}>
                                              {uploadingFeatured ? "Uploading…" : "Replace image"}
                                            </button>
                          </div>
                        ) : (
                          <button onClick={() => featuredFileRef.current?.click()} disabled={uploadingFeatured} style={{ ...primaryBtn, width: "100%", padding: "1.5rem" }}>
                            {uploadingFeatured ? "Uploading…" : "+ Upload Featured Image"}
                          </button>
                                                              )}
                                                
                                                  {featuredImage.url && (
                          <>
                                            <Field label="Alt text (important for SEO)">
                                                                <input value={featuredImage.alt} onChange={(e) => setFeaturedImage((p) => ({ ...p, alt: e.target.value }))} style={inputStyle} placeholder="Describe the image for search engines" />
                                            </Field>
                                            <Field label="Title attribute">
                                                                <input value={featuredImage.title} onChange={(e) => setFeaturedImage((p) => ({ ...p, title: e.target.value }))} style={inputStyle} />
                                            </Field>
                                            <Field label="Caption (shown under the image)">
                                                                <input value={featuredImage.caption} onChange={(e) => setFeaturedImage((p) => ({ ...p, caption: e.target.value }))} style={inputStyle} />
                                            </Field>
                                            <Field label="Description">
                                                                <textarea value={featuredImage.description} onChange={(e) => setFeaturedImage((p) => ({ ...p, description: e.target.value }))} style={{ ...inputStyle, minHeight: 60 }} />
                                            </Field>
                          </>
                        )}
                                                </div>
                                    
                                      {/* Content */}
                                                <div className="glass-card" style={{ padding: "1.5rem", borderRadius: 16 }}>
                                                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                                                                              <h3 style={{ ...sectionTitle, margin: 0 }}>Content</h3>
                                                                              <div>
                                                                                                <input
                                                                                                                      ref={inlineFileRef}
                                                                                                                      type="file"
                                                                                                                      accept="image/*"
                                                                                                                      hidden
                                                                                                                      onChange={(e) => e.target.files?.[0] && handleInlineUpload(e.target.files[0])}
                                                                                                                    />
                                                                                                <button onClick={() => inlineFileRef.current?.click()} disabled={uploadingInline} style={ghostBtnSmall}>
                                                                                                  {uploadingInline ? "Uploading…" : "+ Insert Image"}
                                                                                                  </button>
                                                                                                                                                                                                                                                                                      <button onClick={handleInsertLink} style={{ ...ghostBtnSmall, marginLeft: 8 }}>+ Insert Link</button><button onClick={handleBold} style={{ ...ghostBtnSmall, marginLeft: 8 }}>+ Bold</button><button onClick={() => handleHeading(2)} style={{ ...ghostBtnSmall, marginLeft: 8 }}>H2</button><button onClick={() => handleHeading(3)} style={{ ...ghostBtnSmall, marginLeft: 8 }}>H3</button><button onClick={() => handleHeading(4)} style={{ ...ghostBtnSmall, marginLeft: 8 }}>H4</button>
                                                                              </div>
                                                              </div>
                                                              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 0, marginBottom: 10 }}>
                                                                              Supports <code>## Heading</code>, <code>**bold**</code>, <code>*italic*</code>, <code>[link](url)</code>,{" "}
                                                                              <code>![alt](image-url)</code>, bullet/numbered lists, tables, and{" "}
                                                                              <code>{`> [!TIP] text`}</code> callouts.
                                                              </p>
                                                              <textarea
                                                                                ref={contentRef}
                                                                                value={content}
                                                                                onChange={(e) => setContent(e.target.value)}
                                                                                style={{ ...inputStyle, minHeight: 420, fontFamily: "monospace", fontSize: "0.85rem", resize: "vertical" }}
                                                                              />
                                                              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 8 }}>
                                                                {countWords(content)} words · ~{displayReadTime}
                                                              </p>
                                                </div>
                                    
                                      {/* FAQs */}
                                                <div className="glass-card" style={{ padding: "1.5rem", borderRadius: 16 }}>
                                                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                                                                              <h3 style={{ ...sectionTitle, margin: 0 }}>FAQs (optional, adds FAQ schema)</h3>
                                                                              <button onClick={() => setFaqs((p) => [...p, { q: "", a: "" }])} style={ghostBtnSmall}>
                                                                                                + Add FAQ
                                                                              </button>
                                                              </div>
                                                  {faqs.map((faq, idx) => (
                          <div key={idx} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: idx < faqs.length - 1 ? "1px solid var(--border-color)" : "none" }}>
                                            <input value={faq.q} onChange={(e) => updateFaq(idx, "q", e.target.value)} placeholder="Question" style={{ ...inputStyle, marginBottom: 8 }} />
                                            <textarea value={faq.a} onChange={(e) => updateFaq(idx, "a", e.target.value)} placeholder="Answer" style={{ ...inputStyle, minHeight: 50 }} />
                                            <button onClick={() => setFaqs((p) => p.filter((_, i) => i !== idx))} style={{ ...ghostBtnSmall, color: "#ef4444", marginTop: 8 }}>
                                                                Remove
                                            </button>
                          </div>
                        ))}
                                                </div>
                                    </div>
                          
                            {/* RIGHT: SEO panel */}
                                    <div style={{ position: "sticky", top: 20, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                                <div className="glass-card" style={{ padding: "1.5rem", borderRadius: 16 }}>
                                                              <h3 style={sectionTitle}>SEO Analysis</h3>
                                                
                                                              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                                                                              <div
                                                                                                  style={{
                                                                                                                        width: 56,
                                                                                                                        height: 56,
                                                                                                                        borderRadius: "50%",
                                                                                                                        display: "flex",
                                                                                                                        alignItems: "center",
                                                                                                                        justifyContent: "center",
                                                                                                                        fontWeight: 800,
                                                                                                                        fontSize: "1.1rem",
                                                                                                                        color: scoreColor(seo.score),
                                                                                                                        border: `3px solid ${scoreColor(seo.score)}`,
                                                                                                    }}
                                                                                                >
                                                                                {seo.score}
                                                                              </div>
                                                                              <div>
                                                                                                <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.9rem" }}>
                                                                                                  {!focusKeyword ? "Set a focus keyword" : seo.score >= 80 ? "Great SEO!" : seo.score >= 50 ? "Needs improvement" : "Not optimized"}
                                                                                                  </div>
                                                                                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Rank Math-style SEO score</div>
                                                                              </div>
                                                              </div>
                                                
                                                              <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 360, overflowY: "auto" }}>
                                                                {seo.checks.map((check) => (
                            <div key={check.id} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.8rem" }}>
                                                <span style={{ color: check.passed ? "#34d399" : "#ef4444", flexShrink: 0, marginTop: 1 }}>
                                                  {check.passed ? "✓" : "✗"}
                                                </span>
                                                <span style={{ color: check.passed ? "var(--text-secondary)" : "var(--text-muted)" }}>{check.label}</span>
                            </div>
                          ))}
                                                              </div>
                                                </div>
                                    
                                                <div className="glass-card" style={{ padding: "1.5rem", borderRadius: 16 }}>
                                                              <h3 style={sectionTitle}>Search Snippet</h3>
                                                              <Field label={`SEO Title (${(seoTitle || title).length} chars, ideal 50–60)`}>
                                                                              <input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} placeholder={title} style={inputStyle} />
                                                              </Field>
                                                              <Field label={`Meta Description (${(seoDescription || excerpt).length} chars, ideal 120–160)`}>
                                                                              <textarea value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} placeholder={excerpt} style={{ ...inputStyle, minHeight: 80 }} />
                                                              </Field>
                                                
                                                              <div style={{ marginTop: 10, padding: "0.9rem 1rem", background: "rgba(255,255,255,0.02)", borderRadius: 10, border: "1px solid var(--border-color)" }}>
                                                                              <div style={{ color: "#8ab4f8", fontSize: "0.9rem", marginBottom: 2 }}>{seoTitle || title || "Your SEO title"}</div>
                                                                              <div style={{ color: "#34d399", fontSize: "0.75rem", marginBottom: 4 }}>
                                                                                                iptvreseller.live › {locale} › guides › {displaySlug || "your-slug"}
                                                                              </div>
                                                                              <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", lineHeight: 1.4 }}>
                                                                                {seoDescription || excerpt || "Your meta description will appear here."}
                                                                              </div>
                                                              </div>
                                                </div>
                                    </div>
                          </div>
                </div>
        
          {showPreview && (
                  <div
                              onClick={() => setShowPreview(false)}
                              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 100, display: "flex", justifyContent: "center", overflowY: "auto", padding: "3rem 1.5rem" }}
                            >
                            <div
                                          onClick={(e) => e.stopPropagation()}
                                          className="glass-card"
                                          style={{ maxWidth: 820, width: "100%", padding: "3rem", borderRadius: 24, height: "fit-content", background: "var(--bg-primary)" }}
                                        >
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                                                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-cyan)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                                                      Preview — not published yet
                                                      </span>
                                                      <button onClick={() => setShowPreview(false)} style={ghostBtnSmall}>
                                                                      Close ✕
                                                      </button>
                                        </div>
                            
                                        <span className="tag">{category}</span>
                                        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.2rem", fontWeight: 900, color: "var(--text-primary)", margin: "1rem 0 1.5rem", lineHeight: 1.2 }}>
                                          {title || "Untitled post"}
                                        </h1>
                            
                              {featuredImage.url && (
                                                        <figure style={{ margin: "0 0 2rem", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border-color)" }}>
                                                                        <img src={featuredImage.url} alt={featuredImage.alt || title} title={featuredImage.title || title} style={{ width: "100%", height: "auto", display: "block" }} />
                                                          {featuredImage.caption && (
                                                                            <figcaption style={{ padding: "0.75rem 1rem", fontSize: "0.85rem", color: "var(--text-muted)", background: "rgba(255,255,255,0.02)" }}>
                                                                              {featuredImage.caption}
                                                                            </figcaption>
                                                                        )}
                                                        </figure>
                                        )}
                            
                                        <div
                                                        className="guide-rich-content"
                                                        style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}
                                                        dangerouslySetInnerHTML={{ __html: formatRichText(content) }}
                                                      />
                            </div>
                  </div>
              )}
        </main>
      );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
          <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: 6 }}>{label}</label>
            {children}
          </div>
        );
}

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.65rem 0.85rem",
    borderRadius: 10,
    border: "1px solid var(--border-color)",
    background: "rgba(255,255,255,0.03)",
    color: "var(--text-primary)",
    fontSize: "0.88rem",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
};

const sectionTitle: React.CSSProperties = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: "1rem",
    fontWeight: 800,
    color: "var(--text-primary)",
    marginTop: 0,
    marginBottom: 14,
};

const primaryBtn: React.CSSProperties = {
    padding: "0.6rem 1.1rem",
    borderRadius: 10,
    background: "var(--gradient-primary)",
    color: "white",
    fontWeight: 700,
    fontSize: "0.85rem",
    border: "none",
    cursor: "pointer",
};

const ghostBtn: React.CSSProperties = {
    padding: "0.6rem 1.1rem",
    borderRadius: 10,
    background: "transparent",
    color: "var(--text-secondary)",
    fontWeight: 600,
    fontSize: "0.85rem",
    border: "1px solid var(--border-color)",
    cursor: "pointer",
};

const ghostBtnSmall: React.CSSProperties = {
    padding: "0.4rem 0.8rem",
    borderRadius: 8,
    background: "transparent",
    color: "var(--text-secondary)",
    fontWeight: 600,
    fontSize: "0.78rem",
    border: "1px solid var(--border-color)",
    cursor: "pointer",
};

export default function PostEditorPage() {
    return (
          <Suspense fallback={null}>
                <PostEditor />
          </Suspense>
        );
}

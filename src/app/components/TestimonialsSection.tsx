import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

export default function TestimonialsSection() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).testimonialsSection;

  return (
    <section
      id="testimonials"
      aria-label="IPTV Reseller Reviews — What Resellers Say About Fox IPTV Panels"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>{t.tag}</div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}>
            {t.titleMain}
            <span className="gradient-text">{t.titleSpan}</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {t.items.map((testimonial) => (
            <article
              key={testimonial.name}
              className="glass-card"
              style={{
                borderRadius: 16,
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                background: `linear-gradient(135deg, ${testimonial.color}0a, rgba(255,255,255,0.02))`,
                borderColor: `${testimonial.color}22`,
              }}
            >
              {/* Stars */}
              <div className="stars" style={{ fontSize: "1rem" }} aria-label={`${testimonial.stars} out of 5 stars`}>
                {"★".repeat(testimonial.stars)}
              </div>

              {/* Quote */}
              <blockquote style={{
                fontSize: "1.05rem",
                color: "var(--text-primary)",
                lineHeight: 1.7,
                fontStyle: "italic",
                flex: 1,
                margin: 0,
              }}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}88)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: "0.85rem", color: "white",
                  flexShrink: 0,
                }} aria-hidden="true">
                  {testimonial.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.9rem" }}>{testimonial.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useLocale } from "next-intl";
import { getSectionTranslations } from "@/app/lib/translations";

export default function FAQSection() {
  const locale = useLocale();
  const t = getSectionTranslations(locale).faqSection;

  return (
    <section
      id="faq"
      aria-label="FAQ — IPTV Reseller Panel Questions & Answers"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-color)",
        background: "rgba(0,0,0,0.1)",
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
            marginBottom: "1rem",
          }}>
            {t.titleMain}
            <span className="gradient-text">{t.titleSpan}</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "0 auto" }}>
            {t.desc}
          </p>
        </div>

        {/* FAQ items */}
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {t.items.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="glass-card" style={{ borderRadius: 12, overflow: "hidden" }}>
      <details style={{ cursor: "pointer" }}>
        <summary style={{
          padding: "1.25rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontWeight: 700,
          fontSize: "0.95rem",
          color: "var(--text-primary)",
          listStyle: "none",
          userSelect: "none",
        }}>
          <span>{question}</span>
          <span style={{
            width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
            background: "rgba(139,92,246,0.2)",
            border: "1px solid rgba(139,92,246,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.9rem", color: "#c4b5fd",
            transition: "transform 0.3s",
          }} aria-hidden="true">
            +
          </span>
        </summary>
        <div style={{
          padding: "0 1.5rem 1.25rem",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          fontSize: "0.9rem",
          borderTop: "1px solid var(--border-color)",
          paddingTop: "1rem",
        }}>
          {answer}
        </div>
      </details>

      <style>{`
        details[open] summary span:last-child { transform: rotate(45deg); }
      `}</style>
    </div>
  );
}

const faqs = [
  {
    q: "What is an IPTV reseller panel?",
    a: "An IPTV reseller panel is a white label dashboard that lets you create and manage IPTV subscriptions using reseller credits. It supports Xtream Codes, M3U, and MAG Box connections. As a reseller, you buy credits in bulk from an IPTV reseller panel provider like Fox IPTV Panels and activate subscriptions for your customers at your own price.",
  },
  {
    q: "How do IPTV reseller credits work?",
    a: "The IPTV credit system is simple: each credit equals one month of IPTV subscription for one customer. You buy IPTV reseller credits in bulk (wholesale), then use those credits inside your IPTV reseller dashboard to create subscriptions. The difference between your cost per credit and what you charge customers is your IPTV reseller profit margin.",
  },
  {
    q: "How do I start an IPTV reseller business without investment?",
    a: "You can start an IPTV reseller business with minimal investment by joining Fox IPTV Panels with a starter credit package. There is no need for servers, technical infrastructure, or prior experience. Get your IPTV reseller panel login, buy a small credit bundle, and start selling subscriptions to customers on WhatsApp, social media, or your own website.",
  },
  {
    q: "What is the difference between an IPTV reseller and a regular IPTV subscription?",
    a: "An IPTV subscription is for end-users who consume content. An IPTV reseller has access to a reseller panel that lets them create subscriptions for multiple customers. The reseller buys credits at wholesale pricing and sells subscriptions at retail pricing — keeping the profit margin. As a reseller you are the provider, not just a consumer.",
  },
  {
    q: "Which IPTV panel is best for resellers in 2026?",
    a: "The best IPTV reseller panel for 2026 depends on your needs: Strong 4K is best for premium streaming quality; Lion OTT is best for beginners; Crystal and Nexon are best for growing businesses; Mega OTT is best for bulk/wholesale resellers. Fox IPTV Panels lets you access and compare all top IPTV panels with reseller dashboards.",
  },
  {
    q: "Do you offer a 4K IPTV reseller panel with no buffering?",
    a: "Yes. Fox IPTV Panels provides access to multiple 4K and 8K IPTV reseller panels — including Strong 4K and Ultra 8K OTT — with 99.9% server uptime reliability and no-buffering technology. Supported on MAG boxes, M3U players, Xtream Codes-compatible apps, and Smart TVs.",
  },
  {
    q: "Is there a free trial for IPTV reseller panels?",
    a: "Yes. Fox IPTV Panels offers IPTV reseller panel free trials so you can test the dashboard, streaming quality, server stability, and uptime before committing to a full credit purchase. Contact us on WhatsApp to request your free reseller trial today.",
  },
  {
    q: "Are your IPTV reseller panels available in the UK, USA, and the EU?",
    a: "Yes. Fox IPTV Panels supports IPTV resellers worldwide — including the UK, USA, the EU, UAE, Spain, and beyond. Our IPTV servers are geo-distributed for low latency and stable 4K streaming regardless of where your customers are located.",
  },
  {
    q: "What is the cheapest IPTV reseller panel available?",
    a: "Fox IPTV Panels offers flexible credit packages starting at the lowest possible entry point — so you can become an IPTV reseller without large upfront investment. The more credits you buy in bulk, the cheaper the cost per credit — giving you the best reseller profit margin.",
  },
];

export default function FAQSection() {
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
          <div className="tag" style={{ marginBottom: "1rem" }}>IPTV Reseller FAQ</div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}>
            Frequently Asked{" "}
            <span className="gradient-text">IPTV Reseller Questions</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "0 auto" }}>
            Everything you need to know about starting your IPTV reseller business,
            how the IPTV credit system works, panel comparisons, free trials, and more.
          </p>
        </div>

        {/* FAQ items */}
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, i) => (
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

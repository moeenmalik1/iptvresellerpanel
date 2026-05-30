export interface StatItem {
  icon: string;
  label: string;
  value: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface StepItem {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export interface ComparisonRow {
  panel: string;
  slug: string;
  quality: string;
  support: string;
  dashboard: string;
  bestFor: string;
  badge: string;
}

export interface DashboardFeature {
  icon: string;
  label: string;
}

export interface BenefitItem {
  icon: string;
  text: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  stars: number;
  initials: string;
  color: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge: string;
  cost: number;
  rate: string;
  revenue: string;
  profit: string;
  description: string;
  features: string[];
  cta: string;
  color: string;
  gradient: string;
  border: string;
  popular: boolean;
}

export interface Dictionary {
  trustBar: {
    stats: StatItem[];
  };
  featuresSection: {
    tag: string;
    titleMain: string;
    titleSpan: string;
    titleEnd: string;
    desc: string;
    items: FeatureItem[];
  };
  businessSection: {
    tag: string;
    titleMain: string;
    titleSpan: string;
    desc1: string;
    desc2: string;
    desc3: string;
    controlLabel: string;
    controls: string[];
    cta: string;
    steps: StepItem[];
  };
  comparisonTable: {
    tag: string;
    titleMain: string;
    titleSpan: string;
    desc: string;
    cols: {
      panel: string;
      quality: string;
      support: string;
      dashboard: string;
      bestFor: string;
    };
    rows: ComparisonRow[];
    cta: string;
  };
  dashboardSection: {
    tag: string;
    titleMain: string;
    titleSpan: string;
    titleEnd: string;
    desc1: string;
    desc2: string;
    features: DashboardFeature[];
    uptimeTitle: string;
    uptimeDesc: string;
    mockup: {
      title: string;
      live: string;
      users: string;
      credits: string;
      revenue: string;
      chartLabel: string;
      btn1: string;
      btn2: string;
      btn3: string;
    };
  };
  benefitsSection: {
    tag: string;
    titleMain: string;
    titleSpan: string;
    desc: string;
    stats: { label: string; value: string }[];
    items: BenefitItem[];
  };
  testimonialsSection: {
    tag: string;
    titleMain: string;
    titleSpan: string;
    items: TestimonialItem[];
  };
  faqSection: {
    tag: string;
    titleMain: string;
    titleSpan: string;
    desc: string;
    items: FAQItem[];
  };
  ctaSection: {
    tag: string;
    titleMain: string;
    titleSpan: string;
    desc1: string;
    desc2: string;
    btnPrimary: string;
    btnSecondary: string;
    badges: { icon: string; text: string }[];
  };
  pricingSection: {
    tag: string;
    titleMain: string;
    titleSpan: string;
    desc: string;
    bestValue: string;
    pkgCostLabel: string;
    totalLabel: string;
    creditLabel: string;
    resellRevenueLabel: string;
    netProfitLabel: string;
    plans: PlanItem[];
    calculator: {
      title: string;
      desc: string;
      purchaseLabel: string;
      creditsSuffix: string;
      resellPriceLabel: string;
      sellSuffix: string;
      typicalLabel: string;
      costToBuy: string;
      grossRevenue: string;
      netProfit: string;
      cta: string;
    };
  };
  footer: {
    brandDesc1: string;
    brandDesc2: string;
    cols: {
      panels: string;
      comparisons: string;
      guides: string;
      quickLinks: string;
    };
    copyright: string;
    disclaimer: string;
  };
}

const dictionary: Record<string, Dictionary> = {
  en: {
    trustBar: {
      stats: [
        { icon: "📺", label: "IPTV Reseller Panels", value: "20+" },
        { icon: "🕐", label: "WhatsApp Support", value: "24/7" },
        { icon: "🎬", label: "4K & 8K Streaming", value: "No Buffer" },
        { icon: "⚡", label: "Credit Delivery", value: "Instant" },
        { icon: "🌍", label: "UK, USA & EU", value: "Global" },
        { icon: "🏗️", label: "Server Uptime", value: "99.9%" },
      ]
    },
    featuresSection: {
      tag: "Why Fox IPTV Panels",
      titleMain: "Why IPTV Resellers Choose ",
      titleSpan: "Fox IPTV Panels",
      titleEnd: " in 2026",
      desc: "Everything you need to launch and scale a profitable IPTV reselling business — from cheapest IPTV reseller panel access to enterprise-grade wholesale panel management.",
      items: [
        {
          icon: "⚡",
          title: "Instant IPTV Reseller Credits",
          desc: "Buy IPTV reseller credits instantly after approval. Bulk credit packages available for all business sizes — from starter to wholesale volume.",
          color: "#f59e0b",
        },
        {
          icon: "📡",
          title: "4K IPTV Servers — No Buffering",
          desc: "Access stable IPTV servers with 99.9% uptime, engineered for 4K and 8K no-buffering streaming. Best-in-class IPTV server uptime reliability.",
          color: "#8b5cf6",
        },
        {
          icon: "📺",
          title: "20+ White Label IPTV Panels",
          desc: "Choose from leading IPTV reseller dashboards — Strong 4K, Lion OTT, Mega OTT, Crystal, Nexon, and more. Xtream Codes, M3U & MAG box supported.",
          color: "#3b82f6",
        },
        {
          icon: "💰",
          title: "High IPTV Reseller Profit Margin",
          desc: "Control your own pricing, customer packages, and subscription plans. The IPTV credit system ensures predictable costs and maximized margins.",
          color: "#22c55e",
        },
        {
          icon: "🖥️",
          title: "Professional IPTV Dashboard Management",
          desc: "Manage users, credits, subscriptions, trials, and devices from a modern IPTV reseller panel — with real-time analytics and bulk import tools.",
          color: "#06b6d4",
        },
        {
          icon: "💬",
          title: "24/7 WhatsApp Reseller Support",
          desc: "Fast reseller assistance, technical panel guidance, and personalized IPTV reseller onboarding support — available around the clock via WhatsApp.",
          color: "#ec4899",
        },
      ]
    },
    businessSection: {
      tag: "IPTV Credit System Explained",
      titleMain: "How the IPTV Reseller ",
      titleSpan: "Business Credit System Works",
      desc1: "The IPTV reseller business runs on a credit-based system. You purchase IPTV reseller credits in bulk from a wholesale IPTV panel provider — then convert each credit into an IPTV subscription for your customers at your chosen price point.",
      desc2: "Fox IPTV Panels is the easiest way to become an IPTV reseller without investment in servers or infrastructure. We handle the technical side — you focus on sales and growing your customer base in the UK, USA, EU, or anywhere globally.",
      desc3: "Unlike a standard IPTV subscription (end-user), an IPTV reseller panel gives you full control over pricing, packages, and customer accounts — turning you into the provider.",
      controlLabel: "As an IPTV reseller, you control:",
      controls: [
        "Your own subscription pricing",
        "Customer & trial management",
        "Device & MAG box support",
        "Xtream Codes & M3U output",
        "Monthly profit margins",
        "Bulk credit allocation",
      ],
      cta: "Start IPTV Reseller Business",
      steps: [
        {
          step: "01",
          title: "Buy IPTV Reseller Credits in Bulk",
          desc: "Purchase a wholesale IPTV credit package. Start small with a starter bundle or go big for maximum reseller profit margins. No large upfront investment required.",
          icon: "💳",
        },
        {
          step: "02",
          title: "Create Customer Subscriptions",
          desc: "Use your IPTV credits to activate subscriptions for end customers via your reseller dashboard. Set your own pricing per subscription period.",
          icon: "👥",
        },
        {
          step: "03",
          title: "Manage Users From Your IPTV Dashboard",
          desc: "Track active users, trial subscriptions, expiring credits, and revenue in real time from your white label IPTV reseller panel login.",
          icon: "📊",
        },
        {
          step: "04",
          title: "Grow Recurring Monthly Income",
          desc: "As customers renew, your IPTV reselling business grows passively with compounding monthly revenue — the most scalable IPTV business model.",
          icon: "📈",
        },
      ]
    },
    comparisonTable: {
      tag: "IPTV Panel Comparison 2026",
      titleMain: "IPTV Reseller Panel ",
      titleSpan: "Comparison 2026",
      desc: "Compare the best IPTV reseller panels for 2026 — streaming quality, uptime reliability, dashboard features, and reseller flexibility to find your ideal IPTV panel match. Whether you need the cheapest IPTV reseller panel or the most advanced white label IPTV dashboard, we have it.",
      cols: {
        panel: "IPTV Panel",
        quality: "Streaming Quality",
        support: "Support",
        dashboard: "Dashboard",
        bestFor: "Best For"
      },
      rows: [
        { panel: "Strong 4K", slug: "strong-4k-iptv-reseller-panel", quality: "4K/8K", support: "24/7", dashboard: "Advanced", bestFor: "Premium Resellers", badge: "Top Pick" },
        { panel: "Lion OTT", slug: "lion-ott-iptv-reseller-panel", quality: "4K", support: "Fast", dashboard: "Beginner Friendly", bestFor: "New IPTV Resellers", badge: "Best for Starters" },
        { panel: "Crystal OTT", slug: "crystal-ott-iptv-reseller-panel", quality: "Full HD/4K", support: "24/7", dashboard: "Professional", bestFor: "Growing Businesses", badge: "" },
        { panel: "Mega OTT", slug: "mega-ott-iptv-reseller-panel", quality: "4K", support: "Fast", dashboard: "Modern", bestFor: "Bulk / Wholesale Resellers", badge: "" },
        { panel: "Nexon", slug: "nexon-iptv-reseller-panel", quality: "4K", support: "24/7", dashboard: "Advanced", bestFor: "Large IPTV Businesses", badge: "" },
      ],
      cta: "Full IPTV Panel Comparison 2026"
    },
    dashboardSection: {
      tag: "IPTV Panel Management",
      titleMain: "Professional ",
      titleSpan: "IPTV Reseller Dashboard",
      titleEnd: " — Full Panel Control",
      desc1: "Your IPTV reseller panel login gives you a full-featured white label dashboard to manage your entire IPTV reselling business. Track subscriptions, allocate credits, generate free trials, and monitor every customer — all from one centralized IPTV panel management interface.",
      desc2: "Our IPTV dashboards support Xtream Codes reseller API, M3U reseller panel output, and MAG box device management — covering every IPTV delivery method your customers use.",
      features: [
        { icon: "👥", label: "Subscription management" },
        { icon: "💳", label: "Credit allocation & bulk import" },
        { icon: "🎫", label: "Free trial generation" },
        { icon: "📱", label: "Device & MAG box management" },
        { icon: "📺", label: "M3U reseller panel output" },
        { icon: "🔗", label: "Xtream Codes reseller API" },
        { icon: "📊", label: "Real-time user activity tracking" },
        { icon: "📦", label: "Custom package management" },
      ],
      uptimeTitle: "99.9% IPTV Server Uptime Reliability",
      uptimeDesc: "Stable servers — minimal downtime, no buffering guaranteed",
      mockup: {
        title: "IPTV Reseller Dashboard",
        live: "Live",
        users: "Users",
        credits: "Credits",
        revenue: "Revenue",
        chartLabel: "Revenue (Last 7 days)",
        btn1: "Create User",
        btn2: "Add Credits",
        btn3: "Bulk Import"
      }
    },
    benefitsSection: {
      tag: "IPTV Reseller Program",
      titleMain: "Benefits of Joining Our ",
      titleSpan: "IPTV Reseller Program",
      desc: "Fox IPTV Panels gives every level of IPTV reseller — from first-time starters to large wholesale panel operators — a competitive edge. Our IPTV reseller program is designed for maximum profit and minimum friction. No servers to manage. No technical infrastructure needed. Start as a beginner IPTV sub reseller and scale to a full IPTV reselling business.",
      stats: [
        { label: "IPTV Reseller Panels", value: "20+" },
        { label: "Server Uptime", value: "99.9%" },
        { label: "WhatsApp Support", value: "24/7" },
      ],
      items: [
        { icon: "💡", text: "Low startup — no large investment" },
        { icon: "⚡", text: "Fast IPTV reseller panel setup" },
        { icon: "🔄", text: "Recurring monthly income stream" },
        { icon: "📡", text: "Stable 4K IPTV servers" },
        { icon: "📺", text: "20+ IPTV panel options" },
        { icon: "🎓", text: "IPTV reseller onboarding support" },
        { icon: "📈", text: "Scalable IPTV reselling business" },
        { icon: "🌍", text: "Global — UK, USA, EU & more" },
        { icon: "🎬", text: "4K & 8K no-buffering streaming" },
        { icon: "🖥️", text: "White label reseller dashboards" },
      ]
    },
    testimonialsSection: {
      tag: "IPTV Reseller Reviews",
      titleMain: "What IPTV Resellers Say About ",
      titleSpan: "Fox IPTV Panels",
      items: [
        {
          quote: "Best IPTV reseller panel I've used. Fast support, stable servers, and no buffering at all. My customers in the UK love it.",
          name: "Ahmed R.",
          role: "IPTV Reseller — UK",
          stars: 5,
          initials: "AR",
          color: "#8b5cf6",
        },
        {
          quote: "Easy to start even without previous experience. The IPTV credit system is simple — buy credits, create subscriptions, earn profit. Brilliant.",
          name: "Carlos M.",
          role: "IPTV Reseller — Spain",
          stars: 5,
          initials: "CM",
          color: "#3b82f6",
        },
        {
          quote: "Strong uptime, reliable IPTV credits delivery, and a clean white label dashboard. My customers across the EU are fully satisfied.",
          name: "Liam K.",
          role: "IPTV Reseller — UK & EU",
          stars: 5,
          initials: "LK",
          color: "#06b6d4",
        },
      ]
    },
    faqSection: {
      tag: "IPTV Reseller FAQ",
      titleMain: "Frequently Asked ",
      titleSpan: "IPTV Reseller Questions",
      desc: "Everything you need to know about starting your IPTV reseller business, how the IPTV credit system works, panel comparisons, free trials, and more.",
      items: [
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
      ]
    },
    ctaSection: {
      tag: "🚀 Start Your IPTV Reseller Business Today",
      titleMain: "Become an IPTV Reseller — ",
      titleSpan: "Get Your Panel & Credits Today",
      desc1: "Get access to the best IPTV reseller panels, buy instant reseller credits, and launch your IPTV reselling business with 24/7 WhatsApp support.",
      desc2: "Serving IPTV resellers in the UK, USA & EU — no buffering, no downtime. IPTV reseller panel free trial available. Start within minutes with zero technical setup.",
      btnPrimary: "Start Reselling on WhatsApp",
      btnSecondary: "Compare IPTV Panels 2026",
      badges: [
        { icon: "🔒", text: "Secure & Trusted" },
        { icon: "⚡", text: "Instant Credit Activation" },
        { icon: "💬", text: "24/7 WhatsApp Support" },
        { icon: "🌍", text: "UK, USA & EU" },
        { icon: "🎬", text: "4K No Buffering" },
        { icon: "🆓", text: "Free Trial Available" },
      ]
    },
    pricingSection: {
      tag: "Buy IPTV Reseller Credits",
      titleMain: "Flexible IPTV Reseller ",
      titleSpan: "Credit Packages",
      desc: "Unlock your private white-label streaming business. Compare credit packages below and choose the tier that fits your budget.",
      bestValue: "★ BEST VALUE",
      pkgCostLabel: "Package Price (To Buy)",
      totalLabel: "total",
      creditLabel: "credit",
      resellRevenueLabel: "Resell Revenue",
      netProfitLabel: "Your Net Profit",
      plans: [
        {
          id: "starter",
          name: "Starter Pack",
          badge: "120 CREDITS",
          cost: 120,
          rate: "$1.00",
          revenue: "1,200",
          profit: "1,080",
          description: "Best choice for beginner resellers starting their streaming brand.",
          features: [
            "120 wholesale credits (No expiry)",
            "Standard control dashboard",
            "Full server access & setup guide",
          ],
          cta: "Order Starter",
          color: "#3b82f6",
          gradient: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.03))",
          border: "rgba(59,130,246,0.2)",
          popular: false,
        },
        {
          id: "growth",
          name: "Growth Pack",
          badge: "200 CREDITS",
          cost: 180,
          rate: "$0.90",
          revenue: "2,000",
          profit: "1,820",
          description: "Premium wholesale package for growing brands needing white label portals.",
          features: [
            "200 wholesale credits (No expiry)",
            "Advanced dashboard + sub-resellers",
            "Custom DNS & white label branding",
          ],
          cta: "Order Growth",
          color: "#8b5cf6",
          gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.06))",
          border: "rgba(139,92,246,0.35)",
          popular: true,
        },
        {
          id: "enterprise",
          name: "Enterprise Wholesale",
          badge: "500 CREDITS",
          cost: 350,
          rate: "$0.70",
          revenue: "5,000",
          profit: "4,650",
          description: "Elite volume package offering the lowest unit rates for high-volume sales.",
          features: [
            "500 wholesale credits (No expiry)",
            "Elite admin control panels",
            "Dedicated domain & unlimited routing",
          ],
          cta: "Order Enterprise",
          color: "#06b6d4",
          gradient: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(6,182,212,0.03))",
          border: "rgba(6,182,212,0.2)",
          popular: false,
        },
      ],
      calculator: {
        title: "IPTV Reseller Profit Calculator",
        desc: "Select credit quantity and your monthly resell price to estimate total profit potential.",
        purchaseLabel: "Credits to Purchase",
        creditsSuffix: "Credits",
        resellPriceLabel: "Your Monthly Resell Price",
        sellSuffix: "/mo",
        typicalLabel: "Typical",
        costToBuy: "Package Cost (To Buy):",
        grossRevenue: "Gross Revenue (To Sell):",
        netProfit: "Your Net Profit:",
        cta: "Secure Reseller Setup"
      }
    },
    footer: {
      brandDesc1: "Fox IPTV Panels is the best IPTV reseller panel provider — offering white label IPTV panels, wholesale IPTV credits, Xtream Codes & M3U reseller dashboards, and 4K no-buffering servers for IPTV resellers worldwide.",
      brandDesc2: "Serving IPTV resellers in the UK, USA, the EU and globally — with 24/7 WhatsApp support for your IPTV reselling business.",
      cols: {
        panels: "IPTV Reseller Panels",
        comparisons: "Panel Comparisons 2026",
        guides: "Reseller Guides",
        quickLinks: "Quick Links"
      },
      copyright: "© 2026 Fox IPTV Panels — #1 IPTV Reseller Panel Provider. All rights reserved.",
      disclaimer: "IPTV Reseller Panels available in UK, USA, the EU & worldwide. All trademarks belong to their respective owners."
    }
  },
  es: {
    trustBar: {
      stats: [
        { icon: "📺", label: "Paneles de Reseller", value: "20+" },
        { icon: "🕐", label: "Soporte WhatsApp", value: "24/7" },
        { icon: "🎬", label: "Streaming 4K y 8K", value: "Sin Cortes" },
        { icon: "⚡", label: "Entrega de Créditos", value: "Instantánea" },
        { icon: "🌍", label: "UK, USA y UE", value: "Global" },
        { icon: "🏗️", label: "Tiempo Activo Servidor", value: "99.9%" },
      ]
    },
    featuresSection: {
      tag: "Por Qué Elegir Fox IPTV Panels",
      titleMain: "Por Qué los Resellers Eligen ",
      titleSpan: "Fox IPTV Panels",
      titleEnd: " en 2026",
      desc: "Todo lo que necesita para lanzar y escalar un negocio rentable de reventa de IPTV — desde el acceso al panel de revendedor más barato hasta la gestión empresarial a nivel mayorista.",
      items: [
        {
          icon: "⚡",
          title: "Créditos Reseller Al Instante",
          desc: "Compre créditos de distribuidor de IPTV al instante tras la aprobación. Paquetes mayoristas adaptados a cualquier tamaño de negocio, desde iniciación hasta gran volumen.",
          color: "#f59e0b",
        },
        {
          icon: "📡",
          title: "Servidores 4K — Sin Almacenamiento en Búfer",
          desc: "Acceda a servidores IPTV estables con un 99.9% de uptime, diseñados para streaming 4K y 8K sin cortes. Máxima fiabilidad y estabilidad.",
          color: "#8b5cf6",
        },
        {
          icon: "📺",
          title: "Más de 20 Paneles de Marca Blanca",
          desc: "Elija entre los mejores dashboards de reventa: Strong 4K, Lion OTT, Mega OTT, Crystal, Nexon y más. Compatible con Xtream Codes, M3U y MAG.",
          color: "#3b82f6",
        },
        {
          icon: "💰",
          title: "Altos Márgenes de Beneficio",
          desc: "Controle sus propios precios, paquetes de clientes y planes de suscripción. El sistema de créditos garantiza costos previsibles y márgenes maximizados.",
          color: "#22c55e",
        },
        {
          icon: "🖥️",
          title: "Gestión Profesional del Panel de Control",
          desc: "Administre usuarios, créditos, suscripciones y dispositivos desde un panel de control moderno con analíticas en tiempo real y herramientas de importación masiva.",
          color: "#06b6d4",
        },
        {
          icon: "💬",
          title: "Soporte Reseller WhatsApp 24/7",
          desc: "Asistencia rápida para distribuidores, guía técnica de paneles y soporte personalizado para la incorporación — disponible las 24 horas a través de WhatsApp.",
          color: "#ec4899",
        },
      ]
    },
    businessSection: {
      tag: "Explicación del Sistema de Créditos",
      titleMain: "Cómo Funciona el ",
      titleSpan: "Sistema de Créditos Reseller",
      desc1: "El negocio de reventa de IPTV funciona mediante un sistema basado en créditos. Usted compra créditos de distribuidor de IPTV al por mayor de un proveedor mayorista — y luego convierte cada crédito en una suscripción de IPTV para sus clientes al precio que decida.",
      desc2: "Fox IPTV Panels es la forma más sencilla de convertirse en revendedor de IPTV sin invertir en servidores o infraestructura. Nosotros manejamos la parte técnica — usted se enfoca en las ventas y en hacer crecer su base de clientes en España, el Reino Unido, EE. UU., la UE o cualquier lugar del mundo.",
      desc3: "A diferencia de una suscripción de IPTV estándar para usuario final, un panel de revendedor le otorga un control total sobre precios, paquetes y cuentas de clientes — convirtiéndolo a usted en el proveedor.",
      controlLabel: "Como revendedor de IPTV, usted controla:",
      controls: [
        "Sus propios precios de suscripción",
        "Gestión de clientes y pruebas gratuitas",
        "Soporte para dispositivos y cajas MAG",
        "Salida de Xtream Codes y M3U",
        "Márgenes de ganancia mensuales",
        "Asignación de créditos en bloque",
      ],
      cta: "Iniciar Negocio de Reseller IPTV",
      steps: [
        {
          step: "01",
          title: "Comprar Créditos IPTV en Bloque",
          desc: "Adquiera un paquete mayorista de créditos. Empiece con un paquete inicial o vaya a lo grande para obtener los mejores márgenes de beneficio. Sin grandes inversiones iniciales.",
          icon: "💳",
        },
        {
          step: "02",
          title: "Crear Suscripciones de Clientes",
          desc: "Use sus créditos de IPTV para activar suscripciones para clientes finales a través de su panel de control. Defina sus propias tarifas por cada período de suscripción.",
          icon: "👥",
        },
        {
          step: "03",
          title: "Administrar Usuarios desde su Panel",
          desc: "Haga un seguimiento en tiempo real de los usuarios activos, suscripciones de prueba, créditos que vencen e ingresos desde su panel de control de marca blanca.",
          icon: "📊",
        },
        {
          step: "04",
          title: "Crear Ingresos Mensuales Recurrentes",
          desc: "A medida que los clientes renuevan, su negocio de IPTV crece pasivamente con ingresos recurrentes compuestos — el modelo de negocio más escalable.",
          icon: "📈",
        },
      ]
    },
    comparisonTable: {
      tag: "Comparativa de Paneles 2026",
      titleMain: "Comparativa de Paneles ",
      titleSpan: "Reseller IPTV 2026",
      desc: "Compare los mejores paneles de revendedor de IPTV para 2026 — calidad de streaming, fiabilidad de uptime, características de panel y flexibilidad para encontrar su opción ideal. Ya sea que busque el panel más barato o el panel de control de marca blanca más avanzado, lo tenemos.",
      cols: {
        panel: "Panel IPTV",
        quality: "Calidad de Streaming",
        support: "Soporte",
        dashboard: "Panel de Control",
        bestFor: "Ideal Para"
      },
      rows: [
        { panel: "Strong 4K", slug: "strong-4k-iptv-reseller-panel", quality: "4K/8K", support: "24/7", dashboard: "Avanzado", bestFor: "Resellers Premium", badge: "Más Vendido" },
        { panel: "Lion OTT", slug: "lion-ott-iptv-reseller-panel", quality: "4K", support: "Rápido", dashboard: "Ideal Principiantes", bestFor: "Nuevos Resellers", badge: "Excelente Inicio" },
        { panel: "Crystal OTT", slug: "crystal-ott-iptv-reseller-panel", quality: "Full HD/4K", support: "24/7", dashboard: "Profesional", bestFor: "Negocios en Crecimiento", badge: "" },
        { panel: "Mega OTT", slug: "mega-ott-iptv-reseller-panel", quality: "4K", support: "Rápido", dashboard: "Moderno", bestFor: "Resellers Mayoristas", badge: "" },
        { panel: "Nexon", slug: "nexon-iptv-reseller-panel", quality: "4K", support: "24/7", dashboard: "Avanzado", bestFor: "Grandes Empresas IPTV", badge: "" },
      ],
      cta: "Comparativa Completa de Paneles 2026"
    },
    dashboardSection: {
      tag: "Gestión de Paneles IPTV",
      titleMain: "Panel de Reseller ",
      titleSpan: "IPTV Profesional",
      titleEnd: " — Control Total",
      desc1: "Su inicio de sesión en el panel le da acceso a un dashboard de marca blanca con todas las funciones para gestionar su negocio de IPTV. Realice un seguimiento de suscripciones, asigne créditos, genere pruebas gratis y controle a cada cliente — todo desde una interfaz de administración centralizada.",
      desc2: "Nuestros paneles admiten la API Xtream Codes, salida M3U y gestión de dispositivos MAG — cubriendo todos los métodos de conexión que usan sus clientes.",
      features: [
        { icon: "👥", label: "Gestión de suscripciones" },
        { icon: "💳", label: "Asignación de créditos e importación masiva" },
        { icon: "🎫", label: "Generación de pruebas gratuitas" },
        { icon: "📱", label: "Gestión de dispositivos y cajas MAG" },
        { icon: "📺", label: "Salida del panel M3U" },
        { icon: "🔗", label: "API de reseller de Xtream Codes" },
        { icon: "📊", label: "Seguimiento de actividad en tiempo real" },
        { icon: "📦", label: "Gestión de paquetes personalizados" },
      ],
      uptimeTitle: "99.9% de Estabilidad de Servidores IPTV",
      uptimeDesc: "Servidores ultra estables — sin cortes ni congelamientos garantizados",
      mockup: {
        title: "Panel de Control Reseller",
        live: "En Vivo",
        users: "Usuarios",
        credits: "Créditos",
        revenue: "Ingresos",
        chartLabel: "Ingresos (Últimos 7 días)",
        btn1: "Crear Usuario",
        btn2: "Añadir Créditos",
        btn3: "Importar Masivo"
      }
    },
    benefitsSection: {
      tag: "Programa de Reseller IPTV",
      titleMain: "Beneficios de Nuestro ",
      titleSpan: "Programa de Distribuidores",
      desc: "Fox IPTV Panels brinda una ventaja competitiva a distribuidores de todos los niveles, desde principiantes hasta grandes operadores mayoristas. Nuestro programa está diseñado para maximizar ganancias con las mínimas complicaciones. Sin servidores que administrar. Sin necesidad de infraestructura técnica. Empiece como sub-revendedor y crezca hasta tener una gran empresa de distribución.",
      stats: [
        { label: "Paneles IPTV", value: "20+" },
        { label: "Estabilidad Uptime", value: "99.9%" },
        { label: "Soporte por WhatsApp", value: "24/7" },
      ],
      items: [
        { icon: "💡", text: "Baja inversión inicial para arrancar" },
        { icon: "⚡", text: "Configuración rápida del panel de control" },
        { icon: "🔄", text: "Flujo de ingresos recurrentes mensuales" },
        { icon: "📡", text: "Servidores IPTV 4K estables y fluidos" },
        { icon: "📺", text: "Más de 20 opciones de paneles IPTV" },
        { icon: "🎓", text: "Soporte de incorporación y ventas" },
        { icon: "📈", text: "Negocio de reventa altamente escalable" },
        { icon: "🌍", text: "Cobertura Global — España, UK, USA y UE" },
        { icon: "🎬", text: "Transmisión en 4K y 8K sin cortes" },
        { icon: "🖥️", text: "Paneles de marca blanca personalizados" },
      ]
    },
    testimonialsSection: {
      tag: "Opiniones de Distribuidores",
      titleMain: "Lo Que los Resellers Dicen de ",
      titleSpan: "Fox IPTV Panels",
      items: [
        {
          quote: "El mejor panel de revendedor que he usado. Soporte rapidísimo, servidores estables y sin ningún tipo de cortes. A mis clientes en España les encanta.",
          name: "Ahmed R.",
          role: "Distribuidor IPTV — España",
          stars: 5,
          initials: "AR",
          color: "#8b5cf6",
        },
        {
          quote: "Muy sencillo de iniciar incluso sin experiencia previa. El sistema de créditos es muy simple: compra créditos, activa usuarios, gana dinero. Brillante.",
          name: "Carlos M.",
          role: "Reseller IPTV — España",
          stars: 5,
          initials: "CM",
          color: "#3b82f6",
        },
        {
          quote: "Uptime impecable, entrega instantánea de créditos y un panel limpio de marca blanca. Mis usuarios están 100% satisfechos.",
          name: "Liam K.",
          role: "Distribuidor IPTV — UE",
          stars: 5,
          initials: "LK",
          color: "#06b6d4",
        },
      ]
    },
    faqSection: {
      tag: "Preguntas Frecuentes",
      titleMain: "Preguntas Frecuentes de ",
      titleSpan: "Revendedores de IPTV",
      desc: "Todo lo que necesita saber para comenzar su negocio de reventa de IPTV, cómo funciona el sistema de créditos, comparativas de paneles, pruebas gratuitas y más.",
      items: [
        {
          q: "¿Qué es un panel de revendedor de IPTV?",
          a: "Es una plataforma de marca blanca que le permite crear y administrar suscripciones de IPTV mediante créditos. Admite conexiones Xtream Codes, M3U y cajas MAG. Como distribuidor, compra créditos al por mayor a un proveedor como Fox IPTV Panels y activa cuentas para sus propios clientes a la tarifa que usted elija.",
        },
        {
          q: "¿Cómo funcionan los créditos de revendedor de IPTV?",
          a: "El sistema es simple: 1 crédito equivale a 1 mes de servicio para 1 cliente. Compra créditos al por mayor (precios de distribuidor) y los utiliza dentro de su panel para activar cuentas. La diferencia entre su costo de crédito y lo que le cobra al cliente es su margen neto de ganancia.",
        },
        {
          q: "¿Cómo inicio un negocio de reventa de IPTV sin inversión?",
          a: "Puede arrancar con una inversión muy baja adquiriendo un paquete básico en Fox IPTV Panels. No necesita servidores ni conocimientos técnicos complejos. Le proporcionamos el panel, compra un paquete pequeño de créditos y comienza a vender en WhatsApp, redes sociales o su propia web.",
        },
        {
          q: "¿Cuál es la diferencia entre un reseller y una suscripción normal?",
          a: "Una suscripción normal es para uso individual del cliente final. Un panel de reseller le permite vender a múltiples clientes, crear demos, gestionar renovaciones, y actuar como el propio proveedor del servicio, estableciendo sus propias tarifas y reteniendo las ganancias.",
        },
        {
          q: "¿Qué panel de IPTV es el mejor en 2026?",
          a: "Depende de su público: Strong 4K es líder en calidad de streaming; Lion OTT es excelente para principiantes por su sencillez; Crystal y Nexon son geniales para negocios estables; Mega OTT es ideal para compras a gran volumen. Fox IPTV Panels le permite acceder a todos ellos.",
        },
        {
          q: "¿Ofrecen paneles 4K estables y sin cortes?",
          a: "Sí, absolutamente. Fox IPTV Panels ofrece acceso a paneles de gama alta como Strong 4K y Ultra 8K con un 99.9% de uptime garantizado y servidores optimizados que eliminan el almacenamiento en búfer.",
        },
        {
          q: "¿Hay pruebas gratuitas para paneles de revendedores?",
          a: "Sí. Ofrecemos pruebas gratuitas del panel de control de revendedores para que pruebe la calidad de la transmisión y la estabilidad antes de realizar su compra de créditos. Contáctenos por WhatsApp para solicitar su prueba hoy mismo.",
        },
        {
          q: "¿Están disponibles sus paneles en España y Latinoamérica?",
          a: "Sí, apoyamos a revendedores de todo el mundo. Nuestros servidores están distribuidos geográficamente en Europa y América para ofrecer baja latencia y máxima estabilidad sin importar dónde estén sus clientes.",
        },
        {
          q: "¿Cuál es el panel de distribuidor de IPTV más barato?",
          a: "Ofrecemos paquetes flexibles con un costo de entrada muy accesible para que pueda convertirse en distribuidor de IPTV sin riesgos. Cuantos más créditos compre al por mayor, menor será el precio por crédito, maximizando su rentabilidad.",
        },
      ]
    },
    ctaSection: {
      tag: "🚀 Comience su Negocio de Reventa Hoy",
      titleMain: "Conviértase en Reseller — ",
      titleSpan: "Obtenga su Panel y Créditos Hoy",
      desc1: "Acceda a los mejores paneles de IPTV del mercado, compre créditos de reventa al instante y lance su propio negocio de streaming con soporte 24/7 en español vía WhatsApp.",
      desc2: "Apoyo total a distribuidores en España, EE. UU. y la UE — sin almacenamiento en búfer, sin caídas. Demos gratuitas disponibles. Comience en minutos sin requisitos técnicos.",
      btnPrimary: "Iniciar Reventa en WhatsApp",
      btnSecondary: "Comparar Paneles IPTV 2026",
      badges: [
        { icon: "🔒", text: "Seguro y Confiable" },
        { icon: "⚡", text: "Activación Instantánea" },
        { icon: "💬", text: "Soporte WhatsApp 24/7" },
        { icon: "🌍", text: "Servidores Globales" },
        { icon: "🎬", text: "4K Sin Cortes" },
        { icon: "🆓", text: "Prueba Gratis Disponible" },
      ]
    },
    pricingSection: {
      tag: "Comprar Créditos IPTV",
      titleMain: "Planes de Créditos ",
      titleSpan: "IPTV Reseller Flexibles",
      desc: "Desbloquee su propia marca de streaming marca blanca. Compare los paquetes de créditos a continuación y elija el plan que mejor se adapte a su presupuesto.",
      bestValue: "★ MEJOR VALOR",
      pkgCostLabel: "Precio del Paquete (Para Comprar)",
      totalLabel: "total",
      creditLabel: "crédito",
      resellRevenueLabel: "Ingresos de Reventa",
      netProfitLabel: "Su Beneficio Neto",
      plans: [
        {
          id: "starter",
          name: "Paquete Starter",
          badge: "120 CRÉDITOS",
          cost: 120,
          rate: "1.00€",
          revenue: "1,200",
          profit: "1,080",
          description: "La mejor opción para revendedores principiantes que inician su marca.",
          features: [
            "120 créditos al por mayor (Sin vencimiento)",
            "Panel de control estándar",
            "Acceso completo al servidor y guía de inicio",
          ],
          cta: "Pedir Starter",
          color: "#3b82f6",
          gradient: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.03))",
          border: "rgba(59,130,246,0.2)",
          popular: false,
        },
        {
          id: "growth",
          name: "Paquete Growth",
          badge: "200 CRÉDITOS",
          cost: 180,
          rate: "0.90€",
          revenue: "2,000",
          profit: "1,820",
          description: "Paquete mayorista prémium para marcas en crecimiento que necesitan DNS propio.",
          features: [
            "200 créditos al por mayor (Sin vencimiento)",
            "Panel avanzado + sub-revendedores",
            "DNS personalizado y marca blanca",
          ],
          cta: "Pedir Growth",
          color: "#8b5cf6",
          gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.06))",
          border: "rgba(139,92,246,0.35)",
          popular: true,
        },
        {
          id: "enterprise",
          name: "Paquete Enterprise",
          badge: "500 CRÉDITOS",
          cost: 350,
          rate: "0.70€",
          revenue: "5,000",
          profit: "4,650",
          description: "Paquete de gran volumen que ofrece las tarifas unitarias más bajas para revendedores.",
          features: [
            "500 créditos al por mayor (Sin vencimiento)",
            "Paneles de administración de élite",
            "Dominio dedicado y enrutamiento ilimitado",
          ],
          cta: "Pedir Enterprise",
          color: "#06b6d4",
          gradient: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(6,182,212,0.03))",
          border: "rgba(6,182,212,0.2)",
          popular: false,
        },
      ],
      calculator: {
        title: "Calculadora de Ganancias de Reventa",
        desc: "Seleccione la cantidad de créditos y su precio de reventa estimado para calcular el beneficio neto total.",
        purchaseLabel: "Créditos a Comprar",
        creditsSuffix: "Créditos",
        resellPriceLabel: "Su Precio de Reventa Mensual",
        sellSuffix: "/mes",
        typicalLabel: "Típico",
        costToBuy: "Costo del Paquete (Compra):",
        grossRevenue: "Ingresos Brutos (Venta):",
        netProfit: "Su Beneficio Neto:",
        cta: "Configuración Segura de Distribuidor"
      }
    },
    footer: {
      brandDesc1: "Fox IPTV Panels es el mejor proveedor de paneles de revendedor de IPTV, ofreciendo paneles de marca blanca, créditos de distribuidor al por mayor, dashboards de control compatibles con Xtream Codes y M3U, y servidores 4K estables sin cortes.",
      brandDesc2: "Apoyo a distribuidores de IPTV en España, el Reino Unido, EE. UU., la UE y a nivel global — con soporte dedicado por WhatsApp las 24 horas.",
      cols: {
        panels: "Paneles IPTV Reseller",
        comparisons: "Comparativas de Paneles",
        guides: "Guías de Reventa",
        quickLinks: "Enlaces Rápidos"
      },
      copyright: "© 2026 Fox IPTV Panels — Proveedor Líder de Paneles de IPTV. Todos los derechos reservados.",
      disclaimer: "Paneles de revendedores de IPTV disponibles en España, Reino Unido, EE. UU. y la UE. Todas las marcas pertenecen a sus dueños."
    }
  },
  fr: {
    trustBar: {
      stats: [
        { icon: "📺", label: "Panneaux Revendeur", value: "20+" },
        { icon: "🕐", label: "Support WhatsApp", value: "24/7" },
        { icon: "🎬", label: "Streaming 4K & 8K", value: "Sans Buffer" },
        { icon: "⚡", label: "Livraison Crédits", value: "Instantanée" },
        { icon: "🌍", label: "UK, USA & UE", value: "Global" },
        { icon: "🏗️", label: "Stabilité Serveurs", value: "99.9%" },
      ]
    },
    featuresSection: {
      tag: "Pourquoi Fox IPTV Panels",
      titleMain: "Pourquoi les Revendeurs Choisissent ",
      titleSpan: "Fox IPTV Panels",
      titleEnd: " en 2026",
      desc: "Tout ce dont vous avez besoin pour lancer et développer une activité rentable de revente d'IPTV — de l'accès au panneau de revendeur le moins cher à la gestion de panneaux de gros à grande échelle.",
      items: [
        {
          icon: "⚡",
          title: "Crédits IPTV Instantanés",
          desc: "Achetez des crédits revendeur IPTV instantanément après approbation. Des packs de crédits en gros adaptés à toutes les tailles d'entreprise — du débutant au grand volume.",
          color: "#f59e0b",
        },
        {
          icon: "📡",
          title: "Serveurs IPTV 4K — Sans Lag",
          desc: "Accédez à des serveurs IPTV stables avec un uptime de 99.9%, conçus pour une diffusion 4K et 8K sans aucune mise en mémoire tampon.",
          color: "#8b5cf6",
        },
        {
          icon: "📺",
          title: "20+ Panneaux IPTV en Marque Blanche",
          desc: "Choisissez parmi les meilleurs tableaux de bord revendeurs — Strong 4K, Lion OTT, Mega OTT, Crystal, Nexon, etc. Xtream Codes, M3U & MAG supportés.",
          color: "#3b82f6",
        },
        {
          icon: "💰",
          title: "Marges Bénéficiaires Élevées",
          desc: "Contrôlez vos propres prix, forfaits clients et abonnements. Le système de crédits IPTV garantit des coûts prévisibles et des marges optimisées.",
          color: "#22c55e",
        },
        {
          icon: "🖥️",
          title: "Gestion Professionnelle de Panneaux",
          desc: "Gérez les utilisateurs, crédits, abonnements et appareils depuis un panneau moderne doté d'analyses en temps réel et d'outils d'importation en gros.",
          color: "#06b6d4",
        },
        {
          icon: "💬",
          title: "Support Revendeurs WhatsApp 24/7",
          desc: "Assistance rapide pour les revendeurs, conseils techniques de panneaux et support personnalisé pour la mise en route — disponible 24/7 par WhatsApp.",
          color: "#ec4899",
        },
      ]
    },
    businessSection: {
      tag: "Le Système de Crédits Expliqué",
      titleMain: "Comment Fonctionne le ",
      titleSpan: "Système de Crédits Revendeur",
      desc1: "L'activité de revendeur IPTV repose sur un système de crédits. Vous achetez des crédits de revendeur IPTV en gros auprès d'un fournisseur grossiste, puis convertissez chaque crédit en un abonnement IPTV pour vos clients au prix que vous fixez.",
      desc2: "Fox IPTV Panels est le moyen le plus simple de devenir revendeur IPTV sans investir dans des serveurs ou des infrastructures. Nous gérons la partie technique — vous vous concentrez sur les ventes en France, en Belgique, au Canada, au Royaume-Uni ou partout dans le monde.",
      desc3: "Contrairement à un abonnement IPTV standard pour utilisateur final, un panneau de revendeur IPTV vous donne un contrôle total sur les tarifs, les forfaits et les comptes clients — faisant de vous le fournisseur.",
      controlLabel: "En tant que revendeur IPTV, vous contrôlez :",
      controls: [
        "Vos propres prix d'abonnement",
        "La gestion des clients et des essais gratuits",
        "Le support pour boîtiers MAG et appareils",
        "Les sorties Xtream Codes & M3U",
        "Vos marges bénéficiaires mensuelles",
        "L'attribution des crédits en bloc",
      ],
      cta: "Lancer l'Activité Revendeur IPTV",
      steps: [
        {
          step: "01",
          title: "Acheter des Crédits IPTV en Gros",
          desc: "Achetez un pack de crédits IPTV en gros. Commencez petit avec un pack de démarrage ou visez grand pour des marges bénéficiaires optimales. Aucun gros investissement initial requis.",
          icon: "💳",
        },
        {
          step: "02",
          title: "Créer des Abonnements Clients",
          desc: "Utilisez vos crédits IPTV pour activer les abonnements de vos clients finaux via votre panneau. Fixez vos propres prix par période d'abonnement.",
          icon: "👥",
        },
        {
          step: "03",
          title: "Gérer vos Clients depuis le Panneau",
          desc: "Suivez les utilisateurs actifs, les essais gratuits, les crédits expirants et les revenus en temps réel à partir de votre panneau de contrôle en marque blanche.",
          icon: "📊",
        },
        {
          step: "04",
          title: "Développer des Revenus Récurrents",
          desc: "À mesure que les clients renouvellent, vos revenus mensuels s'accumulent de manière passive — le modèle commercial IPTV le plus évolutif.",
          icon: "📈",
        },
      ]
    },
    comparisonTable: {
      tag: "Comparatif de Panneaux 2026",
      titleMain: "Comparatif des Panneaux ",
      titleSpan: "Revendeurs IPTV 2026",
      desc: "Comparez les meilleurs panneaux revendeurs IPTV pour 2026 — qualité de streaming, stabilité des serveurs, fonctionnalités de gestion et flexibilité pour trouver le panneau idéal. Que vous recherchiez le panneau le moins cher ou le tableau de bord de marque blanche le plus complet, nous l'avons.",
      cols: {
        panel: "Panneau IPTV",
        quality: "Qualité de Diffusion",
        support: "Support",
        dashboard: "Tableau de Bord",
        bestFor: "Idéal Pour"
      },
      rows: [
        { panel: "Strong 4K", slug: "strong-4k-iptv-reseller-panel", quality: "4K/8K", support: "24/7", dashboard: "Avancé", bestFor: "Revendeurs Premium", badge: "Premier Choix" },
        { panel: "Lion OTT", slug: "lion-ott-iptv-reseller-panel", quality: "4K", support: "Rapide", dashboard: "Idéal Débutants", bestFor: "Nouveaux Revendeurs", badge: "Parfait démarrage" },
        { panel: "Crystal OTT", slug: "crystal-ott-iptv-reseller-panel", quality: "Full HD/4K", support: "24/7", dashboard: "Professionnel", bestFor: "Entreprises en Croissance", badge: "" },
        { panel: "Mega OTT", slug: "mega-ott-iptv-reseller-panel", quality: "4K", support: "Rapide", dashboard: "Moderne", bestFor: "Revendeurs Grossistes", badge: "" },
        { panel: "Nexon", slug: "nexon-iptv-reseller-panel", quality: "4K", support: "24/7", dashboard: "Avancé", bestFor: "Grandes Entreprises IPTV", badge: "" },
      ],
      cta: "Comparatif Complet des Panneaux 2026"
    },
    dashboardSection: {
      tag: "Gestion de Panneaux IPTV",
      titleMain: "Tableau de Bord ",
      titleSpan: "IPTV Professionnel",
      titleEnd: " — Contrôle Complet",
      desc1: "Votre identifiant revendeur vous donne accès à un tableau de bord en marque blanche complet pour piloter votre activité IPTV. Suivez les abonnements, allouez des crédits, générez des essais gratuits et contrôlez chaque compte client — le tout depuis une interface d'administration simplifiée.",
      desc2: "Nos panneaux de contrôle prennent en charge la clé API Xtream Codes, les fichiers M3U et la gestion des boîtiers MAG — couvrant toutes les méthodes de diffusion utilisées par vos clients.",
      features: [
        { icon: "👥", label: "Gestion des abonnements" },
        { icon: "💳", label: "Attribution de crédits & import en bloc" },
        { icon: "🎫", label: "Génération d'essais gratuits" },
        { icon: "📱", label: "Gestion des boîtiers MAG & appareils" },
        { icon: "📺", label: "Fichiers et liens M3U" },
        { icon: "🔗", label: "API revendeur Xtream Codes" },
        { icon: "📊", label: "Suivi d'activité en temps réel" },
        { icon: "📦", label: "Gestion de forfaits sur-mesure" },
      ],
      uptimeTitle: "Stabilité des Serveurs IPTV de 99.9%",
      uptimeDesc: "Serveurs robustes — pas de coupures ni de freeze garantis",
      mockup: {
        title: "Tableau de Bord Revendeur",
        live: "En Direct",
        users: "Utilisateurs",
        credits: "Crédits",
        revenue: "Revenus",
        chartLabel: "Revenus (7 derniers jours)",
        btn1: "Créer Client",
        btn2: "Ajouter Crédits",
        btn3: "Import en Bloc"
      }
    },
    benefitsSection: {
      tag: "Programme Revendeurs IPTV",
      titleMain: "Avantages de Rejoindre Notre ",
      titleSpan: "Programme Revendeurs",
      desc: "Fox IPTV Panels procure un avantage concurrentiel décisif à tous les revendeurs, des entrepreneurs débutants aux grossistes établis. Notre programme est conçu pour maximiser vos gains avec le moins d'effort technique possible. Aucun serveur à gérer. Aucune infrastructure complexe. Commencez simplement et développez votre marque.",
      stats: [
        { label: "Panneaux IPTV", value: "20+" },
        { label: "Uptime Serveurs", value: "99.9%" },
        { label: "Support WhatsApp", value: "24/7" },
      ],
      items: [
        { icon: "💡", text: "Faible investissement pour démarrer" },
        { icon: "⚡", text: "Mise en route ultra rapide du panneau" },
        { icon: "🔄", text: "Revenus récurrents chaque mois" },
        { icon: "📡", text: "Serveurs IPTV 4K ultra stables" },
        { icon: "📺", text: "Plus de 20 choix de panneaux de contrôle" },
        { icon: "🎓", text: "Assistance et formation à la revente" },
        { icon: "📈", text: "Activité de streaming hautement scalable" },
        { icon: "🌍", text: "Couverture Globale — France, UK, USA et UE" },
        { icon: "🎬", text: "Flux 4K & 8K fluides et sans buffering" },
        { icon: "🖥️", text: "Panneaux marque blanche personnalisables" },
      ]
    },
    testimonialsSection: {
      tag: "Avis des Revendeurs",
      titleMain: "Ce Que les Revendeurs Disent de ",
      titleSpan: "Fox IPTV Panels",
      items: [
        {
          quote: "Le meilleur panneau de revendeur IPTV que j'ai testé. Support client ultra-réactif, serveurs stables et aucun freeze. Mes clients en France sont ravis.",
          name: "Ahmed R.",
          role: "Revendeur IPTV — France",
          stars: 5,
          initials: "AR",
          color: "#8b5cf6",
        },
        {
          quote: "Très simple à lancer même sans connaissances techniques. Le système de crédits est limpide : achetez vos crédits en gros, vendez vos abonnements, encaissez vos profits. Super !",
          name: "Carlos M.",
          role: "Revendeur IPTV — Europe",
          stars: 5,
          initials: "CM",
          color: "#3b82f6",
        },
        {
          quote: "Serveurs stables, livraison ultra-rapide des crédits et panneau marque blanche super propre. Mes clients sont fidèles et très satisfaits.",
          name: "Liam K.",
          role: "Revendeur IPTV — Belgique & UE",
          stars: 5,
          initials: "LK",
          color: "#06b6d4",
        },
      ]
    },
    faqSection: {
      tag: "Questions Fréquentes",
      titleMain: "Questions Fréquentes des ",
      titleSpan: "Revendeurs IPTV",
      desc: "Tout ce que vous devez savoir pour démarrer votre activité de revendeur IPTV, le fonctionnement du système de crédits, le choix de vos panneaux, les essais gratuits, etc.",
      items: [
        {
          q: "Qu'est-ce qu'un panneau de revendeur IPTV ?",
          a: "C'est une plateforme en marque blanche qui vous permet de créer et d'administrer des abonnements IPTV à l'aide de crédits. Elle prend en charge les fichiers M3U, les boîtiers MAG et l'API Xtream Codes. Vous achetez des crédits en gros à bas coût auprès d'un grossiste comme Fox IPTV Panels et les revendez aux tarifs de votre choix.",
        },
        {
          q: "Comment fonctionnent les crédits de revendeur IPTV ?",
          a: "Le principe est très simple : 1 crédit correspond à 1 mois d'abonnement pour 1 client final. Vous achetez des crédits au tarif revendeur (gros), puis les utilisez sur votre panneau pour générer des abonnements. Votre profit est égal à la différence entre le tarif client final et votre coût d'achat par crédit.",
        },
        {
          q: "Comment démarrer mon activité IPTV sans gros investissement ?",
          a: "Vous pouvez vous lancer avec un budget minime en achetant un pack de démarrage sur Fox IPTV Panels. Pas besoin de louer des serveurs ni d'avoir des compétences techniques. Nous fournissons le panneau, vous achetez un petit lot de crédits et commencez à vendre sur WhatsApp, les réseaux sociaux ou votre site.",
        },
        {
          q: "Quelle est la différence entre revendeur et abonnement simple ?",
          a: "Un abonnement simple est destiné à un usage individuel pour un seul client. Un panneau de revendeur vous permet de vendre à des dizaines ou centaines d'utilisateurs, de créer des démos gratuites, de gérer les renouvellements et de fixer vos propres prix pour maximiser vos gains.",
        },
        {
          q: "Quel panneau IPTV est le meilleur en 2026 ?",
          a: "Cela dépend de vos besoins : Strong 4K est le leader de la qualité vidéo ; Lion OTT est super simple pour les débutants ; Crystal et Nexon sont parfaits pour les marques stables ; Mega OTT est idéal pour le gros volume. Nous vous donnons accès à l'ensemble de ces panneaux.",
        },
        {
          q: "Proposez-vous des serveurs 4K stables et sans buffering ?",
          a: "Oui, absolument. Fox IPTV Panels fournit des connexions haut de gamme avec serveurs redondants (Uptime de 99.9%) optimisés pour éliminer le buffering sur Smart TV, smartphones, boîtiers MAG et lecteurs M3U.",
        },
        {
          q: "Proposez-vous des essais gratuits pour tester le panneau ?",
          a: "Oui. Nous offrons des tests gratuits du panneau de contrôle revendeur afin de vous laisser juger de la qualité de diffusion, du zapping et de la stabilité des flux avant d'acheter vos crédits. Contactez notre support WhatsApp pour obtenir votre test gratuit.",
        },
        {
          q: "Vos services sont-ils disponibles dans toute la francophonie ?",
          a: "Oui. Nous soutenons les revendeurs dans le monde entier (France, Belgique, Canada, Suisse, Afrique, etc.). Nos serveurs sont répartis mondialement pour garantir une diffusion fluide et rapide peu importe la localisation de vos clients.",
        },
        {
          q: "Quel est le panneau de revente IPTV le moins cher ?",
          a: "Nous offrons des packs d'entrée très compétitifs pour vous permettre de lancer votre marque sans risques. Plus vous achetez des crédits en bloc, plus le coût unitaire baisse, ce qui augmente directement votre marge bénéficiaire.",
        },
      ]
    },
    ctaSection: {
      tag: "🚀 Lancez Votre Marque de Streaming Aujourd'hui",
      titleMain: "Devenez Revendeur IPTV — ",
      titleSpan: "Obtenez Votre Panneau & Vos Crédits",
      desc1: "Accédez aux meilleurs panneaux IPTV du marché, achetez des crédits instantanément et lancez votre propre marque de diffusion avec un support client WhatsApp 24/7 en français.",
      desc2: "Support complet pour revendeurs en France, Belgique, Canada & UE — flux 4K sans buffering, serveurs stables. Tests gratuits disponibles. Lancez-vous en quelques minutes sans compétences techniques.",
      btnPrimary: "Démarrer la Revente sur WhatsApp",
      btnSecondary: "Comparer les Panneaux IPTV 2026",
      badges: [
        { icon: "🔒", text: "Sécurisé & Fiable" },
        { icon: "⚡", text: "Activation Instantanée" },
        { icon: "💬", text: "Support WhatsApp 24/7" },
        { icon: "🌍", text: "Serveurs Mondiaux" },
        { icon: "🎬", text: "4K Sans Buffering" },
        { icon: "🆓", text: "Démos Gratuites" },
      ]
    },
    pricingSection: {
      tag: "Acheter des Crédits IPTV",
      titleMain: "Tarifs de Revente ",
      titleSpan: "IPTV Flexibles",
      desc: "Lancez votre marque de streaming en marque blanche. Comparez nos packs de crédits ci-dessous et choisissez la formule idéale pour votre budget.",
      bestValue: "★ MEILLEURE FORMULE",
      pkgCostLabel: "Prix du Pack (Achat)",
      totalLabel: "total",
      creditLabel: "crédit",
      resellRevenueLabel: "Revenus Estimés",
      netProfitLabel: "Votre Bénéfice Net",
      plans: [
        {
          id: "starter",
          name: "Pack Starter",
          badge: "120 CRÉDITS",
          cost: 120,
          rate: "1.00€",
          revenue: "1,200",
          profit: "1,080",
          description: "Le choix parfait pour les revendeurs débutants qui lancent leur marque.",
          features: [
            "120 crédits de gros (Sans expiration)",
            "Tableau de bord de gestion standard",
            "Accès complet aux serveurs & guides de démarrage",
          ],
          cta: "Commander Starter",
          color: "#3b82f6",
          gradient: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.03))",
          border: "rgba(59,130,246,0.2)",
          popular: false,
        },
        {
          id: "growth",
          name: "Pack Growth",
          badge: "200 CRÉDITS",
          cost: 180,
          rate: "0.90€",
          revenue: "2,000",
          profit: "1,820",
          description: "Formule de gros avancée pour les marques ayant besoin de DNS personnalisés.",
          features: [
            "200 crédits de gros (Sans expiration)",
            "Panneau de contrôle avancé + sous-revendeurs",
            "DNS personnalisé et marque blanche complète",
          ],
          cta: "Commander Growth",
          color: "#8b5cf6",
          gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.06))",
          border: "rgba(139,92,246,0.35)",
          popular: true,
        },
        {
          id: "enterprise",
          name: "Pack Enterprise",
          badge: "500 CRÉDITS",
          cost: 350,
          rate: "0.70€",
          revenue: "5,000",
          profit: "4,650",
          description: "Le tarif unitaire le plus bas du marché, optimisé pour les volumes de vente élevés.",
          features: [
            "500 crédits de gros (Sans expiration)",
            "Panneau d'administration de niveau élite",
            "Nom de domaine dédié et routage illimité",
          ],
          cta: "Commander Enterprise",
          color: "#06b6d4",
          gradient: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(6,182,212,0.03))",
          border: "rgba(6,182,212,0.2)",
          popular: false,
        },
      ],
      calculator: {
        title: "Calculateur de Profits Revendeur",
        desc: "Sélectionnez le volume de crédits et votre prix de revente mensuel pour estimer vos gains récurrents.",
        purchaseLabel: "Volume de Crédits à Acheter",
        creditsSuffix: "Crédits",
        resellPriceLabel: "Votre Prix de Revente Mensuel",
        sellSuffix: "/mois",
        typicalLabel: "Typique",
        costToBuy: "Coût d'Achat du Pack :",
        grossRevenue: "Chiffre d'Affaires Brut (Vente) :",
        netProfit: "Votre Bénéfice Net :",
        cta: "Configuration Revendeur Sécurisée"
      }
    },
    footer: {
      brandDesc1: "Fox IPTV Panels est le meilleur fournisseur de panneaux de revendeur IPTV, offrant des tableaux de bord en marque blanche, des crédits de gros et des serveurs de diffusion 4K de qualité supérieure sans buffering.",
      brandDesc2: "Soutien aux revendeurs de streaming en France, au Canada, au Royaume-Uni, dans l'UE et partout dans le monde — avec support WhatsApp 24/7.",
      cols: {
        panels: "Panneaux IPTV Revendeurs",
        comparisons: "Comparatifs de Panneaux",
        guides: "Guides de Revente",
        quickLinks: "Liens Rapides"
      },
      copyright: "© 2026 Fox IPTV Panels — Fournisseur N°1 de Panneaux IPTV. Tous droits réservés.",
      disclaimer: "Panneaux revendeurs IPTV disponibles en France, Belgique, Canada & UE. Toutes les marques appartiennent à leurs propriétaires."
    }
  },
  pt: {
    trustBar: {
      stats: [
        { icon: "📺", label: "Painéis de Revenda", value: "20+" },
        { icon: "🕐", label: "Suporte WhatsApp", value: "24/7" },
        { icon: "🎬", label: "Streaming 4K e 8K", value: "Sem Travamentos" },
        { icon: "⚡", label: "Entrega de Créditos", value: "Instantânea" },
        { icon: "🌍", label: "UK, USA & UE", value: "Global" },
        { icon: "🏗️", label: "Estabilidade Uptime", value: "99.9%" },
      ]
    },
    featuresSection: {
      tag: "Por Que Escolher a Fox IPTV Panels",
      titleMain: "Por Que os Revendedores Escolhem a ",
      titleSpan: "Fox IPTV Panels",
      titleEnd: " em 2026",
      desc: "Tudo o que você precisa para lançar e expandir um negócio lucrativo de revenda de IPTV — desde o acesso ao painel de revendedor mais barato até à gestão empresarial de atacado.",
      items: [
        {
          icon: "⚡",
          title: "Créditos Reseller Instantâneos",
          desc: "Compre créditos de revendedor IPTV instantaneamente após a aprovação. Pacotes de atacado disponíveis para todos os tamanhos de negócio — do iniciante ao grande volume.",
          color: "#f59e0b",
        },
        {
          icon: "📡",
          title: "Servidores IPTV 4K — Sem Buffer",
          desc: "Aceda a servidores IPTV estáveis com 99.9% de uptime, desenvolvidos para streaming em 4K e 8K sem travamentos ou lentidão.",
          color: "#8b5cf6",
        },
        {
          icon: "📺",
          title: "Mais de 20 Painéis de Marca Branca",
          desc: "Escolha entre os principais painéis de revendedor — Strong 4K, Lion OTT, Mega OTT, Crystal, Nexon e mais. Compatível com Xtream Codes, M3U e MAG.",
          color: "#3b82f6",
        },
        {
          icon: "💰",
          title: "Altas Margens de Lucro",
          desc: "Controle os seus próprios preços, pacotes de clientes e planos de subscrição. O sistema de créditos garante custos previsíveis e margens maximizadas.",
          color: "#22c55e",
        },
        {
          icon: "🖥️",
          title: "Gestão Profissional de Painéis",
          desc: "Gira utilizadores, créditos, subscrições e dispositivos a partir de um painel de controlo moderno com analíticas em tempo real e ferramentas avançadas.",
          color: "#06b6d4",
        },
        {
          icon: "💬",
          title: "Suporte Revendedor WhatsApp 24/7",
          desc: "Assistência rápida para distribuidores, guia técnico de painéis e suporte de integração personalizado — disponível 24 horas por dia via WhatsApp.",
          color: "#ec4899",
        },
      ]
    },
    businessSection: {
      tag: "Sistema de Créditos Explicado",
      titleMain: "Como Funciona o ",
      titleSpan: "Sistema de Créditos de Revenda",
      desc1: "O negócio de revendedor IPTV funciona através de um sistema baseado em créditos. Você compra créditos de revendedor de IPTV por atacado de um fornecedor maiorista e, em seguida, converte cada crédito numa subscrição de IPTV para os seus clientes ao preço que desejar cobrar.",
      desc2: "Fox IPTV Panels é a forma mais fácil de se tornar um revendedor de IPTV sem investimentos em servidores ou infraestruturas. Nós tratamos da parte técnica — você foca-se nas vendas e no crescimento da sua marca em Portugal, no Reino Unido, EUA, UE ou em qualquer parte do mundo.",
      desc3: "Ao contrário de uma subscrição IPTV comum para utilizador final, um painel de revendedor de IPTV dá-lhe total controlo sobre os preços, pacotes e contas dos clientes — tornando-o a si o próprio fornecedor.",
      controlLabel: "Como revendedor de IPTV, você controla:",
      controls: [
        "Os seus próprios preços de venda",
        "Gestão de clientes e testes gratuitos",
        "Suporte a dispositivos e caixas MAG",
        "Saídas compatíveis com Xtream Codes e M3U",
        "Margens de lucro mensais estimadas",
        "Distribuição de créditos em lote",
      ],
      cta: "Iniciar Negócio de Revenda IPTV",
      steps: [
        {
          step: "01",
          title: "Comprar Créditos IPTV em Lote",
          desc: "Adquira um pacote de revenda por atacado. Comece pequeno com um pacote inicial ou vá em grande para obter as melhores margens de lucro. Sem necessidade de alto investimento.",
          icon: "💳",
        },
        {
          step: "02",
          title: "Criar Contas para Clientes",
          desc: "Use os seus créditos IPTV para ativar subscrições para os clientes finais através do seu painel. Estabeleça os seus próprios preços por período de subscrição.",
          icon: "👥",
        },
        {
          step: "03",
          title: "Gerir Clientes a Partir do Seu Painel",
          desc: "Acompanhe utilizadores ativos, testes gratuitos, créditos a expirar e receitas em tempo real a partir do seu painel de controlo de marca branca.",
          icon: "📊",
        },
        {
          step: "04",
          title: "Aumentar Receita Recorrente",
          desc: "Conforme os seus clientes renovam, o seu negócio de revenda de IPTV cresce de forma passiva com receitas mensais recorrentes — o modelo mais escalável.",
          icon: "📈",
        },
      ]
    },
    comparisonTable: {
      tag: "Comparativa de Painéis 2026",
      titleMain: "Comparação de Painéis ",
      titleSpan: "Reseller IPTV 2026",
      desc: "Compare os melhores painéis de revenda de IPTV para 2026 — qualidade de streaming, estabilidade de uptime, recursos do painel e flexibilidade de revendedor para encontrar a sua opção ideal. Se procura o painel mais barato ou a plataforma mais robusta, nós temos.",
      cols: {
        panel: "Painel IPTV",
        quality: "Qualidade de Streaming",
        support: "Suporte",
        dashboard: "Painel de Gestão",
        bestFor: "Ideal Para"
      },
      rows: [
        { panel: "Strong 4K", slug: "strong-4k-iptv-reseller-panel", quality: "4K/8K", support: "24/7", dashboard: "Avançado", bestFor: "Revendedores Premium", badge: "Mais Vendido" },
        { panel: "Lion OTT", slug: "lion-ott-iptv-reseller-panel", quality: "4K", support: "Rápido", dashboard: "Fácil p/ Iniciantes", bestFor: "Novos Revendedores", badge: "Melhor Início" },
        { panel: "Crystal OTT", slug: "crystal-ott-iptv-reseller-panel", quality: "Full HD/4K", support: "24/7", dashboard: "Profissional", bestFor: "Marcas em Expansão", badge: "" },
        { panel: "Mega OTT", slug: "mega-ott-iptv-reseller-panel", quality: "4K", support: "Rápido", dashboard: "Moderno", bestFor: "Revendedores Maioristas", badge: "" },
        { panel: "Nexon", slug: "nexon-iptv-reseller-panel", quality: "4K", support: "24/7", dashboard: "Avançado", bestFor: "Grandes Empresas IPTV", badge: "" },
      ],
      cta: "Comparação Completa de Painéis 2026"
    },
    dashboardSection: {
      tag: "Gestão de Painéis IPTV",
      titleMain: "Painel Reseller ",
      titleSpan: "IPTV Profissional",
      titleEnd: " — Controlo Total",
      desc1: "As suas credenciais de login no painel dão-lhe acesso a um dashboard de marca branca repleto de funções para pilotar o seu negócio de IPTV. Acompanhe subscrições, distribua créditos, crie testes gratuitos e monitorize todos os clientes — tudo numa única interface centralizada.",
      desc2: "Os nossos painéis de controlo suportam a API de revendedor Xtream Codes, ficheiros M3U e gestão de dispositivos MAG — abrangendo todos os formatos de ligação utilizados pelos seus clientes.",
      features: [
        { icon: "👥", label: "Gestão de subscrições e contas" },
        { icon: "💳", label: "Distribuição de créditos e importação masiva" },
        { icon: "🎫", label: "Geração de testes grátis" },
        { icon: "📱", label: "Gestão de dispositivos e caixas MAG" },
        { icon: "📺", label: "Formatos e listas M3U" },
        { icon: "🔗", label: "API de revendedor Xtream Codes" },
        { icon: "📊", label: "Monitorização em tempo real" },
        { icon: "📦", label: "Gestão de pacotes à sua medida" },
      ],
      uptimeTitle: "99.9% de Estabilidade de Servidores IPTV",
      uptimeDesc: "Servidores robustos — sem travamentos ou lentidão garantidos",
      mockup: {
        title: "Painel de Revenda IPTV",
        live: "Em Direto",
        users: "Utilizadores",
        credits: "Créditos",
        revenue: "Receitas",
        chartLabel: "Receitas (Últimos 7 dias)",
        btn1: "Criar Utilizador",
        btn2: "Adicionar Créditos",
        btn3: "Importar Masivo"
      }
    },
    benefitsSection: {
      tag: "Programa de Revenda IPTV",
      titleMain: "Benefícios de Entrar no Nosso ",
      titleSpan: "Programa de Revendedores",
      desc: "A Fox IPTV Panels proporciona uma vantagem competitiva a revendedores de todos os níveis — de empreendedores iniciantes a grandes maioristas de painéis. O nosso programa foi desenhado para maximizar os seus lucros com o mínimo de atrito técnico. Sem servidores para gerir. Sem necessidade de infraestruturas. Comece de forma simples e cresça.",
      stats: [
        { label: "Painéis de IPTV", value: "20+" },
        { label: "Uptime Servidores", value: "99.9%" },
        { label: "Suporte WhatsApp", value: "24/7" },
      ],
      items: [
        { icon: "💡", text: "Baixo investimento inicial para começar" },
        { icon: "⚡", text: "Configuração rápida do painel de revendedor" },
        { icon: "🔄", text: "Fluxo de rendimento recorrente mensal" },
        { icon: "📡", text: "Servidores IPTV 4K estáveis e rápidos" },
        { icon: "📺", text: "Mais de 20 opções de painéis IPTV" },
        { icon: "🎓", text: "Suporte e formação de integração de vendas" },
        { icon: "📈", text: "Negócio de streaming altamente escalável" },
        { icon: "🌍", text: "Cobertura Global — Portugal, UK, USA e UE" },
        { icon: "🎬", text: "Transmissão 4K e 8K sem travamentos" },
        { icon: "🖥️", text: "Painéis marca branca personalizados" },
      ]
    },
    testimonialsSection: {
      tag: "Avaliações de Revendedores",
      titleMain: "O Que Dizem os Revendedores da ",
      titleSpan: "Fox IPTV Panels",
      items: [
        {
          quote: "Melhor painel de revendedor de IPTV que já utilizei. Suporte muito rápido, servidores estáveis e sem travamentos. Os meus clientes em Portugal adoram.",
          name: "Ahmed R.",
          role: "Revendedor IPTV — Portugal",
          stars: 5,
          initials: "AR",
          color: "#8b5cf6",
        },
        {
          quote: "Muito fácil de iniciar, mesmo sem experiência anterior na área. O sistema de créditos é muito direto: compre créditos, ative utilizadores, ganhe lucro. Fantástico.",
          name: "Carlos M.",
          role: "Revendedor IPTV — Portugal",
          stars: 5,
          initials: "CM",
          color: "#3b82f6",
        },
        {
          quote: "Excelente uptime, entrega rápida de créditos e um painel limpo em marca branca. Os meus utilizadores na Europa estão 100% satisfeitos.",
          name: "Liam K.",
          role: "Revendedor IPTV — UE",
          stars: 5,
          initials: "LK",
          color: "#06b6d4",
        },
      ]
    },
    faqSection: {
      tag: "Perguntas Frequentes",
      titleMain: "Perguntas Frecuentes de ",
      titleSpan: "Revendedores de IPTV",
      desc: "Tudo o que precisa de saber para começar o seu negócio de revenda de IPTV, como funciona o sistema de créditos, comparativas de painéis, testes grátis e mais.",
      items: [
        {
          q: "O que é um painel de revendedor de IPTV?",
          a: "É uma plataforma de marca branca que lhe permite criar e gerir subscrições de IPTV através de créditos. Suporta ligações Xtream Codes, M3U e caixas MAG. Como distribuidor, compra créditos por atacado de um fornecedor como a Fox IPTV Panels e ativa contas para os seus clientes com as suas próprias tarifas.",
        },
        {
          q: "Como funcionam os créditos de revendedor de IPTV?",
          a: "O sistema de créditos é muito simples: cada crédito equivale a 1 mês de serviço para 1 cliente. Você adquire créditos por atacado (preços de distribuidor) e utiliza-os no seu painel para ativar contas. A diferença entre o custo unitário e o que cobra ao seu cliente é a sua margem de lucro líquido.",
        },
        {
          q: "Como posso iniciar um negócio de revenda de IPTV sem investimento?",
          a: "Pode iniciar com um investimento muito baixo adquirindo um pacote básico na Fox IPTV Panels. Não necessita de servidores nem conhecimentos técnicos complexos. Nós fornecemos o painel, você compra um pequeno pacote de créditos e começa a vender no WhatsApp, redes sociais ou no seu próprio website.",
        },
        {
          q: "Qual é a diferença entre um reseller e uma conta normal?",
          a: "Uma subscrição comum é para o uso individual do cliente final. Um painel de revendedor permite-lhe vender para múltiplos clientes, criar contas de teste gratuitas, gerir renovações e atuar como o próprio fornecedor do serviço, estabelecendo as suas próprias tarifas e retendo os lucros.",
        },
        {
          q: "Qual o melhor painel de IPTV em 2026?",
          a: "Depende do seu público: Strong 4K lidera em qualidade de streaming; Lion OTT é excelente para principiantes devido à simplicidade; Crystal e Nexon são ótimos para marcas estáveis; Mega OTT é ideal para compras em volume. A nossa plataforma dá-lhe acesso a todos.",
        },
        {
          q: "Oferecem painéis 4K estáveis e sem travamentos?",
          a: "Sim, absolutamente. A Fox IPTV Panels fornece acesso a painéis topo de gama como o Strong 4K e Ultra 8K com 99.9% de uptime estável garantido e servidores otimizados que eliminam o buffering.",
        },
        {
          q: "Existem testes gratuitos para os painéis de revendedores?",
          a: "Sim. Disponibilizamos testes gratuitos do painel de controlo de revendedores para que possa testar a qualidade da transmissão, a estabilidade e o zapping antes de comprar os seus créditos. Contacte o suporte WhatsApp para solicitar a sua demo hoje.",
        },
        {
          q: "Os vossos painéis estão disponíveis em Portugal e no Brasil?",
          a: "Sim. Apoiamos revendedores a nível global. Os nossos servidores estão distribuídos geograficamente na Europa e América para garantir baixa latência e máxima estabilidade onde quer que estejam os seus clientes.",
        },
        {
          q: "Qual é o painel de distribuidor de IPTV mais barato?",
          a: "Oferecemos pacotes flexíveis com um custo de entrada muito acessível para que possa tornar-se distribuidor sem riscos. Quanto mais créditos comprar por atacado, menor será o custo unitário, maximizando a sua margem.",
        },
      ]
    },
    ctaSection: {
      tag: "🚀 Comece o Seu Negócio de Revenda Hoje",
      titleMain: "Torne-se Revendedor — ",
      titleSpan: "Obtenha o Seu Painel e Créditos Hoje",
      desc1: "Aceda aos melhores painéis de IPTV do mercado, compre créditos de revenda instantaneamente e lance o seu próprio negócio de streaming com suporte dedicado 24/7 em português via WhatsApp.",
      desc2: "Suporte completo para distribuidores em Portugal, EUA e UE — sem travamentos ou lentidão. Testes gratuitos disponíveis. Comece em minutos sem requisitos técnicos.",
      btnPrimary: "Iniciar Revenda no WhatsApp",
      btnSecondary: "Comparar Painéis IPTV 2026",
      badges: [
        { icon: "🔒", text: "Seguro e Confiável" },
        { icon: "⚡", text: "Ativação Instantânea" },
        { icon: "💬", text: "Suporte WhatsApp 24/7" },
        { icon: "🌍", text: "Servidores Mundiais" },
        { icon: "🎬", text: "4K Sem Travamentos" },
        { icon: "🆓", text: "Teste Grátis Disponível" },
      ]
    },
    pricingSection: {
      tag: "Comprar Créditos IPTV",
      titleMain: "Planos de Créditos ",
      titleSpan: "IPTV Reseller Flexíveis",
      desc: "Desbloqueie a sua própria marca de streaming com marca branca. Compare os pacotes de créditos abaixo e selecione a melhor fórmula para o seu orçamento.",
      bestValue: "★ MELHOR VALOR",
      pkgCostLabel: "Preço do Pacote (Para Comprar)",
      totalLabel: "total",
      creditLabel: "crédito",
      resellRevenueLabel: "Receita de Revenda",
      netProfitLabel: "O Seu Lucro Líquido",
      plans: [
        {
          id: "starter",
          name: "Pacote Starter",
          badge: "120 CRÉDITOS",
          cost: 120,
          rate: "1.00€",
          revenue: "1,200",
          profit: "1,080",
          description: "A melhor escolha para revendedores iniciantes a lançarem a sua marca.",
          features: [
            "120 créditos por atacado (Sem validade)",
            "Painel de controlo padrão",
            "Acesso completo ao servidor & guias de arranque",
          ],
          cta: "Pedir Starter",
          color: "#3b82f6",
          gradient: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.03))",
          border: "rgba(59,130,246,0.2)",
          popular: false,
        },
        {
          id: "growth",
          name: "Pacote Growth",
          badge: "200 CRÉDITOS",
          cost: 180,
          rate: "0.90€",
          revenue: "2,000",
          profit: "1,820",
          description: "Pacote maiorista de alta qualidade para marcas em crescimento com DNS próprio.",
          features: [
            "200 créditos por atacado (Sem validade)",
            "Painel avançado + sub-revendedores",
            "DNS personalizado e marca branca completa",
          ],
          cta: "Pedir Growth",
          color: "#8b5cf6",
          gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.06))",
          border: "rgba(139,92,246,0.35)",
          popular: true,
        },
        {
          id: "enterprise",
          name: "Pacote Enterprise",
          badge: "500 CRÉDITOS",
          cost: 350,
          rate: "0.70€",
          revenue: "5,000",
          profit: "4,650",
          description: "O preço unitário mais baixo do mercado, ideal para volumes de vendas elevados.",
          features: [
            "500 créditos por atacado (Sem validade)",
            "Painéis de administração de nível elite",
            "Nome de domínio dedicado e enrutamento ilimitado",
          ],
          cta: "Pedir Enterprise",
          color: "#06b6d4",
          gradient: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(6,182,212,0.03))",
          border: "rgba(6,182,212,0.2)",
          popular: false,
        },
      ],
      calculator: {
        title: "Calculadora de Lucros de Revenda",
        desc: "Selecione o volume de créditos e o seu preço de venda mensal para estimar os seus lucros recorrentes.",
        purchaseLabel: "Créditos a Comprar",
        creditsSuffix: "Créditos",
        resellPriceLabel: "O Seu Preço de Venda Mensual",
        sellSuffix: "/mês",
        typicalLabel: "Típico",
        costToBuy: "Custo de Compra do Pacote :",
        grossRevenue: "Ingresos Brutos (Venda) :",
        netProfit: "O Seu Lucro Líquido :",
        cta: "Configuração Segura de Revendedor"
      }
    },
    footer: {
      brandDesc1: "Fox IPTV Panels é o melhor fornecedor de painéis de revendedor de IPTV, oferecendo plataformas em marca branca, créditos maioristas, dashboards de controlo compatíveis com Xtream Codes e M3U, e servidores 4K estáveis sem travamentos.",
      brandDesc2: "Apoio a distribuidores de IPTV em Portugal, no Reino Unido, EUA, UE e a nível global — com suporte dedicado por WhatsApp as 24 horas.",
      cols: {
        panels: "Painéis IPTV Reseller",
        comparisons: "Comparativas de Painéis",
        guides: "Guias de Revenda",
        quickLinks: "Links Rápidos"
      },
      copyright: "© 2026 Fox IPTV Panels — Fornecedor Líder de Painéis de IPTV. Todos os direitos reservados.",
      disclaimer: "Painéis de revendedores disponíveis em Portugal, Espanha, Reino Unido e UE. Todas as marcas pertencem aos seus proprietários."
    }
  },
  sv: {
    trustBar: {
      stats: [
        { icon: "📺", label: "IPTV Återförsäljarpaneler", value: "20+" },
        { icon: "🕐", label: "WhatsApp Support", value: "24/7" },
        { icon: "🎬", label: "4K & 8K Streaming", value: "Ingen Buffer" },
        { icon: "⚡", label: "Kredit Leverans", value: "Direkt" },
        { icon: "🌍", label: "UK, USA & EU", value: "Global" },
        { icon: "🏗️", label: "Server Drifttid", value: "99.9%" },
      ]
    },
    featuresSection: {
      tag: "Varför Fox IPTV Panels",
      titleMain: "Varför IPTV-återförsäljare väljer ",
      titleSpan: "Fox IPTV Panels",
      titleEnd: " i 2026",
      desc: "Allt du behöver för att starta och skala en lönsam IPTV-återförsäljarverksamhet — från tillgång till den billigaste återförsäljarpanelen till hantering på grossistnivå.",
      items: [
        {
          icon: "⚡",
          title: "Direkt IPTV-kreditleverans",
          desc: "Köp IPTV-återförsäljarkrediter direkt efter godkännande. Stora kreditpaket tillgängliga för alla företagsstorlekar — från nybörjare till grossistvolym.",
          color: "#f59e0b",
        },
        {
          icon: "📡",
          title: "4K IPTV-servrar — Ingen Buffring",
          desc: "Få tillgång till stabila IPTV-servrar med 99.9% drifttid, konstruerade för 4K- och 8K-streaming utan fördröjning. Marknadsledande driftsäkerhet.",
          color: "#8b5cf6",
        },
        {
          icon: "📺",
          title: "20+ White Label IPTV-paneler",
          desc: "Välj bland ledande IPTV-paneler — Strong 4K, Lion OTT, Mega OTT, Crystal, Nexon och mer. Xtream Codes, M3U och MAG box stöds.",
          color: "#3b82f6",
        },
        {
          icon: "💰",
          title: "Höga Återförsäljar-vinstmarginaler",
          desc: "Kontrollera din egen prissättning, dina kundpaket och prenumerationsplaner. Kreditsystemet garanterar förutsägbara kostnader och maximala marginaler.",
          color: "#22c55e",
        },
        {
          icon: "🖥️",
          title: "Professionell Panelhantering",
          desc: "Hantera användare, krediter, prenumerationer, gratisprov och enheter från en modern panel — med realtidsanalys och massimportverktyg.",
          color: "#06b6d4",
        },
        {
          icon: "💬",
          title: "24/7 WhatsApp Support",
          desc: "Snabb support, teknisk vägledning och personlig hjälp för att komma igång — tillgänglig dygnet runt via WhatsApp.",
          color: "#ec4899",
        },
      ]
    },
    businessSection: {
      tag: "Kreditsystemet Förklarat",
      titleMain: "Så fungerar IPTV ",
      titleSpan: "Återförsäljarens Kreditsystem",
      desc1: "Återförsäljarverksamheten för IPTV drivs på ett kreditbaserat system. Du köper IPTV-krediter i bulk från en grossistleverantör — och omvandlar sedan varje kredit till en IPTV-prenumeration för dina kunder till det pris du själv väljer.",
      desc2: "Fox IPTV Panels är det enklaste sättet att bli en IPTV-återförsäljare utan investeringar i egna servrar eller infrastruktur. Vi hanterar den tekniska biten — du fokuserar på försäljning och att bygga din kundbas i Sverige, Norden, Storbritannien, USA, EU eller globalt.",
      desc3: "Till skillnad från en vanlig IPTV-prenumeration (slutanvändare) ger en återförsäljarpanel dig full kontroll över prissättning, paket och kundkonton — vilket gör dig till leverantören.",
      controlLabel: "Som IPTV-återförsäljare styr du:",
      controls: [
        "Dina egna prenumerationspriser",
        "Kund- och gratisprovshantering",
        "Enhets- och MAG box-stöd",
        "Xtream Codes & M3U-utmatning",
        "Månatliga vinstmarginaler",
        "Bulk-kreditallokering",
      ],
      cta: "Starta IPTV Återförsäljarverksamhet",
      steps: [
        {
          step: "01",
          title: "Köp IPTV-krediter i Bulk",
          desc: "Köp ett grossistpaket med krediter. Starta smått med ett startpaket eller satsa stort för att maximera dina vinstmarginaler. Ingen stor förskottsinvestering krävs.",
          icon: "💳",
        },
        {
          step: "02",
          title: "Skapa Kundprenumerationer",
          desc: "Använd dina IPTV-krediter för att aktivera prenumerationer för slutanvändare via din panel. Sätt dina egna priser per prenumerationsperiod.",
          icon: "👥",
        },
        {
          step: "03",
          title: "Hantera Användare från din Panel",
          desc: "Följ aktiva användare, provprenumerationer, utgående krediter och intäkter i realtid från din white label IPTV-återförsäljarpanel.",
          icon: "📊",
        },
        {
          step: "04",
          title: "Bygg Återkommande Månadsinkomst",
          desc: "När kunderna förnyar växer din verksamhet passivt med återkommande intäkter — den mest skalbara affärsmodellen för IPTV.",
          icon: "📈",
        },
      ]
    },
    comparisonTable: {
      tag: "Paneljämförelse 2026",
      titleMain: "Jämförelse av ",
      titleSpan: "IPTV Återförsäljarpaneler 2026",
      desc: "Jämför de bästa IPTV-återförsäljarpanelerna för 2026 — streamingkvalitet, serverstabilitet, panelfunktioner och flexibilitet för att hitta din ideala matchning. Oavsett om du behöver den billigaste panelen eller den mest avancerade plattformen har vi det.",
      cols: {
        panel: "IPTV Panel",
        quality: "Streamingkvalitet",
        support: "Support",
        dashboard: "Paneltyp",
        bestFor: "Bäst För"
      },
      rows: [
        { panel: "Strong 4K", slug: "strong-4k-iptv-reseller-panel", quality: "4K/8K", support: "24/7", dashboard: "Avancerad", bestFor: "Premiumåterförsäljare", badge: "Toppval" },
        { panel: "Lion OTT", slug: "lion-ott-iptv-reseller-panel", quality: "4K", support: "Snabb", dashboard: "Nybörjarvänlig", bestFor: "Nya Återförsäljare", badge: "Bäst för Start" },
        { panel: "Crystal OTT", slug: "crystal-ott-iptv-reseller-panel", quality: "Full HD/4K", support: "24/7", dashboard: "Professionell", bestFor: "Växande Varumärken", badge: "" },
        { panel: "Mega OTT", slug: "mega-ott-iptv-reseller-panel", quality: "4K", support: "Snabb", dashboard: "Modern", bestFor: "Bulk- / Grossister", badge: "" },
        { panel: "Nexon", slug: "nexon-iptv-reseller-panel", quality: "4K", support: "24/7", dashboard: "Avancerad", bestFor: "Stora IPTV-bolag", badge: "" },
      ],
      cta: "Fullständig Paneljämförelse 2026"
    },
    dashboardSection: {
      tag: "IPTV Panelhantering",
      titleMain: "Professionell ",
      titleSpan: "IPTV Återförsäljarpanel",
      titleEnd: " — Full Kontroll",
      desc1: "Din inloggning ger dig tillgång till en komplett white label-panel för att styra hela din verksamhet. Spåra prenumerationer, tilldela krediter, skapa gratisprov och övervaka varje kund — allt från ett centraliserat gränssnitt.",
      desc2: "Våra paneler stöder Xtream Codes API, M3U-filer och MAG box-enheter — vilket täcker alla leveransmetoder dina kunder använder.",
      features: [
        { icon: "👥", label: "Hantering av prenumerationer" },
        { icon: "💳", label: "Kreditfördelning & massimport" },
        { icon: "🎫", label: "Skapa gratis provkonton" },
        { icon: "📱", label: "Hantering av MAG box & enheter" },
        { icon: "📺", label: "M3U spellistor och länkar" },
        { icon: "🔗", label: "Xtream Codes återförsäljar-API" },
        { icon: "📊", label: "Aktivitetsspårning i realtid" },
        { icon: "📦", label: "Anpassade kanalpaket" },
      ],
      uptimeTitle: "99.9% Stabilitet på IPTV-servrar",
      uptimeDesc: "Stabila servrar — ingen buffring, minimal drifttid garanteras",
      mockup: {
        title: "IPTV Återförsäljarpanel",
        live: "Live",
        users: "Användare",
        credits: "Krediter",
        revenue: "Intäkter",
        chartLabel: "Intäkter (Senaste 7 dagarna)",
        btn1: "Skapa Användare",
        btn2: "Lägg Till Krediter",
        btn3: "Massimport"
      }
    },
    benefitsSection: {
      tag: "IPTV Återförsäljarprogram",
      titleMain: "Fördelar med Vårt ",
      titleSpan: "IPTV Återförsäljarprogram",
      desc: "Fox IPTV Panels ger återförsäljare på alla nivåer en konkurrensfördel — från förstagångsstartare till stora grossister. Vårt program är utformat för maximal vinst och minimalt krångel. Inga servrar att hantera. Ingen teknisk infrastruktur krävs. Starta som nybörjare och skala upp.",
      stats: [
        { label: "IPTV Paneler", value: "20+" },
        { label: "Server Drifttid", value: "99.9%" },
        { label: "WhatsApp Support", value: "24/7" },
      ],
      items: [
        { icon: "💡", text: "Låg startkostnad — inga stora investeringar" },
        { icon: "⚡", text: "Snabb panelkonfiguration" },
        { icon: "🔄", text: "Återkommande månatlig inkomstström" },
        { icon: "📡", text: "Stabila 4K IPTV-servrar" },
        { icon: "📺", text: "20+ olika panelalternativ" },
        { icon: "🎓", text: "Hjälp att komma igång & sälja" },
        { icon: "📈", text: "Mycket skalbar affärsmodell" },
        { icon: "🌍", text: "Global täckning — Sverige, UK, USA & EU" },
        { icon: "🎬", text: "Streaming i 4K och 8K utan buffring" },
        { icon: "🖥️", text: "White label-paneler under eget namn" },
      ]
    },
    testimonialsSection: {
      tag: "Återförsäljarrecensioner",
      titleMain: "Vad IPTV-återförsäljare säger om ",
      titleSpan: "Fox IPTV Panels",
      items: [
        {
          quote: "Bästa IPTV-återförsäljarpanelen jag har använt. Snabb support, stabila servrar och ingen buffring alls. Mina kunder i Sverige älskar det.",
          name: "Ahmed R.",
          role: "IPTV Återförsäljare — Sverige",
          stars: 5,
          initials: "AR",
          color: "#8b5cf6",
        },
        {
          quote: "Enkelt att starta även utan tidigare erfarenhet. Kreditsystemet är enkelt: köp krediter, skapa konton, behåll vinsten. Klockrent.",
          name: "Carlos M.",
          role: "IPTV Återförsäljare — Norden",
          stars: 5,
          initials: "CM",
          color: "#3b82f6",
        },
        {
          quote: "Mycket hög drifttid, snabb kreditleverans och en snygg white label-panel. Mina slutanvändare är helt nöjda.",
          name: "Liam K.",
          role: "IPTV Återförsäljare — EU",
          stars: 5,
          initials: "LK",
          color: "#06b6d4",
        },
      ]
    },
    faqSection: {
      tag: "Frågor & Svar",
      titleMain: "Vanliga Frågor om ",
      titleSpan: "IPTV Återförsäljare",
      desc: "Allt du behöver veta om att starta din IPTV-återförsäljarverksamhet, hur kreditsystemet fungerar, paneljämförelser, gratisprov och mer.",
      items: [
        {
          q: "Vad är en IPTV-återförsäljarpanel?",
          a: "Det är en white label-plattform där du skapar och hanterar IPTV-prenumerationer med hjälp av krediter. Den stöder Xtream Codes, M3U-filer och MAG box-anslutningar. Som återförsäljare köper du krediter i bulk från en grossist som Fox IPTV Panels och aktiverar konton för dina kunder till ditt eget valda pris.",
        },
        {
          q: "Hur fungerar IPTV-återförsäljarkrediter?",
          a: "Kreditsystemet är enkelt: 1 kredit motsvarar 1 månads IPTV-prenumeration för 1 kund. Du köper krediter till grossistpris och använder dem i din panel för att skapa abonnemang. Skillnaden mellan inköpspriset per kredit och vad du tar betalt av kunden är din vinstmarginal.",
        },
        {
          q: "Hur startar jag en IPTV-återförsäljarverksamhet utan investering?",
          a: "Du kan starta med minimal budget genom att köpa ett startpaket hos Fox IPTV Panels. Det behövs inga egna servrar eller tekniska förkunskaper. Vi ger dig panelen, du köper ett litet paket krediter och börjar sälja via WhatsApp, sociala medier eller egen hemsida.",
        },
        {
          q: "Vad är skillnaden mellan en återförsäljare och en vanlig prenumeration?",
          a: "En vanlig prenumeration är avsedd för en enskild slutanvändare. En återförsäljarpanel låter dig sälja till flera kunder, skapa gratis provkonton, hantera förnyelser och agera som den faktiska leverantören, sätta egna priser och behålla hela vinsten.",
        },
        {
          q: "Vilken IPTV-panel är bäst 2026?",
          a: "Det beror på dina kunders behov: Strong 4K är bäst för högsta bildkvalitet; Lion OTT är utmärkt för nybörjare på grund av sin enkelhet; Crystal och Nexon är fantastiska för stabila varumärken; Mega OTT är bäst för stora bulkinköp. Vi ger dig tillgång till alla.",
        },
        {
          q: "Erbjuder ni 4K IPTV-paneler utan buffring?",
          a: "Ja, absolut. Fox IPTV Panels erbjuder tillgång till premium-paneler som Strong 4K och Ultra 8K med 99.9% garanterad drifttid och optimerade servrar som eliminerar buffring och fördröjning.",
        },
        {
          q: "Finns det gratisprov för återförsäljarpaneler?",
          a: "Ja. Vi erbjuder gratis provkonton för återförsäljarpanelen så att du kan testa bildkvaliteten, driften och kanalerna innan du köper krediter. Kontakta oss på WhatsApp för att få din testlänk idag.",
        },
        {
          q: "Är era tjänster tillgängliga i Sverige och Norden?",
          a: "Ja, vi stöder återförsäljare över hela världen. Våra servrar är geografiskt fördelade i Europa för att säkerställa låg latens och maximal stabilitet för dina nordiska kunder.",
        },
        {
          q: "Vilken är den billigaste IPTV-återförsäljarpanelen?",
          a: "Vi erbjuder flexibla paket med mycket låga startkostnader så att du kan komma igång utan risk. Ju fler krediter du köper i bulk, desto lägre blir priset per kredit, vilket maximerar din vinst.",
        },
      ]
    },
    ctaSection: {
      tag: "🚀 Starta Din Egen Streamingverksamhet Idag",
      titleMain: "Bli IPTV-återförsäljare — ",
      titleSpan: "Köp Din Panel & Dina Krediter Idag",
      desc1: "Få tillgång till marknadens bästa IPTV-paneler, köp krediter direkt och starta din egen streamingtjänst med 24/7 WhatsApp-support.",
      desc2: "Fullt stöd för återförsäljare i Sverige, Norden & EU — 4K-streaming utan buffring, stabila servrar. Gratis provkonton tillgängliga. Kom igång på några minuter.",
      btnPrimary: "Börja Sälja på WhatsApp",
      btnSecondary: "Jämför IPTV Paneler 2026",
      badges: [
        { icon: "🔒", text: "Säkert & Pålitligt" },
        { icon: "⚡", text: "Direktaktivering" },
        { icon: "💬", text: "24/7 WhatsApp Support" },
        { icon: "🌍", text: "Globala Servrar" },
        { icon: "🎬", text: "4K Utan Buffring" },
        { icon: "🆓", text: "Gratis Provkonton" },
      ]
    },
    pricingSection: {
      tag: "Köp IPTV-krediter",
      titleMain: "Flexibla Kreditplaner för ",
      titleSpan: "IPTV Återförsäljare",
      desc: "Lås upp din egen white label-streamingtjänst. Jämför våra kreditpaket nedan och välj det alternativ som passar din budget bäst.",
      bestValue: "★ MEST PRISVÄRD",
      pkgCostLabel: "Paketpris (Inköp)",
      totalLabel: "totalt",
      creditLabel: "kredit",
      resellRevenueLabel: "Uppskattad Försäljning",
      netProfitLabel: "Din Nettovinst",
      plans: [
        {
          id: "starter",
          name: "Startpaket",
          badge: "120 KREDITER",
          cost: 120,
          rate: "$1.00",
          revenue: "1,200",
          profit: "1,080",
          description: "Perfekt val för nybörjare som startar sitt eget streamingvarumärke.",
          features: [
            "120 grossistkrediter (Ingen utgångstid)",
            "Standard kontrollpanel",
            "Full servertillgång & startguide",
          ],
          cta: "Beställ Starter",
          color: "#3b82f6",
          gradient: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.03))",
          border: "rgba(59,130,246,0.2)",
          popular: false,
        },
        {
          id: "growth",
          name: "Tillväxtpaket",
          badge: "200 KREDITER",
          cost: 180,
          rate: "$0.90",
          revenue: "2,000",
          profit: "1,820",
          description: "Premium grossistpaket för växande varumärken som behöver egen DNS.",
          features: [
            "200 grossistkrediter (Ingen utgångstid)",
            "Avancerad panel + underåterförsäljare",
            "Egen DNS & komplett white label",
          ],
          cta: "Beställ Growth",
          color: "#8b5cf6",
          gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.06))",
          border: "rgba(139,92,246,0.35)",
          popular: true,
        },
        {
          id: "enterprise",
          name: "Företagspaket",
          badge: "500 KREDITER",
          cost: 350,
          rate: "$0.70",
          revenue: "5,000",
          profit: "4,650",
          description: "Det lägsta enhetspriset på marknaden, anpassat för höga försäljningsvolymer.",
          features: [
            "500 grossistkrediter (Ingen utgångstid)",
            "Administrationspaneler på elitnivå",
            "Dedikerad domän & obegränsad routing",
          ],
          cta: "Beställ Enterprise",
          color: "#06b6d4",
          gradient: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(6,182,212,0.03))",
          border: "rgba(6,182,212,0.2)",
          popular: false,
        },
      ],
      calculator: {
        title: "Kalkylator för Återförsäljarvinst",
        desc: "Välj mängden krediter och ditt uppskattade månadspris för att beräkna dina återkommande vinster.",
        purchaseLabel: "Mängd Krediter att Inköpa",
        creditsSuffix: "Krediter",
        resellPriceLabel: "Ditt Månatliga Försäljningspris",
        sellSuffix: "/mån",
        typicalLabel: "Typiskt",
        costToBuy: "Paketkostnad (Inköp) :",
        grossRevenue: "Bruttoomsättning (Försäljning) :",
        netProfit: "Din Nettovinst :",
        cta: "Säker Återförsäljarinstallation"
      }
    },
    footer: {
      brandDesc1: "Fox IPTV Panels är den bästa leverantören av IPTV-återförsäljarpaneler, och erbjuder white label-paneler, grossistkrediter, hanteringspaneler kompatibla med Xtream Codes & M3U, samt stabila 4K-servrar utan buffring.",
      brandDesc2: "Support för återförsäljare i Sverige, Norden, Storbritannien, USA, EU och globalt — med dedikerad support via WhatsApp dygnet runt.",
      cols: {
        panels: "IPTV Återförsäljarpaneler",
        comparisons: "Paneljämförelser 2026",
        guides: "Återförsäljarguider",
        quickLinks: "Snabblänkar"
      },
      copyright: "© 2026 Fox IPTV Panels — #1 IPTV Återförsäljarleverantör. Alla rättigheter förbehållna.",
      disclaimer: "Återförsäljarpaneler tillgängliga i Sverige, Storbritannien, USA & EU. Alla varumärken tillhör sina respektive ägare."
    }
  },
  no: {
    trustBar: {
      stats: [
        { icon: "📺", label: "IPTV Forhandlerpaneler", value: "20+" },
        { icon: "🕐", label: "WhatsApp Support", value: "24/7" },
        { icon: "🎬", label: "4K & 8K Streaming", value: "Ingen Buffer" },
        { icon: "⚡", label: "Kreditt Levering", value: "Direkte" },
        { icon: "🌍", label: "UK, USA & EU", value: "Global" },
        { icon: "🏗️", label: "Server Oppetid", value: "99.9%" },
      ]
    },
    featuresSection: {
      tag: "Hvorfor Fox IPTV Panels",
      titleMain: "Hvorfor IPTV-forhandlere velger ",
      titleSpan: "Fox IPTV Panels",
      titleEnd: " i 2026",
      desc: "Alt du trenger for å starte og skalere en lønnsom IPTV-forhandlervirksomhet — fra tilgang til den billigste forhandlerpanelet til administrasjon på grossistnivå.",
      items: [
        {
          icon: "⚡",
          title: "Direkte IPTV-kredittlevering",
          desc: "Kjøp IPTV-forhandlerkreditter umiddelbart etter godkjenning. Store kredittpakker tilgjengelig for alle bedriftsstørrelser — fra nybegynnere til grossistvolum.",
          color: "#f59e0b",
        },
        {
          icon: "📡",
          title: "4K IPTV-servere — Ingen Buffring",
          desc: "Få tilgang til stabile IPTV-servere med 99.9% oppetid, konstruert for 4K- og 8K-streaming uten forsinkelse. Markedsledende driftsikkerhet.",
          color: "#8b5cf6",
        },
        {
          icon: "📺",
          title: "20+ White Label IPTV-paneler",
          desc: "Velg blant ledende IPTV-paneler — Strong 4K, Lion OTT, Mega OTT, Crystal, Nexon og mer. Xtream Codes, M3U og MAG box støttes.",
          color: "#3b82f6",
        },
        {
          icon: "💰",
          title: "Høye Forhandler-vinstmarginer",
          desc: "Kontroller din egen prissetting, dine kundepakker og abonnementer. Kredittsystemet garanterer forutsigbare kostnader og maksimale marginer.",
          color: "#22c55e",
        },
        {
          icon: "🖥️",
          title: "Profesjonell Panelbehandling",
          desc: "Administrer brukere, kreditter, abonnementer, gratisprøver og enheter fra et moderne panel — med sanntidsanalyse og masseimportverktøy.",
          color: "#06b6d4",
        },
        {
          icon: "💬",
          title: "24/7 WhatsApp Support",
          desc: "Rask support, teknisk veiledning og personlig hjelp til å komme i gang — tilgjengelig døgnet rundt via WhatsApp.",
          color: "#ec4899",
        },
      ]
    },
    businessSection: {
      tag: "Kredittsystemet Forklart",
      titleMain: "Slik fungerer IPTV ",
      titleSpan: "Forhandlerens Kredittsystem",
      desc1: "Forhandlervirksomheten for IPTV drives på et kredittbasert system. Du kjøper IPTV-kreditter i bulk fra en grossistleverandør — og omgjør deretter hver kreditt til et IPTV-abonnement for dine kunder til den prisen du selv velger.",
      desc2: "Fox IPTV Panels er den enkleste måten å bli en IPTV-forhandler på uten investeringer i egne servere eller infrastruktur. Vi håndterer den tekniske biten — du fokuserer på salg og å bygge din kundebase i Norge, Norden, Storbritannia, USA, EU eller globalt.",
      desc3: "Til forskjell fra et vanlig IPTV-abonnement (sluttbruker) gir et forhandlerpanel deg full kontroll over prissetting, pakker og kundekontoer — noe som gjør deg til leverandøren.",
      controlLabel: "Som IPTV-forhandler styrer du:",
      controls: [
        "Dine egne abonnementspriser",
        "Kunde- og gratisprøvehåndtering",
        "Enhets- og MAG box-støtte",
        "Xtream Codes & M3U-utmatning",
        "Månedlige vinstmarginer",
        "Bulk-kredittallokering",
      ],
      cta: "Start IPTV Forhandlervirksomhet",
      steps: [
        {
          step: "01",
          title: "Kjøp IPTV-kreditter i Bulk",
          desc: "Kjøp en grossistpakke med kreditter. Start smått med en startpakke eller sats stort for å maksimere dine vinstmarginer. Ingen stor forskuddsinvestering kreves.",
          icon: "💳",
        },
        {
          step: "02",
          title: "Opprett Kundeabonnementer",
          desc: "Bruk dine IPTV-kreditter til å aktivere abonnementer for sluttbrukere via panelet ditt. Sett dine egne priser per abonnementsperiode.",
          icon: "👥",
        },
        {
          step: "03",
          title: "Administrer Brukere fra Panelet ditt",
          desc: "Følg aktive brukere, prøveabonnementer, utgående kreditter og inntekter i sanntid fra ditt white label IPTV-forhandlerpanel.",
          icon: "📊",
        },
        {
          step: "04",
          title: "Bygg Gjentakende Månedsinntekt",
          desc: "Når kundene fornyer vokser virksomheten din passivt med gjentakende inntekter — den mest skalerbare forretningsmodellen for IPTV.",
          icon: "📈",
        },
      ]
    },
    comparisonTable: {
      tag: "Paneljämförelse 2026",
      titleMain: "Sammenligning av ",
      titleSpan: "IPTV Forhandlerpaneler 2026",
      desc: "Sammenlign de beste IPTV-forhandlerpanelene for 2026 — streamingkvalitet, serverstabilitet, panelfunksjoner og forhandlerfleksibilitet for å finne din ideelle match. Enten du trenger det billigste panelet eller den mest avanserte plattformen har vi det.",
      cols: {
        panel: "IPTV Panel",
        quality: "Streamingkvalitet",
        support: "Support",
        dashboard: "Paneltype",
        bestFor: "Best For"
      },
      rows: [
        { panel: "Strong 4K", slug: "strong-4k-iptv-reseller-panel", quality: "4K/8K", support: "24/7", dashboard: "Avansert", bestFor: "Premiumforhandlere", badge: "Toppvalg" },
        { panel: "Lion OTT", slug: "lion-ott-iptv-reseller-panel", quality: "4K", support: "Rask", dashboard: "Nybegynnervennlig", bestFor: "Nye Forhandlere", badge: "Best for Start" },
        { panel: "Crystal OTT", slug: "crystal-ott-iptv-reseller-panel", quality: "Full HD/4K", support: "24/7", dashboard: "Profesjonell", bestFor: "Voksende Merkevarer", badge: "" },
        { panel: "Mega OTT", slug: "mega-ott-iptv-reseller-panel", quality: "4K", support: "Rask", dashboard: "Moderne", bestFor: "Bulk- / Grossister", badge: "" },
        { panel: "Nexon", slug: "nexon-iptv-reseller-panel", quality: "4K", support: "24/7", dashboard: "Avansert", bestFor: "Store IPTV-selskaper", badge: "" },
      ],
      cta: "Fullstendig Panelsammenligning 2026"
    },
    dashboardSection: {
      tag: "IPTV Panelbehandling",
      titleMain: "Profesjonell ",
      titleSpan: "IPTV Forhandlerpanel",
      titleEnd: " — Full Kontroll",
      desc1: "Din innlogging gir deg tilgang til et komplett white label-panel for å styre hele virksomheten din. Spor abonnementer, tildel kreditter, opprett gratisprøver og overvåk hver kunde — alt fra et sentralisert grensesnitt.",
      desc2: "Våre paneler støtter Xtream Codes API, M3U-filer og MAG box-enheter — noe som dekker alle leveringsmetoder kundene dine bruker.",
      features: [
        { icon: "👥", label: "Håndtering av abonnementer" },
        { icon: "💳", label: "Kredittfordeling & masseimport" },
        { icon: "🎫", label: "Opprett gratis prøvekontoer" },
        { icon: "📱", label: "Håndtering av MAG box & enheter" },
        { icon: "📺", label: "M3U spillelister og lenker" },
        { icon: "🔗", label: "Xtream Codes forhandler-API" },
        { icon: "📊", label: "Aktivitetssporing i sanntid" },
        { icon: "📦", label: "Tilpassede kanalpakker" },
      ],
      uptimeTitle: "99.9% Stabilitet på IPTV-servere",
      uptimeDesc: "Stabile servere — ingen buffring, minimal nedetid garanteres",
      mockup: {
        title: "IPTV Forhandlerpanel",
        live: "Live",
        users: "Brukere",
        credits: "Kreditter",
        revenue: "Inntekter",
        chartLabel: "Inntekter (Siste 7 dager)",
        btn1: "Opprett Bruker",
        btn2: "Legg Til Kreditter",
        btn3: "Masseimport"
      }
    },
    benefitsSection: {
      tag: "IPTV Forhandlerprogram",
      titleMain: "Fordeler med Vårt ",
      titleSpan: "IPTV Forhandlerprogram",
      desc: "Fox IPTV Panels gir forhandlere på alle nivåer et konkurransefortrinn — fra førstegangsstartere til store grossister. Vårt program er utformet for maksimal fortjeneste og minimalt med mas. Ingen servere å administrere. Ingen teknisk infrastruktur kreves. Start som nybegynner og skaler opp.",
      stats: [
        { label: "IPTV Paneler", value: "20+" },
        { label: "Server Oppetid", value: "99.9%" },
        { label: "WhatsApp Support", value: "24/7" },
      ],
      items: [
        { icon: "💡", text: "Lav startkostnad — ingen store investeringer" },
        { icon: "⚡", text: "Rask panelkonfigurasjon" },
        { icon: "🔄", text: "Gjentakende månedlig inntektsstrøm" },
        { icon: "📡", text: "Stabile 4K IPTV-servere" },
        { icon: "📺", text: "20+ ulike panelalternativer" },
        { icon: "🎓", text: "Hjelp til å komme i gang & selge" },
        { icon: "📈", text: "Svært skalbar forretningsmodell" },
        { icon: "🌍", text: "Global dekning — Norge, UK, USA & EU" },
        { icon: "🎬", text: "Streaming i 4K og 8K uten buffring" },
        { icon: "🖥️", text: "White label-paneler under eget navn" },
      ]
    },
    testimonialsSection: {
      tag: "Forhandleranmeldelser",
      titleMain: "Hva IPTV-forhandlere sier om ",
      titleSpan: "Fox IPTV Panels",
      items: [
        {
          quote: "Beste IPTV-forhandlerpanelet jeg har brukt. Rask support, stabile servere og ingen buffring i det hele tatt. Mine kunder i Norge elsker det.",
          name: "Ahmed R.",
          role: "IPTV Forhandler — Norge",
          stars: 5,
          initials: "AR",
          color: "#8b5cf6",
        },
        {
          quote: "Enkelt å starte selv uten tidligere erfaring. Kredittsystemet er enkelt: kjøp kreditter, opprett kontoer, behold fortjenesten. Kjempebra.",
          name: "Carlos M.",
          role: "IPTV Forhandler — Norden",
          stars: 5,
          initials: "CM",
          color: "#3b82f6",
        },
        {
          quote: "Svært høy oppetid, rask kredittlevering og et pent white label-panel. Mine sluttbrukere er helt fornøyde.",
          name: "Liam K.",
          role: "IPTV Forhandler — EU",
          stars: 5,
          initials: "LK",
          color: "#06b6d4",
        },
      ]
    },
    faqSection: {
      tag: "Spørsmål & Svar",
      titleMain: "Vanlige Spørsmål om ",
      titleSpan: "IPTV Forhandlere",
      desc: "Alt du trenger å vite om å starte din IPTV-forhandlervirksomhet, hvordan kredittsystemet fungerer, panelsammenligninger, gratisprøver og mer.",
      items: [
        {
          q: "Hva er et IPTV-forhandlerpanel?",
          a: "Det er en white label-plattform der du oppretter og administrerer IPTV-abonnementer ved hjelp av kreditter. Den støtter Xtream Codes, M3U-filer og MAG box-tilkoblinger. Som forhandler kjøper du kreditter i bulk fra en grossist som Fox IPTV Panels og aktiverer kontoer for kundene dine til din egen valgte pris.",
        },
        {
          q: "Hvordan fungerer IPTV-forhandlerkreditter?",
          a: "Kredittsystemet er enkelt: 1 kreditt tilsvarer 1 måneds IPTV-abonnement for 1 kunde. Du kjøper kreditter til grossistpris og bruker dem i panelet ditt til å opprette abonnement. Forskjellen mellom innkjøpsprisen per kreditt og hva du tar betalt av kunden er vinstmarginen din.",
        },
        {
          q: "Hvordan starter jeg en IPTV-forhandlervirksomhet uten investering?",
          a: "Du kan starte med minimalt budsjett ved å kjøpe en startpakke hos Fox IPTV Panels. Det trengs ingen egne servere eller tekniske forkunnskaper. Vi gir deg panelet, du kjøper en liten pakke kreditter og begynner å selge via WhatsApp, sosiale medier eller egen hjemmeside.",
        },
        {
          q: "Hva er forskjellen mellom en forhandler og et vanlig abonnement?",
          a: "Et vanlig abonnement er beregnet for en enkelt sluttbruker. Et forhandlerpanel lar deg selge til flere kunder, opprette gratis prøvekontoer, administrere fornyelser og fungere som den faktiske leverandøren, sette egne priser og beholde hele fortjenesten.",
        },
        {
          q: "Hvilken IPTV-panel er best 2026?",
          a: "Det kommer an på kundenes behov: Strong 4K er best for høyeste bildekvalitet; Lion OTT er utmerket for nybegynnere på grunn av sin enkelhet; Crystal og Nexon er fantastiske for stabile merkevarer; Mega OTT er best for store bulkinnkjøp. Vi gir deg tilgang til alle.",
        },
        {
          q: "Tilbyr dere 4K IPTV-paneler uten buffring?",
          a: "Ja, absolutt. Fox IPTV Panels tilbyr tilgang til premium-paneler som Strong 4K og Ultra 8K med 99.9% garantert oppetid og optimaliserte servere som eliminerer buffring og forsinkelse.",
        },
        {
          q: "Finnes det gratisprøver for forhandlerpaneler?",
          a: "Ja. Vi tilbyr gratis prøvekontoer for forhandlerpanelet slik at du kan teste bildekvaliteten, driften og kanalene før du kjøper kreditter. Kontakt oss på WhatsApp for å få din testlenke i dag.",
        },
        {
          q: "Er tjenestene deres tilgjengelige i Norge og Norden?",
          a: "Ja, vi støtter forhandlere over hele verden. Serverne våre er geografisk fordelt i Europa for å sikre lav latens og maksimal stabilitet for dine nordiske kunder.",
        },
        {
          q: "Hvilken er den billigste IPTV-forhandlerpanelet?",
          a: "Vi tilbyr fleksible pakker med svært lave startkostnader slik at du kan komme i gang uten risiko. Jo flere kreditter du kjøper i bulk, desto lavere blir prisen per kreditt, noe som maksimerer vinsten din.",
        },
      ]
    },
    ctaSection: {
      tag: "🚀 Start Din Egen Streamingvirksomhet I dag",
      titleMain: "Bli IPTV-forhandler — ",
      titleSpan: "Kjøp Panelet Ditt & Kredittene Dine I dag",
      desc1: "Få tilgang til markedets beste IPTV-paneler, kjøp kreditter direkte og start din egen streamingtjeneste med 24/7 WhatsApp-support.",
      desc2: "Full støtte for forhandlere i Norge, Norden & EU — 4K-streaming uten buffring, stabile servere. Gratis prøvekontoer tilgjengelig. Kom i gang på noen minutter.",
      btnPrimary: "Begynn å Selge på WhatsApp",
      btnSecondary: "Sammenlign IPTV Paneler 2026",
      badges: [
        { icon: "🔒", text: "Sikkert & Pålitelig" },
        { icon: "⚡", text: "Direkteaktivering" },
        { icon: "💬", text: "24/7 WhatsApp Support" },
        { icon: "🌍", text: "Globale Servere" },
        { icon: "🎬", text: "4K Uten Buffring" },
        { icon: "🆓", text: "Gratis Prøvekontoer" },
      ]
    },
    pricingSection: {
      tag: "Kjøp IPTV-kreditter",
      titleMain: "Fleksible Kredittplaner for ",
      titleSpan: "IPTV Forhandlere",
      desc: "Lås opp din egen white label-streamingtjeneste. Sammenlign kredittpakkene våre nedenfor og velg det alternativet som passer budsjettet ditt best.",
      bestValue: "★ MEST PRISVERDIG",
      pkgCostLabel: "Paketpris (Innkjøp)",
      totalLabel: "totalt",
      creditLabel: "kreditt",
      resellRevenueLabel: "Estimert Salg",
      netProfitLabel: "Din Nettogevinst",
      plans: [
        {
          id: "starter",
          name: "Startpakke",
          badge: "120 KREDITTER",
          cost: 120,
          rate: "$1.00",
          revenue: "1,200",
          profit: "1,080",
          description: "Perfekt valg for nybegynnere som starter sitt eget streamingmerke.",
          features: [
            "120 grossistkreditter (Ingen utløpstid)",
            "Standard kontrollpanel",
            "Full servertilgang & startguide",
          ],
          cta: "Bestill Starter",
          color: "#3b82f6",
          gradient: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.03))",
          border: "rgba(59,130,246,0.2)",
          popular: false,
        },
        {
          id: "growth",
          name: "Vekstpakke",
          badge: "200 KREDITTER",
          cost: 180,
          rate: "$0.90",
          revenue: "2,000",
          profit: "1,820",
          description: "Premium grossistpakke for voksende merkevarer som trenger egen DNS.",
          features: [
            "200 grossistkreditter (Ingen utløpstid)",
            "Avansert panel + underforhandlere",
            "Egen DNS & komplett white label",
          ],
          cta: "Bestill Growth",
          color: "#8b5cf6",
          gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.06))",
          border: "rgba(139,92,246,0.35)",
          popular: true,
        },
        {
          id: "enterprise",
          name: "Bedriftspakke",
          badge: "500 KREDITTER",
          cost: 350,
          rate: "$0.70",
          revenue: "5,000",
          profit: "4,650",
          description: "Den laveste enhetsprisen på markedet, tilpasset høye salgsvolumer.",
          features: [
            "500 grossistkreditter (Ingen utløpstid)",
            "Administrasjonspaneler på elitnivå",
            "Dedikert domene & ubegrenset routing",
          ],
          cta: "Bestill Enterprise",
          color: "#06b6d4",
          gradient: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(6,182,212,0.03))",
          border: "rgba(6,182,212,0.2)",
          popular: false,
        },
      ],
      calculator: {
        title: "Kalkulator for Forhandlervinst",
        desc: "Velg mengden kreditter og din estimerte månedlige salgspris for å beregne dine gjentakende gevinster.",
        purchaseLabel: "Mengde Kreditter å Innkjøpe",
        creditsSuffix: "Kreditter",
        resellPriceLabel: "Din Månedlige Salgspris",
        sellSuffix: "/mnd",
        typicalLabel: "Typisk",
        costToBuy: "Paketkostnad (Innkjøp) :",
        grossRevenue: "Bruttoomsetning (Salg) :",
        netProfit: "Din Nettogevinst :",
        cta: "Sikker Forhandlerinstallasjon"
      }
    },
    footer: {
      brandDesc1: "Fox IPTV Panels er den beste leverandøren av IPTV-forhandlerpaneler, og tilbyr white label-paneler, grossistkreditter, administrasjonspaneler kompatible med Xtream Codes & M3U, samt stabile 4K-servere uten buffring.",
      brandDesc2: "Support for forhandlere i Norge, Norden, Storbritannia, USA, EU og globalt — med dedikert support via WhatsApp døgnet rundt.",
      cols: {
        panels: "IPTV Forhandlerpaneler",
        comparisons: "Panelsammenligninger 2026",
        guides: "Forhandlerguider",
        quickLinks: "Hurtigkoblinger"
      },
      copyright: "© 2026 Fox IPTV Panels — #1 IPTV Forhandlerleverandør. Alle rettigheter forbeholdt.",
      disclaimer: "Forhandlerpaneler tilgjengelig i Norge, Storbritannien, USA & EU. Alle varemerker tilhører sine respektive eiere."
    }
  }
};

export const getSectionTranslations = (locale: string): Dictionary => {
  const lang = locale.split("-")[0];
  return dictionary[lang] || dictionary["en"];
};

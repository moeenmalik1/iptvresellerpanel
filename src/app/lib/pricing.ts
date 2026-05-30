export interface PlanPricing {
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
}

export interface PricingDetails {
  currency: string;
  symbol: string;
  symbolAfter: boolean;
  starter: PlanPricing;
  growth: PlanPricing;
  enterprise: PlanPricing;
  // Sliders config
  sellPriceDefault: number;
  sellPriceMin: number;
  sellPriceMax: number;
  sellPriceStep: number;
  // Calculate cost dynamically
  calculateCostPerCredit: (qty: number) => number;
}

export function getLocalizedPricing(locale: string): PricingDetails {
  const normLocale = locale.toLowerCase();

  let currency = "USD";
  let symbol = "$";
  let symbolAfter = false;

  let starterCost = 120;
  let growthCost = 180;
  let enterpriseCost = 350;

  let sellPriceDefault = 10;
  let sellPriceMin = 5;
  let sellPriceMax = 25;
  let sellPriceStep = 1;

  if (normLocale === "en-gb") {
    currency = "GBP";
    symbol = "£";
    starterCost = 95;
    growthCost = 145;
    enterpriseCost = 280;
  } else if (normLocale === "en-au") {
    currency = "AUD";
    symbol = "A$";
    starterCost = 180;
    growthCost = 270;
    enterpriseCost = 530;
    sellPriceDefault = 15;
    sellPriceMin = 8;
    sellPriceMax = 35;
  } else if (normLocale === "es" || normLocale === "fr" || normLocale === "pt") {
    currency = "EUR";
    symbol = "€";
    starterCost = 110;
    growthCost = 165;
    enterpriseCost = 320;
  } else if (normLocale === "sv") {
    currency = "SEK";
    symbol = " kr";
    symbolAfter = true;
    starterCost = 1250;
    growthCost = 1850;
    enterpriseCost = 3650;
    sellPriceDefault = 100;
    sellPriceMin = 50;
    sellPriceMax = 250;
    sellPriceStep = 5;
  } else if (normLocale === "no") {
    currency = "NOK";
    symbol = " kr";
    symbolAfter = true;
    starterCost = 1300;
    growthCost = 1950;
    enterpriseCost = 3850;
    sellPriceDefault = 100;
    sellPriceMin = 50;
    sellPriceMax = 250;
    sellPriceStep = 5;
  }

  const formatVal = (val: number) => {
    if (symbolAfter) {
      return val.toLocaleString() + symbol;
    }
    return symbol + val.toLocaleString();
  };

  const calculateCostPerCredit = (qty: number) => {
    if (qty < 200) return starterCost / 120;
    if (qty < 500) return growthCost / 200;
    return enterpriseCost / 500;
  };

  // Generate plans features and metadata
  const starterRate = starterCost / 120;
  const growthRate = growthCost / 200;
  const enterpriseRate = enterpriseCost / 500;

  const starterRev = 120 * sellPriceDefault;
  const growthRev = 200 * sellPriceDefault;
  const enterpriseRev = 500 * sellPriceDefault;

  const getStarterName = () => {
    if (normLocale === "es") return "Paquete Starter";
    if (normLocale === "sv") return "Starter-paket";
    if (normLocale === "fr") return "Pack Starter";
    if (normLocale === "pt") return "Pacote Starter";
    if (normLocale === "no") return "Starter-pakke";
    return "Starter Pack";
  };

  const getGrowthName = () => {
    if (normLocale === "es") return "Paquete Growth";
    if (normLocale === "sv") return "Growth-paket";
    if (normLocale === "fr") return "Pack Growth";
    if (normLocale === "pt") return "Pacote Growth";
    if (normLocale === "no") return "Growth-pakke";
    return "Growth Pack";
  };

  const getEnterpriseName = () => {
    if (normLocale === "es") return "Paquete Enterprise";
    if (normLocale === "sv") return "Enterprise-grossist";
    if (normLocale === "fr") return "Pack Enterprise";
    if (normLocale === "pt") return "Pacote Enterprise";
    if (normLocale === "no") return "Enterprise-grossist";
    return "Enterprise Wholesale";
  };

  // Locale map helper
  const lc = (map: Record<string, string>) => map[normLocale] ?? map["en"] ?? "";

  return {
    currency,
    symbol,
    symbolAfter,
    sellPriceDefault,
    sellPriceMin,
    sellPriceMax,
    sellPriceStep,
    calculateCostPerCredit,
    starter: {
      id: "starter",
      name: getStarterName(),
      badge: "120 CREDITS",
      cost: starterCost,
      rate: formatVal(Number(starterRate.toFixed(2))),
      revenue: starterRev.toLocaleString(),
      profit: (starterRev - starterCost).toLocaleString(),
      description: lc({ en: "Best choice for beginner resellers starting their streaming brand.", "en-gb": "Best choice for beginner resellers starting their streaming brand.", "en-au": "Best choice for beginner resellers starting their streaming brand.", es: "La mejor opción para distribuidores principiantes que inician su marca.", fr: "Meilleur choix pour les revendeurs débutants qui lancent leur marque de streaming.", pt: "A melhor opção para revendedores iniciantes a lançar a sua marca de streaming.", sv: "Bästa valet för nybörjare inom återförsäljning som startar sitt streamingvarumärke.", no: "Beste valg for nybegynnere innen forhandling som starter sitt streamingmerke." }),
      features: [
        lc({ en: "120 wholesale credits (No expiry)", "en-gb": "120 wholesale credits (No expiry)", "en-au": "120 wholesale credits (No expiry)", es: "120 créditos mayoristas (Sin caducidad)", fr: "120 crédits grossiste (Sans expiration)", pt: "120 créditos grossista (Sem expiração)", sv: "120 grossistkrediter (Ingen utgång)", no: "120 engroskreditter (Ingen utløp)" }),
        lc({ en: "Standard control dashboard", "en-gb": "Standard control dashboard", "en-au": "Standard control dashboard", es: "Panel de control estándar", fr: "Tableau de bord standard", pt: "Painel de controlo padrão", sv: "Standard kontrollpanel", no: "Standard kontrollpanel" }),
        lc({ en: "Full server access & setup guide", "en-gb": "Full server access & setup guide", "en-au": "Full server access & setup guide", es: "Acceso completo al servidor y guía de configuración", fr: "Accès serveur complet et guide de configuration", pt: "Acesso completo ao servidor e guia de configuração", sv: "Full serveråtkomst och installationsguide", no: "Full servertilgang og installasjonsguide" }),
      ],
      cta: lc({ en: "Order Starter", "en-gb": "Order Starter", "en-au": "Order Starter", es: "Pedir Starter", fr: "Commander Starter", pt: "Encomendar Starter", sv: "Beställ Starter", no: "Bestill Starter" })
    },
    growth: {
      id: "growth",
      name: getGrowthName(),
      badge: "200 CREDITS",
      cost: growthCost,
      rate: formatVal(Number(growthRate.toFixed(2))),
      revenue: growthRev.toLocaleString(),
      profit: (growthRev - growthCost).toLocaleString(),
      description: lc({ en: "Premium wholesale package for growing brands needing white label portals.", "en-gb": "Premium wholesale package for growing brands needing white label portals.", "en-au": "Premium wholesale package for growing brands needing white label portals.", es: "Paquete premium para marcas en crecimiento que necesitan portales de marca blanca.", fr: "Pack premium pour les marques en croissance nécessitant des portails en marque blanche.", pt: "Pacote premium para marcas em crescimento que necessitam de portais de marca branca.", sv: "Premium grossistpaket för växande varumärken som behöver white label-portaler.", no: "Premium grossistpakke for voksende merker som trenger white label-portaler." }),
      features: [
        lc({ en: "200 wholesale credits (No expiry)", "en-gb": "200 wholesale credits (No expiry)", "en-au": "200 wholesale credits (No expiry)", es: "200 créditos mayoristas (Sin caducidad)", fr: "200 crédits grossiste (Sans expiration)", pt: "200 créditos grossista (Sem expiração)", sv: "200 grossistkrediter (Ingen utgång)", no: "200 engroskreditter (Ingen utløp)" }),
        lc({ en: "Advanced dashboard + sub-resellers", "en-gb": "Advanced dashboard + sub-resellers", "en-au": "Advanced dashboard + sub-resellers", es: "Panel avanzado + sub-revendedores", fr: "Tableau de bord avancé + sous-revendeurs", pt: "Painel avançado + sub-revendedores", sv: "Avancerad panel + underåterförsäljare", no: "Avansert panel + underforhandlere" }),
        lc({ en: "Custom DNS & white label branding", "en-gb": "Custom DNS & white label branding", "en-au": "Custom DNS & white label branding", es: "DNS personalizado y marca blanca", fr: "DNS personnalisé et marque blanche", pt: "DNS personalizado e marca branca", sv: "Anpassad DNS och white label-märkning", no: "Tilpasset DNS og white label-merking" }),
      ],
      cta: lc({ en: "Order Growth", "en-gb": "Order Growth", "en-au": "Order Growth", es: "Pedir Growth", fr: "Commander Growth", pt: "Encomendar Growth", sv: "Beställ Growth", no: "Bestill Growth" })
    },
    enterprise: {
      id: "enterprise",
      name: getEnterpriseName(),
      badge: "500 CREDITS",
      cost: enterpriseCost,
      rate: formatVal(Number(enterpriseRate.toFixed(2))),
      revenue: enterpriseRev.toLocaleString(),
      profit: (enterpriseRev - enterpriseCost).toLocaleString(),
      description: lc({ en: "Elite volume package offering the lowest unit rates for high-volume sales.", "en-gb": "Elite volume package offering the lowest unit rates for high-volume sales.", "en-au": "Elite volume package offering the lowest unit rates for high-volume sales.", es: "Paquete de volumen de élite que ofrece las tarifas unitarias más bajas.", fr: "Pack de volume élite offrant les tarifs unitaires les plus bas pour les gros volumes.", pt: "Pacote de volume de elite que oferece as taxas unitárias mais baixas para grandes volumes.", sv: "Elitvolympaket som erbjuder de lägsta enhetspriserna för stora volymer.", no: "Elitevolumpakke som tilbyr de laveste enhetsprisene for store volumer." }),
      features: [
        lc({ en: "500 wholesale credits (No expiry)", "en-gb": "500 wholesale credits (No expiry)", "en-au": "500 wholesale credits (No expiry)", es: "500 créditos mayoristas (Sin caducidad)", fr: "500 crédits grossiste (Sans expiration)", pt: "500 créditos grossista (Sem expiração)", sv: "500 grossistkrediter (Ingen utgång)", no: "500 engroskreditter (Ingen utløp)" }),
        lc({ en: "Elite admin control panels", "en-gb": "Elite admin control panels", "en-au": "Elite admin control panels", es: "Paneles de control de administración élite", fr: "Panneaux de contrôle d'administration élite", pt: "Painéis de controlo de administração de elite", sv: "Elitadministrationskontrollpaneler", no: "Eliteadministrasjonskontrollpaneler" }),
        lc({ en: "Dedicated domain & unlimited routing", "en-gb": "Dedicated domain & unlimited routing", "en-au": "Dedicated domain & unlimited routing", es: "Dominio dedicado y enrutamiento ilimitado", fr: "Domaine dédié et routage illimité", pt: "Domínio dedicado e roteamento ilimitado", sv: "Dedikerad domän och obegränsad routing", no: "Dedikert domene og ubegrenset ruting" }),
      ],
      cta: lc({ en: "Order Enterprise", "en-gb": "Order Enterprise", "en-au": "Order Enterprise", es: "Pedir Enterprise", fr: "Commander Enterprise", pt: "Encomendar Enterprise", sv: "Beställ Enterprise", no: "Bestill Enterprise" })
    }
  };
}

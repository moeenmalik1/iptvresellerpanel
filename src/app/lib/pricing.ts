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
      description: normLocale === "es" ? "La mejor opción para distribuidores principiantes que inician su marca." : "Best choice for beginner resellers starting their streaming brand.",
      features: [
        "120 wholesale credits (No expiry)",
        "Standard control dashboard",
        "Full server access & setup guide",
      ],
      cta: normLocale === "es" ? "Pedir Starter" : "Order Starter"
    },
    growth: {
      id: "growth",
      name: getGrowthName(),
      badge: "200 CREDITS",
      cost: growthCost,
      rate: formatVal(Number(growthRate.toFixed(2))),
      revenue: growthRev.toLocaleString(),
      profit: (growthRev - growthCost).toLocaleString(),
      description: normLocale === "es" ? "Paquete premium para marcas en crecimiento que necesitan portales de marca blanca." : "Premium wholesale package for growing brands needing white label portals.",
      features: [
        "200 wholesale credits (No expiry)",
        "Advanced dashboard + sub-resellers",
        "Custom DNS & white label branding",
      ],
      cta: normLocale === "es" ? "Pedir Growth" : "Order Growth"
    },
    enterprise: {
      id: "enterprise",
      name: getEnterpriseName(),
      badge: "500 CREDITS",
      cost: enterpriseCost,
      rate: formatVal(Number(enterpriseRate.toFixed(2))),
      revenue: enterpriseRev.toLocaleString(),
      profit: (enterpriseRev - enterpriseCost).toLocaleString(),
      description: normLocale === "es" ? "Paquete de volumen de élite que ofrece las tarifas unitarias más bajas." : "Elite volume package offering the lowest unit rates for high-volume sales.",
      features: [
        "500 wholesale credits (No expiry)",
        "Elite admin control panels",
        "Dedicated domain & unlimited routing",
      ],
      cta: normLocale === "es" ? "Pedir Enterprise" : "Order Enterprise"
    }
  };
}

import { notFound } from "next/navigation";
import { getLocalizedPanel, ALL_PANELS } from "@/app/lib/panelData";
import PanelPageTemplate from "@/app/components/PanelPageTemplate";
import { setRequestLocale } from "next-intl/server";

// Pre-render all 22 dynamic panels across all 8 localized markets (176 unique static routes)
export async function generateStaticParams() {
  const locales = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const panel of ALL_PANELS) {
      params.push({
        locale,
        slug: panel.slug,
      });
    }
  }
  return params;
}

export default async function PanelPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  // Load panel data localized dynamically for the current country
  const panel = getLocalizedPanel(slug, locale);
  if (!panel) notFound();

  return <PanelPageTemplate panel={panel} />;
}

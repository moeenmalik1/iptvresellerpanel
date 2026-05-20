import { notFound } from "next/navigation";
import { getPanelBySlug } from "@/app/lib/panelData";
import PanelPageTemplate from "@/app/components/PanelPageTemplate";

/**
 * Dynamic IPTV reseller panel pages.
 * Each of the 22 panel slugs (e.g. /b1g-iptv-reseller-panel) is rendered
 * server-side on first request and cached by the CDN thereafter.
 *
 * Note: generateStaticParams is intentionally omitted to bypass a Next.js 16.2.6
 * workStore prerender bug that causes parallel static generation workers to fail
 * when processing dynamic routes alongside built-in pages like /_global-error.
 * The pages are functionally equivalent — React 19 metadata hoisting provides
 * full per-page SEO titles, descriptions, canonical URLs, OG tags, and JSON-LD.
 */

export default async function PanelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const panel = getPanelBySlug(slug);
  if (!panel) notFound();

  return <PanelPageTemplate panel={panel} />;
}

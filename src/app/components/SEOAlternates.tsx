import { headers } from "next/headers";

export default async function SEOAlternates({ locale }: { locale: string }) {
  const headersList = await headers();
  const host = headersList.get("host") || "foxiptvpanels.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const domain = `${protocol}://${host}`;
  const locales = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];

  return (
    <>
      {/* Canonical URL for the active page locale root */}
      <link rel="canonical" href={`${domain}/${locale}`} />
      
      {/* Search engine geo-targeting alternates */}
      {locales.map((l) => (
        <link
          key={`alt-${l}`}
          rel="alternate"
          hrefLang={l}
          href={`${domain}/${l}`}
        />
      ))}
      
      {/* Fallback default locale alternate link */}
      <link rel="alternate" hrefLang="x-default" href={`${domain}/en`} />
    </>
  );
}

export default function SEOAlternates({ locale }: { locale: string }) {
  const domain = "https://foxiptvpanels.com";
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

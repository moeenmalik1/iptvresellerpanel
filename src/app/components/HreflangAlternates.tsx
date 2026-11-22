const ALL_LOCALES = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];
const DOMAIN = "https://www.iptvreseller.live";

export default function HreflangAlternates({
  path = "",
  locales = ALL_LOCALES,
}: {
  path?: string;
  locales?: string[];
}) {
  const suffix = path ? `/${path}` : "";
  const defaultLocale = locales.includes("en") ? "en" : locales[0];

  return (
    <>
      {locales.map((l) => (
        <link
          key={`alt-${l}`}
          rel="alternate"
          hrefLang={l}
          href={`${DOMAIN}/${l}${suffix}`}
        />
      ))}
      {defaultLocale && (
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/${defaultLocale}${suffix}`} />
      )}
    </>
  );
}
// Reciprocal hreflang + x-default tags for a specific page, across all supported locales.
// Mirrors the (correct) pattern already used by PanelPageTemplate.tsx — every locale
// variant of the SAME page must list every other locale variant of that SAME page,
// not just the locale's homepage.
//
// `path` is the part of the URL AFTER the locale segment, with no leading slash
// (e.g. "about", "guides", `guides/${guide.id}`, or "" for the locale homepage).

const LOCALES = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];
const DOMAIN = "https://www.iptvreseller.live";

export default function HreflangAlternates({ path = "" }: { path?: string }) {
  const suffix = path ? `/${path}` : "";

  return (
    <>
      {LOCALES.map((l) => (
        <link
          key={`alt-${l}`}
          rel="alternate"
          hrefLang={l}
          href={`${DOMAIN}/${l}${suffix}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/en${suffix}`} />
    </>
  );
}

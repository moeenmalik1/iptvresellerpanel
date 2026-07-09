import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // Read target dynamic locale segment
  let locale = await requestLocale;

  // Validate locale fallback parameters
  const supportedLocales = ["en", "en-gb", "en-au", "es", "fr", "sv", "pt", "no"];
  if (!locale || !supportedLocales.includes(locale)) {
    locale = "en";
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

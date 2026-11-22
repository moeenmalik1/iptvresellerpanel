from pathlib import Path

catalog = Path('src/app/lib/panelData.ts')
template = Path('src/app/components/PanelPageTemplate.tsx')
cs = catalog.read_text(encoding='utf-8')
ts = template.read_text(encoding='utf-8')
start = cs.index('    name: "B1G",')
end = cs.index('    name: "Strong 4K",', start)
section = cs[start:end]
changes = {
    'tagline: "B1G IPTV Reseller Panel — Stable 4K Streaming for Serious Resellers"':
    'tagline: "B1G IPTV Reseller Panel — Credits, Dashboard & Features"',
    'description: "B1G IPTV is a premium reseller panel trusted by thousands of IPTV resellers worldwide. With 4K streaming, Xtream Codes support, and instant credit activation, B1G is one of the most reliable IPTV panels available through IPTV Reseller."':
    'description: "Explore the B1G IPTV reseller panel, its credit-based account management model, dashboard options and connection formats. Compare available features and contact IPTV Reseller to confirm current package terms and compatibility."',
    'longDescription: "B1G IPTV delivers consistent high-quality streaming with a clean, professional reseller dashboard. The credit-based system allows resellers to buy in bulk and maximize profit margins. Whether you\'re serving customers in the UK, USA, or the EU — B1G\'s geo-distributed servers ensure low latency and no-buffering playback on all devices."':
    'longDescription: "The B1G IPTV reseller dashboard is intended for businesses evaluating customer-account management, subscription activation and wholesale credit purchasing. Review supported devices, M3U or Xtream Codes connection options, available streaming resolutions, trial eligibility and supplier support before ordering. Performance depends on the service, device, network and provider conditions."',
    '"Xtream Codes & M3U reseller panel support",':
    '"Ask about Xtream Codes and M3U connection options",',
    '"4K Ultra HD no-buffering streaming",':
    '"Confirm supported streaming resolutions and network requirements",',
    '"Instant IPTV credit activation",':
    '"Check reseller credit activation times and usage rules",',
    '"MAG box & Smart TV compatibility",':
    '"Verify MAG box, Smart TV and app compatibility",',
    '"Real-time subscription management dashboard",':
    '"Explore dashboard subscription management features",',
    '"Bulk credit packages for wholesale resellers",':
    '"Ask about wholesale credit bundles and current pricing",',
    '"Multi-device simultaneous streaming",':
    '"Confirm supported devices and concurrent connection limits",',
    '"24/7 WhatsApp reseller support",':
    '"Contact the team to confirm reseller support availability",',
    '{ label: "Streaming Quality", value: "4K Ultra HD" },':
    '{ label: "Streaming Quality", value: "Confirm available resolutions" },',
    '{ label: "Connection Types", value: "Xtream Codes, M3U, MAG" },':
    '{ label: "Connection Types", value: "Confirm Xtream Codes, M3U and MAG support" },',
    '{ label: "Dashboard Type", value: "Advanced Reseller Panel" },':
    '{ label: "Dashboard Type", value: "Reseller dashboard — confirm features" },',
    '{ label: "Support", value: "24/7 WhatsApp" },':
    '{ label: "Support", value: "Contact for support hours" },',
    '{ label: "Credit Activation", value: "Instant" },':
    '{ label: "Credit Activation", value: "Confirm activation timeline" },',
    '{ label: "Server Uptime", value: "99.9%" },':
    '{ label: "Server Uptime", value: "Request current uptime information" },',
    '{ q: "What is the B1G IPTV reseller panel?", a: "B1G IPTV is a premium white label IPTV reseller panel that gives resellers a dashboard to create and manage IPTV subscriptions using credits. It supports Xtream Codes, M3U, and MAG box connections with 4K streaming quality." },':
    '{ q: "What is the B1G IPTV reseller panel?", a: "B1G is an IPTV reseller panel option for businesses comparing credit-based subscription management and reseller dashboards. Confirm the exact dashboard tools, connection formats and available streaming quality with the supplier." },',
    '{ q: "How do I buy B1G IPTV reseller credits?", a: "Contact IPTV Reseller on WhatsApp to purchase B1G reseller credits instantly. Credits are activated within minutes and can be used immediately to create customer subscriptions." },':
    '{ q: "How can I buy B1G IPTV reseller credits?", a: "Contact IPTV Reseller to request current B1G credit packages, pricing, payment information and activation terms. Credit quantities and activation times should be confirmed before purchase." },',
    '{ q: "Does the B1G panel support MAG boxes and Smart TVs?", a: "Yes. B1G IPTV supports MAG box, Smart TV, M3U players, and Xtream Codes-compatible apps — covering every streaming device your customers use." },':
    '{ q: "Which devices and connection formats can B1G support?", a: "Ask the supplier which Smart TVs, MAG boxes, apps, M3U playlists and Xtream Codes connection types are supported for the current B1G package. Compatibility can vary by device and plan." },',
    '{ q: "Is there a B1G IPTV reseller panel free trial?", a: "Yes. IPTV Reseller offers a free trial on the B1G IPTV reseller panel. Contact us on WhatsApp to request your trial access before committing to a credit package." },':
    '{ q: "Is a B1G IPTV reseller panel trial available?", a: "Trial access may depend on the current supplier offer and eligibility. Contact IPTV Reseller to ask whether a B1G demonstration or trial is available before ordering credits." },',
}
for old,new in changes.items():
    if section.count(old) != 1:
        raise SystemExit(f'STOP: B1G content match count {section.count(old)}: {old[:90]}')
    section = section.replace(old,new)
new_cs=cs[:start]+section+cs[end:]
old_meta = '  const { title: pageTitle, description: pageDescription } = getHighCtrMetadata();'
new_meta = '''  // B1G-specific worldwide SEO copy; other product pages retain existing metadata.
  const metadata = panel.slug === "b1g-iptv-reseller-panel" && locale === "en"
    ? {
        title: "B1G IPTV Reseller Panel | Credits & Features",
        description: "Explore the B1G IPTV reseller panel, wholesale credit options, dashboard features, device compatibility and FAQs. Confirm current terms before ordering.",
      }
    : getHighCtrMetadata();
  const { title: pageTitle, description: pageDescription } = metadata;'''
if ts.count(old_meta)!=1: raise SystemExit('STOP: Template metadata anchor mismatch')
new_ts = ts.replace(old_meta, new_meta)
# ensure only B1G block changed and other panel records untouched
assert new_cs[end-len(section)+len(section):] is not None
catalog.write_text(new_cs, encoding='utf-8')
template.write_text(new_ts, encoding='utf-8')
print('SUCCESS: B1G-specific SEO batch applied')
print('B1G content changes:',len(changes))
print('SEO metadata override: 1 (English B1G only)')
print('Modified:',catalog,template)
print('Other panels not modified; no commit or push performed')

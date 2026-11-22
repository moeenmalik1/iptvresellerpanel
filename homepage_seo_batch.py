#!/usr/bin/env python3
"""IPTV Reseller homepage SEO batch — generated against uploaded 2026-11-04 snapshot.
Run in project root: python3 homepage_seo_batch.py
Aborts without writing if source differs from the supplied snapshot or a replacement is missing.
Does not build, commit, push or deploy.
"""
from pathlib import Path
import hashlib, json, sys, difflib

EXPECTED_SHA = {'src/app/lib/translations.ts': 'cd2fe00738bc267903aace3b1130313fba5dc4b155b13d778d105872442e66f7', 'src/app/components/PanelsGrid.tsx': 'cd327c00a309ca9fe7e17f1f7246ad79ce475d1d96a4bfdc888144aece82fec9', 'src/app/components/ComparisonTable.tsx': '032c3dd358c78eea94411b522f2af66fd790d306c03fcd1a47dd32813916fe16', 'src/app/[locale]/page.tsx': 'b24a6878f58e3396706db422504283985d3de92d780aa53d2bf321d1c16b0a6a', 'src/app/components/BenefitsSection.tsx': '5f276a8b66c9268a57a28020f6a5fbd964dc2a869aceee19df7e8ac7a09ad0fe', 'src/app/components/HeroSection.tsx': '6e6cfa7c0a3b80e53ab210c9eb319852776b21e7da0974edcd86e67cb62691aa', 'src/app/components/CTASection.tsx': 'e1f347f3fa60c7cebbfc8c8b1ea611dca8c115f0ca6b73c4e53376f3bb67c4e2', 'messages/en.json': 'd5b2b4fb423c2ce09a20497908131ab5b1374ebb9c17bfb04b5a58a50f58693a'}
FILES = {}

def sha(x): return hashlib.sha256(x.encode('utf-8')).hexdigest()
def edit(path):
    if path not in FILES:
        p=Path(path)
        if not p.is_file(): raise SystemExit(f'MISSING SOURCE FILE: {path}')
        text=p.read_text(encoding='utf-8')
        required=EXPECTED_SHA[path]
        if sha(text) != required:
            raise SystemExit(f'STOP: {path} has changed since the uploaded snapshot. No files edited. Re-upload current source for a safe merge.')
        FILES[path]=[text,text,0]
    return FILES[path]

def replace(path, old, new, scope=None):
    rec=edit(path); original=rec[1]
    if scope is not None:
        begin,end=scope
        a=original.index(begin)
        b=original.index(end,a+len(begin))
        source=original[a:b]
        if source.count(old)!=1: raise SystemExit(f'STOP: {path} scoped expected 1 match, found {source.count(old)}: {old[:90]}')
        rec[1]=original[:a]+source.replace(old,new,1)+original[b:]
    else:
        if original.count(old)!=1: raise SystemExit(f'STOP: {path} expected 1 match, found {original.count(old)}: {old[:90]}')
        rec[1]=original.replace(old,new,1)
    rec[2]+=1

def group(path, pairs, scope=None):
    for old,new in pairs: replace(path,old,new,scope)

T='src/app/lib/translations.ts'
EN=("  en: {\n", "  },\n  es: {")
# Only English dictionary content. Note: English shared dictionary also appears on en-gb/en-au pages.
group(T,[
('value: "No Buffer"','value: "Check Specs"'),
('value: "Instant"','value: "By Panel"'),
('{ icon: "🏗️", label: "Server Uptime", value: "99.9%" }','{ icon: "🏗️", label: "Server Reliability", value: "Ask Provider" }'),
('{ icon: "🕐", label: "WhatsApp Support", value: "24/7" }','{ icon: "🕐", label: "WhatsApp Support", value: "Contact Us" }'),
('desc: "Manage subscriptions, activate accounts, assign reseller credits, and monitor customer activity through a professional IPTV reseller panel."','desc: "Review dashboard tools for customer accounts, credit allocation, subscription renewals and activity reporting. Available features depend on the panel."'),
('desc: "Our wholesale IPTV supplier packages allow IPTV resellers to grow their business while maintaining full pricing control."','desc: "Compare wholesale package sizes, credit costs and supported account settings. Supplier rules determine which pricing and management controls are available."'),
('desc: "Receive assistance with IPTV panel setup, customer management, reseller packages, and business growth strategies."','desc: "Contact the supplier to confirm available onboarding help, support channels, response times and any additional setup charges."'),
('desc: "Select the IPTV reseller panel that best matches your business goals."','desc: "Compare available panel features, supported devices, credit terms and supplier policies against your business requirements."'),
('desc: "Buy reseller credits from a trusted IPTV supplier and allocate them to customer subscriptions."','desc: "Check current wholesale rates and credit redemption rules with the supplier before buying or allocating credits."'),
('desc: "Generate IPTV subscriptions directly from your reseller IPTV panel."','desc: "Set up customer accounts with the package options and permissions supported by your selected panel."'),
('desc: "Expand your customer base and scale your IPTV reseller operation using additional credits and reseller packages."','desc: "Review ongoing credit costs, customer support obligations and compliance requirements as your reseller operation grows."'),
('desc: "Compare the best IPTV reseller panels for 2026 — streaming quality, uptime reliability, dashboard features, and reseller flexibility to find your ideal IPTV panel match. Whether you need the cheapest IPTV reseller panel or the most advanced white label IPTV dashboard, we have it."','desc: "Compare selected IPTV reseller panels by advertised streaming formats, dashboard functionality and support information. Confirm real-world performance, compatibility and pricing directly with each supplier."'),
('quality: "4K/8K", support: "24/7", dashboard: "Advanced", bestFor: "Premium Resellers", badge: "Top Pick"','quality: "Check specs", support: "Confirm", dashboard: "Check features", bestFor: "Compare options", badge: ""'),
('quality: "4K", support: "Fast", dashboard: "Beginner Friendly", bestFor: "New IPTV Resellers", badge: "Best for Starters"','quality: "Check specs", support: "Confirm", dashboard: "Check features", bestFor: "Compare options", badge: ""'),
('quality: "Full HD/4K", support: "24/7", dashboard: "Professional", bestFor: "Growing Businesses", badge: ""','quality: "Check specs", support: "Confirm", dashboard: "Check features", bestFor: "Compare options", badge: ""'),
('quality: "4K", support: "Fast", dashboard: "Modern", bestFor: "Bulk / Wholesale Resellers", badge: ""','quality: "Check specs", support: "Confirm", dashboard: "Check features", bestFor: "Compare options", badge: ""'),
('quality: "4K", support: "24/7", dashboard: "Advanced", bestFor: "Large IPTV Businesses", badge: ""','quality: "Check specs", support: "Confirm", dashboard: "Check features", bestFor: "Compare options", badge: ""'),
('titleEnd: " — Full Panel Control"','titleEnd: " — Key Management Tools"'),
('desc1: "Your IPTV reseller panel login gives you a full-featured white label dashboard to manage your entire IPTV reselling business. Track subscriptions, allocate credits, generate free trials, and monitor every customer — all from one centralized IPTV panel management interface."','desc1: "An IPTV reseller dashboard can centralize account management, credit allocation and subscription administration. Compare each panel’s available tools, user permissions and reporting options before selecting a package."'),
('desc2: "Our IPTV dashboards support Xtream Codes reseller API, M3U reseller panel output, and MAG box device management — covering every IPTV delivery method your customers use."','desc2: "Compatibility with Xtream Codes, M3U and MAG devices varies by panel and provider. Confirm supported formats, devices and access requirements before purchasing credits."'),
('uptimeTitle: "99.9% IPTV Server Uptime Reliability"','uptimeTitle: "Ask About Server Availability"'),
('uptimeDesc: "Stable servers — minimal downtime, no buffering guaranteed"','uptimeDesc: "Request current service terms, performance information and support details from your provider."'),
('desc: "As a leading IPTV supplier, we provide comprehensive reseller solutions. Our goal is to help IPTV resellers build profitable recurring revenue through reliable IPTV supplier services."','desc: "Explore reseller panel options, credit packages, account management features and supplier support. Compare terms carefully to understand the costs and responsibilities of running a reseller business."'),
('{ label: "Server Uptime", value: "99.9%" }','{ label: "Server Reliability", value: "Check" }'),
('{ label: "WhatsApp Support", value: "24/7" }','{ label: "Support Options", value: "Ask" }'),
('desc: "Everything you need to know about starting your IPTV reseller business, how the IPTV credit system works, panel comparisons, free trials, and more."','desc: "Answers to common questions about IPTV reseller panels, credit packages, account setup and supplier selection. Check provider-specific terms before ordering."'),
('a: "An IPTV supplier provides IPTV services, reseller credits, and IPTV reseller panels that enable IPTV resellers to create and manage customer subscriptions."','a: "An IPTV supplier may provide a reseller dashboard, credits and account-management tools. Check licensing, service terms, supported regions and the products actually included in each offer."'),
('a: "An IPTV reseller purchases credits from an IPTV supplier and sells IPTV subscriptions to customers using a reseller IPTV panel."','a: "An IPTV reseller typically uses a supplier-provided dashboard and credits to manage customer subscriptions. The reseller remains responsible for following applicable licensing and consumer laws."'),
('a: "IPTV reseller panels allow IPTV resellers to activate subscriptions, manage customers, assign credits, and monitor account activity."','a: "An IPTV reseller panel is a dashboard for handling customer accounts, subscription activation and credit balances. Specific features, credit rules and supported devices differ between suppliers."'),
('a: "Choose a reseller package, purchase credits, access your IPTV reseller panel, and begin creating customer accounts."','a: "Check the supplier’s authorization, packages, credit rules and technical support first. If the terms fit your needs, choose a panel, complete setup and manage customer accounts under applicable laws."'),
('a: "IPTV Reseller combines premium IPTV supplier services, powerful IPTV reseller panels, flexible reseller credits, and dedicated support for IPTV resellers worldwide."','a: "IPTV Reseller provides information about reseller panels and wholesale credit options. Compare package terms, dashboard tools and available support, and contact the team for current details."'),
('tag: "Partner with a Trusted IPTV Supplier Today"','tag: "Explore IPTV Reseller Options"'),
('titleMain: "Partner with a "','titleMain: "Compare Panels with "'),
('titleSpan: "Trusted IPTV Supplier Today"','titleSpan: "IPTV Reseller"'),
('desc1: "Join thousands of IPTV resellers using IPTV Reseller. Access premium IPTV reseller panels, wholesale IPTV supplier solutions, flexible reseller packages, and everything you need to build a successful IPTV reseller business."','desc1: "Compare reseller panel options, available credit packages and dashboard tools before choosing your supplier. Contact us for current pricing, activation details and supported regions."'),
('text: "Instant Credit Activation"','text: "Activation Terms Vary"'),
('text: "4K No Buffering"','text: "Check Supported Formats"'),
('text: "Free Trial Available"','text: "Ask About Trials"'),
('desc: "IPTV Reseller combines the advantages of a trusted IPTV supplier with advanced IPTV reseller tools."','desc: "Review key reseller panel features, wholesale credit options and support services to find the right setup for your needs."'),
('desc: "Direct relationships with top-tier server providers to guarantee premium streaming feeds."','desc: "Ask about the sourcing, authorization and technical specifications of available services before choosing a supplier."'),
('desc: "Access 20+ robust dashboards including Strong 4K, Lion OTT, and Dino IPTV."','desc: "Browse the listed reseller panel options, including Strong 4K, Lion OTT and Dino IPTV, and check their individual features."'),
('desc: "Operate with an instant-activation credit system with no expiry restrictions."','desc: "Review credit allocation, activation and expiration terms for your selected provider and package."'),
('desc: "Scale your business with bulk rates that maximize your net profit margins."','desc: "Compare available bulk credit rates and estimate gross margins before fees, refunds, taxes and operating expenses."'),
('desc: "Create client lines and trials in less than 60 seconds from any device."','desc: "Check what account setup tools, activation times and trial functions each panel supports."'),
('desc: "24/7 technical ticket response and priority WhatsApp group onboarding."','desc: "Confirm current help desk availability, WhatsApp support and onboarding options with the team."'),
('desc: "Geo-distributed streaming servers optimized for the UK, USA, EU, and Canada."','desc: "Confirm coverage, regional access and any service restrictions for your intended customer markets."'),
('desc: "Access marketing templates, DNS routing setups, and custom portal configurations."','desc: "Check whether templates, DNS settings or custom portal options are included in the chosen panel package."'),
('desc: "A professional IPTV panel built for IPTV resellers who require reliability and scalability."','desc: "Review GEO IPTV reseller dashboard features, credit package information and supported account controls."'),
('desc: "A popular reseller IPTV panel offering flexible credit management and reseller tools."','desc: "Compare Dino IPTV credit allocation, account management features and subscription setup requirements."'),
('desc: "Perfect for IPTV resellers looking to offer premium streaming experiences."','desc: "Explore Strong 4K dashboard features, compatibility information and available reseller credit options."'),
('desc: "One of the most trusted IPTV reseller panels for account management and customer activation."','desc: "Review Lion OTT reseller account tools, available packages and provider-specific activation policies."'),
('desc: "IPTV Reseller offers access to some of the most popular IPTV reseller panels available today."','desc: "Browse selected IPTV reseller panels and compare their account tools, wholesale credit terms and product details before contacting a supplier."'),
('brandDesc1: "IPTV Reseller is the best IPTV reseller panel provider — offering white label IPTV panels, wholesale IPTV credits, Xtream Codes & M3U reseller dashboards, and 4K no-buffering servers for IPTV resellers worldwide."','brandDesc1: "IPTV Reseller provides information on reseller panels, wholesale credit options and account-management dashboards. Review each provider’s technical specifications and terms before ordering."'),
('brandDesc2: "Serving IPTV resellers in the UK, USA, the EU and globally — with 24/7 WhatsApp support for your IPTV reselling business."','brandDesc2: "Explore reseller options for the UK, USA and other markets. Confirm region availability and current support hours before ordering."'),
('copyright: "© 2026 IPTV Reseller — #1 IPTV Reseller Panel Provider. All rights reserved."','copyright: "© 2026 IPTV Reseller. All rights reserved."'),
],EN)

# English-only Panels Grid content: base 'en' is also fallback for en-gb and en-au.
P='src/app/components/PanelsGrid.tsx'
SCOPE_P=('  en: {\n','  es: {\n')
group(P,[
('tag: "Top IPTV Servers List 2026"','tag: "IPTV Reseller Panel Directory"'),
('titleMain: "Best IPTV Reseller Panels & "','titleMain: "Explore IPTV Reseller "'),
('titleSpan: "Top IPTV Servers 2026"','titleSpan: "Panel Options"'),
('desc: "Browse our curated list of the best IPTV panels for resellers — each supporting Xtream Codes, M3U reseller panel access, and MAG box compatibility. Click any panel to view full reseller details, features, and credit pricing."','desc: "Browse 22 reseller panel listings, then open the individual pages to compare credit packages, account-management features and published compatibility information. Verify specifications and current pricing with the supplier."'),
('footnote: "All panels include Xtream Codes, M3U & MAG box support. Free trial available."','footnote: "Device compatibility, trial access and credit terms vary by panel. Confirm the details before ordering."'),
('cta: "Buy IPTV Reseller Credits"','cta: "Explore Credit Packages"'),
],SCOPE_P)
replace(P,'aria-label="Top IPTV Reseller Panels — Best IPTV Panels for Resellers 2026"','aria-label="IPTV reseller panels directory and comparison links"')
replace(P,'aria-label="Buy IPTV reseller credits — view pricing for all panels"','aria-label="View reseller credit pricing examples and calculator"')

C='src/app/components/ComparisonTable.tsx'
replace(C,'aria-label="IPTV Reseller Panel Comparison 2026 — Best IPTV Panels for Resellers"','aria-label="IPTV reseller panel comparison information"')
replace(C,'IPTV Reseller Panel Comparison — Best IPTV Panels for Resellers 2026','IPTV reseller panel comparison — published specifications to verify')

# Visible demo and FAQ schema corrections.
H='src/app/[locale]/page.tsx'
replace(H,'import { getTranslations, setRequestLocale } from "next-intl/server";','import { getTranslations, setRequestLocale } from "next-intl/server";\nimport { getSectionTranslations } from "@/app/lib/translations";')
replace(H,'    sameAs: [\n      "https://twitter.com/foxiptvpanels",\n      "https://youtube.com/c/foxiptvpanels",\n    ],\n','')
replace(H,'      contactOption: "TollFree",\n','')
replace(H,'''    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.iptvreseller.live/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
''','')
# Schema must reflect the actual visible FAQSection for all English locales.
start='      default:\n        return [\n'
end='\n    }\n  };\n\n  const faqSchema'
rec=edit(H); current=rec[1]
a=current.index(start); b=current.index(end,a)
rec[1]=current[:a]+'''      default:
        return getSectionTranslations(locale).faqSection.items;
'''+current[b:]
rec[2]+=1
# No unverifiable testimonials on the English homepage (en-gb and en-au share review source).
replace(H,'        <TestimonialsSection />','        {!locale.startsWith("en") && <TestimonialsSection />}')
# Remove the ignored meta keywords tag for this homepage only (all locale variants; no ranking effect).
replace(H,'      <meta name="keywords" content={t("keywords")} />\n','')

# Clear visible old name in accessibility and unsupported guarantee words.
replace('src/app/components/BenefitsSection.tsx','aria-label="Benefits of Fox IPTV Reseller Program"','aria-label="IPTV reseller panel features and wholesale credit options"')
replace('src/app/components/HeroSection.tsx','aria-label="Compare best IPTV reseller panels for 2026"','aria-label="Compare IPTV reseller panel options"')
replace('src/app/components/CTASection.tsx','aria-label="Compare IPTV reseller panels — find the best IPTV panel for 2026"','aria-label="Compare IPTV reseller panel options and available features"')

# Change misleading 'netProfit' code identifier used in UI only? Labels are already 'gross margin'; keep arithmetic intact.
# Warning about illustrative data is already in pricing description from earlier changes.

# Validate all changes before writing anything.
json.loads(Path('messages/en.json').read_text(encoding='utf-8'))
for path,(before,after,count) in FILES.items():
    if count<=0: raise SystemExit(f'No edits for {path}')
    if before==after: raise SystemExit(f'No actual change for {path}')

print('Homepage SEO batch prepared. Changes:')
for path,(before,after,count) in FILES.items():
    print(f'  {path}: {count} replacements')
print('  total:',sum(x[2] for x in FILES.values()))
if '--dry-run' in sys.argv:
    for path,(before,after,count) in FILES.items():
        print(''.join(list(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile=path+' before',tofile=path+' after'))[:120]))
    print('DRY RUN: no files written')
    sys.exit(0)

for path,(before,after,count) in FILES.items():
    Path(path).write_text(after,encoding='utf-8')
print('SUCCESS: Batch applied. Next run JSON + TypeScript + build checks. No commit or push performed.')



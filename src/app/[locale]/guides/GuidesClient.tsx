"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

interface Guide {
  id: string;
  title: string;
  category: "Business" | "Technical" | "Branding" | "Negocios" | "Técnico" | "Marca";
  readTime: string;
  excerpt: string;
  content: string;
}

export default function GuidesClient() {
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const WHATSAPP_URL = "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20starting%20an%20IPTV%20reseller%20business";

  // Localized guides list — all 8 locales
  const ALL_GUIDES: Guide[] = useMemo(() => {
    const L = locale as string;

    if (L === "fr") {
      return [
        {
          id: "start-iptv-reseller-business",
          title: "Comment lancer une activité de revendeur IPTV en 2026 (avec un investissement minimal)",
          category: "Business" as const,
          readTime: "6 min de lecture",
          excerpt: "Apprenez à créer une activité rentable de revente IPTV en marque blanche. Découvrez les stratégies d'acquisition de clients et comment scaler via WhatsApp.",
          content: "Lancer une activité d'abonnement numérique est l'un des meilleurs moyens de générer des revenus passifs en 2026. Avec un panneau de revendeur IPTV premium, vous n'avez pas besoin d'acheter des serveurs coûteux ni de gérer une infrastructure complexe. En tant que revendeur, vous achetez des crédits en gros auprès d'un distributeur principal comme Fox IPTV Panels, accédez à un tableau de bord élégant et vendez des comptes à vos clients. Pour commencer : 1) Sécurisez un petit pack de crédits, 2) Formez-vous à l'allocation des crédits, 3) Faites la promotion sur les réseaux sociaux en France ou dans l'UE, 4) Utilisez WhatsApp comme portail principal de vente. Vous pouvez facturer des tarifs mensuels ou annuels récurrents, et comme les coûts de crédits en gros sont bas, vous conservez d'énormes marges."
        },
        {
          id: "credit-system-explained",
          title: "Système de crédits revendeur IPTV expliqué : guide complet",
          category: "Business" as const,
          readTime: "5 min de lecture",
          excerpt: "Vous vous interrogez sur la conversion des crédits en comptes clients actifs ? Lisez notre analyse détaillée du modèle de facturation et calculez vos marges.",
          content: "Le système de crédits IPTV est le modèle grossiste fondamental pour la revente. Au lieu de payer des frais serveur mensuels fixes, vous achetez des crédits en volume. Considérez les crédits comme votre stock en gros. En général, le calcul est : 1 crédit = 1 mois d'abonnement client (un client 12 mois utilise donc 12 crédits). Par exemple : si vous achetez un Pack Croissance de 200 crédits pour 180 €, votre coût grossiste est de seulement 0,90 €/crédit. Si vous vendez à 10 €/mois par client, votre chiffre d'affaires brut potentiel est de 2 000 €, générant un bénéfice net massif de 1 820 € ! Le système de crédits vous offre une liberté totale de tarification et zéro frais fixes."
        },
        {
          id: "xtream-codes-vs-m3u",
          title: "API Xtream Codes vs listes M3U : ce que les revendeurs doivent savoir",
          category: "Technical" as const,
          readTime: "7 min de lecture",
          excerpt: "Aidez vos clients à connecter leurs appareils facilement. Comparez les performances, la sécurité et la compatibilité d'Xtream Codes et des fichiers M3U bruts.",
          content: "Lors de la configuration de clients, vous rencontrerez deux formats principaux : l'API Xtream Codes et les listes de lecture M3U. Les listes M3U sont une longue chaîne URL contenant un fichier texte avec les emplacements des chaînes. Bien que M3U soit compatible avec presque toutes les anciennes applications, il expose les liens de streaming bruts et peut être lent à télécharger. L'API Xtream Codes, en revanche, décompose les identifiants en trois entrées propres : URL du portail, nom d'utilisateur et mot de passe. Xtream Codes est fortement recommandé car il charge les chaînes en une fraction de seconde, protège vos flux contre la copie et met à jour les listes de chaînes dynamiquement. Conseillez toujours à vos clients d'utiliser des lecteurs modernes comme IPTV Smarters, Tivimate ou XCIPTV."
        },
        {
          id: "white-label-panel-branding",
          title: "Panneaux IPTV en marque blanche : développez votre empire de streaming",
          category: "Branding" as const,
          readTime: "5 min de lecture",
          excerpt: "Prêt à passer à l'échelle supérieure ? Découvrez comment le routage DNS personnalisé et la marque blanche vous permettent de vendre des panneaux à des sous-revendeurs.",
          content: "La marque blanche est l'étape ultime pour faire évoluer votre activité IPTV. Un panneau revendeur standard affiche les identifiants du serveur par défaut. Un panneau en marque blanche vous permet de masquer ces serveurs sous votre propre marque privée. Pour ce faire, vous achetez une configuration marque blanche dédiée chez Fox IPTV Panels, enregistrez votre propre domaine (ex: monportail.com) et pointez ses paramètres DNS vers les IP du serveur. Lorsque vos clients se connectent, ils voient votre domaine et votre logo. Plus important encore, la marque blanche vous permet de recruter des sous-revendeurs, créant un vaste réseau de distribution grossiste."
        }
      ];
    }

    if (L === "pt") {
      return [
        {
          id: "start-iptv-reseller-business",
          title: "Como iniciar um negócio de revendedor IPTV em 2026 (com investimento mínimo)",
          category: "Business" as const,
          readTime: "6 min de leitura",
          excerpt: "Aprenda a criar um negócio de revenda IPTV de marca branca altamente rentável. Descubra estratégias de aquisição de clientes e como escalar via WhatsApp.",
          content: "Iniciar um negócio de subscrição digital é uma das melhores formas de gerar rendimento passivo em 2026. Com um painel de revendedor IPTV premium, não precisa de comprar servidores caros nem gerir infraestrutura complexa. Como revendedor, compra créditos por grosso a um distribuidor principal como a Fox IPTV Panels, acede a um dashboard elegante e vende contas aos seus clientes. Para começar: 1) Adquira um pacote de créditos pequeno, 2) Forme-se na alocação de créditos, 3) Promova nas redes sociais em Portugal ou na UE, 4) Use o WhatsApp como portal principal de vendas. Pode cobrar tarifas mensais ou anuais recorrentes, e como os custos de créditos por grosso são baixos, mantém margens enormes."
        },
        {
          id: "credit-system-explained",
          title: "Sistema de créditos para revendedores IPTV explicado: Guia completo",
          category: "Business" as const,
          readTime: "5 min de leitura",
          excerpt: "Confuso sobre como os créditos se convertem em contas de clientes activas? Leia a nossa análise detalhada do modelo de faturação e calcule as suas margens.",
          content: "O sistema de créditos IPTV é o modelo grossista fundamental para a revenda. Em vez de pagar taxas fixas mensais de servidor, compra créditos em volume. Pense nos créditos como o seu inventário grossista. Geralmente, o cálculo padrão é: 1 crédito = 1 mês de subscrição de cliente (ou seja, um cliente de 12 meses usa 12 créditos). Por exemplo: se comprar um Pacote Growth de 200 créditos por 180 €, o seu custo grossista é de apenas 0,90 €/crédito. Se vender a 10 €/mês por cliente, a sua receita bruta potencial é de 2.000 €, gerando um lucro líquido massivo de 1.820 €! O sistema de créditos dá-lhe liberdade total de preços e zero custos fixos."
        },
        {
          id: "xtream-codes-vs-m3u",
          title: "API Xtream Codes vs listas M3U: o que os revendedores precisam saber",
          category: "Technical" as const,
          readTime: "7 min de leitura",
          excerpt: "Ajude os seus clientes a ligar os seus dispositivos facilmente. Compare o desempenho, a segurança e a compatibilidade de Xtream Codes e ficheiros M3U brutos.",
          content: "Ao configurar clientes, encontrará dois formatos principais: API Xtream Codes e listas M3U. As listas M3U consistem numa longa string URL contendo um ficheiro de texto com as localizações dos canais. Embora o M3U seja compatível com quase todas as aplicações antigas, expõe os links de streaming brutos e pode ser lento a descarregar. A API Xtream Codes, por outro lado, divide as credenciais em três entradas limpas: URL do portal, nome de utilizador e palavra-passe. O Xtream Codes é altamente recomendado porque carrega os canais em frações de segundo, protege as suas transmissões contra cópias e atualiza as listas de canais dinamicamente. Indique sempre aos clientes que usem leitores modernos como IPTV Smarters, Tivimate ou XCIPTV."
        },
        {
          id: "white-label-panel-branding",
          title: "Painéis IPTV de marca branca: construa o seu império de streaming",
          category: "Branding" as const,
          readTime: "5 min de leitura",
          excerpt: "Pronto para escalar além dos clientes a retalho? Saiba como o routing DNS personalizado e a marca branca lhe permitem vender painéis a sub-revendedores.",
          content: "A marca branca é o passo final para escalar o seu negócio IPTV. Um painel de revendedor padrão mostra as credenciais do servidor padrão. Um painel de marca branca permite-lhe mascarar esses servidores sob a sua própria marca privada. Para isso, compra uma configuração de marca branca dedicada na Fox IPTV Panels, regista o seu próprio domínio (ex: meuportal.com) e aponta as suas configurações DNS para os IPs do servidor. Quando os seus clientes iniciarem sessão, verão o seu domínio e logótipo. Mais importante ainda, a marca branca permite-lhe recrutar sub-revendedores, criando uma vasta rede de distribuição grossista."
        }
      ];
    }

    if (L === "sv") {
      return [
        {
          id: "start-iptv-reseller-business",
          title: "Så startar du ett IPTV-återförsäljarföretag 2026 (med minimal investering)",
          category: "Business" as const,
          readTime: "6 min läsning",
          excerpt: "Lär dig hur du startar ett lönsamt IPTV-återförsäljarföretag med eget varumärke. Upptäck kundanskaffningsstrategier och hur du skalar via WhatsApp.",
          content: "Att starta ett digitalt prenumerationsföretag är ett av de bästa sätten att tjäna passiv inkomst 2026. Med en premium IPTV-återförsäljarpanel behöver du inte köpa dyra streamingservrar eller hantera komplex infrastruktur. Som återförsäljare köper du krediter i grossistled från en huvuddistributör som Fox IPTV Panels, får tillgång till en snygg kontrollpanel och säljer konton till dina slutkunder. Kom igång: 1) Säkra ett litet kreditpaket, 2) Lär dig kreditallokering, 3) Marknadsför i Sverige eller EU via sociala medier, 4) Använd WhatsApp som ditt primära försäljningsportal. Du kan ta ut månads- eller årsavgifter, och eftersom grossitkreditpriserna är låga behåller du enorma marginaler."
        },
        {
          id: "credit-system-explained",
          title: "IPTV-återförsäljarkreditsystemet förklarat: En komplett guide",
          category: "Business" as const,
          readTime: "5 min läsning",
          excerpt: "Förvirrad om hur krediter omvandlas till aktiva kundkonton? Läs vår detaljerade genomgång av faktureringsmodellen och beräkna dina vinstmarginaler.",
          content: "IPTV-kreditsystemet är den grundläggande grossistmodellen för återförsäljning. Istället för att betala fasta månadsserviceravgifter köper du krediter i bulk. Tänk på krediter som ditt grossistlager. Generellt är standardberäkningen: 1 kredit = 1 månads kundprenumeration (en 12-månaders kund använder alltså 12 krediter). Exempel: om du köper ett Growth Pack med 200 krediter för 1 800 kr, är din grossistkostnad bara 9 kr/kredit. Om du säljer för 100 kr/mån per kund är din potentiella bruttoomsättning 20 000 kr, vilket ger en massiv nettovinst! Kreditsystemet ger dig total prisfrihet och noll fasta kostnader."
        },
        {
          id: "xtream-codes-vs-m3u",
          title: "Xtream Codes API vs M3U-spellistor: Vad återförsäljare måste veta",
          category: "Technical" as const,
          readTime: "7 min läsning",
          excerpt: "Hjälp dina kunder att ansluta sina enheter enkelt. Jämför prestanda, säkerhet och enhetskompabilitet för Xtream Codes och råa M3U-filer.",
          content: "När du konfigurerar kunder stöter du på två primära format: Xtream Codes API och M3U-spellistor. M3U-spellistor är en lång URL-sträng med en textfil som innehåller kanalplatser. Även om M3U är kompatibelt med nästan alla äldre appar exponerar det råa strömningslänkar och kan vara långsamt att ladda ner. Xtream Codes API delar upp inloggningsuppgifter i tre rena indata: Portal-URL, användarnamn och lösenord. Xtream Codes rekommenderas starkt eftersom det laddar kanaler på bråkdelar av en sekund, skyddar dina strömmar mot kopiering och uppdaterar kanallistor dynamiskt. Instruera alltid kunder att använda moderna spelare som IPTV Smarters, Tivimate eller XCIPTV."
        },
        {
          id: "white-label-panel-branding",
          title: "IPTV-paneler med eget varumärke: Bygg ditt streamingimperium",
          category: "Branding" as const,
          readTime: "5 min läsning",
          excerpt: "Redo att skala bortom direktkunder? Lär dig hur anpassad DNS-routing och white labeling låter dig sälja paneler till underåterförsäljare under ditt eget varumärke.",
          content: "White labeling är det ultimata steget för att skala din IPTV-verksamhet. En standard återförsäljarpanel visar standardserveruppgifter. En white label-panel låter dig maskera dessa servrar under ditt eget privata varumärke. För att göra detta köper du en dedikerad white label-konfiguration från Fox IPTV Panels, registrerar din egen domän (t.ex. mittportal.se) och pekar dess DNS-inställningar mot server-IP:n. När dina kunder loggar in ser de din domän och din logotyp. Ännu viktigare, white labeling gör att du kan rekrytera underåterförsäljare och skapa ett massivt grossistdistributionsnätverk."
        }
      ];
    }

    if (L === "no") {
      return [
        {
          id: "start-iptv-reseller-business",
          title: "Slik starter du en IPTV-forhandlervirksomhet i 2026 (med minimal investering)",
          category: "Business" as const,
          readTime: "6 min lesing",
          excerpt: "Lær hvordan du oppretter en lønnsom IPTV-forhandlervirksomhet med eget merke. Oppdag strategier for kundeanskaffelse og hvordan du skalerer via WhatsApp.",
          content: "Å starte en digital abonnementsvirksomhet er en av de beste måtene å tjene passiv inntekt på i 2026. Med et premium IPTV-forhandlerpanel trenger du ikke kjøpe dyre streamingservere eller administrere kompleks infrastruktur. Som forhandler kjøper du kreditter i engros fra en hoveddistributør som Fox IPTV Panels, får tilgang til et elegant dashbord og selger kontoer til dine kunder. Kom i gang: 1) Sikre en liten kredittpakke, 2) Lær deg kredittallokasjoner, 3) Markedsføring i Norge eller EU via sosiale medier, 4) Bruk WhatsApp som ditt primære salgsportal. Du kan ta månedlige eller årlige gebyrer, og siden engroskreditprisene er lave, beholder du enorme marginer."
        },
        {
          id: "credit-system-explained",
          title: "IPTV-forhandlerkredittystemet forklart: En komplett guide",
          category: "Business" as const,
          readTime: "5 min lesing",
          excerpt: "Forvirret om hvordan kreditter oversettes til aktive klientkontoer? Les vår detaljerte gjennomgang av faktureringsmodellen og beregn marginene dine.",
          content: "IPTV-kreditsystemet er den grunnleggende grossistmodellen for videresalg. I stedet for å betale faste månedlige serveravgifter, kjøper du kreditter i bulk. Tenk på kreditter som ditt grossistlager. Generelt er standardberegningen: 1 kreditt = 1 måneds kundeabonnement (en 12-månederskunde bruker altså 12 kreditter). Eksempel: hvis du kjøper en Growth Pack på 200 kreditter for 1 800 kr, er grossistkostnaden din bare 9 kr/kreditt. Hvis du selger til 100 kr/mnd per kunde, er din potensielle bruttoinntekt 20 000 kr, noe som gir en massiv nettogevinst! Kreditsystemet gir deg total prisfrihet og null faste kostnader."
        },
        {
          id: "xtream-codes-vs-m3u",
          title: "Xtream Codes API vs M3U-spillelister: Hva forhandlere må vite",
          category: "Technical" as const,
          readTime: "7 min lesing",
          excerpt: "Hjelp kundene dine med å koble til enhetene sine enkelt. Sammenlign ytelse, sikkerhet og enhetskompatibilitet for Xtream Codes og rå M3U-filer.",
          content: "Når du konfigurerer klienter vil du møte to primære formater: Xtream Codes API og M3U-spillelister. M3U-spillelister er en lang URL-streng som inneholder en tekstfil med kanalplasseringer. Selv om M3U er kompatibelt med nesten alle eldre apper, eksponerer det rå strømmingslenker og kan være tregt å laste ned. Xtream Codes API deler derimot opp legitimasjon i tre rene inndatafelt: Portal-URL, brukernavn og passord. Xtream Codes anbefales sterkt fordi det laster kanaler på brøkdeler av et sekund, beskytter strømmene dine mot kopiering og oppdaterer kanallister dynamisk. Instruer alltid kunder om å bruke moderne spillere som IPTV Smarters, Tivimate eller XCIPTV."
        },
        {
          id: "white-label-panel-branding",
          title: "IPTV-paneler med eget merke: Bygg ditt streamingimperium",
          category: "Branding" as const,
          readTime: "5 min lesing",
          excerpt: "Klar til å skalere utover direktekunder? Lær hvordan tilpasset DNS-ruting og white labeling lar deg selge paneler til underforhandlere under ditt eget merke.",
          content: "White labeling er det ultimate trinnet for å skalere IPTV-virksomheten din. Et standard forhandlerpanel viser standardserverlegitimasjon. Et white label-panel lar deg maskere disse serverne under ditt eget private merke. For å gjøre dette kjøper du en dedikert white label-oppsett fra Fox IPTV Panels, registrerer ditt eget domene (f.eks. mittportal.no) og peker DNS-innstillingene mot server-IP-adresser. Når kundene dine logger inn, ser de domenet og logoen din. White labeling gjør det også mulig å rekruttere underforhandlere, og dermed bygge et massivt engros-distribusjonsnett."
        }
      ];
    }

    if (L === "es") {
      return [
        {
          id: "start-iptv-reseller-business",
          title: "Cómo iniciar un negocio de revendedor de IPTV en 2026 (con una inversión mínima)",
          category: "Negocios",
          readTime: "6 min de lectura",
          excerpt: "Aprenda a establecer un negocio de reventa de IPTV de marca blanca altamente rentable. Descubra estrategias de captación de clientes y cómo escalar vía WhatsApp.",
          content: "Iniciar un negocio de suscripción digital es una de las mejores formas de generar ingresos pasivos en 2026. Con un panel de revendedor de IPTV premium, no necesita comprar costosos servidores de transmisión ni administrar una infraestructura de base de datos compleja. Como revendedor, compra créditos al por mayor a un distribuidor principal como Fox IPTV Panels, obtiene acceso a un panel de control elegante y vende cuentas a sus clientes minoristas. Para comenzar: 1) Asegure un paquete de créditos pequeño (inversión mínima), 2) Reciba capacitación sobre la asignación de créditos, 3) Promociónese en mercados locales en España o la UE a través de redes sociales, y 4) Use WhatsApp como su portal principal de atención al cliente y ventas. Puede cobrar tarifas mensuales o anuales recurrentes, y dado que los costos de créditos al por mayor son muy bajos, mantendrá márgenes de ganancia masivos."
        },
        {
          id: "credit-system-explained",
          title: "Explicación del sistema de créditos de IPTV para revendedores: Guía completa",
          category: "Negocios",
          readTime: "5 min de lectura",
          excerpt: "¿Tiene dudas sobre cómo los créditos se convierten en cuentas activas de clientes? Lea nuestro desglose detallado del modelo de facturación y calcule sus beneficios.",
          content: "El sistema de créditos de IPTV es el modelo de reventa mayorista fundamental. En lugar de pagar tarifas mensuales fijas por el servidor, compra créditos en bloque. Piense en los créditos como su inventario mayorista. Por lo general, el cálculo estándar es: 1 crédito = 1 mes de suscripción de cliente (lo que significa que un cliente de 12 meses consume 12 créditos). Por ejemplo: si compra un Growth Pack de 200 créditos por $180 (o equivalente local), su costo mayorista es de solo $0.90 por crédito. Si vende a $10/mes por cliente, su ingreso bruto potencial es de $2,000, ¡lo que genera una ganancia neta masiva de $1,820! El sistema de créditos le brinda libertad absoluta de precios y cero costos fijos."
        },
        {
          id: "xtream-codes-vs-m3u",
          title: "Xtream Codes API frente a enlaces de listas de reproducción M3U: lo que debe saber",
          category: "Técnico",
          readTime: "7 min de lectura",
          excerpt: "Ayude a sus clientes a conectar sus dispositivos fácilmente. Compare el rendimiento, la seguridad y la compatibilidad de Xtream Codes y archivos M3U sin procesar.",
          content: "Al configurar clientes, se encontrará con dos formatos principales: Xtream Codes API y listas de reproducción M3U. Las listas de reproducción M3U consisten en una cadena de URL larga que contiene un archivo de texto con las ubicaciones de los canales. Aunque M3U es compatible con casi todas las aplicaciones antiguas, expone los enlaces de transmisión directa y puede ser lento de descargar. Xtream Codes API, por otro lado, divide las credenciales en tres entradas limpias: URL del portal, usuario y contraseña. Se recomienda encarecidamente utilizar Xtream Codes porque carga los canales en fracciones de segundo, protege sus transmisiones contra copias y actualiza las listas de canales de manera dinámica. Indique siempre a sus clientes que utilicen reproductores modernos como IPTV Smarters, Tivimate o XCIPTV con su inicio de sesión de Xtream Codes."
        },
        {
          id: "white-label-panel-branding",
          title: "Paneles IPTV de marca blanca: cree su propio imperio de transmisión",
          category: "Marca",
          readTime: "5 min de lectura",
          excerpt: "¿Listo para escalar más allá de los clientes minoristas? Conozca cómo el enrutamiento DNS personalizado y la marca blanca le permiten vender paneles a sub-revendedores.",
          content: "La marca blanca (White Label) es el paso definitivo para escalar su negocio de IPTV. Un panel de revendedor estándar muestra las credenciales del servidor predeterminado. Un panel de marca blanca le permite enmascarar estos servidores bajo su propia marca privada. Para hacer esto, compra una configuración dedicada de marca blanca en Fox IPTV Panels, registra su propio dominio (por ejemplo, miportal.com) y apunta sus configuraciones DNS a las IP del servidor. Cuando sus clientes inicien sesión, verán su dominio y su logotipo de marca. Más importante aún, la marca blanca le permite reclutar sub-revendedores. Puede vender paquetes de créditos más pequeños a otros revendedores que gestionarán sus propios clientes bajo su panel, creando una red de distribución masiva."
        },
        {
          id: "dns-portal-setup-guide",
          title: "Personalización de DNS de IPTV y Configuración de Dominio de Portal (CNAME, Seguridad y Marca)",
          category: "Técnico",
          readTime: "8 min de lectura",
          excerpt: "Aprenda a configurar portales DNS personalizados (portal.sumarca.com), CNAME frente a registros A, proteja su servidor de ataques y personalice aplicaciones cliente.",
          content: "Configurar una marca profesional de revendedor de IPTV requiere alejarse de las URL de servidor directas. Un dominio de portal personalizado (por ejemplo, portal.sumarca.com) actúa como guardián de su tráfico de transmisión, enmascarando el servidor del proveedor principal.\n\nDNS frente a CNAME para portales IPTV:\nAl configurar su dominio de portal personalizado, debe decidir entre utilizar registros CNAME o registros A. Un registro CNAME (Nombre Canónico) actúa como un alias, apuntando portal.sumarca.com directamente al nombre de host principal (por ejemplo, server.foxiptvpanels.com). Un registro A mapea su subdominio directamente a una dirección IP estática. Se recomienda encarecidamente CNAME para portales IPTV porque si la IP del servidor principal cambia debido a migraciones o protección DDoS, su portal se resuelve automáticamente a la nueva IP sin romper las conexiones de sus clientes.\n\nConfiguración paso a paso del portal personalizado:\n1) Inicie sesión en su registrador de dominios (por ejemplo, Namecheap, GoDaddy).\n2) Vaya a la Configuración avanzada de DNS y haga clic en 'Agregar nuevo registro'.\n3) Seleccione Registro CNAME, ingrese 'portal' como Host y pegue la URL del servidor principal como Valor. Establezca el TTL en Automático.\n4) Una vez propagado, vincule este dominio dentro de su panel de Fox IPTV en la sección Configuración de marca blanca.\n\n12 Errores de seguridad en paneles IPTV (Evite ser hackeado):\n1. Usar puertos predeterminados: Los puertos de panel estándar son objetivos fáciles. Oculte y dirija siempre el tráfico a través de puertos personalizados (por ejemplo, 8080, 25461).\n2. Exponer la IP del servidor principal: Nunca apunte registros A directamente a servidores sin procesar. Utilice proxies de Cloudflare para ocultar la IP de origen.\n3. Contraseñas débiles de revendedor: Habilite la autenticación de dos factores (2FA) y use contraseñas complejas y aleatorias.\n4. Exponer bases de datos de clientes en texto claro.\n5. No configurar el cifrado SSL/TLS para sus portales personalizados.\n\nPersonalización de marca de aplicaciones cliente:\nUna vez que su portal CNAME personalizado esté activo, puede personalizar IPTV Smarters, Tivimate o APK de Android personalizadas para codificar la URL de su portal de manera interna. Cuando sus clientes abren la aplicación de su marca, solo ingresan su usuario y contraseña, lo que brinda una experiencia premium y totalmente personalizada."
        },
        {
          id: "billing-whmcs-stripe-guide",
          title: "Guía de Facturación Automatizada y Entrega de Créditos: Configuración de WHMCS e Integración de Stripe",
          category: "Técnico",
          readTime: "9 min de lectura",
          excerpt: "Automatice los registros de clientes, renovaciones y entregas de créditos de IPTV usando WHMCS, configure pagos seguros de Stripe y compare PayPal vs Crypto.",
          content: "Crear cuentas y renovar suscripciones manualmente es el mayor cuello de botella para los revendedores de IPTV en crecimiento. Los distribuidores exitosos automatizan todo el ciclo de vida utilizando WHMCS (solución de gestión de alojamiento web) combinado con pasarelas de pago seguras.\n\nGuía de configuración del módulo IPTV para WHMCS:\nWHMCS es la plataforma de automatización estándar de la industria. Al instalar un módulo de revendedor IPTV personalizado, WHMCS se conecta directamente a la API de su panel (como Xtream Codes).\n1) Descargue el módulo WHMCS de revendedor IPTV desde su portal de desarrollador.\n2) Cargue los archivos del módulo en el directorio de instalación de su WHMCS bajo /modules/servers/iptvreseller/.\n3) En WHMCS, vaya a Configuración > Productos/Servicios > Servidores. Haga clic en 'Agregar nuevo servidor', seleccione el módulo IPTV, ingrese la URL de la API del panel y sus credenciales de revendedor.\n4) Cree sus productos de suscripción (por ejemplo, 1 mes, 3 meses, 12 meses). Vincúlelos al servidor IPTV y asócielos a las acciones correspondientes (por ejemplo, 'Crear línea', costo de créditos en 1, 3 o 12).\nCuando un cliente compra una suscripción en su sitio, WHMCS invoca automáticamente la API, descuenta los créditos de su saldo, crea la cuenta y le envía al cliente sus credenciales por correo electrónico de manera instantánea.\n\nStripe vs PayPal vs Criptomonedas: Estrategia de pasarela de pago:\n- Stripe: Altas tasas de conversión y flujos de pago limpios. Sin embargo, dado que IPTV se clasifica como una industria de alto riesgo, usar Stripe de manera directa puede provocar bloqueos de cuentas. Utilice siempre integraciones dedicadas de Stripe de alto riesgo.\n- PayPal: Muy confiable para los consumidores. Sin embargo, las políticas de disputas de PayPal favorecen fuertemente a los compradores, exponiéndole a disputas abusivas.\n- Criptomonedas (Bitcoin, USDT): 100% libre de contracargos, anónimo e inmune a bloqueos. Fomente el uso de criptomonedas ofreciendo un descuento del 10% en pagos con Bitcoin o stablecoins.\n\nAutomatización de renovaciones:\nConfigure WHMCS para enviar avisos de vencimiento automáticos (7 y 3 días antes del vencimiento). Si el cliente paga la factura, WHMCS llama automáticamente a la API para extender la suscripción por otros 30 o 365 días sin que usted tenga que intervenir manualmente."
        },
        {
          id: "xtream-api-integration-guide",
          title: "Guía de Integración de API de IPTV y Xtream Codes para Propietarios de Paneles",
          category: "Técnico",
          readTime: "7 min de lectura",
          excerpt: "Domine la arquitectura de la API de Xtream Codes. Aprenda a crear formularios de registro personalizados, consultar bases de datos y obtener enlaces de reproducción.",
          content: "Para revendedores avanzados y propietarios de paneles, la integración directa con la API de Xtream Codes abre infinitas posibilidades, desde crear formularios de registro automático hasta desarrollar reproductores personalizados.\n\nExplicación de la arquitectura de la API de Xtream Codes:\nLa API de Xtream Codes funciona sobre protocolos HTTP/HTTPS estándar, devolviendo cargas de datos JSON. Los principales puntos de integración requieren tres parámetros: usuario, contraseña y la acción específica.\n\nPuntos de integración principales:\n1. Autenticación e información del servidor:\nhttp://portal.sumarca.com:8080/player_api.php?username=CLIENTE_USER&password=CLIENTE_PASS\nLlamar a este endpoint devuelve un JSON que contiene los detalles de suscripción del cliente, fecha de vencimiento, conexiones activas y formatos compatibles.\n2. Obtener categorías de canales en vivo:\nhttp://portal.sumarca.com:8080/player_api.php?username=CLIENTE_USER&password=CLIENTE_PASS&action=get_live_categories\n3. Consulta de enlace de reproducción:\nPara obtener el formato de lista M3U de manera programática, los desarrolladores consultan:\nhttp://portal.sumarca.com:8080/get.php?auth=CLIENT_AUTH&auth_password=CLIENT_PASS_HASH&output=ts\n\nPrácticas recomendadas para desarrolladores:\nAl compilar sitios web personalizados o aplicaciones cliente, guarde siempre en caché las respuestas de la API (como las listas de canales) localmente con Redis o Memcached. Consultar la API del panel en cada carga de página puede sobrecargar la base de datos del servidor de IPTV, lo que provoca lentitud y posibles caídas. Implemente límites de velocidad estándar en sus endpoints públicos para evitar ataques de fuerza bruta."
        }
      ];
    }

    return [
      {
        id: "start-iptv-reseller-business",
        title: "How to Start an IPTV Reseller Business in 2026 (With Minimal Investment)",
        category: "Business",
        readTime: "6 min read",
        excerpt: "Learn how to establish a highly profitable white label IPTV reseller business. Discover panel onboarding, customer acquisition, and WhatsApp scaling strategies.",
        content: "Starting a digital subscription business is one of the best ways to earn passive income in 2026. With a premium IPTV reseller panel, you don't need to purchase expensive streaming servers or manage complex database infrastructure. As a reseller, you purchase wholesale 'credits' from a major distributor like Fox IPTV Panels, get access to a sleek dashboard, and sell accounts to your retail customers. To get started: 1) Secure a small credit package (minimum investment), 2) Get trained on credit allocation, 3) Market to local audiences in the UK, USA, or the EU via social media, and 4) Use WhatsApp as your primary customer relationship and sales portal. You can charge monthly or yearly recurring rates, and since wholesale credit prices are low, you easily retain massive margins."
      },
      {
        id: "credit-system-explained",
        title: "IPTV Reseller Credit System Explained: A Complete Guide",
        category: "Business",
        readTime: "5 min read",
        excerpt: "Confused about how credits translate to client active accounts? Read our detailed breakdown of the IPTV panel billing model and calculate your profit margins.",
        content: "The IPTV credit system is the fundamental wholesale model for reselling. Instead of paying fixed monthly server fees, you buy credits in bulk. Think of credits as your wholesale inventory. Generally, the standard calculation is: 1 credit = 1 month of customer subscription (meaning a 12-month client uses 12 credits). For example: if you buy a Growth Pack of 200 credits for $180, your wholesale cost is only $0.90 per credit. If you sell at $10/month per customer, your potential gross revenue is $2,000, yielding a massive net profit of $1,820! The credit system gives you absolute pricing freedom and zero overhead costs."
      },
      {
        id: "xtream-codes-vs-m3u",
        title: "Xtream Codes API vs M3U Playlist Links: What Resellers Must Know",
        category: "Technical",
        readTime: "7 min read",
        excerpt: "Help your customers connect their devices easily. Compare the performance, security, and device compatibility of Xtream Codes logins and raw M3U files.",
        content: "When setting up clients, you'll encounter two primary formats: Xtream Codes API and M3U playlists. M3U playlists consist of a long URL string containing a text file with channel locations. While M3U is compatible with almost every older application, it exposes the raw stream links and can be slow to download on client apps. Xtream Codes API, on the other hand, breaks down credentials into three clean inputs: Portal URL, Username, and Password. Xtream Codes is highly recommended because it loads channels in fractions of a second, protects your streams from copying, and updates channel lists dynamically without requiring the customer to reload their app. Always instruct customers to use modern players like IPTV Smarters, Tivimate, or XCIPTV with their Xtream Codes login."
      },
      {
        id: "white-label-panel-branding",
        title: "White Label IPTV Panels: Branding Your Streaming Empire",
        category: "Branding",
        readTime: "5 min read",
        excerpt: "Ready to scale beyond retail clients? Learn how custom DNS routing and white labeling allow you to sell reseller panels to sub-resellers under your own brand.",
        content: "White labeling is the ultimate step to scaling your IPTV business. A standard reseller panel shows the default server credentials. A white-label panel allows you to mask these servers under your own private brand. To do this, you buy a dedicated white-label setup from Fox IPTV Panels, register your own domain (e.g. mystreamportal.com), and point its DNS settings to the server IPs. When your customers log in, they see your domain and your brand logo. More importantly, white labeling enables you to recruit sub-resellers. You can sell smaller credit packs to other aspiring resellers who manage their own clients underneath your panel, creating a massive wholesale distribution network."
      },
      {
        id: "dns-portal-setup-guide",
        title: "IPTV DNS Customization & Portal Domain Setup (CNAME, Security & Branding)",
        category: "Technical",
        readTime: "8 min read",
        excerpt: "Learn how to configure custom DNS portals (portal.yourbrand.com), CNAME vs A Records, secure your server from exploits, and custom-brand client apps.",
        content: "Setting up a professional IPTV reseller brand requires moving away from raw server URLs. A custom portal domain (e.g., portal.yourbrand.com) acts as the gatekeeper for your streaming traffic, masking the parent provider server.\n\nDNS vs CNAME for IPTV Portals:\nWhen configuring your custom portal domain, you must decide between CNAME records or A records. A CNAME (Canonical Name) record acts as an alias, pointing portal.yourbrand.com directly to the parent host name (e.g., server.foxiptvpanels.com). An A record maps your subdomain directly to a static IP address. CNAME is highly recommended for IPTV portals because if the parent server IP changes due to migrations or DDoS protection, your portal automatically resolves to the new IP without breaking client connections.\n\nStep-by-Step Custom Portal Setup:\n1) Log into your domain registrar (e.g., Namecheap, GoDaddy).\n2) Go to Advanced DNS Settings and click 'Add New Record'.\n3) Select CNAME Record, enter 'portal' as the Host, and paste the parent server URL as the Value. Set TTL to Automatic.\n4) Once propagated, link this domain inside your Fox IPTV reseller dashboard under White Label Settings.\n\n12 IPTV Panel Security Mistakes (Avoid Getting Hacked):\n1. Using default ports: Standard panel ports are easy targets. Always obfuscate and route traffic through custom ports (e.g., 8080, 25461).\n2. Exposing the backend IP: Never point A records directly to raw servers. Always use Cloudflare proxies (with proxy status set to orange cloud) to hide the origin IP.\n3. Weak reseller passwords: Enable two-factor authentication (2FA) and use complex, random administrative passwords.\n4. Exposing client databases in clear text.\n5. Failing to configure SSL/TLS encryption for your custom portals.\n\nBrand Customization of Client Apps:\nOnce your custom CNAME portal is active, you can customize IPTV Smarters, Tivimate, or custom Android APKs to hardcode your portal URL. When clients launch your brand's app, they only enter their Username and Password. The app resolves to your CNAME behind the scenes, creating a premium, fully private-labeled business."
      },
      {
        id: "billing-whmcs-stripe-guide",
        title: "Automated Billing & Credit Delivery Guide: WHMCS Setup & Stripe Integration",
        category: "Technical",
        readTime: "9 min read",
        excerpt: "Automate client signups, renewals, and IPTV credit deliveries using WHMCS, configure secure Stripe payments, and compare PayPal vs Crypto.",
        content: "Manually creating accounts and renewing subscriptions is the single biggest bottleneck for growing IPTV resellers. Successful resellers automate the entire lifecycle using WHMCS (Web Host Manager Complete Solution) combined with secure payment gateways.\n\nWHMCS IPTV Module Setup Guide:\nWHMCS is the industry-standard automation platform. By installing a custom IPTV reseller module, WHMCS connects directly to your reseller panel API (such as Xtream Codes).\n1) Download the IPTV reseller WHMCS module from your developer portal.\n2) Upload the module files to your WHMCS installation directory under /modules/servers/iptvreseller/.\n3) In WHMCS, navigate to Setup > Products/Services > Servers. Click 'Add New Server', select the IPTV module, enter your panel API URL, and provide your reseller API credentials.\n4) Create your subscription products (e.g., 1 Month, 3 Months, 12 Months). Link them to the IPTV server and map them to the corresponding reseller panel actions (e.g., 'Create Line', set credits cost to 1, 3, or 12).\nWhen a customer purchases a subscription on your site, WHMCS automatically invokes the panel API, deducts credits from your balance, creates the account, and emails the client their Xtream Codes login credentials instantly.\n\nStripe vs PayPal vs Crypto: Payment Gateway Strategy:\n- Stripe: High conversion rates and clean checkout overlays. However, since IPTV is classified as a high-risk industry, using a standard Stripe account without a high-risk merchant account can lead to automated account bans. Always use a dedicated Stripe high-risk integration.\n- PayPal: Highly trusted by consumers. However, PayPal's dispute policies heavily favor buyers, opening resellers up to chargeback abuse.\n- Crypto (Bitcoin, USDT): 100% chargeback-free, anonymous, and immune to payment bans. Encourage crypto adoption by offering a 10% discount on packages purchased via Bitcoin or stablecoins.\n\nAutomating Renewals & Client Management:\nConfigure WHMCS to send automated expiration warnings (7 days and 3 days before expiration). If the client clicks the invoice and pays, WHMCS automatically calls the API renewal endpoint to extend the subscription by another 30 or 365 days, ensuring maximum client retention and zero manual labor."
      },
      {
        id: "xtream-api-integration-guide",
        title: "IPTV API & Xtream Codes Integration Guide for Panel Owners",
        category: "Technical",
        readTime: "7 min read",
        excerpt: "Master the Xtream Codes API architecture. Learn to build custom registration forms, query panel databases, and fetch playlist endpoints.",
        content: "For advanced resellers and panel owners, integrating directly with the Xtream Codes API opens up infinite possibilities—from building automated customer registration forms to creating custom playlist players.\n\nXtream Codes API Architecture Explained:\nThe Xtream Codes API operates over standard HTTP/HTTPS protocols, returning JSON data payloads. The main integration endpoints require three query parameters: username, password, and the specific action.\n\nCore Integration Endpoints:\n1. Authentication & Server Info:\nhttp://portal.yourbrand.com:8080/player_api.php?username=CLIENT_USER&password=CLIENT_PASS\nCalling this endpoint returns a JSON payload containing the client's subscription details, expiration timestamp, active connections count, and supported server outputs.\n2. Live Streams Category Fetch:\nhttp://portal.yourbrand.com:8080/player_api.php?username=CLIENT_USER&password=CLIENT_PASS&action=get_live_categories\n3. Channel Stream Query:\nTo fetch the M3U playlist format programmatically, developers query:\nhttp://portal.yourbrand.com:8080/get.php?auth=CLIENT_AUTH&auth_password=CLIENT_PASS_HASH&output=ts\n\nDeveloper Integration Best Practices:\nWhen building custom websites or client apps, always cache API responses (such as channel lists) locally using Redis or Memcached. Fetching channels directly from the IPTV panel on every single page load can overload the panel database, causing server lag and potential downtime. Implement standard rate limiting on your public API endpoints to prevent brute-force attacks on client credentials."
      }
    ];
  }, [locale]);

  const categories = useMemo(() => {
    const L = locale as string;
    if (L === "es") return ["Todos", "Negocios", "Técnico", "Marca"];
    if (L === "fr") return ["Tout", "Affaires", "Technique", "Marque"];
    if (L === "pt") return ["Todos", "Negócio", "Técnico", "Marca"];
    if (L === "sv") return ["Alla", "Affärer", "Tekniskt", "Varumärke"];
    if (L === "no") return ["Alle", "Bedrift", "Teknisk", "Merke"];
    return ["All", "Business", "Technical", "Branding"];
  }, [locale]);

  // All-locale helper
  const lc = (map: Record<string, string>) => map[locale] ?? map["en"] ?? "";

  const filteredGuides = useMemo(() => {
    return ALL_GUIDES.filter(guide => {
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesCategory = true;
      const allWords = ["All", "Todos", "Tout", "Alla", "Alle"];
      if (!allWords.includes(activeCategory)) {
        matchesCategory = guide.category.toLowerCase() === activeCategory.toLowerCase();
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, ALL_GUIDES]);

  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "110px", position: "relative" }}>
      {/* Orbs */}
      <div className="mesh-orb mesh-orb-3" style={{ bottom: "10%", left: "5%" }} />
      <div className="mesh-orb mesh-orb-1" style={{ top: "15%", right: "10%" }} />

      <div className="section-container" style={{ padding: "4rem 1.5rem" }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
          <Link href={`/${locale}`} style={{ color: "var(--text-muted)", textDecoration: "none" }} className="animated-underline">
            {lc({ en: "Home", "en-gb": "Home", "en-au": "Home", es: "Inicio", fr: "Accueil", pt: "Início", sv: "Hem", no: "Hjem" })}
          </Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: "var(--text-secondary)" }}>
            {lc({ en: "Guides & Tutorials", "en-gb": "Guides & Tutorials", "en-au": "Guides & Tutorials", es: "Guías y Tutoriales", fr: "Guides et Tutoriels", pt: "Guias e Tutoriais", sv: "Guider och Handledningar", no: "Guider og Opplæringer" })}
          </span>
        </nav>

        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          <div className="tag" style={{ marginBottom: "1rem" }}>
            {lc({ en: "IPTV Training Academy & Documentation", "en-gb": "IPTV Training Academy & Documentation", "en-au": "IPTV Training Academy & Documentation", es: "Academia y Documentación de IPTV", fr: "Académie de Formation IPTV et Documentation", pt: "Academia de Formação IPTV e Documentação", sv: "IPTV-utbildningsakademi och Dokumentation", no: "IPTV-opplæringsakademi og Dokumentasjon" })}
          </div>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            marginBottom: "1.5rem"
          }}>
            {lc({ en: "Master the", "en-gb": "Master the", "en-au": "Master the", es: "Domine el", fr: "Maîtrisez le", pt: "Domine o", sv: "Behärska", no: "Mestre" })}{" "}
            <span className="gradient-text">
              {lc({ en: "IPTV Reseller Business", "en-gb": "IPTV Reseller Business", "en-au": "IPTV Reseller Business", es: "Negocio Reseller de IPTV", fr: "Métier de Revendeur IPTV", pt: "Negócio de Revendedor IPTV", sv: "IPTV-återförsäljarbranschen", no: "IPTV-forhandlerbransjen" })}
            </span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {lc({ en: "Expert insights, server tutorials, and marketing strategies to help you launch, brand, and scale your wholesale streaming franchise successfully in 2026.", "en-gb": "Expert insights, server tutorials, and marketing strategies to help you launch, brand, and scale your wholesale streaming franchise successfully in 2026.", "en-au": "Expert insights, server tutorials, and marketing strategies to help you launch, brand, and scale your wholesale streaming franchise successfully in 2026.", es: "Información de expertos, tutoriales de servidores y estrategias de marketing para ayudarle a lanzar y escalar su franquicia de IPTV en 2026.", fr: "Conseils d'experts, tutoriels serveur et stratégies marketing pour lancer et développer votre franchise de streaming en 2026.", pt: "Insights de especialistas, tutoriais de servidor e estratégias de marketing para lançar e escalar a sua franquia de streaming em 2026.", sv: "Expertinsikter, serverhandledningar och marknadsföringsstrategier för att framgångsrikt lansera och skala din streamingfranschis 2026.", no: "Ekspertinnsikt, serveropplæringer og markedsføringsstrategier for å hjelpe deg med å lansere og skalere din streamingfranchise i 2026." })}
          </p>
        </div>

        {/* Filters Row */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "3rem"
        }}>
          {/* Category tabs */}
          <div style={{ display: "flex", gap: "6px", background: "rgba(255,255,255,0.02)", padding: "4px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedGuide(null);
                }}
                style={{
                  background: activeCategory === cat ? "var(--gradient-primary)" : "transparent",
                  color: "var(--text-primary)",
                  border: "none",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  transition: "all 0.2s"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder={lc({ en: "Search academy articles...", "en-gb": "Search academy articles...", "en-au": "Search academy articles...", es: "Buscar artículos...", fr: "Rechercher des articles...", pt: "Pesquisar artigos...", sv: "Sök artiklar...", no: "Søk artikler..." })}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedGuide(null);
            }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              padding: "0.6rem 1.25rem",
              color: "var(--text-primary)",
              fontSize: "0.9rem",
              outline: "none",
              width: "100%",
              maxWidth: "320px"
            }}
          />
        </div>

        {/* Article / Reader Layout */}
        {selectedGuide ? (
          /* Detailed Article View */
          <div className="glass-card" style={{ padding: "3rem", borderRadius: "24px", position: "relative", zIndex: 10 }}>
            <button
              onClick={() => setSelectedGuide(null)}
              style={{
                background: "none",
                border: "none",
                color: "var(--accent-purple)",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: "2rem"
              }}
            >
              {locale === "es" ? "← Volver a la Academia de Guías" : "← Back to Guides Academy"}
            </button>

            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: "1rem" }}>
              <span className="tag" style={{ fontSize: "0.7rem" }}>{selectedGuide.category}</span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{selectedGuide.readTime}</span>
            </div>

            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.25rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              {selectedGuide.title}
            </h2>

            <div style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              whiteSpace: "pre-wrap",
              marginBottom: "3rem"
            }}>
              {selectedGuide.content}
            </div>

            {/* Action card */}
            <div style={{
              padding: "2rem",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border-color)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem"
            }}>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: "0 0 6px" }}>
                  {locale === "es" ? "Ponga en práctica este conocimiento" : "Put This Knowledge into Practice"}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0 }}>
                  {locale === "es" ? "Comience su negocio de reventa hoy con tutoría directa." : "Start your reseller business today with a direct mentorship."}
                </p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.7rem 1.5rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.9rem" }}>
                {locale === "es" ? "Comenzar en WhatsApp" : "Get Started on WhatsApp"}
              </a>
            </div>
          </div>
        ) : (
          /* Grid View */
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="panel-hero-grid">
            {filteredGuides.map(guide => (
              <article
                key={guide.id}
                className="glass-card"
                style={{
                  padding: "2rem",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  cursor: "pointer"
                }}
                onClick={() => setSelectedGuide(guide)}
              >
                <div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: "1rem" }}>
                    <span className="tag" style={{ fontSize: "0.65rem", padding: "2px 8px" }}>{guide.category}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{guide.readTime}</span>
                  </div>

                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", lineHeight: 1.3 }}>
                    {guide.title}
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {guide.excerpt}
                  </p>
                </div>

                <span
                  style={{
                    color: "var(--accent-purple)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4
                  }}
                >
                  {locale === "es" ? "Leer Guía →" : "Read Guide →"}
                </span>
              </article>
            ))}

            {filteredGuides.length === 0 && (
              <div style={{ gridColumn: "1 / -1", padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
                {locale === "es" ? "No se encontraron guías que coincidan con su búsqueda." : "No guides found matching your search. Clear filters or search something else!"}
              </div>
            )}
          </div>
        )}

        {/* Quick FAQ summary */}
        <section style={{ marginTop: "6rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)" }}>
              {locale === "es" ? "Preguntas Frecuentes de Revendedores" : "Common Reseller Questions"}
            </h2>
            <p style={{ color: "var(--text-muted)" }}>
              {locale === "es" ? "Detalles cruciales sobre facturación y portales técnicos." : "Crucial details to help clarify billing and technical portals."}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="panel-hero-grid">
            <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ fontWeight: 700, margin: "0 0 10px", color: "var(--text-primary)" }}>
                {locale === "es" ? "¿Cuánta inversión se requiere?" : "How much investment is required?"}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {locale === "es"
                  ? "Puede comenzar con nuestro Paquete de Inicio de 120 créditos. Esto le permite probar el mercado y crear una lista de clientes antes de realizar compromisos mayores."
                  : "You can start with our Starter Pack of 120 wholesale credits. This lets you test the market and build a client list before making larger bulk commitments."}
              </p>
            </div>
            <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ fontWeight: 700, margin: "0 0 10px", color: "var(--text-primary)" }}>
                {locale === "es" ? "¿Qué pasa si un servidor se corta o se cae?" : "What if a server buffers or goes down?"}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {locale === "es"
                  ? "Nuestros servidores principales (como Strong 4K, Nexon, Crystal) tienen copias de seguridad distribuidas geográficamente y un 99,9% de tiempo de actividad."
                  : "Our top servers (like Strong 4K, Nexon, Crystal) have redundant geo-distributed backups and 99.9% uptime. By offering multiple panels to clients, you can ensure they always have backup streams."}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

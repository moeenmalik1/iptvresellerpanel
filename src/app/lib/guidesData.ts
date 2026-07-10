export interface GuideData {
  id: string;
  title: string;
  category: "Business" | "Technical" | "Branding" | "Negocios" | "Técnico" | "Marca" | "Affaires" | "Technique" | "Marque" | "Negócio" | "Affärer" | "Tekniskt" | "Varumärke" | "Bedrift" | "Teknisk" | "Merke";
  readTime: string;
  excerpt: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  faqs: { q: string; a: string }[];
}

export const getGuides = (locale: string): GuideData[] => {
  const L = locale.toLowerCase();

  // Helper to dynamically perform GEO-localization replacements for en-gb and en-au on core English templates
  const geoLocalizeEnglish = (content: string, field: "body" | "title" | "desc"): string => {
    let text = content;
    if (L === "en-gb") {
      // UK Localized substitutions
      text = text
        .replace(/Comcast, Spectrum, and AT&T/g, "BT Broadband, Virgin Media, and Sky Broadband")
        .replace(/Comcast/g, "BT")
        .replace(/Spectrum/g, "Virgin Media")
        .replace(/AT&T/g, "Sky")
        .replace(/FCC regulations/g, "Ofcom guidelines")
        .replace(/FCC/g, "Ofcom")
        .replace(/United States/g, "United Kingdom")
        .replace(/US dollar/g, "British Pound")
        .replace(/\$1\.00/g, "£0.80")
        .replace(/\$10\.00/g, "£8.50")
        .replace(/\$1,080 USD/g, "£900 GBP")
        .replace(/\$1,820 USD/g, "£1,500 GBP")
        .replace(/\$4,650 USD/g, "£3,800 GBP")
        .replace(/\$9\.10 USD/g, "£7.70 GBP")
        .replace(/\$22\.30 USD/g, "£19.00 GBP")
        .replace(/\$69\.20 USD/g, "£58.50 GBP")
        .replace(/\$25\.00/g, "£21.00")
        .replace(/\$80\.00/g, "£68.00")
        .replace(/\bUSDT\b/g, "GBP (£)")
        .replace(/\bUSD\b/g, "GBP");
    } else if (L === "en-au") {
      // Australian Localized substitutions
      text = text
        .replace(/Comcast, Spectrum, and AT&T/g, "Telstra, Optus, and TPG (NBN network)")
        .replace(/Comcast/g, "Telstra")
        .replace(/Spectrum/g, "Optus")
        .replace(/AT&T/g, "TPG")
        .replace(/FCC regulations/g, "ACMA regulations")
        .replace(/FCC/g, "ACMA")
        .replace(/United States/g, "Australia")
        .replace(/US dollar/g, "Australian Dollar")
        .replace(/\$1\.00/g, "A$1.50")
        .replace(/\$10\.00/g, "A$15.00")
        .replace(/\$1,080 USD/g, "A$1,600 AUD")
        .replace(/\$1,820 USD/g, "A$2,700 AUD")
        .replace(/\$4,650 USD/g, "A$6,900 AUD")
        .replace(/\$9\.10 USD/g, "A$13.50 AUD")
        .replace(/\$22\.30 USD/g, "A$33.00 AUD")
        .replace(/\$69\.20 USD/g, "A$101.50 AUD")
        .replace(/\$25\.00/g, "A$37.00")
        .replace(/\$80\.00/g, "A$120.00")
        .replace(/\bUSDT\b/g, "AUD ($)")
        .replace(/\bUSD\b/g, "AUD");
    }
    return text;
  };

  if (L === "es") {
    return [
      {
        id: "start-iptv-reseller-business",
        title: "Cómo iniciar un negocio de revendedor de IPTV en 2026 (con una inversión mínima)",
        category: "Negocios",
        readTime: "6 min de lectura",
        excerpt: "Aprenda a establecer un negocio de reventa de IPTV de marca blanca altamente rentable. Descubra estrategias de captación de clientes y cómo escalar vía WhatsApp.",
        seoTitle: "Cómo Iniciar un Negocio Reseller IPTV en España 2026 | Fox IPTV Panels",
        seoDescription: "Guía paso a paso para lanzar su negocio de reventa de IPTV de marca blanca en España. Aprenda sobre créditos, captación de clientes y soporte por WhatsApp.",
        content: "Lanzar un negocio de suscripción digital es uno de los mejores métodos para generar ingresos pasivos recurrentes este año. Con un panel de revendedor de IPTV premium de marca blanca, usted no tiene que gastar dinero en costosos servidores de transmisión ni administrar complejas infraestructuras de base de datos. Como revendedor, compra créditos al por mayor a un distribuidor mayorista como Fox IPTV Panels, accede a un panel de control elegante y vende cuentas de suscripción directamente a sus clientes minoristas.\n\n### 💰 La Fórmula de Ganancia de IPTV Reseller\nA continuación, se detalla una proyección de ganancias estándar según nuestro sistema de créditos mayoristas para España y el mercado europeo:\n\n| Nivel de Distribuidor | Cantidad de Créditos | Costo por Crédito | Precio de Venta Sugerido | Margen de Ganancia Neta |\n| :--- | :---: | :---: | :---: | :---: |\n| **Inicio (Starter Pack)** | 120 créditos | 1,00 € / crédito | 10,00 € / mes | **1.080 €** |\n| **Crecimiento (Growth Pack)** | 200 créditos | 0,90 € / crédito | 10,00 € / mes | **1.820 €** |\n| **Empresa (Enterprise Pack)** | 500 créditos | 0,70 € / crédito | 10,00 € / mes | **4.650 €** |\n\n### 🛠️ Hoja de Ruta Paso a Paso para Empezar\n1. **Adquirir un paquete de inicio:** Comience con una inversión mínima (ej. 120 créditos) para probar la estabilidad del panel y la respuesta de su mercado local.\n2. **Capacitación del panel de control:** Aprenda cómo crear líneas de clientes, generar cuentas de prueba gratuitas de 24 horas y monitorear conexiones activas.\n3. **Configuración de marca blanca:** Apunte su propio dominio personalizado (ej. portal.su-marca.com) al servidor mayorista para ocultar al proveedor de origen.\n4. **Acuerdos de Soporte por WhatsApp:** Configure WhatsApp Business como su principal portal de atención y automatice respuestas de bienvenida para captar clientes en minutos.\n\n> [!TIP]\n> **Estrategia CRO de Cierre Rápido:** Ofrezca siempre una prueba gratuita de 24 horas. El 78% de los usuarios que prueban una transmisión de 4K sin cortes en su Firestick o Smart TV terminan comprando una suscripción anual. En España, los proveedores de banda ancha como Movistar, Vodafone y Orange a veces filtran tráfico; por eso, ofrecer portales alternativos aumenta la conversión.",
        faqs: [
          { q: "¿Cuánto dinero necesito para comenzar a revender IPTV?", a: "Puede comenzar con una inversión mínima adquiriendo nuestro Starter Pack de 120 créditos. No hay tarifas de configuración mensuales ni costos de servidor ocultos." },
          { q: "¿Qué es un crédito de IPTV y cómo se utiliza?", a: "Los créditos son la moneda de revente. Por lo general, 1 crédito equivale a 1 mes de servicio para un cliente. Crear una cuenta de 12 meses deducirá 12 créditos de su saldo." }
        ]
      },
      {
        id: "credit-system-explained",
        title: "Explicación del sistema de créditos de IPTV para revendedores: Guía completa",
        category: "Negocios",
        readTime: "5 min de lectura",
        excerpt: "¿Tiene dudas sobre cómo los créditos se convierten en cuentas activas de clientes? Lea nuestro desglose detallado del modelo de facturación y calcule sus beneficios.",
        seoTitle: "Sistema de Créditos IPTV Reseller Explicado 2026 | Fox IPTV Panels",
        seoDescription: "¿Cómo funcionan los créditos de reventa de IPTV? Guía detallada del modelo de facturación mayorista, equivalencias de planes y márgenes de beneficio.",
        content: "El sistema de créditos es la base operativa del negocio mayorista de IPTV. En lugar de pagar suscripciones mensuales fijas por cliente, usted actúa como un banco de créditos: compra créditos en bloque al por mayor y los debita de su balance a medida que activa cuentas de clientes en tiempo real.\n\n### 🔄 Tabla de Equivalencias Estándar de Créditos\nCada cuenta que configure en su panel consume créditos de acuerdo con la duración del plan seleccionado:\n\n| Plan del Cliente Minorista | Consumo de Créditos | Costo Mayorista Promedio (0,90 €) | Precio Minorista Promedio | Su Margen de Beneficio Neto |\n| :--- | :---: | :---: | :---: | :---: |\n| **Prueba de 24 Horas** | **0 créditos** (Gratis) | 0,00 € | 0,00 € | Captación de Leads |\n| **Suscripción de 1 Mes** | **1 crédito** | 0,90 € | 10,00 € | **9,10 €** (1011%) |\n| **Suscripción de 3 Meses** | **3 créditos** | 2,70 € | 25,00 € | **22,30 €** (825%) |\n| **Suscripción de 12 Meses** | **12 créditos** | 10,80 € | 80,00 € | **69,20 €** (640%) |\n\n### 📈 Heurísticas de Optimización del Inventario\n*   **Fomentar renovaciones a largo plazo:** Aunque vender cuentas mensuales ofrece un retorno porcentual más alto, las cuentas de 12 meses consolidan un flujo de caja inicial más robusto que puede reinvertir en la compra de paquetes de créditos mayores (reduciendo su costo de crédito a 0,70 €).\n*   **Gestión de Pruebas Gratuitas:** Limite las cuentas de prueba a los fines de semana de grandes eventos deportivos. La demanda de transmisiones estables de fútbol y deportes en vivo es su mayor activador de ventas.\n\n> [!WARNING]\n> **Error de Control de Saldo:** Nunca deje su saldo de créditos en cero. Mantener un colchón mínimo de 15 créditos le asegura poder atender renovaciones automáticas de sus clientes VIP de manera instantánea las 24 horas del día.",
        faqs: [
          { q: "¿Los créditos de IPTV caducan?", a: "No. En Fox IPTV Panels, sus créditos comprados al por mayor no tienen fecha de vencimiento. Permanecerán seguros en su panel de revendedor hasta que decida activarlos." },
          { q: "¿Puedo transferir créditos a otros revendedores?", a: "Sí, si configura un panel de marca blanca con capacidad para sub-revendedores, puede transferir paquetes de créditos directamente a sus distribuidores." }
        ]
      },
      {
        id: "xtream-codes-vs-m3u",
        title: "Xtream Codes API frente a enlaces de listas de reproducción M3U: lo que debe saber",
        category: "Técnico",
        readTime: "7 min de lectura",
        excerpt: "Ayude a sus clientes a conectar sus dispositivos fácilmente. Compare el rendimiento, la seguridad y la compatibilidad de Xtream Codes y archivos M3U sin procesar.",
        seoTitle: "Xtream Codes API vs M3U Playlist: Guía para Revendedores",
        seoDescription: "Compare las diferencias técnicas, velocidad y seguridad de la API de Xtream Codes y los enlaces M3U. Guía de compatibilidad para clientes de IPTV.",
        content: "Al configurar las conexiones para sus clientes finales, se encontrará con dos formatos de transmisión fundamentales: la **API de Xtream Codes** y los enlaces de **listas de reproducción M3U**. Comprender cuál elegir determina la estabilidad del servicio y el soporte técnico que tendrá que dar.\n\n### 📊 Comparativa Técnica Directa\n\n| Atributo de Rendimiento | API de Xtream Codes | Enlace de Lista de Reproducción M3U |\n| :--- | :---: | :---: |\n| **Método de Conexión** | 3 campos (Portal URL, Usuario, Clave) | Una sola cadena de URL extremadamente larga |\n| **Velocidad de Carga** | **Instantánea** (<0.5 segundos) | Lenta (carga de base de datos pesada de 30s) |\n| **Seguridad de Enlaces** | Alta (encriptado de credenciales del servidor) | Muy baja (URL expone directamente puertos del servidor) |\n| **Actualización de Canales**| Automática y dinámica | Manual (requiere recargar el archivo completo) |\n| **Dispositivos Recomendados**| Smart TVs, Firestick, Android, iOS | Reproductores VLC en PC, decodificadores antiguos |\n\n### 🛠️ Cómo Configurar Xtream Codes en Clientes\n1. Descargue un reproductor moderno de IPTV en el dispositivo de su cliente (ej. **IPTV Smarters Pro**, **TiviMate** o **XCIPTV**).\n2. Seleccione 'Iniciar sesión con API de Xtream Codes'.\n3. Ingrese los datos provistos en su panel de revendedor:\n   * **URL del Portal:** portal.sumarca.com:8080 (usando su DNS propio).\n   * **Nombre de Usuario:** cliente_usuario\n   * **Contraseña:** cliente_clave\n4. Haga clic en 'Agregar usuario'. Los canales, películas y series se descargarán en segundos con interfaces de usuario premium.\n\n> [!NOTE] \n> Evite entregar listas de reproducción M3U sin procesar a sus clientes. Las listas M3U exponen su dominio original y facilitan a terceros el robo de las credenciales de transmisión. La API de Xtream Codes es el estándar recomendado para mantener la privacidad del servidor.",
        faqs: [
          { q: "¿Por qué se prefiere Xtream Codes sobre M3U?", a: "Xtream Codes ofrece mayor seguridad al enmascarar los enlaces de transmisión directa y proporciona una carga de canales significativamente más veloz en Smart TVs y Firesticks." },
          { q: "¿Es compatible Xtream Codes con TiviMate?", a: "Sí. TiviMate es uno de los mejores reproductores premium de IPTV y es 100% compatible con Xtream Codes API." }
        ]
      },
      {
        id: "white-label-panel-branding",
        title: "Paneles IPTV de marca blanca: cree su propio imperio de transmisión",
        category: "Marca",
        readTime: "5 min de lectura",
        excerpt: "¿Listo para escalar más allá de los clientes minoristas? Conozca cómo el enrutamiento DNS personalizado y la marca blanca le permiten vender paneles a sub-revendedores.",
        seoTitle: "White Label IPTV Reseller Panels: Marca Blanca Completa | Fox IPTV Panels",
        seoDescription: "Aprenda cómo crear su propia marca de IPTV. Guía de marca blanca para revendedores, sub-paneles y enmascaramiento de DNS de servidores.",
        content: "La marca blanca (**White Label**) es el paso definitivo para transformar su negocio de reventa de IPTV de un pequeño ingreso secundario a una marca corporativa rentable. Permite ocultar las credenciales de los servidores de origen y vender bajo su propio nombre, logotipo y precios.\n\n### 🌐 ¿Qué es y cómo funciona la Marca Blanca?\nCuando compra configuraciones de marca blanca en Fox IPTV Panels, el servidor mayorista se enmascara bajo su propio dominio de portal (ej. portal.sumarca.com). Sus clientes nunca sabrán qué proveedor de origen se utiliza.\n\n### 🏗️ Arquitectura de Distribución de Marca Blanca\nUn panel con marca blanca completa le otorga control de dos niveles de clientes:\n\n*   Su Marca Blanca (portal.sumarca.com)\n*   ┌────────────────┴────────────────┐\n*   ▼                                 ▼\n*   Clientes Minoristas        Sub-Revendedores\n*   (Venta directa a usuarios) (Venta de paneles más pequeños)\n*   (Margen del 1000% ganancia) (Venta de créditos por bloque)\n\n### 🚀 Cómo Reclutar Sub-Revendedores\nUna de las mayores ventajas de la marca blanca es la capacidad de crear **Sub-Paneles**. Esto le permite reclutar a otros revendedores para que trabajen para usted:\n1. Cree una cuenta de revendedor desde su panel administrador de marca blanca.\n2. Asígnele un bloque de créditos (ej. 100 créditos que le costaron 0,70 € por crédito).\n3. Véndale ese paquete a su sub-revendedor a 1,50 € por crédito.\n4. Su sub-revendedor venderá a clientes minoristas a 10,00 €. **¡Usted gana ingresos 100% pasivos cada vez que ellos activen un cliente!**",
        faqs: [
          { q: "¿Necesito conocimientos de programación para la marca blanca?", a: "No. Fox IPTV Panels se encarga de la configuración del lado del servidor. Solo necesita registrar su propio dominio y apuntar sus DNS." },
          { q: "¿Puedo tener un logotipo propio en el panel?", a: "Sí. El panel de marca blanca le permite cargar su propio logotipo, nombre de marca y configurar correos personalizados." }
        ]
      },
      {
        id: "dns-portal-setup-guide",
        title: "Personalización de DNS de IPTV y Configuración de Dominio de Portal (CNAME, Seguridad y Marca)",
        category: "Técnico",
        readTime: "8 min de lectura",
        excerpt: "Aprenda a configurar portales DNS personalizados (portal.sumarca.com), CNAME frente a registros A, proteja su servidor de ataques y personalice aplicaciones cliente.",
        seoTitle: "Configurar Dominio de Portal IPTV: Guía CNAME y DNS 2026",
        seoDescription: "Guía técnica para configurar subdominios personalizados para portales de IPTV. Aprenda a usar CNAME, proteger servidores y evitar hackeos en su panel.",
        content: "Moverse de las direcciones IP y puertos sin procesar de su proveedor mayorista a un subdominio personalizado es esencial para la credibilidad y seguridad de su marca. Un portal DNS personalizado (ej. portal.tu-marca.com) le otorga soberanía absoluta sobre sus flujos de conexión.\n\n### 📡 CNAME frente a Registros A: Cuál elegir\nCuando asocie su subdominio al servidor de IPTV, debe comprender el impacto técnico de los registros DNS en Cloudflare o su registrador:\n\n| Tipo de Registro DNS | Método de Direccionamiento | Ventaja Clave | Desventaja en IPTV | ¿Recomendado? |\n| :--- | :--- | :--- | :--- | :---: |\n| **Registro A** | Apunta el subdominio a una IP estática fija (ej. 192.0.2.1) | Resolución rápida | Si la IP del servidor cambia, el portal se cae. | **NO** |\n| **CNAME** | Apunta el subdominio a un alias de host (ej. server.iptvreseller.live) | **Redirección dinámica**. IP cambia sin caídas. | Resolución inicial mínima | **SÍ (100%)** |\n\n### 🛠️ Guía de Configuración de CNAME en Cloudflare\n1. Regístrese de manera gratuita en **Cloudflare** y agregue su dominio (ej. tu-marca.com).\n2. Vaya a la pestaña **DNS** y haga clic en **Add Record**.\n3. Configure los siguientes valores:\n   * **Type:** CNAME\n   * **Name:** portal (esto creará portal.tu-marca.com)\n   * **Target:** server.iptvreseller.live (o el alias asignado por nuestro soporte).\n   * **Proxy Status:** Seleccione *DNS Only* (gris) para evitar que Cloudflare bloquee flujos de video UDP/TCP que no sean estándar.\n4. Guarde el registro. La propagación DNS tardará menos de 10 minutos.\n\n### 🛡️ 12 Errores de Seguridad que Hacen que Hackeen tu Panel\n1. **Compartir la contraseña del panel administrador:** Use siempre contraseñas seguras y active la verificación en dos pasos (2FA).\n2. **Exponer puertos de API predeterminados:** Asegúrese de ocultar el puerto principal detrás de CNAMEs limpios.\n3. **No utilizar cifrado SSL/TLS:** Configure certificados SSL para que los inicios de sesión de sus clientes viajen encriptados a través de https://.\n4. **Falta de límites de velocidad (Rate Limiting) en solicitudes de API:** Evite que atacantes inunden su portal con consultas masivas.",
        faqs: [
          { q: "¿Puedo cambiar mi subdominio de portal después de estar activo?", a: "Sí, pero tenga en cuenta que si cambia el dominio del portal, tendrá que actualizar la configuración de los dispositivos de todos sus clientes activos." },
          { q: "¿Por qué Cloudflare debe estar en modo 'DNS Only' para transmisiones?", a: "El proxy normal de Cloudflare (nube naranja) está optimizado para sitios web HTTP estándar y bloquea la transmisión continua de datos de video." }
        ]
      },
      {
        id: "billing-whmcs-stripe-guide",
        title: "Guía de Facturación Automatizada y Entrega de Créditos: Configuración de WHMCS e Integración de Stripe",
        category: "Técnico",
        readTime: "9 min de lectura",
        excerpt: "Automatice los registros de clientes, renovaciones y entregas de créditos de IPTV usando WHMCS, configure pagos seguros de Stripe y compare PayPal vs Crypto.",
        seoTitle: "Automatizar IPTV con WHMCS y Stripe: Guía de Revendedor",
        seoDescription: "Guía de automatización de IPTV. Aprenda a integrar WHMCS para la entrega instantánea de créditos, configurar pasarelas de pago y Stripe sin bloqueos.",
        content: "Crear cuentas de usuario y renovar suscripciones de manera manual por WhatsApp a las 3:00 AM es insostenible si busca escalar su negocio de IPTV. Los revendedores exitosos automatizan el 100% de la facturación y la entrega de credenciales integrando **WHMCS** con pasarelas de pago como **Stripe**, **PayPal** y **Criptomonedas**.\n\n### 🛠️ Guía de Integración del Módulo IPTV en WHMCS\nWHMCS es el sistema de facturación y soporte líder. Siga estos pasos para configurar la creación automática de cuentas de IPTV:\n1. Suba los archivos de su módulo de IPTV de revendedor a su instalación de WHMCS en la ruta `/modules/servers/iptvreseller/`.\n2. En WHMCS, vaya a **Setup > Products/Services > Servers**. Haga clic en **Add New Server**, seleccione el módulo IPTV e ingrese la URL de su API de marca blanca y su clave de revendedor.\n3. Cree sus productos minoristas (ej. Plan 1 Mes, Plan 3 Meses, Plan 1 Año).\n4. En la pestaña **Module Settings** de su producto, elija el módulo IPTV, asocie el costo en créditos correspondiente (1, 3 o 12 créditos) y configure la acción en: **'Automatically setup the product as soon as the first payment is received'**.\n\n### 💳 Stripe vs PayPal vs Criptomonedas: Tabla Estratégica\n\n| Pasarela de Pago | Tasa de Conversión | Riesgo de Contracargo | Riesgo de Bloqueo | Recomendación Estratégica |\n| :--- | :---: | :---: | :---: | :--- |\n| **Stripe (Tarjetas)** | **Muy Alta** | Medio | Alto (Requiere configurar cuentas de alto riesgo) | Utilizar a través de procesadores de alto riesgo dedicados. |\n| **PayPal** | Alta | Alto (Los compradores abusan de disputas) | Medio | Limitar el uso solo a clientes VIP y recurrentes conocidos. |\n| **Criptomonedas (USDT)** | Baja | **Cero (Irreversible)** | **Inmune** | Ofrecer un 10% de descuento en pagos con Crypto para fomentar su uso. |\n\n### 🔄 Gestión Automatizada de Renovaciones y Alertas\nConfigure WHMCS para enviar recordatorios automáticos de facturación 5 días antes de que venza el servicio de su cliente. Si el cliente realiza el pago, WHMCS envía una solicitud API directa a su panel para **renovar automáticamente** la línea del usuario, garantizando un servicio sin interrupciones y sin requerir trabajo manual de su parte.",
        faqs: [
          { q: "¿Es legal vender IPTV a través de WHMCS?", a: "WHMCS es un software de facturación genérico legítimo. Su uso para automatizar su negocio de reventa de marca blanca es completamente legal y estándar en el sector." },
          { q: "¿Qué criptomoneda es mejor para aceptar pagos de IPTV?", a: "Se recomienda encarecidamente utilizar USDT (Tether) en la red TRC-20 por sus bajísimos costos de transacción y estabilidad de valor de $1.00 USD." }
        ]
      },
      {
        id: "xtream-api-integration-guide",
        title: "Guía de Integración de API de IPTV y Xtream Codes para Propietarios de Paneles",
        category: "Técnico",
        readTime: "7 min de lectura",
        excerpt: "Domine la arquitectura de la API de Xtream Codes. Aprenda a crear formularios de registro personalizados, consultar bases de datos y obtener enlaces de reproducción.",
        seoTitle: "API Xtream Codes Explicada para Desarrolladores | Fox IPTV Panels",
        seoDescription: "Guía de integración de la API de Xtream Codes. Aprenda a realizar solicitudes HTTP, consultar endpoints de canales y estructurar integraciones de reproductores.",
        content: "Para desarrolladores, propietarios de marcas blancas y revendedores avanzados, la integración directa con la **API de Xtream Codes** permite crear herramientas personalizadas de alto valor, como reproductores web, formularios automatizados de registro de pruebas y paneles de administración de facturas alternativos.\n\n### ⚙️ Arquitectura y Endpoints de la API\nLa API de Xtream Codes opera mediante peticiones HTTP GET y POST estándar que devuelven estructuras en formato JSON. A continuación, se detallan las llamadas fundamentales para su integración de software:\n\n#### 1. Autenticación Básica e Información de Suscripción:\n[CODE_START_HTTP]\nGET http://portal.sumarca.com:8080/player_api.php?username=CLIENTE_USER&password=CLIENTE_PASS\n[CODE_END]\n**Respuesta JSON Clave:**\n[CODE_START_JSON]\n{\n  \"user_info\": {\n    \"username\": \"cliente_user\",\n    \"status\": \"Active\",\n    \"exp_date\": \"1780158414\",\n    \"max_connections\": 1,\n    \"active_cons\": 0\n  },\n  \"server_info\": {\n    \"url\": \"portal.sumarca.com\",\n    \"port\": \"8080\"\n  }\n}\n[CODE_END]\n\n#### 2. Consulta de Canales en Vivo por Categoría:\n[CODE_START_HTTP]\nGET http://portal.sumarca.com:8080/player_api.php?username=CLIENTE_USER&password=CLIENTE_PASS&action=get_live_streams\n[CODE_END]\n\n#### 3. Obtención de URL M3U de Descarga Directa:\n[CODE_START_HTTP]\nGET http://portal.sumarca.com:8080/get.php?auth=CLIENTE_USER&auth_password=CLIENTE_PASS&output=ts\n[CODE_END]\n\n### ⚡ Prácticas Heurísticas de Alto Rendimiento para Desarrolladores\n*   **Implementación de Redis Caching:** Nunca realice llamadas a la API de Xtream Codes en tiempo real para cada visita a su sitio web o aplicación móvil. Guarde la lista de categorías y canales en una base de datos en caché local (ej. Redis) con una duración de 6 a 12 horas. De lo contrario, un pico de tráfico saturará la base de datos de su panel de IPTV, causando una denegación de servicio (DDoS autoinducido).\n*   **Tratamiento de Tiempos Epoch:** La API devuelve las fechas de vencimiento de suscripción en formato de marca de tiempo Unix (Epoch). Asegúrese de convertirlos mediante Javascript utilizando `new Date(exp_date * 1000)` para mostrarlos en formatos comprensibles para el usuario final.",
        faqs: [
          { q: "¿La API de Xtream Codes limita la cantidad de solicitudes diarias?", a: "Los paneles de administración modernos incluyen límites de velocidad configurables. Utilice la optimización de caché local para evitar ser bloqueado temporalmente por exceso de consultas." },
          { q: "¿Puedo obtener formatos HLS (m3u8) a través de la API?", a: "Sí. Cambiando el parámetro `output=ts` a `output=m3u8` en la consulta del archivo `get.php`, el servidor de IPTV generará automáticamente enlaces HLS compatibles con reproductores de iOS y Safari." }
        ]
      }
    ];
  }

  // 📝 Core Multilingual Master Templates (Highly optimized for French, Portuguese, Swedish, Norwegian)
  if (L === "fr") {
    return [
      {
        id: "start-iptv-reseller-business",
        title: "Comment lancer une activité de revendeur IPTV en 2026 (avec un investissement minimal)",
        category: "Affaires",
        readTime: "6 min de lecture",
        excerpt: "Apprenez à créer une entreprise de revente IPTV en marque blanche hautement rentable. Découvrez des stratégies d'acquisition de clients et de vente par WhatsApp.",
        seoTitle: "Comment Devenir Revendeur IPTV en 2026 | Fox IPTV Panels",
        seoDescription: "Guide étape par étape pour lancer votre entreprise de revente IPTV en France et en Europe. Tout savoir sur les crédits, les marges et le support WhatsApp.",
        content: "Lancer une entreprise d'abonnement numérique est l'un des meilleurs moyens de générer des revenus passifs récurrents en 2026. Avec un panneau de revendeur IPTV en marque blanche haut de gamme, vous n'avez pas besoin de dépenser des milliers d'euros dans des serveurs coûteux ou de gérer des bases de données complexes. En tant que revendeur, vous achetez des crédits en gros auprès d'un fournisseur majeur comme Fox IPTV Panels, accédez à un panneau d'administration élégant, et vendez des abonnements directement à vos clients.\n\n### 💰 Formule de Profit des Revendeurs IPTV\nVoici les projections financières types basées sur notre modèle de crédits de gros pour la France et la Belgique :\n\n| Pack Revendeur | Quantité de Crédits | Coût Unitaire | Prix de Vente Suggéré | Marge de Bénéfice Net |\n| :--- | :---: | :---: | :---: | :---: |\n| **Starter Pack** | 120 crédits | 1,00 € / crédit | 10,00 € / mois | **1 080 €** |\n| **Growth Pack** | 200 crédits | 0,90 € / crédit | 10,00 € / mois | **1 820 €** |\n| **Enterprise Pack** | 500 crédits | 0,70 € / crédit | 10,00 € / mois | **4 650 €** |\n\n### 🛠️ Plan d'action étape par étape\n1. **Achetez un pack de démarrage :** Commencez petit (ex. 120 crédits) pour tester la stabilité du flux sur les connexions locales (Orange, Free, SFR, Bouygues).\n2. **Maîtrisez le tableau de bord :** Apprenez à créer des connexions de test gratuites de 24 heures et à surveiller les connexions actives.\n3. **Configurez votre marque blanche :** Reliez votre propre nom de domaine personnalisé (ex. portal.votremarque.com) pour masquer le serveur parent.\n4. **Automatisez avec WhatsApp Business :** Utilisez WhatsApp comme principal canal d'assistance et configurez des messages d'accueil pour livrer les tests en 2 minutes.\n\n> [!TIP]\n> **Tactique CRO à haute conversion :** Offrez toujours un test de 24h. Les statistiques montrent que 78 % des clients qui testent un flux 4K stable sans buffering sur leur Firestick ou Smart TV souscrivent à un abonnement annuel.",
        faqs: [
          { q: "Quel est l'investissement initial requis ?", a: "Vous pouvez démarrer avec un investissement minime en achetant notre pack Starter de 120 crédits. Il n'y a aucun frais d'infrastructure ou de serveur caché." },
          { q: "Qu'est-ce qu'un crédit IPTV et comment s'utilise-t-il ?", a: "Les crédits sont la monnaie d'échange du panneau. Généralement, 1 crédit correspond à 1 mois d'abonnement pour un utilisateur. Créer une ligne de 12 mois débite 12 crédits de votre solde." }
        ]
      },
      {
        id: "credit-system-explained",
        title: "Le système de crédits IPTV pour les revendeurs expliqué : Guide complet",
        category: "Affaires",
        readTime: "5 min de lecture",
        excerpt: "Vous ne comprenez pas comment les crédits se traduisent en comptes clients actifs ? Lisez notre explication complète du système de facturation IPTV.",
        seoTitle: "Fonctionnement du Système de Crédits IPTV Revendeur | Fox IPTV Panels",
        seoDescription: "Explication claire du système de facturation de crédits IPTV. Découvrez la grille de conversion, les prix d'achat en gros et vos marges bénéficiaires.",
        content: "Le système de crédits est le fondement opérationnel de la vente en gros d'IPTV. Au lieu de payer des coûts de serveurs mensuels fixes, vous agissez comme une banque de crédits : vous achetez des crédits en bloc et les débitez à mesure que vous activez des lignes clients.\n\n### 🔄 Grille de Conversion des Crédits\nChaque compte activé dans votre panneau consomme des crédits selon la durée d'abonnement choisie :\n\n| Durée de l'Abonnement Client | Consommation de Crédits | Coût de Gros Moyen (0,90 €) | Prix Public Moyen | Votre Marge Bénéficiaire Nette |\n| :--- | :---: | :---: | :---: | :---: |\n| **Test de 24 Heures** | **0 crédit** (Gratuit) | 0,00 € | 0,00 € | Génération de Prospects |\n| **Abonnement 1 Mois** | **1 crédit** | 0,90 € | 10,00 € | **9,10 €** (1011% ROI) |\n| **Abonnement 3 Mois** | **3 crédits** | 2,70 € | 25,00 € | **22,30 €** (825% ROI) |\n| **Abonnement 12 Mois** | **12 crédits** | 10,80 € | 80,00 € | **69,20 €** (640% ROI) |\n\n> [!WARNING]\n> **Risque de Solde à Zéro :** Ne laissez jamais votre solde de crédits tomber à zéro. Conserver un tampon de 15 crédits vous garantit de pouvoir traiter les renouvellements automatiques de vos clients VIP à tout moment sans interruption.",
        faqs: [
          { q: "Est-ce que les crédits IPTV expirent ?", a: "Non. Chez Fox IPTV Panels, vos crédits achetés en gros restent actifs indéfiniment sur votre tableau de bord. Ils n'expireront jamais tant que vous ne les utilisez pas." },
          { q: "Puis-je transférer des crédits à d'autres revendeurs ?", a: "Oui. Si vous possédez une configuration de marque blanche avec des fonctions de sous-revendeur activées, vous pouvez distribuer des crédits à vos propres revendeurs." }
        ]
      },
      {
        id: "xtream-codes-vs-m3u",
        title: "API Xtream Codes vs Liens de Playlist M3U : Le guide technique de référence",
        category: "Technique",
        readTime: "7 min de lecture",
        excerpt: "Aidez vos clients à connecter facilement leurs appareils. Comparez la vitesse, la sécurité et la compatibilité des protocoles Xtream Codes et des fichiers M3U.",
        seoTitle: "Xtream Codes API vs M3U Playlist : Guide pour Revendeurs",
        seoDescription: "Comprendre les différences de performance et de sécurité entre l'API Xtream Codes et les liens de playlist M3U brute pour les connexions IPTV.",
        content: "Lors de la configuration des abonnements pour vos clients, vous ferez face à deux méthodes majeures de livraison des flux : l'**API Xtream Codes** et les liens **M3U**. Comprendre la différence technique est crucial pour limiter vos tickets de support.\n\n### 📊 Tableau de comparaison technique\n\n| Critère de Performance | API Xtream Codes | Lien de Playlist M3U Brute |\n| :--- | :---: | :---: |\n| **Méthode de connexion** | 3 champs simples (URL, User, Password) | Une seule chaîne URL très longue |\n| **Vitesse de chargement** | **Instantanée** (<0.5 seconde) | Lente (chargement lourd de fichiers de 30s) |\n| **Masquage du DNS** | Très simple (protège le serveur parent) | Difficile (expose les chemins réels du serveur) |\n| **Mise à jour automatique** | Oui (synchronisation fluide des chaines) | Non (nécessite un rechargement manuel continu) |\n\n> [!NOTE]\n> Ne donnez jamais de liens M3U bruts à vos clients. Ils exposent vos serveurs d'origine en texte clair, ce qui permet à des personnes malveillantes de cloner vos flux ou de saturer votre bande passante.",
        faqs: [
          { q: "Pourquoi l'API Xtream Codes est-elle plus rapide ?", a: "Elle interroge directement la base de données du panneau via JSON, tandis que les fichiers M3U forcent le lecteur à télécharger l'intégralité d'un document texte volumineux." },
          { q: "L'API Xtream Codes fonctionne-t-elle sur Firestick ?", a: "Oui, elle est parfaitement prise en charge par les applications phares comme IPTV Smarters Pro, XCIPTV et TiviMate." }
        ]
      },
      {
        id: "white-label-panel-branding",
        title: "Panneaux IPTV en marque blanche : Créez votre propre marque de streaming",
        category: "Marque",
        readTime: "5 min de lecture",
        excerpt: "Prêt à voir plus grand ? Découvrez comment les portails DNS personnalisés et la marque blanche vous permettent de recruter des sous-revendeurs sous votre marque.",
        seoTitle: "IPTV en Marque Blanche : Lancer votre Marque | Fox IPTV Panels",
        seoDescription: "Créez votre propre empire IPTV. Guide pour configurer des sous-panneaux, relier des noms de domaine et vendre des crédits à vos propres distributeurs.",
        content: "Le panneau en **Marque Blanche (White Label)** est l'ultime étape pour transformer votre simple activité secondaire en une marque commerciale majeure de streaming. Il vous permet de masquer entièrement notre infrastructure technique et de revendre sous votre nom propre.\n\n### 🚀 Comment recruter des sous-revendeurs\nRecruter des sous-revendeurs est le moyen le plus efficace de générer des revenus 100 % passifs :\n1. Créez un compte revendeur depuis votre panneau administrateur de marque blanche.\n2. Attribuez-lui un lot de crédits (ex. 100 crédits qui vous ont coûté 0,70 € pièce).\n3. Vendez le pack à votre sous-revendeur à 1,50 € le crédit.\n4. Votre sous-revendeur les vendra ensuite à 10,00 € à ses clients de détail. **Vous empochez une marge passive à chaque fois qu'il active une ligne !**",
        faqs: [
          { q: "Faut-il savoir coder pour lancer un panneau en marque blanche ?", a: "Non. Notre équipe technique s'occupe de toute la configuration côté serveur. Vous devez simplement posséder un nom de domaine et configurer une redirection CNAME." },
          { q: "Puis-je personnaliser le logo du panneau d'administration ?", a: "Oui. Le panneau en marque blanche complet vous permet de charger votre logo, vos liens de contact et vos chartes de couleurs." }
        ]
      },
      {
        id: "dns-portal-setup-guide",
        title: "Configuration de domaines DNS personnalisés pour l'IPTV (CNAME, Cloudflare & Sécurité)",
        category: "Technique",
        readTime: "8 min de lecture",
        excerpt: "Apprenez à lier des portails de sous-domaine personnalisés, configurer CNAME vs Registres A, utiliser Cloudflare, et sécuriser votre panneau d'administration.",
        seoTitle: "Configurer son Domaine de Portail IPTV : Guide DNS CNAME 2026",
        seoDescription: "Guide technique pour paramétrer un sous-domaine DNS. CNAME vs A Records, sécurité Cloudflare et prévention du piratage de votre panneau.",
        content: "Remplacer les adresses IP et les ports bruts du serveur par un sous-domaine élégant (ex. portal.votremarque.com) est indispensable pour bâtir une relation de confiance et protéger vos flux.\n\n### 📡 CNAME vs Registres A : L'évaluation technique\n\n| Type de Registre DNS | Destination de pointage | Avantage technique | Risque de panne IPTV | Recommandé ? |\n| :--- | :--- | :--- | :--- | :---: |\n| **A Record** | Adresse IP Statique (ex. 192.0.2.1) | Résolution DNS rapide | **Élevé**. Si l'IP du serveur change, tous vos clients perdent la connexion. | **NON** |\n| **CNAME Record** | Alias Canonique (ex. server.iptvreseller.live) | **Failover Dynamique**. Si le serveur change d'IP, vos clients restent connectés. | Délai de requête infime | **OUI (100%)** |\n\n### 🛠️ Configuration CNAME étape par étape sur Cloudflare\n1. Créez un compte gratuit sur **Cloudflare** et liez votre domaine (ex. votremarque.com).\n2. Ouvrez l'onglet **DNS** et cliquez sur **Add Record**.\n3. Configurez les champs suivants :\n   * **Type :** CNAME\n   * **Name :** portal (pour obtenir `portal.votremarque.com`)\n   * **Target :** server.iptvreseller.live (ou l'alias fourni par notre support).\n   * **Proxy Status :** Basculez sur **DNS Only** (nuage gris). *Important : laisser le proxy actif (nuage orange) bloque le trafic vidéo.*",
        faqs: [
          { q: "Puis-je utiliser un sous-domaine pour mes clients et un autre pour mes revendeurs ?", a: "Oui, Cloudflare vous permet de configurer plusieurs alias CNAME pointant vers le même serveur pour séparer vos flux de trafic." },
          { q: "Pourquoi le proxy de Cloudflare bloque-t-il l'IPTV ?", a: "Le proxy de Cloudflare est conçu pour optimiser les requêtes web HTTP standard et interrompt les connexions de flux vidéo continu (streaming)." }
        ]
      },
      {
        id: "billing-whmcs-stripe-guide",
        title: "Automatisation de la facturation IPTV : Configuration de WHMCS et Stripe",
        category: "Technique",
        readTime: "9 min de lecture",
        excerpt: "Automatisez la création de comptes, les renouvellements et l'envoi de crédits en intégrant WHMCS avec Stripe, PayPal et les crypto-monnaies.",
        seoTitle: "Automatiser l'IPTV avec WHMCS et Stripe : Guide complet",
        seoDescription: "Méthode pas à pas pour connecter WHMCS à votre panneau IPTV. Envoi de crédits automatisé, Stripe haut risque et sécurité des paiements.",
        content: "Gérer les renouvellements de vos clients manuellement par WhatsApp au milieu de la nuit bloque votre croissance. Les plus grands revendeurs automatisent 100 % du cycle de vente en intégrant **WHMCS** à des solutions de paiement sécurisées comme **Stripe**, **PayPal** et les **cryptomonnaies**.\n\n### 🛠️ Guide d'intégration du module IPTV dans WHMCS\nWHMCS est l'outil phare pour la gestion des services d'hébergement et d'abonnements. Voici comment lier votre panneau de revente :\n1. Uploadez les fichiers du module IPTV de votre revendeur dans le répertoire `/modules/servers/iptvreseller/` de votre serveur WHMCS.\n2. Dans l'administration WHMCS, allez dans **Setup > Products/Services > Servers**. Cliquez sur **Add New Server**, sélectionnez le module IPTV et entrez vos clés d'API.\n3. Configurez vos produits (ex. Formule 1 Mois, 3 Mois, 12 Mois).\n4. Dans l'onglet **Module Settings**, associez la consommation de crédits correspondante (1, 3, ou 12) et cochez : **'Automatically setup the product as soon as the first payment is received'**.",
        faqs: [
          { q: "L'automatisation via WHMCS est-elle compliquée ?", a: "Non. Une fois configuré, le système fonctionne de manière autonome : le client paie sur votre site, WHMCS crée la ligne et lui envoie ses identifiants par e-mail en 10 secondes." },
          { q: "Quelle cryptomonnaie est recommandée pour les paiements ?", a: "Utilisez l'USDT (Tether) sur le réseau TRC-20 (Tron) pour sa stabilité parfaite de valeur et ses frais de réseau inférieurs à 1,00 €." }
        ]
      },
      {
        id: "xtream-api-integration-guide",
        title: "Guide de développement de l'API de Xtream Codes pour propriétaires de portails",
        category: "Technique",
        readTime: "7 min de lecture",
        excerpt: "Comprenez l'architecture de l'API Xtream Codes. Apprenez à créer des formulaires d'essai automatisés et à interroger la liste des chaines.",
        seoTitle: "API Xtream Codes : Documentation pour Développeurs",
        seoDescription: "Comment requêter l'API Xtream Codes. Exemples de requêtes HTTP, formats JSON et mise en cache avec Redis pour éviter les crashs.",
        content: "Pour les développeurs et les marques blanches avancées, interroger directement l'**API de Xtream Codes** permet de coder des applications sur mesure (lecteurs Web, portails de tests automatisés, applications mobiles personnalisées).\n\n### ⚙️ Architecture technique et requêtes de l'API\nL'API Xtream Codes utilise des requêtes HTTP GET/POST simples renvoyant des objets JSON structurés.\n\n#### 1. Authentification & Infos de ligne d'abonnement :\n[CODE_START_HTTP]\nGET http://portal.votremarque.com:8080/player_api.php?username=CLIENT_USER&password=CLIENT_PASS\n[CODE_END]\n**Réponse JSON reçue :**\n[CODE_START_JSON]\n{\n  \"user_info\": {\n    \"username\": \"client_user\",\n    \"status\": \"Active\",\n    \"exp_date\": \"1780158414\",\n    \"max_connections\": 1,\n    \"active_cons\": 0\n  },\n  \"server_info\": {\n    \"url\": \"portal.votremarque.com\",\n    \"port\": \"8080\"\n  }\n}\n[CODE_END]\n\n### ⚡ Heuristiques de haute performance pour développeurs\n*   **Mise en cache obligatoire (Redis) :** Ne lancez jamais de requêtes API Xtream Codes en direct à chaque visite sur votre application. Stockez les listes de chaînes et de catégories dans un cache Redis local d'une durée de 12 heures. Sinon, des requêtes simultanées de centaines de clients bloqueront la base de données de votre serveur, provoquant une attaque par déni de service (DDoS) auto-induite.",
        faqs: [
          { q: "L'API limite-t-elle le nombre de requêtes ?", a: "Oui, la plupart des serveurs possèdent des barrières contre les surcharges. Utiliser une couche de mise en cache locale protège votre compte de tout bannissement temporaire." },
          { q: "Puis-je récupérer les flux au format HLS (m3u8) ?", a: "Oui. En remplaçant le paramètre `output=ts` par `output=m3u8` dans vos requêtes, le serveur convertira dynamiquement les flux pour les rendre compatibles avec Safari et iOS." }
        ]
      }
    ];
  }

  if (L === "pt") {
    return [
      {
        id: "start-iptv-reseller-business",
        title: "Como iniciar um negócio de revenda IPTV em 2026 (com investimento mínimo)",
        category: "Negócio",
        readTime: "6 min de leitura",
        excerpt: "Aprenda a estabelecer um negócio de revenda IPTV de marca branca altamente lucrativo. Descubra estratégias de atração de clientes e como vender pelo WhatsApp.",
        seoTitle: "Como Iniciar um Negócio de Revenda IPTV em 2026 | Fox IPTV Panels",
        seoDescription: "Guia passo a passo para criar o seu negócio de revenda IPTV em Portugal. Saiba tudo sobre créditos de revendedor, margens de lucro e suporte pelo WhatsApp.",
        content: "Lançar um negócio de subscrição digital é uma das formas mais seguras de obter rendimentos passivos recorrentes em 2026. Com um painel de revendedor IPTV em marca branca premium, não necessita de investir milhares de euros em servidores de streaming caros ou bases de dados complexas. Como revendedor, compra créditos em lote a um fornecedor maiorista como a Fox IPTV Panels, acede a um painel elegante de administração e vende subscrições diretamente aos seus clientes finais.\n\n### 💰 Projeção de Margens de Lucros IPTV\nEis um modelo padrão de rendimentos com base no nosso sistema maiorista de créditos para o mercado português e europeu:\n\n| Pacote Revendedor | Quantidade de Créditos | Custo por Crédito | Preço de Venda Sugerido | Margem de Lucro Neto |\n| :--- | :---: | :---: | :---: | :---: |\n| **Starter Pack** | 120 créditos | 1,00 € / crédito | 10,00 € / mês | **1.080 €** |\n| **Growth Pack** | 200 créditos | 0,90 € / crédito | 10,00 € / mes | **1.820 €** |\n| **Enterprise Pack** | 500 créditos | 0,70 € / crédito | 10,00 € / mes | **4.650 €** |\n\n### 🛠️ Manual de Passos para Começar\n1. **Comprar um pacote inicial:** Comece pequeno (ex. 120 créditos) para testar a qualidade dos canais nas operadoras locais (MEO, NOS, Vodafone).\n2. **Aprender as funções do painel:** Saiba como criar contas de clientes, gerar testes grátis de 24 horas e verificar utilizadores online.\n3. **Configuração de marca branca:** Direcione o seu domínio próprio (ex. portal.suamarca.com) para o servidor principal, ocultando o fornecedor original.\n4. **Configurar Atendimento por WhatsApp:** Use o WhatsApp Business com respostas rápidas e mensagens de boas-vindas automatizadas para fechar vendas em minutos.\n\n> [!TIP]\n> **Estratégia de Vendas (CRO):** Disponibilize sempre testes grátis de 24 horas. Cerca de 78% dos clientes que testam uma linha 4K ultra estável e sem travamentos na sua Smart TV ou Firestick convertem para uma subscrição anual.",
        faqs: [
          { q: "Qual o investimento inicial necessário?", a: "Pode começar com um valor muito reduzido adquirindo o nosso pack Starter de 120 créditos. Não existem custos mensais de servidores ou taxas de configuração ocultas." },
          { q: "O que é um crédito IPTV e como funciona?", a: "Os créditos são a moeda do painel. Tipicamente, 1 crédito equivale a 1 mês de serviço para 1 utilizador. Ativar um plano de 12 meses deduzirá 12 créditos do seu saldo." }
        ]
      },
      {
        id: "credit-system-explained",
        title: "O sistema de créditos de revenda IPTV explicado: Guia para distribuidores",
        category: "Negócio",
        readTime: "5 min de leitura",
        excerpt: "Tem dúvidas sobre como os créditos se transformam em contas de clientes ativas? Leia a nossa análise completa da estrutura de cobrança da IPTV.",
        seoTitle: "Como Funciona o Sistema de Créditos IPTV Reseller | Fox IPTV Panels",
        seoDescription: "Guia completo de faturamento de créditos IPTV para revendedores. Entenda as conversões de pacotes, custos maioristas e margens brutas.",
        content: "O sistema de créditos é o motor comercial da revenda maiorista de IPTV. Em vez de pagar taxas de servidores fixas por mês, funciona como um banco: compra créditos por grosso e abate-os à medida que ativa contas de utilizadores em tempo real.\n\n### 🔄 Matriz de Conversão de Créditos\nCada utilizador ativado no seu painel consome créditos de acordo com a duração da subscrição selecionada:\n\n| Plano do Cliente | Consumo de Créditos | Custo Maiorista Médio (0,90 €) | Preço de Venda Médio | A Sua Margem de Lucro Líquido |\n| :--- | :---: | :---: | :---: | :---: |\n| **Teste de 24 Horas** | **0 créditos** (Grátis) | 0,00 € | 0,00 € | Captação de Leads |\n| **Plano de 1 Mês** | **1 crédito** | 0,90 € | 10,00 € | **9,10 €** (1011% ROI) |\n| **Plano de 3 Meses** | **3 créditos** | 2,70 € | 25,00 € | **22,30 €** (825% ROI) |\n| **Plano de 12 Meses** | **12 créditos** | 10,80 € | 80,00 € | **69,20 €** (640% ROI) |\n\n> [!WARNING]\n> **Controlo do Saldo de Segurança:** Nunca deixe o seu saldo de créditos chegar a zero. Guardar um limite mínimo de 15 créditos assegura que consegue realizar renovações automáticas de clientes importantes a qualquer hora sem bloqueios de faturamento.",
        faqs: [
          { q: "Os créditos de revendedor IPTV têm data de validade?", a: "Não. Na Fox IPTV Panels, os seus créditos maioristas adquiridos permanecem na sua conta de revendedor por tempo ilimitado. Nunca expiram." },
          { q: "Posso transferir créditos para outros sub-revendedores?", a: "Sim. Se tiver um plano de marca branca ativo com a funcionalidade de sub-revenda configurada, poderá transferir blocos de créditos diretamente para eles." }
        ]
      },
      {
        id: "xtream-codes-vs-m3u",
        title: "API Xtream Codes vs Listas de Reprodução M3U: Qual escolher?",
        category: "Técnico",
        readTime: "7 min de leitura",
        excerpt: "Ajude os seus clientes a ligarem os seus dispositivos de forma simples. Compare a velocidade, segurança e estabilidade do Xtream Codes vs M3U.",
        seoTitle: "Xtream Codes API vs M3U Playlist: Guia Completo de IPTV",
        seoDescription: "Análise técnica comparando conexões via API Xtream Codes e listas M3U brutas. Descubra qual oferece menor suporte técnico e maior segurança.",
        content: "Ao ligar os dispositivos dos seus clientes finais, deparar-se-á com dois métodos fundamentais de transmissão: a **API Xtream Codes** e as **listas M3U**. Conhecer os pontos fortes de cada um define a estabilidade do serviço e o volume de suporte que terá de prestar.\n\n### 📊 Comparação Técnica Direta\n\n| Atributo de Desempenho | API Xtream Codes | Lista de Reprodução M3U Bruta |\n| :--- | :---: | :---: |\n| **Método de Ligação** | 3 campos (Portal, Utilizador, Senha) | Link longo alfanumérico difícil de digitar |\n| **Velocidade de Carga** | **Instantanêa** (<0.5 segundos) | Lenta (download de ficheiro de texto pesado de 30s) |\n| **Ocultação de Servidor**| Excelente (mascara o domínio original) | Muito fraca (URL expõe IPs e portas do servidor) |\n| **Sincronização de Canais**| Automática e dinâmica | Manual (requer reimportar a lista regularmente) |\n\n> [!NOTE]\n> Evite partilhar links M3U com os clientes. Os links M3U contêm as credenciais em texto limpo e expõem diretamente a infraestrutura do seu servidor de IPTV, facilitando clones e pirataria.",
        faqs: [
          { q: "Por que a API Xtream Codes é superior ao M3U?", a: "Ela consulta bases de dados de forma ágil via JSON estruturado, garantindo uma abertura de canais imediata em Smart TVs e Firesticks." },
          { q: "A API Xtream Codes funciona na aplicação TiviMate?", a: "Sim, o TiviMate tem total compatibilidade com a API Xtream Codes e é altamente recomendado para TV Boxes pela sua fluidez." }
        ]
      },
      {
        id: "white-label-panel-branding",
        title: "Painéis IPTV de marca branca: Desenvolva o seu negócio próprio",
        category: "Marca",
        readTime: "5 min de leitura",
        excerpt: "Deseja crescer e escalar? Saiba como a marca branca e o enrutamento DNS próprio lhe permitem vender painéis a sub-revendedores sob o seu nome comercial.",
        seoTitle: "Painel de Revenda IPTV Marca Branca | Fox IPTV Panels",
        seoDescription: "Aprenda a criar a sua própria marca de IPTV. Ativação de sub-painéis de revenda, configurações de DNS próprio e ocultação total de servidores.",
        content: "O painel em **Marca Branca (White Label)** é o degrau mais alto na escala da revenda de IPTV. Permite ocultar completamente as origens dos fluxos técnicos e criar a sua própria marca corporativa com logótipos e preçários próprios.\n\n### 🚀 Como Recrutar Sub-Revendedores\nA grande vantagem da marca branca é poder criar **Sub-Painéis** para gerar lucros automáticos:\n1. Aceda ao seu painel administrador de marca branca e crie uma conta de revendedor.\n2. Adicione-lhe um pacote de créditos (ex. 100 créditos que lhe custaram 0,70 € por unidade).\n3. Venda esse lote ao seu sub-revendedor por 1,50 € por crédito.\n4. Ele venderá ao retalho a 10,00 €. **Você ganha um lucro passivo por cada crédito que eles ativarem sem ter de fazer suporte técnico !**",
        faqs: [
          { q: "Preciso de saber programar para ter um painel marca branca?", a: "Não. A Fox IPTV Panels realiza toda a instalação no servidor. Apenas necessita de registar um domínio e gerir as entradas DNS." },
          { q: "Posso carregar um logótipo próprio no painel de controlo?", a: "Sim. A configuração de marca branca completa permite-lhe gerir logótipos, esquemas de cores e links de redes sociais." }
        ]
      },
      {
        id: "dns-portal-setup-guide",
        title: "Personalização de DNS de IPTV e Configuração de Dominio CNAME Cloudflare",
        category: "Técnico",
        readTime: "8 min de leitura",
        excerpt: "Aprenda a apontar subdomínios DNS personalizados (portal.tuamarca.com), CNAME vs Registos A, segurança Cloudflare e proteção anti-ataque.",
        seoTitle: "Configurar Subdomínio de Portal IPTV: Guia CNAME 2026",
        seoDescription: "Guía técnica para apontar subdomínios DNS. Aprenda a configurar CNAME, ativar proteção SSL e manter o painel de revendedor seguro contra bots.",
        content: "Substituir os endereços IP e as portas brutas por um subdomínio próprio (ex. portal.suamarca.com) é o primeiro passo para obter segurança contra bloqueios e profissionalizar a sua marca.\n\n### 📡 CNAME vs Registos A: Comparativo de Resolução\n\n| Entrada DNS | Alvo do Apontamento | Vantagem de Redirecionamento | Riscos em Fluxos IPTV | Recomendado? |\n| :--- | :--- | :--- | :--- | :---: |\n| **Registo A** | Endereço IP Fixo (ex. 192.0.2.1) | Resolução instantânea | **Elevado**. Se o IP do servidor mudar, todos os seus portais caem. | **NO** |\n| **CNAME** | Endereço Alias Host (ex. server.iptvreseller.live) | **Redireção Dinâmica**. Se a IP mudar, o domínio resolve sozinho. | Tempo de consulta mínimo | **SIM (100%)** |\n\n### 🛠️ Configurar um CNAME de forma simples na Cloudflare\n1. Registe-se na plataforma **Cloudflare** (plano gratuito é suficiente) e insira o seu domínio.\n2. Clique no separador **DNS** e adicione um registo (Add Record).\n3. Complete os campos da seguinte forma:\n   * **Type:** CNAME\n   * **Name:** portal (para gerar `portal.suamarca.com`)\n   * **Target:** server.iptvreseller.live (ou o alias do servidor atribuído por nós).\n   * **Proxy Status:** Desative a nuvem (mantenha em **DNS Only** / nuvem cinzenta). *Atenção: A nuvem laranja ativa filtra e bloqueia o tráfego contínuo de vídeo.*",
        faqs: [
          { q: "Posso gerir vários subdomínios diferentes para portais?", a: "Sim. A Cloudflare permite-lhe criar diversos apontamentos CNAME para gerir diferentes marcas ou sub-revendedores." },
          { q: "Porque é que o Proxy da Cloudflare interfere no IPTV?", a: "O proxy Cloudflare está parametrizado para páginas Web clássicas baseadas em cache estática e rejeita ligações contínuas de vídeo (UDP/TCP)." }
        ]
      },
      {
        id: "billing-whmcs-stripe-guide",
        title: "Automação de Faturação e Entregas: Módulo IPTV WHMCS e Pasarela Stripe",
        category: "Técnico",
        readTime: "9 min de leitura",
        excerpt: "Automatize a criação de contas de utilizadores, faturas e renovações de créditos através da integração do WHMCS com Stripe e PayPal.",
        seoTitle: "Automação de IPTV com WHMCS e Stripe: Manual de Revenda",
        seoDescription: "Saiba como automatizar o seu negócio IPTV de marca branca. Módulo WHMCS de ativação direta de créditos, segurança de pagamentos e Stripe.",
        content: "Criar utilizadores no painel à mão a qualquer hora do dia ou da noite impede qualquer negócio de crescer. Os revendedores líderes de mercado automatizam todas as cobranças integrando o sistema de gestão **WHMCS** com pasarelas seguras como **Stripe**, **PayPal** e **Criptomoedas**.\n\n### 🛠️ Configurar o Módulo de Revenda IPTV no WHMCS\nO WHMCS é o painel de faturamento mais robusto do mercado. Siga estes passos para configurar a entrega automática de contas:\n1. Coloque os ficheiros do seu módulo IPTV na pasta do seu servidor em `/modules/servers/iptvreseller/`.\n2. Na administração do WHMCS, vá a **Setup > Products/Services > Servers**. Clique em **Add New Server**, selecione o módulo IPTV e insira os dados da API do seu sub-painel.\n3. Crie os seus pacotes (ex. Plano 1 Mês, 3 Meses, 12 Meses).\n4. Aceda ao separador **Module Settings** do produto, escolha o módulo IPTV, defina o número de créditos consumidos (1, 3 ou 12) e escolha a opção : **'Automatically setup the product as soon as the first payment is received'**.",
        faqs: [
          { q: "É dispendioso adquirir uma licença do WHMCS?", a: "Não. A licença básica do WHMCS tem custos reduzidos e o investimento compensa imediatamente ao reduzir perdas de vendas por atrasos de ativação manual." },
          { q: "Qual a melhor criptomoeda para pagamentos de IPTV?", a: "É altamente recomendado aceitar pagamentos com USDT na rede TRC-20 (Tron), devido à sua estabilidade de preço fixa a $1.00 USD e custos de taxa de rede inferiores a $1.00." }
        ]
      },
      {
        id: "xtream-api-integration-guide",
        title: "Manual de Integração da API Xtream Codes para Programadores e Donos de Painel",
        category: "Técnico",
        readTime: "7 min de leitura",
        excerpt: "Domine a arquitetura da API Xtream Codes. Aprenda a programar formulários de testes diretos e consultar listas de canais em JSON.",
        seoTitle: "API Xtream Codes: Integração e Endpoints para Desenvolvedores",
        seoDescription: "Manual de chamadas de API do painel Xtream Codes. Exemplos HTTP, payloads JSON e otimizações de cache Redis para programadores.",
        content: "Para engenheiros de software e parceiros de marca branca avançados, comunicar de forma programática com a **API do Xtream Codes** permite construir portais próprios, leitores de vídeo e apps personalizadas para dispositivos móveis.\n\n### ⚙️ Endpoints e Estrutura JSON de API\nA API responde a chamadas GET e POST devolvendo dados em formato JSON limpo e estruturado.\n\n#### 1. Verificação de Dados de Linhas e Contas:\n[CODE_START_HTTP]\nGET http://portal.suamarca.com:8080/player_api.php?username=CLIENTE_USER&password=CLIENTE_PASS\n[CODE_END]\n**Resposta JSON:**\n[CODE_START_JSON]\n{\n  \"user_info\": {\n    \"username\": \"client_user\",\n    \"status\": \"Active\",\n    \"exp_date\": \"1780158414\",\n    \"max_connections\": 1,\n    \"active_cons\": 0\n  },\n  \"server_info\": {\n    \"url\": \"portal.suamarca.com\",\n    \"port\": \"8080\"\n  }\n}\n[CODE_END]\n\n### ⚡ Heurísticas de Alto Rendimento para Sistemas de Larga Escala\n*   **Uso Obrigatório de Redis Cache:** Nunca faça chamadas diretas à API Xtream Codes a cada visualização de página na sua app. Desenvolva uma camada de cache local (utilizando Redis ou Memcached) com expiração de 12 horas. Sem este cache, se tiver centenas de clientes online em simultâneo, o servidor de IPTV irá travar devido ao excesso de conexões na base de dados.",
        faqs: [
          { q: "A API do Xtream Codes tem limites de chamadas?", a: "Sim, os servidores de IPTV integram bloqueios de segurança contra inundações de consultas. A cache local é vital para evitar ser banido temporariamente por flood de chamadas." },
          { q: "Consigo puxar o link em formato HLS (m3u8)?", a: "Sim. Se ajustar o parâmetro final `output=ts` para `output=m3u8` na chamada da rota `get.php`, o painel processará o streaming em formato HLS para iOS e navegadores Safari." }
        ]
      }
    ];
  }

  if (L === "sv" || L === "no") {
    const isNo = L === "no";
    const curr = isNo ? "kr" : "kr";
    const curName = isNo ? "norske kroner" : "svenska kronor";
    const ispList = isNo ? "Telenor, Telia, Altibox och Ice" : "Telia, Tele2, Telenor och Tre";
    const titleTerm = isNo ? "Strømmingsvirksomhet" : "Streaming Empire";
    const billingTerm = isNo ? "Fakturering" : "Fakturering";
    
    return [
      {
        id: "start-iptv-reseller-business",
        title: isNo 
          ? "Slik starter du som IPTV-forhandler i 2026 (med minimal investering)" 
          : "Hur du startar som IPTV-återförsäljare i 2026 (med minimal investering)",
        category: isNo ? "Bedrift" : "Affärer",
        readTime: isNo ? "6 min lesing" : "6 min läsning",
        excerpt: isNo 
          ? "Lær å etablere en lønnsom IPTV-forhandlervirksomhet under eget merkenavn. Oppdag salgsstrategier på WhatsApp."
          : "Lär dig att etablera en mycket lönsam IPTV-återförsäljarverksamhet under eget varumärke. Upptäck kundanskaffning via WhatsApp.",
        seoTitle: isNo 
          ? "Start som IPTV Forhandler i Norge 2026 | Fox IPTV Panels"
          : "Starta IPTV Återförsäljarföretag i Sverige 2026 | Fox IPTV Panels",
        seoDescription: isNo
          ? "Steg-for-steg-guide til å starte din egen strømmebedrift i Norge. Lær om kreditter, profittmarginer og oppsett."
          : "Steg-för-steg-guide till att starta eget IPTV-företag i Sverige. Lär dig om krediter, vinstmarginaler och drift.",
        content: isNo
          ? "Å starte en digital abonnementsbedrift er en av de beste måtene å generere passive, gjentakende inntekter på i 2026. Med et premium white-label IPTV-forhandlerpanel slipper du å investere tusenvis av kroner i dyre servere eller kompliserte databaser. Du kjøper forhandlerkreditter i bulk fra en grossist som Fox IPTV Panels, får tilgang til et elegant dashboard, og selger strømmetjenester direkte til sluttkundene dine.\n\n### 💰 Profittkalkyle for Forhandlere\nHer er en standard oversikt over potensielle inntekter basert på vårt kredittsystem:\n\n| Forhandlernivå | Antall Kreditter | Kostnad per Kreditt | Foreslått Utsalgspris | Netto Fortjeneste |\n| :--- | :---: | :---: | :---: | :---: |\n| **Starter Pack** | 120 kreditter | 10 kr / kreditt | 100 kr / mnd | **10 800 kr** |\n| **Growth Pack** | 200 kreditter | 9 kr / kreditt | 100 kr / mnd | **18 200 kr** |\n| **Enterprise Pack** | 500 kreditter | 7 kr / kreditt | 100 kr / mnd | **46 500 kr** |\n\n> [!TIP]\n> **Høykonverterende CRO-taktikk:** Tilby alltid en 24-timers gratis prøveperiode. Caching og optimalisering på våre servere gir lynrask oppstart på norske nettverk (Telenor, Telia, Altibox)."
          : "Att starta en digital prenumerationsverksamhet är ett av de bästa sätten att säkra återkommande passiva intäkter 2026. Med en premium återförsäljarpanel under eget varumärke slipper du lägga dyra pengar på streaming-hårdvara eller underhåll av servrar. Du köper återförsäljarkrediter i bulk från en grossist som Fox IPTV Panels, loggar in på en snygg kontrollpanel, och säljer abonnemang till dina kunder.\n\n### 💰 Vinstkalkyl för Återförsäljare\nHär är en tydlig vinstberäkning baserad på vårt grossistsystem för krediter:\n\n| Återförsäljarnivå | Kvantitet Krediter | Kostnad per Kredit | Rekommenderat Pris | Netto Vinstmarginal |\n| :--- | :---: | :---: | :---: | :---: |\n| **Starter Pack** | 120 krediter | 10 kr / kredit | 100 kr / mån | **10 800 kr** |\n| **Growth Pack** | 200 krediter | 9 kr / kredit | 100 kr / mån | **18 200 kr** |\n| **Enterprise Pack** | 500 krediter | 7 kr / kredit | 100 kr / mån | **46 500 kr** |\n\n> [!TIP]\n> **Effektiv CRO-taktik:** Erbjud alltid 24 timmars gratis prov. 78 % av alla användare som testar en stabil, buffringsfri 4K-ström på sin Firestick på svenska nätverk (Telia, Tele2, Telenor) väljer att köpa ett årsabonnemang.",
        faqs: [
          { q: isNo ? "Hvor mye koster det å starte?" : "Hur mycket kostar det att starta?", a: isNo ? "Du kan starte med minimal risiko ved å bestille vår Starter Pack med 120 kreditter. Ingen skjulte kostnader." : "Du kan starta med låg risk genom att köpa vårt Starter Pack med 120 krediter. Inga månatliga avgifter." }
        ]
      },
      {
        id: "credit-system-explained",
        title: isNo ? "IPTV-kredittsystemet forklart: Den komplette guiden" : "Kreditsystemet för IPTV Återförsäljare Förklarat: Komplett Guide",
        category: isNo ? "Bedrift" : "Affärer",
        readTime: "5 min",
        excerpt: isNo ? "Lurer du på hvordan kreditter fungerer? Les vår grundige gjennomgang av betalingsmodellen." : "Fundersam på hur krediter fungerar? Läs vår detaljerade sammanställning av affärsmodellen.",
        seoTitle: isNo ? "Slik fungerer IPTV kreditter | Fox IPTV Panels" : "IPTV Krediter Förklaring 2026 | Fox IPTV Panels",
        seoDescription: isNo ? "En grundig innføring i fatureringsmodellen for IPTV-forhandlere. Lær om konverteringer." : "Lär dig allt om krediter, vinstmarginaler och hur du hanterar ditt saldo.",
        content: isNo
          ? "Kredittsystemet er selve ryggraden i IPTV-forhandlerbransjen. Istedenfor å betale månedlige serveravgifter per kunde, fungerer du som din egen bank: du kjøper kreditter i bulk, og belastes kun når du oppretter nye tilkoblinger i sanntid.\n\n### 🔄 Konverteringsmatrise\nHver konto du oppretter belaster saldoen din basert på abonnementsperioden:\n\n| Kundens abonnement | Kredittforbruk | Kostnad (Wholesale) | Utsalgspris (Retail) | Din Nettogevinst |\n| :--- | :---: | :---: | :---: | :---: |\n| **1 Måned** | **1 kreditt** | 9 kr | 100 kr | **91 kr** (1011% ROI) |\n| **3 Måneder** | **3 kreditter** | 27 kr | 250 kr | **223 kr** (825% ROI) |\n| **12 Måneder** | **12 kreditter** | 108 kr | 800 kr | **692 kr** (640% ROI) |"
          : "Kreditsystemet är grundpelaren i grossistledet för IPTV. Istället för fasta månatliga driftskostnader fungerar du som en bank: du köper ett saldo av krediter och debiteras först när du aktiverar en kundanslutning i realtid.\n\n### 🔄 Konverteringsmatris\nVarje konto du skapar drar krediter från ditt saldo baserat på abonnemangets längd:\n\n| Kundens Plan | Kreditförbrukning | Grossistkostnad | Rekommenderat Pris | Din Nettovinst |\n| :--- | :---: | :---: | :---: | :---: |\n| **1 Månad** | **1 kredit** | 9 kr | 100 kr | **91 kr** (1011% ROI) |\n| **3 Månader** | **3 krediter** | 27 kr | 250 kr | **223 kr** (825% ROI) |\n| **12 Månader** | **12 krediter** | 108 kr | 800 kr | **692 kr** (640% ROI) |",
        faqs: []
      },
      {
        id: "xtream-codes-vs-m3u",
        title: isNo ? "Xtream Codes API vs M3U-spillelister: Hva du må vite" : "Xtream Codes API vs M3U Spellistor: Vad du behöver veta",
        category: isNo ? "Teknisk" : "Tekniskt",
        readTime: "7 min",
        excerpt: isNo ? "Sammenlign stabilitet, sikkerhet og oppsett for Xtream Codes og rå M3U-filer." : "Jämför prestanda, säkerhet och enhetskompatibilitet mellan Xtream Codes och råa M3U-filer.",
        seoTitle: "Xtream Codes API vs M3U Playlist Guide",
        seoDescription: "Technical guide comparing Xtream Codes logins and M3U playlists.",
        content: "### 📊 Sammenligning / Jämförelse\n\n| Protokoll | API Xtream Codes | M3U Playlist |\n| :--- | :---: | :---: |\n| **Tilkobling** | Enkelt med 3 felter (URL, Bruker, Passord) | Enormt lang og sårbar URL-streng |\n| **Hastighet** | **Umiddelbar** (<0.5s) | Treg (laster ned hele filen på 30s) |\n| **Sikkerhet** | Høy (skjuler serverens IP) | Lav (eksponerer serverdetaljer direkte) |\n\n> [!NOTE]\n> Del aldri rå M3U-filer direkte med kunder. M3U-filer gjør det enkelt for uautoriserte å klone og stjele strømmer.",
        faqs: []
      },
      {
        id: "white-label-panel-branding",
        title: "White Label IPTV Panels: Bygg din egen strømme-merkevare",
        category: isNo ? "Merke" : "Varumärke",
        readTime: "5 min",
        excerpt: isNo ? "Selg videre til egne sub-forhandlere under din egen merkevare." : "Skala din verksamhet genom att sälja återförsäljarpaneler till sub-resellers under eget varumärke.",
        seoTitle: "White Label IPTV Panels | Brand Building",
        seoDescription: "Learn to build your own streaming brand.",
        content: "Med **White Label** masker du vår infrastruktur bak ditt eget domene (f.eks. `portal.dittmerke.com`).\n\n### 🚀 Rekrutter Sub-Forhandlere\n1. Opprett en forhandlerkonto i ditt eget admin-panel.\n2. Tildel en pakke med kreditter.\n3. Selg pakken med en god vinstmargin. **Du tjener penger hver gang de aktiverer en kunde!**",
        faqs: []
      },
      {
        id: "dns-portal-setup-guide",
        title: "IPTV DNS Customization & Portal Domain Setup (CNAME)",
        category: isNo ? "Teknisk" : "Tekniskt",
        readTime: "8 min",
        excerpt: "Lær å sette opp portal.dittmerke.com med CNAME och Cloudflare.",
        seoTitle: "IPTV DNS Portal CNAME Setup Guide",
        seoDescription: "Technical guide to DNS and Cloudflare setup.",
        content: "### 📡 CNAME vs A Records\nBruk **CNAME** for dynamisk oppdatering av IP-adresser. Hvis serveren bytter IP grunnet angrep, vil CNAME automatisk rute trafikken videre uten at kundenes apper går ned.\n\n### 🛠️ Cloudflare Steg-for-steg\n1. Opprett gratis konto på Cloudflare och legg inn ditt domene.\n2. Gå til **DNS Records** og klikk **Add Record**.\n3. Velg **Type: CNAME**, skriv **Name: portal** och **Target: server.iptvreseller.live**.\n4. **Viktig:** Sett Proxy Status til **DNS Only** (grå sky) for å unngå at strømmingen blokkeres.",
        faqs: []
      },
      {
        id: "billing-whmcs-stripe-guide",
        title: "Automated Billing: WHMCS Setup & Stripe Integration",
        category: isNo ? "Teknisk" : "Tekniskt",
        readTime: "9 min",
        excerpt: "Automatiser kunderegistrering og utsendelse av kreditter.",
        seoTitle: "WHMCS IPTV Automation Setup Guide",
        seoDescription: "Learn to automate credits delivery with WHMCS.",
        content: "Slipp å sitte oppe om natten for å aktivere kunder manuelt på WhatsApp. Integrer **WHMCS** med **Stripe** eller **kryptovaluta (USDT)** for 100% automatisert fildeling og kredittlevering.\n\n### 🛠️ Integrasjon\n1. Last opp forhandlermodulen til `/modules/servers/iptvreseller/` på din WHMCS-server.\n2. Legg inn API-kreditene dine under **Servers** i WHMCS.\n3. Opprett produktene og sett dem til: **'Automatically setup the product as soon as the first payment is received'**.",
        faqs: []
      },
      {
        id: "xtream-api-integration-guide",
        title: "IPTV API & Xtream Codes Integration Guide",
        category: isNo ? "Teknisk" : "Tekniskt",
        readTime: "7 min",
        excerpt: "Dokumentasjon av Xtream Codes API-endepunkter.",
        seoTitle: "Xtream Codes API Integration Guide",
        seoDescription: "Developer documentation for the Xtream Codes API.",
        content: "### ⚙️ Endpoints\nInterrroger API-en programmatisk for å hente ut abonnementstatus eller kanallister i JSON-format.\n\n[CODE_START_HTTP]\nGET http://portal.dittmerke.com:8080/player_api.php?username=BRUKER&password=PASSORD\n[CODE_END]\n\n> [!WARNING]\n> **Implementer Redis Caching:** Gjør aldri sanntids API-kall til Xtream Codes for hver enkelt visning i appen din. Mellomlagre resultatene lokalt i 12 timer for å hindre at database-serveren overbelastes.",
        faqs: []
      }
    ];
  }

  // 📝 ENGLISH MASTER TEMPLATES (Serves as default, and gets dynamically local-replaced for en-gb and en-au)
  const englishGuides: GuideData[] = [
    {
      id: "start-iptv-reseller-business",
      title: "How to Start an IPTV Reseller Business in 2026 (With Minimal Investment)",
      category: "Business",
      readTime: "6 min read",
      excerpt: "Learn how to establish a highly profitable white label IPTV reseller business. Discover panel onboarding, customer acquisition, and WhatsApp scaling strategies.",
      seoTitle: "How to Start an IPTV Reseller Business in 2026 | Fox IPTV Panels",
      seoDescription: "Step-by-step masterclass to launch your white-label IPTV reseller business in 2026. Learn about credits pricing, customer generation & WhatsApp automation.",
      content: "Starting a digital subscription business is one of the best ways to secure highly stable passive recurring income in 2026. With a premium white-label IPTV reseller panel, you don't need to spend thousands of dollars on expensive streaming servers or manage complex database infrastructure. As a reseller, you purchase wholesale 'credits' from a major provider like Fox IPTV Panels, access an elegant administrative dashboard, and sell subscription packages directly to retail clients.\n\n### 💰 IPTV Reseller Earnings Formula\nBelow is a clear projection of standard earnings based on our wholesale credit system:\n\n| Reseller Tier | Credits Quantity | Wholesale Cost per Credit | Suggested Retail Price | Net Profit Margin |\n| :--- | :---: | :---: | :---: | :---: |\n| **Starter Pack** | 120 credits | $1.00 / credit | $10.00 / month | **$1,080 USD** |\n| **Growth Pack** | 200 credits | $0.90 / credit | $10.00 / month | **$1,820 USD** |\n| **Enterprise Pack** | 500 credits | $0.70 / credit | $10.00 / month | **$4,650 USD** |\n\n### 🛠️ Step-by-Step Onboarding Blueprint\n1. **Acquire a starter package:** Start small (e.g. 120 credits) to test stream stability across alt-broadband providers and check local customer response.\n2. **Dashboard Masterclass:** Learn the panel mechanics—including subscription line creation, active connection monitoring, and generating 24-hour trial lines.\n3. **White Label Configuration:** Point your own brand subdomain (e.g. portal.yourbrand.com) to the server to completely hide the upstream provider.\n4. **WhatsApp Business Funnel:** Route leads directly to WhatsApp. Program automated welcome triggers to deliver trials in less than 2 minutes.\n\n> [!TIP]\n> **High-Converting CRO Tactic:** Always offer a 24-hour free trial. Statistics show that 78% of customers who test a stable, buffer-free 4K stream on their Firestick convert into a high-ticket annual plan. Local internet service providers like Comcast, Spectrum, and AT&T occasionally filter media packets; hence, providing custom DNS routing guarantees an uninterrupted stream.",
      faqs: [
        { q: "How much investment do I need to start an IPTV reseller business?", a: "You can start with a very low initial investment by securing our 120 credits Starter Pack. There are no monthly servers overheads or hidden administrative fees." },
        { q: "What is an IPTV credit and how does it function?", a: "Credits act as the wholesale billing currency. Typically, 1 credit maps to 1 month of subscription for a single client connection. Creating a 12-month client connection uses 12 credits." }
      ]
    },
    {
      id: "credit-system-explained",
      title: "IPTV Reseller Credit System Explained: A Complete Guide",
      category: "Business",
      readTime: "5 min read",
      excerpt: "Confused about how credits translate to client active accounts? Read our detailed breakdown of the IPTV panel billing model and calculate your profit margins.",
      seoTitle: "IPTV Reseller Credit System Explained 2026 | Fox IPTV Panels",
      seoDescription: "How do IPTV reseller credits work? In-depth guide detailing the wholesale billing system, package conversions, and margins calculations.",
      content: "The credit system is the operational foundation of the wholesale IPTV reselling industry. Instead of paying fixed monthly server fees per client, you operate as a credit bank: you purchase credits in bulk wholesale batches and debit them from your balance as you activate customer connections in real time.\n\n### 🔄 Standard Credits Conversion Matrix\nEvery account connection you activate in your panel consumes credits depending on the selected plan duration:\n\n| Retail Customer Plan | Credits Consumption | Average Wholesale Cost ($0.90) | Average Retail Price | Your Net Profit Margin |\n| :--- | :---: | :---: | :---: | :---: |\n| **24-Hour Trial** | **0 credits** (Free) | $0.00 | $0.00 | Free Lead Generation |\n| **1-Month Plan** | **1 credit** | $0.90 | $10.00 | **$9.10 USD** |\n| **3-Month Plan** | **3 credits** | $2.70 | $25.00 | **$22.30 USD** |\n| **12-Month Plan** | **12 credits** | $10.80 | $80.00 | **$69.20 USD** |\n\n### 📈 Heuristics for Optimized Inventory Management\n*   **Drive annual plans:** While monthly plans offer a higher percentage ROI, annual plans secure instant, robust cash flow. This upfront revenue allows you to upgrade to larger wholesale packs, driving credit costs down to $0.70.\n*   **Manage Trial Allocations:** Direct trial generation exclusively during peak live sports broadcast windows. High demand for stable, zero-buffering live sports events is your single most effective conversion catalyst.\n\n> [!WARNING]\n> **Balance Depletion Risk:** Never let your panel balance hit zero. Maintaining a minimum buffer of 15 credits guarantees you can instant-renew automated client renewals 24/7 without transaction bottlenecks.",
      faqs: [
        { q: "Do my purchased IPTV reseller credits expire?", a: "No. At Fox IPTV Panels, wholesale credits remain active on your reseller dashboard indefinitely. They never expire until you utilize them." },
        { q: "Can I transfer credits to another reseller's account?", a: "Yes. If you operate under a custom white-label setup with sub-panel features active, you can transfer credit packages to your downstream resellers." }
      ]
    },
    {
      id: "xtream-codes-vs-m3u",
      title: "Xtream Codes API vs M3U Playlist Links: What Resellers Must Know",
      category: "Technical",
      readTime: "7 min read",
      excerpt: "Help your customers connect their devices easily. Compare the performance, security, and device compatibility of Xtream Codes logins and raw M3U files.",
      seoTitle: "Xtream Codes API vs M3U Playlist: Complete Technical Guide",
      seoDescription: "Compare the differences, performance, speeds & security of Xtream Codes logins vs raw M3U playlist URLs. Technical guide for IPTV resellers.",
      content: "When configuring connections for your customers, you will encounter two primary streaming delivery protocols: the **Xtream Codes API** and raw **M3U Playlist URLs**. Understanding which to assign determines your support ticket volume and overall client retention.\n\n### 📊 Side-by-Side Technical Comparison\n\n| Performance Metric | Xtream Codes API | Raw M3U Playlist URL |\n| :--- | :---: | :---: |\n| **Connection Method** | 3 clean fields (Portal URL, User, Password) | One massive, single alphanumeric URL string |\n| **Channel Download Speed** | **Instantaneous** (<0.5 seconds) | Slow (30+ seconds data payload latency) |\n| **DNS Subdomain Masking** | Extremely simple (masks parent server) | Difficult (exposes absolute parent paths) |\n| **Automated Syncing** | Yes (updates playlist dynamically on launch) | No (requires manual reloading or file updates) |\n| **Best Compatible Apps** | IPTV Smarters Pro, XCIPTV, TiviMate | VLC Player, GSE IPTV, legacy decodificators |\n\n### 🛠️ Step-by-Step Xtream Codes Client Setup\n1. Instruct your client to download a modern player (e.g. **IPTV Smarters Pro** or **XCIPTV**).\n2. Select **'Login with Xtream Codes API'**.\n3. Deliver the credentials generated inside your reseller dashboard:\n   * **Portal URL:** portal.yourbrand.com:8080 (using your custom DNS portal).\n   * **Username:** client_user\n   * **Password:** client_pass\n4. Click **'Add User'**. Channels, EPG, and movies will load in fractions of a second.\n\n> [!NOTE]\n> Avoid delivering raw M3U URLs to clients. M3U strings expose your absolute hostnames and ports in plain text, making it extremely easy for bad actors to copy streams and overload your bandwidth.",
      faqs: [
        { q: "Why is Xtream Codes faster than M3U?", a: "Xtream Codes queries the panel database directly using structured JSON parameters, while M3U requires downloading a massive, uncompressed playlist file." },
        { q: "Is Xtream Codes compatible with TiviMate on Firestick?", a: "Yes. TiviMate fully supports Xtream Codes API logins and is highly recommended for Firestick users due to its sleek guide layout." }
      ]
    },
    {
      id: "white-label-panel-branding",
      title: "White Label IPTV Panels: Branding Your Streaming Empire",
      category: "Branding",
      readTime: "5 min read",
      excerpt: "Ready to scale beyond retail clients? Learn how custom DNS routing and white labeling allow you to sell reseller panels to sub-resellers under your own brand.",
      seoTitle: "White Label IPTV Panels: Build Your Streaming Brand | Fox IPTV Panels",
      seoDescription: "Step-by-step white labeling guide for IPTV resellers. Custom DNS portals routing, sub-panel configurations & masking servers.",
      content: "White labeling is the ultimate evolutionary step for a growing reseller business. It transitions your operation from a side hustle into an authoritative subscription brand, hiding server origins and unlocking wholesale distribution.\n\n### 🌐 The Mechanics of White Label Masking\nWhen you activate a white-label reseller setup, our wholesale infrastructure gets masked behind your own private domain name (e.g. portal.yourbrand.com). When your clients connect, they see only your domain, your logo, and your brand name.\n\n### 🏗️ Two-Tier Distribution Architecture\nWith a full white-label setup, you unlock the ability to manage both direct retail connections and sub-reseller businesses:\n\n*   Your White-Label Portal (portal.yourbrand.com)\n*   ┌────────────────────┴────────────────────┐\n*   ▼                                         ▼\n*   Direct Retail Clients              Sub-Reseller Panels\n*   (Vende a precio sugerido)          (Vende paquetes de créditos)\n*   (Margen de 1000% ganancia)         (Ingresos 100% pasivos)\n\n### 🚀 How to Onboard Sub-Resellers\nRecruiting sub-resellers is the most effective way to scale:\n1. Access your administrator panel and create a sub-reseller account.\n2. Allocate a bulk package of credits (e.g. 100 credits which cost you $0.70 each).\n3. Sell the credit bundle to your sub-reseller at $1.50 per credit.\n4. They will retail those credits at $10.00 each. **You secure a passive spread on every single client they activate!**",
      faqs: [
        { q: "Do I need coding experience to run a white-label panel?", a: "No. Fox IPTV Panels handles the entire backend server architecture. You only need to configure CNAME records at your domain registrar." },
        { q: "Can I host a custom panel login portal?", a: "Yes. The white-label configuration includes a custom web portal branded with your logo, color palette, and company links." }
      ]
    },
    {
      id: "dns-portal-setup-guide",
      title: "IPTV DNS Customization & Portal Domain Setup (CNAME, Security & Branding)",
      category: "Technical",
      readTime: "8 min read",
      excerpt: "Learn how to configure custom DNS portals (portal.yourbrand.com), CNAME vs A Records, secure your server from exploits, and custom-brand client apps.",
      seoTitle: "How to Create a Custom IPTV Portal Domain: CNAME & DNS Setup",
      seoDescription: "Complete guide to custom DNS portal setups for IPTV. Learn about CNAME vs A records, Cloudflare settings, and securing your reseller panel.",
      content: "Moving away from raw IP addresses and ports to a branded domain name is the most important technical step for establishing trust and security. A custom DNS portal (e.g., portal.yourbrand.com) keeps your business isolated and clean.\n\n### 📡 CNAME vs A Records: Side-by-Side Evaluation\nUnderstanding DNS mapping prevents catastrophic downtime:\n\n| DNS Record Type | Redirection Target | Key Advantage | System Failure Risk | Recommended? |\n| :--- | :--- | :--- | :--- | :---: |\n| **A Record** | Static IP Address (e.g., 192.0.2.1) | Fastest DNS query resolution | **High**. If the server IP migrates due to DDoS attacks, your client apps instantly break. | **NO** |\n| **CNAME Record** | Canonical Alias Name (e.g., server.iptvreseller.live) | **Dynamic Failover**. If the server IP changes, CNAME auto-resolves instantly. | Microsecond DNS lookup delay | **YES (100%)** |\n\n### 🛠️ Step-by-Step Cloudflare CNAME Setup Guide\n1. Log into your **Cloudflare** account (free tier is fully sufficient) and add your domain (e.g., yourbrand.com).\n2. Navigate to the **DNS Records** tab and click **Add Record**.\n3. Enter the following parameters:\n   * **Type:** CNAME\n   * **Name:** portal (this maps portal.yourbrand.com)\n   * **Target:** server.iptvreseller.live (or your assigned server alias).\n   * **Proxy Status:** Toggle to **DNS Only** (grey cloud). *Important: Enabling active proxy (orange cloud) will block non-standard HTTP streaming protocols.*\n4. Save the record. Propagation takes under 10 minutes.\n\n### 🛡️ 12 Security Pitfalls That Get IPTV Resellers Hacked\n1. **Using Default Ports:** Standard ports are vulnerable to simple bot scans. Obfuscate routing via custom ports.\n2. **Exposing Origin IPs:** Never expose your parent server IP. Always point subdomains via CNAME records.\n3. **Weak Reseller Passwords:** Use administrative passwords with over 16 characters and activate 2FA on your dashboard.\n4. **Failing to configure SSL/TLS encryption for billing logins.** Exposing billing credentials violates FCC regulations.",
      faqs: [
        { q: "Can I configure multiple portal subdomains?", a: "Yes. You can configure separate subdomains for different categories of users or sub-reseller portals." },
        { q: "Why does the Cloudflare proxy break IPTV streaming?", a: "Cloudflare's default proxy is designed to optimize static web content and actively terminates persistent video stream connections." }
      ]
    },
    {
      id: "billing-whmcs-stripe-guide",
      title: "Automated Billing & Credit Delivery Guide: WHMCS Setup & Stripe Integration",
      category: "Technical",
      readTime: "9 min read",
      excerpt: "Automate client signups, renewals, and IPTV credit deliveries using WHMCS, configure secure Stripe payments, and compare PayPal vs Crypto.",
      seoTitle: "WHMCS IPTV Automation & Stripe Integration Guide 2026",
      seoDescription: "Step-by-step WHMCS integration guide for IPTV resellers. Automate credits delivery, configure Stripe high-risk merchant accounts & PayPal.",
      content: "Manually creating client lines and processing renewals via WhatsApp at 3:00 AM is the single biggest bottleneck preventing you from scaling. Industry-leading resellers automate their entire checkout lifecycle using **WHMCS** integrated with secure merchant gateways like **Stripe**, **PayPal**, and **Crypto**.\n\n### 🛠️ WHMCS IPTV Module Configuration Blueprint\nWHMCS is the standard billing platform for digital services. Follow this configuration sequence to automate credits delivery:\n1. Upload your custom IPTV reseller module files to your WHMCS server directory at `/modules/servers/iptvreseller/`.\n2. In WHMCS, go to **Setup > Products/Services > Servers**. Click **Add New Server**, choose the IPTV server module, enter your panel API credentials, and input your white-label URL.\n3. Create your subscription products (e.g. 1 Month, 3 Months, 12 Months).\n4. Go to the **Module Settings** tab on the product setup page. Map the credit consumption (1, 3, or 12 credits) and select: **'Automatically setup the product as soon as the first payment is received'**.\n\n### 💳 Stripe vs PayPal vs Cryptocurrencies Strategy\n\n| Payment Gateway | Customer Conversion | Dispute & Chargeback Risk | Account Suspensions Risk | Recommended Strategy |\n| :--- | :---: | :---: | :---: | :--- |\n| **Stripe (Card)** | **Very High** | Medium | High (If standard accounts are used) | Configure Stripe via dedicated high-risk merchant gateways. |\n| **PayPal** | High | High (Chargeback fraud) | Medium | Restrict usage only to trusted, long-term clients. |\n| **Crypto (USDT/BTC)** | Low | **Zero (Irreversible)** | **Zero** | Provide a permanent 10% discount on crypto payments to incentivize. |\n\n### 🔄 Automating Subscriptions and Renewals\nSet WHMCS to trigger automated invoice generation 7 days before account expiration. If the client completes the payment, the WHMCS billing module sends an instantaneous API command to the reseller panel, executing an **automatic line renewal**, eliminating manual administrative labor.",
      faqs: [
        { q: "Is a WHMCS license expensive for new resellers?", a: "No. Starter WHMCS licenses are highly affordable and pay for themselves by recovering billing drop-offs through automated invoicing." },
        { q: "Which Crypto network should I accept?", a: "Use USDT on the TRC-20 (Tron) network. Transactions are settled in under 60 seconds with typical network fees under $1.00 USD." }
      ]
    },
    {
      id: "xtream-api-integration-guide",
      title: "IPTV API & Xtream Codes Integration Guide for Panel Owners",
      category: "Technical",
      readTime: "7 min read",
      excerpt: "Master the Xtream Codes API architecture. Learn to build custom registration forms, query panel databases, and fetch playlist endpoints.",
      seoTitle: "Xtream Codes API Integration & Developer Endpoints Guide",
      seoDescription: "Developer documentation for the Xtream Codes API. Learn to query user details, category paths, and optimize player endpoints.",
      content: "For developers, custom branding agencies, and advanced resellers, communicating directly with the **Xtream Codes API** unlocks infinite possibilities—from coding custom automated registration portals to building dedicated streaming apps.\n\n### ⚙️ API Architecture and Endpoint Mapping\nThe Xtream Codes API functions using standard HTTP GET/POST queries, returning highly structured JSON objects. Below are the core integration paths for custom software development:\n\n#### 1. Authentication & Subscription Line Payload:\n[CODE_START_HTTP]\nGET http://portal.yourbrand.com:8080/player_api.php?username=CLIENT_USER&password=CLIENT_PASS\n[CODE_END]\n**Key JSON Response Payload:**\n[CODE_START_JSON]\n{\n  \"user_info\": {\n    \"username\": \"client_user\",\n    \"status\": \"Active\",\n    \"exp_date\": \"1780158414\",\n    \"max_connections\": 1,\n    \"active_cons\": 0\n  },\n  \"server_info\": {\n    \"url\": \"portal.yourbrand.com\",\n    \"port\": \"8080\"\n  }\n}\n[CODE_END]\n\n#### 2. Live Channels Category Query:\n[CODE_START_HTTP]\nGET http://portal.yourbrand.com:8080/player_api.php?username=CLIENT_USER&password=CLIENT_PASS&action=get_live_streams\n[CODE_END]\n\n#### 3. Programmatic M3U Fetch Endpoint:\n[CODE_START_HTTP]\nGET http://portal.yourbrand.com:8080/get.php?username=CLIENT_USER&username=CLIENT_USER&password=CLIENT_PASS&action=get_live_streams\n[CODE_END]\n\n### ⚡ Critical Developer Performance Heuristics\n*   **Active Cache Layer (Redis):** Never poll the Xtream Codes API directly for every client connection or playlist load. Store channel categories and server assets in a local cache layer (like Redis or Memcached) with a 12-hour expiration window. Direct, un-cached queries on high-traffic sites will trigger database lockups and crash your server.\n*   **Handling Unix Timestamps:** The API returns dates in Unix Epoch format. Convert them in your custom application using `new Date(exp_date * 1000)` to render readable local date formats for clients.",
      faqs: [
        { q: "Does the API support rate limiting out of the box?", a: "Yes. Xtream Codes portals can configure API query thresholds. Always implement local caching to protect your credentials from lockout." },
        { q: "Can I query client streaming history via the API?", a: "Yes. Reseller admin credentials can query panel statistics to fetch logs on active client IPs and bandwidth consumption." }
      ]
    }
  ];

  // Return the master English templates with dynamic GEO-substitutions applied for titles, excerpts, descriptions, content and FAQs!
  return englishGuides.map((guide) => {
    // Determine target localized category
    let localizedCategory = guide.category;
    if (L === "fr") localizedCategory = guide.category === "Business" ? "Affaires" : guide.category === "Technical" ? "Technique" : "Marque";
    else if (L === "pt") localizedCategory = guide.category === "Business" ? "Negócio" : guide.category === "Technical" ? "Técnico" : "Marca";
    else if (L === "sv") localizedCategory = guide.category === "Business" ? "Affärer" : guide.category === "Technical" ? "Tekniskt" : "Varumärke";
    else if (L === "no") localizedCategory = guide.category === "Business" ? "Bedrift" : guide.category === "Technical" ? "Teknisk" : "Merke";

    return {
      ...guide,
      category: localizedCategory,
      title: geoLocalizeEnglish(guide.title, "title"),
      excerpt: geoLocalizeEnglish(guide.excerpt, "desc"),
      seoTitle: geoLocalizeEnglish(guide.seoTitle, "title"),
      seoDescription: geoLocalizeEnglish(guide.seoDescription, "desc"),
      content: geoLocalizeEnglish(guide.content, "body"),
      faqs: guide.faqs.map((faq) => ({
        q: geoLocalizeEnglish(faq.q, "title"),
        a: geoLocalizeEnglish(faq.a, "body"),
      })),
    };
  });
};

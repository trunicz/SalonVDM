import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export async function getLandingPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);
  let landingPage;
  try {
    landingPage = await reader.singletons.landingPage.read();
  } catch (e) {
    console.error("Could not read landing page data, using defaults", e);
  }

  return {
    hero: landingPage?.hero || {
      headline: "Este es un Sitio de Ejemplo",
      subheadline:
        "Esta es una demostración de lo que podemos hacer por tu negocio. Diseñamos sitios web profesionales, rápidos y optimizados para captar clientes.",
      ctaText: "¡Quiero mi Sitio!",
      ctaLink: "/contact",
    },
    features:
      landingPage?.features && landingPage.features.length > 0
        ? landingPage.features
        : [
            {
              title: "Estrategia Digital",
              description: "Planificación detallada para alcanzar tus objetivos comerciales.",
              icon: "Zap",
            },
            {
              title: "Diseño Creativo",
              description: "Interfaces visuales impactantes que cautivan a tu audiencia.",
              icon: "Globe",
            },
            {
              title: "Desarrollo Web",
              description: "Sitios rápidos, seguros y optimizados para conversión.",
              icon: "Rocket",
            },
          ],
    products:
      landingPage?.products && landingPage.products.length > 0
        ? landingPage.products.map((p: any, i: number) => ({ ...p, id: `product-${i + 1}` }))
        : [
            {
              id: "pkg-1",
              name: "Paquete Inicial",
              price: "$599",
              description: "Ideal para pequeños negocios. Incluye diseño web básico y configuración de SEO local.",
              image: null,
            },
            {
              id: "pkg-2",
              name: "Marca Profesional",
              price: "$1299",
              description: "Branding completo, diseño web avanzado y estrategia de contenidos mensual.",
              image: null,
            },
            {
              id: "pkg-3",
              name: "E-commerce Total",
              price: "$2499",
              description: "Tienda en línea completa con pasarela de pagos y automatización de marketing.",
              image: null,
            },
          ],
    services: [
      {
        title: "Consultoría SEO",
        price: "Desde $300/mes",
        description: "Mejora tu posicionamiento en Google y atrae tráfico orgánico de calidad.",
        duration: "Mensual",
      },
      {
        title: "Gestión de Redes Sociales",
        price: "Desde $500/mes",
        description: "Creación de contenido, programación y gestión de comunidad en IG, FB y LinkedIn.",
        duration: "Mensual",
      },
      {
        title: "Publicidad PPC",
        price: "Variable",
        description: "Campañas efectivas en Google Ads y Meta Ads para ventas inmediatas.",
        duration: "Por Campaña",
      },
    ],
    team: [
      {
        name: "Ana García",
        role: "Directora Creativa",
        image: null,
        bio: "Más de 8 años creando identidades visuales únicas para marcas globales.",
      },
      {
        name: "Carlos Ruiz",
        role: "Estratega Digital",
        image: null,
        bio: "Especialista en SEO y Growth Hacking con enfoque en ROI.",
      },
      {
        name: "Laura Martínez",
        role: "Desarrolladora Lead",
        image: null,
        bio: "Experta en desarrollo full-stack y arquitecturas web escalables.",
      },
    ],
    testimonials: [
      {
        author: "Roberto Méndez",
        role: "CEO, TechSolutions",
        content: "El equipo transformó nuestra presencia online. Las ventas aumentaron un 200% en 6 meses.",
        rating: 5,
      },
      {
        author: "Sofía Vargas",
        role: "Fundadora, EcoLife",
        content: "Entendieron perfectamente nuestra visión y la plasmaron en un diseño web increíble.",
        rating: 5,
      },
      {
        author: "Juan Pérez",
        role: "Gerente de Marketing",
        content: "Profesionales, puntuales y con resultados tangibles. Altamente recomendados.",
        rating: 4,
      },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800", caption: "Nuestras Oficinas" },
      { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", caption: "Reunión de Estrategia" },
      { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", caption: "Análisis de Datos" },
      { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", caption: "Equipo de Trabajo" },
      { url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800", caption: "Desarrollo Web" },
      { url: "https://images.unsplash.com/photo-1553877606-3c9cb0df5d62?auto=format&fit=crop&q=80&w=800", caption: "Diseño UX/UI" },
    ],
    faq: [
      {
        question: "¿Cómo trabajamos?",
        answer: "Iniciamos con una auditoría de tu estado actual, definimos objetivos y creamos un plan de acción a medida.",
      },
      {
        question: "¿Qué industrias atienden?",
        answer: "Tenemos experiencia en retail, tecnología, salud, servicios profesionales y más.",
      },
      {
        question: "¿Ofrecen soporte post-lanzamiento?",
        answer: "Sí, todos nuestros proyectos web incluyen 30 días de soporte gratuito y ofrecemos planes de mantenimiento.",
      },
    ],
    about: landingPage?.about || {
      title: "Nuestra Filosofía",
      content:
        "Creemos en el poder de la creatividad fusionada con datos. Nuestra misión es ayudar a marcas ambiciosas a destacar en un entorno digital saturado, mediante soluciones innovadoras y resultados medibles.",
    },
    cta: landingPage?.cta || {
      title: "¿Listo para crecer?",
      subtext: "Agenda una consulta gratuita y descubre cómo podemos potenciar tu negocio hoy mismo.",
      buttonText: "Contáctanos",
    },
    footer: landingPage?.footer || {
      copyright: "© 2026 Agencia Minimal. Todos los derechos reservados.",
      socials: [
        { platform: "Twitter", url: "#" },
        { platform: "Facebook", url: "#" },
        { platform: "Instagram", url: "#" },
        { platform: "LinkedIn", url: "#" },
      ],
    },
  };
}

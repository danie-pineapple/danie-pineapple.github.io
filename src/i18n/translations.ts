// ============================================================
// TEXTOS DEL SITIO — Español / English
// Para editar cualquier texto del sitio, búscalo aquí por su
// clave (ej: "hero.tagline") y cambia el valor en "es" y/o "en".
// ============================================================

export type Lang = 'en' | 'es'

export interface TranslationShape {
  nav: { about: string; work: string; contact: string }
  hero: {
    kicker: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    tagline: string
    ctaWork: string
    ctaContact: string
    location: string
  }
  about: {
    kicker: string
    heading1: string
    heading2: string
    paragraphs: string[]
    stats: { value: string; label: string }[]
  }
  work: { kicker: string; heading: string; watch: string; empty: string }
  contact: { kicker: string; heading: string; description: string; emailLabel: string }
  footer: { rights: string; location: string }
}

export const translations: Record<Lang, TranslationShape> = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Daniela Piña · Barcelona',
      titleLine1: '3D',
      titleLine2: 'GENERALIST',
      subtitle: 'Motion Graphic Designer',
      tagline: '3D animation, motion graphics and visual storytelling for brands, broadcast and digital experiences.',
      ctaWork: 'View Work',
      ctaContact: 'Contact',
      location: 'Barcelona, Spain',
    },
    about: {
      kicker: 'About me',
      heading1: 'DANIELA',
      heading2: 'PIÑA',
      paragraphs: [
        "I'm Daniela Piña, a 3D generalist and motion graphic designer. I've collaborated with multidisciplinary teams on campaigns, broadcast content, corporate communication and digital experiences for a range of brands and organizations. My approach combines creativity, strategy and technology to develop visual solutions that are both innovative and effective.",
        "I'm currently completing a Master's in 3D Generalism with a specialization in Maya in Barcelona, where I continue to deepen my knowledge of animation, modeling and digital production. I'm also interested in integrating AI tools into creative workflows, exploring new ways to optimize and enrich audiovisual production.",
        'I consider myself a creative, adaptable professional, committed to constant learning — always looking for new challenges that let me keep growing and add value through design and animation.',
      ],
      stats: [
        { value: 'Barcelona', label: 'Based in Spain' },
        { value: 'Maya', label: '3D Generalist — Master’s ongoing' },
        { value: 'Broadcast', label: 'Corporate · Digital' },
      ],
    },
    work: {
      kicker: 'Selected work',
      heading: 'Work',
      watch: 'Watch',
      empty: 'Coming soon',
    },
    contact: {
      kicker: "Let's create",
      heading: "Let's Talk",
      description: "Have a project in mind? I'd love to hear about it — reach out and let's build something great together.",
      emailLabel: 'Email',
    },
    footer: {
      rights: 'All rights reserved',
      location: 'Barcelona, Spain',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      work: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      kicker: 'Daniela Piña · Barcelona',
      titleLine1: '3D',
      titleLine2: 'GENERALIST',
      subtitle: 'Diseñadora de Motion Graphics',
      tagline: 'Animación 3D, motion graphics y narrativa visual para marcas, broadcast y experiencias digitales.',
      ctaWork: 'Ver Proyectos',
      ctaContact: 'Contacto',
      location: 'Barcelona, España',
    },
    about: {
      kicker: 'Sobre mí',
      heading1: 'DANIELA',
      heading2: 'PIÑA',
      paragraphs: [
        'Soy Daniela Piña, generalista 3D y diseñadora de motion graphics. He colaborado con equipos multidisciplinarios en la creación de campañas, contenido para broadcast, comunicación corporativa y experiencias digitales para diversas marcas y organizaciones. Mi enfoque se basa en unir creatividad, estrategia y tecnología para desarrollar soluciones visuales innovadoras y efectivas.',
        'Actualmente curso una Maestría en Generalista 3D con especialización en Maya en Barcelona, donde continúo ampliando mis conocimientos en animación, modelado y producción digital. Además, me interesa la integración de herramientas de inteligencia artificial dentro de los procesos creativos, explorando nuevas formas de optimizar y enriquecer la producción audiovisual.',
        'Me considero una profesional creativa, adaptable y comprometida con el aprendizaje constante, siempre en busca de nuevos retos que me permitan seguir creciendo y aportar valor a través del diseño y la animación.',
      ],
      stats: [
        { value: 'Barcelona', label: 'Radicada en España' },
        { value: 'Maya', label: 'Generalista 3D — Máster en curso' },
        { value: 'Broadcast', label: 'Corporativo · Digital' },
      ],
    },
    work: {
      kicker: 'Proyectos seleccionados',
      heading: 'Proyectos',
      watch: 'Ver',
      empty: 'Próximamente',
    },
    contact: {
      kicker: 'Creemos juntos',
      heading: 'Hablemos',
      description: '¿Tienes un proyecto en mente? Me encantaría escucharte. Escríbeme y empecemos a construir algo increíble.',
      emailLabel: 'Correo',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      location: 'Barcelona, España',
    },
  },
}

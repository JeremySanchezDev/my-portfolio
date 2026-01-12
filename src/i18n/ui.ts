import SpainIcon from "@/components/icons/colored/SpainIcon.astro";
import USIcon from "@/components/icons/colored/USIcon.astro";
import type { Language } from "@/types/Language";

export const defaultLang = "en";

export const defaultLanguage: Language = {
  code: defaultLang,
  Icon: USIcon,
  title: "English",
};

export const languages: Language[] = [
  defaultLanguage,
  {
    code: "es",
    Icon: SpainIcon,
    title: "Español",
  },
];

export const ui = {
  en: {
    "site.title": "My Portfolio",
    "meta.title": "Jeremy Sánchez - Software Developer",
    "meta.description":
      "Jeremy Sánchez | Software Developer exploring full-stack, mobile, data, and cloud. Discover my real-world projects and constantly evolving skills.",
    "meta.og.title": "Jeremy Sánchez - Software Developer",
    "meta.og.description":
      "Exploring software without limits: from mobile & full-stack development to data & cloud. See my projects and how I adapt to any tech challenge.",
    "meta.og.site_name": "Jeremy Sánchez Portfolio",
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "home.intro": "Hello, I'm Jeremy",
    "home.roles": ["Software Engineer", "FullStack Dev", "Jr Data Analyst"],
    "home.description": `
      <span class="text-accent font-semibold">Programmer Analyst</span> passionate about creating technological solutions that solve real problems. <br />
      I master languages like <span class="text-accent">Python</span> and <span class="text-accent">JavaScript</span>, relational databases like <span class="text-accent">PostgreSQL</span> and NoSQL like <span class="text-accent">MongoDB</span>, visualization tools, and agile methodologies like <span class="text-accent">Scrum</span>. <br />
      Open to exploring and contributing to any branch of software development, from <span class="text-accent">clean code</span> to <span class="text-accent font-semibold">scalable solutions</span>.
    `,
    "home.contact-me": "Contact me:",
    "home.download-cv": "Download My CV",
    "home.link-cv": "cv.pdf",
    "skills.title": "Tech Stack",
    "skills.description": `
      A collection of <span class="text-accent">software technologies</span> I've mastered,
      explored, or integrated into real-world solutions.
    `,
    "skills.categories.server": "Server-side",
    "skills.categories.client": "Client-side",
    "skills.categories.languages": "Languages",
    "skills.categories.databases": "Databases",
    "skills.categories.cloud": "Cloud & DevOps",
    "skills.categories.tools": "Tools & IDEs",
    "experience.title": "My Experience",

    "experience.lexia.title": "Data Engineer Jr",
    "experience.lexia.description": `
      Prepared and organized data for an <span class="text-accent">AI-powered legal assistant</span>. 
      Designed <span class="text-accent">PostgreSQL schemas</span> (tables, relationships, keys) to facilitate ingestion and subsequent visualization. 
      Loaded initial datasets and optimized the database for charts and dashboards. 
      Created <span class="text-accent">interactive dashboards</span> in Looker Studio connected to PostgreSQL, and developed clear visualizations to communicate insights and support decision-making. 
      Implemented <span class="text-accent">web scraping</span> with Python and Node.js for automatic extraction of public data, collaborating in a team under Scrum methodology with daily Google Meet meetings.
    `,
    "experience.lexia.date": "December 2024 – April 2025",

    "experience.hult.title": "CTO – MyPersonnel Project (Hult Prize 2025)",
    "experience.hult.description": `
      Led the technical component as CTO in a team for the global social entrepreneurship competition <span class="text-accent">Hult Prize 2025</span> (MyPersonnel project). 
      Defined the <span class="text-accent">technological vision</span> of the product, planned ideas, and designed a complete landing page prototype in <span class="text-accent">Figma</span>. 
      Participated in weekly meetings for ideation, decision-making, and document management in Google Drive; researched basic legal aspects of the business model.
    `,
    "experience.hult.date": "Concurrent with Lexia experience – 2025",


    "projects.title": "Projects",
    "projects.description": `
      A selection of <span class="text-accent">my public projects</span> built with modern 
      <span class="text-accent">technologies</span>, featuring open-source code and cloud integrations.
    `,
    "projects.mika.title": "Mika - Beauty Salon",
    "projects.mika.description":
      "Official website for the women's empowerment campaign organized by Mika Beauty Salon. The project aims to inspire women through Heels Dance (also known as Strip Dance), promoting self-esteem, sensuality, and personal power.",

    "projects.portfolio.title": "Portfolio Website",
    "projects.portfolio.description":
      "A personal portfolio built with Astro and React, featuring i18n (English/Spanish), dark/light mode, responsive design, and CI/CD with GitHub Actions to GitHub Pages.",
    "projects.review_star.title": "ReviewStar",
    "projects.review_star.description":
      "A full-stack platform for reviews and ratings. Built with a robust MERN stack, featuring secure JWT authentication, Cloudinary for image management.",

    "projects.placeholder.title": "More Projects Coming Soon",
    "projects.placeholder.description":
      "Stay tuned, we're still building amazing stuff!",
    "projects.button.demo": "Demo",
    "projects.button.code": "Code",
    "about.title": `
      I build <span class="text-accent">solutions</span> that
      <span class="text-accent">scale</span>,
      <span class="text-accent">connect</span>, and
      <span class="text-accent">make an impact</span>.
    `,
    "about.who.title-1": "Who I Am?",
    "about.who.description-1": `
      <span class="text-accent">Programmer Analyst</span> passionate about creating useful software that solves real problems and generates value, regardless of the branch or technology.
    `,
    "about.who.title-2": "My Approach",
    "about.who.description-2": `
      I like building practical solutions with <span class="text-accent">clean code</span>, <span class="text-accent">good design</span>, and <span class="text-accent">teamwork</span>. 
      I adapt quickly to different challenges: from prototypes and development to data organization and technical leadership.
    `,
    "about.personal.name": "Name",
    "about.personal.place": "Place of Birth",
    "about.personal.education": "Education",
    "about.timeline.foundation.title": "Foundation: Technical Training",
    "about.timeline.foundation.desc": `
      <span class="font-medium text-accent">Programmer Analyst</span>. 
      Developing a solid foundation in programming (Python, JavaScript, etc.), databases, and analytical thinking to tackle any type of technological project.
    `,

    "about.timeline.transition.title": "First Practical Steps",
    "about.timeline.transition.desc": `
      I quickly moved from theoretical learning to real practice: working on data preparation, product prototyping, and collaboration in multidisciplinary teams.
    `,

    "about.timeline.growth.title": "Growth: Simultaneous Experience and Leadership",
    "about.timeline.growth.desc": `
      I worked simultaneously as a <span class="text-accent"> Data Engineer Jr</span> on a legal assistant project and as 
      <span class="text-accent">CTO</span> at Hult Prize 2025 (MyPersonnel), leading technical vision and team prototyping.
    `,

    "about.timeline.focus.title": "Current Focus: Versatility and Useful Solutions",
    "about.timeline.focus.desc": `
      Today I focus on creating software that works well and brings real value, with flexibility to work in any area: 
      web development, mobile, data, backend, or whatever the project needs.
    `,

    "about.closing": `
      More than specializing in just one thing, I am motivated to <span class="font-semibold text-accent">learn continuously</span> and 
      <span class="font-semibold text-accent">build practical solutions</span> that adapt to every need and context.
    `,

    "contact.title": "Contact Me!",
    "contact.subtitle": `<span class="text-accent">Open to Work</span> — Let's Build Together`,

    "contact.github.title": "GitHub",
    "contact.github.description": "Explore my code & projects",
    "contact.github.url": "https://github.com/JeremySG31",

    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.description": "Connect with me professionally",
    "contact.linkedin.url": "https://www.linkedin.com/in/jeremydevsoft/",

    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.description": "Message me directly via WhatsApp",
    "contact.whatsapp.url":
      "https://wa.me/51995744659?text=Hi%20Jeremy%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20talk%20to%20you.",

    "contact.email.title": "Email",
    "contact.email.description": "Send me an email to start a conversation",
    "contact.email.url":
      "mailto:jeremy16312928@gmail.com?subject=Hi%20Jeremy%20-%20Portfolio&body=Hi%20Jeremy%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20talk%20to%20you.",

    "contact.form.title": "Send Me a Message",
    "contact.form.name.label": "Name",
    "contact.form.name.placeholder": "Your Name",
    "contact.form.email.label": "Email",
    "contact.form.email.placeholder": "Your Email",
    "contact.form.message.label": "Message",
    "contact.form.message.placeholder": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent successfully!",
    "contact.form.error": "Something went wrong. Please try again.",

    "footer.description":
      "Programmer Analyst | Exploring and building in any branch of development",
    "footer.copyright": "Jeremy Sánchez. All rights reserved.",
  },
  es: {
    "meta.title": "Jeremy Sánchez - Desarrollador de Software",
    "meta.description":
      "Jeremy Sánchez | Desarrollador de Software explorando full-stack, móvil, data y cloud. Descubre mis proyectos reales y habilidades en constante evolución.",
    "meta.og.title": "Jeremy Sánchez - Desarrollador de Software",
    "meta.og.description":
      "Explorando el software sin límites: desde desarrollo móvil y full-stack hasta data y cloud. Mira mis proyectos y cómo me adapto a cualquier reto tecnológico.",
    "meta.og.site_name": "Portafolio de Jeremy Sánchez",
    "site.title": "Mi Portafolio",
    "nav.home": "Inicio",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "home.intro": "Hola, soy Jeremy",
    "home.roles": [
      "Ingeniero de Software",
      "Dev FullStack",
      "Analista de Datos Jr",
    ],
    "home.description": `
      <span class="text-accent font-semibold">Analista Programador</span> apasionado por crear soluciones tecnológicas que resuelvan problemas reales. <br />
      Domino lenguajes como <span class="text-accent">Python</span> y <span class="text-accent">JavaScript</span>, bases de datos relacionales como <span class="text-accent">PostgreSQL</span> y NoSQL como <span class="text-accent">MongoDB</span>, herramientas de visualización y metodologías ágiles como <span class="text-accent">Scrum</span>. <br />
      Abierto a explorar y contribuir en cualquier rama del desarrollo de software, desde <span class="text-accent">código limpio</span> hasta <span class="text-accent font-semibold">soluciones escalables</span>.
    `,
    "home.contact-me": "Contáctame:",
    "home.download-cv": "Descarga mi CV",
    "home.link-cv": "cv-spanish.pdf",
    "skills.title": "Stack Tecnológico",
    "skills.description": `
      Una colección de <span class="text-accent">tecnologías de software</span> que he
      dominado, explorado o integrado en soluciones del mundo real.
    `,
    "skills.categories.server": "Server-side",
    "skills.categories.client": "Client-side",
    "skills.categories.languages": "Lenguajes",
    "skills.categories.databases": "Bases de datos",
    "skills.categories.cloud": "Cloud & DevOps",
    "skills.categories.tools": "Herramientas e IDEs",
    "experience.title": "Mi Experiencia",

    "experience.lexia.title": "Data Engineer Jr",
    "experience.lexia.description": `
      Preparé y organicé datos para un <span class="text-accent">asistente legal potenciado con IA</span>. 
      Diseñé <span class="text-accent">schemas en PostgreSQL</span> (tablas, relaciones, claves) para facilitar ingestión y visualización posterior. 
      Cargué datasets iniciales y optimicé la base para gráficos y dashboards. 
      Creé <span class="text-accent">dashboards interactivos</span> en Looker Studio conectados a PostgreSQL, y desarrollé visualizaciones claras para comunicar insights y apoyar la toma de decisiones. 
      Implementé <span class="text-accent">web scraping</span> con Python y Node.js para extracción automática de datos públicos, colaborando en equipo bajo metodología Scrum con reuniones diarias por Google Meet.
    `,
    "experience.lexia.date": "Diciembre 2024 – Abril 2025",

    "experience.hult.title": "CTO – Proyecto MyPersonnel (Hult Prize 2025)",
    "experience.hult.description": `
      Lideré el componente técnico como CTO en equipo para la competencia global de emprendimiento social <span class="text-accent">Hult Prize 2025</span> (proyecto MyPersonnel). 
      Definí la <span class="text-accent">visión tecnológica</span> del producto, planifiqué ideas y diseñé prototipo completo de landing page en <span class="text-accent">Figma</span>. 
      Participé en reuniones semanales para ideación, toma de decisiones y gestión de documentos en Google Drive; investigué aspectos legales básicos del modelo de negocio.
    `,
    "experience.hult.date": "Simultáneo a experiencia en Lexia – 2025",


    "projects.title": "Proyectos",
    "projects.description": `
      Una selección de <span class="text-accent">mis proyectos públicos</span> desarrollados con 
      <span class="text-accent">tecnologías modernas</span>, con código open-source e integraciones en la nube.
    `,
    "projects.mika.title": "Mika - Beauty Salon",
    "projects.mika.description":
      "Sitio web oficial para la campaña de empoderamiento femenino organizada por Mika Beauty Salon. El proyecto busca inspirar a las mujeres mediante el Heels Dance (también conocido como Strip Dance), promoviendo la autoestima, la sensualidad y el poder personal.",

    "projects.portfolio.title": "Mi Portafolio",
    "projects.portfolio.description":
      "Un portafolio personal construido con Astro y React, con soporte i18n (inglés/español), modo oscuro/claro, diseño responsive y CI/CD con GitHub Actions a GitHub Pages.",

    "projects.review_star.title": "ReviewStar",
    "projects.review_star.description":
      "Plataforma FullStack para reseñas y calificaciones. Construida con un robusto stack MERN, incluye autenticación segura JWT, gestión de imágenes con Cloudinary.",


    "projects.placeholder.title": "Más proyectos próximamente",
    "projects.placeholder.description":
      "Estate atento, seguimos construyendo cosas increíbles.",
    "projects.button.demo": "Demo",
    "projects.button.code": "Código",
    "about.title": `
      Construyo <span class="text-accent">soluciones</span> que
      <span class="text-accent">escalan</span>,
      <span class="text-accent">conectan</span> y
      <span class="text-accent">generan impacto</span>.
    `,
    "about.who.title-1": "¿Quién soy?",
    "about.who.description-1": `
      <span class="text-accent"> Analista Programador </span>  apasionado por crear software útil que resuelva problemas reales y genere valor, sin importar la rama o tecnología.
    `,

    "about.who.title-2": "Mi enfoque",
    "about.who.description-2": `
      Me gusta construir soluciones prácticas con <span class="text-accent">código limpio</span>, <span class="text-accent">buen diseño</span> y <span class="text-accent">trabajo en equipo</span>. 
      Me adapto rápido a diferentes retos: desde prototipos y desarrollo hasta organización de datos y liderazgo técnico.
    `,

    "about.personal.name": "Nombre",
    "about.personal.place": "Lugar de nacimiento",
    "about.personal.education": "Educación",

    "about.timeline.foundation.title": "Base: Formación Técnica",
    "about.timeline.foundation.desc": `
      <span class="font-medium text-accent">Analista Programador</span>. 
      Desarrollando una base sólida en programación (Python, JavaScript, etc.), bases de datos y pensamiento analítico para abordar cualquier tipo de proyecto tecnológico.
    `,

    "about.timeline.transition.title": "Primeros pasos prácticos",
    "about.timeline.transition.desc": `
      Pasé rápidamente del aprendizaje teórico a la práctica real: trabajé en preparación de datos, prototipado de productos y colaboración en equipos multidisciplinarios.
    `,

    "about.timeline.growth.title": "Crecimiento: Experiencia simultánea y liderazgo",
    "about.timeline.growth.desc": `
      Trabajé al mismo tiempo como <span class="text-accent">Data Engineer Jr</span> en un proyecto de asistente legal y como 
      <span class="text-accent">CTO</span> en Hult Prize 2025 (MyPersonnel), liderando visión técnica y prototipado en equipo.
    `,

    "about.timeline.focus.title": "Enfoque actual: Versatilidad y soluciones útiles",
    "about.timeline.focus.desc": `
      Hoy me centro en crear software que funcione bien y aporte valor real, con flexibilidad para trabajar en cualquier área: 
      desarrollo web, móvil, datos, backend o lo que necesite el proyecto.
    `,

    "about.closing": `
      Más que especializarme en una sola cosa, me motiva <span class="font-semibold text-accent">aprender continuamente</span> y 
      <span class="font-semibold text-accent">construir soluciones prácticas</span> que se adapten a cada necesidad y contexto.
    `,

    "contact.title": "¡Contáctame!",
    "contact.subtitle": `<span class="text-accent">Disponible para trabajar</span> — Construyamos juntos`,

    "contact.github.title": "GitHub",
    "contact.github.description": "Explora mi código y proyectos",
    "contact.github.url": "https://github.com/JeremySG31",

    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.description": "Conéctate conmigo profesionalmente",
    "contact.linkedin.url": "https://www.linkedin.com/in/jeremydevsoft/",

    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.description": "Envíame un mensaje directo por WhatsApp",
    "contact.whatsapp.url":
      "https://wa.me/51995744659?text=Hola%20Jeremy%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo.",

    "contact.email.title": "Correo",
    "contact.email.description":
      "Envíame un correo para iniciar una conversación",
    "contact.email.url":
      "mailto:jeremy16312928@gmail.com?subject=Hola%20Jeremy%20-%20Portafolio&body=Hola%20Jeremy%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo.",

    "contact.form.title": "Envíame un mensaje",
    "contact.form.name.label": "Nombre",
    "contact.form.name.placeholder": "Tu nombre",
    "contact.form.email.label": "Correo",
    "contact.form.email.placeholder": "Tu correo electrónico",
    "contact.form.message.label": "Mensaje",
    "contact.form.message.placeholder": "Tu mensaje",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success": "¡Mensaje enviado con éxito!",
    "contact.form.error": "Algo salió mal. Por favor, inténtalo de nuevo.",

    "footer.description":
      "Analista Programador | Explorando y construyendo en cualquier rama del desarrollo",
    "footer.copyright": "Jeremy Sánchez. Todos los derechos reservados.",
  },
} as const;

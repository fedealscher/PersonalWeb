// ===== Datos i18n (EN & ES) =====
const resume = {
  en: {
    meta: {
      title: "Federico Alscher | Biomedical Engineer & Developer",
      description:
        "Biomedical engineer and co-founder specialized in AI-powered diagnostic systems and real-time signal processing.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      publications: "Publications",
      education: "Education",
      contact: "Contact",
      langLabel: "EN",
      rights: "All rights reserved.",
    },
    hero: {
      headline:
        "Co-founder || Product Developer & Data Analyst || Biomedical Engineer",
      location: "Buenos Aires City, Argentina",
      ctaCV: "Download CV",
      ctaContact: "Contact",
      photoAlt: "Portrait of Federico Alscher",
      cvHref: "assets/CV_FedericoAlscher_EN.docx",
    },
    about: {
      title: "About",
      text:
        "Biomedical engineer and co-founder specializing in AI-based diagnostic systems and real-time signal-processing tools. Proven ability to lead interdisciplinary projects from concept to prototype across biomedical and environmental domains. Strong technical skills in embedded programming, physiological modeling, and data analysis, with published research and applied results in high-impact projects.",
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Co-founder — Product Developer & Data Analyst",
          dates: "May 2024 — Present",
          org: "Quanttrace, Buenos Aires, Argentina",
          bullets: [
            "Startup focused on non-invasive, real-time sensing technologies (biomedical and environmental)",
            "R&D, systems architecture, and AI analytics to bring lab-grade tools to field solutions",
            "Portable devices with sensing, visualization, and data logging",
            "AI models (neural networks, genetic algorithms) for signal classification and trend detection",
          ],
        },
        {
          role: "Project Engineer",
          dates: "Jul 2024 — Apr 2025",
          org: "Neuroengineering Lab (ITECA/ECyT-UNSAM)",
          bullets: [
            "Functional system for automatic myocardial ischemia detection using ECG + AI",
            "Neural network trained/validated with high sensitivity/specificity",
            "Multichannel preprocessing and extraction of temporal/morphological features",
          ],
        },
        {
          role: "P.E.F.I. Fellow",
          dates: "Feb 2023 — Jul 2024",
          org: "Neuroengineering Lab (ITECA/ECyT-UNSAM)",
          bullets: [
            "Enhancement/validation of a spike-sorting tool (collaboration with FLENI)",
            "Wavelets + genetic algorithms; improved multi-dataset accuracy/robustness",
            "Adaptation to intraoperative data for DBS (target validation)",
            "Coauthor in Advances in Neuroengineering (Springer) and SABI 2023 presentation",
            "Implementation in MATLAB and C#, UI and visualization improvements",
          ],
        },
        {
          role: "Administrative Assistant — Ethics Committee",
          dates: "May 2021 — Present",
          org: "Fundación CIDEA",
          bullets: [
            "Operational support for the Institutional Ethics Committee: regulatory compliance, document integrity, coordination with ANMAT and the Ministry of Health",
            "Management of submissions, amendments, approvals, and records",
            "Minutes and reports; coordination with investigators and sponsors",
          ],
        },
        {
          role: "Internship — Medical Technology",
          dates: "Sep 2023 — Dec 2023",
          org: "Hospital Universitario Austral",
          bullets: [
            "Support for Biomedical Engineering in operation/inspection/maintenance of equipment",
            "Preventive maintenance, troubleshooting, documentation, and cross-functional work",
          ],
        },
        {
          role: "Teaching Assistant (Computer Science)",
          dates: "Aug 2020 — Feb 2023",
          org: "UNSAM",
          bullets: [
            "Theoretical/practical support in C programming, grading, and improvement of teaching materials",
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "Myocardial Ischemia Detection System",
          desc: "ECG + AI for automatic detection on embedded hardware",
          badge: "Biomedical",
        },
        {
          title: "Spike-sorting Tool",
          desc: "Wavelets + genetic algorithms for neuroscience",
          badge: "Research",
        },
        {
          title: "Non-invasive Sensing",
          desc: "Technology to measure blood-related markers without breaking the skin",
          badge: "Biomedical",
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        { name: "Programming", chips: ["MATLAB", "Python", "C", "C++", "C#", "SQL"], color: "blue" },
        { name: "ML / AI", chips: ["Neural networks", "Genetic algorithms", "Classification"], color: "green" },
        { name: "Embedded", chips: ["Data acquisition", "Real time", "Firmware"], color: "purple" },
        { name: "Tools", chips: ["Visual Studio", "Arduino IDE", "Simulink"], color: "orange" },
      ],
    },
    publications: {
      title: "Publications",
      items: [
        {
          title:
            "Algorithm and validation method for spike sorting based on wavelet analysis and a genetic algorithm",
          venue: "Alscher, F. et al. — SABI 2023, Springer",
          doiUrl: "https://doi.org/10.1007/978-3-031-61973-1_7",
          doiText: "DOI: 10.1007/978-3-031-61973-1_7",
        },
        {
          title:
            "Neurophysiological Analysis of the Posterior Subthalamic Area in a Patient with Holmes' Tremor",
          venue: "Wlken, M. et al. — Movement Disorders, 2024",
          doiUrl: "https://doi.org/10.1002/mds.29705",
          doiText: "DOI: 10.1002/mds.29705",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Biomedical Engineer",
          dates: "Feb 2018 — Apr 2025",
          org: "UNSAM",
          details: [
            "GPA: 8.21/10",
            "Final project (10/10): Portable system for automatic myocardial ischemia detection using ECG + neural networks",
          ],
        },
        {
          degree: "High School — Exact and Natural Sciences",
          dates: "2017",
          org: "Colegio Esquiú",
          details: [],
        },
      ],
    },
    contact: { title: "Contact" },
    contactForm: {
  modalTitle: "Contact",
  labels: { name: "Name", email: "Email", message: "Message" },
  placeholders: {
    name: "Your name",
    email: "you@email.com",
    message: "Write your message...",
  },
  buttons: { cancel: "Cancel", send: "Send" },
  feedback: {
    sending: "Sending...",
    success: "Thanks! Your message was sent.",
    error: "Oops! Something went wrong. Please try again.",
  },
},
  },

  es: {
    meta: {
      title: "Federico Alscher | Ingeniero Biomédico & Desarrollador",
      description:
        "Ingeniero biomédico y cofundador especializado en desarrollo de sistemas de diagnóstico con IA y procesamiento de señales en tiempo real.",
    },
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      publications: "Publicaciones",
      education: "Educación",
      contact: "Contacto",
      langLabel: "ES",
      rights: "Todos los derechos reservados.",
    },
    hero: {
      headline:
        "Cofundador || Desarrollador de Producto & Analista de Datos || Ingeniero Biomédico",
      location: "Ciudad de Buenos Aires, Argentina",
      ctaCV: "Descargar CV",
      ctaContact: "Contactar",
      photoAlt: "Retrato de Federico Alscher",
      cvHref: "assets/CV_FedericoAlscher_ES.docx",
    },
    about: {
      title: "Sobre mí",
      text:
        "Ingeniero biomédico y cofundador, especializado en el desarrollo de sistemas de diagnóstico basados en inteligencia artificial y herramientas de procesamiento de señales en tiempo real. Demostrada capacidad para liderar proyectos interdisciplinarios desde el concepto hasta el prototipo, en los ámbitos biomédico y ambiental. Sólidas competencias técnicas en programación embebida, modelado fisiológico y análisis de datos, con investigaciones publicadas y resultados aplicados en proyectos de alto impacto.",
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Cofundador — Desarrollador de Productos y Analista de Datos",
          dates: "May 2024 — Presente",
          org: "Quanttrace, Buenos Aires, Argentina",
          bullets: [
            "Startup dedicada al desarrollo de tecnologías de sensado no invasivo y en tiempo real (biomédico y ambiental)",
            "I+D, arquitectura de sistemas y analítica con IA para llevar herramientas de laboratorio a soluciones de campo",
            "Dispositivos portátiles con sensado, visualización y registro de datos",
            "Modelos de IA (redes neuronales, algoritmos genéticos) para clasificación de señales y detección de tendencias",
          ],
        },
        {
          role: "Ingeniero de Proyecto",
          dates: "Jul 2024 — Abr 2025",
          org: "Laboratorio de Neuroingeniería (ITECA/ECyT-UNSAM)",
          bullets: [
            "Sistema funcional para detección automática de isquemia miocárdica con ECG + IA",
            "Red neuronal entrenada/validada con alta sensibilidad/especificidad",
            "Preprocesamiento y extracción de rasgos temporales/morfológicos multicanal",
          ],
        },
        {
          role: "Becario P.E.F.I.",
          dates: "Feb 2023 — Jul 2024",
          org: "Laboratorio de Neuroingeniería (ITECA/ECyT-UNSAM)",
          bullets: [
            "Mejora/validación de herramienta de spike sorting (colaboración FLENI)",
            "Wavelets + algoritmos genéticos; aumento de precisión/robustez multiconjunto",
            "Adaptación a datos intraoperatorios para DBS (validación de blancos)",
            "Coautor en Advances in Neuroengineering (Springer) y presentación SABI 2023",
            "Implementación en MATLAB y C#, mejoras de UI y visualización",
          ],
        },
        {
          role: "Asistente Administrativo — Comité de Ética",
          dates: "May 2021 — Presente",
          org: "Fundación CIDEA",
          bullets: [
            "Soporte operativo del CEI: cumplimiento normativo, integridad documental, coordinación con ANMAT y Min. de Salud",
            "Gestión de presentaciones, enmiendas, aprobaciones y registros",
            "Actas e informes; coordinación con investigadores y patrocinadores",
          ],
        },
        {
          role: "Pasantía — Tecnología Médica",
          dates: "Sep 2023 — Dic 2023",
          org: "Hospital Universitario Austral",
          bullets: [
            "Soporte a Ingeniería Biomédica en operación/inspección/mantenimiento de equipamiento",
            "Mantenimiento preventivo, diagnóstico de fallas, documentación y trabajo interdisciplinario",
          ],
        },
        {
          role: "Ayudante de Cátedra (Informática)",
          dates: "Ago 2020 — Feb 2023",
          org: "UNSAM",
          bullets: [
            "Apoyo teórico/práctico en programación en C, correcciones y mejora de materiales docentes",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      items: [
        {
          title: "Sistema de detección de isquemia",
          desc: "ECG + IA para detección automática con hardware embebido",
          badge: "Biomédico",
        },
        {
          title: "Herramienta de spike sorting",
          desc: "Wavelets + algoritmos genéticos para neurociencia",
          badge: "Investigación",
        },
        {
          title: "Sensado no invasivo",
          desc: "Tecnología para medir marcadores relacionados con sangre sin penetrar la piel",
          badge: "Biomédico",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      groups: [
        { name: "Programación", chips: ["MATLAB", "Python", "C", "C++", "C#", "SQL"], color: "blue" },
        { name: "ML/IA", chips: ["Redes neuronales", "Algoritmos genéticos", "Clasificación"], color: "green" },
        { name: "Embebidos", chips: ["Adquisición de datos", "Tiempo real", "Firmware"], color: "purple" },
        { name: "Herramientas", chips: ["Visual Studio", "Arduino IDE", "Simulink"], color: "orange" },
      ],
    },
    publications: {
      title: "Publicaciones",
      items: [
        {
          title:
            "Algorithm and validation method for spike sorting based on wavelet analysis and a genetic algorithm",
          venue: "Alscher, F. et al. — SABI 2023, Springer",
          doiUrl: "https://doi.org/10.1007/978-3-031-61973-1_7",
          doiText: "DOI: 10.1007/978-3-031-61973-1_7",
        },
        {
          title:
            "Neurophysiological Analysis of the Posterior Subthalamic Area in a Patient with Holmes' Tremor",
          venue: "Wlken, M. et al. — Movement Disorders, 2024",
          doiUrl: "https://doi.org/10.1002/mds.29705",
          doiText: "DOI: 10.1002/mds.29705",
        },
      ],
    },
    education: {
      title: "Educación",
      items: [
        {
          degree: "Ingeniero Biomédico",
          dates: "Feb 2018 — Abr 2025",
          org: "UNSAM",
          details: [
            "GPA: 8,21/10",
            "Proyecto final (10/10): Sistema portátil para detección automática de isquemia miocárdica usando ECG + redes neuronales",
          ],
        },
        {
          degree: "Bachiller en Cs. Exactas y Naturales",
          dates: "2017",
          org: "Colegio Esquiú",
          details: [],
        },
      ],
    },
    contact: { title: "Contacto" },
    contactForm: {
  modalTitle: "Contacto",
  labels: { name: "Nombre", email: "Mail", message: "Mensaje" },
  placeholders: {
    name: "Tu nombre",
    email: "vos@email.com",
    message: "Escribí tu mensaje...",
  },
  buttons: { cancel: "Cancelar", send: "Enviar" },
  feedback: {
    sending: "Enviando...",
    success: "¡Gracias! Tu mensaje fue enviado.",
    error: "Uy, algo falló. Probá de nuevo.",
  },
},
  },
};

/* ====== helpers ====== */
const byId = (id) => document.getElementById(id);

function chipClasses(color) {
  // Map semantic color to Tailwind classes
  const map = {
    blue: { bg: "bg-blue-100", text: "text-blue-800" },
    green: { bg: "bg-green-100", text: "text-green-800" },
    purple: { bg: "bg-purple-100", text: "text-purple-800" },
    orange: { bg: "bg-orange-100", text: "text-orange-800" },
  };
  return map[color] || map.blue;
}

function setMeta(meta) {
  document.title = meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", meta.description);
}


function buildMailto({ locale }) {
  const to = "fede.alscher@gmail.com";
  const subject =
    locale === "es"
      ? "Consulta desde tu sitio web"
      : "Inquiry from your website";
  const body =
    locale === "es"
      ? "Hola Federico,%0D%0A%0D%0AEstuve viendo tu sitio y me gustaría contactarte por..."
      : "Hi Federico,%0D%0A%0D%0AI was checking your site and I'd like to reach out about...";

  // OJO: usamos encodeURIComponent si armás strings dinámicos.
  return `mailto:${to}?subject=${subject}&body=${body}`;
}


// === Config: pegá tu endpoint real de Formspree acá ===
const FORM_ENDPOINT = "https://formspree.io/f/mnngqplr";

function currentLocale() {
  return document.documentElement.getAttribute("lang") === "es" ? "es" : "en";
}

function applyContactFormTexts(t) {
  // Títulos/labels
  byId("contact-modal-title").textContent = t.contactForm.modalTitle;
  byId("cf-label-name").textContent = t.contactForm.labels.name;
  byId("cf-label-email").textContent = t.contactForm.labels.email;
  byId("cf-label-message").textContent = t.contactForm.labels.message;
  // Placeholders
  byId("cf-name").placeholder = t.contactForm.placeholders.name;
  byId("cf-email").placeholder = t.contactForm.placeholders.email;
  byId("cf-message").placeholder = t.contactForm.placeholders.message;
  // Botones
  byId("cf-cancel").textContent = t.contactForm.buttons.cancel;
  byId("cf-send").textContent = t.contactForm.buttons.send;
}

function openContactModal() {
  const modal = byId("contact-modal");
  modal.classList.remove("hidden");
  if (window.feather) feather.replace();
}

function closeContactModal() {
  const modal = byId("contact-modal");
  modal.classList.add("hidden");
  const form = byId("contact-form");
  form.reset();
  const fb = byId("cf-feedback");
  fb.classList.add("hidden");
  fb.textContent = "";
  fb.classList.remove("text-green-700","text-red-700");
}


/* ====== render functions ====== */
function renderNav(t) {
  byId("nav-about").textContent = t.nav.about;
  byId("nav-experience").textContent = t.nav.experience;
  byId("nav-projects").textContent = t.nav.projects;
  byId("nav-skills").textContent = t.nav.skills;
  byId("nav-publications").textContent = t.nav.publications;
  byId("nav-education").textContent = t.nav.education;
  byId("nav-contact").textContent = t.nav.contact;

  byId("mnav-about").textContent = t.nav.about;
  byId("mnav-experience").textContent = t.nav.experience;
  byId("mnav-projects").textContent = t.nav.projects;
  byId("mnav-skills").textContent = t.nav.skills;
  byId("mnav-publications").textContent = t.nav.publications;
  byId("mnav-education").textContent = t.nav.education;
  byId("mnav-contact").textContent = t.nav.contact;

  byId("lang-label").textContent = t.nav.langLabel;
  byId("mlang-label").textContent = t.nav.langLabel;
  byId("rights").textContent = t.nav.rights;
}

function renderHero(t) {
  byId("hero-headline").textContent = t.hero.headline;
  byId("hero-location").textContent = t.hero.location;
  byId("cta-cv-label").textContent = t.hero.ctaCV;
  byId("cta-contact-label").textContent = t.hero.ctaContact;
  byId("cta-cv").setAttribute("href", t.hero.cvHref);

  // >>> Aca agregamos el mailto con idioma <<<
  const locale = document.documentElement.getAttribute("lang") === "es" ? "es" : "en";
  const mailto = buildMailto({ locale });
  const contactBtn = byId("cta-contact");
  contactBtn.setAttribute("href", mailto);
  contactBtn.removeAttribute("target"); // que use el cliente del sistema

  const img = byId("hero-photo");
  img.alt = t.hero.photoAlt;
}

function renderAbout(t) {
  byId("about-title").textContent = t.about.title;
  byId("about-text").textContent = t.about.text;
}

function renderExperience(t) {
  byId("experience-title").textContent = t.experience.title;
  const wrap = byId("experience-list");
  wrap.innerHTML = "";
  t.experience.items.forEach((it) => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-xl shadow-md";
    card.setAttribute("data-aos", "fade-up");
    card.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-semibold">${it.role}</h3>
        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${it.dates}</span>
      </div>
      <p class="text-blue-600 mb-4">${it.org}</p>
      <ul class="list-disc list-inside space-y-2 text-slate-700">
        ${it.bullets.map((b) => `<li>${b}</li>`).join("")}
      </ul>
    `;
    wrap.appendChild(card);
  });
}

function renderProjects(t) {
  byId("projects-title").textContent = t.projects.title;
  const grid = byId("projects-grid");
  grid.innerHTML = "";
  t.projects.items.forEach((p) => {
    const card = document.createElement("div");
    card.className = "bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow";
    card.setAttribute("data-aos", "fade-up");
    card.innerHTML = `
      <h3 class="text-xl font-semibold mb-3">${p.title}</h3>
      <p class="text-slate-600 mb-4">${p.desc}</p>
      <span class="badge bg-green-100 text-green-800">${p.badge}</span>
    `;
    grid.appendChild(card);
  });
}

function renderSkills(t) {
  byId("skills-title").textContent = t.skills.title;
  const grid = byId("skills-grid");
  grid.innerHTML = "";
  t.skills.groups.forEach((g) => {
    const { bg, text } = chipClasses(g.color);
    const col = document.createElement("div");
    col.setAttribute("data-aos", "fade-up");
    col.innerHTML = `
      <h3 class="text-lg font-semibold mb-4 text-blue-600">${g.name}</h3>
      <div class="flex flex-wrap gap-2">
        ${g.chips
          .map(
            (c) => `<span class="${bg} ${text} px-3 py-1 rounded-full">${c}</span>`
          )
          .join("")}
      </div>
    `;
    grid.appendChild(col);
  });
}

function renderPublications(t) {
  byId("publications-title").textContent = t.publications.title;
  const list = byId("publications-list");
  list.innerHTML = "";
  t.publications.items.forEach((p) => {
    const card = document.createElement("div");
    card.className = "bg-slate-50 p-6 rounded-xl";
    card.setAttribute("data-aos", "fade-up");
    card.innerHTML = `
      <h3 class="text-lg font-semibold mb-2">${p.title}</h3>
      <p class="text-slate-600 mb-3">${p.venue}</p>
      <a href="${p.doiUrl}" class="text-blue-600 hover:underline flex items-center" target="_blank" rel="noopener">
        <i data-feather="external-link" class="mr-2"></i>
        ${p.doiText}
      </a>
    `;
    list.appendChild(card);
  });
}

function renderEducation(t) {
  byId("education-title").textContent = t.education.title;
  const list = byId("education-list");
  list.innerHTML = "";
  t.education.items.forEach((e) => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-xl shadow-md";
    card.setAttribute("data-aos", "fade-up");
    const details =
      e.details && e.details.length
        ? `<p class="text-slate-600 mt-2">${e.details.join("<br/>")}</p>`
        : "";
    card.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-semibold">${e.degree}</h3>
        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${e.dates}</span>
      </div>
      <p class="text-blue-600 mb-2">${e.org}</p>
      ${details}
    `;
    list.appendChild(card);
  });
}

function renderContact(t) {
  byId("contact-title").textContent = t.contact.title;
}

/* ====== main render ====== */
function render(locale) {
  const t = resume[locale] || resume.en;

  // Update html lang
  document.documentElement.setAttribute("lang", locale === "es" ? "es" : "en");

  // Meta
  setMeta(t.meta);

  // Sections
  renderNav(t);
  renderHero(t);
  renderAbout(t);
  renderExperience(t);
  renderProjects(t);
  renderSkills(t);
  renderPublications(t);
  renderEducation(t);
  renderContact(t);
  applyContactFormTexts(t);

  // Enhance UI
  if (window.AOS) AOS.init({ duration: 800, once: true });
  if (window.feather) feather.replace();

  // Current year
  const yearEl = byId("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ====== language toggle + mobile menu ====== */
function setupInteractions() {
  const menuBtn = byId("menu-btn");
  const mobileMenu = byId("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  function switchLocale() {
    const current = localStorage.getItem("locale") || "en";
    const next = current === "en" ? "es" : "en";
    localStorage.setItem("locale", next);
    render(next);
  }

  const btn = byId("lang-toggle");
  const mbtn = byId("mlang-toggle");
  if (btn) btn.addEventListener("click", switchLocale);
  if (mbtn) mbtn.addEventListener("click", () => {
    switchLocale();
    // Close mobile menu after switching
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });

  // Abrir modal al hacer click en el botón del hero
const contactBtn = byId("cta-contact");
if (contactBtn) {
  contactBtn.addEventListener("click", (e) => {
    e.preventDefault(); // evita navegar
    openContactModal();
  });
}

// Cerrar modal: botón X, Cancelar, click en el fondo, tecla ESC
const modal = byId("contact-modal");
const closeBtn = byId("contact-close");
const cancelBtn = byId("cf-cancel");

[closeBtn, cancelBtn].forEach((el) => {
  if (el) el.addEventListener("click", closeContactModal);
});

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeContactModal(); // clic fuera de la caja
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeContactModal();
});

// Enviar formulario a Formspree
const form = byId("contact-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const locale = currentLocale();
    const t = resume[locale];

    const fb = byId("cf-feedback");
    fb.classList.remove("hidden", "text-green-700", "text-red-700");
    fb.classList.add("text-slate-700");
    fb.textContent = t.contactForm.feedback.sending;

    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        fb.classList.remove("text-slate-700");
        fb.classList.add("text-green-700");
        fb.textContent = t.contactForm.feedback.success;
        // opcional: cerrar a los 1.2s
        setTimeout(closeContactModal, 1200);
      } else {
        throw new Error("Form submit failed");
      }
    } catch (err) {
      fb.classList.remove("text-slate-700");
      fb.classList.add("text-red-700");
      fb.textContent = t.contactForm.feedback.error;
    }
  });
}

}

/* ====== boot ====== */
document.addEventListener("DOMContentLoaded", () => {
  // Choose default locale: saved → else EN
  const saved = localStorage.getItem("locale") || "en";
  render(saved);
  setupInteractions();
});

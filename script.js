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
      location: "Buenos Aires, Argentina",
      ctaCV: "Download CV",
      ctaContact: "Contact",
      photoAlt: "Portrait of Federico Alscher",
      cvHref: "assets/CV_FedericoAlscher_EN.pdf",
    },
    about: {
      title: "About",
      text:
        "Biomedical Engineer and co-founder focused on data analytics and deployable solutions. I lead end-to-end delivery across problem definition, requirements, data integration/cleaning, feature engineering, model training and validation, and production deployment—aligning stakeholders, timelines, and measurable outcomes. I work with Python, SQL, MATLAB, and C/C++, combining rapid prototyping with quality standards and performance measurement. I also have experience teaching machine learning and programming at the university level.",
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Co-Founder | Product Developer & Data Analyst",
          dates: "May 2024 — Present",
          org: "Quanttrace, Buenos Aires, Argentina",
          bullets: [
            "Delivered portable prototypes integrating sensing, UI/display, and data logging to enable on-site acquisition and faster iteration cycles.",
            "Built and tuned AI models (neural networks, genetic algorithms) for signal classification and trend detection, improving robustness on noisy field data.",
            "Implemented low-latency acquisition and analysis pipelines in MATLAB, Python, and C/C++ to support real-time feedback and reliability.",
            "Standardized modular codebases, automated analysis routines, and testing workflows to increase repeatability and reduce iteration time.",
            "Owned end-to-end delivery from requirements to validation; defined acceptance criteria and performance metrics to guide releases."
          ],
        },
        {
          role: "Teaching Assistant – Introduction to Machine Learning",
          dates: "Jul 2025 — Present",
          org: "UNSAM",
          bullets: [
            "Deliver theoretical and practical classes on regression, classification, clustering, and neural networks, integrating theory with applied Python examples.",
            "Guide students through model implementation, validation, and tuning, promoting good programming and modelling practices.",
            "Contribute to the development and update of course materials, and support the grading of assignments and exams."
          ],
        },
        {
          role: "Project Engineer",
          dates: "Jul 2024 — Apr 2025",
          org: "Neuroengineering Laboratory (ITECA/ECyT-UNSAM)",
          bullets: [
            "Trained and validated a custom neural network under realistic testing conditions using defined clinical metrics.",
            "Engineered preprocessing pipelines to extract temporal and morphological features from multichannel signals, improving diagnostic reliability.",
            "Deployed the trained model to embedded hardware by converting it to optimized C code with live screen and LED feedback.",
            "Evaluated performance and documented results for reproducibility and usability in point-of-care scenarios.",
            "Prioritized portability, low power, and an intuitive user interface to support real-world feasibility."
          ],
        },
        {
          role: "P.E.F.I. Fellow",
          dates: "Feb 2023 — Jul 2024",
          org: "Neuroengineering Laboratory (ITECA/ECyT-UNSAM)",
          bullets: [
            "Enhanced an existing spike classification pipeline using wavelet decomposition and genetic algorithms, increasing accuracy and robustness across datasets.",
            "Collaborated with clinicians at FLENI to adapt the system for intraoperative data, supporting deep brain stimulation (DBS) target validation.",
            "Co-authored a peer-reviewed publication in Springer Nature's “Advances in Neuroengineering” and presented results at the Argentine Congress of Bioengineering (SABI 2023).",
            "Implemented and tested algorithm components in MATLAB and C#, improving data visualization and UI responsiveness across sessions."
          ],
        },
        {
          role: "Administrative Assistant - Ethics Committee",
          dates: "May 2021 — Present",
          org: "Fundación CIDEA",
          bullets: [
            "Managed ethics submissions, amendments, and approvals for clinical protocols, ensuring documentation integrity and audit readiness.",
            "Coordinated investigators and sponsors to ensure timely documentation and transparent communication throughout review cycles.",
            "Liaised with regulatory bodies including ANMAT and the Ministry of Health to facilitate inspections, audits, and procedural alignment.",
            "Drafted and organized meeting minutes and evaluation reports, contributing to procedural clarity and traceability."
          ],
        },
        {
          role: "Medical Technology Field Technician Intern",
          dates: "Sep 2023 — Dec 2023",
          org: "Austral University Hospital",
          bullets: [
            "Performed routine checks and preventive maintenance under supervision, ensuring compliance with safety and performance standards.",
            "Assisted in diagnosing and resolving technical issues in medical devices, contributing to faster equipment turnaround.",
            "Documented service reports and collaborated with clinical and technical teams to prioritize interventions based on patient care needs.",
            "Gained practical understanding of hospital workflows, equipment regulations, and quality control protocols."
          ],
        },
        {
          role: "Assistant Teaching Fellow in Computer Science",
          dates: "Aug 2020 — Feb 2023",
          org: "National University of San Martín (UNSAM)",
          bullets: [
            "Guided students through problem-solving sessions in C, reinforcing core concepts in logic, control structures, and data handling.",
            "Reviewed and graded assignments and exams, delivering constructive feedback to support student growth and understanding.",
            "Contributed to the development and refinement of course materials, improving clarity and accessibility for diverse student backgrounds.",
            "Fostered a collaborative, inclusive environment that encouraged critical thinking and active engagement with computational challenges."
          ],
        },
        {
          role: "Academic Leadership & Mentorship",
          dates: "Various",
          org: "UNSAM",
          bullets: [
            "Co-supervisor for an Electronic Engineering capstone project: provided methodological and technical guidance, defined objectives and milestones, and reviewed documentation and deliverables.",
            "Supervisor for a PEFI scholarship project: mentored the work plan, coordinated tasks and timeline, evaluated progress, and supported technical reporting."
          ],
        }
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
        { name: "Programming", chips: ["Python", "MATLAB", "C", "C++", "C#", "SQL"], color: "blue" },
        { name: "Data & ML", chips: ["ETL", "Feature engineering", "Time-series analysis", "Model training", "Experiment tracking"], color: "green" },
        { name: "Machine Learning", chips: ["Neural networks", "Genetic algorithms", "Classification", "Model selection"], color: "green" },
        { name: "Embedded Systems", chips: ["Real-time acquisition", "Firmware", "Sensor integration", "Low-latency processing"], color: "purple" },
        { name: "Project & Delivery", chips: ["Requirements", "Stakeholders", "Documentation", "Risk management", "KPI/Metrics"], color: "orange" },
        { name: "Tools", chips: ["Visual Studio", "Arduino IDE", "Simulink", "Android Studio"], color: "orange" },
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
          degree: "Biomedical Engineer (Master-level)",
          dates: "Feb 2018 — Apr 2025",
          org: "UNSAM",
          details: [
            "GPA: 8.21 / 10",
            "Final project (10/10): Portable system for automatic myocardial ischemia detection using ECG and neural networks",
          ],
        }
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
      location: "Buenos Aires, Argentina",
      ctaCV: "Descargar CV",
      ctaContact: "Contactar",
      photoAlt: "Retrato de Federico Alscher",
      cvHref: "assets/CV_FedericoAlscher_ES.pdf",
    },
    about: {
      title: "Sobre mí",
      text:
        "Ingeniero Biomédico y cofundador con enfoque en analítica y modelado de datos, orientado a transformar datos en decisiones y soluciones implementables. Lidero proyectos de punta a punta: definición del problema, levantamiento de requerimientos, integración/limpieza de datos, feature engineering, entrenamiento y validación de modelos, y puesta en producción—alineando stakeholders, cronogramas y resultados medibles. Trabajo con Python, SQL, MATLAB y C/C++, combinando rapidez de prototipado con criterios de calidad y medición de desempeño. Además, cuento con experiencia en docencia universitaria en aprendizaje automático y programación.",
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Cofundador | Desarrollador de Producto & Analista de Datos",
          dates: "May 2024 — Presente",
          org: "Quanttrace, Buenos Aires, Argentina",
          bullets: [
            "Entregué prototipos portátiles integrando sensado, visualización/interfaz y registro de datos para habilitar adquisición in situ y ciclos de iteración más rápidos.",
            "Desarrollé y ajusté modelos de IA (redes neuronales, algoritmos genéticos) para clasificación de señales y detección de tendencias, mejorando la robustez ante datos ruidosos de campo.",
            "Implementé pipelines de adquisición y análisis de baja latencia en MATLAB, Python y C/C++ para retroalimentación en tiempo real y alta confiabilidad.",
            "Estandaricé bases de código modulares, rutinas automatizadas de análisis y flujos de prueba para aumentar repetibilidad y reducir tiempos de iteración.",
            "Lideré entregas end-to-end desde requerimientos hasta validación; definí criterios de aceptación y métricas de desempeño para guiar releases."
          ],
        },
        {
          role: "Ayudante de Cátedra – Introducción al Aprendizaje Automático",
          dates: "Jul 2025 — Presente",
          org: "UNSAM",
          bullets: [
            "Dicto clases teóricas y prácticas sobre regresión, clasificación, clustering y redes neuronales, integrando teoría con ejemplos aplicados en Python.",
            "Guío a estudiantes en implementación, validación y ajuste de modelos, promoviendo buenas prácticas de programación y modelado.",
            "Colaboro en la elaboración/actualización de material docente y en la corrección de trabajos prácticos y exámenes."
          ],
        },
        {
          role: "Ingeniero de Proyecto",
          dates: "Jul 2024 — Abr 2025",
          org: "Laboratorio de Neuroingeniería (ITECA/ECyT-UNSAM)",
          bullets: [
            "Entrené y validé una red neuronal personalizada bajo condiciones de prueba realistas utilizando métricas clínicas definidas.",
            "Diseñé pipelines de preprocesamiento para extraer características temporales y morfológicas de señales multicanal, mejorando la confiabilidad diagnóstica.",
            "Desplegué el modelo en hardware embebido convirtiéndolo a código C optimizado con feedback en tiempo real mediante pantalla y LEDs.",
            "Evalué desempeño y documenté resultados para reproducibilidad y usabilidad en escenarios de atención directa.",
            "Priorizé portabilidad, bajo consumo e interfaz de usuario intuitiva para viabilidad en aplicaciones reales."
          ],
        },
        {
          role: "Becario P.E.F.I.",
          dates: "Feb 2023 — Jul 2024",
          org: "Laboratorio de Neuroingeniería (ITECA/ECyT-UNSAM)",
          bullets: [
            "Mejoré un pipeline existente de clasificación de spikes utilizando descomposición wavelet y algoritmos genéticos, aumentando precisión y robustez entre datasets.",
            "Colaboré con clínicos de FLENI para adaptar el sistema a datos intraoperatorios, apoyando validación de blancos para estimulación cerebral profunda (DBS).",
            "Coautor de una publicación revisada por pares en “Advances in Neuroengineering” (Springer Nature) y presentación en el Congreso Argentino de Bioingeniería (SABI 2023).",
            "Implementé y probé componentes en MATLAB y C#, mejorando visualización de datos y respuesta de la interfaz durante sesiones."
          ],
        },
        {
          role: "Asistente Administrativo – Comité de Ética",
          dates: "May 2021 — Presente",
          org: "Fundación CIDEA",
          bullets: [
            "Gestioné presentaciones, enmiendas y aprobaciones de protocolos clínicos, asegurando integridad documental y preparación para auditorías.",
            "Coordiné investigadores y patrocinadores para garantizar documentación oportuna y comunicación transparente durante los ciclos de revisión.",
            "Actué como enlace con organismos reguladores (ANMAT, Ministerio de Salud) facilitando inspecciones, auditorías y alineación de procedimientos.",
            "Redacté y organicé actas de reuniones e informes de evaluación, contribuyendo a claridad y trazabilidad de los procesos."
          ],
        },
        {
          role: "Pasante en Tecnología Médica",
          dates: "Sep 2023 — Dic 2023",
          org: "Hospital Universitario Austral",
          bullets: [
            "Realicé controles rutinarios y mantenimiento preventivo bajo supervisión, asegurando cumplimiento de estándares de seguridad y desempeño.",
            "Asistí en diagnóstico y resolución de fallas técnicas en dispositivos médicos, contribuyendo a reducir tiempos de inactividad.",
            "Documenté reportes de servicio y coordiné con equipos clínicos y técnicos la priorización de intervenciones según necesidades asistenciales.",
            "Adquirí comprensión práctica de flujos hospitalarios, normativas de equipamiento y protocolos de control de calidad."
          ],
        },
        {
          role: "Ayudante de Cátedra en Informática",
          dates: "Ago 2020 — Feb 2023",
          org: "Universidad Nacional de San Martín (UNSAM)",
          bullets: [
            "Guié a estudiantes en sesiones de resolución de problemas en C, reforzando lógica, estructuras de control y manejo de datos.",
            "Revisé y califiqué trabajos prácticos y exámenes, brindando retroalimentación constructiva para apoyar comprensión y progreso.",
            "Contribuí al desarrollo y mejora de materiales del curso, aumentando claridad y accesibilidad para distintos perfiles.",
            "Fomenté un entorno colaborativo e inclusivo que estimuló pensamiento crítico y participación activa frente a desafíos computacionales."
          ],
        },
        {
          role: "Dirección y Tutoría Académica",
          dates: "Varios",
          org: "UNSAM",
          bullets: [
            "Co-director de Proyecto Final (Ing. Electrónica): acompañamiento metodológico y técnico, definición de objetivos e hitos, revisión de documentación y entregables.",
            "Director / Tutor de Beca PEFI: tutoría y seguimiento del plan de trabajo, coordinación de tareas y cronograma, evaluación de avances y soporte documentario."
          ],
        }
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
        { name: "Programación", chips: ["Python", "MATLAB", "C", "C++", "C#", "SQL"], color: "blue" },
        { name: "Datos & ML", chips: ["ETL", "Feature engineering", "Series temporales", "Entrenamiento", "Métricas de desempeño", "Trazabilidad"], color: "green" },
        { name: "Machine Learning", chips: ["Redes neuronales", "Algoritmos genéticos", "Clasificación", "Ajuste de modelos"], color: "green" },
        { name: "Sistemas embebidos", chips: ["Adquisición en tiempo real", "Firmware", "Sensores", "Baja latencia"], color: "purple" },
        { name: "Gestión & Entregas", chips: ["Requerimientos", "Stakeholders", "Documentación", "Riesgos", "KPI/métricas"], color: "orange" },
        { name: "Herramientas", chips: ["Visual Studio", "Arduino IDE", "Simulink", "Android Studio"], color: "orange" },
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
          degree: "Ingeniero Biomédico (Grado y Maestría)",
          dates: "Feb 2018 — Abr 2025",
          org: "UNSAM",
          details: [
            "Promedio general: 8,21 / 10",
            "Proyecto final (10/10): Sistema portátil para detección automática de isquemia miocárdica usando ECG y redes neuronales",
          ],
        }
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
  fb.classList.remove("text-green-700", "text-red-700");
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

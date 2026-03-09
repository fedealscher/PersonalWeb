// ===== Datos i18n (EN & ES) =====
const resume = {
  en: {
    meta: {
      title: "Federico Alscher | Biomedical Engineer & Developer",
      description: "Biomedical engineer and co-founder specialized in AI-powered diagnostic systems and real-time signal processing.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      leadership: "Leadership",
      education: "Education",
      skills: "Skills",
      publications: "Publications",
      contact: "Contact",
      langLabel: "EN",
      rights: "All rights reserved.",
    },
    hero: {
      headline: "Co-founder || Product Developer & Data Analyst || Biomedical Engineer",
      location: "Buenos Aires, Argentina",
      status: "Open to opportunities",
      ctaCV: "Download CV",
      ctaContact: "Contact",
      photoAlt: "Portrait of Federico Alscher",
      cvHref: "assets/CV_FedericoAlscher_EN.pdf",
    },
    about: {
      title: "About",
      text: "Biomedical Engineer and co-founder focused on data analytics and deployable solutions. I lead end-to-end delivery across problem definition, requirements, data integration/cleaning, feature engineering, model training and validation, and production deployment\u2014aligning stakeholders, timelines, and measurable outcomes. I work with Python, SQL, MATLAB, and C/C++, combining rapid prototyping with quality standards and performance measurement. I also have experience teaching machine learning and programming at the university level.",
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Co-Founder | Product Developer & Data Analyst",
          dates: "May 2024 \u2014 Present",
          org: "Quanttrace, Buenos Aires, Argentina",
          description: "Co-founded a startup developing non-invasive, real-time sensing technologies for biomedical and environmental monitoring. Contributed across R&D, systems architecture, and AI-based analytics to bring lab-grade tools into field-ready formats.",
          bullets: [
            "Delivered portable prototypes integrating sensing, UI/display, and data logging to enable on-site acquisition and faster iteration cycles.",
            "Built and tuned AI models (neural networks, genetic algorithms) for signal classification and trend detection, improving robustness on noisy field data.",
            "Implemented low-latency acquisition and analysis pipelines in MATLAB, Python, and C/C++ to support real-time feedback and reliability.",
            "Standardized modular codebases, automated analysis routines, and testing workflows to increase repeatability and reduce iteration time.",
            "Owned end-to-end delivery from requirements to validation; defined acceptance criteria and performance metrics to guide releases."
          ]
        },
        {
          role: "Teaching Assistant \u2013 Introduction to Machine Learning",
          dates: "Jul 2025 \u2014 Present",
          org: "National University of San Mart\u00edn (UNSAM)",
          description: "I participate in the theoretical and practical instruction of the course Introduction to Machine Learning, covering topics such as data preprocessing, linear and logistic regression, classification, clustering, basic neural networks, and model selection.",
          bullets: [
            "Deliver theoretical and practical classes on regression, classification, clustering, and neural networks, integrating theory with applied Python examples.",
            "Guide students through model implementation, validation, and tuning, promoting good programming and modelling practices.",
            "Contribute to the development and update of course materials, and support the grading of assignments and exams."
          ]
        },
        {
          role: "Project Engineer",
          dates: "Jul 2024 \u2014 Apr 2025",
          org: "Neuroengineering Laboratory (ITECA/ECyT-UNSAM)",
          description: "Designed and built a fully functional system for automatic detection of myocardial ischemia using ECG signals and AI \u2014 integrating signal processing, machine learning, and embedded implementation.",
          bullets: [
            "Trained and validated a custom neural network under realistic testing conditions using defined clinical metrics.",
            "Engineered preprocessing pipelines to extract temporal and morphological features from multichannel signals, improving diagnostic reliability.",
            "Deployed the trained model to embedded hardware by converting it to optimized C code with live screen and LED feedback.",
            "Evaluated performance and documented results for reproducibility and usability in point-of-care scenarios.",
            "Prioritized portability, low power, and an intuitive user interface to support real-world feasibility."
          ]
        },
        {
          role: "P.E.F.I. Fellow",
          dates: "Feb 2023 \u2014 Jul 2024",
          org: "Neuroengineering Laboratory (ITECA/ECyT-UNSAM)",
          description: "Joined an interdisciplinary research team to improve and validate an AI-based spike sorting tool for analyzing neural recordings \u2014 a collaborative project with FLENI aimed at enhancing surgical planning for movement disorders.",
          bullets: [
            "Enhanced an existing spike classification pipeline using wavelet decomposition and genetic algorithms, increasing accuracy and robustness across datasets.",
            "Collaborated with clinicians at FLENI to adapt the system for intraoperative data, supporting deep brain stimulation (DBS) target validation.",
            "Co-authored a peer-reviewed publication in Springer Nature\u2019s \u201cAdvances in Neuroengineering\u201d and presented results at the Argentine Congress of Bioengineering (SABI 2023).",
            "Implemented and tested algorithm components in MATLAB and C#, improving data visualization and UI responsiveness across sessions."
          ]
        },
        {
          role: "Administrative Assistant - Ethics Committee",
          dates: "May 2021 \u2014 Present",
          org: "Fundaci\u00f3n CIDEA",
          description: "Supported the operations of the Institutional Ethics Committee at Fundaci\u00f3n CIDEA, a clinical research organization conducting biomedical studies in both public and private sectors. Ensured regulatory compliance, documentation integrity, and coordination with national health authorities.",
          bullets: [
            "Managed ethics submissions, amendments, and approvals for clinical protocols, ensuring documentation integrity and audit readiness.",
            "Coordinated investigators and sponsors to ensure timely documentation and transparent communication throughout review cycles.",
            "Liaised with regulatory bodies including ANMAT and the Ministry of Health to facilitate inspections, audits, and procedural alignment.",
            "Drafted and organized meeting minutes and evaluation reports, contributing to procedural clarity and traceability."
          ]
        },
        {
          role: "Medical Technology Field Technician Intern",
          dates: "Sep 2023 \u2014 Dec 2023",
          org: "Austral University Hospital",
          description: "Completed a professional internship supporting the Biomedical Engineering Department in the operation, inspection, and maintenance of medical equipment across critical care and outpatient areas.",
          bullets: [
            "Performed routine checks and preventive maintenance under supervision, ensuring compliance with safety and performance standards.",
            "Assisted in diagnosing and resolving technical issues in medical devices, contributing to faster equipment turnaround.",
            "Documented service reports and collaborated with clinical and technical teams to prioritize interventions based on patient care needs.",
            "Gained practical understanding of hospital workflows, equipment regulations, and quality control protocols."
          ]
        },
        {
          role: "Assistant Teaching Fellow in Computer Science",
          dates: "Aug 2020 \u2014 Feb 2023",
          org: "National University of San Mart\u00edn",
          description: "Provided academic support for an undergraduate course in computer science, assisting in both theoretical instruction and practical coding workshops. Collaborated closely with faculty to enhance learning outcomes in programming fundamentals and algorithmic thinking.",
          bullets: [
            "Guided students through problem-solving sessions in C, reinforcing core concepts in logic, control structures, and data handling.",
            "Reviewed and graded assignments and exams, delivering constructive feedback to support student growth and understanding.",
            "Contributed to the development and refinement of course materials, improving clarity and accessibility for diverse student backgrounds.",
            "Fostered a collaborative, inclusive environment that encouraged critical thinking and active engagement with computational challenges."
          ]
        }
      ]
    },
    leadership: {
      title: "Academic Leadership",
      items: [
        {
          role: "Co-supervisor for an Electronic Engineering Capstone Project",
          dates: "UNSAM",
          org: "",
          description: "Provided methodological and technical guidance, defined objectives and milestones, and reviewed documentation and deliverables through final defense."
        },
        {
          role: "Supervisor for a PEFI Scholarship Project",
          dates: "UNSAM",
          org: "",
          description: "Mentored the work plan, coordinated tasks and timeline, evaluated progress, and supported technical reporting and results writing."
        }
      ]
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
      ]
    },
    publications: {
      title: "Publications",
      items: [
        {
          title: "Algorithm and validation method for spike sorting based on wavelet analysis and a genetic algorithm",
          venue: "Alscher, F. et al. \u2014 SABI 2023, Springer",
          doiUrl: "https://doi.org/10.1007/978-3-031-61973-1_7",
          doiText: "DOI: 10.1007/978-3-031-61973-1_7",
        },
        {
          title: "Neurophysiological Analysis of the Posterior Subthalamic Area in a Patient with Holmes\u2019 Tremor",
          venue: "Wlken, M. et al. \u2014 Movement Disorders, 2024",
          doiUrl: "https://doi.org/10.1002/mds.29705",
          doiText: "DOI: 10.1002/mds.29705",
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Biomedical Engineer",
          dates: "Feb 2018 \u2014 Apr 2025",
          org: "National University of San Mart\u00edn",
          details: [
            "Final project (graded 10/10): Portable system for automatic myocardial ischemia detection using ECG and neural networks.",
            "GPA: 8.21 / 10",
          ]
        }
      ]
    },
    contact: { title: "Contact" },
    contactForm: {
      modalTitle: "Contact",
      labels: { name: "Name", email: "Email", message: "Message" },
      placeholders: { name: "Your name", email: "you@email.com", message: "Write your message..." },
      buttons: { cancel: "Cancel", send: "Send" },
      feedback: { sending: "Sending...", success: "Thanks! Your message was sent.", error: "Oops! Something went wrong. Please try again." },
    }
  },

  es: {
    meta: {
      title: "Federico Alscher | Ingeniero Biom\u00e9dico & Desarrollador",
      description: "Ingeniero biom\u00e9dico y cofundador especializado en desarrollo de sistemas de diagn\u00f3stico con IA y procesamiento de se\u00f1ales en tiempo real.",
    },
    nav: {
      about: "Perfil",
      experience: "Exp Laboral",
      leadership: "Direcci\u00f3n",
      education: "Educaci\u00f3n",
      skills: "Habilidades",
      publications: "Publicaciones",
      contact: "Contacto",
      langLabel: "ES",
      rights: "Todos los derechos reservados.",
    },
    hero: {
      headline: "Cofundador || Desarrollador de Producto & Analista de Datos || Ingeniero Biom\u00e9dico",
      location: "Buenos Aires, Argentina",
      status: "Abierto a oportunidades",
      ctaCV: "Descargar CV",
      ctaContact: "Contactar",
      photoAlt: "Retrato de Federico Alscher",
      cvHref: "assets/CV_FedericoAlscher_ES.pdf",
    },
    about: {
      title: "Perfil",
      text: "Ingeniero Biom\u00e9dico y cofundador con enfoque en anal\u00edtica y modelado de datos, orientado a transformar datos en decisiones y soluciones implementables. Lidero proyectos de punta a punta: definici\u00f3n del problema, levantamiento de requerimientos, integraci\u00f3n/limpieza de datos, feature engineering, entrenamiento y validaci\u00f3n de modelos, y puesta en producci\u00f3n\u2014alineando stakeholders, cronogramas y resultados medibles. Trabajo con Python, SQL, MATLAB y C/C++, combinando rapidez de prototipado con criterios de calidad y medici\u00f3n de desempe\u00f1o. Adem\u00e1s, cuento con experiencia en docencia universitaria en aprendizaje autom\u00e1tico y programaci\u00f3n.",
    },
    experience: {
      title: "Experiencia Laboral",
      items: [
        {
          role: "Cofundador | Desarrollador de Producto & Analista de Datos",
          dates: "Mayo 2024 \u2014 Presente",
          org: "Quanttrace, Buenos Aires, Argentina",
          description: "Cofund\u00e9 una startup dedicada al desarrollo de tecnolog\u00edas de sensado no invasivo y en tiempo real para monitoreo biom\u00e9dico y ambiental. Contribu\u00ed en investigaci\u00f3n y desarrollo (I+D), arquitectura de sistemas y an\u00e1lisis basado en inteligencia artificial para transformar herramientas de laboratorio en soluciones listas para campo.",
          bullets: [
            "Entregu\u00e9 prototipos port\u00e1tiles integrando sensado, visualizaci\u00f3n/interfaz y registro de datos para habilitar adquisici\u00f3n in situ y ciclos de iteraci\u00f3n m\u00e1s r\u00e1pidos.",
            "Desarroll\u00e9 y ajust\u00e9 modelos de IA (redes neuronales, algoritmos gen\u00e9ticos) para clasificaci\u00f3n de se\u00f1ales y detecci\u00f3n de tendencias, mejorando la robustez ante datos ruidosos de campo.",
            "Implement\u00e9 pipelines de adquisici\u00f3n y an\u00e1lisis de baja latencia en MATLAB, Python y C/C++ para retroalimentaci\u00f3n en tiempo real y alta confiabilidad.",
            "Estandaric\u00e9 bases de c\u00f3digo modulares, rutinas automatizadas de an\u00e1lisis y flujos de prueba para aumentar repetibilidad y reducir tiempos de iteraci\u00f3n.",
            "Lider\u00e9 entregas end-to-end desde requerimientos hasta validaci\u00f3n; defin\u00ed criterios de aceptaci\u00f3n y m\u00e9tricas de desempe\u00f1o para guiar releases."
          ]
        },
        {
          role: "Ayudante de C\u00e1tedra \u2013 Introducci\u00f3n al Aprendizaje Autom\u00e1tico",
          dates: "Julio 2025 \u2014 Presente",
          org: "Universidad Nacional de San Mart\u00edn (UNSAM)",
          description: "Participo en el dictado te\u00f3rico y pr\u00e1ctico de la materia Introducci\u00f3n al Aprendizaje Autom\u00e1tico, cubriendo preprocesamiento de datos, regresi\u00f3n lineal y log\u00edstica, clasificaci\u00f3n, clustering, redes neuronales b\u00e1sicas y selecci\u00f3n de modelos.",
          bullets: [
            "Dicto clases te\u00f3ricas y pr\u00e1cticas sobre regresi\u00f3n, clasificaci\u00f3n, clustering y redes neuronales, integrando teor\u00eda con ejemplos aplicados en Python.",
            "Gu\u00edo a estudiantes en implementaci\u00f3n, validaci\u00f3n y ajuste de modelos, promoviendo buenas pr\u00e1cticas de programaci\u00f3n y modelado.",
            "Colaboro en la elaboraci\u00f3n/actualizaci\u00f3n de material docente y en la correcci\u00f3n de trabajos pr\u00e1cticos y ex\u00e1menes."
          ]
        },
        {
          role: "Ingeniero de Proyecto",
          dates: "Julio 2024 \u2014 Abril 2025",
          org: "Laboratorio de Neuroingenier\u00eda (ITECA/ECyT-UNSAM)",
          description: "Dise\u00f1\u00e9 y desarroll\u00e9 un sistema completamente funcional para la detecci\u00f3n autom\u00e1tica de isquemia mioc\u00e1rdica usando se\u00f1ales de ECG e inteligencia artificial, integrando procesamiento de se\u00f1ales, aprendizaje autom\u00e1tico e implementaci\u00f3n embebida.",
          bullets: [
            "Entren\u00e9 y valid\u00e9 una red neuronal personalizada bajo condiciones de prueba realistas utilizando m\u00e9tricas cl\u00ednicas definidas.",
            "Dise\u00f1\u00e9 pipelines de preprocesamiento para extraer caracter\u00edsticas temporales y morfol\u00f3gicas de se\u00f1ales multicanal, mejorando la confiabilidad diagn\u00f3stica.",
            "Despleg\u00e9 el modelo en hardware embebido convirti\u00e9ndolo a c\u00f3digo C optimizado con feedback en tiempo real mediante pantalla y LEDs.",
            "Evalu\u00e9 desempe\u00f1o y document\u00e9 resultados para reproducibilidad y usabilidad en escenarios de atenci\u00f3n directa.",
            "Prioriz\u00e9 portabilidad, bajo consumo e interfaz de usuario intuitiva para viabilidad en aplicaciones reales."
          ]
        },
        {
          role: "Becario P.E.F.I.",
          dates: "Febrero 2023 \u2014 Julio 2024",
          org: "Laboratorio de Neuroingenier\u00eda (ITECA/ECyT-UNSAM)",
          description: "Me incorpor\u00e9 a un equipo de investigaci\u00f3n interdisciplinario para mejorar y validar una herramienta de clasificaci\u00f3n de spikes basada en inteligencia artificial para el an\u00e1lisis de registros neuronales, en un proyecto colaborativo con FLENI orientado a optimizar la planificaci\u00f3n quir\u00fargica en trastornos del movimiento.",
          bullets: [
            "Mejor\u00e9 un pipeline existente de clasificaci\u00f3n de spikes utilizando descomposici\u00f3n wavelet y algoritmos gen\u00e9ticos, aumentando precisi\u00f3n y robustez entre datasets.",
            "Colabor\u00e9 con cl\u00ednicos de FLENI para adaptar el sistema a datos intraoperatorios, apoyando validaci\u00f3n de blancos para estimulaci\u00f3n cerebral profunda (DBS).",
            "Coautor de una publicaci\u00f3n revisada por pares en \u201cAdvances in Neuroengineering\u201d (Springer Nature) y presentaci\u00f3n en el Congreso Argentino de Bioingenier\u00eda (SABI 2023).",
            "Implement\u00e9 y prob\u00e9 componentes en MATLAB y C#, mejorando visualizaci\u00f3n de datos y respuesta de la interfaz durante sesiones."
          ]
        },
        {
          role: "Asistente Administrativo \u2013 Comit\u00e9 de \u00c9tica",
          dates: "Mayo 2021 \u2014 Presente",
          org: "Fundaci\u00f3n CIDEA",
          description: "Apoy\u00e9 las operaciones del Comit\u00e9 de \u00c9tica Institucional de la Fundaci\u00f3n CIDEA, una organizaci\u00f3n de investigaci\u00f3n cl\u00ednica que realiza estudios biom\u00e9dicos en los sectores p\u00fablico y privado. Asegur\u00e9 el cumplimiento normativo, la integridad documental y la coordinaci\u00f3n con autoridades sanitarias nacionales.",
          bullets: [
            "Gestion\u00e9 presentaciones, enmiendas y aprobaciones de protocolos cl\u00ednicos, asegurando integridad documental y preparaci\u00f3n para auditor\u00edas.",
            "Coordin\u00e9 investigadores y patrocinadores para garantizar documentaci\u00f3n oportuna y comunicaci\u00f3n transparente durante los ciclos de revisi\u00f3n.",
            "Actu\u00e9 como enlace con organismos reguladores (ANMAT, Ministerio de Salud) facilitando inspecciones, auditor\u00edas y alineaci\u00f3n de procedimientos.",
            "Redact\u00e9 y organiz\u00e9 actas de reuniones e informes de evaluaci\u00f3n, contribuyendo a claridad y trazabilidad de los procesos."
          ]
        },
        {
          role: "Pasante en Tecnolog\u00eda M\u00e9dica",
          dates: "Septiembre 2023 \u2014 Diciembre 2023",
          org: "Hospital Universitario Austral",
          description: "Realic\u00e9 una pasant\u00eda profesional brindando apoyo al Departamento de Ingenier\u00eda Biom\u00e9dica en la operaci\u00f3n, inspecci\u00f3n y mantenimiento de equipamiento m\u00e9dico en \u00e1reas de cuidados cr\u00edticos y ambulatorios.",
          bullets: [
            "Realic\u00e9 controles rutinarios y mantenimiento preventivo bajo supervisi\u00f3n, asegurando cumplimiento de est\u00e1ndares de seguridad y desempe\u00f1o.",
            "Asist\u00ed en diagn\u00f3stico y resoluci\u00f3n de fallas t\u00e9cnicas en dispositivos m\u00e9dicos, contribuyendo a reducir tiempos de inactividad.",
            "Document\u00e9 reportes de servicio y coordin\u00e9 con equipos cl\u00ednicos y t\u00e9cnicos la priorizaci\u00f3n de intervenciones seg\u00fan necesidades asistenciales.",
            "Adquir\u00ed comprensi\u00f3n pr\u00e1ctica de flujos hospitalarios, normativas de equipamiento y protocolos de control de calidad."
          ]
        },
        {
          role: "Ayudante de C\u00e1tedra en Inform\u00e1tica",
          dates: "Agosto 2020 \u2014 Febrero 2023",
          org: "Universidad Nacional de San Mart\u00edn",
          description: "Brind\u00e9 apoyo acad\u00e9mico en un curso de grado en inform\u00e1tica, asistiendo en la instrucci\u00f3n te\u00f3rica y en talleres pr\u00e1cticos de programaci\u00f3n, colaborando con el equipo docente para mejorar resultados de aprendizaje.",
          bullets: [
            "Gui\u00e9 a estudiantes en sesiones de resoluci\u00f3n de problemas en C, reforzando l\u00f3gica, estructuras de control y manejo de datos.",
            "Revis\u00e9 y califiqu\u00e9 trabajos pr\u00e1cticos y ex\u00e1menes, brindando retroalimentaci\u00f3n constructiva para apoyar comprensi\u00f3n y progreso.",
            "Contribu\u00ed al desarrollo y mejora de materiales del curso, aumentando claridad y accesibilidad para distintos perfiles.",
            "Foment\u00e9 un entorno colaborativo e inclusivo que estimul\u00f3 pensamiento cr\u00edtico y participaci\u00f3n activa frente a desaf\u00edos computacionales."
          ]
        }
      ]
    },
    leadership: {
      title: "Direcci\u00f3n y Tutor\u00eda",
      items: [
        {
          role: "Co-director de Proyecto Final (Ing. Electr\u00f3nica)",
          dates: "UNSAM",
          org: "",
          description: "Acompa\u00f1amiento metodol\u00f3gico y t\u00e9cnico, definici\u00f3n de objetivos e hitos, revisi\u00f3n de documentaci\u00f3n y entregables hasta la presentaci\u00f3n final."
        },
        {
          role: "Director / Tutor de Beca PEFI",
          dates: "UNSAM",
          org: "",
          description: "Tutor\u00eda y seguimiento del plan de trabajo, coordinaci\u00f3n de tareas y cronograma, evaluaci\u00f3n de avances y soporte en la redacci\u00f3n de informes y resultados."
        }
      ]
    },
    skills: {
      title: "Habilidades T\u00e9cnicas",
      groups: [
        { name: "Programaci\u00f3n", chips: ["Python", "MATLAB", "C", "C++", "C#", "SQL"], color: "blue" },
        { name: "Datos & ML", chips: ["ETL", "Feature engineering", "Series temporales", "Entrenamiento", "M\u00e9tricas de desempe\u00f1o", "Trazabilidad"], color: "green" },
        { name: "Machine Learning", chips: ["Redes neuronales", "Algoritmos gen\u00e9ticos", "Clasificaci\u00f3n", "Ajuste de modelos"], color: "green" },
        { name: "Sistemas embebidos", chips: ["Adquisici\u00f3n en tiempo real", "Firmware", "Sensores", "Baja latencia"], color: "purple" },
        { name: "Gesti\u00f3n & Entregas", chips: ["Requerimientos", "Stakeholders", "Documentaci\u00f3n", "Riesgos", "KPI/m\u00e9tricas"], color: "orange" },
        { name: "Herramientas", chips: ["Visual Studio", "Arduino IDE", "Simulink", "Android Studio"], color: "orange" },
      ]
    },
    publications: {
      title: "Publicaciones",
      items: [
        {
          title: "Algorithm and validation method for spike sorting based on wavelet analysis and a genetic algorithm",
          venue: "Alscher, F. et al. \u2014 SABI 2023, Springer",
          doiUrl: "https://doi.org/10.1007/978-3-031-61973-1_7",
          doiText: "DOI: 10.1007/978-3-031-61973-1_7",
        },
        {
          title: "Neurophysiological Analysis of the Posterior Subthalamic Area in a Patient with Holmes\u2019 Tremor",
          venue: "Wlken, M. et al. \u2014 Movement Disorders, 2024",
          doiUrl: "https://doi.org/10.1002/mds.29705",
          doiText: "DOI: 10.1002/mds.29705",
        }
      ]
    },
    education: {
      title: "Educaci\u00f3n",
      items: [
        {
          degree: "Ingeniero Biom\u00e9dico",
          dates: "Febrero 2018 \u2014 Abril 2025",
          org: "Universidad Nacional de San Mart\u00edn",
          details: [
            "Proyecto final (calificado con 10/10): \u201cSistema port\u00e1til para detecci\u00f3n autom\u00e1tica de isquemia mioc\u00e1rdica\u201d.",
            "Promedio general: 8,21 / 10",
          ]
        }
      ]
    },
    contact: { title: "Contacto" },
    contactForm: {
      modalTitle: "Contacto",
      labels: { name: "Nombre", email: "Mail", message: "Mensaje" },
      placeholders: { name: "Tu nombre", email: "vos@email.com", message: "Escrib\u00ed tu mensaje..." },
      buttons: { cancel: "Cancelar", send: "Enviar" },
      feedback: { sending: "Enviando...", success: "\u00a1Gracias! Tu mensaje fue enviado.", error: "Uy, algo fall\u00f3. Prob\u00e1 de nuevo." },
    }
  }
};

/* ====== helpers ====== */
const byId = (id) => document.getElementById(id);

function chipColorClass(color) {
  const map = {
    blue: "chip-blue",
    green: "chip-green",
    purple: "chip-purple",
    orange: "chip-orange",
  };
  return map[color] || map.blue;
}

function skillIconSvg(color) {
  const icons = {
    blue: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
    green: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
    purple: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>',
    orange: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>',
  };
  return icons[color] || icons.blue;
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
      ? "Hola Federico,%0D%0A%0D%0AEstuve viendo tu sitio y me gustar\u00eda contactarte por..."
      : "Hi Federico,%0D%0A%0D%0AI was checking your site and I'd like to reach out about...";
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

// === Config: Formspree endpoint ===
const FORM_ENDPOINT = "https://formspree.io/f/mnngqplr";

function currentLocale() {
  return document.documentElement.getAttribute("lang") === "es" ? "es" : "en";
}

function applyContactFormTexts(t) {
  byId("contact-modal-title").textContent = t.contactForm.modalTitle;
  byId("cf-label-name").textContent = t.contactForm.labels.name;
  byId("cf-label-email").textContent = t.contactForm.labels.email;
  byId("cf-label-message").textContent = t.contactForm.labels.message;
  byId("cf-name").placeholder = t.contactForm.placeholders.name;
  byId("cf-email").placeholder = t.contactForm.placeholders.email;
  byId("cf-message").placeholder = t.contactForm.placeholders.message;
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
  const navLeadership = byId("nav-leadership");
  if (navLeadership) navLeadership.textContent = t.nav.leadership;
  byId("nav-skills").textContent = t.nav.skills;
  byId("nav-publications").textContent = t.nav.publications;
  byId("nav-education").textContent = t.nav.education;
  byId("nav-contact").textContent = t.nav.contact;

  byId("mnav-about").textContent = t.nav.about;
  byId("mnav-experience").textContent = t.nav.experience;
  const mnavLeadership = byId("mnav-leadership");
  if (mnavLeadership) mnavLeadership.textContent = t.nav.leadership;
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

  const statusEl = byId("hero-status");
  if (statusEl && t.hero.status) statusEl.textContent = t.hero.status;

  const locale = document.documentElement.getAttribute("lang") === "es" ? "es" : "en";
  const mailto = buildMailto({ locale });
  const contactBtn = byId("cta-contact");
  contactBtn.setAttribute("href", mailto);
  contactBtn.removeAttribute("target");

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
  t.experience.items.forEach((it, i) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.setAttribute("data-aos", "fade-up");
    item.setAttribute("data-aos-delay", String(i * 50));

    let bulletsHtml = it.bullets && it.bullets.length
      ? `<ul class="space-y-2 mt-4">${it.bullets.map((b) =>
          `<li class="flex items-start text-slate-600 text-base leading-relaxed">
            <span class="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 mr-3 shrink-0"></span>
            <span>${b}</span>
          </li>`
        ).join("")}</ul>`
      : '';

    let descriptionHtml = it.description
      ? `<p class="text-slate-600 mt-3 leading-relaxed text-base">${it.description}</p>`
      : '';

    item.innerHTML = `
      <div class="card-experience">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
          <h3 class="font-heading text-xl font-600 text-primary-900">${it.role}</h3>
          <span class="date-badge">${it.dates}</span>
        </div>
        <p class="text-accent-600 text-base font-medium">${it.org}</p>
        ${descriptionHtml}
        ${bulletsHtml}
      </div>
    `;
    wrap.appendChild(item);
  });
}

function renderLeadership(t) {
  const titleEl = byId("leadership-title");
  if (!titleEl) return;
  titleEl.textContent = t.leadership.title;
  const wrap = byId("leadership-list");
  wrap.innerHTML = "";
  t.leadership.items.forEach((it, i) => {
    const card = document.createElement("div");
    card.className = "card-leadership";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", String(i * 100));
    card.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
        <h3 class="font-heading text-xl font-600 text-primary-900">${it.role}</h3>
        <span class="date-badge">${it.dates}</span>
      </div>
      <p class="text-slate-600 leading-relaxed text-base">${it.description}</p>
    `;
    wrap.appendChild(card);
  });
}

function renderSkills(t) {
  byId("skills-title").textContent = t.skills.title;
  const grid = byId("skills-grid");
  grid.innerHTML = "";
  t.skills.groups.forEach((g, i) => {
    const colorClass = chipColorClass(g.color);
    const col = document.createElement("div");
    col.className = "card-skill";
    col.setAttribute("data-color", g.color);
    col.setAttribute("data-aos", "fade-up");
    col.setAttribute("data-aos-delay", String(i * 80));

    const iconColorMap = {
      blue: "text-primary-600",
      green: "text-emerald-600",
      purple: "text-violet-600",
      orange: "text-accent-600",
    };
    const iconColor = iconColorMap[g.color] || iconColorMap.blue;

    col.innerHTML = `
      <div class="flex items-center gap-3 mb-4">
        <div class="${iconColor}">${skillIconSvg(g.color)}</div>
        <h3 class="font-heading text-lg font-600 text-slate-800">${g.name}</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        ${g.chips.map((c) => `<span class="chip ${colorClass}">${c}</span>`).join("")}
      </div>
    `;
    grid.appendChild(col);
  });
}

function renderPublications(t) {
  byId("publications-title").textContent = t.publications.title;
  const list = byId("publications-list");
  list.innerHTML = "";
  t.publications.items.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card-publication";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", String(i * 100));
    card.innerHTML = `
      <h3 class="font-heading text-lg font-600 text-primary-900 mb-2 leading-snug">${p.title}</h3>
      <p class="text-slate-500 text-base mb-3">${p.venue}</p>
      <a href="${p.doiUrl}" class="inline-flex items-center text-primary-600 hover:text-accent-600 text-base font-medium transition-colors group" target="_blank" rel="noopener">
        <i data-feather="external-link" class="mr-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform"></i>
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
  t.education.items.forEach((e, i) => {
    const card = document.createElement("div");
    card.className = "card-education";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", String(i * 100));
    const details =
      e.details && e.details.length
        ? `<div class="mt-4 space-y-2">${e.details.map(d =>
            `<p class="flex items-start text-slate-600 text-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 mr-3 shrink-0"></span>
              <span>${d}</span>
            </p>`
          ).join("")}</div>`
        : "";
    card.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
        <h3 class="font-heading text-xl font-600 text-primary-900">${e.degree}</h3>
        <span class="date-badge">${e.dates}</span>
      </div>
      <p class="text-accent-600 font-medium text-sm">${e.org}</p>
      ${details}
    `;
    list.appendChild(card);
  });
}

function renderContact(t) {
  byId("contact-title").textContent = t.contact.title;
}

/* ====== Scroll Progress Bar ====== */
function setupScrollProgress() {
  const bar = byId("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = progress + "%";
  }, { passive: true });
}

/* ====== Active Nav Highlighting ====== */
function setupActiveNav() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === "#" + id);
        });
      }
    });
  }, { rootMargin: "-20% 0px -75% 0px" });

  sections.forEach((section) => observer.observe(section));
}

/* ====== main render ====== */
function render(locale) {
  const t = resume[locale] || resume.en;

  document.documentElement.setAttribute("lang", locale === "es" ? "es" : "en");
  setMeta(t.meta);

  renderNav(t);
  renderHero(t);
  renderAbout(t);
  renderExperience(t);
  if (typeof renderLeadership === 'function') renderLeadership(t);
  renderEducation(t);
  renderSkills(t);
  renderPublications(t);
  renderContact(t);
  applyContactFormTexts(t);

  if (window.AOS) AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  if (window.feather) feather.replace();

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

  // Close mobile menu when clicking a link
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
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
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });

  // Open contact modal from hero CTA
  const contactBtn = byId("cta-contact");
  if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openContactModal();
    });
  }

  // Close modal handlers
  const modal = byId("contact-modal");
  const closeBtn = byId("contact-close");
  const cancelBtn = byId("cf-cancel");

  [closeBtn, cancelBtn].forEach((el) => {
    if (el) el.addEventListener("click", closeContactModal);
  });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeContactModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeContactModal();
  });

  // Submit form to Formspree
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
  const saved = localStorage.getItem("locale") || "en";
  render(saved);
  setupInteractions();
  setupScrollProgress();
  setupActiveNav();
});

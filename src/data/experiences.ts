import type { Experience } from "@/types/experience"

export const experiences: Experience[] = [
  {
    id: "villasalud",
    role: "Desarrollador Full Stack",
    company: "VILLASALUD",
    companySubtitle: "Clínica",
    period: "Jul 2024 - Actual",
    summary:
      "Trabajo como desarrollador full stack junto a un grupo de 4 programadores más. Nos encargamos de actualizar y crear nuevas interfaces tanto en los sistemas internos como para el público.",
    description:
      "En VillaSalud formo parte de un equipo de 4 programadores. Mi labor principal es innovar en los sistemas internos de la empresa, tanto en el área administrativa como en la operativa.\n\nMis aportes a la fecha:\n• Migración del sistema ERP obsoleto y poco escalable a un ERP nuevo y moderno\n• Integración con el sistema de seguros de salud (EPS)\n• Automatización de procesos rutinarios\n• Implementación de monitoreo de nuestro servidor\n• Impulso del uso de herramientas de IA para mejorar los tiempos de desarrollo\n• Implementación de alertas de errores",
    technologies: ["AngularJS", "Angular 21", "NestJS", "MySQL", "PostgreSQL", "PHP", "pm2"],
    images: [
      {
        src: "/img1_villasalud.jpeg",
        alt: "Interfaz del sistema interno de VILLASALUD",
        caption: "Celebrando el decimotercero aniversario de VillaSalud",
      },
      {
        src: "/img2_villasalud.jpeg",
        alt: "Portal público de VILLASALUD",
        caption: "participando en el evento deportivo de VillaSalud",
      },
    ],
  },
  {
    id: "odisec",
    role: "Desarrollador Full Stack",
    company: "ODISEC",
    companySubtitle: "Mercadeo y Servicios",
    period: "Oct 2023 - Jun 2024",
    summary:
      "Empresa encargada de brindar servicios a bancos. Mi labor fue administrar las bases de datos de los sistemas ya en producción y la creación de nuevos sistemas para mejorar la efectividad de los empleados.",
    description:
      "En ODISEC trabajé en proyectos para el sector bancario, donde la estabilidad y el rendimiento son críticos. Administré bases de datos MySQL y SQL Server en producción, optimicé consultas y aseguré la integridad de los datos. Desarrollé nuevas herramientas con Angular 17 y React + Vite para mejorar los flujos de trabajo de los empleados, integrando Firebase para funcionalidades en tiempo real. También utilicé Pandas en Python para análisis de datos y Node.js para servicios backend. Fue una etapa clave para entender cómo operan los sistemas financieros a gran escala.",
    technologies: ["MySQL", "SQL Server", "Angular 17", "React + Vite", "TailwindCSS", "Firebase", "Pandas py", "Node.js"],
    images: [],
    animationDelay: "delay-100",
  },
  {
    id: "qhapaq-pacha",
    role: "Desarrollador Frontend",
    company: "E-COMMERCE (QHAPAQ P'ACHA)",
    companySubtitle: "",
    period: "Jun 2023 - Ago 2023",
    summary: "Proyecto de e-commerce, dejado en stop por decision del propietario.",
    description:
      "Participé en el desarrollo frontend de un e-commerce de productos artesanales peruanos. Implementé la interfaz con Next.js y NextUI, consumiendo APIs desarrolladas con Express y autenticación JWT. Trabajé en el catálogo de productos, carrito de compras y flujo de checkout. Aunque el proyecto fue pausado por decisión del propietario, adquirí experiencia valiosa en el ecosistema Next.js y en la integración con PostgreSQL.",
    technologies: ["Next.js", "NextUI", "Express", "PostgreSQL", "JWT"],
    images: [],
    animationDelay: "delay-200",
  },
  {
    id: "arcade-world",
    role: "Desarrollador Full Stack",
    company: "E-COMMERCE (ARCADE WORLD)",
    companySubtitle: "",
    period: "Sep 2022 - Nov 2022",
    summary:
      "Proyecto realizado con un grupo de 3 programadores usando las mejores prácticas de React.js.",
    description:
      "Arcade World fue mi primer proyecto en equipo como desarrollador full stack. Junto a 3 compañeros construimos un e-commerce de productos gaming desde cero. Me encargué del frontend con React + Vite y TailwindCSS, y del backend con Node.js y PostgreSQL. Implementamos autenticación JWT, gestión de inventario y pasarela de pagos. Aprendí a trabajar con Git en equipo, code reviews y metodologías ágiles básicas. Fue una experiencia formativa que consolidó mis bases en React.",
    technologies: ["React + Vite", "PostgreSQL", "TailwindCSS", "JWT", "Node.js"],
    images: [],
    animationDelay: "delay-300",
  },
]

import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "sst-fiados",
    title: "SST Fiados — Gestión de fiados con IA",
    period: "2025",
    summary:
      "Sistema para tiendas que registra fiados por voz y consulta deudas con comandos de audio, sin escribir productos manualmente.",
    description:
      "SST Fiados resuelve un problema cotidiano en tiendas de barrio: llevar el control de lo que los clientes sacan fiado. En lugar de anotar productos a mano, el dueño graba un audio desde la página describiendo lo que el cliente se llevó y el sistema lo procesa, estructura y guarda en PostgreSQL. Cuando necesita saber cuánto debe alguien, basta con grabar un audio como «sácame la suma de la cuenta de fulanito» y el sistema identifica al cliente, busca sus fiados y devuelve el total. Para optimizar costos se usó Groq en la transcripción del audio y DeepSeek V4 Flash para el procesamiento del lenguaje, reduciendo el consumo de tokens frente a un solo modelo grande. El frontend en Angular 21 se despliega en Vercel; el backend NestJS y la base de datos en Railway, conectados a un subdominio propio gestionado en Cloudflare.",
    technologies: [
      "NestJS",
      "Angular 21",
      "PostgreSQL",
      "Groq",
      "DeepSeek V4 Flash",
      "Vercel",
      "Railway",
      "Cloudflare",
    ],
    url: "https://sst-fiados.abelaguadodev.work/",
    images: [
      {
        src: "/sst_fiados_1.png",
        alt: "SST Fiados — vista en modo claro",
        caption: "",
      },
      {
        src: "/sst_fiados_2.png",
        alt: "SST Fiados — vista en modo oscuro",
        caption: "",
      },
    ],
  },
  {
    id: "erp-fresomac",
    title: "ERP - FRESOMAC.SAC",
    period: "Abril 2022 - Agosto 2022",
    summary:
      "Proyecto realizado con el fin de mejorar los registros de entradas y salidas de piezas de las maquinarias.",
    description:
      "Desarrollé un ERP orientado al control de inventario y movimientos de piezas en maquinaria industrial. El sistema permitía registrar entradas y salidas de componentes, visualizar métricas con Chart.js y gestionar usuarios con autenticación JWT. Trabajé en frontend con Angular 13 y backend con Node.js y TypeScript, usando MySQL como base de datos.",
    technologies: ["Angular 13", "Chart.js", "JWT", "Node.js", "TypeScript", "MySQL"],
    images: [],
    animationDelay: "delay-100",
  },
  {
    id: "crm-ferrico",
    title: "CRM - FERRICO",
    period: "Julio 2021 - Diciembre 2021",
    summary: "Proyecto universitario para la gestión de empresas de ventas.",
    description:
      "CRM desarrollado como proyecto universitario para la gestión de empresas de ventas. Incluía módulos de clientes, productos, pedidos y reportes. El frontend se construyó con Angular 12 y TailwindCSS; el backend con C#, Entity Framework y SQL Server, documentado con Swagger.",
    technologies: ["Angular 12", "C#", "Entity Framework", "Swagger", "TailwindCSS", "SQL Server"],
    images: [],
    animationDelay: "delay-200",
  },
]

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/theme-toggle'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code,
  Database,
  Smartphone,
  Globe,
  Users,
  Briefcase,
  GraduationCap
} from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  useScrollAnimation()

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>CA</AvatarFallback>
              </Avatar>
              <span className="font-bold text-lg">Carlos Abel Aguado</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-6">
                {[
                  { id: 'about', label: 'Sobre mí' },
                  { id: 'experience', label: 'Experiencia' },
                  { id: 'skills', label: 'Habilidades' },
                  { id: 'projects', label: 'Proyectos' },
                  { id: 'education', label: 'Educación' },
                  { id: 'contact', label: 'Contacto' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Avatar className="h-32 w-32 mx-auto mb-6">
              <AvatarFallback className="text-2xl">CA</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Carlos Abel Aguado Ramos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Desarrollador Full Stack
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              +3 años de experiencia desarrollando aplicaciones web y móviles. 
              Especializado en Angular, React, Node.js y bases de datos.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+51 983446294</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>aguado170305@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lima, Perú</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/Carlos-Abel-17" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/abel-aguado-ramos-37377027b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <Briefcase className="h-8 w-8 mr-3" />
              Experiencia Laboral
            </h2>
            
            <div className="space-y-8">
              {/* Villa Salud */}
              <Card className="scroll-animate">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Desarrollador Full Stack</CardTitle>
                      <CardDescription className="text-lg">VILLASALUD - Clínica</CardDescription>
                    </div>
                    <Badge variant="secondary">Jul 2024 - Actual</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Trabajo como desarrollador full stack junto a un grupo de 3 programadores más. 
                    Nos encargamos de actualizar y crear nuevas interfaces tanto en los sistemas internos como para el público.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['AngularJS', 'Angular 14', 'NestJS', 'MySQL', 'Oracle', 'PHP', 'Bootstrap'].map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ODISEC */}
              <Card className="scroll-animate delay-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Desarrollador Full Stack</CardTitle>
                      <CardDescription className="text-lg">ODISEC - Mercadeo y Servicios</CardDescription>
                    </div>
                    <Badge variant="secondary">Oct 2023 - Jun 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Empresa encargada de brindar servicios a bancos. Mi labor fue administrar las bases de datos 
                    de los sistemas ya en producción y la creación de nuevos sistemas para mejorar la efectividad de los empleados.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'Angular 17', 'TailwindCSS', 'Firebase'].map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* E-commerce Qhapaq P'acha */}
              <Card className="scroll-animate delay-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Desarrollador Frontend</CardTitle>
                      <CardDescription className="text-lg">E-COMMERCE (QHAPAQ P'ACHA)</CardDescription>
                    </div>
                    <Badge variant="secondary">Jun 2023 - Ago 2023</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Proyecto de e-commerce aún en construcción, dejado en stop con el propietario.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Angular 16', 'CSS3'].map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arcade World */}
              <Card className="scroll-animate delay-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Desarrollador Full Stack</CardTitle>
                      <CardDescription className="text-lg">E-COMMERCE (ARCADE WORLD)</CardDescription>
                    </div>
                    <Badge variant="secondary">Sep 2022 - Nov 2022</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Proyecto realizado con un grupo de 3 programadores usando las mejores prácticas de React.js.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React + Vite', 'PostgreSQL', 'TailwindCSS', 'JWT', 'Node.js'].map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <Code className="h-8 w-8 mr-3" />
              Habilidades Técnicas
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend */}
              <Card className="skill-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Angular 10+', 'AngularJS', 'Next.js', 'HTML/CSS', 'TailwindCSS', 'Material UI', 'Bootstrap', 'Chart.js', 'Redux', 'TypeScript'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Backend */}
              <Card className="skill-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'NestJS', 'Express', 'JWT', 'PHP', 'Laravel 9', 'C#', 'ASP.NET', 'Spring Boot', 'Prisma ORM', 'Sequelize'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Mobile */}
              <Card className="skill-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Mobile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Kotlin', 'Jetpack Compose', 'XML', 'Ionic', 'Ionic-Angular'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Databases */}
              <Card className="skill-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Bases de Datos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Oracle'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cloud & Deployment */}
              <Card className="skill-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Cloud & Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Vercel', 'Railway', 'Azure', 'AWS', 'CPanel'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card className="skill-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Habilidades Blandas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Trabajo en Equipo', 'Proactivo', 'Comunicación Efectiva', 'Resolución de Problemas', 'Presentación Técnica'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <Code className="h-8 w-8 mr-3" />
              Proyectos Destacados
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* ERP Fresomac */}
              <Card className="scroll-scale">
                <CardHeader>
                  <CardTitle>ERP - FRESOMAC.SAC</CardTitle>
                  <CardDescription>Abril 2022 - Agosto 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Proyecto realizado con el fin de mejorar los registros de entradas y salidas de piezas de las maquinarias.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Angular 13', 'Chart.js', 'JWT', 'Node.js', 'TypeScript', 'MySQL'].map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CRM Ferrico */}
              <Card className="scroll-scale delay-100">
                <CardHeader>
                  <CardTitle>CRM - FERRICO</CardTitle>
                  <CardDescription>Julio 2021 - Diciembre 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Proyecto Universitario para la gestión de empresas de ventas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Angular 12', 'C#', 'Entity Framework', 'Swagger', 'TailwindCSS', 'SQL Server'].map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 mr-3" />
              Educación
            </h2>
            
            <div className="space-y-6">
              <Card className="scroll-slide-left">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Ingeniería de Sistemas</CardTitle>
                      <CardDescription className="text-lg">Universidad Tecnológica del Perú (UTP)</CardDescription>
                    </div>
                    <Badge variant="secondary">Agosto 2020 - En curso</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Me encuentro cursando la carrera de Ingeniería de Sistemas. Partes esenciales que destaco de mi aprendizaje:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Patrones de diseño para Desarrollo Web Front End y Back End</li>
                    <li>Arquitectura de software</li>
                    <li>Diseño y modelado de sistemas</li>
                    <li>Bases de datos: SQL Server, MySQL</li>
                    <li>Programación Orientada a Objetos (POO)</li>
                    <li>Java</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="scroll-slide-right delay-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Capacitación en JavaScript</CardTitle>
                      <CardDescription className="text-lg">CODERHOUSE</CardDescription>
                    </div>
                    <Badge variant="secondary">Enero 2023</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Realicé una capacitación en JavaScript con duración de 28 horas a lo largo de 7 semanas, 
                    cumpliendo todos los requisitos académicos exigidos.
                  </p>
                </CardContent>
              </Card>
              <Card className="scroll-slide-left delay-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Capacitación en NestJS</CardTitle>
                      <CardDescription className="text-lg">Udemy</CardDescription>
                    </div>
                    <Badge variant="secondary">Septiembre 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Realicé una capacitación en Nestjs con duracion de 25 horas a lo largo de 5 semanas con el profesor Fernando Herrara muy reconocido en el mundo de la programcion por su 
                    amplia experiencia en el desarrollo de aplicaciones con Nestjs y muchas mas tecnologias.
                  </p>
                  {/* <div className="rounded-lg overflow-hidden border border-border mt-4">
                    <img 
                      src="/certificado-nestjs-udemy.jpg"
                      alt="Certificado de Capacitación en NestJS - Udemy" 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">¿Trabajamos juntos?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estoy disponible para nuevos proyectos y oportunidades. ¡Contáctame!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">aguado170305@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
      <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-sm text-muted-foreground">+51 983446294</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Button asChild>
                <a href="mailto:aguado170305@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/abel-aguado-ramos-37377027b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Carlos Abel Aguado Ramos. Desarrollado con React + shadcn/ui
        </p>
      </div>
      </footer>
    </div>
  )
}

export default App
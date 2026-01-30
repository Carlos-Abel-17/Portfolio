import { useState, useEffect } from 'react'
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
  // Linkedin, 
  Code,
  Database,
  Smartphone,
  Globe,
  Users,
  Briefcase,
  GraduationCap
} from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
// import { useScrollEffects } from '@/hooks/useScrollEffects'
import { ScrollProgress } from '@/components/scroll-progress'
// import { ParticlesBackground } from '@/components/particles-background'
import { CustomCursor } from '@/components/custom-cursor'
import { HeroScene3D } from '@/components/hero-scene-3d'
import { SkillsScene3D } from '@/components/skills-scene-3d'
import { ProjectsScene3D } from '@/components/projects-scene-3d'
import { ContactScene3D } from '@/components/contact-scene-3d'
import { CurtainRevealSection } from './components/curtain-reveal-section'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [navbarScrolled, setNavbarScrolled] = useState(false)
  useScrollAnimation()
  // useScrollEffects() // Desactivado - efectos parallax removidos

  // Efecto para navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Inicializar
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <ScrollProgress />
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 transition-all duration-300 ${
        navbarScrolled ? 'navbar-scrolled shadow-lg' : ''
      }`}>
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
      <section id="about" className="min-h-screen hero-gradient overflow-hidden flex items-center justify-center pt-20 relative">
        {/* Efectos futuristas adicionales */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Glow 1 - Esquina superior izquierda */}
          <div 
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse-glow glow-purple"
            style={{
              animation: 'pulse-glow 4s ease-in-out infinite'
            }}
          ></div>
          
          {/* Glow 2 - Esquina inferior derecha */}
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse-glow glow-blue"
            style={{
              animation: 'pulse-glow 5s ease-in-out infinite 1s'
            }}
          ></div>
          
          {/* Glow 3 - Centro */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-float glow-center"
          ></div>
          
          {/* Formas geométricas flotantes */}
          <div 
            className="absolute top-20 left-10 w-32 h-32 border-2 rotate-45 animate-rotate-slow"
            style={{
              borderColor: 'hsl(270 70% 60% / 0.3)',
              animation: 'rotate-slow 20s linear infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-24 h-24 border-2 rotate-12 animate-rotate-slow"
            style={{
              borderColor: 'hsl(200 70% 60% / 0.3)',
              animation: 'rotate-slow 15s linear infinite reverse'
            }}
          ></div>
          <div 
            className="absolute top-1/3 right-20 w-16 h-16 border-2 rotate-45 animate-rotate-slow"
            style={{
              borderColor: 'hsl(270 70% 50% / 0.2)',
              animation: 'rotate-slow 25s linear infinite'
            }}
          ></div>
          
          {/* Partículas flotantes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full blur-sm"
              style={{
                backgroundColor: `hsl(${270 + i * 20} 70% 60% / 0.4)`,
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
                animation: `particles-float ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
        <HeroScene3D />

        <div className="container mx-auto px-4 relative z-10 w-full">
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
              {/* <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/abel-aguado-ramos-37377027b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Experience Section */}
      <section id="experience" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center scroll-zoom-in">
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
                    {['AngularJS', 'Angular 14', 'NestJS', 'MySQL','PostgreSQL', 'PHP', 'Bootstrap'].map((tech) => (
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
                    {['MySQL','SQL Server', 'Angular 17','React + Vite', 'TailwindCSS', 'Firebase','Pandas py','Node.js'].map((tech) => (
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
                    Proyecto de e-commerce, dejado en stop por decision del propietario.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'NextUI','Express','PostgreSQL','JWT'].map((tech) => (
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
      <section id="skills" className="py-16 relative overflow-visible min-h-[800px]">
        <SkillsScene3D />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center scroll-zoom-in">
              <Code className="h-8 w-8 mr-3" />
              Habilidades Técnicas
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend */}
              <Card className="skill-card scroll-bounce">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Angular 10+', 'AngularJS', 'Next.js', 'HTML/CSS', 'TailwindCSS', 'Material UI', 'Bootstrap', 'Chart.js', 'TypeScript'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Backend */}
              <Card className="skill-card scroll-bounce delay-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'NestJS', 'Express','JWT', 'PHP', 'C#', 'ASP.NET', 'Prisma ORM', 'Sequelize','Type ORM'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Mobile */}
              <Card className="skill-card scroll-bounce delay-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Mobile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['React Native','Expo','flutter','ionic'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Databases */}
              <Card className="skill-card scroll-bounce delay-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Bases de Datos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB','Redis'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Cloud & Deployment */}
              <Card className="skill-card scroll-bounce delay-400">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Cloud & Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Vercel', 'Railway', 'Azure', 'AWS', 'CPanel','Docker'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card className="skill-card scroll-bounce delay-500">
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
      <section id="projects" className="py-16 relative overflow-hidden min-h-[700px]">
        <ProjectsScene3D />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center scroll-zoom-in">
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
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center scroll-zoom-in">
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
      <section id="contact" className="py-16 relative overflow-hidden min-h-[500px]">
        <ContactScene3D />
        <div className="container mx-auto px-4 relative z-20">
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
              {/* <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/abel-aguado-ramos-37377027b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button> */}
            </div>
          </div>
      </div>
      </section>

      {/* Telón que se levanta al hacer scroll y revela el footer */}
      <CurtainRevealSection>
        <footer className="border-t py-12 px-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              © 2025 Carlos Abel Aguado Ramos. Desarrollado con React + shadcn/ui
            </p>
          </div>
        </footer>
      </CurtainRevealSection>
    </div>
  )
}

export default App
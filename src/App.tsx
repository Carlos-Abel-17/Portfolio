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
  Code,
  Database,
  Globe,
  Server,
  Briefcase,
  GraduationCap,
  Bot
} from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ScrollProgress } from '@/components/scroll-progress'
import { CustomCursor } from '@/components/custom-cursor'
import { ContactScene3D } from '@/components/contact-scene-3d'
import { CurtainRevealSection } from './components/curtain-reveal-section'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ExperienceCard } from '@/components/experience-card'
import { ExperienceModal } from '@/components/experience-modal'
import { ProjectCard } from '@/components/project-card'
import { ProjectModal } from '@/components/project-modal'
import { experiences } from '@/data/experiences'
import { projects } from '@/data/projects'
import type { Experience } from '@/types/experience'
import type { Project } from '@/types/project'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [navbarScrolled, setNavbarScrolled] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)
  const [experienceModalOpen, setExperienceModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  useScrollAnimation()

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
      <nav aria-label="Navegación principal" className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navbarScrolled ? 'navbar-scrolled shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>CA</AvatarFallback>
              </Avatar>
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
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <Avatar className="h-10 w-10 mb-6 mx-auto lg:mx-0" aria-hidden="true">
                <AvatarFallback className="text-sm">CA</AvatarFallback>
              </Avatar>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Carlos Abel Aguado Ramos
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Desarrollador Full Stack
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                4 años de experiencia como desarrollador web, no solo cuento con experiencia de Universidad si no que ya en el campo real de esta hermosa carrera, soy un persona muy comprometida y con mucha hambre de aprender.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+51 983446294</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>aguado170305@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Lima, Perú</span>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/Carlos-Abel-17" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md">
                <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" aria-hidden="true" />
                <img
                  src="/portada.png"
                  alt="Carlos Abel Aguado Ramos"
                  className="relative w-full aspect-[3/4] rounded-2xl object-cover object-top shadow-2xl ring-1 ring-border/50"
                />
              </div>
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
              {experiences.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  onClick={() => {
                    setSelectedExperience(experience)
                    setExperienceModalOpen(true)
                  }}
                />
              ))}
            </div>

            <ExperienceModal
              experience={selectedExperience}
              open={experienceModalOpen}
              onOpenChange={setExperienceModalOpen}
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center scroll-zoom-in">
              <Code className="h-8 w-8 mr-3" />
              Habilidades Técnicas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Frontend */}
              <Card className="scroll-bounce transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
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
              <Card className="scroll-bounce delay-100 transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
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

              {/* Databases */}
              <Card className="scroll-bounce delay-200 transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
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
              
              {/* DevOps */}
              <Card className="scroll-bounce delay-300 transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Server className="h-5 w-5 mr-2" />
                    DevOps
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

              {/* Integración IA & Chatbots */}
              <Card className="scroll-bounce delay-400 transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bot className="h-5 w-5 mr-2" />
                    Integración IA & Chatbots
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Meta API', 'WhatsApp Business API', 'Instagram Messaging API', 'DeepSeek AI', 'Chatbots con IA', 'Automatización de mensajes'].map((skill) => (
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
      <section id="projects" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center scroll-zoom-in">
              <Code className="h-8 w-8 mr-3" />
              Proyectos Destacados
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => {
                    setSelectedProject(project)
                    setProjectModalOpen(true)
                  }}
                />
              ))}
            </div>

            <ProjectModal
              project={selectedProject}
              open={projectModalOpen}
              onOpenChange={setProjectModalOpen}
            />
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
      <SpeedInsights />
    </div>
  )
}

export default App
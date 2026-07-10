import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onClick()
        }
      }}
      className={cn(
        "scroll-scale cursor-pointer transition-all duration-300",
        "hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        project.animationDelay
      )}
      aria-label={`Ver detalles del proyecto ${project.title}`}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
            <CardDescription>{project.period}</CardDescription>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Abrir ${project.title} en una nueva pestaña`}
            >
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-primary/70 mt-4">Clic para ver más detalles →</p>
      </CardContent>
    </Card>
  )
}

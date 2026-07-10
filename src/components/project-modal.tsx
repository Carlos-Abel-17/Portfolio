import { ExternalLink } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { Project } from "@/types/project"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base">{project.period}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-sm leading-relaxed text-foreground/90">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          {project.url && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4" />
                Ver proyecto en vivo
              </a>
            </Button>
          )}

          {project.images.length > 0 && (
            <>
              <Separator />
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Galería</h4>
                <ImageCarousel images={project.images} />
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

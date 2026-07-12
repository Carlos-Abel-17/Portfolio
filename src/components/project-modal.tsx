import { ExternalLink } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ModalImageGallery } from "@/components/modal-image-gallery"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
      <DialogContent className="detail-modal-content max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-foreground">{project.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">{project.period}</DialogDescription>
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

          <ModalImageGallery images={project.images} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ModalImageGallery } from "@/components/modal-image-gallery"
import { Badge } from "@/components/ui/badge"
import type { Experience } from "@/types/experience"

interface ExperienceModalProps {
  experience: Experience | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExperienceModal({
  experience,
  open,
  onOpenChange,
}: ExperienceModalProps) {
  if (!experience) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="detail-modal-content max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-foreground">
            Experiencia en {experience.company}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {experience.role}
            {experience.companySubtitle && ` · ${experience.companySubtitle}`}
            {" · "}
            {experience.period}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
            {experience.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <ModalImageGallery images={experience.images} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

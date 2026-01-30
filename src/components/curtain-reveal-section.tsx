import { CAFragmentBanner } from '@/components/ca-fragment-banner'

interface CurtainRevealSectionProps {
  children: React.ReactNode
}

/**
 * Estilo TRAE: footer primero; al bajar aparece la sección escondida (Abel Aguado).
 */
export function CurtainRevealSection({ children }: CurtainRevealSectionProps) {
  return (
    <>
      {/* Footer visible primero */}
      <section className="w-full flex items-center justify-center bg-background border-t">
        <div className="w-full py-12 px-4">
          {children}
        </div>
      </section>

      {/* Sección escondida debajo: sale al bajar más (mitad de altura) */}
      <section
        className="relative z-10 w-full min-h-[50vh] flex items-center justify-center"
        aria-label="Abel Aguado"
      >
        <CAFragmentBanner className="min-h-[50vh] h-full" />
      </section>
    </>
  )
}

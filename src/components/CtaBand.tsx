import { Button } from '@/components/ui/button'
import { restaurant } from '@/data/site'

export function CtaBand() {
  return (
    <section id="reserver" className="bg-secondary-dark py-20 text-center text-white">
      <div className="mx-auto max-w-295 px-8">
        <h2 className="mb-4 text-[clamp(1.6rem,3.4vw,2.25rem)] leading-[1.15] font-semibold">
          Votre table vous attend
        </h2>
        <p className="mx-auto mb-8 max-w-130 text-white/85">
          Les places sont limitées chaque soir — réservez dès maintenant pour garantir votre moment Chez Susy.
        </p>
        <Button asChild className="h-12 px-8 text-[15px]">
          <a href={restaurant.phoneHref}>Appeler pour réserver</a>
        </Button>
      </div>
    </section>
  )
}

import { Star } from 'lucide-react'
import { Eyebrow } from '@/components/Eyebrow'
import { Button } from '@/components/ui/button'
import { restaurant } from '@/data/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-24">
      <div className="mx-auto grid max-w-295 items-center gap-16 px-8 lg:grid-cols-[1.05fr_0.85fr]">
        <div>
          <Eyebrow>
            {restaurant.city} · {restaurant.region}
          </Eyebrow>
          <h1 className="mt-4 mb-5 text-[clamp(2.4rem,5.2vw,3.9rem)] leading-[1.15] font-semibold">
            La cuisine créole,
            <br />
            <em className="text-primary">sublimée</em> avec exigence.
          </h1>
          <p className="mb-8 max-w-120 text-lg text-muted-foreground">
            Chez Susy réinvite les saveurs du terroir martiniquais dans un cadre raffiné — produits locaux
            sélectionnés, recettes transmises, service attentionné, pour une table qui se réserve à l'avance.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild className="h-12 px-8 text-[15px]">
              <a href="#reserver">Réserver ma table</a>
            </Button>
            <Button asChild variant="outline" className="h-12 border-foreground bg-transparent px-8 text-[15px]">
              <a href="#atouts">Découvrir la carte</a>
            </Button>
          </div>
          {/* PLACEHOLDER : note et nombre de convives de la maquette, à confirmer */}
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex gap-0.5 text-primary" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span>4,9/5 — plus de 200 convives satisfaits à {restaurant.city}</span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative flex aspect-square items-center justify-center rounded-md border bg-muted"
        >
          <div className="absolute inset-4 rounded-md border" />
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
            <circle cx="110" cy="110" r="86" strokeWidth="1.2" className="stroke-primary" />
            <circle cx="110" cy="110" r="60" strokeWidth="1" className="stroke-secondary" />
            <path d="M70 130 Q110 70 150 130" strokeWidth="1.4" className="stroke-primary" />
            <path d="M78 120 Q110 90 142 120" strokeWidth="1.2" className="stroke-secondary" />
            <circle cx="110" cy="110" r="3.5" className="fill-primary" />
          </svg>
        </div>
      </div>
    </section>
  )
}

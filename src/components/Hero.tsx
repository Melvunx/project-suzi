import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/site";
import { Star } from "lucide-react";
import { Logo } from "./Logo";

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
            Chez Susy réinvite les saveurs du terroir martiniquais dans un cadre
            raffiné — produits locaux sélectionnés, recettes transmises, service
            attentionné, pour une table qui se réserve à l'avance.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild className="h-12 px-8 text-[15px]">
              <a href="#reserver">Réserver ma table</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 border-foreground bg-transparent px-8 text-[15px]"
            >
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
            <span>
              4,9/5 — plus de 200 convives satisfaits à {restaurant.city}
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative flex aspect-square items-center justify-center rounded-md border bg-muted"
        >
          <div className="absolute inset-4 rounded-md border" />
          <Logo className="relative size-full p-12" />
        </div>
      </div>
    </section>
  );
}

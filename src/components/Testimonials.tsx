import { Star } from 'lucide-react'
import { Eyebrow } from '@/components/Eyebrow'
import { testimonials } from '@/data/site'

export function Testimonials() {
  return (
    <section id="avis" className="py-24">
      <div className="mx-auto max-w-295 px-8">
        <div className="mx-auto mb-14 max-w-160 text-center">
          <Eyebrow>Ce qu'on en dit</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-semibold">
            La confiance de nos convives
          </h2>
        </div>
        <ul className="grid gap-7 md:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <li key={name} className="flex flex-col gap-4.5 rounded-md border bg-card px-7.5 py-8.5">
              <span className="flex gap-1 text-primary" role="img" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </span>
              <blockquote className="font-heading text-[15.5px] leading-relaxed italic">{quote}</blockquote>
              <div className="mt-auto flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="flex size-9.5 items-center justify-center rounded-full bg-secondary-dark font-heading text-white"
                >
                  {name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{name}</div>
                  <div className="text-[12.5px] text-muted-foreground">{role}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

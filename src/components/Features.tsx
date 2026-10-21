import { Eyebrow } from '@/components/Eyebrow'
import { Reveal, RevealItem, RevealList } from '@/components/Reveal'
import { features } from '@/data/site'

export function Features() {
  return (
    <section id="atouts" className="border-y bg-muted py-24">
      <div className="mx-auto max-w-295 px-8">
        <Reveal className="mb-14 max-w-160">
          <Eyebrow>Pourquoi Chez Susy</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-semibold">
            Une table créole pensée dans les moindres détails
          </h2>
          <p className="mt-3.5 text-[1.03rem] text-muted-foreground">
            Chaque assiette raconte la Martinique — sans jamais sacrifier la finesse ni le raffinement du service.
          </p>
        </Reveal>
        <RevealList className="grid gap-px border bg-border md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <RevealItem key={title} className="bg-muted px-9 py-11">
              <div className="mb-6 flex size-13 items-center justify-center rounded-full border border-primary text-primary">
                <Icon className="size-6" strokeWidth={1.4} aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="text-[15px] text-muted-foreground">{description}</p>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  )
}

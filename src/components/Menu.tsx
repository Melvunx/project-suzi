import { Eyebrow } from '@/components/Eyebrow'
import { Reveal, RevealItem, RevealList } from '@/components/Reveal'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { menu, menuIsSample } from '@/data/site'

const euro = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export function Menu() {
  return (
    <section id="carte" className="py-24">
      <div className="mx-auto max-w-295 px-4 sm:px-8">
        <Reveal className="mx-auto mb-10 max-w-160 text-center">
          <Eyebrow>La carte</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-semibold">
            Les saveurs de la Martinique
          </h2>
          <p className="mt-3.5 text-[1.03rem] text-muted-foreground">
            Une carte courte, qui suit les arrivages et les saisons.
          </p>
          {menuIsSample && (
            <p
              role="note"
              className="mt-5 inline-block rounded-md border border-dashed border-primary px-3 py-1.5 text-sm text-primary-dark"
            >
              Carte d'exemple : plats et prix à titre indicatif
            </p>
          )}
        </Reveal>

        <Tabs defaultValue={menu[0].id} className="gap-8">
          <TabsList variant="line" className="mx-auto h-auto w-full max-w-120 gap-1 pb-3">
            {menu.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="py-2 font-heading text-base data-active:text-primary-dark"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {menu.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <RevealList className="mx-auto grid max-w-240 gap-x-14 gap-y-8 md:grid-cols-2">
                {category.items.map((item) => (
                  <RevealItem key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      {item.signature && (
                        <span className="rounded-full bg-secondary-dark px-2 py-0.5 text-[11px] font-semibold tracking-wide text-white uppercase">
                          Signature
                        </span>
                      )}
                      <span
                        aria-hidden="true"
                        className="relative -top-1 flex-1 border-b border-dotted border-foreground/30"
                      />
                      <span className="font-heading font-semibold text-primary-dark">
                        {euro.format(item.price)}
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-prose text-[15px] text-muted-foreground">{item.description}</p>
                  </RevealItem>
                ))}
              </RevealList>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

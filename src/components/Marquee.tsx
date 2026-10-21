import { marqueeItems } from '@/data/site'

function Items({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 gap-15 pr-15" aria-hidden={hidden || undefined}>
      {/* la liste est répétée pour que la boucle à -50 % soit invisible */}
      {[...marqueeItems, ...marqueeItems].map((item, i) => (
        <li key={i} className="flex items-center gap-15">
          {item}
          <span className="text-secondary">·</span>
        </li>
      ))}
    </ul>
  )
}

export function Marquee() {
  return (
    <div className="overflow-hidden bg-foreground py-3.5 text-background">
      <div className="flex w-max animate-marquee text-[13px] font-medium tracking-[2px] whitespace-nowrap uppercase motion-reduce:animate-none">
        <Items />
        <Items hidden />
      </div>
    </div>
  )
}

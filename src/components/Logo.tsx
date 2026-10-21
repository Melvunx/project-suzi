import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 680 340"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Chez Susy, restaurant cuisine créole"
      className={cn('block h-11 w-auto', className)}
    >
      <circle cx="340" cy="108" r="52" fill="none" strokeWidth="2" className="stroke-primary" />
      <text x="340" y="132" textAnchor="middle" fontStyle="italic" fontSize="60" className="fill-primary font-heading">
        S
      </text>
      <line x1="318" y1="170" x2="362" y2="170" strokeWidth="2" className="stroke-secondary" />
      <circle cx="340" cy="170" r="3" className="fill-secondary" />
      <text x="340" y="228" textAnchor="middle" fontSize="42" letterSpacing="6" className="fill-primary font-heading">
        CHEZ SUSY
      </text>
      <line x1="250" y1="252" x2="430" y2="252" strokeWidth="1.2" className="stroke-secondary" />
      <text x="340" y="274" textAnchor="middle" fontSize="13" letterSpacing="4" className="fill-secondary font-heading">
        RESTAURANT CUISINE CRÉOLE
      </text>
    </svg>
  )
}

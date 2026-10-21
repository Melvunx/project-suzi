import { Logo } from '@/components/Logo'
import { hours, restaurant } from '@/data/site'

const columnTitle = 'mb-4.5 text-xs font-semibold tracking-[2px] text-secondary uppercase'
const columnText = 'mb-2.5 block text-[14.5px] text-background/75'
const socialLink =
  'flex size-9 items-center justify-center rounded-full border border-background/25 transition-colors hover:border-primary hover:text-primary'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground pt-17 pb-7 text-background">
      <div className="mx-auto max-w-295 px-8">
        <div className="grid grid-cols-2 gap-11 border-b border-background/12 pb-11 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Logo className="mb-4 h-10" />
            <p className="max-w-65 text-sm text-background/60">
              Une cuisine créole exigeante, servie avec cœur au cœur de {restaurant.city}, {restaurant.region}.
            </p>
          </div>
          <div>
            <h4 className={columnTitle}>Nous trouver</h4>
            <p className={columnText}>{restaurant.name}</p>
            <p className={columnText}>
              {restaurant.postalCode} {restaurant.city}, {restaurant.region}
            </p>
          </div>
          <div>
            <h4 className={columnTitle}>Horaires</h4>
            {hours.map((line) => (
              <p key={line} className={columnText}>
                {line}
              </p>
            ))}
          </div>
          <div>
            <h4 className={columnTitle}>Contact</h4>
            <a href={restaurant.phoneHref} className={`${columnText} hover:text-primary`}>
              {restaurant.phoneDisplay}
            </a>
            <a href={`mailto:${restaurant.email}`} className={`${columnText} hover:text-primary`}>
              {restaurant.email}
            </a>
            <div className="mt-1.5 flex gap-3.5">
              <a href={restaurant.instagramUrl} aria-label="Instagram" className={socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={restaurant.facebookUrl} aria-label="Facebook" className={socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H8v3h3v6h3v-6h3l1-3h-4V9c0-.5.5-1 1-1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-6.5 text-[12.5px] text-background/50">
          <span>© {year} {restaurant.name} — Tous droits réservés</span>
          <span>
            {restaurant.city}, {restaurant.region} · {restaurant.postalCode}
          </span>
        </div>
      </div>
    </footer>
  )
}

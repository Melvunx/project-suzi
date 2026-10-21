import { Logo } from '@/components/Logo'
import { MobileNav } from '@/components/MobileNav'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-295 items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
        <a href="#top" aria-label="Chez Susy, retour en haut">
          <Logo />
        </a>
        <nav className="hidden gap-9 text-sm font-medium md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-80 transition-opacity hover:text-primary-dark hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button asChild className="hidden h-11 px-6 text-sm sm:inline-flex">
            <a href="#reserver">Réserver une table</a>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

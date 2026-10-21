import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-295 items-center justify-between px-8 py-4">
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
        <Button asChild className="h-11 px-6 text-sm">
          <a href="#reserver">Réserver une table</a>
        </Button>
      </div>
    </header>
  )
}

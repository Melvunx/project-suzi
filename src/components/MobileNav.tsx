import { useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navLinks, restaurant } from '@/data/site'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  // Le scroll doit partir APRÈS la fermeture complète du panneau : Radix bloque le
  // scroll de la page pendant l'animation de sortie et le relâche au démontage, ce
  // qui interrompt un défilement fluide déjà lancé. On mémorise donc la cible ici
  // et on défile dans onCloseAutoFocus, appelé quand le contenu est démonté.
  const pendingHref = useRef<string | null>(null)

  function goTo(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault()
    pendingHref.current = href
    setOpen(false)
  }

  function scrollToPending(event: Event) {
    const href = pendingHref.current
    if (!href) return
    pendingHref.current = null
    // évite que le focus revienne sur le bouton burger (et fasse défiler la page)
    event.preventDefault()
    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView()
      history.pushState(null, '', href)
    })
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="md:hidden" aria-label="Ouvrir le menu">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="gap-0 p-6" onCloseAutoFocus={scrollToPending}>
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">Navigation vers les sections du site</SheetDescription>
        <Logo className="mb-8 h-12 self-start" />
        <nav className="flex flex-col" aria-label="Navigation mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => goTo(event, link.href)}
              className="border-b py-4 font-heading text-xl transition-colors hover:text-primary-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3">
          <Button asChild className="h-12 text-[15px]">
            <a href="#reserver" onClick={(event) => goTo(event, '#reserver')}>
              Réserver une table
            </a>
          </Button>
          <Button asChild variant="outline" className="h-12 border-foreground bg-transparent text-[15px]">
            <a href={restaurant.phoneHref}>{restaurant.phoneDisplay}</a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

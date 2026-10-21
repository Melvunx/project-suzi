import type { Transition, Variants } from 'motion/react'

// Réglages d'animation partagés : modifier ici pour changer le rythme de tout le site.

/** Courbe « ease-out expo » : départ vif, arrivée douce. */
export const easeOut = [0.22, 1, 0.36, 1] as const

export const duration = {
  fast: 0.25,
  base: 0.6,
  slow: 0.9,
} as const

/** Délai entre deux éléments d'une liste qui apparaît en cascade. */
export const staggerDelay = 0.12

export const baseTransition: Transition = { duration: duration.base, ease: easeOut }

/** Apparition : fondu + léger glissement vers le haut. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: baseTransition },
}

/** Déclenche les enfants (variants `hidden` / `show`) l'un après l'autre. */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: staggerDelay } },
}

/** L'élément se déclenche une seule fois, un peu avant d'être au centre de l'écran. */
export const viewportOnce = { once: true, margin: '0px 0px -80px 0px' } as const

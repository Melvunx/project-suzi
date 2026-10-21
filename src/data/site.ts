import { Fish, HandPlatter, ChefHat, type LucideIcon } from 'lucide-react'

// Tout le contenu texte du site vit ici : horaires, avis, coordonnées...
// Les valeurs marquées PLACEHOLDER viennent de la maquette et doivent être
// confirmées par la propriétaire avant la mise en ligne.

export const restaurant = {
  name: 'Chez Susy',
  tagline: 'Restaurant cuisine créole',
  city: 'Trinité',
  region: 'Martinique',
  postalCode: '97220',
  // PLACEHOLDER : numéro, e-mail et réseaux sociaux à remplacer
  phoneDisplay: '0596 XX XX XX',
  phoneHref: 'tel:+596596000000',
  email: 'contact@chezsusy.mq',
  instagramUrl: '#',
  facebookUrl: '#',
} as const

export const navLinks = [
  { href: '#atouts', label: "L'expérience" },
  { href: '#avis', label: 'Avis' },
  { href: '#contact', label: 'Nous trouver' },
] as const

export const marqueeItems = [
  'Produits locaux',
  'Recettes créoles authentiques',
  'Cadre raffiné',
  'Trinité, Martinique',
] as const

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Fish,
    title: 'Produits du terroir',
    description:
      'Poissons, épices et légumes-pays sélectionnés chaque semaine auprès de producteurs de Martinique.',
  },
  {
    icon: ChefHat,
    title: 'Recettes de famille',
    description:
      'Des plats transmis de génération en génération, revisités avec précision par notre cheffe.',
  },
  {
    icon: HandPlatter,
    title: 'Service attentionné',
    description:
      "Un accueil chaleureux et un service soigné, pour une expérience qui se savoure autant qu'elle se mange.",
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
}

// PLACEHOLDER : avis de la maquette, à remplacer par de vrais avis
export const testimonials: Testimonial[] = [
  {
    quote:
      "Une des meilleures tables créoles de l'île. Le colombo et le service étaient irréprochables du début à la fin.",
    name: 'Marie-Ange R.',
    role: 'Cliente régulière, Trinité',
  },
  {
    quote:
      'Cadre élégant, accueil chaleureux et des saveurs qui rappellent la cuisine de nos grands-mères, en plus raffiné.',
    name: 'Jocelyn F.',
    role: 'Le François',
  },
  {
    quote:
      "Réservé pour un anniversaire, tout était parfait. On sent l'exigence dans chaque assiette. On reviendra.",
    name: 'Sandra L.',
    role: 'Fort-de-France',
  },
]

export const hours = [
  'Mar – Sam : 11h30 – 22h00',
  'Dimanche : 11h30 – 15h00',
  'Lundi : fermé',
] as const

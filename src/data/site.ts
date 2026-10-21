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
  { href: '#carte', label: 'La carte' },
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

export type MenuItem = {
  name: string
  description: string
  /** Prix en euros */
  price: number
  /** Mis en avant par un badge « Signature » */
  signature?: boolean
}

export type MenuCategory = {
  id: string
  label: string
  items: MenuItem[]
}

// PLACEHOLDER : carte d'EXEMPLE (plats antillais classiques et prix inventés).
// À remplacer par la vraie carte du restaurant. Tant que `menuIsSample` vaut
// true, la section affiche un bandeau « carte d'exemple » : le passer à false
// une fois la vraie carte saisie.
export const menuIsSample = true

export const menu: MenuCategory[] = [
  {
    id: 'entrees',
    label: 'Entrées',
    items: [
      {
        name: 'Accras de morue',
        description: 'Beignets de morue dorés, servis avec leur sauce chien pimentée.',
        price: 9,
        signature: true,
      },
      {
        name: 'Boudin créole',
        description: 'Boudin noir aux épices, salade de crudités et sauce ti-piment.',
        price: 10,
      },
      {
        name: "Féroce d'avocat",
        description: 'Purée d’avocat, morue effilochée et farine de manioc, relevée au piment.',
        price: 11,
      },
      {
        name: 'Crabes farcis',
        description: 'Chair de crabe épicée, gratinée dans sa carapace.',
        price: 12,
      },
    ],
  },
  {
    id: 'plats',
    label: 'Plats',
    items: [
      {
        name: 'Colombo de poulet',
        description: 'Poulet mijoté au colombo, légumes-pays, riz blanc et haricots rouges.',
        price: 19,
        signature: true,
      },
      {
        name: 'Court-bouillon de poisson',
        description: 'Poisson du jour dans une sauce tomate, ail et piment, riz blanc.',
        price: 22,
      },
      {
        name: 'Fricassée de lambi',
        description: 'Lambi tendre mijoté à la créole, banane verte et riz.',
        price: 24,
      },
      {
        name: 'Ragoût de cochon',
        description: 'Cochon mijoté aux épices, igname et dachine.',
        price: 20,
      },
      {
        name: 'Langouste grillée',
        description: 'Langouste grillée au beurre citronné, gratin de christophine.',
        price: 38,
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Blanc-manger coco',
        description: 'Flan onctueux à la noix de coco, coulis de fruit de la passion.',
        price: 8,
        signature: true,
      },
      {
        name: 'Tarte coco',
        description: 'Pâte sablée, crème de coco râpée et zeste de citron vert.',
        price: 7,
      },
      {
        name: 'Banane flambée au rhum',
        description: 'Bananes caramélisées, rhum agricole et glace vanille.',
        price: 9,
      },
    ],
  },
  {
    id: 'boissons',
    label: 'Boissons',
    items: [
      {
        name: 'Punch planteur',
        description: 'Rhum agricole et jus de fruits pays, maison.',
        price: 8,
      },
      {
        name: 'Ti-punch',
        description: 'Rhum blanc agricole, citron vert et sucre de canne.',
        price: 6,
      },
      {
        name: 'Jus de fruits pays',
        description: 'Goyave, maracudja ou ananas, pressés du jour.',
        price: 5,
      },
      {
        name: 'Eau de coco',
        description: 'Servie bien fraîche.',
        price: 4,
      },
    ],
  },
]

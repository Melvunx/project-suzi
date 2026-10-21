# Chez Susy

Site vitrine du restaurant **Chez Susy** (cuisine créole, Trinité, Martinique). Page unique, 100 % statique, sans backend.

Le projet est la refonte en React de l'ancienne page HTML, conservée à la racine comme référence (`chez-susy-.html`).

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) (Radix, icônes [lucide](https://lucide.dev))
- [Motion](https://motion.dev) pour les animations
- Polices Playfair Display et Work Sans, servies en local via [Fontsource](https://fontsource.org)

## Démarrage

Prérequis : Node.js et [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Le site est alors disponible sur http://localhost:5173.

| Commande | Rôle |
|---|---|
| `pnpm dev` | Serveur de développement |
| `pnpm build` | Vérifie les types puis génère le site dans `dist/` |
| `pnpm preview` | Prévisualise le build de production |
| `pnpm lint` | Analyse du code (Oxlint) |

## Structure

```
src/
├── components/     # Sections de la page (Header, Hero, Menu, Footer...)
│   └── ui/         # Composants shadcn/ui
├── data/site.ts    # Tout le contenu texte du site
├── lib/            # Utilitaires (cn, réglages d'animation)
├── index.css       # Thème Tailwind et charte de couleurs
└── App.tsx         # Assemblage des sections
```

## Modifier le contenu

Les textes (coordonnées, horaires, atouts, avis, carte) sont dans `src/data/site.ts`, pas dans les composants. Pour changer un horaire ou un prix, c'est le seul fichier à ouvrir.

Les couleurs et polices sont définies dans `src/index.css`. Les réglages d'animation (durées, rythme) sont dans `src/lib/motion.ts`.

## Avant la mise en ligne

Certaines données sont encore des exemples, repérables au commentaire `PLACEHOLDER` dans `src/data/site.ts` :

- [ ] Téléphone, e-mail, adresse complète et liens des réseaux sociaux
- [ ] Vraie carte (plats et prix), puis `menuIsSample = false` pour retirer le bandeau « Carte d'exemple »
- [ ] Vrais avis de clients et note affichée dans le hero
- [ ] Photos des plats et du restaurant

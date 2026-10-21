# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Contexte du projet

Site vitrine du restaurant **Chez Susy** (cuisine créole, Trinité, Martinique), tenu par la tante de Melvin. Objectif : transformer l'existant en un site moderne, plus attrayant et plus fidèle au restaurant.

**Stack** : Vite 8 + React 19 + TypeScript 6, Tailwind CSS v4 (plugin `@tailwindcss/vite`, pas de `tailwind.config`), shadcn/ui (style `radix-nova`, icônes lucide), `motion` pour les animations. Site 100 % statique, sans backend (choix assumé : petit restaurant local). Melvin laisse à Claude le choix des étapes et des améliorations : les proposer et les valider avec lui avant de les enchaîner (voir `rules/about-me.md`).

## Commandes (pnpm)

| Action | Commande |
|---|---|
| Serveur de dev (http://localhost:5173) | `pnpm dev` |
| Build (`tsc -b` puis `vite build`, sortie dans `dist/`) | `pnpm build` |
| Prévisualiser le build | `pnpm preview` |
| Lint (Oxlint, pas ESLint) | `pnpm lint` |
| Ajouter un composant shadcn | `pnpm dlx shadcn@latest add <composant>` |

Pas de framework de test configuré.

## Architecture

- Alias `@` → `src/`, déclaré à deux endroits à garder synchronisés : `vite.config.ts` (`resolve.alias`) et `paths` dans `tsconfig.json` / `tsconfig.app.json`. Pas de `baseUrl` (déprécié en TypeScript 6).
- `src/index.css` : point d'entrée Tailwind + variables de thème shadcn (`:root`) et `@theme inline`.
- Composants shadcn dans `src/components/ui/`, helper `cn()` dans `src/lib/utils.ts`.
- Le menu mobile (`MobileNav.tsx`, `Sheet` shadcn) ferme le panneau avant de défiler vers l'ancre, car Radix bloque le scroll tant qu'il est ouvert. `html` a `scroll-pt-20` pour que le header sticky ne masque pas les titres.
- `src/App.tsx` assemble les sections de la maquette (`Header`, `Hero`, `Marquee`, `Features`, `Menu`, `Testimonials`, `CtaBand`, `Footer`) définies dans `src/components/`. Pas de routeur : page unique avec ancres (`#atouts`, `#carte`, `#avis`, `#reserver`, `#contact`).
- `src/data/site.ts` centralise tout le contenu texte (coordonnées, horaires, atouts, avis, liens de nav). Modifier le contenu là, pas dans le JSX. Les valeurs `PLACEHOLDER` y sont signalées en commentaire.
- Le thème Chez Susy est appliqué dans `src/index.css` : `primary` = orange, `secondary` = vert (variantes `primary-dark` / `secondary-dark`), `muted` = crème foncé, polices via `@fontsource-variable` (`font-heading` = Playfair Display). Pas de mode sombre. Le bandeau défilant utilise l'animation CSS `animate-marquee` (pas encore `motion`).
- Animations (`motion/react`) : réglages partagés (courbe, durées, cascade) dans `src/lib/motion.ts`. `Reveal` / `RevealList` / `RevealItem` (`src/components/Reveal.tsx`) font apparaître un bloc au scroll, une seule fois. `App.tsx` enveloppe tout dans `<MotionConfig reducedMotion="user">` : avec `prefers-reduced-motion`, les translations sont désactivées automatiquement.
- Les icônes viennent de `lucide-react` v1, qui n'a plus d'icônes de marques : Instagram / Facebook sont des SVG inline dans `Footer.tsx`.

## Maquette de référence

`chez-susy-.html` (racine) est la page statique d'origine (HTML + CSS inline, sans JS), conservée comme référence visuelle et de contenu à porter en React. Ne pas la confondre avec `index.html`, qui est l'entrée de Vite.

## Ce que contient la maquette (à conserver lors de la migration)

Sections, dans l'ordre : header sticky (logo SVG, nav `#atouts` / `#avis` / `#contact`, bouton « Réserver une table ») → hero → bandeau défilant (marquee CSS) → atouts (3 cartes) → avis (3 témoignages) → bandeau CTA `#reserver` (lien `tel:`) → footer (adresse, horaires, contact, réseaux).

Identité visuelle définie par les variables CSS `:root` du fichier : crème `#FBF6EE` / `#F4EDE0`, encre `#2B2620`, orange `#D9781F` (primaire), vert `#8FB93E` / `#5B7A28` (secondaire), bordures `#E4DACB`. Typographies : **Playfair Display** (titres, italiques) et **Work Sans** (texte). Ces tokens doivent devenir le thème Tailwind / shadcn plutôt que d'être recopiés en dur.

Le logo existe en SVG inline, dupliqué dans le header et le footer : à extraire en un seul composant. Le bandeau défilant respecte déjà `prefers-reduced-motion` ; garder ce comportement avec `motion`.

## Pièges connus dans le contenu

- Placeholders à ne pas publier tels quels : téléphone `0596 XX XX XX` / `tel:+596596000000`, e-mail `contact@chezsusy.mq`, liens sociaux `href="#"`, adresse réduite à « 97220 Trinité ».
- Contenu probablement inventé par le générateur de la maquette : note « 4,9/5 — plus de 200 convives » et les trois avis. À faire confirmer par la propriétaire (ou remplacer par de vrais avis) avant mise en ligne.
- La carte (`Menu.tsx`, données dans `menu` de `src/data/site.ts`) est une carte d'EXEMPLE (plats et prix inventés) : tant que `menuIsSample` vaut `true`, la section affiche un bandeau « Carte d'exemple ». À remplacer par la vraie carte puis passer le drapeau à `false`. Pas de photos non plus (le visuel du hero est un SVG décoratif) : le contenu réel (plats, photos, horaires) doit venir de la propriétaire.
- Le nom du fichier contient un tiret final (`chez-susy-.html`).

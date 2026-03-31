# Donald Njemi Portfolio

Portfolio personnel moderne développé avec React, TypeScript et Tailwind CSS pour présenter le profil, les compétences, le parcours et les réalisations de Donald Njemi Mbajouen.

L'application met en avant une expérience fluide, animée et responsive, avec prise en charge du multilingue, des thèmes dynamiques selon la stack mise en avant, ainsi qu'une section projets filtrable par catégorie et par technologie.

## Aperçu

Ce portfolio a été conçu pour :

- présenter rapidement le profil professionnel et les expertises clés
- afficher les expériences, parcours académique et diplômes
- mettre en avant les projets réalisés avec filtres par catégorie et technologies
- proposer un contact direct via WhatsApp
- offrir une interface responsive avec mode clair/sombre

## Fonctionnalités

- Interface responsive pensée pour mobile, tablette et desktop
- Sections dédiées : accueil, à propos, parcours, compétences, projets et contact
- Support bilingue `fr` / `en`
- Système de thèmes visuels basé sur les stacks `Laravel`, `Vue` et `Flutter`
- Bascule mode clair / sombre avec persistance en local
- Animations fluides avec `framer-motion`
- Téléchargement du CV depuis la section hero
- Liens rapides vers GitHub et LinkedIn
- Formulaire de contact connecté à WhatsApp
- Filtrage des projets par catégorie
- Filtrage des projets par technologie
- Gestion des projets privés avec badge visuel dédié
- Intégration de `Vercel Analytics`

## Stack technique

### Frontend

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### UI et expérience

- Framer Motion
- Lucide React
- Radix UI

### Outils complémentaires

- TanStack Query
- React Router DOM
- Sonner
- Vercel Analytics

## Installation

### Prérequis

- Node.js 18+
- npm

### Lancer le projet en local

```bash
git clone <url-du-repo>
cd portofolio
npm install
npm run dev
```

L'application sera disponible sur `http://localhost:5173`.

## Scripts disponibles

```bash
npm run dev
```

Lance le serveur de développement Vite.

```bash
npm run build
```

Génère la version de production.

```bash
npm run preview
```

Lance un aperçu local du build de production.

```bash
npm run lint
```

Exécute les vérifications ESLint.

## Structure du projet

```text
portofolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── portfolio/
│   │   └── ui/
│   ├── contexts/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

## Points de personnalisation

Les principaux endroits à modifier pour adapter le portfolio :

- `src/contexts/LanguageContext.tsx`
  Contient les textes FR/EN du site.

- `src/components/portfolio/ProjectsSection.tsx`
  Contient la liste des projets, les catégories et les filtres.

- `src/components/portfolio/HeroSection.tsx`
  Gère l’introduction, les CTA, les liens sociaux et le CV.

- `src/components/portfolio/ContactSection.tsx`
  Gère les coordonnées et le formulaire WhatsApp.

- `src/contexts/ThemeContext.tsx`
  Gère les thèmes de stack et le mode clair/sombre.

- `src/assets/`
  Contient les images, portraits et le CV PDF.

## Gestion des projets

Les projets sont actuellement affichés dans une grille avec :

- titre
- description FR/EN
- catégories
- technologies
- lien live si disponible
- lien GitHub si public
- badge `Code privé` pour les dépôts non publics

Le filtrage combiné permet :

- de sélectionner une catégorie
- de sélectionner une technologie
- de réinitialiser les filtres
- d’afficher un message si aucun projet ne correspond

## Déploiement

Le projet peut être déployé sur n’importe quelle plateforme compatible Vite, par exemple :

- Vercel
- Netlify
- Firebase Hosting

Processus standard :

```bash
npm install
npm run build
```

Puis publier le contenu généré dans le dossier `dist/`.

## Qualité et maintenance

Avant mise en production, il est recommandé de lancer :

```bash
npm run lint
npm run build
```

## Auteur

Donald Njemi Mbajouen

- GitHub : https://github.com/Donaldmbajouen
- LinkedIn : https://linkedin.com/in/donald-njemi
- Email : mbajouend@gmail.com

## Licence

Ce projet est utilisé comme portfolio personnel. Adapte la licence selon l’usage que tu souhaites en faire.

# GES Africa - Structure du Projet

## Architecture des Composants

Le projet est organisé selon une architecture modulaire et réutilisable :

### 📁 Structure des Dossiers

```
src/app/
├── components/
│   ├── shared/              # Composants réutilisables
│   │   ├── logo/            # Logo de l'entreprise
│   │   ├── service-card/    # Carte de service
│   │   ├── feature-card/    # Carte de fonctionnalité
│   │   ├── process-step/    # Étape de processus
│   │   └── project-card/    # Carte de projet
│   ├── layout/              # Composants de mise en page
│   │   ├── navigation/      # Menu de navigation
│   │   └── footer/          # Pied de page
│   └── sections/            # Sections de la page
│       ├── hero/            # Section hero
│       ├── trust-bar/       # Barre de confiance
│       ├── services/        # Section services
│       ├── features/        # Section fonctionnalités
│       ├── method/          # Section méthode
│       ├── projects/        # Section projets
│       └── cta/             # Call-to-action
├── config/                  # Configuration
│   └── logo.config.ts       # Configuration du logo
└── app.ts                   # Composant principal
```

## 🎨 Couleurs du Thème

Les couleurs sont définies dans `styles.css` et `tailwind.config.js` :

- **Primary (ges-blue)** : `#455A64` - Bleu principal
- **Secondary (ges-green)** : `#8BC34A` - Vert d'accent
- **Dark (ges-dark)** : `#2C3E50` - Sombre
- **Light (ges-light)** : `#ECEFF1` - Clair

## 🧩 Composants Réutilisables

### LogoComponent
Logo de l'entreprise avec 3 tailles disponibles (small, medium, large).
```typescript
<app-logo size="medium"></app-logo>
```

### ServiceCardComponent
Affiche une carte de service avec icône, titre et description. Hauteur uniforme avec flex-grow.
```typescript
<app-service-card
  icon="fa-solar-panel"
  title="Photovoltaïque"
  description="Description du service">
</app-service-card>
```

### FeatureCardComponent
Affiche une fonctionnalité avec icône circulaire. Hauteur uniforme avec flex-grow.
```typescript
<app-feature-card
  icon="fa-shield-alt"
  title="Sécurité"
  description="Description de la fonctionnalité">
</app-feature-card>
```

### ProcessStepComponent
Affiche une étape numérotée d'un processus. Hauteur uniforme avec flex-grow.
```typescript
<app-process-step
  [stepNumber]="1"
  title="Cadrage"
  description="Description de l'étape">
</app-process-step>
```

### ProjectCardComponent
Affiche un projet avec image, titre, description et tags. Hauteur uniforme avec flex-grow.
```typescript
<app-project-card
  imageUrl="url-de-l-image"
  title="Titre du projet"
  description="Description"
  [tags]="['Tag1', 'Tag2']">
</app-project-card>
```

## 📱 Responsive Design

Le site est entièrement responsive avec les breakpoints suivants :
- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px

### Améliorations responsive :
- Titres adaptatifs (`text-3xl md:text-4xl`)
- Grilles flexibles (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)
- Navigation mobile avec menu burger
- Images optimisées pour chaque résolution
- Smooth scroll pour une meilleure expérience

## 🖼️ Images

Images cohérentes avec l'activité :
- **Hero** : Panneaux solaires (Unsplash)
- **PV toitures** : Installation solaire
- **Industrie** : Entrepôt logistique
- **Smart building** : Bureau moderne
- **IRVE** : Borne de recharge électrique

## 🚀 Commandes

```bash
# Démarrer le serveur de développement
npm start

# Builder pour la production
npm run build

# Lancer les tests
npm test
```

## 📦 Technologies

- **Angular 20** - Framework
- **Tailwind CSS 4** - Styling
- **Font Awesome 6** - Icônes
- **Inter Font** - Typographie
- **PostCSS** - Autoprefixer

## ✨ Fonctionnalités

- ✅ Architecture modulaire et réutilisable
- ✅ Design responsive complet
- ✅ Couleurs cohérentes avec la maquette
- ✅ Cartes de hauteur uniforme
- ✅ Smooth scroll
- ✅ Logo réutilisable
- ✅ Images optimisées et pertinentes
- ✅ Composants standalone Angular

## 💡 Notes de Développement

- Tous les composants sont **standalone**
- Architecture **modulaire** pour faciliter la maintenance
- Styles **globaux** dans `styles.css`
- Configuration Tailwind dans `tailwind.config.js`
- Utilisation de **flex-grow** pour uniformiser les hauteurs des cartes
- **Responsive** mobile-first

# GES Africa - Structure du Projet

## Architecture des Composants

Le projet est organisé selon une architecture modulaire et réutilisable :

### 📁 Structure des Dossiers

```
src/app/
├── components/
│   ├── shared/              # Composants réutilisables
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
└── app.ts                   # Composant principal
```

## 🎨 Couleurs du Thème

Les couleurs sont définies dans `styles.css` et `tailwind.config.js` :

- **Primary (ges-blue)** : `#455A64` - Bleu principal
- **Secondary (ges-green)** : `#8BC34A` - Vert d'accent
- **Dark (ges-dark)** : `#2C3E50` - Sombre
- **Light (ges-light)** : `#ECEFF1` - Clair

## 🧩 Composants Réutilisables

### ServiceCardComponent
Affiche une carte de service avec icône, titre et description.
```typescript
<app-service-card
  icon="fa-solar-panel"
  title="Photovoltaïque"
  description="Description du service">
</app-service-card>
```

### FeatureCardComponent
Affiche une fonctionnalité avec icône circulaire.
```typescript
<app-feature-card
  icon="fa-shield-alt"
  title="Sécurité"
  description="Description de la fonctionnalité">
</app-feature-card>
```

### ProcessStepComponent
Affiche une étape numérotée d'un processus.
```typescript
<app-process-step
  [stepNumber]="1"
  title="Cadrage"
  description="Description de l'étape">
</app-process-step>
```

### ProjectCardComponent
Affiche un projet avec image, titre, description et tags.
```typescript
<app-project-card
  imageUrl="url-de-l-image"
  title="Titre du projet"
  description="Description"
  [tags]="['Tag1', 'Tag2']">
</app-project-card>
```

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

## 💡 Notes de Développement

- Tous les composants sont **standalone**
- Architecture **modulaire** pour faciliter la maintenance
- Styles **globaux** dans `styles.css`
- Configuration Tailwind dans `tailwind.config.js`

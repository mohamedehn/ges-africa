# Guide de Style - GES Africa

## 🎨 Palette de Couleurs

### Couleurs Principales
```css
--primary: #455A64   /* Bleu principal (ges-blue) */
--secondary: #8BC34A /* Vert d'accent (ges-green) */
--dark: #2C3E50      /* Sombre (ges-dark) */
--light: #ECEFF1     /* Clair (ges-light) */
```

### Utilisation des Couleurs

| Élément | Couleur | Classe Tailwind |
|---------|---------|-----------------|
| Titres principaux | Dark | `text-ges-dark` |
| Boutons primaires | Green | `bg-ges-green` |
| Boutons secondaires | Blue | `bg-ges-blue` |
| Fond alternatif | Light | `bg-ges-light` |
| Icônes d'accent | Green | `text-ges-green` |
| Backgrounds icônes | Green 10% | `bg-ges-green bg-opacity-10` |

## 📝 Typographie

### Police
- **Famille** : Inter (Google Fonts)
- **Poids** : 300, 400, 500, 600, 700

### Hiérarchie des Titres

```html
<!-- H1 - Hero -->
<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">

<!-- H2 - Sections -->
<h2 class="text-3xl md:text-4xl font-bold">

<!-- H3 - Cartes -->
<h3 class="text-xl md:text-2xl font-bold">

<!-- Paragraphes -->
<p class="text-lg md:text-xl">
```

## 🧩 Composants Standards

### Boutons

```html
<!-- Bouton primaire -->
<a class="bg-ges-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition">

<!-- Bouton secondaire -->
<a class="bg-ges-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition">

<!-- Bouton contour -->
<a class="bg-white text-ges-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
```

### Cartes

```html
<!-- Carte standard -->
<div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition h-full flex flex-col">
  <!-- Contenu -->
  <p class="grow">Description</p>
</div>
```

### Icônes

```html
<!-- Icône avec fond -->
<div class="w-16 h-16 bg-ges-green bg-opacity-10 rounded-lg flex items-center justify-center">
  <i class="fas fa-icon text-ges-green text-2xl"></i>
</div>

<!-- Icône circulaire -->
<div class="w-20 h-20 bg-ges-green bg-opacity-10 rounded-full flex items-center justify-center">
  <i class="fas fa-icon text-ges-green text-3xl"></i>
</div>
```

### Tags

```html
<span class="bg-ges-green bg-opacity-10 text-ges-green px-3 py-1 rounded-full text-sm font-medium">
  Tag
</span>
```

## 📐 Espacement

### Padding/Margin Standards
- **Sections** : `py-20` (vertical), `px-4 sm:px-6 lg:px-8` (horizontal)
- **Cartes** : `p-6` ou `p-8`
- **Titres** : `mb-4` ou `mb-6`
- **Paragraphes** : `mb-8`

### Conteneurs
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

## 🎯 Grilles Responsive

```html
<!-- 1 colonne mobile, 2 tablette, 3 desktop -->
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- 1 colonne mobile, 2 tablette, 4 desktop -->
<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

<!-- 1 colonne mobile, 2 tablette, 5 desktop -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
```

## 🖼️ Images

### Format Standard
```html
<img src="url?w=800&q=80" alt="description" class="w-full h-64 object-cover rounded-xl">
```

### Paramètres Unsplash
- **Width** : 800px ou 600px
- **Quality** : 80
- **Format** : WebP si supporté

## 🎭 Animations

### Transitions Standards
```css
transition: all 0.3s ease;
```

### Hover Effects

```html
<!-- Cartes -->
<div class="card-hover">
  <!-- transform: translateY(-8px) au hover -->
</div>

<!-- Liens -->
<a class="hover:text-ges-green transition">
```

## 📱 Breakpoints

| Breakpoint | Taille | Classe |
|------------|--------|--------|
| Mobile | < 640px | (default) |
| Tablet | 640px | `sm:` |
| Desktop | 1024px | `lg:` |
| Desktop XL | 1280px | `xl:` |

## ✅ Bonnes Pratiques

1. **Toujours utiliser** `h-full flex flex-col` pour les cartes
2. **Utiliser** `flex-grow` pour uniformiser les hauteurs
3. **Responsive mobile-first** : styles de base pour mobile, puis breakpoints
4. **Couleurs cohérentes** : uniquement ges-blue, ges-green, ges-dark, ges-light
5. **Composants réutilisables** : créer un composant plutôt que dupliquer du code
6. **Images optimisées** : toujours spécifier width et quality
7. **Accessibilité** : alt text pour toutes les images
8. **Performance** : utiliser `transition` plutôt que `animate`

## 🚫 À Éviter

- ❌ Classes de couleurs custom (`bg-secondary`)
- ❌ Tailles fixes sans responsive (`text-4xl`)
- ❌ Cartes sans flex pour hauteur uniforme
- ❌ Images sans paramètres d'optimisation
- ❌ Dupliquer du code plutôt que créer un composant
- ❌ Oublier les breakpoints responsive

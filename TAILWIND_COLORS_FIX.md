# Configuration des Couleurs Tailwind CSS 4

## Problème Résolu

Les couleurs personnalisées `bg-ges-green`, `text-ges-green`, etc. n'étaient pas reconnues par Tailwind CSS 4.

## Solution

Avec Tailwind CSS 4, la syntaxe a changé. Au lieu de configurer les couleurs dans `tailwind.config.js`, on utilise maintenant la directive `@theme` dans le fichier CSS.

### Configuration dans `styles.css`

```css
@theme {
  --color-ges-blue: #455A64;
  --color-ges-green: #8BC34A;
  --color-ges-dark: #2C3E50;
  --color-ges-light: #ECEFF1;
}
```

### Utilisation dans les Templates

Les couleurs sont maintenant disponibles avec les classes Tailwind standard :

```html
<!-- Backgrounds -->
<div class="bg-ges-green">...</div>
<div class="bg-ges-blue">...</div>
<div class="bg-ges-dark">...</div>
<div class="bg-ges-light">...</div>

<!-- Text -->
<p class="text-ges-green">...</p>
<p class="text-ges-blue">...</p>
<p class="text-ges-dark">...</p>

<!-- Borders -->
<div class="border-ges-green">...</div>

<!-- Opacity -->
<div class="bg-ges-green bg-opacity-10">...</div>
```

## Vérification

Pour vérifier que les couleurs fonctionnent :

1. Démarrer le serveur de développement : `npm start`
2. Ouvrir le navigateur
3. Inspecter les éléments avec les classes de couleurs personnalisées
4. Les couleurs devraient s'afficher correctement

## Fallback

Si les couleurs ne fonctionnent toujours pas, on peut également utiliser les variables CSS directement :

```css
.custom-bg {
  background-color: var(--color-ges-green);
}
```

## Documentation Tailwind CSS 4

La nouvelle syntaxe `@theme` est documentée ici :
https://tailwindcss.com/docs/v4-beta

## Changements Effectués

1. ✅ Ajout de `@theme` dans `styles.css`
2. ✅ Conservation des variables CSS `:root` pour compatibilité
3. ✅ Mise à jour du `tailwind.config.js` (reste pour référence)
4. ✅ Ajout d'images aux service cards
5. ✅ Correction des liens de navigation
6. ✅ Ajout des IDs de section (#services, #features)

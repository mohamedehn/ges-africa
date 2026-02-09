# Guide de Test - Vérification des Corrections

## 🎯 Comment tester les corrections

### 1. Démarrer le serveur

```bash
npm start
```

Le serveur devrait démarrer sur `http://localhost:4200`

### 2. Vérifier les couleurs

#### Boutons à vérifier :
- **Navigation** : Le bouton "Demander une étude" doit être vert (`#8BC34A`)
- **Hero** : Le bouton "Demander une étude" doit être vert (`#8BC34A`)
- **Sections** : Tous les boutons "Découvrir...", "Voir..." doivent avoir les bonnes couleurs

#### Éléments colorés à vérifier :
- Icônes vertes dans les cartes
- Backgrounds verts avec opacité sur les icônes
- Cercles verts numérotés dans la section "Méthode"
- Tags verts dans les cartes de projets

### 3. Vérifier les images

#### Section "Des projets énergétiques et digitaux"
Chaque carte de service doit maintenant avoir une image en haut :
1. Photovoltaïque & stockage - Image de panneaux solaires
2. BIM MEP - Image de plans/architecture
3. GTB/GTC - Image de bureau moderne
4. CFO/CFA - Image d'infrastructure électrique
5. IRVE - Image de borne de recharge

### 4. Vérifier les liens de navigation

Cliquer sur chaque lien du menu :
- ✅ **Accueil** → Retour en haut
- ✅ **Expertises** → Section "Des projets énergétiques" (#services)
- ✅ **Solutions** → Section "Des projets énergétiques" (#services)
- ✅ **Secteurs** → Section "Des projets énergétiques" (#services)
- ✅ **Réalisations** → Section "Quelques typologies" (#realisations)
- ✅ **Méthode** → Section "Notre méthode" (#methode)
- ✅ **À propos** → Section "Pourquoi GES Africa" (#features)

## 🔧 Si les couleurs ne fonctionnent toujours pas

### Option 1 : Recompiler Tailwind
```bash
# Arrêter le serveur (Ctrl+C)
# Supprimer le cache
rm -rf .angular

# Redémarrer
npm start
```

### Option 2 : Vérifier les DevTools
1. Ouvrir les DevTools (F12)
2. Inspecter un bouton vert
3. Vérifier dans l'onglet "Computed" si `background-color` est `#8BC34A`

### Option 3 : Vérifier la console
Regarder s'il y a des erreurs Tailwind dans la console du navigateur

## 📸 Captures d'écran attendues

### Bouton Navigation
```
[Demander une étude] <- Vert #8BC34A avec texte blanc
```

### Service Cards
```
┌─────────────────────┐
│   [Image]           │
│                     │
├─────────────────────┤
│ [Icône]             │
│ Titre               │
│ Description         │
└─────────────────────┘
```

### Méthode - Étapes
```
(1) (2) (3) (4) (5)
 ─── ─── ─── ───
```
Tous les cercles doivent être verts avec ligne de connexion verte

## ⚠️ Problèmes connus

Si vous voyez encore des couleurs incorrectes :
1. Vider le cache du navigateur (Ctrl+Shift+Delete)
2. Recharger en mode hard refresh (Ctrl+F5)
3. Vérifier que le fichier `styles.css` contient bien la section `@theme`

## ✅ Checklist de validation

- [ ] Bouton navigation est vert
- [ ] Bouton hero "Demander une étude" est vert
- [ ] Bouton hero "Parler à un expert" est blanc avec texte bleu
- [ ] Toutes les icônes sont vertes
- [ ] Les backgrounds d'icônes ont 10% d'opacité verte
- [ ] Les 5 service cards ont des images
- [ ] Tous les liens de navigation fonctionnent
- [ ] Le smooth scroll fonctionne
- [ ] Les cercles numérotés sont verts
- [ ] Les tags de projets sont verts avec fond vert clair

## 📞 Si ça ne fonctionne toujours pas

Partager une capture d'écran de :
1. Un bouton qui devrait être vert
2. Les DevTools montrant les styles appliqués
3. La console du navigateur

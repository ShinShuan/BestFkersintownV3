# Guide Client - BestF.kersInTown (BFIT)

## Table des matières
1. [Déploiement sur Vercel](#1-déploiement-sur-vercel)
2. [Accéder à l'Interface Admin](#2-accéder-à-linterface-admin)
3. [Gérer les Votes](#3-gérer-les-votes)
4. [Personnalisation](#4-personnalisation)
5. [Support](#5-support)

---

## 1. Déploiement sur Vercel

### Étape 1: Créer un compte Vercel (gratuit)

1. Aller sur https://vercel.com/signup
2. Se connecter avec GitHub (recommandé) ou email

### Étape 2: Pousser le code sur GitHub

Si ce n'est pas déjà fait:
```bash
# Dans le dossier du projet
git init
git add .
git commit -m "Initial commit - BFIT Store"
git remote add origin https://github.com/VOTRE_COMPTE/bfit-store.git
git push -u origin main
```

### Étape 3: Importer le projet sur Vercel

1. Sur Vercel, cliquer **"Add New Project"**
2. Sélectionner votre repository GitHub
3. **IMPORTANT**: Configurer les variables d'environnement:

| Variable | Valeur |
|----------|--------|
| `VITE_BIGCOMMERCE_STORE_HASH` | `qdy1j8i5vg` |
| `VITE_BIGCOMMERCE_CLIENT_ID` | `s7rw6slm5do6a9dyd7a1px12ln9wcyl` |
| `VITE_BIGCOMMERCE_ACCESS_TOKEN` | `ehi1veygrjzpisslheidxg8slbl7vbl` |
| `VITE_BIGCOMMERCE_API_URL` | `https://api.bigcommerce.com/stores/qdy1j8i5vg/v3` |

4. Cliquer **"Deploy"**
5. Attendre 2-3 minutes que le déploiement se termine
6. Votre site est en ligne sur `https://votre-projet.vercel.app`

### Étape 4: Configurer un domaine personnalisé (optionnel)

1. Dans les paramètres du projet Vercel > Domains
2. Ajouter votre domaine (ex: `www.bestfkersintown.com`)
3. Suivre les instructions pour configurer les DNS

---

## 2. Accéder à l'Interface Admin

### Activer le Mode Admin

**Méthode 1: Via la console du navigateur**
1. Aller sur votre site
2. Ouvrir les outils développeur (F12 ou Ctrl+Shift+I)
3. Aller dans l'onglet "Console"
4. Taper cette commande et appuyer sur Entrée:
```javascript
localStorage.setItem('adminMode', 'true');
```
5. Rafraîchir la page (F5)

**Méthode 2: Créer un lien admin secret**
Ajouter `?admin=true` à votre URL:
```
https://votre-site.vercel.app/?admin=true
```

### Accéder au Gestionnaire de Votes

Une fois le mode admin activé:
1. Un bouton **⚙️ Settings** apparaît dans le header
2. Cliquer dessus pour ouvrir le gestionnaire de votes

---

## 3. Gérer les Votes

### Ajouter un nouvel élément de vote

1. Ouvrir le gestionnaire (Settings)
2. Cliquer **"Ajouter un élément"**
3. Remplir le formulaire:
   - **Titre (FR)**: Titre en français (obligatoire)
   - **Titre (EN)**: Titre en anglais (optionnel)
   - **Description (FR)**: Description en français (obligatoire)
   - **Description (EN)**: Description en anglais (optionnel)
   - **URL de l'image**: Lien vers l'image (utiliser Cloudinary, Unsplash, etc.)
   - **Catégorie**: Sélectionner la catégorie
4. Cliquer **"Sauvegarder"**

### Modifier un élément existant

1. Dans la liste des éléments, cliquer sur l'icône ✏️ (crayon)
2. Modifier les champs souhaités
3. Cliquer **"Sauvegarder"**

### Activer/Désactiver un élément

- Cliquer sur l'icône 👁️ (œil) pour activer/désactiver
- Les éléments désactivés ne s'affichent pas sur la page de vote publique

### Supprimer un élément

1. Cliquer sur l'icône 🗑️ (poubelle)
2. Confirmer la suppression

### Réinitialiser aux données par défaut

- Cliquer **"Réinitialiser"** pour restaurer les données de démonstration
- ⚠️ Cette action supprime tous les votes et éléments personnalisés

---

## 4. Personnalisation

### Changer les images

Pour les images, utilisez des services gratuits:

1. **Cloudinary** (recommandé):
   - Créer un compte sur https://cloudinary.com
   - Uploader vos images
   - Copier l'URL de l'image

2. **Unsplash** (images gratuites):
   - Chercher une image sur https://unsplash.com
   - Copier l'URL de l'image

### Format d'URL d'image recommandé
```
https://images.unsplash.com/photo-XXXXX?w=500&h=500&fit=crop
```

### Catégories disponibles
- Collection
- Vêtements (Clothing)
- Accessoires (Accessories)
- Chaussures (Shoes)
- Sport
- Autre (Other)

---

## 5. Support

### Problèmes courants

**Le bouton Settings n'apparaît pas**
- Vérifiez que le mode admin est activé
- Rafraîchissez la page
- Réessayez la commande dans la console

**Les modifications ne s'enregistrent pas**
- Les données sont stockées dans le navigateur (localStorage)
- Utilisez toujours le même navigateur pour administrer
- Ne videz pas les données du navigateur

**Les images ne s'affichent pas**
- Vérifiez que l'URL de l'image est correcte
- L'image doit être accessible publiquement (pas de lien privé)

### Contact Support

Pour toute assistance technique:
- Email: [votre-email@exemple.com]
- Téléphone: [votre-numéro]

---

## Notes importantes

### Stockage des données

Actuellement, les votes sont stockés dans le **localStorage** du navigateur. Cela signifie:
- ✅ Gratuit et simple
- ✅ Pas besoin de base de données
- ⚠️ Les données sont par navigateur/appareil
- ⚠️ Si l'utilisateur efface ses données, les votes sont perdus

### Pour une solution plus robuste (optionnel)

Si vous souhaitez un système de vote avec base de données:
1. **Supabase** (gratuit jusqu'à 500MB): https://supabase.com
2. **Airtable** (gratuit jusqu'à 1200 enregistrements): https://airtable.com

Contactez le développeur pour migrer vers une de ces solutions.

---

*Document mis à jour le 19 janvier 2026 - BFIT*

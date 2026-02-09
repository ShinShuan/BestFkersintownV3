---
description: Guide complet pour accéder au panel d'administration
---

# 🔐 Playbook : Accès au Panel d'Administration

## 📋 Vue d'ensemble

Ce playbook vous guide pour accéder au panel d'administration de BestF.kersInTown et gérer les éléments de vote, les produits et paramètres.

---

## 🚀 Méthodes d'Accès (3 Options)

### ✅ Méthode 1 : Via URL Parameter (Recommandée)

**La plus simple et rapide**

1. **Ouvrez votre navigateur**
2. **Accédez à votre site avec le paramètre admin :**

   ```
   http://localhost:5173/?admin=true
   ```

   ou en production :

   ```
   https://votre-domaine.com/?admin=true
   ```

3. **Le mode admin s'active automatiquement**
   - ⚙️ Un bouton **Settings** apparaît dans le header
   - Le paramètre `?admin=true` est automatiquement retiré de l'URL (pour la sécurité)
   - Le mode reste actif grâce au localStorage

---

### Méthode 2 : Via Console Développeur

**Pour un accès permanent**

1. **Ouvrez votre site** (`http://localhost:5173` ou votre domaine)
2. **Appuyez sur `F12`** pour ouvrir les DevTools
3. **Allez dans l'onglet "Console"**
4. **Tapez cette commande :**

   ```javascript
   localStorage.setItem('adminMode', 'true')
   ```

5. **Appuyez sur Entrée**
6. **Rechargez la page** (`Ctrl+R` ou `F5`)
7. **Le bouton ⚙️ Settings apparaît** dans le header

---

### Méthode 3 : Créer un Bookmark (Favori)

**Pour un accès rapide quotidien**

1. **Copiez cette URL :**

   ```
   http://localhost:5173/?admin=true
   ```

   (ou votre domaine en production)

2. **Dans votre navigateur :**
   - Chrome/Edge : `Ctrl+D` → Nommer "Admin BFIT" → Sauvegarder
   - Firefox : `Ctrl+D` → Nommer "Admin BFIT" → Terminer
   - Safari : `Cmd+D` → Nommer "Admin BFIT" → Ajouter

3. **Cliquez sur le favori** quand vous voulez administrer

---

## 🎯 Utilisation du Panel Admin

### Ouvrir le Gestionnaire

1. Une fois le mode admin activé, vous verrez **⚙️** dans le header
2. Cliquez sur l'icône **⚙️ Settings**
3. Le panneau de gestion s'ouvre

### Fonctionnalités Disponibles

Le gestionnaire permet de :

- ➕ **Ajouter** des éléments de vote
- ✏️ **Modifier** les éléments existants
- 👁️ **Activer/Désactiver** la visibilité
- 🗑️ **Supprimer** des éléments
- 📊 **Voir les statistiques** de vote

---

## 📝 Gérer les Éléments de Vote

### Ajouter un Nouvel Élément

1. Cliquez **"Ajouter un élément"**
2. Remplissez les champs :
   - **Titre (FR)** : Nom en français ✅ Obligatoire
   - **Titre (EN)** : Nom en anglais (optionnel)
   - **Description (FR)** : Description française ✅ Obligatoire
   - **Description (EN)** : Description anglaise (optionnel)
   - **URL Image** : Lien vers l'image ✅ Obligatoire
   - **Catégorie** : Type de produit ✅ Obligatoire

3. Cliquez **"Sauvegarder"**

### Modifier un Élément

1. Trouvez l'élément dans la liste
2. Cliquez sur **✏️** (icône crayon)
3. Modifiez les champs souhaités
4. Cliquez **"Sauvegarder"**

### Activer/Désactiver

- Cliquez sur **👁️** (icône œil)
- 🟢 Vert = Visible sur le site
- 🔴 Rouge = Caché

### Supprimer

1. Cliquez sur **🗑️** (icône poubelle)
2. Confirmez la suppression

---

## 🖼️ Gestion des Images

### Sources d'Images Recommandées

**Option 1 : Unsplash (Gratuit)**

```
1. Allez sur https://unsplash.com
2. Recherchez votre image
3. Clic droit > "Copier l'adresse de l'image"
4. Collez dans le champ URL
```

**Option 2 : Cloudinary (Vos images)**

```
1. Créez un compte sur https://cloudinary.com
2. Uploadez votre image
3. Copiez l'URL publique générée
```

**Option 3 : Imgur**

```
1. Allez sur https://imgur.com
2. Uploadez votre image
3. Copiez le lien direct
```

### Critères Images

- ✅ **Format** : JPG, PNG, WebP
- ✅ **Taille minimale** : 500x500 pixels
- ✅ **Taille maximale** : 2 Mo
- ✅ **Doit être publique** (pas de lien privé/protégé)

---

## 📊 Catégories Disponibles

| Catégorie | Description |
|-----------|-------------|
| **Vêtements** | T-shirts, sweats, robes, etc. |
| **Accessoires** | Bagues, colliers, sacs, etc. |
| **Chaussures** | Sneakers, bottes, sandales, etc. |
| **Maquillage** | Produits de beauté, cosmétiques |
| **Autre** | Tout autre type de produit |

---

## 🔒 Sécurité

### ✅ Bonnes Pratiques

- Utilisez **toujours le même navigateur** pour l'admin
- Créez un **bookmark** pour un accès rapide
- **Ne partagez pas** les URLs avec `?admin=true`
- Utilisez un **navigateur sécurisé et à jour**

### ❌ À Éviter

- ❌ Ne videz **jamais** les données de navigation (cela efface le mode admin)
- ❌ N'utilisez **pas** la navigation privée pour administrer
- ❌ Ne partagez **pas** l'accès avec des personnes non autorisées

### Désactiver le Mode Admin

Si vous souhaitez désactiver le mode admin :

```javascript
// Ouvrez la console (F12) et tapez :
localStorage.removeItem('adminMode')
// Puis rechargez la page
```

---

## 🆘 Dépannage

### Le bouton ⚙️ Settings n'apparaît pas

**Solutions :**

1. Rafraîchissez avec `Ctrl+F5` (rechargement forcé)
2. Vérifiez que l'URL contient bien `?admin=true`
3. Ouvrez la console (F12) et tapez :

   ```javascript
   localStorage.getItem('adminMode')
   ```

   Si ça retourne `null`, refaites la Méthode 2

### Les modifications ont disparu

**Raisons possibles :**

- ✋ Vous avez vidé les données du navigateur
- ✋ Vous avez changé de navigateur
- ✋ Le localStorage a été effacé

**Solution :**

- Utilisez toujours le même navigateur pour l'admin
- Évitez de vider le cache/données

### L'image ne s'affiche pas

**Vérifications :**

1. Testez l'URL en la collant dans un nouvel onglet
2. Assurez-vous que l'image est **publique**
3. Vérifiez que l'URL commence par `https://`
4. Essayez une autre source (Unsplash, Cloudinary)

### Le panel ne se sauvegarde pas

**Solutions :**

1. Vérifiez que tous les champs obligatoires sont remplis
2. Vérifiez votre connexion internet
3. Rechargez la page et réessayez
4. Ouvrez la console (F12) pour voir les erreurs éventuelles

---

## 🎯 Checklist Rapide

Avant de commencer à administrer, vérifiez :

- [ ] Mode admin activé (`?admin=true` ou localStorage)
- [ ] Bouton ⚙️ Settings visible dans le header
- [ ] Même navigateur que d'habitude
- [ ] Images prêtes (URLs publiques)
- [ ] Connexion internet stable

---

## 📞 Support

### En cas de problème persistant

1. **Consultez ce guide** en premier
2. **Vérifiez la console** (F12 → Console) pour les erreurs
3. **Contactez le support :**
   - Email : <contact@bestfkersintown.com>
   - En production, vérifiez les logs du serveur

---

## 📱 Interface Mobile

Le panel d'administration est **entièrement responsive** :

- ✅ Ordinateurs de bureau
- ✅ Tablettes
- ✅ Smartphones

*Optimisé pour tous les appareils !*

---

## 🎉 Récapitulatif

**Accès rapide (Méthode recommandée) :**

```
1. Allez sur http://localhost:5173/?admin=true
2. Cliquez sur ⚙️ dans le header
3. Gérez vos éléments de vote
```

**Bon courage avec l'administration !** 🚀

---

*Dernière mise à jour : Février 2026*
*Version : 2.0*

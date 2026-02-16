# 🔒 Guide de Sécurité Git - BestFkersintownV3

## ✅ Changements Appliqués

### 1. Gitignore Renforcé

Le fichier `.gitignore` a été mis à jour pour ignorer :

- **Tous les fichiers .env** (`.env`, `.env.*`, `*.env`)
- **Fichiers de credentials** (`*credentials*.txt`, `*credentials*.json`)
- **Clés API** (`*api-key*.txt`, `*api-key*.json`)
- **Secrets** (`*secret*.txt`, `*secret*.json`)
- **Certificats** (`.pem`, `.key`, `.cert`, `.p12`, `.pfx`)
- **Fichiers de config sensibles** (`.npmrc`, `.yarnrc`, `config.local.*`)
- **Dossiers secrets** (`secrets/`, `.secrets/`)

### 2. Statut Actuel ✅

- ✅ Le fichier `.env` **n'est PAS** suivi par Git
- ✅ Un fichier `.env.example` a été créé comme template
- ✅ Toutes les clés API sont protégées

---

## 📋 Checklist de Sécurité

Avant de pousser sur GitHub :

- [x] Le `.gitignore` inclut `.env` et ses variantes
- [x] Le `.gitignore` inclut les patterns pour les clés API
- [x] Un fichier `.env.example` existe (sans valeurs sensibles)
- [ ] Vérifier qu'aucun fichier sensible n'est tracké : `git status`
- [ ] Vérifier les fichiers qui seront commités : `git diff --cached`

---

## 🚨 Si le .env a été commité par erreur

Si jamais le fichier `.env` avait été commité dans l'historique Git, voici comment le supprimer :

### Option 1 : Retirer du dernier commit (si juste commité)

```powershell
# Retirer .env du staging
git rm --cached .env

# Faire un nouveau commit
git commit -m "chore: remove .env from version control"
```

### Option 2 : Nettoyer l'historique Git complet

**⚠️ ATTENTION : Cela réécrit l'historique Git**

```powershell
# Installer BFG Repo-Cleaner (plus simple que git filter-branch)
# Télécharger depuis: https://rtyley.github.io/bfg-repo-cleaner/

# Supprimer tous les .env de l'historique
java -jar bfg.jar --delete-files .env

# Nettoyer le repository
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Pousser les changements (force push requis)
git push origin --force --all
```

### Option 3 : Utiliser git filter-branch (méthode native)

```powershell
# Supprimer .env de tout l'historique
git filter-branch --force --index-filter `
  "git rm --cached --ignore-unmatch .env" `
  --prune-empty --tag-name-filter cat -- --all

# Nettoyer
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push
git push origin --force --all
```

---

## 🔑 Rotation des Clés API

Si vos clés API ont été exposées sur GitHub :

### 1. Google OAuth

- Allez sur [Google Cloud Console](https://console.cloud.google.com/)
- Révoquez le Client ID actuel
- Créez un nouveau Client ID
- Mettez à jour `.env`

### 2. BigCommerce

- Allez sur votre [BigCommerce Dashboard](https://login.bigcommerce.com/)
- Settings → API Accounts
- Supprimez l'ancien token
- Créez un nouveau token
- Mettez à jour `.env`

### 3. Supabase (si utilisé)

- Allez sur [Supabase Dashboard](https://app.supabase.com/)
- Project Settings → API
- Régénérez l'Anon Key
- Mettez à jour `.env`

---

## ✅ Bonnes Pratiques

### 1. Avant chaque commit

```powershell
# Vérifier les fichiers qui seront commités
git status

# Voir le contenu exact
git diff --cached
```

### 2. Utilisez .env.example

```powershell
# Pour un nouveau développeur
cp .env.example .env
# Puis remplir avec les vraies valeurs
```

### 3. Variables d'environnement Vercel

Pour le déploiement sur Vercel, ajoutez les variables via l'interface :

- Dashboard Vercel → Project Settings → Environment Variables
- Ajoutez toutes les variables du `.env` une par une

### 4. Ne jamais logger les secrets

```javascript
// ❌ MAUVAIS
console.log('API Key:', process.env.VITE_BIGCOMMERCE_ACCESS_TOKEN);

// ✅ BON
console.log('API Key configured:', !!process.env.VITE_BIGCOMMERCE_ACCESS_TOKEN);
```

---

## 🔍 Vérification Rapide

### Commande pour vérifier qu'aucun fichier sensible n'est tracké

```powershell
# Lister tous les fichiers suivis par Git
git ls-files

# Chercher des fichiers .env
git ls-files | Select-String "\.env$"

# Chercher des fichiers avec "secret" ou "key"
git ls-files | Select-String "(secret|key|credential)"
```

Si ces commandes retournent quelque chose, c'est qu'un fichier sensible est tracké !

---

## 📞 En Cas d'Exposition

Si vous découvrez qu'une clé a été exposée sur GitHub :

1. **IMMÉDIATEMENT** : Révoquez la clé exposée
2. Générez une nouvelle clé
3. Nettoyez l'historique Git (voir ci-dessus)
4. Force push les changements
5. Vérifiez les logs d'accès de vos services (Google, BigCommerce, etc.)

---

## 📚 Ressources

- [GitHub - Removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)
- [Git Filter-Branch](https://git-scm.com/docs/git-filter-branch)

---

*Dernière mise à jour : Février 2026*

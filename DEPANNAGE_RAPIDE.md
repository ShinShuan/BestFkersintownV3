# 🚨 Dépannage Rapide - Problèmes Urgents

## 🔥 Problèmes Immédiats

### 1. Application Hyper Bugguée

**Symptômes :**
- Erreurs de Fast Refresh
- Hooks incompatibles
- Pages qui ne se chargent pas
- Erreurs de console

**Solution Immédiate :**

#### A. Redémarrer l'application
```bash
# Arrêter le serveur (Ctrl+C)
# Puis redémarrer
npm run dev
```

#### B. Vider le cache
```bash
# Supprimer le cache
rm -rf node_modules/.vite
rm -rf dist
npm install
npm run dev
```

#### C. Test Simple
1. Allez sur `http://localhost:3000/test/simple`
2. Testez l'API Shopify
3. Vérifiez les erreurs dans la console

### 2. Erreurs de Checkout

**Solution Rapide :**
1. Allez sur `/test/simple`
2. Cliquez sur "Tester l'API Shopify"
3. Si ça marche, cliquez sur "Tester le Checkout"
4. Vérifiez les résultats

### 3. Problèmes de Hooks

**Solution :**
- Les hooks sont correctement exportés
- Le problème vient des dépendances circulaires
- Utilisez `/test/simple` pour éviter ces problèmes

## 🛠️ Solutions par Étape

### Étape 1: Diagnostic
```bash
# Vérifier les erreurs
npm run dev
# Ouvrir la console (F12)
# Aller sur /test/simple
```

### Étape 2: Test API
1. Ouvrir `http://localhost:3000/test/simple`
2. Cliquer sur "Tester l'API Shopify"
3. Vérifier les résultats

### Étape 3: Test Checkout
1. Si l'API fonctionne, cliquer sur "Tester le Checkout"
2. Vérifier la redirection vers Shopify

### Étape 4: Configuration
Si les tests échouent, vérifier :
- `environment.config.js` - tokens Shopify
- Console du navigateur - erreurs détaillées
- Boutique Shopify - active et avec produits

## 📋 Checklist Express

- [ ] Serveur redémarré
- [ ] Cache vidé
- [ ] Test simple effectué
- [ ] API Shopify fonctionne
- [ ] Checkout fonctionne
- [ ] Pas d'erreurs console

## 🆘 Si Rien Ne Marche

### Option 1: Reset Complet
```bash
# Sauvegarder vos modifications importantes
git add .
git commit -m "Sauvegarde avant reset"

# Reset complet
git reset --hard HEAD
npm install
npm run dev
```

### Option 2: Nouveau Projet
```bash
# Créer un nouveau projet Vite
npm create vite@latest my-shopify-app -- --template react-ts
cd my-shopify-app
npm install
npm run dev
```

### Option 3: Support
1. Copier les erreurs de la console
2. Noter les étapes qui échouent
3. Utiliser `/test/simple` pour isoler le problème

## 🎯 Priorités

1. **Faire fonctionner `/test/simple`** - C'est la base
2. **Tester l'API Shopify** - Vérifier la connexion
3. **Tester le checkout** - Vérifier le processus
4. **Corriger les erreurs** - Une par une

## 📞 Contact Rapide

Si vous avez besoin d'aide immédiate :
1. Copier les erreurs de la console
2. Noter l'URL qui pose problème
3. Décrire ce qui ne marche pas

---

**Note :** Ce guide est pour les problèmes urgents. Pour une solution complète, utilisez le guide principal.

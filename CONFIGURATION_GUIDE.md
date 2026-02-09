# Guide de Configuration - Systèmes Connectés

Ce guide vous explique comment configurer et connecter les trois systèmes principaux de votre application e-commerce.

## 🛒 1. Configuration Shopify Paiement

### Étape 1: Configuration Shopify Store
1. **Accédez à votre admin Shopify** : `https://jwbq9j-z9.myshopify.com/admin`
2. **Activez Shopify Payments** :
   - Allez dans Settings > Payments
   - Activez Shopify Payments
   - Configurez votre compte bancaire

### Étape 2: Configuration API Shopify
1. **Créez une app privée** :
   - Allez dans Apps > Develop apps
   - Cliquez sur "Create an app"
   - Nommez-la "E-commerce Frontend"

2. **Configurez les permissions** :
   - **Admin API access scopes** :
     - `read_products`, `write_products`
     - `read_customers`, `write_customers`
     - `read_orders`, `write_orders`
     - `read_inventory`, `write_inventory`
   - **Storefront API access scopes** :
     - `unauthenticated_read_product_listings`
     - `unauthenticated_read_product_inventory`
     - `unauthenticated_read_product_tags`
     - `unauthenticated_read_selling_plans`

3. **Installez l'app** et copiez les tokens

### Étape 3: Variables d'environnement
Créez un fichier `.env.local` à la racine du projet :

```env
# Shopify Configuration
VITE_SHOPIFY_STORE_URL=jwbq9j-z9.myshopify.com
VITE_SHOPIFY_ADMIN_ACCESS_TOKEN=votre_admin_token
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=votre_storefront_token
VITE_SHOPIFY_FRONTEND_API_KEY=votre_frontend_api_key
VITE_SHOPIFY_FRONTEND_API_SECRET=votre_frontend_api_secret

# Stripe Configuration (si vous utilisez Stripe)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle_publique
VITE_STRIPE_SECRET_KEY=sk_test_votre_cle_secrete
```

## 🔐 2. Configuration Google OAuth

### Étape 1: Créer un projet Google Cloud
1. **Allez sur Google Cloud Console** : https://console.cloud.google.com/
2. **Créez un nouveau projet** ou sélectionnez un existant
3. **Activez l'API Google+ API**

### Étape 2: Configurer OAuth 2.0
1. **Allez dans "Credentials"**
2. **Cliquez sur "Create Credentials" > "OAuth 2.0 Client ID"**
3. **Configurez l'application** :
   - Type : "Web application"
   - Nom : "BestF.kersinTown E-commerce"
   - URIs de redirection autorisés :
     - `http://localhost:3000` (développement)
     - `https://votre-domaine.com` (production)

### Étape 3: Variables d'environnement
Ajoutez à votre `.env.local` :

```env
# Google OAuth Configuration
VITE_GOOGLE_CLIENT_ID=votre_google_client_id
VITE_GOOGLE_CLIENT_SECRET=votre_google_client_secret
VITE_GOOGLE_REDIRECT_URI=http://localhost:3000
```

### Étape 4: Intégration dans l'application
1. **Ajoutez le script Google** dans `index.html` :
```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

2. **Initialisez Google OAuth** dans votre composant d'authentification

## ❤️ 3. Configuration Système de Likes/Favoris

### Étape 1: Configuration Base de Données
Le système utilise actuellement le localStorage pour le stockage local et peut synchroniser avec votre API.

### Étape 2: API Endpoints (optionnel)
Si vous voulez une synchronisation serveur, créez ces endpoints :

```javascript
// GET /api/favorites/:userId
// POST /api/favorites
// DELETE /api/favorites/:userId/:productId
// POST /api/favorites/sync
```

### Étape 3: Variables d'environnement
Ajoutez à votre `.env.local` :

```env
# API Configuration
VITE_API_URL=http://localhost:3001/api
```

## 🚀 4. Test des Intégrations

### Test Shopify Paiement
1. **Lancez l'application** : `npm run dev`
2. **Ajoutez des produits au panier**
3. **Testez le checkout** :
   - Créez un checkout
   - Redirigez vers Shopify
   - Testez le paiement en mode test

### Test Google OAuth
1. **Cliquez sur "Se connecter"**
2. **Sélectionnez Google**
3. **Autorisez l'application**
4. **Vérifiez la création du compte Shopify**

### Test Système de Likes
1. **Connectez-vous**
2. **Cliquez sur le bouton "J'aime"** sur un produit
3. **Vérifiez l'ajout aux favoris**
4. **Testez la synchronisation**

## 🔧 5. Dépannage

### Problèmes Shopify
- **Erreur 401** : Vérifiez vos tokens d'accès
- **Erreur 403** : Vérifiez les permissions de votre app
- **Produits non trouvés** : Vérifiez que les produits sont publiés

### Problèmes Google OAuth
- **Erreur "redirect_uri_mismatch"** : Vérifiez les URIs de redirection
- **Erreur "invalid_client"** : Vérifiez votre Client ID
- **Popup bloqué** : Autorisez les popups pour votre domaine

### Problèmes Likes
- **Favoris non sauvegardés** : Vérifiez le localStorage
- **Synchronisation échouée** : Vérifiez votre API

## 📱 6. Production

### Variables d'environnement de production
```env
VITE_SHOPIFY_STORE_URL=votre-boutique.myshopify.com
VITE_GOOGLE_REDIRECT_URI=https://votre-domaine.com
VITE_API_URL=https://votre-api.com/api
```

### Sécurité
- **Ne committez jamais** vos clés secrètes
- **Utilisez HTTPS** en production
- **Validez les tokens** côté serveur
- **Limitez les permissions** API au minimum nécessaire

## 📞 7. Support

Si vous rencontrez des problèmes :
1. **Vérifiez les logs** dans la console du navigateur
2. **Testez les APIs** individuellement
3. **Consultez la documentation** Shopify et Google
4. **Vérifiez les permissions** et tokens

---

**Note** : Ce guide suppose que vous avez déjà configuré votre boutique Shopify et que vous avez accès aux APIs nécessaires.

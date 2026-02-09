# Configuration de l'Authentification

Ce guide vous explique comment configurer l'authentification Google OAuth et l'intégration Shopify pour l'application BestF.kersinTown.

## 🚀 Configuration Google OAuth

### 1. Créer un projet Google Cloud

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API Google+ API dans la section "APIs & Services" > "Library"

### 2. Configurer les identifiants OAuth

1. Allez dans "APIs & Services" > "Credentials"
2. Cliquez sur "Create Credentials" > "OAuth 2.0 Client ID"
3. Sélectionnez "Web application" comme type d'application
4. Configurez les URIs de redirection autorisés :
   - `http://localhost:3000` (pour le développement)
   - `https://votre-domaine.com` (pour la production)
5. Copiez le **Client ID** et le **Client Secret**

### 3. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# Google OAuth
VITE_GOOGLE_CLIENT_ID=votre_client_id_ici
VITE_GOOGLE_CLIENT_SECRET=votre_client_secret_ici

# Shopify (optionnel - déjà configuré)
VITE_SHOPIFY_STORE_URL=jwbq9j-z9.myshopify.com
VITE_SHOPIFY_ADMIN_TOKEN=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
VITE_SHOPIFY_STOREFRONT_TOKEN=afff8fcca0a9f7cb503473ac4b99bcdb
```

## 🛍️ Configuration Shopify

### 1. Accès à l'API Shopify

L'application utilise déjà les clés API Shopify suivantes :
- **Store URL**: `jwbq9j-z9.myshopify.com`
- **Admin Access Token**: `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`
- **Storefront Access Token**: `afff8fcca0a9f7cb503473ac4b99bcdb`

### 2. Fonctionnalités Shopify intégrées

- ✅ Récupération des produits
- ✅ Gestion des clients
- ✅ Stockage des favoris via les tags clients
- ✅ Gestion des commandes
- ✅ Vérification de l'inventaire

## 🔧 Fonctionnalités implémentées

### Bouton Like (Favoris)
- ✅ Authentification requise pour liker
- ✅ Intégration avec Google OAuth
- ✅ Stockage des favoris dans Shopify
- ✅ Interface utilisateur moderne
- ✅ Animations et feedback visuel

### Bouton Panier
- ✅ Gestion du panier local
- ✅ Intégration avec les favoris
- ✅ Ajout depuis la page des favoris
- ✅ Compteur d'articles

### Bouton Compte (Menu utilisateur)
- ✅ Connexion avec Google
- ✅ Affichage des informations utilisateur
- ✅ Menu déroulant avec options
- ✅ Statistiques (favoris, commandes)
- ✅ Déconnexion

## 📱 Pages créées

### Page des Favoris (`/favorites`)
- ✅ Affichage des produits favoris
- ✅ Suppression individuelle
- ✅ Suppression en masse
- ✅ Ajout au panier depuis les favoris
- ✅ État vide avec CTA
- ✅ Design responsive

### Menu Utilisateur
- ✅ Profil utilisateur avec avatar
- ✅ Navigation vers les favoris
- ✅ Navigation vers les commandes
- ✅ Navigation vers les paramètres
- ✅ Déconnexion

## 🔐 Sécurité

### Authentification
- ✅ Validation des tokens Google
- ✅ Gestion des sessions
- ✅ Protection des routes
- ✅ Stockage sécurisé des données

### Intégration Shopify
- ✅ Utilisation des tags clients pour les favoris
- ✅ Validation des permissions
- ✅ Gestion des erreurs API

## 🚀 Démarrage rapide

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Configurer Google OAuth** :
   - Suivez les étapes 1-3 ci-dessus
   - Créez le fichier `.env.local`

3. **Lancer l'application** :
   ```bash
   npm run dev
   ```

4. **Tester l'authentification** :
   - Cliquez sur le bouton "Compte" dans le header
   - Connectez-vous avec Google
   - Testez les fonctionnalités de favoris

## 📝 Notes importantes

### Variables d'environnement
- Les clés Shopify sont déjà configurées
- Seules les clés Google OAuth doivent être ajoutées
- Le fichier `.env.local` ne doit pas être commité

### Développement
- L'application fonctionne en mode développement sur `http://localhost:3000`
- Les redirections Google doivent inclure cette URL
- Les tokens sont stockés en localStorage

### Production
- Mettez à jour les URIs de redirection Google
- Configurez les variables d'environnement de production
- Vérifiez les permissions Shopify

## 🐛 Dépannage

### Erreur "Google OAuth non initialisé"
- Vérifiez que le script Google est chargé
- Vérifiez les clés OAuth dans `.env.local`
- Vérifiez les URIs de redirection

### Erreur "Utilisateur non authentifié"
- Vérifiez que l'utilisateur est connecté
- Vérifiez les tokens dans localStorage
- Vérifiez les permissions Shopify

### Erreur "Produit non trouvé"
- Vérifiez la connexion Shopify
- Vérifiez les IDs de produits
- Vérifiez les permissions API

## 📞 Support

Pour toute question ou problème :
1. Vérifiez la configuration Google OAuth
2. Vérifiez les variables d'environnement
3. Consultez les logs de la console
4. Vérifiez la documentation Shopify API

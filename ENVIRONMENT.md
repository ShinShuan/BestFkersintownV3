# Configuration de l'Environnement

## Variables d'Environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
# Configuration Shopify
VITE_SHOPIFY_STOREFRONT_TOKEN=afff8fcca0a9f7cb503473ac4b99bcdb
VITE_SHOPIFY_ADMIN_TOKEN=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
VITE_SHOPIFY_SHOP_DOMAIN=your-shop.myshopify.com

# Configuration de l'application
VITE_APP_NAME=BestF.kersinTown
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=development

# Configuration des API
VITE_API_BASE_URL=http://localhost:3000
VITE_SHOPIFY_API_VERSION=2023-10
```

## Configuration Shopify

### 1. Créer une application Shopify
1. Connectez-vous à votre compte Shopify Partner
2. Créez une nouvelle application
3. Configurez les permissions nécessaires

### 2. Permissions requises
- **Storefront API** : Accès en lecture aux produits, collections, etc.
- **Admin API** : Accès en lecture/écriture aux commandes, clients, etc.

### 3. Tokens d'accès
- **Storefront Access Token** : Pour l'API publique
- **Admin Access Token** : Pour l'API d'administration

## Environnements

### Développement
- `VITE_APP_ENV=development`
- Utilise les données de test
- Logs détaillés activés

### Production
- `VITE_APP_ENV=production`
- Utilise l'API Shopify réelle
- Optimisations activées

## Sécurité

⚠️ **Important** : Ne jamais commiter le fichier `.env` dans le repository
- Ajoutez `.env` au `.gitignore`
- Utilisez `.env.example` pour documenter les variables
- Stockez les secrets dans des variables d'environnement sécurisées

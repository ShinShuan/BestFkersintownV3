# 🔧 Guide de Dépannage Production - BestF.kersinTown

## 🚨 Problème : Création de Panier et Paiement Shopify ne fonctionne pas en Production

### 📋 Diagnostic Rapide

1. **Accédez à l'outil de diagnostic** :
   ```
   https://votre-domaine.com/production-debug
   ```

2. **Suivez les étapes de test** :
   - Test 1 : Configuration
   - Test 2 : Connexion Shopify
   - Test 3 : Création Panier

### 🔍 Causes Possibles et Solutions

#### 1. **Variables d'Environnement Manquantes**

**Symptôme** : Erreur "Configuration non trouvée"

**Solution** :
```bash
# Vérifiez que ces variables sont définies sur votre hébergeur
VITE_SHOPIFY_STORE_URL=jwbq9j-z9.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=afff8fcca0a9f7cb503473ac4b99bcdb
VITE_SHOPIFY_ADMIN_ACCESS_TOKEN=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
```

**Hébergeurs populaires** :
- **Vercel** : Variables d'environnement dans le dashboard
- **Netlify** : Variables d'environnement dans Site settings
- **Heroku** : `heroku config:set VARIABLE=valeur`

#### 2. **Problème CORS (Cross-Origin Resource Sharing)**

**Symptôme** : Erreur "CORS policy" dans la console

**Solution** :
1. **Dans Shopify Admin** :
   - Allez dans Apps > Develop apps
   - Sélectionnez votre app
   - Dans "App URLs", ajoutez votre domaine de production
   - Dans "Allowed redirection URLs", ajoutez votre domaine

2. **Configuration serveur** :
   ```apache
   # .htaccess pour Apache
   Header always set Access-Control-Allow-Origin "*"
   Header always set Access-Control-Allow-Methods "GET, POST, OPTIONS"
   Header always set Access-Control-Allow-Headers "Content-Type, X-Shopify-Storefront-Access-Token"
   ```

#### 3. **Tokens Shopify Expirés ou Invalides**

**Symptôme** : Erreur "401 Unauthorized" ou "403 Forbidden"

**Solution** :
1. **Régénérez les tokens** :
   - Shopify Admin > Apps > Develop apps
   - Sélectionnez votre app
   - Cliquez sur "Configure Admin API access scopes"
   - Régénérez les tokens

2. **Vérifiez les permissions** :
   - `read_products`, `write_products`
   - `read_customers`, `write_customers`
   - `read_orders`, `write_orders`
   - `unauthenticated_read_product_listings`

#### 4. **Produits Non Publiés ou Inactifs**

**Symptôme** : Erreur "Product variant not found"

**Solution** :
1. **Dans Shopify Admin** :
   - Allez dans Produits
   - Vérifiez que les produits sont "Actifs"
   - Vérifiez que les variantes ont du stock

2. **Testez avec un produit connu** :
   ```javascript
   // Utilisez cet ID de variante pour tester
   "gid://shopify/ProductVariant/51021723435351"
   ```

#### 5. **Problème de Build/Compilation**

**Symptôme** : Erreurs JavaScript en production

**Solution** :
1. **Rebuild l'application** :
   ```bash
   npm run build
   ```

2. **Vérifiez les erreurs de compilation** :
   ```bash
   npm run build 2>&1 | grep -i error
   ```

3. **Testez en local** :
   ```bash
   npm run preview
   ```

### 🛠️ Outils de Diagnostic

#### Outil de Diagnostic Intégré
```
https://votre-domaine.com/production-debug
```

#### Console du Navigateur
1. Ouvrez les outils de développement (F12)
2. Allez dans l'onglet "Console"
3. Recherchez les erreurs en rouge

#### Network Tab
1. Onglet "Network" des outils de développement
2. Testez la création de panier
3. Vérifiez les requêtes vers Shopify

### 📱 Tests Manuels

#### Test 1 : Configuration
```javascript
// Dans la console du navigateur
console.log('ENV_CONFIG:', window.ENV_CONFIG);
```

#### Test 2 : Connexion Shopify
```javascript
fetch('https://jwbq9j-z9.myshopify.com/api/2024-01/graphql.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': 'afff8fcca0a9f7cb503473ac4b99bcdb'
  },
  body: JSON.stringify({
    query: '{ shop { name } }'
  })
})
.then(r => r.json())
.then(console.log);
```

#### Test 3 : Création de Panier
```javascript
fetch('https://jwbq9j-z9.myshopify.com/api/2024-01/graphql.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': 'afff8fcca0a9f7cb503473ac4b99bcdb'
  },
  body: JSON.stringify({
    query: `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart { id checkoutUrl }
          userErrors { field message }
        }
      }
    `,
    variables: {
      input: {
        lines: [{
          merchandiseId: "gid://shopify/ProductVariant/51021723435351",
          quantity: 1
        }]
      }
    }
  })
})
.then(r => r.json())
.then(console.log);
```

### 🔧 Solutions d'Urgence

#### Solution 1 : Bypass Direct Shopify
```
https://votre-domaine.com/ultra-payment
```

#### Solution 2 : Debug Mode
```
https://votre-domaine.com/debug-checkout
```

#### Solution 3 : Product Finder
```
https://votre-domaine.com/product-finder
```

### 📞 Support

#### Informations à Fournir
1. **URL de votre site** en production
2. **Erreurs de console** (copie d'écran)
3. **Résultats du diagnostic** (`/production-debug`)
4. **Hébergeur utilisé** (Vercel, Netlify, etc.)

#### Contact
- **Email** : support@bestfkersintown.com
- **Documentation** : Ce guide
- **Outils** : `/production-debug`

### ✅ Checklist de Vérification

- [ ] Variables d'environnement configurées
- [ ] Domaine autorisé dans Shopify
- [ ] Tokens Shopify valides
- [ ] Produits actifs dans Shopify
- [ ] Build de production réussi
- [ ] Tests de diagnostic passés
- [ ] Console sans erreurs
- [ ] Requêtes réseau réussies

---

**Note** : Ce guide couvre les problèmes les plus courants. Si le problème persiste, utilisez l'outil de diagnostic intégré et contactez le support avec les informations détaillées.

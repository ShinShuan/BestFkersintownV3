# Guide de Dépannage - Erreurs de Checkout

Ce guide vous aide à résoudre les erreurs courantes lors du processus de checkout Shopify.

## 🚨 Erreurs Courantes

### 1. "Erreur lors de la création du panier"

**Symptômes :**
- Message d'erreur lors du clic sur "Passer au paiement"
- Page de checkout qui ne se charge pas
- Redirection qui échoue

**Causes possibles :**
- Tokens Shopify invalides ou expirés
- Produits non disponibles dans Shopify
- Erreur de configuration API

**Solutions :**

#### A. Vérifier les tokens Shopify
```bash
# Vérifiez vos variables d'environnement
VITE_SHOPIFY_STORE_URL=jwbq9j-z9.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=votre_token_ici
```

#### B. Tester l'API Shopify
1. Allez sur `/test/integrations`
2. Cliquez sur "Lancer les tests"
3. Vérifiez que "Connexion Shopify API" est en vert

#### C. Vérifier les produits
1. Assurez-vous que vos produits sont publiés dans Shopify
2. Vérifiez que les variantes ont des prix et du stock
3. Testez avec un produit simple d'abord

### 2. "Redirection vers la page de paiement..." mais rien ne se passe

**Symptômes :**
- Notification de redirection affichée
- Page reste sur le checkout
- Pas de redirection vers Shopify

**Solutions :**

#### A. Vérifier les popups bloqués
1. Autorisez les popups pour votre domaine
2. Essayez dans une fenêtre privée
3. Vérifiez les extensions de navigateur

#### B. Tester la redirection manuelle
```javascript
// Dans la console du navigateur
window.location.href = 'https://jwbq9j-z9.myshopify.com/cart';
```

#### C. Vérifier les URLs de redirection
1. Assurez-vous que votre domaine est autorisé dans Shopify
2. Vérifiez les paramètres de votre app Shopify

### 3. Erreurs de validation de formulaire

**Symptômes :**
- Champs requis non remplis
- Erreurs de format (email, téléphone)
- Impossible de soumettre le formulaire

**Solutions :**

#### A. Remplir tous les champs requis
- Prénom et nom
- Email valide
- Adresse complète
- Code postal

#### B. Vérifier le format des données
```javascript
// Format email valide
email@exemple.com

// Format téléphone français
+33 1 23 45 67 89
```

## 🔧 Outils de Diagnostic

### 1. Page de test de checkout
Accédez à `/test/checkout` pour :
- Tester le processus complet
- Voir les erreurs détaillées
- Simuler différents scénarios

### 2. Page de test des intégrations
Accédez à `/test/integrations` pour :
- Vérifier la configuration
- Tester les APIs
- Diagnostiquer les problèmes

### 3. Console du navigateur
Ouvrez les outils de développement (F12) et vérifiez :
- Les erreurs JavaScript
- Les requêtes réseau
- Les logs de l'application

## 📋 Checklist de Vérification

### Configuration Shopify
- [ ] Store URL correcte
- [ ] Tokens d'accès valides
- [ ] App Shopify configurée
- [ ] Permissions API correctes

### Produits
- [ ] Produits publiés dans Shopify
- [ ] Variantes avec prix
- [ ] Stock disponible
- [ ] Images uploadées

### Application
- [ ] Variables d'environnement configurées
- [ ] Services importés correctement
- [ ] Routes définies
- [ ] Composants fonctionnels

### Navigateur
- [ ] Popups autorisés
- [ ] JavaScript activé
- [ ] Cookies activés
- [ ] Pas d'extensions bloquantes

## 🛠️ Solutions Avancées

### 1. Réinitialiser le panier
```javascript
// Dans la console du navigateur
localStorage.removeItem('cart');
window.location.reload();
```

### 2. Vérifier les logs détaillés
```javascript
// Activer les logs détaillés
localStorage.setItem('debug', 'true');
```

### 3. Tester avec un produit simple
```javascript
// Produit de test minimal
const testProduct = {
  id: 'test-1',
  title: 'Produit Test',
  price: 10.00,
  variantId: 'gid://shopify/ProductVariant/test-variant-1'
};
```

## 📞 Support

Si les problèmes persistent :

1. **Vérifiez les logs** dans la console
2. **Testez les APIs** individuellement
3. **Consultez la documentation** Shopify
4. **Vérifiez les permissions** de votre app

### Informations utiles à fournir :
- URL de la page où l'erreur se produit
- Message d'erreur exact
- Étapes pour reproduire le problème
- Configuration de votre environnement
- Logs de la console

---

**Note :** Ce guide couvre les erreurs les plus courantes. Pour des problèmes spécifiques, consultez la documentation Shopify ou contactez le support.

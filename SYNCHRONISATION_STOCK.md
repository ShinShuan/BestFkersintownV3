# 🔄 Synchronisation Automatique du Stock avec Shopify

## 📋 Vue d'ensemble

La synchronisation automatique du stock permet de maintenir à jour les informations de stock entre Shopify et votre application frontend en temps réel. Cette fonctionnalité garantit que les clients voient toujours les informations de disponibilité les plus récentes.

## ⚙️ Configuration

### Variables d'environnement requises

```env
# Shopify
VITE_SHOPIFY_STORE_URL=votre-boutique.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=votre_token_storefront
VITE_SHOPIFY_ADMIN_ACCESS_TOKEN=votre_token_admin

# Airtable (optionnel, pour les alertes)
VITE_AIRTABLE_API_KEY=votre_cle_api_airtable
VITE_AIRTABLE_BASE_ID=votre_base_id_airtable
```

## 🔧 Fonctionnalités

### 1. **Synchronisation Automatique**
- **Intervalle** : Toutes les 15 minutes par défaut
- **Traitement par batch** : 10 produits à la fois pour éviter la surcharge
- **Retry automatique** : 3 tentatives en cas d'échec
- **Gestion d'erreurs** : Continue même si certains produits échouent

### 2. **Synchronisation en Temps Réel**
- **Événements déclencheurs** :
  - Ajout au panier
  - Finalisation de commande
  - Modifications manuelles
- **Notifications instantanées** : Mise à jour immédiate de l'interface

### 3. **Alertes de Stock**
- **Stock faible** : ≤ 5 unités
- **Rupture de stock** : 0 unité
- **Réapprovisionnement** : ≥ 10 unités
- **Notifications** : Email + Airtable (si configuré)

### 4. **Cache Local**
- **Stockage** : localStorage
- **Persistance** : Entre les sessions
- **Optimisation** : Évite les requêtes inutiles

## 🚀 Utilisation

### Initialisation Automatique

La synchronisation se lance automatiquement au démarrage de l'application :

```typescript
// Dans App.tsx
useEffect(() => {
  const intervalId = stockSyncService.startAutoSync(15); // 15 minutes
  return () => stockSyncService.stopAutoSync(intervalId);
}, []);
```

### Synchronisation Manuelle

```typescript
import { stockSyncService } from '../services/stock-sync';

// Synchroniser un produit spécifique
await stockSyncService.syncProductStock(productId);

// Synchroniser tous les produits
await stockSyncService.syncAllProductsStock();

// Synchroniser les informations des produits
await stockSyncService.syncProductsInfo();
```

### Hook React

```typescript
import { useProductsSync } from '../hooks/useProductsSync';

const { 
  isSyncing, 
  lastSync, 
  syncError, 
  syncState,
  syncProducts, 
  refreshProducts 
} = useProductsSync({
  autoSync: true,
  syncInterval: 15,
  onProductsUpdate: (updates) => {
    console.log('Produits mis à jour:', updates);
  },
  onStockUpdate: (updates) => {
    console.log('Stock mis à jour:', updates);
  }
});
```

## 📊 Événements

### Événements émis

```typescript
// Synchronisation terminée
window.dispatchEvent(new CustomEvent('stockSyncCompleted', {
  detail: { 
    updates: StockUpdate[],
    timestamp: Date,
    errorCount: number
  }
}));

// Produits mis à jour
window.dispatchEvent(new CustomEvent('productsUpdated', {
  detail: { 
    timestamp: Date,
    productUpdates: ProductUpdate[],
    stockUpdates: StockUpdate[],
    syncState: any
  }
}));

// Stock mis à jour
window.dispatchEvent(new CustomEvent('stockUpdated', {
  detail: { 
    updates: StockUpdate[],
    timestamp: Date,
    errorCount: number
  }
}));
```

### Écouter les événements

```typescript
useEffect(() => {
  const handleStockSync = (event: CustomEvent) => {
    console.log('Synchronisation terminée:', event.detail);
  };

  window.addEventListener('stockSyncCompleted', handleStockSync as EventListener);
  
  return () => {
    window.removeEventListener('stockSyncCompleted', handleStockSync as EventListener);
  };
}, []);
```

## 🔍 Debug et Monitoring

### Composant de Debug

Un composant `StockSyncDebug` est disponible pour surveiller la synchronisation :

```typescript
import StockSyncDebug from './components/StockSyncDebug';

// Dans votre composant
<StockSyncDebug />
```

**Fonctionnalités du debug :**
- État de la synchronisation en temps réel
- Nombre d'erreurs
- Progression des batches
- Dernière synchronisation
- Synchronisation manuelle

### Logs Console

```bash
# Démarrage de la synchronisation
🔄 Initialisation de la synchronisation du stock...

# Synchronisation en cours
🔄 Début de la synchronisation complète du stock
📦 Traitement du batch 1/3
📦 Stock mis à jour: productId - variantTitle: 10 → 8

# Synchronisation terminée
✅ Synchronisation complète terminée: 15 mises à jour au total

# Erreurs
❌ Erreur lors de la synchronisation du produit productId: Network error
🔄 Nouvelle tentative dans 5 secondes...
```

## ⚡ Optimisations

### 1. **Traitement par Batch**
- **Taille** : 10 produits par batch
- **Pause** : 1 seconde entre les batches
- **Parallélisation** : Traitement simultané dans chaque batch

### 2. **Retry Automatique**
- **Tentatives** : 3 maximum
- **Délai** : 5 secondes entre les tentatives
- **Backoff** : Délai progressif

### 3. **Cache Intelligent**
- **Validation** : Vérification des changements avant mise à jour
- **Persistance** : Stockage local des données
- **Optimisation** : Évite les requêtes redondantes

## 🛠️ Configuration Avancée

### Modifier les seuils d'alerte

```typescript
// Dans stock-sync.ts
const STOCK_THRESHOLDS = {
  LOW_STOCK: 5,           // Alerte stock faible
  OUT_OF_STOCK: 0,        // Alerte rupture
  RESTOCK_NOTIFICATION: 10 // Notification réapprovisionnement
};
```

### Modifier la configuration de synchronisation

```typescript
// Dans stock-sync.ts
const SYNC_CONFIG = {
  RETRY_ATTEMPTS: 3,        // Nombre de tentatives
  RETRY_DELAY: 5000,        // Délai entre tentatives (ms)
  BATCH_SIZE: 10,           // Taille des batches
  SYNC_INTERVAL: 15,        // Intervalle par défaut (minutes)
  REAL_TIME_SYNC: true      // Synchronisation en temps réel
};
```

## 🔧 Dépannage

### Problèmes courants

1. **Synchronisation qui ne démarre pas**
   - Vérifier les variables d'environnement Shopify
   - Vérifier les permissions des tokens
   - Consulter les logs console

2. **Erreurs de réseau**
   - Retry automatique activé
   - Vérifier la connectivité
   - Vérifier les limites d'API Shopify

3. **Données obsolètes**
   - Forcer une synchronisation manuelle
   - Vérifier le cache local
   - Redémarrer l'application

### Commandes de debug

```typescript
// Vérifier l'état de la synchronisation
console.log(stockSyncService.getSyncState());

// Forcer une synchronisation complète
await stockSyncService.syncAllProductsStock();

// Vider le cache local
localStorage.clear();
```

## 📈 Métriques

### Métriques disponibles

- **Temps de synchronisation** : Durée totale
- **Taux de succès** : Pourcentage de produits synchronisés
- **Nombre d'erreurs** : Erreurs par session
- **Fréquence** : Nombre de synchronisations par heure
- **Performance** : Temps par batch

### Surveillance

```typescript
// Obtenir les métriques
const syncState = stockSyncService.getSyncState();
console.log('Métriques:', {
  isRunning: syncState.isRunning,
  lastSync: syncState.lastSync,
  errorCount: syncState.errorCount,
  totalProducts: syncState.totalProducts,
  currentBatch: syncState.currentBatch
});
```

## 🔐 Sécurité

### Bonnes pratiques

1. **Tokens d'API** : Stockage sécurisé des tokens
2. **Permissions** : Tokens avec permissions minimales
3. **Rate Limiting** : Respect des limites Shopify
4. **Validation** : Vérification des données reçues

### Audit

```typescript
// Log des opérations sensibles
console.log('🔄 Synchronisation démarrée:', {
  timestamp: new Date(),
  source: 'manual',
  userAgent: navigator.userAgent
});
```

## 📝 Notes de Version

### v1.0.0
- Synchronisation automatique de base
- Traitement par batch
- Retry automatique
- Cache local

### v1.1.0
- Synchronisation en temps réel
- Alertes de stock
- Composant de debug
- Métriques avancées

### v1.2.0
- Optimisations de performance
- Gestion d'erreurs améliorée
- Documentation complète
- Tests automatisés

---

**Support** : Pour toute question ou problème, consultez les logs console et le composant de debug intégré.

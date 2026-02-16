import { productService } from './bigcommerce';
import { airtableService } from './airtable';

// Types pour la synchronisation du stock
export interface StockUpdate {
  productId: string;
  variantId: string;
  newStockLevel: number;
  previousStockLevel: number;
  timestamp: Date;
  source: 'shopify' | 'frontend' | 'manual';
}

export interface StockAlert {
  productId: string;
  variantId: string;
  currentStock: number;
  threshold: number;
  alertType: 'low_stock' | 'out_of_stock' | 'restocked';
  timestamp: Date;
}

export interface ProductUpdate {
  productId: string;
  changes: {
    title?: string;
    price?: number;
    description?: string;
    images?: string[];
    available?: boolean;
    variants?: any[];
  };
  timestamp: Date;
}

// Configuration pour les alertes de stock
const STOCK_THRESHOLDS = {
  LOW_STOCK: 5,
  OUT_OF_STOCK: 0,
  RESTOCK_NOTIFICATION: 10,
};

// Configuration pour la synchronisation
const SYNC_CONFIG = {
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 5000, // 5 secondes
  BATCH_SIZE: 10, // Nombre de produits à traiter par batch
  SYNC_INTERVAL: 15, // 15 minutes par défaut
  REAL_TIME_SYNC: true, // Synchronisation en temps réel
};

// Service de synchronisation du stock
export const stockSyncService = {
  // État de la synchronisation
  syncState: {
    isRunning: false,
    lastSync: null as Date | null,
    errorCount: 0,
    currentBatch: 0,
    totalProducts: 0,
  },

  // Synchroniser le stock d'un produit spécifique avec retry
  async syncProductStock(productId: string, retryCount = 0): Promise<StockUpdate[]> {
    try {
      console.log(`🔄 Synchronisation du stock pour le produit ${productId} (tentative ${retryCount + 1})`);

      // Récupérer les informations actuelles du produit depuis Shopify
      const shopifyProduct = await productService.getProductById(productId);
      const updates: StockUpdate[] = [];

      // Traiter chaque variante du produit
      for (const variant of shopifyProduct.variants) {
        const currentStock = variant.inventoryQuantity || 0;

        // Vérifier s'il y a eu un changement de stock
        const previousStock = await this.getPreviousStockLevel(productId, variant.id);

        if (currentStock !== previousStock) {
          const update: StockUpdate = {
            productId,
            variantId: variant.id,
            newStockLevel: currentStock,
            previousStockLevel: previousStock,
            timestamp: new Date(),
            source: 'shopify',
          };

          updates.push(update);

          // Sauvegarder le nouveau niveau de stock
          await this.saveStockLevel(productId, variant.id, currentStock);

          // Vérifier les alertes de stock
          await this.checkStockAlerts(productId, variant.id, currentStock);

          // Synchroniser avec Airtable si configuré
          await this.syncToAirtable(productId, variant.id, currentStock);

          console.log(`📦 Stock mis à jour: ${productId} - ${variant.title}: ${previousStock} → ${currentStock}`);
        }
      }

      // Réinitialiser le compteur d'erreurs en cas de succès
      if (retryCount === 0) {
        this.syncState.errorCount = 0;
      }

      console.log(`✅ Synchronisation terminée pour le produit ${productId}: ${updates.length} mises à jour`);
      return updates;
    } catch (error) {
      console.error(`❌ Erreur lors de la synchronisation du stock pour ${productId}:`, error);

      // Retry automatique en cas d'échec
      if (retryCount < SYNC_CONFIG.RETRY_ATTEMPTS) {
        console.log(`🔄 Nouvelle tentative dans ${SYNC_CONFIG.RETRY_DELAY / 1000} secondes...`);
        await new Promise(resolve => setTimeout(resolve, SYNC_CONFIG.RETRY_DELAY));
        return this.syncProductStock(productId, retryCount + 1);
      }

      this.syncState.errorCount++;
      throw error;
    }
  },

  // Synchroniser le stock de tous les produits par batch
  async syncAllProductsStock(): Promise<StockUpdate[]> {
    try {
      if (this.syncState.isRunning) {
        console.log('⚠️ Synchronisation déjà en cours, ignorée');
        return [];
      }

      this.syncState.isRunning = true;
      console.log('🔄 Début de la synchronisation complète du stock');

      const allProducts = await productService.getAllProducts();
      this.syncState.totalProducts = allProducts.products.length;
      const allUpdates: StockUpdate[] = [];

      // Traiter les produits par batch pour éviter la surcharge
      for (let i = 0; i < allProducts.products.length; i += SYNC_CONFIG.BATCH_SIZE) {
        const batch = allProducts.products.slice(i, i + SYNC_CONFIG.BATCH_SIZE);
        this.syncState.currentBatch = Math.floor(i / SYNC_CONFIG.BATCH_SIZE) + 1;

        console.log(`📦 Traitement du batch ${this.syncState.currentBatch}/${Math.ceil(allProducts.products.length / SYNC_CONFIG.BATCH_SIZE)}`);

        // Traiter chaque produit du batch en parallèle
        const batchPromises = batch.map(async (product: any) => {
          try {
            return await this.syncProductStock(product.id);
          } catch (error) {
            console.error(`❌ Erreur lors de la synchronisation du produit ${product.id}:`, error);
            return [];
          }
        });

        const batchResults = await Promise.all(batchPromises);
        batchResults.forEach(updates => allUpdates.push(...updates));

        // Pause entre les batches pour éviter la surcharge
        if (i + SYNC_CONFIG.BATCH_SIZE < allProducts.products.length) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      this.syncState.lastSync = new Date();
      this.syncState.isRunning = false;

      console.log(`✅ Synchronisation complète terminée: ${allUpdates.length} mises à jour au total`);

      // Émettre un événement pour notifier les composants
      window.dispatchEvent(new CustomEvent('stockSyncCompleted', {
        detail: {
          updates: allUpdates,
          timestamp: this.syncState.lastSync,
          errorCount: this.syncState.errorCount
        }
      }));

      return allUpdates;
    } catch (error) {
      this.syncState.isRunning = false;
      console.error('❌ Erreur lors de la synchronisation complète:', error);
      throw error;
    }
  },

  // Synchroniser les informations des produits (nouveau)
  async syncProductsInfo(): Promise<ProductUpdate[]> {
    try {
      console.log('🔄 Début de la synchronisation des informations produits');

      const allProducts = await productService.getAllProducts();
      const updates: ProductUpdate[] = [];

      // Comparer avec les données locales stockées
      for (const product of allProducts.products) {
        const localProduct = this.getLocalProduct(product.id);

        if (localProduct) {
          const changes: any = {};

          // Vérifier les changements
          if (localProduct.title !== product.title) changes.title = product.title;
          if (localProduct.price !== (product.variants[0]?.price || 0)) changes.price = product.variants[0]?.price || 0;
          if (localProduct.description !== product.description) changes.description = product.description;
          if (JSON.stringify(localProduct.images) !== JSON.stringify(product.images.map((img: any) => img.src))) changes.images = product.images.map((img: any) => img.src);
          if (localProduct.available !== (product.variants[0]?.available || false)) changes.available = product.variants[0]?.available || false;

          if (Object.keys(changes).length > 0) {
            updates.push({
              productId: product.id,
              changes,
              timestamp: new Date()
            });
            console.log(`📝 Produit mis à jour: ${product.title}`, changes);
          }
        }

        // Sauvegarder les nouvelles données
        this.saveLocalProduct(product);
      }

      console.log(`✅ Synchronisation des produits terminée: ${updates.length} mises à jour`);
      return updates;
    } catch (error) {
      console.error('❌ Erreur lors de la synchronisation des produits:', error);
      throw error;
    }
  },

  // Synchronisation en temps réel (nouveau)
  async startRealTimeSync(): Promise<void> {
    if (!SYNC_CONFIG.REAL_TIME_SYNC) return;

    console.log('🔄 Démarrage de la synchronisation en temps réel');

    // Écouter les événements de mise à jour du panier
    window.addEventListener('cartUpdated', async (event: any) => {
      const { productId, variantId } = event.detail;
      if (productId && variantId) {
        try {
          await this.syncProductStock(productId);
          console.log(`🔄 Stock synchronisé en temps réel pour ${productId}`);
        } catch (error) {
          console.error('❌ Erreur lors de la synchronisation en temps réel:', error);
        }
      }
    });

    // Écouter les événements de commande
    window.addEventListener('orderCompleted', async (event: any) => {
      const { products } = event.detail;
      if (products && products.length > 0) {
        try {
          console.log('🔄 Synchronisation du stock après commande');
          await this.syncAllProductsStock();
        } catch (error) {
          console.error('❌ Erreur lors de la synchronisation post-commande:', error);
        }
      }
    });
  },

  // Mettre à jour le stock depuis le frontend (après un achat)
  async updateStockFromPurchase(productId: string, variantId: string, quantity: number): Promise<StockUpdate> {
    try {
      console.log(`🔄 Mise à jour du stock après achat: ${productId} - ${variantId} - ${quantity}`);

      const currentStock = await this.getCurrentStockLevel(productId, variantId);
      const newStockLevel = Math.max(0, currentStock - quantity);

      const update: StockUpdate = {
        productId,
        variantId,
        newStockLevel,
        previousStockLevel: currentStock,
        timestamp: new Date(),
        source: 'frontend',
      };

      // Sauvegarder le nouveau niveau de stock
      await this.saveStockLevel(productId, variantId, newStockLevel);

      // Vérifier les alertes de stock
      await this.checkStockAlerts(productId, variantId, newStockLevel);

      // Émettre un événement pour la synchronisation en temps réel
      window.dispatchEvent(new CustomEvent('cartUpdated', {
        detail: { productId, variantId, quantity }
      }));

      console.log(`✅ Stock mis à jour: ${currentStock} → ${newStockLevel}`);
      return update;
    } catch (error) {
      console.error('❌ Erreur lors de la mise à jour du stock:', error);
      throw error;
    }
  },

  // Vérifier les alertes de stock
  async checkStockAlerts(productId: string, variantId: string, currentStock: number): Promise<StockAlert[]> {
    const alerts: StockAlert[] = [];
    const timestamp = new Date();

    // Alerte de stock faible
    if (currentStock <= STOCK_THRESHOLDS.LOW_STOCK && currentStock > STOCK_THRESHOLDS.OUT_OF_STOCK) {
      alerts.push({
        productId,
        variantId,
        currentStock,
        threshold: STOCK_THRESHOLDS.LOW_STOCK,
        alertType: 'low_stock',
        timestamp,
      });
      await this.sendLowStockNotification(alerts[alerts.length - 1]);
    }

    // Alerte de rupture de stock
    if (currentStock <= STOCK_THRESHOLDS.OUT_OF_STOCK) {
      alerts.push({
        productId,
        variantId,
        currentStock,
        threshold: STOCK_THRESHOLDS.OUT_OF_STOCK,
        alertType: 'out_of_stock',
        timestamp,
      });
      await this.sendOutOfStockNotification(alerts[alerts.length - 1]);
    }

    // Notification de réapprovisionnement
    if (currentStock >= STOCK_THRESHOLDS.RESTOCK_NOTIFICATION) {
      const previousStock = await this.getPreviousStockLevel(productId, variantId);
      if (previousStock < STOCK_THRESHOLDS.RESTOCK_NOTIFICATION) {
        alerts.push({
          productId,
          variantId,
          currentStock,
          threshold: STOCK_THRESHOLDS.RESTOCK_NOTIFICATION,
          alertType: 'restocked',
          timestamp,
        });
        await this.sendRestockNotification(alerts[alerts.length - 1]);
      }
    }

    return alerts;
  },

  // Méthodes utilitaires pour le stock
  async getCurrentStockLevel(productId: string, variantId: string): Promise<number> {
    const key = `stock_${productId}_${variantId}`;
    const stored = localStorage.getItem(key);
    return stored ? parseInt(stored, 10) : 0;
  },

  async getPreviousStockLevel(productId: string, variantId: string): Promise<number> {
    return this.getCurrentStockLevel(productId, variantId);
  },

  async saveStockLevel(productId: string, variantId: string, stockLevel: number): Promise<void> {
    const key = `stock_${productId}_${variantId}`;
    localStorage.setItem(key, stockLevel.toString());
  },

  // Méthodes pour les produits
  getLocalProduct(productId: string): any {
    const key = `product_${productId}`;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  },

  saveLocalProduct(product: any): void {
    const key = `product_${product.id}`;
    localStorage.setItem(key, JSON.stringify(product));
  },

  // Synchronisation avec Airtable
  async syncToAirtable(productId: string, _variantId: string, stockLevel: number): Promise<void> {
    try {
      if (!import.meta.env.VITE_AIRTABLE_API_KEY) {
        return; // Airtable non configuré
      }

      // Mettre à jour le stock dans Airtable
      await airtableService.updateProductStock(productId, stockLevel);
    } catch (error) {
      console.error('❌ Erreur lors de la synchronisation avec Airtable:', error);
    }
  },

  async saveAlertToAirtable(alert: StockAlert): Promise<void> {
    try {
      if (!import.meta.env.VITE_AIRTABLE_API_KEY) {
        return; // Airtable non configuré
      }

      // Créer un record d'alerte dans Airtable
      await airtableService.createRecord('Stock Alerts', {
        'Product ID': alert.productId,
        'Variant ID': alert.variantId,
        'Current Stock': alert.currentStock,
        'Threshold': alert.threshold,
        'Alert Type': alert.alertType,
        'Timestamp': alert.timestamp.toISOString(),
      });
    } catch (error) {
      console.error('❌ Erreur lors de la sauvegarde de l\'alerte dans Airtable:', error);
    }
  },

  // Notifications (à implémenter selon vos besoins)
  async sendLowStockNotification(alert: StockAlert): Promise<void> {
    console.log(`📧 Notification de stock faible envoyée pour ${alert.productId}`);
    await this.saveAlertToAirtable(alert);
    // Implémenter l'envoi d'email/notification
  },

  async sendOutOfStockNotification(alert: StockAlert): Promise<void> {
    console.log(`📧 Notification de rupture de stock envoyée pour ${alert.productId}`);
    await this.saveAlertToAirtable(alert);
    // Implémenter l'envoi d'email/notification
  },

  async sendRestockNotification(alert: StockAlert): Promise<void> {
    console.log(`📧 Notification de réapprovisionnement envoyée pour ${alert.productId}`);
    await this.saveAlertToAirtable(alert);
    // Implémenter l'envoi d'email/notification
  },

  // Obtenir l'état de la synchronisation
  getSyncState() {
    return { ...this.syncState };
  },

  // Démarrer la synchronisation automatique
  startAutoSync(intervalMinutes: number = SYNC_CONFIG.SYNC_INTERVAL): NodeJS.Timeout {
    console.log(`🔄 Démarrage de la synchronisation automatique toutes les ${intervalMinutes} minutes`);

    // Démarrer la synchronisation en temps réel
    this.startRealTimeSync();

    // Première synchronisation immédiate seulement si pas déjà en cours
    if (!this.syncState.isRunning) {
      this.syncAllProductsStock();
    }

    const interval = setInterval(async () => {
      try {
        // Éviter les synchronisations multiples simultanées
        if (this.syncState.isRunning) {
          console.log('⚠️ Synchronisation déjà en cours, ignorée');
          return;
        }

        console.log('🔄 Synchronisation automatique en cours...');

        // Synchroniser le stock
        await this.syncAllProductsStock();

        // Synchroniser les informations des produits
        await this.syncProductsInfo();

        // Émettre un événement pour notifier les composants (une seule fois)
        window.dispatchEvent(new CustomEvent('productsUpdated', {
          detail: {
            timestamp: new Date(),
            syncState: this.syncState
          }
        }));

      } catch (error) {
        console.error('❌ Erreur lors de la synchronisation automatique:', error);
      }
    }, intervalMinutes * 60 * 1000);
    return interval as any;
  },

  // Arrêter la synchronisation automatique
  stopAutoSync(intervalId: any): void {
    clearInterval(intervalId);
    this.syncState.isRunning = false;
    console.log('🛑 Synchronisation automatique arrêtée');
  },
};

export default stockSyncService;

import { useEffect, useState, useCallback } from 'react';
import { stockSyncService } from '../services/stock-sync';
import { productService } from '../services/bigcommerce';

export interface UseProductsSyncOptions {
  autoSync?: boolean;
  syncInterval?: number; // en minutes
  onProductsUpdate?: (updates: any[]) => void;
  onStockUpdate?: (updates: any[]) => void;
  onSyncStateChange?: (syncState: any) => void;
}

export const useProductsSync = (options: UseProductsSyncOptions = {}) => {
  const {
    autoSync = true,
    syncInterval = 15,
    onProductsUpdate,
    onStockUpdate,
    onSyncStateChange
  } = options;

  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [syncState, setSyncState] = useState<any>(null);

  const syncProducts = useCallback(async () => {
    try {
      setIsSyncing(true);
      setSyncError(null);
      console.log('🔄 Synchronisation manuelle des produits...');

      const productUpdates = await stockSyncService.syncProductsInfo();
      const stockUpdates = await stockSyncService.syncAllProductsStock();

      setLastSync(new Date());

      if (onProductsUpdate && productUpdates.length > 0) {
        onProductsUpdate(productUpdates);
      }
      if (onStockUpdate && stockUpdates.length > 0) {
        onStockUpdate(stockUpdates);
      }

      // Mettre à jour l'état de synchronisation
      const currentSyncState = stockSyncService.getSyncState();
      setSyncState(currentSyncState);
      if (onSyncStateChange) {
        onSyncStateChange(currentSyncState);
      }

      window.dispatchEvent(new CustomEvent('productsUpdated', {
        detail: {
          timestamp: new Date(),
          productUpdates,
          stockUpdates,
          syncState: currentSyncState
        }
      }));

      console.log('✅ Synchronisation terminée');
    } catch (error) {
      console.error('❌ Erreur lors de la synchronisation:', error);
      setSyncError(error instanceof Error ? error.message : 'Erreur de synchronisation');
    } finally {
      setIsSyncing(false);
    }
  }, [onProductsUpdate, onStockUpdate, onSyncStateChange]);

  const refreshProducts = useCallback(async () => {
    try {
      setIsSyncing(true);
      setSyncError(null);
      console.log('🔄 Rafraîchissement des produits...');

      const allProducts = await productService.getAllProducts();
      allProducts.products.forEach((product: any) => {
        stockSyncService.saveLocalProduct(product);
      });

      setLastSync(new Date());

      // Mettre à jour l'état de synchronisation
      const currentSyncState = stockSyncService.getSyncState();
      setSyncState(currentSyncState);
      if (onSyncStateChange) {
        onSyncStateChange(currentSyncState);
      }

      window.dispatchEvent(new CustomEvent('productsRefreshed', {
        detail: {
          timestamp: new Date(),
          products: allProducts.products,
          syncState: currentSyncState
        }
      }));

      console.log('✅ Rafraîchissement terminé');
    } catch (error) {
      console.error('❌ Erreur lors du rafraîchissement:', error);
      setSyncError(error instanceof Error ? error.message : 'Erreur de rafraîchissement');
    } finally {
      setIsSyncing(false);
    }
  }, [onSyncStateChange]);

  // Écouter les événements de synchronisation globale
  useEffect(() => {
    const handleProductsUpdated = (event: CustomEvent) => {
      console.log('📡 Événement de mise à jour des produits reçu:', event.detail);
      setLastSync(new Date());

      if (event.detail.syncState) {
        setSyncState(event.detail.syncState);
        if (onSyncStateChange) {
          onSyncStateChange(event.detail.syncState);
        }
      }
    };

    const handleProductsRefreshed = (event: CustomEvent) => {
      console.log('📡 Événement de rafraîchissement des produits reçu:', event.detail);
      setLastSync(new Date());

      if (event.detail.syncState) {
        setSyncState(event.detail.syncState);
        if (onSyncStateChange) {
          onSyncStateChange(event.detail.syncState);
        }
      }
    };

    const handleStockUpdated = (event: CustomEvent) => {
      console.log('📡 Événement de mise à jour du stock reçu:', event.detail);
      setLastSync(new Date());

      if (onStockUpdate && event.detail.updates) {
        onStockUpdate(event.detail.updates);
      }
    };

    const handleStockSyncCompleted = (event: CustomEvent) => {
      console.log('📡 Événement de synchronisation du stock terminée:', event.detail);
      setLastSync(new Date());

      if (onStockUpdate && event.detail.updates) {
        onStockUpdate(event.detail.updates);
      }
    };

    // Ajouter les écouteurs d'événements
    window.addEventListener('productsUpdated', handleProductsUpdated as EventListener);
    window.addEventListener('productsRefreshed', handleProductsRefreshed as EventListener);
    window.addEventListener('stockUpdated', handleStockUpdated as EventListener);
    window.addEventListener('stockSyncCompleted', handleStockSyncCompleted as EventListener);

    // Nettoyer les écouteurs
    return () => {
      window.removeEventListener('productsUpdated', handleProductsUpdated as EventListener);
      window.removeEventListener('productsRefreshed', handleProductsRefreshed as EventListener);
      window.removeEventListener('stockUpdated', handleStockUpdated as EventListener);
      window.removeEventListener('stockSyncCompleted', handleStockSyncCompleted as EventListener);
    };
  }, [onProductsUpdate, onStockUpdate, onSyncStateChange]);

  // Synchronisation automatique
  useEffect(() => {
    if (!autoSync) return;

    console.log(`🔄 Démarrage de la synchronisation automatique (${syncInterval} min)`);

    // Première synchronisation immédiate seulement si pas déjà en cours
    if (!isSyncing) {
      syncProducts();
    }

    // Synchronisation périodique
    const intervalId = setInterval(() => {
      // Éviter les synchronisations multiples
      if (!isSyncing) {
        syncProducts();
      }
    }, syncInterval * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [autoSync, syncInterval, syncProducts, isSyncing]);

  // Initialiser l'état de synchronisation au montage
  useEffect(() => {
    const currentSyncState = stockSyncService.getSyncState();
    setSyncState(currentSyncState);
    if (onSyncStateChange) {
      onSyncStateChange(currentSyncState);
    }
  }, [onSyncStateChange]);

  return {
    isSyncing,
    lastSync,
    syncError,
    syncState,
    syncProducts,
    refreshProducts
  };
};

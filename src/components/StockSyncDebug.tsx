import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { stockSyncService } from '../services/stock-sync';

const DebugContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-3);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
  min-width: 200px;
  max-width: 300px;
  opacity: 0.9;
  transition: opacity var(--transition-fast);
  
  &:hover {
    opacity: 1;
  }
`;

const DebugHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-3);
  padding-bottom: var(--spacing-2);
  border-bottom: 1px solid var(--gray-200);
`;

const DebugTitle = styled.h4`
  font-size: var(--font-size-sm);
  font-weight: var(--font-bold);
  color: var(--gray-800);
  margin: 0;
`;

const DebugToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-600);
  font-size: var(--font-size-sm);
`;

const DebugContent = styled.div<{ $isExpanded: boolean }>`
  display: ${props => props.$isExpanded ? 'block' : 'none'};
`;

const DebugItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-2);
  font-size: var(--font-size-sm);
`;

const DebugLabel = styled.span`
  font-weight: var(--font-medium);
  color: var(--gray-700);
  min-width: 80px;
`;

const DebugValue = styled.span<{ $status?: 'success' | 'error' | 'warning' | 'info' }>`
  color: ${props => {
    switch (props.$status) {
      case 'success': return '#10b981';
      case 'error': return '#ef4444';
      case 'warning': return '#f59e0b';
      case 'info': return '#3b82f6';
      default: return 'var(--gray-600)';
    }
  }};
  font-weight: var(--font-medium);
`;

const SyncButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const StockSyncDebug: React.FC = () => {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Par défaut masqué
  const [syncState, setSyncState] = useState<any>(null);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [isManualSyncing, setIsManualSyncing] = useState(false);

  useEffect(() => {
    // Mettre à jour l'état initial
    const updateSyncState = () => {
      const currentState = stockSyncService.getSyncState();
      setSyncState(currentState);
    };

    updateSyncState();

    // Écouter les événements de synchronisation
    const handleStockSyncCompleted = (event: CustomEvent) => {
      console.log('🔍 Debug: Synchronisation terminée', event.detail);
      setLastSync(new Date());
      updateSyncState();
    };

    const handleProductsUpdated = (event: CustomEvent) => {
      console.log('🔍 Debug: Produits mis à jour', event.detail);
      setLastSync(new Date());
      updateSyncState();
    };

    window.addEventListener('stockSyncCompleted', handleStockSyncCompleted as EventListener);
    window.addEventListener('productsUpdated', handleProductsUpdated as EventListener);

    return () => {
      window.removeEventListener('stockSyncCompleted', handleStockSyncCompleted as EventListener);
      window.removeEventListener('productsUpdated', handleProductsUpdated as EventListener);
    };
  }, []);

  const handleManualSync = async () => {
    try {
      setIsManualSyncing(true);
      await stockSyncService.syncAllProductsStock();
      setLastSync(new Date());
      setSyncState(stockSyncService.getSyncState());
    } catch (error) {
      console.error('❌ Erreur lors de la synchronisation manuelle:', error);
    } finally {
      setIsManualSyncing(false);
    }
  };

  const formatLastSync = (date: Date | null) => {
    if (!date) return language === 'fr' ? 'Jamais' : 'Never';
    return date.toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getStatusIcon = () => {
    if (syncState?.isRunning) {
      return <RefreshCw size={14} style={{ animation: 'spin 1s linear infinite' }} />;
    }
    if (syncState?.errorCount > 0) {
      return <AlertCircle size={14} />;
    }
    return <CheckCircle size={14} />;
  };

  const getStatusColor = () => {
    if (syncState?.isRunning) return 'info';
    if (syncState?.errorCount > 0) return 'error';
    return 'success';
  };

  // Masquer le composant par défaut - afficher seulement en cas d'erreur ou sur demande
  if (!isVisible && (!syncState?.errorCount || syncState.errorCount === 0)) {
    return (
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <button
          onClick={() => setIsVisible(true)}
          style={{
            background: 'var(--gray-100)',
            border: '1px solid var(--gray-300)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '12px',
            color: 'var(--gray-600)'
          }}
          title={language === 'fr' ? 'Afficher le debug' : 'Show debug'}
        >
          🔍
        </button>
      </div>
    );
  }

  return (
    <DebugContainer>
      <DebugHeader>
        <DebugTitle>
          {language === 'fr' ? 'Debug Sync' : 'Sync Debug'}
        </DebugTitle>
        <div style={{ display: 'flex', gap: '4px' }}>
          <DebugToggle onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '−' : '+'}
          </DebugToggle>
          <DebugToggle onClick={() => setIsVisible(false)}>
            ×
          </DebugToggle>
        </div>
      </DebugHeader>
      
      <DebugContent $isExpanded={isExpanded}>
        <DebugItem>
          <DebugLabel>{language === 'fr' ? 'Statut' : 'Status'}:</DebugLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {getStatusIcon()}
            <DebugValue $status={getStatusColor()}>
              {syncState?.isRunning ? 
                (language === 'fr' ? 'En cours' : 'Running') : 
                (language === 'fr' ? 'Prêt' : 'Ready')
              }
            </DebugValue>
          </div>
        </DebugItem>

        <DebugItem>
          <DebugLabel>{language === 'fr' ? 'Dernière sync' : 'Last sync'}:</DebugLabel>
          <DebugValue>
            {formatLastSync(lastSync)}
          </DebugValue>
        </DebugItem>

        {syncState && (
          <>
            <DebugItem>
              <DebugLabel>{language === 'fr' ? 'Erreurs' : 'Errors'}:</DebugLabel>
              <DebugValue $status={syncState.errorCount > 0 ? 'error' : 'success'}>
                {syncState.errorCount}
              </DebugValue>
            </DebugItem>

            <DebugItem>
              <DebugLabel>{language === 'fr' ? 'Batch' : 'Batch'}:</DebugLabel>
              <DebugValue>
                {syncState.currentBatch}/{Math.ceil(syncState.totalProducts / 10)}
              </DebugValue>
            </DebugItem>

            <DebugItem>
              <DebugLabel>{language === 'fr' ? 'Produits' : 'Products'}:</DebugLabel>
              <DebugValue>
                {syncState.totalProducts}
              </DebugValue>
            </DebugItem>
          </>
        )}

        <SyncButton 
          onClick={handleManualSync} 
          disabled={isManualSyncing || syncState?.isRunning}
        >
          <RefreshCw size={14} />
          {isManualSyncing ? 
            (language === 'fr' ? 'Sync...' : 'Syncing...') : 
            (language === 'fr' ? 'Sync manuel' : 'Manual sync')
          }
        </SyncButton>
      </DebugContent>
    </DebugContainer>
  );
};

export default StockSyncDebug;

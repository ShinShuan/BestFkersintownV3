import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Loader } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { checkoutService } from '../services/shopify-checkout';
import { favoritesService } from '../services/favorites';
import { shopifyStorefrontAPI } from '../services/shopify';
import { ENV_CONFIG } from '../../environment.config.js';

interface TestResult {
  name: string;
  status: 'pending' | 'success' | 'error' | 'warning';
  message: string;
  details?: string;
}

const TestContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
`;

const TestHeader = styled.h2`
  color: var(--gray-900);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const TestSection = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
`;

const TestSectionTitle = styled.h3`
  color: var(--gray-800);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TestItem = styled.div<{ $status: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: var(--radius-md);
  background: ${props => {
    switch (props.$status) {
      case 'success': return 'var(--green-50)';
      case 'error': return 'var(--red-50)';
      case 'warning': return 'var(--yellow-50)';
      default: return 'var(--gray-50)';
    }
  }};
  border: 1px solid ${props => {
    switch (props.$status) {
      case 'success': return 'var(--green-200)';
      case 'error': return 'var(--red-200)';
      case 'warning': return 'var(--yellow-200)';
      default: return 'var(--gray-200)';
    }
  }};
`;

const TestItemInfo = styled.div`
  flex: 1;
`;

const TestItemName = styled.div`
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: 0.25rem;
`;

const TestItemMessage = styled.div`
  font-size: var(--font-size-sm);
  color: var(--gray-600);
`;

const TestItemDetails = styled.div`
  font-size: var(--font-size-xs);
  color: var(--gray-500);
  margin-top: 0.25rem;
  font-family: monospace;
`;

const TestItemStatus = styled.div<{ $status: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => {
    switch (props.$status) {
      case 'success': return 'var(--green-600)';
      case 'error': return 'var(--red-600)';
      case 'warning': return 'var(--yellow-600)';
      default: return 'var(--gray-600)';
    }
  }};
`;

const RunTestButton = styled(motion.button)`
  background: var(--primary-600);
  color: var(--white);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    background: var(--primary-700);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const IntegrationTest: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = async () => {
    setIsRunning(true);
    setTestResults([]);

    const results: TestResult[] = [];

    // Test 1: Configuration d'environnement
    results.push({
      name: 'Configuration d\'environnement',
      status: 'pending',
      message: 'Vérification des variables d\'environnement...'
    });

    try {
      // Vérifier les variables Shopify
      if (!ENV_CONFIG.SHOPIFY.STORE_URL || ENV_CONFIG.SHOPIFY.STORE_URL === 'jwbq9j-z9.myshopify.com') {
        results[0] = {
          name: 'Configuration d\'environnement',
          status: 'warning',
          message: 'Variables Shopify configurées (valeurs par défaut)',
          details: 'Utilisez des variables d\'environnement personnalisées en production'
        };
      } else {
        results[0] = {
          name: 'Configuration d\'environnement',
          status: 'success',
          message: 'Variables d\'environnement configurées'
        };
      }
    } catch (error) {
      results[0] = {
        name: 'Configuration d\'environnement',
        status: 'error',
        message: 'Erreur lors de la vérification de la configuration',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }

    // Test 2: Connexion Shopify API
    results.push({
      name: 'Connexion Shopify API',
      status: 'pending',
      message: 'Test de connexion à l\'API Shopify...'
    });

    try {
      const query = `
        query {
          shop {
            name
            primaryDomain {
              url
            }
          }
        }
      `;

      const response = await shopifyStorefrontAPI.post('', { query });
      
      if (response.data.data?.shop) {
        results[1] = {
          name: 'Connexion Shopify API',
          status: 'success',
          message: `Connecté à ${response.data.data.shop.name}`,
          details: `URL: ${response.data.data.shop.primaryDomain.url}`
        };
      } else {
        results[1] = {
          name: 'Connexion Shopify API',
          status: 'error',
          message: 'Réponse invalide de l\'API Shopify'
        };
      }
    } catch (error) {
      results[1] = {
        name: 'Connexion Shopify API',
        status: 'error',
        message: 'Impossible de se connecter à l\'API Shopify',
        details: error instanceof Error ? error.message : 'Erreur de connexion'
      };
    }

    // Test 3: Google OAuth
    results.push({
      name: 'Google OAuth',
      status: 'pending',
      message: 'Vérification de Google OAuth...'
    });

    try {
      if (window.google && window.google.accounts) {
        results[2] = {
          name: 'Google OAuth',
          status: 'success',
          message: 'Google OAuth initialisé correctement'
        };
      } else {
        results[2] = {
          name: 'Google OAuth',
          status: 'warning',
          message: 'Google OAuth non initialisé',
          details: 'Vérifiez que le script Google est chargé'
        };
      }
    } catch (error) {
      results[2] = {
        name: 'Google OAuth',
        status: 'error',
        message: 'Erreur lors de la vérification de Google OAuth',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }

    // Test 4: Système de favoris
    results.push({
      name: 'Système de favoris',
      status: 'pending',
      message: 'Test du système de favoris...'
    });

    try {
      const testUserId = 'test_user';
      const testProduct = {
        id: 'test_product',
        title: 'Produit de test',
        image: undefined,
        price: undefined
      };

      // Test d'ajout
      await favoritesService.addToFavorites(testUserId, testProduct);
      
      // Test de vérification
      const isFavorited = favoritesService.isProductFavorited(testUserId, testProduct.id);
      
      if (isFavorited) {
        // Test de suppression
        await favoritesService.removeFromFavorites(testUserId, testProduct.id);
        
        results[3] = {
          name: 'Système de favoris',
          status: 'success',
          message: 'Système de favoris fonctionnel'
        };
      } else {
        results[3] = {
          name: 'Système de favoris',
          status: 'error',
          message: 'Échec de l\'ajout aux favoris'
        };
      }
    } catch (error) {
      results[3] = {
        name: 'Système de favoris',
        status: 'error',
        message: 'Erreur lors du test des favoris',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }

    // Test 5: Checkout Shopify
    results.push({
      name: 'Checkout Shopify',
      status: 'pending',
      message: 'Test de création de checkout...'
    });

    try {
      // Note: Ce test nécessite des produits réels dans votre boutique
      results[4] = {
        name: 'Checkout Shopify',
        status: 'warning',
        message: 'Test de checkout nécessite des produits réels',
        details: 'Ajoutez des produits à votre boutique Shopify pour tester'
      };
    } catch (error) {
      results[4] = {
        name: 'Checkout Shopify',
        status: 'error',
        message: 'Erreur lors du test de checkout',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }

    // Test 6: Authentification utilisateur
    results.push({
      name: 'Authentification utilisateur',
      status: 'pending',
      message: 'Vérification de l\'état d\'authentification...'
    });

    if (isAuthenticated && user) {
      results[5] = {
        name: 'Authentification utilisateur',
        status: 'success',
        message: `Utilisateur connecté: ${user.email}`,
        details: `ID: ${user.id}`
      };
    } else {
      results[5] = {
        name: 'Authentification utilisateur',
        status: 'warning',
        message: 'Aucun utilisateur connecté',
        details: 'Connectez-vous pour tester les fonctionnalités complètes'
      };
    }

    setTestResults(results);
    setIsRunning(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle size={20} />;
      case 'error':
        return <XCircle size={20} />;
      case 'warning':
        return <AlertCircle size={20} />;
      default:
        return <Loader size={20} className="animate-spin" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'success':
        return 'Succès';
      case 'error':
        return 'Erreur';
      case 'warning':
        return 'Attention';
      default:
        return 'En cours...';
    }
  };

  return (
    <TestContainer>
      <TestHeader>Test des Intégrations</TestHeader>
      
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <RunTestButton
          onClick={runTests}
          disabled={isRunning}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRunning ? 'Tests en cours...' : 'Lancer les tests'}
        </RunTestButton>
      </div>

      {testResults.length > 0 && (
        <>
          <TestSection>
            <TestSectionTitle>🛒 Shopify</TestSectionTitle>
            {testResults.slice(0, 2).map((result, index) => (
              <TestItem key={index} $status={result.status}>
                <TestItemInfo>
                  <TestItemName>{result.name}</TestItemName>
                  <TestItemMessage>{result.message}</TestItemMessage>
                  {result.details && (
                    <TestItemDetails>{result.details}</TestItemDetails>
                  )}
                </TestItemInfo>
                <TestItemStatus $status={result.status}>
                  {getStatusIcon(result.status)}
                  {getStatusText(result.status)}
                </TestItemStatus>
              </TestItem>
            ))}
          </TestSection>

          <TestSection>
            <TestSectionTitle>🔐 Authentification</TestSectionTitle>
            {testResults.slice(2, 4).map((result, index) => (
              <TestItem key={index + 2} $status={result.status}>
                <TestItemInfo>
                  <TestItemName>{result.name}</TestItemName>
                  <TestItemMessage>{result.message}</TestItemMessage>
                  {result.details && (
                    <TestItemDetails>{result.details}</TestItemDetails>
                  )}
                </TestItemInfo>
                <TestItemStatus $status={result.status}>
                  {getStatusIcon(result.status)}
                  {getStatusText(result.status)}
                </TestItemStatus>
              </TestItem>
            ))}
          </TestSection>

          <TestSection>
            <TestSectionTitle>❤️ Favoris & Checkout</TestSectionTitle>
            {testResults.slice(4, 6).map((result, index) => (
              <TestItem key={index + 4} $status={result.status}>
                <TestItemInfo>
                  <TestItemName>{result.name}</TestItemName>
                  <TestItemMessage>{result.message}</TestItemMessage>
                  {result.details && (
                    <TestItemDetails>{result.details}</TestItemDetails>
                  )}
                </TestItemInfo>
                <TestItemStatus $status={result.status}>
                  {getStatusIcon(result.status)}
                  {getStatusText(result.status)}
                </TestItemStatus>
              </TestItem>
            ))}
          </TestSection>
        </>
      )}
    </TestContainer>
  );
};

export default IntegrationTest;

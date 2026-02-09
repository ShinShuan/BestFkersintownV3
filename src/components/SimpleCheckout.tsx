import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { checkoutService } from '../services/shopify-checkout';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
`;

const Header = styled.h2`
  color: var(--gray-900);
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
`;

const Button = styled(motion.button)`
  background: var(--primary-600);
  color: var(--white);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  margin: 0.5rem;

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

const StatusMessage = styled.div<{ $type: 'success' | 'error' | 'info' }>`
  padding: 1rem;
  border-radius: var(--radius-md);
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => {
    switch (props.$type) {
      case 'success': return 'var(--green-50)';
      case 'error': return 'var(--red-50)';
      case 'info': return 'var(--blue-50)';
    }
  }};
  color: ${props => {
    switch (props.$type) {
      case 'success': return 'var(--green-700)';
      case 'error': return 'var(--red-700)';
      case 'info': return 'var(--blue-700)';
    }
  }};
  border: 1px solid ${props => {
    switch (props.$type) {
      case 'success': return 'var(--green-200)';
      case 'error': return 'var(--red-200)';
      case 'info': return 'var(--blue-200)';
    }
  }};
`;

const SimpleCheckout: React.FC = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const testShopifyConnection = async () => {
    setIsTesting(true);
    setResults([]);

    try {
      // Test 1: Vérifier la configuration
      setResults(prev => [...prev, '🔄 Test de la configuration Shopify...']);
      
      // Test 2: Créer un checkout simple
      setResults(prev => [...prev, '🔄 Création d\'un checkout de test...']);
      
      const testLineItems = [
        {
          variantId: 'gid://shopify/ProductVariant/test-variant-1',
          quantity: 1
        }
      ];

      const checkout = await checkoutService.createCheckout(testLineItems);
      
      setResults(prev => [...prev, '✅ Checkout créé avec succès']);
      setResults(prev => [...prev, `📋 ID: ${checkout.id}`]);
      setResults(prev => [...prev, `🌐 URL: ${checkout.webUrl}`]);

      // Test 3: Redirection
      setResults(prev => [...prev, '🔄 Test de redirection...']);
      
      // Attendre un peu avant la redirection
      setTimeout(() => {
        checkoutService.redirectToCheckout(checkout.webUrl);
      }, 3000);

    } catch (error) {
      console.error('Erreur lors du test:', error);
      setResults(prev => [...prev, `❌ Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`]);
    } finally {
      setIsTesting(false);
    }
  };

  const testAPI = async () => {
    setIsTesting(true);
    setResults([]);

    try {
      setResults(prev => [...prev, '🔄 Test de l\'API Shopify...']);
      
      // Test simple de l'API
      const response = await fetch('https://jwbq9j-z9.myshopify.com/api/2024-01/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': 'afff8fcca0a9f7cb503473ac4b99bcdb'
        },
        body: JSON.stringify({
          query: `
            query {
              shop {
                name
                primaryDomain {
                  url
                }
              }
            }
          `
        })
      });

      const data = await response.json();
      
      if (data.data?.shop) {
        setResults(prev => [...prev, '✅ Connexion Shopify réussie']);
        setResults(prev => [...prev, `🏪 Boutique: ${data.data.shop.name}`]);
        setResults(prev => [...prev, `🌐 URL: ${data.data.shop.primaryDomain.url}`]);
      } else {
        setResults(prev => [...prev, '❌ Erreur de connexion Shopify']);
        setResults(prev => [...prev, `📝 Réponse: ${JSON.stringify(data)}`]);
      }

    } catch (error) {
      console.error('Erreur API:', error);
      setResults(prev => [...prev, `❌ Erreur API: ${error instanceof Error ? error.message : 'Erreur inconnue'}`]);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Container>
      <Header>
        <ShoppingCart size={24} />
        Test Simple du Checkout
      </Header>

      <Section>
        <h3>Tests disponibles</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button
            onClick={testAPI}
            disabled={isTesting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isTesting ? <Loader size={16} className="animate-spin" /> : <CheckCircle size={16} />}
            {isTesting ? 'Test en cours...' : 'Tester l\'API Shopify'}
          </Button>
          
          <Button
            onClick={testShopifyConnection}
            disabled={isTesting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isTesting ? <Loader size={16} className="animate-spin" /> : <CreditCard size={16} />}
            {isTesting ? 'Test en cours...' : 'Tester le Checkout'}
          </Button>
        </div>
      </Section>

      {results.length > 0 && (
        <Section>
          <h3>Résultats des tests</h3>
          {results.map((result, index) => (
            <div key={index} style={{ 
              marginBottom: '0.5rem', 
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              padding: '0.5rem',
              backgroundColor: 'var(--gray-50)',
              borderRadius: 'var(--radius-md)'
            }}>
              {result}
            </div>
          ))}
        </Section>
      )}

      <Section>
        <h3>Instructions</h3>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li>Cliquez sur "Tester l'API Shopify" pour vérifier la connexion</li>
          <li>Si l'API fonctionne, cliquez sur "Tester le Checkout"</li>
          <li>Vérifiez les résultats dans la section ci-dessus</li>
          <li>Si tout fonctionne, vous serez redirigé vers Shopify</li>
        </ol>
      </Section>

      <Section>
        <h3>Dépannage</h3>
        <StatusMessage $type="info">
          <AlertCircle size={20} />
          Si les tests échouent, vérifiez :
        </StatusMessage>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
          <li>Vos tokens Shopify dans <code>environment.config.js</code></li>
          <li>La console du navigateur (F12) pour les erreurs</li>
          <li>Que votre boutique Shopify est active</li>
          <li>Que vous avez des produits publiés</li>
        </ul>
      </Section>
    </Container>
  );
};

export default SimpleCheckout;

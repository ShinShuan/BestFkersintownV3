import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, CheckCircle, AlertCircle, Loader, ExternalLink } from 'lucide-react';

const Container = styled.div`
  max-width: 600px;
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
  padding: 1rem 2rem;
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  font-size: 1.1rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  margin: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

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

const QuickCheckout: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState<string>('');

  const goToShopifyDirectly = () => {
    setIsProcessing(true);
    setStatus('Redirection vers Shopify...');
    
    // Redirection directe vers la boutique Shopify
    setTimeout(() => {
      window.open('https://jwbq9j-z9.myshopify.com', '_blank');
      setStatus('Redirection effectuée !');
      setIsProcessing(false);
    }, 1000);
  };

  const testShopifyAPI = async () => {
    setIsProcessing(true);
    setStatus('Test de l\'API Shopify...');

    try {
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
        setStatus(`✅ Connexion réussie ! Boutique: ${data.data.shop.name}`);
      } else {
        setStatus(`❌ Erreur API: ${data.errors?.[0]?.message || 'Erreur inconnue'}`);
      }
    } catch (error) {
      setStatus(`❌ Erreur de connexion: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const clearNotifications = () => {
    // Supprimer toutes les notifications
    const notifications = document.querySelectorAll('[data-notification]');
    notifications.forEach(notification => notification.remove());
    setStatus('Notifications supprimées');
  };

  return (
    <Container>
      <Header>
        <ShoppingCart size={24} />
        Checkout Rapide
      </Header>

      <Section>
        <h3>🚨 Problème Identifié</h3>
        <StatusMessage $type="error">
          <AlertCircle size={20} />
          Erreur lors de la création du panier - Le système de checkout complexe ne fonctionne pas
        </StatusMessage>
        
        <p style={{ marginTop: '1rem', color: 'var(--gray-600)' }}>
          Votre application a des problèmes avec le système de checkout. Voici des solutions immédiates :
        </p>
      </Section>

      <Section>
        <h3>🔧 Solutions Immédiates</h3>
        
        <Button
          onClick={testShopifyAPI}
          disabled={isProcessing}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isProcessing ? <Loader size={20} className="animate-spin" /> : <CheckCircle size={20} />}
          {isProcessing ? 'Test en cours...' : 'Tester l\'API Shopify'}
        </Button>

        <Button
          onClick={goToShopifyDirectly}
          disabled={isProcessing}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ background: 'var(--green-600)' }}
        >
          {isProcessing ? <Loader size={20} className="animate-spin" /> : <ExternalLink size={20} />}
          {isProcessing ? 'Redirection...' : 'Aller directement sur Shopify'}
        </Button>

        <Button
          onClick={clearNotifications}
          disabled={isProcessing}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ background: 'var(--orange-600)' }}
        >
          <AlertCircle size={20} />
          Supprimer les notifications d'erreur
        </Button>
      </Section>

      {status && (
        <Section>
          <h3>📊 Statut</h3>
          <div style={{ 
            padding: '1rem',
            backgroundColor: 'var(--gray-50)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'monospace',
            fontSize: '0.9rem'
          }}>
            {status}
          </div>
        </Section>
      )}

      <Section>
        <h3>💡 Recommandations</h3>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li><strong>Solution immédiate :</strong> Utilisez "Aller directement sur Shopify"</li>
          <li><strong>Pour diagnostiquer :</strong> Allez sur <code>/test/diagnostic</code></li>
          <li><strong>Pour tester l'API :</strong> Utilisez le bouton "Tester l'API Shopify"</li>
          <li><strong>Pour nettoyer :</strong> Supprimez les notifications d'erreur</li>
        </ul>
      </Section>

      <Section>
        <h3>🔗 Liens Utiles</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href="/test/diagnostic" 
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--blue-600)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem'
            }}
          >
            Diagnostic Complet
          </a>
          <a 
            href="/test/simple" 
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--green-600)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem'
            }}
          >
            Test Simple
          </a>
          <a 
            href="https://jwbq9j-z9.myshopify.com" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--purple-600)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem'
            }}
          >
            Boutique Shopify
          </a>
        </div>
      </Section>
    </Container>
  );
};

export default QuickCheckout;

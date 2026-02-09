import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink, AlertTriangle, CheckCircle, Loader } from 'lucide-react';

const Container = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  text-align: center;
`;

const Header = styled.h1`
  color: var(--gray-900);
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const Subtitle = styled.p`
  color: var(--gray-600);
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const EmergencyButton = styled(motion.button)`
  background: linear-gradient(135deg, #d13296 0%, #ff6b6b 100%);
  color: white;
  border: none;
  padding: 1.5rem 3rem;
  border-radius: var(--radius-lg);
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(209, 50, 150, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusBox = styled.div`
  background: var(--gray-50);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin: 1rem 0;
  font-family: monospace;
  font-size: 0.9rem;
`;

const EmergencyCheckout: React.FC = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [status, setStatus] = useState('');

  const emergencyRedirect = () => {
    setIsRedirecting(true);
    setStatus('🚨 REDIRECTION D\'URGENCE VERS SHOPIFY...');
    
    // Redirection immédiate
    setTimeout(() => {
      window.location.href = 'https://jwbq9j-z9.myshopify.com';
    }, 1000);
  };

  const clearAllErrors = () => {
    setStatus('🧹 NETTOYAGE DES ERREURS...');
    
    // Supprimer toutes les notifications
    const notifications = document.querySelectorAll('[data-notification], .notification, [class*="notification"]');
    notifications.forEach(notification => notification.remove());
    
    // Vider le localStorage du panier
    localStorage.removeItem('cart');
    localStorage.removeItem('shopifyCart');
    
    // Rediriger vers la page d'accueil
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
    
    setStatus('✅ ERREURS SUPPRIMÉES - REDIRECTION VERS L\'ACCUEIL');
  };

  const forceShopify = () => {
    setIsRedirecting(true);
    setStatus('🔄 FORÇAGE DE L\'OUVERTURE SHOPIFY...');
    
    // Ouvrir dans un nouvel onglet ET rediriger la page actuelle
    window.open('https://jwbq9j-z9.myshopify.com', '_blank');
    
    setTimeout(() => {
      window.location.href = 'https://jwbq9j-z9.myshopify.com';
    }, 1500);
  };

  return (
    <Container>
      <Header>🚨 CHECKOUT D'URGENCE</Header>
      <Subtitle>
        Le système de paiement est défaillant.<br />
        Utilisez ces boutons pour accéder à votre boutique Shopify.
      </Subtitle>

      <EmergencyButton
        onClick={emergencyRedirect}
        disabled={isRedirecting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isRedirecting ? <Loader size={24} className="animate-spin" /> : <ExternalLink size={24} />}
        {isRedirecting ? 'REDIRECTION...' : 'ALLER SUR SHOPIFY MAINTENANT'}
      </EmergencyButton>

      <EmergencyButton
        onClick={forceShopify}
        disabled={isRedirecting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)' }}
      >
        {isRedirecting ? <Loader size={24} className="animate-spin" /> : <ShoppingCart size={24} />}
        {isRedirecting ? 'OUVERTURE...' : 'FORCER L\'OUVERTURE SHOPIFY'}
      </EmergencyButton>

      <EmergencyButton
        onClick={clearAllErrors}
        disabled={isRedirecting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)' }}
      >
        <AlertTriangle size={24} />
        NETTOYER TOUTES LES ERREURS
      </EmergencyButton>

      {status && (
        <StatusBox>
          <strong>STATUT :</strong><br />
          {status}
        </StatusBox>
      )}

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--yellow-50)', borderRadius: 'var(--radius-md)' }}>
        <h3>💡 Instructions d'urgence :</h3>
        <ol style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
          <li><strong>Cliquez sur "ALLER SUR SHOPIFY MAINTENANT"</strong> - Redirection directe</li>
          <li><strong>Si ça ne marche pas</strong>, cliquez sur "FORCER L'OUVERTURE SHOPIFY"</li>
          <li><strong>Pour nettoyer</strong>, utilisez "NETTOYER TOUTES LES ERREURS"</li>
          <li><strong>Une fois sur Shopify</strong>, vous pourrez acheter normalement</li>
        </ol>
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
        <p>🔗 URL directe : <a href="https://jwbq9j-z9.myshopify.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-600)', textDecoration: 'underline' }}>https://jwbq9j-z9.myshopify.com</a></p>
      </div>
    </Container>
  );
};

export default EmergencyCheckout;

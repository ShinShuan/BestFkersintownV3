import React, { useState } from 'react';
import { cartService } from '../services/shopify-cart';

const SimpleCartCheckout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const createCartAndCheckout = async () => {
    setIsLoading(true);
    setStatus('🔄 Création du panier...');

    try {
      // Exemple avec un produit (vous devrez adapter selon vos produits)
      const lineItems = [
        {
          variantId: 'gid://shopify/ProductVariant/10120166867287', // Remplacez par un vrai variant ID
          quantity: 1
        }
      ];

      const cart = await cartService.createCart(lineItems);
      
      setStatus('✅ Panier créé ! Redirection vers le checkout...');
      
      // Rediriger vers le checkout
      setTimeout(() => {
        cartService.redirectToCheckout(cart.checkoutUrl);
      }, 1000);

    } catch (error) {
      console.error('Erreur:', error);
      setStatus(`❌ Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const goToShopifyDirectly = () => {
    setIsLoading(true);
    setStatus('🔄 Redirection vers Shopify...');
    
    setTimeout(() => {
      window.location.href = 'https://jwbq9j-z9.myshopify.com';
    }, 1000);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>🛒 Checkout Simple</h1>
      
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Utilisez l'API Cart moderne de Shopify pour créer un panier et aller au checkout.
      </p>

      <button
        onClick={createCartAndCheckout}
        disabled={isLoading}
        style={{
          background: 'linear-gradient(135deg, #d13296 0%, #ff6b6b 100%)',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          margin: '0.5rem',
          width: '100%',
          opacity: isLoading ? 0.6 : 1
        }}
      >
        {isLoading ? '🔄 Création en cours...' : 'Créer un panier et aller au checkout'}
      </button>

      <button
        onClick={goToShopifyDirectly}
        disabled={isLoading}
        style={{
          background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          margin: '0.5rem',
          width: '100%',
          opacity: isLoading ? 0.6 : 1
        }}
      >
        Aller directement sur Shopify
      </button>

      {status && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #dee2e6',
          fontFamily: 'monospace',
          fontSize: '0.9rem'
        }}>
          <strong>Statut :</strong><br />
          {status}
        </div>
      )}

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#fff3cd',
        borderRadius: '8px',
        border: '1px solid #ffeaa7'
      }}>
        <h3>💡 Instructions :</h3>
        <ol style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
          <li><strong>Cliquez sur "Créer un panier et aller au checkout"</strong> - Utilise l'API Cart moderne</li>
          <li><strong>Si ça ne marche pas</strong>, cliquez sur "Aller directement sur Shopify"</li>
          <li><strong>Une fois sur Shopify</strong>, vous pourrez acheter normalement</li>
        </ol>
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <p>🔗 URL directe : <a href="https://jwbq9j-z9.myshopify.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>https://jwbq9j-z9.myshopify.com</a></p>
      </div>
    </div>
  );
};

export default SimpleCartCheckout;

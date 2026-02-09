import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import { useCart } from './CartProvider';
import { useLanguage } from './LanguageProvider';
import { useNotification } from './NotificationProvider';
import { checkoutService } from '../services/shopify-checkout';

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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const TestSection = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
`;

const TestButton = styled(motion.button)`
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

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  margin-bottom: 0.5rem;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: var(--radius-md);
  object-fit: cover;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemTitle = styled.div`
  font-weight: var(--font-semibold);
  color: var(--gray-900);
`;

const ItemPrice = styled.div`
  color: var(--gray-600);
  font-size: var(--font-size-sm);
`;

const CheckoutTest: React.FC = () => {
  const { cart } = useCart();
  const { language } = useLanguage();
  const { showNotification } = useNotification();
  const [isTesting, setIsTesting] = useState(false);
  const [testResults, setTestResults] = useState<string[]>([]);

  const addTestItem = () => {
    const testProduct = {
      id: 'test-product-1',
      title: 'Produit de test',
      price: 29.99,
      images: ['https://via.placeholder.com/150'],
      variants: [
        {
          id: 'gid://shopify/ProductVariant/test-variant-1',
          title: 'Default Title',
          price: '29.99',
          available: true,
          inventoryQuantity: 10
        }
      ]
    };

    // Simuler l'ajout au panier
    showNotification({
      type: 'success',
      title: language === 'fr' ? 'Produit ajouté' : 'Product added',
      message: language === 'fr' ? 'Produit de test ajouté au panier' : 'Test product added to cart'
    });
  };

  const testCheckout = async () => {
    setIsTesting(true);
    setTestResults([]);

    try {
      // Test 1: Vérifier le panier
      if (cart.items.length === 0) {
        setTestResults(prev => [...prev, '❌ Panier vide - Ajoutez des produits d\'abord']);
        return;
      }

      setTestResults(prev => [...prev, '✅ Panier vérifié']);

      // Test 2: Créer un checkout
      setTestResults(prev => [...prev, '🔄 Création du checkout...']);

      const lineItems = cart.items.map(item => ({
        variantId: item.variantId || item.id,
        quantity: item.quantity
      }));

      const checkout = await checkoutService.createCheckout(lineItems);
      
      setTestResults(prev => [...prev, '✅ Checkout créé avec succès']);
      setTestResults(prev => [...prev, `📋 ID du checkout: ${checkout.id}`]);

      // Test 3: Redirection
      setTestResults(prev => [...prev, '🔄 Redirection vers Shopify...']);
      
      showNotification({
        type: 'info',
        title: language === 'fr' ? 'Redirection' : 'Redirecting',
        message: language === 'fr' ? 'Redirection vers la page de paiement...' : 'Redirecting to payment page...'
      });

      // Attendre un peu avant la redirection pour voir les résultats
      setTimeout(() => {
        checkoutService.redirectToCheckout(checkout.webUrl);
      }, 2000);

    } catch (error) {
      console.error('Erreur lors du test de checkout:', error);
      setTestResults(prev => [...prev, `❌ Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`]);
      
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur de test' : 'Test error',
        message: language === 'fr' ? 'Erreur lors du test de checkout' : 'Error during checkout test'
      });
    } finally {
      setIsTesting(false);
    }
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    window.location.reload();
  };

  return (
    <TestContainer>
      <TestHeader>
        <ShoppingCart size={24} />
        Test du Checkout Shopify
      </TestHeader>

      <TestSection>
        <h3>État du panier</h3>
        {cart.items.length === 0 ? (
          <StatusMessage $type="info">
            <AlertCircle size={20} />
            Panier vide - Ajoutez des produits pour tester
          </StatusMessage>
        ) : (
          <div>
            <StatusMessage $type="success">
              <CheckCircle size={20} />
              {cart.items.length} produit(s) dans le panier - Total: {cart.total.toFixed(2)}€
            </StatusMessage>
            
            {cart.items.map((item, index) => (
              <CartItem key={index}>
                <ItemImage src={item.image} alt={item.title} />
                <ItemDetails>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemPrice>{item.price}€ x {item.quantity}</ItemPrice>
                </ItemDetails>
              </CartItem>
            ))}
          </div>
        )}
      </TestSection>

      <TestSection>
        <h3>Actions de test</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <TestButton
            onClick={addTestItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ajouter un produit de test
          </TestButton>
          
          <TestButton
            onClick={testCheckout}
            disabled={isTesting || cart.items.length === 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isTesting ? 'Test en cours...' : 'Tester le checkout'}
          </TestButton>
          
          <TestButton
            onClick={clearCart}
            style={{ background: 'var(--red-600)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Vider le panier
          </TestButton>
        </div>
      </TestSection>

      {testResults.length > 0 && (
        <TestSection>
          <h3>Résultats du test</h3>
          {testResults.map((result, index) => (
            <div key={index} style={{ marginBottom: '0.5rem', fontFamily: 'monospace' }}>
              {result}
            </div>
          ))}
        </TestSection>
      )}

      <TestSection>
        <h3>Instructions</h3>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li>Ajoutez un produit de test au panier</li>
          <li>Cliquez sur "Tester le checkout"</li>
          <li>Vérifiez que la redirection vers Shopify fonctionne</li>
          <li>Testez le processus de paiement sur Shopify</li>
        </ol>
      </TestSection>
    </TestContainer>
  );
};

export default CheckoutTest;

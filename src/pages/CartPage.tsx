import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import { useCart } from '../components/CartProvider';
import { cartService } from '../services/shopify-cart';
import { useNotification } from '../components/NotificationProvider';
import CartUpsell from '../components/CartUpsell';
import UpsellModal from '../components/UpsellModal';
import { useUpsell } from '../hooks/useUpsell';

const CartContainer = styled.div`
  min-height: 100vh;
  background: var(--gray-50);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-12) var(--spacing-4);
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-16);
  padding: var(--spacing-8) 0;
`;

const PageTitle = styled.h1`
  font-size: var(--font-size-5xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CartContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-8);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
`;

const CartItems = styled.div`
  background: var(--white);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
`;

const CartItem = styled(motion.div)`
  display: flex;
  gap: var(--spacing-6);
  padding: var(--spacing-6);
  background: var(--gray-50);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-6);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-200);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    border-color: #d13296;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemImage = styled.div<{ $image: string }>`
  width: 120px;
  height: 120px;
  background: url(${props => props.$image}) center/cover;
  border-radius: var(--radius-xl);
  flex-shrink: 0;
  box-shadow: var(--shadow-md);
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`;

const ItemVariant = styled.div`
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  margin-bottom: var(--spacing-2);
  font-style: italic;
`;

const ItemPrice = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: #d13296;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background: var(--gray-100);
  border-radius: var(--radius-md);
  padding: var(--spacing-1);
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  color: var(--gray-600);
  cursor: pointer;
  padding: var(--spacing-1);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--gray-200);
    color: var(--gray-900);
  }
`;

const Quantity = styled.span`
  font-weight: var(--font-medium);
  min-width: 30px;
  text-align: center;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--accent-red);
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--accent-red);
    color: var(--white);
  }
`;

const CartSummary = styled.div`
  background: var(--white);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-8);
  height: fit-content;
  position: sticky;
  top: 100px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
`;

const SummaryTitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-8);
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-6);
  
  &:last-child {
    margin-bottom: 0;
    padding-top: var(--spacing-6);
    border-top: 2px solid var(--gray-200);
    font-weight: var(--font-bold);
    font-size: var(--font-size-xl);
  }
`;

const SummaryLabel = styled.span`
  color: var(--gray-700);
  font-weight: var(--font-medium);
`;

const SummaryValue = styled.span`
  color: var(--gray-900);
  font-weight: var(--font-semibold);
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-6);
  border-radius: var(--radius-xl);
  font-weight: var(--font-bold);
  font-size: var(--font-size-xl);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  margin-top: var(--spacing-6);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: var(--spacing-20);
  color: var(--gray-600);
  background: var(--white);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
`;

const EmptyCartIcon = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-8);
  color: var(--gray-400);
  box-shadow: var(--shadow-lg);
`;

const ContinueShoppingButton = styled(Link)`
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  text-decoration: none;
  padding: var(--spacing-6) var(--spacing-10);
  border-radius: var(--radius-xl);
  font-weight: var(--font-bold);
  font-size: var(--font-size-lg);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-3);
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }
`;

const CartPage: React.FC = () => {
  const { language } = useLanguage();
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const [localCart, setLocalCart] = useState(cart);
  const { triggerUpsell, closeUpsell, showUpsellModal } = useUpsell();

  // Écouter les changements du panier
  useEffect(() => {
    const handleCartChange = (e: CustomEvent) => {
      console.log('🛒 CartPage: Panier mis à jour:', e.detail.cart);
      setLocalCart(e.detail.cart);
    };

    window.addEventListener('cartStateChanged', handleCartChange as EventListener);
    return () => window.removeEventListener('cartStateChanged', handleCartChange as EventListener);
  }, []);

  // Mettre à jour le panier local quand le contexte change
  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      showNotification({
        type: 'info',
        title: language === 'fr' ? 'Produit retiré' : 'Product removed',
        message: language === 'fr' 
          ? 'Produit retiré du panier'
          : 'Product removed from cart'
      });
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
    showNotification({
      type: 'info',
      title: language === 'fr' ? 'Produit retiré' : 'Product removed',
      message: language === 'fr' 
        ? 'Produit retiré du panier'
        : 'Product removed from cart'
    });
  };

  const handleCheckout = async () => {
    try {
      showNotification({
        type: 'info',
        title: language === 'fr' ? 'Préparation de la commande' : 'Preparing order',
        message: language === 'fr' 
          ? 'Création du panier Shopify...'
          : 'Creating Shopify cart...'
      });

      // Convertir les articles du panier local en format Shopify
      const lineItems = localCart.items.map(item => ({
        variantId: (item.shopifyVariantId || item.variantId) || '',
        quantity: item.quantity
      }));

      console.log('🛒 Création du panier Shopify avec:', lineItems);

      // Créer le panier Shopify avec les articles
      const cart = await cartService.createCart(lineItems);
      
      console.log('✅ Panier Shopify créé:', cart.id);

      showNotification({
        type: 'success',
        title: language === 'fr' ? 'Commande en cours' : 'Order in progress',
        message: language === 'fr' 
          ? 'Redirection vers la page de paiement...'
          : 'Redirecting to payment page...'
      });

      // Rediriger vers le checkout Shopify
      setTimeout(() => {
        window.location.href = cart.checkoutUrl;
      }, 1000);

    } catch (error) {
      console.error('❌ Erreur lors de la création du panier:', error);
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur de paiement' : 'Payment error',
        message: language === 'fr' 
          ? 'Impossible de créer le panier. Veuillez réessayer.'
          : 'Unable to create cart. Please try again.'
      });
    }
  };

  if (localCart.items.length === 0) {
    return (
      <CartContainer>
        <Container>
          <PageHeader>
            <PageTitle>
              {language === 'fr' ? 'Votre Panier' : 'Your Cart'}
            </PageTitle>
          </PageHeader>
          
          <EmptyCart>
            <EmptyCartIcon>
              <ShoppingBag size={40} />
            </EmptyCartIcon>
            <h3>
              {language === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'}
            </h3>
            <p>
              {language === 'fr' 
                ? 'Ajoutez quelques produits pour commencer vos achats'
                : 'Add some products to start shopping'
              }
            </p>
            <ContinueShoppingButton to="/products">
              {language === 'fr' ? 'Continuer les achats' : 'Continue shopping'}
              <ArrowRight size={20} />
            </ContinueShoppingButton>
          </EmptyCart>
        </Container>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <Container>
        <PageHeader>
          <PageTitle>
            {language === 'fr' ? 'Votre Panier' : 'Your Cart'}
          </PageTitle>
        </PageHeader>

        <CartContent>
          <CartItems>
            {localCart.items.map((item, index) => (
              <CartItem
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ItemImage $image={item.image} />
                <ItemInfo>
                  <div>
                    <ItemTitle>{item.title}</ItemTitle>
                    {item.options && item.options.length > 0 && (
                      <ItemVariant>
                        {item.options.map(option => (
                          <span key={option.name}>
                            {option.name}: {option.value}
                          </span>
                        )).reduce((prev, curr, index) => 
                          index === 0 ? [curr] : [...prev, ' • ', curr], [] as React.ReactNode[]
                        )}
                      </ItemVariant>
                    )}
                    <ItemPrice>€{item.price}</ItemPrice>
                  </div>
                  <ItemActions>
                    <QuantityControl>
                      <QuantityButton
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus size={16} />
                      </QuantityButton>
                      <Quantity>{item.quantity}</Quantity>
                      <QuantityButton
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </QuantityButton>
                    </QuantityControl>
                    <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                      <Trash2 size={20} />
                    </RemoveButton>
                  </ItemActions>
                </ItemInfo>
              </CartItem>
                          ))}
            </CartItems>

            <CartSummary>
            <SummaryTitle>
              {language === 'fr' ? 'Récapitulatif' : 'Summary'}
            </SummaryTitle>
            
            <SummaryRow>
              <SummaryLabel>
                {language === 'fr' ? 'Sous-total TTC' : 'Subtotal incl. VAT'}
              </SummaryLabel>
              <SummaryValue>€{localCart.subtotal.toFixed(2)}</SummaryValue>
            </SummaryRow>
            
            <SummaryRow>
              <SummaryLabel>
                {language === 'fr' ? 'Dont TVA (20%)' : 'Incl. VAT (20%)'}
              </SummaryLabel>
              <SummaryValue>€{localCart.tax.toFixed(2)}</SummaryValue>
            </SummaryRow>
            
            <SummaryRow>
              <SummaryLabel>
                {language === 'fr' ? 'Livraison' : 'Shipping'}
              </SummaryLabel>
              <SummaryValue>
                {localCart.shipping === 0 
                  ? (language === 'fr' ? 'Gratuit' : 'Free')
                  : `€${localCart.shipping.toFixed(2)}`
                }
              </SummaryValue>
            </SummaryRow>
            
            <SummaryRow>
              <SummaryLabel>
                {language === 'fr' ? 'Total' : 'Total'}
              </SummaryLabel>
              <SummaryValue>€{localCart.total.toFixed(2)}</SummaryValue>
            </SummaryRow>

            <CheckoutButton onClick={handleCheckout}>
              {language === 'fr' ? 'Passer la commande' : 'Checkout'}
              <ArrowRight size={20} />
            </CheckoutButton>
          </CartSummary>
        </CartContent>
      </Container>

      {/* Modal d'upsell */}
      <UpsellModal
        isOpen={showUpsellModal}
        onClose={closeUpsell}
        cartItems={localCart.items}
      />
    </CartContainer>
  );
};

export default CartPage;

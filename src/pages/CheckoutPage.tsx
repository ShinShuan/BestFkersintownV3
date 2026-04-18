import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeft, Lock, ShoppingBag, ExternalLink } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import { useCart } from '../components/CartProvider';

const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--gray-50);
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
  padding: var(--spacing-4) var(--spacing-8);
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  box-shadow: var(--shadow-sm);
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background: none;
  border: none;
  color: var(--gray-600);
  font-size: var(--font-size-base);
  cursor: pointer;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);

  &:hover {
    background: var(--gray-100);
    color: var(--gray-900);
  }
`;

const TopBarTitle = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-800);
  margin: 0;
`;

const SecureBadge = styled.span`
  margin-left: auto;
  font-size: var(--font-size-sm);
  color: #10b981;
  font-weight: var(--font-medium);
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
`;

const Content = styled.div`
  flex: 1;
  max-width: 640px;
  margin: var(--spacing-12) auto;
  padding: 0 var(--spacing-4);
  width: 100%;
`;

const Card = styled.div`
  background: var(--white);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
  overflow: hidden;
`;

const CardHeader = styled.div`
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  padding: var(--spacing-8);
  color: var(--white);
  text-align: center;
`;

const CardHeaderTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-2);
`;

const CardHeaderSubtitle = styled.p`
  font-size: var(--font-size-base);
  opacity: 0.85;
`;

const CardBody = styled.div`
  padding: var(--spacing-8);
`;

const OrderSummary = styled.div`
  margin-bottom: var(--spacing-6);
`;

const SummaryTitle = styled.h3`
  font-size: var(--font-size-base);
  font-weight: var(--font-semibold);
  color: var(--gray-700);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--spacing-4);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-3) 0;
  border-bottom: 1px solid var(--gray-100);
  font-size: var(--font-size-sm);
  color: var(--gray-700);

  &:last-child {
    border-bottom: none;
  }
`;

const SummaryItemName = styled.span`
  font-weight: var(--font-medium);
  flex: 1;
  margin-right: var(--spacing-4);
`;

const SummaryItemPrice = styled.span`
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  white-space: nowrap;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid var(--gray-100);
  margin: var(--spacing-4) 0;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-4) 0 var(--spacing-2);
`;

const TotalLabel = styled.span`
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  color: var(--gray-900);
`;

const TotalAmount = styled.span`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: #d13296;
`;

const SecurityNote = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-4);
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-6);
  font-size: var(--font-size-sm);
  color: #166534;
`;

const CheckoutButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3);
  width: 100%;
  padding: var(--spacing-5) var(--spacing-8);
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  border: none;
  border-radius: var(--radius-xl);
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-normal);
  box-shadow: 0 4px 15px rgba(209, 50, 150, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(209, 50, 150, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const NoCartMessage = styled.div`
  text-align: center;
  padding: var(--spacing-8);
  color: var(--gray-600);
`;

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { cart } = useCart();

  const checkoutUrl = (location.state as { checkoutUrl?: string })?.checkoutUrl;

  useEffect(() => {
    if (!checkoutUrl) {
      navigate('/cart');
    }
  }, [checkoutUrl, navigate]);

  if (!checkoutUrl) return null;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);

  return (
    <PageContainer>
      <TopBar>
        <BackButton onClick={() => navigate('/cart')}>
          <ArrowLeft size={18} />
          {language === 'fr' ? 'Retour au panier' : 'Back to cart'}
        </BackButton>
        <TopBarTitle>
          {language === 'fr' ? 'Récapitulatif de commande' : 'Order Summary'}
        </TopBarTitle>
        <SecureBadge>
          <Lock size={14} />
          {language === 'fr' ? 'Paiement sécurisé' : 'Secure payment'}
        </SecureBadge>
      </TopBar>

      <Content>
        <Card>
          <CardHeader>
            <CardHeaderTitle>
              {language === 'fr' ? 'Votre commande' : 'Your Order'}
            </CardHeaderTitle>
            <CardHeaderSubtitle>
              {language === 'fr'
                ? 'Vérifiez votre commande avant de procéder au paiement'
                : 'Review your order before proceeding to payment'}
            </CardHeaderSubtitle>
          </CardHeader>

          <CardBody>
            {cart.items.length > 0 ? (
              <>
                <OrderSummary>
                  <SummaryTitle>
                    <ShoppingBag size={16} />
                    {language === 'fr' ? 'Articles' : 'Items'}
                  </SummaryTitle>

                  {cart.items.map(item => (
                    <SummaryItem key={item.id}>
                      <SummaryItemName>
                        {item.title}
                        {item.quantity > 1 && (
                          <span style={{ color: 'var(--gray-500)', marginLeft: '6px' }}>
                            × {item.quantity}
                          </span>
                        )}
                      </SummaryItemName>
                      <SummaryItemPrice>
                        {formatPrice(item.price * item.quantity)}
                      </SummaryItemPrice>
                    </SummaryItem>
                  ))}
                </OrderSummary>

                <Divider />

                <SummaryItem>
                  <SummaryItemName>
                    {language === 'fr' ? 'Sous-total' : 'Subtotal'}
                  </SummaryItemName>
                  <SummaryItemPrice>{formatPrice(cart.subtotal)}</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                  <SummaryItemName>
                    {language === 'fr' ? 'Livraison' : 'Shipping'}
                  </SummaryItemName>
                  <SummaryItemPrice>
                    {cart.shipping === 0
                      ? (language === 'fr' ? 'Gratuite' : 'Free')
                      : formatPrice(cart.shipping)}
                  </SummaryItemPrice>
                </SummaryItem>

                <TotalRow>
                  <TotalLabel>{language === 'fr' ? 'Total' : 'Total'}</TotalLabel>
                  <TotalAmount>{formatPrice(cart.total)}</TotalAmount>
                </TotalRow>

                <Divider />
              </>
            ) : (
              <NoCartMessage>
                {language === 'fr' ? 'Panier vide' : 'Empty cart'}
              </NoCartMessage>
            )}

            <SecurityNote>
              <Lock size={16} />
              {language === 'fr'
                ? 'Votre paiement est sécurisé et crypté par BigCommerce. Vous serez redirigé vers la page de paiement sécurisée.'
                : 'Your payment is secured and encrypted by BigCommerce. You will be redirected to the secure payment page.'}
            </SecurityNote>

            <CheckoutButton href={checkoutUrl}>
              <Lock size={20} />
              {language === 'fr' ? 'Procéder au paiement sécurisé' : 'Proceed to Secure Payment'}
              <ExternalLink size={18} />
            </CheckoutButton>
          </CardBody>
        </Card>
      </Content>
    </PageContainer>
  );
};

export default CheckoutPage;

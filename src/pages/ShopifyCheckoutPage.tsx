import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowLeft, CreditCard, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import { useNotification } from '../components/NotificationProvider';
import { useCart } from '../components/CartProvider';
import Container from '../components/Container';
import { checkoutService, ShopifyCheckout } from '../services/shopify-checkout';


const CheckoutContainer = styled.div`
  min-height: 100vh;
  background: var(--gray-50);
  padding: var(--spacing-8) 0;
`;

const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--spacing-8);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CheckoutForm = styled.div`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
`;

const OrderSummary = styled.div`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-lg);
  height: fit-content;
  position: sticky;
  top: var(--spacing-8);
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
`;

const FormSection = styled.div`
  margin-bottom: var(--spacing-8);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-4);
`;

const Label = styled.label`
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  color: var(--gray-700);
  margin-bottom: var(--spacing-2);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-3);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
  
  &.error {
    border-color: var(--error);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: var(--spacing-3);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  background: var(--white);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentSection = styled.div`
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  margin-top: var(--spacing-6);
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    border-color: #d13296;
  }
  
  &.selected {
    border-color: #d13296;
    background: rgba(209, 50, 150, 0.05);
  }
`;

const PayButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  margin-top: var(--spacing-6);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--gray-600);
  font-size: var(--font-size-base);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-6);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--gray-900);
  }
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  padding: var(--spacing-3) 0;
  border-bottom: 1px solid var(--gray-200);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: var(--radius-lg);
  object-fit: cover;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemTitle = styled.div`
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-1);
`;

const ItemPrice = styled.div`
  color: var(--gray-600);
  font-size: var(--font-size-sm);
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-2) 0;
  
  &.total {
    border-top: 2px solid var(--gray-200);
    margin-top: var(--spacing-4);
    padding-top: var(--spacing-4);
    font-weight: var(--font-bold);
    font-size: var(--font-size-lg);
    color: var(--gray-900);
  }
`;

const SecurityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-600);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-4);
`;

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-2);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid var(--white);
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  country: string;
  zip: string;
}

const ShopifyCheckoutPage: React.FC = () => {
  const { language } = useLanguage();
  const { showNotification } = useNotification();
  const { cart } = useCart();
  const navigate = useNavigate();
  const { checkoutId } = useParams<{ checkoutId: string }>();
  
  const [checkout, setCheckout] = useState<ShopifyCheckout | null>(null);
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    country: 'France',
    zip: ''
  });
  // const [paymentMethod, setPaymentMethod] = useState<'card' | 'sepa'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Partial<CheckoutFormData>>({});

  useEffect(() => {
    if (checkoutId) {
      loadCheckout();
    } else if (cart.items.length > 0) {
      createCheckout();
    } else {
      navigate('/cart');
    }
  }, [checkoutId, cart.items]);

  const loadCheckout = async () => {
    if (!checkoutId) return;
    
    try {
      const checkoutData = await checkoutService.getCheckout(checkoutId);
      setCheckout(checkoutData);
      
      if (checkoutData?.shippingAddress) {
        setFormData({
          firstName: checkoutData.shippingAddress.firstName,
          lastName: checkoutData.shippingAddress.lastName,
          email: '',
          phone: checkoutData.shippingAddress.phone || '',
          address1: checkoutData.shippingAddress.address1,
          address2: checkoutData.shippingAddress.address2 || '',
          city: checkoutData.shippingAddress.city,
          province: checkoutData.shippingAddress.province,
          country: checkoutData.shippingAddress.country,
          zip: checkoutData.shippingAddress.zip
        });
      }
    } catch (error) {
      console.error('Erreur lors du chargement du checkout:', error);
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur de chargement' : 'Loading error',
        message: language === 'fr' ? 'Erreur lors du chargement du panier' : 'Error loading checkout'
      });
    }
  };

  const createCheckout = async () => {
    try {
      showNotification({
        type: 'info',
        title: language === 'fr' ? 'Commande en cours' : 'Order in progress',
        message: language === 'fr' ? 'Redirection vers la page de paiement...' : 'Redirecting to payment page...'
      });

      const lineItems = cart.items.map(item => ({
        variantId: item.variantId || item.id,
        quantity: item.quantity
      }));
      
      const checkoutData = await checkoutService.createCheckout(lineItems);
      setCheckout(checkoutData);
      
      // Rediriger vers la page de checkout avec l'ID
      navigate(`/checkout/${checkoutData.id}`);
    } catch (error) {
      console.error('Erreur lors de la création du checkout:', error);
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur de création' : 'Creation error',
        message: language === 'fr' ? 'Erreur lors de la création du panier' : 'Error creating checkout'
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<CheckoutFormData> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = language === 'fr' ? 'Prénom requis' : 'First name required';
    if (!formData.lastName.trim()) newErrors.lastName = language === 'fr' ? 'Nom requis' : 'Last name required';
    if (!formData.email.trim()) newErrors.email = language === 'fr' ? 'Email requis' : 'Email required';
    if (!formData.address1.trim()) newErrors.address1 = language === 'fr' ? 'Adresse requise' : 'Address required';
    if (!formData.city.trim()) newErrors.city = language === 'fr' ? 'Ville requise' : 'City required';
    if (!formData.zip.trim()) newErrors.zip = language === 'fr' ? 'Code postal requis' : 'ZIP code required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof CheckoutFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || !checkout) return;
    
    setIsProcessing(true);
    
    try {
      // Rediriger directement vers Shopify pour le paiement
      // Shopify gérera automatiquement les informations de livraison
      checkoutService.redirectToCheckout(checkout.webUrl);
      
    } catch (error) {
      console.error('Erreur lors du traitement:', error);
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur de traitement' : 'Processing error',
        message: language === 'fr' ? 'Erreur lors du traitement de la commande' : 'Error processing order'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!checkout) {
    return (
      <CheckoutContainer>
        <Container>
          <div style={{ textAlign: 'center', padding: 'var(--spacing-12)' }}>
            <LoadingSpinner />
            <p>{language === 'fr' ? 'Chargement...' : 'Loading...'}</p>
          </div>
        </Container>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <Container>
        <BackButton onClick={() => navigate('/cart')}>
          <ArrowLeft size={20} />
          {language === 'fr' ? 'Retour au panier' : 'Back to cart'}
        </BackButton>

        <CheckoutGrid>
          <CheckoutForm>
            <form onSubmit={handleSubmit}>
              <SectionTitle>
                <CreditCard size={24} />
                {language === 'fr' ? 'Informations de livraison' : 'Shipping Information'}
              </SectionTitle>

              <FormSection>
                <Row>
                  <FormGroup>
                    <Label>{language === 'fr' ? 'Prénom' : 'First Name'}</Label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && <ErrorMessage><AlertCircle size={16} />{errors.firstName}</ErrorMessage>}
                  </FormGroup>
                  <FormGroup>
                    <Label>{language === 'fr' ? 'Nom' : 'Last Name'}</Label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && <ErrorMessage><AlertCircle size={16} />{errors.lastName}</ErrorMessage>}
                  </FormGroup>
                </Row>

                <FormGroup>
                  <Label>{language === 'fr' ? 'Email' : 'Email'}</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <ErrorMessage><AlertCircle size={16} />{errors.email}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>{language === 'fr' ? 'Téléphone' : 'Phone'}</Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>{language === 'fr' ? 'Adresse' : 'Address'}</Label>
                  <Input
                    type="text"
                    value={formData.address1}
                    onChange={(e) => handleInputChange('address1', e.target.value)}
                    className={errors.address1 ? 'error' : ''}
                  />
                  {errors.address1 && <ErrorMessage><AlertCircle size={16} />{errors.address1}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>{language === 'fr' ? 'Complément d\'adresse' : 'Address Line 2'}</Label>
                  <Input
                    type="text"
                    value={formData.address2}
                    onChange={(e) => handleInputChange('address2', e.target.value)}
                  />
                </FormGroup>

                <Row>
                  <FormGroup>
                    <Label>{language === 'fr' ? 'Ville' : 'City'}</Label>
                    <Input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={errors.city ? 'error' : ''}
                    />
                    {errors.city && <ErrorMessage><AlertCircle size={16} />{errors.city}</ErrorMessage>}
                  </FormGroup>
                  <FormGroup>
                    <Label>{language === 'fr' ? 'Code postal' : 'ZIP Code'}</Label>
                    <Input
                      type="text"
                      value={formData.zip}
                      onChange={(e) => handleInputChange('zip', e.target.value)}
                      className={errors.zip ? 'error' : ''}
                    />
                    {errors.zip && <ErrorMessage><AlertCircle size={16} />{errors.zip}</ErrorMessage>}
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <Label>{language === 'fr' ? 'Région' : 'Province'}</Label>
                    <Input
                      type="text"
                      value={formData.province}
                      onChange={(e) => handleInputChange('province', e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>{language === 'fr' ? 'Pays' : 'Country'}</Label>
                    <Select
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                    >
                      <option value="France">France</option>
                      <option value="Belgium">Belgique</option>
                      <option value="Switzerland">Suisse</option>
                      <option value="Canada">Canada</option>
                    </Select>
                  </FormGroup>
                </Row>
              </FormSection>

              <PayButton type="submit" disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <LoadingSpinner />
                    {language === 'fr' ? 'Traitement...' : 'Processing...'}
                  </>
                ) : (
                  <>
                    <Lock size={20} />
                    {language === 'fr' ? 'Procéder au paiement' : 'Proceed to Payment'}
                  </>
                )}
              </PayButton>

              <SecurityBadge>
                <Lock size={16} />
                {language === 'fr' ? 'Paiement sécurisé par Shopify' : 'Secure payment by Shopify'}
              </SecurityBadge>
            </form>
          </CheckoutForm>

          <OrderSummary>
            <SectionTitle>
              <CheckCircle size={24} />
              {language === 'fr' ? 'Résumé de la commande' : 'Order Summary'}
            </SectionTitle>

            {checkout.lineItems.map((item) => (
              <OrderItem key={item.id}>
                {item.variant.image && (
                  <ItemImage src={item.variant.image.url} alt={item.title} />
                )}
                <ItemDetails>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemPrice>
                    {language === 'fr' ? 'Quantité' : 'Quantity'}: {item.quantity} × €{parseFloat(item.variant.price.amount).toFixed(2)}
                  </ItemPrice>
                </ItemDetails>
              </OrderItem>
            ))}

            <PriceRow>
              <span>{language === 'fr' ? 'Sous-total' : 'Subtotal'}</span>
              <span>€{parseFloat(checkout.subtotalPrice.amount).toFixed(2)}</span>
            </PriceRow>
            <PriceRow>
              <span>{language === 'fr' ? 'TVA' : 'Tax'}</span>
              <span>€{parseFloat(checkout.totalTax.amount).toFixed(2)}</span>
            </PriceRow>
            <PriceRow className="total">
              <span>{language === 'fr' ? 'Total' : 'Total'}</span>
              <span>€{parseFloat(checkout.totalPrice.amount).toFixed(2)}</span>
            </PriceRow>
          </OrderSummary>
        </CheckoutGrid>
      </Container>
    </CheckoutContainer>
  );
};

export default ShopifyCheckoutPage;

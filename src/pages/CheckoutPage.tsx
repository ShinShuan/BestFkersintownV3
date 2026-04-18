import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeft, Loader } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

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

const IframeWrapper = styled.div`
  flex: 1;
  position: relative;
  min-height: calc(100vh - 60px);
`;

const CheckoutIframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px);
  border: none;
  display: block;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-4);
  z-index: 10;
`;

const LoadingText = styled.p`
  color: var(--gray-600);
  font-size: var(--font-size-base);
`;

const ErrorContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-4);
  padding: var(--spacing-8);
  text-align: center;
`;

const ErrorTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
`;

const ErrorText = styled.p`
  color: var(--gray-600);
  max-width: 480px;
`;

const FallbackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-xl);
  font-weight: var(--font-semibold);
  text-decoration: none;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(209, 50, 150, 0.35);
  }
`;

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [loading, setLoading] = React.useState(true);
  const [iframeError, setIframeError] = React.useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Récupérer l'URL de checkout depuis le state de navigation
  const checkoutUrl = (location.state as { checkoutUrl?: string })?.checkoutUrl;

  useEffect(() => {
    if (!checkoutUrl) {
      // Pas d'URL de checkout — retourner au panier
      navigate('/cart');
    }
  }, [checkoutUrl, navigate]);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    setLoading(false);
    setIframeError(true);
  };

  if (!checkoutUrl) return null;

  return (
    <PageContainer>
      <TopBar>
        <BackButton onClick={() => navigate('/cart')}>
          <ArrowLeft size={18} />
          {language === 'fr' ? 'Retour au panier' : 'Back to cart'}
        </BackButton>
        <TopBarTitle>
          {language === 'fr' ? 'Paiement sécurisé' : 'Secure Checkout'}
        </TopBarTitle>
        <SecureBadge>🔒 {language === 'fr' ? 'Paiement sécurisé' : 'Secure payment'}</SecureBadge>
      </TopBar>

      <IframeWrapper>
        {loading && !iframeError && (
          <LoadingOverlay>
            <Loader size={40} color="#d13296" style={{ animation: 'spin 1s linear infinite' }} />
            <LoadingText>
              {language === 'fr' ? 'Chargement du paiement...' : 'Loading checkout...'}
            </LoadingText>
          </LoadingOverlay>
        )}

        {iframeError ? (
          <ErrorContainer>
            <ErrorTitle>
              {language === 'fr' ? 'Le checkout ne peut pas être intégré' : 'Checkout cannot be embedded'}
            </ErrorTitle>
            <ErrorText>
              {language === 'fr'
                ? 'Cliquez sur le bouton ci-dessous pour finaliser votre commande sur la page de paiement sécurisé.'
                : 'Click the button below to complete your order on the secure payment page.'}
            </ErrorText>
            <FallbackButton href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              {language === 'fr' ? 'Accéder au paiement →' : 'Go to checkout →'}
            </FallbackButton>
          </ErrorContainer>
        ) : (
          <CheckoutIframe
            ref={iframeRef}
            src={checkoutUrl}
            title={language === 'fr' ? 'Paiement sécurisé' : 'Secure Checkout'}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allow="payment"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
          />
        )}
      </IframeWrapper>
    </PageContainer>
  );
};

export default CheckoutPage;

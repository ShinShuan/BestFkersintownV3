import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
    onDecline();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CookieCard
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <CloseButton onClick={handleDecline}>
              <X size={20} />
            </CloseButton>
            
            <CookieIcon>
              <Cookie size={32} />
            </CookieIcon>
            
            <Title>
              {language === 'fr' ? 'Cookies et Confidentialité' : 'Cookies & Privacy'}
            </Title>
            
            <Description>
              {language === 'fr' 
                ? 'Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. En continuant, vous acceptez notre politique de confidentialité.'
                : 'We use cookies to enhance your experience and analyze traffic. By continuing, you accept our privacy policy.'
              }
            </Description>
            
            <ButtonGroup>
              <DeclineButton onClick={handleDecline}>
                {language === 'fr' ? 'Refuser' : 'Decline'}
              </DeclineButton>
              <AcceptButton onClick={handleAccept}>
                <CheckCircle size={16} />
                {language === 'fr' ? 'Accepter' : 'Accept'}
              </AcceptButton>
            </ButtonGroup>
          </CookieCard>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    left: 10px;
  }
`;

const CookieCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-xl);
  border: 1px solid rgba(209, 50, 150, 0.1);
  max-width: 400px;
  position: relative;
  
  @media (max-width: 768px) {
    max-width: none;
    padding: var(--spacing-4);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-3);
  right: var(--spacing-3);
  background: none;
  border: none;
  color: var(--gray-400);
  cursor: pointer;
  padding: var(--spacing-1);
  border-radius: var(--radius-full);
  transition: all var(--transition-normal);
  
  &:hover {
    color: var(--gray-600);
    background: var(--gray-100);
  }
`;

const CookieIcon = styled.div`
  width: 48px;
  height: 48px;
  background: var(--primary-gradient);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  margin-bottom: var(--spacing-4);
`;

const Title = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`;

const Description = styled.p`
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  line-height: 1.5;
  margin-bottom: var(--spacing-4);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-3);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DeclineButton = styled.button`
  background: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-200);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  flex: 1;
  
  &:hover {
    background: var(--gray-200);
    color: var(--gray-800);
  }
`;

const AcceptButton = styled.button`
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  flex: 1;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

export default CookieConsent;

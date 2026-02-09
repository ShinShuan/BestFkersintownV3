import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Gift, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useNotification } from './NotificationProvider';

interface NewsletterSignupProps {
  onClose: () => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ onClose }) => {
  const { language } = useLanguage();
  const { showNotification } = useNotification();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSubscribed = localStorage.getItem('newsletterSubscribed');
    if (!hasSubscribed) {
      setTimeout(() => setIsVisible(true), 5000); // Apparaît après 5 secondes
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr' ? 'Veuillez entrer une adresse email valide' : 'Please enter a valid email address'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simuler l'envoi à l'API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      localStorage.setItem('newsletterSubscribed', 'true');
      setIsVisible(false);
      
      showNotification({
        type: 'success',
        title: language === 'fr' ? 'Inscription réussie !' : 'Successfully subscribed!',
        message: language === 'fr' 
          ? 'Merci de vous être inscrit à notre newsletter !'
          : 'Thank you for subscribing to our newsletter!'
      });
      
      onClose();
    } catch (error) {
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr' 
          ? 'Une erreur est survenue. Veuillez réessayer.'
          : 'An error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <NewsletterCard
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <CloseButton onClick={handleClose}>
              <X size={20} />
            </CloseButton>
            
            <GiftIcon>
              <Gift size={32} />
            </GiftIcon>
            
            <Title>
              {language === 'fr' ? '🎉 Offre Spéciale !' : '🎉 Special Offer!'}
            </Title>
            
            <Subtitle>
              {language === 'fr' 
                ? 'Inscrivez-vous à notre newsletter et obtenez 10% de réduction sur votre première commande !'
                : 'Subscribe to our newsletter and get 10% off your first order!'
              }
            </Subtitle>
            
            <Benefits>
              <Benefit>
                <CheckCircle size={16} />
                <span>
                  {language === 'fr' ? 'Offres exclusives' : 'Exclusive offers'}
                </span>
              </Benefit>
              <Benefit>
                <CheckCircle size={16} />
                <span>
                  {language === 'fr' ? 'Nouveautés en avant-première' : 'Early access to new products'}
                </span>
              </Benefit>
              <Benefit>
                <CheckCircle size={16} />
                <span>
                  {language === 'fr' ? 'Conseils de style personnalisés' : 'Personalized style tips'}
                </span>
              </Benefit>
            </Benefits>
            
            <Form onSubmit={handleSubmit}>
              <EmailInput
                type="email"
                placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div style={{ width: '16px', height: '16px', border: '2px solid transparent', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                ) : (
                  <>
                    <Mail size={16} />
                    {language === 'fr' ? 'S\'inscrire' : 'Subscribe'}
                    <ArrowRight size={16} />
                  </>
                )}
              </SubmitButton>
            </Form>
            
            <Disclaimer>
              {language === 'fr' 
                ? 'En vous inscrivant, vous acceptez de recevoir nos emails marketing. Vous pouvez vous désinscrire à tout moment.'
                : 'By subscribing, you agree to receive our marketing emails. You can unsubscribe at any time.'
              }
            </Disclaimer>
          </NewsletterCard>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-4);
`;

const NewsletterCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-xl);
  border: 1px solid rgba(209, 50, 150, 0.1);
  max-width: 500px;
  width: 100%;
  position: relative;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: var(--spacing-6);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
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

const GiftIcon = styled.div`
  width: 64px;
  height: 64px;
  background: var(--primary-gradient);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  margin: 0 auto var(--spacing-6);
  box-shadow: var(--shadow-md);
`;

const Title = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`;

const Subtitle = styled.p`
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  line-height: 1.5;
  margin-bottom: var(--spacing-6);
`;

const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-6);
  text-align: left;
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  color: var(--gray-700);
  font-size: var(--font-size-sm);
  
  svg {
    color: #10b981;
    flex-shrink: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-4);
`;

const EmailInput = styled.input`
  padding: var(--spacing-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  transition: all var(--transition-normal);
  
  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
  
  &::placeholder {
    color: var(--gray-400);
  }
`;

const SubmitButton = styled.button`
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Disclaimer = styled.p`
  font-size: var(--font-size-xs);
  color: var(--gray-500);
  line-height: 1.4;
`;

export default NewsletterSignup;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check, Gift, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { newsletterService } from '../services/newsletter';
import { useNotification } from './NotificationProvider';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-4);
`;

const ModalContent = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-2xl);
  max-width: 450px;
  width: 100%;
  position: relative;
  box-shadow: var(--shadow-2xl);
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  background: var(--gray-100);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  z-index: 10;
  
  &:hover {
    background: var(--gray-200);
    transform: scale(1.1);
  }
`;

const ModalHeader = styled.div`
  padding: var(--spacing-8) var(--spacing-6) var(--spacing-4);
  text-align: center;
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  position: relative;
`;

const GiftIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-4);
  backdrop-filter: blur(10px);
`;

const ModalTitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
`;

const ModalSubtitle = styled.p`
  font-size: var(--font-size-lg);
  opacity: 0.9;
  line-height: 1.5;
`;

const ModalBody = styled.div`
  padding: var(--spacing-6);
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-6);
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  color: var(--gray-700);
  font-weight: var(--font-medium);
`;

const CheckIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const EmailInput = styled.input`
  padding: var(--spacing-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
  
  &::placeholder {
    color: var(--gray-400);
  }
`;

const SubscribeButton = styled.button`
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-weight: var(--font-bold);
  font-size: var(--font-size-lg);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const FooterText = styled.p`
  font-size: var(--font-size-sm);
  color: var(--gray-500);
  text-align: center;
  line-height: 1.4;
  margin-top: var(--spacing-4);
`;

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({
  isOpen,
  onClose
}) => {
  const { language } = useLanguage();
  const { showNotification } = useNotification();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [discountCode, setDiscountCode] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Email invalide' : 'Invalid email',
        message: language === 'fr' 
          ? 'Veuillez entrer une adresse email valide'
          : 'Please enter a valid email address'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Inscrire à la newsletter via Shopify
      const result = await newsletterService.subscribeToNewsletter(email);
      
      if (result.success) {
        setIsSubmitted(true);
        showNotification({
          type: 'success',
          title: language === 'fr' ? 'Inscription réussie !' : 'Successfully subscribed!',
          message: result.message
        });
        
        // Fermer le modal après 3 secondes
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setEmail('');
          setDiscountCode('');
        }, 3000);
      } else {
        showNotification({
          type: 'error',
          title: language === 'fr' ? 'Erreur d\'inscription' : 'Subscription error',
          message: result.message
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr' 
          ? 'Une erreur est survenue lors de l\'inscription'
          : 'An error occurred during subscription'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Marquer comme vu dans le localStorage
    localStorage.setItem('newsletter_modal_seen', 'true');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={handleClose}>
              <X size={20} />
            </CloseButton>

            <ModalHeader>
              <GiftIcon>
                <Gift size={24} />
              </GiftIcon>
              <ModalTitle>
                {language === 'fr' ? 'Offre Spéciale !' : 'Special Offer!'}
                <span style={{ fontSize: 'var(--font-size-lg)' }}>🎉</span>
              </ModalTitle>
              <ModalSubtitle>
                {language === 'fr' 
                  ? 'Inscrivez-vous à notre newsletter et obtenez 10% de réduction sur votre première commande !'
                  : 'Sign up for our newsletter and get 10% off your first order!'
                }
              </ModalSubtitle>
            </ModalHeader>

            <ModalBody>
              <BenefitsList>
                <BenefitItem>
                  <CheckIcon>
                    <Check size={14} />
                  </CheckIcon>
                  <span>
                    {language === 'fr' ? 'Offres exclusives' : 'Exclusive offers'}
                  </span>
                </BenefitItem>
                <BenefitItem>
                  <CheckIcon>
                    <Check size={14} />
                  </CheckIcon>
                  <span>
                    {language === 'fr' ? 'Nouveautés en avant-première' : 'New arrivals in preview'}
                  </span>
                </BenefitItem>
                <BenefitItem>
                  <CheckIcon>
                    <Check size={14} />
                  </CheckIcon>
                  <span>
                    {language === 'fr' ? 'Conseils de style personnalisés' : 'Personalized style advice'}
                  </span>
                </BenefitItem>
              </BenefitsList>

              {!isSubmitted ? (
                <EmailForm onSubmit={handleSubmit}>
                  <EmailInput
                    type="email"
                    placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <SubscribeButton type="submit" disabled={isSubmitting}>
                    <Mail size={20} />
                    {isSubmitting 
                      ? (language === 'fr' ? 'Inscription...' : 'Signing up...')
                      : (language === 'fr' ? 'S\'inscrire' : 'Sign up')
                    }
                    {!isSubmitting && <ArrowRight size={20} />}
                  </SubscribeButton>
                </EmailForm>
                             ) : (
                 <div style={{ 
                   textAlign: 'center', 
                   padding: 'var(--spacing-6)',
                   color: '#10b981',
                   fontSize: 'var(--font-size-lg)',
                   fontWeight: 'var(--font-bold)'
                 }}>
                   <div style={{ marginBottom: 'var(--spacing-4)' }}>
                     {language === 'fr' 
                       ? 'Merci ! Votre code de réduction vous a été envoyé par email.'
                       : 'Thank you! Your discount code has been sent to your email.'
                     }
                   </div>
                   <div style={{ 
                     background: '#f8f9fa', 
                     padding: 'var(--spacing-4)', 
                     borderRadius: 'var(--radius-lg)',
                     border: '2px dashed #10b981'
                   }}>
                     <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--gray-600)', marginBottom: 'var(--spacing-2)' }}>
                       {language === 'fr' ? 'Code de réduction :' : 'Discount code:'}
                     </div>
                     <div style={{ 
                       fontSize: 'var(--font-size-xl)', 
                       fontWeight: 'var(--font-bold)', 
                       color: '#d13296',
                       letterSpacing: '2px'
                     }}>
                       {discountCode || 'NEWSLETTER10'}
                     </div>
                   </div>
                 </div>
               )}

              <FooterText>
                {language === 'fr' 
                  ? 'En vous inscrivant, vous acceptez de recevoir nos emails marketing. Vous pouvez vous désinscrire à tout moment.'
                  : 'By signing up, you agree to receive our marketing emails. You can unsubscribe at any time.'
                }
              </FooterText>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default NewsletterModal;

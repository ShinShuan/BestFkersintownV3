import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Smartphone, MessageCircle, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import Container from '../components/Container';
import { leadService, LeadData } from '../services/leadService';

const DiscoverContainer = styled.div`
  min-height: 100vh;
  background: var(--white);
  padding: var(--spacing-20) 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: var(--spacing-10) 0;
  }
`;

const SplitLayout = styled.div`
  display: flex;
  gap: var(--spacing-12);
  margin-top: var(--spacing-12);
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: var(--spacing-16);
  }
`;

const LeftColumn = styled(motion.div)`
  flex: 1;
`;

const RightColumn = styled(motion.div)`
  flex: 1;
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  padding: var(--spacing-12);
  border-radius: var(--radius-3xl);
  color: var(--white);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(209, 50, 150, 0.2);

  @media (max-width: 768px) {
    padding: var(--spacing-8) var(--spacing-6);
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
  text-align: left;
  
  .bft-title {
    color: #d13296;
  }

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  max-width: 600px;
  margin-bottom: var(--spacing-10);
  line-height: 1.6;
  text-align: left;

  @media (max-width: 1024px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SocialLinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const SocialLinkCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
  padding: var(--spacing-6);
  background: var(--white);
  border-radius: var(--radius-2xl);
  border: 2px solid var(--gray-100);
  text-decoration: none;
  color: var(--gray-900);
  transition: all var(--transition-normal);
  
  &:hover {
    border-color: #d13296;
    transform: translateX(10px);
    box-shadow: var(--shadow-lg);
    
    .icon-box {
      background: rgba(209, 50, 150, 0.1);
      color: #d13296;
      transform: scale(1.1);
    }
  }
`;

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  background: var(--gray-50);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  color: var(--gray-700);
`;

const SocialInfo = styled.div`
  flex: 1;
`;

const SocialTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  margin-bottom: 2px;
`;

const SocialDesc = styled.p`
  font-size: var(--font-size-sm);
  color: var(--gray-500);
`;

/* Form Styles */
const FormContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const FormTitle = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-4);
  color: var(--white);
`;

const FormText = styled.p`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-8);
  opacity: 0.9;
  line-height: 1.6;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  text-align: left;
`;

const Label = styled.label`
  font-size: var(--font-size-sm);
  font-weight: var(--font-semibold);
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-4);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-xl);
  color: var(--white);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: var(--white);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: var(--spacing-4);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-xl);
  color: var(--white);
  font-size: var(--font-size-base);
  cursor: pointer;
  
  option {
    background: var(--gray-900);
    color: var(--white);
  }
`;

const CTAButton = styled(motion.button)`
  background: var(--white);
  color: #d13296;
  padding: var(--spacing-4);
  border-radius: var(--radius-xl);
  font-weight: var(--font-bold);
  font-size: var(--font-size-lg);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  margin-top: var(--spacing-4);
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessOverlay = styled(motion.div)`
  text-align: center;
  padding: var(--spacing-12) 0;
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const Shape = styled(motion.div)<{ $color: string; $size: number }>`
  position: absolute;
  background: ${props => props.$color};
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 50%;
  opacity: 0.15;
`;

const DiscoverPage: React.FC = () => {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    community: 'GG'
  });

  const socialLinks = [
    {
      icon: <Instagram size={28} />,
      title: 'Instagram',
      description: language === 'fr' ? 'Suivez notre univers au quotidien' : 'Follow our daily universe',
      url: 'https://instagram.com/bestfkersintown'
    },
    {
      icon: <Smartphone size={28} />,
      title: 'TikTok',
      description: language === 'fr' ? 'Le meilleur de BFT en vidéo' : 'The best of BFT in video',
      url: 'https://tiktok.com/@bestfkersintown'
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'WhatsApp',
      description: language === 'fr' ? 'Contactez-nous directement' : 'Contact us directly',
      url: 'https://wa.me/33000000000'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const data: LeadData = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      await leadService.submitLead(data);
      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', community: 'GG' });
    } catch (error) {
      alert(language === 'fr' ? 'Une erreur est survenue.' : 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DiscoverContainer>
      <Container>
        <SplitLayout>
          {/* Left Column - Socials */}
          <LeftColumn
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>
              Discover <span className="bft-title papyrus-font">BFT</span>
            </Title>
            <Subtitle>
              {language === 'fr' 
                ? 'Plongez dans l\'univers BestF.kers in Town. Mode, authenticité et communauté.'
                : 'Dive into the BestF.kers in Town universe. Fashion, authenticity, and community.'
              }
            </Subtitle>
            
            <SocialLinksList>
              {socialLinks.map((link, index) => (
                <SocialLinkCard
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <IconBox className="icon-box">
                    {link.icon}
                  </IconBox>
                  <SocialInfo>
                    <SocialTitle>{link.title}</SocialTitle>
                    <SocialDesc>{link.description}</SocialDesc>
                  </SocialInfo>
                  <ArrowRight size={20} className="arrow" />
                </SocialLinkCard>
              ))}
            </SocialLinksList>
          </LeftColumn>

          {/* Right Column - Become BFT Form */}
          <RightColumn
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <SuccessOverlay
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle size={80} color="#ffffff" style={{ marginBottom: '24px' }} />
                  <FormTitle>
                    {language === 'fr' ? 'Merci !' : 'Thank you!'}
                  </FormTitle>
                  <FormText>
                    {language === 'fr' 
                      ? 'Votre demande a bien été envoyée. Nous reviendrons vers vous très vite.' 
                      : 'Your request has been sent. We will get back to you very soon.'
                    }
                  </FormText>
                  <CTAButton 
                    onClick={() => setIsSuccess(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {language === 'fr' ? 'Retour' : 'Back'}
                  </CTAButton>
                </SuccessOverlay>
              ) : (
                <FormContainer key="form">
                  <FormTitle>Become <span className="papyrus-font">BFT</span></FormTitle>
                  <FormText>
                    {language === 'fr'
                      ? 'Rejoignez notre programme d\'ambassadeurs et devenez le visage de la mode inclusive.'
                      : 'Join our ambassador program and become the face of inclusive fashion.'
                    }
                  </FormText>
                  
                  <StyledForm onSubmit={handleSubmit}>
                    <InputGroup>
                      <Label>{language === 'fr' ? 'Prénom' : 'First Name'}</Label>
                      <Input 
                        required
                        placeholder={language === 'fr' ? 'Votre prénom' : 'Your first name'}
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                      />
                    </InputGroup>

                    <InputGroup>
                      <Label>{language === 'fr' ? 'Nom' : 'Last Name'}</Label>
                      <Input 
                        required
                        placeholder={language === 'fr' ? 'Votre nom' : 'Your last name'}
                        value={formData.lastName}
                        onChange={e => setFormData({...formData, lastName: e.target.value})}
                      />
                    </InputGroup>
                    
                    <InputGroup>
                      <Label>{language === 'fr' ? 'N° de téléphone' : 'Phone Number'}</Label>
                      <Input 
                        required
                        type="tel"
                        placeholder="06 00 00 00 00"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </InputGroup>
                    
                    <InputGroup>
                      <Label>{language === 'fr' ? 'Email' : 'Email Address'}</Label>
                      <Input 
                        required
                        type="email"
                        placeholder="hello@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </InputGroup>
                    
                    <InputGroup>
                      <Label>{language === 'fr' ? 'Appartenance' : 'Community'}</Label>
                      <Select 
                        value={formData.community}
                        onChange={e => setFormData({...formData, community: e.target.value})}
                      >
                        <option value="GG">GG (Gay Gamer)</option>
                        <option value="LL">LL (Lovely Lady)</option>
                        <option value="BFT">BFT (Best F.kers)</option>
                        <option value="OTHER">{language === 'fr' ? 'Autre' : 'Other'}</option>
                      </Select>
                    </InputGroup>
                    
                    <CTAButton
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <>
                          {language === 'fr' ? 'Rejoindre l\'aventure' : 'Join the adventure'}
                          <ArrowRight size={20} />
                        </>
                      )}
                    </CTAButton>
                  </StyledForm>
                </FormContainer>
              )}
            </AnimatePresence>

            <FloatingShapes>
               <Shape 
                $color="#ffffff" 
                $size={120} 
                style={{ top: '-40px', right: '-40px' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
               <Shape 
                $color="#ffffff" 
                $size={80} 
                style={{ bottom: '10%', left: '-20px' }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </FloatingShapes>
          </RightColumn>
        </SplitLayout>
      </Container>
    </DiscoverContainer>
  );
};

export default DiscoverPage; 

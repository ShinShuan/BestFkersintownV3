import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Instagram, Smartphone, Heart, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import Container from '../components/Container';

const DiscoverContainer = styled.div`
  min-height: 100vh;
  background: var(--white);
  padding: var(--spacing-20) 0;
  overflow: hidden;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-16);
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
  
  .bft-title {
    color: #d13296;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-20);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SocialCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-10);
  background: var(--white);
  border-radius: var(--radius-2xl);
  border: 2px solid var(--gray-100);
  text-decoration: none;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(209, 50, 150, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &:hover {
    border-color: #d13296;
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.1);
    
    &::before {
      opacity: 1;
    }

    svg {
      color: #d13296;
      transform: scale(1.1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: var(--gray-50);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-6);
  color: var(--gray-700);
  transition: all var(--transition-normal);
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`;

const CardDescription = styled.p`
  color: var(--gray-600);
  font-size: var(--font-size-base);
`;

const BecomeBFTSection = styled(motion.section)`
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  padding: var(--spacing-20) 0;
  border-radius: var(--radius-3xl);
  color: var(--white);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const BFTContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const BFTTitle = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-6);
`;

const BFTText = styled.p`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-8);
  opacity: 0.9;
  line-height: 1.7;
`;

const CTAButton = styled(motion.button)`
  background: var(--white);
  color: #d13296;
  padding: var(--spacing-4) var(--spacing-10);
  border-radius: var(--radius-full);
  font-weight: var(--font-bold);
  font-size: var(--font-size-lg);
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  box-shadow: var(--shadow-lg);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
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
  opacity: 0.2;
`;

const DiscoverPage: React.FC = () => {
  const { language } = useLanguage();

  const socialLinks = [
    {
      icon: <Instagram size={32} />,
      title: 'Instagram',
      description: language === 'fr' ? 'Suivez notre univers au quotidien' : 'Follow our daily universe',
      url: 'https://instagram.com/bestfkersintown'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'TikTok',
      description: language === 'fr' ? 'Le meilleur de BFT en vidéo' : 'The best of BFT in video',
      url: 'https://tiktok.com/@bestfkersintown'
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'WhatsApp',
      description: language === 'fr' ? 'Contactez-nous directement' : 'Contact us directly',
      url: 'https://wa.me/33000000000'
    },
    {
      icon: <Users size={32} />,
      title: 'Community',
      description: language === 'fr' ? 'Rejoignez la famille BFT' : 'Join the BFT family',
      url: '#'
    }
  ];

  return (
    <DiscoverContainer>
      <Container>
        <HeroSection>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover <span className="bft-title papyrus-font">BFT</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {language === 'fr' 
              ? 'Plongez dans l\'univers BestF.kers in Town. Mode, authenticité et communauté.'
              : 'Dive into the BestF.kers in Town universe. Fashion, authenticity, and community.'
            }
          </Subtitle>
        </HeroSection>

        <LinksGrid>
          {socialLinks.map((link, index) => (
            <SocialCard
              key={link.title}
              href={link.url}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <IconWrapper>
                {link.icon}
              </IconWrapper>
              <CardTitle>{link.title}</CardTitle>
              <CardDescription>{link.description}</CardDescription>
            </SocialCard>
          ))}
        </LinksGrid>

        <BecomeBFTSection
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BFTContent>
            <BFTTitle>Become <span className="papyrus-font">BFT</span></BFTTitle>
            <BFTText>
              {language === 'fr'
                ? 'Vous partagez nos valeurs ? Vous voulez faire bouger les choses avec nous ? Rejoignez notre programme d\'ambassadeurs et devenez le visage de la mode inclusive de demain.'
                : 'Do you share our values? Want to make things happen with us? Join our ambassador program and become the face of tomorrow\'s inclusive fashion.'
              }
            </BFTText>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'fr' ? 'Rejoindre l\'aventure' : 'Join the adventure'}
              <ArrowRight size={20} />
            </CTAButton>
          </BFTContent>

          <FloatingShapes>
             <Shape 
              $color="#ffffff" 
              $size={100} 
              style={{ top: '10%', left: '5%' }}
              animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
             <Shape 
              $color="#ffffff" 
              $size={150} 
              style={{ bottom: '20%', right: '10%' }}
              animate={{ y: [0, -30, 0], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </FloatingShapes>
        </BecomeBFTSection>
      </Container>
    </DiscoverContainer>
  );
};

export default DiscoverPage; 

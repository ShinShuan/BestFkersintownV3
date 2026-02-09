import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Heart, Rainbow, Sparkles, Users, Award, Globe, Star } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import Container from '../components/Container';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>
              {language === 'fr' ? 'Qui Sommes-Nous ?' : 'Who Are We?'}
            </HeroTitle>
            <HeroSubtitle>
              {language === 'fr' 
                ? 'Une marque de vêtements inclusive qui célèbre la diversité et l\'authenticité'
                : 'An inclusive clothing brand that celebrates diversity and authenticity'
              }
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      <Container>
        <StorySection>
          <StoryGrid>
            <StoryContent>
              <StoryTitle>
                {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
              </StoryTitle>
              <StoryText>
                {language === 'fr' 
                  ? 'Fondée en 2025, BestF.kersinTown est née d\'une vision simple : créer des vêtements qui parlent à tous, sans exception. Notre marque est le fruit d\'une passion pour l\'inclusivité et d\'une conviction profonde que la mode doit être accessible à chacun, peu importe son identité, son style ou son corps.'
                  : 'Founded in 2025, BestF.kersinTown was born from a simple vision: to create clothing that speaks to everyone, without exception. Our brand is the result of a passion for inclusivity and a deep conviction that fashion should be accessible to everyone, regardless of their identity, style, or body.'
                }
              </StoryText>
              <StoryText>
                {language === 'fr'
                  ? 'Nous croyons que chaque personne mérite de se sentir belle, confiante et authentique dans ses vêtements. C\'est pourquoi nous créons des pièces qui célèbrent la diversité et encouragent l\'expression de soi.'
                  : 'We believe that every person deserves to feel beautiful, confident, and authentic in their clothes. That\'s why we create pieces that celebrate diversity and encourage self-expression.'
                }
              </StoryText>
            </StoryContent>
            <StoryImage>
              <ImagePlaceholder>
                <Sparkles size={60} />
                <span>{language === 'fr' ? 'Notre Histoire' : 'Our Story'}</span>
              </ImagePlaceholder>
            </StoryImage>
          </StoryGrid>
        </StorySection>

        <MissionSection>
          <MissionGrid>
            <MissionImage>
              <ImagePlaceholder>
                <Heart size={60} />
                <span>{language === 'fr' ? 'Notre Mission' : 'Our Mission'}</span>
              </ImagePlaceholder>
            </MissionImage>
            <MissionContent>
              <MissionTitle>
                {language === 'fr' ? 'Notre Mission' : 'Our Mission'}
              </MissionTitle>
              <MissionText>
                {language === 'fr'
                  ? 'Notre mission est de révolutionner l\'industrie de la mode en créant des vêtements véritablement inclusifs. Nous nous engageons à représenter et célébrer toutes les identités, tous les corps et tous les styles.'
                  : 'Our mission is to revolutionize the fashion industry by creating truly inclusive clothing. We are committed to representing and celebrating all identities, all bodies, and all styles.'
                }
              </MissionText>
              <MissionText>
                {language === 'fr'
                  ? 'Nous travaillons avec des créateurs, des modèles et des communautés diverses pour nous assurer que nos collections reflètent la richesse et la beauté de notre monde.'
                  : 'We work with diverse creators, models, and communities to ensure our collections reflect the richness and beauty of our world.'
                }
              </MissionText>
            </MissionContent>
          </MissionGrid>
        </MissionSection>

        <ValuesSection>
          <ValuesTitle>
            {language === 'fr' ? 'Nos Valeurs' : 'Our Values'}
          </ValuesTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={value.title[language]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValueIcon>
                  {value.icon}
                </ValueIcon>
                <ValueTitle>{value.title[language]}</ValueTitle>
                <ValueDescription>{value.description[language]}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>

        <StatsSection>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label[language]}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StatIcon>
                  {stat.icon}
                </StatIcon>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label[language]}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </StatsSection>

        <CommunitySection>
          <CommunityContent>
            <CommunityTitle>
              {language === 'fr' ? 'Rejoignez Notre Communauté' : 'Join Our Community'}
            </CommunityTitle>
            <CommunityText>
              {language === 'fr'
                ? 'Nous croyons au pouvoir de la communauté. Rejoignez des milliers de personnes qui partagent nos valeurs d\'inclusivité, d\'authenticité et d\'expression de soi.'
                : 'We believe in the power of community. Join thousands of people who share our values of inclusivity, authenticity, and self-expression.'
              }
            </CommunityText>
            <CommunityImage>
              <ImagePlaceholder>
                <Users size={60} />
                <span>{language === 'fr' ? 'Notre Communauté' : 'Our Community'}</span>
              </ImagePlaceholder>
            </CommunityImage>
          </CommunityContent>
        </CommunitySection>
      </Container>
    </PageContainer>
  );
};

const values = [
  {
    title: { fr: 'Inclusivité', en: 'Inclusivity' },
    description: {
      fr: 'Nous créons pour tous, sans exception. Chaque personne mérite de se sentir représentée.',
      en: 'We create for everyone, without exception. Every person deserves to feel represented.'
    },
    icon: <Rainbow size={32} />
  },
  {
    title: { fr: 'Diversité', en: 'Diversity' },
    description: {
      fr: 'Nous célébrons la richesse de nos différences et encourageons l\'expression de chaque identité.',
      en: 'We celebrate the richness of our differences and encourage the expression of every identity.'
    },
    icon: <Globe size={32} />
  },
  {
    title: { fr: 'Authenticité', en: 'Authenticity' },
    description: {
      fr: 'Nous encourageons chacun à être fidèle à soi-même et à exprimer sa vraie nature.',
      en: 'We encourage everyone to be true to themselves and express their true nature.'
    },
    icon: <Star size={32} />
  },
  {
    title: { fr: 'Communauté', en: 'Community' },
    description: {
      fr: 'Nous construisons ensemble un espace sûr où chacun peut s\'épanouir et se connecter.',
      en: 'We build together a safe space where everyone can thrive and connect.'
    },
    icon: <Users size={32} />
  }
];

const stats = [
  {
    number: '100%',
    label: { fr: 'Inclusif', en: 'Inclusive' },
    icon: <Heart size={24} />
  },
  {
    number: '2025',
    label: { fr: 'Année de création', en: 'Founded' },
    icon: <Award size={24} />
  },
  {
    number: '∞',
    label: { fr: 'Possibilités', en: 'Possibilities' },
    icon: <Sparkles size={24} />
  },
  {
    number: '❤️',
    label: { fr: 'Amour', en: 'Love' },
    icon: <Heart size={24} />
  }
];

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--white);
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  padding: var(--spacing-20) 0 var(--spacing-16) 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: var(--font-size-5xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-6);
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: var(--font-size-xl);
  opacity: 0.9;
  line-height: 1.6;
`;

const StorySection = styled.section`
  padding: var(--spacing-16) 0;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }
`;

const StoryContent = styled.div``;

const StoryTitle = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
`;

const StoryText = styled.p`
  font-size: var(--font-size-lg);
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: var(--spacing-4);
`;

const StoryImage = styled.div``;

const MissionSection = styled.section`
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }
`;

const MissionContent = styled.div``;

const MissionTitle = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
`;

const MissionText = styled.p`
  font-size: var(--font-size-lg);
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: var(--spacing-4);
`;

const MissionImage = styled.div``;

const ValuesSection = styled.section`
  padding: var(--spacing-16) 0;
`;

const ValuesTitle = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  text-align: center;
  margin-bottom: var(--spacing-12);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-8);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background: var(--white);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-100);
  text-align: center;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: #d13296;
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-6);
  color: var(--white);
  box-shadow: var(--shadow-md);
`;

const ValueTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
`;

const ValueDescription = styled.p`
  font-size: var(--font-size-base);
  color: var(--gray-600);
  line-height: 1.6;
`;

const StatsSection = styled.section`
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-8);
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: var(--spacing-6);
`;

const StatIcon = styled.div`
  color: #d13296;
  margin-bottom: var(--spacing-4);
`;

const StatNumber = styled.div`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  color: #d13296;
  margin-bottom: var(--spacing-2);
`;

const StatLabel = styled.div`
  font-size: var(--font-size-lg);
  color: var(--gray-700);
  font-weight: var(--font-medium);
`;

const CommunitySection = styled.section`
  padding: var(--spacing-16) 0;
`;

const CommunityContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CommunityTitle = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
`;

const CommunityText = styled.p`
  font-size: var(--font-size-lg);
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: var(--spacing-8);
`;

const CommunityImage = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  gap: var(--spacing-4);
  box-shadow: var(--shadow-lg);

  span {
    opacity: 0.9;
  }
`;

export default AboutPage;

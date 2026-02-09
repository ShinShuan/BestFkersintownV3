import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Users, Globe } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const CommitmentsContainer = styled.div`
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

const CommitmentsGrid = styled.div`
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

const CommitmentCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-10);
  text-align: center;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.15);
    border-color: #d13296;
  }
`;

const CommitmentIcon = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-8);
  color: var(--white);
  box-shadow: var(--shadow-lg);
`;

const CommitmentTitle = styled.h3`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
`;

const CommitmentDescription = styled.p`
  color: var(--gray-700);
  line-height: 1.7;
  font-size: var(--font-size-lg);
`;

const CommitmentsPage: React.FC = () => {
  const { language } = useLanguage();

  const commitments = [
    {
      icon: <Leaf size={32} />,
      title: language === 'fr' ? 'Matériaux Durables' : 'Sustainable Materials',
      description: language === 'fr'
        ? 'Nous utilisons uniquement des matériaux durables et respectueux de l\'environnement.'
        : 'We use only sustainable and environmentally friendly materials.'
    },
    {
      icon: <Recycle size={32} />,
      title: language === 'fr' ? 'Recyclage' : 'Recycling',
      description: language === 'fr'
        ? '95% de nos matériaux sont recyclés et nous encourageons le recyclage de nos produits.'
        : '95% of our materials are recycled and we encourage recycling of our products.'
    },
    {
      icon: <Users size={32} />,
      title: language === 'fr' ? 'Production Éthique' : 'Ethical Production',
      description: language === 'fr'
        ? 'Nous nous assurons que tous nos partenaires respectent les conditions de travail éthiques.'
        : 'We ensure that all our partners respect ethical working conditions.'
    },
    {
      icon: <Globe size={32} />,
      title: language === 'fr' ? 'Impact Environnemental' : 'Environmental Impact',
      description: language === 'fr'
        ? 'Nous réduisons notre empreinte carbone et compensons nos émissions.'
        : 'We reduce our carbon footprint and offset our emissions.'
    }
  ];

  return (
    <CommitmentsContainer>
      <Container>
        <PageHeader>
          <PageTitle>
            {language === 'fr' ? 'Nos Engagements' : 'Our Commitments'}
          </PageTitle>
        </PageHeader>

        <CommitmentsGrid>
          {commitments.map((commitment, index) => (
            <CommitmentCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CommitmentIcon>{commitment.icon}</CommitmentIcon>
              <CommitmentTitle>{commitment.title}</CommitmentTitle>
              <CommitmentDescription>{commitment.description}</CommitmentDescription>
            </CommitmentCard>
          ))}
        </CommitmentsGrid>
      </Container>
    </CommitmentsContainer>
  );
};

export default CommitmentsPage;

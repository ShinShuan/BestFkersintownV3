import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const ComingNextContainer = styled.div`
  min-height: 100vh;
  background: var(--white);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-8) var(--spacing-4);
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-12);
`;

const PageTitle = styled.h1`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
`;

const PageSubtitle = styled.p`
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
`;

const ComingSoonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-8);
`;

const ComingSoonCard = styled(motion.div)`
  background: var(--gray-50);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
  }
`;

const CardImage = styled.div<{ $image: string }>`
  height: 250px;
  background: url(${props => props.$image}) center/cover;
  position: relative;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
`;

const CardContent = styled.div`
  padding: var(--spacing-6);
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`;

const CardDescription = styled.p`
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: var(--spacing-4);
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  color: var(--gray-500);
  font-size: var(--font-size-sm);
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
`;

const ComingNextPage: React.FC = () => {
  const { language } = useLanguage();

  const comingSoonItems = [
    {
      title: language === 'fr' ? 'Collection Printemps 2024' : 'Spring 2024 Collection',
      description: language === 'fr'
        ? 'Une collection inspirée par la nature, avec des couleurs vives et des matériaux durables.'
        : 'A collection inspired by nature, with vibrant colors and sustainable materials.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      releaseDate: language === 'fr' ? '15 Mars 2024' : 'March 15, 2024',
      category: language === 'fr' ? 'Nouveautés' : 'New Arrivals'
    },
    {
      title: language === 'fr' ? 'Ligne Accessoires Éco' : 'Eco Accessories Line',
      description: language === 'fr'
        ? 'Des accessoires fabriqués à partir de matériaux recyclés et de processus éthiques.'
        : 'Accessories made from recycled materials and ethical processes.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      releaseDate: language === 'fr' ? '1 Avril 2024' : 'April 1, 2024',
      category: language === 'fr' ? 'Accessoires' : 'Accessories'
    },
    {
      title: language === 'fr' ? 'Collaboration Artiste' : 'Artist Collaboration',
      description: language === 'fr'
        ? 'Une collaboration exclusive avec un artiste local pour créer des pièces uniques.'
        : 'An exclusive collaboration with a local artist to create unique pieces.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      releaseDate: language === 'fr' ? '20 Avril 2024' : 'April 20, 2024',
      category: language === 'fr' ? 'Édition Limitée' : 'Limited Edition'
    }
  ];

  return (
    <ComingNextContainer>
      <Container>
        <PageHeader>
          <PageTitle>
            {language === 'fr' ? 'Prochainement' : 'Coming Soon'}
          </PageTitle>
          <PageSubtitle>
            {language === 'fr'
              ? 'Découvrez nos prochaines collections et nouveautés exclusives'
              : 'Discover our upcoming collections and exclusive new arrivals'
            }
          </PageSubtitle>
        </PageHeader>

        <ComingSoonGrid>
          {comingSoonItems.map((item, index) => (
            <ComingSoonCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CardImage $image={item.image}>
                <CardOverlay>
                  {language === 'fr' ? 'Bientôt disponible' : 'Coming Soon'}
                </CardOverlay>
              </CardImage>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <CardMeta>
                  <MetaItem>
                    <Calendar size={16} />
                    {item.releaseDate}
                  </MetaItem>
                  <MetaItem>
                    <Star size={16} />
                    {item.category}
                  </MetaItem>
                </CardMeta>
              </CardContent>
            </ComingSoonCard>
          ))}
        </ComingSoonGrid>
      </Container>
    </ComingNextContainer>
  );
};

export default ComingNextPage;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, User, Clock } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const NewsContainer = styled.div`
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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-8);
`;

const NewsCard = styled(motion.article)`
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
  }
`;

const NewsImage = styled.div<{ $image: string }>`
  height: 200px;
  background: url(${props => props.$image}) center/cover;
`;

const NewsContent = styled.div`
  padding: var(--spacing-6);
`;

const NewsTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
  line-height: 1.3;
`;

const NewsExcerpt = styled.p`
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: var(--spacing-4);
`;

const NewsMeta = styled.div`
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

const NewsPage: React.FC = () => {
  const { language } = useLanguage();

  const newsItems = [
    {
      title: language === 'fr' ? 'Nouvelle Collection Printemps' : 'New Spring Collection',
      excerpt: language === 'fr'
        ? 'Découvrez notre nouvelle collection printemps inspirée par la nature et les couleurs vives.'
        : 'Discover our new spring collection inspired by nature and vibrant colors.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Marie Dubois',
      date: language === 'fr' ? '15 Mars 2024' : 'March 15, 2024',
      readTime: '5 min'
    },
    {
      title: language === 'fr' ? 'Nos Engagements Environnementaux' : 'Our Environmental Commitments',
      excerpt: language === 'fr'
        ? 'Nous renforçons nos engagements pour un avenir plus durable et éthique.'
        : 'We are strengthening our commitments for a more sustainable and ethical future.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Sophie Chen',
      date: language === 'fr' ? '10 Mars 2024' : 'March 10, 2024',
      readTime: '8 min'
    },
    {
      title: language === 'fr' ? 'Collaboration avec des Artistes Locaux' : 'Collaboration with Local Artists',
      excerpt: language === 'fr'
        ? 'Nous lançons une nouvelle initiative de collaboration avec des artistes locaux.'
        : 'We are launching a new collaboration initiative with local artists.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Thomas Martin',
      date: language === 'fr' ? '5 Mars 2024' : 'March 5, 2024',
      readTime: '6 min'
    }
  ];

  return (
    <NewsContainer>
      <Container>
        <PageHeader>
          <PageTitle>
            {language === 'fr' ? 'Actualités' : 'News'}
          </PageTitle>
        </PageHeader>

        <NewsGrid>
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <NewsImage $image={item.image} />
              <NewsContent>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsExcerpt>{item.excerpt}</NewsExcerpt>
                <NewsMeta>
                  <MetaItem>
                    <User size={16} />
                    {item.author}
                  </MetaItem>
                  <MetaItem>
                    <Calendar size={16} />
                    {item.date}
                  </MetaItem>
                  <MetaItem>
                    <Clock size={16} />
                    {item.readTime}
                  </MetaItem>
                </NewsMeta>
              </NewsContent>
            </NewsCard>
          ))}
        </NewsGrid>
      </Container>
    </NewsContainer>
  );
};

export default NewsPage;

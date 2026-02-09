import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import { useCart } from '../components/CartProvider';
import { useNotification } from '../components/NotificationProvider';

const GoodiesContainer = styled.div`
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

const GoodiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-8);
`;

const GoodieCard = styled(motion.div)`
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

const GoodieImage = styled.div<{ $image: string }>`
  height: 250px;
  background: url(${props => props.$image}) center/cover;
`;

const GoodieContent = styled.div`
  padding: var(--spacing-6);
`;

const GoodieTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`;

const GoodiePrice = styled.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--primary-medium);
  margin-bottom: var(--spacing-4);
`;

const AddToCartButton = styled.button`
  width: 100%;
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-3);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const GoodiesPage: React.FC = () => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const goodies = [
    {
      id: 'goodie1',
      title: language === 'fr' ? 'Tote Bag Éco' : 'Eco Tote Bag',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'goodie2',
      title: language === 'fr' ? 'Stylo Recyclé' : 'Recycled Pen',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'goodie3',
      title: language === 'fr' ? 'Mug Bambou' : 'Bamboo Mug',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const handleAddToCart = (goodie: any) => {
    addToCart({
      id: goodie.id,
      title: goodie.title,
      description: '',
      price: goodie.price,
      images: [goodie.image],
      category: 'goodies',
      tags: [],
      variants: [],
      available: true,
      featured: false,
      rating: 4.5,
      reviewCount: 0,
      likes: 0,
      isLiked: false,
      createdAt: '',
      updatedAt: ''
    });
    
    showNotification({
      type: 'success',
      title: language === 'fr' ? 'Goodie ajouté' : 'Goodie added',
      message: language === 'fr' 
        ? `${goodie.title} a été ajouté au panier`
        : `${goodie.title} has been added to cart`
    });
  };

  return (
    <GoodiesContainer>
      <Container>
        <PageHeader>
          <PageTitle>
            {language === 'fr' ? 'Goodies' : 'Goodies'}
          </PageTitle>
        </PageHeader>

        <GoodiesGrid>
          {goodies.map((goodie, index) => (
            <GoodieCard
              key={goodie.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GoodieImage $image={goodie.image} />
              <GoodieContent>
                <GoodieTitle>{goodie.title}</GoodieTitle>
                <GoodiePrice>€{goodie.price}</GoodiePrice>
                <AddToCartButton onClick={() => handleAddToCart(goodie)}>
                  <ShoppingBag size={16} />
                  {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                </AddToCartButton>
              </GoodieContent>
            </GoodieCard>
          ))}
        </GoodiesGrid>
      </Container>
    </GoodiesContainer>
  );
};

export default GoodiesPage;

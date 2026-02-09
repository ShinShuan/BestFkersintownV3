import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useCart } from './CartProvider';
import { useNotification } from './NotificationProvider';

const UpsellSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: var(--spacing-16) 0;
  color: var(--white);
  position: relative;
  overflow: hidden;
`;

const UpsellBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  position: relative;
  z-index: 1;
`;

const UpsellHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-12);
`;

const UpsellTitle = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-4);
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const UpsellSubtitle = styled.p`
  font-size: var(--font-size-xl);
  opacity: 0.9;
  margin-bottom: var(--spacing-6);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const OfferBadge = styled.div`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: var(--white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-full);
  font-weight: var(--font-bold);
  font-size: var(--font-size-sm);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-6);
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-8);
`;

const OfferCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-6);
  text-align: center;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const OfferIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-4);
  font-size: 2rem;
`;

const OfferTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-3);
`;

const OfferDescription = styled.p`
  opacity: 0.8;
  margin-bottom: var(--spacing-4);
  line-height: 1.6;
`;

const OfferPrice = styled.div`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-4);
  color: #ffd700;
`;

const OfferButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-bold);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const BundleSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 215, 0, 0.5);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-8);
  text-align: center;
  margin-bottom: var(--spacing-8);
`;

const BundleTitle = styled.h3`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-4);
  color: #ffd700;
`;

const BundleDescription = styled.p`
  font-size: var(--font-size-lg);
  opacity: 0.9;
  margin-bottom: var(--spacing-6);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const BundlePrice = styled.div`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-6);
  color: #ffd700;
`;

const BundleButton = styled.button`
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: var(--gray-900);
  border: none;
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-lg);
  font-weight: var(--font-bold);
  font-size: var(--font-size-lg);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3);
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-xl);
  }
`;

const SavingsBadge = styled.div`
  background: #10b981;
  color: var(--white);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-bold);
  display: inline-block;
  margin-left: var(--spacing-3);
`;

const HomeUpsell: React.FC = () => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const offers = [
    {
      id: 'offer-1',
      icon: '🎨',
      title: language === 'fr' ? 'Collection Pride' : 'Pride Collection',
      description: language === 'fr' 
        ? 'Découvrez notre collection exclusive avec des designs uniques'
        : 'Discover our exclusive collection with unique designs',
      price: '€24.99',
      originalPrice: '€34.99',
      products: [
        {
          id: 'pride-1',
          title: language === 'fr' ? 'T-shirt Pride Collection' : 'Pride Collection T-shirt',
          price: 24.99,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'tshirt'
        }
      ]
    },
    {
      id: 'offer-2',
      icon: '🌈',
      title: language === 'fr' ? 'Pack Rainbow' : 'Rainbow Pack',
      description: language === 'fr'
        ? '3 t-shirts assortis pour compléter votre garde-robe'
        : '3 matching t-shirts to complete your wardrobe',
      price: '€59.99',
      originalPrice: '€89.97',
      products: [
        {
          id: 'rainbow-1',
          title: language === 'fr' ? 'T-shirt Rainbow 1' : 'Rainbow T-shirt 1',
          price: 19.99,
          image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'tshirt'
        },
        {
          id: 'rainbow-2',
          title: language === 'fr' ? 'T-shirt Rainbow 2' : 'Rainbow T-shirt 2',
          price: 19.99,
          image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'tshirt'
        },
        {
          id: 'rainbow-3',
          title: language === 'fr' ? 'T-shirt Rainbow 3' : 'Rainbow T-shirt 3',
          price: 19.99,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'tshirt'
        }
      ]
    },
    {
      id: 'offer-3',
      icon: '💝',
      title: language === 'fr' ? 'Pack Cadeau' : 'Gift Pack',
      description: language === 'fr'
        ? 'Parfait pour offrir ou se faire plaisir'
        : 'Perfect for gifting or treating yourself',
      price: '€44.99',
      originalPrice: '€64.97',
      products: [
        {
          id: 'gift-1',
          title: language === 'fr' ? 'T-shirt Cadeau' : 'Gift T-shirt',
          price: 22.99,
          image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'tshirt'
        },
        {
          id: 'gift-2',
          title: language === 'fr' ? 'Accessoire Cadeau' : 'Gift Accessory',
          price: 21.99,
          image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'accessory'
        }
      ]
    }
  ];

  const handleAddOffer = (offer: any) => {
    offer.products.forEach((product: any) => {
      addToCart({
        id: product.id,
        title: product.title,
        description: '',
        price: product.price,
        images: [product.image],
        category: product.category,
        tags: [],
        variants: [],
        available: true,
        featured: false,
        rating: 4.5,
        reviewCount: 0,
        likes: 0,
        isLiked: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    });

    showNotification({
      type: 'success',
      title: language === 'fr' ? 'Offre ajoutée au panier' : 'Offer added to cart',
      message: language === 'fr'
        ? `${offer.title} a été ajouté au panier`
        : `${offer.title} has been added to cart`
    });
  };

  const handleAddBundle = () => {
    const bundleProducts = [
      {
        id: 'bundle-1',
        title: language === 'fr' ? 'T-shirt Collection 1' : 'Collection T-shirt 1',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'tshirt'
      },
      {
        id: 'bundle-2',
        title: language === 'fr' ? 'T-shirt Collection 2' : 'Collection T-shirt 2',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'tshirt'
      },
      {
        id: 'bundle-3',
        title: language === 'fr' ? 'T-shirt Collection 3' : 'Collection T-shirt 3',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'tshirt'
      }
    ];

    bundleProducts.forEach(product => {
      addToCart({
        id: product.id,
        title: product.title,
        description: '',
        price: product.price,
        images: [product.image],
        category: product.category,
        tags: [],
        variants: [],
        available: true,
        featured: false,
        rating: 4.5,
        reviewCount: 0,
        likes: 0,
        isLiked: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    });

    showNotification({
      type: 'success',
      title: language === 'fr' ? 'Lot ajouté au panier' : 'Bundle added to cart',
      message: language === 'fr'
        ? 'Lot de 3 t-shirts ajouté au panier - Économies de €20.00'
        : 'Bundle of 3 t-shirts added to cart - Save €20.00'
    });
  };

  return (
    <UpsellSection>
      <UpsellBackground />
      <Container>
        <UpsellHeader>
          <OfferBadge>
            <Sparkles size={16} />
            {language === 'fr' ? 'OFFRES SPÉCIALES' : 'SPECIAL OFFERS'}
          </OfferBadge>
          <UpsellTitle>
            {language === 'fr' 
              ? 'Découvrez nos offres exclusives !' 
              : 'Discover our exclusive offers!'
            }
          </UpsellTitle>
          <UpsellSubtitle>
            {language === 'fr'
              ? 'Profitez de nos packs et collections à prix réduits pour compléter votre garde-robe'
              : 'Take advantage of our packs and collections at reduced prices to complete your wardrobe'
            }
          </UpsellSubtitle>
        </UpsellHeader>

        <BundleSection>
          <BundleTitle>
            {language === 'fr' ? 'Lot Premium - 3 T-shirts' : 'Premium Bundle - 3 T-shirts'}
            <SavingsBadge>
              {language === 'fr' ? '-€20.00' : '-€20.00'}
            </SavingsBadge>
          </BundleTitle>
          <BundleDescription>
            {language === 'fr'
              ? 'Notre lot le plus populaire avec 3 t-shirts de notre collection exclusive. Économisez €20.00 !'
              : 'Our most popular bundle with 3 t-shirts from our exclusive collection. Save €20.00!'
            }
          </BundleDescription>
          <BundlePrice>€39.99</BundlePrice>
          <BundleButton onClick={handleAddBundle}>
            <ShoppingCart size={20} />
            {language === 'fr' ? 'Ajouter le lot premium' : 'Add premium bundle'}
          </BundleButton>
        </BundleSection>

        <OffersGrid>
          {offers.map((offer, index) => (
            <OfferCard
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <OfferIcon>{offer.icon}</OfferIcon>
              <OfferTitle>{offer.title}</OfferTitle>
              <OfferDescription>{offer.description}</OfferDescription>
              <OfferPrice>
                {offer.price}
                <span style={{ 
                  fontSize: 'var(--font-size-lg)', 
                  textDecoration: 'line-through', 
                  opacity: 0.7,
                  marginLeft: 'var(--spacing-2)'
                }}>
                  {offer.originalPrice}
                </span>
              </OfferPrice>
              <OfferButton onClick={() => handleAddOffer(offer)}>
                <ShoppingCart size={16} />
                {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
              </OfferButton>
            </OfferCard>
          ))}
        </OffersGrid>
      </Container>
    </UpsellSection>
  );
};

export default HomeUpsell;

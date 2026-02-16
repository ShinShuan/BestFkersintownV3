import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Heart, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import { useCart } from '../components/CartProvider';
import { useNotification } from '../components/NotificationProvider';
import HomeUpsell from '../components/HomeUpsell';
import Container from '../components/Container';
import { productService, NormalizedProduct } from '../services/bigcommerce';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://res.cloudinary.com/dy6rstttw/image/upload/v1755450580/fuckerintow_baniere_rkgglx.jpg') center/cover;
  z-index: 1;
  transform: translateZ(0);
  will-change: transform;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 var(--spacing-4);
  display: none;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-bold);
  color: var(--white);
  margin-bottom: var(--spacing-6);
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: var(--font-size-xl);
  color: var(--white);
  margin-bottom: var(--spacing-8);
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: var(--font-semibold);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-md);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background: linear-gradient(135deg, #b02a7a 0%, #FF7043 100%);
  }
`;

const SecondaryButton = styled.button`
  background: rgba(19, 18, 18, 0.66);
  color: var(--white);
  border: 2px solid var(--white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-full);
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  backdrop-filter: blur(10px);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: var(--white);
    color: var(--gray-900);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    text-shadow: none;
  }
`;

const IntroSection = styled.section`
  padding: var(--spacing-20) 0;
  background: var(--white);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(209, 50, 150, 0.3), transparent);
  }
`;



const IntroGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
  
  @media (max-width: 768px) {
    gap: var(--spacing-12);
  }
`;

const IntroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const IntroTitle = styled(motion.h2)`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  line-height: 1.3;
`;

const IntroText = styled(motion.p)`
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: var(--spacing-6);
`;

const IntroFeatures = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  color: var(--gray-700);
  font-weight: var(--font-medium);
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-sm);
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-8);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: var(--spacing-6);
  }
`;

const ProductCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.15);
  }
`;

const ProductImage = styled.div<{ $image: string }>`
  height: 300px;
  background: url(${props => props.$image}) center/cover;
  position: relative;
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    background-size: 200px 100%;
    animation: shimmer 1.5s infinite;
    opacity: 0;
    transition: opacity var(--transition-fast);
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ProductOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-fast);
  
  ${ProductCard}:hover & {
    opacity: 1;
  }
`;

const ProductActions = styled.div`
  display: flex;
  gap: var(--spacing-3);
`;

const ActionButton = styled.button`
  background: var(--white);
  border: none;
  border-radius: var(--radius-full);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-md);
  
  &:hover {
    background: #d13296;
    color: var(--white);
    transform: scale(1.1);
    box-shadow: var(--shadow-lg);
  }
`;

const ProductInfo = styled.div`
  padding: var(--spacing-6);
`;

const ProductTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`;

const ProductTitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: none;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-4);
`;

const CurrentPrice = styled.span`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: #d13296;
`;

const OriginalPrice = styled.span`
  font-size: var(--font-size-lg);
  color: var(--gray-400);
  text-decoration: line-through;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-4);
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

const StarIcon = styled(Star) <{ $filled: boolean }>`
  color: ${props => props.$filled ? 'var(--accent-yellow)' : 'var(--gray-300)'};
  fill: ${props => props.$filled ? 'var(--accent-yellow)' : 'none'};
`;

const ViewProductButton = styled(Link)`
  width: 100%;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
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
  text-decoration: none;
  
  &:hover {
    transform: translateY(-1px);
    background: linear-gradient(135deg, #b02a7a 0%, #FF7043 100%);
    box-shadow: var(--shadow-lg);
  }
  box-shadow: var(--shadow-md);
`;

const StatsSection = styled.section`
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-8);
  text-align: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
`;

const StatNumber = styled.div`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  color: #d13296;
`;

const StatLabel = styled.div`
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  font-weight: var(--font-medium);
`;

const SecondIntroSection = styled.section`
  padding: var(--spacing-20) 0;
  background: var(--gray-50);
`;

const SecondIntroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SecondIntroTitle = styled(motion.h2)`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  line-height: 1.3;
`;

const SecondIntroText = styled(motion.p)`
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: var(--spacing-6);
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: var(--font-semibold);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-md);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background: linear-gradient(135deg, #b02a7a 0%, #FF7043 100%);
  }
`;

const BannerStrip = styled.div`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  text-align: center;
  padding: var(--spacing-3) 0;
  font-weight: var(--font-semibold);
  font-size: var(--font-size-lg);
  box-shadow: var(--shadow-md);
`;

const ContentBelowBanner = styled.div`
  padding: var(--spacing-16) 0;
  background: var(--white);
  text-align: center;
`;

const ContentTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  line-height: 1.2;
`;

const ContentSubtitle = styled(motion.p)`
  font-size: var(--font-size-xl);
  color: var(--gray-700);
  margin-bottom: var(--spacing-8);
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentButtons = styled(motion.div)`
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
`;

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Charger les produits pour la page d'accueil
  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        setLoading(true);

        const response = await productService.getAllProducts();

        if (response.products && response.products.length > 0) {
          // Prendre les 3 premiers produits
          const transformedProducts = response.products.slice(0, 3).map((bcProduct: NormalizedProduct) => ({
            id: bcProduct.id.toString(),
            title: bcProduct.title,
            price: bcProduct.variants[0]?.price || 0,
            originalPrice: bcProduct.variants[0]?.compareAtPrice || undefined,
            image: bcProduct.images[0]?.src || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
            rating: 4.5,
            reviews: Math.floor(Math.random() * 500) + 100
          }));

          setFeaturedProducts(transformedProducts);
        } else {
          // Fallback avec des données mockées si pas de produits
          const fallbackProducts = [
            {
              id: '1',
              title: language === 'fr' ? 'T-shirt Pride Collection' : 'Pride Collection T-shirt',
              price: 29.99,
              originalPrice: 39.99,
              image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              rating: 4.5,
              reviews: 342
            },
            {
              id: '2',
              title: language === 'fr' ? 'Jean Inclusif' : 'Inclusive Jeans',
              price: 89.99,
              originalPrice: 119.99,
              image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              rating: 4.5,
              reviews: 567
            },
            {
              id: '3',
              title: language === 'fr' ? 'Sneakers Rainbow' : 'Rainbow Sneakers',
              price: 129.99,
              originalPrice: 159.99,
              image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              rating: 4.5,
              reviews: 234
            }
          ];
          setFeaturedProducts(fallbackProducts);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des produits vedettes:', error);
        // Utiliser les données mockées en cas d'erreur
        const fallbackProducts = [
          {
            id: '1',
            title: language === 'fr' ? 'T-shirt Pride Collection' : 'Pride Collection T-shirt',
            price: 29.99,
            originalPrice: 39.99,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            rating: 4.5,
            reviews: 342
          },
          {
            id: '2',
            title: language === 'fr' ? 'Jean Inclusif' : 'Inclusive Jeans',
            price: 89.99,
            originalPrice: 119.99,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            rating: 4.5,
            reviews: 567
          },
          {
            id: '3',
            title: language === 'fr' ? 'Sneakers Rainbow' : 'Rainbow Sneakers',
            price: 129.99,
            originalPrice: 159.99,
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            rating: 4.5,
            reviews: 234
          }
        ];
        setFeaturedProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProducts();
  }, [language]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      title: product.title,
      description: '',
      price: product.price,
      images: [product.image],
      category: '',
      tags: [],
      variants: [],
      available: true,
      featured: false,
      rating: product.rating,
      reviewCount: product.reviews,
      likes: 0,
      isLiked: false,
      createdAt: '',
      updatedAt: ''
    });

    showNotification({
      type: 'success',
      title: language === 'fr' ? 'Produit ajouté' : 'Product added',
      message: language === 'fr'
        ? `${product.title} a été ajouté au panier`
        : `${product.title} has been added to cart`
    });
  };

  const handleLike = (_productId: string) => {
    showNotification({
      type: 'info',
      title: language === 'fr' ? 'Favori ajouté' : 'Favorite added',
      message: language === 'fr'
        ? 'Produit ajouté aux favoris'
        : 'Product added to favorites'
    });
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroBackground />
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {language === 'fr'
              ? 'BestF.kersinTown - Mode Inclusive & Authentique'
              : 'BestF.kersinTown - Inclusive & Authentic Fashion'
            }
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {language === 'fr'
              ? 'Découvrez une mode qui vous ressemble vraiment ! Des vêtements audacieux et vibrants qui célèbrent votre authenticité. Rejoignez notre communauté inclusive et exprimez-vous sans limites.'
              : 'Discover fashion that truly reflects you! Bold and vibrant clothing that celebrates your authenticity. Join our inclusive community and express yourself without limits.'
            }
          </HeroSubtitle>
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PrimaryButton to="/products">
              {language === 'fr' ? 'Découvrir' : 'Discover'}
              <ArrowRight size={20} />
            </PrimaryButton>
            <SecondaryButton>
              <Play size={20} />
              {language === 'fr' ? 'Voir la vidéo' : 'Watch video'}
            </SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <BannerStrip>
        {language === 'fr' ? 'Best F.kers in Town Depuis 2025...' : 'Best F.kers in Town Since 2025...'}
      </BannerStrip>

      <ContentBelowBanner>
        <Container>
          <ContentTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bft-title" style={{ display: 'block', marginBottom: '0.5rem' }}>BFT</span>
            {language === 'fr'
              ? <>Best F.kers <span className="brand-in">in</span> Town - Mode Inclusive & Authentique</>
              : <>Best F.kers <span className="brand-in">in</span> Town - Inclusive & Authentic Fashion</>
            }
          </ContentTitle>
          <ContentSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {language === 'fr'
              ? 'Découvrez une mode qui vous ressemble vraiment ! Des vêtements audacieux et vibrants qui célèbrent votre authenticité. Rejoignez notre communauté inclusive et exprimez-vous sans limites.'
              : 'Discover fashion that truly reflects you! Bold and vibrant clothing that celebrates your authenticity. Join our inclusive community and express yourself without limits.'
            }
          </ContentSubtitle>
          <ContentButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PrimaryButton to="/products">
              {language === 'fr' ? 'Découvrir' : 'Discover'}
              <ArrowRight size={20} />
            </PrimaryButton>
            <SecondaryButton>
              <Play size={20} />
              {language === 'fr' ? 'Voir la vidéo' : 'Watch video'}
            </SecondaryButton>
          </ContentButtons>
        </Container>
      </ContentBelowBanner>

      <IntroSection>
        <Container>
          <IntroGrid>
            <IntroContent>
              <IntroTitle
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {language === 'fr'
                  ? <>Pourquoi Vous Allez Adorer <span className="bft-title">BFT</span> ?</>
                  : <>Why You'll Love <span className="bft-title">BFT</span>?</>
                }
              </IntroTitle>
              <IntroText
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {language === 'fr'
                  ? 'Parce que vous méritez de vous sentir incroyable dans vos vêtements ! Nous créons chaque pièce avec votre bonheur en tête. Des designs qui vous font briller, des couleurs qui vous donnent confiance, et une qualité qui vous accompagne partout. Vous n\'êtes pas juste un client, vous faites partie de notre famille.'
                  : 'Because you deserve to feel amazing in your clothes! We create each piece with your happiness in mind. Designs that make you shine, colors that give you confidence, and quality that follows you everywhere. You\'re not just a customer, you\'re part of our family.'
                }
              </IntroText>
              <IntroFeatures
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Feature>
                  <FeatureIcon>🌈</FeatureIcon>
                  <span>
                    {language === 'fr' ? 'Créé pour VOUS, par des gens comme VOUS' : 'Created for YOU, by people like YOU'}
                  </span>
                </Feature>
                <Feature>
                  <FeatureIcon>✨</FeatureIcon>
                  <span>
                    {language === 'fr' ? 'Des designs qui vous font briller' : 'Designs that make you shine'}
                  </span>
                </Feature>
                <Feature>
                  <FeatureIcon>💚</FeatureIcon>
                  <span>
                    {language === 'fr' ? 'Qualité qui vous accompagne partout' : 'Quality that follows you everywhere'}
                  </span>
                </Feature>
              </IntroFeatures>
            </IntroContent>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <IntroTitle style={{ marginBottom: 'var(--spacing-8)' }}>
                {language === 'fr' ? 'Découvrez Votre Style Unique' : 'Discover Your Unique Style'}
              </IntroTitle>
            </motion.div>
            <ProductGrid>
              {loading ? (
                // État de chargement
                Array.from({ length: 3 }).map((_, index) => (
                  <ProductCard
                    key={`loading-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProductImage $image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop">
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          border: '4px solid #f3f3f3',
                          borderTop: '4px solid #d13296',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></div>
                      </div>
                    </ProductImage>
                    <ProductInfo>
                      <div style={{
                        height: '20px',
                        background: '#f0f0f0',
                        marginBottom: '8px',
                        borderRadius: '4px',
                        animation: 'pulse 1.5s ease-in-out infinite'
                      }}></div>
                      <div style={{
                        height: '16px',
                        background: '#f0f0f0',
                        marginBottom: '16px',
                        borderRadius: '4px',
                        width: '60%',
                        animation: 'pulse 1.5s ease-in-out infinite'
                      }}></div>
                    </ProductInfo>
                  </ProductCard>
                ))
              ) : (
                // Produits chargés
                featuredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProductImage $image={product.image}>
                      <ProductOverlay>
                        <ProductActions>
                          <ActionButton onClick={() => handleLike(product.id)}>
                            <Heart size={20} />
                          </ActionButton>
                          <ActionButton onClick={() => handleAddToCart(product)}>
                            <ShoppingBag size={20} />
                          </ActionButton>
                        </ProductActions>
                      </ProductOverlay>
                    </ProductImage>
                    <ProductInfo>
                      <ProductTitleLink to={`/product/${product.id}`}>
                        <ProductTitle>{product.title}</ProductTitle>
                      </ProductTitleLink>
                      <ProductRating>
                        <Stars>
                          {[1, 2, 3, 4, 5].map(star => (
                            <StarIcon
                              key={star}
                              size={16}
                              $filled={star <= product.rating}
                            />
                          ))}
                        </Stars>
                        <span>({product.reviews})</span>
                      </ProductRating>
                      <ViewProductButton to={`/product/${product.id}`}>
                        <ShoppingBag size={16} />
                        {language === 'fr' ? 'Voir le produit' : 'View product'}
                      </ViewProductButton>
                    </ProductInfo>
                  </ProductCard>
                ))
              )}
            </ProductGrid>
          </IntroGrid>
        </Container>
      </IntroSection>

      <SecondIntroSection>
        <Container>
          <SecondIntroContent>
            <SecondIntroTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {language === 'fr'
                ? 'Prêt(e) à Transformer Votre Garde-Robe ?'
                : 'Ready to Transform Your Wardrobe?'
              }
            </SecondIntroTitle>
            <SecondIntroText
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {language === 'fr'
                ? <>Chaque piece que vous choisissez raconte votre histoire. Nos vetements ne sont pas juste des vetements, ce sont des declarations de qui vous etes vraiment. Rejoignez des milliers de personnes qui ont deja trouve leur style unique avec <span className="bft-title">BFT</span>.</>
                : <>Every piece you choose tells your story. Our clothes aren't just clothes, they're declarations of who you truly are. Join thousands of people who have already found their unique style with <span className="bft-title">BFT</span>.</>
              }
            </SecondIntroText>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CTAButton to="/products">
                {language === 'fr' ? 'Découvrir Toute la Collection' : 'Discover the Full Collection'}
                <ArrowRight size={20} />
              </CTAButton>
            </motion.div>
          </SecondIntroContent>
        </Container>
      </SecondIntroSection>

      <StatsSection>
        <Container>
          <StatsGrid>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <StatNumber>15K+</StatNumber>
              <StatLabel>
                {language === 'fr' ? 'Membres de la communauté' : 'Community Members'}
              </StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatNumber>200+</StatNumber>
              <StatLabel>
                {language === 'fr' ? 'Designs exclusifs' : 'Exclusive Designs'}
              </StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatNumber>98%</StatNumber>
              <StatLabel>
                {language === 'fr' ? 'Satisfaction client' : 'Customer Satisfaction'}
              </StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StatNumber>24h</StatNumber>
              <StatLabel>
                {language === 'fr' ? 'Livraison express' : 'Express Delivery'}
              </StatLabel>
            </StatItem>
          </StatsGrid>
        </Container>
      </StatsSection>
    </HomeContainer>
  );
};

export default HomePage;

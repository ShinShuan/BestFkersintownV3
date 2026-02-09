import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, ArrowRight, Tag } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useCart } from './CartProvider';
import { useNotification } from './NotificationProvider';

const UpsellSection = styled.section`
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  border-radius: var(--radius-2xl);
  padding: var(--spacing-6);
  margin: var(--spacing-6) 0;
`;

const UpsellHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-6);
`;

const UpsellTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: #92400e;
  margin-bottom: var(--spacing-2);
`;

const UpsellSubtitle = styled.p`
  color: #92400e;
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-4);
`;

const OfferBadge = styled.div`
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-full);
  font-weight: var(--font-bold);
  font-size: var(--font-size-sm);
  display: inline-block;
  margin-bottom: var(--spacing-4);
`;

const BundleOffer = styled.div`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
  text-align: center;
  box-shadow: var(--shadow-md);
`;

const BundleTitle = styled.h4`
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`;

const BundleDescription = styled.p`
  color: var(--gray-600);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
`;

const BundlePrice = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: #d13296;
  margin-bottom: var(--spacing-4);
`;

const BundleButton = styled.button`
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
  margin-top: var(--spacing-6);
`;

const ProductCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const ProductImage = styled.div<{ $image: string }>`
  height: 120px;
  background: url(${props => props.$image}) center/cover;
  position: relative;
`;

const ProductOverlay = styled.div`
  position: absolute;
  top: var(--spacing-2);
  right: var(--spacing-2);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--white);
    transform: scale(1.1);
  }
`;

const ProductInfo = styled.div`
  padding: var(--spacing-3);
`;

const ProductTitle = styled.h5`
  font-size: var(--font-size-sm);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
  line-height: 1.3;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-2);
`;

const CurrentPrice = styled.span`
  font-size: var(--font-size-sm);
  font-weight: var(--font-bold);
  color: #d13296;
`;

const OriginalPrice = styled.span`
  font-size: var(--font-size-xs);
  color: var(--gray-400);
  text-decoration: line-through;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  margin-bottom: var(--spacing-2);
`;

const Stars = styled.div`
  display: flex;
  gap: 1px;
`;

const StarIcon = styled(Star)<{ $filled: boolean }>`
  color: ${props => props.$filled ? '#FFD700' : 'var(--gray-300)'};
  fill: ${props => props.$filled ? '#FFD700' : 'none'};
  width: 12px;
  height: 12px;
`;

const AddButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
  font-size: var(--font-size-xs);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const SavingsBadge = styled.div`
  background: #10b981;
  color: var(--white);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-bold);
  display: inline-block;
  margin-left: var(--spacing-2);
`;

interface CartUpsellProps {
  cartItems: any[];
}

const CartUpsell: React.FC<CartUpsellProps> = ({ cartItems }) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  // Vérifier si l'utilisateur a déjà des t-shirts dans son panier
  const hasTshirts = cartItems.some(item => 
    item.category?.toLowerCase().includes('tshirt') || 
    item.title?.toLowerCase().includes('t-shirt')
  );

  // Si l'utilisateur n'a pas de t-shirts, ne pas afficher l'upsell
  if (!hasTshirts) {
    return null;
  }

  // Produits d'upsell recommandés
  const upsellProducts = [
    {
      id: 'cart-upsell-1',
      title: language === 'fr' ? 'T-shirt Pride Collection' : 'Pride Collection T-shirt',
      price: 24.99,
      originalPrice: 34.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      rating: 4.5,
      category: 'tshirt'
    },
    {
      id: 'cart-upsell-2',
      title: language === 'fr' ? 'T-shirt Inclusif' : 'Inclusive T-shirt',
      price: 22.99,
      originalPrice: 29.99,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      rating: 4.5,
      category: 'tshirt'
    },
    {
      id: 'cart-upsell-3',
      title: language === 'fr' ? 'T-shirt Rainbow' : 'Rainbow T-shirt',
      price: 26.99,
      originalPrice: 32.99,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      rating: 4.5,
      category: 'tshirt'
    }
  ];

  // Calculer l'offre de lot
  const bundlePrice = 59.99;
  const individualPrice = upsellProducts.reduce((sum, product) => sum + product.price, 0);
  const savings = individualPrice - bundlePrice;

  const handleAddToCart = (product: any) => {
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
      rating: product.rating,
      reviewCount: 0,
      likes: 0,
      isLiked: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    showNotification({
      type: 'success',
      title: language === 'fr' ? 'Ajouté au panier' : 'Added to cart',
      message: language === 'fr' 
        ? `${product.title} a été ajouté au panier`
        : `${product.title} has been added to cart`
    });
  };

  const handleBundleAdd = () => {
    upsellProducts.forEach(product => {
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
        rating: product.rating,
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
        ? `Lot de 3 t-shirts ajouté au panier - Économies de €${savings.toFixed(2)}`
        : `Bundle of 3 t-shirts added to cart - Save €${savings.toFixed(2)}`
    });
  };

  const renderStars = (rating: number) => {
    return (
      <Stars>
        {[1, 2, 3, 4, 5].map(star => (
          <StarIcon
            key={star}
            $filled={star <= rating}
          />
        ))}
      </Stars>
    );
  };

  return (
    <UpsellSection>
      <UpsellHeader>
        <OfferBadge>
          <Tag size={12} />
          {language === 'fr' ? 'OFFRE SPÉCIALE' : 'SPECIAL OFFER'}
        </OfferBadge>
        <UpsellTitle>
          {language === 'fr' 
            ? 'Complétez votre collection !' 
            : 'Complete your collection!'
          }
        </UpsellTitle>
        <UpsellSubtitle>
          {language === 'fr'
            ? 'Ajoutez ces t-shirts assortis et économisez sur votre commande'
            : 'Add these matching t-shirts and save on your order'
          }
        </UpsellSubtitle>
      </UpsellHeader>

      <BundleOffer>
        <BundleTitle>
          {language === 'fr' ? 'Lot de 3 T-shirts' : 'Bundle of 3 T-shirts'}
          <SavingsBadge>
            {language === 'fr' ? `-€${savings.toFixed(2)}` : `-€${savings.toFixed(2)}`}
          </SavingsBadge>
        </BundleTitle>
        <BundleDescription>
          {language === 'fr'
            ? `Économisez €${savings.toFixed(2)} en achetant le lot complet`
            : `Save €${savings.toFixed(2)} when buying the complete bundle`
          }
        </BundleDescription>
        <BundlePrice>€{bundlePrice}</BundlePrice>
        <BundleButton onClick={handleBundleAdd}>
          <ShoppingCart size={16} />
          {language === 'fr' ? 'Ajouter le lot' : 'Add bundle'}
        </BundleButton>
      </BundleOffer>

      <ProductsGrid>
        {upsellProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductImage $image={product.image}>
              <ProductOverlay>
                <Heart size={14} />
              </ProductOverlay>
            </ProductImage>
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>
                <CurrentPrice>€{product.price}</CurrentPrice>
                {product.originalPrice && (
                  <OriginalPrice>€{product.originalPrice}</OriginalPrice>
                )}
              </ProductPrice>
              <ProductRating>
                {renderStars(product.rating)}
                <span style={{ fontSize: '10px', color: 'var(--gray-500)' }}>
                  ({product.rating})
                </span>
              </ProductRating>
              <AddButton onClick={() => handleAddToCart(product)}>
                <ShoppingCart size={12} />
                {language === 'fr' ? 'Ajouter' : 'Add'}
              </AddButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </UpsellSection>
  );
};

export default CartUpsell;

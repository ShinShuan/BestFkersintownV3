import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  Heart,
  ShoppingCart,
  Star,
  ChevronLeft,
  ChevronRight,
  Package,
  Truck,
  Shield,
  ArrowLeft
} from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import { useCart } from '../components/CartProvider';
import { useNotification } from '../components/NotificationProvider';
import Container from '../components/Container';
import LoadingSpinner from '../components/LoadingSpinner';
import { productService, NormalizedProduct as ProductType } from '../services/bigcommerce';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<ProductType['variants'][0] | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      if (!productId) return;

      try {
        setLoading(true);
        const productData = await productService.getProductById(productId);
        setProduct(productData);

        // Sélectionner la première variante par défaut
        if (productData.variants.length > 0) {
          setSelectedVariant(productData.variants[0]);

          // Initialiser les options sélectionnées
          const initialOptions: Record<string, string> = {};
          productData.options.forEach(option => {
            if (option.values.length > 0) {
              initialOptions[option.name] = option.values[0];
            }
          });
          setSelectedOptions(initialOptions);
        }
      } catch (error) {
        console.error('Erreur lors du chargement du produit:', error);
        showNotification({
          type: 'error',
          title: language === 'fr' ? 'Erreur' : 'Error',
          message: language === 'fr'
            ? 'Impossible de charger le produit'
            : 'Unable to load product'
        });
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId, language, showNotification]);

  // Mettre à jour la variante sélectionnée quand les options changent
  useEffect(() => {
    if (!product) return;

    const matchingVariant = product.variants.find(variant => {
      return variant.options.every(option =>
        selectedOptions[option.name] === option.value
      );
    });

    if (matchingVariant) {
      setSelectedVariant(matchingVariant);
    }
  }, [selectedOptions, product]);

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value
    }));
  };

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartProduct = {
      id: product.id.toString().split('/').pop() || product.id.toString(),
      title: product.title,
      price: selectedVariant.price,
      images: product.images.map(img => img.src),
      variants: [{
        id: selectedVariant.id,
        title: selectedVariant.title,
        price: selectedVariant.price,
        compareAtPrice: selectedVariant.compareAtPrice || undefined,
        available: selectedVariant.available,
        options: selectedVariant.options
      }],
      description: product.description || '',
      category: product.productType || 'Général',
      tags: product.tags || [],
      available: selectedVariant.available,
      featured: false,
      rating: 4.5,
      reviewCount: Math.floor(Math.random() * 100) + 10,
      likes: 0,
      isLiked: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    addToCart(cartProduct, quantity, selectedVariant.id);

    showNotification({
      type: 'success',
      title: language === 'fr' ? 'Ajouté au panier' : 'Added to cart',
      message: language === 'fr'
        ? `${product.title} a été ajouté au panier`
        : `${product.title} has been added to cart`
    });
  };

  const nextImage = () => {
    if (!product) return;
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!product) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  if (loading) {
    return (
      <PageContainer>
        <Container>
          <LoadingSpinner
            size="large"
            text={language === 'fr' ? 'Chargement du produit...' : 'Loading product...'}
          />
        </Container>
      </PageContainer>
    );
  }

  if (!product) {
    return (
      <PageContainer>
        <Container>
          <EmptyState>
            <EmptyIcon>😔</EmptyIcon>
            <EmptyTitle>
              {language === 'fr' ? 'Produit non trouvé' : 'Product not found'}
            </EmptyTitle>
            <EmptyText>
              {language === 'fr'
                ? 'Le produit que vous recherchez n\'existe pas ou a été supprimé.'
                : 'The product you are looking for does not exist or has been removed.'
              }
            </EmptyText>
          </EmptyState>
        </Container>
      </PageContainer>
    );
  }

  const currentImage = product.images[currentImageIndex]?.src || '';

  return (
    <PageContainer>
      <Container>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
          {language === 'fr' ? 'Retour' : 'Back'}
        </BackButton>

        <ProductLayout>
          {/* Galerie d'images */}
          <ImageSection>
            <ImageContainer>
              <ProductImage src={currentImage} alt={product.title} />
              <ImageOverlay>
                <ActionButton onClick={() => setIsLiked(!isLiked)}>
                  <Heart size={24} fill={isLiked ? '#d13296' : 'none'} />
                </ActionButton>
              </ImageOverlay>

              {product.images.length > 1 && (
                <>
                  <ImageNavButton onClick={prevImage} $position="left">
                    <ChevronLeft size={24} />
                  </ImageNavButton>
                  <ImageNavButton onClick={nextImage} $position="right">
                    <ChevronRight size={24} />
                  </ImageNavButton>

                  <ImageDots>
                    {product.images.map((_, index) => (
                      <ImageDot
                        key={index}
                        $isActive={index === currentImageIndex}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </ImageDots>
                </>
              )}
            </ImageContainer>

            {product.images.length > 1 && (
              <ThumbnailGrid>
                {product.images.map((image, index) => (
                  <Thumbnail
                    key={index}
                    src={image.src}
                    alt={`${product.title} - Image ${index + 1}`}
                    $isActive={index === currentImageIndex}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </ThumbnailGrid>
            )}
          </ImageSection>

          {/* Informations produit */}
          <ProductInfo>
            <ProductHeader>
              <ProductCategory>{product.productType || 'Général'}</ProductCategory>
              <ProductTitle>{product.title}</ProductTitle>

              <ProductRating>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < 4 ? '#FFD700' : 'none'}
                    stroke="#FFD700"
                  />
                ))}
                <RatingText>({Math.floor(Math.random() * 100) + 10} avis)</RatingText>
              </ProductRating>
            </ProductHeader>

            <ProductDescription>
              {product.description ? (
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              ) : (
                language === 'fr'
                  ? 'Aucune description disponible pour ce produit.'
                  : 'No description available for this product.'
              )}
            </ProductDescription>

            {/* Options du produit */}
            {product.options.map(option => (
              <OptionGroup key={option.id}>
                <OptionLabel>{option.name}</OptionLabel>
                <OptionButtons>
                  {option.values.map(value => (
                    <OptionButton
                      key={value}
                      $isSelected={selectedOptions[option.name] === value}
                      onClick={() => handleOptionChange(option.name, value)}
                    >
                      {value}
                    </OptionButton>
                  ))}
                </OptionButtons>
              </OptionGroup>
            ))}

            {/* Prix et quantité */}
            <PriceSection>
              {selectedVariant && (
                <>
                  <PriceContainer>
                    <CurrentPrice>€{selectedVariant.price.toFixed(2)}</CurrentPrice>
                    {selectedVariant.compareAtPrice && (
                      <OriginalPrice>€{selectedVariant.compareAtPrice.toFixed(2)}</OriginalPrice>
                    )}
                  </PriceContainer>

                  <QuantitySelector>
                    <QuantityLabel>{language === 'fr' ? 'Quantité' : 'Quantity'}</QuantityLabel>
                    <QuantityControls>
                      <QuantityButton
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        disabled={quantity <= 1}
                      >
                        -
                      </QuantityButton>
                      <QuantityInput
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                      />
                      <QuantityButton
                        onClick={() => setQuantity(prev => prev + 1)}
                      >
                        +
                      </QuantityButton>
                    </QuantityControls>
                  </QuantitySelector>
                </>
              )}
            </PriceSection>

            {/* Bouton d'ajout au panier */}
            <AddToCartButton
              onClick={handleAddToCart}
              disabled={!selectedVariant?.available}
            >
              <ShoppingCart size={20} />
              {selectedVariant?.available
                ? (language === 'fr' ? 'Ajouter au panier' : 'Add to cart')
                : (language === 'fr' ? 'Rupture de stock' : 'Out of stock')
              }
            </AddToCartButton>

            {/* Informations supplémentaires */}
            <ProductFeatures>
              <FeatureItem>
                <Package size={20} />
                <FeatureText>
                  {language === 'fr' ? 'Livraison gratuite' : 'Free shipping'}
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <Truck size={20} />
                <FeatureText>
                  {language === 'fr' ? 'Livraison rapide' : 'Fast delivery'}
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <Shield size={20} />
                <FeatureText>
                  {language === 'fr' ? 'Garantie 30 jours' : '30-day warranty'}
                </FeatureText>
              </FeatureItem>
            </ProductFeatures>
          </ProductInfo>
        </ProductLayout>
      </Container>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  padding: var(--spacing-8) 0;
  background: var(--gray-50);
  min-height: 100vh;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background: none;
  border: none;
  color: var(--gray-600);
  font-size: var(--font-size-base);
  cursor: pointer;
  margin-bottom: var(--spacing-6);
  transition: color var(--transition-fast);
  
  &:hover {
    color: #d13296;
  }
`;

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--white);
  box-shadow: var(--shadow-sm);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  opacity: 0;
  transition: opacity var(--transition-normal);

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const ActionButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--gray-700);

  &:hover {
    background: var(--white);
    transform: scale(1.1);
    color: #d13296;
  }
`;

const ImageNavButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.$position}: var(--spacing-4);
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--gray-700);

  &:hover {
    background: var(--white);
    transform: translateY(-50%) scale(1.1);
    color: #d13296;
  }
`;

const ImageDots = styled.div`
  position: absolute;
  bottom: var(--spacing-4);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-2);
`;

const ImageDot = styled.button<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$isActive ? '#d13296' : 'rgba(255, 255, 255, 0.6)'};
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background: ${props => props.$isActive ? '#d13296' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: var(--spacing-2);
`;

const Thumbnail = styled.img<{ $isActive: boolean }>`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  cursor: pointer;
  border: 2px solid ${props => props.$isActive ? '#d13296' : 'transparent'};
  transition: all var(--transition-fast);

  &:hover {
    border-color: #d13296;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
`;

const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const ProductCategory = styled.div`
  font-size: var(--font-size-sm);
  color: #d13296;
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductTitle = styled.h1`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  line-height: 1.2;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

const RatingText = styled.span`
  font-size: var(--font-size-sm);
  color: var(--gray-500);
`;

const ProductDescription = styled.p`
  font-size: var(--font-size-base);
  color: var(--gray-600);
  line-height: 1.6;
`;

const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const OptionLabel = styled.label`
  font-weight: var(--font-semibold);
  color: var(--gray-700);
  font-size: var(--font-size-sm);
`;

const OptionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
`;

const OptionButton = styled.button<{ $isSelected: boolean }>`
  padding: var(--spacing-2) var(--spacing-4);
  border: 2px solid ${props => props.$isSelected ? '#d13296' : 'var(--gray-200)'};
  background: ${props => props.$isSelected ? '#d13296' : 'transparent'};
  color: ${props => props.$isSelected ? 'white' : 'var(--gray-700)'};
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    border-color: #d13296;
    background: ${props => props.$isSelected ? '#d13296' : 'rgba(209, 50, 150, 0.1)'};
  }
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
`;

const CurrentPrice = styled.span`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: #d13296;
`;

const OriginalPrice = styled.span`
  font-size: var(--font-size-xl);
  color: var(--gray-400);
  text-decoration: line-through;
`;

const QuantitySelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const QuantityLabel = styled.label`
  font-weight: var(--font-medium);
  color: var(--gray-700);
  font-size: var(--font-size-sm);
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  max-width: 150px;
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid var(--gray-200);
  background: var(--white);
  color: var(--gray-700);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover:not(:disabled) {
    border-color: #d13296;
    color: #d13296;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityInput = styled.input`
  flex: 1;
  height: 40px;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  text-align: center;
  font-size: var(--font-size-base);
  font-weight: var(--font-medium);

  &:focus {
    outline: none;
    border-color: #d13296;
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: var(--spacing-4);
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
    transform: none;
  }
`;

const ProductFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background: var(--gray-50);
  border-radius: var(--radius-lg);
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  color: var(--gray-600);
`;

const FeatureText = styled.span`
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-12);
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: var(--spacing-4);
`;

const EmptyTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`;

const EmptyText = styled.p`
  color: var(--gray-600);
  max-width: 400px;
  margin: 0 auto;
`;

export default ProductDetailPage;

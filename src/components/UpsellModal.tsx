import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Star, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useCart } from './CartProvider';
import { useNotification } from './NotificationProvider';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-4);
`;

const ModalContent = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-2xl);
  max-width: 400px;
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  position: relative;
  box-shadow: var(--shadow-2xl);
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  background: var(--gray-100);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  z-index: 10;
  
  &:hover {
    background: var(--gray-200);
    transform: scale(1.1);
  }
`;

const ModalHeader = styled.div`
  padding: var(--spacing-8) var(--spacing-6) var(--spacing-4);
  text-align: center;
  border-bottom: 1px solid var(--gray-100);
`;

const ModalTitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`;

const ModalSubtitle = styled.p`
  color: var(--gray-600);
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
  padding: var(--spacing-6);
`;

const ProductCard = styled.div`
  background: var(--white);
  border: 2px solid var(--gray-100);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-normal);
  cursor: pointer;
  
  &:hover {
    border-color: #d13296;
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const ProductImage = styled.div<{ $image: string }>`
  height: 150px;
  background: url(${props => props.$image}) center/cover;
  position: relative;
`;

const ProductOverlay = styled.div`
  position: absolute;
  top: var(--spacing-2);
  right: var(--spacing-2);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 32px;
  height: 32px;
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
  padding: var(--spacing-4);
`;

const ProductTitle = styled.h3`
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
  margin-bottom: var(--spacing-3);
`;

const CurrentPrice = styled.span`
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  color: #d13296;
`;

const OriginalPrice = styled.span`
  font-size: var(--font-size-sm);
  color: var(--gray-400);
  text-decoration: line-through;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  margin-bottom: var(--spacing-3);
`;

const Stars = styled.div`
  display: flex;
  gap: 1px;
`;

const StarIcon = styled(Star) <{ $filled: boolean }>`
  color: ${props => props.$filled ? '#FFD700' : 'var(--gray-300)'};
  fill: ${props => props.$filled ? '#FFD700' : 'none'};
  width: 14px;
  height: 14px;
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
  gap: var(--spacing-2);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const ModalFooter = styled.div`
  padding: var(--spacing-6);
  border-top: 1px solid var(--gray-100);
  text-align: center;
`;

const SkipButton = styled.button`
  background: none;
  border: none;
  color: var(--gray-500);
  font-size: var(--font-size-sm);
  cursor: pointer;
  text-decoration: underline;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--gray-700);
  }
`;

const BundleOffer = styled.div`
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  border-radius: var(--radius-xl);
  padding: var(--spacing-4);
  margin: var(--spacing-4);
  text-align: center;
`;

const BundleTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  color: #92400e;
  margin-bottom: var(--spacing-2);
`;

const BundleDescription = styled.p`
  color: #92400e;
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-3);
`;

const BundlePrice = styled.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: #d13296;
  margin-bottom: var(--spacing-3);
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

interface UpsellProduct {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category: string;
}

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProduct?: UpsellProduct;
  cartItems?: any[];
}

const UpsellModal: React.FC<UpsellModalProps> = ({
  isOpen,
  onClose,
  currentProduct,
  cartItems = []
}) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  // Produits d'upsell recommandés - utiliser les vrais produits Shopify
  const [upsellProducts, setUpsellProducts] = useState<UpsellProduct[]>([]);
  const [loading, setLoading] = useState(true);

  // Charger les produits disponibles depuis Shopify
  useEffect(() => {
    const loadUpsellProducts = async () => {
      try {
        setLoading(true);

        // Importer le service BigCommerce
        const { productService } = await import('../services/bigcommerce');
        const response = await productService.getAllProducts();

        if (response.products && response.products.length > 0) {
          // Filtrer les produits disponibles (en stock) et prendre les 3 premiers
          const availableProducts = response.products
            .filter((product: any) => {
              // Vérifier si le produit a des variantes en stock
              return product.variants && product.variants.some((variant: any) =>
                variant.inventoryQuantity > 0 || variant.available
              );
            })
            .slice(0, 3)
            .map((shopifyProduct: any) => ({
              id: shopifyProduct.id.toString().split('/').pop() || shopifyProduct.id.toString(),
              title: shopifyProduct.title,
              price: parseFloat(shopifyProduct.variants[0]?.price || '0'),
              originalPrice: shopifyProduct.variants[0]?.compareAtPrice ?
                parseFloat(shopifyProduct.variants[0].compareAtPrice) : undefined,
              image: shopifyProduct.images[0]?.src || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
              rating: 4.5,
              category: shopifyProduct.productType || 'tshirt'
            }));

          setUpsellProducts(availableProducts);
        } else {
          // Fallback avec des produits fictifs si pas de produits Shopify
          setUpsellProducts([]);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des produits d\'upsell:', error);
        setUpsellProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadUpsellProducts();
  }, [language]);

  // Calculer l'offre de lot seulement si on a des produits
  const bundlePrice = 59.99;
  const individualPrice = upsellProducts.length > 0 ? upsellProducts.reduce((sum, product) => sum + product.price, 0) : 0;
  const savings = individualPrice - bundlePrice;

  const handleAddToCart = async (product: UpsellProduct) => {
    try {
      // Vérifier que le produit est toujours disponible en stock
      const { productService } = await import('../services/bigcommerce');
      const response = await productService.getAllProducts();

      const productFound = response.products?.find((p: any) =>
        p.id.toString() === product.id
      );

      if (!productFound) {
        showNotification({
          type: 'error',
          title: language === 'fr' ? 'Produit non disponible' : 'Product not available',
          message: language === 'fr'
            ? 'Ce produit n\'est plus disponible'
            : 'This product is no longer available'
        });
        return;
      }

      // Vérifier le stock
      const hasStock = productFound.variants && productFound.variants.some((variant: any) =>
        variant.inventoryQuantity > 0 || variant.available
      );

      if (!hasStock) {
        showNotification({
          type: 'error',
          title: language === 'fr' ? 'Rupture de stock' : 'Out of stock',
          message: language === 'fr'
            ? 'Ce produit est en rupture de stock'
            : 'This product is out of stock'
        });
        return;
      }

      // Ajouter au panier avec les vraies données
      addToCart({
        id: product.id,
        title: product.title,
        description: productFound.description || '',
        price: product.price,
        images: [product.image],
        category: productFound.productType || product.category,
        tags: productFound.tags || [],
        variants: productFound.variants || [],
        available: hasStock,
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
    } catch (error) {
      console.error('Erreur lors de l\'ajout au panier:', error);
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr'
          ? 'Erreur lors de l\'ajout au panier'
          : 'Error adding to cart'
      });
    }
  };

  const handleBundleAdd = async () => {
    try {
      // Vérifier que tous les produits sont toujours disponibles
      const { productService } = await import('../services/bigcommerce');
      const response = await productService.getAllProducts();

      let addedCount = 0;

      for (const product of upsellProducts) {
        const productSyncFound = response.products?.find((p: any) =>
          p.id.toString() === product.id
        );

        if (productSyncFound) {
          // Vérifier le stock
          const hasStock = productSyncFound.variants && productSyncFound.variants.some((variant: any) =>
            variant.inventoryQuantity > 0 || variant.available
          );

          if (hasStock) {
            addToCart({
              id: product.id,
              title: product.title,
              description: productSyncFound.description || '',
              price: product.price,
              images: [product.image],
              category: productSyncFound.productType || product.category,
              tags: productSyncFound.tags || [],
              variants: productSyncFound.variants || [],
              available: hasStock,
              featured: false,
              rating: product.rating,
              reviewCount: 0,
              likes: 0,
              isLiked: false,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            });
            addedCount++;
          }
        }
      }

      if (addedCount > 0) {
        showNotification({
          type: 'success',
          title: language === 'fr' ? 'Produits ajoutés au panier' : 'Products added to cart',
          message: language === 'fr'
            ? `${addedCount} produit(s) ajouté(s) au panier`
            : `${addedCount} product(s) added to cart`
        });
      } else {
        showNotification({
          type: 'error',
          title: language === 'fr' ? 'Aucun produit disponible' : 'No products available',
          message: language === 'fr'
            ? 'Aucun produit du lot n\'est actuellement disponible'
            : 'No products from the bundle are currently available'
        });
      }

      onClose();
    } catch (error) {
      console.error('Erreur lors de l\'ajout du lot:', error);
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr'
          ? 'Erreur lors de l\'ajout du lot'
          : 'Error adding bundle'
      });
    }
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
    <AnimatePresence>
      {isOpen && !loading && upsellProducts.length > 0 && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>
              <X size={20} />
            </CloseButton>

            <ModalHeader>
              <ModalTitle>
                {language === 'fr'
                  ? 'Vous aimeriez aussi...'
                  : 'You might also like...'
                }
              </ModalTitle>
              <ModalSubtitle>
                {language === 'fr'
                  ? 'Découvrez nos autres t-shirts assortis'
                  : 'Discover our other matching t-shirts'
                }
              </ModalSubtitle>
            </ModalHeader>



            {loading ? (
              <div style={{
                padding: 'var(--spacing-6)',
                textAlign: 'center',
                color: 'var(--gray-500)'
              }}>
                {language === 'fr' ? 'Chargement des produits...' : 'Loading products...'}
              </div>
            ) : upsellProducts.length > 0 ? (
              <ProductGrid>
                {upsellProducts.map((product) => (
                  <ProductCard key={product.id}>
                    <ProductImage $image={product.image}>
                      <ProductOverlay>
                        <Heart size={16} />
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
                        <span style={{ fontSize: '12px', color: 'var(--gray-500)' }}>
                          ({product.rating})
                        </span>
                      </ProductRating>
                      <AddButton onClick={() => handleAddToCart(product)}>
                        <ShoppingCart size={14} />
                        {language === 'fr' ? 'Ajouter' : 'Add'}
                      </AddButton>
                    </ProductInfo>
                  </ProductCard>
                ))}
              </ProductGrid>
            ) : (
              <div style={{
                padding: 'var(--spacing-6)',
                textAlign: 'center',
                color: 'var(--gray-500)'
              }}>
                {language === 'fr'
                  ? 'Aucun produit disponible pour le moment'
                  : 'No products available at the moment'
                }
              </div>
            )}

            <ModalFooter>
              <SkipButton onClick={onClose}>
                {language === 'fr' ? 'Continuer sans ajouter' : 'Continue without adding'}
              </SkipButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default UpsellModal;

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Filter,
  Grid,
  List,
  Search,
  ShoppingCart,
  Heart,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';
import { useCart } from '../components/CartProvider';
import { useFavorites } from '../components/FavoritesProvider';
import { useNotification } from '../components/NotificationProvider';
import { productService, NormalizedProduct } from '../services/bigcommerce';
import { useUpsell } from '../hooks/useUpsell';
import LoadingSpinner from '../components/LoadingSpinner';
import Container from '../components/Container';
import UpsellModal from '../components/UpsellModal';
import { Product as LocalProduct } from '../types';

// Types pour les produits
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  tags: string[];
  isLiked: boolean;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  available: boolean; // Added for stock status
  createdAt: string; // Added for sorting
}

// Filtres
interface Filters {
  category: string;
  priceRange: {
    min: number;
    max: number;
  };
  tags: string[];
  inStock: boolean;
}

// Styled Components
const PageContainer = styled.div`
  padding: var(--spacing-12) 0;
  background: var(--gray-50);
  min-height: 100vh;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-12);
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

const PageSubtitle = styled.p`
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FiltersSection = styled.div`
  background: var(--white);
  padding: var(--spacing-8);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-10);
  border: 1px solid var(--gray-100);
`;

const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-8);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const FilterLabel = styled.label`
  font-weight: var(--font-semibold);
  color: var(--gray-800);
  font-size: var(--font-size-base);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FilterSelect = styled.select`
  padding: var(--spacing-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-xl);
  font-size: var(--font-size-base);
  background: var(--white);
  transition: all var(--transition-normal);
  font-weight: var(--font-medium);

  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`;

const PriceRange = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
`;

const PriceInput = styled.input`
  flex: 1;
  padding: var(--spacing-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-xl);
  font-size: var(--font-size-base);
  text-align: center;
  font-weight: var(--font-medium);

  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`;

const PriceSeparator = styled.span`
  color: var(--gray-500);
  font-weight: var(--font-bold);
  font-size: var(--font-size-lg);
`;

const FilterCheckbox = styled.input`
  width: 24px;
  height: 24px;
  accent-color: #d13296;
  cursor: pointer;
`;

const ResultsInfo = styled.div`
  font-size: var(--font-size-lg);
  color: var(--gray-700);
  margin-bottom: var(--spacing-8);
  text-align: center;
  font-weight: var(--font-medium);
  padding: var(--spacing-4);
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
`;

const ProductGrid = styled.div<{ $viewMode: 'grid' | 'list' }>`
  display: grid;
  grid-template-columns: ${props => props.$viewMode === 'grid' ? 'repeat(4, 1fr)' : '1fr'};
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-8);
  
  @media (max-width: 1200px) {
    grid-template-columns: ${props => props.$viewMode === 'grid' ? 'repeat(3, 1fr)' : '1fr'};
  }
  
  @media (max-width: 900px) {
    grid-template-columns: ${props => props.$viewMode === 'grid' ? 'repeat(2, 1fr)' : '1fr'};
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  border: 1px solid var(--gray-100);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.15);
    border-color: #d13296;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  height: 280px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);

  ${ProductCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProductOverlay = styled.div`
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  opacity: 0;
  transition: opacity var(--transition-normal);

  ${ProductCard}:hover & {
    opacity: 1;
  }
`;

const ActionButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--gray-700);
  box-shadow: var(--shadow-md);

  &:hover {
    background: var(--white);
    transform: scale(1.15);
    color: #d13296;
    box-shadow: var(--shadow-lg);
  }
`;

const OutOfStockBadge = styled.div`
  position: absolute;
  top: var(--spacing-4);
  left: var(--spacing-4);
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: var(--white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-xl);
  font-size: var(--font-size-sm);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-md);
`;

const ProductContent = styled.div`
  padding: var(--spacing-8);
`;

const ProductCategory = styled.div`
  font-size: var(--font-size-sm);
  color: #d13296;
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductTitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: none;
  }
`;

const ProductTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
  line-height: 1.3;
  text-decoration: none;
  transition: color var(--transition-fast);
  
  &:hover {
    color: #d13296;
  }
`;

const ProductPrice = styled.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: #d13296;
  margin-top: var(--spacing-3);
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: var(--spacing-3);
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
  }
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

const SyncStatus = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  background: var(--gray-50);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  margin-bottom: var(--spacing-4);
`;

const SyncButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SyncIcon = styled(RefreshCw) <{ $isSpinning: boolean }>`
  animation: ${props => props.$isSpinning ? 'spin 1s linear infinite' : 'none'};
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--error-light);
  border: 1px solid var(--error);
  border-radius: var(--radius-lg);
  color: var(--error);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
`;

const ViewModeToggle = styled.div`
  display: flex;
  gap: var(--spacing-3);
  margin-top: var(--spacing-4);
`;

const ViewModeButton = styled.button<{ $isActive: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.$isActive ? 'var(--primary-gradient)' : 'var(--gray-100)'};
  border: 1px solid ${props => props.$isActive ? 'var(--primary-gradient)' : 'var(--gray-200)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  color: ${props => props.$isActive ? 'var(--white)' : 'var(--gray-700)'};
  box-shadow: ${props => props.$isActive ? 'var(--shadow-md)' : 'var(--shadow-sm)'};

  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: var(--shadow-md);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ProductsPage: React.FC = () => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const { triggerUpsell, closeUpsell, showUpsellModal } = useUpsell();

  const [products, setProducts] = useState<NormalizedProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<NormalizedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // États pour les filtres
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState<string>('name');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Etat de synchronisation simplifie pour BigCommerce
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [syncError, setSyncError] = useState<string | null>(null);

  const refreshProducts = async () => {
    setIsSyncing(true);
    setSyncError(null);
    try {
      await loadProducts();
      setLastSync(new Date());
    } catch (err) {
      setSyncError(language === 'fr' ? 'Erreur de synchronisation' : 'Sync error');
    } finally {
      setIsSyncing(false);
    }
  };

  // Charger les produits
  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await productService.getAllProducts();
      setProducts(response.products);
      setFilteredProducts(response.products);

      console.log(`✅ ${response.products.length} produits chargés`);
    } catch (err: any) {
      console.error('❌ Erreur lors du chargement des produits:', err);
      const detailedError = err.response?.data?.message || err.response?.data?.error || err.message;
      setError(language === 'fr'
        ? `Erreur lors du chargement: ${detailedError}`
        : `Error loading: ${detailedError}`
      );
    } finally {
      setLoading(false);
    }
  }, [language]);

  // Charger les produits au montage du composant
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Appliquer les filtres
  useEffect(() => {
    let filtered = [...products];

    // Filtre par catégorie
    if (selectedCategory !== 'all') {
      // Les produits BigCommerce ont des IDs de catégories, pas des noms
      // Pour l'instant, on fait un mapping simple ou on cherche si le nom est contenu dans la catégorie (si c'est une string)
      filtered = filtered.filter(product => {
        const prodCat = (product.category || '').toLowerCase();
        const selCat = selectedCategory.toLowerCase();
        return prodCat.includes(selCat) || prodCat === selCat;
      });
    }

    // Filtre par prix
    if (priceRange.min) {
      filtered = filtered.filter(product => parseFloat(product.variants[0]?.price || '0') >= parseFloat(priceRange.min));
    }
    if (priceRange.max) {
      filtered = filtered.filter(product => parseFloat(product.variants[0]?.price || '0') <= parseFloat(priceRange.max));
    }

    // Filtre par disponibilité
    if (showAvailableOnly) {
      filtered = filtered.filter(product => product.variants[0]?.available || false);
    }

    // Tri
    filtered.sort((a, b) => {
      const priceA = parseFloat(a.variants[0]?.price || '0');
      const priceB = parseFloat(b.variants[0]?.price || '0');

      switch (sortBy) {
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, selectedCategory, priceRange, sortBy, showAvailableOnly]);

  // Gerer l'ajout au panier
  const handleAddToCart = async (product: NormalizedProduct) => {
    try {
      const transformedProduct = transformBigCommerceProduct(product);

      // Verifications avant l'ajout au panier
      if (!transformedProduct.variants || transformedProduct.variants.length === 0) {
        throw new Error('Aucune variante disponible pour ce produit');
      }

      // Utiliser la premiere variante disponible
      const firstVariantId = product.variants?.[0]?.id;
      if (!firstVariantId) {
        throw new Error('Aucune variante disponible pour ce produit');
      }

      await addToCart(transformedProduct, 1, firstVariantId);

      showNotification({
        type: 'success',
        title: language === 'fr' ? 'Ajoute au panier' : 'Added to cart',
        message: language === 'fr'
          ? `${product.title} a ete ajoute au panier`
          : `${product.title} has been added to cart`
      });

      // Declencher l'upsell si c'est un t-shirt
      if (product.productType?.toLowerCase().includes('tshirt') ||
        product.title.toLowerCase().includes('t-shirt')) {
        triggerUpsell({
          type: 'add_to_cart',
          productId: product.id,
          category: product.productType
        });
      }

      // Rediriger vers la page panier apres un court delai
      setTimeout(() => {
        navigate('/cart');
      }, 1000);
    } catch (error) {
      console.error('Erreur dans handleAddToCart:', error);
      const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr'
          ? `Erreur: ${errorMessage}`
          : `Error: ${errorMessage}`
      });
    }
  };

  // Gerer les favoris
  const handleToggleFavorite = async (product: NormalizedProduct) => {
    try {
      if (isFavorite(product.id)) {
        await removeFavorite(product.id);
        showNotification({
          type: 'info',
          title: language === 'fr' ? 'Retire des favoris' : 'Removed from favorites',
          message: language === 'fr'
            ? `${product.title} a ete retire des favoris`
            : `${product.title} has been removed from favorites`
        });
      } else {
        await addFavorite(product.id);
        showNotification({
          type: 'success',
          title: language === 'fr' ? 'Ajoute aux favoris' : 'Added to favorites',
          message: language === 'fr'
            ? `${product.title} a ete ajoute aux favoris`
            : `${product.title} has been added to favorites`
        });
      }
    } catch (error) {
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr'
          ? 'Erreur lors de la gestion des favoris'
          : 'Error managing favorites'
      });
    }
  };

  // Formater le prix
  const formatPrice = (price: string) => {
    return new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: 'EUR'
    }).format(parseFloat(price));
  };

  // Transformer NormalizedProduct (BigCommerce) en Product local
  const transformBigCommerceProduct = (bcProduct: NormalizedProduct): LocalProduct => {
    // Les produits BigCommerce sont deja normalises
    const transformedVariants = bcProduct.variants?.map(variant => ({
      id: variant.id,
      title: variant.title,
      price: parseFloat(variant.price || '0'),
      compareAtPrice: variant.compareAtPrice ? parseFloat(variant.compareAtPrice) : undefined,
      available: variant.available,
      options: variant.selectedOptions || []
    })) || [];

    return {
      id: bcProduct.id,
      title: bcProduct.title,
      description: bcProduct.description,
      price: parseFloat(bcProduct.variants[0]?.price || '0'),
      compareAtPrice: bcProduct.variants[0]?.compareAtPrice ? parseFloat(bcProduct.variants[0].compareAtPrice) : undefined,
      images: bcProduct.images?.map(img => img.src) || [],
      category: bcProduct.productType,
      tags: bcProduct.tags || [],
      variants: transformedVariants,
      available: bcProduct.variants[0]?.available || false,
      featured: false,
      rating: 4.5,
      reviewCount: 0,
      likes: 0,
      isLiked: false,
      createdAt: bcProduct.createdAt,
      updatedAt: bcProduct.updatedAt
    };
  };

  // Formater la date de dernière synchronisation
  const formatLastSync = (date: Date | null) => {
    if (!date) return language === 'fr' ? 'Jamais' : 'Never';
    return date.toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <PageContainer>
        <Container>
          <LoadingSpinner />
        </Container>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>
            {language === 'fr' ? 'Nos Produits' : 'Our Products'}
          </PageTitle>
          <PageSubtitle>
            {language === 'fr'
              ? 'Découvrez notre collection exclusive de produits de qualité'
              : 'Discover our exclusive collection of quality products'
            }
          </PageSubtitle>
        </PageHeader>

        {/* Statut de synchronisation BigCommerce */}
        <SyncStatus>
          <SyncIcon size={16} $isSpinning={isSyncing} />
          <span>
            {language === 'fr' ? 'Derniere synchronisation' : 'Last sync'}: {formatLastSync(lastSync)}
          </span>
          <span style={{ marginLeft: '8px', color: '#10b981', fontWeight: 'bold' }}>
            BigCommerce
          </span>
          <SyncButton
            onClick={refreshProducts}
            disabled={isSyncing}
            title={language === 'fr' ? 'Rafraichir les produits' : 'Refresh products'}
          >
            <RefreshCw size={14} />
            {language === 'fr' ? 'Rafraichir' : 'Refresh'}
          </SyncButton>
        </SyncStatus>

        {/* Message d'erreur de synchronisation */}
        {syncError && (
          <ErrorMessage>
            <AlertCircle size={16} />
            {syncError}
          </ErrorMessage>
        )}

        {/* Filtres */}
        <FiltersSection>
          <FiltersRow>
            <FilterGroup>
              <FilterLabel>{language === 'fr' ? 'Catégorie' : 'Category'}</FilterLabel>
              <FilterSelect
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">
                  {language === 'fr' ? 'Toutes les catégories' : 'All categories'}
                </option>
                <option value="vêtements">{language === 'fr' ? 'Vêtements' : 'Clothing'}</option>
                <option value="accessoires">{language === 'fr' ? 'Accessoires' : 'Accessories'}</option>
                <option value="chaussures">{language === 'fr' ? 'Chaussures' : 'Shoes'}</option>
                <option value="maquillage">{language === 'fr' ? 'Maquillage' : 'Makeup'}</option>
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>{language === 'fr' ? 'Prix' : 'Price'}</FilterLabel>
              <PriceRange>
                <PriceInput
                  type="number"
                  placeholder={language === 'fr' ? 'Min' : 'Min'}
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                />
                <PriceSeparator>-</PriceSeparator>
                <PriceInput
                  type="number"
                  placeholder={language === 'fr' ? 'Max' : 'Max'}
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                />
              </PriceRange>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>{language === 'fr' ? 'Trier par' : 'Sort by'}</FilterLabel>
              <FilterSelect
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">{language === 'fr' ? 'Nom' : 'Name'}</option>
                <option value="price-asc">{language === 'fr' ? 'Prix croissant' : 'Price ascending'}</option>
                <option value="price-desc">{language === 'fr' ? 'Prix décroissant' : 'Price descending'}</option>
                <option value="newest">{language === 'fr' ? 'Plus récent' : 'Newest'}</option>
              </FilterSelect>
            </FilterGroup>
          </FiltersRow>

          <FiltersRow>
            <FilterGroup>
              <label>
                <FilterCheckbox
                  type="checkbox"
                  checked={showAvailableOnly}
                  onChange={(e) => setShowAvailableOnly(e.target.checked)}
                />
                {language === 'fr' ? 'En stock uniquement' : 'In stock only'}
              </label>
            </FilterGroup>

            <FilterGroup>
              <ViewModeToggle>
                <ViewModeButton
                  $isActive={viewMode === 'grid'}
                  onClick={() => setViewMode('grid')}
                  title={language === 'fr' ? 'Vue grille' : 'Grid view'}
                >
                  <Grid size={18} />
                </ViewModeButton>
                <ViewModeButton
                  $isActive={viewMode === 'list'}
                  onClick={() => setViewMode('list')}
                  title={language === 'fr' ? 'Vue liste' : 'List view'}
                >
                  <List size={18} />
                </ViewModeButton>
              </ViewModeToggle>
            </FilterGroup>
          </FiltersRow>
        </FiltersSection>

        {/* Informations sur les résultats */}
        <ResultsInfo>
          {language === 'fr'
            ? `${filteredProducts.length} produit(s) trouvé(s)`
            : `${filteredProducts.length} product(s) found`
          }
        </ResultsInfo>

        {/* Grille des produits */}
        {error ? (
          <ErrorMessage>
            <AlertCircle size={16} />
            {error}
          </ErrorMessage>
        ) : (
          <ProductGrid $viewMode={viewMode}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProductImageContainer>
                  <ProductImage
                    src={product.images[0]?.src || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'}
                    alt={product.title}
                    onError={(e) => {
                      console.log('❌ Erreur de chargement image:', product.title, product.images[0]?.src);
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop';
                    }}
                    onLoad={() => {
                      console.log('✅ Image chargée:', product.title, product.images[0]?.src);
                    }}
                  />

                  <ProductOverlay>
                    <ActionButton
                      onClick={() => handleAddToCart(product)}
                      title={language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                    >
                      <ShoppingCart size={20} />
                    </ActionButton>

                    <ActionButton
                      onClick={() => handleToggleFavorite(product)}
                      title={language === 'fr' ? 'Ajouter aux favoris' : 'Add to favorites'}
                    >
                      <Heart
                        size={20}
                        fill={isFavorite(product.id) ? '#d13296' : 'none'}
                        color={isFavorite(product.id) ? '#d13296' : 'currentColor'}
                      />
                    </ActionButton>
                  </ProductOverlay>

                  {!product.variants[0]?.available && (
                    <OutOfStockBadge>
                      {language === 'fr' ? 'Rupture de stock' : 'Out of stock'}
                    </OutOfStockBadge>
                  )}
                </ProductImageContainer>

                <ProductContent>
                  <ProductCategory>{product.productType}</ProductCategory>
                  <ProductTitleLink to={`/product/${product.id.split('/').pop()}`}>
                    <ProductTitle>{product.title}</ProductTitle>
                  </ProductTitleLink>
                  <ProductPrice>{formatPrice(product.variants[0]?.price || '0')}</ProductPrice>
                </ProductContent>
              </ProductCard>
            ))}
          </ProductGrid>
        )}

        {filteredProducts.length === 0 && (
          <EmptyState>
            <EmptyIcon>😔</EmptyIcon>
            <EmptyTitle>
              {language === 'fr' ? 'Aucun produit trouvé' : 'No products found'}
            </EmptyTitle>
            <EmptyText>
              {language === 'fr'
                ? 'Essayez de modifier vos filtres ou votre recherche'
                : 'Try adjusting your filters or search terms'
              }
            </EmptyText>
          </EmptyState>
        )}
      </Container>

      {/* Modal d'upsell */}
      <UpsellModal
        isOpen={showUpsellModal}
        onClose={closeUpsell}
        cartItems={[]}
      />
    </PageContainer>
  );
};

export default ProductsPage;

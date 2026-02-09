import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useAuth } from '../components/AuthProvider';
import { useFavorites } from '../components/FavoritesProvider';
import { useLanguage } from '../components/LanguageProvider';
import { useCart } from '../components/CartProvider';
import { useNotification } from '../components/NotificationProvider';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-6) var(--spacing-4);
  min-height: calc(100vh - 140px);
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-8);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-4);
    align-items: flex-start;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-600);
  text-decoration: none;
  font-weight: var(--font-medium);
  transition: all var(--transition-normal);
  
  &:hover {
    color: #d13296;
    transform: translateX(-2px);
  }
`;

const PageTitle = styled.h1`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
  }
`;

const HeaderActions = styled.div`
  display: flex;
  gap: var(--spacing-3);
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  border: 1px solid rgba(209, 50, 150, 0.2);
  background: rgba(209, 50, 150, 0.05);
  color: #d13296;
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    background: rgba(209, 50, 150, 0.1);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: var(--spacing-12) var(--spacing-4);
`;

const EmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(209, 50, 150, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-6);
  color: #d13296;
`;

const EmptyTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`;

const EmptyDescription = styled.p`
  color: var(--gray-600);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-6);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const BrowseButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-6);
  background: var(--primary-gradient);
  color: var(--white);
  text-decoration: none;
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const FavoritesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-6);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
`;

const FavoriteCard = styled(motion.div)`
  background: var(--white);
  border: 1px solid rgba(209, 50, 150, 0.1);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(209, 50, 150, 0.3);
  }
`;

const CardImage = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 200px;
  background: ${props => `url(${props.$imageUrl}) center/cover`};
  position: relative;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: var(--spacing-3);
  right: var(--spacing-3);
  display: flex;
  gap: var(--spacing-2);
`;

const CardButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: var(--gray-700);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    background: var(--white);
    color: #d13296;
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: var(--spacing-4);
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
  line-height: 1.4;
`;

const CardPrice = styled.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: #d13296;
  margin-bottom: var(--spacing-3);
`;

const CardActions = styled.div`
  display: flex;
  gap: var(--spacing-2);
`;

const CardActionButton = styled.button`
  flex: 1;
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid rgba(209, 50, 150, 0.2);
  background: rgba(209, 50, 150, 0.05);
  color: #d13296;
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
  
  &:hover {
    background: rgba(209, 50, 150, 0.1);
    transform: translateY(-1px);
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-12);
  color: #d13296;
`;

const FavoritesPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { favorites, isLoading, removeFavorite, clearAllFavorites } = useFavorites();
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  useEffect(() => {
    if (!isAuthenticated) {
      showNotification({
        type: 'warning',
        title: language === 'fr' ? 'Connexion requise' : 'Sign in required',
        message: language === 'fr' 
          ? 'Connectez-vous à votre compte Shopify pour voir vos favoris' 
          : 'Sign in to your Shopify account to view your favorites'
      });
    }
  }, [isAuthenticated, language, showNotification]);

  const handleRemoveFavorite = async (productId: string) => {
    try {
      await removeFavorite(productId);
      showNotification({
        type: 'success',
        title: 'Succès',
        message: language === 'fr' 
          ? 'Produit retiré des favoris' 
          : 'Product removed from favorites'
      });
    } catch (error) {
      showNotification({
        type: 'error',
        title: 'Erreur',
        message: language === 'fr' 
          ? 'Erreur lors de la suppression' 
          : 'Error removing favorite'
      });
    }
  };

  const handleAddToCart = (productId: string, productTitle: string) => {
    addToCart({
      id: productId,
      title: productTitle,
      price: 0, // Prix à récupérer depuis l'API
      images: [''],
      variants: [],
      description: '',
      category: '',
      tags: [],
      available: true,
      featured: false,
      rating: 4.5,
      reviewCount: 0,
      likes: 0,
      isLiked: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, 1);
    showNotification({
      type: 'success',
      title: 'Succès',
      message: language === 'fr' 
        ? 'Produit ajouté au panier' 
        : 'Product added to cart'
    });
  };

  const handleClearAll = async () => {
    if (window.confirm(
      language === 'fr' 
        ? 'Êtes-vous sûr de vouloir supprimer tous vos favoris ?' 
        : 'Are you sure you want to remove all favorites?'
    )) {
      try {
        await clearAllFavorites();
        showNotification({
          type: 'success',
          title: 'Succès',
          message: language === 'fr' 
            ? 'Tous les favoris ont été supprimés' 
            : 'All favorites have been removed'
        });
      } catch (error) {
                  showNotification({
            type: 'error',
            title: 'Erreur',
            message: language === 'fr' 
              ? 'Erreur lors de la suppression' 
              : 'Error removing favorites'
          });
      }
    }
  };

  if (isLoading) {
    return (
      <PageContainer>
        <LoadingSpinner>
          <div>Chargement...</div>
        </LoadingSpinner>
      </PageContainer>
    );
  }

  if (!isAuthenticated) {
    return (
      <PageContainer>
        <EmptyState
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <EmptyIcon>
            <Heart size={40} />
          </EmptyIcon>
          <EmptyTitle>
            {language === 'fr' ? 'Connectez-vous' : 'Sign in'}
          </EmptyTitle>
          <EmptyDescription>
            {language === 'fr' 
              ? 'Connectez-vous pour voir et gérer vos produits favoris'
              : 'Sign in to view and manage your favorite products'
            }
          </EmptyDescription>
        </EmptyState>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader>
        <HeaderLeft>
          <BackButton to="/">
            <ArrowLeft size={20} />
            {language === 'fr' ? 'Retour' : 'Back'}
          </BackButton>
          <PageTitle>
            {language === 'fr' ? 'Mes favoris' : 'My favorites'}
            {favorites.length > 0 && ` (${favorites.length})`}
          </PageTitle>
        </HeaderLeft>
        
        {favorites.length > 0 && (
          <HeaderActions>
            <ActionButton onClick={handleClearAll}>
              <Trash2 size={16} />
              {language === 'fr' ? 'Tout supprimer' : 'Clear all'}
            </ActionButton>
          </HeaderActions>
        )}
      </PageHeader>

      {favorites.length === 0 ? (
        <EmptyState
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <EmptyIcon>
            <Heart size={40} />
          </EmptyIcon>
          <EmptyTitle>
            {language === 'fr' ? 'Aucun favori' : 'No favorites'}
          </EmptyTitle>
          <EmptyDescription>
            {language === 'fr' 
              ? 'Vous n\'avez pas encore ajouté de produits à vos favoris. Parcourez notre catalogue pour découvrir des produits incroyables !'
              : 'You haven\'t added any products to your favorites yet. Browse our catalog to discover amazing products!'
            }
          </EmptyDescription>
          <BrowseButton to="/products">
            {language === 'fr' ? 'Parcourir les produits' : 'Browse products'}
          </BrowseButton>
        </EmptyState>
      ) : (
        <FavoritesGrid>
          {favorites.map((favorite, index) => (
            <FavoriteCard
              key={favorite.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CardImage $imageUrl={favorite.productImage || '/placeholder-image.jpg'}>
                <CardOverlay>
                  <CardButton
                    onClick={() => handleRemoveFavorite(favorite.productId)}
                    title={language === 'fr' ? 'Retirer des favoris' : 'Remove from favorites'}
                  >
                    <Trash2 size={16} />
                  </CardButton>
                </CardOverlay>
              </CardImage>
              
              <CardContent>
                <CardTitle>{favorite.productTitle}</CardTitle>
                <CardPrice>Prix à récupérer</CardPrice>
                
                <CardActions>
                  <CardActionButton
                    onClick={() => handleAddToCart(favorite.productId, favorite.productTitle)}
                  >
                    <ShoppingCart size={16} />
                    {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                  </CardActionButton>
                </CardActions>
              </CardContent>
            </FavoriteCard>
          ))}
        </FavoritesGrid>
      )}
    </PageContainer>
  );
};

export default FavoritesPage;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { favoritesService, Favorite } from '../services/favorites';
import { useLanguage } from './LanguageProvider';
import { useNotification } from './NotificationProvider';

interface LikeButtonProps {
  productId: string;
  productTitle?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'outline' | 'filled' | 'minimal';
  showCount?: boolean;
  className?: string;
}

const ButtonContainer = styled(motion.button)<{
  $isLiked: boolean;
  $size: string;
  $variant: string;
  $isAuthenticated: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${props => props.$size === 'small' ? '4px' : props.$size === 'large' ? '8px' : '6px'};
  padding: ${props => {
    switch (props.$size) {
      case 'small': return '6px 8px';
      case 'large': return '12px 16px';
      default: return '8px 12px';
    }
  }};
  border: ${props => {
    if (props.$variant === 'outline') {
      return `2px solid ${props.$isLiked ? '#d13296' : 'rgba(209, 50, 150, 0.3)'}`;
    }
    return 'none';
  }};
  border-radius: ${props => props.$size === 'small' ? '16px' : props.$size === 'large' ? '24px' : '20px'};
  background: ${props => {
    if (props.$variant === 'filled') {
      return props.$isLiked ? '#d13296' : 'rgba(209, 50, 150, 0.1)';
    }
    if (props.$variant === 'outline') {
      return props.$isLiked ? 'rgba(209, 50, 150, 0.1)' : 'transparent';
    }
    return 'transparent';
  }};
  color: ${props => props.$isLiked ? '#d13296' : 'var(--gray-600)'};
  cursor: ${props => props.$isAuthenticated ? 'pointer' : 'pointer'};
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '12px';
      case 'large': return '16px';
      default: return '14px';
    }
  }};
  font-weight: var(--font-medium);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;

  &:hover {
    ${props => props.$isAuthenticated && `
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
      ${props.$variant === 'filled' && `
        background: ${props.$isLiked ? '#FF5252' : 'rgba(209, 50, 150, 0.2)'};
      `}
      ${props.$variant === 'outline' && `
        border-color: #d13296;
        background: rgba(209, 50, 150, 0.05);
      `}
      ${props.$variant === 'minimal' && `
        background: rgba(209, 50, 150, 0.1);
        color: #d13296;
      `}
    `}
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  ${props => !props.$isAuthenticated && `
    &:hover {
      transform: none;
      box-shadow: none;
    }
  `}
`;

const HeartIcon = styled(motion.div)<{ $isLiked: boolean; $size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  
  svg {
    width: ${props => {
      switch (props.$size) {
        case 'small': return '14px';
        case 'large': return '20px';
        default: return '16px';
      }
    }};
    height: ${props => {
      switch (props.$size) {
        case 'small': return '14px';
        case 'large': return '20px';
        default: return '16px';
      }
    }};
    fill: ${props => props.$isLiked ? 'currentColor' : 'none'};
    stroke: currentColor;
    stroke-width: 2;
  }
`;

const Count = styled.span<{ $size: string }>`
  font-weight: var(--font-semibold);
  min-width: ${props => props.$size === 'small' ? '16px' : props.$size === 'large' ? '24px' : '20px'};
  text-align: center;
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gray-900);
  color: var(--white);
  padding: 8px 12px;
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  white-space: nowrap;
  z-index: 1000;
  margin-bottom: 8px;
  box-shadow: var(--shadow-lg);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: var(--gray-900);
  }
`;

const LikeButton: React.FC<LikeButtonProps> = ({
  productId,
  productTitle,
  size = 'medium',
  variant = 'outline',
  showCount = false,
  className
}) => {
  const { user, isAuthenticated } = useAuth();
  const { language } = useLanguage();
  const { showNotification } = useNotification();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userId = user?.id || 'anonymous';
  const authenticated = isAuthenticated;

  // Vérifier l'état des favoris au chargement
  useEffect(() => {
    const checkFavoriteStatus = () => {
      const liked = favoritesService.isProductFavorited(userId, productId);
      setIsLiked(liked);
    };
    
    checkFavoriteStatus();
  }, [userId, productId]);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!authenticated) {
      showNotification({
        type: 'warning',
        title: language === 'fr' ? 'Connexion requise' : 'Login Required',
        message: language === 'fr' 
          ? 'Connectez-vous pour ajouter des favoris' 
          : 'Sign in to add favorites'
      });
      // Rediriger vers la page de connexion
      window.location.href = '/account';
      return;
    }

    setIsLoading(true);
    try {
      if (isLiked) {
        await favoritesService.removeFromFavorites(userId, productId);
        setIsLiked(false);
        showNotification({
          type: 'success',
          title: language === 'fr' ? 'Retiré des favoris' : 'Removed from favorites',
          message: language === 'fr' 
            ? `${productTitle || 'Produit'} retiré des favoris` 
            : `${productTitle || 'Product'} removed from favorites`
        });
      } else {
        await favoritesService.addToFavorites(userId, {
          id: productId,
          title: productTitle || 'Produit',
          image: undefined,
          price: undefined
        });
        setIsLiked(true);
        showNotification({
          type: 'success',
          title: language === 'fr' ? 'Ajouté aux favoris' : 'Added to favorites',
          message: language === 'fr' 
            ? `${productTitle || 'Produit'} ajouté aux favoris` 
            : `${productTitle || 'Product'} added to favorites`
        });
      }
    } catch (error) {
      console.error('Erreur lors de la gestion du favori:', error);
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr' 
          ? 'Une erreur est survenue lors de la gestion des favoris' 
          : 'An error occurred while managing favorites'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMouseEnter = () => {
    if (!authenticated) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getButtonText = () => {
    if (language === 'fr') {
      return isLiked ? 'Aimé' : 'J\'aime';
    }
    return isLiked ? 'Liked' : 'Like';
  };

  return (
    <ButtonContainer
      $isLiked={isLiked}
      $size={size}
      $variant={variant}
      $isAuthenticated={authenticated}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={isLoading}
      className={className}
      whileTap={{ scale: 0.95 }}
      title={
        authenticated
          ? (language === 'fr' ? 'Cliquez pour ' : 'Click to ') + 
            (isLiked ? (language === 'fr' ? 'retirer des favoris' : 'remove from favorites') : 
                     (language === 'fr' ? 'ajouter aux favoris' : 'add to favorites'))
          : (language === 'fr' ? 'Connectez-vous pour aimer' : 'Sign in to like')
      }
    >
      <HeartIcon
        $isLiked={isLiked}
        $size={size}
        animate={{
          scale: isLiked ? [1, 1.2, 1] : 1,
          rotate: isLiked ? [0, -10, 10, 0] : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <Heart />
      </HeartIcon>
      
      {(showCount || size === 'large') && (
        <Count $size={size}>
          {getButtonText()}
        </Count>
      )}

      {showTooltip && !authenticated && (
        <Tooltip
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {language === 'fr' ? 'Connectez-vous pour aimer' : 'Sign in to like'}
        </Tooltip>
      )}
    </ButtonContainer>
  );
};

export default LikeButton;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Menu, 
  X,
  Globe,
  Heart,
  Settings
} from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useCart } from './CartProvider';
import { useAuth } from './AuthProvider';
import { useFavorites } from './FavoritesProvider';

import UserMenu from './UserMenu';
import AdminVoteManager from './AdminVoteManager';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(209, 50, 150, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-normal);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  
  @media (max-width: 768px) {
    height: 60px;
    padding: 0 var(--spacing-3);
  }
`;

const Logo = styled(Link)`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  transition: all var(--transition-normal);
  
  &:hover {
    color: #d13296;
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: var(--primary-gradient);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: var(--font-bold);
  font-size: var(--font-size-sm);
  box-shadow: var(--shadow-md);
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: var(--font-size-xs);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)<{ $isActive: boolean }>`
  color: ${props => props.$isActive ? '#d13296' : 'var(--gray-700)'};
  text-decoration: none;
  font-weight: var(--font-medium);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal);
  position: relative;
  
  &:hover {
    color: #d13296;
    background: rgba(209, 50, 150, 0.05);
  }
  
  ${props => props.$isActive && `
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: var(--primary-gradient);
      border-radius: var(--radius-full);
    }
  `}
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  
  @media (max-width: 768px) {
    gap: var(--spacing-2);
  }
`;

const ActionButton = styled.button`
  background: rgba(209, 50, 150, 0.05);
  border: 1px solid rgba(209, 50, 150, 0.1);
  color: var(--gray-700);
  padding: var(--spacing-2);
  border-radius: var(--radius-lg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  position: relative;
  
  &:hover {
    color: #d13296;
    background: rgba(209, 50, 150, 0.1);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-1);
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: #d13296;
  color: var(--white);
  font-size: var(--font-size-xs);
  font-weight: var(--font-bold);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileMenuButton = styled(ActionButton)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: var(--white);
  border-bottom: 1px solid rgba(209, 50, 150, 0.1);
  padding: var(--spacing-4);
  z-index: 40;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 768px) {
    top: 60px;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const MobileNavItem = styled(Link)<{ $isActive: boolean }>`
  color: ${props => props.$isActive ? '#d13296' : 'var(--gray-700)'};
  text-decoration: none;
  font-weight: var(--font-medium);
  padding: var(--spacing-3);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal);
  
  &:hover {
    color: #d13296;
    background: rgba(209, 50, 150, 0.05);
  }
`;



const Header: React.FC = () => {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const { cart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const { getFavoritesCount } = useFavorites();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showAdminManager, setShowAdminManager] = useState(false);
  const [localCartItemCount, setLocalCartItemCount] = useState(0);

  // Écouter les changements du panier
  useEffect(() => {
    const handleCartChange = (e: CustomEvent) => {
      const newCart = e.detail.cart;
      const newCount = newCart.items.reduce((total: number, item: any) => total + item.quantity, 0);
      console.log('🛒 Header: Mise à jour du compteur panier:', newCount);
      setLocalCartItemCount(newCount);
    };

    window.addEventListener('cartStateChanged', handleCartChange as EventListener);
    
    // Initialiser avec le panier actuel
    const currentCount = cart.items.reduce((total, item) => total + item.quantity, 0);
    setLocalCartItemCount(currentCount);
    
    return () => window.removeEventListener('cartStateChanged', handleCartChange as EventListener);
  }, [cart]);

  const navItems = [
    { path: '/', label: language === 'fr' ? 'Accueil' : 'Home' },
    { path: '/products', label: language === 'fr' ? 'Produits' : 'Products' },
    { path: '/vote', label: language === 'fr' ? 'Participer' : 'Participate' },
    { path: '/about', label: language === 'fr' ? 'À propos' : 'About' }
  ];

  // Utiliser le compteur local qui se met à jour avec les événements



  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  // Vérifier le mode admin
  useEffect(() => {
    const adminMode = localStorage.getItem('adminMode') === 'true';
    setIsAdminMode(adminMode);
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <LogoIcon>BFT</LogoIcon>
          <span className="papyrus-font">
            BestF.kers<span className="brand-in">in</span>Town
          </span>
        </Logo>

        <Nav>
          {navItems.map(item => (
            <NavItem
              key={item.path}
              to={item.path}
              $isActive={location.pathname === item.path}
            >
              {item.label}
            </NavItem>
          ))}
        </Nav>

        <HeaderActions>
          <ActionButton onClick={toggleLanguage} title={language === 'fr' ? 'Changer de langue' : 'Change language'}>
            <Globe size={20} />
          </ActionButton>

          <ActionButton 
            title={language === 'fr' ? 'Favoris' : 'Favorites'}
            onClick={() => window.location.href = '/favorites'}
          >
            <Heart size={20} />
                         {user && isAuthenticated && getFavoritesCount() > 0 && (
               <CartBadge>{getFavoritesCount()}</CartBadge>
             )}
          </ActionButton>

          <ActionButton 
            title={language === 'fr' ? 'Panier' : 'Cart'}
            onClick={() => window.location.href = '/cart'}
          >
            <ShoppingCart size={20} />
            {localCartItemCount > 0 && <CartBadge>{localCartItemCount}</CartBadge>}
          </ActionButton>

          {isAdminMode && (
            <ActionButton 
              onClick={() => setShowAdminManager(true)}
              title={language === 'fr' ? 'Administration' : 'Administration'}
            >
              <Settings size={20} />
            </ActionButton>
          )}

          <UserMenu />

          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            title={language === 'fr' ? 'Menu' : 'Menu'}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </MobileMenuButton>
        </HeaderActions>
      </HeaderContent>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <MobileNav>
              {navItems.map(item => (
                <MobileNavItem
                  key={item.path}
                  to={item.path}
                  $isActive={location.pathname === item.path}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </MobileNavItem>
              ))}
            </MobileNav>
          </MobileMenu>
        )}
      </AnimatePresence>

      {/* Gestionnaire d'administration */}
      <AdminVoteManager 
        isVisible={showAdminManager}
        onClose={() => setShowAdminManager(false)}
      />
    </HeaderContainer>
  );
};

export default Header;

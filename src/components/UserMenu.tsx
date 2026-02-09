import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, 
  LogOut, 
  Heart, 
  ShoppingBag, 
  Settings, 
  ChevronDown,
  Chrome
} from 'lucide-react';
import { useAuth } from './AuthProvider';
import { useFavorites } from './FavoritesProvider';
import { useLanguage } from './LanguageProvider';
import { useNotification } from './NotificationProvider';

const UserMenuContainer = styled.div`
  position: relative;
`;

const UserButton = styled(motion.button)<{ $isAuthenticated: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background: ${props => props.$isAuthenticated 
    ? 'rgba(209, 50, 150, 0.1)' 
    : 'rgba(209, 50, 150, 0.05)'};
  border: 1px solid rgba(209, 50, 150, 0.1);
  color: var(--gray-700);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  font-weight: var(--font-medium);

  &:hover {
    background: rgba(209, 50, 150, 0.15);
    color: #d13296;
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 768px) {
    padding: var(--spacing-1) var(--spacing-2);
  }
`;

const UserAvatar = styled.div<{ $avatar?: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.$avatar 
    ? `url(${props.$avatar}) center/cover` 
    : 'var(--primary-gradient)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: var(--font-bold);
  font-size: var(--font-size-xs);
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 10px;
  }
`;

const UserName = styled.span`
  font-size: var(--font-size-sm);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuDropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: var(--spacing-2);
  background: var(--white);
  border: 1px solid rgba(209, 50, 150, 0.1);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  min-width: 220px;
  z-index: 1000;
  overflow: hidden;

  @media (max-width: 768px) {
    right: -10px;
    min-width: 200px;
  }
`;

const MenuHeader = styled.div`
  padding: var(--spacing-4);
  border-bottom: 1px solid rgba(209, 50, 150, 0.1);
  background: rgba(209, 50, 150, 0.02);
`;

const MenuUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-2);
`;

const MenuUserAvatar = styled(UserAvatar)`
  width: 40px;
  height: 40px;
  font-size: var(--font-size-sm);
`;

const MenuUserDetails = styled.div`
  flex: 1;
`;

const MenuUserName = styled.div`
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  font-size: var(--font-size-sm);
`;

const MenuUserEmail = styled.div`
  color: var(--gray-600);
  font-size: var(--font-size-xs);
  margin-top: 2px;
`;

const MenuStats = styled.div`
  display: flex;
  gap: var(--spacing-4);
  margin-top: var(--spacing-2);
`;

const StatItem = styled.div`
  text-align: center;
  flex: 1;
`;

const StatNumber = styled.div`
  font-weight: var(--font-bold);
  color: #d13296;
  font-size: var(--font-size-lg);
`;

const StatLabel = styled.div`
  color: var(--gray-600);
  font-size: var(--font-size-xs);
  margin-top: 2px;
`;

const MenuList = styled.div`
  padding: var(--spacing-2);
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3);
  color: var(--gray-700);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  font-size: var(--font-size-sm);

  &:hover {
    background: rgba(209, 50, 150, 0.05);
    color: #d13296;
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3);
  color: var(--gray-700);
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  font-size: var(--font-size-sm);
  cursor: pointer;

  &:hover {
    background: rgba(209, 50, 150, 0.05);
    color: #d13296;
  }
`;

const LoginSection = styled.div`
  padding: var(--spacing-4);
  text-align: center;
`;

const LoginTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`;

const LoginDescription = styled.p`
  color: var(--gray-600);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
  line-height: 1.5;
`;

const GoogleLoginButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  width: 100%;
  padding: var(--spacing-3);
  background: #4285F4;
  color: var(--white);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);

  &:hover {
    background: #3367D6;
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }
`;

const UserMenu: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { getFavoritesCount } = useFavorites();
  const { language } = useLanguage();
  const { showNotification } = useNotification();
  const [isOpen, setIsOpen] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mettre à jour le nombre de favoris
  useEffect(() => {
    if (user && isAuthenticated) {
      setFavoritesCount(getFavoritesCount());
    }
  }, [user, getFavoritesCount]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async () => {
    try {
      // Rediriger vers la page de connexion
      window.location.href = '/account';
      setIsOpen(false);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    showNotification({
      type: 'success',
      title: language === 'fr' ? 'Déconnexion réussie' : 'Successfully logged out',
      message: language === 'fr' ? 'Vous avez été déconnecté avec succès' : 'You have been successfully logged out'
    });
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const getMenuItems = () => {
    const items = [
      {
        icon: <Heart size={16} />,
        label: language === 'fr' ? 'Mes favoris' : 'My favorites',
        to: '/favorites',
        count: favoritesCount
      },
      {
        icon: <ShoppingBag size={16} />,
        label: language === 'fr' ? 'Mes commandes' : 'My orders',
        to: '/orders'
      },
      {
        icon: <Settings size={16} />,
        label: language === 'fr' ? 'Paramètres' : 'Settings',
        to: '/account'
      }
    ];

    return items;
  };

  return (
    <UserMenuContainer ref={menuRef}>
             <UserButton
         $isAuthenticated={isAuthenticated}
         onClick={handleToggleMenu}
         whileTap={{ scale: 0.95 }}
       >
         {isAuthenticated && user ? (
          <>
            <UserAvatar 
              $avatar=""
            >
              {getInitials(user.firstName, user.lastName)}
            </UserAvatar>
            <UserName>{user.firstName}</UserName>
          </>
        ) : (
          <>
            <User size={20} />
            <UserName>{language === 'fr' ? 'Compte' : 'Account'}</UserName>
          </>
        )}
        <ChevronDown 
          size={16} 
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }} 
        />
      </UserButton>

      <AnimatePresence>
        {isOpen && (
          <MenuDropdown
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
                         {isAuthenticated && user ? (
              <>
                <MenuHeader>
                  <MenuUserInfo>
                    <MenuUserAvatar $avatar="">
                      {getInitials(user.firstName, user.lastName)}
                    </MenuUserAvatar>
                    <MenuUserDetails>
                      <MenuUserName>
                        {user.firstName} {user.lastName}
                      </MenuUserName>
                      <MenuUserEmail>{user.email}</MenuUserEmail>
                    </MenuUserDetails>
                  </MenuUserInfo>
                  <MenuStats>
                    <StatItem>
                      <StatNumber>{favoritesCount}</StatNumber>
                      <StatLabel>
                        {language === 'fr' ? 'Favoris' : 'Favorites'}
                      </StatLabel>
                    </StatItem>
                    <StatItem>
                      <StatNumber>0</StatNumber>
                      <StatLabel>
                        {language === 'fr' ? 'Commandes' : 'Orders'}
                      </StatLabel>
                    </StatItem>
                  </MenuStats>
                </MenuHeader>
                <MenuList>
                  {getMenuItems().map((item, index) => (
                    <MenuItem key={index} to={item.to} onClick={() => setIsOpen(false)}>
                      {item.icon}
                      <span>{item.label}</span>
                      {item.count !== undefined && item.count > 0 && (
                        <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#d13296' }}>
                          {item.count}
                        </span>
                      )}
                    </MenuItem>
                  ))}
                  <MenuButton onClick={handleLogout}>
                    <LogOut size={16} />
                    <span>{language === 'fr' ? 'Déconnexion' : 'Logout'}</span>
                  </MenuButton>
                </MenuList>
              </>
            ) : (
              <LoginSection>
                <LoginTitle>
                  {language === 'fr' ? 'Connectez-vous' : 'Sign in'}
                </LoginTitle>
                <LoginDescription>
                  {language === 'fr' 
                    ? 'Connectez-vous pour accéder à vos favoris, commandes et paramètres'
                    : 'Sign in to access your favorites, orders and settings'
                  }
                </LoginDescription>
                <GoogleLoginButton
                  onClick={handleLogin}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Chrome size={16} />
                  <span>
                    {language === 'fr' ? 'Continuer avec Google' : 'Continue with Google'}
                  </span>
                </GoogleLoginButton>
              </LoginSection>
            )}
          </MenuDropdown>
        )}
      </AnimatePresence>
    </UserMenuContainer>
  );
};

export default UserMenu;

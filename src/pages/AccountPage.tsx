import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  LogIn,
  Calendar,
  CreditCard,
  Eye,
  EyeOff
} from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import { useNotification } from '../components/NotificationProvider';
import Container from '../components/Container';
import LoadingSpinner from '../components/LoadingSpinner';
import { customerService, orderService, BigCommerceCustomer as CustomerType, BigCommerceOrder as OrderType } from '../services/bigcommerce';
import ShopifyAuthForm from '../components/ShopifyAuthForm';

const AccountContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  padding: var(--spacing-16) 0 var(--spacing-8) 0;
`;

const AccountHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-12);
`;

const AccountTitle = styled(motion.h1)`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-4);
`;

const AccountSubtitle = styled(motion.p)`
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const AccountGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--spacing-8);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
`;

const Sidebar = styled.div`
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  height: fit-content;
  border: 1px solid var(--border-primary);
`;

const SidebarTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-4);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

const SidebarMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const SidebarItem = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-lg);
  background: ${props => props.$isActive ? 'var(--accent-primary)' : 'transparent'};
  color: ${props => props.$isActive ? 'var(--white)' : 'var(--text-secondary)'};
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-weight: var(--font-medium);
  
  &:hover {
    background: ${props => props.$isActive ? 'var(--accent-primary)' : 'var(--bg-tertiary)'};
    color: ${props => props.$isActive ? 'var(--white)' : 'var(--text-primary)'};
  }
`;

const MainContent = styled.div`
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  border: 1px solid var(--border-primary);
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-6);
  padding-bottom: var(--spacing-4);
  border-bottom: 1px solid var(--border-primary);
`;

const ContentTitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
`;

const LoginForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: var(--spacing-8);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-4);
`;

const FormLabel = styled.label`
  display: block;
  font-weight: var(--font-medium);
  color: var(--text-primary);
  margin-bottom: var(--spacing-2);
`;

const FormInput = styled.input`
  width: 100%;
  padding: var(--spacing-3);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const PasswordInput = styled.div`
  position: relative;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: var(--spacing-3);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: var(--spacing-1);
  
  &:hover {
    color: var(--text-primary);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
`;

const InfoCard = styled.div`
  background: var(--bg-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-primary);
`;

const InfoTitle = styled.h4`
  font-size: var(--font-size-sm);
  font-weight: var(--font-semibold);
  color: var(--text-muted);
  margin-bottom: var(--spacing-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoValue = styled.p`
  font-size: var(--font-size-base);
  color: var(--text-primary);
  font-weight: var(--font-medium);
`;

const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const OrderCard = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  transition: all var(--transition-fast);
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
`;

const OrderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-3);
`;

const OrderNumber = styled.h4`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
`;

const OrderStatus = styled.span<{ $status: string }>`
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  background: ${props => {
    switch (props.$status) {
      case 'fulfilled': return 'var(--accent-success)';
      case 'pending': return 'var(--accent-warning)';
      case 'cancelled': return 'var(--accent-error)';
      default: return 'var(--accent-info)';
    }
  }};
  color: var(--white);
`;

const OrderDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
`;

const OrderDetail = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
`;

const OrderItems = styled.div`
  border-top: 1px solid var(--border-primary);
  padding-top: var(--spacing-3);
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-2) 0;
`;

const ItemImage = styled.div<{ $image: string }>`
  width: 50px;
  height: 50px;
  background: url(${props => props.$image}) center/cover;
  border-radius: var(--radius-md);
  flex-shrink: 0;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h5`
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  margin-bottom: var(--spacing-1);
`;

const ItemDetails = styled.p`
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-12);
  color: var(--text-secondary);
`;

const EmptyIcon = styled.div`
  font-size: var(--font-size-6xl);
  margin-bottom: var(--spacing-4);
  opacity: 0.5;
`;

const EmptyTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-2);
`;

const EmptyText = styled.p`
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  max-width: 400px;
  margin: 0 auto;
`;

type TabType = 'profile' | 'orders' | 'favorites' | 'settings';

const AccountPage: React.FC = () => {
  const { language } = useLanguage();
  const { showNotification } = useNotification();
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customer, setCustomer] = useState<CustomerType | null>(null);
  const [orders, setOrders] = useState<OrderType[]>([]);

  // Vérifier si l'utilisateur est connecté au chargement
  useEffect(() => {
    const checkAuth = async () => {
      const savedCustomer = localStorage.getItem('bestfkersintown_customer');
      if (savedCustomer) {
        try {
          const customerData = JSON.parse(savedCustomer);
          setCustomer(customerData);
          setIsLoggedIn(true);

          // Charger les commandes
          await loadOrders(Number(customerData.id));
        } catch (error) {
          console.error('Erreur lors du chargement du client:', error);
          localStorage.removeItem('bestfkersintown_customer');
        }
      }
    };

    checkAuth();
  }, []);

  const loadOrders = async (customerId: number) => {
    try {
      const customerOrders = await orderService.getCustomerOrders(customerId);
      setOrders(customerOrders);
    } catch (error) {
      console.error('Erreur lors du chargement des commandes:', error);
    }
  };

  const handleLogout = () => {
    setCustomer(null);
    setIsLoggedIn(false);
    setOrders([]);
    localStorage.removeItem('user'); // Also remove 'user' from authService
    localStorage.removeItem('bestfkersintown_customer');


    showNotification({
      type: 'info',
      title: language === 'fr' ? 'Déconnexion' : 'Logout',
      message: language === 'fr'
        ? 'Vous avez été déconnecté avec succès'
        : 'You have been logged out successfully'
    });
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      fr: {
        pending: 'En attente',
        fulfilled: 'Livré',
        cancelled: 'Annulé',
        processing: 'En cours'
      },
      en: {
        pending: 'Pending',
        fulfilled: 'Delivered',
        cancelled: 'Cancelled',
        processing: 'Processing'
      }
    };

    return statusMap[language][status as keyof typeof statusMap.fr] || status;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: 'EUR'
    }).format(parseFloat(price));
  };

  if (!isLoggedIn) {
    return (
      <AccountContainer>
        <Container>
          <AccountHeader>
            <AccountTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {language === 'fr' ? 'Mon Compte' : 'My Account'}
            </AccountTitle>
            <AccountSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {language === 'fr'
                ? 'Connectez-vous à votre compte pour accéder à vos commandes, favoris et paramètres'
                : 'Sign in to your account to access your orders, favorites and settings'
              }
            </AccountSubtitle>
          </AccountHeader>

          <ShopifyAuthForm
            onSuccess={(customerData) => {
              setCustomer(customerData);
              setIsLoggedIn(true);
              loadOrders(Number(customerData.id));
            }}
            onClose={() => {
              showNotification({
                type: 'error',
                title: language === 'fr' ? 'Erreur d\'authentification' : 'Authentication error',
                message: 'Une erreur est survenue'
              });
            }}
          />
        </Container>
      </AccountContainer>
    );
  }

  return (
    <AccountContainer>
      <Container>
        <AccountHeader>
          <AccountTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {language === 'fr' ? 'Mon Compte' : 'My Account'}
          </AccountTitle>
          <AccountSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {language === 'fr'
              ? `Bienvenue ${customer?.first_name} ! Gérez vos informations, commandes et préférences.`
              : `Welcome ${customer?.first_name}! Manage your information, orders and preferences.`
            }
          </AccountSubtitle>
        </AccountHeader>

        <AccountGrid>
          <Sidebar>
            <SidebarTitle>
              <User size={20} />
              {language === 'fr' ? 'Navigation' : 'Navigation'}
            </SidebarTitle>

            <SidebarMenu>
              <SidebarItem
                $isActive={activeTab === 'profile'}
                onClick={() => setActiveTab('profile')}
              >
                <User size={18} />
                {language === 'fr' ? 'Profil' : 'Profile'}
              </SidebarItem>

              <SidebarItem
                $isActive={activeTab === 'orders'}
                onClick={() => setActiveTab('orders')}
              >
                <Package size={18} />
                {language === 'fr' ? 'Commandes' : 'Orders'}
                {orders.length > 0 && (
                  <span style={{
                    background: 'var(--accent-primary)',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    marginLeft: 'auto'
                  }}>
                    {orders.length}
                  </span>
                )}
              </SidebarItem>

              <SidebarItem
                $isActive={activeTab === 'favorites'}
                onClick={() => setActiveTab('favorites')}
              >
                <Heart size={18} />
                {language === 'fr' ? 'Favoris' : 'Favorites'}
              </SidebarItem>

              <SidebarItem
                $isActive={activeTab === 'settings'}
                onClick={() => setActiveTab('settings')}
              >
                <Settings size={18} />
                {language === 'fr' ? 'Paramètres' : 'Settings'}
              </SidebarItem>

              <SidebarItem
                $isActive={false}
                onClick={handleLogout}
              >
                <LogOut size={18} />
                {language === 'fr' ? 'Se déconnecter' : 'Sign out'}
              </SidebarItem>
            </SidebarMenu>
          </Sidebar>

          <MainContent>
            {activeTab === 'profile' && (
              <div>
                <ContentHeader>
                  <ContentTitle>{language === 'fr' ? 'Informations du profil' : 'Profile Information'}</ContentTitle>
                </ContentHeader>

                <ProfileInfo>
                  <InfoCard>
                    <InfoTitle>{language === 'fr' ? 'Nom complet' : 'Full Name'}</InfoTitle>
                    <InfoValue>{customer?.first_name} {customer?.last_name}</InfoValue>
                  </InfoCard>

                  <InfoCard>
                    <InfoTitle>{language === 'fr' ? 'Email' : 'Email'}</InfoTitle>
                    <InfoValue>{customer?.email}</InfoValue>
                  </InfoCard>

                  <InfoCard>
                    <InfoTitle>{language === 'fr' ? 'Téléphone' : 'Phone'}</InfoTitle>
                    <InfoValue>{customer?.phone || language === 'fr' ? 'Non renseigné' : 'Not provided'}</InfoValue>
                  </InfoCard>

                  <InfoCard>
                    <InfoTitle>{language === 'fr' ? 'Membre depuis' : 'Member since'}</InfoTitle>
                    <InfoValue>{formatDate(customer?.date_created || '')}</InfoValue>
                  </InfoCard>

                  <InfoCard>
                    <InfoTitle>{language === 'fr' ? 'Commandes' : 'Orders'}</InfoTitle>
                    <InfoValue>0</InfoValue>
                  </InfoCard>

                  <InfoCard>
                    <InfoTitle>{language === 'fr' ? 'Note' : 'Note'}</InfoTitle>
                    <InfoValue>{customer?.notes || '-'}</InfoValue>
                  </InfoCard>
                </ProfileInfo>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <ContentHeader>
                  <ContentTitle>{language === 'fr' ? 'Mes Commandes' : 'My Orders'}</ContentTitle>
                </ContentHeader>

                {orders.length === 0 ? (
                  <EmptyState>
                    <EmptyIcon>📦</EmptyIcon>
                    <EmptyTitle>
                      {language === 'fr' ? 'Aucune commande' : 'No orders yet'}
                    </EmptyTitle>
                    <EmptyText>
                      {language === 'fr'
                        ? 'Vous n\'avez pas encore passé de commande. Découvrez nos produits !'
                        : 'You haven\'t placed any orders yet. Discover our products!'
                      }
                    </EmptyText>
                  </EmptyState>
                ) : (
                  <OrdersList>
                    {orders.map(order => (
                      <OrderCard key={order.id}>
                        <OrderHeader>
                          <OrderNumber>#{order.id}</OrderNumber>
                          <OrderStatus $status={order.status}>
                            {getStatusText(order.status)}
                          </OrderStatus>
                        </OrderHeader>

                        <OrderDetails>
                          <OrderDetail>
                            <Calendar size={16} />
                            {formatDate(order.date_created)}
                          </OrderDetail>
                          <OrderDetail>
                            <CreditCard size={16} />
                            {formatPrice(order.total_inc_tax)}
                          </OrderDetail>
                          <OrderDetail>
                            <Package size={16} />
                            {order.items_total} {language === 'fr' ? 'articles' : 'items'}
                          </OrderDetail>
                        </OrderDetails>

                        <OrderItems>
                          <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                            {language === 'fr' ? 'Détails des articles disponibles dans la confirmation par email.' : 'Items details available in your email confirmation.'}
                          </p>
                        </OrderItems>
                      </OrderCard>
                    ))}
                  </OrdersList>
                )}
              </div>
            )}

            {activeTab === 'favorites' && (
              <div>
                <ContentHeader>
                  <ContentTitle>{language === 'fr' ? 'Mes Favoris' : 'My Favorites'}</ContentTitle>
                </ContentHeader>

                <EmptyState>
                  <EmptyIcon>❤️</EmptyIcon>
                  <EmptyTitle>
                    {language === 'fr' ? 'Aucun favori' : 'No favorites yet'}
                  </EmptyTitle>
                  <EmptyText>
                    {language === 'fr'
                      ? 'Vous n\'avez pas encore ajouté de produits à vos favoris.'
                      : 'You haven\'t added any products to your favorites yet.'
                    }
                  </EmptyText>
                </EmptyState>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <ContentHeader>
                  <ContentTitle>{language === 'fr' ? 'Paramètres' : 'Settings'}</ContentTitle>
                </ContentHeader>

                <EmptyState>
                  <EmptyIcon>⚙️</EmptyIcon>
                  <EmptyTitle>
                    {language === 'fr' ? 'Paramètres en cours' : 'Settings coming soon'}
                  </EmptyTitle>
                  <EmptyText>
                    {language === 'fr'
                      ? 'Les paramètres de votre compte seront bientôt disponibles.'
                      : 'Your account settings will be available soon.'
                    }
                  </EmptyText>
                </EmptyState>
              </div>
            )}
          </MainContent>
        </AccountGrid>
      </Container>
    </AccountContainer>
  );
};

export default AccountPage;

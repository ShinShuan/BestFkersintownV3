import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, User as AuthUser } from '../services/auth';
import { useNotification } from './NotificationProvider';

// Types pour Google OAuth
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          prompt: () => void;
        };
      };
    };
    BC_CUSTOMER?: {
      id: string;
      name: string;
      email: string;
      customer_group_id: string;
    };
  }
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: { email: string; password: string; firstName: string; lastName: string; phone?: string }) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { showNotification } = useNotification();

  // Charger le script Google OAuth
  const loadGoogleScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.accounts) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Impossible de charger Google OAuth'));
      document.head.appendChild(script);
    });
  };

  // Initialiser l'authentification au chargement
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Charger le script Google OAuth
        await loadGoogleScript();

        // 1. Vérifier si l'utilisateur est connecté via BigCommerce (Shell)
        if (window.BC_CUSTOMER && window.BC_CUSTOMER.id && window.BC_CUSTOMER.id !== '0' && window.BC_CUSTOMER.id !== '') {
          console.log('Utilisateur détecté via BigCommerce:', window.BC_CUSTOMER);
          const [firstName, ...lastNames] = window.BC_CUSTOMER.name.split(' ');
          setUser({
            id: window.BC_CUSTOMER.id,
            email: window.BC_CUSTOMER.email,
            firstName: firstName || 'User',
            lastName: lastNames.join(' ') || '',
            role: 'user'
          } as any);
        } 
        // 2. Sinon, vérifier le token local
        else if (authService.isAuthenticated()) {
          const currentUser = authService.getCurrentUser();
          if (currentUser) {
            setUser(currentUser);
          } else {
            authService.logout();
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de l\'authentification:', error);
        setError('Erreur lors de l\'initialisation de l\'authentification');
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Fonction de connexion
  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const loggedUser = await authService.login(email, password);
      setUser(loggedUser);

      showNotification({
        type: 'success',
        title: 'Connexion réussie',
        message: `Bienvenue ${loggedUser.firstName} !`
      });
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setError(error instanceof Error ? error.message : 'Erreur lors de la connexion');

      showNotification({
        type: 'error',
        title: 'Erreur de connexion',
        message: error instanceof Error ? error.message : 'Erreur lors de la connexion'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction d'inscription
  const register = async (userData: { email: string; password: string; firstName: string; lastName: string; phone?: string }): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const newUser = await authService.register({
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password
      });
      setUser(newUser);

      showNotification({
        type: 'success',
        title: 'Compte créé avec succès',
        message: `Bienvenue ${newUser.firstName} ! Votre compte a été créé.`
      });
    } catch (error) {
      console.error('Erreur lors de la création du compte:', error);
      setError(error instanceof Error ? error.message : 'Erreur lors de la création du compte');

      showNotification({
        type: 'error',
        title: 'Erreur de création',
        message: error instanceof Error ? error.message : 'Erreur lors de la création du compte'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction de déconnexion
  const logout = (): void => {
    try {
      authService.logout();
      setUser(null);
      setError(null);

      showNotification({
        type: 'success',
        title: 'Déconnexion réussie',
        message: 'Vous avez été déconnecté avec succès'
      });
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      showNotification({
        type: 'error',
        title: 'Erreur',
        message: 'Erreur lors de la déconnexion'
      });
    }
  };

  // Rafraîchir les informations utilisateur
  const refreshUser = async (): Promise<void> => {
    try {
      if (authService.isAuthenticated()) {
        const currentUser = authService.getCurrentUser();
        setUser(currentUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Erreur lors du rafraîchissement:', error);
      setUser(null);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
    refreshUser,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte d'authentification
const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
};

export { useAuth };
export default AuthProvider;

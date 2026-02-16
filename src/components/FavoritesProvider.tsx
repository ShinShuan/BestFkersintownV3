import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { favoritesService, FavoritesState } from '../services/favorites';
import { useAuth } from './AuthProvider';
import { useNotification } from './NotificationProvider';

interface FavoritesContextType extends FavoritesState {
  addFavorite: (productId: string) => Promise<void>;
  removeFavorite: (productId: string) => Promise<void>;
  isFavorite: (productId: string) => boolean;
  getFavoritesCount: () => number;
  clearAllFavorites: () => Promise<void>;
  refreshFavorites: () => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favoritesState, setFavoritesState] = useState<FavoritesState>({
    favorites: [],
    isLoading: false,
    error: null
  });

  const { user, isAuthenticated } = useAuth();
  const { showNotification } = useNotification();

  // Charger les favoris quand l'utilisateur se connecte
  useEffect(() => {
    if (user && isAuthenticated) {
      loadFavorites();
    } else {
      // Réinitialiser les favoris quand l'utilisateur se déconnecte
      setFavoritesState({
        favorites: [],
        isLoading: false,
        error: null
      });
    }
  }, [user]);

  // Charger les favoris
  const loadFavorites = async (): Promise<void> => {
    if (!user) return;

    try {
      setFavoritesState(prev => ({ ...prev, isLoading: true, error: null }));
      const favorites = await favoritesService.getUserFavorites(user.id);
      setFavoritesState({
        favorites,
        isLoading: false,
        error: null
      });
    } catch (error) {
      console.error('Erreur lors du chargement des favoris:', error);
      setFavoritesState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Erreur lors du chargement des favoris'
      }));
    }
  };

  // Ajouter un produit aux favoris
  const addFavorite = async (productId: string): Promise<void> => {
    if (!user) {
      showNotification({
        type: 'warning',
        title: 'Connexion requise',
        message: 'Vous devez être connecté pour ajouter des favoris'
      });
      return;
    }

    try {
      setFavoritesState(prev => ({ ...prev, isLoading: true, error: null }));

      const newFavorite = await favoritesService.addToFavorites(user.id, { id: productId, title: '', image: '', price: '' });

      setFavoritesState(prev => ({
        ...prev,
        favorites: [...prev.favorites, newFavorite],
        isLoading: false,
        error: null
      }));

      showNotification({
        type: 'success',
        title: 'Succès',
        message: 'Produit ajouté aux favoris'
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout du favori:', error);
      setFavoritesState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Erreur lors de l\'ajout du favori'
      }));
      showNotification({
        type: 'error',
        title: 'Erreur',
        message: 'Erreur lors de l\'ajout du favori'
      });
    }
  };

  // Supprimer un produit des favoris
  const removeFavorite = async (productId: string): Promise<void> => {
    if (!user) return;

    try {
      setFavoritesState(prev => ({ ...prev, isLoading: true, error: null }));

      await favoritesService.removeFromFavorites(user.id, productId);

      setFavoritesState(prev => ({
        ...prev,
        favorites: prev.favorites.filter(fav => fav.productId !== productId),
        isLoading: false,
        error: null
      }));

      showNotification({
        type: 'success',
        title: 'Succès',
        message: 'Produit retiré des favoris'
      });
    } catch (error) {
      console.error('Erreur lors de la suppression du favori:', error);
      setFavoritesState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Erreur lors de la suppression du favori'
      }));
      showNotification({
        type: 'error',
        title: 'Erreur',
        message: 'Erreur lors de la suppression du favori'
      });
    }
  };

  // Vérifier si un produit est dans les favoris
  const isFavorite = (productId: string): boolean => {
    return favoritesState.favorites.some(fav => fav.productId === productId);
  };

  // Obtenir le nombre de favoris
  const getFavoritesCount = (): number => {
    return favoritesState.favorites.length;
  };

  // Supprimer tous les favoris
  const clearAllFavorites = async (): Promise<void> => {
    if (!user) return;

    try {
      setFavoritesState(prev => ({ ...prev, isLoading: true, error: null }));

      await favoritesService.clearAllFavorites(user.id);

      setFavoritesState({
        favorites: [],
        isLoading: false,
        error: null
      });

      showNotification({
        type: 'success',
        title: 'Succès',
        message: 'Tous les favoris ont été supprimés'
      });
    } catch (error) {
      console.error('Erreur lors de la suppression de tous les favoris:', error);
      setFavoritesState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Erreur lors de la suppression de tous les favoris'
      }));
      showNotification({
        type: 'error',
        title: 'Erreur',
        message: 'Erreur lors de la suppression de tous les favoris'
      });
    }
  };

  // Rafraîchir les favoris
  const refreshFavorites = async (): Promise<void> => {
    await loadFavorites();
  };

  const value: FavoritesContextType = {
    ...favoritesState,
    addFavorite,
    removeFavorite,
    isFavorite,
    getFavoritesCount,
    clearAllFavorites,
    refreshFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte des favoris
const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites doit être utilisé dans un FavoritesProvider');
  }
  return context;
};

export { useFavorites };
export default FavoritesProvider;

import axios from 'axios';
import { ENV_CONFIG } from '../../environment.config.js';

// Types pour les favoris
export interface Favorite {
  id: string;
  productId: string;
  productTitle: string;
  productImage?: string;
  productPrice?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface FavoritesState {
  favorites: Favorite[];
  isLoading: boolean;
  error: string | null;
}

// Service pour gérer les favoris
export const favoritesService = {
  // Récupérer tous les favoris d'un utilisateur
  async getUserFavorites(userId: string): Promise<Favorite[]> {
    try {
      // Vérifier d'abord le localStorage
      const localFavorites = this.getLocalFavorites(userId);

      // Si on a des favoris locaux, on les retourne
      if (localFavorites.length > 0) {
        return localFavorites;
      }

      // Sinon, essayer de récupérer depuis le serveur (si l'utilisateur est connecté)
      if (userId && userId !== 'anonymous') {
        try {
          const response = await axios.get(`${ENV_CONFIG.APP.API_URL}/favorites/${userId}`);
          const favorites = response.data;
          this.saveLocalFavorites(userId, favorites);
          return favorites;
        } catch (error) {
          console.warn('Impossible de récupérer les favoris depuis le serveur:', error);
          return [];
        }
      }

      return [];
    } catch (error) {
      console.error('Erreur lors de la récupération des favoris:', error);
      return [];
    }
  },

  // Ajouter un produit aux favoris
  async addToFavorites(userId: string, product: {
    id: string;
    title: string;
    image?: string;
    price?: string;
  }): Promise<Favorite> {
    try {
      const favorite: Favorite = {
        id: `fav_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        productId: product.id,
        productTitle: product.title,
        productImage: product.image,
        productPrice: product.price,
        userId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      // Ajouter aux favoris locaux
      const currentFavorites = this.getLocalFavorites(userId);
      const updatedFavorites = [...currentFavorites, favorite];
      this.saveLocalFavorites(userId, updatedFavorites);

      // Synchroniser avec le serveur si l'utilisateur est connecté
      if (userId && userId !== 'anonymous') {
        try {
          await axios.post(`${ENV_CONFIG.APP.API_URL}/favorites`, favorite);
        } catch (error) {
          console.warn('Impossible de synchroniser avec le serveur:', error);
        }
      }

      return favorite;
    } catch (error) {
      console.error('Erreur lors de l\'ajout aux favoris:', error);
      throw error;
    }
  },

  // Retirer un produit des favoris
  async removeFromFavorites(userId: string, productId: string): Promise<void> {
    try {
      // Retirer des favoris locaux
      const currentFavorites = this.getLocalFavorites(userId);
      const updatedFavorites = currentFavorites.filter(fav => fav.productId !== productId);
      this.saveLocalFavorites(userId, updatedFavorites);

      // Synchroniser avec le serveur si l'utilisateur est connecté
      if (userId && userId !== 'anonymous') {
        try {
          await axios.delete(`${ENV_CONFIG.APP.API_URL}/favorites/${userId}/${productId}`);
        } catch (error) {
          console.warn('Impossible de synchroniser avec le serveur:', error);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la suppression des favoris:', error);
      throw error;
    }
  },

  // Vérifier si un produit est dans les favoris
  isProductFavorited(userId: string, productId: string): boolean {
    try {
      const favorites = this.getLocalFavorites(userId);
      return favorites.some(fav => fav.productId === productId);
    } catch (error) {
      console.error('Erreur lors de la vérification des favoris:', error);
      return false;
    }
  },

  // Obtenir le nombre de favoris
  getFavoritesCount(userId: string): number {
    try {
      const favorites = this.getLocalFavorites(userId);
      return favorites.length;
    } catch (error) {
      console.error('Erreur lors du comptage des favoris:', error);
      return 0;
    }
  },

  // Synchroniser les favoris avec le serveur
  async syncFavorites(userId: string): Promise<void> {
    try {
      if (!userId || userId === 'anonymous') return;

      const localFavorites = this.getLocalFavorites(userId);

      // Envoyer les favoris locaux au serveur
      await axios.post(`${ENV_CONFIG.APP.API_URL}/favorites/sync`, {
        userId,
        favorites: localFavorites
      });

      // Récupérer les favoris du serveur
      const response = await axios.get(`${ENV_CONFIG.APP.API_URL}/favorites/${userId}`);
      const serverFavorites = response.data;

      // Fusionner et sauvegarder
      const mergedFavorites = this.mergeFavorites(localFavorites, serverFavorites);
      this.saveLocalFavorites(userId, mergedFavorites);
    } catch (error) {
      console.error('Erreur lors de la synchronisation des favoris:', error);
    }
  },

  // Méthodes utilitaires pour le localStorage
  getLocalFavorites(userId: string): Favorite[] {
    try {
      const key = `favorites_${userId}`;
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Erreur lors de la lecture des favoris locaux:', error);
      return [];
    }
  },

  saveLocalFavorites(userId: string, favorites: Favorite[]): void {
    try {
      const key = `favorites_${userId}`;
      localStorage.setItem(key, JSON.stringify(favorites));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des favoris locaux:', error);
    }
  },

  // Fusionner les favoris locaux et serveur
  mergeFavorites(localFavorites: Favorite[], serverFavorites: Favorite[]): Favorite[] {
    const merged = new Map<string, Favorite>();

    // Ajouter les favoris locaux
    localFavorites.forEach(fav => {
      merged.set(fav.productId, fav);
    });

    // Ajouter les favoris serveur (priorité aux plus récents)
    serverFavorites.forEach(fav => {
      const existing = merged.get(fav.productId);
      if (!existing || new Date(fav.updatedAt) > new Date(existing.updatedAt)) {
        merged.set(fav.productId, fav);
      }
    });

    return Array.from(merged.values());
  },

  // Supprimer tous les favoris d'un utilisateur
  async clearAllFavorites(userId: string): Promise<void> {
    try {
      // Supprimer des favoris locaux
      this.saveLocalFavorites(userId, []);

      // Synchroniser avec le serveur si l'utilisateur est connecté
      if (userId && userId !== 'anonymous') {
        try {
          await axios.delete(`${ENV_CONFIG.APP.API_URL}/favorites/${userId}/all`);
        } catch (error) {
          console.warn('Impossible de synchroniser avec le serveur:', error);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de tous les favoris:', error);
      throw error;
    }
  },

  // Nettoyer les favoris orphelins
  cleanupOrphanedFavorites(): void {
    try {
      const keys = Object.keys(localStorage);
      const favoriteKeys = keys.filter(key => key.startsWith('favorites_'));

      favoriteKeys.forEach(key => {
        const favorites = JSON.parse(localStorage.getItem(key) || '[]');
        if (favorites.length === 0) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error('Erreur lors du nettoyage des favoris:', error);
    }
  }
};

export default favoritesService;

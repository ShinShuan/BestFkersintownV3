import axios from 'axios';
import { customerService } from './bigcommerce';
import { ENV_CONFIG } from '../../environment.config.js';

// Configuration Google OAuth
const GOOGLE_CLIENT_ID = ENV_CONFIG.GOOGLE.CLIENT_ID;
const GOOGLE_CLIENT_SECRET = ENV_CONFIG.GOOGLE.CLIENT_SECRET;

// Types pour l'authentification
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  isAuthenticated: boolean;
  bcCustomerId?: string;
  googleId?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

// Service d'authentification
export const authService = {
  // Connexion par email (version simplifiée pour BigCommerce)
  async login(email: string, password: string): Promise<User> {
    try {
      const customer = await customerService.getCustomerByEmail(email);
      if (!customer) {
        throw new Error('Utilisateur non trouvé');
      }

      // Note: Dans une vraie application BigCommerce headless, 
      // la vérification du mot de passe se fait via un JWT généré par le serveur.
      // Ici, nous simulons la connexion pour la démonstration.
      const user: User = {
        id: customer.id.toString(),
        email: customer.email,
        firstName: customer.first_name,
        lastName: customer.last_name,
        isAuthenticated: true,
        bcCustomerId: customer.id.toString()
      };

      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  },

  // Inscription (version simplifiée pour BigCommerce)
  async register(userData: { email: string; firstName: string; lastName: string; password?: string }): Promise<User> {
    try {
      const customer = await customerService.createCustomer({
        email: userData.email,
        first_name: userData.firstName,
        last_name: userData.lastName
      });

      const user: User = {
        id: customer.id.toString(),
        email: customer.email,
        firstName: customer.first_name,
        lastName: customer.last_name,
        isAuthenticated: true,
        bcCustomerId: customer.id.toString()
      };

      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      throw error;
    }
  },

  // Initialiser l'authentification Google
  initGoogleAuth(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: this.handleGoogleSignIn.bind(this),
          auto_select: false,
          cancel_on_tap_outside: true,
        });
        resolve();
      } else {
        reject(new Error('Google API non chargée'));
      }
    });
  },

  // Gérer la connexion Google
  async handleGoogleSignIn(response: any): Promise<User> {
    try {
      const { credential } = response;
      const payload = JSON.parse(atob(credential.split('.')[1]));

      // Créer ou récupérer l'utilisateur BigCommerce
      const bcCustomer = await this.createOrGetBigCommerceCustomer({
        email: payload.email,
        firstName: payload.given_name,
        lastName: payload.family_name,
        googleId: payload.sub,
        avatar: payload.picture
      });

      const user: User = {
        id: bcCustomer.id.toString(),
        email: bcCustomer.email,
        firstName: bcCustomer.first_name,
        lastName: bcCustomer.last_name,
        avatar: payload.picture,
        isAuthenticated: true,
        bcCustomerId: bcCustomer.id.toString(),
        googleId: payload.sub
      };

      // Sauvegarder en localStorage
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('googleToken', credential);

      return user;
    } catch (error) {
      console.error('Erreur lors de la connexion Google:', error);
      throw error;
    }
  },

  // Créer ou récupérer un client BigCommerce
  async createOrGetBigCommerceCustomer(userData: {
    email: string;
    firstName: string;
    lastName: string;
    googleId: string;
    avatar?: string;
  }): Promise<any> {
    try {
      // Vérifier si le client existe déjà
      let customer = await customerService.getCustomerByEmail(userData.email);

      if (!customer) {
        // Créer un nouveau client
        customer = await customerService.createCustomer({
          email: userData.email,
          first_name: userData.firstName,
          last_name: userData.lastName,
          company: `Google User ${userData.googleId}`
        });
      } else {
        // Mettre à jour les informations si nécessaire
        const updatedData: any = {
          first_name: userData.firstName,
          last_name: userData.lastName
        };

        customer = await customerService.updateCustomer(customer.id, updatedData);
      }

      return customer;
    } catch (error) {
      console.error('Erreur lors de la création/récupération du client BigCommerce:', error);
      throw error;
    }
  },

  // Connexion Google (Popup)
  loginWithGoogle(): Promise<{ customer: any; accessToken?: string }> {
    return new Promise((resolve, reject) => {
      if (!window.google) {
        reject(new Error('Google API non chargée'));
        return;
      }

      // La callback est déjà configurée dans initGoogleAuth
      // Mais nous devons écraser la callback pour cette promesse spécifique si on veut le résultat ici
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: async (response: any) => {
          try {
            const user = await this.handleGoogleSignIn(response);
            resolve({
              customer: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
              }
            });
          } catch (error) {
            reject(error);
          }
        },
        auto_select: false,
        cancel_on_tap_outside: true,
      });

      window.google.accounts.id.prompt();
    });
  },

  // Déconnexion
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('googleToken');

    // Déconnexion Google
    if (window.google) {
      // window.google.accounts.id.disableAutoSelect();
    }
  },

  // Récupérer l'utilisateur depuis le localStorage
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      user.isAuthenticated = true;
      return user;
    }
    return null;
  },

  // Vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  },

  // Rafraîchir le token Google
  async refreshGoogleToken(): Promise<string | null> {
    const token = localStorage.getItem('googleToken');
    if (!token) return null;

    try {
      // Vérifier si le token est encore valide
      const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?access_token=${token}`);
      return token;
    } catch (error) {
      // Token expiré, déconnecter l'utilisateur
      this.logout();
      return null;
    }
  }
};

// Extension de l'objet Window pour Google
// Types Google déjà déclarés dans global.d.ts

export default authService;

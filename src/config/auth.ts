// Configuration d'authentification
export const AUTH_CONFIG = {
  // Google OAuth Configuration
  GOOGLE: {
    CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID',
    CLIENT_SECRET: import.meta.env.VITE_GOOGLE_CLIENT_SECRET || 'YOUR_GOOGLE_CLIENT_SECRET',
    REDIRECT_URI: import.meta.env.VITE_GOOGLE_REDIRECT_URI || window.location.origin,
  },


  // App Configuration
  APP: {
    NAME: 'BestF.kersinTown',
    VERSION: '1.0.0',
    ENVIRONMENT: import.meta.env.MODE || 'development',
  }
};

// Instructions pour configurer Google OAuth :
// 1. Allez sur https://console.cloud.google.com/
// 2. Créez un nouveau projet ou sélectionnez un projet existant
// 3. Activez l'API Google+ API
// 4. Allez dans "Credentials" et créez un "OAuth 2.0 Client ID"
// 5. Configurez les URIs de redirection autorisés :
//    - http://localhost:3000 (pour le développement)
//    - https://votre-domaine.com (pour la production)
// 6. Copiez le Client ID et le Client Secret
// 7. Créez un fichier .env.local à la racine du projet avec :
//    REACT_APP_GOOGLE_CLIENT_ID=votre_client_id
//    REACT_APP_GOOGLE_CLIENT_SECRET=votre_client_secret

export default AUTH_CONFIG;

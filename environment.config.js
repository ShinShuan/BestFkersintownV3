// Configuration d'environnement pour l'application
export const ENV_CONFIG = {
  // BigCommerce Configuration (NEW - Migration from Shopify)
  BIGCOMMERCE: {
    STORE_HASH: import.meta.env.VITE_BIGCOMMERCE_STORE_HASH || 'qdy1j8i5vg',
    CLIENT_ID: import.meta.env.VITE_BIGCOMMERCE_CLIENT_ID || '',
    ACCESS_TOKEN: import.meta.env.VITE_BIGCOMMERCE_ACCESS_TOKEN || '',
    CLIENT_SECRET: import.meta.env.VITE_BIGCOMMERCE_CLIENT_SECRET || '',
    API_URL: import.meta.env.VITE_BIGCOMMERCE_API_URL || 'https://api.bigcommerce.com/stores/qdy1j8i5vg/v3',
    STOREFRONT_URL: import.meta.env.VITE_BIGCOMMERCE_STOREFRONT_URL || 'https://store-qdy1j8i5vg.mybigcommerce.com',
  },

  // Shopify Configuration (DEPRECATED - Keeping for reference during migration)
  SHOPIFY: {
    STORE_URL: import.meta.env.VITE_SHOPIFY_STORE_URL || 'jwbq9j-z9.myshopify.com',
    ADMIN_ACCESS_TOKEN: import.meta.env.VITE_SHOPIFY_ADMIN_ACCESS_TOKEN || '',
    STOREFRONT_ACCESS_TOKEN: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
    FRONTEND_API_KEY: import.meta.env.VITE_SHOPIFY_FRONTEND_API_KEY || '',
    FRONTEND_API_SECRET: import.meta.env.VITE_SHOPIFY_FRONTEND_API_SECRET || '',
  },

  // Google OAuth Configuration
  GOOGLE: {
    CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID',
    CLIENT_SECRET: import.meta.env.VITE_GOOGLE_CLIENT_SECRET || 'YOUR_GOOGLE_CLIENT_SECRET',
    REDIRECT_URI: import.meta.env.VITE_GOOGLE_REDIRECT_URI || 'http://localhost:3000',
  },

  // Stripe Configuration
  STRIPE: {
    PUBLISHABLE_KEY: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_stripe_publishable_key_here',
    SECRET_KEY: import.meta.env.VITE_STRIPE_SECRET_KEY || 'sk_test_your_stripe_secret_key_here',
  },

  // App Configuration
  APP: {
    NAME: import.meta.env.VITE_APP_NAME || 'BestF.kersinTown',
    URL: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
    API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
    ENVIRONMENT: import.meta.env.MODE || 'development',
  },

  // Mailchimp Configuration
  MAILCHIMP: {
    API_KEY: import.meta.env.VITE_MAILCHIMP_API_KEY || 'your_mailchimp_api_key_here',
    LIST_ID: import.meta.env.VITE_MAILCHIMP_LIST_ID || 'your_mailchimp_list_id_here',
    SERVER_PREFIX: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX || 'us1',
  },

  // Airtable Configuration
  AIRTABLE: {
    API_KEY: import.meta.env.VITE_AIRTABLE_API_KEY || 'your_airtable_api_key_here',
    BASE_ID: import.meta.env.VITE_AIRTABLE_BASE_ID || 'your_airtable_base_id_here',
  },
};

export default ENV_CONFIG;

declare module '../../environment.config.js' {
  export interface ENV_CONFIG {
    SHOPIFY: {
      STORE_URL: string;
      ADMIN_ACCESS_TOKEN: string;
      STOREFRONT_ACCESS_TOKEN: string;
      FRONTEND_API_KEY: string;
      FRONTEND_API_SECRET: string;
    };
    GOOGLE: {
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      REDIRECT_URI: string;
    };
    STRIPE: {
      PUBLISHABLE_KEY: string;
      SECRET_KEY: string;
    };
    APP: {
      NAME: string;
      URL: string;
      API_URL: string;
      ENVIRONMENT: string;
    };
    MAILCHIMP: {
      API_KEY: string;
      LIST_ID: string;
      SERVER_PREFIX: string;
    };
    AIRTABLE: {
      API_KEY: string;
      BASE_ID: string;
    };
  }

  export const ENV_CONFIG: ENV_CONFIG;
}

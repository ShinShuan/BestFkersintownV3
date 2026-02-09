/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_CLIENT_ID: string
  readonly VITE_GOOGLE_CLIENT_SECRET: string
  readonly VITE_GOOGLE_REDIRECT_URI: string
  readonly VITE_SHOPIFY_STORE_URL: string
  readonly VITE_SHOPIFY_ADMIN_TOKEN: string
  readonly VITE_SHOPIFY_STOREFRONT_TOKEN: string
  readonly VITE_MAILCHIMP_API_KEY: string
  readonly VITE_MAILCHIMP_LIST_ID: string
  readonly VITE_MAILCHIMP_SERVER_PREFIX: string
  readonly VITE_AIRTABLE_API_KEY: string
  readonly VITE_AIRTABLE_BASE_ID: string
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  readonly VITE_STRIPE_SECRET_KEY: string
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_FACEBOOK_PIXEL_ID: string
  readonly VITE_SMTP_HOST: string
  readonly VITE_SMTP_PORT: string
  readonly VITE_SMTP_USER: string
  readonly VITE_SMTP_PASS: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_URL: string
  readonly VITE_API_URL: string
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

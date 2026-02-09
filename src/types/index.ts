// Types pour les produits
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  variants: ProductVariant[];
  available: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
  likes: number;
  isLiked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  available: boolean;
  options: ProductOption[];
}

export interface ProductOption {
  name: string;
  value: string;
}

// Types pour le panier
export interface CartItem {
  id: string;
  productId: string;
  variantId?: string;
  shopifyVariantId?: string; // ID Shopify pour la synchronisation
  title: string;
  price: number;
  quantity: number;
  image: string;
  options?: ProductOption[];
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  itemCount: number;
}

// Types pour l'utilisateur
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: string[]; // IDs des produits
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: string;
  type: 'billing' | 'shipping';
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  country: string;
  zip: string;
  phone?: string;
  isDefault: boolean;
}

// Types pour les commandes
export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  options?: ProductOption[];
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

// Types pour les catégories
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  children?: Category[];
  productCount: number;
}

// Types pour les articles de blog
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  views: number;
}

// Types pour les votes
export interface Vote {
  id: string;
  productId: string;
  userId: string;
  vote: number; // 1-5
  comment?: string;
  createdAt: string;
}

// Types pour les engagements
export interface Commitment {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'environmental' | 'social' | 'ethical';
  metrics?: {
    label: string;
    value: string;
  }[];
}

// Types pour les goodies
export interface Goodie {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  available: boolean;
  featured: boolean;
}

// Types pour l'internationalisation
export interface Translation {
  [key: string]: string | Translation;
}

// Types pour les filtres de recherche
export interface ProductFilters {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  tags?: string[];
  availability?: 'in_stock' | 'out_of_stock' | 'all';
  sortBy?: 'price_asc' | 'price_desc' | 'newest' | 'popular' | 'rating';
}

// Types pour les notifications
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Types pour les paramètres de l'application
export interface AppSettings {
  theme: 'gradient' | 'alternative';
  language: 'fr' | 'en';
  currency: 'EUR' | 'USD';
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Cart, CartItem, Product } from '../types';
import { cartService } from '../services/bigcommerce';

// Type pour le panier BigCommerce
interface BigCommerceCart {
  id: string;
  customer_id: number;
  channel_id: number;
  email: string;
  currency: { code: string };
  tax_included: boolean;
  base_amount: number;
  discount_amount: number;
  cart_amount: number;
  line_items: {
    physical_items: BigCommerceLineItem[];
    digital_items: BigCommerceLineItem[];
    custom_items: any[];
    gift_certificates: any[];
  };
  created_time: string;
  updated_time: string;
  locale: string;
}

interface BigCommerceLineItem {
  id: string;
  parent_id: number | null;
  variant_id: number;
  product_id: number;
  sku: string;
  name: string;
  url: string;
  quantity: number;
  taxable: boolean;
  image_url: string;
  discounts: any[];
  coupons: any[];
  discount_amount: number;
  coupon_amount: number;
  list_price: number;
  sale_price: number;
  extended_list_price: number;
  extended_sale_price: number;
  is_require_shipping: boolean;
  is_mutable: boolean;
  options: { name: string; value: string; nameId: number; valueId: number }[];
}

interface CartContextType {
  cart: Cart;
  bigcommerceCart: BigCommerceCart | null;
  addToCart: (product: Product, quantity?: number, variantId?: string) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getItemCount: () => number;
  getTotal: () => number;
  syncWithBigCommerce: () => Promise<void>;
  getCheckoutUrl: () => Promise<string>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const calculateCartTotals = (items: CartItem[]): Omit<Cart, 'items'> => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  // TVA comprise dans le prix : on calcule la TVA contenue dans le prix TTC
  const tax = subtotal * 0.20 / 1.20; // TVA 20% extraite du prix TTC
  const shipping = subtotal > 50 ? 0 : 5.99; // Livraison gratuite au-dessus de 50 EUR
  const total = subtotal + shipping; // Le prix est deja TTC, on ajoute juste la livraison
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    subtotal,
    tax,
    shipping,
    total,
    itemCount
  };
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // Charger le panier depuis localStorage pour l'etat initial
  const getInitialCart = (): Cart => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        console.log('Chargement du panier initial depuis localStorage:', parsedCart);
        return parsedCart;
      } catch (error) {
        console.error('Erreur lors du chargement du panier initial:', error);
      }
    }
    return {
      items: [],
      subtotal: 0,
      tax: 0,
      shipping: 0,
      total: 0,
      itemCount: 0
    };
  };

  const [cart, setCart] = useState<Cart>(getInitialCart);
  const [bigcommerceCart, setBigcommerceCart] = useState<BigCommerceCart | null>(null);
  const [bigcommerceCartId, setBigcommerceCartId] = useState<string | null>(() => {
    return localStorage.getItem('bigcommerce_cart_id');
  });

  // Sauvegarder le panier dans localStorage a chaque modification
  useEffect(() => {
    console.log('Sauvegarde du panier:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Emettre un evenement pour notifier les autres composants
    window.dispatchEvent(new CustomEvent('cartStateChanged', {
      detail: { cart }
    }));
  }, [cart]);

  // Sauvegarder l'ID du panier BigCommerce
  useEffect(() => {
    if (bigcommerceCartId) {
      localStorage.setItem('bigcommerce_cart_id', bigcommerceCartId);
    }
  }, [bigcommerceCartId]);

  // Ecouter les changements de localStorage depuis d'autres onglets/fenetres
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cart' && e.newValue) {
        try {
          const newCart = JSON.parse(e.newValue);
          console.log('Panier mis a jour depuis localStorage:', newCart);
          setCart(newCart);
        } catch (error) {
          console.error('Erreur lors du parsing du panier:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addToCart = async (product: Product, quantity: number = 1, variantId?: string): Promise<void> => {
    try {
      console.log('addToCart appele avec:', { product: product.title, quantity, variantId });

      // Utiliser la premiere variante si aucune n'est specifiee
      const selectedVariantId = variantId || product.variants?.[0]?.id;

      if (!selectedVariantId) {
        throw new Error('Aucune variante disponible pour ce produit');
      }

      console.log('Variante selectionnee:', selectedVariantId);

      const existingItem = cart.items.find(item =>
        item.productId === product.id && item.variantId === selectedVariantId
      );

      console.log('Article existant trouve:', existingItem);

      if (existingItem) {
        console.log('Mise a jour de la quantite existante');
        const updatedItems = cart.items.map(item =>
          item.productId === product.id && item.variantId === selectedVariantId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        const totals = calculateCartTotals(updatedItems);
        console.log('Nouveaux totaux:', totals);
        setCart(prevCart => {
          const newCart = { ...prevCart, items: updatedItems, ...totals };
          console.log('Nouveau panier:', newCart);
          return newCart;
        });
      } else {
        console.log('Ajout d\'un nouvel article');
        const newItem: CartItem = {
          id: `${product.id}-${selectedVariantId}-${Date.now()}`,
          productId: product.id,
          variantId: selectedVariantId,
          title: product.title,
          price: product.price,
          quantity,
          image: product.images[0] || '',
          options: product.variants?.find(v => v.id === selectedVariantId)?.options || []
        };
        console.log('Nouvel article cree:', newItem);

        const updatedItems = [...cart.items, newItem];
        const totals = calculateCartTotals(updatedItems);
        console.log('Nouveaux totaux:', totals);

        setCart(prevCart => {
          const newCart = { ...prevCart, items: updatedItems, ...totals };
          console.log('Nouveau panier:', newCart);
          return newCart;
        });
      }

      console.log('addToCart termine avec succes');

      // Synchroniser avec BigCommerce
      try {
        await syncWithBigCommerce();
      } catch (error) {
        console.warn('Erreur lors de la synchronisation BigCommerce:', error);
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout au panier:', error);
      throw error;
    }
  };

  const removeFromCart = async (itemId: string): Promise<void> => {
    try {
      const itemToRemove = cart.items.find(item => item.id === itemId);
      const updatedItems = cart.items.filter(item => item.id !== itemId);
      const totals = calculateCartTotals(updatedItems);
      setCart(prevCart => ({ ...prevCart, items: updatedItems, ...totals }));

      // Supprimer de BigCommerce si on a un panier
      if (bigcommerceCartId && itemToRemove) {
        try {
          // Trouver l'ID de la ligne dans BigCommerce
          const bcCart = await cartService.getCart(bigcommerceCartId);
          const bcItem = bcCart.line_items.physical_items.find(
            (item: BigCommerceLineItem) => item.product_id.toString() === itemToRemove.productId
          );
          if (bcItem) {
            await cartService.removeFromCart(bigcommerceCartId, bcItem.id);
          }
        } catch (error) {
          console.warn('Erreur lors de la suppression BigCommerce:', error);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du panier:', error);
      throw error;
    }
  };

  const updateQuantity = async (itemId: string, quantity: number): Promise<void> => {
    try {
      if (quantity <= 0) {
        await removeFromCart(itemId);
        return;
      }

      const itemToUpdate = cart.items.find(item => item.id === itemId);
      const updatedItems = cart.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );
      const totals = calculateCartTotals(updatedItems);
      setCart(prevCart => ({ ...prevCart, items: updatedItems, ...totals }));

      // Mettre a jour dans BigCommerce
      if (bigcommerceCartId && itemToUpdate) {
        try {
          const bcCart = await cartService.getCart(bigcommerceCartId);
          const bcItem = bcCart.line_items.physical_items.find(
            (item: BigCommerceLineItem) => item.product_id.toString() === itemToUpdate.productId
          );
          if (bcItem) {
            await cartService.updateCartItem(bigcommerceCartId, bcItem.id, quantity);
          }
        } catch (error) {
          console.warn('Erreur lors de la mise a jour BigCommerce:', error);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la mise a jour de la quantite:', error);
      throw error;
    }
  };

  const clearCart = async (): Promise<void> => {
    try {
      const emptyCart = {
        items: [],
        subtotal: 0,
        tax: 0,
        shipping: 0,
        total: 0,
        itemCount: 0
      };
      setCart(emptyCart);

      // Supprimer le panier BigCommerce
      if (bigcommerceCartId) {
        try {
          await cartService.deleteCart(bigcommerceCartId);
          setBigcommerceCartId(null);
          setBigcommerceCart(null);
          localStorage.removeItem('bigcommerce_cart_id');
        } catch (error) {
          console.warn('Erreur lors de la suppression du panier BigCommerce:', error);
        }
      }
    } catch (error) {
      console.error('Erreur lors du vidage du panier:', error);
      throw error;
    }
  };

  const getItemCount = (): number => {
    return cart.itemCount;
  };

  const getTotal = (): number => {
    return cart.total;
  };

  const syncWithBigCommerce = async (): Promise<void> => {
    try {
      console.log('Debut de la synchronisation avec BigCommerce...');

      if (cart.items.length === 0) {
        console.log('Panier vide, pas de synchronisation necessaire');
        return;
      }

      // Creer un panier BigCommerce s'il n'existe pas
      if (!bigcommerceCartId) {
        console.log('Creation d\'un nouveau panier BigCommerce...');
        const lineItems = cart.items.map(item => ({
          productId: parseInt(item.productId),
          variantId: item.variantId ? parseInt(item.variantId) : undefined,
          quantity: item.quantity
        }));

        const newCart = await cartService.createCart(lineItems);
        setBigcommerceCart(newCart);
        setBigcommerceCartId(newCart.id);
        console.log('Panier BigCommerce cree:', newCart.id);
      } else {
        // Recuperer le panier existant
        try {
          const existingCart = await cartService.getCart(bigcommerceCartId);
          setBigcommerceCart(existingCart);
          console.log('Panier BigCommerce existant recupere:', existingCart.id);
        } catch (error) {
          // Le panier n'existe plus, en creer un nouveau
          console.log('Panier BigCommerce expire, creation d\'un nouveau...');
          const lineItems = cart.items.map(item => ({
            productId: parseInt(item.productId),
            variantId: item.variantId ? parseInt(item.variantId) : undefined,
            quantity: item.quantity
          }));

          const newCart = await cartService.createCart(lineItems);
          setBigcommerceCart(newCart);
          setBigcommerceCartId(newCart.id);
        }
      }

      console.log('Synchronisation avec BigCommerce terminee');

      // Emettre un evenement pour notifier les autres composants
      window.dispatchEvent(new CustomEvent('cartUpdated', {
        detail: {
          cart: bigcommerceCart,
          timestamp: new Date()
        }
      }));
    } catch (error) {
      console.error('Erreur lors de la synchronisation avec BigCommerce:', error);
      throw error;
    }
  };

  const getCheckoutUrl = async (): Promise<string> => {
    try {
      if (!bigcommerceCartId) {
        // Creer un panier d'abord
        await syncWithBigCommerce();
      }

      if (bigcommerceCartId) {
        const checkoutUrl = await cartService.createCheckoutUrl(bigcommerceCartId);
        return checkoutUrl;
      }

      throw new Error('Impossible de creer l\'URL de checkout');
    } catch (error) {
      console.error('Erreur lors de la creation de l\'URL de checkout:', error);
      throw error;
    }
  };

  const value: CartContextType = {
    cart,
    bigcommerceCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount,
    getTotal,
    syncWithBigCommerce,
    getCheckoutUrl,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { useCart };
export default CartProvider;

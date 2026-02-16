import { useState, useEffect } from 'react';

interface UpsellTrigger {
  type: 'add_to_cart' | 'view_product' | 'cart_page' | 'checkout';
  productId?: string;
  category?: string;
}

interface UpsellOffer {
  id: string;
  type: 'bundle' | 'individual' | 'discount';
  title: string;
  description: string;
  products: string[];
  discount: number;
  originalPrice: number;
  finalPrice: number;
  validUntil?: Date;
}

export const useUpsell = () => {
  const [showUpsellModal, setShowUpsellModal] = useState(false);
  const [currentTrigger, setCurrentTrigger] = useState<UpsellTrigger | null>(null);
  const [upsellOffers, setUpsellOffers] = useState<UpsellOffer[]>([]);

  // Vérifier si l'utilisateur a déjà vu l'upsell récemment
  const hasSeenUpsellRecently = (triggerType: string): boolean => {
    const lastSeen = localStorage.getItem(`upsell_seen_${triggerType}`);
    if (!lastSeen) return false;

    const lastSeenDate = new Date(lastSeen);
    const now = new Date();
    const hoursSinceLastSeen = (now.getTime() - lastSeenDate.getTime()) / (1000 * 60 * 60);

    // Ne pas montrer l'upsell si vu il y a moins de 2 heures
    return hoursSinceLastSeen < 2;
  };

  // Marquer l'upsell comme vu
  const markUpsellAsSeen = (triggerType: string) => {
    localStorage.setItem(`upsell_seen_${triggerType}`, new Date().toISOString());
  };

  // Déclencher l'upsell
  const triggerUpsell = async (trigger: UpsellTrigger) => {
    // Vérifier si on ne doit pas montrer l'upsell
    if (hasSeenUpsellRecently(trigger.type)) {
      return false;
    }

    // Logique pour déterminer quand montrer l'upsell
    let shouldShow = false;

    switch (trigger.type) {
      case 'add_to_cart':
        // Montrer l'upsell après avoir ajouté un t-shirt au panier
        if (trigger.category?.toLowerCase().includes('tshirt')) {
          shouldShow = true;
        }
        break;

      case 'view_product':
        // Montrer l'upsell après avoir vu un produit pendant 30 secondes
        shouldShow = true;
        break;

      case 'cart_page':
        // Montrer l'upsell sur la page panier si il y a des t-shirts
        shouldShow = true;
        break;

      case 'checkout':
        // Montrer l'upsell avant le checkout
        shouldShow = true;
        break;
    }

    if (shouldShow) {
      // Vérifier qu'il y a des produits disponibles avant de montrer l'upsell
      try {
        const { productService } = await import('../services/bigcommerce');
        const response = await productService.getAllProducts();

        const availableProducts = response.products?.filter((product: any) => {
          return product.variants && product.variants.some((variant: any) =>
            variant.inventoryQuantity > 0 || variant.available
          );
        });

        if (availableProducts && availableProducts.length > 0) {
          setCurrentTrigger(trigger);
          setShowUpsellModal(true);
          markUpsellAsSeen(trigger.type);
          return true;
        }
      } catch (error) {
        console.error('Erreur lors de la vérification des produits disponibles:', error);
      }
    }

    return false;
  };

  // Fermer l'upsell
  const closeUpsell = () => {
    setShowUpsellModal(false);
    setCurrentTrigger(null);
  };

  // Générer des offres d'upsell personnalisées
  const generateUpsellOffers = (cartItems: any[], currentProduct?: any): UpsellOffer[] => {
    const offers: UpsellOffer[] = [];

    // Offre de lot de t-shirts
    const tshirtBundle: UpsellOffer = {
      id: 'tshirt-bundle',
      type: 'bundle',
      title: 'Lot de 3 T-shirts',
      description: 'Économisez en achetant le lot complet',
      products: ['upsell-1', 'upsell-2', 'upsell-3'],
      discount: 15.00,
      originalPrice: 74.97,
      finalPrice: 59.99
    };

    // Offre de réduction sur le prochain achat
    const nextPurchaseDiscount: UpsellOffer = {
      id: 'next-purchase-discount',
      type: 'discount',
      title: 'Réduction sur votre prochaine commande',
      description: 'Obtenez 10% de réduction sur votre prochaine commande',
      products: [],
      discount: 10,
      originalPrice: 0,
      finalPrice: 0
    };

    // Offre individuelle basée sur le produit actuel
    if (currentProduct) {
      const relatedOffer: UpsellOffer = {
        id: 'related-product',
        type: 'individual',
        title: 'Produit complémentaire',
        description: 'Complétez votre look avec ce produit assorti',
        products: ['related-1'],
        discount: 5.00,
        originalPrice: 29.99,
        finalPrice: 24.99
      };
      offers.push(relatedOffer);
    }

    offers.push(tshirtBundle, nextPurchaseDiscount);

    return offers;
  };

  // Vérifier si l'utilisateur est éligible pour l'upsell
  const isEligibleForUpsell = (cartItems: any[]): boolean => {
    // L'utilisateur est éligible s'il a des t-shirts dans son panier
    const hasTshirts = cartItems.some(item =>
      item.category?.toLowerCase().includes('tshirt') ||
      item.title?.toLowerCase().includes('t-shirt')
    );

    return hasTshirts;
  };

  // Calculer les économies potentielles
  const calculatePotentialSavings = (cartItems: any[]): number => {
    const tshirtCount = cartItems.filter(item =>
      item.category?.toLowerCase().includes('tshirt') ||
      item.title?.toLowerCase().includes('t-shirt')
    ).length;

    // Plus l'utilisateur a de t-shirts, plus les économies sont importantes
    if (tshirtCount >= 3) {
      return 25.00; // Économies maximales
    } else if (tshirtCount >= 2) {
      return 15.00;
    } else {
      return 10.00;
    }
  };

  // Obtenir des recommandations personnalisées basées sur les vrais produits Shopify
  const getPersonalizedRecommendations = async (cartItems: any[], userPreferences?: any): Promise<any[]> => {
    try {
      // Importer le service BigCommerce
      const { productService } = await import('../services/bigcommerce');
      const response = await productService.getAllProducts();

      if (response.products && response.products.length > 0) {
        // Filtrer les produits disponibles (en stock)
        const availableProducts = response.products
          .filter((product: any) => {
            // Vérifier si le produit a des variantes en stock
            return product.variants && product.variants.some((variant: any) =>
              variant.inventoryQuantity > 0 || variant.available
            );
          })
          .slice(0, 3) // Prendre les 3 premiers produits disponibles
          .map((shopifyProduct: any) => ({
            id: shopifyProduct.id.toString().split('/').pop() || shopifyProduct.id.toString(),
            title: shopifyProduct.title,
            price: parseFloat(shopifyProduct.variants[0]?.price || '0'),
            originalPrice: shopifyProduct.variants[0]?.compareAtPrice ?
              parseFloat(shopifyProduct.variants[0].compareAtPrice) : undefined,
            image: shopifyProduct.images[0]?.src || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
            category: shopifyProduct.productType || 'tshirt',
            reason: 'Produit disponible dans notre catalogue'
          }));

        return availableProducts;
      }
    } catch (error) {
      console.error('Erreur lors du chargement des recommandations:', error);
    }

    // Fallback si pas de produits disponibles
    return [];
  };

  return {
    showUpsellModal,
    currentTrigger,
    upsellOffers,
    triggerUpsell,
    closeUpsell,
    generateUpsellOffers,
    isEligibleForUpsell,
    calculatePotentialSavings,
    getPersonalizedRecommendations,
    hasSeenUpsellRecently
  };
};

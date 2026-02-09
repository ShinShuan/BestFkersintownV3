import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageProvider';
import { NotificationProvider } from './components/NotificationProvider';
import { AuthProvider } from './components/AuthProvider';
import { CartProvider } from './components/CartProvider';
import { FavoritesProvider } from './components/FavoritesProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CookieConsent from './components/CookieConsent';
import { useNewsletterModal } from './hooks/useNewsletterModal';
import NewsletterModal from './components/NewsletterModal';


// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import AboutPage from './pages/AboutPage';
import CommitmentsPage from './pages/CommitmentsPage';
import VotePage from './pages/VotePage';
import FavoritesPage from './pages/FavoritesPage';
import ShopifyCheckoutPage from './pages/ShopifyCheckoutPage';
import CheckoutTest from './components/CheckoutTest';
// import IntegrationTest from './components/IntegrationTest';
import SimpleCheckout from './components/SimpleCheckout';
import Diagnostic from './components/Diagnostic';
import QuickCheckout from './components/QuickCheckout';
import EmergencyCheckout from './components/EmergencyCheckout';
import UltraSimpleCheckout from './components/UltraSimpleCheckout';
import SimpleCartCheckout from './components/SimpleCartCheckout';
import DebugCartCheckout from './components/DebugCartCheckout';
import UltraSimplePayment from './components/UltraSimplePayment';
import ProductFinder from './components/ProductFinder';
import BigCommerceTest from './components/BigCommerceTest';
// import ProductionDebug from './components/ProductionDebug';

// Services
import { stockSyncService } from './services/stock-sync';

const App: React.FC = () => {
  const { showNewsletterModal, closeNewsletterModal } = useNewsletterModal();

  // Vérifier si le mode admin est activé via URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const adminParam = urlParams.get('admin');
    if (adminParam === 'true') {
      localStorage.setItem('adminMode', 'true');
      // Nettoyer l'URL pour ne pas exposer le paramètre
      window.history.replaceState({}, document.title, window.location.pathname);
      console.log('🔐 Mode admin activé via URL');
    }
  }, []);

  useEffect(() => {
    // Initialiser la synchronisation automatique du stock
    const initializeStockSync = async () => {
      try {
        console.log('🔄 Initialisation de la synchronisation du stock...');
        
        // Démarrer la synchronisation automatique toutes les 15 minutes
        const intervalId = stockSyncService.startAutoSync(15);
        
        // Stocker l'ID de l'intervalle pour pouvoir l'arrêter plus tard
        localStorage.setItem('stockSyncIntervalId', intervalId.toString());
        
        console.log('✅ Synchronisation du stock initialisée');
        
        // Écouter les événements de synchronisation
        const handleStockSyncCompleted = (event: CustomEvent) => {
          const { updates, timestamp, errorCount } = event.detail;
          console.log(`📦 Synchronisation terminée: ${updates.length} mises à jour, ${errorCount} erreurs`);
          
          // Émettre un événement global pour notifier l'application (une seule fois)
          if (updates.length > 0) {
            window.dispatchEvent(new CustomEvent('stockUpdated', {
              detail: { updates, timestamp, errorCount }
            }));
          }
        };

        const handleProductsUpdated = (event: CustomEvent) => {
          const { timestamp, syncState } = event.detail;
          console.log('📝 Produits mis à jour:', timestamp, syncState);
          
          // Émettre un événement global pour notifier l'application (une seule fois)
          window.dispatchEvent(new CustomEvent('productsRefreshed', {
            detail: { timestamp, syncState }
          }));
        };

        // Ajouter les écouteurs d'événements
        window.addEventListener('stockSyncCompleted', handleStockSyncCompleted as EventListener);
        window.addEventListener('productsUpdated', handleProductsUpdated as EventListener);
        
        // Nettoyer les écouteurs lors du démontage
        return () => {
          window.removeEventListener('stockSyncCompleted', handleStockSyncCompleted as EventListener);
          window.removeEventListener('productsUpdated', handleProductsUpdated as EventListener);
        };
        
      } catch (error) {
        console.error('❌ Erreur lors de l\'initialisation de la synchronisation du stock:', error);
      }
    };

    initializeStockSync();

    // Nettoyer lors du démontage du composant
    return () => {
      const intervalId = localStorage.getItem('stockSyncIntervalId');
      if (intervalId) {
        stockSyncService.stopAutoSync(intervalId as any);
        localStorage.removeItem('stockSyncIntervalId');
        console.log('🛑 Synchronisation du stock arrêtée');
      }
    };
  }, []);

  return (
    <LanguageProvider>
      <NotificationProvider>
        <AuthProvider>
          <CartProvider>
            <FavoritesProvider>
              <div className="App">
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product/:productId" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/commitments" element={<CommitmentsPage />} />
                    <Route path="/vote" element={<VotePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/checkout" element={<ShopifyCheckoutPage />} />
                    <Route path="/checkout/:checkoutId" element={<ShopifyCheckoutPage />} />
                    <Route path="/test/checkout" element={<CheckoutTest />} />
                    {/* <Route path="/test/integrations" element={<IntegrationTest />} /> */}
                    <Route path="/test/simple" element={<SimpleCheckout />} />
                    <Route path="/test/diagnostic" element={<Diagnostic />} />
                    <Route path="/quick-checkout" element={<QuickCheckout />} />
                    <Route path="/emergency" element={<EmergencyCheckout />} />
                    <Route path="/ultra-simple" element={<UltraSimpleCheckout />} />
                    <Route path="/cart-checkout" element={<SimpleCartCheckout />} />
                    <Route path="/debug-checkout" element={<DebugCartCheckout />} />
                                          <Route path="/ultra-payment" element={<UltraSimplePayment />} />
                      <Route path="/product-finder" element={<ProductFinder />} />
                      <Route path="/bigcommerce-test" element={<BigCommerceTest />} />
                      {/* <Route path="/production-debug" element={<ProductionDebug />} /> */}
                      <Route path="/checkout" element={<UltraSimplePayment />} />
                      <Route path="/checkout/:checkoutId" element={<UltraSimplePayment />} />
                  </Routes>
                </main>
                <Footer />
                <Chatbot />
                <CookieConsent onAccept={() => {}} onDecline={() => {}} />
                <NewsletterModal 
                  isOpen={showNewsletterModal} 
                  onClose={closeNewsletterModal} 
                />
        
              </div>
            </FavoritesProvider>
          </CartProvider>
        </AuthProvider>
      </NotificationProvider>
    </LanguageProvider>
  );
};

export default App;

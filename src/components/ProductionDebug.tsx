import React, { useState } from 'react';
import { ENV_CONFIG } from '../../environment.config.js';

const ProductionDebug: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [debugInfo, setDebugInfo] = useState<any>({});

  const testEnvironmentConfig = () => {
    setIsLoading(true);
    setStatus('🔍 Vérification de la configuration...');

    const config = {
      storeUrl: ENV_CONFIG.SHOPIFY.STORE_URL,
      storefrontToken: ENV_CONFIG.SHOPIFY.STOREFRONT_ACCESS_TOKEN,
      adminToken: ENV_CONFIG.SHOPIFY.ADMIN_ACCESS_TOKEN,
      appName: ENV_CONFIG.APP.NAME,
      environment: ENV_CONFIG.APP.ENVIRONMENT,
    };

    setDebugInfo(config);
    setStatus('✅ Configuration chargée');
    setIsLoading(false);
  };

  const testShopifyConnection = async () => {
    setIsLoading(true);
    setStatus('🔄 Test de connexion Shopify...');

    try {
      const response = await fetch(`https://${ENV_CONFIG.SHOPIFY.STORE_URL}/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': ENV_CONFIG.SHOPIFY.STOREFRONT_ACCESS_TOKEN
        },
        body: JSON.stringify({
          query: `
            query {
              shop {
                name
                primaryDomain {
                  url
                }
              }
            }
          `
        })
      });

      const data = await response.json();
      
      if (data.errors) {
        setStatus(`❌ Erreur Shopify: ${data.errors[0].message}`);
      } else {
        setStatus(`✅ Connexion Shopify réussie - Boutique: ${data.data.shop.name}`);
      }
    } catch (error: any) {
      setStatus(`❌ Erreur de connexion: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testCartCreation = async () => {
    setIsLoading(true);
    setStatus('🛒 Test de création de panier...');

    try {
      const response = await fetch(`https://${ENV_CONFIG.SHOPIFY.STORE_URL}/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': ENV_CONFIG.SHOPIFY.STOREFRONT_ACCESS_TOKEN
        },
        body: JSON.stringify({
          query: `
            mutation cartCreate($input: CartInput!) {
              cartCreate(input: $input) {
                cart {
                  id
                  checkoutUrl
                }
                userErrors {
                  field
                  message
                }
              }
            }
          `,
          variables: {
            input: {
              lines: [{
                merchandiseId: "gid://shopify/ProductVariant/51021723435351",
                quantity: 1
              }]
            }
          }
        })
      });

      const data = await response.json();
      
      if (data.errors) {
        setStatus(`❌ Erreur GraphQL: ${data.errors[0].message}`);
      } else if (data.data.cartCreate.userErrors.length > 0) {
        setStatus(`❌ Erreur création panier: ${data.data.cartCreate.userErrors[0].message}`);
      } else {
        const cart = data.data.cartCreate.cart;
        setStatus(`✅ Panier créé avec succès! ID: ${cart.id}`);
        setDebugInfo((prev: any) => ({ ...prev, cartId: cart.id, checkoutUrl: cart.checkoutUrl }));
      }
    } catch (error: any) {
      setStatus(`❌ Erreur lors de la création du panier: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const redirectToCheckout = () => {
    if (debugInfo.checkoutUrl) {
      window.open(debugInfo.checkoutUrl, '_blank');
      setStatus('🚀 Redirection vers le checkout...');
    } else {
      setStatus('❌ Aucune URL de checkout disponible');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>🔧 Diagnostic Production - BestF.kersinTown</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Outil de diagnostic pour identifier les problèmes en production
      </p>

      <div style={{ marginBottom: '20px' }}>
        <p><strong>Statut:</strong> {status}</p>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button 
          onClick={testEnvironmentConfig} 
          disabled={isLoading}
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          {isLoading ? 'Chargement...' : '1. Tester Configuration'}
        </button>

        <button 
          onClick={testShopifyConnection} 
          disabled={isLoading}
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          {isLoading ? 'Chargement...' : '2. Tester Connexion Shopify'}
        </button>

        <button 
          onClick={testCartCreation} 
          disabled={isLoading}
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '5px' }}
        >
          {isLoading ? 'Chargement...' : '3. Tester Création Panier'}
        </button>

        {debugInfo.checkoutUrl && (
          <button 
            onClick={redirectToCheckout}
            style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#d13296', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            🚀 Aller au Checkout
          </button>
        )}
      </div>

      {Object.keys(debugInfo).length > 0 && (
        <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
          <h3>📊 Informations de Debug:</h3>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>
      )}

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '5px' }}>
        <h3>🔍 Instructions de Diagnostic:</h3>
        <ol>
          <li><strong>Tester Configuration:</strong> Vérifie que les variables d'environnement sont chargées</li>
          <li><strong>Tester Connexion Shopify:</strong> Vérifie la connectivité avec l'API Shopify</li>
          <li><strong>Tester Création Panier:</strong> Teste la création d'un panier avec un produit</li>
          <li><strong>Aller au Checkout:</strong> Redirige vers la page de paiement Shopify</li>
        </ol>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px', border: '1px solid #ffeaa7' }}>
        <h3>⚠️ Problèmes Courants en Production:</h3>
        <ul>
          <li><strong>Variables d'environnement manquantes:</strong> Vérifiez que toutes les clés Shopify sont configurées</li>
          <li><strong>CORS:</strong> Assurez-vous que votre domaine est autorisé dans Shopify</li>
          <li><strong>Tokens expirés:</strong> Régénérez les tokens d'accès Shopify si nécessaire</li>
          <li><strong>Produits non publiés:</strong> Vérifiez que les produits sont actifs dans Shopify</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductionDebug;

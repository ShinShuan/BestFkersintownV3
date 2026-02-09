import React, { useState } from 'react';

const DebugCartCheckout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [debugInfo, setDebugInfo] = useState<any>(null);

  const testShopifyAPI = async () => {
    setIsLoading(true);
    setStatus('🔄 Test de l\'API Shopify...');

    try {
      const response = await fetch('https://jwbq9j-z9.myshopify.com/api/2024-01/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': 'afff8fcca0a9f7cb503473ac4b99bcdb'
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
      setDebugInfo({ type: 'shop_info', data });
      
      if (data.data?.shop) {
        setStatus(`✅ API Shopify OK - Boutique: ${data.data.shop.name}`);
      } else {
        setStatus(`❌ Erreur API: ${data.errors?.[0]?.message || 'Erreur inconnue'}`);
      }
    } catch (error) {
      setStatus(`❌ Erreur de connexion: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testCartCreate = async () => {
    setIsLoading(true);
    setStatus('🔄 Test de création de panier...');

    try {
      const response = await fetch('https://jwbq9j-z9.myshopify.com/api/2024-01/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': 'afff8fcca0a9f7cb503473ac4b99bcdb'
        },
        body: JSON.stringify({
          query: `
            mutation {
              cartCreate {
                cart {
                  id
                  checkoutUrl
                }
                userErrors {
                  code
                  field
                  message
                }
              }
            }
          `
        })
      });

      const data = await response.json();
      setDebugInfo({ type: 'cart_create', data });
      
      if (data.data?.cartCreate?.cart) {
        setStatus(`✅ Panier créé ! ID: ${data.data.cartCreate.cart.id}`);
        
        // Rediriger vers le checkout
        setTimeout(() => {
          window.location.href = data.data.cartCreate.cart.checkoutUrl;
        }, 2000);
      } else if (data.data?.cartCreate?.userErrors?.length > 0) {
        setStatus(`❌ Erreur création panier: ${data.data.cartCreate.userErrors[0].message}`);
      } else {
        setStatus(`❌ Erreur inconnue: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setStatus(`❌ Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testProducts = async () => {
    setIsLoading(true);
    setStatus('🔄 Récupération des produits...');

    try {
      const response = await fetch('https://jwbq9j-z9.myshopify.com/api/2024-01/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': 'afff8fcca0a9f7cb503473ac4b99bcdb'
        },
        body: JSON.stringify({
          query: `
            query {
              products(first: 5) {
                edges {
                  node {
                    id
                    title
                    variants(first: 3) {
                      edges {
                        node {
                          id
                          title
                          price {
                            amount
                            currencyCode
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        })
      });

      const data = await response.json();
      setDebugInfo({ type: 'products', data });
      
      if (data.data?.products?.edges) {
        const products = data.data.products.edges;
        setStatus(`✅ ${products.length} produits trouvés`);
      } else {
        setStatus(`❌ Erreur récupération produits: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setStatus(`❌ Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const createCartWithProduct = async () => {
    setIsLoading(true);
    setStatus('🔄 Création de panier avec produit...');

    try {
      const response = await fetch('https://jwbq9j-z9.myshopify.com/api/2024-01/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': 'afff8fcca0a9f7cb503473ac4b99bcdb'
        },
        body: JSON.stringify({
          query: `
            mutation cartCreate($input: CartInput!) {
              cartCreate(input: $input) {
                cart {
                  id
                  checkoutUrl
                  lines(first: 10) {
                    edges {
                      node {
                        id
                        quantity
                        merchandise {
                          ... on ProductVariant {
                            id
                            title
                            price {
                              amount
                              currencyCode
                            }
                            product {
                              title
                            }
                          }
                        }
                      }
                    }
                  }
                }
                userErrors {
                  code
                  field
                  message
                }
              }
            }
          `,
          variables: {
            input: {
              lines: [
                {
                  merchandiseId: "gid://shopify/ProductVariant/51021723435351", // T-shirt GG 1.1 - M
                  quantity: 1
                }
              ]
            }
          }
        })
      });

      const data = await response.json();
      setDebugInfo({ type: 'cart_with_product', data });
      
      if (data.data?.cartCreate?.cart) {
        setStatus(`✅ Panier avec produit créé ! Redirection...`);
        
        // Rediriger vers le checkout
        setTimeout(() => {
          window.location.href = data.data.cartCreate.cart.checkoutUrl;
        }, 2000);
      } else if (data.data?.cartCreate?.userErrors?.length > 0) {
        setStatus(`❌ Erreur: ${data.data.cartCreate.userErrors[0].message}`);
      } else {
        setStatus(`❌ Erreur inconnue: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setStatus(`❌ Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const goToShopifyDirectly = () => {
    setIsLoading(true);
    setStatus('🔄 Redirection vers Shopify...');
    
    setTimeout(() => {
      window.location.href = 'https://jwbq9j-z9.myshopify.com';
    }, 1000);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>🔍 Debug Checkout</h1>
      
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Testons l'API Shopify étape par étape pour identifier le problème.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={testShopifyAPI}
          disabled={isLoading}
          style={{
            background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1
          }}
        >
          Test API Shopify
        </button>

        <button
          onClick={testProducts}
          disabled={isLoading}
          style={{
            background: 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1
          }}
        >
          Récupérer les Produits
        </button>

        <button
          onClick={testCartCreate}
          disabled={isLoading}
          style={{
            background: 'linear-gradient(135deg, #ffc107 0%, #e0a800 100%)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1
          }}
        >
          Créer Panier Vide
        </button>

        <button
          onClick={createCartWithProduct}
          disabled={isLoading}
          style={{
            background: 'linear-gradient(135deg, #d13296 0%, #ff6b6b 100%)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1
          }}
        >
          Créer Panier avec Produit
        </button>

        <button
          onClick={goToShopifyDirectly}
          disabled={isLoading}
          style={{
            background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1
          }}
        >
          Aller Directement sur Shopify
        </button>
      </div>

      {status && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #dee2e6',
          fontFamily: 'monospace',
          fontSize: '0.9rem'
        }}>
          <strong>Statut :</strong><br />
          {status}
        </div>
      )}

      {debugInfo && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #dee2e6',
          textAlign: 'left'
        }}>
          <h3>Debug Info ({debugInfo.type}):</h3>
          <pre style={{
            fontSize: '0.8rem',
            overflow: 'auto',
            maxHeight: '300px',
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}>
            {JSON.stringify(debugInfo.data, null, 2)}
          </pre>
        </div>
      )}

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#fff3cd',
        borderRadius: '8px',
        border: '1px solid #ffeaa7'
      }}>
        <h3>💡 Instructions de Debug :</h3>
        <ol style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
          <li><strong>Test API Shopify</strong> - Vérifie la connexion de base</li>
          <li><strong>Récupérer les Produits</strong> - Liste les produits disponibles</li>
          <li><strong>Créer Panier Vide</strong> - Teste la création de panier simple</li>
          <li><strong>Créer Panier avec Produit</strong> - Teste avec un produit spécifique</li>
          <li><strong>Aller Directement sur Shopify</strong> - Solution de contournement</li>
        </ol>
      </div>
    </div>
  );
};

export default DebugCartCheckout;

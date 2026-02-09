import React, { useState } from 'react';

const ProductFinder: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<string>('');

  const fetchProducts = async () => {
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
              products(first: 10) {
                edges {
                  node {
                    id
                    title
                    handle
                    description
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                    variants(first: 5) {
                      edges {
                        node {
                          id
                          title
                          price {
                            amount
                            currencyCode
                          }
                          availableForSale
                          quantityAvailable
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
      
      if (data.data?.products?.edges) {
        const productList = data.data.products.edges.map((edge: any) => edge.node);
        setProducts(productList);
        setStatus(`✅ ${productList.length} produits trouvés`);
      } else {
        setStatus(`❌ Erreur: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setStatus(`❌ Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const createCartWithSelectedVariant = async () => {
    if (!selectedVariant) {
      setStatus('❌ Veuillez sélectionner un variant');
      return;
    }

    setIsLoading(true);
    setStatus('🔄 Création de panier avec le variant sélectionné...');

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
                  merchandiseId: selectedVariant,
                  quantity: 1
                }
              ]
            }
          }
        })
      });

      const data = await response.json();
      
      if (data.data?.cartCreate?.cart) {
        setStatus(`✅ Panier créé ! Redirection vers le checkout...`);
        
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
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>🔍 Trouveur de Produits</h1>
      
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Récupérez les vrais produits de votre boutique Shopify et créez un panier avec un variant valide.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={fetchProducts}
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
          {isLoading ? '🔄 Récupération...' : 'Récupérer les Produits'}
        </button>

        {products.length > 0 && (
          <button
            onClick={createCartWithSelectedVariant}
            disabled={isLoading || !selectedVariant}
            style={{
              background: 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: (isLoading || !selectedVariant) ? 'not-allowed' : 'pointer',
              opacity: (isLoading || !selectedVariant) ? 0.6 : 1
            }}
          >
            {isLoading ? '🔄 Création...' : 'Créer Panier avec Variant Sélectionné'}
          </button>
        )}
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

      {products.length > 0 && (
        <div style={{
          marginTop: '2rem',
          textAlign: 'left'
        }}>
          <h3>📦 Produits Disponibles :</h3>
          {products.map((product, index) => (
            <div key={product.id} style={{
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              backgroundColor: '#f8f9fa'
            }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
                {product.title}
              </h4>
              
              {product.images.edges.length > 0 && (
                <img 
                  src={product.images.edges[0].node.url} 
                  alt={product.images.edges[0].node.altText || product.title}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    marginBottom: '0.5rem'
                  }}
                />
              )}
              
              <p style={{ fontSize: '0.9rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                {product.description?.substring(0, 100)}...
              </p>
              
              <h5 style={{ margin: '0.5rem 0', color: '#495057' }}>Variants :</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.variants.edges.map((variantEdge: any) => {
                  const variant = variantEdge.node;
                  const isSelected = selectedVariant === variant.id;
                  
                  return (
                    <label key={variant.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.5rem',
                      border: isSelected ? '2px solid #007bff' : '1px solid #dee2e6',
                      borderRadius: '4px',
                      backgroundColor: isSelected ? '#e3f2fd' : 'white',
                      cursor: 'pointer'
                    }}>
                      <input
                        type="radio"
                        name="variant"
                        value={variant.id}
                        checked={isSelected}
                        onChange={(e) => setSelectedVariant(e.target.value)}
                        style={{ marginRight: '0.5rem' }}
                      />
                      <div>
                        <div style={{ fontWeight: 'bold' }}>{variant.title}</div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>
                          {variant.price.amount} {variant.price.currencyCode}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: variant.availableForSale ? '#28a745' : '#dc3545' }}>
                          {variant.availableForSale ? '✅ Disponible' : '❌ Indisponible'}
                          {variant.quantityAvailable !== null && ` (${variant.quantityAvailable} en stock)`}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#999', fontFamily: 'monospace' }}>
                          ID: {variant.id}
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#fff3cd',
        borderRadius: '8px',
        border: '1px solid #ffeaa7'
      }}>
        <h3>💡 Instructions :</h3>
        <ol style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
          <li><strong>Cliquez sur "Récupérer les Produits"</strong> pour lister tous vos produits</li>
          <li><strong>Sélectionnez un variant</strong> en cliquant sur le bouton radio</li>
          <li><strong>Cliquez sur "Créer Panier avec Variant Sélectionné"</strong> pour tester</li>
          <li><strong>Notez les variant IDs</strong> pour les utiliser dans votre code</li>
        </ol>
      </div>
    </div>
  );
};

export default ProductFinder;

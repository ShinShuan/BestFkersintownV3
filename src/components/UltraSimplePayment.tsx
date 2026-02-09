import React, { useState } from 'react';

const UltraSimplePayment: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const clearAllData = () => {
    setIsLoading(true);
    setStatus('🔄 Nettoyage des données...');
    
    try {
      // Nettoyer localStorage
      localStorage.clear();
      
      // Nettoyer sessionStorage
      sessionStorage.clear();
      
      // Nettoyer les cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      
      setStatus('✅ Données nettoyées !');
      
      setTimeout(() => {
        setStatus('');
        setIsLoading(false);
      }, 2000);
      
    } catch (error) {
      setStatus('❌ Erreur lors du nettoyage');
      setIsLoading(false);
    }
  };

  const goToShopifyDirect = () => {
    setIsLoading(true);
    setStatus('🔄 Redirection vers Shopify...');
    
    setTimeout(() => {
      window.open('https://jwbq9j-z9.myshopify.com', '_blank');
      setStatus('✅ Shopify ouvert dans un nouvel onglet !');
      setIsLoading(false);
    }, 1000);
  };

  const goToShopifyCheckout = () => {
    setIsLoading(true);
    setStatus('🔄 Redirection vers le checkout Shopify...');
    
    setTimeout(() => {
      window.open('https://jwbq9j-z9.myshopify.com/cart', '_blank');
      setStatus('✅ Checkout Shopify ouvert !');
      setIsLoading(false);
    }, 1000);
  };

  const createSimpleForm = () => {
    setIsLoading(true);
    setStatus('🔄 Création du formulaire de paiement...');
    
    setTimeout(() => {
      // Créer un formulaire simple qui redirige vers Shopify
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://jwbq9j-z9.myshopify.com/cart/add';
      form.target = '_blank';
      
      // Ajouter un produit de test
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'id';
      input.value = '10120166867287'; // Variant ID
      
      const quantityInput = document.createElement('input');
      quantityInput.type = 'hidden';
      quantityInput.name = 'quantity';
      quantityInput.value = '1';
      
      form.appendChild(input);
      form.appendChild(quantityInput);
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
      
      setStatus('✅ Formulaire envoyé vers Shopify !');
      setIsLoading(false);
    }, 1000);
  };

  const testDirectAPI = async () => {
    setIsLoading(true);
    setStatus('🔄 Test direct de l\'API...');
    
    try {
      // Test simple avec curl équivalent
      const response = await fetch('https://jwbq9j-z9.myshopify.com/api/2024-01/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': 'afff8fcca0a9f7cb503473ac4b99bcdb'
        },
        body: JSON.stringify({
          query: '{ shop { name } }'
        })
      });
      
      const data = await response.json();
      
      if (data.data?.shop) {
        setStatus(`✅ API OK - Boutique: ${data.data.shop.name}`);
      } else {
        setStatus(`❌ Erreur API: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setStatus(`❌ Erreur de connexion: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>💳 Paiement Ultra Simple</h1>
      
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Solutions de paiement directes et simples pour contourner les problèmes d'API.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={testDirectAPI}
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
          Test API Direct
        </button>

        <button
          onClick={goToShopifyDirect}
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
          Aller sur Shopify (Nouvel Onglet)
        </button>

        <button
          onClick={goToShopifyCheckout}
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
          Aller au Checkout Shopify
        </button>

        <button
          onClick={createSimpleForm}
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
          Ajouter au Panier (Formulaire)
        </button>

        <button
          onClick={clearAllData}
          disabled={isLoading}
          style={{
            background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
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
          Nettoyer Toutes les Données
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

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#fff3cd',
        borderRadius: '8px',
        border: '1px solid #ffeaa7'
      }}>
        <h3>💡 Solutions de Contournement :</h3>
        <ol style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
          <li><strong>Test API Direct</strong> - Vérifie si l'API répond</li>
          <li><strong>Aller sur Shopify</strong> - Ouvre la boutique dans un nouvel onglet</li>
          <li><strong>Aller au Checkout</strong> - Ouvre directement le panier</li>
          <li><strong>Ajouter au Panier</strong> - Utilise un formulaire HTML simple</li>
          <li><strong>Nettoyer les Données</strong> - Efface tout le cache local</li>
        </ol>
      </div>

      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#d1ecf1',
        borderRadius: '8px',
        border: '1px solid #bee5eb'
      }}>
        <h3>🔗 Liens Directs :</h3>
        <p style={{ margin: '0.5rem 0' }}>
          <a href="https://jwbq9j-z9.myshopify.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>
            🌐 Boutique Shopify
          </a>
        </p>
        <p style={{ margin: '0.5rem 0' }}>
          <a href="https://jwbq9j-z9.myshopify.com/cart" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>
            🛒 Panier Shopify
          </a>
        </p>
        <p style={{ margin: '0.5rem 0' }}>
          <a href="https://jwbq9j-z9.myshopify.com/collections/all" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>
            📦 Tous les Produits
          </a>
        </p>
      </div>

      <div style={{
        marginTop: '1rem',
        fontSize: '0.9rem',
        color: '#666',
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        borderRadius: '8px'
      }}>
        <h4>🚨 Si rien ne fonctionne :</h4>
        <p>1. Vérifiez que votre boutique Shopify est active</p>
        <p>2. Assurez-vous d'avoir des produits dans votre boutique</p>
        <p>3. Vérifiez les paramètres de paiement dans l'admin Shopify</p>
        <p>4. Contactez le support Shopify si nécessaire</p>
      </div>
    </div>
  );
};

export default UltraSimplePayment;

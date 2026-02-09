import React from 'react';

const UltraSimpleCheckout: React.FC = () => {
  const goToShopify = () => {
    window.location.href = 'https://jwbq9j-z9.myshopify.com';
  };

  const openShopify = () => {
    window.open('https://jwbq9j-z9.myshopify.com', '_blank');
  };

  const clearStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/';
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>🚨 CHECKOUT ULTRA-SIMPLE</h1>
      
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Le système de paiement ne fonctionne pas.<br />
        Utilisez ces boutons pour aller sur Shopify.
      </p>

      <button
        onClick={goToShopify}
        style={{
          background: 'linear-gradient(135deg, #d13296 0%, #ff6b6b 100%)',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          margin: '0.5rem',
          width: '100%'
        }}
      >
        ALLER SUR SHOPIFY MAINTENANT
      </button>

      <button
        onClick={openShopify}
        style={{
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          margin: '0.5rem',
          width: '100%'
        }}
      >
        OUVRIR SHOPIFY DANS UN NOUVEL ONGLET
      </button>

      <button
        onClick={clearStorage}
        style={{
          background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          margin: '0.5rem',
          width: '100%'
        }}
      >
        NETTOYER ET RETOURNER À L'ACCUEIL
      </button>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#fff3cd',
        borderRadius: '8px',
        border: '1px solid #ffeaa7'
      }}>
        <h3>💡 Instructions :</h3>
        <ol style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
          <li><strong>Cliquez sur "ALLER SUR SHOPIFY MAINTENANT"</strong> - Redirection directe</li>
          <li><strong>Si ça ne marche pas</strong>, cliquez sur "OUVRIR SHOPIFY DANS UN NOUVEL ONGLET"</li>
          <li><strong>Pour nettoyer</strong>, utilisez "NETTOYER ET RETOURNER À L'ACCUEIL"</li>
          <li><strong>Une fois sur Shopify</strong>, vous pourrez acheter normalement</li>
        </ol>
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <p>🔗 URL directe : <a href="https://jwbq9j-z9.myshopify.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>https://jwbq9j-z9.myshopify.com</a></p>
      </div>
    </div>
  );
};

export default UltraSimpleCheckout;

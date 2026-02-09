// Script pour rediriger le logo Shopify vers votre application personnalisée
// Ajoutez ce script dans votre thème Shopify via l'éditeur de thème

document.addEventListener('DOMContentLoaded', function() {
  // Trouver tous les liens du logo
  const logoLinks = document.querySelectorAll('a[href*="myshopify.com"], .header__logo-link, .logo-link');
  
  logoLinks.forEach(function(link) {
    // Vérifier si c'est bien le logo (pas un autre lien)
    const logoImg = link.querySelector('img');
    if (logoImg && (logoImg.alt.includes('BestF.kersInTown') || logoImg.alt.includes('BestFkersInTown'))) {
      // Intercepter le clic
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Rediriger vers votre application personnalisée
        // Remplacez par votre URL de production quand vous déployez
        window.open('http://localhost:3000', '_blank');
        
        // OU pour ouvrir dans le même onglet :
        // window.location.href = 'http://localhost:3000';
      });
      
      // Optionnel : changer le curseur pour indiquer que c'est cliquable
      link.style.cursor = 'pointer';
    }
  });
});

// Alternative : redirection directe pour tous les liens du logo
document.addEventListener('click', function(e) {
  const target = e.target.closest('a');
  if (target && target.href && target.href.includes('myshopify.com')) {
    const logoImg = target.querySelector('img');
    if (logoImg && (logoImg.alt.includes('BestF.kersInTown') || logoImg.alt.includes('BestFkersInTown'))) {
      e.preventDefault();
      window.open('http://localhost:3000', '_blank');
    }
  }
});

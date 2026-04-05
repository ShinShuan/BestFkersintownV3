import { useState, useEffect } from 'react';

export const useNewsletterModal = () => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà vu le modal
    const hasSeenModal = localStorage.getItem('newsletter_modal_seen');
    
    if (!hasSeenModal) {
      // Attendre 25 secondes avant d'afficher le modal
      const timer = setTimeout(() => {
        setShowNewsletterModal(true);
      }, 25000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeNewsletterModal = () => {
    setShowNewsletterModal(false);
    // Marquer comme vu dans le localStorage
    localStorage.setItem('newsletter_modal_seen', 'true');
  };

  return {
    showNewsletterModal,
    closeNewsletterModal
  };
};

import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X, Eye, RefreshCw, Vote, Calendar } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useNotification } from './NotificationProvider';
import { voteService, VoteItem, ComingItem } from '../services/voteService';
import ImageUploader from './ImageUploader';

interface AdminVoteManagerProps {
  isVisible: boolean;
  onClose: () => void;
}

type TabType = 'votes' | 'coming';

const AdminVoteManager: React.FC<AdminVoteManagerProps> = ({ isVisible, onClose }) => {
  const { language } = useLanguage();
  const { showNotification } = useNotification();

  // État pour les onglets
  const [activeTab, setActiveTab] = useState<TabType>('votes');

  // État pour les votes
  const [voteItems, setVoteItems] = useState<VoteItem[]>([]);
  const [editingVoteItem, setEditingVoteItem] = useState<VoteItem | null>(null);
  const [isAddingVote, setIsAddingVote] = useState(false);

  // État pour les prochainement
  const [comingItems, setComingItems] = useState<ComingItem[]>([]);
  const [editingComingItem, setEditingComingItem] = useState<ComingItem | null>(null);
  const [isAddingComing, setIsAddingComing] = useState(false);

  const [isLoadingData, setIsLoadingData] = useState(false);

  // Formulaire pour les votes
  const [voteFormData, setVoteFormData] = useState({
    title: '',
    titleEn: '',
    description: '',
    descriptionEn: '',
    image: '',
    category: ''
  });

  // Formulaire pour les prochainement
  const [comingFormData, setComingFormData] = useState({
    title: '',
    titleEn: '',
    description: '',
    descriptionEn: '',
    image: '',
    releaseDate: ''
  });

  // Charger les données
  const loadData = useCallback(async () => {
    setIsLoadingData(true);
    try {
      const [votes, coming] = await Promise.all([
        voteService.getVoteItems(false),
        voteService.getComingItems()
      ]);
      setVoteItems(votes);
      setComingItems(coming);
    } catch (error) {
      console.error('Error loading data:', error);
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr' ? 'Erreur lors du chargement des données' : 'Error loading data'
      });
    } finally {
      setIsLoadingData(false);
    }
  }, [language, showNotification]);

  useEffect(() => {
    if (isVisible) {
      loadData();
    }
  }, [isVisible, loadData]);

  // ==================== GESTION DES VOTES ====================

  const handleAddVote = () => {
    setIsAddingVote(true);
    setEditingVoteItem(null);
    setVoteFormData({
      title: '',
      titleEn: '',
      description: '',
      descriptionEn: '',
      image: '',
      category: ''
    });
  };

  const handleEditVote = (item: VoteItem) => {
    setEditingVoteItem(item);
    setIsAddingVote(false);
    setVoteFormData({
      title: item.title,
      titleEn: item.titleEn || '',
      description: item.description,
      descriptionEn: item.descriptionEn || '',
      image: item.image,
      category: item.category
    });
  };

  const handleDeleteVote = async (id: string) => {
    if (window.confirm(language === 'fr' ? 'Êtes-vous sûr de vouloir supprimer cet élément ?' : 'Are you sure you want to delete this item?')) {
      try {
        const success = await voteService.deleteVoteItem(id);
        if (success) {
          setVoteItems(prev => prev.filter(item => item.id !== id));
          showNotification({
            type: 'success',
            title: language === 'fr' ? 'Supprimé' : 'Deleted',
            message: language === 'fr' ? 'Élément supprimé avec succès' : 'Item deleted successfully'
          });
        }
      } catch (error) {
        showNotification({
          type: 'error',
          title: language === 'fr' ? 'Erreur' : 'Error',
          message: language === 'fr' ? 'Erreur lors de la suppression' : 'Error deleting item'
        });
      }
    }
  };

  const handleSaveVote = async () => {
    if (!voteFormData.title || !voteFormData.description || !voteFormData.image || !voteFormData.category) {
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr' ? 'Veuillez remplir tous les champs obligatoires' : 'Please fill all required fields'
      });
      return;
    }

    try {
      if (editingVoteItem) {
        const updated = await voteService.updateVoteItem(editingVoteItem.id, {
          title: voteFormData.title,
          titleEn: voteFormData.titleEn || undefined,
          description: voteFormData.description,
          descriptionEn: voteFormData.descriptionEn || undefined,
          image: voteFormData.image,
          category: voteFormData.category
        });

        if (updated) {
          setVoteItems(prev => prev.map(item => item.id === editingVoteItem.id ? updated : item));
          showNotification({
            type: 'success',
            title: language === 'fr' ? 'Modifié' : 'Updated',
            message: language === 'fr' ? 'Élément modifié avec succès' : 'Item updated successfully'
          });
        }
      } else {
        const newItem = await voteService.createVoteItem({
          title: voteFormData.title,
          titleEn: voteFormData.titleEn || undefined,
          description: voteFormData.description,
          descriptionEn: voteFormData.descriptionEn || undefined,
          image: voteFormData.image,
          category: voteFormData.category,
          isActive: true
        });

        setVoteItems(prev => [...prev, newItem]);
        showNotification({
          type: 'success',
          title: language === 'fr' ? 'Ajouté' : 'Added',
          message: language === 'fr' ? 'Nouvel élément ajouté avec succès' : 'New item added successfully'
        });
      }

      handleCancelVote();
    } catch (error) {
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr' ? 'Erreur lors de la sauvegarde' : 'Error saving item'
      });
    }
  };

  const handleCancelVote = () => {
    setEditingVoteItem(null);
    setIsAddingVote(false);
    setVoteFormData({
      title: '',
      titleEn: '',
      description: '',
      descriptionEn: '',
      image: '',
      category: ''
    });
  };

  const toggleVoteActive = async (id: string) => {
    try {
      const updated = await voteService.toggleVoteItemActive(id);
      if (updated) {
        setVoteItems(prev => prev.map(item => item.id === id ? updated : item));
      }
    } catch (error) {
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr' ? 'Erreur lors de la modification' : 'Error updating item'
      });
    }
  };

  // ==================== GESTION DES PROCHAINEMENT ====================

  const handleAddComing = () => {
    setIsAddingComing(true);
    setEditingComingItem(null);
    setComingFormData({
      title: '',
      titleEn: '',
      description: '',
      descriptionEn: '',
      image: '',
      releaseDate: ''
    });
  };

  const handleEditComing = (item: ComingItem) => {
    setEditingComingItem(item);
    setIsAddingComing(false);
    setComingFormData({
      title: item.title,
      titleEn: item.titleEn || '',
      description: item.description,
      descriptionEn: item.descriptionEn || '',
      image: item.image,
      releaseDate: item.releaseDate.split('T')[0] // Format YYYY-MM-DD
    });
  };

  const handleDeleteComing = async (id: string) => {
    if (window.confirm(language === 'fr' ? 'Êtes-vous sûr de vouloir supprimer cet élément ?' : 'Are you sure you want to delete this item?')) {
      try {
        const success = await voteService.deleteComingItem(id);
        if (success) {
          setComingItems(prev => prev.filter(item => item.id !== id));
          showNotification({
            type: 'success',
            title: language === 'fr' ? 'Supprimé' : 'Deleted',
            message: language === 'fr' ? 'Élément supprimé avec succès' : 'Item deleted successfully'
          });
        }
      } catch (error) {
        showNotification({
          type: 'error',
          title: language === 'fr' ? 'Erreur' : 'Error',
          message: language === 'fr' ? 'Erreur lors de la suppression' : 'Error deleting item'
        });
      }
    }
  };

  const handleSaveComing = async () => {
    if (!comingFormData.title || !comingFormData.description || !comingFormData.image || !comingFormData.releaseDate) {
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr' ? 'Veuillez remplir tous les champs obligatoires' : 'Please fill all required fields'
      });
      return;
    }

    try {
      if (editingComingItem) {
        const updated = await voteService.updateComingItem(editingComingItem.id, {
          title: comingFormData.title,
          titleEn: comingFormData.titleEn || undefined,
          description: comingFormData.description,
          descriptionEn: comingFormData.descriptionEn || undefined,
          image: comingFormData.image,
          releaseDate: comingFormData.releaseDate
        });

        if (updated) {
          setComingItems(prev => prev.map(item => item.id === editingComingItem.id ? updated : item));
          showNotification({
            type: 'success',
            title: language === 'fr' ? 'Modifié' : 'Updated',
            message: language === 'fr' ? 'Élément modifié avec succès' : 'Item updated successfully'
          });
        }
      } else {
        const newItem = await voteService.createComingItem({
          title: comingFormData.title,
          titleEn: comingFormData.titleEn || undefined,
          description: comingFormData.description,
          descriptionEn: comingFormData.descriptionEn || undefined,
          image: comingFormData.image,
          releaseDate: comingFormData.releaseDate
        });

        setComingItems(prev => [...prev, newItem]);
        showNotification({
          type: 'success',
          title: language === 'fr' ? 'Ajouté' : 'Added',
          message: language === 'fr' ? 'Nouvel élément ajouté avec succès' : 'New item added successfully'
        });
      }

      handleCancelComing();
    } catch (error) {
      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur' : 'Error',
        message: language === 'fr' ? 'Erreur lors de la sauvegarde' : 'Error saving item'
      });
    }
  };

  const handleCancelComing = () => {
    setEditingComingItem(null);
    setIsAddingComing(false);
    setComingFormData({
      title: '',
      titleEn: '',
      description: '',
      descriptionEn: '',
      image: '',
      releaseDate: ''
    });
  };

  // ==================== RESET ====================

  const handleResetToDefaults = async () => {
    if (window.confirm(language === 'fr'
      ? 'Réinitialiser toutes les données aux valeurs par défaut ? Cette action est irréversible.'
      : 'Reset all data to defaults? This action cannot be undone.')) {
      try {
        await voteService.resetToDefaults();
        await loadData();
        showNotification({
          type: 'success',
          title: language === 'fr' ? 'Réinitialisé' : 'Reset',
          message: language === 'fr' ? 'Données réinitialisées avec succès' : 'Data reset successfully'
        });
      } catch (error) {
        showNotification({
          type: 'error',
          title: language === 'fr' ? 'Erreur' : 'Error',
          message: language === 'fr' ? 'Erreur lors de la réinitialisation' : 'Error resetting data'
        });
      }
    }
  };

  // Formater la date pour l'affichage
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'fr'
      ? date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
      : date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  if (!isVisible) return null;

  const modalContent = (
    <Overlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <Modal
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          <Title>
            {language === 'fr' ? 'Gestionnaire Admin' : 'Admin Manager'}
          </Title>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </Header>

        {/* Onglets */}
        <TabsContainer>
          <Tab $active={activeTab === 'votes'} onClick={() => setActiveTab('votes')}>
            <Vote size={18} />
            {language === 'fr' ? 'Votes' : 'Votes'}
            <TabBadge>{voteItems.length}</TabBadge>
          </Tab>
          <Tab $active={activeTab === 'coming'} onClick={() => setActiveTab('coming')}>
            <Calendar size={18} />
            {language === 'fr' ? 'Prochainement' : 'Coming Soon'}
            <TabBadge>{comingItems.length}</TabBadge>
          </Tab>
        </TabsContainer>

        <Content>
          {isLoadingData && (
            <LoadingMessage>
              {language === 'fr' ? 'Chargement...' : 'Loading...'}
            </LoadingMessage>
          )}

          {/* ==================== ONGLET VOTES ==================== */}
          {activeTab === 'votes' && (
            <>
              <Actions>
                <AddButton onClick={handleAddVote}>
                  <Plus size={16} />
                  {language === 'fr' ? 'Ajouter un vote' : 'Add Vote Item'}
                </AddButton>
                <ResetButton onClick={handleResetToDefaults}>
                  <RefreshCw size={16} />
                  {language === 'fr' ? 'Réinitialiser tout' : 'Reset All'}
                </ResetButton>
              </Actions>

              {(isAddingVote || editingVoteItem) && (
                <FormSection>
                  <FormTitle>
                    {editingVoteItem
                      ? (language === 'fr' ? 'Modifier le vote' : 'Edit Vote Item')
                      : (language === 'fr' ? 'Nouveau vote' : 'New Vote Item')
                    }
                  </FormTitle>

                  <Form>
                    <FormGroup>
                      <Label>{language === 'fr' ? 'Titre (FR) *' : 'Title (FR) *'}</Label>
                      <Input
                        type="text"
                        value={voteFormData.title}
                        onChange={(e) => setVoteFormData({ ...voteFormData, title: e.target.value })}
                        placeholder={language === 'fr' ? 'Titre en français' : 'French title'}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>{language === 'fr' ? 'Titre (EN)' : 'Title (EN)'}</Label>
                      <Input
                        type="text"
                        value={voteFormData.titleEn}
                        onChange={(e) => setVoteFormData({ ...voteFormData, titleEn: e.target.value })}
                        placeholder={language === 'fr' ? 'Titre en anglais (optionnel)' : 'English title (optional)'}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>{language === 'fr' ? 'Description (FR) *' : 'Description (FR) *'}</Label>
                      <Textarea
                        value={voteFormData.description}
                        onChange={(e) => setVoteFormData({ ...voteFormData, description: e.target.value })}
                        placeholder={language === 'fr' ? 'Description en français' : 'French description'}
                        rows={3}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>{language === 'fr' ? 'Description (EN)' : 'Description (EN)'}</Label>
                      <Textarea
                        value={voteFormData.descriptionEn}
                        onChange={(e) => setVoteFormData({ ...voteFormData, descriptionEn: e.target.value })}
                        placeholder={language === 'fr' ? 'Description en anglais (optionnel)' : 'English description (optional)'}
                        rows={3}
                      />
                    </FormGroup>

                    <FormGroup $fullWidth>
                      <Label>{language === 'fr' ? 'Image *' : 'Image *'}</Label>
                      <ImageUploader
                        value={voteFormData.image}
                        onChange={(url) => setVoteFormData({ ...voteFormData, image: url })}
                        placeholder="https://example.com/image.jpg"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>{language === 'fr' ? 'Catégorie *' : 'Category *'}</Label>
                      <Select
                        value={voteFormData.category}
                        onChange={(e) => setVoteFormData({ ...voteFormData, category: e.target.value })}
                      >
                        <option value="">{language === 'fr' ? 'Sélectionner' : 'Select'}</option>
                        <option value="collection">Collection</option>
                        <option value="clothing">{language === 'fr' ? 'Vêtements' : 'Clothing'}</option>
                        <option value="accessories">{language === 'fr' ? 'Accessoires' : 'Accessories'}</option>
                        <option value="shoes">{language === 'fr' ? 'Chaussures' : 'Shoes'}</option>
                        <option value="sport">Sport</option>
                        <option value="other">{language === 'fr' ? 'Autre' : 'Other'}</option>
                      </Select>
                    </FormGroup>

                    <FormActions>
                      <CancelButton onClick={handleCancelVote}>
                        <X size={16} />
                        {language === 'fr' ? 'Annuler' : 'Cancel'}
                      </CancelButton>
                      <SaveButton onClick={handleSaveVote}>
                        <Save size={16} />
                        {language === 'fr' ? 'Sauvegarder' : 'Save'}
                      </SaveButton>
                    </FormActions>
                  </Form>
                </FormSection>
              )}

              <ItemsList>
                <ListTitle>
                  {language === 'fr' ? 'Éléments de vote' : 'Vote Items'} ({voteItems.length})
                </ListTitle>

                {voteItems.length === 0 ? (
                  <EmptyState>
                    {language === 'fr' ? 'Aucun élément de vote créé' : 'No vote items created'}
                  </EmptyState>
                ) : (
                  voteItems.map(item => (
                    <ItemCard key={item.id}>
                      <ItemImage src={item.image} alt={item.title} />
                      <ItemContent>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemDescription>{item.description}</ItemDescription>
                        <ItemMeta>
                          <CategoryBadge>{item.category}</CategoryBadge>
                          <VotesBadge>{item.votes} votes</VotesBadge>
                          <Status $isActive={item.isActive}>
                            {item.isActive
                              ? (language === 'fr' ? 'Actif' : 'Active')
                              : (language === 'fr' ? 'Inactif' : 'Inactive')
                            }
                          </Status>
                        </ItemMeta>
                      </ItemContent>
                      <ItemActions>
                        <ActionButton onClick={() => handleEditVote(item)} title={language === 'fr' ? 'Modifier' : 'Edit'}>
                          <Edit size={16} />
                        </ActionButton>
                        <ActionButton
                          onClick={() => toggleVoteActive(item.id)}
                          title={item.isActive ? (language === 'fr' ? 'Désactiver' : 'Disable') : (language === 'fr' ? 'Activer' : 'Enable')}
                        >
                          <Eye size={16} />
                        </ActionButton>
                        <ActionButton onClick={() => handleDeleteVote(item.id)} title={language === 'fr' ? 'Supprimer' : 'Delete'} $danger>
                          <Trash2 size={16} />
                        </ActionButton>
                      </ItemActions>
                    </ItemCard>
                  ))
                )}
              </ItemsList>
            </>
          )}

          {/* ==================== ONGLET PROCHAINEMENT ==================== */}
          {activeTab === 'coming' && (
            <>
              <Actions>
                <AddButton onClick={handleAddComing}>
                  <Plus size={16} />
                  {language === 'fr' ? 'Ajouter un prochainement' : 'Add Coming Item'}
                </AddButton>
              </Actions>

              {(isAddingComing || editingComingItem) && (
                <FormSection>
                  <FormTitle>
                    {editingComingItem
                      ? (language === 'fr' ? 'Modifier le prochainement' : 'Edit Coming Item')
                      : (language === 'fr' ? 'Nouveau prochainement' : 'New Coming Item')
                    }
                  </FormTitle>

                  <Form>
                    <FormGroup>
                      <Label>{language === 'fr' ? 'Titre (FR) *' : 'Title (FR) *'}</Label>
                      <Input
                        type="text"
                        value={comingFormData.title}
                        onChange={(e) => setComingFormData({ ...comingFormData, title: e.target.value })}
                        placeholder={language === 'fr' ? 'Titre en français' : 'French title'}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>{language === 'fr' ? 'Titre (EN)' : 'Title (EN)'}</Label>
                      <Input
                        type="text"
                        value={comingFormData.titleEn}
                        onChange={(e) => setComingFormData({ ...comingFormData, titleEn: e.target.value })}
                        placeholder={language === 'fr' ? 'Titre en anglais (optionnel)' : 'English title (optional)'}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>{language === 'fr' ? 'Description (FR) *' : 'Description (FR) *'}</Label>
                      <Textarea
                        value={comingFormData.description}
                        onChange={(e) => setComingFormData({ ...comingFormData, description: e.target.value })}
                        placeholder={language === 'fr' ? 'Description en français' : 'French description'}
                        rows={3}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>{language === 'fr' ? 'Description (EN)' : 'Description (EN)'}</Label>
                      <Textarea
                        value={comingFormData.descriptionEn}
                        onChange={(e) => setComingFormData({ ...comingFormData, descriptionEn: e.target.value })}
                        placeholder={language === 'fr' ? 'Description en anglais (optionnel)' : 'English description (optional)'}
                        rows={3}
                      />
                    </FormGroup>

                    <FormGroup $fullWidth>
                      <Label>{language === 'fr' ? 'Image *' : 'Image *'}</Label>
                      <ImageUploader
                        value={comingFormData.image}
                        onChange={(url) => setComingFormData({ ...comingFormData, image: url })}
                        placeholder="https://example.com/image.jpg"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>{language === 'fr' ? 'Date de sortie *' : 'Release Date *'}</Label>
                      <Input
                        type="date"
                        value={comingFormData.releaseDate}
                        onChange={(e) => setComingFormData({ ...comingFormData, releaseDate: e.target.value })}
                      />
                    </FormGroup>

                    <FormActions>
                      <CancelButton onClick={handleCancelComing}>
                        <X size={16} />
                        {language === 'fr' ? 'Annuler' : 'Cancel'}
                      </CancelButton>
                      <SaveButton onClick={handleSaveComing}>
                        <Save size={16} />
                        {language === 'fr' ? 'Sauvegarder' : 'Save'}
                      </SaveButton>
                    </FormActions>
                  </Form>
                </FormSection>
              )}

              <ItemsList>
                <ListTitle>
                  {language === 'fr' ? 'Éléments prochainement' : 'Coming Soon Items'} ({comingItems.length})
                </ListTitle>

                {comingItems.length === 0 ? (
                  <EmptyState>
                    {language === 'fr' ? 'Aucun élément prochainement créé' : 'No coming soon items created'}
                  </EmptyState>
                ) : (
                  comingItems.map(item => (
                    <ItemCard key={item.id}>
                      <ItemImage src={item.image} alt={item.title} />
                      <ItemContent>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemDescription>{item.description}</ItemDescription>
                        <ItemMeta>
                          <DateBadge>
                            <Calendar size={12} />
                            {formatDate(item.releaseDate)}
                          </DateBadge>
                        </ItemMeta>
                      </ItemContent>
                      <ItemActions>
                        <ActionButton onClick={() => handleEditComing(item)} title={language === 'fr' ? 'Modifier' : 'Edit'}>
                          <Edit size={16} />
                        </ActionButton>
                        <ActionButton onClick={() => handleDeleteComing(item.id)} title={language === 'fr' ? 'Supprimer' : 'Delete'} $danger>
                          <Trash2 size={16} />
                        </ActionButton>
                      </ItemActions>
                    </ItemCard>
                  ))
                )}
              </ItemsList>
            </>
          )}
        </Content>
      </Modal>
    </Overlay>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

// ==================== STYLED COMPONENTS ====================

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  padding-top: 80px;
  overflow-y: auto;
`;

const Modal = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 900px;
  width: 100%;
  max-height: calc(100vh - 120px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) var(--spacing-6);
  background: linear-gradient(135deg, #d13296 0%, #a8287a 100%);
  color: white;
  flex-shrink: 0;
`;

const Title = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: white;
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--radius-full);
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--gray-200);
  background: var(--gray-50);
  flex-shrink: 0;
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-4);
  border: none;
  background: ${props => props.$active ? 'var(--white)' : 'transparent'};
  color: ${props => props.$active ? '#d13296' : 'var(--gray-600)'};
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  border-bottom: 3px solid ${props => props.$active ? '#d13296' : 'transparent'};

  &:hover {
    color: #d13296;
    background: ${props => props.$active ? 'var(--white)' : 'rgba(209, 50, 150, 0.05)'};
  }
`;

const TabBadge = styled.span`
  background: var(--gray-200);
  color: var(--gray-700);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
`;

const Content = styled.div`
  padding: var(--spacing-6);
  overflow-y: auto;
  flex: 1;
`;

const Actions = styled.div`
  margin-bottom: var(--spacing-6);
  display: flex;
  gap: var(--spacing-3);
  flex-wrap: wrap;
`;

const AddButton = styled.button`
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const ResetButton = styled.button`
  background: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-300);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  &:hover {
    background: var(--gray-200);
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: var(--spacing-4);
  color: var(--gray-500);
  font-style: italic;
`;

const FormSection = styled.div`
  background: var(--gray-50);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
`;

const FormTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-4);
`;

const FormGroup = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  ${props => props.$fullWidth && 'grid-column: 1 / -1;'}
`;

const Label = styled.label`
  font-weight: var(--font-medium);
  color: var(--gray-700);
  font-size: var(--font-size-sm);
`;

const Input = styled.input`
  padding: var(--spacing-3);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  transition: all var(--transition-normal);

  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: var(--spacing-3);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  resize: vertical;
  transition: all var(--transition-normal);

  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`;

const Select = styled.select`
  padding: var(--spacing-3);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  background: var(--white);
  transition: all var(--transition-normal);

  &:focus {
    outline: none;
    border-color: #d13296;
  }
`;

const FormActions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  gap: var(--spacing-3);
  justify-content: flex-end;
  margin-top: var(--spacing-4);
`;

const CancelButton = styled.button`
  background: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-200);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  &:hover {
    background: var(--gray-200);
  }
`;

const SaveButton = styled.button`
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const ListTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-8);
  color: var(--gray-500);
  font-style: italic;
  background: var(--gray-50);
  border-radius: var(--radius-lg);
`;

const ItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  transition: all var(--transition-normal);

  &:hover {
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  flex-shrink: 0;
`;

const ItemContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ItemTitle = styled.h4`
  font-size: var(--font-size-base);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-1);
`;

const ItemDescription = styled.p`
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  margin-bottom: var(--spacing-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ItemMeta = styled.div`
  display: flex;
  gap: var(--spacing-2);
  align-items: center;
  flex-wrap: wrap;
`;

const CategoryBadge = styled.span`
  background: var(--primary-gradient);
  color: var(--white);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
`;

const VotesBadge = styled.span`
  background: var(--gray-100);
  color: var(--gray-700);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
`;

const DateBadge = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: var(--white);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
`;

const Status = styled.span<{ $isActive: boolean }>`
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-full);
  background: ${props => props.$isActive ? '#10b981' : '#ef4444'};
  color: var(--white);
`;

const ItemActions = styled.div`
  display: flex;
  gap: var(--spacing-2);
  flex-shrink: 0;
`;

const ActionButton = styled.button<{ $danger?: boolean }>`
  background: ${props => props.$danger ? '#ef4444' : 'var(--gray-100)'};
  color: ${props => props.$danger ? 'var(--white)' : 'var(--gray-700)'};
  border: none;
  padding: var(--spacing-2);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    background: ${props => props.$danger ? '#dc2626' : 'var(--gray-200)'};
    transform: scale(1.05);
  }
`;

export default AdminVoteManager;

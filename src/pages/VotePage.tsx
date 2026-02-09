import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Vote, Calendar, Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import Container from '../components/Container';
import LoadingSpinner from '../components/LoadingSpinner';
import Toast from '../components/Toast';
import VoteStatsComponent from '../components/VoteStats';
import { voteService, VoteItem, ComingItem } from '../services/voteService';

const VoteContainer = styled.div`
  min-height: 100vh;
  background: var(--white);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  padding: var(--spacing-20) 0;
  text-align: center;
  color: var(--white);
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-6);
  line-height: 1.2;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-8);
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-12);
`;

const TabButton = styled.button<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? 'var(--white)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.$isActive ? '#d13296' : 'var(--white)'};
  border: none;
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-full);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background: ${props => props.$isActive ? 'var(--white)' : 'rgba(255, 255, 255, 0.3)'};
    transform: translateY(-2px);
  }
`;

const VoteSection = styled.section`
  padding: var(--spacing-20) 0;
  background: var(--white);
`;

const ComingSection = styled.section`
  padding: var(--spacing-20) 0;
  background: var(--gray-50);
`;

const SectionTitle = styled(motion.h2)`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  text-align: center;
  margin-bottom: var(--spacing-12);
`;

const VoteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);
`;

const VoteCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.15);
    border-color: rgba(209, 50, 150, 0.2);
  }
`;

const VoteImage = styled.div<{ $image: string }>`
  height: 200px;
  background: url(${props => props.$image}) center/cover;
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-6);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(209, 50, 150, 0.8), rgba(255, 142, 83, 0.8));
    opacity: 0;
    transition: opacity var(--transition-fast);
  }
  
  ${VoteCard}:hover &::before {
    opacity: 1;
  }
`;

const VoteTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`;

const VoteDescription = styled.p`
  color: var(--gray-600);
  margin-bottom: var(--spacing-6);
  line-height: 1.6;
`;

const VoteStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-6);
`;

const VoteCount = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: #d13296;
  font-weight: var(--font-semibold);
`;

const VoteButton = styled.button<{ $isVoted: boolean; $isLoading: boolean }>`
  width: 100%;
  background: ${props => props.$isVoted 
    ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' 
    : 'linear-gradient(135deg, #d13296 0%, #d13296 100%)'
  };
  color: var(--white);
  border: none;
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: ${props => props.$isLoading ? 'not-allowed' : 'pointer'};
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  position: relative;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${props => props.$isVoted 
      ? 'rgba(16, 185, 129, 0.3)' 
      : 'rgba(209, 50, 150, 0.3)'
    };
  }
  
  &:disabled {
    opacity: 0.7;
    transform: none;
    box-shadow: none;
  }
`;



const SuccessIcon = styled(CheckCircle)`
  color: var(--accent-success);
`;

const VoteProgress = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-top: var(--spacing-2);
`;

const VoteProgressBar = styled.div<{ $percentage: number }>`
  flex: 1;
  height: 4px;
  background: var(--gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$percentage}%;
    background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
    border-radius: var(--radius-full);
    transition: width var(--transition-normal);
  }
`;

const VotePercentage = styled.div`
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  font-weight: var(--font-medium);
`;



const ComingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-8);
`;

const ComingCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.15);
  }
`;

const ComingImage = styled.div<{ $image: string }>`
  height: 250px;
  background: url(${props => props.$image}) center/cover;
  position: relative;
`;

const ComingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(209, 50, 150, 0.9), rgba(255, 142, 83, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
`;

const ComingContent = styled.div`
  padding: var(--spacing-8);
`;

const ComingTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`;

const ComingDescription = styled.p`
  color: var(--gray-600);
  margin-bottom: var(--spacing-6);
  line-height: 1.6;
`;

const ComingDate = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: #d13296;
  font-weight: var(--font-semibold);
  margin-bottom: var(--spacing-4);
`;



// Interface pour les éléments de vote avec traduction
interface VoteItemDisplay {
  id: string;
  title: string;
  description: string;
  image: string;
  votes: number;
  category: string;
}

// Interface pour les éléments "Prochainement" avec traduction
interface ComingItemDisplay {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

interface VoteState {
  votedItems: Set<string>;
  loadingItems: Set<string>;
  totalVotes: number;
}

const VotePage: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'vote' | 'coming'>('vote');
  const [voteItems, setVoteItems] = useState<VoteItemDisplay[]>([]);
  const [comingItems, setComingItems] = useState<ComingItemDisplay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [voteState, setVoteState] = useState<VoteState>({
    votedItems: new Set(),
    loadingItems: new Set(),
    totalVotes: 0
  });
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
    show: boolean;
  } | null>(null);

  // Transformer les données du service en format d'affichage
  const transformVoteItem = useCallback((item: VoteItem): VoteItemDisplay => ({
    id: item.id,
    title: language === 'fr' ? item.title : (item.titleEn || item.title),
    description: language === 'fr' ? item.description : (item.descriptionEn || item.description),
    image: item.image,
    votes: item.votes,
    category: item.category,
  }), [language]);

  const transformComingItem = useCallback((item: ComingItem): ComingItemDisplay => {
    const date = new Date(item.releaseDate);
    const formattedDate = language === 'fr'
      ? date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
      : date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return {
      id: item.id,
      title: language === 'fr' ? item.title : (item.titleEn || item.title),
      description: language === 'fr' ? item.description : (item.descriptionEn || item.description),
      image: item.image,
      date: formattedDate,
    };
  }, [language]);

  // Charger les données depuis le service
  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      const [items, coming, votedIds] = await Promise.all([
        voteService.getVoteItems(true),
        voteService.getComingItems(),
        voteService.getUserVotedItemIds(),
      ]);

      setVoteItems(items.map(transformVoteItem));
      setComingItems(coming.map(transformComingItem));

      const totalVotes = items.reduce((sum, item) => sum + item.votes, 0);
      setVoteState(prev => ({
        ...prev,
        votedItems: new Set(votedIds),
        totalVotes,
      }));
    } catch (error) {
      console.error('Error loading vote data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [transformVoteItem, transformComingItem]);

  // Charger les données au montage et quand la langue change
  useEffect(() => {
    loadData();
  }, [loadData]);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message, show: true });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleVote = async (itemId: string) => {
    if (voteState.votedItems.has(itemId) || voteState.loadingItems.has(itemId)) return;

    // Ajouter à loadingItems
    setVoteState(prev => ({
      ...prev,
      loadingItems: new Set([...prev.loadingItems, itemId])
    }));

    try {
      // Appeler le service de vote
      const result = await voteService.vote(itemId);

      if (result.success) {
        // Mettre à jour l'état local
        setVoteItems(prev =>
          prev.map(item =>
            item.id === itemId ? { ...item, votes: result.newVoteCount } : item
          )
        );

        setVoteState(prev => ({
          ...prev,
          votedItems: new Set([...prev.votedItems, itemId]),
          loadingItems: new Set([...prev.loadingItems].filter(id => id !== itemId)),
          totalVotes: prev.totalVotes + 1,
        }));

        showNotification('success', language === 'fr' ? 'Vote enregistré avec succès !' : 'Vote recorded successfully!');
      } else {
        throw new Error('Vote already recorded');
      }
    } catch (error) {
      setVoteState(prev => ({
        ...prev,
        loadingItems: new Set([...prev.loadingItems].filter(id => id !== itemId))
      }));

      showNotification('error', language === 'fr' ? 'Erreur lors du vote. Réessayez.' : 'Error while voting. Please try again.');
    }
  };

  const getVoteCount = (itemId: string) => {
    return voteItems.find(item => item.id === itemId)?.votes || 0;
  };

  const getVotePercentage = (itemId: string) => {
    const itemVotes = getVoteCount(itemId);
    const total = voteState.totalVotes || voteItems.reduce((sum, item) => sum + item.votes, 0);
    return total > 0 ? Math.round((itemVotes / total) * 100) : 0;
  };

  const hasVoted = (itemId: string) => voteState.votedItems.has(itemId);
  const isVoting = (itemId: string) => voteState.loadingItems.has(itemId);

  if (isLoading) {
    return (
      <VoteContainer>
        <HeroSection>
          <Container>
            <LoadingSpinner size="large" color="var(--white)" />
          </Container>
        </HeroSection>
      </VoteContainer>
    );
  }

  return (
    <VoteContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {language === 'fr' 
              ? 'Votre Voix Compte !'
              : 'Your Voice Matters!'
            }
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {language === 'fr'
                      ? 'Participez à la création de nos prochaines collections. Votre vote façonne l\'avenir de BestF.kersinTown !'
        : 'Participate in creating our next collections. Your vote shapes the future of BestF.kersinTown!'
            }
          </HeroSubtitle>
          
          <TabContainer>
            <TabButton
              $isActive={activeTab === 'vote'}
              onClick={() => setActiveTab('vote')}
            >
              <Vote size={20} />
              {language === 'fr' ? 'Voter' : 'Vote'}
            </TabButton>
            <TabButton
              $isActive={activeTab === 'coming'}
              onClick={() => setActiveTab('coming')}
            >
              <Calendar size={20} />
              {language === 'fr' ? 'Prochainement' : 'Coming Soon'}
            </TabButton>
          </TabContainer>
        </Container>
      </HeroSection>

      {activeTab === 'vote' && (
        <VoteSection>
          <Container>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {language === 'fr' ? 'Votez pour les Prochains Designs' : 'Vote for Next Designs'}
            </SectionTitle>
            
            <VoteGrid>
              {voteItems.map((item, index) => (
                <VoteCard
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <VoteImage $image={item.image} />
                  <VoteTitle>{item.title}</VoteTitle>
                  <VoteDescription>{item.description}</VoteDescription>
                  
                  <VotePercentage>
                    {getVotePercentage(item.id)}% {language === 'fr' ? 'des votes' : 'of votes'}
                  </VotePercentage>
                  
                  <VoteProgress>
                    <VoteProgressBar $percentage={getVotePercentage(item.id)} />
                  </VoteProgress>
                  
                  <VoteStats>
                    <VoteCount>
                      <Vote size={16} />
                      {getVoteCount(item.id).toLocaleString()} {language === 'fr' ? 'votes' : 'votes'}
                    </VoteCount>
                    <div>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < 4 ? '#FFD700' : 'none'}
                          stroke="#FFD700"
                        />
                      ))}
                    </div>
                  </VoteStats>
                  
                  <VoteButton
                    onClick={() => handleVote(item.id)}
                    disabled={hasVoted(item.id) || isVoting(item.id)}
                    $isVoted={hasVoted(item.id)}
                    $isLoading={isVoting(item.id)}
                  >
                    {isVoting(item.id) ? (
                      <>
                        <LoadingSpinner size="small" color="var(--white)" showText={false} variant="spinner" />
                        {language === 'fr' ? 'Vote en cours...' : 'Voting...'}
                      </>
                    ) : hasVoted(item.id) ? (
                      <>
                        <SuccessIcon size={20} />
                        {language === 'fr' ? 'Voté !' : 'Voted!'}
                      </>
                    ) : (
                      <>
                        <Vote size={20} />
                        {language === 'fr' ? 'Voter' : 'Vote'}
                      </>
                    )}
                  </VoteButton>
                </VoteCard>
              ))}
            </VoteGrid>
          </Container>
        </VoteSection>
      )}

      {activeTab === 'coming' && (
        <ComingSection>
          <Container>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {language === 'fr' ? 'Prochainement' : 'Coming Soon'}
            </SectionTitle>
            
            <ComingGrid>
              {comingItems.map((item, index) => (
                <ComingCard
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ComingImage $image={item.image}>
                    <ComingOverlay>
                      {language === 'fr' ? 'Bientôt' : 'Soon'}
                    </ComingOverlay>
                  </ComingImage>
                  <ComingContent>
                    <ComingTitle>{item.title}</ComingTitle>
                    <ComingDescription>{item.description}</ComingDescription>
                    <ComingDate>
                      <Calendar size={20} />
                      {item.date}
                    </ComingDate>
                  </ComingContent>
                </ComingCard>
              ))}
            </ComingGrid>
          </Container>
        </ComingSection>
      )}

      <Container>
        <VoteStatsComponent
          totalVotes={voteState.totalVotes || voteItems.reduce((sum, item) => sum + item.votes, 0)}
          totalVoters={voteState.votedItems.size}
          topVotedItem={(() => {
            const itemsWithVotes = voteItems.map(item => ({
              ...item,
              currentVotes: getVoteCount(item.id)
            }));
            const topItem = itemsWithVotes.reduce((max, item) => 
              item.currentVotes > max.currentVotes ? item : max
            );
            const totalVotes = itemsWithVotes.reduce((sum, item) => sum + item.currentVotes, 0);
            return {
              title: topItem.title,
              votes: topItem.currentVotes,
              percentage: totalVotes > 0 ? Math.round((topItem.currentVotes / totalVotes) * 100) : 0
            };
          })()}
          averageVotesPerItem={voteItems.length > 0 ? (voteState.totalVotes || voteItems.reduce((sum, item) => sum + item.votes, 0)) / voteItems.length : 0}
          language={language}
        />
      </Container>

      <Toast
        type={notification?.type || 'success'}
        message={notification?.message || ''}
        show={!!notification}
        onClose={() => setNotification(null)}
        duration={3000}
      />
    </VoteContainer>
  );
};

export default VotePage;

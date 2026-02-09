import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const StatsContainer = styled.div`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  color: var(--white);
  margin-bottom: var(--spacing-8);
`;

const StatsTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-6);
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-6);
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-3);
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`;

const StatNumber = styled.div`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: var(--font-size-sm);
  opacity: 0.9;
  font-weight: var(--font-medium);
`;

const ProgressContainer = styled.div`
  width: 100%;
  margin-top: var(--spacing-4);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--spacing-2);
`;

const ProgressFill = styled(motion.div)<{ $percentage: number }>`
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  width: ${props => props.$percentage}%;
  border-radius: var(--radius-full);
`;

const ProgressText = styled.div`
  font-size: var(--font-size-xs);
  opacity: 0.8;
  text-align: center;
`;

interface VoteStatsProps {
  totalVotes: number;
  totalVoters: number;
  topVotedItem: {
    title: string;
    votes: number;
    percentage: number;
  } | null;
  averageVotesPerItem: number;
  language: 'fr' | 'en';
}

const VoteStats: React.FC<VoteStatsProps> = ({
  totalVotes,
  totalVoters,
  topVotedItem,
  averageVotesPerItem,
  language
}) => {
  return (
    <StatsContainer>
      <StatsTitle>
        {language === 'fr' ? 'Statistiques de Vote' : 'Voting Statistics'}
      </StatsTitle>
      
      <StatsGrid>
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <StatIcon>
            <TrendingUp size={24} />
          </StatIcon>
          <StatNumber>{totalVotes.toLocaleString()}</StatNumber>
          <StatLabel>
            {language === 'fr' ? 'Votes Totaux' : 'Total Votes'}
          </StatLabel>
        </StatItem>

        <StatItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <StatIcon>
            <Users size={24} />
          </StatIcon>
          <StatNumber>{totalVoters.toLocaleString()}</StatNumber>
          <StatLabel>
            {language === 'fr' ? 'Votants' : 'Voters'}
          </StatLabel>
        </StatItem>

        <StatItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StatIcon>
            <Award size={24} />
          </StatIcon>
          <StatNumber>{averageVotesPerItem.toFixed(1)}</StatNumber>
          <StatLabel>
            {language === 'fr' ? 'Moyenne par Item' : 'Average per Item'}
          </StatLabel>
        </StatItem>

        <StatItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <StatIcon>
            <Clock size={24} />
          </StatIcon>
          <StatNumber>
            {topVotedItem ? `${topVotedItem.percentage}%` : '0%'}
          </StatNumber>
          <StatLabel>
            {language === 'fr' ? 'Plus Voté' : 'Most Voted'}
          </StatLabel>
        </StatItem>
      </StatsGrid>

      {topVotedItem && (
        <ProgressContainer>
          <ProgressText>
            {language === 'fr' ? 'Item le plus populaire' : 'Most Popular Item'}: {topVotedItem.title}
          </ProgressText>
          <ProgressBar>
            <ProgressFill
              $percentage={topVotedItem.percentage}
              initial={{ width: 0 }}
              animate={{ width: topVotedItem.percentage }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </ProgressBar>
        </ProgressContainer>
      )}
    </StatsContainer>
  );
};

export default VoteStats;

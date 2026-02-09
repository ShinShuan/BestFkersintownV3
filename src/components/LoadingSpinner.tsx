import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Loader2 } from 'lucide-react';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 
  40% { 
    transform: scale(1.0);
  }
`;

const LoadingContainer = styled.div<{ $size?: 'small' | 'medium' | 'large'; $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  .spinner {
    animation: ${spin} 1s linear infinite;
    color: ${props => props.$color || '#d13296'};
  }
  
  .text {
    font-size: ${props => {
      switch (props.$size) {
        case 'small': return 'var(--font-size-sm)';
        case 'large': return 'var(--font-size-lg)';
        default: return 'var(--font-size-base)';
      }
    }};
    color: ${props => props.$color || 'var(--gray-600)'};
    font-weight: var(--font-medium);
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: var(--spacing-1);
`;

const Dot = styled.div<{ $delay: number }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.color || '#d13296'};
  animation: ${bounce} 1.4s ease-in-out infinite both;
  animation-delay: ${props => props.$delay}s;
`;

const PulseContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  animation: ${pulse} 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
`;

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
  variant?: 'spinner' | 'dots' | 'pulse';
  showText?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color,
  text,
  variant = 'spinner',
  showText = true
}) => {
  const getSpinnerSize = () => {
    switch (size) {
      case 'small': return 16;
      case 'large': return 32;
      default: return 24;
    }
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <DotsContainer>
            <Dot $delay={0} color={color} />
            <Dot $delay={0.16} color={color} />
            <Dot $delay={0.32} color={color} />
          </DotsContainer>
        );
      case 'pulse':
        return (
          <PulseContainer>
            <Loader2 size={getSpinnerSize() - 8} />
          </PulseContainer>
        );
      default:
        return <Loader2 className="spinner" size={getSpinnerSize()} />;
    }
  };

  return (
    <LoadingContainer $size={size} $color={color}>
      {renderSpinner()}
      {showText && text && <span className="text">{text}</span>}
    </LoadingContainer>
  );
};

export default LoadingSpinner;

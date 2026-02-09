import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const ToastContainer = styled(motion.div)<{ $type: 'success' | 'error' | 'info' | 'warning' }>`
  position: fixed;
  top: 100px;
  right: 20px;
  background: ${props => {
    switch (props.$type) {
      case 'success': return '#10B981';
      case 'error': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#3B82F6';
      default: return '#10B981';
    }
  }};
  color: var(--white);
  padding: var(--spacing-4) var(--spacing-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  font-weight: var(--font-semibold);
  max-width: 400px;
  min-width: 300px;
  
  @media (max-width: 768px) {
    right: 10px;
    left: 10px;
    max-width: none;
    min-width: auto;
  }
`;

const ToastContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

const ToastText = styled.span`
  font-size: var(--font-size-sm);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: var(--spacing-1);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface ToastProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  show: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  show,
  onClose,
  duration = 5000
}) => {
  React.useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} />;
      case 'error':
        return <AlertCircle size={20} />;
      case 'warning':
        return <AlertCircle size={20} />;
      case 'info':
        return <Info size={20} />;
      default:
        return <CheckCircle size={20} />;
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <ToastContainer
          $type={type}
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ 
            duration: 0.3,
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}
        >
          <ToastContent>
            <IconContainer>
              {getIcon()}
            </IconContainer>
            <ToastText>{message}</ToastText>
          </ToastContent>
          <CloseButton onClick={onClose}>
            <X size={16} />
          </CloseButton>
        </ToastContainer>
      )}
    </AnimatePresence>
  );
};

export default Toast;

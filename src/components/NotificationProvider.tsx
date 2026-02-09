import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Notification } from '../types';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';

interface NotificationContextType {
  showNotification: (notification: Omit<Notification, 'id'>) => void;
  hideNotification: (id: string) => void;
  clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

const NotificationContainer = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
`;

const NotificationItem = styled(motion.div)<{ type: Notification['type'] }>`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-4);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${props => {
    switch (props.type) {
      case 'success': return '#10B981';
      case 'error': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#d13296';
      default: return 'var(--gray-400)';
    }
  }};
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    transform: translateX(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationTitle = styled.h4`
  font-weight: var(--font-semibold);
  margin-bottom: var(--spacing-1);
  color: var(--gray-900);
`;

const NotificationMessage = styled.p`
  color: var(--gray-600);
  font-size: var(--font-size-sm);
  line-height: 1.4;
`;

const NotificationAction = styled.button`
  background: none;
  border: none;
  color: var(--primary-medium);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  
  &:hover {
    color: var(--primary-dark);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--gray-400);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--gray-600);
  }
`;

const getIcon = (type: Notification['type']) => {
  switch (type) {
    case 'success':
      return <CheckCircle size={20} color="var(--accent-green)" />;
    case 'error':
      return <AlertCircle size={20} color="var(--accent-red)" />;
    case 'warning':
      return <AlertTriangle size={20} color="var(--accent-yellow)" />;
    case 'info':
      return <Info size={20} color="var(--primary-medium)" />;
    default:
      return <Info size={20} color="var(--gray-400)" />;
  }
};

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification: Notification = {
      ...notification,
      id,
      duration: notification.duration || 5000
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto-hide après la durée spécifiée
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        hideNotification(id);
      }, newNotification.duration);
    }
  };

  const hideNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const handleActionClick = (notification: Notification) => {
    if (notification.action) {
      notification.action.onClick();
    }
    hideNotification(notification.id);
  };

  const value: NotificationContextType = {
    showNotification,
    hideNotification,
    clearNotifications
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer>
        <AnimatePresence>
          {notifications.map(notification => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {getIcon(notification.type)}
              <NotificationContent>
                <NotificationTitle>{notification.title}</NotificationTitle>
                <NotificationMessage>{notification.message}</NotificationMessage>
                {notification.action && (
                  <NotificationAction onClick={() => handleActionClick(notification)}>
                    {notification.action.label}
                  </NotificationAction>
                )}
              </NotificationContent>
              <CloseButton onClick={() => hideNotification(notification.id)}>
                <X size={16} />
              </CloseButton>
            </NotificationItem>
          ))}
        </AnimatePresence>
      </NotificationContainer>
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export default NotificationProvider;

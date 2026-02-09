import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Loader2
} from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { deepseekService, ChatMessage } from '../services/deepseek';

const ChatbotContainer = styled(motion.div)`
  position: fixed;
  bottom: var(--spacing-6);
  right: var(--spacing-6);
  z-index: 1000;
  font-family: inherit;
`;

const ChatButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-gradient);
  border: none;
  color: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-xl);
  }
`;

const ChatWindow = styled(motion.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--gray-200);

  @media (max-width: 768px) {
    width: 320px;
    height: 450px;
    right: -20px;
  }
`;

const ChatHeader = styled.div`
  background: var(--primary-gradient);
  color: var(--white);
  padding: var(--spacing-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: var(--spacing-1);
  border-radius: var(--radius-md);
  transition: background var(--transition-normal);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: var(--spacing-4);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const Message = styled.div<{ $isUser: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-2);
  max-width: 80%;
  align-self: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
`;

const MessageContent = styled.div<{ $isUser: boolean }>`
  background: ${props => props.$isUser ? 'var(--primary-gradient)' : 'var(--gray-100)'};
  color: ${props => props.$isUser ? 'var(--white)' : 'var(--gray-900)'};
  padding: var(--spacing-3);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  line-height: 1.4;
  word-wrap: break-word;
`;

const MessageIcon = styled.div<{ $isUser: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.$isUser ? 'var(--primary-gradient)' : 'var(--gray-200)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$isUser ? 'var(--white)' : 'var(--gray-600)'};
  font-size: var(--font-size-sm);
  font-weight: var(--font-semibold);
`;

const ChatInput = styled.div`
  padding: var(--spacing-4);
  border-top: 1px solid var(--gray-200);
  display: flex;
  gap: var(--spacing-2);
`;

const InputField = styled.input`
  flex: 1;
  padding: var(--spacing-3);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  outline: none;
  transition: border-color var(--transition-normal);

  &:focus {
    border-color: #d13296;
  }
`;

const SendButton = styled.button`
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--spacing-3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuickReplies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-top: var(--spacing-3);
`;

const QuickReplyButton = styled.button`
  background: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-300);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    background: #d13296;
    color: var(--white);
    border-color: #d13296;
  }
`;

const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-500);
  font-size: var(--font-size-sm);
  font-style: italic;
`;

const Chatbot: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiAvailable, setApiAvailable] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const welcomeMessages = {
    fr: [
              "Bonjour ! Je suis l'assistant virtuel de BestF.kersinTown. Comment puis-je vous aider aujourd'hui ?",
        "Salut ! Je suis là pour vous aider avec vos questions sur BestF.kersinTown. Que souhaitez-vous savoir ?",
        "Hey ! Bienvenue chez BestF.kersinTown. Je peux vous aider avec nos produits, commandes, ou tout autre question !"
    ],
    en: [
              "Hello! I'm BestF.kersinTown's virtual assistant. How can I help you today?",
        "Hi! I'm here to help you with your questions about BestF.kersinTown. What would you like to know?",
        "Hey! Welcome to BestF.kersinTown. I can help you with our products, orders, or any other questions!"
    ]
  };

  const quickReplies = {
    fr: [
      "Voir les produits",
      "Suivre ma commande",
      "Informations sur la marque",
      "Contact"
    ],
    en: [
      "View products",
      "Track my order",
      "Brand information",
      "Contact"
    ]
  };

  // Vérifier la disponibilité de l'API au chargement
  useEffect(() => {
    const checkAPI = async () => {
      const available = await deepseekService.checkAPIHealth();
      setApiAvailable(available);
    };
    checkAPI();
  }, []);

  // Auto-scroll vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus sur l'input quand le chat s'ouvre
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Message de bienvenue
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = welcomeMessages[language][Math.floor(Math.random() * welcomeMessages[language].length)];
      setMessages([{
        role: 'assistant',
        content: welcomeMessage
      }]);
    }
  }, [isOpen, language]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: message
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Utiliser l'API DeepSeek si disponible
      if (apiAvailable) {
        const response = await deepseekService.sendMessage(message, messages, language);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: response
        }]);
      } else {
        // Réponse de fallback
        const fallbackResponse = language === 'fr' 
          ? "Désolé, je rencontre des difficultés techniques. Pouvez-vous reformuler votre question ou contacter notre équipe à contact@bestfkersintown.com ?"
          : "Sorry, I'm experiencing technical difficulties. Can you rephrase your question or contact our team at contact@bestfkersintown.com?";
        
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: fallbackResponse
        }]);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      const errorMessage = language === 'fr'
        ? "Désolé, une erreur s'est produite. Veuillez réessayer ou nous contacter directement."
        : "Sorry, an error occurred. Please try again or contact us directly.";
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: errorMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    handleSendMessage(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <ChatbotContainer>
      {!isOpen && (
        <ChatButton
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={24} />
        </ChatButton>
      )}

      {isOpen && (
        <ChatWindow
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ChatHeader>
            <ChatTitle>
              {language === 'fr' ? 'Assistant BestF.kersinTown' : 'BestF.kersinTown Assistant'}
            </ChatTitle>
            <CloseButton onClick={() => setIsOpen(false)}>
              <X size={20} />
            </CloseButton>
          </ChatHeader>

          <ChatMessages>
            {messages.map((message, index) => (
              <Message key={index} $isUser={message.role === 'user'}>
                <MessageIcon $isUser={message.role === 'user'}>
                  {message.role === 'user' ? <User size={16} /> : 'BFT'}
                </MessageIcon>
                <MessageContent $isUser={message.role === 'user'}>
                  {message.content}
                </MessageContent>
              </Message>
            ))}
            
            {isLoading && (
              <Message $isUser={false}>
                <MessageIcon $isUser={false}>BFT</MessageIcon>
                <LoadingMessage>
                  <Loader2 size={16} className="animate-spin" />
                  {language === 'fr' ? 'Je réfléchis...' : 'Thinking...'}
                </LoadingMessage>
              </Message>
            )}
            
            <div ref={messagesEndRef} />
          </ChatMessages>

          {messages.length === 1 && (
            <QuickReplies>
              {quickReplies[language].map((reply, index) => (
                <QuickReplyButton
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </QuickReplyButton>
              ))}
            </QuickReplies>
          )}

          <ChatInput>
            <InputField
              ref={inputRef}
              type="text"
              placeholder={language === 'fr' ? 'Tapez votre message...' : 'Type your message...'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <SendButton
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isLoading}
            >
              <Send size={16} />
            </SendButton>
          </ChatInput>
        </ChatWindow>
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;

import axios from 'axios';

// Configuration DeepSeek
const DEEPSEEK_API_KEY = 'sk-8dbf1f68c4d2473e8fd3501a9504a1a9';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

// Instance Axios pour l'API DeepSeek
const deepseekAPI = axios.create({
  baseURL: DEEPSEEK_API_URL,
  headers: {
    'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// Types pour les messages
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    finishReason: string;
  }[];
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

// Base de connaissances pour BestF.kersinTown
const KNOWLEDGE_BASE = `
Tu es l'assistant virtuel de BestF.kersinTown, une marque de vêtements inclusive et authentique fondée en 2025.

INFORMATIONS SUR LA MARQUE :
- Nom : BestF.kersinTown
- Fondation : 2025
- Mission : Créer des vêtements inclusifs qui célèbrent la diversité et l'authenticité
- Valeurs : Inclusivité, Diversité, Authenticité, Communauté
- Public cible : Communauté LGBT+, personnes cherchant des vêtements authentiques et inclusifs

PRODUITS :
- Vêtements inclusifs pour tous les corps et identités
- Designs qui célèbrent la diversité
- Collections Pride et Rainbow
- Vêtements de sport inclusifs
- Accessoires colorés et authentiques

SERVICES :
- Livraison express 24h
- Retours gratuits
- Support client inclusif
- Communauté en ligne

INFORMATIONS PRATIQUES :
- Site web : bestfkersintown.com
- Email : contact@bestfkersintown.com
- Téléphone : +33 1 23 45 67 89
- Adresse : 123 Rue de la Mode, 75001 Paris, France

RÈGLES DE COMMUNICATION :
- Sois toujours inclusif et respectueux
- Utilise un langage chaleureux et authentique
- Réponds en français ou en anglais selon la langue de l'utilisateur
- Sois fier de représenter une marque inclusive
- Encourage l'expression de soi et l'authenticité
- Propose toujours d'aider avec des informations sur les produits, commandes, ou support

FONCTIONNALITÉS DISPONIBLES :
- Informations sur les produits et collections
- Aide pour les commandes et livraisons
- Support client et retours
- Informations sur la marque et ses valeurs
- Conseils de style inclusifs
- Informations sur la communauté et les événements
`;

// Service DeepSeek
export const deepseekService = {
  // Envoyer un message au chatbot
  async sendMessage(
    userMessage: string, 
    conversationHistory: ChatMessage[] = [],
    language: 'fr' | 'en' = 'fr'
  ): Promise<string> {
    try {
      // Préparer les messages
      const systemMessage: ChatMessage = {
        role: 'system',
        content: `${KNOWLEDGE_BASE}\n\nLangue de réponse : ${language === 'fr' ? 'français' : 'anglais'}`
      };

      const messages: ChatMessage[] = [
        systemMessage,
        ...conversationHistory,
        { role: 'user', content: userMessage }
      ];

      // Appel à l'API DeepSeek
      const response = await deepseekAPI.post('', {
        model: 'deepseek-chat',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
        top_p: 0.9,
        frequency_penalty: 0.1,
        presence_penalty: 0.1
      });

      const chatResponse: ChatResponse = response.data;
      
      if (chatResponse.choices && chatResponse.choices.length > 0) {
        return chatResponse.choices[0].message.content;
      } else {
        throw new Error('Aucune réponse reçue de DeepSeek');
      }
    } catch (error) {
      console.error('Erreur lors de l\'appel à DeepSeek:', error);
      
      // Réponses de fallback selon la langue
      const fallbackResponses = {
        fr: [
          "Désolé, je rencontre des difficultés techniques. Pouvez-vous reformuler votre question ou contacter notre équipe à contact@bestfkersintown.com ?",
          "Je ne peux pas traiter votre demande pour le moment. N'hésitez pas à nous appeler au +33 1 23 45 67 89 pour une assistance immédiate.",
          "Il y a un problème technique. En attendant, vous pouvez consulter notre FAQ ou nous envoyer un email."
        ],
        en: [
          "Sorry, I'm experiencing technical difficulties. Can you rephrase your question or contact our team at contact@bestfkersintown.com?",
          "I can't process your request right now. Feel free to call us at +33 1 23 45 67 89 for immediate assistance.",
          "There's a technical issue. In the meantime, you can check our FAQ or send us an email."
        ]
      };

      const responses = fallbackResponses[language];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  },

  // Générer une réponse rapide pour les questions fréquentes
  async getQuickResponse(questionType: string, language: 'fr' | 'en' = 'fr'): Promise<string> {
    const quickResponses = {
      fr: {
        'produits': "Nos produits sont conçus pour célébrer la diversité et l'authenticité. Découvrez nos collections inclusives sur notre site !",
        'commandes': "Pour suivre votre commande, connectez-vous à votre compte ou contactez-nous avec votre numéro de commande.",
        'livraison': "Nous proposons une livraison express en 24h. Les frais de livraison varient selon votre localisation.",
        'retours': "Les retours sont gratuits sous 30 jours. Contactez notre service client pour initier un retour.",
        'taille': "Nos vêtements sont conçus pour s'adapter à tous les corps. Consultez notre guide des tailles inclusif.",
        'prix': "Nos prix reflètent la qualité et l'inclusivité de nos produits. Nous proposons aussi des promotions régulières.",
        'contact': "Contactez-nous à contact@bestfkersintown.com ou appelez-nous au +33 1 23 45 67 89."
      },
      en: {
        'produits': "Our products are designed to celebrate diversity and authenticity. Discover our inclusive collections on our website!",
        'commandes': "To track your order, log into your account or contact us with your order number.",
        'livraison': "We offer express delivery in 24h. Shipping costs vary depending on your location.",
        'retours': "Returns are free within 30 days. Contact our customer service to initiate a return.",
        'taille': "Our clothes are designed to fit all body types. Check out our inclusive size guide.",
        'prix': "Our prices reflect the quality and inclusivity of our products. We also offer regular promotions.",
        'contact': "Contact us at contact@bestfkersintown.com or call us at +33 1 23 45 67 89."
      }
    };

    return quickResponses[language][questionType as keyof typeof quickResponses.fr] || 
           quickResponses[language]['contact'];
  },

  // Analyser l'intention de l'utilisateur
  analyzeIntent(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('produit') || lowerMessage.includes('vêtement') || lowerMessage.includes('collection')) {
      return 'produits';
    }
    if (lowerMessage.includes('commande') || lowerMessage.includes('suivre') || lowerMessage.includes('tracking')) {
      return 'commandes';
    }
    if (lowerMessage.includes('livraison') || lowerMessage.includes('expédition') || lowerMessage.includes('shipping')) {
      return 'livraison';
    }
    if (lowerMessage.includes('retour') || lowerMessage.includes('remboursement') || lowerMessage.includes('return')) {
      return 'retours';
    }
    if (lowerMessage.includes('taille') || lowerMessage.includes('size') || lowerMessage.includes('mesure')) {
      return 'taille';
    }
    if (lowerMessage.includes('prix') || lowerMessage.includes('coût') || lowerMessage.includes('price')) {
      return 'prix';
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('appeler') || lowerMessage.includes('email')) {
      return 'contact';
    }
    
    return 'general';
  },

  // Vérifier si l'API est disponible
  async checkAPIHealth(): Promise<boolean> {
    try {
      const response = await deepseekAPI.post('', {
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: 'test' }],
        max_tokens: 10
      });
      return response.status === 200;
    } catch (error) {
      console.error('DeepSeek API non disponible:', error);
      return false;
    }
  }
};

export default deepseekService;

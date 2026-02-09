import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Leaf
} from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import Container from './Container';

const FooterContainer = styled.footer`
  background: var(--gray-900);
  color: var(--white);
  padding: var(--spacing-8) 0 var(--spacing-4);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-6);
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const FooterTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--spacing-3);
  color: var(--white);
`;

const FooterLink = styled(Link)`
  color: var(--gray-300);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-normal);
  
  &:hover {
    color: #d13296;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-300);
  font-size: var(--font-size-sm);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-3);
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  background: var(--gray-800);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-300);
  transition: all var(--transition-normal);
  
  &:hover {
    background: #d13296;
    color: var(--white);
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--gray-800);
  gap: var(--spacing-4);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--gray-400);
  font-size: var(--font-size-sm);
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: var(--spacing-4);
  
  @media (max-width: 768px) {
    gap: var(--spacing-3);
  }
`;

const BottomLink = styled(Link)`
  color: var(--gray-400);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-normal);
  
  &:hover {
    color: #d13296;
  }
`;

const EcoBadge = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-400);
  font-size: var(--font-size-sm);
`;

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const footerSections = [
    {
      title: language === 'fr' ? 'Navigation' : 'Navigation',
      links: [
        { to: '/', label: language === 'fr' ? 'Accueil' : 'Home' },
        { to: '/products', label: language === 'fr' ? 'Produits' : 'Products' },
        { to: '/vote', label: language === 'fr' ? 'Voter' : 'Vote' },
        { to: '/about', label: language === 'fr' ? 'À propos' : 'About' }
      ]
    },
    {
      title: language === 'fr' ? 'Support' : 'Support',
      links: [
        { to: '/commitments', label: language === 'fr' ? 'Nos engagements' : 'Our commitments' },
        { to: '/account', label: language === 'fr' ? 'Mon compte' : 'My account' },
        { to: '/cart', label: language === 'fr' ? 'Panier' : 'Cart' }
      ]
    }
  ];

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          {footerSections.map((section, index) => (
            <FooterSection key={index}>
              <FooterTitle>{section.title}</FooterTitle>
              {section.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterSection>
          ))}

          <FooterSection>
            <FooterTitle>{language === 'fr' ? 'Contact' : 'Contact'}</FooterTitle>
            <ContactItem as="a" href="mailto:contact@bestfkersintown.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Mail size={16} />
              contact@bestfkersintown.com
            </ContactItem>
            <ContactItem>
              <Phone size={16} />
              +33 1 23 45 67 89
            </ContactItem>
            <SocialLinks>
              <SocialLink href="https://www.instagram.com/bestf.kersintown/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href="https://www.tiktok.com/@bestf.kersintown?_r=1&_t=ZN-93ESJFFeLXq" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.18-1.3-.44-.24-.86-.52-1.24-.85V15a7.5 7.5 0 0 1-14.91 1.41 7.5 7.5 0 0 1 13.61-4.82c.02-.17.04-.34.04-.51V.02z" />
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>© 2025 <span className="papyrus-font">BestF.kersinTown</span></Copyright>
          <FooterBottomLinks>
            <BottomLink to="/about">
              {language === 'fr' ? 'Mentions légales' : 'Legal'}
            </BottomLink>
            <BottomLink to="/commitments">
              {language === 'fr' ? 'Confidentialité' : 'Privacy'}
            </BottomLink>
          </FooterBottomLinks>
          <EcoBadge>
            <Leaf size={16} />
            {language === 'fr' ? 'Mode inclusive' : 'Inclusive fashion'}
          </EcoBadge>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

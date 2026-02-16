import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FileText, Shield, Gavel, Mail } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import Container from '../components/Container';

const CGVPage: React.FC = () => {
    const { language } = useLanguage();

    return (
        <PageContainer>
            <HeroSection>
                <Container>
                    <HeroContent>
                        <HeroTitle>
                            {language === 'fr' ? 'Conditions Générales de Vente' : 'General Terms & Conditions'}
                        </HeroTitle>
                        <HeroSubtitle>
                            {language === 'fr'
                                ? 'Informations légales et conditions d\'utilisation de nos services'
                                : 'Legal information and terms of use for our services'
                            }
                        </HeroSubtitle>
                    </HeroContent>
                </Container>
            </HeroSection>

            <Container>
                <SectionContent
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Article>
                        <h2>ARTICLE 1 - Désignation du Vendeur</h2>
                        <p>
                            CASTELLANO VENTURES, Société par actions simplifiée au capital de 10 000 €<br />
                            Siège social : 18 cours Honoré Cresp, 06130 Grasse<br />
                            RCS Grasse n° 987 795 846<br />
                            Téléphone : +33 6 70 25 86 34<br />
                            Adresse mail : president@castellanoventures.com<br />
                            Site internet : bestfkersintown.com<br />
                            Représentée par son Président, Monsieur Michel CASTELLANO
                        </p>
                    </Article>

                    <Article>
                        <h2>ARTICLE 2 - Champ d'application</h2>
                        <p>
                            Les présentes Conditions Générales de Vente s’appliquent, sans restriction ni réserve, à l’ensemble des ventes conclues par CASTELLANO VENTURES auprès de consommateurs et d’acheteurs non professionnels désirant acquérir les produits proposés à la vente sur le site internet bestfkersintown.com.
                        </p>
                    </Article>

                    <Article>
                        <h2>ARTICLE 3 - Produits proposés à la vente</h2>
                        <p>
                            Les Produits proposés à la vente sont tous types de produits distribués sous la marque « BEST F.KERS in TOWN ». Les caractéristiques principales des Produits sont présentées sur le site internet du Vendeur. Le choix et l'achat d'un Produit est de la seule responsabilité du Client.
                        </p>
                    </Article>

                    <Article>
                        <h2>ARTICLE 4 - Commandes</h2>
                        <p>
                            Le Client sélectionne les Produits sur le site internet bestfkersintown.com. La vente n’est définitive qu’après confirmation de la commande par email par le Vendeur, et encaissement du prix.
                        </p>
                    </Article>

                    <Article>
                        <h2>ARTICLE 5 - Tarifs</h2>
                        <p>
                            Les Produits sont fournis aux tarifs en vigueur figurant sur le site internet bestfkersintown.com, exprimés en euros, HT et TTC. Ils ne comprennent pas les frais de livraison, facturés en supplément.
                        </p>
                    </Article>

                    <Article>
                        <h2>ARTICLE 6 - Conditions de paiement</h2>
                        <p>
                            Le prix est payable comptant, en totalité au jour de la commande. Moyens de paiement acceptés : Cartes bancaires (Visa, Mastercard, American Express), PayPal, Virement bancaire.
                        </p>
                    </Article>

                    <Article>
                        <h2>ARTICLE 7 - Livraison</h2>
                        <p>
                            Les Produits commandés seront délivrés en Union européenne, dans un délai de 15 jours à compter de l’expédition par un transporteur indépendant.
                        </p>
                    </Article>

                    <Article>
                        <h2>ARTICLE 9 - Droit de rétractation</h2>
                        <p>
                            Conformément aux dispositions légales en vigueur, le Client dispose d'un délai de quatorze jours à compter de la réception du Produit pour exercer son droit de rétractation auprès du Vendeur, sans avoir à justifier de motifs ni à payer de pénalité.
                        </p>
                    </Article>

                    <Article>
                        <h2>ARTICLE 10 - Garanties légales</h2>
                        <p>
                            Les Produits vendus sur le site Internet sont conformes à la réglementation en vigueur en France et bénéficient de plein droit de la garantie légale de conformité et de la garantie légale contre les vices cachés.
                        </p>
                    </Article>

                    <Article>
                        <h2>ARTICLE 12 - Protection des données personnelles</h2>
                        <p>
                            Les données nominatives demandées au Client sont nécessaires au traitement de sa commande et à l'établissement des factures. Ces données peuvent être communiquées aux éventuels partenaires du Vendeur chargés de l'exécution, du traitement, de la gestion et du paiement des commandes.
                        </p>
                    </Article>

                    <ContactSection>
                        <h3><Mail size={20} /> Une question ?</h3>
                        <p>Pour toute question relative à nos CGV, contactez-nous au <strong>+33 6 70 25 86 34</strong> ou par mail à <strong>president@castellanoventures.com</strong></p>
                    </ContactSection>
                </SectionContent>
            </Container>
        </PageContainer>
    );
};

const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--white);
  padding-bottom: var(--spacing-20);
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  padding: var(--spacing-24) 0 var(--spacing-16) 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-6);
`;

const HeroSubtitle = styled.p`
  font-size: var(--font-size-xl);
  opacity: 0.9;
  line-height: 1.6;
`;

const SectionContent = styled(motion.div)`
  max-width: 900px;
  margin: var(--spacing-16) auto;
  background: var(--white);
  padding: var(--spacing-12);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
`;

const Article = styled.div`
  margin-bottom: var(--spacing-10);
  
  h2 {
    font-size: var(--font-size-2xl);
    color: var(--gray-900);
    margin-bottom: var(--spacing-4);
    border-bottom: 2px solid #d13296;
    display: inline-block;
    padding-bottom: 4px;
  }
  
  p {
    font-size: var(--font-size-lg);
    color: var(--gray-700);
    line-height: 1.8;
  }
`;

const ContactSection = styled.div`
  margin-top: var(--spacing-12);
  padding: var(--spacing-8);
  background: var(--gray-50);
  border-radius: var(--radius-xl);
  text-align: center;
  
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #d13296;
    margin-bottom: var(--spacing-4);
  }
  
  p {
    color: var(--gray-600);
  }
`;

export default CGVPage;

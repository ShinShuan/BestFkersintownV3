import React, { useState } from 'react';
import styled from 'styled-components';
import { Mail, Lock, User, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useNotification } from './NotificationProvider';
import { authService } from '../services/auth';

const AuthContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: var(--spacing-6);
`;

const AuthForm = styled.form`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
`;

const AuthTitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  text-align: center;
  margin-bottom: var(--spacing-6);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-4);
`;

const Label = styled.label`
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  color: var(--gray-700);
  margin-bottom: var(--spacing-2);
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-3) var(--spacing-10) var(--spacing-3) var(--spacing-10);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
  
  &.error {
    border-color: var(--error);
  }
  
  &.success {
    border-color: var(--success);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: var(--spacing-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray-400);
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: var(--spacing-3);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--gray-400);
  cursor: pointer;
  padding: 0;
  
  &:hover {
    color: var(--gray-600);
  }
`;

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-2);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;



const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  cursor: pointer;
  transition: all var(--transition-fast);
  margin-top: var(--spacing-6);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-6) 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--gray-200);
  }
  
  span {
    padding: 0 var(--spacing-4);
    color: var(--gray-500);
    font-size: var(--font-size-sm);
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  background: var(--white);
  color: var(--gray-700);
  border: 2px solid var(--gray-200);
  padding: var(--spacing-3);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3);
  
  &:hover {
    border-color: var(--gray-300);
    background: var(--gray-50);
  }
`;

const GoogleHelpText = styled.div`
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 8px;
  padding: 8px;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 4px;
`;

const ToggleMode = styled.div`
  text-align: center;
  margin-top: var(--spacing-6);
  color: var(--gray-600);
  font-size: var(--font-size-sm);
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #d13296;
  font-weight: var(--font-semibold);
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: #b02a7a;
  }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid var(--white);
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

interface AuthFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ShopifyAuthFormProps {
  onSuccess?: (customer: any) => void;
  onClose?: () => void;
}

const ShopifyAuthForm: React.FC<ShopifyAuthFormProps> = ({ onSuccess }) => {
  const { language } = useLanguage();
  const { showNotification } = useNotification();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<AuthFormData>>({});
  const [formData, setFormData] = useState<AuthFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateForm = (): boolean => {
    const newErrors: Partial<AuthFormData> = {};

    if (!isLogin) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = language === 'fr' ? 'Prénom requis' : 'First name required';
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = language === 'fr' ? 'Nom requis' : 'Last name required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = language === 'fr' ? 'Les mots de passe ne correspondent pas' : 'Passwords do not match';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'fr' ? 'Email requis' : 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'fr' ? 'Email invalide' : 'Invalid email';
    }

    if (!formData.password.trim()) {
      newErrors.password = language === 'fr' ? 'Mot de passe requis' : 'Password required';
    } else if (formData.password.length < 6) {
      newErrors.password = language === 'fr' ? 'Le mot de passe doit contenir au moins 6 caractères' : 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof AuthFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (isLogin) {
        // Connexion
        const customer = await authService.login(formData.email, formData.password);
        showNotification({
          type: 'success',
          title: language === 'fr' ? 'Connexion réussie' : 'Login Successful',
          message: language === 'fr' ? 'Bienvenue ! Vous êtes maintenant connecté.' : 'Welcome! You are now logged in.'
        });
        onSuccess?.(customer);
      } else {
        // Inscription
        const customer = await authService.register({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName
        });
        showNotification({
          type: 'success',
          title: language === 'fr' ? 'Compte créé avec succès !' : 'Account created successfully!',
          message: language === 'fr' ? 'Votre compte a été créé avec succès.' : 'Your account has been created successfully.'
        });
        onSuccess?.(customer);
      }
    } catch (error: any) {
      console.error('Erreur d\'authentification:', error);

      // Gestion spécifique des erreurs Shopify
      let errorMessage = error.message || (language === 'fr' ? 'Erreur d\'authentification' : 'Authentication error');

      // Traductions des erreurs courantes Shopify
      if (errorMessage.includes('UNIDENTIFIED_CUSTOMER')) {
        errorMessage = language === 'fr' ? 'Email ou mot de passe incorrect' : 'Invalid email or password';
      } else if (errorMessage.includes('CUSTOMER_DISABLED')) {
        errorMessage = language === 'fr' ? 'Compte désactivé' : 'Account disabled';
      } else if (errorMessage.includes('CUSTOMER_ALREADY_EXISTS')) {
        errorMessage = language === 'fr' ? 'Un compte existe déjà avec cet email' : 'An account already exists with this email';
      } else if (errorMessage.includes('INVALID_EMAIL')) {
        errorMessage = language === 'fr' ? 'Format d\'email invalide' : 'Invalid email format';
      } else if (errorMessage.includes('TOO_SHORT')) {
        errorMessage = language === 'fr' ? 'Le mot de passe doit contenir au moins 6 caractères' : 'Password must be at least 6 characters';
      }

      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur d\'authentification' : 'Authentication Error',
        message: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      setIsLoading(true);
      const { customer } = await authService.loginWithGoogle();
      showNotification({
        type: 'success',
        title: language === 'fr' ? 'Connexion Google réussie !' : 'Google login successful!',
        message: language === 'fr' ? `Bienvenue ${customer.firstName} !` : `Welcome ${customer.firstName}!`
      });
      onSuccess?.(customer);
    } catch (error: any) {
      console.error('Erreur Google Auth:', error);

      // Gestion spécifique des erreurs Google OAuth
      let errorMessage = error.message || (language === 'fr' ? 'Erreur de connexion Google' : 'Google login error');

      if (errorMessage.includes('configuration OAuth')) {
        errorMessage = language === 'fr'
          ? 'Erreur de configuration Google OAuth. Vérifiez les paramètres dans Google Console.'
          : 'Google OAuth configuration error. Check settings in Google Console.';
      } else if (errorMessage.includes('popup Google')) {
        errorMessage = language === 'fr'
          ? 'Impossible d\'ouvrir la popup Google. Vérifiez votre configuration OAuth.'
          : 'Unable to open Google popup. Check your OAuth configuration.';
      } else if (errorMessage.includes('404')) {
        errorMessage = language === 'fr'
          ? 'Erreur 404 : URL de redirection non configurée dans Google Console. Consultez le guide de configuration.'
          : '404 Error: Redirect URL not configured in Google Console. Check configuration guide.';
      }

      showNotification({
        type: 'error',
        title: language === 'fr' ? 'Erreur Google OAuth' : 'Google OAuth Error',
        message: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>
          {isLogin
            ? (language === 'fr' ? 'Connexion' : 'Login')
            : (language === 'fr' ? 'Créer un compte' : 'Create Account')
          }
        </AuthTitle>

        {!isLogin && (
          <>
            <FormGroup>
              <Label>{language === 'fr' ? 'Prénom' : 'First Name'}</Label>
              <InputContainer>
                <InputIcon>
                  <User size={20} />
                </InputIcon>
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={errors.firstName ? 'error' : ''}
                  placeholder={language === 'fr' ? 'Votre prénom' : 'Your first name'}
                />
              </InputContainer>
              {errors.firstName && <ErrorMessage><AlertCircle size={16} />{errors.firstName}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>{language === 'fr' ? 'Nom' : 'Last Name'}</Label>
              <InputContainer>
                <InputIcon>
                  <User size={20} />
                </InputIcon>
                <Input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={errors.lastName ? 'error' : ''}
                  placeholder={language === 'fr' ? 'Votre nom' : 'Your last name'}
                />
              </InputContainer>
              {errors.lastName && <ErrorMessage><AlertCircle size={16} />{errors.lastName}</ErrorMessage>}
            </FormGroup>
          </>
        )}

        <FormGroup>
          <Label>{language === 'fr' ? 'Email' : 'Email'}</Label>
          <InputContainer>
            <InputIcon>
              <Mail size={20} />
            </InputIcon>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'error' : ''}
              placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
            />
          </InputContainer>
          {errors.email && <ErrorMessage><AlertCircle size={16} />{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>{language === 'fr' ? 'Mot de passe' : 'Password'}</Label>
          <InputContainer>
            <InputIcon>
              <Lock size={20} />
            </InputIcon>
            <Input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className={errors.password ? 'error' : ''}
              placeholder={language === 'fr' ? 'Votre mot de passe' : 'Your password'}
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
          </InputContainer>
          {errors.password && <ErrorMessage><AlertCircle size={16} />{errors.password}</ErrorMessage>}
        </FormGroup>

        {!isLogin && (
          <FormGroup>
            <Label>{language === 'fr' ? 'Confirmer le mot de passe' : 'Confirm Password'}</Label>
            <InputContainer>
              <InputIcon>
                <Lock size={20} />
              </InputIcon>
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className={errors.confirmPassword ? 'error' : ''}
                placeholder={language === 'fr' ? 'Confirmez votre mot de passe' : 'Confirm your password'}
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </PasswordToggle>
            </InputContainer>
            {errors.confirmPassword && <ErrorMessage><AlertCircle size={16} />{errors.confirmPassword}</ErrorMessage>}
          </FormGroup>
        )}

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <LoadingSpinner />
              {isLogin
                ? (language === 'fr' ? 'Connexion...' : 'Logging in...')
                : (language === 'fr' ? 'Création...' : 'Creating...')
              }
            </>
          ) : (
            isLogin
              ? (language === 'fr' ? 'Se connecter' : 'Login')
              : (language === 'fr' ? 'Créer le compte' : 'Create Account')
          )}
        </SubmitButton>

        <Divider>
          <span>{language === 'fr' ? 'ou' : 'or'}</span>
        </Divider>

        <GoogleButton type="button" onClick={handleGoogleAuth} disabled={isLoading}>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          {language === 'fr' ? 'Continuer avec Google' : 'Continue with Google'}
        </GoogleButton>

        <GoogleHelpText>
          {language === 'fr'
            ? '⚠️ Si vous obtenez une erreur 404, consultez le guide de configuration Google OAuth'
            : '⚠️ If you get a 404 error, check the Google OAuth configuration guide'
          }
        </GoogleHelpText>

        <ToggleMode>
          {isLogin
            ? (language === 'fr' ? 'Pas encore de compte ?' : 'Don\'t have an account?')
            : (language === 'fr' ? 'Déjà un compte ?' : 'Already have an account?')
          }
          <ToggleButton type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? (language === 'fr' ? 'Créer un compte' : 'Create account')
              : (language === 'fr' ? 'Se connecter' : 'Login')
            }
          </ToggleButton>
        </ToggleMode>
      </AuthForm>
    </AuthContainer>
  );
};

export default ShopifyAuthForm;

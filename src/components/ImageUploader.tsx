/**
 * Composant d'upload d'images avec Drag & Drop
 *
 * Utilise Cloudinary pour le stockage des images.
 * Configuration requise:
 * - VITE_CLOUDINARY_CLOUD_NAME: Nom du cloud Cloudinary
 * - VITE_CLOUDINARY_UPLOAD_PRESET: Preset d'upload (unsigned)
 */

import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Upload, X, Image as ImageIcon, Link as LinkIcon, Loader } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  placeholder?: string;
}

// Configuration Cloudinary
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const isCloudinaryConfigured = !!(CLOUDINARY_CLOUD_NAME && CLOUDINARY_UPLOAD_PRESET);

const ImageUploader: React.FC<ImageUploaderProps> = ({ value, onChange, placeholder }) => {
  const { language } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [mode, setMode] = useState<'url' | 'upload'>('url');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Upload vers Cloudinary
  const uploadToCloudinary = async (file: File): Promise<string> => {
    if (!isCloudinaryConfigured) {
      throw new Error('Cloudinary not configured');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'bfit-votes');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return data.secure_url;
  };

  // Gérer le fichier uploadé
  const handleFile = useCallback(async (file: File) => {
    // Vérifier le type de fichier
    if (!file.type.startsWith('image/')) {
      setUploadError(language === 'fr' ? 'Seules les images sont acceptées' : 'Only images are accepted');
      return;
    }

    // Vérifier la taille (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError(language === 'fr' ? 'Image trop lourde (max 10MB)' : 'Image too large (max 10MB)');
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    try {
      if (isCloudinaryConfigured) {
        // Upload vers Cloudinary
        const url = await uploadToCloudinary(file);
        onChange(url);
      } else {
        // Fallback: Convertir en base64 (pour démo locale uniquement)
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64 = e.target?.result as string;
          onChange(base64);
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(language === 'fr' ? 'Erreur lors de l\'upload' : 'Upload error');
    } finally {
      setIsUploading(false);
    }
  }, [language, onChange]);

  // Événements de drag & drop
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  // Clic sur la zone de drop
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  // Sélection de fichier
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  // Supprimer l'image
  const handleRemove = () => {
    onChange('');
    setUploadError(null);
  };

  return (
    <Container>
      {/* Onglets URL / Upload */}
      <Tabs>
        <Tab $active={mode === 'url'} onClick={() => setMode('url')}>
          <LinkIcon size={14} />
          URL
        </Tab>
        <Tab $active={mode === 'upload'} onClick={() => setMode('upload')}>
          <Upload size={14} />
          {language === 'fr' ? 'Téléverser' : 'Upload'}
        </Tab>
      </Tabs>

      {mode === 'url' ? (
        /* Mode URL */
        <UrlInput
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || 'https://example.com/image.jpg'}
        />
      ) : (
        /* Mode Upload */
        <DropZone
          $isDragging={isDragging}
          $hasImage={!!value}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />

          {isUploading ? (
            <UploadingState>
              <Loader size={32} className="spinner" />
              <span>{language === 'fr' ? 'Upload en cours...' : 'Uploading...'}</span>
            </UploadingState>
          ) : value ? (
            <PreviewContainer>
              <PreviewImage src={value} alt="Preview" />
              <RemoveButton onClick={(e) => { e.stopPropagation(); handleRemove(); }}>
                <X size={16} />
              </RemoveButton>
            </PreviewContainer>
          ) : (
            <DropContent>
              <ImageIcon size={40} strokeWidth={1.5} />
              <DropText>
                {language === 'fr'
                  ? 'Glissez une image ici ou cliquez pour sélectionner'
                  : 'Drag an image here or click to select'}
              </DropText>
              <DropHint>
                {language === 'fr'
                  ? 'PNG, JPG, WebP (max 10MB)'
                  : 'PNG, JPG, WebP (max 10MB)'}
              </DropHint>
            </DropContent>
          )}
        </DropZone>
      )}

      {/* Prévisualisation si URL */}
      {mode === 'url' && value && (
        <UrlPreview>
          <PreviewImage src={value} alt="Preview" />
        </UrlPreview>
      )}

      {/* Message d'erreur */}
      {uploadError && <ErrorMessage>{uploadError}</ErrorMessage>}

      {/* Info Cloudinary */}
      {mode === 'upload' && !isCloudinaryConfigured && (
        <ConfigWarning>
          {language === 'fr'
            ? '⚠️ Cloudinary non configuré. Les images seront en base64 (local uniquement).'
            : '⚠️ Cloudinary not configured. Images will be base64 (local only).'}
        </ConfigWarning>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const Tabs = styled.div`
  display: flex;
  gap: var(--spacing-1);
  background: var(--gray-100);
  padding: 4px;
  border-radius: var(--radius-lg);
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
  padding: var(--spacing-2) var(--spacing-3);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  background: ${props => props.$active ? 'var(--white)' : 'transparent'};
  color: ${props => props.$active ? '#d13296' : 'var(--gray-600)'};
  box-shadow: ${props => props.$active ? 'var(--shadow-sm)' : 'none'};

  &:hover {
    color: #d13296;
  }
`;

const UrlInput = styled.input`
  padding: var(--spacing-3);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  transition: all var(--transition-normal);

  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`;

const DropZone = styled.div<{ $isDragging: boolean; $hasImage: boolean }>`
  position: relative;
  border: 2px dashed ${props => props.$isDragging ? '#d13296' : 'var(--gray-300)'};
  border-radius: var(--radius-lg);
  padding: ${props => props.$hasImage ? '0' : 'var(--spacing-6)'};
  background: ${props => props.$isDragging ? 'rgba(209, 50, 150, 0.05)' : 'var(--gray-50)'};
  cursor: pointer;
  transition: all var(--transition-normal);
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    border-color: #d13296;
    background: rgba(209, 50, 150, 0.02);
  }
`;

const DropContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-500);
`;

const DropText = styled.span`
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  text-align: center;
`;

const DropHint = styled.span`
  font-size: var(--font-size-xs);
  color: var(--gray-400);
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-md);
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: var(--radius-full);
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);

  &:hover {
    background: rgba(239, 68, 68, 0.9);
    transform: scale(1.1);
  }
`;

const UploadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  color: #d13296;

  .spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const UrlPreview = styled.div`
  height: 120px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--gray-200);
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: var(--font-size-sm);
  padding: var(--spacing-2);
  background: #fef2f2;
  border-radius: var(--radius-md);
`;

const ConfigWarning = styled.div`
  color: #b45309;
  font-size: var(--font-size-xs);
  padding: var(--spacing-2);
  background: #fffbeb;
  border-radius: var(--radius-md);
  border: 1px solid #fcd34d;
`;

export default ImageUploader;

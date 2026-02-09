/**
 * Client Supabase - BestF.kersInTown
 *
 * Ce fichier configure la connexion à Supabase pour le stockage persistant des votes.
 *
 * CONFIGURATION:
 * 1. Créez un projet sur https://supabase.com
 * 2. Copiez l'URL et la clé anon depuis Settings > API
 * 3. Ajoutez les variables d'environnement:
 *    - VITE_SUPABASE_URL=https://xxxxx.supabase.co
 *    - VITE_SUPABASE_ANON_KEY=eyJxxxxx
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Types pour la base de données Supabase
export interface Database {
  public: {
    Tables: {
      vote_items: {
        Row: {
          id: string;
          title: string;
          title_en: string | null;
          description: string;
          description_en: string | null;
          image: string;
          category: string;
          votes: number;
          is_active: boolean;
          start_date: string | null;
          end_date: string | null;
          created_at: string;
          updated_at: string | null;
        };
        Insert: Omit<Database['public']['Tables']['vote_items']['Row'], 'id' | 'created_at' | 'votes'> & {
          id?: string;
          created_at?: string;
          votes?: number;
        };
        Update: Partial<Database['public']['Tables']['vote_items']['Row']>;
      };
      user_votes: {
        Row: {
          id: string;
          vote_item_id: string;
          user_identifier: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['user_votes']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['user_votes']['Row']>;
      };
      coming_items: {
        Row: {
          id: string;
          title: string;
          title_en: string | null;
          description: string;
          description_en: string | null;
          image: string;
          release_date: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['coming_items']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['coming_items']['Row']>;
      };
    };
  };
}

// Variables d'environnement Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Vérifier si Supabase est configuré
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Créer le client Supabase (ou null si non configuré)
let supabase: SupabaseClient<Database> | null = null;

if (isSupabaseConfigured) {
  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
  console.log('✅ Supabase configuré et connecté');
} else {
  console.log('⚠️ Supabase non configuré - utilisation du localStorage');
}

export { supabase };

// Helper pour générer un identifiant utilisateur unique
export function getUserIdentifier(): string {
  const storageKey = 'bfit_user_id';
  let userId = localStorage.getItem(storageKey);

  if (!userId) {
    // Générer un identifiant unique basé sur le timestamp et un random
    userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem(storageKey, userId);
  }

  return userId;
}

export default supabase;

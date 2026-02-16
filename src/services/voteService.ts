/**
 * Service de Vote - BestF.kersInTown
 *
 * Ce service gère les votes avec support pour:
 * - Supabase (production - base de données PostgreSQL)
 * - localStorage (développement/fallback)
 *
 * Le service détecte automatiquement si Supabase est configuré
 * et bascule sur localStorage sinon.
 */

import { getSupabaseClient, isSupabaseConfigured, getUserIdentifier } from './supabaseClient';

// Types
export interface VoteItem {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  image: string;
  category: string;
  votes: number;
  isActive: boolean;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface UserVote {
  id: string;
  voteItemId: string;
  userIdentifier: string;
  createdAt: string;
}

export interface ComingItem {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  image: string;
  releaseDate: string;
  createdAt: string;
}

// Configuration du stockage localStorage (fallback)
const STORAGE_KEYS = {
  VOTE_ITEMS: 'bfit_vote_items',
  USER_VOTES: 'bfit_user_votes',
  COMING_ITEMS: 'bfit_coming_items',
  VOTED_ITEMS: 'bfit_voted_items',
};

// Données par défaut
const DEFAULT_VOTE_ITEMS: VoteItem[] = [
  {
    id: '1',
    title: 'Collection Pride 2026',
    titleEn: 'Pride Collection 2026',
    description: 'Une collection audacieuse célébrant la diversité avec des couleurs vibrantes et des designs inclusifs.',
    descriptionEn: 'A bold collection celebrating diversity with vibrant colors and inclusive designs.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    votes: 1247,
    category: 'collection',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Sneakers Rainbow',
    titleEn: 'Rainbow Sneakers',
    description: 'Des sneakers colorées et confortables pour exprimer votre authenticité au quotidien.',
    descriptionEn: 'Colorful and comfortable sneakers to express your authenticity daily.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    votes: 892,
    category: 'shoes',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'T-shirt "Be You"',
    titleEn: '"Be You" T-shirt',
    description: "Un message puissant sur un t-shirt confortable, pour rappeler à chacun d'être authentique.",
    descriptionEn: 'A powerful message on a comfortable t-shirt, reminding everyone to be authentic.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    votes: 1567,
    category: 'clothing',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Hoodie "Love Wins"',
    titleEn: '"Love Wins" Hoodie',
    description: "Un hoodie confortable avec un message d'amour et d'acceptation pour tous.",
    descriptionEn: 'A comfortable hoodie with a message of love and acceptance for everyone.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    votes: 2034,
    category: 'clothing',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Accessoires Rainbow',
    titleEn: 'Rainbow Accessories',
    description: "Une collection d'accessoires colorés pour compléter votre style unique.",
    descriptionEn: 'A collection of colorful accessories to complete your unique style.',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    votes: 756,
    category: 'accessories',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Collection Sport Inclusive',
    titleEn: 'Inclusive Sport Collection',
    description: 'Des vêtements de sport inclusifs pour tous les corps et toutes les identités.',
    descriptionEn: 'Inclusive sportswear for all bodies and identities.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    votes: 1345,
    category: 'sport',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
];

const DEFAULT_COMING_ITEMS: ComingItem[] = [
  {
    id: '1',
    title: 'Collection Été 2026',
    titleEn: 'Summer 2026 Collection',
    description: 'Une collection estivale audacieuse avec des couleurs vibrantes et des designs inclusifs.',
    descriptionEn: 'A bold summer collection with vibrant colors and inclusive designs.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    releaseDate: '2026-06-01',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Accessoires Rainbow',
    titleEn: 'Rainbow Accessories',
    description: "Une ligne d'accessoires colorés pour compléter votre style unique.",
    descriptionEn: 'A line of colorful accessories to complete your unique style.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    releaseDate: '2026-07-01',
    createdAt: new Date().toISOString(),
  },
];

// ==================== HELPERS LOCALSTORAGE ====================

function getStorageData<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored) as T;
    }
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
  }
  return defaultValue;
}

function setStorageData<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error writing ${key} to localStorage:`, error);
  }
}

function initializeDefaultData(): void {
  if (!localStorage.getItem(STORAGE_KEYS.VOTE_ITEMS)) {
    setStorageData(STORAGE_KEYS.VOTE_ITEMS, DEFAULT_VOTE_ITEMS);
  }
  if (!localStorage.getItem(STORAGE_KEYS.COMING_ITEMS)) {
    setStorageData(STORAGE_KEYS.COMING_ITEMS, DEFAULT_COMING_ITEMS);
  }
  if (!localStorage.getItem(STORAGE_KEYS.USER_VOTES)) {
    setStorageData(STORAGE_KEYS.USER_VOTES, [] as UserVote[]);
  }
}

// Initialiser localStorage au chargement (fallback)
if (!isSupabaseConfigured) {
  initializeDefaultData();
}

// ==================== HELPERS SUPABASE ====================

// Convertir les données Supabase vers notre format
function mapSupabaseToVoteItem(row: any): VoteItem {
  return {
    id: row.id,
    title: row.title,
    titleEn: row.title_en || undefined,
    description: row.description,
    descriptionEn: row.description_en || undefined,
    image: row.image,
    category: row.category,
    votes: row.votes,
    isActive: row.is_active,
    startDate: row.start_date || undefined,
    endDate: row.end_date || undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at || undefined,
  };
}

function mapSupabaseToComingItem(row: any): ComingItem {
  return {
    id: row.id,
    title: row.title,
    titleEn: row.title_en || undefined,
    description: row.description,
    descriptionEn: row.description_en || undefined,
    image: row.image,
    releaseDate: row.release_date,
    createdAt: row.created_at,
  };
}

// ==================== SERVICE DE VOTE ====================

export const voteService = {
  // --- VOTE ITEMS ---

  async getVoteItems(activeOnly: boolean = false): Promise<VoteItem[]> {
    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      let query = client.from('vote_items' as any).select('*').order('votes', { ascending: false });

      if (activeOnly) {
        query = query.eq('is_active', true);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      return (data || []).map(mapSupabaseToVoteItem);
    }

    // Fallback localStorage
    const items = getStorageData<VoteItem[]>(STORAGE_KEYS.VOTE_ITEMS, DEFAULT_VOTE_ITEMS);
    return activeOnly ? items.filter(item => item.isActive) : items;
  },

  async getVoteItemById(id: string): Promise<VoteItem | null> {
    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      const { data, error } = await client
        .from('vote_items' as any)
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') return null; // Not found
        console.error('Supabase error:', error);
        throw error;
      }

      return data ? mapSupabaseToVoteItem(data) : null;
    }

    const items = await this.getVoteItems();
    return items.find(item => item.id === id) || null;
  },

  async createVoteItem(item: Omit<VoteItem, 'id' | 'votes' | 'createdAt'>): Promise<VoteItem> {
    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      const { data, error } = await client
        .from('vote_items' as any)
        .insert({
          title: item.title,
          title_en: item.titleEn || null,
          description: item.description,
          description_en: item.descriptionEn || null,
          image: item.image,
          category: item.category,
          is_active: item.isActive,
          start_date: item.startDate || null,
          end_date: item.endDate || null,
          votes: 0 // Explicitly set initial votes
        } as any)
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      return mapSupabaseToVoteItem(data);
    }

    // Fallback localStorage
    const items = await this.getVoteItems();
    const newItem: VoteItem = {
      ...item,
      id: Date.now().toString(),
      votes: 0,
      createdAt: new Date().toISOString(),
    };
    items.push(newItem);
    setStorageData(STORAGE_KEYS.VOTE_ITEMS, items);
    return newItem;
  },

  async updateVoteItem(id: string, updates: Partial<VoteItem>): Promise<VoteItem | null> {
    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      const updateData: any = {
        updated_at: new Date().toISOString(),
      };

      if (updates.title !== undefined) updateData.title = updates.title;
      if (updates.titleEn !== undefined) updateData.title_en = updates.titleEn;
      if (updates.description !== undefined) updateData.description = updates.description;
      if (updates.descriptionEn !== undefined) updateData.description_en = updates.descriptionEn;
      if (updates.image !== undefined) updateData.image = updates.image;
      if (updates.category !== undefined) updateData.category = updates.category;
      if (updates.isActive !== undefined) updateData.is_active = updates.isActive;
      if (updates.votes !== undefined) updateData.votes = updates.votes;
      if (updates.startDate !== undefined) updateData.start_date = updates.startDate;
      if (updates.endDate !== undefined) updateData.end_date = updates.endDate;

      const { data, error } = await client
        .from('vote_items' as any)
        .update(updateData as any)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      return data ? mapSupabaseToVoteItem(data) : null;
    }

    // Fallback localStorage
    const items = await this.getVoteItems();
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return null;

    items[index] = {
      ...items[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    setStorageData(STORAGE_KEYS.VOTE_ITEMS, items);
    return items[index];
  },

  async deleteVoteItem(id: string): Promise<boolean> {
    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      const { error } = await client.from('vote_items' as any).delete().eq('id', id);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      return true;
    }

    // Fallback localStorage
    const items = await this.getVoteItems();
    const filteredItems = items.filter(item => item.id !== id);
    if (filteredItems.length === items.length) return false;

    setStorageData(STORAGE_KEYS.VOTE_ITEMS, filteredItems);
    return true;
  },

  async toggleVoteItemActive(id: string): Promise<VoteItem | null> {
    const item = await this.getVoteItemById(id);
    if (!item) return null;

    return this.updateVoteItem(id, { isActive: !item.isActive });
  },

  // --- USER VOTES ---

  async hasUserVoted(voteItemId: string): Promise<boolean> {
    const userIdentifier = getUserIdentifier();

    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      const { data, error } = await client
        .from('user_votes' as any)
        .select('id')
        .eq('vote_item_id', voteItemId)
        .eq('user_identifier', userIdentifier)
        .maybeSingle();

      if (error) {
        console.error('Supabase error:', error);
        return false;
      }

      return !!data;
    }

    // Fallback localStorage
    const votedItems = getStorageData<string[]>(STORAGE_KEYS.VOTED_ITEMS, []);
    return votedItems.includes(voteItemId);
  },

  async getUserVotedItemIds(): Promise<string[]> {
    const userIdentifier = getUserIdentifier();

    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      const { data, error } = await client
        .from('user_votes' as any)
        .select('vote_item_id')
        .eq('user_identifier', userIdentifier);

      if (error) {
        console.error('Supabase error:', error);
        return [];
      }

      return (data || []).map(row => row.vote_item_id);
    }

    // Fallback localStorage
    return getStorageData<string[]>(STORAGE_KEYS.VOTED_ITEMS, []);
  },

  async vote(voteItemId: string): Promise<{ success: boolean; newVoteCount: number }> {
    const userIdentifier = getUserIdentifier();

    // Vérifier si déjà voté
    const hasVoted = await this.hasUserVoted(voteItemId);
    if (hasVoted) {
      const item = await this.getVoteItemById(voteItemId);
      return { success: false, newVoteCount: item?.votes || 0 };
    }

    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      // Transaction Supabase: incrémenter le vote + enregistrer le vote utilisateur
      // 1. Incrémenter le compteur de votes
      const { data: itemData, error: fetchError } = await client
        .from('vote_items' as any)
        .select('votes')
        .eq('id', voteItemId)
        .single();

      if (fetchError || !itemData) {
        console.error('Supabase error:', fetchError);
        return { success: false, newVoteCount: 0 };
      }

      const newVoteCount = (itemData.votes || 0) + 1;

      const { error: updateError } = await client
        .from('vote_items' as any)
        .update({ votes: newVoteCount, updated_at: new Date().toISOString() } as any)
        .eq('id', voteItemId);

      if (updateError) {
        console.error('Supabase error:', updateError);
        return { success: false, newVoteCount: itemData.votes || 0 };
      }

      // 2. Enregistrer le vote de l'utilisateur
      const { error: voteError } = await client
        .from('user_votes' as any)
        .insert({
          vote_item_id: voteItemId,
          user_identifier: userIdentifier,
        } as any);

      if (voteError) {
        console.error('Supabase error:', voteError);
        // Rollback le vote si l'enregistrement échoue
        await client
          .from('vote_items' as any)
          .update({ votes: newVoteCount - 1 } as any)
          .eq('id', voteItemId);
        return { success: false, newVoteCount: newVoteCount - 1 };
      }

      return { success: true, newVoteCount };
    }

    // Fallback localStorage
    const items = await this.getVoteItems();
    const index = items.findIndex(item => item.id === voteItemId);
    if (index === -1) {
      return { success: false, newVoteCount: 0 };
    }

    items[index].votes += 1;
    setStorageData(STORAGE_KEYS.VOTE_ITEMS, items);

    const votedItems = getStorageData<string[]>(STORAGE_KEYS.VOTED_ITEMS, []);
    votedItems.push(voteItemId);
    setStorageData(STORAGE_KEYS.VOTED_ITEMS, votedItems);

    return { success: true, newVoteCount: items[index].votes };
  },

  // --- COMING ITEMS ---

  async getComingItems(): Promise<ComingItem[]> {
    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      const { data, error } = await client
        .from('coming_items' as any)
        .select('*')
        .order('release_date', { ascending: true });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      return (data || []).map(mapSupabaseToComingItem);
    }

    return getStorageData<ComingItem[]>(STORAGE_KEYS.COMING_ITEMS, DEFAULT_COMING_ITEMS);
  },

  async createComingItem(item: Omit<ComingItem, 'id' | 'createdAt'>): Promise<ComingItem> {
    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      const { data, error } = await client
        .from('coming_items' as any)
        .insert({
          title: item.title,
          title_en: item.titleEn || null,
          description: item.description,
          description_en: item.descriptionEn || null,
          image: item.image,
          release_date: item.releaseDate,
        } as any)
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      return mapSupabaseToComingItem(data);
    }

    // Fallback localStorage
    const items = await this.getComingItems();
    const newItem: ComingItem = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    items.push(newItem);
    setStorageData(STORAGE_KEYS.COMING_ITEMS, items);
    return newItem;
  },

  async updateComingItem(id: string, updates: Partial<ComingItem>): Promise<ComingItem | null> {
    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      const updateData: any = {};
      if (updates.title !== undefined) updateData.title = updates.title;
      if (updates.titleEn !== undefined) updateData.title_en = updates.titleEn;
      if (updates.description !== undefined) updateData.description = updates.description;
      if (updates.descriptionEn !== undefined) updateData.description_en = updates.descriptionEn;
      if (updates.image !== undefined) updateData.image = updates.image;
      if (updates.releaseDate !== undefined) updateData.release_date = updates.releaseDate;

      const { data, error } = await client
        .from('coming_items' as any)
        .update(updateData as any)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      return data ? mapSupabaseToComingItem(data) : null;
    }

    // Fallback localStorage
    const items = await this.getComingItems();
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return null;

    items[index] = { ...items[index], ...updates };
    setStorageData(STORAGE_KEYS.COMING_ITEMS, items);
    return items[index];
  },

  async deleteComingItem(id: string): Promise<boolean> {
    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      const { error } = await client.from('coming_items' as any).delete().eq('id', id);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      return true;
    }

    // Fallback localStorage
    const items = await this.getComingItems();
    const filteredItems = items.filter(item => item.id !== id);
    if (filteredItems.length === items.length) return false;

    setStorageData(STORAGE_KEYS.COMING_ITEMS, filteredItems);
    return true;
  },

  // --- STATISTIQUES ---

  async getVoteStats(): Promise<{
    totalVotes: number;
    totalVoters: number;
    topVotedItem: { title: string; votes: number; percentage: number } | null;
    averageVotesPerItem: number;
    itemCount: number;
  }> {
    const items = await this.getVoteItems(true);
    const votedItemIds = await this.getUserVotedItemIds();

    const totalVotes = items.reduce((sum, item) => sum + item.votes, 0);
    const totalVoters = votedItemIds.length;

    let topVotedItem: { title: string; votes: number; percentage: number } | null = null;
    if (items.length > 0) {
      const topItem = items.reduce((max, item) => item.votes > max.votes ? item : max);
      topVotedItem = {
        title: topItem.title,
        votes: topItem.votes,
        percentage: totalVotes > 0 ? Math.round((topItem.votes / totalVotes) * 100) : 0,
      };
    }

    return {
      totalVotes,
      totalVoters,
      topVotedItem,
      averageVotesPerItem: items.length > 0 ? totalVotes / items.length : 0,
      itemCount: items.length,
    };
  },

  // --- RESET ---

  async resetToDefaults(): Promise<void> {
    if (isSupabaseConfigured) {
      const client = getSupabaseClient();
      // Supprimer toutes les données et réinsérer les défauts
      await client.from('user_votes' as any).delete().neq('id', '00000000-0000-0000-0000-000000000000');
      await client.from('vote_items' as any).delete().neq('id', '00000000-0000-0000-0000-000000000000');
      await client.from('coming_items' as any).delete().neq('id', '00000000-0000-0000-0000-000000000000');

      // Insérer les données par défaut
      for (const item of DEFAULT_VOTE_ITEMS) {
        await client.from('vote_items' as any).insert({
          title: item.title,
          title_en: item.titleEn || null,
          description: item.description,
          description_en: item.descriptionEn || null,
          image: item.image,
          category: item.category,
          votes: item.votes,
          is_active: item.isActive,
        } as any);
      }

      for (const item of DEFAULT_COMING_ITEMS) {
        await client.from('coming_items' as any).insert({
          title: item.title,
          title_en: item.titleEn || null,
          description: item.description,
          description_en: item.descriptionEn || null,
          image: item.image,
          release_date: item.releaseDate,
        } as any);
      }

      // Nettoyer le localStorage local
      localStorage.removeItem(STORAGE_KEYS.VOTED_ITEMS);
      localStorage.removeItem('bfit_user_id');
      return;
    }

    // Fallback localStorage
    localStorage.removeItem(STORAGE_KEYS.VOTE_ITEMS);
    localStorage.removeItem(STORAGE_KEYS.USER_VOTES);
    localStorage.removeItem(STORAGE_KEYS.COMING_ITEMS);
    localStorage.removeItem(STORAGE_KEYS.VOTED_ITEMS);
    localStorage.removeItem('bfit_user_id');
    initializeDefaultData();
  },

  // --- UTILS ---

  isUsingSupabase(): boolean {
    return isSupabaseConfigured;
  },
};

export default voteService;

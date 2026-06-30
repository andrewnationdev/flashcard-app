import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IStore } from '../types/store';

export const useStore = create<IStore>()(persist((set) => ({
  points: 0,
  maxCards: 5,
  cards: [{ id: 1, front: "Neko", back: "Gato", score: 0, collection: "Japonês" }],

  addPoints: (amount) => set((state) => {
    const newPoints = Math.max(0, state.points + amount);
    const newMaxCards = Math.floor(5 * Math.pow(1.2, Math.floor(newPoints / 50)));
    return { points: newPoints, maxCards: newMaxCards };
  }),

  addCard: (card) => set((state) => ({
    cards: [...state.cards, { ...card, id: Date.now(), score: 0 }]
  })),

  deleteCard: (id) => set((state) => ({ cards: state.cards.filter(c => c.id !== id) })),

  updateScore: (id, increment) => set((state) => ({
    cards: state.cards.map(c => c.id === id ? { ...c, score: Math.max(0, c.score + increment) } : c)
  })),

  importCards: (importedCards) => set((state) => {
    const existingContents = new Set(
      state.cards.map(card => card.front.toLowerCase().trim())
    );

    const newUniqueCards = importedCards.filter(card =>
      !existingContents.has(card.front.toLowerCase().trim())
    );

    return {
      cards: [...state.cards, ...newUniqueCards]
    };
  })
}), {
  name: 'flashmaster-storage'
}));
import { ICard } from "./flashcard";

export interface IStore {
  points: number;
  maxCards: number;
  cards: ICard[];
  addPoints: (amount: number) => void;
  addCard: (card: Omit<ICard, 'id' | 'score'>) => void;
  deleteCard: (id: number) => void;
  updateScore: (id: number, increment: number) => void;
  importCards: (imported: ICard[]) => void;
}
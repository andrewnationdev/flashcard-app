export interface ICard {
  id: number;
  front: string;
  back: string;
  score: number;
  collection: string;
}

interface ICardActions {
    setFlipped: (state: boolean) => void;
    flipped?: boolean;
    currentCard: ICard;
}

export interface IButtonsRowComponent extends ICardActions {}

export interface IFlashCardProps extends ICardActions {}
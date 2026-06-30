import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { Check, X, Brain, Plus, Download, Upload, Trash2, BookOpen, Layers, Award, AlertCircle, Info } from 'lucide-react';
import InfoHeaderComponent from "./infoheader";
import ButtonsRowComponent from "../elements/flashcards/buttonsrow";
import FlashCardComponent from "../elements/flashcards/flashcard";
import { ICard } from "../../types/flashcard";

export default function PracticeAreaComponent() {
    const { cards } = useStore();
    const [flipped, setFlipped] = useState(false);
    const [currentCard, setCurrentCard] = useState<ICard | null>(null);

    const sortearCard = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setCurrentCard(cards[randomIndex]);
    };

    useEffect(() => {
        if (cards.length > 0) {
            sortearCard();
        }
    }, [cards]);

    if (!currentCard) return <p>Carregando...</p>;

    return <main className="max-w-sm mx-auto animate-in fade-in zoom-in duration-500">
        <InfoHeaderComponent />
        {currentCard ? (
            <>
                <FlashCardComponent
                    currentCard={currentCard}
                    setFlipped={setFlipped}
                    flipped={flipped}
                />
                <ButtonsRowComponent
                    currentCard={currentCard}
                    setFlipped={setFlipped}
                />
            </>
        ) : <p
            className="text-center text-slate-500 mt-10 animate-pulse">
            Nenhum card disponível. Adicione novos na aba de edição!
        </p>}
    </main>
}
import React, { useState } from "react";
import { useStore } from "../../store/store";
import { Check, X, Brain, Plus, Download, Upload, Trash2, BookOpen, Layers, Award, AlertCircle, Info } from 'lucide-react';
import InfoHeaderComponent from "./infoheader";
import ButtonsRowComponent from "../elements/flashcards/buttonsrow";
import FlashCardComponent from "../elements/flashcards/flashcard";

export default function PracticeAreaComponent() {
    const { cards } = useStore();
    const [flipped, setFlipped] = useState(false);

    const shuffledCards = [...cards];

    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }

    const sortedCards = shuffledCards.sort((a, b) => a.score - b.score);

    const currentCard = sortedCards[Math.floor(Math.random() * sortedCards.length)];

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
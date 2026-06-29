import React from "react";
import { Check, X, Brain, Plus, Download, Upload, Trash2, BookOpen, Layers, Award, AlertCircle, Info } from 'lucide-react';
import { useStore } from "../../../store/store";
import { IButtonsRowComponent, ICard } from "../../../types/flashcard";

export default function ButtonsRowComponent(props: IButtonsRowComponent) {
    const { updateScore, addPoints } = useStore();

    return <div className="flex gap-4">
        <button
            onClick={() => { updateScore(props.currentCard.id, -1); addPoints(-5); props.setFlipped(false); }}
            className="flex-1 bg-slate-900 border border-red-900/50 text-red-400 py-4 rounded-2xl hover:bg-red-950/50 hover:scale-[1.02] transition-all active:scale-95"
        >
            <X className="mx-auto" />
        </button>
        <button
            onClick={() => { updateScore(props.currentCard.id, 1); addPoints(10); props.setFlipped(false); }}
            className="flex-1 bg-slate-900 border border-green-900/50 text-green-400 py-4 rounded-2xl hover:bg-green-950/50 hover:scale-[1.02] transition-all active:scale-95"
        >
            <Check className="mx-auto" />
        </button>
    </div>
}
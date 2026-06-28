import React from "react";
import { Award } from "lucide-react";
import { useStore } from "../../store/store";

export default function InfoHeaderComponent(){
    const { cards, points, maxCards } = useStore();
    
    return <div className="flex justify-between text-sm mb-4 text-slate-400">
            <span className="flex items-center gap-1"><Award size={16} className="text-yellow-500" /> {points} pts</span>
            <span>Cards: {cards.length} / {maxCards}</span>
        </div>
}
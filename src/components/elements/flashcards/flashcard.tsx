import React from "react";

export default function FlashCardComponent(props) {
    return <div
        onClick={() => props.setFlipped(!props.flipped)}
        className="group h-64 w-full cursor-pointer mb-6"
        style={{ perspective: '1000px' }}
    >
        <div
            className="relative w-full h-full transition-transform duration-500"
            style={{
                transformStyle: 'preserve-3d',
                transform: props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
        >

            {/* LADO DA FRENTE */}
            <div
                className="absolute inset-0 bg-slate-900 rounded-3xl flex items-center justify-center p-8 border border-slate-800 hover:border-indigo-500/50 shadow-2xl"
                style={{ backfaceVisibility: 'hidden' }}
            >
                <p className="text-3xl font-medium text-center text-slate-200">
                    {props.currentCard.front}
                </p>
            </div>

            {/* LADO DO VERSO */}
            <div
                className="absolute inset-0 bg-slate-800 rounded-3xl flex items-center justify-center p-8 border border-slate-700 shadow-2xl"
                style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                }}
            >
                <p className="text-3xl font-medium text-center text-indigo-400">
                    {props.currentCard.back}
                </p>
            </div>
        </div>
    </div>
}
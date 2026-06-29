import React, { useState } from "react";
import { Download, Upload, Trash2, AlertCircle } from 'lucide-react';
import { useStore } from "../../store/store";

export default function SettingsView() {
    const { cards, points, maxCards, addCard, deleteCard, importCards } = useStore();

    const [newFront, setNewFront] = useState('');
    const [newBack, setNewBack] = useState('');
    const [newCollection, setNewCollection] = useState('Geral');
    const [errorMessage, setErrorMessage] = useState('');
    const fileInputRef = React.useRef(null);

    const handleExport = () => {
        const data = JSON.stringify(cards);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'flashcards.json';
        a.click();
    };

    const handleImport = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                importCards(imported);
            } catch (err) {
                setErrorMessage("Erro ao importar: arquivo inválido.");
            }
        };
        reader.readAsText(file);
    };

    const handleAddCard = () => {
        if (!newFront.trim() || !newBack.trim()) {
            setErrorMessage("Por favor, preencha a frente e o verso.");
            return;
        }
        if (points <= 0 && cards.length >= 5) {
            setErrorMessage("Você precisa praticar mais! Ganhe pontos acertando cards antes de adicionar novos.");
            return;
        }
        if (cards.length >= maxCards) {
            setErrorMessage("Limite de cards atingido! Ganhe mais pontos para expandir.");
            return;
        }

        addCard({ front: newFront, back: newBack, collection: newCollection });
        setNewFront('');
        setNewBack('');
        setErrorMessage('');
    };

    return <div className="max-w-md mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-500">
        {errorMessage && (
            <div className="bg-red-950/50 border border-red-900 text-red-200 p-4 rounded-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                <AlertCircle size={20} />
                <p className="text-sm">{errorMessage}</p>
            </div>
        )}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <input placeholder="Frente (ex: Neko)" value={newFront} onChange={e => setNewFront(e.target.value)} className="w-full bg-slate-950 p-3 rounded-xl mb-2 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
            <input placeholder="Verso (ex: Gato)" value={newBack} onChange={e => setNewBack(e.target.value)} className="w-full bg-slate-950 p-3 rounded-xl mb-2 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
            <input placeholder="Coleção (ex: Japonês)" value={newCollection} onChange={e => setNewCollection(e.target.value)} className="w-full bg-slate-950 p-3 rounded-xl mb-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
            <button
                onClick={handleAddCard}
                className="w-full bg-indigo-600 py-3 rounded-xl hover:bg-indigo-500 transition-all font-bold hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
            >
                Adicionar Card
            </button>
        </div>

        <div className="flex gap-2">
            <button onClick={handleExport} className="flex-1 bg-slate-900 p-3 rounded-xl flex justify-center hover:bg-slate-800 border border-slate-800 transition-colors"><Download size={20} /></button>
            <button onClick={() => fileInputRef.current.click()} className="flex-1 bg-slate-900 p-3 rounded-xl flex justify-center hover:bg-slate-800 border border-slate-800 transition-colors"><Upload size={20} /></button>
            <input type="file" ref={fileInputRef} onChange={handleImport} className="hidden" />
        </div>

        <ul className="space-y-2">
            {cards.map(c => (
                <li key={c.id} className="flex justify-between bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors group">
                    <div>
                        <p className="font-semibold">{c.front}</p>
                        <p className="text-xs text-slate-500">{c.collection}</p>
                    </div>
                    <button onClick={() => deleteCard(c.id)} className="text-slate-500 hover:text-red-400 transition-colors"><Trash2 size={18} /></button>
                </li>
            ))}
        </ul>
    </div>
}
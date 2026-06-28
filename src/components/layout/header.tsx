import React from "react";
import { Brain, BookOpen, Layers } from 'lucide-react';

export default function HeaderComponent(props) {
    return <header className="max-w-2xl mx-auto w-full flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <h1 className="text-xl font-bold text-indigo-400 flex items-center gap-2"><Brain className="animate-pulse" /> {props.appTitle}</h1>
        <div className="flex gap-2 bg-slate-900 p-1 rounded-lg">
            <button onClick={() => props.setView('train')} className={`p-2 rounded transition-all duration-300 ${props.view === 'train' ? 'bg-slate-700 shadow-md' : 'hover:bg-slate-800'}`}><BookOpen size={20} /></button>
            <button onClick={() => props.setView('edit')} className={`p-2 rounded transition-all duration-300 ${props.view === 'edit' ? 'bg-slate-700 shadow-md' : 'hover:bg-slate-800'}`}><Layers size={20} /></button>
        </div>
    </header>
}
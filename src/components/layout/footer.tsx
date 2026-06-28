import React from 'react';
import { Check, X, Brain, Plus, Download, Upload, Trash2, BookOpen, Layers, Award, AlertCircle, Info } from 'lucide-react';


export default function FooterComponent(){
    return <footer className="mt-8 pt-4 border-t border-slate-900 text-center text-slate-600 text-xs">
        <div className="flex justify-center items-center gap-2">
          <Info size={14} />
          <p>FlashMaster v1.0 • O conhecimento exponencial começa aqui.</p>
        </div>
      </footer>
}
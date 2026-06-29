import React from 'react';
import { Info } from 'lucide-react';
import { IFooter } from '../../types/layout';

export default function FooterComponent(props: IFooter) {
  return <footer className="mt-8 pt-4 border-t border-slate-900 text-center text-slate-600 text-xs">
    <div className="flex justify-center items-center gap-2">
      <Info size={14} />
      <p>{props.appName} v{props.appVersion} • {props.appDescription}</p>
    </div>
  </footer>
}
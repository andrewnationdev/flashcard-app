import React from "react";
import FooterComponent from "./footer";
import HeaderComponent from "./header";
import { ILayout } from "../../types/layout";

export default function Layout(props:ILayout){
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8 font-sans selection:bg-indigo-500/30 flex flex-col transition-colors duration-500">
      <HeaderComponent
        setView={props.setView}
        view={props.view}
        appTitle={"Mnemóniko"}
      />

      <main className="flex-grow">
        {props.children}
      </main>

      <FooterComponent 
        appName="Mnemóniko"
        appVersion="0.1 RC"
        appDescription="Gerenciamento de flashcards para otimizar a sua retenção mental"
      />
    </div>
  );
};
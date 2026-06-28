import React from "react";
import FooterComponent from "./footer";
import HeaderComponent from "./header";

export default function Layout({ children, setView, view }){
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8 font-sans selection:bg-indigo-500/30 flex flex-col transition-colors duration-500">
      <HeaderComponent
        setView={setView}
        view={view}
        appTitle={"FlashMate"}
      />

      <main className="flex-grow">
        {children}
      </main>

      <FooterComponent />
    </div>
  );
};
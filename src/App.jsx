import './App.css';
import {useState} from "react";
import TrainingView from './components/views/training';
import SettingsView from './components/views/settings';
import Layout from './components/layout/layout';
import React from 'react';

function App() {
  const [view, setView] = useState('train');

  return (
    <div className="App">
      <Layout
        view={view}
        setView={setView}
      >
          {view === 'train' ? (
            <TrainingView />
          ) : (
            <SettingsView />
          )}
      </Layout>
    </div>
  );
}

export default App;

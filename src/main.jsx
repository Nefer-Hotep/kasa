import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style/css/index.css';

// Crée la racine de l'application React et l'attache à un élément DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode est un outil pour mettre en évidence les problèmes potentiels dans une application 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

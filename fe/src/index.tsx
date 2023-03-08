import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'primereact/resources/primereact.min.css'; // base Primereact stylesheet
import 'primereact/resources/themes/saga-blue/theme.css'; // Primereact theme

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

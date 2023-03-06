import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'primereact/resources/primereact.min.css'; // hoja de estilo base de PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css'; // tema de PrimeReact que quieres utilizar

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

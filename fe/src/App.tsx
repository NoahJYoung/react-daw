import React from 'react';
import { Workstation } from './pages';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RoutePaths } from './globalTypes';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to={RoutePaths.DAW} />} />
          <Route path={RoutePaths.DAW} element={<Workstation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

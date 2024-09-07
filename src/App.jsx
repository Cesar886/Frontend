// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DoubleHeader } from './prymary/DoubleHeader'; // Página a la que redirigimos después del login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoubleHeader />} />
      </Routes>
    </Router>
  );
}

export default App;

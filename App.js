import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ExtraPage from './ExtraPage';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/extra" element={<ExtraPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

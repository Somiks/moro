import './App.css'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import RootLayout from "./RootLayout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import React from "react";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/en" replace />} />
                <Route path="/:lang" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

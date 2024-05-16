// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProfessorProfile from './pages/Faculty/ProfessorProfile';
import Default from './pages/Home/Default';
import Login from './pages/Login/Login';
import Faculty from './pages/Faculty/Faculty';
import MetricContextProvider from './context/MetricContext';

function App() {
  return (
    <MetricContextProvider>
        <div className='flex flex-col h-screen'>
          <Navbar />
          <div className="flex-grow"> {/* Adjust the class name to `flex-grow` for flexibility */}
            <Routes>
              <Route path="/home/:id" element={<Home />} />
              <Route path="/professor/:id/:classCode" element={<ProfessorProfile/>} />
              <Route path="/faculty/:id" element={<Faculty />} />
              <Route path="/" element={<Default />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <footer className="bg-anti-flash p-4">
          </footer>
        </div>
    </MetricContextProvider>
  );
}

export default App;

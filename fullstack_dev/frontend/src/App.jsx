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
import FacultyContextProvider from './context/FacultyContext';

function App() {
  return (
    <MetricContextProvider>
      <FacultyContextProvider>
        <div className='flex flex-col h-screen'>
          <Navbar />
          <div className="flex-grow"> {/* Adjust the class name to `flex-grow` for flexibility */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/professor" element={<ProfessorProfile />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/default" element={<Default />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <footer className="bg-anti-flash p-4">
          </footer>
        </div>
      </FacultyContextProvider>
    </MetricContextProvider>
  );
}

export default App;

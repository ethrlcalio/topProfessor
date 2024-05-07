// src/App.jsx

import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProfessorProfile from './pages/Faculty/ProfessorProfile'
import Default from './pages/Home/Default'
import Login from './pages/Login/Login'
import Faculty from './pages/Faculty/Faculty'

function App() {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Navbar />
        {/* Your other content goes here */}
        <div className="grow"> {/* Add top margin equivalent to the height of the navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/professor" element={<ProfessorProfile />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/default" element={<Default />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

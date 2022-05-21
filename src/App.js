import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import NavBar from './components/NavBar'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='App-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

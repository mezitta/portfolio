import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import { useState } from 'react'

import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'

import './App.css'

const App = () => {
  const location = useLocation();
  const [navState, setNavState] = useState(true)

  function detectLocChange() {
    setNavState(true)
  }

  window.addEventListener('popstate', detectLocChange)

  return (
    <div className="App">
      <AnimatePresence>{navState && <NavBar />}</AnimatePresence>
      <div className='App-body' id="App-body">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects  navState = {navState => setNavState(navState)}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;

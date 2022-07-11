import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import { useState } from 'react'

import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import NavBar from './components/NavBar'

import './App.css'

const App = () => {
  const location = useLocation();
  const [updateNav, setUpdateNav] = useState(true)

  return (
    <div className="App">
      {updateNav && <NavBar />}
      <div className='App-body'>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects updateNav = {updateNav => setUpdateNav(updateNav)}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
      {console.log("app " + updateNav)}
    </div>
  );
}

export default App;

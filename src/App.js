import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import Loading from './components/Loading'

import huskyRvwPic from './assets/huskylogoyellow.png'
import backHP from './assets/mtu_campus.jpg'
import hrp1 from './assets/hrp1.jpg'
import hrp2 from './assets/hrp2.png'
import hrp3 from './assets/hrp3.png'
import hrp4 from './assets/hrp4.png'

import lbfePic from './assets/LBFE_LOGOV_red_upmichigan.png'
import backLbfe from './assets/hancock.jpg'
import lbfep1 from './assets/lbfep1.png'
import lbfep2 from './assets/lbfep2.png'
import lbfep3 from './assets/lbfep3.png'
import lbfep4 from './assets/lbfep4.png'

import portPic from './assets/homeshark.svg'
import backPort from './assets/stjoe.jpg'
import ps1 from './assets/ps1.png'
import ps2 from './assets/ps2.png'
import ps3 from './assets/ps3.png'
import ps4 from './assets/ps4.png'

import './App.css'


const App = () => {
  const location = useLocation();
  const [navState, setNavState] = useState(true)
  const [imgLoading, setImgLoading] = useState(true)

  const detectLocChange = () => {
    setNavState(true)
  }

  const cacheImages = async (imgArray) => {
    const promises = await imgArray.map((imgSrc) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = imgSrc;
        img.onload = resolve();
        img.onerror = reject();
      })
    })

    await Promise.all(promises)
    setImgLoading(false)
  }
  
  useEffect(() => {
    const imgs = [
      './assets/huskylogoyellow.png',
      "./assets/mtu_campus.jpg",
      './assets/hrp1.jpg',
      './assets/hrp2.png',
      './assets/hrp3.png',
      './assets/hrp4.png',
      './assets/LBFE_LOGOV_red_upmichigan.png',
      './assets/hancock.jpg',
      './assets/lbfep1.png',
      './assets/lbfep2.png',
      './assets/lbfep3.png',
      './assets/lbfep4.png',
      './assets/homeshark.svg',
      './assets/stjoe.jpg',
      './assets/ps1.png',
      './assets/ps2.png',
      './assets/ps3.png',
      './assets/ps4.png',
    ]

    cacheImages(imgs)
  }, [])

  window.addEventListener('popstate', detectLocChange)

  return (
    <div className="App">
      {!imgLoading && <AnimatePresence>{navState && <NavBar />}</AnimatePresence>}
      <div className='App-body' id="App-body">
      {imgLoading ? <Loading /> :
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects  
              navState = {navState => setNavState(navState)}

              huskyRvwPic = {huskyRvwPic}
              backHP = {backHP}
              hrp1 = {hrp1}
              hrp2 = {hrp2}
              hrp3 = {hrp3}
              hrp4 = {hrp4}

              lbfePic = {lbfePic}
              backLbfe = {backLbfe}
              lbfep1 = {lbfep1}
              lbfep2 = {lbfep2}
              lbfep3 = {lbfep3}
              lbfep4 = {lbfep4}

              portPic = {portPic}
              backPort = {backPort}
              ps1 = {ps1}
              ps2 = {ps2}
              ps3 = {ps3}
              ps4 = {ps4}
              />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        }
      </div>
    </div>
  );
}

export default App;

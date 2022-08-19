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

import contactPic from './assets/contactpicture.svg'
import desktopShark from './assets/homeshark.svg'
import mobileShark from './assets/mobileshark.svg'

import './App.css'

const imgs = [
  huskyRvwPic, 
  backHP,
  hrp1,
  hrp2,
  hrp3,
  hrp4,
  lbfePic,
  backLbfe,
  lbfep1,
  lbfep2,
  lbfep3,
  lbfep4,
  portPic,
  backPort,
  ps1,
  ps2,
  ps3,
  ps4,
  contactPic,
  desktopShark,
  mobileShark
]

const App = () => {
  const location = useLocation();
  const [navState, setNavState] = useState(true)
  const [imgLoading, setImgLoading] = useState(true)

  const detectLocChange = () => {
    setNavState(true)
  }

  const cacheImages = async (imgArray) => {
    const promises = await imgArray.map((imgSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = imgSrc;
        console.log(img)
        img.onload = resolve();
        img.onerror = reject();
      })
    })

    await Promise.all(promises)

    setTimeout(() => {
      console.log('loading')
      setImgLoading(false)
    }, 1500)
    
  }
  
  useEffect(() => {
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
            <Route path="/" element={<Home  desktopShark = {imgs[19]} mobileShark = {imgs[20]}/>} />
            <Route path="/projects" element={<Projects  
              navState = {navState => setNavState(navState)}

              huskyRvwPic = {imgs[0]}
              backHP = {imgs[1]}
              hrp1 = {imgs[2]}
              hrp2 = {imgs[3]}
              hrp3 = {imgs[4]}
              hrp4 = {imgs[5]}

              lbfePic = {imgs[6]}
              backLbfe = {imgs[7]}
              lbfep1 = {imgs[8]}
              lbfep2 = {imgs[9]}
              lbfep3 = {imgs[10]}
              lbfep4 = {imgs[11]}

              portPic = {imgs[12]}
              backPort = {imgs[13]}
              ps1 = {imgs[14]}
              ps2 = {imgs[15]}
              ps3 = {imgs[16]}
              ps4 = {imgs[17]}
              />}
            />
            <Route path="/contact" element={<Contact contactPic = {imgs[18]}/>} />
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

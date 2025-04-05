import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Slider from './components/Slider'
import About from './components/About'
import Shop from './components/Shop'
import Contact from './components/Contact'


function App() {


  return (
    <div className='h-screen snap-y overflow-y-auto snap-mandatory scroll-smooth layaut'>
      <Nav />
      <Slider />
      <Shop />
      <About />
      <Contact />
    </div>
  )
}

export default App

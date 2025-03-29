import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Slider from './components/Slider'


function App() {


  return (
    <div className='h-full w-full'>
      <Nav />
      <Slider />
    </div>
  )
}

export default App

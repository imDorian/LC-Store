import { use, useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Slider from './components/Slider'
import About from './components/About'
import Shop from './components/Shop'
import Contact from './components/Contact'
import CookiesModal from './components/CookiesModal'
import { getCookies } from './utils/getCookies'
import { useCartStore } from './stores/useCartStore'


function App() {
  const [cookies, setCookies] = useState({})

  function updateCartStore(cookies) {
    useCartStore.setState(state => ({
      ...state,
      products: cookies.cart || [],
    }))
  }

  useEffect(() => {
    getCookies()
      .then(cookies => {
        console.log('Cookies:', cookies)
        setCookies(cookies)
        updateCartStore(cookies)
      })
      .catch(error => {
        console.error('Error fetching cookies:', error)
      })

  }, [])


  return (
    <div className='h-screen snap-y overflow-y-auto snap-mandatory scroll-smooth layaut'>
      <Nav />
      <Slider />
      <Shop />
      <About />
      <Contact />
      <CookiesModal cookies={cookies} />
      <footer className='bg-gray-900 text-white py-4 text-center text-xs'>
        <p>&copy; 2025 LC Camionero. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  )
}

export default App

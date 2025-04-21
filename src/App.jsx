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
import Layaout from './components/Layaout'







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
    <Layaout>
      <Slider />
      <Shop />
      <About />
      <Contact />
      <CookiesModal />
    </Layaout >
  )
}

export default App

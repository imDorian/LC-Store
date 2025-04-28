import { useEffect, useState } from 'react'
import './App.css'
import Slider from './components/Slider'
import About from './components/About'
import Shop from './components/Shop'
import Contact from './components/Contact'
import CookiesModal from './components/CookiesModal'
import { getCookies } from './utils/getCookies'
import { useCartStore } from './stores/useCartStore'
import Layout from './components/Layout'







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
    <Layout>
      <Slider />
      <Shop />
      <About />
      <Contact />
      <CookiesModal />
    </Layout >
  )
}

export default App

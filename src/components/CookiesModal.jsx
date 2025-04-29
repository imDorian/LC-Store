import { React, useEffect, useState } from 'react'
import { getCookies } from '../utils/getCookies'

const CookiesModal = () => {

    const [cookies, setCookies] = useState({})

    useEffect(() => {
        const cookies = getCookies()
            .then(cookies => {
                console.log('Cookies:', cookies)
                setCookies(cookies)
                setIsOpen(cookies.cookiesModal)
            })
            .catch(error => {
                console.error('Error fetching cookies:', error)
            })

    }, [])

    function setCookiesModal() {
        const newCookies = {
            ...cookies,
            cookiesModal: false
        }
        window.localStorage.setItem('cookies', JSON.stringify(newCookies))
    }

    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
        setCookiesModal()
    }

    return (
        <dialog open={isOpen} className=' sm:bottom-5 bottom-0 z-50 sm:mx-auto'>
            <div className='w-full bg-amber-100 p-4 sm:rounded-2xl'>
                <h3 className="text-lg font-semibold mb-2">🍪 Usamos cookies</h3>
                <p className="text-sm text-gray-600 mb-4">
                    En <strong>LC Store</strong> utilizamos cookies para recordar tus datos y mejorar tu experiencia de compra.
                </p>
                <div className='flex flex-row justify-evenly'>
                    <button onClick={closeModal} className='bg-red-400 rounded-sm px-1'>No permitir</button>
                    <button onClick={closeModal} className='bg-green-400 rounded-sm px-1'>Aceptar</button>
                </div>
            </div>
        </dialog>
    )
}

export default CookiesModal
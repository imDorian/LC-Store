import React from 'react'
import Nav from './Nav'

const Layaout = ({ children }) => {
    return (
        <div className='h-screen snap-y overflow-y-auto snap-mandatory scroll-smooth layaut bg-gradient-to-b from-amber-400 from-50% to-neutral-400'>
            <Nav />
            {children}
            <footer className='bg-gray-900 text-white py-4 text-center text-xs'>
                <p>&copy; 2025 LC Camionero. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </footer>
        </div>
    )
}

export default Layaout
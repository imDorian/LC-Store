import React from 'react'
import Nav from './Nav'

const Layaout = ({ children }) => {
    return (
        <div className='h-screen snap-y overflow-y-auto snap-mandatory scroll-smooth'>

            <Nav />
            <div className='flex flex-col items-center justify-center md:max-w-2xl md:mx-auto'>
                {children}
            </div>
            <footer className='py-4 text-center text-xs'>
                <p>&copy; 2025 LC Camionero. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </footer>
        </div>
    )
}

export default Layaout
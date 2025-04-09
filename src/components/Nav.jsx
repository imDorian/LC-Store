import React, { useState } from 'react'
import CartIcon from '/public/icons/CartIcon'

const Nav = () => {
    const [isNav, setIsNav] = useState(true);
    function handleNav() {
        setIsNav(!isNav);
        console.log(isNav)
    }
    return (
        <header className="w-full fixed top-0 left-0 z-1 transition-all duration-300 bg-gradient-to-r from-white from-40% shadow-2xl backdrop-blur-xl">
            <nav className="flex w-full">
                <div className="flex items-start p-1 text-white-400 w-full transition-all duration-300 ">
                    <img src="/logo.jpg" alt="logo lc camionero" className="w-[60px] object-contain" />
                    <div className="w-full flex items-end justify-center text-end flex-col pt-4 pe-2 overflow-hidden transition-all duration-300">
                        <div className='flex flex-row justify-end gap-3 items-center'>
                            <CartIcon className="w-6 h-6 text-orange-500" />
                            <button onClick={handleNav} className=''>///</button>
                        </div>
                        <ul className={isNav ? "flex w-full flex-col italic justify-start items-end m-0 p-0 text-xl font-medium cursive mt-15 gap-3 mb-5 transition-all duration-300 h-auto overflow-auto " : "h-0 transition-all duration-300 overflow-hidden flex w-full flex-col italic justify-start items-end m-0 p-0  font-bold opacity-0 cursive mt-0 gap-3 mb-0 "}>
                            <li><a href="#home" className="hover:text-orange-500 transition-all duration-300 ">Inicio</a></li>
                            <li><a href="#about" className="hover:text-orange-500 transition-all duration-300">Tienda</a></li>
                            <li><a href="#services" className="hover:text-orange-500 transition-all duration-300">Sobre mí</a></li>
                            <li><a href="#contact" className="hover:text-orange-500 transition-all duration-300">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >


    )
}

export default Nav
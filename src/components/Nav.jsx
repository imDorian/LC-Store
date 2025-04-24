import React, { useState } from 'react'
import CartIcon from '/public/icons/CartIcon'
import Cart from './Cart'
import MenuIcon from '../../public/icons/MenuIcon';
import { useCartStore } from '../stores/useCartStore'

const Nav = () => {
    const { totalItems } = useCartStore((state) => state)
    const [isNav, setIsNav] = useState(false);
    const [isCart, setIsCart] = useState(false);
    function handleNav() {
        if (isNav) {
            setIsNav(false)
            setIsCart(false)
        }
        else {
            setIsNav(true)
            setIsCart(false)
        }
    }
    function handleCart() {
        if (isCart) {
            setIsCart(false)
            setIsNav(false)
        }
        else {
            setIsCart(true)
            setIsNav(false)
        }
    }
    // function onBlurNav() {
    //     setIsNav(false)
    //     setIsCart(false)
    // }
    function onClickNav() {
        setIsNav(false)
        setIsCart(false)
    }


    return (
        <header className={isNav || isCart ? "w-full fixed top-0  z-10 transition-all duration-300  backdrop-blur-xl bg-gradient-to-br from-neutral-400/40 to-neutral-500/80" : "w-full fixed top-0  z-10 transition-all duration-300  backdrop-blur-sm bg-transparent"}>
            <nav className="flex w-full">
                <div className="flex items-start p-1 text-white-400 w-full transition-all duration-300 ">

                    <div className="w-full flex items-end justify-center text-end flex-col px-2 overflow-hidden transition-all duration-300">
                        <div className='w-full flex flex-row justify-between'>
                            <img src="/logo.PNG" alt="logo lc camionero" className="w-[50px] object-contain" />
                            <div className='flex flex-row justify-end gap-3 items-center'>
                                <button onClick={handleCart} className='rounded-full p-2 focus:bg-gradient-to-r cursor-pointer focus:from-neutral-400 focus:to-neutral-300 transition-all duration-300    hover:shadow-[inset_0px_0px_45px_50px_rgba(0,_0,_0,_0.1)] inset-shadow-neutral-950 relative'>
                                    <CartIcon className={isCart || isNav ? "size-6 text-white transition-all duration-500" : 'size-6 text-neutral-700 transition-all duration-500'} />
                                    <span className={isCart || isNav ? 'absolute top-1.5 bottom-0 left-0 right-0   text-white rounded-full flex text-[10px] justify-center items-center transition-all duration-300' : 'absolute top-1.5 bottom-0 left-0 right-0   text-neutral-700 rounded-full flex text-[10px] justify-center items-center transition-all duration-300 font-semibold'}>{totalItems}</span>
                                </button>
                                <button onClick={handleNav} className='rounded-full p-2 cursor-pointer focus:bg-gradient-to-r focus:from-neutral-400 focus:to-neutral-300 transition-all duration-300    hover:shadow-[inset_0px_0px_45px_50px_rgba(0,_0,_0,_0.1)] inset-shadow-neutral-950'>
                                    <MenuIcon className={isCart || isNav ? "size-6 text-white stroke-white transition-all duration-300" : 'text-neutral-700 stroke-neutral-700 size-6 transition-all duration-300'} />

                                </button>
                            </div>

                        </div>
                        <ul className={isNav && !isCart ? "flex w-full flex-col italic justify-start items-end m-0 p-0 text-xl font-medium cursive mt-15 gap-3 mb-5 transition-all duration-300 h-auto overflow-auto text-white" : "h-0 transition-all duration-300 overflow-hidden flex w-full flex-col italic justify-start items-end m-0 p-0  font-bold opacity-0 cursive mt-0 gap-3 mb-0 text-white"}>
                            <li><a href="#home" className="hover:text-orange-500 transition-all duration-300 active:text-amber-400 ">Inicio</a></li>
                            <li><a href="#shop" className="hover:text-orange-500 active:text-amber-400 transition-all duration-300">Tienda</a></li>
                            <li><a href="#about" className="hover:text-orange-500 active:text-amber-400 transition-all duration-300">Sobre mí</a></li>
                            <li><a href="#contact" className="hover:text-orange-500 active:text-amber-400 transition-all duration-300">Contacto</a></li>
                        </ul>
                        <Cart isNav={isNav} setIsNav={setIsNav} isCart={isCart} setIsCart={setIsNav} />
                    </div>
                </div>
            </nav>
        </header >


    )
}

export default Nav
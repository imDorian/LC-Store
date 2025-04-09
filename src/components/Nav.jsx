import React, { useState } from 'react'
import CartIcon from '/public/icons/CartIcon'

const Nav = () => {
    const [isNav, setIsNav] = useState(false);
    const [isCart, setIsCart] = useState(false);
    function handleNav() {
        setIsNav(!isNav);
        console.log(isNav)
    }
    function handleCart() {
        setIsCart(!isCart);
        console.log(isCart)
    }

    return (
        <header className="w-full fixed top-0 left-0 z-1 transition-all duration-300 bg-gradient-to-r  from-white  to-transparent from-30% shadow-2xl backdrop-blur-xl">
            <nav className="flex w-full">
                <div className="flex items-start p-1 text-white-400 w-full transition-all duration-300 ">
                    <img src="/logo.jpg" alt="logo lc camionero" className="w-[60px] object-contain" />
                    <div className="w-full flex items-end justify-center text-end flex-col pt-4 pe-2 overflow-hidden transition-all duration-300">
                        <div className='flex flex-row justify-end gap-3 items-center'>
                            <button onClick={handleCart} className='rounded-full p-2 focus:bg-neutral-500 transition-all duration-300 hover:bg-neutral-400'>
                                <CartIcon className="" />

                            </button>
                            <button onClick={handleNav} className=''>///</button>
                        </div>
                        <ul className={isNav && !isCart ? "flex w-full flex-col italic justify-start items-end m-0 p-0 text-xl font-medium cursive mt-15 gap-3 mb-5 transition-all duration-300 h-auto overflow-auto " : "h-0 transition-all duration-300 overflow-hidden flex w-full flex-col italic justify-start items-end m-0 p-0  font-bold opacity-0 cursive mt-0 gap-3 mb-0 "}>
                            <li><a href="#home" className="hover:text-orange-500 transition-all duration-300 ">Inicio</a></li>
                            <li><a href="#about" className="hover:text-orange-500 transition-all duration-300">Tienda</a></li>
                            <li><a href="#services" className="hover:text-orange-500 transition-all duration-300">Sobre mí</a></li>
                            <li><a href="#contact" className="hover:text-orange-500 transition-all duration-300">Contacto</a></li>
                        </ul>
                        <div className={isCart ? 'flex flex-col items-end justify-center h-auto transition-all duration-300 w-full mt-5' : 'h-0 transition-all duration-300 overflow-hidden'}>
                            <span className='text-lg'>Cesta</span>
                            <ul className={isCart ? 'flex flex-col gap-2 rounded-xl p-2 text-sm w-full transition-all duration-300 my-4 overflow-hidden h-auto' : 'transition-all duration-300 h-0 overflow-hidden w-full opacity-0'}>
                                <li className=' flex flex-row items-center  bg-linear-to-br from-amber-600 to-amber-400 rounded-xl justify-between w-full text-start px-2 py-2 transition-all duration-300 shadow-lg'>
                                    <img src="/logo.jpg" alt="" className='object-cover w-14 rounded-xl' />
                                    <div className='flex flex-col items-start justify-center'>
                                        <span className='text-white'>Nombre del producto</span>
                                        <span className='text-white'>99,99€</span>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <span>Cantidad</span>
                                        <input type="number" className='w-10 text-center rounded-lg' defaultValue={1} />
                                    </div>
                                </li>
                                <li className=' flex flex-row items-center  bg-linear-to-br from-amber-600 to-amber-500 rounded-xl justify-between w-full text-start px-2 py-2 transition-all duration-300 shadow-lg'>
                                    <img src="/logo.jpg" alt="" className='object-cover w-14 rounded-xl' />
                                    <div className='flex flex-col items-start justify-center'>
                                        <span className='text-white'>Nombre del producto</span>
                                        <span className='text-white'>99,99€</span>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <span>Cantidad</span>
                                        <input type="number" className='w-10 text-center rounded-lg' defaultValue={1} />
                                    </div>
                                </li>
                                <li className=' flex flex-row items-center  bg-linear-to-br from-neutral-200 to-neutral-400 rounded-xl justify-between w-full text-start px-2 py-2 transition-all duration-300 shadow-lg'>
                                    <img src="/logo.jpg" alt="" className='object-cover w-14 rounded-xl' />
                                    <div className='flex flex-col items-start justify-center'>
                                        <span className='text-white'>Nombre del producto</span>
                                        <span className='text-white'>99,99€</span>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <span>Cantidad</span>
                                        <input type="number" className='w-10 text-center rounded-lg' defaultValue={1} />
                                    </div>
                                </li>
                                <span className='flex flex-row w-full items-center justify-between mt-4 text-start transition-all duration-300'>
                                    <span className='text-amber-600'>Total 100€</span>
                                    <button className='rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 p-2'>Pagar</button>
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header >


    )
}

export default Nav
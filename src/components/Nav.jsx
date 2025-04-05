const Nav = () => {
    return (
        <header className="w-full fixed top-0 left-0 z-1 transition-all duration-300 bg-gradient-to-r from-white from-40%   shadow-2xl  backdrop-blur-xl">
            <nav className="flex mx-10 w-full">
                <div className="flex items-center p-1 text-orange-400 rounded-4xl w-full gap-x-40">
                    <img src="/logo.jpg" alt="logo lc camionero" className="w-[100px] object-contain" />
                    <ul className="flex space-x-5 w-full italic justify-start items-center m-0 p-0 text-2xl font-bold cursive gap-x-10">
                        <li><a href="#home" className="hover:text-orange-500 transition-all duration-300 ">Inicio</a></li>
                        <li><a href="#about" className="hover:text-orange-500 transition-all duration-300">Tienda</a></li>
                        <li><a href="#services" className="hover:text-orange-500 transition-all duration-300">Sobre mí</a></li>
                        <li><a href="#contact" className="hover:text-orange-500 transition-all duration-300">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </header >


    )
}

export default Nav
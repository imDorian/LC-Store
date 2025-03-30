const Nav = () => {
    return (
        <header className="w-full fixed top-10 left-0 z-50 transition-all duration-300">
            <nav className="flex mx-10">
                <div className="flex items-center justify-between  p-4 text-orange-500 w-full rounded-4xl px-10 gap-10">
                    <div className="text-2xl font-bold text-nowrap">LC Store</div>
                    <ul className="flex space-x-10 w-full justify-start m-0 p-0 text-2xl font-bold">
                        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-400">About</a></li>
                        <li><a href="#services" className="hover:text-gray-400">Services</a></li>
                        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header >


    )
}

export default Nav
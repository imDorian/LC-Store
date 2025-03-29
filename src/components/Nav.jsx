const Nav = () => {
    return (
        <header className="w-full fixed top-5 left-0 z-50">
            <nav className="">
                <div className="flex items-center justify-between bg-gray-900 p-4 text-white w-full rounded-4xl">
                    <div className="text-2xl font-bold">My Website</div>
                    <ul className="flex space-x-4 w-full">
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
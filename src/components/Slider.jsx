import VideoYoutube from "./VideoYoutube"

const Slider = () => {
    return (
        <div id="home" className="w-full h-screen relative">
            <video autoPlay loop muted className="object-cover object-center h-full w-full filter brightness-75 contrast-125 ">
                <source src="/truck.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center p-5 pt-[50px] gap-5">
                <h1 className="text-4xl">Hola, soy <strong>Lucian</strong></h1>
                <div className=" rounded-3xl aspect-[16/9] flex items-center object-cover justify-center relative "><VideoYoutube />
                    <a target="_blank" href="https://www.youtube.com/watch?v=7N5wZmAvKsw" className='absolute bottom-0 right-0 p-2 flex flex-row items-center gap-1'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube Logo" className="h-5" />
                        <span className='text-white text-xs'>Youtube</span>
                    </a>
                </div>
                <div className="flex flex-row w-full gap-3">
                    <a href="https://www.instagram.com/lc_camionero/" target="_blank" className="bg-gradient-to-br from-[#405DE6] to-[#F56040] rounded-3xl w-full aspect-[9/16] flex items-center justify-center shadow-2xl shadow-black">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" className="h-10" />
                    </a>
                    <a href="https://www.tiktok.com/@lcamionero" target="_blank" className="bg-gradient-to-br from-[#ff0050] from-[10%] via-[#00f2ea] via-[40%] to-[#000000] to-[85%] rounded-3xl w-full aspect-[9/16] flex items-center justify-center shadow-2xl shadow-black">
                        <img src="/tiktok.png" className="h-10" alt="Tiktok logo" />
                    </a>
                </div>
                <a href="#shop" className="mt-10 rounded-full size-20 bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl shadow-black  text-lg">Tienda</a>
            </div>
        </div>
    )
}

export default Slider
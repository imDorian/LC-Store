import { useRef, useState, useEffect } from "react"
import { VIDEO_TYPES } from "../constants/VIDEO_TYPES"
import CardVideo from "./CardVideo"


const Slider = () => {
    const youtubeRef = useRef(null)
    const instagramRef = useRef(null)
    // const tiktokRef = useRef(null)
    const [videoPlaying, setVideoPlaying] = useState(VIDEO_TYPES.YOUTUBE)
    function handleVideoChange(type) {
        setVideoPlaying(type)
    }

    function handleVideoPlaying() {

    }
    useEffect(() => {
        const youtubeVideo = youtubeRef.current
        const instagramVideo = instagramRef.current
        // const tiktokVideo = tiktokRef.current

        youtubeVideo.addEventListener('ended', () => {
            handleVideoChange(VIDEO_TYPES.INSTAGRAM)
            instagramVideo.play()
        })
        instagramVideo.addEventListener('ended', () => {
            handleVideoChange(VIDEO_TYPES.YOUTUBE)
            youtubeVideo.play()
        })
        // tiktokVideo.addEventListener('ended', () => {
        //     handleVideoChange(VIDEO_TYPES.YOUTUBE)
        //     youtubeVideo.play()
        // })



    }, [])

    return (
        <div id="home" className="sm:w-lg  min-h-dvh h-full flex flex-col items-center">

            <div className=" flex flex-col items-center justify-center p-5 pt-[60px] gap-5 ">
                <h1 className="text-2xl text-center text-pretty">Tu espacio <strong>Camionero</strong>, en la carretera y en línea.</h1>

                <CardVideo videoPlaying={videoPlaying} link="https://www.youtube.com/watch?v=7N5wZmAvKsw" aspect="aspect-[16/9]" ref={youtubeRef} type={VIDEO_TYPES.YOUTUBE} videoSrc='/YT.mp4' imgSrc='https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png' gradient={videoPlaying !== VIDEO_TYPES.YOUTUBE ? 'bg-gradient-to-br from-red-500 to-red-400' : 'bg-transparent'} username={'@lc_camionero'} autoplay={true} scale={videoPlaying !== VIDEO_TYPES.YOUTUBE ? '' : 'scale-103'} />
                <div className="grid grid-cols-2 w-full h-full gap-3">

                    <CardVideo videoSrc='/instagram.mp4' imgSrc='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' videoPlaying={videoPlaying} link="https://www.instagram.com/lc_camionero/" aspect="aspect-[9/16] h-full w-full" ref={instagramRef} type={VIDEO_TYPES.INSTAGRAM} gradient={videoPlaying !== VIDEO_TYPES.INSTAGRAM ? 'bg-gradient-to-br from-[#405DE6] to-[#F56040]' : 'transparent'} username={'@lc_camionero'} scale={videoPlaying !== VIDEO_TYPES.INSTAGRAM ? '' : 'scale-103'} />
                    {/* <div className="bg-gradient-to-b from-orange-400 to-orange-300 border-1 border-neutral-300  w-full p-5 rounded-3xl flex items-center justify-center mx-autotext-2xl font-medium text-neutral-600 shadow-[0_5px_20px_-20px] shadow-neutral-700 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
                                Ir a la Tienda
                            </div> */}



                    <div className="flex flex-col gap-3">
                        <section className="h-full sm:h-auto flex flex-col gap-3 p-4 w-full bg-gradient-to-br from-red-500/80 to-orange-400/80 rounded-3xl  shadow-[2px_5px_30px_-20px] shadow-neutral-700">
                            <h2 className="text-lg font-semibold text-white">Tienda</h2>
                            <div className="flex flex-col gap-0 rounded-lg bg-white/20 p-1.5 ">
                                <label className="flex flex-col items-center text-sm" htmlFor="">
                                    <input placeholder="Tiras de led para cabina ..." className="bg-white rounded-lg p-1.5 w-full focus:outline-amber-500 overflow-ellipsis" type="search" name="" id="" />

                                </label>
                                <ul className="flex flex-col text-sm text-start divide-y-1 text-white divide-neutral-500/10 px-2">
                                    <a className="hover:text-violet-500 cursor-pointer transition-all duration-200 leading-none py-1">Accesorios para camiones...</a>
                                    <a className="hover:text-violet-500 cursor-pointer transition-all duration-200 leading-none py-1">Herramientas de viaje...</a>
                                    <a className="hover:text-violet-500 cursor-pointer transition-all py-1 duration-200 leading-none ">Ropa de camioneros...</a>
                                </ul>

                            </div>
                            <button className="w-full bg-neutral-600/80 rounded-lg py-0.5 px-1 text-white hover:bg-neutral-700 transition-all duration-300 hover:scale-102">Buscar producto</button>
                        </section>
                        <section className="hidden sm:flex flex-col gap-3 p-4 w-full  text-white bg-gradient-to-br from-orange-400/80 to-red-400/60 rounded-3xl shadow-[2px_5px_30px_-20px] shadow-neutral-700 transition-all duration-300 ease-in-out">
                            <h2 className="text-lg font-semibold">¡Oferta del mes!</h2>
                            <span className="text-sm text-pretty text-center text-neutral-600 bg-white/20 rounded-lg px-2 py-1">Aprovecha el <strong>2x1</strong> en <strong>lámparas LED</strong> para cabina</span>
                            <button className="bg-orange-500/70 rounded-lg py-0.5 text-white hover:bg-orange-500 transition-all duration-200 hover:scale-102">Ver Oferta</button>
                        </section>

                    </div>

                </div>
                {/* <a href="#shop" className="absolute bottom-10 sm:right-10 flex rounded-full size-18 bg-gradient-to-b from-amber-300 to-amber-500 items-center justify-center shadow-2xl shadow-neutral-700  text-base font-medium animate-bounce italic text-neutral-800">Tienda</a> */}
            </div>
        </div >
    )
}

export default Slider
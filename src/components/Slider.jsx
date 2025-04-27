import Videos from "./Videos"
import { useRef, useState, useEffect } from "react"
import { VIDEO_TYPES } from "../constants/VIDEO_TYPES"
import CardVideo from "./CardVideo"


const Slider = () => {
    const youtubeRef = useRef(null)
    const instagramRef = useRef(null)
    const tiktokRef = useRef(null)
    const [videoPlaying, setVideoPlaying] = useState(VIDEO_TYPES.YOUTUBE)
    function handleVideoChange(type) {
        setVideoPlaying(type)
    }

    function handleVideoPlaying() {

    }
    useEffect(() => {
        const youtubeVideo = youtubeRef.current
        const instagramVideo = instagramRef.current
        const tiktokVideo = tiktokRef.current

        youtubeVideo.addEventListener('ended', () => {
            handleVideoChange(VIDEO_TYPES.INSTAGRAM)
            instagramVideo.play()
        })
        instagramVideo.addEventListener('ended', () => {
            handleVideoChange(VIDEO_TYPES.TIKTOK)
            tiktokVideo.play()
        })
        tiktokVideo.addEventListener('ended', () => {
            handleVideoChange(VIDEO_TYPES.YOUTUBE)
            youtubeVideo.play()
        })



    }, [])

    return (
        <div id="home" className="sm:w-lg  min-h-dvh h-full flex flex-col items-center">
            {/* <video autoPlay muted className="object-cover object-center h-full w-full filter brightness-75 contrast-125 ">
                <source src="/truck.mp4" type="video/mp4" />
            </video> */}
            {/* <div className="absolute w-full h-full backdrop-blur-xs"></div> */}
            <div className=" flex flex-col items-center justify-center p-5 pt-[60px] gap-5">
                <h1 className="text-2xl">Bienvenido <strong>Camionero</strong></h1>

                <CardVideo videoPlaying={videoPlaying} link="https://www.youtube.com/watch?v=7N5wZmAvKsw" aspect="aspect-[16/9]" ref={youtubeRef} type={VIDEO_TYPES.YOUTUBE} videoSrc='/YT.mp4' imgSrc='https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png' gradient={videoPlaying !== VIDEO_TYPES.YOUTUBE ? 'bg-gradient-to-br from-red-500 to-red-400' : 'bg-transparent'} username={'@lc_camionero'} autoplay={true} scale={videoPlaying !== VIDEO_TYPES.YOUTUBE ? '' : 'scale-103'} />
                <div className="flex flex-row w-full gap-3">

                    <CardVideo videoSrc='/instagram.mp4' imgSrc='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' videoPlaying={videoPlaying} link="https://www.instagram.com/lc_camionero/" aspect="aspect-[9/16]" ref={instagramRef} type={VIDEO_TYPES.INSTAGRAM} gradient={videoPlaying !== VIDEO_TYPES.INSTAGRAM ? 'bg-gradient-to-br from-[#405DE6] to-[#F56040]' : 'transparent'} username={'@lc_camionero'} scale={videoPlaying !== VIDEO_TYPES.INSTAGRAM ? '' : 'scale-103'} />

                    <CardVideo videoSrc='/tiktok.mp4' imgSrc='/tiktok.png' videoPlaying={videoPlaying} link="https://www.tiktok.com/@lcamionero" aspect="aspect-[9/16]" ref={tiktokRef} type={VIDEO_TYPES.TIKTOK} gradient={videoPlaying !== VIDEO_TYPES.TIKTOK ? 'bg-gradient-to-br from-[#ff0050] from-[10%] via-[#00f2ea] via-[40%] to-[#000000] to-[85%]' : 'transparent'} username={'@lcamionero'} scale={videoPlaying !== VIDEO_TYPES.TIKTOK ? '' : 'scale-103'} />
                </div>
                <a href="#shop" className="absolute bottom-10 sm:right-10 flex rounded-full size-18 bg-gradient-to-b from-amber-300 to-amber-500 items-center justify-center shadow-2xl shadow-neutral-700  text-base font-medium animate-bounce italic text-neutral-800">Tienda</a>
            </div>
        </div>
    )
}

export default Slider
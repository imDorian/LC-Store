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
        <div id="home" className="w-full h-screen relative">
            <video autoPlay muted className="object-cover object-center h-full w-full filter brightness-75 contrast-125 ">
                <source src="/truck.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center p-5 pt-[50px] gap-5">
                <h1 className="text-4xl">Hola, soy <strong>Lucian</strong></h1>
                {/* <div className=" rounded-3xl aspect-[16/9] flex items-center object-cover justify-center relative "><Videos autoPlay={'autoPlay'} ref={youtubeRef} src='/YT.mp4' aspect={'aspect-[16/9]'} />
                    <a target="_blank" href="https://www.youtube.com/watch?v=7N5wZmAvKsw" className='absolute bottom-0 right-0 p-2 flex flex-row items-center gap-1'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube Logo" className="h-5" />
                        <span className='text-white text-xs'>Youtube</span>
                    </a>
                </div> */}
                <CardVideo videoPlaying={videoPlaying} link="https://www.youtube.com/watch?v=7N5wZmAvKsw" aspect="aspect-[16/9]" ref={youtubeRef} type={VIDEO_TYPES.YOUTUBE} videoSrc='/YT.mp4' imgSrc='https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png' gradient={'bg-gradient-to-br from-red-600 to-red-400'} username={'@lc_camionero'} autoplay={true} />
                <div className="flex flex-row w-full gap-3">

                    <CardVideo videoSrc='/instagram.mp4' imgSrc='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' videoPlaying={videoPlaying} link="https://www.instagram.com/lc_camionero/" aspect="aspect-[9/16]" ref={instagramRef} type={VIDEO_TYPES.INSTAGRAM} gradient={'bg-gradient-to-br from-[#405DE6] to-[#F56040]'} username={'@lc_camionero'} />

                    <CardVideo videoSrc='/tiktok.mp4' imgSrc='/tiktok.png' videoPlaying={videoPlaying} link="https://www.tiktok.com/@lcamionero" aspect="aspect-[9/16]" ref={tiktokRef} type={VIDEO_TYPES.TIKTOK} gradient={'bg-gradient-to-br from-[#ff0050] from-[10%] via-[#00f2ea] via-[40%] to-[#000000] to-[85%]'} username={'@lcamionero'} />
                </div>
                <a href="#shop" className="mt-10 rounded-full size-20 bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl shadow-black  text-lg animate-bounce">Tienda</a>
            </div>
        </div>
    )
}

export default Slider
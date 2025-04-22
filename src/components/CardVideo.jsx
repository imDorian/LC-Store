import React from 'react'
import { VIDEO_TYPES } from '../constants/VIDEO_TYPES'
import Videos from './Videos'

const CardVideo = ({ videoPlaying, link, aspect, ref, type, videoSrc, imgSrc, gradient, username, autoplay }) => {

    return (
        <a href={link} target="_blank" className={` rounded-3xl  ${aspect} ${gradient} flex items-center justify-center shadow-2xl shadow-black transition-all duration-300 ease-in-out hover:scale-105 relative`}>
            <Videos autoPlay={autoplay} blur={videoPlaying !== type ? 'blur-xs' : ''} opacity={videoPlaying !== type ? 'opacity-8' : 'opacity-100'} src={videoSrc} aspect={aspect} ref={ref} />
            <div className={videoPlaying
                !== type ? "absolute flex bottom-1/2 flex-row items-center justify-center gap-x-2 transition-all duration-500 ease-in-out " : 'absolute pb-3 pt-10 flex flex-row gap-x-2 items-center bottom-0 justify-center transition-all duration-500 ease-in-out w-full rounded-b-3xl z-10'}>
                <img src={imgSrc} className={videoPlaying
                    !== type ? "h-6 transition-all duration-500 " : 'h-6 transition-all duration-500'} alt={`${type} de ${username}`} />
                <span className={videoPlaying !== type ? "text-white text-sm text-center" : 'text-white text-xs text-center transition-all duration-500 '}>
                    {username}
                </span>
            </div>
            <div className='inset-shadow-[0px_-20px_40px_-5px] inset-shadow-black rounded-3xl h-full w-full absolute'></div>
        </a >
    )
}

export default CardVideo
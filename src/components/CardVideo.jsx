import React from 'react'
import { VIDEO_TYPES } from '../constants/VIDEO_TYPES'
import Videos from './Videos'

const CardVideo = ({ videoPlaying, link, aspect, ref, type, videoSrc, imgSrc, gradient, username, autoplay, scale }) => {

    return (
        <a href={link} target="_blank" className={`rounded-3xl  ${aspect} ${gradient} flex items-center justify-center shadow-[0_8px_20px_-20px] shadow-neutral-800 transition-all duration-300 ease-in-out ${scale} relative hover:scale-105 cursor-pointer `} rel="noreferrer">
            <Videos autoPlay={autoplay} blur={videoPlaying !== type ? 'blur-xs' : ''} opacity={videoPlaying !== type ? 'opacity-0' : 'opacity-100'} src={videoSrc} ref={ref} border={videoPlaying !== type ? '' : 'shadow-[0_10px_20px_-10px] shadow-neutral-800'} />
            <div className={videoPlaying
                !== type ? "absolute flex bottom-1/2 flex-row items-center justify-center gap-x-2 transition-all duration-500 ease-in-out " : 'absolute pb-3 pt-10 flex flex-row gap-x-2 items-center bottom-0 justify-center transition-all duration-500 ease-in-out w-full rounded-b-3xl z-1'}>
                <img src={imgSrc} className={videoPlaying
                    !== type ? "h-6 transition-all duration-500 " : 'h-6 transition-all duration-500'} alt={`${type} de ${username}`} />
                <span className={videoPlaying !== type ? "text-white text-sm drop-shadow-sm bg-black/20 px-1 rounded" : 'text-white text-xs text-center transition-all duration-500 '}>
                    {username}
                </span>
            </div>
            <div className='inset-shadow-[0px_-10px_20px_-25px] inset-shadow-black rounded-3xl h-full w-full absolute z-1'></div>
        </a >
    )
}

export default CardVideo
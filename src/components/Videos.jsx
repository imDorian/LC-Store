import React from 'react'

const Videos = ({ src, aspect, ref, autoPlay, opacity, blur, border }) => {
    return (
        <video ref={ref} autoPlay={autoPlay} muted className={`object-center object-cover w-full h-full ${opacity} ${blur} transition-all   duration-500 contrast-125 ${border} rounded-3xl`}>
            <source src={src} type="video/mp4" />
        </video>
    )
}

export default Videos
import React from 'react'

const Videos = ({ src, aspect, ref, autoPlay, opacity, blur }) => {
    return (
        <video ref={ref} autoPlay={autoPlay} muted className={`object-center  ${aspect} ${opacity} ${blur} transition-all  duration-500 contrast-125 rounded-3xl shadow-lg shadow-black/50`}>
            <source src={src} type="video/mp4" />
        </video>
    )
}

export default Videos
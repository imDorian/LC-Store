import React from 'react'
import '@justinribeiro/lite-youtube'

const VideoYoutube = () => {
    return (
        <video autoPlay loop muted className="object-center  filter brightness-75 contrast-125 rounded-3xl shadow-lg shadow-black/50">
            <source src="/YT.mp4" type="video/mp4" />
        </video>
    )
}

export default VideoYoutube

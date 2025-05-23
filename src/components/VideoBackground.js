import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieID }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    
    useMovieTrailer(movieID);
    
    // fetch trailer

    // console.log(trailerVideo)

    return (
        <div className="">
            <iframe
                className="w-screen aspect-video" 
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=true&vq=hd720."} //+ "?&autoplay=1&mute=true"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
            </iframe>
        </div>
    )
}

export default VideoBackground
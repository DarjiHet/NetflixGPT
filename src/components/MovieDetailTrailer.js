import React from 'react'
import useMovieDetailTrailer from '../hooks/useMovieDetailTrailer';

const MovieDetailTrailer = ({ id }) => {

    const trailerVideo = useMovieDetailTrailer(id);
    return (
        <div>
            <iframe
                className="w-[25rem] md:w-[50rem] aspect-video"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&rel=0"} //+ "?&autoplay=1&mute=true"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            >
            </iframe>
        </div>
    )
}

export default MovieDetailTrailer
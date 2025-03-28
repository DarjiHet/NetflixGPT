import { API_OPTIONS } from '../utils/constants'
import { useEffect, useState } from "react";

const useMovieDetailTrailer = (movieID) => {

    const [movieTrailer, setMovieTrailer] = useState(null);

    const getMovieVideos = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, API_OPTIONS)
            const json = await data.json();
            const filterData = json.results.filter((video) => video.type === "Trailer");
            const official = filterData.filter((video) => video.official === true);
            const trailer = official.length ? official[0] : json.results[0];
            setMovieTrailer(trailer)
        };
    
        useEffect(() => {
            getMovieVideos();
        }, []);

        return movieTrailer;
}

export default useMovieDetailTrailer;
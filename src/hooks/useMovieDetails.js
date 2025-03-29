import { API_OPTIONS } from '../utils/constants'
import { useEffect, useState } from 'react';

const useMovieDetails = (id) => {

    const [movieDetail , setMovieDetail] = useState(null);

    const getActionMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();
        setMovieDetail(json);
    }

    useEffect(() => {
        getActionMovies();
    }, [id])

    return movieDetail;
}

export default useMovieDetails;

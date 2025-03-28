import { API_OPTIONS } from '../utils/constants'
import { useEffect, useState } from 'react';

const useMovieCastDetails = (id) => {

    const [castDetail , setCastDetail] = useState(null);

    const getMovieCast = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, 
            API_OPTIONS
        );
        const json = await data.json();
        setCastDetail(json)
    }

    useEffect(() => {
        getMovieCast();
    }, [])
    return castDetail;
}

export default useMovieCastDetails;
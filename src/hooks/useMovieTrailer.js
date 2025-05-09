import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {

    const dispatch = useDispatch();

    // const trailerVideo = useSelector((store) => store.movies.nowPlayingMovies)    
    // fetch trailer

    const getMovieVideos = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, API_OPTIONS)
            const json = await data.json();
            // console.log(json);
    

            const filterData = json.results.filter((video) => video.type === "Trailer");
            const official = filterData.filter((video) => video.official === true);
            const trailer = official.length ? official[0] : json.results[0];
            dispatch(addTrailerVideo(trailer)); 
        };
    
        useEffect(() => {
            getMovieVideos();
        }, []);
}

export default useMovieTrailer; 
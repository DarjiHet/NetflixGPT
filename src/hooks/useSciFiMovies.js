import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addSciFiMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useSciFiMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

  const getSciFiMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=878&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addSciFiMovies(json.results))
  }

  useEffect(() => {
    !nowPlayingMovies && getSciFiMovies();
  }, [])
}

export default useSciFiMovies;
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addThirllerMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useThrillerMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

  const getThrillerMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addThirllerMovies(json.results))
  }

  useEffect(() => {
    !nowPlayingMovies && getThrillerMovies();
  }, [])
}

export default useThrillerMovies;
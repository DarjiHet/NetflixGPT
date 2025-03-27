import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrandingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

  const getTrandingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrandingMovies(json.results))
  }

  useEffect(() => {
    !nowPlayingMovies && getTrandingMovies();
  }, [])
}

export default useTrendingMovies;
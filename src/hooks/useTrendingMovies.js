import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrandingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useTrendingMovies = () => {
    const dispatch = useDispatch();

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
    getTrandingMovies();
  }, [])
}

export default useTrendingMovies;
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addRomanceMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useRomanceMovies = () => {
    const dispatch = useDispatch();

  const getRomanceMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addRomanceMovies(json.results))
  }

  useEffect(() => {
    getRomanceMovies();
  }, [])
}

export default useRomanceMovies;
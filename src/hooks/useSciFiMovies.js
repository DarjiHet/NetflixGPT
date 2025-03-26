import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addSciFiMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useSciFiMovies = () => {
    const dispatch = useDispatch();

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
    getSciFiMovies();
  }, [])
}

export default useSciFiMovies;
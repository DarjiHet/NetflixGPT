import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addThirllerMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useThrillerMovies = () => {
    const dispatch = useDispatch();

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
    getThrillerMovies();
  }, [])
}

export default useThrillerMovies;
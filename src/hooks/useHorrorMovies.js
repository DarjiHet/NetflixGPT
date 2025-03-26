import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addHorrorMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useHorrorMovies = () => {
    const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addHorrorMovies(json.results))
  }

  useEffect(() => {
    getHorrorMovies();
  }, [])
}

export default useHorrorMovies;
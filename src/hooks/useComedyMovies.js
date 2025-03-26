import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addComedyMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useComedyMovies = () => {
    const dispatch = useDispatch();

  const getComedyMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_original_language=hi&with_genres=35&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addComedyMovies(json.results))
  }

  useEffect(() => {
    getComedyMovies();
  }, [])
}

export default useComedyMovies;
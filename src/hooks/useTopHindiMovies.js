import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopHindiMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useTopHindiMovies = () => {
    const dispatch = useDispatch();

  const getTopHindiMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopHindiMovies(json.results))
  }

  useEffect(() => {
    getTopHindiMovies();
  }, [])
}

export default useTopHindiMovies;
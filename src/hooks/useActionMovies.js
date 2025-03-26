import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addActionMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useActionMovies = () => {
    const dispatch = useDispatch();

  const getActionMovies = async () => {
    const data = await fetch(
    "https://api.themoviedb.org/3/discover/movie?with_original_language=hi&with_genres=28&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addActionMovies(json.results))
  }

  useEffect(() => {
    getActionMovies();
  }, [])
}

export default useActionMovies;
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addSmilerMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';

const useSimilerMovies = (id) => {
    // console.log(id)
    const dispatch = useDispatch();

  const getSimilerMovies = async () => {
    const data = await fetch(
      // "https://api.themoviedb.org/3/movie/"+id+"/similar?page=1",
      "https://api.themoviedb.org/3/movie/"+id+"/recommendations?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSmilerMovies(json.results))
  }

  useEffect(() => {
    getSimilerMovies();
  }, [id])
}

export default useSimilerMovies;
import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTopHindiMovies from '../hooks/useTopHindiMovies';
import useActionMovies from '../hooks/useActionMovies';
import useComedyMovies from '../hooks/useComedyMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';
import useRomanceMovies from '../hooks/useRomanceMovies';
import useThrillerMovies from '../hooks/useThrillerMovies';
import useSciFiMovies from '../hooks/useSciFiMovies';
import GPTSearch from './GPTSearch';
import Footer from "./Footer"
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTopHindiMovies();
  useActionMovies();
  useComedyMovies();
  useHorrorMovies();
  useRomanceMovies();
  useThrillerMovies();
  useSciFiMovies();


  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GPTSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
            <Footer />
          </>
        )}

      {/* <MainContainer />
      <SecondaryContainer /> */}
    </div>
  )
}

export default Browse;
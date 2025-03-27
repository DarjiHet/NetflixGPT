import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-56 pl-4 md:pl-16 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Tranding"} movies={movies.trandingMovies} />
        <MovieList title={"Top Rated Hindi Movies"} movies={movies.topHindiMovies} />
        <MovieList title={"Action Movies"} movies={movies.actionMovies} />
        <MovieList title={"Comedy Movies"} movies={movies.comedyMovies} />
        <MovieList title={"Horror Movies"} movies={movies.horrorMovies} />
        <MovieList title={"Romance Movies"} movies={movies.romanceMovies} />
        <MovieList title={"Thriller Movies"} movies={movies.thrillerMovies} />
        <MovieList title={"SciFi Movies"} movies={movies.scifiMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
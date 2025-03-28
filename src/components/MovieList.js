import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
if (!movies) return;
// console.log(movies[0].poster_path)
return (
    <div className="px-0 pr--0.5">
        <h1 className="text-lg md:text-2xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
            <div className="flex">
                {movies.map(movie=> <MovieCard key={movie.id} posterpath={movie.poster_path} title={movie.title} id={movie.id}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList

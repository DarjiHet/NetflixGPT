import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import useMovieCastDetails from "../hooks/useMovieCastDetails";
import { IMG_CDN } from "../utils/constants";
import CastProfile from "./CastProfile";
import { Link } from "react-router-dom";
import MovieDetailTrailer from "./MovieDetailTrailer";

const MovieDetails = () => {

  const { id } = useParams();

  const MovieDetails = useMovieDetails(id);
  const castDetails = useMovieCastDetails(id);
  if (!MovieDetails) return <div>Loading....</div>
  const { title, poster_path, overview, budget, revenue, runtime, release_date, genres, vote_average, status } = MovieDetails;

  return (
    <div className="h-screen w-screen bg-[#141414] fixed overflow-auto text-white flex flex-col items-center py-10">
      <div className="fixed top-4 left-5 z-30">
        <Link
          to={"/browse"}
          className="text-4xl text-white flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-800 transition duration-300"
        >
          ‹
        </Link>
      </div>      

      {/* Movie Poster */}
      <div className="w-3/12 flex justify-center">
        <img
          src={IMG_CDN + poster_path}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Movie Title */}
      <h1 className="text-4xl font-bold mt-6">{title}</h1>

      {/* Movie Info (Runtime & Release Date) */}
      <div className="flex justify-center space-x-6 mt-2 text-lg">
        <p>{Math.floor(runtime / 60)}h {runtime % 60}m</p>
        <p>{release_date}</p>
      </div>

      {/* Overview */}
      <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mt-6 px-6">
        {overview}
      </p>

      {/* Genres & Rating */}
      <div className="flex flex-col items-center mt-6 text-xl">
        <span>Genres: {genres.map((gen) => gen.name).join(", ")}</span>
        <span className="mt-2">Avg Rating: {vote_average}</span>
        <span className="mt-2">Status: {status}</span>
      </div>

      <div className="mt-4">
          <MovieDetailTrailer id={id}/>
      </div>
      <div className="w-10/12">
        <CastProfile castDetails={castDetails} />
      </div>
    </div>
  );
};

export default MovieDetails;
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import useMovieCastDetails from "../hooks/useMovieCastDetails";
import { IMG_CDN } from "../utils/constants";
import CastProfile from "./CastProfile";
import { Link } from "react-router-dom";
import MovieDetailTrailer from "./MovieDetailTrailer";
import useSimilerMovies from "../hooks/useSimilerMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ShimmerUi from "./ShimmerUi"
import { useNavigate } from 'react-router-dom';


const MovieDetails = () => {

  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  if(!user) navigate("/");

  const { id } = useParams();
  const [loading, setLoading] = useState(true); // Track loading state

  useSimilerMovies(id);

  useEffect(() => {
    setLoading(true)
    document.querySelector(".top")?.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setLoading(false);  // Stop loading after 1 seconds
    }, 800);

    console.log(timer)
    return () => clearTimeout(timer); // Cleanup timer

  }, [id]);

  const movies = useSelector((store) => store.movies)
  const MovieDetails = useMovieDetails(id);
  const castDetails = useMovieCastDetails(id);
  
  if (loading || !MovieDetails) return <ShimmerUi />;

  const { title, poster_path, overview, budget, revenue, runtime, release_date, genres, vote_average, status } = MovieDetails;

  return (
    <div className="top h-screen w-screen bg-[#141414] fixed overflow-auto text-white flex flex-col items-center py-10">
      <div className="fixed top-4 left-5 z-30">
        <Link
          to={"/browse"}
          className="text-4xl text-white flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-800 transition duration-300"
        >
          ‹
        </Link>
      </div>

      {/* Movie Poster */}
      <div className="md:w-3/12 flex justify-center">
        <img
          src={IMG_CDN + poster_path}
          alt={title}
          className="w-56 md:w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Movie Title */}
      <h1 className="text-4xl font-bold text-center mt-6">{title}</h1>

      {/* Movie Info (Runtime & Release Date) */}
      <div className="flex justify-center space-x-6 mt-2 text-lg">
        <p>{Math.floor(runtime / 60)}h {runtime % 60}m</p>
        <p>{release_date}</p>
      </div>

      {/* Overview */}
      <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mt-6 px-6">
        {overview}
      </p>

      <div className="flex flex-col items-center mt-6 text-xl">
        {budget > 0 &&(
          <>
            <span className="mt-2">
              Budget: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(budget)}
            </span>
            <span className="mt-2">
              Revenue: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(revenue)}
            </span>
          </>
        )}
        <span>Genres: {genres.map((gen) => gen.name).join(", ")}</span>
        <span className="mt-2">Avg Rating: {vote_average}</span>
        <span className="mt-2">Status: {status}</span>
      </div>

      <div className="mt-4">
        <MovieDetailTrailer id={id} />
      </div>
      <div className="w-10/12">
        <CastProfile castDetails={castDetails} />
      </div>
      <div className="w-10/12">
        <MovieList title={"Recommendations"} movies={movies.simlerMovies} />
      </div>
    </div>
  );
};

export default MovieDetails;
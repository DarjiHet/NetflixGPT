import React from 'react';
import { IMG_CDN } from '../utils/constants';
import { Link } from "react-router-dom"; // Import Link

const MovieCard = ({ posterpath, title, overview, id }) => {

  if (!posterpath) return null;
  return (
    <Link to={`/movie/${id}`} className="block"> {/* Link to movie details page */}
    <div className="w-36 md:w-52 mr-2 group relative cursor-pointer overflow-hidden rounded-lg">
      {/* Movie Poster */}
      <img
        alt={title}
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        src={IMG_CDN + posterpath}
      />

      {/* Movie Details (Hidden by Default, Shown on Hover) */}
      <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end">
        <h3 className="text-sm md:text-lg font-bold">{title}</h3>
        <p className="text-xs md:text-sm line-clamp-3">{overview}</p>
      </div>
    </div>
    </Link>
  );

};

export default MovieCard;

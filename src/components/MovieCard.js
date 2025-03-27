import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  if(!posterpath) return null;
  return (
    // w-52
    <div className="w-52 pr-4">
        <img alt="Movie Card" 
        src={IMG_CDN + posterpath}
        />
    </div>
  )
}

export default MovieCard
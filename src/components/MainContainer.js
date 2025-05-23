import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import ShimmerUi from "./ShimmerUi"

const MainContainer = () => {

    const movies = useSelector(store=> store.movies?.nowPlayingMovies)

    if(movies == null) return <ShimmerUi />;

    const mainMovie = movies[0];
    // console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[5%] md:pt-0">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainContainer
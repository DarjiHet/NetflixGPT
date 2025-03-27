import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    // <div className="pt-[]">
    //   <div className="fixed -z-10">
    //     <img
    //       src={BG_IMG}
    //       alt="bg-img"
    //     />
    //   </div>
    //   <GptSearchBar />
    //   <GptMovieSuggestions />
    // </div>
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:w-screen md:object-cover"
          src={BG_IMG}
          alt="bg-img"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>

  )
}

export default GPTSearch
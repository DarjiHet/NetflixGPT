import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[40%] md:pt-[17%] px-6  md:px-16 absolute text-white"> 
    {/* bg-gradient-to-r from-black */}
        <h1 className="text-2xl md:text-4xl font-bold" >{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
        <div className="my-4 md:my-0">
            <button className="bg-white text-black py-1 px-3 md:py-3 md:px-10 text-xl rounded-lg hover:bg-opacity-80"> ▶ Play</button>
            <button  className="hidden md:inline-block md:py-3 mx-2 bg-gray-500 text-black p-4 px-16 text-xl bg-opacity-50 rounded-lg"> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
// import React from 'react'
// import { IMG_CDN } from '../utils/constants'

// const CastCard = ({char, name, img}) => {
//     console.log(char, name, img)
//   return (
//     <div className="bg-red-500 w-6 h-40 flex">
//         <div className="w-[100px]">
//             <img src={IMG_CDN + img} alt="img" className="w-11"/>
//         </div>
//     </div>
//   )
// }

// export default CastCard

import React from "react";
import { IMG_CDN } from "../utils/constants";

const CastCard = ({ char, name, img }) => {
  return (
    <div className="bg-[#1c1c1c] text-white w-40 h-56 flex flex-col items-center p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      {/* Image Container */}
      <div className="w-24 h-24 overflow-hidden rounded-full bg-gray-700">
        {img ? (
          <img
            src={IMG_CDN + img}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Cast Info */}
      <h3 className="text-md font-bold mt-2 text-center">{name}</h3>
      <p className="text-sm opacity-80 text-center">{char}</p>
    </div>
  );
};

export default CastCard;

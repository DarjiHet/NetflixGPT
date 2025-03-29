import React from 'react'

const ShimmerUi = () => {
    return (
        <div className="bg-[#141414] min-h-screen p-6">
          {/* Banner Skeleton */}
          <div className="w-full h-[400px] bg-gray-800 animate-pulse rounded-lg mb-6"></div>
    
          {/* Movie List Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array(12)
              .fill("")
              .map((_, index) => (
                <div key={index} className="bg-gray-800 animate-pulse rounded-lg">
                  <div className="w-full h-[200px] bg-gray-700 rounded-md"></div>
                  <div className="h-4 bg-gray-600 rounded mt-2 w-3/4 mx-auto"></div>
                  <div className="h-3 bg-gray-600 rounded mt-1 w-2/4 mx-auto"></div>
                </div>
              ))}
          </div>
        </div>
      );
}

export default ShimmerUi
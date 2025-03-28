import React from "react";
import CastCard from "./CastCard";

const CastProfile = ({ castDetails }) => {
  if (!castDetails || !castDetails.cast) return null; // Handle missing data gracefully
  return (
    <div className="px-4">
      <h1 className="text-lg md:text-2xl py-4 text-white font-semibold">Cast</h1>
  
      {/* Check if Cast Details are Empty */}
      {castDetails?.cast?.length === 0 ? (
        <p className="text-white text-center py-2">There is no cast detail</p>
      ) : (
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 py-2">
          {castDetails?.cast?.map((ca) => (
            <CastCard
              key={ca.id}
              char={ca.character}
              name={ca.name}
              img={ca.profile_path}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CastProfile;

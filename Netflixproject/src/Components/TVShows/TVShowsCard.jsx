import React from "react";

//Channels card with image and caption
const TVShowsCard = ({ shows }) => {
  return (
    <div className="relative inline-block mx-2">
      <img
        src={shows.image}
        alt={shows.caption}
        className="object-cover w-40 h-40"
      />
      <p className="absolute bottom-3 left-0 w-full text-center  bg-opacity-75">
        {shows.caption}
      </p>
    </div>
  );
};

export default TVShowsCard;

import React from "react";
import TVShowsData from "./TVShowsData";
import TVShowsCard from "./TVShowsCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const TVShows = () => {
  const rowId = Math.floor(Math.random() * 1000); // Generate a random ID for the row to ensure uniqueness

  // Function to handle horizontal scrolling
  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  return (
    <>
      {/* Title of the movie row */}
      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">Channels</h2>

      {/* Container for the movie items with sliding arrows */}
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slide(-500)}
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={30}
        />
        {/* Movie items container with horizontal scroll */}
        <div
          id={`slider` + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {/* Render each movie item */}
          {TVShowsData.map((shows) => (
            <TVShowsCard key={shows.id} shows={shows} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(500)}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={30}
        />
      </div>
    </>
  );
};

export default TVShows;

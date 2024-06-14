import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]); // State to store the list of movies

  const rowId = Math.floor(Math.random() * 1000); // Generate a random ID for the row to ensure uniqueness

  // Fetch movies data when the component mounts or when the URL changes
  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  // Function to handle horizontal scrolling
  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  console.log(movies);

  return (
    <>
      {/* Title of the movie row */}
      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>

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
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
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

export default MovieRow;

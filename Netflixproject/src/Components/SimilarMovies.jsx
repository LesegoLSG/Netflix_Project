import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import endpoints from "../Services/movieServices";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SimilarMovies = ({ title, movieId }) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const rowId = Math.floor(Math.random() * 1000); // Generate a random ID for the row to ensure uniqueness

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      const response = await axios.get(endpoints.similar(movieId));
      setSimilarMovies(response.data.results);
    };

    fetchSimilarMovies();
  }, [movieId]);

  // Function to handle horizontal scrolling
  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  return (
    <div className="w-full">
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
          {similarMovies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(500)}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={30}
        />
      </div>
    </div>
  );
};

export default SimilarMovies;

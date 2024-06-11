import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../Services/movieServices";

const Hero = () => {
  // State to store the movie data
  const [movie, setMovie] = useState({});

  // Fetch movie data when the component mounts
  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      // Pick a random movie from the list
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      // Update state with the selected movie
      setMovie(randomMovie);
    });
  }, []);

  // Function to truncate text to a specified length
  const truncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  // Display a loading message if no movie data is available yet
  if (!movie) {
    return (
      <>
        <h1>Fetching movie...</h1>
      </>
    );
  }

  // Destructure the movie object to extract needed properties
  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        {/* Background overlay */}
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={createImageUrl(backdrop_path, "original")}
          alt="title"
        />
        {/* Movie details section */}
        <div className="absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            {/* Play button */}
            <button className="capitalise border border-gray-300 py-2 px-5">
              Play
            </button>
            {/* Watch Later button */}
            <button className="capitalise border border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          {/* Movie release date */}
          <p className="text-gray-400 text-sm">{release_date}</p>
          {/* Movie overview with truncation */}
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncate(overview, 165)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

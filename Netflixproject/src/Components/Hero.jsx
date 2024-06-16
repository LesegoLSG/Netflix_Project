import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../Services/movieServices";

import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../Services/firebase";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
// Toastify Library imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const navigate = useNavigate();
  // State to store the movie data
  const [movie, setMovie] = useState({});
  const [like, setLike] = useState(false); // State to track if the movie is liked
  const { user } = UserAuth(); // Access user authentication context

  // Function to mark or unmark the movie as favorite
  const markFavShow = async () => {
    const userEmail = user?.email;

    if (userEmail) {
      const userDoc = doc(db, "users", userEmail); // Reference to the user's document in Firestore
      setLike(!like);
      // Update the user's favorite shows in Firestore
      await updateDoc(userDoc, {
        favShows: arrayUnion({ ...movie }),
      });
      toast.success(
        <div>
          <h1 className="text-primary m-2 font-nsans-bold text-2xl">LessEgo</h1>
          Movie saved to your profile
        </div>
      );
    } else {
      navigate("/login");
    }
  };

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
  const { id, title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <ToastContainer />
      <div className="w-full h-full">
        {/* Background overlay */}
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={createImageUrl(backdrop_path, "original")}
          alt="title"
        />
        {/* Movie details section */}
        <div className="absolute w-full top-[20%] lg:top-[25%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4 flex justify-startS items-center">
            {/* Play button */}
            <button
              className="capitalise border border-primary py-2 px-5 flex flex-row items-center gap-x-1 hover:bg-primary hover:border-gray-300"
              onClick={() => navigate(`/trailer/${id}`)}
            >
              <MdOutlinePlayCircleOutline />
              Play
            </button>
            {/* Watch Later button */}
            <button
              className="capitalise border border-primary py-2 px-5 ml-4 hover:bg-primary hover:border-gray-300"
              onClick={() => markFavShow()}
            >
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

import React, { useState } from "react";
import { createImageUrl } from "../Services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../Services/firebase";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

const MovieItem = ({ movie }) => {
  const navigate = useNavigate();
  const { title, backdrop_path, poster_path } = movie; // Destructure necessary properties from the movie object
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
    } else {
      alert("Login to save this movie");
    }
  };

  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden  m-2">
      {/* Movie image */}
      <img
        className="w-full h-40 block object-cover object-top"
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />
      {/* Overlay with movie title and like button */}
      <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm flex flex-col justify-center items-center h-full font-nsans-bold">
          {movie.title}
          <MdOutlinePlayCircleOutline
            size={30}
            onClick={() => navigate(`/trailer/${movie.id}`)}
            className="cursor-pointer"
          />
        </p>

        {/* Like button */}
        <p onClick={markFavShow} className="cursor-pointer">
          {like ? (
            <FaHeart
              size={20}
              className="absolute top-2 left-2 text-gray-300"
            />
          ) : (
            <FaRegHeart
              size={20}
              className="absolute top-2 left-2 text-gray-300"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;

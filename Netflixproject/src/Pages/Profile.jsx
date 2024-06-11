import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../Services/firebase";
import { createImageUrl } from "../Services/movieServices";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [movies, setMovies] = useState([]); // State to store the user's favorite movies
  const { user } = UserAuth(); // Access the user from the authentication context

  // Effect to fetch the user's favorite movies from Firestore
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows);
      });
    }
  }, [user?.email]);

  // Function to slide the movie list horizontally
  const slide = (offset) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  // Function to handle removing a movie from the user's favorites
  const handleRemoveShow = async (movie) => {
    const userDoc = doc(db, "users", user.email);

    await updateDoc(userDoc, {
      favShows: arrayRemove(movie),
    });
  };

  // Display a loading message if user data is not yet available
  if (!user) {
    return (
      <>
        <p>Fetching shows...</p>
      </>
    );
  }

  return (
    <>
      <div>
        {/* Background image */}
        <img
          className="block w-full h-[500px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/689d9df8-d2c0-4ba1-9cf7-30622eee71a6/ZA-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="profileImg"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-nsans-bold my-2">
            My shows
          </h1>
          <p className="font-nsans-light text-gray-400 text-lg">{user.email}</p>
        </div>

        {/* Saved movies */}
        <>
          <h2 className="font-nsans-bold md:text-xl p-4 capitalize">
            Your Favourite Movies
          </h2>

          <div className="relative flex items-center group">
            {/* Left arrow for sliding */}
            <MdChevronLeft
              onClick={() => slide(-500)}
              className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
              size={30}
            />
            <div
              id={`slider`}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {movies.map((movie) => (
                // Individual movie item
                <div
                  key={movie.id}
                  className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2"
                >
                  <img
                    className="w-full h-40 block object-cover object-top"
                    src={createImageUrl(
                      movie.backdrop_path ?? movie.poster_path,
                      "w500"
                    )}
                    alt={movie.title}
                  />
                  <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                    <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
                      {movie.title}
                    </p>
                    <p>
                      <AiOutlineClose
                        onClick={() => handleRemoveShow(movie)}
                        size={30}
                        className="absolute top-2 right-2"
                      />
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Right arrow for sliding */}
            <MdChevronRight
              onClick={() => slide(500)}
              className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
              size={30}
            />
          </div>
        </>
      </div>
    </>
  );
};

export default Profile;

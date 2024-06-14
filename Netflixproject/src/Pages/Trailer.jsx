import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import endpoints, { createImageUrl } from "../Services/movieServices";
import SimilarMovies from "../Components/SimilarMovies";
import MovieRow from "../Components/MovieRow";

const TrailerPage = () => {
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        if (!endpoints.baseUrl || !endpoints.key) {
          console.error("Base URL or API key is undefined");
          return;
        }

        const trailerEndpoint = `${endpoints.baseUrl}/movie/${id}/videos?api_key=${endpoints.key}`;
        const response = await axios.get(trailerEndpoint);
        const videos = response.data.results;
        const trailer = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        } else {
          console.error("No trailer found");
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    const fetchMovie = async () => {
      try {
        if (!endpoints.baseUrl || !endpoints.key) {
          console.error("Base URL or API key is undefined");
          return;
        }

        const movieEndpoint = `${endpoints.baseUrl}/movie/${id}?api_key=${endpoints.key}`;
        const response = await axios.get(movieEndpoint);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchTrailer();
    fetchMovie();
  }, [id]);

  if (!movie || !trailerUrl) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white pt-20 md:pt-16">
      <div className="w-full max-w-4xl p-4">
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={trailerUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 md:p-8 bg-gradient-to-t from-black w-full mt-4">
          <h1 className="text-3xl md:text-6xl font-bold font-nsans-bold">
            {movie.title}
          </h1>
          <p className="text-sm font-nsans-light">{movie.release_date}</p>
          <p className=" font-nsans-light">{movie.overview}</p>
        </div>
      </div>
      {/* Similar Movies */}
      {/* <div className="p-4 md:p-8"> */}
      {/* Render MovieRow component for similar movies */}
      <SimilarMovies title="Similar Movies" movieId={id} />
      {/* </div> */}
    </div>
  );
};

export default TrailerPage;

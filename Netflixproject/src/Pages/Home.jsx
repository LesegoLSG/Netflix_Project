import React from "react";
import Hero from "../Components/Hero";
import MovieRow from "../Components/MovieRow";
import endpoints from "../Services/movieServices";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieRow title="Upcoming" url={endpoints.upcoming} />
      <MovieRow title="Trending" url={endpoints.trending} />
      <MovieRow title="Top rated" url={endpoints.topRated} />
      <MovieRow title="Comedy" url={endpoints.comedy} />
      <MovieRow title="Popular" url={endpoints.popular} />
    </>
  );
};

export default Home;

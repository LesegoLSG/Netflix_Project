import React from "react";
import Hero from "../Components/Hero";
import MovieRow from "../Components/MovieRow";
import endpoints from "../Services/movieServices";
import TVShows from "../Components/TVShows/TVShows";

const Home = () => {
  return (
    <>
      {/* Hero section displaying a featured movie */}
      <Hero />
      {/* Different rows of movies with various categories */}
      <MovieRow title="Upcoming" url={endpoints.upcoming} />
      <MovieRow title="Trending" url={endpoints.trending} />
      <MovieRow title="Top rated" url={endpoints.topRated} />
      <MovieRow title="Airing Today" url={endpoints.comedy} />
      <MovieRow title="Popular" url={endpoints.popular} />

      <TVShows />
    </>
  );
};

export default Home;

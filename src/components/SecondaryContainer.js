import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-[#141414] w-full">
        <div className="mt-0 md:-mt-64 pl-3 relative z-50 m-auto">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

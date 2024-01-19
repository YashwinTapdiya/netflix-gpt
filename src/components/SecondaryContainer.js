import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-full">
        <div className="-mt-64 pl-4 relative z-50">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Upcoming Moovies"} movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

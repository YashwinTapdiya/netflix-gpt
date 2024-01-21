import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-40 md:w-40 pr-4 m-auto cursor-pointer hover:scale-110">
      <img alt="movie-card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;

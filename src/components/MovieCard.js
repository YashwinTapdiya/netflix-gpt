import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;
  return (
    <div className="sm:w-44 w-36 mr-3 cursor-pointer">
      <img alt="movie-card" src={IMG_CDN_URL + posterPath} />
      <div className="text-white font-bold relative  ">{title}</div>
    </div>
  );
};

export default MovieCard;

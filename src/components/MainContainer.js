import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //this is known as early return
  if(!movies) return;

  const mainMovie = movies[0];
  return (
    <div>
        <VideoTitle/>
        <VideoBackground/>
    </div>
  )
};

export default MainContainer;
 
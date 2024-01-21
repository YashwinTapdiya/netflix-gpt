import React from "react";
import { PiPlayFill } from "react-icons/pi";
import { BsFillInfoCircleFill } from "react-icons/bs";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-28 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 w-1/4">{overview}</p>
      <div className="flex my-4 md:m-0">
        <button className="flex items-center gap-2 bg-white hover:bg-opacity-80 text-black py-1 md:py-2 px-3 md:px-4 text-xl font-semibold rounded-lg">
          <PiPlayFill /> <span>Play</span>
        </button>
        <button className="hidden md:flex items-center gap-2 bg-gray-500 hover:bg-opacity-80 mx-2 text-white py-1 md:py-2 px-3 md:px-4 text-xl font-semibold bg-opacity-50 rounded-lg">
          <BsFillInfoCircleFill />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

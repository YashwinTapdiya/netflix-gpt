import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black font-bold p-3 px-10 text-xl rounded-lg hover:bg-opacity-70">
          Play
        </button>
        <button className="mx-3 bg-gray-500 text-white p-3 px-10 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

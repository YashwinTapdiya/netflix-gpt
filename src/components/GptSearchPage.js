import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACK_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BACK_IMG} alt="back-ground-image" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;

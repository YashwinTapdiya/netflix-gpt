import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    backToHomeOnSignOut: (state) => {
      state.showGptSearch = false;
    },
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    removeMovieResult: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMovieResult,
  removeMovieResult,
  backToHomeOnSignOut,
} = gptSlice.actions;

export default gptSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlaingMovies = action.payload;
        }
    },
});

export const {addNowPlayingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
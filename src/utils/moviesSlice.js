import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopualrMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrandingMovies: (state, action) => {
            state.trandingMovies = action.payload;
        },
        addTopHindiMovies: (state, action) => {
            state.topHindiMovies = action.payload;
        },
        addActionMovies: (state, action) => {
            state.actionMovies = action.payload;
        },
        addComedyMovies: (state, action) => {
            state.comedyMovies = action.payload;
        },
        addHorrorMovies: (state, action) => {
            state.horrorMovies = action.payload;
        },
        addRomanceMovies: (state, action) => {
            state.romanceMovies = action.payload;
        },
        addThirllerMovies: (state, action) => {
            state.thrillerMovies = action.payload;
        },
        addSciFiMovies: (state, action) => {
            state.scifiMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const {
    addNowPlayingMovies,
    addTrailerVideo,
    addPopualrMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addTrandingMovies,
    addTopHindiMovies,
    addActionMovies,
    addComedyMovies,
    addHorrorMovies,
    addRomanceMovies,
    addThirllerMovies,
    addSciFiMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const ticketReducer = createSlice({
  name: "ticket",
  initialState: {
    movieList: [], //TODO: init placeholder
    cinemaMovieList: [],
    cinemaList: [],
    selectedMovie: {},
    selectedMovieImage: "",
    user: {},
  },
  reducers: {
    resetMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    resetCinemaList: (state, action) => {
      state.cinemaList = action.payload;
    },
    resetCinemaMovieList: (state, action) => {
      state.cinemaMovieList = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setLoggedInUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  resetMovieList,
  resetCinemaMovieList,
  resetCinemaList,
  setSelectedMovie,
  setLoggedInUser,
} = ticketReducer.actions;
export default ticketReducer.reducer;

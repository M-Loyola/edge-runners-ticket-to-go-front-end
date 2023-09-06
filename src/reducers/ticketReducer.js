import { createSlice } from "@reduxjs/toolkit";

const ticketReducer = createSlice({
  name: "ticket",
  initialState: {
    movieList: [], //TODO: init placeholder
    cinemaMovieList: [],
    cinemaList: [],
    selectedMovie: {},
    selectedMovieImage: "",
    user: {
      id: 1,
      firstName: "Group 1",
      lastName: "Ex-edgeRunners",
      email: "exedgerunners@ita.com",
      phoneNumber: "09987654321"
    }
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
  },
});

export const { resetMovieList, resetCinemaMovieList, resetCinemaList, setSelectedMovie } =
  ticketReducer.actions;
export default ticketReducer.reducer;

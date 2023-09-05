import { createSlice } from "@reduxjs/toolkit";

const ticketReducer = createSlice({
  name: "ticket",
  initialState: {
    movieList: [], //TODO: init placeholder
    cinemaMovieList: [],
    cinemaList: [],
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
      console.log(state.cinemaMovieList, "Reducer");
    },
  },
});

export const { resetMovieList, resetCinemaMovieList, resetCinemaList } =
  ticketReducer.actions;
export default ticketReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const ticketReducer = createSlice({
  name: "ticket",
  initialState: {
    movieList: [], //TODO: init placeholder
    cinemaMovieList: [],
    cinemaList: [],
    selectedMovie: {},
    selectedMovieImage: "",
    currentDateTime: "",
    user: {
      id: 1,
      firstName: "Group 1",
      lastName: "Ex-edgeRunners",
      email: "exedgerunners@ita.com",
      phoneNumber: "09987654321"
    },
    searchInput: "",
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
    setCurrentDateTime: (state, action) => {
      state.currentDateTime = action.payload;
      },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload
    }
  },
});

export const { resetMovieList, resetCinemaMovieList, resetCinemaList, setSelectedMovie, setSearchInput, setCurrentDateTime } =
  ticketReducer.actions;
export default ticketReducer.reducer;

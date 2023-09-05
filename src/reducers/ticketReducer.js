import { createSlice } from "@reduxjs/toolkit";

const ticketReducer = createSlice({
  name: "ticket",
  initialState: {
    movieList: [], //TODO: init placeholder
  },
  reducers: {
    resetMovieList: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { resetMovieList } = ticketReducer.actions;
export default ticketReducer.reducer;

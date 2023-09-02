import { createSlice } from "@reduxjs/toolkit";

const ticketReducer = createSlice({
   name: "ticket",
   initialState: {
      movieList: [], //TODO: init placeholder
   },
   reducers: {
    //   resetTodoList: (state, action) => {
    //      state.todoList = action.payload;
    //   },
   }
});

// export const { resetTodoList } = todoSlice.actions;
export default ticketReducer.reducer;

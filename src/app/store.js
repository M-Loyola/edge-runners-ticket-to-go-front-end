import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "../reducers/ticketReducer";

export const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});

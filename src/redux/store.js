import { configureStore } from "@reduxjs/toolkit";
import BookmarkReducer from "./BookmarkSlice";

const store = configureStore({
  reducer: {
    Saved: BookmarkReducer, // Nama harus sesuai dengan penggunaan di selector
  },
});

export default store;

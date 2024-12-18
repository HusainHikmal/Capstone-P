import { createSlice } from "@reduxjs/toolkit";

// Baca data dari localStorage saat pertama kali aplikasi dimuat
const initialState = JSON.parse(localStorage.getItem("savedBookmarks")) || [];

const BookmarkSlice = createSlice({
  name: "Saved",
  initialState,
  reducers: {
    ADD_NEWS: (state, action) => {
      const exists = state.some((item) => item.title === action.payload.title);
      if (!exists) {
        state.push(action.payload);
        localStorage.setItem("savedBookmarks", JSON.stringify(state));
      }
    },
    
    REMOVE_NEWS: (state, action) => {
      const updatedState = state.filter(
        (item) => item.title !== action.payload
      );
      localStorage.setItem("savedBookmarks", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});







export const { ADD_NEWS, REMOVE_NEWS } = BookmarkSlice.actions;
export default BookmarkSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";

const intialMovieState = {
  availableList: [],
  favouriteList: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState: intialMovieState,
  reducers: {
    replaceList(state, action) {
      state.availableList = action.payload;
    },
    toggleFavourite(state, action) {
      const movie = state.availableList.find(
        (item) => item.id === action.payload.id
      );
      if (movie.isLiked) {
        state.favouriteList = state.favouriteList.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favouriteList.push(movie);
      }

      state.availableList = state.availableList.map((item) => {
        if (item.id === action.payload.id) {
          item.isLiked = !item.isLiked;
          return item;
        }
        return item;
      });
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;

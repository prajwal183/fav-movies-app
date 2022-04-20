import { createSlice } from "@reduxjs/toolkit";
import Movie from "../models/movie";

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
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;

import { configureStore } from "@reduxjs/toolkit";

import movieSlice from "./reducers";

const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

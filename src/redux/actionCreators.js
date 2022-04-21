import Movie from "../models/movie";
import { movieActions } from "../redux/reducers";

export const fetchMovies = (url, token) => {
  return async (dispatch) => {
    // any async code you want!
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error("Server Down!");
      }

      const resData = await response.json();

      const loadedList = [];

      resData.movies.forEach((item) => {
        loadedList.push(
          new Movie(
            item.backdrop,
            item.cast,
            item.classification,
            item.director,
            item.genres,
            item.id,
            item.imdb_rating,
            item.length,
            item.overview,
            item.poster,
            item.released_on,
            item.slug,
            item.title,
            false
          )
        );
      });

      dispatch(movieActions.replaceList(loadedList));
    } catch (err) {
      throw err;
    }
  };
};

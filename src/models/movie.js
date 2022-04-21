class Movie {
  constructor(
    backdrop,
    cast,
    classification,
    director,
    genres,
    id,
    imdb_rating,
    length,
    overview,
    poster,
    released_on,
    slug,
    title,
    isLiked
  ) {
    this.backdrop = backdrop;
    this.cast = cast;
    this.classification = classification;
    this.director = director;
    this.genres = genres;
    this.id = id;
    this.imdb_rating = imdb_rating;
    this.length = length;
    this.overview = overview;
    this.poster = poster;
    this.released_on = released_on;
    this.slug = slug;
    this.title = title;
    this.isLiked = isLiked;
  }
}

export default Movie;

import api from "./api";

export const getMovies = () => {
  return api.get("/movies");
};
export const getMoviesInCinema = () => {
  return api.get(`/cinemas`);
};
export const getMovieDetailsInCinema = (cinemaMovieId) => {
  return api.get(`/movies/${cinemaMovieId}/reservationDetails`);
}

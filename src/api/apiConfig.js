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
export const creatNewOrder = (orderDetails) => {
  return api.post(`/orders`, orderDetails);
}

export const updateOccupiedSeats = (cinemaMovieId, newReservedSeats) => {
  return api.put(`/movies/${cinemaMovieId}/updateOccupiedSeats`, newReservedSeats);
}

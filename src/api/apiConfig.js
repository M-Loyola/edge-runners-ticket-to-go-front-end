import api from "./api";

export const getMovies = () => {
  return api.get("/movies");
};
export const getMoviesInCinema = () => {
  return api.get(`/cinemas`);
};
export const getMovieDetailsInCinema = (movieId, cinemaId) => {
  return api.get(`/movies/${movieId}/${cinemaId}/reservationDetails`);
};
export const creatNewOrder = (orderDetails) => {
  return api.post(`/orders`, orderDetails);
};

export const updateOccupiedSeats = (cinemaMovieId, newReservedSeats) => {
  return api.put(`/movies/${cinemaMovieId}/occupiedSeats`, newReservedSeats);
};
export const signIn = (emailAndPassword) => {
  return api.post("/users/login", emailAndPassword);
};
export const signUp = (user) => {
  return api.post("/users/createUser", user);
};

export const getUserOrderList = (userId) => {
  return api.get(`/users/${userId}/orders`);
};

export const updateOrderPaidStatus = (orderNumber) => {
  return api.put(`/orders/${orderNumber}`);
};

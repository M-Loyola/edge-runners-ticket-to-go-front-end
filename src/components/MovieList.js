import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/MovieList.css";
import LandingDropdown from "./LandingDropdown";

import { useDispatch, useSelector } from "react-redux";
import { getMoviesInCinema } from "../api/apiConfig";
import { resetCinemaMovieList } from "../reducers/ticketReducer";

export const MovieList = () => {
  const [locationValue, setLocationValue] = useState("Manila");

  const dispatch = useDispatch();

  const handleLocationChange = (location) => {
    setLocationValue(location.value);
  };
  useEffect(() => {
    intializeMovieByLocation();
  }, []);
  const intializeMovieByLocation = async () => {
    const moviesByCinema = await getMoviesInCinema();
    dispatch(resetCinemaMovieList(moviesByCinema.data));
  };
  const moviesByLocation = useSelector((state) => state.ticket.cinemaMovieList);
  return (
    <div>
      <h1 className="movieList-title">
        Currently Screening: Must-See Movies!
      </h1>
      <LandingDropdown
        onLocationChange={(location) => handleLocationChange(location)}
      />
      <Row gutter={16} className="movieList-rowOne">
        {moviesByLocation
          .filter((cinema) => cinema.location === locationValue)
          .map((selectedCinema) =>
            selectedCinema.movieList
              .filter((movie) => movie.isShowing)
              .map((movie) => (
                <Col key={movie.id} xs={4} lg={4}>
                  <NavLink to={`/MovieLink${movie.id}`}>
                    <div className="movieList-holder">
                      <img src={movie.image} alt={movie.title} />
                      <p>{movie.title}</p>
                      <p>{selectedCinema.name}</p>
                    </div>
                  </NavLink>
                </Col>
              ))
          )}
      </Row>
    </div>
  );
};

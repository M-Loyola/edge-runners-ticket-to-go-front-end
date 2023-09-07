import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/MovieList.css";
import LandingDropdown from "./LandingDropdown";

import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailsInCinema, getMoviesInCinema } from "../api/apiConfig";
import { resetCinemaMovieList, setSearchInput, setSelectedMovie } from "../reducers/ticketReducer";
  resetCinemaMovieList,
  setSelectedMovie,
} from "../reducers/ticketReducer";

export const MovieList = () => {
  const [locationValue, setLocationValue] = useState("Manila");
  const dispatch = useDispatch();
  const selectorSearchInput = useSelector(state => state.ticket.searchInput);
  let hasMatch = false;

  const handleLocationChange = (location) => {
    setLocationValue(location.value);
    dispatch(setSearchInput(""));
  };
  useEffect(() => {
    intializeMovieByLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const intializeMovieByLocation = async () => {
    const moviesByCinema = await getMoviesInCinema();
    dispatch(resetCinemaMovieList(moviesByCinema.data));
  };
  const handleClickMovie = (movie) => {
    getMovieDetailsInCinema(movie.id).then((response) => {
      const data = { ...response.data, image: movie.image };
      dispatch(setSelectedMovie(data));
    });
  };
  const moviesByLocation = useSelector((state) => state.ticket.cinemaMovieList);
  const signedInData = localStorage.getItem("user");
  const path = signedInData === null ? "/accountPage" : "/reservation";
  return (
    <div>
      <div className="movieList-container">
        <h1 className="movieList-title">NOW SHOWING!</h1>
        <LandingDropdown
          onLocationChange={(location) => handleLocationChange(location)}
        />
      </div>
      <Row gutter={16} className="movieList-rowOne">
        {moviesByLocation
          .filter((cinema) => cinema.location === locationValue)
          .map((selectedCinema) =>
            selectedCinema.movieList
              .filter((movie) => movie.isShowing)
              .map((movie) => {
                if (movie.title.includes(selectorSearchInput)) {
                  hasMatch = true;
                  return (
                    <Col key={movie.id} xs={4} lg={4}>
                  <NavLink onClick={() => handleClickMovie(movie)} to={path}>
                        <div className="movieList-holder">
                          <img src={movie.image} alt={movie.title} />
                          <p>{movie.title}</p>
                          <p>{selectedCinema.name}</p>
                        </div>
                      </NavLink>
                    </Col>
                  ) 
                }
              })
          )}
          {!hasMatch && (<div style={{textAlign: 'center'}}>No movies matched</div>)}
      </Row>
    </div>
  );
};

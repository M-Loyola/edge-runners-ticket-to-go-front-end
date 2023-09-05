import { Col, Row } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../assets/data/movieData";
import "../assets/styles/MovieList.css";
import LandingDropdown from "./LandingDropdown";

export const MovieList = () => {
  const [locationValue, setLocationValue] = useState("Manila");

  const handleLocationChange = (location) => {
    setLocationValue(location.value);
  }

  return (
    <div>
      <div className="currentMovie-container">
        <h1 className="movieList-title">Currently Screening: Must-See Movies!</h1>
        <LandingDropdown onLocationChange={location => handleLocationChange(location)} />
      </div>
      <Row gutter={16} className="movieList-rowOne">
        {data.filter((cinema) => cinema.location === locationValue).map((selectedCinema) =>
          selectedCinema.movies.map((movie) => (
            <Col key={movie.id} xs={4} lg={4}>
              <NavLink to={`/MovieLink${movie.id}`}>
                <div className="movieList-holder">
                  <img src={movie.imageUrl} alt={movie.title} />
                  <p>{movie.title}</p>
                  <p>{movie.location}</p>
                </div>
              </NavLink>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

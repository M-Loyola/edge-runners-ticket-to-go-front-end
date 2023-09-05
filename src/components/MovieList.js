import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import movieData from "../assets/data/movieData";
import "../assets/styles/MovieList.css";
import LandingDropdown from "./LandingDropdown";

export const MovieList = () => {
  return (
    <div>
      <div className="currentMovie-container">
        <h1 className="movieList-title">Currently Screening: Must-See Movies!</h1>
        <LandingDropdown />
      </div>
      <Row gutter={16} className="movieList-rowOne">
        {movieData.map((movie) => (
          <Col key={movie.id} xs={4} lg={4}>
            <NavLink to={`/MovieLink${movie.id}`}>
              <div className="movieList-holder">
                <img src={movie.imageUrl} alt={movie.title} />
                <p>{movie.title}</p>
                <p>{movie.location}</p>
              </div>
            </NavLink>
          </Col>
        ))}
      </Row>
    </div>
  );
};

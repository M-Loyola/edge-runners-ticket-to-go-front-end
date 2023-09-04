import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import "../assets/styles/MovieList.css";
import movieData from "./movieData";

export const MovieList = () => {
  return (
    <div>
      <h1 className="movieList-title">Currently Screening: Must-See Movies!</h1>
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

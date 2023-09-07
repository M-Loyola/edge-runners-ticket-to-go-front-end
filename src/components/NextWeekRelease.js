import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
import { getMovies } from "../api/apiConfig";
import "../assets/styles/Slide.css";
import { resetMovieList } from "../reducers/ticketReducer";
import { Slide } from "./Slide";
import { Spin } from "antd";

export const NextWeekRelease = () => {
  const [isSpinning, setIsSpinning] = useState(true);
  const ref = React.useRef(StackedCarousel);

  const dispatch = useDispatch();

  const getAllMovies = async () => {
    const allMovies = await getMovies();
    dispatch(resetMovieList(allMovies.data));
  };

  const upComingList = useSelector((state) =>
    state.ticket.movieList.filter((movie) => !movie.isShowing)
  );
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    if (isMount) {
      getAllMovies();
    }

    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
    setInterval(stuff, 5000);
    return () => {
      setIsMount(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function stuff() {
    ref.current?.goNext();
  }

  return (
    <Spin
      tip="Loading next week's releases."
      spinning={isSpinning}
      size="large"
    >
      <div className="carousel-banner">
        <h1 className="banner-text">NEXT WEEK'S RELEASE!</h1>
      </div>
      <div className="card">
        <div
          style={{ width: "100%", position: "relative", userSelect: "none" }}
        >
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Slide}
                  slideWidth={300}
                  carouselWidth={width}
                  data={upComingList}
                  maxVisibleSlide={3}
                  disableSwipe={false}
                  transitionTime={450}
                />
              );
            }}
          />
        </div>
      </div>
    </Spin>
  );
};

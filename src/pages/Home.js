import React, { useEffect, useState } from "react";
import * as apiConfig from "../api/apiConfig";
import { MovieList } from "../components/MovieList";
import { NextWeekRelease } from "../components/NextWeekRelease";

export const Home = () => {
  const [showNextWeekRelease, setShowNextWeekRelease] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await apiConfig.getMovies();

      // After fetching data, set a timeout to show NextWeekRelease component after 2 seconds
      setTimeout(() => {
        setShowNextWeekRelease(true);
      }, 500); // Adjust the delay time in milliseconds as needed
    };

    fetchData();
  }, []);

  return (
    <>
      <MovieList />
      {showNextWeekRelease && <NextWeekRelease />}
    </>
  );
};
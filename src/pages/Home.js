import React, { useEffect, useState } from "react";
import * as apiConfig from "../api/apiConfig";
import { MovieList } from "../components/MovieList";
import { NextWeekRelease } from "../components/NextWeekRelease";
import CinemaSeatingModal from "../components/CinemaSeatingModal";

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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* {showNextWeekRelease && <NextWeekRelease />} */}
      <button onClick={handleOpenModal}>Open Cinema Seating</button>

      <MovieList />
      <CinemaSeatingModal visible={isModalVisible} onCancel={handleCloseModal} />
    </>
  );
};

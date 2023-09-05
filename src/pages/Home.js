import { useEffect } from "react";
import * as apiConfig from "../api/apiConfig";
import { MovieList } from "../components/MovieList";
import { NextWeekRelease } from "../components/NextWeekRelease";
export const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      await apiConfig.getMovies();
    };
    fetchData();
    console.log(fetchData);
  }, []);
  return (
    <>
      <NextWeekRelease />
      <MovieList />
    </>
  );
};

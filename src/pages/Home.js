import { useEffect } from "react";
import * as apiConfig from "../api/apiConfig";
import { MovieList } from "../components/MovieList";
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
      <MovieList/>
    </>
  );
};

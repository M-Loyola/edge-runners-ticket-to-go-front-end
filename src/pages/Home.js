import { useEffect } from "react";
import * as apiConfig from "../api/apiConfig";
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
      <div>This is a home page test tes test</div>
    </>
  );
};

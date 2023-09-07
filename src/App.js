import { Outlet, Routes } from "react-router-dom";
import "./App.css";
import MenuNav from "./components/MenuNav";
import { getMovies } from "./api/apiConfig";
import { useDispatch } from "react-redux";
import { resetMovieList } from "./reducers/ticketReducer";
import { useEffect } from "react";
import { AccountPage } from "./pages/AccountPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllMovies();
  });
  const getAllMovies = async () => {
    const allMovies = await getMovies();
    dispatch(resetMovieList(allMovies.data));
  };
  return (
    <>
      <MenuNav />
      <Routes path="/accountPage" element={<AccountPage />}/>
      <Outlet />
    </>
  );
};

export default App;

import { Outlet, Routes } from "react-router-dom";
import "./App.css";
import MenuNav from "./components/MenuNav";
import { getMovies } from "./api/apiConfig";
import { useDispatch } from "react-redux";
import { resetMovieList, setLoggedInUser } from "./reducers/ticketReducer";
import { useEffect } from "react";
import { AccountPage } from "./pages/AccountPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    dispatch(setLoggedInUser(localUser));
    getAllMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getAllMovies = async () => {
    const allMovies = await getMovies();
    dispatch(resetMovieList(allMovies.data));
  };
  return (
    <>
      <MenuNav />
      <Routes path="/accountPage" element={<AccountPage />} />
      <Outlet />
    </>
  );
};

export default App;

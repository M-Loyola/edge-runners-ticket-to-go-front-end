import { Outlet } from "react-router-dom";
import "./App.css";
import MenuNav from "./components/MenuNav";

const App = () => {
  return (
    <>
      <MenuNav/>
      <Outlet />
    </>
  );
}

export default App;

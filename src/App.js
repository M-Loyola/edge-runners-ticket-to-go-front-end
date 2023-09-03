import { Menu } from "antd";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import * as apiConfig from "./api/apiConfig";

const menuItems = [
  { key: "home", label: "Home", link: "/" },
  // { key: "done", label: "Done List", link: "/done" },
  // { key: "help", label: "Help", link: "/help" },
];
//test fetch api(backend integration)
const fetchData = async () => {
  await apiConfig.getMovies();
}

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Menu mode="horizontal" className="nav-bar">
        {menuItems.map((item) => (
          <Menu.Item key={item.key}>
            <NavLink to={item.link}>{item.label}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
      <Outlet />
    </>
  );
}

export default App;

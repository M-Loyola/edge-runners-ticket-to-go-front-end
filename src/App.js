import { Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import axios from "axios";
import api from "./api/api";
import { useEffect } from "react";

const menuItems = [
  { key: "home", label: "Home", link: "/" },
  // { key: "done", label: "Done List", link: "/done" },
  // { key: "help", label: "Help", link: "/help" },
];

const fetchData = async () => {
  const fetch = await api.get("/movies");
  console.log(fetch);
};

function App() {
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

import React, { useState } from "react";
import { AutoComplete, Input, Menu } from "antd";
import { EyeOutlined, HomeFilled } from "@ant-design/icons";
import { NavLink, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import { ReactComponent as LoggedInAccountIcon } from "../assets/icons/logged-in-account.svg";
import "../assets/styles/MenuNav.css";
import { setSearchInput } from "../reducers/ticketReducer";

const MenuNav = () => {
  const signedInData = localStorage.getItem("user");

  const menuItems = signedInData !== null
    ? [
      {
        key: "home",
        label: "Home",
        icon: <HomeFilled />,
        link: "/",
      },
      {
        key: "view",
        label: "View Reservation",
        icon: <EyeOutlined />,
        link: "/view-reservation",
      },
    ]
    : [
      {
        key: "home",
        label: "Home",
        icon: <HomeFilled />,
        link: "/",
      },
      {
        key: "view",
        label: "View Reservation",
        icon: <EyeOutlined />,
        link: "/AccountPage",
      },
    ];

  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;
  const [searchValue, setSearchValue] = useState("");
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

  const handleSearchChange = (value) => {
    setSearchValue(value);

    // Example: Fetch autocomplete suggestions from an API
    // Replace this with your own data source logic
    // For now, let's assume you have an array of suggestions
    const suggestions = [
      "spider man",
      "spider man",
      "John Wick",
      // Add more suggestions here
    ];

    // Filter suggestions based on the current search value
    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setAutocompleteSuggestions(filteredSuggestions);
  };

  const onSearch = () => {
    dispatch(setSearchInput(searchValue.trim()));
    setSearchValue("");
  };

  return (
    <div className="header-container">
      <div className="menu-container">
        <Menu
          defaultSelectedKeys={[currentPath]}
          defaultOpenKeys={[currentPath]}
          mode="horizontal"
          className="nav-bar"
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <NavLink to={item.link}>{item.label}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <div className="ticket-container">
        <div className="ticket">Ticket To Go</div>
      </div>
      <div className="search-container">
        <AutoComplete
          placeholder="input search text"
          className="search-input"
          allowClear
          size="large"
          value={searchValue}
          onChange={handleSearchChange}
          dataSource={autocompleteSuggestions.map((item) => ({ value: item }))}
        >
          <Input
            suffix={
              <button className="custom-search-button" onClick={onSearch}>
                Search
              </button>
            }
          />
        </AutoComplete>
        {signedInData === null ? (
          <Link to="/accountPage" className="account-link">
            <AccountIcon className="account-icon" />
          </Link>
        ) : (
          <Link to="/userAccount" className="account-link">
            <LoggedInAccountIcon className="account-icon" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuNav;

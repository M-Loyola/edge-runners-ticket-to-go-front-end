import { EyeOutlined, HomeFilled } from "@ant-design/icons";
import { AutoComplete, Input, Menu } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  const cinemaList = useSelector((state) => state.ticket.cinemaMovieList)

  const movieTitleList = [].concat(
    ...cinemaList.map((cinema) =>
      cinema.movieList.map((movie) => ({ id: movie.id, title: movie.title }))
    )
  );

  const handleSearchChange = (value) => {
    setSearchValue(value);
    const suggestions = movieTitleList.map(movie => movie.title);
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
          options={autocompleteSuggestions.map((item) => ({ value: item }))}
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

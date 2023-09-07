import { EyeOutlined, HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import "../assets/styles/MenuNav.css";
import { setSearchInput } from "../reducers/ticketReducer";

const menuItems = [
    {
        key: "home",
        label: "Home",
        icon: <HomeFilled />,
        link: "/"
    },
    {
        key: "view",
        label: "View Reservation",
        icon: <EyeOutlined />,
        link: "/view-reservation"
    },
];
const MenuNav = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const currentPath = location.pathname;
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const onSearch = () => {
        dispatch(setSearchInput(searchValue.trim()));
        setSearchValue("");
    };
    return (
        <div className="header-container">
            <div className="menu-container">
                <Menu defaultSelectedKeys={[currentPath]} defaultOpenKeys={[currentPath]} mode="horizontal" className="nav-bar">
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
                <Search
                    placeholder="input search text"
                    className="search-input"
                    allowClear
                    enterButton={
                        <button className="custom-search-button">Search</button>
                    }
                    size="large"
                    value={searchValue}
                    onChange={handleSearchChange}
                    onSearch={onSearch}
                />
                <AccountIcon className="account-icon" />
            </div>
        </div>
    );
}

export default MenuNav;

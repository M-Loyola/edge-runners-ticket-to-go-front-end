import { EyeOutlined, HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import Search from "antd/es/input/Search";
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import { ReactComponent as CinemaIcon } from "../assets/icons/cinema.svg";
import "../assets/styles/MenuNav.css";

const menuItems = [
    {
        key: "home",
        label: "Home",
        icon: <HomeFilled />,
        link: "/"
    },
    {
        key: "cinemas",
        label: "Cinemas",
        icon: <CinemaIcon />,
        link: "/cinemas"
    },
    {
        key: "movieList",
        label: "Add Movie List",
        icon: <EyeOutlined />,
        link: "/movieList"
    },
];
const MenuNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const onSearch = (value) => console.log(value);
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
                    onSearch={onSearch}
                />
                <AccountIcon className="account-icon" />
            </div>
        </div>
    );
}

export default MenuNav;

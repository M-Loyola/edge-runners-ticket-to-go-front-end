import { EyeOutlined, HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import Search from "antd/es/input/Search";
import { NavLink, useLocation, Link } from "react-router-dom";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import "../assets/styles/MenuNav.css";

const menuItems = [
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
];
const MenuNav = () => {
  const signedInData = localStorage.getItem("user");
  const location = useLocation();
  const currentPath = location.pathname;
  const onSearch = (value) => console.log(value);
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
        <Search
          placeholder="input search text"
          className="search-input"
          allowClear
          enterButton={<button className="custom-search-button">Search</button>}
          size="large"
          onSearch={onSearch}
        />
        {signedInData === null ? (
          <Link to="/accountPage" className="account-link">
            <AccountIcon className="account-icon" />
          </Link>
        ) : (
          <Link to="/userAccount" className="account-link">
            <AccountIcon className="account-icon" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuNav;

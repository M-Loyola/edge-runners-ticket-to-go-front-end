import { EyeOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
    { 
        key: "home", 
        label: "Home", 
        icon: <HomeOutlined />,
        link: "/" 
    },
    { 
        key: "cinemas", 
        label: "Cinemas", 
        link: "/cinemas" 
    },
    { 
        key: "help", 
        label: "Add Movie List", 
        icon: <EyeOutlined />,
        link: "/help" 
    },
];
const MenuNav = () => {
    const [current] = useState('home');
    return (
        <Menu selectedKeys={[current]} mode="horizontal" className="nav-bar">
            {menuItems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                    <NavLink to={item.link}>{item.label}</NavLink>
                </Menu.Item>
            ))}
        </Menu>
    );
}

export default MenuNav;
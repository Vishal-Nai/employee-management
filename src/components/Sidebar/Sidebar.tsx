import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";

interface MenuNode {
  title: string;
  link: string;
  key: string;
}

interface Props {
  menuOptions: MenuNode[];
}

export const Sidebar = (props: Props) => {
  const { menuOptions } = props;
  const location = useLocation();
  return (
    <Layout.Sider className="sidebar-container" width="240px">
      {/* <div className="close">
        <span>X</span>
      </div> */}
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <Menu
        defaultSelectedKeys={[
          location.pathname === "/dashboard"
            ? "users"
            : location.pathname.split("/")[1],
        ]}
        selectedKeys={[location.pathname]}
      >
        {menuOptions.map((menu: MenuNode) => (
          <Menu.Item key={menu.key}>
            <Link to={menu.link}>{menu.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

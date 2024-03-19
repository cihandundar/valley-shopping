import { Layout, Menu, Drawer, Button } from "antd";
import PropTypes from "prop-types";
import {
  UserOutlined,
  LaptopOutlined,
  RollbackOutlined,
  DashboardOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Sider, Header, Content } = Layout;

const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.role : null;
};

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const userRole = getUserRole();
  const [visible, setVisible] = useState(false);

  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => {
        navigate(`/admin`);
      },
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Categories",
      path: "/",
      children: [
        {
          key: "3",
          label: "Category List",
          path: "/admin/categories",
          onClick: () => {
            navigate(`/admin/categories`);
          },
        },
        {
          key: "4",
          label: "New Category",
          path: "/admin/categories/create",
          onClick: () => {
            navigate("/admin/categories/create");
          },
        },
      ],
    },
    {
      key: "5",
      icon: <LaptopOutlined />,
      label: "Product",
      path: "/",
      children: [
        {
          key: "6",
          label: "Product List",
          path: "/admin/products",
          onClick: () => {
            navigate(`/admin/products`);
          },
        },
        {
          key: "7",
          label: "New Product",
          path: "/admin/products/create",
          onClick: () => {
            navigate("/admin/products/create");
          },
        },
      ],
    },
    {
      key: "11",
      icon: <UserOutlined />,
      label: "Users List",
      path: "/admin/users",
      onClick: () => {
        navigate(`/admin/users`);
      },
    },

    {
      key: "13",
      icon: <RollbackOutlined />,
      label: "Go Home Page",
      onClick: () => {
        window.location.href = "/";
      },
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ position: "fixed", top: "15px", left: "15px" }}
      >
        Menü
      </Button>
      <Drawer
        title="Admin Panel"
        placement="left"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          {menuItems.map((item) => {
            if (item.children) {
              return (
                <Menu.SubMenu
                  key={item.key}
                  icon={item.icon}
                  title={item.label}
                >
                  {item.children.map((child) => (
                    <Menu.Item key={child.key} onClick={child.onClick}>
                      {child.label}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key} icon={item.icon} onClick={item.onClick}>
                {item.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </Drawer>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;

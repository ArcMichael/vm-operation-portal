import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import SiderCommonComponent_SMC from "./LayoutSiderComponent_SMC";
import SiderCommonComponent_GYM from "./LayoutSiderComponent_GYM";

const SiderCommonComponent: React.FC = () => {
  return (
    <Layout.Sider>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
        ]}
      />
    </Layout.Sider>
  );
};

export default SiderCommonComponent;

export { SiderCommonComponent_SMC, SiderCommonComponent_GYM };

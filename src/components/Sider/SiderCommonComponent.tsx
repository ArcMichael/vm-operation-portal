import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

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
            icon: <UserOutlined rev />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined rev />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined rev />,
            label: "nav 3",
          },
        ]}
      />
    </Layout.Sider>
  );
};

export default SiderCommonComponent;

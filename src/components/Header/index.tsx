import React from "react";
import { Layout, theme } from "antd";

const HeaderCommon: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout.Header
      style={{ padding: 0, background: colorBgContainer }}
    ></Layout.Header>
  );
};

export default HeaderCommon;

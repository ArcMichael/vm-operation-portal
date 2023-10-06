import React from "react";
import { Layout, theme } from "antd";
import HeaderCommonComponent_Button from "./HeaderCommonComponent_Button";
import HeaderCommonComponent_SMC from "./HeaderCommonComponent_SMC";

const HeaderCommonComponent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout.Header
      style={{ padding: 0, background: colorBgContainer }}
    ></Layout.Header>
  );
};

export default HeaderCommonComponent;

export { HeaderCommonComponent_Button, HeaderCommonComponent_SMC };

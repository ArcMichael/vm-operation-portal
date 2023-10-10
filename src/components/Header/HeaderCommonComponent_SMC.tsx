import React from "react";
import { Layout, theme } from "antd";
import { DropdownCommonComponent_Header } from "../Molecular";

const HeaderCommonComponent_SMC: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{ padding: 0, background: colorBgContainer, textAlign: "right" }}
    >
      <DropdownCommonComponent_Header />
    </Layout.Header>
  );
};

export default HeaderCommonComponent_SMC;

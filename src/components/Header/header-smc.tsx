import React from "react";
import { Layout, theme } from "antd";
import MolecularDropdownHeader from "@/components/Molecular/Dropdown/molecular-dropdown-header";

const HeaderSmc: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{ padding: 0, background: colorBgContainer, textAlign: "right" }}
    >
      <MolecularDropdownHeader />
    </Layout.Header>
  );
};

export default HeaderSmc;

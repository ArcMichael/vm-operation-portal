import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { AppSessionContext } from "@/lib";
import configMenu from "@/configs";

const SiderCommonComponent_SMC: React.FC = () => {
  const { onActionSmc, setonActionSmc } = useContext(AppSessionContext);

  return (
    <Layout.Sider
      collapsible
      collapsed={onActionSmc}
      onCollapse={(value) => setonActionSmc(value)}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={configMenu}
      />
    </Layout.Sider>
  );
};

export default SiderCommonComponent_SMC;

import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { AppSessionContext } from "@/lib";
import { configMenu } from "@/configs";

const SiderCommonComponent_SMC: React.FC = () => {
  const { onActionSmc, setonActionSmc } = useContext(AppSessionContext);

  return (
    <Layout.Sider
      collapsible
      collapsed={onActionSmc.onCollapse}
      onCollapse={(value) =>
        setonActionSmc({ ...onActionSmc, onCollapse: value })
      }
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={onActionSmc.onDefaultOpenKeys || ["1"]}
        defaultOpenKeys={onActionSmc.onDefaultOpenKeys || ["1"]}
        items={configMenu}
        onOpenChange={(openKeys) =>
          setonActionSmc({ ...onActionSmc, onDefaultOpenKeys: openKeys })
        }
        onClick={(info) =>
          setonActionSmc({ ...onActionSmc, onDefaultOpenKeys: info.keyPath })
        }
      />
    </Layout.Sider>
  );
};

export default SiderCommonComponent_SMC;

import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { configMenu } from "@/configs";
import { SessionContextPortal } from "@/store/SessionContext";

const SiderCommonComponent_SMC: React.FC = () => {
  const { onActionPortal, setonActionPortal } =
    useContext(SessionContextPortal);

  return (
    <Layout.Sider
      collapsible
      collapsed={onActionPortal?.onCollapse || false}
      onCollapse={(value) =>
        setonActionPortal({ ...onActionPortal, onCollapse: value })
      }
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={onActionPortal?.onDefaultOpenKeys || ["1"]}
        defaultOpenKeys={onActionPortal?.onDefaultOpenKeys || ["1"]}
        items={configMenu}
        onOpenChange={(openKeys) =>
          setonActionPortal({ ...onActionPortal, onDefaultOpenKeys: openKeys })
        }
        onClick={(info) =>
          setonActionPortal({
            ...onActionPortal,
            onDefaultOpenKeys: info.keyPath,
          })
        }
      />
    </Layout.Sider>
  );
};

export default SiderCommonComponent_SMC;

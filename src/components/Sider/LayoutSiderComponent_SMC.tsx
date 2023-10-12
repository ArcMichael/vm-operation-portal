import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { SessionContextPortal } from "@/store/SessionContext";
import { routeConfigs, smcConvertRouteToMenu } from "@/configs/menus/smc";

const SiderCommonComponent_SMC: React.FC = () => {
  const { onActionPortal, setonActionPortal } =
    useContext(SessionContextPortal);

  const menuItems = routeConfigs.map((route, index) =>
    smcConvertRouteToMenu(
      route,
      `${index + 1}`,
      onActionPortal,
      setonActionPortal
    )
  );

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
        selectedKeys={onActionPortal?.onDefaultOpenKeys || ["1"]}
        openKeys={onActionPortal?.onDefaultOpenKeys || ["1"]}
        onOpenChange={(openKeys: React.Key[]) =>
          setonActionPortal({
            ...onActionPortal,
            onDefaultOpenKeys: openKeys as string[],
          })
        }
        onClick={(info) =>
          setonActionPortal({
            ...onActionPortal,
            onDefaultOpenKeys: info.keyPath as string[],
          })
        }
        items={menuItems}
      ></Menu>
    </Layout.Sider>
  );
};

export default SiderCommonComponent_SMC;

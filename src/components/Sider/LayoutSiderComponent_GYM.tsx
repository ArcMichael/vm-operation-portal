import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { configGymMenu } from "@/configs";
import { SessionContextService } from "@/store/SessionContext";

const SiderCommonComponent_GYM: React.FC = () => {
  const { onActionService, setonActionService } = useContext(
    SessionContextService
  );

  return (
    <Layout.Sider
      collapsed={onActionService?.onCollapse || false}
      onCollapse={(value) =>
        setonActionService({ ...onActionService, onCollapse: value })
      }
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={onActionService?.onDefaultOpenKeys || ["1"]}
        defaultOpenKeys={onActionService?.onDefaultOpenKeys || ["1"]}
        items={configGymMenu}
        onOpenChange={(openKeys) =>
          setonActionService({
            ...onActionService,
            onDefaultOpenKeys: openKeys,
          })
        }
        onClick={(info) =>
          setonActionService({
            ...onActionService,
            onDefaultOpenKeys: info.keyPath,
          })
        }
      />
    </Layout.Sider>
  );
};

export default SiderCommonComponent_GYM;

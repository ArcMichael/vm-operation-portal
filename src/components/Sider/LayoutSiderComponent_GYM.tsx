import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { SessionContextService } from "@/store/SessionContext";
import { menuGymPages } from "@/configs";

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
        items={menuGymPages || []}
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

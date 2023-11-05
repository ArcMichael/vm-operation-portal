import React, { useContext } from "react";
import { Button, Layout, theme } from "antd";
import { SessionContextService } from "@/store/SessionContext";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import MolecularDropdownHeader from "@/components/Molecular/Dropdown/molecular-dropdown-header";

const HeaderGym: React.FC = () => {
  const { onActionService, setonActionService } = useContext(
    SessionContextService
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{ padding: 0, background: colorBgContainer, textAlign: "right" }}
    >
      <Button
        type="text"
        icon={
          onActionService?.onCollapse ? (
            <MenuUnfoldOutlined {...({} as any)} />
          ) : (
            <MenuFoldOutlined {...({} as any)} />
          )
        }
        onClick={() =>
          setonActionService({
            ...onActionService,
            onCollapse: !onActionService.onCollapse,
          })
        }
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
          float: "left",
        }}
      />
      <MolecularDropdownHeader />
    </Layout.Header>
  );
};

export default HeaderGym;

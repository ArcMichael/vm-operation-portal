import React, { useContext } from "react";
import { Button, Layout, theme } from "antd";
import { DropdownCommonComponent_Header } from "../Molecular";
import { SessionContextService } from "@/store/SessionContext";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const HeaderCommonComponent_GYM: React.FC = () => {
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
          onActionService.onCollapse ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined />
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
      <DropdownCommonComponent_Header />
    </Layout.Header>
  );
};

export default HeaderCommonComponent_GYM;

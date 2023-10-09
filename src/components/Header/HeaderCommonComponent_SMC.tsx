import React, { useContext } from "react";
import { Button, Dropdown, Layout, MenuProps, Space, theme } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AppSessionContext } from "@/lib";

const HeaderCommonComponent: React.FC = () => {
  const { data: session, status } = useSession();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { onActionSmc, setonActionSmc } = useContext(AppSessionContext);

  const configHeader: MenuProps["items"] = [
    {
      label: <a onClick={() => signOut()}>Sign Out</a>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link
          onClick={() =>
            setonActionSmc({
              ...onActionSmc,
              onDefaultOpenKeys: ["2.1", "2"],
              onDefaultSelectedKeys: ["2.1", "2"],
            })
          }
          href="/user/profile"
        >
          User Profile
        </Link>
      ),
      key: "1",
    },
  ];

  return (
    <Layout.Header
      style={{ padding: 0, background: colorBgContainer, textAlign: "right" }}
    >
      <Dropdown menu={{ items: configHeader }} trigger={["click"]} arrow>
        <Button size="middle" style={{ marginRight: "2vh" }}>
          <Space>
            {status === "authenticated" ? session.user?.name : ""}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Layout.Header>
  );
};

export default HeaderCommonComponent;

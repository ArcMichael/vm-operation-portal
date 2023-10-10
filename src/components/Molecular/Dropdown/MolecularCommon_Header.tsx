import { AppSessionContext } from "@/lib";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext } from "react";

const DropdownCommonComponent_Header: React.FC = () => {
  const { data: session, status } = useSession();

  const { onActionSmc, setonActionSmc } = useContext(AppSessionContext);

  const configHeader: MenuProps["items"] = [
    {
      label: (
        <Link
          onClick={() =>
            setonActionSmc({
              ...onActionSmc,
              onDefaultOpenKeys: ["1"],
              onDefaultSelectedKeys: [],
            })
          }
          href="/smc"
        >
          SMC
        </Link>
      ),
      key: "0",
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
    {
      type: "divider",
    },
    {
      label: <a onClick={() => signOut()}>Sign Out</a>,
      key: "2",
    },
  ];

  return (
    <Dropdown menu={{ items: configHeader }} trigger={["click"]} arrow>
      <Button size="middle" style={{ marginRight: "2vh" }}>
        <Space>
          {status === "authenticated" ? session.user?.name : ""}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default DropdownCommonComponent_Header;

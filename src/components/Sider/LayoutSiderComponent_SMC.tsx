import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Link from "next/link";
import { AppSessionContext } from "@/lib";

// const items: MenuProps["items"] =

const SiderCommonComponent_SMC: React.FC = () => {
  // const [collapsed, setCollapsed] = useState(true);

  const { onCollapse, setOnCollapse } = useContext(AppSessionContext);

  return (
    <Layout.Sider
      collapsible
      collapsed={onCollapse}
      onCollapse={(value) => {
        // console
        // console.log(onCollapse)
        // setCollapsed(value)
        setOnCollapse(value);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <VideoCameraOutlined />,
            label: <Link href="/smc">SMC</Link>,
          },
          {
            key: "2",
            icon: <UserOutlined />,
            label: <Link href="/user/profile">USER</Link>,
          },
        ]}
      />
    </Layout.Sider>
  );
};

export default SiderCommonComponent_SMC;

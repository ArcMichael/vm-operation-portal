import React from "react";
import { LayoutSMCComponent } from "@/components/Layout";
import { Descriptions } from "antd";
import { useSession } from "next-auth/react";

const Component: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <Descriptions title="User Profile" bordered layout="horizontal">
      <Descriptions.Item label="UserName">
        {status === "authenticated" ? session.user?.name : ""}
      </Descriptions.Item>
      <Descriptions.Item label="Expires">
        {status === "authenticated" ? session.expires : ""}
      </Descriptions.Item>

      {/* <Descriptions.Item label="Telephone">1810000000</Descriptions.Item> */}
      {/* <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item> */}
      {/* <Descriptions.Item label="Remark">empty</Descriptions.Item> */}
    </Descriptions>
  );
};

export default LayoutSMCComponent(Component);

import React from "react";
import { Descriptions } from "antd";
import { useSession } from "next-auth/react";
import LayoutSmc from "@/components/Layout/layout-smc";

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
      <Descriptions.Item label="accessToken">
        {session?.accessToken ? session.accessToken : ""}
      </Descriptions.Item>

      {/* <Descriptions.Item label="Telephone">1810000000</Descriptions.Item> */}
      {/* <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item> */}
      {/* <Descriptions.Item label="Remark">empty</Descriptions.Item> */}
    </Descriptions>
  );
};

export default LayoutSmc(Component);

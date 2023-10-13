import React from "react";
import { Layout, theme } from "antd";

const ContentCommon: React.FC<
  React.PropsWithChildren<{ children?: React.ReactNode }>
> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      {/* {pathSnippets} */}
      {children || "Default Text"}
    </Layout.Content>
  );
};

export default ContentCommon;

import React from "react";
import { Layout, theme } from "antd";
import ContentCommonComponent_Brandcrumb from "./ContentCommonComponent_Brandcrumb";

// interface ContentCommonComponentProps extends React.PropsWithChildren<{}> {
//   // add any other props here if needed
// }

const ContentCommonComponent: React.FC<
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

export default ContentCommonComponent;

export { ContentCommonComponent_Brandcrumb };

import React from "react";
import { Layout, theme } from "antd";
import * as Molecular from "../Molecular";

interface ContentCommonComponentProps
  extends React.PropsWithChildren<{
    Brandcrumb?: Boolean;
  }> {
  // add any other props here if needed
}

const ContentCommonComponent: React.FC<ContentCommonComponentProps> = ({
  children,
  Brandcrumb,
}) => {
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
      {Brandcrumb ? <Molecular.Brandcrumb /> : <></>}

      {/* {pathSnippets} */}
      {children || "Default Text"}
    </Layout.Content>
  );
};

export default ContentCommonComponent;

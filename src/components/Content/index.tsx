import React from "react";
import { Layout } from "antd";
import ContentCommonComponent_Brandcrumb from "./ContentCommonComponent_Brandcrumb";

interface ContentCommonComponentProps extends React.PropsWithChildren<{}> {
  // add any other props here if needed
}

const ContentCommonComponent: React.FC<ContentCommonComponentProps> = ({
  children,
}) => {
  return (
    <Layout.Content>
      {/* {pathSnippets} */}
      {children || "Default Text"}
    </Layout.Content>
  );
};

export default ContentCommonComponent;

export { ContentCommonComponent_Brandcrumb };

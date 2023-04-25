import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { useRouter } from "next/router";

interface ContentCommonComponentProps extends React.PropsWithChildren<{}> {
  // add any other props here if needed
}

const ContentCommonComponent: React.FC<ContentCommonComponentProps> = ({
  children,
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const BreadcrumbProps = [
    {
      title: "Home",
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: "An Application",
    },
  ];

  // https://ant.design/components/breadcrumb-cn

  const router = useRouter();

  const pathSnippets = router.asPath.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
    };
  });

  console.log(extraBreadcrumbItems);

  // console.log(pathSnippets)

  return (
    <Layout.Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      <Breadcrumb items={BreadcrumbProps} />
      {pathSnippets}
      {children || "Default Text"}
    </Layout.Content>
  );
};

export default ContentCommonComponent;

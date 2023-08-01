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

  // const TitleCase = (string: String) => {
  //   let newString = string.split(" ");
  //   for(let i = 0; i < newString.length; i++){
  //     newString[i] = newString[i].slice(0,1).toUpperCase + newString[i].slice(1).toLowerCase();
  //   }
  //   return newString.join(" ")
  // }

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

  /**
   * key: /gym/book/create
   * value: create
   */
  // const BreadcrumbProps2 = extraBreadcrumbItems.map(({key}) => {
  //   const _href = key
  //   const _value = key.split("/").slice(-1);
  //   return {
  //     title: <a href={_href}>{ _value || router.pathname }</a>
  //   }
  // })

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

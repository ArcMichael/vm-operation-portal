import { PureComponent } from "react";
import { Layout } from "antd";
import { SiderCommonComponent } from "../Sider";
import { ContentCommonComponent } from "../Content";
import { HeaderCommonComponent } from "../Header";
import { FooterCommonComponent } from "../Footer";

const LayoutCommonComponent = (Component: any) => {
  return class extends PureComponent {
    public static displayName = `LayoutCommonComponent(${
      Component.displayName || Component.name || "Component"
    })`;

    public render() {
      return (
        <Layout style={{ height: "100vh" }}>
          <SiderCommonComponent />
          <Layout>
            <HeaderCommonComponent />
            <ContentCommonComponent>
              <Component />
            </ContentCommonComponent>
            <FooterCommonComponent />
          </Layout>
        </Layout>
      );
    }
  };
};

export default LayoutCommonComponent;

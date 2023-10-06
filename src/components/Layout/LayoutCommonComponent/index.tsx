import { PureComponent } from "react";
import { Layout } from "antd";
import SiderCommonComponent from "@/components/Sider";
import { ContentCommonComponent_Brandcrumb } from "@/components/Content";
import { HeaderCommonComponent_Button } from "@/components/Header";
import { FooterCommonComponent } from "@/components/Footer";

const LayoutCommonComponent = (Comps: any) => {
  return class extends PureComponent {
    public static displayName = `LayoutCommonComponent(${
      Comps.displayName || Comps.name || "Component"
    })`;

    public render() {
      return (
        <Layout style={{ height: "100vh" }}>
          <SiderCommonComponent />
          <Layout>
            <HeaderCommonComponent_Button />
            <ContentCommonComponent_Brandcrumb Brandcrumb>
              <Comps />
            </ContentCommonComponent_Brandcrumb>
            <FooterCommonComponent />
          </Layout>
        </Layout>
      );
    }
  };
};

export default LayoutCommonComponent;

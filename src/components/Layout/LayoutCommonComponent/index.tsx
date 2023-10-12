import { PureComponent } from "react";
import { Layout } from "antd";
import { ContentCommonComponent_Brandcrumb } from "@/components/Content";
import { HeaderCommonComponent_GYM } from "@/components/Header";
import { FooterCommonComponent } from "@/components/Footer";
import { SiderCommonComponent_GYM } from "@/components/Sider";
import React from "react";

const LayoutCommonComponent = (Comps: any) => {
  return class extends PureComponent {
    public static displayName = `LayoutCommonComponent(${
      Comps.displayName || Comps.name || "Component"
    })`;

    public render() {
      return (
        <Layout style={{ height: "100vh" }}>
          <SiderCommonComponent_GYM />
          <Layout>
            <HeaderCommonComponent_GYM />
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

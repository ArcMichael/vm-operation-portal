import { PureComponent } from "react";
import { Layout, Row } from "antd";
import { HeaderCommonComponent_SMC } from "@/components/Header";
import ContentCommonComponent from "@/components/Content";
import { SiderCommonComponent_SMC } from "@/components/Sider";
import React from "react";

const LayoutJustifyComponent_SMC = (Comps: any) => {
  return class extends PureComponent {
    public static displayName = `LayoutJustifyComponent_SMC(${
      Comps.displayName || Comps.name || "Component"
    })`;

    public render() {
      return (
        <Layout style={{ minHeight: "100vh" }}>
          <HeaderCommonComponent_SMC />
          <Layout>
            <SiderCommonComponent_SMC />
            <ContentCommonComponent>
              <Row style={{ minHeight: "18vh" }} wrap>
                <Comps />
              </Row>
            </ContentCommonComponent>
          </Layout>
        </Layout>
      );
    }
  };
};

export default LayoutJustifyComponent_SMC;

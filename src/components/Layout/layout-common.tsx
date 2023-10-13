import { PureComponent } from "react";
import { Layout } from "antd";
import React from "react";
import SiderGym from "@/components/Sider/sider-gym";
import ContentBrandcrumb from "@/components/Content/content-brandcrumb";
import Footer from "@/components/Footer/footer";
import HeaderGym from "@/components/Header/header-gym";

const LayoutCommon = (Comps: any) => {
  return class extends PureComponent {
    public static displayName = `LayoutCommon(${
      Comps.displayName || Comps.name || "Component"
    })`;

    public render() {
      return (
        <Layout style={{ height: "100vh" }}>
          <SiderGym />
          <Layout>
            <HeaderGym />
            <ContentBrandcrumb Brandcrumb>
              <Comps />
            </ContentBrandcrumb>
            <Footer />
          </Layout>
        </Layout>
      );
    }
  };
};

export default LayoutCommon;
